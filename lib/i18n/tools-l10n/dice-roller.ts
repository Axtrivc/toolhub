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
      'note': '🎲 骰子来自加密级随机数 + 拒绝采样——无模偏差、无规律序列。每次最多掷 20 颗。',
      'rollBtn': '掷 {n} 个 d{s}',
    },
  },
  es: {
    ui: {
      'clear': 'Borrar',
      'countLabel': 'n.º de dados',
      'history': 'Tiradas recientes',
      'note': '🎲 Las tiradas usan aleatoriedad criptográfica con muestreo de rechazo — sin sesgo de módulo. Máximo 20 dados por tirada.',
      'rollBtn': 'Lanzar {n}× d{s}',
    },
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'countLabel': 'Anzahl Würfel',
      'history': 'Letzte Würfe',
      'note': '🎲 Die Würfe nutzen kryptografischen Zufall mit Rejection Sampling — kein Modulo-Bias. Maximal 20 Würfel pro Wurf.',
      'rollBtn': '{n}× d{s} werfen',
    },
  },
}
