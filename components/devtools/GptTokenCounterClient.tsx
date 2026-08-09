'use client'

import { useState, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { ResultCard } from '@/components/calculator/CalculatorField'

/**
 * GPT / Claude Token Counter —— 纯前端启发式 token 估算
 *
 * 估算策略(不使用任何 tokenizer 库):
 *  - 基线:chars / 4(OpenAI 官方经验法则,1 token ≈ 4 个英文字符);
 *  - 细化:按「词串 / 标点」拆分,短词 ≈ 1 token,长词约每 5 字符 1 token,
 *    标点各计 1 token;
 *  - 取两者平均,结果仅作数量级参考(≈ cl100k_base),UI 中明确标注为估算。
 * 成本估算:选中模型的输入单价 × 估算 token 数 / 1M。
 */

const SAMPLE_TEXT = `Token counters help you estimate how much an LLM prompt will cost before you send it.

Paste any text here — a chat prompt, a document, a chunk of code — and this tool estimates the token count using a simple heuristic: about 4 characters per token, refined by splitting words and punctuation.

For example, "Hello, world!" is roughly 4 tokens. Longer English prose averages about 0.75 words per token. Code and non-English text usually tokenize less efficiently.

Remember: real billing uses the provider's exact tokenizer (cl100k_base for GPT-4o), so treat every number here as an estimate.`

interface ModelPrice {
  id: string
  label: string
  inputPer1M: number // USD / 1M input tokens
  outputPer1M: number // USD / 1M output tokens
}

// 价格单位:USD / 1M tokens(2025 年参考价,UI 已提示以官网为准)
const MODELS: ModelPrice[] = [
  { id: 'gpt-4o', label: 'GPT-4o', inputPer1M: 2.5, outputPer1M: 10 },
  { id: 'gpt-4o-mini', label: 'GPT-4o mini', inputPer1M: 0.15, outputPer1M: 0.6 },
  { id: 'claude-3-5-sonnet', label: 'Claude 3.5 Sonnet', inputPer1M: 3, outputPer1M: 15 },
  { id: 'claude-3-5-haiku', label: 'Claude 3.5 Haiku', inputPer1M: 0.8, outputPer1M: 4 },
]

/** 启发式 token 估算:chars/4 基线 + 词/标点细化,取平均 */
function estimateTokens(text: string): number {
  if (!text.trim()) return 0
  const charBaseline = text.length / 4
  const wordRuns = text.match(/[A-Za-z0-9]+(?:['_-][A-Za-z0-9]+)*/g) ?? []
  const punctuation = text.match(/[^\sA-Za-z0-9'_-]/g) ?? []
  let wordTokens = 0
  for (const w of wordRuns) wordTokens += Math.max(1, Math.ceil(w.length / 5))
  const refined = wordTokens + punctuation.length
  return Math.max(1, Math.round((charBaseline + refined) / 2))
}

function countSentences(text: string): number {
  if (!text.trim()) return 0
  return text.match(/[.!?]+(?=\s|$)/g)?.length ?? 1
}

function formatUsd(cost: number): string {
  if (cost === 0) return '$0.00'
  if (cost < 0.01) return `$${cost.toFixed(6)}`
  return `$${cost.toFixed(4)}`
}

export function GptTokenCounterClient() {
  const [text, setText] = useState(SAMPLE_TEXT)
  const [modelId, setModelId] = useState(MODELS[0].id)

  const stats = useMemo(() => {
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, '').length
    const words = (text.match(/\S+/g) ?? []).length
    const sentences = countSentences(text)
    const tokens = estimateTokens(text)
    return { chars, charsNoSpaces, words, sentences, tokens }
  }, [text])

  const model = MODELS.find((m) => m.id === modelId) ?? MODELS[0]
  const inputCost = (stats.tokens / 1_000_000) * model.inputPer1M

  const summary = useMemo(
    () =>
      [
        'Token Count Summary (estimate)',
        `Estimated tokens: ~${stats.tokens.toLocaleString()} (heuristic, ~cl100k_base)`,
        `Characters: ${stats.chars.toLocaleString()}`,
        `Characters (no spaces): ${stats.charsNoSpaces.toLocaleString()}`,
        `Words: ${stats.words.toLocaleString()}`,
        `Sentences: ${stats.sentences.toLocaleString()}`,
        `Model: ${model.label} ($${model.inputPer1M}/1M input, $${model.outputPer1M}/1M output)`,
        `Estimated input cost: ${formatUsd(inputCost)}`,
      ].join('\n'),
    [stats, model, inputCost],
  )

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <label htmlFor="token-input" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          Paste your prompt or document
        </label>
        <textarea
          id="token-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          spellCheck={false}
          placeholder="Paste text here to estimate its token count…"
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <ResultCard label="Est. tokens" value={`~${stats.tokens.toLocaleString()}`} sublabel="heuristic estimate" highlight />
        <ResultCard label="Characters" value={stats.chars.toLocaleString()} />
        <ResultCard label="No spaces" value={stats.charsNoSpaces.toLocaleString()} sublabel="characters" />
        <ResultCard label="Words" value={stats.words.toLocaleString()} />
        <ResultCard label="Sentences" value={stats.sentences.toLocaleString()} />
      </div>

      {/* 模型定价 + 成本 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="model-select" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            Model pricing (as of 2025 — check provider pricing)
          </label>
          <select
            id="model-select"
            value={modelId}
            onChange={(e) => setModelId(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label} — ${m.inputPer1M}/1M in · ${m.outputPer1M}/1M out
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <div
            className="w-full rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-4 text-center shadow-sm"
          >
            <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
              Estimated input cost ({model.label})
            </div>
            <div className="mt-1 font-mono text-2xl font-bold text-primary sm:text-3xl">{formatUsd(inputCost)}</div>
            <div className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              for ~{stats.tokens.toLocaleString()} input tokens · output billed separately
            </div>
          </div>
        </div>
      </div>

      {/* 复制摘要 */}
      <div className="flex flex-wrap items-center gap-3">
        <CopyButton value={summary} label="Copy summary" />
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        ⚠️ This is an <strong>estimate</strong>, not an exact count. Real billing uses each provider&apos;s tokenizer
        (GPT-4o uses <code>cl100k_base</code>); this heuristic averages the 4-chars-per-token rule of thumb with a
        word/punctuation split. Prices are listed as of 2025 and change often — always confirm on the provider&apos;s
        pricing page.
      </p>
    </div>
  )
}
