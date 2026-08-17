/**
 * text-to-list 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const textToListL10n: ToolL10n = {
  zh: {
    ui: {
      inputLabel: '多行文本',
      outputLabel: '项目符号列表',
      note: '📝 给每行加上项目符号(默认 •)。在文本末尾追加 " ||| -"、" ||| *" 或 " ||| 1." 可改用连字符、星号或数字编号。',
    },
    useCases: [
      '把随手记下的笔记整理成结构化列表',
      '从零散想法生成大纲',
      '准备购物清单或待办清单',
      '为幻灯片和文档排版数据',
    ],
    faqs: [
      { q: '能用不同的项目符号吗?', a: '能。默认使用「•」(圆点);在文本末尾加 " ||| -" 或 " ||| *" 可换成连字符或星号,加 " ||| 1." 则用数字编号。' },
    ],
  },
  es: {
    ui: {
      inputLabel: 'Líneas de texto',
      outputLabel: 'Lista con viñetas',
      note: '📝 Añade una viñeta (•) a cada línea. Añade " ||| -", " ||| *" o " ||| 1." tras el texto para usar guiones, asteriscos o numeración.',
    },
    useCases: [
      'convertir notas rápidas en una lista estructurada',
      'crear esquemas a partir de ideas sueltas',
      'preparar listas de la compra o de tareas',
      'dar formato a datos para diapositivas y documentos',
    ],
    faqs: [
      { q: '¿Puedo usar otros estilos de viñeta?', a: 'Sí. Por defecto usa «•» (viñeta); añade " ||| -" o " ||| *" al final del texto para usar guiones o asteriscos, o " ||| 1." para numeración.' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'Textzeilen',
      outputLabel: 'Aufzählungsliste',
      note: '📝 Fügt jeder Zeile ein Aufzählungszeichen (•) hinzu. Hänge " ||| -", " ||| *" oder " ||| 1." an den Text an, um Bindestriche, Sterne oder Nummerierung zu verwenden.',
    },
    useCases: [
      'schnell notierte Gedanken in eine strukturierte Liste umwandeln',
      'aus verteilten Ideen eine Gliederung erstellen',
      'Einkaufs- oder Aufgabenlisten vorbereiten',
      'Daten für Folien und Dokumente formatieren',
    ],
    faqs: [
      { q: 'Kann ich andere Aufzählungszeichen verwenden?', a: 'Ja. Standardmäßig wird „•" (Aufzählungspunkt) verwendet; hänge " ||| -" oder " ||| *" an den Text an, um Bindestriche oder Sterne zu nutzen, oder " ||| 1." für Nummerierung.' },
    ],
  },
}
