/**
 * hash-comparator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HashComparatorL10n: ToolL10n = {
  zh: {
    useCases: ['核对下载文件的校验值', '比对发布方与本地计算的哈希', '验证 ISO/安装包完整性', '排除大小写与空格干扰的比对'],
    faqs: [
      { q: '比较能防时序攻击吗?', a: '能——比较会对每个字符累积 XOR,最后才检查结果,绝不会在第一个不匹配处提前返回。想通过响应时间推断两个哈希从哪里开始不同的时序攻击,在这里观察不到任何信息。' },
      { q: '大小写和空格会归一化吗?', a: '会——两侧输入都会先转小写并去掉所有空白,所以官方发布的大写、带换行的哈希也能匹配上。哈希数字本身则逐字符严格比较。' },
      { q: '不匹配到底意味着什么?', a: '对文件下载来说:文件损坏或被篡改——先从官方源重新下载、再次比对,再决定是否运行。对自算校验:你算出的值与公布摘要在至少一个字符上不同。' },
    ],
    ui: {
      'actualLabel': '实际哈希(你计算的)',
      'expectedLabel': '期望哈希(发布方提供)',
      'lenDiff': '长度不同——不可能是同一摘要。',
      'match': '匹配 — 摘要一致',
      'mismatch': '不匹配 — 请勿信任此文件',
      'mismatchWarn': '下载文件校验不匹配可能意味着损坏或被篡改。请从官方来源重新下载并再次比对。',
      'note': '🛡️ 比较是恒时的:即使出现差异也会异或校验每个字节,响应时序不会泄露哈希在哪里分叉。比较前会先归一化大小写与空格。',
      'verdict': '结论',
    },
  },
  es: {
    useCases: ['verificar el checksum de una descarga', 'comparar el hash publicado con el local', 'validar la integridad de ISOs e instaladores', 'comparar sin que mayúsculas o espacios estorben'],
    faqs: [
      { q: '¿La comparación es segura frente a timing?', a: 'Sí: acumula un XOR sobre todos los caracteres y comprueba el total solo al final; nunca retorna antes en el primer desajuste. Los ataques de timing que intentan leer dónde divergen dos hashes no observan nada aquí.' },
      { q: '¿Se normalizan mayúsculas y espacios?', a: 'Sí — ambas entradas pasan a minúsculas y se les quita todo el espacio en blanco, así que un hash publicado en mayúsculas y con saltos de línea también casa. Los dígitos hexadecimales se comparan estrictamente carácter a carácter.' },
      { q: '¿Qué significa realmente un desajuste?', a: 'En descargas: corrupción o manipulación — vuelve a bajar de la fuente oficial y compara otra vez antes de ejecutar nada. Si verificas un valor que calculaste: difiere de el digest publicado en al menos un carácter.' },
    ],
    ui: {
      'actualLabel': 'Hash real (calculado por ti)',
      'expectedLabel': 'Hash esperado (del editor)',
      'lenDiff': 'Longitudes distintas: no pueden ser el mismo resumen.',
      'match': 'COINCIDEN — idénticos',
      'mismatch': 'NO COINCIDEN — no confíes en el archivo',
      'mismatchWarn': 'Una discrepancia en un archivo descargado puede indicar corrupción o manipulación. Vuelve a descargarlo de la fuente oficial y compara de nuevo.',
      'note': '🛡️ La comparación es de tiempo constante: cada byte se comprueba por XOR aunque haya diferencia, así el tiempo no revela dónde divergen. Se normalizan mayúsculas y espacios.',
      'verdict': 'Veredicto',
    },
  },
  de: {
    useCases: ['die Prüfsumme eines Downloads verifizieren', 'den veröffentlichten mit dem lokalen Hash vergleichen', 'Integrität von ISOs und Installern prüfen', 'Vergleich ohne Störung durch Groß-/Kleinschreibung'],
    faqs: [
      { q: 'Ist der Vergleich Timing-sicher?', a: 'Ja — er akkumuliert ein XOR über alle Zeichen und prüft das Ergebnis erst am Ende, nie vorzeitig beim ersten Unterschied. Timing-Angriffe, die herauslesen wollen, wo zwei Hashes abweichen, sehen hier nichts.' },
      { q: 'Werden Großbuchstaben und Leerraum normalisiert?', a: 'Ja — beide Eingaben werden kleingeschrieben und von allem Leerraum befreit; ein großgeschriebener, umgebrochener Hash der Quelle matcht also trotzdem. Die Hex-Ziffern selbst werden strikt Zeichen für Zeichen verglichen.' },
      { q: 'Was bedeutet ein Missmatch konkret?', a: 'Bei Downloads: Beschädigung oder Manipulation — erst von der offiziellen Quelle neu laden, erneut vergleichen, dann ausführen. Beim Prüfen eines eigenen Werts: Er weicht in mindestens einem Zeichen vom veröffentlichten Digest ab.' },
    ],
    ui: {
      'actualLabel': 'Tatsächlicher Hash (von dir berechnet)',
      'expectedLabel': 'Erwarteter Hash (vom Herausgeber)',
      'lenDiff': 'Unterschiedliche Länge — kann nicht derselbe Hash sein.',
      'match': 'ÜBEREINSTIMMUNG — identisch',
      'mismatch': 'KEINE ÜBEREINSTIMMUNG — Datei nicht vertrauen',
      'mismatchWarn': 'Eine Abweichung bei einer heruntergeladenen Datei kann auf Beschädigung oder Manipulation hindeuten. Lade sie erneut von der offiziellen Quelle und vergleiche nochmals.',
      'note': '🛡️ Der Vergleich ist zeitkonstant: jedes Byte wird XOR-geprüft, auch nach Abweichungen — das Timing verrät nichts. Groß/Klein und Leerzeichen werden normalisiert.',
      'verdict': 'Ergebnis',
    },
  },
}
