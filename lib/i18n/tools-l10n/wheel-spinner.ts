/**
 * wheel-spinner 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WheelSpinnerL10n: ToolL10n = {
  zh: {
    ui: {
      'itemsHint': '转盘上有 {n} 个选项',
      'itemsOverflow': '已忽略多出的 {extra} 行——转盘最多 12 个选项',
      'itemsLabel': '选项 — 每行一个(最多 12 个)',
      'note': '🎡 中奖扇区先用加密级随机数抽出,转盘再动画转到它——漂亮的动画之下是真正公平的抽取。',
      'wheelAlt': '抽奖转盘',
    },
  },
  es: {
    ui: {
      'itemsHint': '{n} opciones en la rueda',
      'itemsOverflow': '{extra} líneas de más ignoradas — la rueda admite máx. 12',
      'itemsLabel': 'Opciones — una por línea (máx. 12)',
      'note': '🎡 El sector ganador se sortea con aleatoriedad criptográfica antes de que la rueda anime hacia él — movimiento bonito sobre selección justa.',
      'wheelAlt': 'Rueda de premios',
    },
  },
  de: {
    ui: {
      'itemsHint': '{n} Optionen auf dem Rad',
      'itemsOverflow': '{extra} zusätzliche Zeilen ignoriert — das Rad fasst max. 12',
      'itemsLabel': 'Optionen — eine pro Zeile (max. 12)',
      'note': '🎡 Der Gewinnersektor wird kryptografisch gezogen, bevor das Rad dorthin animiert — schöne Bewegung über ehrlich fairer Auswahl.',
      'wheelAlt': 'Glücksrad',
    },
  },
}
