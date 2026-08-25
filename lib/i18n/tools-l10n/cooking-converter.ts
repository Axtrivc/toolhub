/**
 * cooking-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CookingConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'amount': '金额',
      'convert': '换算',
      'copySummary': '复制摘要',
      'ingredient': '食材',
      'note': '🧁 体积转重量取决于装杯密实度(过筛与舀入的面粉差约 20%)。本工具用标准"舀入刮平"均值;厨房秤永远最准。',
      'unit': '单位',
      'volume': '体积(美制)',
      'weight': '体重',
    },
  },
  es: {
    ui: {
      'amount': 'Importe',
      'convert': 'Convertir',
      'copySummary': 'Copiar resumen',
      'ingredient': 'Ingrediente',
      'note': '🧁 El volumen a peso depende de cómo llenes la taza (tamizada vs cuchareada difiere ~20 %). Usamos medias estándar; la báscula siempre gana.',
      'unit': 'Unidad',
      'volume': 'Volumen (EE. UU.)',
      'weight': 'Peso',
    },
  },
  de: {
    ui: {
      'amount': 'Betrag',
      'convert': 'Umrechnen',
      'copySummary': 'Zusammenfassung kopieren',
      'ingredient': 'Zutat',
      'note': '🧁 Volumen zu Gewicht hängt von der Befüllung ab (gesiebt vs. gelöffelt ~20 % Unterschied). Wir nutzen Standardmittel; die Küchenwaage gewinnt immer.',
      'unit': 'Einheit',
      'volume': 'Volumen (US)',
      'weight': 'Gewicht',
    },
  },
}
