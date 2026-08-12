/**
 * 工具级本地化数据层
 *
 * 每个"需要本地化"的工具在 lib/i18n/tools-l10n/<slug>.ts 导出一份 ToolL10n,
 * 覆盖 zh/es/de 三语。en 永远不在此注册 → 始终回退英文原值:
 *   - lib/tool-faqs.ts            (可见 FAQ)
 *   - lib/tool-formulas.ts        (公式区)
 *   - Client 组件内英文 fallback   (工具交互界面)
 *   - content.tsx 的 en 分支       (长文正文)
 *
 * 覆盖字段(全部可选,按需填;缺字段 → 该字段回退英文原值,绝不破图):
 *  - faqs:      可见 FAQ 的 Q&A
 *  - ui:        工具交互界面字符串(供 Client 组件经 tui() 读取)
 *  - useCases:  ToolInfoSection "Common uses" 列表(替代英文 formatUseCases)
 *  - formula:   FormulaSection 的 { formula, explain? }
 *
 * SEO 安全:en 永不在此注册,SSR/预渲染恒为英文,Google 索引不变。
 * name/shortIntro 不在此,继续用 lib/i18n/tools.{zh,es,de}.ts(已译完)。
 */

import type { Locale } from '../i18n'

/** 单个语种的工具本地化条目(所有字段可选,按需覆盖英文原值) */
export interface ToolL10nEntry {
  /** 可见 FAQ Q&A(覆盖 lib/tool-faqs.ts 的英文) */
  faqs?: Array<{ q: string; a: string }>
  /** 工具交互界面字符串(供 Client 组件 tui() 读取) */
  ui?: Record<string, string>
  /** ToolInfoSection "Common uses" 列表(替代英文 formatUseCases) */
  useCases?: string[]
  /** FormulaSection 公式与解释(覆盖 lib/tool-formulas.ts) */
  formula?: { formula: string; explain?: string }
}

/** 非英文语种 → 条目。en 不出现,保证英文走原值。 */
export type ToolL10n = Partial<Record<Exclude<Locale, 'en'>, ToolL10nEntry>>

// ──────────── 注册表:slug → ToolL10n ────────────
import { loanCalculatorL10n } from './tools-l10n/loan-calculator'
import { mortgageCalculatorL10n } from './tools-l10n/mortgage-calculator'
import { compoundInterestCalculatorL10n } from './tools-l10n/compound-interest-calculator'
import { apyCalculatorL10n } from './tools-l10n/apy-calculator'
import { roiCalculatorL10n } from './tools-l10n/roi-calculator'
import { creditCardMinimumPaymentCalculatorL10n } from './tools-l10n/credit-card-minimum-payment-calculator'
import { cashBackCalculatorL10n } from './tools-l10n/cash-back-calculator'
import { downPaymentCalculatorL10n } from './tools-l10n/down-payment-calculator'
import { dtiCalculatorL10n } from './tools-l10n/dti-calculator'
import { commissionCalculatorL10n } from './tools-l10n/commission-calculator'
import { billSplitCalculatorL10n } from './tools-l10n/bill-split-calculator'
import { savingsGoalCalculatorL10n } from './tools-l10n/savings-goal-calculator'
import { netWorthCalculatorL10n } from './tools-l10n/net-worth-calculator'
import { annuityCalculatorL10n } from './tools-l10n/annuity-calculator'
import { capitalGainsTaxEstimatorL10n } from './tools-l10n/capital-gains-tax-estimator'
import { rentVsBuyCalculatorL10n } from './tools-l10n/rent-vs-buy-calculator'
import { inflationCalculatorL10n } from './tools-l10n/inflation-calculator'
import { retirementCalculatorL10n } from './tools-l10n/retirement-calculator'
import { simpleInterestCalculatorL10n } from './tools-l10n/simple-interest-calculator'
import { unitPriceCalculatorL10n } from './tools-l10n/unit-price-calculator'
import { markupCalculatorL10n } from './tools-l10n/markup-calculator'
import { hourlyToSalaryCalculatorL10n } from './tools-l10n/hourly-to-salary-calculator'
import { creditCardPayoffCalculatorL10n } from './tools-l10n/credit-card-payoff-calculator'
import { incomeTaxEstimatorL10n } from './tools-l10n/income-tax-estimator'
import { salaryConverterL10n } from './tools-l10n/salary-converter'
import { salesTaxCalculatorL10n } from './tools-l10n/sales-tax-calculator'
import { tipCalculatorL10n } from './tools-l10n/tip-calculator'
import { discountCalculatorL10n } from './tools-l10n/discount-calculator'
import { jsonFormatterL10n } from './tools-l10n/json-formatter'
import { jwtDecoderL10n } from './tools-l10n/jwt-decoder'
import { base64EncoderL10n } from './tools-l10n/base64-encoder'
import { base64DecoderL10n } from './tools-l10n/base64-decoder'
import { regexTesterL10n } from './tools-l10n/regex-tester'
import { uuidGeneratorL10n } from './tools-l10n/uuid-generator'
import { curlConverterL10n } from './tools-l10n/curl-converter'
import { markdownToHtmlL10n } from './tools-l10n/markdown-to-html'
import { hashGeneratorL10n } from './tools-l10n/hash-generator'
import { binaryToTextL10n } from './tools-l10n/binary-to-text'
import { textToBinaryL10n } from './tools-l10n/text-to-binary'
import { urlQueryParserL10n } from './tools-l10n/url-query-parser'
import { textSizeEstimatorL10n } from './tools-l10n/text-size-estimator'
import { jsonMinifierL10n } from './tools-l10n/json-minifier'
import { csvToJsonL10n } from './tools-l10n/csv-to-json'
import { jsonToCsvL10n } from './tools-l10n/json-to-csv'
import { loremIpsumGeneratorL10n } from './tools-l10n/lorem-ipsum-generator'
import { randomNumberGeneratorL10n } from './tools-l10n/random-number-generator'
import { htmlEscapeL10n } from './tools-l10n/html-escape'
import { htmlUnescapeL10n } from './tools-l10n/html-unescape'
import { urlEncoderL10n } from './tools-l10n/url-encoder'
import { urlDecoderL10n } from './tools-l10n/url-decoder'
import { slugGeneratorL10n } from './tools-l10n/slug-generator'
import { jsonToTypeScriptL10n } from './tools-l10n/json-to-typescript'
import { yamlToJsonL10n } from './tools-l10n/yaml-to-json'
import { sqlFormatterL10n } from './tools-l10n/sql-formatter'
import { imageToBase64L10n } from './tools-l10n/image-to-base64'
import { wordCounterL10n } from './tools-l10n/word-counter'
import { textDiffL10n } from './tools-l10n/text-diff'
import { removeLineBreaksL10n } from './tools-l10n/remove-line-breaks'
import { findAndReplaceL10n } from './tools-l10n/find-and-replace'
import { uppercaseConverterL10n } from './tools-l10n/uppercase-converter'
import { lowercaseConverterL10n } from './tools-l10n/lowercase-converter'
import { titleCaseConverterL10n } from './tools-l10n/title-case-converter'
import { sentenceCaseConverterL10n } from './tools-l10n/sentence-case-converter'
import { reverseTextL10n } from './tools-l10n/reverse-text'
import { removeDuplicateLinesL10n } from './tools-l10n/remove-duplicate-lines'
import { slugToTitleL10n } from './tools-l10n/slug-to-title'
import { htmlTagStripperL10n } from './tools-l10n/html-tag-stripper'
import { characterFrequencyL10n } from './tools-l10n/character-frequency'
import { emailExtractorL10n } from './tools-l10n/email-extractor'
import { urlExtractorL10n } from './tools-l10n/url-extractor'
import { addLineNumbersL10n } from './tools-l10n/add-line-numbers'
import { textToListL10n } from './tools-l10n/text-to-list'
import { sortLinesL10n } from './tools-l10n/sort-lines'
import { whitespaceRemoverL10n } from './tools-l10n/whitespace-remover'
import { listDiffL10n } from './tools-l10n/list-diff'
import { massConverterL10n } from './tools-l10n/mass-converter'
import { densityConverterL10n } from './tools-l10n/density-converter'
import { powerConverterL10n } from './tools-l10n/power-converter'
import { flowRateConverterL10n } from './tools-l10n/flow-rate-converter'
import { dataStorageConverterL10n } from './tools-l10n/data-storage-converter'
import { timeConverterL10n } from './tools-l10n/time-converter'
import { numeralSystemConverterL10n } from './tools-l10n/numeral-system-converter'
import { angleConverterL10n } from './tools-l10n/angle-converter'
import { fuelEconomyConverterL10n } from './tools-l10n/fuel-economy-converter'

const registry: Record<string, ToolL10n> = {
  'loan-calculator': loanCalculatorL10n,
  'mortgage-calculator': mortgageCalculatorL10n,
  'compound-interest-calculator': compoundInterestCalculatorL10n,
  'apy-calculator': apyCalculatorL10n,
  'roi-calculator': roiCalculatorL10n,
  'credit-card-minimum-payment-calculator': creditCardMinimumPaymentCalculatorL10n,
  'cash-back-calculator': cashBackCalculatorL10n,
  'down-payment-calculator': downPaymentCalculatorL10n,
  'dti-calculator': dtiCalculatorL10n,
  'commission-calculator': commissionCalculatorL10n,
  'bill-split-calculator': billSplitCalculatorL10n,
  'savings-goal-calculator': savingsGoalCalculatorL10n,
  'net-worth-calculator': netWorthCalculatorL10n,
  'annuity-calculator': annuityCalculatorL10n,
  'capital-gains-tax-estimator': capitalGainsTaxEstimatorL10n,
  'rent-vs-buy-calculator': rentVsBuyCalculatorL10n,
  'inflation-calculator': inflationCalculatorL10n,
  'retirement-calculator': retirementCalculatorL10n,
  'simple-interest-calculator': simpleInterestCalculatorL10n,
  'unit-price-calculator': unitPriceCalculatorL10n,
  'markup-calculator': markupCalculatorL10n,
  'hourly-to-salary-calculator': hourlyToSalaryCalculatorL10n,
  'credit-card-payoff-calculator': creditCardPayoffCalculatorL10n,
  'income-tax-estimator': incomeTaxEstimatorL10n,
  'salary-converter': salaryConverterL10n,
  'sales-tax-calculator': salesTaxCalculatorL10n,
  'tip-calculator': tipCalculatorL10n,
  'discount-calculator': discountCalculatorL10n,
  'json-formatter': jsonFormatterL10n,
  'jwt-decoder': jwtDecoderL10n,
  'base64-encoder': base64EncoderL10n,
  'base64-decoder': base64DecoderL10n,
  'regex-tester': regexTesterL10n,
  'uuid-generator': uuidGeneratorL10n,
  'curl-converter': curlConverterL10n,
  'markdown-to-html': markdownToHtmlL10n,
  'hash-generator': hashGeneratorL10n,
  'binary-to-text': binaryToTextL10n,
  'text-to-binary': textToBinaryL10n,
  'url-query-parser': urlQueryParserL10n,
  'text-size-estimator': textSizeEstimatorL10n,
  'json-minifier': jsonMinifierL10n,
  'csv-to-json': csvToJsonL10n,
  'json-to-csv': jsonToCsvL10n,
  'lorem-ipsum-generator': loremIpsumGeneratorL10n,
  'random-number-generator': randomNumberGeneratorL10n,
  'html-escape': htmlEscapeL10n,
  'html-unescape': htmlUnescapeL10n,
  'url-encoder': urlEncoderL10n,
  'url-decoder': urlDecoderL10n,
  'slug-generator': slugGeneratorL10n,
  'json-to-typescript': jsonToTypeScriptL10n,
  'yaml-to-json': yamlToJsonL10n,
  'sql-formatter': sqlFormatterL10n,
  'image-to-base64': imageToBase64L10n,
  'word-counter': wordCounterL10n,
  'text-diff': textDiffL10n,
  'remove-line-breaks': removeLineBreaksL10n,
  'find-and-replace': findAndReplaceL10n,
  'uppercase-converter': uppercaseConverterL10n,
  'lowercase-converter': lowercaseConverterL10n,
  'title-case-converter': titleCaseConverterL10n,
  'sentence-case-converter': sentenceCaseConverterL10n,
  'reverse-text': reverseTextL10n,
  'remove-duplicate-lines': removeDuplicateLinesL10n,
  'slug-to-title': slugToTitleL10n,
  'html-tag-stripper': htmlTagStripperL10n,
  'character-frequency': characterFrequencyL10n,
  'email-extractor': emailExtractorL10n,
  'url-extractor': urlExtractorL10n,
  'add-line-numbers': addLineNumbersL10n,
  'text-to-list': textToListL10n,
  'sort-lines': sortLinesL10n,
  'whitespace-remover': whitespaceRemoverL10n,
  'list-diff': listDiffL10n,
  'mass-converter': massConverterL10n,
  'density-converter': densityConverterL10n,
  'power-converter': powerConverterL10n,
  'flow-rate-converter': flowRateConverterL10n,
  'data-storage-converter': dataStorageConverterL10n,
  'time-converter': timeConverterL10n,
  'numeral-system-converter': numeralSystemConverterL10n,
  'angle-converter': angleConverterL10n,
  'fuel-economy-converter': fuelEconomyConverterL10n,
}

/**
 * 取工具某语种的本地化条目。
 * - locale === 'en' → 返回 null(调用方走英文原值)
 * - slug 未注册 → 返回 null(回退英文)
 */
export function getToolL10n(slug: string, locale: Locale): ToolL10nEntry | null {
  if (locale === 'en') return null
  return registry[slug]?.[locale] ?? null
}

/**
 * 取工具某语种的 FAQ(可见)。
 * 有本地化 → 用之;否则回退 lib/tool-faqs.ts 英文原值。
 */
export function getToolFaqsL10n(
  slug: string,
  locale: Locale,
  enFaqs: Array<{ q: string; a: string }>,
): Array<{ q: string; a: string }> {
  const entry = getToolL10n(slug, locale)
  return entry?.faqs ?? enFaqs
}

/**
 * 取工具交互界面字符串。
 * 缺失 → 回退 fallback(英文原值),保证 SSR 与缺译时不破图。
 */
export function tui(slug: string, locale: Locale, key: string, fallback: string): string {
  const entry = getToolL10n(slug, locale)
  return entry?.ui?.[key] ?? fallback
}
