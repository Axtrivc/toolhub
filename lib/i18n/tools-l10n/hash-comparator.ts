/**
 * hash-comparator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HashComparatorL10n: ToolL10n = {

  es: {
    useCases: ['verificar el checksum de una descarga', 'comparar el hash publicado con el local', 'validar la integridad de ISOs e instaladores', 'comparar sin que mayúsculas o espacios estorben'],
    faqs: [
      { q: '¿La comparación es segura frente a los ataques de temporización?', a: 'Sí: acumula un XOR sobre todos los caracteres y comprueba el total solo al final; nunca retorna antes en el primer desajuste. Los ataques de temporización que intentan leer dónde divergen dos hashes no observan nada aquí.' },
      { q: '¿Se normalizan mayúsculas y espacios?', a: 'Sí — ambas entradas pasan a minúsculas y se les quita todo el espacio en blanco, así que un hash publicado en mayúsculas y con saltos de línea también coincide. Los dígitos hexadecimales se comparan estrictamente carácter a carácter.' },
      { q: '¿Qué significa realmente un desajuste?', a: 'En descargas: corrupción o manipulación — vuelve a bajar de la fuente oficial y compara otra vez antes de ejecutar nada. Si verificas un valor que calculaste: difiere del digest publicado en al menos un carácter.' },
    ],
    ui: {
      'actualLabel': 'Hash real (calculado por ti)',
      'expectedLabel': 'Hash esperado (del editor)',
      'lenDiff': 'Longitudes distintas: no pueden ser el mismo resumen.',
      'match': 'COINCIDEN — idénticos',
      'mismatch': 'NO COINCIDEN — no confíes en el archivo',
      'mismatchWarn': 'Una discrepancia en un archivo descargado puede indicar corrupción o manipulación. Vuelve a descargarlo de la fuente oficial y compara de nuevo.',
      'note': '🛡️ La comparación es de tiempo constante: cada byte se comprueba por XOR aunque haya diferencia, así el tiempo no revela dónde divergen. Antes de comparar se normalizan mayúsculas y espacios.',
      'verdict': 'Veredicto',
    },
  },
  de: {
    useCases: ['die Prüfsumme eines Downloads verifizieren', 'den veröffentlichten mit dem lokalen Hash vergleichen', 'Integrität von ISOs und Installern prüfen', 'Vergleich ohne Störung durch Groß-/Kleinschreibung oder Leerzeichen'],
    faqs: [
      { q: 'Ist der Vergleich Timing-sicher?', a: 'Ja — er akkumuliert ein XOR über alle Zeichen und prüft das Ergebnis erst am Ende, nie vorzeitig beim ersten Unterschied. Timing-Angriffe, die herauslesen wollen, wo zwei Hashes abweichen, sehen hier nichts.' },
      { q: 'Werden Groß-/Kleinschreibung und Leerraum normalisiert?', a: 'Ja — beide Eingaben werden kleingeschrieben und von allem Leerraum befreit; ein großgeschriebener, umgebrochener Hash der Quelle matcht also trotzdem. Die Hex-Ziffern selbst werden strikt Zeichen für Zeichen verglichen.' },
      { q: 'Was bedeutet eine Abweichung konkret?', a: 'Bei Downloads: Beschädigung oder Manipulation — erst von der offiziellen Quelle neu laden, erneut vergleichen, dann ausführen. Beim Prüfen eines eigenen Werts: Er weicht in mindestens einem Zeichen vom veröffentlichten Digest ab.' },
    ],
    ui: {
      'actualLabel': 'Tatsächlicher Hash (von dir berechnet)',
      'expectedLabel': 'Erwarteter Hash (vom Herausgeber)',
      'lenDiff': 'Unterschiedliche Länge — kann nicht derselbe Hash sein.',
      'match': 'ÜBEREINSTIMMUNG — identisch',
      'mismatch': 'KEINE ÜBEREINSTIMMUNG — Datei nicht vertrauen',
      'mismatchWarn': 'Eine Abweichung bei einer heruntergeladenen Datei kann auf Beschädigung oder Manipulation hindeuten. Lade sie erneut von der offiziellen Quelle und vergleiche nochmals.',
      'note': '🛡️ Der Vergleich ist zeitkonstant: jedes Byte wird XOR-geprüft, auch nach Abweichungen — das Timing verrät nichts. Groß-/Kleinschreibung und Leerzeichen werden vorher normalisiert.',
      'verdict': 'Ergebnis',
    },
  },
}
