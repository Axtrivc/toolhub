/**
 * epoch-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const EpochConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'dateLabel': '或选择日期(本地时区)',
      'digitHint': '时间戳通常是 10 位(秒)或 13 位(毫秒)。你的输入位数不同——已按最接近的方式解析。',
      'inputs': '输入',
      'isoOut': 'ISO 8601 (UTC)',
      'localOut': '你的本地时间',
      'msOut': '毫秒级',
      'note': '🕒 Unix 时间从 1970-01-01 UTC 起计秒,忽略闰秒。JavaScript 生态常用毫秒(13 位)。',
      'secOut': '秒级',
      'summaryTitle': 'Epoch 转换',
      'tsLabel': 'Unix 时间戳(秒或毫秒)',
      'useNow': '用当前时间',
    },
  },
  es: {
    ui: {
      'dateLabel': 'O elige una fecha (zona horaria local)',
      'digitHint': 'Los timestamps suelen tener 10 dígitos (segundos) o 13 (milisegundos). Has introducido otra cosa; se muestra la mejor interpretación.',
      'inputs': 'Entradas',
      'isoOut': 'ISO 8601 (UTC)',
      'localOut': 'Tu hora local',
      'msOut': 'Milisegundos',
      'note': '🕒 El tiempo Unix cuenta segundos desde 1970-01-01 UTC e ignora los segundos intercalares. El ecosistema JS suele usar milisegundos (13 dígitos).',
      'secOut': 'Segundos',
      'summaryTitle': 'Conversión Epoch',
      'tsLabel': 'Timestamp Unix (segundos o milisegundos)',
      'useNow': 'Usar hora actual',
    },
  },
  de: {
    ui: {
      'dateLabel': 'Oder Datum wählen (lokale Zeitzone)',
      'digitHint': 'Timestamps haben meist 10 Stellen (Sekunden) oder 13 (Millisekunden). Deine Eingabe weicht ab — bestmögliche Interpretation angezeigt.',
      'inputs': 'Eingaben',
      'isoOut': 'ISO 8601 (UTC)',
      'localOut': 'Deine lokale Zeit',
      'msOut': 'Millisekunden',
      'note': '🕒 Unix-Zeit zählt Sekunden seit 1970-01-01 UTC und ignoriert Schaltsekunden. JS nutzt meist Millisekunden (13 Stellen).',
      'secOut': 'Sekunden',
      'summaryTitle': 'Epoch-Umrechnung',
      'tsLabel': 'Unix-Timestamp (Sekunden oder Millisekunden)',
      'useNow': 'Aktuelle Zeit verwenden',
    },
  },
}
