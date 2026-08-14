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
      note: '📝 给每行加上项目符号。用于笔记、提纲和文档排版。',
    },
    useCases: [
      '把随手记下的笔记整理成结构化列表',
      '从零散想法生成大纲',
      '准备购物清单或待办清单',
      '为幻灯片和文档排版数据',
    ],
    faqs: [
      { q: '能用不同的项目符号吗?', a: '本工具使用「•」(圆点)。需要编号列表请用「添加行号」工具。其他样式(–、*、1.)可能会在后续版本中加入。' },
    ],
  },
  es: {
    ui: {
      inputLabel: 'Líneas de texto',
      outputLabel: 'Lista con viñetas',
      note: '📝 Añade viñetas a cada línea. Para notas, esquemas y formato de documentos.',
    },
    useCases: [
      'convertir notas rápidas en una lista estructurada',
      'crear esquemas a partir de ideas sueltas',
      'preparar listas de la compra o de tareas',
      'dar formato a datos para diapositivas y documentos',
    ],
    faqs: [
      { q: '¿Puedo usar otros estilos de viñeta?', a: 'Esta herramienta usa «•» (viñeta). Para listas numeradas, usa la herramienta Añadir números de línea. Para otros estilos (–, *, 1.), una próxima actualización podría añadir opciones.' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'Textzeilen',
      outputLabel: 'Aufzählungsliste',
      note: '📝 Fügt jeder Zeile Aufzählungszeichen hinzu. Für Notizen, Gliederungen und Dokumentformatierung.',
    },
    useCases: [
      'schnell notierte Gedanken in eine strukturierte Liste umwandeln',
      'aus verteilten Ideen eine Gliederung erstellen',
      'Einkaufs- oder Aufgabenlisten vorbereiten',
      'Daten für Folien und Dokumente formatieren',
    ],
    faqs: [
      { q: 'Kann ich andere Aufzählungszeichen verwenden?', a: 'Dieses Werkzeug verwendet „•" (Aufzählungspunkt). Für nummerierte Listen nutze das Werkzeug Zeilen nummerieren. Andere Stile (–, *, 1.) könnten in einem späteren Update hinzukommen.' },
    ],
  },
}
