/**
 * code-beautifier 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const codeBeautifierL10n: ToolL10n = {
  zh: {
    ui: {
      'beautifiedOutput': '美化后的输出',
      'code': '代码',
      'copy': '复制',
      'fourSpaces': '4 空格',
      'indent': '缩进',
      'note': '🔒 100% 在客户端——你的代码仅在你的浏览器中格式化,绝不发送到任何服务器。',
      'pasteYour': '粘贴你的',
      'twoSpaces': '2 空格',
      'unableToFormat': '无法格式化输入',
    },
    useCases: [
      '在线美化压缩的 JavaScript',
      '带缩进的 HTML 格式化工具',
      '免费在线还原压缩 CSS',
      'JSON 美化打印工具',
    ],
    faqs: [
      {
        q: '它支持格式化哪些语言?',
        a: 'HTML、CSS、JavaScript 和 JSON。每种都用对应语言感知的格式化器重新缩进并规范化空格,所以压缩或凌乱的代码会变得易读,且语义不变。',
      },
      {
        q: '美化会改变代码的运行结果吗?',
        a: '不会。格式化只调整空白、换行和缩进——不会改动 token、逻辑或数值。美化后的输出与输入功能完全一致,只是更易读。',
      },
      {
        q: '该用 2 空格还是 4 空格?',
        a: '与你项目现有风格保持一致。HTML、CSS、JSON 常用 2 空格;JavaScript 有时用 4 空格。代码库内部的一致性比具体数字更重要,所以选符合你团队约定的那个。',
      },
    ],
  },
  es: {
    ui: {
      'beautifiedOutput': 'Salida embellecida',
      'code': 'código',
      'copy': 'Copiar',
      'fourSpaces': '4 espacios',
      'indent': 'Sangría',
      'note': '🔒 100% en el cliente — tu código se formatea solo en tu navegador y nunca se envía a ningún servidor.',
      'pasteYour': 'Pega tu',
      'twoSpaces': '2 espacios',
      'unableToFormat': 'No se pudo formatear la entrada',
    },
    useCases: [
      'embellecer JavaScript minificado online',
      'formateador HTML con sangría',
      'desminificar CSS online gratis',
      'herramienta pretty print JSON',
    ],
    faqs: [
      {
        q: '¿Qué lenguajes formatea?',
        a: 'HTML, CSS, JavaScript y JSON. Cada uno se analiza con un formateador consciente del lenguaje que vuelve a sangrar y normalizar los espacios, así el código minificado o desordenado se vuelve legible sin cambiar su significado.',
      },
      {
        q: '¿Embellecer cambia cómo se ejecuta mi código?',
        a: 'No. El formateo solo ajusta espacios en blanco, saltos de línea y sangría; no altera tokens, lógica ni valores. La salida embellecida es funcionalmente idéntica a la entrada, solo más fácil de leer.',
      },
      {
        q: '¿Debo usar 2 o 4 espacios?',
        a: 'Sigue el estilo existente de tu proyecto. Dos espacios es común en HTML, CSS y JSON; cuatro se usa a menudo en JavaScript. La coherencia dentro del código importa más que el número concreto, así que elige lo que coincida con la convención de tu equipo.',
      },
    ],
  },
  de: {
    ui: {
      'beautifiedOutput': 'Verschönerte Ausgabe',
      'code': 'Code ein',
      'copy': 'Kopieren',
      'fourSpaces': '4 Leerzeichen',
      'indent': 'Einrückung',
      'note': '🔒 100% clientseitig — dein Code wird nur in deinem Browser formatiert und nie an einen Server gesendet.',
      'pasteYour': 'Füge deinen',
      'twoSpaces': '2 Leerzeichen',
      'unableToFormat': 'Eingabe konnte nicht formatiert werden',
    },
    useCases: [
      'minimiertes JavaScript online verschönern',
      'HTML-Formatierer mit Einrückung',
      'CSS kostenlos online de-minifizieren',
      'JSON-Pretty-Print-Tool',
    ],
    faqs: [
      {
        q: 'Welche Sprachen formatiert es?',
        a: 'HTML, CSS, JavaScript und JSON. Jede wird mit einem sprachbewussten Formatter neu eingerückt und in den Abständen normalisiert, sodass minifizierter oder unordentlicher Code lesbar wird, ohne die Bedeutung zu ändern.',
      },
      {
        q: 'Verändert Verschönern, wie mein Code läuft?',
        a: 'Nein. Formatieren passt nur Leerzeichen, Zeilenumbrüche und Einrückung an — es ändert keine Tokens, Logik oder Werte. Die verschönerte Ausgabe ist funktionell identisch mit der Eingabe, nur besser lesbar.',
      },
      {
        q: 'Soll ich 2 oder 4 Leerzeichen nehmen?',
        a: 'Halte dich an den bestehenden Stil deines Projekts. Zwei Leerzeichen sind bei HTML, CSS und JSON üblich; vier oft bei JavaScript. Konsistenz innerhalb der Codebase ist wichtiger als die konkrete Zahl, also wähle die Option, die zur Teamkonvention passt.',
      },
    ],
  },
}
