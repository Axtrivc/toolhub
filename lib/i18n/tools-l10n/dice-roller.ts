/**
 * dice-roller 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const DiceRollerL10n: ToolL10n = {
  zh: {
    ui: {
      'clear': '清空',
      'countLabel': '骰子数',
      'history': '最近掷骰',
      'note': '🎲 骰子来自加密级随机数 + 拒绝采样——无模偏差、无规律序列。磨损的实体骰子可不敢这么保证。',
    },
  },
  es: {
    ui: {
      'clear': 'Borrar',
      'countLabel': 'n.º de dados',
      'history': 'Tiradas recientes',
      'note': '🎲 Las tiradas usan aleatoriedad criptográfica con muestreo de rechazo — sin sesgo de módulo. Los dados físicos gastados no pueden decir lo mismo.',
    },
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'countLabel': 'Anzahl Würfel',
      'history': 'Letzte Würfe',
      'note': '🎲 Die Würfe nutzen kryptografischen Zufall mit Rejection Sampling — kein Modulo-Bias. Abgenutzte physische Würfel können das nicht behaupten.',
    },
  },
}
