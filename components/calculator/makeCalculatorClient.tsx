'use client'

import { useState, useMemo, useCallback, useEffect, useRef, type ComponentType } from 'react'
import Link from 'next/link'
import { CalculatorField, CalculatorSliderField, ResultCard, CalculatorNote } from './CalculatorField'
import { SegmentedControl } from './SegmentedControl'
import { BreakdownChart } from './BreakdownChart'
import { GaugeChart } from '../charts/GaugeChart'
import { LineAreaChart } from '../charts/LineAreaChart'
import { StackedCompareChart } from '../charts/StackedCompareChart'
import { ShapeFigure } from '../charts/ShapeFigure'
import { ResultActions } from '../ResultActions'
import { LoadSampleButton } from '../LoadSampleButton'
import { ShareResultButton } from '../calculator/ShareResultButton'
import { PresetChips } from '../calculator/PresetChips'
import type { CalculatorConfig } from '@/lib/calculator-types'
import { getCalculatorSample } from '@/lib/tool-samples'
import { getNextToolsLite } from '@/lib/related-tools'
import { getToolIcon } from '@/lib/tool-icons'
import { SmartIcon } from '@/components/SmartIcon'
import { useApp } from '@/components/providers/AppProviders'
import { t, getToolName } from '@/lib/i18n'
import { tui, tuiCalc } from '@/lib/i18n/tool-l10n'

/**
 * makeCalculatorClient 通用 UI key(跨工具共享,译一次在 COMMON_CALC_UI)。
 * 命中 → 走 tuiCalc(共享表);其余特有 key(in / out / opt / note / chart /
 * slice 等)走 tui(slug, ...)(每工具 bundle 自带)。
 */
const COMMON_CALC_KEYS = new Set([
  'summaryTitle', 'inputsLabel', 'resultsLabel', 'copySummary',
  'csvField', 'csvType', 'csvValue', 'csvInput', 'csvResult', 'inputs', 'chartEmpty',
  // Scenario A/B 对比模式(allowCompare)的共享 UI 串
  'compareAdd', 'compareExit', 'compareSync', 'scenarioA', 'scenarioB', 'deltaCol',
])

/**
 * 把 compute 返回的格式化字符串(如 "$83.29"、"1,234.50")解析回数字,
 * 供 chart 用。剥离 $ % 和千分位逗号;无法解析时返回 0(该分量不显示)。
 */
function parseNumeric(formatted: string | undefined): number {
  if (!formatted) return 0
  // 先剥离货币/百分号/空白(含 zh 的 "US$1,280,000" 前缀),否则 "-$20.00"
  // 的负号因 $ 阻隔匹配不到数字,负值会被当正值画进图表
  const cleaned = formatted.replace(/[$€£¥%\s]/g, '')
  // 提取首个数字 token(容忍 "⚠️ 135.0 — impossible" 这类带前后缀的串,
  // 比 parseFloat(整体清洗)更稳:前缀非数字字符不再导致 NaN→0)
  const m = cleaned.match(/-?\d[\d,]*(?:\.\d+)?/)
  if (!m) return 0
  const n = parseFloat(m[0].replace(/,/g, ''))
  return Number.isFinite(n) ? n : 0
}

/** CSV 字段转义:含逗号/引号/换行则用双引号包裹,内部引号翻倍 */
function csvEscape(s: string): string {
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

/**
 * 单条折线进入 LineAreaChart 的点数上限。640×240 的 viewBox 下肉眼分辨率
 * 远低于此;average-calculator 这类把数千数字全量塞进 path 的工具只拖慢
 * SVG 构建/描线动画而不增加信息量,超过即抽稀(见 thinSeriesIndices)。
 */
const SERIES_MAX_POINTS = 500

/**
 * series 点数抽稀(等距窗口 + 每窗取「绝对值最大点」= min-max 抽稀的简化版,
 * 相比完整 LTTB 免去三角形面积计算且实现确定性):
 * - 内部区间 [1, n-2] 均分成 SERIES_MAX_POINTS-1 个等宽窗口(下取整分段保证
 *   n>上限时每窗必非空),每窗口产出 1 个代表点;
 * - 代表点取「跨所有曲线」该窗口内绝对值最大的位置——尖峰不会被抹平;
 *   同分取最靠前索引,输出确定性(SSR/客户端一致);
 * - 首尾点强制保留 ⇒ 输出恒为 SERIES_MAX_POINTS+1 点(n>上限时)。
 * 所有曲线与 xLabels 共用同一份索引集,tooltip/crosshair 对位不漂移。
 * 返回 null 表示无需抽稀(n ≤ 上限,零改动路径)。
 */
function thinSeriesIndices(n: number, allPoints: number[][]): number[] | null {
  if (!Number.isFinite(n) || n <= SERIES_MAX_POINTS || n < 3) return null
  const buckets = SERIES_MAX_POINTS - 1
  const interiorLen = n - 2
  const idx: number[] = [0]
  for (let b = 0; b < buckets && b < interiorLen; b++) {
    const lo = 1 + Math.floor((b * interiorLen) / buckets)
    const hi = 1 + Math.floor(((b + 1) * interiorLen) / buckets)
    if (lo >= hi) continue // 空窗跳过(interiorLen < buckets 的兜底,常规路径不可达)
    let best = lo
    let bestAbs = -1
    for (let j = lo; j < hi; j++) {
      for (const arr of allPoints) {
        const v = j < arr.length ? Math.abs(arr[j]) : -1
        if (v > bestAbs) { bestAbs = v; best = j }
      }
    }
    idx.push(best)
  }
  idx.push(n - 1)
  return idx
}

/**
 * 结果区「下一步」胶囊条 —— 工作流连续推荐(单会话 PV 拉升)。
 *
 * 算完即走是工具站的核心流失点:结果出来后给 2 条强关联工具胶囊
 * (如 算完房贷月供 → 摊销表生成器),把单点工具延伸为连贯工作流。
 * 数据来自 lib/related-tools.ts 轻量索引(显式 nextTools 优先,
 * 否则同分类前 2 款),与 RelatedTools 同源、零注册表开销。
 */
function NextStepsBar({ slug }: { slug: string }) {
  const { locale } = useApp()
  const next = getNextToolsLite(slug)
  if (next.length === 0) return null
  return (
    <div
      className="rounded-xl border p-4"
      style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}
    >
      <div
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide"
        style={{ color: 'rgb(var(--text-subtle))' }}
      >
        <span aria-hidden="true">→</span>
        {t(locale, 'nextStepsTitle')}
      </div>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {next.map((nt) => (
          <Link
            key={nt.slug}
            href={`/tools/${nt.slug}/`}
            title={`${nt.name} — ${nt.shortIntro}`}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text-muted))',
            }}
          >
            <SmartIcon icon={getToolIcon(nt)} className="h-4 w-4 shrink-0" />
            <span className="truncate">{getToolName(locale, nt.slug, nt.name)}</span>
            <span aria-hidden="true" style={{ color: 'rgb(var(--text-faint))' }}>→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

/**
 * 计算器工厂:把一个 CalculatorConfig 渲染成可交互的 React 组件
 *
 * 用法:
 *   export const TipCalculatorClient = makeCalculatorClient({
 *     inputs: [...],
 *     outputs: [...],
 *     compute: (v) => ({ result: ... }),
 *   })
 *
 * 这样新增一个计算器只需写配置 + compute 函数,无需重复写 UI 代码。
 *
 * 本地化:当 config.slug 已注册本地化 bundle 时,所有可见串(label /
 * suffix / note / chart / 表头 / summary / CSV)经 tui() 取本地化值;
 * 未注册或 locale==='en' 时回退英文原值(config 里的字符串 / 字面量),
 * 保证 SSR/预渲染恒英文、SEO 不变。
 */
export function makeCalculatorClient(config: CalculatorConfig): ComponentType {
  function GeneratedCalculator() {
    const { locale } = useApp()
    // slug 未设 → tui 返回 fallback(英文原值),行为与改造前一致。
    const slug = config.slug ?? ''
    const L = (key: string, fb: string) =>
      COMMON_CALC_KEYS.has(key) ? tuiCalc(key, locale, fb) : tui(slug, locale, key, fb)

    // 输入/输出标签的本地化解析器
    const inLabel = (key: string, fb: string) => L(`in.${key}`, fb)
    const inSuffix = (key: string, fb: string) => L(`inSuffix.${key}`, fb)
    const outLabel = (key: string, fb: string) => L(`out.${key}`, fb)
    const outSub = (key: string, fb: string) => L(`outSub.${key}`, fb)

    // 初始化输入为各字段的默认值;开启 urlState 的工具挂载后由 syncUrl 读回真实值
    const [values, setValues] = useState<Record<string, string>>(() => {
      const init: Record<string, string> = {}
      for (const f of config.inputs) init[f.key] = f.default
      return init
    })

    // URL 状态同步(config.urlState):挂载时从 ?key=value 恢复输入;
    // 之后每次变化 replaceState 写回(默认值的字段从 URL 移除,保持链接干净)。
    // 与 useUrlState 相同的 hydration 策略:首帧恒为 default,不产生 mismatch。
    const urlHydrated = useRef(false)
    useEffect(() => {
      if (!config.urlState || typeof window === 'undefined') return
      if (!urlHydrated.current) {
        urlHydrated.current = true
        const params = new URLSearchParams(window.location.search)
        setValues((prev) => {
          const next = { ...prev }
          let touched = false
          for (const f of config.inputs) {
            const fromUrl = params.get(f.key)
            if (fromUrl != null) {
              next[f.key] = fromUrl
              touched = true
            }
          }
          return touched ? next : prev
        })
        return
      }
      const url = new URL(window.location.href)
      for (const f of config.inputs) {
        const v = valuesRef.current[f.key] ?? ''
        if (v === '' || v === f.default) url.searchParams.delete(f.key)
        else url.searchParams.set(f.key, v)
      }
      window.history.replaceState({}, '', url.toString())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, config.urlState])

    // values 的镜像 ref:urlState effect 依赖 values 但读取镜像,避免闭包过期
    const valuesRef = useRef(values)
    valuesRef.current = values

    // ── 多方案同屏对比(config.allowCompare)──
    // 激活时克隆当前输入为 Scenario B;两套输入各自独立计算,
    // 结果区切换为 A/B 并排对比表 + 主结果 Delta 差额徽章。
    const [compareOn, setCompareOn] = useState(false)
    const [bValues, setBValues] = useState<Record<string, string>>({})
    const setBValue = (key: string, v: string) =>
      setBValues((prev) => ({ ...prev, [key]: v }))
    // B 首次激活时置为 A 的克隆;再次激活(退出后又开)重新克隆当前 A
    const activateCompare = () => {
      setBValues({ ...values })
      setCompareOn(true)
    }
    const bResults = useMemo(() => {
      if (!compareOn) return null
      try {
        return config.compute(bValues, locale)
      } catch {
        return {}
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [compareOn, bValues, locale])

    /**
     * A/B 两个已格式化结果串的差额:B − A。
     * 复用 parseNumeric 剥离货币/千分位;无法解析(⚠️/—/空)返回 null。
     * 返回 { text, better } —— text 带正负号与原串同款货币符号/百分号;
     * better: 'b'(更低,绿色)/ 'a'(更高,红色)/ null(持平,不显示)。
     */
    const deltaOf = (aStr: string | undefined, bStr: string | undefined) => {
      if (!aStr || !bStr) return null
      if (aStr.startsWith('⚠️') || bStr.startsWith('⚠️')) return null
      if (aStr === '—' || bStr === '—') return null
      const a = parseNumeric(aStr)
      const b = parseNumeric(bStr)
      if (!Number.isFinite(a) || !Number.isFinite(b)) return null
      const d = b - a
      if (Math.abs(d) < 1e-9) return null
      // 小数位:跟原串里最长的小数位走(金额 2 位、整数串 0 位)
      const dec = Math.max(
        ...[aStr, bStr].map((s) => {
          const m = s.match(/(\d+(?:\.\d+)?)/g)
          const frac = m ? Math.max(...m.map((t) => (t.split('.')[1] ?? '').length)) : 0
          return frac
        }),
        0,
      )
      const money = aStr.includes('$') || bStr.includes('$')
      const pct = aStr.includes('%') || bStr.includes('%')
      const abs = Math.abs(d).toLocaleString('en-US', {
        minimumFractionDigits: Math.min(dec, 2),
        maximumFractionDigits: Math.min(dec, 2),
      })
      return {
        text: `${d < 0 ? '−' : '+'}${money ? '$' : ''}${abs}${pct ? '%' : ''}`,
        better: d < 0 ? 'b' : 'a',
      }
    }

    // 用户是否编辑过任何字段(pristine 门控):决定 Load Sample 的行为与 Reset 是否显示
    const [dirty, setDirty] = useState(false)
    const setValue = (key: string, v: string) => {
      setDirty(true)
      setValues((prev) => ({ ...prev, [key]: v }))
    }

    // 一键重置回出厂默认值(全站此前无任何清空入口,只能逐字段手删);
    // 同时解除 Load Sample 的覆盖确认态,避免残留的红色"覆盖?"按钮
    const handleReset = useCallback(() => {
      const init: Record<string, string> = {}
      for (const f of config.inputs) init[f.key] = f.default
      setValues(init)
      setDirty(false)
      setSampleArmed(false)
    }, [config.inputs])

    const results = useMemo(() => {
      try {
        return config.compute(values, locale)
      } catch {
        return {}
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, locale])

    // 依赖"当前时间"的派生结果(如 PregnancyDueDate 的 Current week):
    // 仅挂载后在 effect 里计算并覆盖合并,SSR/首帧保持 compute 的 '—' 占位,
    // 避免构建期与访问期 now 不同导致的水合不一致。
    const [nowDerived, setNowDerived] = useState<Record<string, string>>({})
    useEffect(() => {
      if (!config.deriveNow) return
      try {
        setNowDerived(config.deriveNow(values, locale))
      } catch {
        setNowDerived({})
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, locale])
    const mergedResults = useMemo(
      () => ({ ...results, ...nowDerived }),
      [results, nowDerived],
    )

    // series/compare 派生数据 memo:值/语言未变时不重跑(如 360 期摊销全表),
    // 且引用稳定让 LineAreaChart/StackedCompareChart 内部的 path useMemo 真正命中
    const seriesData = useMemo(() => {
      if (!config.series) return null
      try {
        const data = config.series(values, locale)
        if (!data) return null
        // 折线点数超过 SERIES_MAX_POINTS 时抽稀:所有曲线与 xLabels 共用
        // 同一份等距索引(min-max 简化版,保留首尾与尖峰),tooltip 数据来自
        // 同数组,天然随之一致。在 memo 内做保证引用稳定、SSR/客户端确定。
        const indices = thinSeriesIndices(
          data.xLabels.length,
          data.lines.map((ln) => ln.points),
        )
        if (!indices) return data
        // 越界索引跳过:契约上每条线与 xLabels 等长,万一不等长则保持
        // 长度不一致的旧状(交给 LineAreaChart 的 invalid 分支显示占位)
        const pickAt = <T,>(arr: T[]): T[] =>
          indices.flatMap((i) => (i < arr.length ? [arr[i]] : []))
        return {
          ...data,
          xLabels: pickAt(data.xLabels),
          lines: data.lines.map((ln) => ({ ...ln, points: pickAt(ln.points) })),
        }
      } catch {
        return null
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, locale])
    const compareData = useMemo(() => {
      if (!config.compare) return null
      try {
        return config.compare(values, locale)
      } catch {
        return null
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values, locale])

    // 示例数据:优先 lib/tool-samples.ts 注册表(按 slug),否则用 config.sample 内嵌。
    const sample = useMemo(() => {
      const regSample = config.slug ? getCalculatorSample(config.slug) : undefined
      return regSample ?? config.sample
    }, [])

    // Load Sample:用户已有输入时第一次点击只提示(不覆盖),再点一次才确认覆盖;
    // pristine 状态直接填充。避免误触毁掉用户手填的真实数据。
    // 返回 false = 本次点击只是 arm(按钮据此跳过"✓ loaded"成功反馈);
    // 填充走 markDirty(等价手输):示例值也算"非默认输入",Reset 按钮随之出现。
    const [sampleArmed, setSampleArmed] = useState(false)
    const handleLoadSample = useCallback((): void | false => {
      if (!sample) return
      if (dirty && !sampleArmed) {
        setSampleArmed(true)
        return false
      }
      // 只填充示例中提供的 key,其余保留当前值,避免覆盖未声明的字段。
      setValues((prev) => {
        const next = { ...prev }
        for (const f of config.inputs) {
          if (sample[f.key] !== undefined) next[f.key] = sample[f.key]
        }
        return next
      })
      setDirty(true)
      setSampleArmed(false)
    }, [sample, config.inputs, dirty, sampleArmed])

    // 结果摘要(纯文本) - 供 Copy Summary 用。只在有结果且非错误占位时生成。
    const summary = useMemo(() => {
      const inputLines = config.inputs.map(
        (f) => `  ${inLabel(f.key, f.label)}: ${values[f.key] ?? ''}${f.suffix ? inSuffix(f.key, f.suffix) : ''}`,
      )
      const resultLines = config.outputs.map(
        (o) => `  ${outLabel(o.key, o.label)}: ${mergedResults[o.key] ?? '—'}`,
      )
      return [
        L('summaryTitle', 'Calculation Summary'),
        L('inputsLabel', 'Inputs:'),
        ...inputLines,
        L('resultsLabel', 'Results:'),
        ...resultLines,
      ].join('\n')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, values, mergedResults, locale])

    // CSV 导出内容(纯字符串) - 输入与结果三列表格,Excel/Sheets 可直接打开。
    // 实际下载交给 ResultActions(它接受 downloadContent),这里只生成内容。
    // 前置 UTF-8 BOM,确保 Excel 正确识别 UTF-8(本地化表头含非 ASCII 字符)。
    const csvContent = useMemo(() => {
      const rows: string[][] = [
        [L('csvField', 'Field'), L('csvType', 'Type'), L('csvValue', 'Value')],
        ...config.inputs.map((f) => [
          inLabel(f.key, f.label),
          L('csvInput', 'Input'),
          `${values[f.key] ?? ''}${f.suffix ? inSuffix(f.key, f.suffix) : ''}`,
        ]),
        ...config.outputs.map((o) => [
          outLabel(o.key, o.label),
          L('csvResult', 'Result'),
          mergedResults[o.key] ?? '—',
        ]),
      ]
      return '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, values, mergedResults, locale])

    const downloadFilename = config.slug
      ? `${config.slug}-result.csv`
      : 'calculation-result.csv'

    // 移动端 sticky 结果条:滚动越过结果区后,底部悬浮显示主结果(highlight),
    // 调表单时结果永远可见。仅 <sm 视口;IntersectionObserver 不可用时降级为不显示。
    const resultsRef = useRef<HTMLDivElement>(null)
    const [resultsOffscreen, setResultsOffscreen] = useState(false)
    useEffect(() => {
      const el = resultsRef.current
      if (!el || typeof IntersectionObserver === 'undefined') return
      const io = new IntersectionObserver(
        ([entry]) => setResultsOffscreen(!entry.isIntersecting && entry.boundingClientRect.top < 0),
        { threshold: 0 },
      )
      io.observe(el)
      return () => io.disconnect()
    }, [])
    const highlightOut = config.outputs.find((o) => o.highlight)
    const highlightValue = highlightOut ? mergedResults[highlightOut.key] : undefined
    // 主结果是否错误态:compute 用 "⚠️ 文案" 表达校验失败。
    // 此前错误被渲染成主色渐变大字卡,视觉上像正确答案;现降级为红色错误卡。
    const highlightIsError = !!highlightValue && highlightValue.startsWith('⚠️')
    const stickyVisible =
      resultsOffscreen &&
      !!highlightValue &&
      highlightValue !== '—' &&
      !highlightIsError

    // 是否已有有效结果(非占位/非错误):决定「下一步」工作流推荐是否出现
    const hasResult = !!highlightValue && highlightValue !== '—' && !highlightIsError

    // 深度分享参数:过滤空值与默认值(与 urlState 的链接清洁约定一致),
    // 由 ResultActions 组装为 ?key=value 带参完整 URL 一键复制。
    const shareParams = useMemo(() => {
      const params: Record<string, string> = {}
      for (const f of config.inputs) {
        const v = values[f.key] ?? ''
        if (v !== '' && v !== f.default) params[f.key] = v
      }
      return params
    }, [config.inputs, values])

    /**
     * 单个输入字段的渲染器:A 面板与 Scenario B 面板共用。
     * idPrefix 隔离 DOM id(B 面板用 'cmp-'),避免 label/for 与 aria 撞车。
     */
    const renderInputField = (
      f: (typeof config.inputs)[number],
      vals: Record<string, string>,
      setV: (key: string, v: string) => void,
      idPrefix = '',
    ) => {
      const fieldId = `${idPrefix}${f.key}`
      // select 类型用下拉;选项 ≤4 个时升级为 iOS 风格分段控件
      // (滑块指示器只动 transform,与 macOS System Settings 同族手感)
      if (f.options && f.options.length > 0) {
        const segOptions = f.options.map((opt) => ({
          label: L(`opt.${f.key}.${opt.value}`, opt.label),
          value: opt.value,
        }))
        if (f.options.length <= 4) {
          return (
            <div key={fieldId} className="sm:col-span-2">
              <span id={`${fieldId}-label`} className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {inLabel(f.key, f.label)}
              </span>
              <SegmentedControl
                options={segOptions}
                value={vals[f.key] ?? f.options[0].value}
                onChange={(v) => setV(f.key, v)}
                ariaLabel={inLabel(f.key, f.label)}
                id={fieldId}
              />
            </div>
          )
        }
        return (
          <div key={fieldId}>
            <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {inLabel(f.key, f.label)}
            </label>
            <select
              id={fieldId}
              value={vals[f.key] ?? ''}
              onChange={(e) => setV(f.key, e.target.value)}
              className="w-full rounded-lg border p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            >
              {segOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )
      }
      // 默认 number/text:由 f.type 决定输入框 type(默认 number,select 在上方分支已处理)
      // 声明 slider 的 number 字段 → 数字框 + 滑杆双向绑定
      if (f.slider && f.type !== 'text') {
        return (
          <CalculatorSliderField
            key={fieldId}
            id={fieldId}
            label={inLabel(f.key, f.label)}
            value={vals[f.key] ?? ''}
            onChange={(v) => setV(f.key, v)}
            suffix={f.suffix ? inSuffix(f.key, f.suffix) : undefined}
            placeholder={f.placeholder}
            min={f.slider.min}
            max={f.slider.max}
            step={f.slider.step}
          />
        )
      }
      return (
        <CalculatorField
          key={fieldId}
          id={fieldId}
          label={inLabel(f.key, f.label)}
          value={vals[f.key] ?? ''}
          onChange={(v) => setV(f.key, v)}
          suffix={f.suffix ? inSuffix(f.key, f.suffix) : undefined}
          placeholder={f.placeholder}
          type={f.type === 'text' ? 'text' : 'number'}
        />
      )
    }

    return (
      <div className="space-y-6">
        {/* 输入区 + 右上角 Load Sample / Reset 按钮 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputs', 'Inputs')}</span>
          <div className="flex items-center gap-2">
            {dirty && (
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
              >
                {L('reset', 'Reset')}
              </button>
            )}
            {sample && (
              <LoadSampleButton
                onLoad={handleLoadSample}
                confirmOverwrite={sampleArmed}
                onDisarm={() => setSampleArmed(false)}
              />
            )}
          </div>
        </div>
        {/* 场景预设 chips(可选):一键填充多字段,再配合滑杆微调 */}
        {config.presets && config.presets.length > 0 && (
          <PresetChips
            presets={config.presets}
            labelOf={(fb, i) => L(`preset.${i}`, fb)}
            onApply={(values) => {
              setValues((prev) => ({ ...prev, ...values }))
              setDirty(true)
              setSampleArmed(false)
            }}
          />
        )}

        {/* 输入网格(Scenario A):字段渲染器与 B 面板共用 */}
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
          {config.inputs.map((f) => renderInputField(f, values, setValue))}
        </div>

        {/* ── Scenario B 面板(allowCompare 激活后)──
            克隆 A 参数后独立微调;与 A 同款字段渲染器,仅 id 前缀不同 */}
        {config.allowCompare && compareOn && (
          <div
            className="compare-panel rounded-xl border-2 border-dashed p-4"
            style={{ borderColor: 'rgb(var(--primary) / 0.45)', backgroundColor: 'rgb(var(--primary) / 0.03)' }}
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
                <span
                  aria-hidden="true"
                  className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-brand-600 text-[11px] font-bold text-white"
                >
                  B
                </span>
                {L('scenarioB', 'Scenario B')}
              </span>
              <button
                type="button"
                onClick={() => setBValues({ ...values })}
                className="rounded-lg border px-3 py-1.5 text-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
                style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}
              >
                {L('compareSync', '⟲ Copy A → B')}
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {config.inputs.map((f) => renderInputField(f, bValues, setBValue, 'cmp-'))}
            </div>
          </div>
        )}

        {/* ── 对比模式开关(allowCompare):结果区顶部切换 ── */}
        {config.allowCompare && (
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => (compareOn ? setCompareOn(false) : activateCompare())}
              aria-pressed={compareOn}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                compareOn
                  ? 'border-brand-600 bg-brand-600 text-white hover:bg-brand-700'
                  : 'border-brand-300 bg-brand-50 text-brand-700 hover:bg-brand-100 dark:border-brand-500/50 dark:bg-brand-950/40 dark:text-brand-300 dark:hover:bg-brand-900/50'
              }`}
            >
              {compareOn ? L('compareExit', '× Exit Compare') : L('compareAdd', '+ Compare Scenario')}
            </button>
          </div>
        )}

        {/* ── 对比视图:主结果 Delta 徽章 + A/B 逐项对比表 ──
            激活后取代标准结果网格;图表/操作行保持基于 Scenario A */}
        {config.allowCompare && compareOn && bResults ? (
          <div className="space-y-3">
            {highlightOut && !highlightIsError && (
              <div className="relative overflow-hidden rounded-xl border p-4 sm:p-5" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
                      {outLabel(highlightOut.key, highlightOut.label)}
                    </div>
                    <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xl font-bold tabular-nums sm:text-2xl" style={{ color: 'rgb(var(--text))' }}>
                        {L('scenarioA', 'A')}: {highlightValue}
                      </span>
                      <span className="text-xl font-bold tabular-nums sm:text-2xl" style={{ color: 'rgb(var(--text-muted))' }}>
                        {L('scenarioB', 'B')}: {bResults[highlightOut.key] ?? '—'}
                      </span>
                    </div>
                  </div>
                  {/* 主结果 Delta 差额徽章:B − A;更低=绿(B 省),更高=红 */}
                  {(() => {
                    const d = deltaOf(highlightValue, bResults[highlightOut.key])
                    if (!d) return null
                    const isBetter = d.better === 'b'
                    return (
                      <span
                        className="delta-badge inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-base font-bold tabular-nums shadow-sm"
                        style={{
                          backgroundColor: isBetter ? 'rgb(34 197 94 / 0.12)' : 'rgb(239 68 68 / 0.12)',
                          color: isBetter ? '#16a34a' : '#dc2626',
                          border: `1px solid ${isBetter ? 'rgb(34 197 94 / 0.4)' : 'rgb(239 68 68 / 0.4)'}`,
                        }}
                      >
                        {d.text}
                        <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: isBetter ? '#16a34a' : '#dc2626', opacity: 0.75 }}>
                          {L('deltaCol', 'B vs A')}
                        </span>
                      </span>
                    )
                  })()}
                </div>
              </div>
            )}
            {/* A/B 逐项对比表:每行一个输出字段 */}
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
                  <tr>
                    <th scope="col" className="px-3 py-2">{L('resultsLabel', 'Results:').replace(/:$/, '')}</th>
                    <th scope="col" className="px-3 py-2 text-right">{L('scenarioA', 'A')}</th>
                    <th scope="col" className="px-3 py-2 text-right">{L('scenarioB', 'B')}</th>
                    <th scope="col" className="px-3 py-2 text-right">{L('deltaCol', 'B vs A')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: 'rgb(var(--border))' }}>
                  {config.outputs.map((o) => {
                    const aV = mergedResults[o.key] ?? '—'
                    const bV = bResults[o.key] ?? '—'
                    const d = deltaOf(aV, bV)
                    return (
                      <tr key={o.key}>
                        <td className="px-3 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                          {outLabel(o.key, o.label)}
                        </td>
                        <td className="px-3 py-2 text-right font-mono tabular-nums" style={{ color: o.highlight ? 'rgb(var(--primary))' : 'rgb(var(--text))', fontWeight: o.highlight ? 700 : 400 }}>
                          {aV}
                        </td>
                        <td className="px-3 py-2 text-right font-mono tabular-nums" style={{ color: 'rgb(var(--text))' }}>
                          {bV}
                        </td>
                        <td className="px-3 py-2 text-right font-mono font-semibold tabular-nums" style={{ color: d ? (d.better === 'b' ? '#16a34a' : '#dc2626') : 'rgb(var(--text-faint))' }}>
                          {d ? d.text : '—'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <>
        {/* 结果区:每张 ResultCard 自带 role="status",值变化时逐卡播报。
            容器级再包一层 aria-live 会与卡片形成嵌套双报(R6 三组独立确认),
            故这里刻意不设 live region,只保留滚动锚点与布局职责。
            列数随输出数量自适应:≤4 个恒 2 列;5~8 个桌面 3 列;>8 个 4 列,
            避免 Mortgage/Average 这类 11 项工具桌面只剩 2 列变长清单。
            错误态(⚠️ 主结果)单独以红色卡片呈现,不用主色渐变,不做数字动画。 */}
        {highlightIsError && highlightOut && (
          <div ref={resultsRef}>
            <ResultCard
              label={outLabel(highlightOut.key, highlightOut.label)}
              value={highlightValue}
              error
            />
          </div>
        )}
        <div
          ref={highlightIsError ? undefined : resultsRef}
          className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${
            config.outputs.length > 8 ? 'lg:grid-cols-4' : config.outputs.length > 4 ? 'lg:grid-cols-3' : ''
          }`}
        >
          {config.outputs.map((o) => {
            // 错误态时跳过主结果(已在上方红卡单独渲染)
            if (highlightIsError && o === highlightOut) return null
            return (
              <ResultCard
                key={o.key}
                label={outLabel(o.key, o.label)}
                value={mergedResults[o.key] ?? '—'}
                highlight={o.highlight}
                sublabel={o.sublabel ? outSub(o.key, o.sublabel) : undefined}
              />
            )
          })}
        </div>
          </>
        )}

        {/* 结果操作行 - Copy Summary 复制纯文本摘要,Download 导出 CSV,
            Share Link 复制带参深链(他人打开即还原完整场景),分享卡导出 PNG */}
        <div className="flex flex-wrap items-center gap-2">
          <ResultActions
            summary={summary}
            filename={downloadFilename}
            downloadContent={csvContent}
            mime="text/csv;charset=utf-8;"
            copyLabel={L('copySummary', 'Copy Summary')}
            shareParams={shareParams}
          />
          {highlightOut && highlightValue && highlightValue !== '—' && !highlightValue.startsWith('⚠️') && (
            <ShareResultButton
              toolSlug={config.slug || undefined}
              headline={{ label: outLabel(highlightOut.key, highlightOut.label), value: highlightValue }}
              lines={config.inputs.slice(0, 5).map((f) => ({
                label: inLabel(f.key, f.label),
                value: `${values[f.key] ?? ''}${f.suffix ? inSuffix(f.key, f.suffix) : ''}`,
              }))}
              filename={config.slug ? `${config.slug}-result.png` : 'result.png'}
            />
          )}
        </div>

        {/* 下一步工作流推荐 - 出结果后引导连续使用(单会话 PV),见 NextStepsBar */}
        {hasResult && slug && <NextStepsBar slug={slug} />}

        {/* 结果可视化(可选)- chart 支持单图或数组(多图并存),
            按 kind 分发:环形(默认)/仪表盘/曲线;key 用于多图列表项 */}
        {config.chart && (() => {
          const charts = Array.isArray(config.chart) ? config.chart : [config.chart]
          return (
            <>
              {charts.map((chart, ci) => {
                const tKey = chart.titleKey ?? 'chartTitle'
                if (chart.kind === 'gauge') {
                  const value = parseNumeric(mergedResults[chart.valueKey])
                  // max/zones 支持函数形式(阈值随输入);解析失败静默不出图
                  try {
                    const maxVal = typeof chart.max === 'function' ? chart.max(values) : chart.max
                    const zones = typeof chart.zones === 'function' ? chart.zones(values) : chart.zones
                    if (!Number.isFinite(maxVal) || maxVal <= chart.min || !Array.isArray(zones) || zones.length === 0) return null
                    return (
                      <GaugeChart
                        key={ci}
                        title={chart.title ? L(tKey, chart.title) : undefined}
                        value={value}
                        min={chart.min}
                        max={maxVal}
                        zones={zones.map((z, i) => ({
                          upTo: z.upTo,
                          color: z.color,
                          label: L(`zone.${i}`, z.label),
                        }))}
                        formatValue={chart.formatValue}
                        caption={chart.caption ? L('chartCaption', chart.caption) : undefined}
                      />
                    )
                  } catch {
                    return null
                  }
                }
                if (chart.kind === 'compare') {
                  if (!config.compare) return null
                  try {
                    const data = compareData
                    if (!data || data.rows.length === 0) return null
                    return (
                      <StackedCompareChart
                        key={ci}
                        title={chart.title ? L(tKey, chart.title) : undefined}
                        rows={data.rows.map((r, ri) => ({
                          label: L(`cmp.${ri}`, r.label),
                          segments: r.segments.map((s, si) => ({
                            label: L(`cmpseg.${si}`, s.label),
                            value: s.value,
                            color: s.color,
                          })),
                        }))}
                        formatTotal={data.formatTotal}
                      />
                    )
                  } catch {
                    return null
                  }
                }
                if (chart.kind === 'series') {
                  if (!config.series) return null
                  try {
                    const data = seriesData
                    if (!data || !data.xLabels?.length) return null
                    return (
                      <LineAreaChart
                        key={ci}
                        title={chart.title ? L(tKey, chart.title) : undefined}
                        xLabels={data.xLabels}
                        lines={data.lines.map((ln) => ({
                          key: ln.key,
                          label: L(`line.${ln.key}`, ln.label),
                          color: ln.color,
                          points: ln.points,
                          area: ln.area,
                          dashed: ln.dashed,
                        }))}
                        highlightBetween={
                          data.highlightBetween
                            ? {
                                a: data.highlightBetween.a,
                                b: data.highlightBetween.b,
                                label: data.highlightBetween.label
                                  ? L(`band.${data.highlightBetween.a}-${data.highlightBetween.b}`, data.highlightBetween.label)
                                  : undefined,
                              }
                            : undefined
                        }
                        formatY={data.formatY}
                        emptyLabel={L('chartEmpty', 'Enter your values to see the chart.')}
                      />
                    )
                  } catch {
                    return null
                  }
                }
                if (chart.kind === 'shape') {
                  const dims = chart.dimKeys
                    .map((k) => {
                      const f = config.inputs.find((inp) => inp.key === k)
                      const num = parseFloat(values[k] ?? '')
                      // 标注名优先取括号里的短名(如 'Top side (a)' → 'a'),无括号取末词
                      const m = f ? f.label.match(/\(([a-zA-Z]+)\)/) : null
                      return {
                        label: m ? m[1] : (f ? f.label.split(' ').slice(-1)[0] : k),
                        value: num,
                        unit: f?.suffix ? inSuffix(k, f.suffix) : undefined,
                      }
                    })
                  return (
                    <ShapeFigure
                      key={ci}
                      title={chart.title ? L(tKey, chart.title) : undefined}
                      shape={chart.shape}
                      dims={dims}
                    />
                  )
                }
                // 默认:donut(既有配置不写 kind 也走这里,行为不变)
                const slices = chart.slices
                  .map((s) => ({
                    label: L(`slice.${s.valueKey}`, s.label),
                    value: parseNumeric(mergedResults[s.valueKey]),
                    color: s.color,
                  }))
                  .filter((s) => s.value > 0)
                if (slices.length === 0) return null
                return (
                  <BreakdownChart
                    key={ci}
                    title={chart.title ? L(tKey, chart.title) : undefined}
                    centerLabel={chart.centerLabel ? L('chartCenter', chart.centerLabel) : undefined}
                    slices={slices}
                    emptyLabel={L('chartEmpty', 'Enter your values to see the chart.')}
                  />
                )
              })}
            </>
          )
        })()}

        {config.note && <CalculatorNote>{L('note', config.note)}</CalculatorNote>}

        {/* 移动端 sticky 结果条(越过结果区后出现;含安全区 padding) */}
        {stickyVisible && highlightOut && (
          <div
            className="fixed inset-x-0 bottom-0 z-40 border-t pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card) / 0.92)' }}
          >
            <div className="mx-auto flex max-w-lg items-baseline justify-between gap-4">
              <span className="truncate text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
                {outLabel(highlightOut.key, highlightOut.label)}
              </span>
              <span className="shrink-0 text-lg font-bold text-primary tabular-nums">{highlightValue}</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  return GeneratedCalculator
}
