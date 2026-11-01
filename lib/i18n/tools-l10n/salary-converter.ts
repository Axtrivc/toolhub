/**
 * salary-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const salaryConverterL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Annual = hourly × 2080\nMonthly = annual / 12',
      variables:
        'Annual = salario bruto anual ($)\nhourly = salario por hora ($/hora)\n2080 = horas de trabajo al año (40 horas/semana × 52 semanas)\nMonthly = salario bruto mensual ($)',
      explain: 'Convierte entre paga por hora, semana, mes y año. Asume 2.080 horas laborales al año (40 h × 52 semanas); ajusta las horas para otro horario.',
      example:
        'Paso 1: hourly = $25.00.\nPaso 2: Annual = 25 × 2080 = $52,000.\nPaso 3: Monthly = 52,000 / 12 ≈ $4,333.33.\nPaso 4: comprobación: weekly = 25 × 40 = $1,000, biweekly = $2,000.\nResultado: $25/hora son unos $52,000 al año o $4,333.33 al mes antes de impuestos y deducciones.',
    },
    useCases: ['comparar ofertas que cotizan el sueldo de forma distinta (anual/mensual/hora)', 'convertir una tarifa por hora a sueldo anual para trabajos a tiempo parcial o por contrato', 'entender la diferencia entre pago quincenal y semimensual', 'pasar entre sueldo anual, mensual y por hora al hacer presupuesto'],
    faqs: [
      { q: '¿Cuántas horas tiene un año laboral a tiempo completo?', a: 'El año estándar a tiempo completo en EE. UU. son 2.080 horas (40 horas × 52 semanas). La tarifa por hora que muestra esta herramienta usa esa cifra, escalada por las horas semanales que ingreses.' },
      { q: '¿Esto incluye impuestos y prestaciones?', a: 'No. Son conversiones brutas (antes de impuestos). Tu sueldo neto real depende del impuesto federal y estatal, Seguridad Social, Medicare, aportaciones a jubilación y deducciones de prestaciones.' },
    ],
    ui: {
      'chartTitle': 'Escalera de periodos de pago',
      'cmp.0': 'Mensual',
      'cmp.1': 'Quincenal',
      'cmp.2': 'Semanal',
      'cmp.3': 'Por hora',
      'cmpseg.0': 'Por periodo',
      'in.unit': 'Frecuencia de pago', 'in.amount': 'Importe', 'inSuffix.amount': '$', 'in.hours': 'Horas por semana',
      'opt.unit.annual': 'Anual', 'opt.unit.monthly': 'Mensual', 'opt.unit.semimonthly': 'Semimensual', 'opt.unit.biweekly': 'Quincenal', 'opt.unit.weekly': 'Semanal', 'opt.unit.hourly': 'Por hora',
      'out.annual': 'Sueldo anual', 'out.monthly': 'Mensual', 'out.semimonthly': 'Semimensual', 'out.biweekly': 'Quincenal', 'out.weekly': 'Semanal', 'out.hourly': 'Por hora',
      errNonNegative: 'El importe no puede ser negativo',
      note: '💵 Asume 12 pagas mensuales, 24 semimensuales, 26 quincenales y 52 semanas pagadas al año. No incluye horas extra ni bonos.',
    },
  },
  de: {
    formula: {
      formula: 'Annual = hourly × 2080\nMonthly = annual / 12',
      variables:
        'Annual = Bruttojahresgehalt ($)\nhourly = Stundenlohn ($/Stunde)\n2080 = Arbeitsstunden pro Jahr (40 Stunden/Woche × 52 Wochen)\nMonthly = Bruttomonatsgehalt ($)',
      explain: 'Rechnet zwischen Stunden-, Wochen-, Monats- und Jahreslohn um. Setzt 2.080 Arbeitsstunden pro Jahr (40 Std. × 52 Wochen) voraus; Stunden für andere Modelle anpassen.',
      example:
        'Schritt 1: hourly = $25.00.\nSchritt 2: Annual = 25 × 2080 = $52,000.\nSchritt 3: Monthly = 52,000 / 12 ≈ $4,333.33.\nSchritt 4: Gegenprobe: weekly = 25 × 40 = $1,000, biweekly = $2,000.\nErgebnis: $25/Stunde sind etwa $52,000 pro Jahr oder $4,333.33 pro Monat vor Steuern und Abzügen.',
    },
    useCases: ['Jobangebote vergleichen, die das Gehalt unterschiedlich angeben (jährlich/monatlich/stündlich)', 'einen Stundenlohn in Jahresgehalt umrechnen für Teilzeit- oder Vertragsarbeit', 'den Unterschied zwischen 14-tägigem und halbmonatlichem Gehalt verstehen', 'zwischen Jahres-, Monats- und Stundenlohn für die Budgetplanung umrechnen'],
    faqs: [
      { q: 'Wie viele Stunden hat ein Vollzeitjahr?', a: 'Ein Standard-Vollzeitjahr in den USA umfasst 2.080 Stunden (40 Stunden × 52 Wochen). Der Stundenlohn, den dieses Tool anzeigt, basiert auf dieser Zahl, skaliert mit den von dir eingegebenen Wochenstunden.' },
      { q: 'Sind Steuern und Leistungen enthalten?', a: 'Nein. Dies sind Brutto-Umrechnungen (vor Steuern). Dein tatsächliches Nettoeinkommen hängt von Bundes- und Landessteuer, Sozialversicherung, Medicare, Rentenbeiträgen und Leistungseinbehalten ab.' },
    ],
    ui: {
      'chartTitle': 'Zahlungsperioden-Leiter',
      'cmp.0': 'Monatlich',
      'cmp.1': '14-tägig',
      'cmp.2': 'Wöchentlich',
      'cmp.3': 'Stündlich',
      'cmpseg.0': 'Pro Periode',
      'in.unit': 'Ich werde bezahlt', 'in.amount': 'Betrag', 'inSuffix.amount': '$', 'in.hours': 'Stunden pro Woche',
      'opt.unit.annual': 'Jährlich', 'opt.unit.monthly': 'Monatlich', 'opt.unit.semimonthly': 'Halbmonatlich', 'opt.unit.biweekly': '14-tägig', 'opt.unit.weekly': 'Wöchentlich', 'opt.unit.hourly': 'Stündlich',
      'out.annual': 'Jahresgehalt', 'out.monthly': 'Monatlich', 'out.semimonthly': 'Halbmonatlich', 'out.biweekly': '14-tägig', 'out.weekly': 'Wöchentlich', 'out.hourly': 'Stündlich',
      errNonNegative: 'Der Betrag darf nicht negativ sein',
      note: '💵 Geht von 12 Monatsgehältern, 24 halbmonatlichen Zahlungen, 26 14-tägigen Zahlungen und 52 bezahlten Wochen/Jahr aus. Überstunden und Boni sind nicht enthalten.',
    },
  },
}
