/**
 * morse-code-translator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MorseCodeTranslatorL10n: ToolL10n = {
  zh: {
    ui: {
      'fromMorse': '摩斯电码 → 文本',
      'inMorse': '摩斯电码(.和-,字母间空格,词间/)',
      'inText': '你的文本',
      'note': '📡 国际摩斯标准:点 = 1 单位,划 = 3;符号内间隔 1,字母间 3,词间 7。音频按 600 Hz 与精确时序播放。',
      'play': '播放音频',
      'playPlaying': '播放中…',
      'resultLabel': '结果',
      'toMorse': '文本 → 摩斯电码',
    },
  },
  es: {
    ui: {
      'fromMorse': 'Morse → Texto',
      'inMorse': 'Código Morse (. y -, espacio entre letras, / entre palabras)',
      'inText': 'Tu texto',
      'note': '📡 Morse internacional: punto = 1 unidad, raya = 3; hueco interno 1, entre letras 3, entre palabras 7. El audio suena a 600 Hz con ese ritmo.',
      'play': 'Reproducir audio',
      'playPlaying': 'Reproduciendo…',
      'resultLabel': 'Resultado',
      'toMorse': 'Texto → Morse',
    },
  },
  de: {
    ui: {
      'fromMorse': 'Morse → Text',
      'inMorse': 'Morsecode (. und -, Leerzeichen zwischen Buchstaben, / zwischen Wörtern)',
      'inText': 'Dein Text',
      'note': '📡 Internationales Morse: Punkt = 1 Einheit, Strich = 3; Zeichenabstand 1, Buchstaben 3, Wörter 7. Audio bei 600 Hz mit exaktem Timing.',
      'play': 'Audio abspielen',
      'playPlaying': 'Wird abgespielt…',
      'resultLabel': 'Ergebnis',
      'toMorse': 'Text → Morse',
    },
  },
}
