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
      str = str.replace(`{${k}}`, String(v))
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
