/**
 * hash-comparator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HashComparatorL10n: ToolL10n = {
  zh: {
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
