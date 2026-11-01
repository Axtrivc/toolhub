/**
 * reading-level-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ReadingLevelCheckerL10n: ToolL10n = {

  es: {
    useCases: ['comprobar si un texto se entiende fácil', 'ajustar la dificultad al curso objetivo', 'localizar frases demasiado largas y partirlas', 'comparar la legibilidad antes y después de editar'],
    faqs: [
      { q: '¿Qué fórmulas utiliza?', a: 'Flesch Reading Ease (206,835 − 1,015 × palabras/frase − 84,6 × sílabas/palabra) y Flesch-Kincaid Grade Level — las mismas que utilizan los procesadores de texto. Todo se calcula localmente a partir de tu texto; nada se sube.' },
      { q: '¿Qué puntuación debo buscar?', a: 'Los textos web generales apuntan a 60-70 de facilidad, más o menos 8.º-9.º curso. La prosa legal y académica puntúa legítimamente 30-50. Cuando tu frase más larga pasa de 25 palabras, la herramienta sugiere partirla: la longitud de frase es la palanca más fácil.' },
      { q: '¿Cómo se cuentan las sílabas?', a: 'Con la heurística estándar de grupos vocálicos del inglés: las palabras cortas cuentan una sílaba; las largas, por grupos de vocales tras quitar terminaciones mudas como -e y -ed. Acierta en la mayoría y falla por una en irregulares — la puntuación global absorbe ese ruido.' },
    ],
    ui: {
      'avgSentenceLen': 'Longitud media de frase',
      'easeDifficult': 'Difícil — nivel universitario',
      'easeEasy': 'Fácil — 6.º grado',
      'easeFairlyEasy': 'Bastante fácil — 7.º grado',
      'easeFairlyHard': 'Bastante difícil — 10.º-12.º grado',
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
      { q: 'Welchen Wert sollte ich anpeilen?', a: 'Allgemeine Webtexte zielen auf 60-70 Punkte, etwa 8.-9. Klasse. Juristische und akademische Texte punkten zu Recht nur mit 30-50. Läuft dein längster Satz über 25 Wörter, rät das Werkzeug zum Teilen — Satzlänge ist der leichteste Hebel.' },
      { q: 'Wie werden Silben gezählt?', a: 'Mit der Standard-Heuristik englischer Vokalgruppen: kurze Wörter zählen eine Silbe, längere nach Vokalgruppen, nachdem stumme Endungen wie -e und -ed entfernt wurden. Das trifft bei den meisten Wörtern; bei unregelmäßigen liegt es um eins daneben — über ganze Passagen fällt dieses Rauschen nicht ins Gewicht.' },
    ],
    ui: {
      'avgSentenceLen': 'Ø Satzlänge',
      'easeDifficult': 'Schwer — Universitätsniveau',
      'easeEasy': 'Leicht — 6. Klasse',
      'easeFairlyEasy': 'Ziemlich leicht — 7. Klasse',
      'easeFairlyHard': 'Ziemlich schwer — 10.-12. Klasse',
      'easeStandard': 'Standard — 8.-9. Klasse',
      'easeVeryEasy': 'Sehr leicht — 5. Klasse',
      'easeVeryHard': 'Sehr verworren — Graduiertenniveau',
      'fkGrade': 'Flesch-Kincaid-Stufe',
      'fleschEase': 'Flesch-Lesbarkeit',
      'inputLabel': 'Text einfügen',
      'longestSentenceHint': 'Dein längster Satz hat {n} Wörter — teile ihn besser auf.',
      'note': '📖 Formeln laufen offline: Flesch = 206,835 − 1,015 × Wörter/Satz − 84,6 × Silben/Wort. Webtext: 60-70; Juristisch/Akademisch niedriger.',
      'placeholder': 'Füge mindestens drei Sätze ein, um aussagekräftige Werte zu erhalten…',
      'wordsSentences': 'Wörter / Sätze',
      'wordsUnit': 'Wörter',
    },
  },
}
