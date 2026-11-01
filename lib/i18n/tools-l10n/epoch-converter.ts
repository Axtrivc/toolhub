/**
 * epoch-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const EpochConverterL10n: ToolL10n = {

  es: {
    useCases: ['convertir timestamps de logs a fechas legibles', 'resolver dudas de segundos frente a milisegundos', 'obtener el tiempo Unix actual para depurar APIs', 'convertir una fecha en timestamp de segundos o milisegundos'],
    faqs: [
      { q: '¿Segundos o milisegundos, cómo lo sé?', a: 'Cuenta los dígitos: 10 dígitos son segundos y 13 son milisegundos (la convención de JavaScript). El conversor detecta ambos automáticamente; las entradas que no puede interpretar con fiabilidad (caracteres no numéricos o más de 14 dígitos) reciben un aviso, no una conjetura.' },
      { q: '¿Admite fechas anteriores a 1970?', a: 'Sí. El tiempo Unix cuenta desde el 1970-01-01 00:00 UTC y los timestamps negativos representan fechas anteriores. Pega un número negativo y obtendrás el momento correspondiente en ISO 8601 UTC y en tu hora local.' },
      { q: '¿Por qué existen timestamps de 13 dígitos?', a: 'El objeto Date de JavaScript trabaja en milisegundos, por eso los sistemas muy ligados a JavaScript —logs del navegador, MongoDB, muchas APIs— guardan valores de 13 dígitos. Las herramientas Unix y bases de datos como MySQL usan 10 dígitos (segundos). Ambas convenciones están por todas partes, de ahí la detección automática.' },
      { q: '¿Se incluyen los segundos intercalares?', a: 'No. El tiempo Unix define cada día como exactamente 86 400 segundos y los ignora por completo. Así el cálculo se mantiene lineal; la minúscula desviación frente al UTC real la corrigen los servidores de hora, no el timestamp.' },
    ],
    ui: {
      'dateLabel': 'O elige una fecha (zona horaria local)',
      'digitHint': 'Los timestamps suelen tener 10 dígitos (segundos) o 13 (milisegundos). Esta entrada no se puede interpretar con fiabilidad, así que no se muestra nada en lugar de una conjetura.',
      'inputs': 'Entradas',
      'isoOut': 'ISO 8601 (UTC)',
      'localOut': 'Tu hora local',
      'msOut': 'Milisegundos',
      'note': '🕒 El tiempo Unix cuenta segundos desde 1970-01-01 UTC e ignora los segundos intercalares. El ecosistema de JavaScript suele usar milisegundos (13 dígitos).',
      'secOut': 'Segundos',
      'summaryTitle': 'Conversión Epoch',
      'tsLabel': 'Timestamp Unix (segundos o milisegundos)',
      'useNow': 'Usar hora actual',
    },
  },
  de: {
    useCases: ['Timestamps aus Logs in lesbare Zeit umwandeln', 'unklare Sekunden- vs. Millisekunden-Werte klären', 'aktuelle Unix-Zeit für API-Debugging holen', 'ein Datum in Sekunden- oder Millisekunden-Timestamp umrechnen'],
    faqs: [
      { q: 'Sekunden oder Millisekunden — woran erkenne ich das?', a: 'Zähle die Stellen: 10 Stellen bedeuten Sekunden, 13 Stellen Millisekunden (JavaScript-Konvention). Der Konverter erkennt beide automatisch; Eingaben, die sich nicht zuverlässig deuten lassen (nicht-numerische Zeichen oder mehr als 14 Stellen), bekommen einen Hinweis statt einer falschen Vermutung.' },
      { q: 'Funktioniert das für Daten vor 1970?', a: 'Ja. Unix-Zeit zählt ab 1970-01-01 00:00 UTC; negative Timestamps stellen frühere Zeitpunkte dar. Füge eine negative Zahl ein und du erhältst den passenden Zeitpunkt im ISO-8601-UTC-Format und in deiner lokalen Zeit.' },
      { q: 'Warum gibt es 13-stellige Timestamps?', a: 'JavaScripts Date-Objekt rechnet in Millisekunden, deshalb speichern JS-lastige Systeme — Browser-Logs, MongoDB, viele APIs — 13-stellige Werte. Unix-Tools und Datenbanken wie MySQL nutzen 10-stellige Sekunden. Beide Konventionen sind allgegenwärtig, daher die automatische Erkennung.' },
      { q: 'Werden Schaltsekunden berücksichtigt?', a: 'Nein. Unix-Zeit definiert jeden Tag als exakt 86 400 Sekunden und ignoriert Schaltsekunden komplett. Das hält die Rechnung linear; die winzige Abweichung zum echten UTC korrigieren Zeitserver, nicht der Timestamp selbst.' },
    ],
    ui: {
      'dateLabel': 'Oder Datum wählen (lokale Zeitzone)',
      'digitHint': 'Timestamps haben meist 10 Stellen (Sekunden) oder 13 (Millisekunden). Diese Eingabe lässt sich nicht zuverlässig deuten — es wird nichts angezeigt, statt zu raten.',
      'inputs': 'Eingaben',
      'isoOut': 'ISO 8601 (UTC)',
      'localOut': 'Deine lokale Zeit',
      'msOut': 'Millisekunden',
      'note': '🕒 Unix-Zeit zählt Sekunden seit 1970-01-01 UTC und ignoriert Schaltsekunden. JavaScript nutzt meist Millisekunden (13 Stellen).',
      'secOut': 'Sekunden',
      'summaryTitle': 'Epoch-Umrechnung',
      'tsLabel': 'Unix-Timestamp (Sekunden oder Millisekunden)',
      'useNow': 'Aktuelle Zeit verwenden',
    },
  },
}
