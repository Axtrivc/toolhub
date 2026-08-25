/**
 * token-visualizer 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const TokenVisualizerL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '这是接近的可视化近似(≤5 字符词 = 一个 token,长词按 4 字符切分,CJK 约 1 字/token),并非任何具体模型的精确分词器——算成本请用 GPT Token Counter。适合建立直觉:为什么有的短语更贵。',
      'approxTokens': '近似 token 数',
      'chunkTitle': '块 {n}',
      'hint': '每个色块 ≈ 一个 token。空格显示为 ␣ 并并入后续 token——大致符合 BPE 分词器行为。',
      'inputLabel': '你的文本',
    },
  },
  es: {
    ui: {
      'note': 'Es una aproximación visual (palabras ≤5 caracteres = 1 token, largas se parten a 4, CJK ≈ 1 por carácter), no el tokenizador exacto de ningún modelo — para costes usa el GPT Token Counter.',
      'approxTokens': 'Tokens aproximados',
      'chunkTitle': 'fragmento {n}',
      'hint': 'Cada bloque de color ≈ un token. El espacio (␣) se fusiona con el siguiente token, como hacen los tokenizadores BPE.',
      'inputLabel': 'Tu texto',
    },
  },
  de: {
    ui: {
      'note': 'Eine nahe Visualisierung (Wörter ≤5 Zeichen = 1 Token, längere bei 4 Zeichen geteilt, CJK ≈ 1 pro Zeichen) — für Kosten den GPT Token Counter nutzen.',
      'approxTokens': 'Ungefähre Tokens',
      'chunkTitle': 'Chunk {n}',
      'hint': 'Jeder Farbblock ≈ ein Token. Leerzeichen (␣) verschmilzt mit dem nächsten Token — ungefähr wie bei BPE.',
      'inputLabel': 'Dein Text',
    },
  },
}
