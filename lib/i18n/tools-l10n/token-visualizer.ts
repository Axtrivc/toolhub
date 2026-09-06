/**
 * token-visualizer 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(近似可视化,非精确分词)。
 */
import type { ToolL10n } from '../tool-l10n'

export const TokenVisualizerL10n: ToolL10n = {
  zh: {
    useCases: [
      '建立 token 直觉:亲眼看到 "strawberry" 被切成多块,理解模型为什么数不对里面的 r',
      '向团队演示成本结构:同一段内容中文版按字计 token,明显比英文版"烧"得多',
      '教学场景展示 BPE 行为:空格并入后续 token(显示为 ␣)、长词按约 4 字符切开',
      '优化 prompt 前先看 token 分布——哪些修饰词占了预算却没贡献语义,一眼可辨',
    ],
    faqs: [
      { q: '这是某个模型的真实分词器吗?', a: '不是。它是视觉近似:≤5 字符的词算 1 个 token,长词按 4 字符切分,CJK 每字约 1 token。各家真实分词器(tiktoken、SentencePiece 等)词表不同,计费级统计请用 GPT Token Counter——本工具的职责是建立直觉,不是出账单。' },
      { q: '为什么空格显示成 ␣ 还并入下一个词?', a: '这模仿了真实 BPE 分词器的行为:词首空格通常与后面的词合并成单个 token(如 " hello" 是一个 token)。所以删掉词间空格并不能省 token,反而可能改变切分方式。' },
      { q: '为什么长词按 4 字符切?', a: '英语语料里 BPE 平均每 token 约 4 字符(0.75 个词),这是社区广泛使用的经验比例。常见短词完整留在词表里算 1 个;长词、生僻词、URL 会被拆成子词单元,拆分点因模型而异。' },
      { q: '大段文本有上限吗?', a: '超长输入只为保证输入流畅会跳过实时可视化;渲染只显示前若干块,但"复制 tokens / 下载"始终包含全部分块结果,不会丢内容。' },
    ],
    ui: {
      'note': '这是接近的可视化近似(≤5 字符词 = 一个 token,长词按 4 字符切分,CJK 约 1 字/token),并非任何具体模型的精确分词器——算成本请用 GPT Token Counter。适合建立直觉:为什么有的短语更贵。',
      'approxTokens': '近似 token 数',
      'charactersLabel': '字符',
      'chunkTitle': '块 {n}',
      'hint': '每个色块 ≈ 一个 token。空格显示为 ␣ 并并入后续 token——大致符合 BPE 分词器行为。',
      'inputLabel': '你的文本',
      'inputTooLarge': '输入超过 {n} 字符——为保证输入流畅已跳过可视化。请精简或清空文本后再分词。',
      'renderCapped': '仅渲染前 {shown} 块(共 {total} 块)以保证渲染流畅——下方「复制 tokens / 下载」包含全部 {total} 块。',
      'copyTokens': '复制 tokens',
    },
  },
  es: {
    useCases: [
      'Construir intuición sobre tokens: ver cómo «strawberry» se parte en varios trozos y entender por qué el modelo cuenta mal las erres',
      'Demostrar al equipo la estructura de costes: el mismo contenido en chino consume notablemente más tokens que en inglés',
      'Mostrar en clase el comportamiento BPE: el espacio se fusiona con el token siguiente (␣) y las palabras largas se cortan cada ~4 caracteres',
      'Antes de optimizar un prompt, ver qué adjetivos gastan presupuesto sin aportar semántica',
    ],
    faqs: [
      { q: '¿Es el tokenizador real de algún modelo?', a: 'No. Es una aproximación visual: palabras de ≤5 caracteres = 1 token, las largas se parten cada 4 caracteres, CJK ≈ 1 token por carácter. Los tokenizadores reales (tiktoken, SentencePiece…) tienen vocabularios distintos — para cifras de facturación usa el GPT Token Counter; esta herramienta construye intuición, no facturas.' },
      { q: '¿Por qué el espacio aparece como ␣ unido a la siguiente palabra?', a: 'Imita a los tokenizadores BPE reales: el espacio inicial suele fusionarse con la palabra en un solo token (« hello» es un token). Borrar espacios entre palabras no ahorra tokens; de hecho puede cambiar la segmentación.' },
      { q: '¿Por qué las palabras largas se cortan cada 4 caracteres?', a: 'En el corpus inglés, BPE promedia ~4 caracteres por token (0,75 palabras), la regla práctica estándar. Las palabras cortas comunes quedan enteras como 1 token; las largas, raras o las URL se dividen en subpalabras, con puntos de corte que varían según el modelo.' },
      { q: '¿Hay límite para textos grandes?', a: 'Con entradas muy largas la vista en vivo se omite para que la escritura siga fluida; el render muestra solo los primeros bloques, pero «Copiar tokens / Descargar» incluye siempre el resultado completo.' },
    ],
    ui: {
      'note': 'Es una aproximación visual (palabras ≤5 caracteres = 1 token, largas se parten a 4, CJK ≈ 1 por carácter), no el tokenizador exacto de ningún modelo — para costes usa el GPT Token Counter.',
      'approxTokens': 'Tokens aproximados',
      'charactersLabel': 'caracteres',
      'chunkTitle': 'fragmento {n}',
      'hint': 'Cada bloque de color ≈ un token. El espacio (␣) se fusiona con el siguiente token, como hacen los tokenizadores BPE.',
      'inputLabel': 'Tu texto',
      'inputTooLarge': 'La entrada supera los {n} caracteres — la visualización se omite para mantener la escritura fluida. Recorta o vacía el texto para tokenizar.',
      'renderCapped': 'Se muestran los primeros {shown} de {total} bloques para que el renderizado sea rápido — «Copiar tokens / Descargar» abajo incluye los {total} completos.',
      'copyTokens': 'Copiar tokens',
    },
  },
  de: {
    useCases: [
      'Token-Intuition aufbauen: live sehen, wie „strawberry" in mehrere Stücke zerfällt — und verstehen, warum das Modell die r’s falsch zählt',
      'Dem Team die Kostenstruktur zeigen: derselbe Inhalt auf Chinesisch verbraucht sichtbar mehr Tokens als auf Englisch',
      'Im Unterricht BPE-Verhalten demonstrieren: Leerzeichen verschmilzt mit dem Folge-Token (␣), lange Wörter werden alle ~4 Zeichen geschnitten',
      'Vor der Prompt-Optimierung prüfen, welche Füllwörter Budget fressen, ohne Semantik beizutragen',
    ],
    faqs: [
      { q: 'Ist das der echte Tokenizer eines Modells?', a: 'Nein. Es ist eine visuelle Näherung: Wörter ≤5 Zeichen = 1 Token, längere werden bei 4 Zeichen geteilt, CJK ≈ 1 Token pro Zeichen. Echte Tokenizer (tiktoken, SentencePiece …) haben eigene Vokabulare — für abrechnungsreife Zahlen den GPT Token Counter nutzen. Dieses Werkzeug baut Intuition, keine Rechnungen.' },
      { q: 'Warum erscheint das Leerzeichen als ␣ am nächsten Wort?', a: 'Es ahmt echte BPE-Tokenizer nach: Das führende Leerzeichen verschmilzt meist mit dem Wort zu einem einzigen Token („ hello" ist eines). Leerzeichen zu löschen spart also keine Tokens — es kann die Segmentierung sogar verändern.' },
      { q: 'Warum werden lange Wörter bei 4 Zeichen geteilt?', a: 'Im englischen Korpus mittelt BPE auf ~4 Zeichen pro Token (0,75 Wörter) — die etablierte Faustregel. Häufige Kurzwörter bleiben ganz; lange, seltene Wörter oder URLs zerfallen in Subword-Einheiten, deren Schnittstellen je nach Modell variieren.' },
      { q: 'Gibt es ein Limit für große Texte?', a: 'Bei sehr langen Eingaben wird die Live-Ansicht übersprungen, damit das Tippen flüssig bleibt; gerendert werden nur die ersten Blöcke, aber „Tokens kopieren / Herunterladen" enthält stets das vollständige Ergebnis.' },
    ],
    ui: {
      'note': 'Eine nahe Visualisierung (Wörter ≤5 Zeichen = 1 Token, längere bei 4 Zeichen geteilt, CJK ≈ 1 pro Zeichen) — für Kosten den GPT Token Counter nutzen.',
      'approxTokens': 'Ungefähre Tokens',
      'charactersLabel': 'Zeichen',
      'chunkTitle': 'Chunk {n}',
      'hint': 'Jeder Farbblock ≈ ein Token. Leerzeichen (␣) verschmilzt mit dem nächsten Token — ungefähr wie bei BPE.',
      'inputLabel': 'Dein Text',
      'inputTooLarge': 'Die Eingabe überschreitet {n} Zeichen — die Visualisierung wird übersprungen, damit die Eingabe reaktionsfähig bleibt. Text kürzen oder leeren, um zu tokenisieren.',
      'renderCapped': 'Nur die ersten {shown} von {total} Blöcken werden gerendert, damit es schnell bleibt — „Tokens kopieren / Herunterladen" unten enthält alle {total}.',
      'copyTokens': 'Tokens kopieren',
    },
  },
}
