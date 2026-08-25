/**
 * keycode-info 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const KeycodeInfoL10n: ToolL10n = {
  zh: {
    ui: {
      'clearHistory': '清空',
      'noneMod': '无',
      'note': '⌨️ 现代代码应匹配 event.key("a"、"Enter");event.code 是物理键位,与布局无关(KeyA);keyCode 仅为兼容旧代码而存在。',
      'pressArea': '在此按任意键',
      'pressPrompt': '点击此处,然后按任意键',
      'recentKeys': '最近按键',
    },
  },
  es: {
    ui: {
      'clearHistory': 'Borrar',
      'noneMod': 'ninguno',
      'note': '⌨️ En código moderno compara event.key («a», «Enter»); event.code es la tecla física (KeyA); keyCode solo existe por compatibilidad.',
      'pressArea': 'Pulsa una tecla aquí',
      'pressPrompt': 'Haz clic aquí y pulsa una tecla',
      'recentKeys': 'Teclas recientes',
    },
  },
  de: {
    ui: {
      'clearHistory': 'Leeren',
      'noneMod': 'keine',
      'note': '⌨️ Moderner Code matcht event.key („a", „Enter"); event.code ist die physische Taste (KeyA); keyCode existiert nur für Altkompatibilität.',
      'pressArea': 'Hier eine Taste drücken',
      'pressPrompt': 'Hier klicken, dann eine Taste drücken',
      'recentKeys': 'Letzte Tasten',
    },
  },
}
