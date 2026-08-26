/**
 * unicode-character-lookup 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const UnicodeCharacterLookupL10n: ToolL10n = {
  zh: {
    useCases: ['查找箭头/星形/引号等常用符号', '识别粘贴字符的 Unicode 码点', '写 CSS content 转义或 HTML 实体', '区分外形相近的字符'],
    faqs: [
      { q: '收录了多少字符?', a: '精选几百个人们真正会搜的:箭头、数学符号、希腊字母、排版用破折号/引号/省略号、货币符号、对勾与星形、制表符,以及 ⌘ 这类 Mac 按键。完整 Unicode 有 15 万+ 字符——那块归 emoji 选择器管。' },
      { q: '怎么找到一个字符?', a: '按名称搜——"arrow"、"star"、"quote"——或直接粘贴该字符来识别它。每条结果显示码点(如 → 是 U+2192),并附字符本身的复制按钮。' },
      { q: '为什么要显示码点?', a: '码点是各处引用字符的通用方式:CSS \\2192 转义、HTML 实体、渲染 bug 报告都靠它。它还能区分长得像的字符,比如角度符号和上标零。' },
    ],
    ui: {
      'noMatch': '无匹配 — 试试 "arrow"、"star"、"quote"…',
      'note': '🔤 精选人们真正会搜的字符集。把其中任何字符粘贴为搜索词即可查其码点。完整 Unicode 有 15 万+ 字符——emoji 选择器负责那部分。',
      'searchPlaceholder': '搜索 Unicode 字符',
    },
  },
  es: {
    useCases: ['buscar símbolos: flechas, estrellas, comillas', 'identificar el punto de código de un carácter', 'escribir escapes CSS o entidades HTML', 'distinguir caracteres casi idénticos'],
    faqs: [
      { q: '¿Cuántos caracteres incluye?', a: 'Unos cientos curados que la gente de verdad busca: flechas, símbolos matemáticos, letras griegas, guiones y comillas tipográficos, elipsis, monedas, checks y estrellas, cajas y teclas Mac como ⌘. El Unicode completo tiene 150 000+; eso lo cubren los selectores de emoji.' },
      { q: '¿Cómo encuentro un carácter?', a: 'Busca por nombre — «arrow», «star», «quote» — o pega el propio carácter para identificarlo. Cada resultado muestra su punto de código (U+2192 para →) con botón de copia del carácter.' },
      { q: '¿Por qué mostrar el punto de código?', a: 'Es la forma universal de referirse a caracteres: escapes CSS \\2192, entidades HTML e informes de bugs de renderizado. También distinguen parecidos, como el símbolo de grados frente a un cero volado.' },
    ],
    ui: {
      'noMatch': 'Sin resultados: prueba «arrow», «star»…',
      'note': '🔤 Conjunto curado con los caracteres que la gente busca. Pega cualquiera como término para identificar su punto de código. Unicode completo: 150 000+.',
      'searchPlaceholder': 'Buscar caracteres Unicode',
    },
  },
  de: {
    useCases: ['Symbole finden: Pfeile, Sterne, Anführungszeichen', 'Codepunkt eines eingefügten Zeichens bestimmen', 'CSS-Escapes oder HTML-Entities schreiben', 'verwechselbare Zeichen auseinanderhalten'],
    faqs: [
      { q: 'Wie viele Zeichen sind enthalten?', a: 'Ein paar hundert kuratierte, die tatsächlich gesucht werden: Pfeile, Mathe-Symbole, griechische Buchstaben, typografische Striche/Anführungszeichen/Auslassungspunkte, Währungszeichen, Häkchen und Sterne, Boxzeichnung und Mac-Tasten wie ⌘. Das volle Unicode hat 150 000+ — das übernehmen Emoji-Picker.' },
      { q: 'Wie finde ich ein Zeichen?', a: 'Nach Namen suchen — „arrow", „star", „quote" — oder das Zeichen selbst einfügen, um es zu identifizieren. Jedes Ergebnis zeigt den Codepunkt (U+2192 für →) plus Kopier-Button für das Zeichen.' },
      { q: 'Warum der Codepunkt?', a: 'Codepunkte sind die universelle Referenz: CSS-\\2192-Escapes, HTML-Entities und Rendering-Bugreports. Außerdem trennen sie lookalikes, etwa Grad-Zeichen gegen hochgestellte Null.' },
    ],
    ui: {
      'noMatch': 'Keine Treffer — versuche „arrow", „star"…',
      'note': '🔤 Kuratierte Auswahl häufig gesuchter Zeichen. Füge eines als Suchbegriff ein, um seinen Codepunkt zu sehen. Volles Unicode: 150.000+.',
      'searchPlaceholder': 'Unicode-Zeichen suchen',
    },
  },
}
