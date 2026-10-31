'use client'

import { Fragment, type ReactNode } from 'react'
import type { ToolMeta } from '@/lib/tool-types'
import { useApp } from './providers/AppProviders'
import { getToolName } from '@/lib/i18n'
import { l10nEntryFor, type ToolL10n } from '@/lib/i18n/tool-l10n-core'
import {
  toolInfoTemplates,
  joinUseCases,
  type ToolInfoType,
} from '@/lib/i18n/tool-info-templates'

/**
 * 把长尾关键词短语自然织入正文(长尾 SEO 的关键:搜索引擎据页面可见文本匹配长尾查询)。
 *
 * 去掉短语里重复的工具主名(如 "mortgage calculator with pmi..." → "with pmi..."),
 * 再按工具类型套一个动词("calculate"/"convert"/"work out"),
 * 组成一句不超过 4 项的自然语列表,避免关键词堆砌被判垃圾。
 *
 * 仅 en 路径使用;非英文走 lib/i18n/tools-l10n/<slug>.ts 的 useCases。
 */
function formatUseCases(
  longTailKeywords: string[],
  isCalculator: boolean,
  isConverter: boolean,
): string {
  const verb = isConverter ? 'look up' : isCalculator ? 'find' : 'use'
  const phrases = longTailKeywords.slice(0, 4)
  // 冠词按首个短语的首字母选 a/an(否则 "find a age calculator" 一类病句直接可见于 en 页面)
  const art = /^[aeiou]/i.test(phrases[0] ?? '') ? 'an' : 'a'
  if (phrases.length === 1) return `${verb} ${art} ${phrases[0]}`
  return `${verb} ${art} ${phrases.slice(0, -1).join(', ')}, or ${phrases[phrases.length - 1]}`
}

/** 按工具名探测类型(与英文分支判定保持一致) */
function detectType(name: string): ToolInfoType {
  if (/calculator|estimator/i.test(name)) return 'calculator'
  if (/converter/i.test(name)) return 'converter'
  if (/generator/i.test(name)) return 'generator'
  return 'tool'
}

/**
 * 把模板字符串里的 {name} 渲染为加粗的本地化工具名(对标 en 里 <strong>{name}</strong>)。
 * 不含 {name} 的字符串原样返回。
 */
function renderInlineBold(s: string, name: string): ReactNode {
  if (!s.includes('{name}')) return s
  return s.split('{name}').map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <strong>{name}</strong>}
      {part}
    </Fragment>
  ))
}

/**
 * 工具页「如何使用 & 关于」通用信息区
 *
 * 渲染策略(SEO 安全):
 *  - locale === 'en' → 走下方 EnglishToolInfo 的原 JSX(字节不变,Google 索引不变)
 *  - 非 en → 走 lib/i18n/tool-info-templates.ts 的模板 + 该工具的 useCases 本地化
 */
export function ToolInfoSection({ tool, l10n }: { tool: ToolMeta; l10n?: ToolL10n }): ReactNode {
  const { locale } = useApp()
  if (locale === 'en') return <EnglishToolInfo tool={tool} />
  return <LocalizedToolInfo tool={tool} l10n={l10n} />
}

// ──────────────────────────── en 原路径(保持不变) ────────────────────────────

function EnglishToolInfo({ tool }: { tool: ToolMeta }): ReactNode {
  const mainKeyword = tool.keywords[0]
  const isCalculator = /calculator|estimator/i.test(tool.name)
  const isConverter = /converter/i.test(tool.name)
  const isGenerator = /generator/i.test(tool.name)

  let intro: ReactNode
  let howTo: ReactNode

  if (isCalculator) {
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> lets you figure out {mainKeyword}{' '}
          instantly, without
          reaching for a spreadsheet or doing the math by hand. Whether you&apos;re comparing
          options, double-checking your work, or working through homework, the tool applies the
          correct formula behind the scenes and shows the result the moment you enter your numbers.
        </p>
        <p>
          Unlike a static chart or table, this calculator adapts to your exact inputs. You can
          adjust any value and see the outcome update in real time, which makes it easy to compare
          scenarios &mdash; change one field at a time and watch how the answer responds.
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Enter the values the form above asks for.</li>
        <li>Pick the right unit or option where the tool offers a choice.</li>
        <li>Check your units and inputs, then read the result, which appears instantly below.</li>
        <li>
          Adjust any field to test a different scenario &mdash; the answer updates without a reload.
        </li>
        <li>Copy or note the result. Calculations run locally in your browser.</li>
      </ol>
    )
  } else if (isConverter) {
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> converts {mainKeyword}{' '}from one unit to another
          using the
          exact internationally defined conversion factors. Type a value, choose your source and
          target units, and the converted result is shown instantly &mdash; no waiting, no page
          reload.
        </p>
        <p>
          Manual conversion is error-prone because it means memorizing ratios (how many feet in a
          meter, how many pints in a liter). This tool removes that friction: the conversion factor
          is built in, and the math is done to full precision with no rounding until the final
          displayed number.
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Enter the value you want to convert in the input field.</li>
        <li>Select the unit you are converting from.</li>
        <li>Select the unit you want to convert to.</li>
        <li>
          The converted value appears instantly. Adjust either unit to compare across the board.
        </li>
        <li>Copy the result if you need it elsewhere. Conversion runs locally in your browser.</li>
      </ol>
    )
  } else if (isGenerator) {
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> creates {mainKeyword} on demand, right in your browser.
          Set the options you need, click generate, and the result is ready to copy. Generation
          happens locally in your browser.
        </p>
        <p>
          Generators like this are useful when you need a specific output (a password, a UUID, a QR
          code, placeholder text) and don&apos;t want to install an app or trust an unknown website
          with your data. This tool is free, has no usage limits, and works the same on phone and
          desktop.
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Set the options the generator exposes (length, format, count, etc.).</li>
        <li>Click the generate button to produce the output.</li>
        <li>Review the result and adjust the options to regenerate if needed.</li>
        <li>Use the copy button to copy the output to your clipboard.</li>
      </ol>
    )
  } else {
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> handles {mainKeyword}{' '}
          directly in your browser. Paste or
          type your input, and the tool processes it instantly &mdash; no signup, no
          waiting. It&apos;s built for the moments when you need a quick transformation and
          don&apos;t want to leave your workflow.
        </p>
        <p>
          Because the tool runs client-side, it&apos;s fast and private. Your text is processed in
          your browser; shareable links may include settings in the URL.
          The interface is keyboard-friendly and works on any device with a modern browser.
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Paste or type your input into the text area.</li>
        <li>Adjust any options the tool offers.</li>
        <li>The output updates automatically as you type or change options.</li>
        <li>Copy the result using the copy button.</li>
      </ol>
    )
  }

  return (
    <section className="prose-content mt-10 max-w-3xl">
      {/* 单一模板字符串文本节点:避免 SSR 注释节点让纯文本提取器把标题拼成
          "About theBMI..."(浏览器渲染有空格,但提取器按文本节点拼接) */}
      <h2>{`About the ${tool.name}`}</h2>
      {intro}

      {tool.longTailKeywords && tool.longTailKeywords.length > 0 && (
        <p>
          <strong>Common uses:</strong> people reach for this tool when they need to{' '}
          {formatUseCases(tool.longTailKeywords, isCalculator, isConverter)}.
        </p>
      )}

      <h2>How to Use This Tool</h2>
      {howTo}

      <h2>Why Use an Online {isCalculator ? 'Calculator' : isConverter ? 'Converter' : isGenerator ? 'Generator' : 'Tool'}?</h2>
      <p>
        Browser-based tools like this one have a few real advantages over installed software or
        manual methods:
      </p>
      <ul>
        <li>
          <strong>No installation.</strong> It opens instantly in any browser, on any operating
          system.
        </li>
        <li>
          <strong>Private by default.</strong>{' '}
          Tools process inputs locally; shareable links may include settings in the URL.
        </li>
        <li>
          <strong>Always up to date.</strong>{' '}
          There&apos;s nothing to update &mdash; you always get
          the latest version when you load the page.
        </li>
        <li>
          <strong>Free and unlimited.</strong> Use it as often as you like, with no account and no
          caps.
        </li>
      </ul>
    </section>
  )
}

// ──────────────────────────── 非英文模板路径 ────────────────────────────

function LocalizedToolInfo({ tool, l10n }: { tool: ToolMeta; l10n?: ToolL10n }): ReactNode {
  const { locale } = useApp()
  const tpl = toolInfoTemplates[locale]
  // 无模板(理论上不会发生,zh/es/de 都有)→ 回退英文路径,保证不破图。
  if (!tpl) return <EnglishToolInfo tool={tool} />

  const type = detectType(tool.name)
  const name = getToolName(locale, tool.slug, tool.name)
  // l10nEntryFor(record, locale) 与原 getToolL10n(slug, locale) 同表达式(en → null 回退英文)
  const entry = l10nEntryFor(l10n, locale)
  const useCases = entry?.useCases

  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>{tpl.aboutTitle.split('{name}').join(name)}</h2>
      {tpl.intros[type].map((p, i) => (
        <p key={i}>{renderInlineBold(p, name)}</p>
      ))}

      {useCases && useCases.length > 0 && (
        <p>
          <strong>{tpl.commonUsesLabel}</strong> {tpl.commonUsesLead} {joinUseCases(locale, useCases)}.
        </p>
      )}

      <h2>{tpl.howToTitle}</h2>
      <ol>
        {tpl.howTos[type].map((s, i) => (
          <li key={i}>{renderInlineBold(s, name)}</li>
        ))}
      </ol>

      <h2>{tpl.whyTitleByType[type]}</h2>
      <p>{tpl.whyIntro}</p>
      <ul>
        {tpl.whyBullets.map((b, i) => (
          <li key={i}>
            <strong>{b.label}</strong> {b.body}
          </li>
        ))}
      </ul>
    </section>
  )
}
