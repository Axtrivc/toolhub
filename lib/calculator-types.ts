/**
 * 配置驱动的计算器 Schema
 *
 * 设计目的:让"加新计算器"从写几百行代码,降为写几十行配置。
 * 一个计算器 = 输入字段 + 输出字段 + 一个纯计算函数。
 *
 * 用法示例见 components/calculator/makeCalculatorClient.tsx
 */

import type { Locale } from './i18n'

export type FieldType = 'number' | 'select' | 'text'

export interface FieldDef {
  /** 字段 key,计算函数里用这个 key 取值 */
  key: string
  /** 显示标签 */
  label: string
  /**
   * 输入框类型(仅对非 select 字段生效)。
   *  - 'number'(默认):渲染 <input type="number">,绝大多数计算器用这个;
   *  - 'text':渲染 <input type="text">,用于非数值输入(如姓名/代码)。
   * select 类型由下方 options 字段判定,不受此字段影响。
   */
  type?: FieldType
  /** 后缀单位($、%、kg 等) */
  suffix?: string
  /** 默认值 */
  default: string
  /** placeholder */
  placeholder?: string
  /** select 类型的选项 */
  options?: { label: string; value: string }[]
  /**
   * 数值滑杆(可选,仅 number 字段生效):声明后输入框下方追加
   * range 滑杆,与数字框双向绑定,拖动实时驱动计算/图表。
   * 范围之外的数字框输入仍被允许(滑杆仅 clamp 显示,不回写)。
   */
  slider?: { min: number; max: number; step: number }
}

export interface OutputDef {
  key: string
  label: string
  /** 是否高亮显示(主结果) */
  highlight?: boolean
  /** 副标签 */
  sublabel?: string
}

/**
 * 计算器配置 - 声明式定义一个计算器
 * 实现一个新计算器只需填这个对象 + 写 compute 函数
 */
export interface CalculatorConfig {
  /** 输入字段 */
  inputs: FieldDef[]
  /** 输出字段 */
  outputs: OutputDef[]
  /**
   * 纯计算函数
   * 接收所有输入(都是 string,需自己转换),返回 key-value 的结果对象。
   * 第二个参数 locale:需要本地化输出串(如 'cal/day'、结论文案)的 compute
   * 可用它经 tui() 取译文;工厂恒以当前 locale 调用,忽略该参数的旧实现不受影响。
   */
  compute: (values: Record<string, string>, locale: Locale) => Record<string, string>
  /**
   * 依赖"当前时间"的派生结果(可选)。SSR/首帧不调用(结果卡显示 '—'),
   * 挂载后在 useEffect 中执行并合并进 results —— 保证静态导出水合一致。
   */
  deriveNow?: (values: Record<string, string>, locale: Locale) => Record<string, string>
  /** 顶部说明文字(可选) */
  note?: string
  /**
   * 工具 slug(可选)。用于「Load Sample」时,自动从 lib/tool-samples.ts
   * 取示例;同时作为导出文件名的一部分。未填时回退为静态文件名。
   */
  slug?: string
  /**
   * 内嵌示例数据(可选)。key 对应 inputs[].key。
   * 设置后渲染「Load Sample」按钮,点击一键填充这些值。
   * 若同时配置了 slug 且 lib/tool-samples.ts 有该工具示例,优先用注册表数据。
   */
  sample?: Record<string, string>
  /**
   * 结果可视化(可选)。单图直接给一个 ChartConfig;多图并存
   * (如 donut + series)给数组,自上而下依次渲染。
   */
  chart?: ChartConfig | ChartConfig[]
  /**
   * 曲线数据钩子(可选)。chart 为 { kind: 'series' } 时,工厂用该钩子
   * 取原始数值序列渲染 LineAreaChart。与 compute 同签名(纯函数,收
   * string 输入),返回 SeriesData;输入非法时返回 null(图表静默不渲染)。
   */
  series?: (values: Record<string, string>, locale: Locale) => SeriesData | null
  /**
   * URL 状态同步(可选,默认关闭)。
   * 开启后每个输入字段以 ?<key>=<value> 形式同步进 URL(replaceState):
   * 刷新/分享链接都能恢复输入。只建议给输入少、复访率高的工具开启
   * (如 mortgage/loan);长表单或含敏感字段的工具不要开(URL 会留在
   * 浏览器历史里)。
   */
  urlState?: boolean
  /**
   * 场景预设(可选):输入区上方一排 chips,一键填充多字段后配合滑杆微调。
   * values 只需包含要改的 key(未列出的字段保持当前值)。
   */
  presets?: { label: string; values: Record<string, string> }[]
}

/**
 * 比例分解图配置(默认 kind) - 把计算器输出的若干字段画成环形图。
 * valueKey 指向 compute 返回的某个 key;但 compute 返回的是格式化字符串
 * (如 "$83.29"),chart 需要原始数值,因此另提供一个 parseValue 把字符串转回数字。
 * 默认实现会剥离 $ , % 和千分位逗号。
 */
export interface DonutChartConfig {
  /** 图表类型标识;缺省即环形比例图(向后兼容既有配置) */
  kind?: 'donut'
  /** 图表标题(如 "Where Your Payment Goes") */
  title?: string
  /** 标题的 l10n key(缺省 'chartTitle';多图并存时用不同 key 避免撞车) */
  titleKey?: string
  /** 中央大字(如总还款额,通常等于某个输出值) */
  centerLabel?: string
  /** 构成分量的输出字段。valueKey 对应 compute 返回的 key */
  slices: { valueKey: string; label: string; color: string }[]
}

/**
 * 仪表盘配置 - 半环色区 + 指针,把"落在哪个区间"一眼可见(如 BMI)。
 * valueKey 指向 compute 返回的 key(经数字解析后驱动指针)。
 */
export interface GaugeChartConfig {
  kind: 'gauge'
  title?: string
  /** 标题的 l10n key(缺省 'chartTitle') */
  titleKey?: string
  valueKey: string
  min: number
  max: number
  /** 区间带(按 upTo 升序;最后一段自动延伸到 max) */
  zones: { upTo: number; color: string; label: string }[]
  /** 中央大字格式化缺省值之外的说明(指针下方),如当前区间名 */
  caption?: string
}

/**
 * 曲线图配置 - 由 config.series 钩子提供原始数值序列,
 * 渲染 LineAreaChart(余额递减/复利增长/对比曲线)。
 */
export interface SeriesChartConfig {
  kind: 'series'
  title?: string
  /** 标题的 l10n key(缺省 'chartTitle') */
  titleKey?: string
}

export type ChartConfig = DonutChartConfig | GaugeChartConfig | SeriesChartConfig

/**
 * 曲线数据(series 钩子的返回类型)。
 * xLabels 与每条线 points 等长;line key 在 lines 内唯一。
 */
export interface SeriesData {
  /** 每个采样点的 x 轴标签(如 ['Y0','Y5','Y10']) */
  xLabels: string[]
  lines: { key: string; label: string; color: string; points: number[]; area?: boolean; dashed?: boolean }[]
  /** 两条线(key)之间的区域高亮(如提前还款省息区) */
  highlightBetween?: { a: string; b: string; label?: string }
  /** y 轴/tooltip 数值格式化(缺省紧凑缩写 1.2k/3.4M) */
  formatY?: (n: number) => string
}
