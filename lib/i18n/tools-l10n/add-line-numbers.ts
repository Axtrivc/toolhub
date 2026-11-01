/**
 * add-line-numbers 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const addLineNumbersL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'Primera línea\nSegunda línea\nTercera línea',
      inputLabel: 'Tu texto',
      outputLabel: 'Con números de línea',
      note: '🔢 Añade números de línea a cada línea. Útil para revisión de código, transcripciones y referencias.',
    },
    useCases: [
      'revisión de código — para decir «la línea 42 tiene un error»',
      'organizar entrevistas y transcripciones',
      'analizar archivos de registro',
      'preparar materiales y tutoriales educativos',
    ],
    faqs: [
      { q: '¿Por qué números alineados a la derecha?', a: 'La alineación derecha mantiene estable la columna de texto al crecer el número de líneas — la línea 9 y la línea 10 empiezan en la misma posición. Es la convención en editores de código y publicaciones impresas.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'Erste Zeile\nZweite Zeile\nDritte Zeile',
      inputLabel: 'Dein Text',
      outputLabel: 'Mit Zeilennummern',
      note: '🔢 Fügt jeder Zeile Zeilennummern hinzu. Nützlich für Code-Review, Transkripte und Referenzen.',
    },
    useCases: [
      'Code-Review — praktisch für „in Zeile 42 ist ein Bug“',
      'Interviews und Transkripte ordnen',
      'Logdateien analysieren',
      'Lernmaterialien und Tutorials erstellen',
    ],
    faqs: [
      { q: 'Warum rechtsbündige Zahlen?', a: 'Die Rechtsausrichtung hält die Textspalte stabil, wenn die Zeilenzahl wächst — Zeile 9 und Zeile 10 beginnen an derselben Position. Das ist die Konvention in Code-Editoren und Printmedien.' },
    ],
  },
}
