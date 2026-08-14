/**
 * naming-case-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const namingCaseConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'bulkInputLabel': '每行一个短语',
      'bulkMode': '批量模式',
      'bulkPlaceholder': 'user profile settings\ngetHTTPResponse\nAPI_BASE_URL',
      'copy': '复制',
      'hint': '处理空格、下划线、连字符、点、斜杠以及 camelCase/PascalCase 边界。',
      'inputLabel': '要转换的短语',
      'note': '🔒 100% 在客户端——一切都在你的浏览器中转换,数据不离开页面。',
      'placeholder': 'user profile settings',
    },
    useCases: [
      'camelCase 转 snake_case 转换器',
      'PascalCase 转 kebab-case',
      '转换变量命名规范',
      '在线 CONSTANT_CASE 生成器',
    ],
    faqs: [
      {
        q: 'camelCase 和 PascalCase 有什么区别?',
        a: 'camelCase 以小写开头,其后每个单词首字母大写(parseHtml);PascalCase(即大驼峰)连第一个单词也大写(ParseHtml)。camelCase 常用于变量和函数,PascalCase 用于类和 React 组件。',
      },
      {
        q: '它是怎么识别名字里的单词边界的?',
        a: '转换器按连字符、下划线、空格和大小写变化来切分,所以 HTMLParser、html_parser、html-parser 都会先拆成同样的单词列表,再重新格式化。这样你就能在任意两种风格之间双向转换。',
      },
      {
        q: '批量模式会保持「每行一个」吗?',
        a: '会。粘贴一整列(每行一个标识符),每行会被独立转换,并保持原有行序。空行仍然是空行,所以输出与你的输入一一对应。',
      },
    ],
  },
  es: {
    ui: {
      'bulkInputLabel': 'Una frase por línea',
      'bulkMode': 'Modo por lotes',
      'bulkPlaceholder': 'user profile settings\ngetHTTPResponse\nAPI_BASE_URL',
      'copy': 'Copiar',
      'hint': 'Maneja espacios, guiones bajos, guiones, puntos, barras y límites camelCase/PascalCase.',
      'inputLabel': 'Frase a convertir',
      'note': '🔒 100% en el cliente — todo se convierte en tu navegador, nada sale de la página.',
      'placeholder': 'user profile settings',
    },
    useCases: [
      'convertir camelCase a snake_case',
      'PascalCase a kebab-case',
      'convertir convenciones de nombres de variables',
      'generador de CONSTANT_CASE online',
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre camelCase y PascalCase?',
        a: 'camelCase empieza en minúscula y capitaliza cada palabra siguiente (parseHtml), mientras que PascalCase (UpperCamelCase) también capitaliza la primera (ParseHtml). camelCase es la convención para variables y funciones; PascalCase se usa para clases y componentes React.',
      },
      {
        q: '¿Cómo detecta los límites de palabra en un nombre?',
        a: 'El convertidor separa por guiones, guiones bajos, espacios y cambios de mayúsculas, así que HTMLParser, html_parser y html_parser pasan a la misma lista de palabras antes de reformatear. Eso permite convertir entre todos los estilos en ambos sentidos.',
      },
      {
        q: '¿El modo por lotes mantiene un nombre convertido por línea?',
        a: 'Sí. Pega una lista completa (un identificador por línea) y cada línea se convierte de forma independiente, conservando el orden. Las líneas en blanco siguen en blanco, así la salida se alinea uno a uno con tu entrada.',
      },
    ],
  },
  de: {
    ui: {
      'bulkInputLabel': 'Eine Phrase pro Zeile',
      'bulkMode': 'Stapelmodus',
      'bulkPlaceholder': 'user profile settings\ngetHTTPResponse\nAPI_BASE_URL',
      'copy': 'Kopieren',
      'hint': 'Verarbeitet Leerzeichen, Unterstriche, Bindestriche, Punkte, Schrägstriche und camelCase/PascalCase-Grenzen.',
      'inputLabel': 'Zu wandelnde Phrase',
      'note': '🔒 100% clientseitig — alles wird in deinem Browser gewandelt, nichts verlässt die Seite.',
      'placeholder': 'user profile settings',
    },
    useCases: [
      'camelCase in snake_case umwandeln',
      'PascalCase in kebab-case',
      'Variablen-Benennungskonventionen umwandeln',
      'Online-Generator für CONSTANT_CASE',
    ],
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen camelCase und PascalCase?',
        a: 'camelCase beginnt klein und schreibt jedes folgende Wort groß (parseHtml), PascalCase (UpperCamelCase) auch das erste Wort (ParseHtml). camelCase ist die Konvention für Variablen und Funktionen; PascalCase für Klassen und React-Komponenten.',
      },
      {
        q: 'Wie werden Wortgrenzen in einem Namen erkannt?',
        a: 'Der Umwandler trennt an Binde-, Unterstrichen, Leerzeichen und Groß-/Kleinschreibungswechseln, sodass HTMLParser, html_parser und html-parser dieselbe Wortliste ergeben, bevor neu formatiert wird. So konvertierst du zwischen allen Stilen in beide Richtungen.',
      },
      {
        q: 'Behält der Stapelmodus einen konvertierten Namen pro Zeile?',
        a: 'Ja. Füge eine ganze Liste ein (ein Bezeichner pro Zeile) und jede Zeile wird unabhängig umgewandelt, die Reihenfolge bleibt erhalten. Leerzeilen bleiben leer, sodass die Ausgabe eins zu eins mit der Eingabe übereinstimmt.',
      },
    ],
  },
}
