/**
 * uuid-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula.explain(公式串/variables/example 回退英文)
 */
import type { ToolL10n } from '../tool-l10n'

// 公式串与 lib/tool-formulas.ts 的 en 原文保持一致(类型要求 formula 必填)
const FORMULA = 'random bits = 128 − 6 = 122 (RFC 4122 v4)\ncollision probability p ≈ n² / 2^123 for n generated UUIDs (birthday bound)'

export const uuidGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'copyAll': 'Copiar todo',
      'generate': '🎲 Generar UUIDs',
      'howMany': 'Cuántos',
      'note': '🆔 Genera UUID v4 RFC 4122 con la Web Crypto API. Se usan como IDs únicos en bases de datos, sesiones y sistemas distribuidos.',
    },
    useCases: ['generar claves primarias únicas para bases de datos', 'crear tokens de sesión o IDs de petición para APIs', 'producir nombres de archivo únicos para contenido subido', 'identificar dispositivos, usuarios o eventos en sistemas distribuidos'],
    formula: {
      formula: FORMULA,
      explain: 'Un UUID v4 tiene 128 bits, pero 6 los fijan los campos de versión y variante, dejando 122 bits aleatorios. Según la cota del cumpleaños, las colisiones solo empiezan a ser plausibles cuando n se acerca a 2^61.5, así que p se mantiene cerca de cero para cualquier n realista.',
    },
    faqs: [
      { q: '¿Los UUID son realmente únicos?', a: 'A efectos prácticos, sí. La probabilidad de que dos UUID v4 aleatorios colisionen es de aproximadamente 1 entre 2,7 × 10^36. Tendrías que generar miles de millones por segundo durante milenios para ver una colisión.' },
    ],
  },
  de: {
    ui: {
      'copyAll': 'Alle kopieren',
      'generate': '🎲 UUIDs erzeugen',
      'howMany': 'Wie viele',
      'note': '🆔 Erzeugt RFC-4122-v4-UUIDs mit der Web Crypto API. Dienen als eindeutige IDs in Datenbanken, Sessions und verteilten Systemen.',
    },
    useCases: ['eindeutige Primärschlüssel für Datenbanken erzeugen', 'Session-Tokens oder API-Request-IDs erstellen', 'eindeutige Dateinamen für Uploads erzeugen', 'Geräte, Benutzer oder Ereignisse in verteilten Systemen kennzeichnen'],
    formula: {
      formula: FORMULA,
      explain: 'Eine v4-UUID hat 128 Bits, 6 davon sind durch die Versions- und Variantenfelder festgelegt, es bleiben 122 zufällige Bits. Nach der Geburtstagsabschätzung werden Kollisionen erst plausibel, wenn sich n 2^61.5 nähert — p bleibt also für jedes realistische n nahe null.',
    },
    faqs: [
      { q: 'Sind UUIDs wirklich eindeutig?', a: 'Für alle praktischen Zwecke: ja. Die Wahrscheinlichkeit einer Kollision zwischen zwei zufälligen v4-UUIDs liegt bei etwa 1 zu 2,7 × 10^36. Du müsstest Milliarden pro Sekunde über Jahrtausende hinweg erzeugen, um eine Kollision zu sehen.' },
    ],
  },
}
