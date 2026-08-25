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
import { pressureConverterL10n } from './tools-l10n/pressure-converter'
import { energyConverterL10n } from './tools-l10n/energy-converter'
import { frequencyConverterL10n } from './tools-l10n/frequency-converter'
import { weightConverterL10n } from './tools-l10n/weight-converter'
import { temperatureConverterL10n } from './tools-l10n/temperature-converter'
import { speedConverterL10n } from './tools-l10n/speed-converter'
import { areaConverterL10n } from './tools-l10n/area-converter'
import { volumeConverterL10n } from './tools-l10n/volume-converter'
import { lengthConverterL10n } from './tools-l10n/length-converter'
import { trapezoidCalculatorL10n } from './tools-l10n/trapezoid-calculator'
import { cubeCalculatorL10n } from './tools-l10n/cube-calculator'
import { sphereCalculatorL10n } from './tools-l10n/sphere-calculator'
import { scientificNotationConverterL10n } from './tools-l10n/scientific-notation-converter'
import { primeNumberCheckerL10n } from './tools-l10n/prime-number-checker'
import { primeFactorizationCalculatorL10n } from './tools-l10n/prime-factorization-calculator'
import { combinationCalculatorL10n } from './tools-l10n/combination-calculator'
import { permutationCalculatorL10n } from './tools-l10n/permutation-calculator'
import { circleCalculatorL10n } from './tools-l10n/circle-calculator'
import { triangleCalculatorL10n } from './tools-l10n/triangle-calculator'
import { rectangleCalculatorL10n } from './tools-l10n/rectangle-calculator'
import { standardDeviationCalculatorL10n } from './tools-l10n/standard-deviation-calculator'
import { percentileCalculatorL10n } from './tools-l10n/percentile-calculator'
import { fractionCalculatorL10n } from './tools-l10n/fraction-calculator'
import { ratioCalculatorL10n } from './tools-l10n/ratio-calculator'
import { lcmGcdCalculatorL10n } from './tools-l10n/lcm-gcd-calculator'
import { averageCalculatorL10n } from './tools-l10n/average-calculator'
import { percentageCalculatorL10n } from './tools-l10n/percentage-calculator'
import { bmiCalculatorL10n } from './tools-l10n/bmi-calculator'
import { calorieCalculatorL10n } from './tools-l10n/calorie-calculator'
import { tdeeCalculatorL10n } from './tools-l10n/tdee-calculator'
import { bmrCalculatorL10n } from './tools-l10n/bmr-calculator'
import { bodyFatCalculatorL10n } from './tools-l10n/body-fat-calculator'
import { macroCalculatorL10n } from './tools-l10n/macro-calculator'
import { pregnancyDueDateCalculatorL10n } from './tools-l10n/pregnancy-due-date-calculator'
import { waterIntakeCalculatorL10n } from './tools-l10n/water-intake-calculator'
import { idealWeightCalculatorL10n } from './tools-l10n/ideal-weight-calculator'
import { svgToImageL10n } from './tools-l10n/svg-to-image'
import { pxToRemL10n } from './tools-l10n/px-to-rem'
import { aspectRatioCalculatorL10n } from './tools-l10n/aspect-ratio-calculator'
import { colorContrastCheckerL10n } from './tools-l10n/color-contrast-checker'
import { colorConverterL10n } from './tools-l10n/color-converter'
import { openGraphGeneratorL10n } from './tools-l10n/open-graph-generator'
import { cssShadowGeneratorL10n } from './tools-l10n/css-shadow-generator'
import { faviconGeneratorL10n } from './tools-l10n/favicon-generator'
import { cronParserL10n } from './tools-l10n/cron-parser'
import { ageCalculatorL10n } from './tools-l10n/age-calculator'
import { dateDifferenceCalculatorL10n } from './tools-l10n/date-difference-calculator'
import { ageDifferenceCalculatorL10n } from './tools-l10n/age-difference-calculator'
import { gradeCalculatorL10n } from './tools-l10n/grade-calculator'
import { finalGradeCalculatorL10n } from './tools-l10n/final-grade-calculator'
import { gpaCalculatorL10n } from './tools-l10n/gpa-calculator'
import { passwordStrengthCheckerL10n } from './tools-l10n/password-strength-checker'
import { passwordGeneratorL10n } from './tools-l10n/password-generator'
import { qrCodeGeneratorL10n } from './tools-l10n/qr-code-generator'
import { gptTokenCounterL10n } from './tools-l10n/gpt-token-counter'
import { ipSubnetCalculatorL10n } from './tools-l10n/ip-subnet-calculator'
import { chmodCalculatorL10n } from './tools-l10n/chmod-calculator'
import { sshKeyGeneratorL10n } from './tools-l10n/ssh-key-generator'
import { bcryptHashGeneratorL10n } from './tools-l10n/bcrypt-hash-generator'
import { userAgentParserL10n } from './tools-l10n/user-agent-parser'
import { jsonSchemaGeneratorL10n } from './tools-l10n/json-schema-generator'
import { namingCaseConverterL10n } from './tools-l10n/naming-case-converter'
import { nginxConfigGeneratorL10n } from './tools-l10n/nginx-config-generator'
import { webpToPngConverterL10n } from './tools-l10n/webp-to-png-converter'
import { pngToWebpConverterL10n } from './tools-l10n/png-to-webp-converter'
import { imageResizerL10n } from './tools-l10n/image-resizer'
import { svgMinifierL10n } from './tools-l10n/svg-minifier'
import { cssGradientGeneratorL10n } from './tools-l10n/css-gradient-generator'
import { cssClampCalculatorL10n } from './tools-l10n/css-clamp-calculator'
import { csvToMarkdownTableL10n } from './tools-l10n/csv-to-markdown-table'
import { textCleanerL10n } from './tools-l10n/text-cleaner'
import { srtSubtitleShiftL10n } from './tools-l10n/srt-subtitle-shift'
import { codeBeautifierL10n } from './tools-l10n/code-beautifier'
import { secretKeyGeneratorL10n } from './tools-l10n/secret-key-generator'
import { autoLoanCalculatorL10n } from './tools-l10n/auto-loan-calculator'
import { ebayFeeCalculatorL10n } from './tools-l10n/ebay-fee-calculator'
import { saasLtvChurnCalculatorL10n } from './tools-l10n/saas-ltv-churn-calculator'
import { freelanceInvoiceGeneratorL10n } from './tools-l10n/freelance-invoice-generator'
import { reverseStripeFeeCalculatorL10n } from './tools-l10n/reverse-stripe-fee-calculator'
import { timezoneConverterL10n } from './tools-l10n/timezone-converter'
import { daysCountdownCalculatorL10n } from './tools-l10n/days-countdown-calculator'
import { readingSpeakingTimeL10n } from './tools-l10n/reading-speaking-time'
import { randomChoicePickerL10n } from './tools-l10n/random-choice-picker'
import { wordleSolverL10n } from './tools-l10n/wordle-solver'
import { ipCheckerL10n } from './tools-l10n/ip-checker'
import { AmortizationTableGeneratorL10n } from './tools-l10n/amortization-table-generator'
import { AsciiTableL10n } from './tools-l10n/ascii-table'
import { BaseConverterL10n } from './tools-l10n/base-converter'
import { CaffeineCalculatorL10n } from './tools-l10n/caffeine-calculator'
import { CoinFlipL10n } from './tools-l10n/coin-flip'
import { CookingConverterL10n } from './tools-l10n/cooking-converter'
import { CronExpressionGeneratorL10n } from './tools-l10n/cron-expression-generator'
import { DiceRollerL10n } from './tools-l10n/dice-roller'
import { DogAgeCalculatorL10n } from './tools-l10n/dog-age-calculator'
import { ElectricityCostCalculatorL10n } from './tools-l10n/electricity-cost-calculator'
import { EpochConverterL10n } from './tools-l10n/epoch-converter'
import { FuelCostCalculatorL10n } from './tools-l10n/fuel-cost-calculator'
import { HashComparatorL10n } from './tools-l10n/hash-comparator'
import { HeartRateZoneCalculatorL10n } from './tools-l10n/heart-rate-zone-calculator'
import { HmacGeneratorL10n } from './tools-l10n/hmac-generator'
import { HtaccessRedirectGeneratorL10n } from './tools-l10n/htaccess-redirect-generator'
import { JsonDiffL10n } from './tools-l10n/json-diff'
import { JwtGeneratorL10n } from './tools-l10n/jwt-generator'
import { KeycodeInfoL10n } from './tools-l10n/keycode-info'
import { LineDiffCheckerL10n } from './tools-l10n/line-diff-checker'
import { LogFilterToolL10n } from './tools-l10n/log-filter-tool'
import { MarkdownTocGeneratorL10n } from './tools-l10n/markdown-toc-generator'
import { MimeTypeLookupL10n } from './tools-l10n/mime-type-lookup'
import { MorseCodeTranslatorL10n } from './tools-l10n/morse-code-translator'
import { OvertimeCalculatorL10n } from './tools-l10n/overtime-calculator'
import { PaceCalculatorL10n } from './tools-l10n/pace-calculator'
import { PaintCalculatorL10n } from './tools-l10n/paint-calculator'
import { PasswordEntropyCheckerL10n } from './tools-l10n/password-entropy-checker'
import { ProteinIntakeCalculatorL10n } from './tools-l10n/protein-intake-calculator'
import { RandomTeamGeneratorL10n } from './tools-l10n/random-team-generator'
import { ReadingLevelCheckerL10n } from './tools-l10n/reading-level-checker'
import { RobotsTxtGeneratorL10n } from './tools-l10n/robots-txt-generator'
import { RomanNumeralConverterL10n } from './tools-l10n/roman-numeral-converter'
import { ScreenTimeCalculatorL10n } from './tools-l10n/screen-time-calculator'
import { SleepCalculatorL10n } from './tools-l10n/sleep-calculator'
import { StepsToCaloriesCalculatorL10n } from './tools-l10n/steps-to-calories-calculator'
import { SubscriptionCostCalculatorL10n } from './tools-l10n/subscription-cost-calculator'
import { TakeHomePayCalculatorL10n } from './tools-l10n/take-home-pay-calculator'
import { TomlToJsonL10n } from './tools-l10n/toml-to-json'
import { TypingSpeedTestL10n } from './tools-l10n/typing-speed-test'
import { UnicodeCharacterLookupL10n } from './tools-l10n/unicode-character-lookup'
import { WeddingBudgetCalculatorL10n } from './tools-l10n/wedding-budget-calculator'
import { WheelSpinnerL10n } from './tools-l10n/wheel-spinner'
import { XmlFormatterL10n } from './tools-l10n/xml-formatter'
import { AesEncryptDecryptL10n } from './tools-l10n/aes-encrypt-decrypt'
import { CarCostCalculatorL10n } from './tools-l10n/car-cost-calculator'
import { ContextWindowCheckerL10n } from './tools-l10n/context-window-checker'
import { JsonToZodL10n } from './tools-l10n/json-to-zod'
import { LlmCostCalculatorL10n } from './tools-l10n/llm-cost-calculator'
import { JsonRepairL10n } from './tools-l10n/json-repair'
import { MarkdownFenceExtractorL10n } from './tools-l10n/markdown-fence-extractor'
import { OpenaiToolsBuilderL10n } from './tools-l10n/openai-tools-builder'
import { PromptTemplateFillerL10n } from './tools-l10n/prompt-template-filler'
import { CsvToFinetuneJsonlL10n } from './tools-l10n/csv-to-finetune-jsonl'
import { EmbeddingPriceCalculatorL10n } from './tools-l10n/embedding-price-calculator'
import { TokenVisualizerL10n } from './tools-l10n/token-visualizer'

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
  'pressure-converter': pressureConverterL10n,
  'energy-converter': energyConverterL10n,
  'frequency-converter': frequencyConverterL10n,
  'weight-converter': weightConverterL10n,
  'temperature-converter': temperatureConverterL10n,
  'speed-converter': speedConverterL10n,
  'area-converter': areaConverterL10n,
  'volume-converter': volumeConverterL10n,
  'length-converter': lengthConverterL10n,
  'trapezoid-calculator': trapezoidCalculatorL10n,
  'cube-calculator': cubeCalculatorL10n,
  'sphere-calculator': sphereCalculatorL10n,
  'scientific-notation-converter': scientificNotationConverterL10n,
  'prime-number-checker': primeNumberCheckerL10n,
  'prime-factorization-calculator': primeFactorizationCalculatorL10n,
  'combination-calculator': combinationCalculatorL10n,
  'permutation-calculator': permutationCalculatorL10n,
  'circle-calculator': circleCalculatorL10n,
  'triangle-calculator': triangleCalculatorL10n,
  'rectangle-calculator': rectangleCalculatorL10n,
  'standard-deviation-calculator': standardDeviationCalculatorL10n,
  'percentile-calculator': percentileCalculatorL10n,
  'fraction-calculator': fractionCalculatorL10n,
  'ratio-calculator': ratioCalculatorL10n,
  'lcm-gcd-calculator': lcmGcdCalculatorL10n,
  'average-calculator': averageCalculatorL10n,
  'percentage-calculator': percentageCalculatorL10n,
  'bmi-calculator': bmiCalculatorL10n,
  'calorie-calculator': calorieCalculatorL10n,
  'tdee-calculator': tdeeCalculatorL10n,
  'bmr-calculator': bmrCalculatorL10n,
  'body-fat-calculator': bodyFatCalculatorL10n,
  'macro-calculator': macroCalculatorL10n,
  'pregnancy-due-date-calculator': pregnancyDueDateCalculatorL10n,
  'water-intake-calculator': waterIntakeCalculatorL10n,
  'ideal-weight-calculator': idealWeightCalculatorL10n,
  'svg-to-image': svgToImageL10n,
  'px-to-rem': pxToRemL10n,
  'aspect-ratio-calculator': aspectRatioCalculatorL10n,
  'color-contrast-checker': colorContrastCheckerL10n,
  'color-converter': colorConverterL10n,
  'open-graph-generator': openGraphGeneratorL10n,
  'css-shadow-generator': cssShadowGeneratorL10n,
  'favicon-generator': faviconGeneratorL10n,
  'cron-parser': cronParserL10n,
  'age-calculator': ageCalculatorL10n,
  'date-difference-calculator': dateDifferenceCalculatorL10n,
  'age-difference-calculator': ageDifferenceCalculatorL10n,
  'grade-calculator': gradeCalculatorL10n,
  'final-grade-calculator': finalGradeCalculatorL10n,
  'gpa-calculator': gpaCalculatorL10n,
  'password-strength-checker': passwordStrengthCheckerL10n,
  'password-generator': passwordGeneratorL10n,
  'qr-code-generator': qrCodeGeneratorL10n,
  'gpt-token-counter': gptTokenCounterL10n,
  'ip-subnet-calculator': ipSubnetCalculatorL10n,
  'chmod-calculator': chmodCalculatorL10n,
  'ssh-key-generator': sshKeyGeneratorL10n,
  'bcrypt-hash-generator': bcryptHashGeneratorL10n,
  'user-agent-parser': userAgentParserL10n,
  'json-schema-generator': jsonSchemaGeneratorL10n,
  'naming-case-converter': namingCaseConverterL10n,
  'nginx-config-generator': nginxConfigGeneratorL10n,
  'webp-to-png-converter': webpToPngConverterL10n,
  'png-to-webp-converter': pngToWebpConverterL10n,
  'image-resizer': imageResizerL10n,
  'svg-minifier': svgMinifierL10n,
  'css-gradient-generator': cssGradientGeneratorL10n,
  'css-clamp-calculator': cssClampCalculatorL10n,
  'csv-to-markdown-table': csvToMarkdownTableL10n,
  'text-cleaner': textCleanerL10n,
  'srt-subtitle-shift': srtSubtitleShiftL10n,
  'code-beautifier': codeBeautifierL10n,
  'secret-key-generator': secretKeyGeneratorL10n,
  'auto-loan-calculator': autoLoanCalculatorL10n,
  'ebay-fee-calculator': ebayFeeCalculatorL10n,
  'saas-ltv-churn-calculator': saasLtvChurnCalculatorL10n,
  'freelance-invoice-generator': freelanceInvoiceGeneratorL10n,
  'reverse-stripe-fee-calculator': reverseStripeFeeCalculatorL10n,
  'timezone-converter': timezoneConverterL10n,
  'days-countdown-calculator': daysCountdownCalculatorL10n,
  'reading-speaking-time': readingSpeakingTimeL10n,
  'random-choice-picker': randomChoicePickerL10n,
  'wordle-solver': wordleSolverL10n,
  'ip-checker': ipCheckerL10n,
  'amortization-table-generator': AmortizationTableGeneratorL10n,
  'ascii-table': AsciiTableL10n,
  'base-converter': BaseConverterL10n,
  'caffeine-calculator': CaffeineCalculatorL10n,
  'coin-flip': CoinFlipL10n,
  'cooking-converter': CookingConverterL10n,
  'cron-expression-generator': CronExpressionGeneratorL10n,
  'dice-roller': DiceRollerL10n,
  'dog-age-calculator': DogAgeCalculatorL10n,
  'electricity-cost-calculator': ElectricityCostCalculatorL10n,
  'epoch-converter': EpochConverterL10n,
  'fuel-cost-calculator': FuelCostCalculatorL10n,
  'hash-comparator': HashComparatorL10n,
  'heart-rate-zone-calculator': HeartRateZoneCalculatorL10n,
  'hmac-generator': HmacGeneratorL10n,
  'htaccess-redirect-generator': HtaccessRedirectGeneratorL10n,
  'json-diff': JsonDiffL10n,
  'jwt-generator': JwtGeneratorL10n,
  'keycode-info': KeycodeInfoL10n,
  'line-diff-checker': LineDiffCheckerL10n,
  'log-filter-tool': LogFilterToolL10n,
  'markdown-toc-generator': MarkdownTocGeneratorL10n,
  'mime-type-lookup': MimeTypeLookupL10n,
  'morse-code-translator': MorseCodeTranslatorL10n,
  'overtime-calculator': OvertimeCalculatorL10n,
  'pace-calculator': PaceCalculatorL10n,
  'paint-calculator': PaintCalculatorL10n,
  'password-entropy-checker': PasswordEntropyCheckerL10n,
  'protein-intake-calculator': ProteinIntakeCalculatorL10n,
  'random-team-generator': RandomTeamGeneratorL10n,
  'reading-level-checker': ReadingLevelCheckerL10n,
  'robots-txt-generator': RobotsTxtGeneratorL10n,
  'roman-numeral-converter': RomanNumeralConverterL10n,
  'screen-time-calculator': ScreenTimeCalculatorL10n,
  'sleep-calculator': SleepCalculatorL10n,
  'steps-to-calories-calculator': StepsToCaloriesCalculatorL10n,
  'subscription-cost-calculator': SubscriptionCostCalculatorL10n,
  'take-home-pay-calculator': TakeHomePayCalculatorL10n,
  'toml-to-json': TomlToJsonL10n,
  'typing-speed-test': TypingSpeedTestL10n,
  'unicode-character-lookup': UnicodeCharacterLookupL10n,
  'wedding-budget-calculator': WeddingBudgetCalculatorL10n,
  'wheel-spinner': WheelSpinnerL10n,
  'xml-formatter': XmlFormatterL10n,
  'aes-encrypt-decrypt': AesEncryptDecryptL10n,
  'car-cost-calculator': CarCostCalculatorL10n,
  'context-window-checker': ContextWindowCheckerL10n,
  'json-to-zod': JsonToZodL10n,
  'llm-cost-calculator': LlmCostCalculatorL10n,
  'json-repair': JsonRepairL10n,
  'markdown-fence-extractor': MarkdownFenceExtractorL10n,
  'openai-tools-builder': OpenaiToolsBuilderL10n,
  'prompt-template-filler': PromptTemplateFillerL10n,
  'csv-to-finetune-jsonl': CsvToFinetuneJsonlL10n,
  'embedding-price-calculator': EmbeddingPriceCalculatorL10n,
  'token-visualizer': TokenVisualizerL10n,
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

// ──────────── makeCalculatorClient 通用 UI key(跨工具共享) ────────────
// 这些 key(summaryTitle / inputsLabel / csvField ...)在所有 makeCalculatorClient
// 生成的计算器里语义一致,译一次即可,不必逐 bundle 重复。en 不在此 → 回退英文。
export const COMMON_CALC_UI: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
  zh: {
    summaryTitle: '计算摘要',
    inputsLabel: '输入:',
    resultsLabel: '结果:',
    copySummary: '复制摘要',
    csvField: '字段',
    csvType: '类型',
    csvValue: '数值',
    csvInput: '输入',
    csvResult: '结果',
    inputs: '输入',
    reset: '重置',
  },
  es: {
    summaryTitle: 'Resumen del cálculo',
    inputsLabel: 'Entradas:',
    resultsLabel: 'Resultados:',
    copySummary: 'Copiar resumen',
    csvField: 'Campo',
    csvType: 'Tipo',
    csvValue: 'Valor',
    csvInput: 'Entrada',
    csvResult: 'Resultado',
    inputs: 'Entradas',
    reset: 'Restablecer',
  },
  de: {
    summaryTitle: 'Zusammenfassung der Berechnung',
    inputsLabel: 'Eingaben:',
    resultsLabel: 'Ergebnis:',
    copySummary: 'Zusammenfassung kopieren',
    csvField: 'Feld',
    csvType: 'Typ',
    csvValue: 'Wert',
    csvInput: 'Eingabe',
    csvResult: 'Ergebnis',
    inputs: 'Eingaben',
    reset: 'Zurücksetzen',
  },
}

/**
 * 取 makeCalculatorClient 通用 UI key 的本地化值(跨工具共享)。
 * locale==='en' 或缺失 → 回退 fallback(英文原值),保证 SSR 恒英文。
 */
export function tuiCalc(key: string, locale: Locale, fallback: string): string {
  if (locale === 'en') return fallback
  return COMMON_CALC_UI[locale]?.[key] ?? fallback
}

// ──────────── makeUnitConverter 通用 UI key(跨工具共享)────────────
// 单位转换器的 chrome(Convert / Value / From / To / Formula / 摘要)在所有
// makeUnitConverter 生成的转换器里语义一致,译一次即可。en 不在此 → 回退英文。
export const COMMON_UC_UI: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
  zh: {
    convert: '转换',
    value: '数值',
    from: '从',
    to: '到',
    convertedValue: '换算结果',
    formula: '公式',
    conversionSummary: '换算摘要',
    summaryValue: '数值:',
    summaryResult: '结果:',
    summaryFormula: '公式:',
    conversionNone: '换算: —',
    conversionTitle: '{from} 转换为 {to}',
    generatedBy: '由 ToolHub 生成',
  },
  es: {
    convert: 'Convertir',
    value: 'Valor',
    from: 'De',
    to: 'A',
    convertedValue: 'Valor convertido',
    formula: 'Fórmula',
    conversionSummary: 'Resumen de conversión',
    summaryValue: 'Valor:',
    summaryResult: 'Resultado:',
    summaryFormula: 'Fórmula:',
    conversionNone: 'Conversión: —',
    conversionTitle: 'Conversión de {from} a {to}',
    generatedBy: 'Generado por ToolHub',
  },
  de: {
    convert: 'Umrechnen',
    value: 'Wert',
    from: 'Von',
    to: 'Nach',
    convertedValue: 'Umgerechneter Wert',
    formula: 'Formel',
    conversionSummary: 'Umrechnungs­zusammenfassung',
    summaryValue: 'Wert:',
    summaryResult: 'Ergebnis:',
    summaryFormula: 'Formel:',
    conversionNone: 'Umrechnung: —',
    conversionTitle: '{from} nach {to} Umrechnung',
    generatedBy: 'Erstellt von ToolHub',
  },
}

/**
 * 取 makeUnitConverter 通用 UI key 的本地化值(跨工具共享)。
 * locale==='en' 或缺失 → 回退 fallback(英文原值),保证 SSR 恒英文。
 */
export function tuiUc(key: string, locale: Locale, fallback: string): string {
  if (locale === 'en') return fallback
  return COMMON_UC_UI[locale]?.[key] ?? fallback
}
