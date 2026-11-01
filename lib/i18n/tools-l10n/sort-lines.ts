/**
 * sort-lines 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const sortLinesL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'cereza\nmanzana\ndátil\nplátano',
      inputLabel: 'Lista (un elemento por línea)',
      outputLabel: 'Ordenado',
      note: '🔤 Ordena las líneas alfabéticamente. Se eliminan las líneas vacías. Las líneas iguales conservan su orden relativo original (ordenación estable). Instrucciones opcionales al final: " ||| numeric" (orden numérico natural), " ||| desc" (descendente) o " ||| numeric,desc".',
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
      defaultInput: 'kirsche\napfel\ndattel\nbanane',
      inputLabel: 'Liste (ein Eintrag pro Zeile)',
      outputLabel: 'Sortiert',
      note: '🔤 Sortiert die Zeilen alphabetisch. Leere Zeilen werden entfernt. Gleiche Zeilen behalten ihre ursprüngliche Reihenfolge (stabile Sortierung). Optionale Anweisungen am Ende: " ||| numeric" (natürliche Zahlenordnung), " ||| desc" (absteigend) oder " ||| numeric,desc".',
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
      { q: 'Wie werden Zahlen sortiert?', a: 'Standardmäßig werden Zeilen als Text sortiert, daher steht „10“ vor „9“. Mit der Anweisung " ||| numeric" wird numerisch sortiert („9“ vor „10“).' },
    ],
  },
}
