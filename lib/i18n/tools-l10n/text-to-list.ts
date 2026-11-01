/**
 * text-to-list 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const textToListL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'Manzana\nPlátano\nCereza',
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
      defaultInput: 'Apfel\nBanane\nKirsche',
      inputLabel: 'Textzeilen',
      outputLabel: 'Aufzählungsliste',
      note: '📝 Fügt jeder Zeile ein Aufzählungszeichen (•) hinzu. Hänge " ||| -", " ||| *" oder " ||| 1." an den Text an, um Bindestriche, Sterne oder Nummerierung zu verwenden.',
    },
    useCases: [
      'Schnell notierte Gedanken in eine strukturierte Liste umwandeln',
      'Aus verteilten Ideen eine Gliederung erstellen',
      'Einkaufs- oder Aufgabenlisten vorbereiten',
      'Daten für Folien und Dokumente formatieren',
    ],
    faqs: [
      { q: 'Kann ich andere Aufzählungszeichen verwenden?', a: 'Ja. Standardmäßig wird „•“ (Aufzählungspunkt) verwendet; hänge " ||| -" oder " ||| *" an den Text an, um Bindestriche oder Sterne zu nutzen, oder " ||| 1." für Nummerierung.' },
    ],
  },
}
