/**
 * add-line-numbers 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const addLineNumbersL10n: ToolL10n = {
  zh: {
    useCases: [
      '代码评审——便于引用「第 42 行有个 bug」',
      '整理访谈记录和逐字稿',
      '分析日志文件',
      '编写教学材料与教程',
    ],
    faqs: [
      { q: '为什么行号要右对齐?', a: '右对齐能让文本列在行数增加时保持稳定——第 9 行和第 10 行的起始位置一致。这是代码编辑器和印刷出版物的通行做法。' },
    ],
  },
  es: {
    useCases: [
      'revisión de código — para decir «la línea 42 tiene un error»',
      'ordenar entrevistas y transcripciones',
      'analizar archivos de registro',
      'preparar materiales y tutoriales educativos',
    ],
    faqs: [
      { q: '¿Por qué números alineados a la derecha?', a: 'La alineación derecha mantiene estable la columna de texto al crecer el número de líneas — la línea 9 y la línea 10 empiezan en la misma posición. Es la convención en editores de código y publicaciones impresas.' },
    ],
  },
  de: {
    useCases: [
      'Code-Review — praktisch für „in Zeile 42 ist ein Bug"',
      'Interviews und Transkripte ordnen',
      'Logdateien analysieren',
      'Lernmaterialien und Tutorials erstellen',
    ],
    faqs: [
      { q: 'Warum rechtsbündige Zahlen?', a: 'Die Rechtsausrichtung hält die Textspalte stabil, wenn die Zeilenzahl wächst — Zeile 9 und Zeile 10 beginnen an derselben Position. Das ist die Konvention in Code-Editoren und Druckschriften.' },
    ],
  },
}
