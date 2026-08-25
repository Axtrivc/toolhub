/**
 * coin-flip 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CoinFlipL10n: ToolL10n = {
  zh: {
    ui: {
      'flipBtn': '抛硬币',
      'heads': '正面',
      'headsN': '正面',
      'headsShare': '正面比例',
      'note': '🪙 每次抛掷都取自加密级熵——任意长度的会话都与公平硬币统计无差。累计百分比会如期收敛到 50%。',
      'tails': '反面',
      'tailsN': '反面',
      'tapFlip': '抛',
    },
  },
  es: {
    ui: {
      'flipBtn': 'Lanzar moneda',
      'heads': 'CARA',
      'headsN': 'Cara',
      'headsShare': '% cara',
      'note': '🪙 Cada lanzamiento sale de entropía criptográfica — indistinguible de una moneda justa. El porcentaje converge al 50 % como se espera.',
      'tails': 'CRUZ',
      'tailsN': 'Cruz',
      'tapFlip': 'LANZAR',
    },
  },
  de: {
    ui: {
      'flipBtn': 'Münze werfen',
      'heads': 'KOPF',
      'headsN': 'Kopf',
      'headsShare': 'Kopf %',
      'note': '🪙 Jeder Wurf nutzt krypto-Entropie — statistisch nicht von einer fairen Münze unterscheidbar. Der Prozentsatz konvergiert erwartungsgemäß gegen 50 %.',
      'tails': 'ZAHL',
      'tailsN': 'Zahl',
      'tapFlip': 'WERFEN',
    },
  },
}
