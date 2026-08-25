/**
 * reading-level-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ReadingLevelCheckerL10n: ToolL10n = {
  zh: {
    useCases: ['检查文案是否通俗易懂', '把文章难度控制在目标年级', '找出过长的句子并拆分', '对比改写前后的可读性变化'],
    faqs: [
      { q: '用的是哪些公式?', a: 'Flesch 阅读容易度(206.835 − 1.015 × 每句词数 − 84.6 × 每词音节)和 Flesch-Kincaid 年级水平——与文字处理软件用的是同一对。全部在本地根据你的文本计算,不上传任何内容。' },
      { q: '应该以多少分为目标?', a: '一般网页文案瞄准 60-70 的容易度,大致相当于 8-9 年级。法律和学术文本落在 30-50 属正常。当最长句子超过 25 词时,工具会提示拆分——句长是最容易动的杠杆。' },
      { q: '音节是怎么数的?', a: '用标准的英文元音组启发式:短词记 1 个音节;长词先去掉 -e、-ed 等静音结尾再按元音组计数。对多数单词准确,对不规则词可能差 1——整段评分能消化这点误差。' },
    ],
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
    useCases: ['comprobar si un texto se entiende fácil', 'ajustar la dificultad al curso objetivo', 'localizar frases demasiado largas y partirlas', 'comparar la legibilidad antes y después de editar'],
    faqs: [
      { q: '¿Qué fórmulas utiliza?', a: 'Flesch Reading Ease (206,835 − 1,015 × palabras/frase − 84,6 × sílabas/palabra) y Flesch-Kincaid Grade Level — la misma pareja de los procesadores de texto. Todo se calcula localmente a partir de tu texto; nada se sube.' },
      { q: '¿Qué puntuación debo buscar?', a: 'La copía web general apunta a 60-70 de facilidad, más o menos 8.º-9.º curso. La prosa legal y académica puntúa legítimamente 30-50. Cuando tu frase más larga pasa de 25 palabras, la herramienta sugiere partirla: la longitud de frase es la palanca más fácil.' },
      { q: '¿Cómo se cuentan las sílabas?', a: 'Con la heurística estándar de grupos vocálicos del inglés: las palabras cortas cuentan una sílaba; las largas, por grupos de vocales tras quitar terminaciones mudas como -e y -ed. Acierta en la mayoría y falla por una en irregulares — la puntuación global absorbe ese ruido.' },
    ],
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
    useCases: ['prüfen, ob ein Text leicht verständlich ist', 'die Schwierigkeit auf eine Zielklasse einstellen', 'zu lange Sätze finden und teilen', 'die Lesbarkeit vor und nach der Überarbeitung vergleichen'],
    faqs: [
      { q: 'Welche Formeln werden genutzt?', a: 'Flesch Reading Ease (206,835 − 1,015 × Wörter/Satz − 84,6 × Silben/Wort) und Flesch-Kincaid Grade Level — dasselbe Paar wie in Textverarbeitungen. Alles wird lokal aus deinem Text berechnet; nichts wird hochgeladen.' },
      { q: 'Welchen Wert sollte ich anpeilen?', a: 'Allgemeine Webtexte zielen auf 60-70 Punkte, etwa 8.-9. Klasse. Juristischer und akademischer Text landet berechtigt bei 30-50. Läuft dein längster Satz über 25 Wörter, rät das Werkzeug zum Teilen — Satzlänge ist der leichteste Hebel.' },
      { q: 'Wie werden Silben gezählt?', a: 'Mit der Standard-Heuristik englischer Vokalgruppen: kurze Wörter zählen eine Silbe, längere nach Vokalgruppen, nachdem stumme Endungen wie -e und -ed entfernt wurden. Das trifft bei den meisten Wörtern; bei Irregulären geht es um eins daneben — ganze Passagen schlucken dieses Rauschen.' },
    ],
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
