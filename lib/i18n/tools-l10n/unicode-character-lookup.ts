/**
 * unicode-character-lookup 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const UnicodeCharacterLookupL10n: ToolL10n = {

  es: {
    useCases: ['buscar símbolos: flechas, estrellas, comillas', 'identificar el punto de código de un carácter', 'escribir escapes CSS o entidades HTML', 'distinguir caracteres casi idénticos'],
    faqs: [
      { q: '¿Cuántos caracteres incluye?', a: 'Una selección de unos cientos de caracteres que la gente busca de verdad: flechas, símbolos matemáticos, letras griegas, guiones y comillas tipográficos, elipsis, monedas, checks y estrellas, cajas y teclas Mac como ⌘. El Unicode completo tiene 150 000+; eso lo cubren los selectores de emoji.' },
      { q: '¿Cómo encuentro un carácter?', a: 'Busca por nombre — «arrow», «star», «quote» — o pega el propio carácter para identificarlo. Cada resultado muestra su punto de código (U+2192 para →) con botón de copia del carácter.' },
      { q: '¿Por qué mostrar el punto de código?', a: 'Es la forma universal de referirse a caracteres: escapes CSS \\2192, entidades HTML e informes de bugs de renderizado. También distinguen parecidos, como el signo de grado frente a un cero en superíndice.' },
    ],
    ui: {
      'noMatch': 'Sin resultados: prueba «arrow», «star», «quote»…',
      'note': '🔤 Conjunto curado con los caracteres que la gente busca. Pega cualquiera como término para identificar su punto de código. Unicode completo: 150 000+.',
      'searchPlaceholder': 'Busca por nombre («arrow», «star») o pega un carácter…',
    },
  },
  de: {
    useCases: ['Symbole finden: Pfeile, Sterne, Anführungszeichen', 'Codepunkt eines eingefügten Zeichens bestimmen', 'CSS-Escapes oder HTML-Entities schreiben', 'verwechselbare Zeichen auseinanderhalten'],
    faqs: [
      { q: 'Wie viele Zeichen sind enthalten?', a: 'Ein paar hundert kuratierte, die tatsächlich gesucht werden: Pfeile, Mathe-Symbole, griechische Buchstaben, typografische Striche/Anführungszeichen/Auslassungspunkte, Währungszeichen, Häkchen und Sterne, Box-Drawing und Mac-Tasten wie ⌘. Das volle Unicode hat 150.000+ — das übernehmen Emoji-Picker.' },
      { q: 'Wie finde ich ein Zeichen?', a: 'Nach Namen suchen — „arrow“, „star“, „quote“ — oder das Zeichen selbst einfügen, um es zu identifizieren. Jedes Ergebnis zeigt den Codepunkt (U+2192 für →) plus Kopier-Button für das Zeichen.' },
      { q: 'Warum der Codepunkt?', a: 'Codepunkte sind die universelle Referenz: CSS-\\2192-Escapes, HTML-Entities und Rendering-Bugreports. Außerdem unterscheiden sie verwechselbare Zeichen, etwa Gradzeichen und hochgestellte Null.' },
    ],
    ui: {
      'noMatch': 'Keine Treffer — versuche „arrow“, „star“, „quote“…',
      'note': '🔤 Kuratierte Auswahl häufig gesuchter Zeichen. Füge eines als Suchbegriff ein, um seinen Codepunkt zu sehen. Volles Unicode: 150.000+.',
      'searchPlaceholder': 'Nach Name suchen („arrow“, „star“) oder Zeichen einfügen…',
    },
  },
}
