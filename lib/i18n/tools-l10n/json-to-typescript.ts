/**
 * json-to-typescript 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonToTypeScriptL10n: ToolL10n = {
  zh: {
    useCases: [
      '从 API 响应生成 TypeScript 类型',
      '用示例 JSON 快速搭建 interface',
      '为后端返回数据补全类型定义',
      '加速手写类型声明',
    ],
    faqs: [
      { q: '支持数组和嵌套对象吗?', a: '支持。转换器会递归进入嵌套对象和数组。数组按元素类型标注(例如 ["a","b"] 得到 string[]);对象数组会变成某个生成的 interface 的数组。混合类型数组则回退为联合类型(例如 (string | number)[])。' },
      { q: 'null 和 undefined 怎么处理?', a: 'JSON 的 null 会被标注为 null(在严格模式下该属性还会标记为可选)。JSON 没有 undefined,所以它永远不会出现。空对象 {} 会变成 Record<string, unknown>,这样你之后可以随意添加键,TypeScript 不会报错。' },
      { q: '能选择用 interface 还是 type 吗?', a: '本工具生成的是 interface(interface Foo {}),这是最常见、最易扩展的写法。interface 支持声明合并,更方便后续扩展,很适合 API 响应的结构。如果你更喜欢 type 别名,可以对输出做一次查找替换。' },
    ],
  },
  es: {
    useCases: [
      'generar tipos de TypeScript a partir de respuestas de API',
      'montar interfaces rápidamente con JSON de ejemplo',
      'tipar los datos que devuelve tu backend',
      'acelerar la escritura manual de tipos',
    ],
    faqs: [
      { q: '¿Soporta arrays y objetos anidados?', a: 'Sí. El conversor entra recursivamente en objetos y arrays anidados. Los arrays se tipan según el tipo del elemento (p. ej. string[] para ["a","b"]); los arrays de objetos se convierten en un array de una interface generada. Los arrays de tipos mixtos se resuelven como una unión (p. ej. (string | number)[]).' },
      { q: '¿Cómo se tratan null y undefined?', a: 'El null de JSON se tipa como null (y la propiedad se marca como opcional en modo estricto). JSON no tiene undefined, por lo que nunca aparece. Los objetos vacíos {} se convierten en Record<string, unknown>, para que puedas añadir claves luego sin que TypeScript se queje.' },
      { q: '¿Puedo elegir entre interface y type?', a: 'Esta herramienta genera interfaces (interface Foo {}), la convención más común y extensible. Las interfaces admiten declaración conjunta y son más fáciles de extender, lo que encaja con las formas de las respuestas de API. Si prefieres alias de tipo, basta con buscar y reemplazar en la salida.' },
    ],
  },
  de: {
    useCases: [
      'TypeScript-Typen aus API-Antworten erzeugen',
      'mit Beispiel-JSON schnell interfaces aufbauen',
      'Rückgabedaten deines Backends typen',
      'das manuelle Schreiben von Typen beschleunigen',
    ],
    faqs: [
      { q: 'Werden Arrays und verschachtelte Objekte unterstützt?', a: 'Ja. Der Konverter steigt rekursiv in verschachtelte Objekte und Arrays ab. Arrays werden nach dem Elementtyp getippt (z. B. string[] für ["a","b"]); Arrays von Objekten werden zu einem Array eines erzeugten interface. Arrays mit gemischten Typen werden zu einer Union (z. B. (string | number)[]).' },
      { q: 'Wie werden null und undefined behandelt?', a: 'JSON-null wird als null getippt (und die Eigenschaft im Strict-Modus als optional markiert). JSON hat kein undefined, daher taucht es nie auf. Leere Objekte {} werden zu Record<string, unknown>, damit du später Keys hinzufügen kannst, ohne dass TypeScript sich beschwert.' },
      { q: 'Kann ich zwischen interface und type wählen?', a: 'Dieses Werkzeug erzeugt interfaces (interface Foo {}), die häufigste und erweiterbarste Konvention. Interfaces unterstützen Declaration Merging und lassen sich einfacher erweitern, was zu den Formen von API-Antworten passt. Wenn du Type-Alias bevorzugst, führe auf der Ausgabe einfach Suchen und Ersetzen durch.' },
    ],
  },
}
