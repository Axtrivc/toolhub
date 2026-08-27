/**
 * 工具图标解析(客户端安全的轻量模块)。
 *
 * 只含 slug→图标键映射与 getToolIcon 纯函数,零数据依赖;
 * 'use client' 组件请从这里 import 图标能力,不要 import '@/lib/tools'
 * (注册表携带 228 个工具的 SEO 文案,~180KB minified,会进共享 chunk)。
 * lib/tools.ts 从本模块 re-export getToolIcon,服务端消费方无需改动。
 */

import type { ToolMeta } from './tools'

/**
 * 分类 → emoji 图标的默认映射。
 * 11 个分类全覆盖;语义特殊的明星工具在 STAR_ICONS 按 slug 单独覆盖(见 getToolIcon)。
 * 选图原则:贴合分类语义 + 高识别度 + 在浅/深色卡片上都清晰。
 */
const CATEGORY_ICONS: Record<string, string> = {
  'Finance Calculators': 'calculator',
  'Text Tools': 'type',
  'Developer Tools': 'code',
  'Unit Converters': 'ruler',
  'Math Calculators': 'sigma',
  'Health Calculators': 'heart-pulse',
  'Time Calculators': 'clock',
  'Education Calculators': 'graduation-cap',
  'Security Tools': 'shield',
  'Web Design Tools': 'palette',
  'Business Tools': 'briefcase',
  'AI Tools': 'sparkles',
  'Game Tools': 'dices',
  'Pet Tools': 'dog',
  'Home Calculators': 'house',
}

/**
 * 工具图标精准映射(slug → Lucide 图标键,由 SmartIcon 渲染为 SVG)。
 * 覆盖全部已上线工具,每条都按工具语义单独定制。
 * 命名跟 tool.slug 完全一致;CATEGORY_ICONS 仅作未列出工具的安全兜底。
 */
const STAR_ICONS: Record<string, string> = {
  // ── 金融 Finance ──
  'apy-calculator': 'trending-up',
  'credit-card-minimum-payment-calculator': 'credit-card',
  'cash-back-calculator': 'banknote',
  'down-payment-calculator': 'home',
  'dti-calculator': 'scale',
  'commission-calculator': 'briefcase',
  'savings-goal-calculator': 'target',
  'net-worth-calculator': 'piggy-bank',
  'annuity-calculator': 'scroll-text',
  'capital-gains-tax-estimator': 'chart-column',
  'rent-vs-buy-calculator': 'building-2',
  'inflation-calculator': 'circle-dollar-sign',
  'retirement-calculator': 'palmtree',
  'simple-interest-calculator': 'calculator',
  'compound-interest-calculator': 'repeat',
  'unit-price-calculator': 'tag',
  'mortgage-calculator': 'landmark',
  'markup-calculator': 'trending-up',
  'hourly-to-salary-calculator': 'clock',
  'roi-calculator': 'rocket',
  'credit-card-payoff-calculator': 'credit-card',
  'income-tax-estimator': 'receipt',
  'salary-converter': 'wallet',
  'sales-tax-calculator': 'shopping-bag',
  'tip-calculator': 'coins',
  'discount-calculator': 'badge-percent',
  'loan-calculator': 'landmark',
  'percentage-calculator': 'percent',
  // ── 健康 Health & Fitness ──
  'body-fat-calculator': 'person-standing',
  'macro-calculator': 'salad',
  'pregnancy-due-date-calculator': 'baby',
  'calorie-calculator': 'apple',
  'bmr-calculator': 'flame',
  'water-intake-calculator': 'droplets',
  'ideal-weight-calculator': 'scale',
  'bmi-calculator': 'dumbbell',
  'age-difference-calculator': 'users',
  'age-calculator': 'cake',
  'date-difference-calculator': 'calendar-days',
  // ── 数学 Math & Stats ──
  'grade-calculator': 'clipboard-list',
  'final-grade-calculator': 'graduation-cap',
  'bill-split-calculator': 'receipt',
  'trapezoid-calculator': 'ruler',
  'cube-calculator': 'box',
  'sphere-calculator': 'circle',
  'circle-calculator': 'circle-dot',
  'triangle-calculator': 'triangle',
  'rectangle-calculator': 'rectangle-horizontal',
  'standard-deviation-calculator': 'trending-down',
  'percentile-calculator': 'chart-column',
  'prime-number-checker': 'hash',
  'prime-factorization-calculator': 'puzzle',
  'combination-calculator': 'shuffle',
  'permutation-calculator': 'repeat',
  'random-number-generator': 'dices',
  'fraction-calculator': 'divide',
  'ratio-calculator': 'scale',
  'lcm-gcd-calculator': 'hash',
  'gpa-calculator': 'graduation-cap',
  'average-calculator': 'sigma',
  // ── 开发者 Developer Tools ──
  'hash-generator': 'hash',
  'slug-to-title': 'type',
  'binary-to-text': 'binary',
  'text-to-binary': 'binary',
  'scientific-notation-converter': 'flask-conical',
  'url-query-parser': 'link',
  'html-tag-stripper': 'scissors',
  'character-frequency': 'chart-column',
  'email-extractor': 'mail',
  'url-extractor': 'globe',
  'text-diff': 'diff',
  'text-size-estimator': 'hard-drive',
  'json-formatter': 'braces',
  'json-minifier': 'minimize-2',
  'csv-to-json': 'arrow-left-right',
  'json-to-csv': 'arrow-left-right',
  'add-line-numbers': 'list-ordered',
  'text-to-list': 'list',
  'color-converter': 'palette',
  'uuid-generator': 'fingerprint',
  'lorem-ipsum-generator': 'file-text',
  'password-strength-checker': 'shield-check',
  'base64-encoder': 'lock',
  'base64-decoder': 'lock-open',
  'html-escape': 'code',
  'html-unescape': 'code',
  'url-encoder': 'link',
  'url-decoder': 'unlink',
  'uppercase-converter': 'case-upper',
  'lowercase-converter': 'case-lower',
  'title-case-converter': 'case-sensitive',
  'sentence-case-converter': 'pen-line',
  'reverse-text': 'arrow-left-right',
  'remove-duplicate-lines': 'list-x',
  'sort-lines': 'arrow-down-a-z',
  'remove-line-breaks': 'wrap-text',
  'find-and-replace': 'replace',
  'whitespace-remover': 'eraser',
  'password-generator': 'key-round',
  'word-counter': 'whole-word',
  'qr-code-generator': 'qr-code',
  'slug-generator': 'tag',
  // ── 单位 Unit Converters ──
  'mass-converter': 'weight',
  'density-converter': 'flask-conical',
  'power-converter': 'zap',
  'flow-rate-converter': 'droplets',
  'data-storage-converter': 'hard-drive',
  'time-converter': 'timer',
  'numeral-system-converter': 'binary',
  'angle-converter': 'triangle',
  'fuel-economy-converter': 'fuel',
  'pressure-converter': 'gauge',
  'energy-converter': 'battery-charging',
  'frequency-converter': 'waves',
  'weight-converter': 'weight',
  'temperature-converter': 'thermometer',
  'speed-converter': 'gauge',
  'area-converter': 'ruler',
  'volume-converter': 'beaker',
  'length-converter': 'ruler',
  // 第九批:JWT / Cron / SVG / TDEE
  'jwt-decoder': 'key-round',
  'cron-parser': 'clock',
  'svg-to-image': 'image',
  'tdee-calculator': 'flame',
  // 第十批:JSON→TS / Curl / OG / Shadow / Regex / Favicon
  'json-to-typescript': 'file-code',
  'curl-converter': 'terminal',
  'open-graph-generator': 'share-2',
  'css-shadow-generator': 'layers',
  'regex-tester': 'search',
  'favicon-generator': 'sparkles',
  // 第十一批:PX→REM / Aspect / Contrast / YAML / SQL / Markdown / ImgBase64 / ListDiff
  'px-to-rem': 'move-horizontal',
  'aspect-ratio-calculator': 'rectangle-horizontal',
  'color-contrast-checker': 'contrast',
  'yaml-to-json': 'file-json',
  'sql-formatter': 'database',
  'markdown-to-html': 'code',
  'image-to-base64': 'image',
  'list-diff': 'diff',
  // 第十二批:30 个新工具(AI/Dev、图像/CSS、文本、商务、生活)
  'gpt-token-counter': 'bot',
  'ip-subnet-calculator': 'network',
  'chmod-calculator': 'terminal',
  'ssh-key-generator': 'file-key',
  'bcrypt-hash-generator': 'lock',
  'user-agent-parser': 'monitor',
  'json-schema-generator': 'file-json',
  'naming-case-converter': 'case-sensitive',
  'nginx-config-generator': 'server',
  'webp-to-png-converter': 'image',
  'png-to-webp-converter': 'image',
  'image-resizer': 'scaling',
  'svg-minifier': 'minimize-2',
  'css-gradient-generator': 'swatch-book',
  'css-clamp-calculator': 'move-horizontal',
  'csv-to-markdown-table': 'table',
  'text-cleaner': 'eraser',
  'srt-subtitle-shift': 'captions',
  'secret-key-generator': 'key-square',
  'code-beautifier': 'sparkles',
  'auto-loan-calculator': 'car',
  'ebay-fee-calculator': 'store',
  'saas-ltv-churn-calculator': 'trending-up',
  'freelance-invoice-generator': 'receipt',
  'reverse-stripe-fee-calculator': 'circle-dollar-sign',
  'timezone-converter': 'globe',
  'days-countdown-calculator': 'calendar-clock',
  'reading-speaking-time': 'book-open',
  'random-choice-picker': 'dices',
  'wordle-solver': 'puzzle',
  'ip-checker': 'shield-check',
}

/** 默认兜底图标键(理论上用不到,所有 category 都已映射) */
const DEFAULT_ICON = 'wrench'

/**
 * 取工具图标键:优先 STAR_ICONS(精准),其次 ToolMeta.icon,最后按 category 回退。
 * 返回 Lucide 图标键字符串,由 SmartIcon 渲染为 SVG;
 * 让首页/详情页用同一个函数,保证图标口径一致。
 */
export function getToolIcon(tool: Pick<ToolMeta, 'slug' | 'category' | 'icon'>): string {
  return STAR_ICONS[tool.slug] ?? tool.icon ?? CATEGORY_ICONS[tool.category] ?? DEFAULT_ICON
}
