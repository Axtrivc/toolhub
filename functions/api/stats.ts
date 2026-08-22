/**
 * 站内访客统计 API —— Cloudflare Pages Functions + D1
 *
 * 与静态导出(out/)同仓部署:functions/ 目录会被 Cloudflare Pages 自动
 * 识别为 Functions,推送即上线,无需额外服务(免费额度:D1 每天 500 万读
 * + 10 万写,对本站流量绰绰有余)。本地 next dev / 其它静态托管没有
 * 此端点,前台 SiteStats 组件请求失败会自动隐藏,不影响任何页面。
 *
 * 端点:/api/stats
 *  - POST {path, vid}  记录一次访问(PV),返回最新计数
 *  - GET               只读计数(供调试/未来扩展)
 *
 * 数据模型(首次请求自动建表,幂等):
 *  - counters: k='total' 的累计 PV。单独存而不是 COUNT(visits),
 *    因为 visits 按 180 天滚动清理,"总访问"必须只增不减。
 *  - visits: 每次访问一行(day/path/vid/ts),支撑"今日 PV / 今日 UV /
 *    按工具统计"等聚合;UV 依赖 vid 去重。
 *
 * 隐私:vid 是客户端生成的随机 ID 与 UTC 日期拼接后的哈希(见
 * SiteStats.tsx),服务端只能按"天"去重,无法跨天关联同一访客,
 * 不构成个人信息;path 只存站内路径。与隐私政策"aggregate,
 * anonymized usage metrics"一致。
 *
 * 计数口径:
 *  - "今日"按 UTC 日切分(服务器侧统一口径,避免访客时区交叉双计)。
 *  - 同一 vid 2 秒内的重复上报只记一次(防连点/StrictMode 双跑刷数)。
 */

// ── 最小 D1/Pages 类型(不引入 @cloudflare/workers-types,保持零依赖) ──
interface D1Result<T = unknown> {
  results: T[]
  success: boolean
}
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  first<T = unknown>(col?: string): Promise<T | null>
  all<T = unknown>(): Promise<D1Result<T>>
  run(): Promise<D1Result>
}
interface D1Database {
  prepare(query: string): D1PreparedStatement
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>
}
interface StatsEnv {
  /** D1 绑定名固定 DB;未绑定(本地/其它托管)时端点返回 503,前台隐藏 */
  DB?: D1Database
}
interface StatsContext {
  request: Request
  env: StatsEnv
}
type StatsFunction = (context: StatsContext) => Promise<Response>

/** 模块级(每个 Worker isolate 一次)建表标记,避免每请求都跑 DDL */
let schemaReady = false

async function ensureSchema(db: D1Database): Promise<void> {
  if (schemaReady) return
  // 不用 db.exec():它按行切分多行语句会截断 DDL;逐条单行执行最稳。
  // DDL 均带 IF NOT EXISTS,幂等,可安全重跑。
  await db
    .prepare('CREATE TABLE IF NOT EXISTS counters (k TEXT PRIMARY KEY, v INTEGER NOT NULL)')
    .run()
  await db
    .prepare(
      'CREATE TABLE IF NOT EXISTS visits (id INTEGER PRIMARY KEY AUTOINCREMENT, day TEXT NOT NULL, path TEXT NOT NULL, vid TEXT NOT NULL, ts INTEGER NOT NULL)',
    )
    .run()
  await db.prepare('CREATE INDEX IF NOT EXISTS idx_visits_day ON visits(day)').run()
  await db.prepare('CREATE INDEX IF NOT EXISTS idx_visits_vid_ts ON visits(vid, ts)').run()
  schemaReady = true
}

/** UTC 当日,形如 2026-08-22 */
function today(): string {
  return new Date().toISOString().slice(0, 10)
}

/** 统一 JSON 响应(前台组件依赖 res.ok 判断,不能返回 HTML 错误页) */
function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

/** 读取累计 PV + 今日 PV/UV */
async function readCounts(db: D1Database): Promise<{
  total: number
  today: number
  visitors: number
}> {
  const day = today()
  const [totalRow, dayRow] = await Promise.all([
    db.prepare(`SELECT v FROM counters WHERE k = 'total'`).first<number>('v'),
    db
      .prepare('SELECT COUNT(*) AS pv, COUNT(DISTINCT vid) AS uv FROM visits WHERE day = ?')
      .bind(day)
      .first<{ pv: number; uv: number }>(),
  ])
  return {
    total: totalRow ?? 0,
    today: dayRow?.pv ?? 0,
    visitors: dayRow?.uv ?? 0,
  }
}

export const onRequestGet: StatsFunction = async ({ env }) => {
  if (!env.DB) return json({ error: 'D1 binding "DB" not configured' }, 503)
  try {
    await ensureSchema(env.DB)
    return json(await readCounts(env.DB))
  } catch (err) {
    return json({ error: String(err) }, 500)
  }
}

export const onRequestPost: StatsFunction = async ({ request, env }) => {
  if (!env.DB) return json({ error: 'D1 binding "DB" not configured' }, 503)
  const db = env.DB
  try {
    await ensureSchema(db)

    // 解析并清洗入参:path 必须是站内路径且截断;vid 仅允许哈希字符
    let body: { path?: unknown; vid?: unknown } = {}
    try {
      body = (await request.json()) as typeof body
    } catch {
      // 空/非法 body 仍计数(路径记为首页口径),保证计数不因客户端异常丢失
    }
    const rawPath = typeof body.path === 'string' ? body.path : '/'
    const path = (rawPath.startsWith('/') ? rawPath : `/${rawPath}`).slice(0, 200)
    const vid =
      typeof body.vid === 'string' && /^[a-z0-9]{8,64}$/i.test(body.vid) ? body.vid : 'anon'

    const now = Date.now()
    const day = today()

    // 同一 vid 2 秒内重复上报不重复计数(刷新连点/React StrictMode 双跑)
    const recent = await db
      .prepare('SELECT 1 FROM visits WHERE vid = ?1 AND ts > ?2 LIMIT 1')
      .bind(vid, now - 2000)
      .first<number>()

    if (!recent) {
      // batch 是事务:计数器自增与访问明细要么都成功要么都不落
      await db.batch([
        db.prepare(
          `INSERT INTO counters (k, v) VALUES ('total', 1)
           ON CONFLICT(k) DO UPDATE SET v = v + 1`,
        ),
        db.prepare('INSERT INTO visits (day, path, vid, ts) VALUES (?1, ?2, ?3, ?4)').bind(
          day,
          path,
          vid,
          now,
        ),
      ])

      // 滚动清理:约 2% 请求顺带删除 180 天前的明细(总访问在 counters,不受影响)
      if (Math.random() < 0.02) {
        await db
          .prepare(`DELETE FROM visits WHERE day < date('now', '-180 days')`)
          .run()
          .catch(() => {})
      }
    }

    return json(await readCounts(db))
  } catch (err) {
    return json({ error: String(err) }, 500)
  }
}
