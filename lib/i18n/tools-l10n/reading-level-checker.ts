/**
 * reading-level-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ReadingLevelCheckerL10n: ToolL10n = {
  zh: {
    ui: {
      'avgSentenceLen': '平均句长',
      'easeDifficult': '难 — 大学水平',
      'easeEasy': '容易 — 6 年级',
      'easeFairlyEasy': '较容易 — 7 年级',
      'easeFairlyHard': '较难 — 10-12 年级',
      'easeStandard': '标准 — 8-9 年级',
      'easeVeryEasy': '非常容易 — 5 年级',
      'easeVeryHard': '非常晦涩 — 研究生水平',
      'fkGrade': 'Flesch-Kincaid 年级',
      'fleschEase': 'Flesch 易读度',
      'inputLabel': '粘贴文本',
      'longestSentenceHint': '最长一句有 {n} 个词——建议拆分。',
      'note': '📖 公式完全离线运行:Flesch 易读度 = 206.835 − 1.015 × 词/句 − 84.6 × 音节/词。通用网文目标 60-70;法律学术文本低是正常的。',
      'placeholder': '请粘贴至少三句话以获得有意义的评分…',
      'wordsSentences': '词数 / 句数',
      'wordsUnit': '词',
    },
  },
  es: {
    ui: {
      'avgSentenceLen': 'Longitud media de frase',
      'easeDifficult': 'Difícil — nivel universitario',
      'easeEasy': 'Fácil — 6.º grado',
      'easeFairlyEasy': 'Bastante fácil — 7.º grado',
      'easeFairlyHard': 'Bastante difícil — 10.º-12.º',
      'easeStandard': 'Estándar — 8.º-9.º grado',
      'easeVeryEasy': 'Muy fácil — 5.º grado',
      'easeVeryHard': 'Muy confuso — nivel de posgrado',
      'fkGrade': 'Nivel Flesch-Kincaid',
      'fleschEase': 'Lecturabilidad Flesch',
      'inputLabel': 'Pega tu texto',
      'longestSentenceHint': 'Tu frase más larga tiene {n} palabras: considera partirla.',
      'note': '📖 Las fórmulas van offline: Flesch = 206,835 − 1,015 × palabras/frase − 84,6 × sílabas/palabra. Web general: 60-70; lo legal-académico puntúa más bajo.',
      'placeholder': 'Pega al menos tres frases para puntuaciones fiables…',
      'wordsSentences': 'Palabras / frases',
      'wordsUnit': 'palabras',
    },
  },
  de: {
    ui: {
      'avgSentenceLen': 'Ø Satzlänge',
      'easeDifficult': 'Schwer — Universitätsniveau',
      'easeEasy': 'Leicht — 6. Klasse',
      'easeFairlyEasy': 'Ziemlich leicht — 7. Klasse',
      'easeFairlyHard': 'Ziemlich schwer — 10.-12. Klasse',
      'easeStandard': 'Standard — 8.-9. Klasse',
      'easeVeryEasy': 'Sehr leicht — 5. Klasse',
      'easeVeryHard': 'Sehr verworren — Doktorandsniveau',
      'fkGrade': 'Flesch-Kincaid-Stufe',
      'fleschEase': 'Flesch-Lesbarkeit',
      'inputLabel': 'Text einfügen',
      'longestSentenceHint': 'Dein längster Satz hat {n} Wörter — teile ihn besser.',
      'note': '📖 Formeln laufen offline: Flesch = 206,835 − 1,015 × Wörter/Satz − 84,6 × Silben/Wort. Webtext: 60-70; Juristisch/Akademisch niedriger.',
      'placeholder': 'Füge mindestens drei Sätze ein…',
      'wordsSentences': 'Wörter / Sätze',
      'wordsUnit': 'Wörter',
    },
  },
}
