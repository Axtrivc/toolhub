/**
 * epoch-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const EpochConverterL10n: ToolL10n = {
  zh: {
    useCases: ['把日志里的时间戳转成可读时间', '排查不同系统的时间戳位数差异', '给 API 调试取当前 Unix 时间', '把日期转成秒/毫秒时间戳'],
    faqs: [
      { q: '秒还是毫秒,怎么看出来?', a: '数位数:10 位是秒,13 位是毫秒(JavaScript 生态的惯例)。转换器两种都能自动识别,9-14 位以外的输入也会按最接近的方式解析并给出提示,不会悄悄算错。' },
      { q: '能处理 1970 年以前的日期吗?', a: '可以。Unix 时间从 1970-01-01 00:00 UTC 起算,负数时间戳就代表更早的日期。粘贴一个负数,即可得到对应的 ISO 8601 UTC 时间和你的本地时间。' },
      { q: '为什么会有 13 位时间戳?', a: 'JavaScript 的 Date 对象以毫秒为单位,所以浏览器日志、MongoDB、很多 API 都存 13 位数。Unix 工具和 MySQL 等数据库默认 10 位秒。两种惯例到处都是,这正是需要自动识别的原因。' },
      { q: '闰秒算在内吗?', a: '不算。Unix 时间把每天都定义为恰好 86,400 秒,完全忽略闰秒。这让时间戳运算保持线性;与真实 UTC 的微小偏差由时间服务器在校时层面处理,不体现在时间戳本身。' },
    ],
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
    useCases: ['convertir timestamps de logs a fechas legibles', 'resolver dudas de segundos frente a milisegundos', 'obtener el tiempo Unix actual para depurar APIs', 'convertir una fecha en timestamp de segundos o milisegundos'],
    faqs: [
      { q: '¿Segundos o milisegundos, cómo lo sé?', a: 'Cuenta los dígitos: 10 dígitos son segundos y 13 son milisegundos (la convención de JavaScript). El conversor detecta ambos automáticamente y avisa con su mejor interpretación cuando la longitud está entre 9 y 14 dígitos.' },
      { q: '¿Admite fechas anteriores a 1970?', a: 'Sí. El tiempo Unix cuenta desde el 1970-01-01 00:00 UTC y los timestamps negativos representan fechas anteriores. Pega un número negativo y obtendrás el momento correspondiente en ISO 8601 UTC y en tu hora local.' },
      { q: '¿Por qué existen timestamps de 13 dígitos?', a: 'El objeto Date de JavaScript trabaja en milisegundos, por eso los sistemas del ecosistema JS —logs de navegador, MongoDB, muchas APIs— guardan 13 dígitos. Las herramientas Unix y bases como MySQL usan 10 dígitos (segundos). Ambas convenciones están por todas partes, de ahí la detección automática.' },
      { q: '¿Se incluyen los segundos intercalares?', a: 'No. El tiempo Unix define cada día como exactamente 86 400 segundos y los ignora por completo. Así el cálculo se mantiene lineal; la minúscula desviación frente al UTC real la corrigen los servidores de hora, no el timestamp.' },
    ],
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
    useCases: ['Timestamps aus Logs in lesbare Zeit umwandeln', 'unklare Sekunden- vs. Millisekunden-Werte klären', 'aktuelle Unix-Zeit für API-Debugging holen', 'ein Datum in Sekunden- oder Millisekunden-Timestamp umrechnen'],
    faqs: [
      { q: 'Sekunden oder Millisekunden — woran erkenne ich das?', a: 'Zähle die Stellen: 10 Stellen bedeuten Sekunden, 13 Stellen Millisekunden (JavaScript-Konvention). Der Konverter erkennt beide automatisch und zeigt bei 9 bis 14 Stellen einen Hinweis mit bester Interpretation an.' },
      { q: 'Funktioniert das für Daten vor 1970?', a: 'Ja. Unix-Zeit zählt ab 1970-01-01 00:00 UTC; negative Timestamps stellen frühere Zeitpunkte dar. Füge eine negative Zahl ein und du erhältst den passenden Moment als ISO-8601-UTC und lokale Zeit.' },
      { q: 'Warum gibt es 13-stellige Timestamps?', a: 'JavaScripts Date-Objekt rechnet in Millisekunden, deshalb speichern JS-lastige Systeme — Browser-Logs, MongoDB, viele APIs — 13-stellige Werte. Unix-Tools und Datenbanken wie MySQL nutzen 10-stellige Sekunden. Beide Konventionen sind allgegenwärtig, daher die automatische Erkennung.' },
      { q: 'Werden Schaltsekunden berücksichtigt?', a: 'Nein. Unix-Zeit definiert jeden Tag als exakt 86 400 Sekunden und ignoriert Schaltsekunden komplett. Das hält die Rechnung linear; die winzige Abweichung zum echten UTC korrigieren Zeitserver, nicht der Timestamp selbst.' },
    ],
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
