/**
 * screen-time-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ScreenTimeCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'ageLabel': '你的年龄',
      'copySummary': '复制摘要',
      'dailyShare': '占清醒时间比例',
      'fullDays': '个整天',
      'hoursLabel': '每日屏幕小时数',
      'invalid': '请输入有效的小时 (0-24) 与年龄',
      'note': '📱 平均值按每日 16 小时清醒时间。美国成人仅手机就日均 4.5-5 小时;加上电视总屏幕时间超过 7 小时。',
      'perYear': '折合每年…',
      'reclaim': '{n} 年内每天只找回 1 小时',
      'restOfLife': '未来 {n} 年内',
      'yearsAwake': '年清醒时间',
      'yearsBack': '年可支配时间',
    },
  },
  es: {
    ui: {
      'ageLabel': 'Tu edad',
      'copySummary': 'Copiar resumen',
      'dailyShare': 'Proporción de horas despierto',
      'fullDays': 'días completos',
      'hoursLabel': 'Horas de pantalla al día',
      'invalid': 'Introduce horas válidas (0-24) y edad',
      'note': '📱 Los promedios asumen 16 horas despierto al día. Los adultos de EE. UU. pasan 4,5-5 h solo en el móvil; con TV se pasa de 7 h.',
      'perYear': 'Por año eso es…',
      'reclaim': 'Recuperando 1 h/día durante {n} años',
      'restOfLife': 'En los próximos {n} años',
      'yearsAwake': 'años de tiempo despierto',
      'yearsBack': 'años recuperados',
    },
  },
  de: {
    ui: {
      'ageLabel': 'Dein Alter',
      'copySummary': 'Zusammenfassung kopieren',
      'dailyShare': 'Anteil der Wachzeit',
      'fullDays': 'volle Tage',
      'hoursLabel': 'Bildschirmstunden pro Tag',
      'invalid': 'Gültige Stunden (0-24) und Alter eingeben',
      'note': '📱 Durchschnitte nehmen 16 Wachstunden an. US-Erwachsene: 4,5-5 h nur am Handy; mit TV über 7 Stunden.',
      'perYear': 'Pro Jahr sind das…',
      'reclaim': 'Nur 1 h/Tag zurückgewinnen über {n} Jahre',
      'restOfLife': 'In den nächsten {n} Jahren',
      'yearsAwake': 'Jahre Wachzeit',
      'yearsBack': 'Jahre zurück',
    },
  },
}
