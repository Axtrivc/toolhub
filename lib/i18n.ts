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
  // 工具页通用
  toolHome: string
  toolResult: string
  toolCopy: string
  toolCopied: string
  // 工具页:加载示例 / 导出结果
  toolLoadSample: string
  toolSampleLoaded: string
  toolCopySummary: string
  toolDownload: string
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
  // 广告位占位标识
  adLabel: string
  // 主题切换 aria
  themeToggle: string
  themeLight: string
  themeDark: string
  // 语言切换 aria
  languageToggle: string
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
}

const en: Dict = {
  navAllTools: 'All Tools',
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
  toolHome: 'Home',
  toolResult: 'Result',
  toolCopy: 'Copy',
  toolCopied: '✓ Copied',
  toolLoadSample: 'Load Sample',
  toolSampleLoaded: '✓ Sample loaded',
  toolCopySummary: 'Copy Summary',
  toolDownload: 'Download',
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
  adLabel: 'Advertisement',
  themeToggle: 'Toggle theme',
  themeLight: 'Light',
  themeDark: 'Dark',
  languageToggle: 'Switch language',
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
}

const zh: Dict = {
  navAllTools: '全部工具',
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
  toolHome: '首页',
  toolResult: '结果',
  toolCopy: '复制',
  toolCopied: '✓ 已复制',
  toolLoadSample: '加载示例',
  toolSampleLoaded: '✓ 已加载示例',
  toolCopySummary: '复制摘要',
  toolDownload: '下载',
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
  adLabel: '广告',
  themeToggle: '切换主题',
  themeLight: '浅色',
  themeDark: '深色',
  languageToggle: '切换语言',
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
}

const es: Dict = {
  navAllTools: 'Todas las herramientas',
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
  toolHome: 'Inicio',
  toolResult: 'Resultado',
  toolCopy: 'Copiar',
  toolCopied: '✓ Copiado',
  toolLoadSample: 'Cargar ejemplo',
  toolSampleLoaded: '✓ Ejemplo cargado',
  toolCopySummary: 'Copiar resumen',
  toolDownload: 'Descargar',
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
  adLabel: 'Publicidad',
  themeToggle: 'Cambiar tema',
  themeLight: 'Claro',
  themeDark: 'Oscuro',
  languageToggle: 'Cambiar idioma',
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
}

const de: Dict = {
  navAllTools: 'Alle Werkzeuge',
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
  toolHome: 'Start',
  toolResult: 'Ergebnis',
  toolCopy: 'Kopieren',
  toolCopied: '✓ Kopiert',
  toolLoadSample: 'Beispiel laden',
  toolSampleLoaded: '✓ Beispiel geladen',
  toolCopySummary: 'Zusammenfassung kopieren',
  toolDownload: 'Herunterladen',
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
  adLabel: 'Werbung',
  themeToggle: 'Theme wechseln',
  themeLight: 'Hell',
  themeDark: 'Dunkel',
  languageToggle: 'Sprache wechseln',
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
  },
}

/** 简单模板替换:支持 {count} {total} {filtered} {query} */
export function t(locale: Locale, key: keyof Dict, vars?: Record<string, string | number>): string {
  let str = dicts[locale]?.[key] ?? dicts.en[key] ?? String(key)
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      // 用 replaceAll 全量替换,支持同一变量在模板里多次出现(否则只替第一个)
      str = str.replaceAll(`{${k}}`, String(v))
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
