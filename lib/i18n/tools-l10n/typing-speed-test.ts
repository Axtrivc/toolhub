/**
 * typing-speed-test 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const TypingSpeedTestL10n: ToolL10n = {
  zh: {
    ui: {
      'accuracy': '准确率',
      'grossWpm': '总 WPM',
      'netExplain': '已扣除错误',
      'netWpm': '净 WPM',
      'note': '⌨️ 净 WPM 按标准公式:每分钟字符数 ÷ 5 再减错误。普通成人 38-42;专业速录员超过 80。',
      'progress': '{n}/{m} 字符',
      'reset': '重置',
      'startTyping': '在此开始输入——首次击键即开始计时',
      'timeSec': '时间',
      'tryAgain': '换一句再测',
      'typeHere': '在此输入',
    },
  },
  es: {
    ui: {
      'accuracy': 'Precisión',
      'grossWpm': 'PPM bruto',
      'netExplain': 'errores descontados',
      'netWpm': 'PPM neto',
      'note': '⌨️ El PPM neto sigue la fórmula estándar: caracteres ÷ 5 por minuto menos errores. Adultos medios: 38-42; profesionales superan 80.',
      'progress': '{n}/{m} caracteres',
      'reset': 'Restablecer',
      'startTyping': 'Escribe aquí: el reloj arranca con la primera tecla',
      'timeSec': 'Tiempo',
      'tryAgain': 'Probar otra frase',
      'typeHere': 'Escribe aquí',
    },
  },
  de: {
    ui: {
      'accuracy': 'Genauigkeit',
      'grossWpm': 'Brutto-WPM',
      'netExplain': 'Fehler abgezogen',
      'netWpm': 'Netto-WPM',
      'note': '⌨️ Netto-WPM nach Standardformel: Zeichen ÷ 5 pro Minute minus Fehler. Durchschnitt: 38-42; Profis über 80.',
      'progress': '{n}/{m} Zeichen',
      'reset': 'Zurücksetzen',
      'startTyping': 'Hier tippen — die Uhr startet beim ersten Tastendruck',
      'timeSec': 'Zeit',
      'tryAgain': 'Anderen Satz testen',
      'typeHere': 'Hier tippen',
    },
  },
}
