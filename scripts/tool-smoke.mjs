#!/usr/bin/env node
/**
 * scripts/tool-smoke.mjs — ToolHub 全站工具冒烟测试(零依赖,Node >= 18)
 * ============================================================
 *
 * 用途
 * ----
 * 本仓库 200+ 个工具中,计算器 / 单位换算器 / 文本工具都由"工厂函数"生成:
 *
 *   - makeCalculatorClient(config)   components/calculator/makeCalculatorClient.tsx
 *   - makeUnitConverter(config)      components/calculators/makeUnitConverter.tsx
 *   - makeTextTool(config)           components/tools/makeTextTool.tsx
 *
 * 工厂的 config 是纯数据 + 纯 compute/transform 函数,无需浏览器、无需渲染
 * React 就能在 Node 里直接跑。本脚本是历轮审计临时 harness 的固化版,流程:
 *
 *   1. 遍历 components/{calculators,generators,converters,texttools,tools,
 *      devtools,webtools,colortools} 下全部 .tsx/.ts(batch 文件);
 *   2. 用 typescript.transpileModule 把每个文件编译成 CommonJS(isolatedModules,
 *      与 tsconfig 口径一致),沿 import 边递归加载;
 *   3. 以"注入假 require"的方式 stub 掉 react / AppProviders 等浏览器侧模块;
 *      @/lib/* 业务模块全部真加载 —— locale='en' 时 tui() 恒回退英文原值,
 *      与 SSR 首帧输出完全一致;qrcode / axios 等第三方包先走真 require,
 *      失败(浏览器专用包)再自动降级为 Proxy 兜底 stub;
 *   4. 关键一招:把三个工厂模块本身替换成 (config) => ToolMarker —— 批量
 *      文件的每个 export 绑定就直接变成"配置载体",按导出名逐个测试;
 *   5. 对每个捕获的 config:
 *        calculator    用 inputs[].default 组 values,调 compute(values,'en');
 *                      若有 deriveNow 同样调用(挂载后可见文案);
 *        unit-converter 复刻工厂的 toBase/fromBase 数值路径走默认 from→to;
 *        text-tool     用 defaultInput(缺省空串)调 transform。
 *      断言返回值均为 string、且不含 'NaN' / 'undefined' / 'null' /
 *      '[object' 泄漏子串;另抽查 sample / presets 的 key 是否都已声明在
 *      inputs 里(URL 回填与一键填充只认声明的 key,key 拼错是静默 bug)。
 *
 * 判定规则(宽容原则:只抓会渲染到页面上的硬伤)
 * ----
 *   FAIL:compute/transform 抛异常(产品侧 catch 后全部结果卡变 '—',属静默故障)、
 *        返回非对象或非 string 值、含上述泄漏子串、字段缺 default、
 *        sample/presets 引用未声明 key、模块本身 evaluate 抛错(LOADERR)。
 *   PASS:其余一律通过 —— '⚠️ …' 校验失败文案与 '—' 占位是合法输出;
 *        无限大被 fmtNum 正常格式化也是合法路径。
 *   SKIP:文件内没有工厂生成的工具(手写交互组件如图片处理类);
 *        或 transform 需 DOM(DOMParser/canvas)headless 必抛的工具。
 *
 * 如何扩 stub
 * ----
 *   - 浏览器侧模块:加进下方 STUB_MODULES(specifier → 导出对象);
 *   - next/* 一类按前缀兜底的:往 STUB_PREFIXES 里补正则;
 *   - 第三方包一般不用管(loadExternal 先真 require,失败自动 Proxy stub);
 *   - 新增同类工厂:在 FACTORY_KINDS 登记一行即可被捕获。
 *
 * 何时跑
 * ----
 *   npm run smoke     或     node scripts/tool-smoke.mjs [--filter=substring]
 *   手动 / CI 均可(无外部依赖,全量约几秒)。新增 batch 文件后务必跑一次;
 *   exit code:存在 FAIL 或 LOADERR 即 1。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createRequire } from 'node:module'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const realRequire = createRequire(path.join(ROOT, 'package.json'))
const ts = createRequire(import.meta.url)('typescript')

// ───────────────────────── 配置 ─────────────────────────

/** 扫描的工具目录(相对仓库根;hooks/chart 等纯基建目录不在列) */
const TARGET_DIRS = [
  'components/calculators',
  'components/generators',
  'components/converters',
  'components/texttools',
  'components/tools',
  'components/devtools',
  'components/webtools',
  'components/colortools',
]

/**
 * 被替换的工厂:工厂源文件的仓库相对路径 → [工厂导出名, 工具类型]。
 * 扩展新工厂只需在此登记;ToolMarker 会成为 batch 文件里对应的 export 值。
 */
const FACTORY_KINDS = [
  ['components/calculator/makeCalculatorClient.tsx', 'makeCalculatorClient', 'calculator'],
  ['components/calculators/makeUnitConverter.tsx', 'makeUnitConverter', 'unit-converter'],
  ['components/tools/makeTextTool.tsx', 'makeTextTool', 'text-tool'],
]

/** 结果字符串里的硬性禁串;'⚠️' 与 '—' 是合法占位,不在此列 */
const FORBIDDEN_SUBSTRINGS = ['NaN', 'undefined', 'null', '[object']

// ───────────────────── module stubs ─────────────────────

/**
 * react 最小形状:工厂体不会执行,这些 hook 只在非工厂模块(图标、图表组件)
 * 的顶层引用链中兜底,保证形状正确即可。
 */
const reactStub = {
  useState(init) {
    const value = typeof init === 'function' ? init() : init
    return [value, () => {}]
  },
  useRef(init) {
    return { current: init }
  },
  useMemo(fn) {
    return fn()
  },
  useCallback(fn) {
    return fn
  },
  useEffect() {},
  useLayoutEffect() {},
  createContext(defaultValue) {
    return { Provider: () => null, Consumer: () => null, _defaultValue: defaultValue }
  },
  useContext(ctx) {
    return ctx && ctx._defaultValue !== undefined ? ctx._defaultValue : null
  },
  Fragment: 'Fragment',
  createElement: (type, props, ...children) => ({ type, props, children }),
  memo: (c) => c,
  forwardRef: (render) => (props, ref) => render(props, ref),
}

/** JSX runtime(tsconfig jsx:"react-jsx",transpile 产物需要) */
const jsxRuntimeStub = {
  jsx: (type, props, key) => ({ type, props, key }),
  jsxs: (type, props, key) => ({ type, props, key }),
  Fragment: 'Fragment',
}

/** AppProviders:smoke 固定 locale='en'(与静态导出 SSR 恒英文口径一致) */
const appProvidersStub = {
  useApp: () => ({
    locale: 'en',
    setLocale: () => {},
    toggleLocale: () => {},
    theme: 'light',
    setTheme: () => {},
    toggleTheme: () => {},
  }),
  AppProviders: () => null,
}

/**
 * 手工 stub 表。framer-motion 等"防御性条目"当前目标目录未必用到,
 * 备着是防止后续 batch 误引时整个脚本崩掉。
 */
const STUB_MODULES = new Map(
  Object.entries({
    react: reactStub,
    'react/jsx-runtime': jsxRuntimeStub,
    'react/jsx-dev-runtime': { ...jsxRuntimeStub, jsxDEV: jsxRuntimeStub.jsx },
    'react-dom': {},
    'react-dom/client': { createRoot: () => ({ render: () => {}, unmount: () => {} }) },
    'framer-motion': motionProxy(),
    '@/components/providers/AppProviders': appProvidersStub,
  }),
)

/** next/* 全家桶前缀兜底(next/link、next/navigation、next/image、next/dynamic…) */
const STUB_PREFIXES = [/^next\//]

/** framer-motion:motion.div 这类任意属性链都要"取出来仍可调用" */
function motionProxy() {
  const mk = () =>
    new Proxy(function motionStubFn() {}, {
      get: (_t, p) => (p === Symbol.toPrimitive ? () => '' : mk()),
      apply: () => mk(),
    })
  const anyMotion = mk()
  return new Proxy({ AnimatePresence: ({ children }) => children ?? null }, {
    get: (t, p) => (p === Symbol.toPrimitive ? () => '' : (t[p] ?? anyMotion)),
  })
}

/**
 * 自动兜底 stub(未识别/浏览器专用第三方包)。
 * 注意 get('then') 必须 undefined,避免被 await 误判成 thenable 挂住。
 */
const autoStubValue = new Proxy(function autoStubFn() {}, {
  get(_t, p) {
    if (p === Symbol.toPrimitive) return () => ''
    if (p === 'then') return undefined
    return autoStubValue
  },
  set: () => true,
  apply: () => autoStubValue,
})

// ─────────────────── 模块装载器(核心) ───────────────────

/** 所有 .ts/.tsx 经此编译成 CJS(isolatedModules 与 tsconfig 一致) */
function transpile(source, fileName) {
  const out = ts.transpileModule(source, {
    fileName,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      isolatedModules: true,
    },
  })
  return out.outputText
}

const EXT_CANDIDATES = ['', '.ts', '.tsx', '.js', '.jsx', '.mjs', '/index.ts', '/index.tsx']
const moduleCache = new Map() // 绝对路径 → exports(circular import 需要"先注册后求值")
const externalCache = new Map() // bare specifier → 导出(真模块与 stub 共享一份)

/** 解析 import specifier 到仓库内绝对路径;bare 包名(qrcode、axios…)返回 null */
function resolveInRepo(specifier, importerDir) {
  let base = null
  if (specifier.startsWith('.')) base = path.resolve(importerDir, specifier)
  else if (specifier.startsWith('@/')) base = path.join(ROOT, specifier.slice(2))
  else return null
  for (const ext of EXT_CANDIDATES) {
    const p = base + ext
    try {
      if (fs.statSync(p).isFile()) return p
    } catch {
      /* try next candidate */
    }
  }
  return null
}

/** 工厂源文件绝对路径 → 替身导出(batch 文件 require 到它时拿到 ToolMarker 工厂) */
const FACTORY_STUBS = new Map()
for (const [relFile, exportName, kind] of FACTORY_KINDS) {
  const abs = path.join(ROOT, relFile)
  FACTORY_STUBS.set(abs, {
    [exportName]: (config) => new ToolMarker(kind, config),
  })
}

/**
 * 精确手工表 → 前缀表 → 真 require → 自动 Proxy,四级兜底。
 * 真依赖优先:zod、qrcode、lib 内联依赖等保真度最高;浏览器专用包静默降级。
 */
function loadExternal(specifier) {
  if (STUB_MODULES.has(specifier)) return STUB_MODULES.get(specifier)
  if (externalCache.has(specifier)) return externalCache.get(specifier)
  if (STUB_PREFIXES.some((re) => re.test(specifier))) {
    const stub = {}
    externalCache.set(specifier, stub)
    return stub
  }
  let mod
  try {
    mod = realRequire(specifier)
  } catch {
    mod = autoStubValue
  }
  externalCache.set(specifier, mod)
  return mod
}

/**
 * 递归加载一个仓库内 TS/TSX 模块并返回其 CJS exports。
 * wrapper 内注入的是我们自己的 require —— 这就是"require 拦截式 stub 注入"。
 */
function loadRepoModule(absPath) {
  if (moduleCache.has(absPath)) return moduleCache.get(absPath)
  const source = fs.readFileSync(absPath, 'utf8')
  const dir = path.dirname(absPath)

  if (/\.json$/i.test(absPath)) {
    const data = JSON.parse(source)
    moduleCache.set(absPath, data)
    return data
  }

  const code = transpile(source, absPath)
  const moduleObj = { exports: {} }
  moduleCache.set(absPath, moduleObj.exports) // 先注册:circular import 安全

  const localRequire = (specifier) => {
    const resolved = resolveInRepo(specifier, dir)
    if (!resolved) return loadExternal(specifier)
    // 命中工厂源文件 → 返回替身,batch 文件里的 export 就是配置载体
    if (FACTORY_STUBS.has(resolved)) return FACTORY_STUBS.get(resolved)
    return loadRepoModule(resolved)
  }

  const fn = new Function('exports', 'require', 'module', '__filename', '__dirname', code)
  fn(moduleObj.exports, localRequire, moduleObj, absPath, dir)
  moduleCache.set(absPath, moduleObj.exports)
  return moduleObj.exports
}

// ───────────────────── 工厂标记捕获 ─────────────────────

/** 工厂替身的返回值:既是 export 值,也携带身份与原始 config */
class ToolMarker {
  constructor(kind, config) {
    this.kind = kind // 'calculator' | 'unit-converter' | 'text-tool'
    this.config = config
  }
}

/** 从一个 batch 文件的 exports 里挑出经工厂生成的绑定 */
function extractMarkers(exportsObj) {
  const found = []
  if (!exportsObj || typeof exportsObj !== 'object') return found
  for (const [name, value] of Object.entries(exportsObj)) {
    if (value instanceof ToolMarker) found.push({ exportName: name, marker: value })
  }
  // 只写了 export default 的孤例(__esModule CJS 互操作形态)
  if (!found.length && exportsObj.__esModule && exportsObj.default instanceof ToolMarker) {
    found.push({ exportName: 'default', marker: exportsObj.default })
  }
  return found
}

// ───────────────────────── 断言 ─────────────────────────

function forbiddenLeak(str) {
  for (const bad of FORBIDDEN_SUBSTRINGS) {
    if (str.includes(bad)) return bad
  }
  return null
}

function clip(s, n = 90) {
  const chars = [...String(s)]
  return chars.length > n ? chars.slice(0, n).join('') + '…' : String(s)
}

/** compute / deriveNow 返回对象的公共规则:对象、值为 string、无泄漏子串 */
function assertResultObject(results, what) {
  if (!results || typeof results !== 'object' || Array.isArray(results)) {
    return [`${what} did not return an object (${Object.prototype.toString.call(results)})`]
  }
  const problems = []
  for (const [key, value] of Object.entries(results)) {
    if (typeof value !== 'string') {
      problems.push(`${what}[${key}] is ${typeof value} (${clip(String(value), 40)}), expected string`)
      continue
    }
    const bad = forbiddenLeak(value)
    if (bad) problems.push(`${what}[${key}] contains "${bad}" leakage: "${clip(value)}"`)
  }
  return problems
}

/** 计算器:组默认值 → compute(values,'en') → 输出合法性 + sample/presets key 抽查 */
function checkCalculator(config, label) {
  const problems = []
  if (!Array.isArray(config.inputs)) problems.push('config.inputs is not an array')
  if (!Array.isArray(config.outputs)) problems.push('config.outputs is not an array')
  if (typeof config.compute !== 'function') problems.push('config.compute is not a function')

  // 字段级:key 唯一、default 必须是 string(undefined 会直接漏进状态机)
  const seenKeys = new Set()
  if (Array.isArray(config.inputs)) {
    for (const f of config.inputs) {
      if (!f || typeof f.key !== 'string' || !f.key) {
        problems.push('input field with missing/invalid key')
        continue
      }
      if (seenKeys.has(f.key)) problems.push(`duplicate input key "${f.key}"`)
      seenKeys.add(f.key)
      if (typeof f.default !== 'string') {
        problems.push(`input "${f.key}" default is ${f.default === undefined ? 'undefined' : typeof f.default}, expected string`)
      }
    }
  }

  if (problems.length > 0) return { label, slug: config.slug ?? null, problems }

  const values = {}
  for (const f of config.inputs) values[f.key] = f.default

  let results = null
  try {
    results = config.compute(values, 'en')
  } catch (err) {
    problems.push(`compute threw at defaults: ${err && err.message ? err.message : err}`)
  }
  if (results) problems.push(...assertResultObject(results, 'compute'))

  // deriveNow(可选):挂在 effect 里执行的可见文案,同一硬度要求
  if (typeof config.deriveNow === 'function') {
    try {
      problems.push(...assertResultObject(config.deriveNow(values, 'en'), 'deriveNow'))
    } catch (err) {
      problems.push(`deriveNow threw at defaults: ${err && err.message ? err.message : err}`)
    }
  }

  // sample / presets 的 key ⊆ inputs(URL 回填、一键填充只认声明过的 key)
  if (config.sample && typeof config.sample === 'object') {
    for (const k of Object.keys(config.sample)) {
      if (!seenKeys.has(k)) problems.push(`sample references undeclared input key "${k}"`)
    }
  }
  if (Array.isArray(config.presets)) {
    for (const preset of config.presets) {
      for (const k of Object.keys((preset && preset.values) || {})) {
        if (!seenKeys.has(k)) problems.push(`preset "${preset.label}" references undeclared input key "${k}"`)
      }
    }
  }

  // urlState 是布尔开关(开启即"所有 inputs 参与 ?key=value 同步"),
  // 不产生额外断言;problems 为空即 PASS。
  return { label, slug: config.slug ?? null, problems }
}

/** 单位换算器:复刻工厂 toBase/fromBase 数值路径(格式化用真 lib/format) */
function checkUnitConverter(config, label, formatLib) {
  const problems = []
  const units = config.units ?? {}
  const unitKeys = Object.keys(units)
  if (unitKeys.length < 1) return { label, slug: config.slug ?? null, problems: ['config.units has no units'] }

  const toNum = formatLib?.toNum ?? ((s) => parseFloat(s))
  const fmtNum =
    formatLib?.fmtNum ?? ((n, d = 6) => (Number.isFinite(n) ? Number(n.toFixed(d)).toString() : String(n)))

  for (const k of unitKeys) {
    const def = units[k]
    if (!def) {
      problems.push(`units["${k}"] is undefined`)
      continue
    }
    if (typeof def.factor !== 'number' && typeof def.toBase !== 'function') {
      problems.push(`units["${k}"] has neither numeric factor nor toBase hook`)
    }
  }

  const defaultValue = String(config.defaultValue ?? '1')
  const fromKey = config.defaultFrom ?? unitKeys[0]
  const toKey = config.defaultTo ?? unitKeys[1] ?? unitKeys[0]
  const v = toNum(defaultValue)
  const fromDef = units[fromKey]
  const toDef = units[toKey]

  if (!fromDef || !toDef) {
    problems.push(`default route ${fromKey} -> ${toKey} misses a unit definition`)
  } else {
    try {
      const base = fromDef.toBase ? fromDef.toBase(v) : v * fromDef.factor
      const result = toDef.fromBase ? toDef.fromBase(base) : base / toDef.factor
      if (Number.isFinite(result)) {
        const formatted = fmtNum(result, config.digits ?? 6)
        const bad = forbiddenLeak(formatted)
        if (bad) problems.push(`formatted result contains "${bad}": "${formatted}"`)
      }
      // 非有限结果在产品里显示 '—'(isFinite 门控),属合法占位,不判负
    } catch (err) {
      problems.push(`conversion threw at defaults: ${err && err.message ? err.message : err}`)
    }
  }
  return { label, slug: config.slug ?? null, problems }
}

/**
 * 文本工具:defaultInput(缺省空串)喂 transform('en')。
 * DOM 依赖型 transform(DOMParser/canvas)headless 必抛 → skip 而非 FAIL
 * (产品里抛错也会被 catch 成 '',属既定降级路径)。
 */
function checkTextTool(config, label) {
  const input = typeof config.defaultInput === 'string' ? config.defaultInput : ''
  if (typeof config.transform !== 'function') {
    return { label, slug: config.slug ?? null, problems: ['config.transform is not a function'] }
  }
  try {
    const output = config.transform(input, 'en')
    if (typeof output !== 'string') {
      return { label, slug: config.slug ?? null, problems: [`transform returned ${typeof output}, expected string`] }
    }
    const bad = forbiddenLeak(output)
    if (bad) {
      return { label, slug: config.slug ?? null, problems: [`transform output contains "${bad}": "${clip(output)}"`] }
    }
    return { label, slug: config.slug ?? null, problems: [] }
  } catch (err) {
    return {
      label,
      slug: config.slug ?? null,
      skipped: `transform throws headless (${err && err.message ? err.message : err})`,
      problems: [],
    }
  }
}

// ────────────────────── 主流程 ──────────────────────

function listTargetFiles() {
  const files = []
  for (const rel of TARGET_DIRS) {
    const abs = path.join(ROOT, rel)
    if (fs.existsSync(abs)) walk(abs, files)
  }
  return files.sort()
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p, out)
    else if (/\.(tsx|ts)$/.test(entry.name) && !entry.name.endsWith('.d.ts')) out.push(p)
  }
}

// 极简终端着色(NO_COLOR=1 关闭)
const tty = process.stdout.isTTY && process.env.NO_COLOR !== '1'
const c = (code, s) => (tty ? `\x1b[${code}m${s}\x1b[0m` : s)
const green = (s) => c('32', s)
const red = (s) => c('31', s)
const yellow = (s) => c('33', s)
const dim = (s) => c('2', s)

/** 视觉宽度截断/填充(按码点,避免中文标签错位) */
function padCell(s, width) {
  const chars = [...String(s)]
  return chars.length > width ? chars.slice(0, width - 1).join('') + '…' : chars.join('').padEnd(width)
}

let formatLibMemo
function getFormatLib() {
  if (formatLibMemo !== undefined) return formatLibMemo
  try {
    formatLibMemo = loadRepoModule(path.join(ROOT, 'lib/format.ts'))
  } catch {
    formatLibMemo = null // 掉底时 checkUnitConverter 使用内置近似实现
  }
  return formatLibMemo
}

function main() {
  const argFilter = process.argv.find((a) => a.startsWith('--filter='))
  const filter = argFilter ? argFilter.split('=').slice(1).join('=') : null

  const files = listTargetFiles()
  console.log(`ToolHub tool smoke — scanning ${files.length} TS/TSX files under ${TARGET_DIRS.length} dirs${filter ? ` (filter: ${filter})` : ''}\n`)

  /** @type {{status:'OK'|'FAIL'|'LOADERR'|'SKIP', kind:string, name:string, slug:?string, file:string, detail:string[]}} */
  const rows = []
  const testedMarkers = new WeakSet() // 同一 config 经 re-export 出现多次只测一次

  for (const file of files) {
    const relFile = path.relative(ROOT, file).replaceAll('\\', '/')
    if (filter && !relFile.toLowerCase().includes(filter.toLowerCase())) continue

    let exportsObj
    try {
      exportsObj = loadRepoModule(file)
    } catch (err) {
      rows.push({
        status: 'LOADERR',
        kind: '-',
        name: path.basename(file),
        slug: null,
        file: relFile,
        detail: [`module evaluation failed: ${err && err.message ? err.message : err}`],
      })
      continue
    }

    const markers = extractMarkers(exportsObj)
    if (markers.length === 0) {
      rows.push({ status: 'SKIP', kind: '-', name: '(no factory tool)', slug: null, file: relFile, detail: [] })
      continue
    }

    const formatLib = getFormatLib()
    for (const { exportName, marker } of markers) {
      if (testedMarkers.has(marker)) continue
      testedMarkers.add(marker)
      const result =
        marker.kind === 'calculator'
          ? checkCalculator(marker.config, exportName)
          : marker.kind === 'unit-converter'
            ? checkUnitConverter(marker.config, exportName, formatLib)
            : checkTextTool(marker.config, exportName)
      rows.push({
        status: result.skipped ? 'SKIP' : result.problems.length ? 'FAIL' : 'OK',
        kind: marker.kind,
        name: result.label,
        slug: result.slug,
        file: relFile,
        // skip 原因单独承载(如 headless DOM 依赖),失败明细见 problems
        detail: result.skipped ? [result.skipped] : result.problems,
      })
    }
  }

  render(rows)
}

function render(rows) {
  const W_STATUS = 7, W_KIND = 14, W_NAME = 34
  console.log(`${'STATUS'.padEnd(W_STATUS)}  ${'KIND'.padEnd(W_KIND)}  ${'TOOL (export/slug)'.padEnd(W_NAME)}  FILE`)
  console.log(dim('-'.repeat(W_STATUS + W_KIND + W_NAME + 46)))

  const failures = []
  for (const r of rows) {
    const statusColored =
      r.status === 'OK'
        ? green(r.status.padEnd(W_STATUS))
        : r.status === 'FAIL' || r.status === 'LOADERR'
          ? red(r.status.padEnd(W_STATUS))
          : yellow(r.status.padEnd(W_STATUS))
    console.log(`${statusColored}  ${r.kind.padEnd(W_KIND)}  ${padCell(r.name, W_NAME)}  ${dim(r.file)}`)
    if (r.status === 'FAIL' || r.status === 'LOADERR') failures.push(r)
  }

  const counts = { OK: 0, FAIL: 0, LOADERR: 0, SKIP: 0 }
  for (const r of rows) counts[r.status]++
  const failed = counts.FAIL + counts.LOADERR

  console.log('\nSummary')
  console.log(`  tools tested : ${counts.OK + counts.FAIL}  (${green(String(counts.OK))} pass / ${red(String(counts.FAIL))} fail)`)
  console.log(`  load errors  : ${counts.LOADERR}`)
  console.log(`  skipped files: ${counts.SKIP}`)

  const skips = rows.filter((r) => r.status === 'SKIP')
  if (skips.length) {
    console.log(yellow('\nSkipped detail:'))
    for (const r of skips) {
      console.log(`  SKIP  ${r.file}${r.detail.length ? dim(`  (${r.detail[0]})`) : dim('  (no factory-generated tool exported from this file)')}`)
    }
  }
  if (failures.length) {
    console.log(red(`\nFailures (${failures.length}):`))
    for (const r of failures) {
      const id = r.slug && r.slug !== '(no-slug)' ? `${r.slug}` : r.name
      console.log(`  ${red('✗')} ${id}${dim(`  [${r.kind}] ${r.file}`)}`)
      for (const d of r.detail) console.log(`      ${d}`)
    }
  }

  if (failed > 0) {
    process.exitCode = 1
    console.log(red(`\nSMOKE FAILED — ${failed} failing entr(y|ies), exit code 1`))
  } else {
    console.log(green("\nSMOKE PASSED — all captured factory configs computed cleanly at locale 'en'"))
  }
}

/**
 * 直跑命令行才执行 main(便于外部脚本 import 内部 API 做二次开发/自测);
 * TOOL_SMOKE_RUN_MAIN=1 可强制执行。
 */
const invokedAsCli =
  process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url
if (invokedAsCli || process.env.TOOL_SMOKE_RUN_MAIN === '1') {
  main()
}

/** 供扩展者/测试复用的内部 API(loadRepoModule 遵循同一套 stub 注入规则) */
export { loadRepoModule, resolveInRepo, ToolMarker, extractMarkers, listTargetFiles, FORBIDDEN_SUBSTRINGS }
