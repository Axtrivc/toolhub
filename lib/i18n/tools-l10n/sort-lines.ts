/**
 * sort-lines 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const sortLinesL10n: ToolL10n = {
  zh: {
    ui: {
      inputLabel: '列表(每行一项)',
      outputLabel: '已排序',
      note: '🔤 按字母顺序排序各行。空行会被移除。可选指令:列表末尾加 " ||| numeric"(按数值自然排序)、" ||| desc"(降序)或 " ||| numeric,desc"。',
    },
    useCases: [
      '整理头脑风暴产生的想法列表',
      '按字母顺序排序姓名,制作通讯录',
      '给产品 SKU 或编号排序',
      '整理关键词或标签以便审阅',
      '清理从文档复制来的文本',
    ],
    faqs: [
      { q: '能倒序排序吗(Z 到 A)?', a: '能。在列表末尾加 " ||| desc" 即可降序(Z → A);加 " ||| numeric,desc" 则按数值从大到小排列。' },
      { q: '数字怎么排序?', a: '默认按文本排序,「10」会排在「9」前面(因为「1」<「9」)。在列表末尾加 " ||| numeric" 指令后按数值自然排序,「9」排在「10」前面。' },
    ],
  },
  es: {
    ui: {
      inputLabel: 'Lista (un elemento por línea)',
      outputLabel: 'Ordenado',
      note: '🔤 Ordena las líneas alfabéticamente. Se eliminan las líneas vacías. Instrucciones opcionales al final: " ||| numeric" (orden numérico natural), " ||| desc" (descendente) o " ||| numeric,desc".',
    },
    useCases: [
      'organizar una lista de ideas de una lluvia de ideas',
      'ordenar nombres alfabéticamente para un directorio',
      'ordenar SKU o códigos de productos',
      'preparar palabras clave o etiquetas para revisión',
      'limpiar texto copiado de documentos',
    ],
    faqs: [
      { q: '¿Puedo ordenar en reversa (Z a A)?', a: 'Sí. Añade " ||| desc" al final de la lista para orden descendente (Z → A); con " ||| numeric,desc" se ordena numéricamente de mayor a menor.' },
      { q: '¿Cómo se ordenan los números?', a: 'Por defecto las líneas se ordenan como texto, por lo que «10» va antes que «9». Con la instrucción " ||| numeric" se ordenan numéricamente («9» antes que «10»).' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'Liste (ein Eintrag pro Zeile)',
      outputLabel: 'Sortiert',
      note: '🔤 Sortiert die Zeilen alphabetisch. Leere Zeilen werden entfernt. Optionale Anweisungen am Ende: " ||| numeric" (natürliche Zahlenordnung), " ||| desc" (absteigend) oder " ||| numeric,desc".',
    },
    useCases: [
      'eine Liste von Brainstorming-Ideen ordnen',
      'Namen alphabetisch für ein Verzeichnis sortieren',
      'Produkt-SKUs oder Codes ordnen',
      'Schlagwörter oder Tags für die Durchsicht vorbereiten',
      'aus Dokumenten kopierten Text bereinigen',
    ],
    faqs: [
      { q: 'Kann ich absteigend sortieren (Z bis A)?', a: 'Ja. Hänge " ||| desc" ans Ende der Liste für absteigende Reihenfolge (Z → A); mit " ||| numeric,desc" wird numerisch von groß nach klein sortiert.' },
      { q: 'Wie werden Zahlen sortiert?', a: 'Standardmäßig werden Zeilen als Text sortiert, daher steht „10" vor „9". Mit der Anweisung " ||| numeric" wird numerisch sortiert („9" vor „10").' },
    ],
  },
}
