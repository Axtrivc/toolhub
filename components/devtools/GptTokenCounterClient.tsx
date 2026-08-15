'use client'

import { useState, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { ResultCard } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { MODEL_GROUPS, MODEL_PRICES, type ModelPrice } from '@/lib/model-pricing'
import { countWords, countSentences } from '@/lib/text-stats'

/**
 * GPT / Claude Token Counter —— 纯前端启发式 token 估算
 *
 * 估算策略(不使用任何 tokenizer 库):
 *  - 基线:拉丁字符 / 4(OpenAI 官方经验法则,1 token ≈ 4 个英文字符);
 *  - CJK:汉字按约 0.75 token/字(现代 tokenizer 常见 0.6–1.0 区间取中);
 *  - 细化:按「词串 / 标点」拆分,短词 ≈ 1 token,长词约每 5 字符 1 token,
 *    标点各计 1 token;
 *  - 取两者平均,结果仅作数量级参考(≈ cl100k_base),UI 中明确标注为估算。
 * 成本估算:输入单价 × 输入 token + 输出单价 × 预期输出 token。
 */

const SAMPLE_TEXT = `Token counters help you estimate how much an LLM prompt will cost before you send it.

Paste any text here — a chat prompt, a document, a chunk of code — and this tool estimates the token count using a simple heuristic: about 4 characters per token, refined by splitting words and punctuation.

For example, "Hello, world!" is roughly 4 tokens. Longer English prose averages about 0.75 words per token. Code and non-English text usually tokenize less efficiently.

Remember: real billing uses the provider's exact tokenizer (cl100k_base for GPT-4o), so treat every number here as an estimate.`

// 模型价格集中管理在 lib/model-pricing.ts（数据源 tokencost.app，最后核对 2026-08-14）
const MODELS: ModelPrice[] = MODEL_PRICES

const CJK_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g

/** 启发式 token 估算:拉丁 chars/4 + 词/标点细化取平均;汉字单独按 ≈0.75 token/字 */
function estimateTokens(text: string): number {
  if (!text.trim()) return 0
  const cjkCount = (text.match(CJK_RE) || []).length
  const latin = text.replace(CJK_RE, '')
  const charBaseline = latin.length / 4 + cjkCount * 0.75
  const wordRuns = latin.match(/[A-Za-z0-9]+(?:['_-][A-Za-z0-9]+)*/g) ?? []
  const punctuation = latin.match(/[^\sA-Za-z0-9'_-]/g) ?? []
  let wordTokens = 0
  for (const w of wordRuns) wordTokens += Math.max(1, Math.ceil(w.length / 5))
  const refined = wordTokens + punctuation.length + cjkCount * 0.75
  return Math.max(1, Math.round((charBaseline + refined) / 2))
}

function formatUsd(cost: number): string {
  if (cost === 0) return '$0.00'
  if (cost < 0.01) return `$${cost.toFixed(6)}`
  return `$${cost.toFixed(4)}`
}

export function GptTokenCounterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('gpt-token-counter', locale, key, fb)

  const [text, setText] = useState(SAMPLE_TEXT)
  const [modelId, setModelId] = useState(MODELS[0].id)
  const [outputTokens, setOutputTokens] = useState('0')

  const stats = useMemo(() => {
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, '').length
    // 词/句统计走中英混合口径:纯中文不再恒为 1 词/1 句
    const words = countWords(text)
    const sentences = countSentences(text)
    const tokens = estimateTokens(text)
    return { chars, charsNoSpaces, words, sentences, tokens }
  }, [text])

  const model = MODELS.find((m) => m.id === modelId) ?? MODELS[0]
  const inputCost = (stats.tokens / 1_000_000) * model.inputPer1M
  const outputTok = Math.max(0, Math.floor(Number(outputTokens) || 0))
  const outputCost = (outputTok / 1_000_000) * model.outputPer1M
  const totalCost = inputCost + outputCost

  const summary = useMemo(
    () =>
      [
        L('summaryTitle', 'Token Count Summary (estimate)'),
        `${L('sEstimatedTokens', 'Estimated tokens:')} ~${stats.tokens.toLocaleString()} ${L('sHeuristic', '(heuristic, ~cl100k_base)')}`,
        `${L('sCharacters', 'Characters:')} ${stats.chars.toLocaleString()}`,
        `${L('sCharactersNoSpaces', 'Characters (no spaces):')} ${stats.charsNoSpaces.toLocaleString()}`,
        `${L('sWords', 'Words:')} ${stats.words.toLocaleString()}`,
        `${L('sSentences', 'Sentences:')} ${stats.sentences.toLocaleString()}`,
        `${L('sModel', 'Model:')} ${model.label} ($${model.inputPer1M}/1M ${L('input', 'input')}, $${model.outputPer1M}/1M ${L('output', 'output')})`,
        `${L('sEstimatedInputCost', 'Estimated input cost:')} ${formatUsd(inputCost)}`,
        `${L('sEstimatedOutputCost', 'Estimated output cost:')} ${formatUsd(outputCost)} (${outputTok.toLocaleString()} ${L('tokens', 'tokens')})`,
        `${L('sEstimatedTotalCost', 'Estimated total cost:')} ${formatUsd(totalCost)}`,
      ].join('\n'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stats, model, inputCost, outputCost, totalCost, outputTok, locale],
  )

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <label htmlFor="token-input" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('pastePrompt', 'Paste your prompt or document')}
        </label>
        <textarea
          id="token-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          spellCheck={false}
          placeholder={L('placeholder', 'Paste text here to estimate its token count…')}
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
        <ResultCard label={L('estTokens', 'Est. tokens')} value={`~${stats.tokens.toLocaleString()}`} sublabel={L('heuristicEstimate', 'heuristic estimate')} highlight />
        <ResultCard label={L('characters', 'Characters')} value={stats.chars.toLocaleString()} />
        <ResultCard label={L('noSpaces', 'No spaces')} value={stats.charsNoSpaces.toLocaleString()} sublabel={L('charactersSub', 'characters')} />
        <ResultCard label={L('words', 'Words')} value={stats.words.toLocaleString()} />
        <ResultCard label={L('sentences', 'Sentences')} value={stats.sentences.toLocaleString()} />
      </div>

      {/* 模型定价 + 成本 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="model-select" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('modelPricing', 'Model pricing (as of 2026-08 — check provider pricing)')}
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
            {MODEL_GROUPS.map((g) => (
              <optgroup key={g.provider} label={g.provider}>
                {g.models.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.label} — ${m.inputPer1M}/1M {L('inShort', 'in')} · ${m.outputPer1M}/1M {L('outShort', 'out')}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <div className="mt-3">
            <label htmlFor="output-tokens" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('expectedOutputTokens', 'Expected output tokens')}
            </label>
            <input
              id="output-tokens"
              type="number"
              min={0}
              step={100}
              value={outputTokens}
              onChange={(e) => setOutputTokens(e.target.value)}
              className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
              style={{
                borderColor: 'rgb(var(--border-strong))',
                backgroundColor: 'rgb(var(--bg-card))',
                color: 'rgb(var(--text))',
              }}
            />
          </div>
        </div>
        <div className="flex items-end">
          <div
            className="w-full rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-4 text-center shadow-sm"
          >
            <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
              {L('estimatedTotalCost', 'Estimated total cost')} ({model.label})
            </div>
            <div className="mt-1 font-mono text-2xl font-bold text-primary sm:text-3xl">{formatUsd(totalCost)}</div>
            <div className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              {L('inputCostLine', 'Input:')} {formatUsd(inputCost)} · ~{stats.tokens.toLocaleString()} {L('inputTokens', 'input tokens')}
            </div>
            <div className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              {L('outputCostLine', 'Output:')} {formatUsd(outputCost)} · {outputTok.toLocaleString()} {L('outputTokens', 'output tokens')}
            </div>
          </div>
        </div>
      </div>

      {/* 复制摘要 */}
      <div className="flex flex-wrap items-center gap-3">
        <CopyButton value={summary} label={L('copySummary', 'Copy summary')} />
      </div>

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteF1', '⚠️ This is an ')}
        <strong>{L('estimateWord', 'estimate')}</strong>
        {L('noteF2', ", not an exact count. Real billing uses each provider's tokenizer (GPT-4o uses ")}
        <code>cl100k_base</code>
        {L('noteF3', "); this heuristic averages the 4-chars-per-token rule of thumb (≈0.75 tokens per CJK character) with a word/punctuation split. Prices are listed as of 2026-08 and change often — always confirm on the provider's pricing page.")}
      </p>
    </div>
  )
}
