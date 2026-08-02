/**
 * 配置驱动的计算器 Schema
 *
 * 设计目的:让"加新计算器"从写几百行代码,降为写几十行配置。
 * 一个计算器 = 输入字段 + 输出字段 + 一个纯计算函数。
 *
 * 用法示例见 components/calculator/makeCalculatorClient.tsx
 */

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
   * 接收所有输入(都是 string,需自己转换),返回 key-value 的结果对象
   */
  compute: (values: Record<string, string>) => Record<string, string>
  /** 顶部说明文字(可选) */
  note?: string
  /**
   * 结果可视化(可选)。声明后,结果区下方渲染一个比例分解环形图,
   * 把若干个输出字段按值画成饼图(如"利息 vs 本金")。
   * 未声明的计算器不受影响。
   */
  chart?: ChartConfig
}

/**
 * 比例分解图配置 - 把计算器输出的若干字段画成环形图。
 * valueKey 指向 compute 返回的某个 key;但 compute 返回的是格式化字符串
 * (如 "$83.29"),chart 需要原始数值,因此另提供一个 parseValue 把字符串转回数字。
 * 默认实现会剥离 $ , % 和千分位逗号。
 */
export interface ChartConfig {
  /** 图表标题(如 "Where Your Payment Goes") */
  title?: string
  /** 中央大字(如总还款额,通常等于某个输出值) */
  centerLabel?: string
  /** 构成分量的输出字段。valueKey 对应 compute 返回的 key */
  slices: { valueKey: string; label: string; color: string }[]
}
