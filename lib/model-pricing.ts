/**
 * LLM API 价格表 —— 集中管理，供 GPT Token Counter 估算成本使用
 *
 * 数据源：tokencost.app（实时价格聚合）
 * 最后核对：2026-08-14
 *
 * 维护：API 价格随时变动，建议每月在 tokencost.app 核对一次，
 *       只改本文件数字即可，组件零改动。
 *
 * 价格口径：
 *   - 均为「输入(未缓存) / 输出」每百万 token 的美元价。
 *   - DeepSeek 自 2026-08-17 起执行峰谷定价（北京时间 9:00-12:00、14:00-18:00
 *     为高峰，其余为空闲），故拆成 off-peak / peak 两个条目；
 *     人民币价按汇率 7.2 折算，精确账单以 DeepSeek 官方为准。
 */

export interface ModelPrice {
  id: string
  label: string
  /** USD / 1M 输入 token（未缓存） */
  inputPer1M: number
  /** USD / 1M 输出 token */
  outputPer1M: number
}

export interface ModelGroup {
  provider: string
  models: ModelPrice[]
}

export const MODEL_GROUPS: ModelGroup[] = [
  {
    provider: 'OpenAI',
    models: [
      { id: 'gpt-5.6-sol', label: 'GPT-5.6 Sol', inputPer1M: 5.0, outputPer1M: 30.0 },
      { id: 'gpt-5.6-terra', label: 'GPT-5.6 Terra', inputPer1M: 2.0, outputPer1M: 12.0 },
      { id: 'gpt-5.6-luna', label: 'GPT-5.6 Luna', inputPer1M: 0.2, outputPer1M: 1.2 },
    ],
  },
  {
    provider: 'Anthropic',
    models: [
      { id: 'claude-fable-5', label: 'Claude Fable 5', inputPer1M: 10.0, outputPer1M: 50.0 },
      { id: 'claude-opus-5', label: 'Claude Opus 5', inputPer1M: 5.0, outputPer1M: 25.0 },
      { id: 'claude-sonnet-5', label: 'Claude Sonnet 5', inputPer1M: 2.0, outputPer1M: 10.0 },
      { id: 'claude-haiku-4-5', label: 'Claude Haiku 4.5', inputPer1M: 1.0, outputPer1M: 5.0 },
    ],
  },
  {
    provider: 'Google',
    models: [
      { id: 'gemini-3-6-flash', label: 'Gemini 3.6 Flash', inputPer1M: 1.5, outputPer1M: 7.5 },
      { id: 'gemini-3-1-pro', label: 'Gemini 3.1 Pro', inputPer1M: 2.0, outputPer1M: 12.0 },
      { id: 'gemini-3-5-flash-lite', label: 'Gemini 3.5 Flash-Lite', inputPer1M: 0.3, outputPer1M: 2.5 },
    ],
  },
  {
    provider: 'DeepSeek',
    models: [
      { id: 'deepseek-v4-pro-offpeak', label: 'DeepSeek V4 Pro (off-peak)', inputPer1M: 0.63, outputPer1M: 1.88 },
      { id: 'deepseek-v4-pro-peak', label: 'DeepSeek V4 Pro (peak)', inputPer1M: 1.25, outputPer1M: 3.75 },
      { id: 'deepseek-v4-flash-offpeak', label: 'DeepSeek V4 Flash (off-peak)', inputPer1M: 0.21, outputPer1M: 0.63 },
      { id: 'deepseek-v4-flash-peak', label: 'DeepSeek V4 Flash (peak)', inputPer1M: 0.42, outputPer1M: 1.25 },
    ],
  },
  {
    provider: 'Moonshot',
    models: [
      { id: 'kimi-k3', label: 'Kimi K3', inputPer1M: 3.0, outputPer1M: 15.0 },
    ],
  },
  {
    provider: 'Alibaba',
    models: [
      { id: 'qwen3-8-max', label: 'Qwen3.8 Max', inputPer1M: 2.0, outputPer1M: 6.0 },
    ],
  },
  {
    provider: 'Zhipu',
    models: [
      { id: 'glm-5-2', label: 'GLM-5.2', inputPer1M: 1.4, outputPer1M: 4.4 },
    ],
  },
]

/** 扁平列表，供组件按 id 查找默认/选中模型 */
export const MODEL_PRICES: ModelPrice[] = MODEL_GROUPS.flatMap((g) => g.models)
