/**
 * i18n 字典 - 翻译界面框架(导航/按钮/Footer 等)
 *
 * 策略说明:
 * - 站点定位英文站(赚高 RPM),工具 SEO 字段(title/description/h1/keywords)保持英文,
 *   不做翻译;语言切换只影响界面元素 + 工具卡片展示文案(name/shortIntro/category)
 * - 支持 4 种语言:en(默认)/ zh / es / de
 * - 工具卡片的 name/shortIntro 翻译放在 lib/i18n/tools.<locale>.ts,按 slug 映射
 *
 * 加新的界面文案:在四个字典里都加一个 key。
 */

import { zhTools } from './i18n/tools.zh'
import { esTools } from './i18n/tools.es'
import { deTools } from './i18n/tools.de'

export type Locale = 'en' | 'zh' | 'es' | 'de'

/** 支持的语言列表(下拉/迭代用) */
export const SUPPORTED_LOCALES: Locale[] = ['en', 'zh', 'es', 'de']

/** 语言下拉的展示标签(母语 + ISO 码) */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  de: 'Deutsch',
}

/** 语言下拉的短码(选中态徽章用) */
export const LOCALE_CODES: Record<Locale, string> = {
  en: 'EN',
  zh: '中',
  es: 'ES',
  de: 'DE',
}

/**
 * 首访检测浏览器语言 → 匹配支持列表。
 * 匹配不到任何支持语言 → 返回 'en'(默认)。
 *
 * 匹配规则:navigator.language 形如 'zh-CN' / 'es-AR' / 'de-AT' / 'en-US',
 * 取主语言前缀小写后比对。
 */
export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en'
  const langs = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((l) => l.toLowerCase())
  for (const l of langs) {
    const primary = l.split('-')[0]
    if (primary === 'zh') return 'zh'
    if (primary === 'es') return 'es'
    if (primary === 'de') return 'de'
    if (primary === 'en') return 'en'
  }
  return 'en'
}

/** 校验字符串是否为合法 Locale(读取 localStorage 后用) */
export function isLocale(v: unknown): v is Locale {
  return v === 'en' || v === 'zh' || v === 'es' || v === 'de'
}

export interface Dict {
  // Header 导航
  navAllTools: string
  toolsDirHeroBody: string // /tools 目录页 hero 说明(含 {count})
  toolsDirCta: string // "search from the home page" 链接文案
  toolsDirSeoTitle: string // 目录页底部 SEO 标题
  toolsDirSeoP1: string
  toolsDirSeoP2: string
  navAbout: string
  navBlog: string
  navContact: string
  // 首页 Hero
  heroBadge: string // "{count}+ Free Online Tools" 中的 "{count}+"
  heroTitle1: string // "Free Online Tools" 部分(被 {count} 替换)
  heroTitle2: string // "That Just Work"
  heroSubtitle: string
  heroOfflineBadge: string // PWA/隐私卖点徽章 "⚡ 100% Client-Side & Works Offline"
  heroMultilingualBadge: string // 多语卖点徽章 "🌐 Available in 4 Languages: EN | 中文 | Español | Deutsch"
  heroCtaExplore: string // Hero 快捷操作栏主 CTA "Explore {count}+ Free Tools"
  // 搜索 & 筛选
  searchPlaceholder: string
  heroSearchLabel: string // 首页 Hero 主搜索框 aria-label "Search tools"
  categoryAll: string
  showingAll: string // "Showing all {count} tools"
  showingFiltered: string // "{filtered} of {total} tools"
  noResults: string
  noResultsHint: string
  clearSearch: string
  // 首页置顶热门工具区
  featuredTitle: string // "Popular Tools"
  featuredBadgePopular: string // 卡片 Badge,热门工具,如 "POPULAR"
  featuredBadgeNew: string // 卡片 Badge,新工具,如 "NEW"
  // 工具卡片标记
  badgePro: string
  badgeFree: string
  // Footer 法律链接
  footerAbout: string
  footerContact: string
  footerPrivacy: string
  footerTerms: string
  footerTagline: string
  footerRights: string // "tools and counting. All rights reserved."
  footerMore: string // "+N more" (分类下展示超出 6 个时的"更多"链接)
  // Footer 访客计数器(SiteStats,数据来自 /api/stats 的 D1 统计)
  statsTotalVisits: string // "Total visits"(累计 PV)
  statsTodayVisits: string // "Today"(今日 PV)
  statsTodayVisitors: string // "Visitors today"(今日 UV)
  statsAriaLabel: string // 无障碍标签 "Site visitor statistics"
  // 工具页通用
  toolHome: string
  toolResult: string
  toolCopy: string
  toolCopied: string
  // 工具页:加载示例 / 导出结果
  toolLoadSample: string
  toolSampleOverwrite: string // "Overwrite inputs?" confirm state
  toolSampleLoaded: string
  toolLoadSampleTitle: string // "Auto-fill a realistic example"(按钮 title 提示)
  toolCopySummary: string
  toolDownload: string
  toolDownloaded: string
  // 工具页相关工具内链
  relatedTitle: string
  relatedSubtitle: string
  // 首页"最近使用 / 我的收藏"动态区块
  recentTitle: string
  recentSubtitle: string
  // 首页 Workspace 仪表盘(Hero 状态行 / 价值徽章)
  workspaceEyebrow: string // "Workspace / Developer & Creator Toolhub" 眉头等宽行
  workspaceStatus: string // 状态指示 "● 100% LOCAL COMPUTE ENGINE · ZERO DATA LOGS"
  workspaceBadgeEngines: string // "{count}+ Utility Engines"
  workspaceBadgeInstant: string // "Instant Local Compute"
  workspaceBadgeZeroLogs: string // "Zero Server Storage"
  // 首页 Quick Access 面板(Pinned + Recent)
  workspaceQuickAccess: string // 面板标题 "Quick Access"
  workspacePinnedTitle: string // "Pinned Tools"
  workspacePinnedEmpty: string // 空态引导文案
  workspaceRecentTitle: string // "Recent"
  workspaceRecentClear: string // "Clear recent"
  workspacePin: string // 图钉 aria:"Pin to workspace"
  workspaceUnpin: string // "Unpin"
  // 首页 Scratchpad 随手记
  scratchpadTitle: string
  scratchpadSubtitle: string
  scratchpadPlaceholder: string
  scratchpadClear: string
  scratchpadStats: string // "{words} words · {chars} chars"
  scratchpadSaved: string // 自动保存指示 "Saved"
  // Scratchpad 快捷工具栏
  scratchpadFormatJson: string // "Format JSON"
  scratchpadB64Enc: string // "Base64 Enc"
  scratchpadB64Dec: string // "Base64 Dec"
  scratchpadUpper: string // "UPPER"
  scratchpadLower: string // "lower"
  scratchpadTrim: string // "Trim"
  scratchpadErrorJson: string // 非法 JSON 错误提示
  scratchpadErrorBase64: string // 非法 Base64 错误提示
  // 首页 Workspace 分类 Tabs(固定 6 个;All 复用 categoryAll)
  workspaceTabDeveloper: string
  workspaceTabDesign: string
  workspaceTabText: string
  workspaceTabConverters: string
  workspaceTabUtilities: string
  // 首页主题 Hub(6 大主题卡:标题 / 副标语 / CTA)
  hubTitleAI: string
  hubTitleDeveloper: string
  hubTitleDesign: string
  hubTitleText: string
  hubTitleFinance: string
  hubTitleConverters: string
  hubTitleUtilities: string
  hubTaglineAI: string
  hubTaglineDeveloper: string
  hubTaglineDesign: string
  hubTaglineText: string
  hubTaglineFinance: string
  hubTaglineConverters: string
  hubTaglineUtilities: string
  hubExploreAll: string // "Explore all {count} tools"
  toolsCount: string // 主题头 "{count} tools"
  hubBackToThemes: string // 从主题过滤视图返回总览 "All themes"
  // 工作台折叠抽屉(Quick Access + Scratchpad 容器)
  workspaceDrawerSubtitle: string // 折叠条副标题 "Pinned tools, recents & scratchpad"
  // 首页底部玻璃目录(HomeSitemap)
  sitemapDirectory: string // "Directory" 栏标题
  // 广告位占位标识
  adLabel: string
  // 主题切换 aria
  themeToggle: string
  themeLight: string
  themeDark: string
  // 语言切换 aria
  languageToggle: string
  // 移动端菜单抽屉 aria(Header)
  menuToggle: string // "Toggle menu"
  menuClose: string // "Close menu"
  menuLabel: string // "Menu"(抽屉 dialog aria-label)
  // 全局搜索弹窗(Cmd/Ctrl+K)
  searchOpen: string // 打开搜索(aria-label / title)
  searchPaletteTitle: string // 弹窗 aria-label
  searchPalettePlaceholder: string // 输入框 placeholder
  searchPaletteHint: string // 底部提示 "{count} tools"
  searchNoResults: string // 无结果
  searchClose: string // 关闭(aria-label)
  // 底部键盘提示
  searchKbdSelect: string // "select"
  searchKbdMove: string // "navigate"
  searchKbdClose: string // "close"
  // 404 页面(app/not-found.tsx)
  notFoundTitle: string // "Page not found"
  notFoundBody: string // 说明 + 引导看热门工具
  notFoundBack: string // "← Back to all tools" 按钮
  // 错误边界 & 全局 Loading(app/error.tsx / app/loading.tsx)
  errorTitle: string // "Something went wrong"
  errorBody: string // 说明 + 引导
  errorRetry: string // "Try again"
  errorHome: string // "Back to home"
  skipToContent: string // "Skip to content"
  errorDigest: string // 引导用户反馈时附带 digest 错误代码(含 {digest} 占位)
  loading: string // "Loading…"
  // Cookie 同意横幅
  cookieAriaLabel: string // dialog aria-label
  cookieBody: string // 横幅正文(含占位 {privacy} 用于插入隐私政策链接)
  cookiePrivacyLink: string // "Privacy Policy" 链接锚文本
  cookieAcceptAll: string // "Accept all"
  cookieNecessaryOnly: string // "Necessary only"
  // 博客索引页(/blog/)
  blogIndexTitle: string // 页面 H1
  blogIndexSubtitle: string // 副标题
  blogReadMore: string // "Read more →"
  blogReadTime: string // "{time} read"(文章列表卡片用)
  blogIndexEmpty: string // "No posts yet — check back soon."
  blogCtaBody: string // 底部" Prefer doing over reading?" 段
  blogCtaExplore: string // "Explore all tools"
  blogCtaAbout: string // "About {site}"
  // 博客文章底部工具箱推荐 Banner(BlogToolsBanner)
  blogBannerEyebrow: string // "Try the toolbox"
  blogBannerTitle: string // "Featured tools, free and in-browser"
  blogBannerBody: string
  blogBannerBrowse: string // "Browse all {count}+ tools"
  // 首页底部 SEO 文案区(Why Use / Browse / Popular 三段)
  seoWhyTitle: string
  seoWhyBody1: string
  seoWhyPrivacy: string // <strong>Privacy by design.</strong>
  seoWhyPrivacyBody: string
  seoWhyInstant: string // <strong>Instant results.</strong>
  seoWhyInstantBody: string
  seoWhyNoFriction: string // <strong>No friction.</strong>
  seoWhyNoFrictionBody: string
  seoWhyBody2: string // 结尾段(含 {count})
  seoBrowseTitle: string
  seoBrowseBody: string // 含 {fullDir} 内链 + {count}
  seoBrowseFullDir: string // 内链锚文本 "full tools directory"
  seoBrowseCountSuffix: string // "({count} tools)" 列表项后缀
  seoPopularTitle: string
  seoPopularBody: string
  // ── 姊妹站 WhatIf 横幅(whatif.axtrivc.com 投资回放动画) ──
  whatifTitle: string
  whatifBody: string
  whatifCta: string
  // ── 首页 Bento 活工具矩阵(LiveBento)──
  bentoTitle: string
  bentoSubtitle: string
  bentoPercentTitle: string
  bentoPercentOf: string // "What is"
  bentoPercentIs: string // "{a}% of {b} is"
  bentoPercentResultLabel: string
  bentoConverterTitle: string
  bentoConverterSwap: string
  bentoMortgageTitle: string
  bentoMortgageMonthly: string
  bentoMortgageDemo: string
  bentoVisitorsTitle: string
  bentoVisitorsToday: string
  bentoVisitorsTotal: string
  bentoTodayTitle: string
  bentoTodayWeekN: string // "Week {n}"
  bentoTodayDaysLeft: string // "{n} days left in {y}"
  bentoOpenTool: string
  searchQuickAnswer: string
  // ── 工具页共享组件本地化(FavoriteButton / VisibleFaqs / EmbedTool /
  //    Disclaimer / FormulaSection / makeTextTool 等共享 chrome) ──
  // FavoriteButton
  favSave: string // "Save"
  favSaved: string // "Saved"
  favAddAria: string // "Add {name} to favorites"
  favRemoveAria: string // "Remove {name} from favorites"
  favSaveTitle: string // "Save to favorites"
  favSavedTitle: string // "Saved to favorites"
  // VisibleFaqs
  faqsTitle: string // "Frequently Asked Questions"
  // EmbedTool
  embedTitle: string // "Embed this free tool on your blog"
  embedSubtitle: string // "copy & paste, no attribution required"
  embedBody: string // "Paste this HTML anywhere on your site to embed the {name}. ..."
  embedCopyLabel: string // "Copy embed code"
  // Disclaimer(金融/健康)
  disclaimerFinance: string
  disclaimerHealth: string
  // FormulaSection
  formulaTitle: string // "Formula & How It Works"
  formulaIntro: string // "The {name} is based on the following formula:"
  // makeTextTool 工厂 chrome(覆盖 ~28 个文本工具)
  textToolClear: string // "Clear"
  textToolInputPlaceholder: string // "Type or paste your text here..."
  textToolResultPlaceholder: string // "Result will appear here..."
  textToolChars: string // "{count} characters"
  textToolWords: string // "{count} words"
}

const en: Dict = {
  navAllTools: 'All Tools',
  toolsDirHeroBody: "{count}+ free online tools across finance, math, health, unit conversion, text, and developer utilities. Pick a category below or search from the home page.",
  toolsDirCta: "search from the home page",
  toolsDirSeoTitle: "One Toolbox for Everyday Tasks",
  toolsDirSeoP1: "Instead of hunting down a different website for every small job, ToolHub puts the utilities you reach for most in one place. Need to convert kilograms to pounds, calculate a mortgage payment, format a JSON payload, or generate a strong password? It is all here, and it all runs locally in your browser.",
  toolsDirSeoP2: "Every tool on this page is free with no signup and no upload. That means nothing you type ever leaves your device, which matters for sensitive inputs like salary figures, health numbers, or code snippets. Bookmark this page — we add new tools regularly based on what readers actually search for.",
  navAbout: 'About',
  navBlog: 'Blog',
  navContact: 'Contact',
  heroBadge: '{count}+',
  heroTitle1: 'Free Online Tools',
  heroTitle2: 'That Just Work',
  heroSubtitle:
    'Fast, privacy-friendly utilities for developers, students, and everyday tasks. Everything runs right in your browser — no signup, no upload, no tracking.',
  heroOfflineBadge: '⚡ 100% Client-Side & Works Offline',
  heroCtaExplore: 'Explore {count}+ Free Tools',
  searchPlaceholder: 'Search {count} tools... (e.g. "loan", "json", "kg to lb")',
  heroSearchLabel: 'Search tools',
  categoryAll: 'All',
  showingAll: 'Showing all {count} tools',
  showingFiltered: '{filtered} of {total} tools',
  noResults: 'No tools match "{query}".',
  noResultsHint: 'Clear search',
  clearSearch: 'Clear search',
  featuredTitle: 'Popular Tools',
  featuredBadgePopular: 'POPULAR',
  featuredBadgeNew: 'NEW',
  badgePro: 'Pro',
  badgeFree: 'Free',
  footerAbout: 'About',
  footerContact: 'Contact',
  footerPrivacy: 'Privacy',
  footerTerms: 'Terms',
  footerTagline:
    'Free, fast, and privacy-friendly online tools. Everything runs in your browser — no data leaves your device.',
  footerRights: 'tools and counting. All rights reserved.',
  footerMore: '+{count} more',
  statsTotalVisits: 'Total visits',
  statsTodayVisits: 'Today',
  statsTodayVisitors: 'Visitors today',
  statsAriaLabel: 'Site visitor statistics',
  toolHome: 'Home',
  toolResult: 'Result',
  toolCopy: 'Copy',
  toolCopied: '✓ Copied',
  toolLoadSample: 'Load Sample',
  toolSampleOverwrite: 'Overwrite inputs?',
  toolSampleLoaded: '✓ Sample loaded',
  toolLoadSampleTitle: 'Auto-fill a realistic example',
  toolCopySummary: 'Copy Summary',
  toolDownload: 'Download',
  toolDownloaded: '✓ Downloaded',
  relatedTitle: 'Related Tools',
  relatedSubtitle: 'More tools you might find useful',
  recentTitle: 'Recently Used & Favorites',
  recentSubtitle: 'Pick up right where you left off',
  // Workspace 仪表盘
  workspaceEyebrow: 'Workspace / Developer & Creator Toolhub',
  workspaceStatus: '100% LOCAL COMPUTE ENGINE · ZERO DATA LOGS',
  workspaceBadgeEngines: '{count}+ Utility Engines',
  workspaceBadgeInstant: 'Instant Local Compute',
  workspaceBadgeZeroLogs: 'Zero Server Storage',
  workspaceQuickAccess: 'Quick Access',
  workspacePinnedTitle: 'Pinned Tools',
  workspacePinnedEmpty: 'Nothing pinned yet — hit the pin on any tool card to dock it here.',
  workspaceRecentTitle: 'Recent Tools',
  workspaceRecentClear: 'Clear',
  workspacePin: 'Pin to workspace',
  workspaceUnpin: 'Unpin',
  scratchpadTitle: 'Scratchpad & Quick Utility',
  scratchpadSubtitle: 'Auto-saves to your browser — nothing is uploaded.',
  scratchpadPlaceholder: 'Paste JSON, Base64, tokens, or temporary notes here for quick transform...',
  scratchpadClear: 'Clear',
  scratchpadStats: '{words} words · {chars} chars',
  scratchpadSaved: 'Saved',
  scratchpadFormatJson: 'Format JSON',
  scratchpadB64Enc: 'Base64 Enc',
  scratchpadB64Dec: 'Base64 Dec',
  scratchpadUpper: 'UPPER',
  scratchpadLower: 'lower',
  scratchpadTrim: 'Trim',
  scratchpadErrorJson: 'invalid JSON',
  scratchpadErrorBase64: 'invalid Base64',
  workspaceTabDeveloper: 'Developer',
  workspaceTabDesign: 'Design & Color',
  workspaceTabText: 'Text & Writing',
  workspaceTabConverters: 'Converters',
  workspaceTabUtilities: 'Utilities',
  hubTitleAI: 'AI & LLM Toolkit',
  hubTitleDeveloper: 'Developer & Code',
  hubTitleDesign: 'Design & CSS Utilities',
  hubTitleText: 'Text & Content Creation',
  hubTitleFinance: 'Finance & SaaS Calculators',
  hubTitleConverters: 'Converters & Formats',
  hubTitleUtilities: 'Utilities & Math',
  hubTaglineAI: 'Estimate token costs, repair JSON output, and build function calls.',
  hubTaglineDeveloper: 'Essential tools for modern devs & API tasks',
  hubTaglineDesign: 'Color, gradients & layout utilities for pixel-perfect UI',
  hubTaglineText: 'Write, count, convert & polish words at speed',
  hubTaglineFinance: 'Loans, mortgages, ROI & pricing math made simple',
  hubTaglineConverters: 'Units, time & number formats — instant conversions',
  hubTaglineUtilities: 'Everyday math, health, time & education helpers',
  hubExploreAll: 'Explore all {count} tools',
  toolsCount: '{count} tools',
  hubBackToThemes: 'All themes',
  workspaceDrawerSubtitle: 'Pinned tools, recents & scratchpad',
  sitemapDirectory: 'Directory',
  adLabel: 'Advertisement',
  themeToggle: 'Toggle theme',
  themeLight: 'Light',
  themeDark: 'Dark',
  languageToggle: 'Switch language',
  menuToggle: 'Toggle menu',
  menuClose: 'Close menu',
  menuLabel: 'Menu',
  // 全局搜索弹窗(Cmd/Ctrl+K)
  searchOpen: 'Search tools (Ctrl+K)',
  searchPaletteTitle: 'Search tools',
  searchPalettePlaceholder: 'Search tools by name or keyword…',
  searchPaletteHint: '{count} tools',
  searchNoResults: 'No matching tools. Try another keyword.',
  searchClose: 'Close search',
  searchKbdSelect: 'to select',
  searchKbdMove: 'to navigate',
  searchKbdClose: 'to close',
  // 404 页面
  notFoundTitle: 'Page not found',
  notFoundBody:
    "We couldn't find that page. It may have been moved or never existed. Try one of our popular tools instead:",
  notFoundBack: '← Back to all tools',
  errorTitle: 'Something went wrong',
  errorBody: 'An unexpected error occurred. Please try again, or return to the homepage.',
  errorRetry: 'Try again',
  errorHome: 'Back to home',
  skipToContent: 'Skip to content',
  errorDigest: 'Error code: {digest} — include this code if you report the issue.',
  loading: 'Loading…',
  heroMultilingualBadge: '🌐 Available in 4 Languages: EN | 中文 | Español | Deutsch',
  // Cookie 同意横幅
  cookieAriaLabel: 'Cookie consent',
  cookieBody: 'We use cookies to keep tools free and improve your experience. By using the site you consent to cookies — see our {privacy}.',
  cookiePrivacyLink: 'Privacy Policy',
  cookieAcceptAll: 'Accept all',
  cookieNecessaryOnly: 'Necessary only',
  // 博客索引页
  blogIndexTitle: 'Blog',
  blogIndexSubtitle: 'Engineering notes, architecture deep-dives, and build-in-public updates.',
  blogReadMore: 'Read more',
  blogReadTime: '{time} read',
  blogIndexEmpty: 'No posts yet — check back soon.',
  blogCtaBody: 'Prefer doing over reading? Jump straight into the toolbox.',
  blogCtaExplore: 'Explore all tools',
  blogCtaAbout: 'About {site}',
  blogBannerEyebrow: 'Try the toolbox',
  blogBannerTitle: 'Featured tools, free and in-browser',
  blogBannerBody:
    'No signup, no upload, no tracking. Everything below runs entirely in your tab — exactly the architecture this post describes.',
  blogBannerBrowse: 'Browse all {count}+ tools',
  // 首页底部 SEO 文案区
  seoWhyTitle: 'Why Use Our Online Tools?',
  seoWhyBody1: 'Most online tools ask you to sign up, accept cookies, or upload your files to a server you can\'t audit. We do things differently: every tool here runs entirely in your browser. That means three things for you:',
  seoWhyPrivacy: 'Privacy by design.',
  seoWhyPrivacyBody: ' Your text and files never leave your device. There is no server processing your input, so there is nothing to leak.',
  seoWhyInstant: 'Instant results.',
  seoWhyInstantBody: ' No round-trip to a server means no waiting. Tools respond as fast as you can type.',
  seoWhyNoFriction: 'No friction.',
  seoWhyNoFrictionBody: ' No account, no paywall, no "upgrade to continue." Open the page and start using it.',
  seoWhyBody2: 'We focus on utilities that solve a single problem well — from calculating loan payments and converting units, to formatting JSON and generating QR codes. With {count}+ tools across finance, math, health, unit conversion, and developer utilities, there\'s a good chance we have what you need. New tools are added regularly, so bookmark this page.',
  seoBrowseTitle: 'Browse Tools by Category',
  seoBrowseBody: 'Looking for something specific? Jump straight to a category, or open the {fullDir} to search all {count} tools.',
  seoBrowseFullDir: 'full tools directory',
  seoBrowseCountSuffix: '({count} tools)',
  seoPopularTitle: 'Popular Tools',
  seoPopularBody: 'Some of our most-used utilities, good places to start:',
  whatifTitle: 'WhatIf — Investment Replay',
  whatifBody: 'What if you had bought Microsoft in 1996, or Bitcoin in 2013? Pick a stock, a year and an amount, then watch compound growth replay day by day.',
  whatifCta: 'Try the replay →',
  bentoTitle: 'Try a tool right now',
  bentoSubtitle: 'No signup, nothing to install — every tool runs in your browser.',
  bentoPercentTitle: 'Quick percentage',
  bentoPercentOf: 'What is',
  bentoPercentIs: '% of',
  bentoPercentResultLabel: 'Answer',
  bentoConverterTitle: 'cm ↔ in',
  bentoConverterSwap: 'Swap units',
  bentoMortgageTitle: 'Mortgage payment',
  bentoMortgageMonthly: 'per month',
  bentoMortgageDemo: 'watching a live example',
  bentoVisitorsTitle: 'Live visitors',
  bentoVisitorsToday: 'today',
  bentoVisitorsTotal: 'all-time visits',
  bentoTodayTitle: 'Today',
  bentoTodayWeekN: 'Week {n} of the year',
  bentoTodayDaysLeft: '{n} days left in {y}',
  bentoOpenTool: 'Open the full tool →',
  searchQuickAnswer: 'Quick answer — press Enter for the full tool',
  // ── 工具页共享组件 chrome ──
  favSave: 'Save',
  favSaved: 'Saved',
  favAddAria: 'Add {name} to favorites',
  favRemoveAria: 'Remove {name} from favorites',
  favSaveTitle: 'Save to favorites',
  favSavedTitle: 'Saved to favorites',
  faqsTitle: 'Frequently Asked Questions',
  embedTitle: 'Embed this free tool on your blog',
  embedSubtitle: 'copy & paste, no attribution required',
  embedBody:
    'Paste this HTML anywhere on your site to embed the {name}. Adjust the height and max-width to fit your layout.',
  embedCopyLabel: 'Copy embed code',
  disclaimerFinance:
    'Disclaimer: This calculator is for informational and educational purposes only and does not constitute financial, investment, or legal advice. Calculated results are estimates based on the inputs you provide; actual figures may vary. Always consult a qualified professional before making financial decisions.',
  disclaimerHealth:
    'Disclaimer: This tool is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Results are estimates and should be discussed with a qualified healthcare provider before making health-related decisions.',
  formulaTitle: 'Formula & How It Works',
  formulaIntro: 'The {name} is based on the following formula:',
  textToolClear: 'Clear',
  textToolInputPlaceholder: 'Type or paste your text here...',
  textToolResultPlaceholder: 'Result will appear here...',
  textToolChars: '{count} characters',
  textToolWords: '{count} words',
}

const zh: Dict = {
  navAllTools: '全部工具',
  toolsDirHeroBody: "{count}+ 个免费在线工具,覆盖金融、数学、健康、单位换算、文本和开发者实用程序。在下方选择分类,或从首页搜索。",
  toolsDirCta: "从首页搜索",
  toolsDirSeoTitle: "一个工具箱,搞定日常所有任务",
  toolsDirSeoP1: "不必再为每个小任务翻找不同的网站——ToolHub 把你最常用的实用工具集中在一处。公斤换算磅、计算房贷月供、格式化 JSON、生成强密码?全都在这里,而且全部在你的浏览器本地运行。",
  toolsDirSeoP2: "本页所有工具免费、无需注册、不上传任何数据。你输入的内容(薪资、健康数据、代码片段等敏感信息)永远不会离开你的设备。收藏本页——我们会根据读者的真实搜索持续新增工具。",
  navAbout: '关于',
  navBlog: '博客',
  navContact: '联系',
  heroBadge: '{count}+',
  heroTitle1: '免费在线工具',
  heroTitle2: '简单好用',
  heroSubtitle:
    '为开发者、学生和日常任务打造的快速、注重隐私的实用工具。所有计算都在浏览器中完成 —— 无需注册,无需上传,不追踪。',
  heroOfflineBadge: '⚡ 100% 本地运行 · 支持离线',
  heroCtaExplore: '探索 {count}+ 免费工具',
  searchPlaceholder: '搜索 {count} 个工具...(例如 "loan"、"json"、"kg to lb")',
  heroSearchLabel: '搜索工具',
  categoryAll: '全部',
  showingAll: '显示全部 {count} 个工具',
  showingFiltered: '共 {total} 个中的 {filtered} 个',
  noResults: '没有匹配 "{query}" 的工具。',
  noResultsHint: '清除搜索',
  clearSearch: '清除搜索',
  featuredTitle: '热门工具',
  featuredBadgePopular: '热门',
  featuredBadgeNew: '新',
  badgePro: '专业',
  badgeFree: '免费',
  footerAbout: '关于',
  footerContact: '联系',
  footerPrivacy: '隐私',
  footerTerms: '条款',
  footerTagline:
    '免费、快速、注重隐私的在线工具。所有操作都在浏览器中完成 —— 数据不会离开你的设备。',
  footerRights: '个工具,持续增加中。保留所有权利。',
  footerMore: '还有 {count} 个',
  statsTotalVisits: '总访问',
  statsTodayVisits: '今日访问',
  statsTodayVisitors: '今日访客',
  statsAriaLabel: '站点访客统计',
  toolHome: '首页',
  toolResult: '结果',
  toolCopy: '复制',
  toolCopied: '✓ 已复制',
  toolLoadSample: '加载示例',
  toolSampleOverwrite: '覆盖当前输入?',
  toolSampleLoaded: '✓ 已加载示例',
  toolLoadSampleTitle: '自动填充一个真实示例',
  toolCopySummary: '复制摘要',
  toolDownload: '下载',
  toolDownloaded: '✓ 已下载',
  relatedTitle: '相关工具',
  relatedSubtitle: '你可能还会用到的工具',
  recentTitle: '最近使用与收藏',
  recentSubtitle: '从上次离开的地方继续',
  // Workspace 仪表盘
  workspaceEyebrow: '工作台 / 开发者与创作者工具中心',
  workspaceStatus: '100% 本地计算引擎 · 零数据日志',
  workspaceBadgeEngines: '{count}+ 个实用引擎',
  workspaceBadgeInstant: '即时本地计算',
  workspaceBadgeZeroLogs: '零服务器存储',
  workspaceQuickAccess: '快速访问',
  workspacePinnedTitle: '已固定工具',
  workspacePinnedEmpty: '还没有固定工具 —— 点击任意工具卡片上的图钉,把它固定到这里。',
  workspaceRecentTitle: '最近使用',
  workspaceRecentClear: '清空',
  workspacePin: '固定到工作台',
  workspaceUnpin: '取消固定',
  scratchpadTitle: '随手记与快捷工具',
  scratchpadSubtitle: '自动保存到浏览器 —— 内容不会上传。',
  scratchpadPlaceholder: '粘贴 JSON、Base64、令牌或临时笔记,就地快速变换…',
  scratchpadClear: '清空',
  scratchpadStats: '{words} 词 · {chars} 字符',
  scratchpadSaved: '已保存',
  scratchpadFormatJson: '格式化 JSON',
  scratchpadB64Enc: 'Base64 编码',
  scratchpadB64Dec: 'Base64 解码',
  scratchpadUpper: '大写',
  scratchpadLower: '小写',
  scratchpadTrim: '清理空白',
  scratchpadErrorJson: 'JSON 无效',
  scratchpadErrorBase64: 'Base64 无效',
  workspaceTabDeveloper: '开发',
  workspaceTabDesign: '设计与颜色',
  workspaceTabText: '文本与写作',
  workspaceTabConverters: '转换器',
  workspaceTabUtilities: '实用工具',
  hubTitleAI: 'AI 与大模型工具',
  hubTitleDeveloper: '开发与代码',
  hubTitleDesign: '设计与 CSS 工具',
  hubTitleText: '文本与内容创作',
  hubTitleFinance: '金融与 SaaS 计算器',
  hubTitleConverters: '转换器与格式',
  hubTitleUtilities: '实用工具与数学',
  hubTaglineAI: '估算 token 成本、修复 JSON 输出、构造函数调用——服务 AI 开发工作流。',
  hubTaglineDeveloper: '现代开发与 API 任务的必备工具',
  hubTaglineDesign: '颜色、渐变与布局工具,打造像素级 UI',
  hubTaglineText: '快速写作、统计、转换与润色文本',
  hubTaglineFinance: '贷款、按揭、ROI 与定价计算,一算即得',
  hubTaglineConverters: '单位、时间与数字格式,即时转换',
  hubTaglineUtilities: '日常数学、健康、时间与教育小助手',
  hubExploreAll: '浏览全部 {count} 个工具',
  toolsCount: '{count} 个工具',
  hubBackToThemes: '全部主题',
  workspaceDrawerSubtitle: '固定工具、最近使用与随手记',
  sitemapDirectory: '站点目录',
  adLabel: '广告',
  themeToggle: '切换主题',
  themeLight: '浅色',
  themeDark: '深色',
  languageToggle: '切换语言',
  menuToggle: '切换菜单',
  menuClose: '关闭菜单',
  menuLabel: '菜单',
  // 全局搜索弹窗(Cmd/Ctrl+K)
  searchOpen: '搜索工具(Ctrl+K)',
  searchPaletteTitle: '搜索工具',
  searchPalettePlaceholder: '按名称或关键词搜索工具…',
  searchPaletteHint: '{count} 个工具',
  searchNoResults: '没有匹配的工具,换个关键词试试。',
  searchClose: '关闭搜索',
  searchKbdSelect: '选择',
  searchKbdMove: '移动',
  searchKbdClose: '关闭',
  // 404 页面
  notFoundTitle: '页面不存在',
  notFoundBody: '抱歉,找不到这个页面。它可能已被移动或从未存在。试试下面这些热门工具:',
  notFoundBack: '← 返回全部工具',
  errorTitle: '出错了',
  errorBody: '发生了意外错误。请重试,或返回首页。',
  errorRetry: '重试',
  errorHome: '返回首页',
  skipToContent: '跳到主要内容',
  errorDigest: '错误代码:{digest}——反馈问题时请附上此代码。',
  loading: '加载中…',
  heroMultilingualBadge: '🌐 已支持 4 种语言:EN | 中文 | Español | Deutsch',
  // Cookie 同意横幅
  cookieAriaLabel: 'Cookie 同意',
  cookieBody: '我们使用 cookie 以保持工具免费并改善体验。使用本站即表示你同意使用 cookie —— 见{privacy}。',
  cookiePrivacyLink: '隐私政策',
  cookieAcceptAll: '全部接受',
  cookieNecessaryOnly: '仅必要',
  // 博客索引页
  blogIndexTitle: '博客',
  blogIndexSubtitle: '工程笔记、架构深度复盘,与公开构建(build in public)动态。',
  blogReadMore: '阅读全文',
  blogReadTime: '阅读 {time}',
  blogIndexEmpty: '暂无文章 —— 欢迎稍后再来。',
  blogCtaBody: '比起阅读更想动手?直接进入工具箱。',
  blogCtaExplore: '探索全部工具',
  blogCtaAbout: '关于 {site}',
  blogBannerEyebrow: '试试工具箱',
  blogBannerTitle: '精选工具,免费、浏览器内运行',
  blogBannerBody:
    '无需注册、无需上传、不追踪。下面的工具全部在你的浏览器标签页内运行 —— 正如本文所描述的架构。',
  blogBannerBrowse: '浏览全部 {count}+ 个工具',
  // 首页底部 SEO 文案区
  seoWhyTitle: '为什么要用我们的在线工具?',
  seoWhyBody1: '大多数在线工具都要你注册、接受 cookie,或把文件上传到无法审计的服务器。我们不一样:这里的每个工具都完全在你的浏览器中运行。这对你意味着三件事:',
  seoWhyPrivacy: '隐私优先。',
  seoWhyPrivacyBody: ' 你的文本和文件绝不离开你的设备。没有服务器处理你的输入,也就没有东西可泄露。',
  seoWhyInstant: '即时结果。',
  seoWhyInstantBody: '无需往返服务器,意味着无需等待。工具响应速度和你打字一样快。',
  seoWhyNoFriction: '零摩擦。',
  seoWhyNoFrictionBody: '没有账号、没有付费墙、没有"升级以继续"。打开页面就能用。',
  seoWhyBody2: '我们专注把单一问题解决好的实用工具 —— 从计算贷款、单位换算,到格式化 JSON、生成二维码。涵盖金融、数学、健康、单位换算和开发者工具的 {count}+ 个工具,大概率有你需要的。新工具持续更新,欢迎收藏本页。',
  seoBrowseTitle: '按分类浏览工具',
  seoBrowseBody: '想找特定的工具?直接跳到某个分类,或打开{fullDir}搜索全部 {count} 个工具。',
  seoBrowseFullDir: '完整工具目录',
  seoBrowseCountSuffix: '({count} 个工具)',
  seoPopularTitle: '热门工具',
  seoPopularBody: '我们最常用的几款工具,适合从这里开始:',
  whatifTitle: '假如当时买了 · WhatIf',
  whatifBody: '假如 1996 年买入微软、2013 年买入比特币,今天值多少钱?选一只股票、一个年份、一笔本金,看复利逐日回放的动画。',
  whatifCta: '去看回放 →',
  bentoTitle: '现在就上手试一个',
  bentoSubtitle: '无需注册、无需安装——所有工具都在浏览器里运行。',
  bentoPercentTitle: '快速算百分比',
  bentoPercentOf: '多少是',
  bentoPercentIs: '% 的',
  bentoPercentResultLabel: '答案',
  bentoConverterTitle: '厘米 ↔ 英寸',
  bentoConverterSwap: '交换单位',
  bentoMortgageTitle: '房贷月供',
  bentoMortgageMonthly: '每月',
  bentoMortgageDemo: '正在演示实时示例',
  bentoVisitorsTitle: '实时访客',
  bentoVisitorsToday: '今日',
  bentoVisitorsTotal: '累计访问',
  bentoTodayTitle: '今天',
  bentoTodayWeekN: '一年中的第 {n} 周',
  bentoTodayDaysLeft: '距 {y} 年结束还有 {n} 天',
  bentoOpenTool: '打开完整工具 →',
  searchQuickAnswer: '快速答案——回车打开完整工具',
  // ── 工具页共享组件 chrome ──
  favSave: '收藏',
  favSaved: '已收藏',
  favAddAria: '将 {name} 加入收藏',
  favRemoveAria: '将 {name} 移出收藏',
  favSaveTitle: '加入收藏',
  favSavedTitle: '已收藏',
  faqsTitle: '常见问题',
  embedTitle: '将此免费工具嵌入你的博客',
  embedSubtitle: '复制粘贴即可,无需注明出处',
  embedBody: '把这段 HTML 粘贴到你网站的任意位置即可嵌入 {name}。可按需调整 height 与 max-width 以适配你的版式。',
  embedCopyLabel: '复制嵌入代码',
  disclaimerFinance:
    '免责声明:本计算器仅供信息与教育用途,不构成金融、投资或法律建议。计算结果基于你输入的数值估算,实际数字可能有所不同。做出金融决策前请务必咨询合格的专业人士。',
  disclaimerHealth:
    '免责声明:本工具仅供教育用途,不能替代专业的医疗建议、诊断或治疗。结果仅为估算值,做出与健康相关的决定前请与合格的医疗服务提供者商讨。',
  formulaTitle: '公式与原理',
  formulaIntro: '{name} 基于以下公式:',
  textToolClear: '清空',
  textToolInputPlaceholder: '在此输入或粘贴文本…',
  textToolResultPlaceholder: '结果将显示在这里…',
  textToolChars: '{count} 字符',
  textToolWords: '{count} 词',
}

const es: Dict = {
  navAllTools: 'Todas las herramientas',
  toolsDirHeroBody: "{count}+ herramientas online gratuitas de finanzas, matemáticas, salud, conversión de unidades, texto y utilidades para desarrolladores. Elige una categoría abajo o busca desde la página principal.",
  toolsDirCta: "buscar desde la página principal",
  toolsDirSeoTitle: "Una caja de herramientas para el día a día",
  toolsDirSeoP1: "En lugar de buscar una web distinta para cada tarea pequeña, ToolHub reúne en un solo lugar las utilidades que más usas. ¿Convertir kilos a libras, calcular una hipoteca, formatear JSON o generar una contraseña fuerte? Está todo aquí y funciona localmente en tu navegador.",
  toolsDirSeoP2: "Todas las herramientas son gratuitas, sin registro y sin subidas: lo que escribas nunca sale de tu dispositivo, importante con datos sensibles como salarios, cifras de salud o código. Guarda esta página — añadimos herramientas nuevas según lo que la gente busca de verdad.",
  navAbout: 'Acerca de',
  navBlog: 'Blog',
  navContact: 'Contacto',
  heroBadge: '{count}+',
  heroTitle1: 'Herramientas online gratis',
  heroTitle2: 'Que simplemente funcionan',
  heroSubtitle:
    'Utilidades rápidas y respetuosas con la privacidad para desarrolladores, estudiantes y tareas diarias. Todo se ejecuta en tu navegador: sin registro, sin subir archivos, sin rastreo.',
  heroOfflineBadge: '⚡ 100% en el cliente · Sin conexión',
  heroCtaExplore: 'Explorar más de {count} herramientas gratuitas',
  searchPlaceholder: 'Buscar {count} herramientas... (p. ej. "préstamo", "json", "kg a lb")',
  heroSearchLabel: 'Buscar herramientas',
  categoryAll: 'Todas',
  showingAll: 'Mostrando las {count} herramientas',
  showingFiltered: '{filtered} de {total} herramientas',
  noResults: 'Ninguna herramienta coincide con "{query}".',
  noResultsHint: 'Limpiar búsqueda',
  clearSearch: 'Limpiar búsqueda',
  featuredTitle: 'Herramientas populares',
  featuredBadgePopular: 'POPULAR',
  featuredBadgeNew: 'NUEVO',
  badgePro: 'Pro',
  badgeFree: 'Gratis',
  footerAbout: 'Acerca de',
  footerContact: 'Contacto',
  footerPrivacy: 'Privacidad',
  footerTerms: 'Términos',
  footerTagline:
    'Herramientas online gratuitas, rápidas y respetuosas con la privacidad. Todo se ejecuta en tu navegador: ningún dato sale de tu dispositivo.',
  footerRights: 'herramientas y contando. Todos los derechos reservados.',
  footerMore: '+{count} más',
  statsTotalVisits: 'Visitas totales',
  statsTodayVisits: 'Hoy',
  statsTodayVisitors: 'Visitantes hoy',
  statsAriaLabel: 'Estadísticas de visitas del sitio',
  toolHome: 'Inicio',
  toolResult: 'Resultado',
  toolCopy: 'Copiar',
  toolCopied: '✓ Copiado',
  toolLoadSample: 'Cargar ejemplo',
  toolSampleOverwrite: '¿Sobrescribir los valores?',
  toolSampleLoaded: '✓ Ejemplo cargado',
  toolLoadSampleTitle: 'Rellenar automáticamente un ejemplo realista',
  toolCopySummary: 'Copiar resumen',
  toolDownload: 'Descargar',
  toolDownloaded: '✓ Descargado',
  relatedTitle: 'Herramientas relacionadas',
  relatedSubtitle: 'Más herramientas que podrían ser útiles',
  recentTitle: 'Usadas recientemente y favoritos',
  recentSubtitle: 'Continúa justo donde lo dejaste',
  // Workspace 仪表盘
  workspaceEyebrow: 'Workspace / Centro de herramientas para desarrolladores y creadores',
  workspaceStatus: 'MOTOR DE CÓMPUTO 100% LOCAL · CERO REGISTROS DE DATOS',
  workspaceBadgeEngines: '{count}+ motores de utilidad',
  workspaceBadgeInstant: 'Cómputo local instantáneo',
  workspaceBadgeZeroLogs: 'Cero almacenamiento en servidor',
  workspaceQuickAccess: 'Acceso rápido',
  workspacePinnedTitle: 'Herramientas fijadas',
  workspacePinnedEmpty: 'Nada fijado aún — toca el pin en cualquier tarjeta para anclarla aquí.',
  workspaceRecentTitle: 'Herramientas recientes',
  workspaceRecentClear: 'Borrar',
  workspacePin: 'Fijar al workspace',
  workspaceUnpin: 'Quitar fijación',
  scratchpadTitle: 'Bloc y utilidades rápidas',
  scratchpadSubtitle: 'Se guarda automáticamente en tu navegador — nada se sube.',
  scratchpadPlaceholder: 'Pega JSON, Base64, tokens o notas temporales para transformarlas al instante…',
  scratchpadClear: 'Limpiar',
  scratchpadStats: '{words} palabras · {chars} caracteres',
  scratchpadSaved: 'Guardado',
  scratchpadFormatJson: 'Formatear JSON',
  scratchpadB64Enc: 'Base64 Cod',
  scratchpadB64Dec: 'Base64 Dec',
  scratchpadUpper: 'MAYÚS',
  scratchpadLower: 'minús',
  scratchpadTrim: 'Recortar',
  scratchpadErrorJson: 'JSON no válido',
  scratchpadErrorBase64: 'Base64 no válido',
  workspaceTabDeveloper: 'Desarrollo',
  workspaceTabDesign: 'Diseño y color',
  workspaceTabText: 'Texto y escritura',
  workspaceTabConverters: 'Conversores',
  workspaceTabUtilities: 'Utilidades',
  hubTitleAI: 'Herramientas de IA y LLM',
  hubTitleDeveloper: 'Desarrollo y código',
  hubTitleDesign: 'Diseño y utilidades CSS',
  hubTitleText: 'Texto y creación de contenido',
  hubTitleFinance: 'Calculadoras financieras y SaaS',
  hubTitleConverters: 'Conversores y formatos',
  hubTitleUtilities: 'Utilidades y matemáticas',
  hubTaglineAI: 'Estima costes de tokens, repara JSON y construye llamadas a funciones.',
  hubTaglineDeveloper: 'Herramientas esenciales para desarrollo moderno y tareas de API',
  hubTaglineDesign: 'Color, gradientes y layout para una UI perfecta al píxel',
  hubTaglineText: 'Escribe, cuenta, convierte y pule textos a toda velocidad',
  hubTaglineFinance: 'Préstamos, hipotecas, ROI y precios sin complicaciones',
  hubTaglineConverters: 'Unidades, tiempo y formatos numéricos — conversiones al instante',
  hubTaglineUtilities: 'Ayudas de matemáticas, salud, tiempo y educación para el día a día',
  hubExploreAll: 'Explorar las {count} herramientas',
  toolsCount: '{count} herramientas',
  hubBackToThemes: 'Todos los temas',
  workspaceDrawerSubtitle: 'Fijados, recientes y bloc de notas',
  sitemapDirectory: 'Directorio',
  adLabel: 'Publicidad',
  themeToggle: 'Cambiar tema',
  themeLight: 'Claro',
  themeDark: 'Oscuro',
  languageToggle: 'Cambiar idioma',
  menuToggle: 'Alternar menú',
  menuClose: 'Cerrar menú',
  menuLabel: 'Menú',
  // 全局搜索弹窗(Cmd/Ctrl+K)
  searchOpen: 'Buscar herramientas (Ctrl+K)',
  searchPaletteTitle: 'Buscar herramientas',
  searchPalettePlaceholder: 'Busca herramientas por nombre o palabra clave…',
  searchPaletteHint: '{count} herramientas',
  searchNoResults: 'Sin coincidencias. Prueba con otra palabra clave.',
  searchClose: 'Cerrar búsqueda',
  searchKbdSelect: 'para seleccionar',
  searchKbdMove: 'para navegar',
  searchKbdClose: 'para cerrar',
  // 404 页面
  notFoundTitle: 'Página no encontrada',
  notFoundBody:
    'No pudimos encontrar esa página. Puede que se haya movido o que nunca haya existido. Prueba una de nuestras herramientas populares:',
  notFoundBack: '← Volver a todas las herramientas',
  errorTitle: 'Algo ha salido mal',
  errorBody: 'Ha ocurrido un error inesperado. Inténtalo de nuevo o vuelve al inicio.',
  errorRetry: 'Reintentar',
  errorHome: 'Volver al inicio',
  skipToContent: 'Saltar al contenido',
  errorDigest: 'Código de error: {digest}; inclúyelo si informas del problema.',
  loading: 'Cargando…',
  heroMultilingualBadge: '🌐 Disponible en 4 idiomas: EN | 中文 | Español | Deutsch',
  // Cookie 同意横幅
  cookieAriaLabel: 'Consentimiento de cookies',
  cookieBody: 'Usamos cookies para mantener las herramientas gratuitas y mejorar tu experiencia. Al usar el sitio aceptas las cookies — consulta nuestra {privacy}.',
  cookiePrivacyLink: 'Política de Privacidad',
  cookieAcceptAll: 'Aceptar todas',
  cookieNecessaryOnly: 'Solo necesarias',
  // 博客索引页
  blogIndexTitle: 'Blog',
  blogIndexSubtitle: 'Notas de ingeniería, análisis de arquitectura y novedades de construcción pública.',
  blogReadMore: 'Leer más',
  blogReadTime: '{time} de lectura',
  blogIndexEmpty: 'Aún no hay artículos — vuelve pronto.',
  blogCtaBody: '¿Prefieres hacer a leer? Entra directo a la caja de herramientas.',
  blogCtaExplore: 'Explorar todas las herramientas',
  blogCtaAbout: 'Acerca de {site}',
  blogBannerEyebrow: 'Prueba la caja de herramientas',
  blogBannerTitle: 'Herramientas destacadas, gratis y en el navegador',
  blogBannerBody:
    'Sin registro, sin subidas, sin rastreo. Todo lo que ves abajo se ejecuta por completo en tu pestaña — exactamente la arquitectura que describe este artículo.',
  blogBannerBrowse: 'Ver las {count}+ herramientas',
  // 首页底部 SEO 文案区
  seoWhyTitle: '¿Por qué usar nuestras herramientas online?',
  seoWhyBody1: 'La mayoría de herramientas online te piden registrarte, aceptar cookies o subir tus archivos a un servidor que no puedes auditar. Nosotros lo hacemos distinto: cada herramienta aquí se ejecuta por completo en tu navegador. Para ti eso significa tres cosas:',
  seoWhyPrivacy: 'Privacidad por diseño.',
  seoWhyPrivacyBody: ' Tu texto y tus archivos nunca salen de tu dispositivo. No hay servidor procesando tu entrada, así que no hay nada que filtrar.',
  seoWhyInstant: 'Resultados al instante.',
  seoWhyInstantBody: ' Sin ida y vuelta a un servidor, no hay esperas. Las herramientas responden tan rápido como escribes.',
  seoWhyNoFriction: 'Sin fricción.',
  seoWhyNoFrictionBody: ' Sin cuenta, sin muro de pago, sin "mejora para continuar". Abre la página y empieza a usarla.',
  seoWhyBody2: 'Nos centramos en utilidades que resuelven un único problema bien — desde calcular préstamos y convertir unidades, hasta formatear JSON y generar códigos QR. Con {count}+ herramientas de finanzas, matemáticas, salud, conversión de unidades y desarrollo, es muy probable que tengamos lo que buscas. Añadimos herramientas nuevas con regularidad, así que guarda esta página.',
  seoBrowseTitle: 'Explorar herramientas por categoría',
  seoBrowseBody: '¿Buscas algo concreto? Salta directo a una categoría o abre el {fullDir} para buscar entre las {count} herramientas.',
  seoBrowseFullDir: 'directorio completo de herramientas',
  seoBrowseCountSuffix: '({count} herramientas)',
  seoPopularTitle: 'Herramientas populares',
  seoPopularBody: 'Algunas de nuestras utilidades más usadas, un buen punto de partida:',
  whatifTitle: 'WhatIf — Replay de inversión',
  whatifBody: '¿Y si hubieras comprado Microsoft en 1996 o Bitcoin en 2013? Elige una acción, un año y un capital, y mira el interés compuesto día a día.',
  whatifCta: 'Ver la simulación →',
  bentoTitle: 'Prueba una herramienta ahora',
  bentoSubtitle: 'Sin registro ni instalación: todo corre en tu navegador.',
  bentoPercentTitle: 'Porcentaje rápido',
  bentoPercentOf: 'Cuánto es el',
  bentoPercentIs: '% de',
  bentoPercentResultLabel: 'Resultado',
  bentoConverterTitle: 'cm ↔ in',
  bentoConverterSwap: 'Intercambiar unidades',
  bentoMortgageTitle: 'Cuota hipotecaria',
  bentoMortgageMonthly: 'al mes',
  bentoMortgageDemo: 'ejemplo en vivo',
  bentoVisitorsTitle: 'Visitas en vivo',
  bentoVisitorsToday: 'hoy',
  bentoVisitorsTotal: 'visitas en total',
  bentoTodayTitle: 'Hoy',
  bentoTodayWeekN: 'Semana {n} del año',
  bentoTodayDaysLeft: 'quedan {n} días de {y}',
  bentoOpenTool: 'Abrir la herramienta →',
  searchQuickAnswer: 'Respuesta rápida — Enter abre la herramienta',
  // ── 工具页共享组件 chrome ──
  favSave: 'Guardar',
  favSaved: 'Guardado',
  favAddAria: 'Añadir {name} a favoritos',
  favRemoveAria: 'Quitar {name} de favoritos',
  favSaveTitle: 'Guardar en favoritos',
  favSavedTitle: 'Guardado en favoritos',
  faqsTitle: 'Preguntas frecuentes',
  embedTitle: 'Embebe esta herramienta gratuita en tu blog',
  embedSubtitle: 'copia y pega, sin necesidad de atribución',
  embedBody: 'Pega este HTML en cualquier parte de tu sitio para embeber {name}. Ajusta el height y el max-width para que encaje en tu diseño.',
  embedCopyLabel: 'Copiar código para embeber',
  disclaimerFinance:
    'Aviso legal: Esta calculadora es solo para fines informativos y educativos y no constituye asesoramiento financiero, de inversión ni legal. Los resultados calculados son estimaciones basadas en los datos que introduces; las cifras reales pueden variar. Consulta siempre a un profesional cualificado antes de tomar decisiones financieras.',
  disclaimerHealth:
    'Aviso legal: Esta herramienta es solo para fines educativos y no sustituye el consejo, diagnóstico ni tratamiento médico profesional. Los resultados son estimaciones y deben comentarse con un profesional sanitario cualificado antes de tomar decisiones relacionadas con la salud.',
  formulaTitle: 'Fórmula y cómo funciona',
  formulaIntro: '{name} se basa en la siguiente fórmula:',
  textToolClear: 'Limpiar',
  textToolInputPlaceholder: 'Escribe o pega tu texto aquí…',
  textToolResultPlaceholder: 'El resultado aparecerá aquí…',
  textToolChars: '{count} caracteres',
  textToolWords: '{count} palabras',
}

const de: Dict = {
  navAllTools: 'Alle Werkzeuge',
  toolsDirHeroBody: "{count}+ kostenlose Online-Tools aus Finanzen, Mathematik, Gesundheit, Einheitenumrechnung, Text und Entwicklerwerkzeugen. Wähle unten eine Kategorie oder suche von der Startseite.",
  toolsDirCta: "von der Startseite suchen",
  toolsDirSeoTitle: "Ein Werkzeugkasten für alltägliche Aufgaben",
  toolsDirSeoP1: "Statt für jede kleine Aufgabe eine andere Website zu suchen, findest du in ToolHub die meistgenutzten Helfer an einem Ort. Kilogramm in Pfund umrechnen, eine Hypothek berechnen, JSON formatieren oder ein starkes Passwort erzeugen? Alles hier – und alles läuft lokal in deinem Browser.",
  toolsDirSeoP2: "Alle Tools sind kostenlos, ohne Anmeldung und ohne Upload. Was du eingibst, verlässt dein Gerät nie – wichtig bei sensiblen Angaben wie Gehaltszahlen, Gesundheitswerten oder Code. Speichere diese Seite – neue Tools kommen regelmäßig dazu.",
  navAbout: 'Über',
  navBlog: 'Blog',
  navContact: 'Kontakt',
  heroBadge: '{count}+',
  heroTitle1: 'Kostenlose Online-Werkzeuge',
  heroTitle2: 'Die einfach funktionieren',
  heroSubtitle:
    'Schnelle, datenschutzfreundliche Helfer für Entwickler, Studierende und Alltag. Alles läuft direkt im Browser — keine Anmeldung, kein Upload, kein Tracking.',
  heroOfflineBadge: '⚡ 100% clientseitig · Offline-fähig',
  heroCtaExplore: 'Über {count} kostenlose Tools entdecken',
  searchPlaceholder: '{count} Werkzeuge durchsuchen... (z. B. "Kredit", "json", "kg in lb")',
  heroSearchLabel: 'Werkzeuge suchen',
  categoryAll: 'Alle',
  showingAll: 'Zeige alle {count} Werkzeuge',
  showingFiltered: '{filtered} von {total} Werkzeugen',
  noResults: 'Keine Werkzeuge passen zu „{query}".',
  noResultsHint: 'Suche löschen',
  clearSearch: 'Suche löschen',
  featuredTitle: 'Beliebte Werkzeuge',
  featuredBadgePopular: 'BELIEBT',
  featuredBadgeNew: 'NEU',
  badgePro: 'Pro',
  badgeFree: 'Gratis',
  footerAbout: 'Über',
  footerContact: 'Kontakt',
  footerPrivacy: 'Datenschutz',
  footerTerms: 'AGB',
  footerTagline:
    'Kostenlose, schnelle und datenschutzfreundliche Online-Werkzeuge. Alles läuft im Browser — keine Daten verlassen dein Gerät.',
  footerRights: 'Werkzeuge und es werden mehr. Alle Rechte vorbehalten.',
  footerMore: '+{count} weitere',
  statsTotalVisits: 'Besuche insgesamt',
  statsTodayVisits: 'Heute',
  statsTodayVisitors: 'Besucher heute',
  statsAriaLabel: 'Besucherstatistik der Website',
  toolHome: 'Start',
  toolResult: 'Ergebnis',
  toolCopy: 'Kopieren',
  toolCopied: '✓ Kopiert',
  toolLoadSample: 'Beispiel laden',
  toolSampleOverwrite: 'Eingaben überschreiben?',
  toolSampleLoaded: '✓ Beispiel geladen',
  toolLoadSampleTitle: 'Automatisch mit einem realistischen Beispiel füllen',
  toolCopySummary: 'Zusammenfassung kopieren',
  toolDownload: 'Herunterladen',
  toolDownloaded: '✓ Heruntergeladen',
  relatedTitle: 'Verwandte Werkzeuge',
  relatedSubtitle: 'Weitere Werkzeuge, die nützlich sein könnten',
  recentTitle: 'Zuletzt genutzt & Favoriten',
  recentSubtitle: 'Mach genau da weiter, wo du aufgehört hast',
  // Workspace 仪表盘
  workspaceEyebrow: 'Workspace / Toolhub für Entwickler & Creator',
  workspaceStatus: '100% LOKALE COMPUTE-ENGINE · KEINE DATENPROTOKOLLE',
  workspaceBadgeEngines: '{count}+ Utility-Engines',
  workspaceBadgeInstant: 'Sofortige lokale Berechnung',
  workspaceBadgeZeroLogs: 'Keine Server-Speicherung',
  workspaceQuickAccess: 'Schnellzugriff',
  workspacePinnedTitle: 'Angepinnte Tools',
  workspacePinnedEmpty: 'Noch nichts angepinnt — tippe auf die Pinnadel einer Tool-Karte, um sie hier abzulegen.',
  workspaceRecentTitle: 'Zuletzt genutzt',
  workspaceRecentClear: 'Leeren',
  workspacePin: 'An Workspace pinnen',
  workspaceUnpin: 'Pin entfernen',
  scratchpadTitle: 'Notizblock & Quick-Tools',
  scratchpadSubtitle: 'Speichert automatisch im Browser — nichts wird hochgeladen.',
  scratchpadPlaceholder: 'JSON, Base64, Tokens oder Notizen hier einfügen und direkt umwandeln…',
  scratchpadClear: 'Leeren',
  scratchpadStats: '{words} Wörter · {chars} Zeichen',
  scratchpadSaved: 'Gespeichert',
  scratchpadFormatJson: 'JSON formatieren',
  scratchpadB64Enc: 'Base64 Enc',
  scratchpadB64Dec: 'Base64 Dec',
  scratchpadUpper: 'GROSS',
  scratchpadLower: 'klein',
  scratchpadTrim: 'Trimmen',
  scratchpadErrorJson: 'ungültiges JSON',
  scratchpadErrorBase64: 'ungültiges Base64',
  workspaceTabDeveloper: 'Developer',
  workspaceTabDesign: 'Design & Farbe',
  workspaceTabText: 'Text & Schreiben',
  workspaceTabConverters: 'Konverter',
  workspaceTabUtilities: 'Werkzeuge',
  hubTitleAI: 'KI- & LLM-Werkzeuge',
  hubTitleDeveloper: 'Entwickler & Code',
  hubTitleDesign: 'Design & CSS-Tools',
  hubTitleText: 'Text & Content-Erstellung',
  hubTitleFinance: 'Finanz- & SaaS-Rechner',
  hubTitleConverters: 'Konverter & Formate',
  hubTitleUtilities: 'Werkzeuge & Mathe',
  hubTaglineAI: 'Token-Kosten schätzen, JSON reparieren, Function Calls bauen.',
  hubTaglineDeveloper: 'Essenzielle Tools für moderne Devs & API-Aufgaben',
  hubTaglineDesign: 'Farben, Verläufe & Layout-Tools für pixelgenaue UI',
  hubTaglineText: 'Texte schreiben, zählen, umwandeln & polieren – blitzschnell',
  hubTaglineFinance: 'Kredite, Hypotheken, ROI & Preise einfach berechnet',
  hubTaglineConverters: 'Einheiten, Zeit & Zahlenformate – sofort umgerechnet',
  hubTaglineUtilities: 'Alltagshelfer für Mathe, Gesundheit, Zeit & Bildung',
  hubExploreAll: 'Alle {count} Tools entdecken',
  toolsCount: '{count} Tools',
  hubBackToThemes: 'Alle Themen',
  workspaceDrawerSubtitle: 'Pins, Verlauf & Notizblock',
  sitemapDirectory: 'Verzeichnis',
  adLabel: 'Werbung',
  themeToggle: 'Theme wechseln',
  themeLight: 'Hell',
  themeDark: 'Dunkel',
  languageToggle: 'Sprache wechseln',
  menuToggle: 'Menü umschalten',
  menuClose: 'Menü schließen',
  menuLabel: 'Menü',
  // 全局搜索弹窗(Cmd/Ctrl+K)
  searchOpen: 'Werkzeuge suchen (Strg+K)',
  searchPaletteTitle: 'Werkzeuge suchen',
  searchPalettePlaceholder: 'Werkzeuge nach Name oder Stichwort suchen…',
  searchPaletteHint: '{count} Werkzeuge',
  searchNoResults: 'Keine Treffer. Versuche ein anderes Stichwort.',
  searchClose: 'Suche schließen',
  searchKbdSelect: 'zum Auswählen',
  searchKbdMove: 'zum Navigieren',
  searchKbdClose: 'zum Schließen',
  // 404 页面
  notFoundTitle: 'Seite nicht gefunden',
  notFoundBody:
    'Wir konnten diese Seite nicht finden. Vielleicht wurde sie verschoben oder hat nie existiert. Probiere eines unserer beliebten Tools:',
  notFoundBack: '← Zurück zu allen Tools',
  errorTitle: 'Etwas ist schiefgelaufen',
  errorBody: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut oder kehre zur Startseite zurück.',
  errorRetry: 'Erneut versuchen',
  errorHome: 'Zurück zur Startseite',
  skipToContent: 'Zum Inhalt springen',
  errorDigest: 'Fehlercode: {digest} — gib diesen Code an, wenn du das Problem meldest.',
  loading: 'Wird geladen…',
  heroMultilingualBadge: '🌐 In 4 Sprachen verfügbar: EN | 中文 | Español | Deutsch',
  // Cookie 同意横幅
  cookieAriaLabel: 'Cookie-Einwilligung',
  cookieBody: 'Wir verwenden Cookies, um die Werkzeuge kostenlos zu halten und deine Erfahrung zu verbessern. Mit der Nutzung der Seite stimmst du Cookies zu — siehe unsere {privacy}.',
  cookiePrivacyLink: 'Datenschutzerklärung',
  cookieAcceptAll: 'Alle akzeptieren',
  cookieNecessaryOnly: 'Nur notwendige',
  // 博客索引页
  blogIndexTitle: 'Blog',
  blogIndexSubtitle: 'Engineering-Notizen, Architektur-Deep-Dives und Build-in-Public-Updates.',
  blogReadMore: 'Weiterlesen',
  blogReadTime: '{time} Lesedauer',
  blogIndexEmpty: 'Noch keine Beiträge — schau bald wieder vorbei.',
  blogCtaBody: 'Lieber selbst machen als lesen? Spring direkt in die Werkzeugkiste.',
  blogCtaExplore: 'Alle Werkzeuge erkunden',
  blogCtaAbout: 'Über {site}',
  blogBannerEyebrow: 'Probier die Werkzeugkiste',
  blogBannerTitle: 'Empfohlene Tools, kostenlos und im Browser',
  blogBannerBody:
    'Keine Anmeldung, kein Upload, kein Tracking. Alles darunter läuft komplett in deinem Tab — genau die Architektur, die dieser Beitrag beschreibt.',
  blogBannerBrowse: 'Alle {count}+ Werkzeuge ansehen',
  // 首页底部 SEO 文案区
  seoWhyTitle: 'Warum unsere Online-Werkzeuge nutzen?',
  seoWhyBody1: 'Die meisten Online-Tools verlangen Anmeldung, Cookie-Zustimmung oder laden deine Dateien auf einen Server, den du nicht prüfen kannst. Wir machen es anders: Jedes Werkzeug hier läuft vollständig in deinem Browser. Für dich bedeutet das drei Dinge:',
  seoWhyPrivacy: 'Datenschutz by Design.',
  seoWhyPrivacyBody: ' Dein Text und deine Dateien verlassen nie dein Gerät. Es gibt keinen Server, der deine Eingabe verarbeitet, also gibt es nichts, was geleakt werden kann.',
  seoWhyInstant: 'Sofortige Ergebnisse.',
  seoWhyInstantBody: ' Kein Roundtrip zum Server bedeutet kein Warten. Werkzeuge reagieren so schnell wie du tippst.',
  seoWhyNoFriction: 'Keine Hürden.',
  seoWhyNoFrictionBody: ' Kein Konto, keine Paywall, kein „Upgrade, um fortzufahren". Seite öffnen und loslegen.',
  seoWhyBody2: 'Wir konzentrieren uns auf Helfer, die ein einziges Problem gut lösen — von Kreditberechnung und Einheitenumrechnung bis hin zu JSON-Formatierung und QR-Codes. Mit {count}+ Werkzeugen für Finanzen, Mathe, Gesundheit, Umrechnung und Entwicklung ist die Chance groß, dass wir haben, was du brauchst. Neue Werkzeuge kommen regelmäßig dazu — also merke dir diese Seite.',
  seoBrowseTitle: 'Werkzeuge nach Kategorie',
  seoBrowseBody: 'Du suchst etwas Bestimmtes? Springe direkt zu einer Kategorie oder öffne das {fullDir}, um alle {count} Werkzeuge zu durchsuchen.',
  seoBrowseFullDir: 'vollständige Werkzeugübersicht',
  seoBrowseCountSuffix: '({count} Werkzeuge)',
  seoPopularTitle: 'Beliebte Werkzeuge',
  seoPopularBody: 'Einige unserer meistgenutzten Helfer — ein guter Startpunkt:',
  whatifTitle: 'WhatIf — Investment-Replay',
  whatifBody: 'Was wäre, wenn Sie 1996 Microsoft oder 2013 Bitcoin gekauft hätten? Wählen Sie Aktie, Jahr und Betrag und sehen Sie den Zinseszinseffekt Tag für Tag.',
  whatifCta: 'Replay ansehen →',
  bentoTitle: 'Probiere jetzt ein Tool',
  bentoSubtitle: 'Keine Anmeldung, keine Installation — alles läuft im Browser.',
  bentoPercentTitle: 'Schnell-Prozent',
  bentoPercentOf: 'Wie viel sind',
  bentoPercentIs: '% von',
  bentoPercentResultLabel: 'Ergebnis',
  bentoConverterTitle: 'cm ↔ in',
  bentoConverterSwap: 'Einheiten tauschen',
  bentoMortgageTitle: 'Monatsrate',
  bentoMortgageMonthly: 'pro Monat',
  bentoMortgageDemo: 'Live-Beispiel läuft',
  bentoVisitorsTitle: 'Live-Besucher',
  bentoVisitorsToday: 'heute',
  bentoVisitorsTotal: 'Besuche insgesamt',
  bentoTodayTitle: 'Heute',
  bentoTodayWeekN: 'Woche {n} des Jahres',
  bentoTodayDaysLeft: 'noch {n} Tage in {y}',
  bentoOpenTool: 'Vollständiges Tool öffnen →',
  searchQuickAnswer: 'Schnellantwort — Enter öffnet das Tool',
  // ── 工具页共享组件 chrome ──
  favSave: 'Merken',
  favSaved: 'Gemerkt',
  favAddAria: '{name} zu Favoriten hinzufügen',
  favRemoveAria: '{name} aus Favoriten entfernen',
  favSaveTitle: 'Zu Favoriten hinzufügen',
  favSavedTitle: 'Gespeichert als Favorit',
  faqsTitle: 'Häufig gestellte Fragen',
  embedTitle: 'Binde dieses kostenlose Tool in deinen Blog ein',
  embedSubtitle: 'kopieren & einfügen, ohne Quellenangabe',
  embedBody: 'Füge diesen HTML-Code überall auf deiner Seite ein, um {name} einzubetten. Passe height und max-width an dein Layout an.',
  embedCopyLabel: 'Einbettungscode kopieren',
  disclaimerFinance:
    'Hinweis: Dieser Rechner dient nur Informations- und Bildungszwecken und stellt keine Finanz-, Anlage- oder Rechtsberatung dar. Die Ergebnisse sind Schätzungen auf Basis deiner Eingaben; die tatsächlichen Zahlen können abweichen. Konsultiere vor finanziellen Entscheidungen immer eine qualifizierte Fachkraft.',
  disclaimerHealth:
    'Hinweis: Dieses Werkzeug dient nur Bildungszwecken und ersetzt keine professionelle medizinische Beratung, Diagnose oder Behandlung. Die Ergebnisse sind Schätzwerte und sollten mit einer qualifizierten Fachkraft besprochen werden, bevor gesundheitsbezogene Entscheidungen getroffen werden.',
  formulaTitle: 'Formel & Funktionsweise',
  formulaIntro: '{name} beruht auf der folgenden Formel:',
  textToolClear: 'Leeren',
  textToolInputPlaceholder: 'Text hier eingeben oder einfügen…',
  textToolResultPlaceholder: 'Das Ergebnis erscheint hier…',
  textToolChars: '{count} Zeichen',
  textToolWords: '{count} Wörter',
}

export const dicts: Record<Locale, Dict> = { en, zh, es, de }

// ─────────────────────────────────────────────────────────────────────────────
// 分类标签本地化(11 个英文分类键 → 4 语映射)
//
// tools.ts 的 category 字段始终是英文键(如 'Finance Calculators'),用作 i18n key。
// tc() 取不到映射时回退到原英文键,保证永不破图。
// ─────────────────────────────────────────────────────────────────────────────

export type CategoryKey =
  | 'Finance Calculators'
  | 'Developer Tools'
  | 'Text Tools'
  | 'Unit Converters'
  | 'Math Calculators'
  | 'Health Calculators'
  | 'Education Calculators'
  | 'Time Calculators'
  | 'Web Design Tools'
  | 'Business Tools'
  | 'Security Tools'
  | 'AI Tools'
  | 'Game Tools'
  | 'Pet Tools'
  | 'Home Calculators'

const categoryDicts: Record<Locale, Partial<Record<CategoryKey, string>>> = {
  en: {},
  zh: {
    'Finance Calculators': '金融计算器',
    'Developer Tools': '开发者工具',
    'Text Tools': '文本工具',
    'Unit Converters': '单位换算器',
    'Math Calculators': '数学计算器',
    'Health Calculators': '健康计算器',
    'Education Calculators': '教育计算器',
    'Time Calculators': '时间计算器',
    'Web Design Tools': '网页设计工具',
    'Business Tools': '商业工具',
    'Security Tools': '安全工具',
    'AI Tools': 'AI 工具',
    'Game Tools': '游戏工具',
    'Pet Tools': '宠物工具',
    'Home Calculators': '家居计算器',
  },
  es: {
    'Finance Calculators': 'Calculadoras financieras',
    'Developer Tools': 'Herramientas para desarrolladores',
    'Text Tools': 'Herramientas de texto',
    'Unit Converters': 'Conversores de unidades',
    'Math Calculators': 'Calculadoras matemáticas',
    'Health Calculators': 'Calculadoras de salud',
    'Education Calculators': 'Calculadoras educativas',
    'Time Calculators': 'Calculadoras de tiempo',
    'Web Design Tools': 'Herramientas de diseño web',
    'Business Tools': 'Herramientas de negocios',
    'Security Tools': 'Herramientas de seguridad',
    'AI Tools': 'Herramientas de IA',
    'Game Tools': 'Juegos',
    'Pet Tools': 'Mascotas',
    'Home Calculators': 'Calculadoras del hogar',
  },
  de: {
    'Finance Calculators': 'Finanzrechner',
    'Developer Tools': 'Entwickler-Werkzeuge',
    'Text Tools': 'Text-Werkzeuge',
    'Unit Converters': 'Einheiten-Umrechner',
    'Math Calculators': 'Mathe-Rechner',
    'Health Calculators': 'Gesundheitsrechner',
    'Education Calculators': 'Bildungsrechner',
    'Time Calculators': 'Zeitrechner',
    'Web Design Tools': 'Webdesign-Werkzeuge',
    'Business Tools': 'Business-Werkzeuge',
    'Security Tools': 'Sicherheits-Werkzeuge',
    'AI Tools': 'KI-Tools',
    'Game Tools': 'Spiele',
    'Pet Tools': 'Haustiere',
    'Home Calculators': 'Haushaltsrechner',
  },
}

/** 简单模板替换:支持 {count} {total} {filtered} {query} */
export function t(locale: Locale, key: keyof Dict, vars?: Record<string, string | number>): string {
  let str = dicts[locale]?.[key] ?? dicts.en[key] ?? String(key)
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      // 用 split/join 全量替换(等效 replaceAll,但兼容 ES2021 之前的老浏览器),
      // 支持同一变量在模板里多次出现(否则只替第一个)
      str = str.split(`{${k}}`).join(String(v))
    }
  }
  return str
}

/**
 * 取分类本地化文案。tools.ts 的 category 字段是英文键(如 'Finance Calculators'),
 * 英文本身无需翻译,其它语种查表;查不到回退到原英文键,永不破图。
 */
export function tc(locale: Locale, categoryKey: string): string {
  if (locale === 'en') return categoryKey
  const map = categoryDicts[locale]
  return (map?.[categoryKey as CategoryKey]) ?? categoryKey
}

// ─────────────────────────────────────────────────────────────────────────────
// 工具卡片文案本地化(name + shortIntro)
//
// 翻译文件:lib/i18n/tools.<locale>.ts,Record<slug, { name, shortIntro }>
// 缺失某 slug 时 → 回退到 tool.name / tool.shortIntro(英文原值)。
// ─────────────────────────────────────────────────────────────────────────────

export interface ToolI18nEntry {
  name: string
  shortIntro: string
}
type ToolI18nMap = Record<string, ToolI18nEntry>

const toolI18nMaps: Record<Locale, ToolI18nMap> = {
  en: {}, // 英文回退到 tools.ts 原值
  zh: zhTools as ToolI18nMap,
  es: esTools as ToolI18nMap,
  de: deTools as ToolI18nMap,
}

/** 取工具本地化名(回退到英文原值) */
export function getToolName(locale: Locale, slug: string, fallback: string): string {
  if (locale === 'en') return fallback
  return toolI18nMaps[locale]?.[slug]?.name ?? fallback
}

/** 取工具本地化简介(回退到英文原值) */
export function getToolShortIntro(locale: Locale, slug: string, fallback: string): string {
  if (locale === 'en') return fallback
  return toolI18nMaps[locale]?.[slug]?.shortIntro ?? fallback
}
