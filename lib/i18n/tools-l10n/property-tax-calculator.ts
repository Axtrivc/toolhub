/**
 * property-tax-calculator 本地化 bundle —— zh / es / de(B1 房贷与房产金融批次)
 */
import type { ToolL10n } from '../tool-l10n'

export const PropertyTaxCalculatorL10n: ToolL10n = {

  es: {
    useCases: [
      'estimar el impuesto predial anual y su cuota mensual antes de comprar',
      'convertir mills y porcentajes para comparar tasas efectivas entre condados',
      'calcular cuánto ahorra una exención de vivienda habitual',
      'verificar tu tasa real cuando el avalúo se despega del mercado',
    ],
    faqs: [
      { q: '¿Cómo se calcula el impuesto predial?', a: 'Multiplica el valor avaluado por la tasa en mills y divide entre 1.000: un avalúo de 320.000 $ con 20 mills paga 6.400 $ al año. El valor avaluado suele ser el valor de mercado por el ratio del condado, menos las exenciones que hayas presentado.' },
      { q: '¿Qué es un mill?', a: 'Un mill equivale a 1 $ de impuesto por cada 1.000 $ de valor avaluado — una tasa de 20 mills cobra 20 $ por cada 1.000. Mills y porcentajes se convierten directo: 20 mills = 2% del valor avaluado.' },
      { q: 'Si compro por encima del avalúo, ¿sube mi impuesto?', a: 'A menudo sí. Los topes como la Prop 13 californiana protegen al dueño actual, pero muchas jurisdicciones reavalúan al precio de compra tras la venta. Presupuesta el impuesto sobre lo que pagaste, no sobre la factura actual del vendedor.' },
      { q: '¿Cómo bajo mi factura de impuesto predial?', a: 'Presenta todas las exenciones que te correspondan (vivienda habitual, senior, veterano) — normalmente no son automáticas — y reclama el avalúo cuando crece más que las ventas comparables. Los reclamos suelen caducar entre 30 y 60 días tras la notificación.' },
    ],
    ui: {
      'in.marketValue': 'Valor de mercado',
      'in.ratio': 'Ratio de avalúo',
      'in.millage': 'Tasa en mills',
      'in.exemption': 'Exenciones',
      'inSuffix.marketValue': '$',
      'inSuffix.ratio': '%',
      'inSuffix.millage': 'mills',
      'inSuffix.exemption': '$',
      'out.annualTax': 'Impuesto predial anual',
      'out.monthlyTax': 'Cuota mensual (garantía)',
      'out.assessedValue': 'Valor avaluado',
      'out.effectiveRate': 'Tasa efectiva',
      'errInvalid': 'Valor positivo, ratio 0-100 y mills no negativos',
      'preset.0': 'Mediana EE. UU. (~1,1%)',
      'preset.1': 'Estado de impuestos altos (~2,2%)',
      'preset.2': 'Brecha de avalúo (60% × 30 mills)',
      'preset.3': 'Con exención de $50k',
      'preset.4': 'Carolina del Sur (4% × 250 mills)',
      'note': '🏛️ Un mill = 1 $ de impuesto por cada 1.000 $ de avalúo, así que 20 mills sobre 320.000 $ son 6.400 $/año. Muchos estados avalúan por debajo del mercado (p. ej. 80%) — tu condado publica el ratio y los mills. Comprar caro puede disparar un reavalúo a tu precio; los topes tipo Prop 13 o Save Our Homes protegen a los antiguos dueños, no a ti.',
    },
  },
  de: {
    useCases: [
      'vor dem Kauf Jahresgrundsteuer und Monatsanteil schätzen',
      'Mills und Prozente umrechnen und effektive Sätze vergleichen',
      'ausrechnen, was eine Hauptwohnsitz-Befreiung spart',
      'den echten Steuersatz prüfen, wenn Steuerwert und Marktwert auseinanderlaufen',
    ],
    faqs: [
      { q: 'Wie wird die Grundsteuer berechnet?', a: 'Steuerwert mal Mill-Satz, geteilt durch 1.000: Ein Steuerwert von 320.000 $ bei 20 Mills zahlt 6.400 $ im Jahr. Der Steuerwert ist meist Marktwert mal Bewertungsquote des Kreises, minus eingereichte Befreiungen.' },
      { q: 'Was ist ein Mill?', a: 'Ein Mill entspricht 1 $ Steuer je 1.000 $ Steuerwert — 20 Mills kosten also 20 $ je 1.000. Mills und Prozente rechnen direkt um: 20 Mills = 2% des Steuerwerts.' },
      { q: 'Steigt meine Steuer, wenn ich über dem Steuerwert kaufe?', a: 'Oft ja. Deckel wie Kaliforniens Prop 13 schützen Altbesitzer, aber viele Gerichte bewerten nach dem Verkauf zu deinem Kaufpreis neu. Kalkuliere die Steuer auf das, was du gezahlt hast — nicht auf die aktuelle Rechnung des Verkäufers.' },
      { q: 'Wie senke ich meine Grundsteuer?', a: 'Beantrage jede Befreiung, die dir zusteht (Hauptwohnsitz, Senior, Veteran) — meist nicht automatisch — und lege Widerspruch ein, wenn der Steuerwert stärker steigt als vergleichbare Verkäufe. Die Frist beträgt oft nur 30-60 Tage nach Bescheid.' },
    ],
    ui: {
      'in.marketValue': 'Marktwert',
      'in.ratio': 'Bewertungsquote',
      'in.millage': 'Mill-Satz',
      'in.exemption': 'Befreiungen',
      'inSuffix.marketValue': '$',
      'inSuffix.ratio': '%',
      'inSuffix.millage': 'Mills',
      'inSuffix.exemption': '$',
      'out.annualTax': 'Jährliche Grundsteuer',
      'out.monthlyTax': 'Monatlicher Anteil (Treuhand)',
      'out.assessedValue': 'Steuerwert',
      'out.effectiveRate': 'Effektiver Steuersatz',
      'errInvalid': 'Positiven Wert, Quote 0-100 und nicht-negative Mills eingeben',
      'preset.0': 'US-Median (~1,1%)',
      'preset.1': 'Hochsteuer-Staat (~2,2%)',
      'preset.2': 'Bewertungslücke (60% × 30 Mills)',
      'preset.3': 'Mit 50.000-$-Befreiung',
      'preset.4': 'South Carolina (4% × 250 Mills)',
      'note': '🏛️ Ein Mill = 1 $ Steuer je 1.000 $ Steuerwert, also sind 20 Mills auf 320.000 $ gleich 6.400 $/Jahr. Viele Staaten bewerten unter Marktwert (z. B. 80%) — dein Kreis veröffentlicht Quote und Mill-Satz. Ein hoher Kaufpreis kann eine Neubewertung auslösen; Deckel wie Prop 13 oder Save Our Homes schützen Alteigentümer, nicht dich als Käufer.',
    },
  },
}
