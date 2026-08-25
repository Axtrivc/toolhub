/**
 * mime-type-lookup 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MimeTypeLookupL10n: ToolL10n = {
  zh: {
    ui: {
      'noMatch': '没有匹配的类型',
      'note': '🌐 常见坑:.js 现为 text/javascript(而非 application/javascript);字体自 2017 年起是 font/*;.webp 是 image/webp——一些老服务器默认仍配错。',
      'searchPlaceholder': '搜索扩展名或 MIME 类型',
      'thExt': '扩展名',
      'thMime': 'MIME 类型',
    },
  },
  es: {
    ui: {
      'noMatch': 'Sin tipos coincidentes',
      'note': '🌐 Errores típicos: .js es oficialmente text/javascript; las fuentes son font/* desde 2017; .webp es image/webp — algunos servidores viejos siguen fallando.',
      'searchPlaceholder': 'Buscar extensión o tipo MIME',
      'thExt': 'Extensión',
      'thMime': 'Tipo MIME',
    },
  },
  de: {
    ui: {
      'noMatch': 'Keine passenden Typen',
      'note': '🌐 Typische Fallen: .js ist offiziell text/javascript; Fonts sind seit 2017 font/*; .webp ist image/webp — alte Server Defaults machen das noch falsch.',
      'searchPlaceholder': 'Erweiterung oder MIME-Typ suchen',
      'thExt': 'Erweiterung',
      'thMime': 'MIME-Typ',
    },
  },
}
