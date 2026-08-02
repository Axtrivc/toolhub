/**
 * i18n 字典 - 只翻译界面框架(导航/按钮/Footer 等)
 *
 * 策略说明:
 * - 站点定位英文站(赚高 RPM),工具内容保持英文,不做翻译
 * - 语言切换只影响界面元素:导航、按钮、搜索框、Footer 等
 * - 默认语言英文,中文为可选切换
 *
 * 加新的界面文案:在两个字典里都加一个 key。
 */

export type Locale = 'en' | 'zh'

export interface Dict {
  // Header 导航
  navAllTools: string
  navAbout: string
  navContact: string
  // 首页 Hero
  heroBadge: string // "{count}+ Free Online Tools" 中的 "{count}+"
  heroTitle1: string // "Free Online Tools" 部分(被 {count} 替换)
  heroTitle2: string // "That Just Work"
  heroSubtitle: string
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
  featuredBadge: string // 卡片右上角微型 Badge,如 "POPULAR"
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
  navContact: 'Contact',
  heroBadge: '{count}+',
  heroTitle1: 'Free Online Tools',
  heroTitle2: 'That Just Work',
  heroSubtitle:
    'Fast, privacy-friendly utilities for developers, students, and everyday tasks. Everything runs right in your browser — no signup, no upload, no tracking.',
  searchPlaceholder: 'Search {count} tools... (e.g. "loan", "json", "kg to lb")',
  categoryAll: 'All',
  showingAll: 'Showing all {count} tools',
  showingFiltered: '{filtered} of {total} tools',
  noResults: 'No tools match "{query}".',
  noResultsHint: 'Clear search',
  clearSearch: 'Clear search',
  featuredTitle: 'Popular Tools',
  featuredBadge: 'POPULAR',
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
  navContact: '联系',
  heroBadge: '{count}+',
  heroTitle1: '免费在线工具',
  heroTitle2: '简单好用',
  heroSubtitle:
    '为开发者、学生和日常任务打造的快速、注重隐私的实用工具。所有计算都在浏览器中完成 —— 无需注册,无需上传,不追踪。',
  searchPlaceholder: '搜索 {count} 个工具...(例如 "loan"、"json"、"kg to lb")',
  categoryAll: '全部',
  showingAll: '显示全部 {count} 个工具',
  showingFiltered: '共 {total} 个中的 {filtered} 个',
  noResults: '没有匹配 "{query}" 的工具。',
  noResultsHint: '清除搜索',
  clearSearch: '清除搜索',
  featuredTitle: '热门工具',
  featuredBadge: '热门',
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

export const dicts: Record<Locale, Dict> = { en, zh }

/** 简单模板替换:支持 {count} {total} {filtered} {query} */
export function t(locale: Locale, key: keyof Dict, vars?: Record<string, string | number>): string {
  let str = dicts[locale][key] ?? String(key)
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, String(v))
    }
  }
  return str
}
