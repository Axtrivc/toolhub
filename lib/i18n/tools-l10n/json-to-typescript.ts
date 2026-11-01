/**
 * json-to-typescript 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + ui(交互客户端 JsonToTypeScriptClient 经 tui() 读取)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonToTypeScriptL10n: ToolL10n = {

  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'invalidJson': 'JSON inválido',
      'note': '🔒 100% en el cliente — tu JSON se analiza solo en tu navegador y nunca se envía a ningún servidor.',
      'pasteJson': 'Pega tu JSON',
      'tsInterfaces': 'Interfaces de TypeScript',
    },
    useCases: [
      'generar tipos de TypeScript a partir de respuestas de API',
      'montar interfaces rápidamente con JSON de ejemplo',
      'tipar los datos que devuelve tu backend',
      'acelerar la escritura manual de tipos',
    ],
    faqs: [
      { q: '¿Soporta arrays y objetos anidados?', a: 'Sí. El conversor recorre de forma recursiva los objetos y arrays anidados. Los arrays se tipan según el tipo del elemento (p. ej. string[] para ["a","b"]); los arrays de objetos se convierten en un array de una interface generada. Los arrays de tipos mixtos se resuelven como una unión (p. ej. (string | number)[]).' },
      { q: '¿Cómo se tratan null y undefined?', a: 'El null de JSON se tipa como null (y la propiedad se marca como opcional en modo estricto). JSON no tiene undefined, por lo que nunca aparece. Los objetos vacíos {} se convierten en Record<string, unknown>, para que puedas añadir claves después sin que TypeScript se queje.' },
      { q: '¿Puedo elegir entre interface y type?', a: 'Esta herramienta genera interfaces (interface Foo {}), la convención más común y extensible. Las interfaces admiten la fusión de declaraciones y son más fáciles de extender, lo que encaja bien con la estructura de las respuestas de API. Si prefieres alias de tipo, basta con buscar y reemplazar en la salida.' },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'invalidJson': 'Ungültiges JSON',
      'note': '🔒 100% clientseitig — dein JSON wird nur in deinem Browser geparst und nie an einen Server gesendet.',
      'pasteJson': 'Füge dein JSON ein',
      'tsInterfaces': 'TypeScript-Interfaces',
    },
    useCases: [
      'TypeScript-Typen aus API-Antworten erzeugen',
      'mit Beispiel-JSON schnell interfaces aufbauen',
      'Rückgabedaten deines Backends typen',
      'das manuelle Schreiben von Typen beschleunigen',
    ],
    faqs: [
      { q: 'Werden Arrays und verschachtelte Objekte unterstützt?', a: 'Ja. Der Konverter steigt rekursiv in verschachtelte Objekte und Arrays ab. Arrays werden nach dem Elementtyp typisiert (z. B. string[] für ["a","b"]); Arrays von Objekten werden zu einem Array eines erzeugten interface. Arrays mit gemischten Typen werden zu einer Union (z. B. (string | number)[]).' },
      { q: 'Wie werden null und undefined behandelt?', a: 'JSON-null wird als null typisiert (und die Eigenschaft im Strict-Modus als optional markiert). JSON hat kein undefined, daher taucht es nie auf. Leere Objekte {} werden zu Record<string, unknown>, damit du später Keys hinzufügen kannst, ohne dass TypeScript sich beschwert.' },
      { q: 'Kann ich zwischen interface und type wählen?', a: 'Dieses Werkzeug erzeugt interfaces (interface Foo {}), die gängigste und am leichtesten erweiterbare Konvention. Interfaces unterstützen Declaration Merging und lassen sich einfacher erweitern, was sich gut für die Struktur von API-Antworten eignet. Wenn du Type-Aliase bevorzugst, führe in der Ausgabe einfach Suchen und Ersetzen durch.' },
    ],
  },
}
