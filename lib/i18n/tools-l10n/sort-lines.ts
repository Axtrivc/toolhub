/**
 * sort-lines 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const sortLinesL10n: ToolL10n = {
  zh: {
    useCases: [
      '整理头脑风暴产生的想法列表',
      '按字母顺序排序姓名,制作通讯录',
      '给产品 SKU 或编号排序',
      '整理关键词或标签以便审阅',
      '清理从文档复制来的文本',
    ],
    faqs: [
      { q: '能倒序排序吗(Z 到 A)?', a: '本工具按升序排序。需要降序的话,先在这里排序,再手动反转结果。我们可能会在后续版本中加入倒序选项。' },
      { q: '数字怎么排序?', a: '每一行都按文本排序,所以「10」会排在「9」前面(因为「1」<「9」)。要按数值大小自然排序,请先用前导零补齐数字。' },
    ],
  },
  es: {
    useCases: [
      'organizar una lista de ideas de una lluvia de ideas',
      'ordenar nombres alfabéticamente para un directorio',
      'ordenar SKU o códigos de productos',
      'preparar palabras clave o etiquetas para revisión',
      'limpiar texto copiado de documentos',
    ],
    faqs: [
      { q: '¿Puedo ordenar en reversa (Z a A)?', a: 'Esta herramienta ordena de forma ascendente. Para orden descendente, ordena aquí y luego invierte el resultado manualmente. Podríamos añadir una opción de reversa en una próxima actualización.' },
      { q: '¿Cómo se ordenan los números?', a: 'Las líneas se ordenan como texto, por lo que «10» va antes que «9» (porque «1» < «9»). Para un orden numérico natural, rellena los números con ceros a la izquierda primero.' },
    ],
  },
  de: {
    useCases: [
      'eine Liste von Brainstorming-Ideen ordnen',
      'Namen alphabetisch für ein Verzeichnis sortieren',
      'Produkt-SKUs oder Codes ordnen',
      'Schlagwörter oder Tags für die Durchsicht vorbereiten',
      'aus Dokumenten kopierten Text bereinigen',
    ],
    faqs: [
      { q: 'Kann ich absteigend sortieren (Z bis A)?', a: 'Dieses Werkzeug sortiert aufsteigend. Für absteigende Reihenfolge sortiere hier und drehe das Ergebnis anschließend manuell um. Eine Option für umgekehrte Sortierung könnte in einem späteren Update hinzukommen.' },
      { q: 'Wie werden Zahlen sortiert?', a: 'Zeilen werden als Text sortiert, daher steht „10" vor „9" (weil „1" < „9"). Für eine natürliche numerische Sortierung füge den Zahlen zuerst führende Nullen hinzu.' },
    ],
  },
}
