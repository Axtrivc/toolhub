import { ToolContent } from '@/lib/content-templates'

export function GptTokenCounterClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          Every LLM API bill is measured in <strong>tokens</strong> — the chunks of text a model actually reads and
          writes. This counter estimates how many tokens your prompt or document contains and what that input would
          cost on popular GPT and Claude models. It runs <strong>100% in your browser</strong>: nothing you paste is
          ever uploaded, which makes it safe for unreleased drafts, customer data, and API keys.
        </p>
      }
      sections={[
        {
          heading: 'How the estimate is computed',
          body: (
            <p>
              Tokenizers such as <code>cl100k_base</code> (used by GPT-4o) split text into sub-word units, so a token
              is roughly <strong>4 characters or 0.75 words</strong> of English. This tool starts from that classic
              chars÷4 rule of thumb, then refines it by splitting your text into word runs and punctuation: short
              words count as about one token, long words as roughly one per five characters, and each punctuation mark
              as its own token. The two heuristics are averaged. Expect the result to land within about 10–20% of the
              real count — close enough for budgeting, not for billing disputes.
            </p>
          ),
        },
        {
          heading: 'When estimates drift from reality',
          body: (
            <p>
              The heuristic is tuned for English prose. <strong>Source code</strong> tokenizes worse (dense symbols and
              indentation), <strong>non-English text</strong> — especially CJK — often costs 1–2 characters per token
              instead of 4, and emoji or rare Unicode can cost several tokens each. If you need an exact figure, run
              the provider&apos;s own tokenizer (<code>tiktoken</code> for OpenAI, or the token-count endpoint in the
              Anthropic SDK) on the same text and compare.
            </p>
          ),
        },
        {
          heading: 'Budgeting prompts with the price table',
          body: (
            <p>
              The dropdown lists per-million-token prices for GPT-4o, GPT-4o mini, Claude 3.5 Sonnet, and Claude 3.5
              Haiku <em>as of 2025</em> — providers change pricing frequently, so verify before committing. A quick
              sanity check: a 1,000-word prompt is roughly 1,300 tokens, which at GPT-4o input prices costs well under
              a cent. Costs only become meaningful at scale, so multiply by your real request volume — and remember
              that <strong>output tokens are billed separately</strong>, usually at 3–5× the input rate.
            </p>
          ),
        },
      ]}
    />
  )
}
