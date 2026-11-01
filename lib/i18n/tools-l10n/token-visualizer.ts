/**
 * token-visualizer 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(近似可视化,非精确分词)。
 */
import type { ToolL10n } from '../tool-l10n'

export const TokenVisualizerL10n: ToolL10n = {

  es: {
    useCases: [
      'Construir intuición sobre tokens: ver cómo «strawberry» se parte en varios trozos y entender por qué el modelo cuenta mal las erres',
      'Demostrar al equipo la estructura de costes: el mismo contenido en chino consume notablemente más tokens que en inglés',
      'Mostrar en clase el comportamiento BPE: el espacio se fusiona con el token siguiente (␣) y las palabras largas se cortan cada ~4 caracteres',
      'Antes de optimizar un prompt, ver qué palabras de relleno gastan presupuesto sin aportar semántica',
    ],
    faqs: [
      { q: '¿Es el tokenizador real de algún modelo?', a: 'No. Es una aproximación visual: palabras de ≤5 caracteres = 1 token, las largas se parten cada 4 caracteres, CJK ≈ 1 token por carácter. Los tokenizadores reales (tiktoken, SentencePiece…) tienen vocabularios distintos — para cifras de facturación usa el GPT Token Counter; esta herramienta construye intuición, no facturas.' },
      { q: '¿Por qué el espacio aparece como ␣ unido a la siguiente palabra?', a: 'Imita a los tokenizadores BPE reales: el espacio inicial suele fusionarse con la palabra en un solo token (« hello» es un token). Borrar espacios entre palabras no ahorra tokens; de hecho puede cambiar la segmentación.' },
      { q: '¿Por qué las palabras largas se cortan cada 4 caracteres?', a: 'En el corpus inglés, BPE promedia ~4 caracteres por token (0,75 palabras), la regla práctica estándar. Las palabras cortas comunes quedan enteras como 1 token; las largas, raras o las URL se dividen en subpalabras, con puntos de corte que varían según el modelo.' },
      { q: '¿Hay límite para textos grandes?', a: 'Con entradas muy largas la vista en vivo se omite para que la escritura siga fluida; el render muestra solo los primeros bloques, pero «Copiar tokens / Descargar» incluye siempre el resultado completo.' },
    ],
    ui: {
      'note': '🎨 Es una aproximación visual (palabras de ≤5 caracteres = 1 token, las largas se cortan cada 4, CJK ≈ 1 por carácter), no el tokenizador exacto de ningún modelo — para costes usa el GPT Token Counter. Ideal para entender por qué algunas frases cuestan más.',
      'approxTokens': 'Tokens aproximados',
      'charactersLabel': 'caracteres',
      'chunkTitle': 'bloque {n}',
      'hint': 'Cada bloque de color ≈ un token. El espacio (␣) se fusiona con el siguiente token, como hacen los tokenizadores BPE.',
      'inputLabel': 'Tu texto',
      'inputTooLarge': 'La entrada supera los {n} caracteres — la visualización se omite para mantener la escritura fluida. Recorta o vacía el texto para tokenizar.',
      'renderCapped': 'Se muestran los primeros {shown} de {total} bloques para que el renderizado sea rápido — «Copiar tokens / Descargar» abajo incluye los {total} completos.',
      'copyTokens': 'Copiar tokens',
    },
  },
  de: {
    useCases: [
      'Token-Intuition aufbauen: live sehen, wie „strawberry“ in mehrere Stücke zerfällt — und verstehen, warum das Modell die r falsch zählt',
      'Dem Team die Kostenstruktur zeigen: derselbe Inhalt auf Chinesisch verbraucht sichtbar mehr Tokens als auf Englisch',
      'Im Unterricht BPE-Verhalten demonstrieren: Das Leerzeichen verschmilzt mit dem Folge-Token (␣), lange Wörter werden alle ~4 Zeichen geschnitten',
      'Vor der Prompt-Optimierung prüfen, welche Füllwörter Budget fressen, ohne Semantik beizutragen',
    ],
    faqs: [
      { q: 'Ist das der echte Tokenizer eines Modells?', a: 'Nein. Es ist eine visuelle Näherung: Wörter ≤5 Zeichen = 1 Token, längere werden bei 4 Zeichen geteilt, CJK ≈ 1 Token pro Zeichen. Echte Tokenizer (tiktoken, SentencePiece …) haben eigene Vokabulare — für abrechnungsreife Zahlen den GPT Token Counter nutzen. Dieses Werkzeug baut Intuition, keine Rechnungen.' },
      { q: 'Warum erscheint das Leerzeichen als ␣ am nächsten Wort?', a: 'Es ahmt echte BPE-Tokenizer nach: Das führende Leerzeichen verschmilzt meist mit dem Wort zu einem einzigen Token („ hello“ ist eines). Leerzeichen zu löschen spart also keine Tokens — es kann die Segmentierung sogar verändern.' },
      { q: 'Warum werden lange Wörter bei 4 Zeichen geteilt?', a: 'Im englischen Korpus mittelt BPE auf ~4 Zeichen pro Token (0,75 Wörter) — die etablierte Faustregel. Häufige Kurzwörter bleiben ganz; lange, seltene Wörter oder URLs zerfallen in Subword-Einheiten, deren Trennstellen je nach Modell variieren.' },
      { q: 'Gibt es ein Limit für große Texte?', a: 'Bei sehr langen Eingaben wird die Live-Ansicht übersprungen, damit das Tippen flüssig bleibt; gerendert werden nur die ersten Blöcke, aber „Tokens kopieren / Herunterladen“ enthält stets das vollständige Ergebnis.' },
    ],
    ui: {
      'note': '🎨 Eine recht genaue visuelle Näherung (Wörter ≤5 Zeichen = 1 Token, längere bei 4 Zeichen geteilt, CJK ≈ 1 pro Zeichen), nicht der exakte Tokenizer eines bestimmten Modells — für Kosten den GPT Token Counter nutzen. Gut, um zu verstehen, warum manche Phrasen mehr kosten.',
      'approxTokens': 'Ungefähre Tokens',
      'charactersLabel': 'Zeichen',
      'chunkTitle': 'Block {n}',
      'hint': 'Jeder Farbblock ≈ ein Token. Das Leerzeichen (␣) verschmilzt mit dem nächsten Token — ungefähr wie bei BPE.',
      'inputLabel': 'Dein Text',
      'inputTooLarge': 'Die Eingabe überschreitet {n} Zeichen — die Visualisierung wird übersprungen, damit die Eingabe reaktionsfähig bleibt. Text kürzen oder leeren, um zu tokenisieren.',
      'renderCapped': 'Nur die ersten {shown} von {total} Blöcken werden gerendert, damit es schnell bleibt — „Tokens kopieren / Herunterladen“ unten enthält alle {total}.',
      'copyTokens': 'Tokens kopieren',
    },
  },
}
