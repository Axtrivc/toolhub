/**
 * password-entropy-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const PasswordEntropyCheckerL10n: ToolL10n = {
  zh: {
    ui: {
      'crackAssume': '按每秒 1000 亿次尝试',
      'crackEstimate': '离线破解估算',
      'entropyBits': '熵',
      'heatDeath': '超出宇宙时间尺度',
      'instant': '瞬间',
      'minutes': '< 1 小时',
      'note': '🔐 基线 = 长度 × log2(字符集大小):"correct horse battery staple" 胜过 "P@ssw0rd!",因为长度才是主导。惩罚模拟真实破解器——它们远在穷举前就先试词典词与模式。分析 100% 离线。',
      'penRepeat': '大量重复字符',
      'penalties': '已应用惩罚:{list}',
      'pwLabel': '要分析的密码(绝不离开本页)',
      'strongVerdict': '强:超过安全团队为高价值账户推荐的 75 位阈值。',
    },
  },
  es: {
    ui: {
      'crackAssume': 'a 100 mil millones de intentos/s',
      'crackEstimate': 'Estimación de crackeo offline',
      'entropyBits': 'Entropía',
      'heatDeath': 'más allá de escalas cósmicas',
      'instant': 'al instante',
      'minutes': '< 1 hora',
      'note': '🔐 Base = longitud × log2(conjunto): «correct horse battery staple» gana a «P@ssw0rd!» porque la longitud manda. Las penalizaciones imitan crackers reales. Análisis 100 % offline.',
      'penRepeat': 'muchos caracteres repetidos',
      'penalties': 'Penalizaciones: {list}',
      'pwLabel': 'Contraseña a analizar (nunca sale de esta página)',
      'strongVerdict': 'Fuerte: supera el umbral de 75 bits que recomiendan los equipos de seguridad para cuentas valiosas.',
    },
  },
  de: {
    ui: {
      'crackAssume': 'bei 100 Mrd. Versuchen/s',
      'crackEstimate': 'Offline-Knack-Schätzung',
      'entropyBits': 'Entropie',
      'heatDeath': 'jenseits kosmischer Zeiträume',
      'instant': 'sofort',
      'minutes': '< 1 Stunde',
      'note': '🔐 Basis = Länge × log2(Zeichenvorrat): „correct horse battery staple" schlägt „P@ssw0rd!", denn Länge dominiert. Abzüge ahmen echte Cracker nach. Analyse 100 % offline.',
      'penRepeat': 'viele wiederholte Zeichen',
      'penalties': 'Abzüge angewandt: {list}',
      'pwLabel': 'Zu analysierendes Passwort (verlässt diese Seite nie)',
      'strongVerdict': 'Stark: über der 75-Bit-Schwelle, die Sicherheitsteams für wertvolle Konten empfehlen.',
    },
  },
}
