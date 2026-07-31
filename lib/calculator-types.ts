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
}
