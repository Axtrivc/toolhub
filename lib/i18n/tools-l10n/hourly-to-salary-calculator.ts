/**
 * hourly-to-salary-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const hourlyToSalaryCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Annual salary = hourly rate × hours/week × weeks/year',
      explain: 'Convierte un salario por hora en anual. Se asume 40 h/semana y 52 semanas/año (2.080 h); ajústalo para jornada parcial o días no pagados.',
    },
    useCases: ['convertir la tarifa por hora en salario anual/mensual/semanal', 'calcular los ingresos anuales según las horas semanales', 'comparar la retribución real de dos ofertas', 'calcular ingresos con horario parcial o horas extra'],
    faqs: [
      { q: '¿Es mejor salario o tarifa por hora?', a: 'Los empleos por salario suelen ofrecer beneficios y estabilidad; los pagados por hora ofrecen pago extra y flexibilidad. Un salario de $50,000 con 50 horas/semana equivale a ~$19/hora — menos que un empleo de $25/hora a 40 horas.' },
    ],
    ui: {
      'chartTitle': 'Tu semana (168 h)',
      'cmp.0': 'Una semana',
      'cmpseg.0': 'Trabajando',
      'cmpseg.1': 'Todo lo demás',
      'preset.0': 'Media jornada 20 h',
      'preset.1': 'Jornada completa 40 h',
      'preset.2': 'Temporada alta 55 h',
      errNonNegative: 'Los valores no pueden ser negativos',
      'in.hourly': 'Tarifa por hora', 'in.hours': 'Horas por semana',
      'out.annual': 'Salario anual', 'out.monthly': 'Mensual', 'out.weekly': 'Semanal', 'out.daily': 'Diario (8 h)',
      note: '💵 Supone 52 semanas pagadas/año. Ajusta las horas para trabajo a tiempo parcial o horas extra.',
    },
  },
  de: {
    formula: {
      formula: 'Annual salary = hourly rate × hours/week × weeks/year',
      explain: 'Rechnet einen Stundenlohn in ein Jahresgehalt um. Standardannahme sind 40 Std./Woche und 52 Wochen/Jahr (2.080 Std.); für Teilzeit oder unbezahlte Auszeiten anpassbar.',
    },
    useCases: ['Stundenlohn in Jahres-/Monats-/Wochenlohn umrechnen', 'Jahreseinkommen nach Wochenstunden berechnen', 'die tatsächliche Bezahlung von zwei Angeboten vergleichen', 'Einkommen bei Teilzeit oder Überstunden berechnen'],
    faqs: [
      { q: 'Ist Festgehalt oder Stundenlohn besser?', a: 'Festanstellungen bieten meist Benefits und Sicherheit; Stundenlohn bietet Überstundengeld und Flexibilität. $50,000 Festgehalt bei 50 Stunden/Woche entsprechen ~$19/Stunde — weniger als ein Job mit $25/Stunde bei 40 Stunden.' },
    ],
    ui: {
      'chartTitle': 'Deine Woche (168 Std.)',
      'cmp.0': 'Eine Woche',
      'cmpseg.0': 'Arbeit',
      'cmpseg.1': 'Alles andere',
      'preset.0': 'Teilzeit 20 Std.',
      'preset.1': 'Vollzeit 40 Std.',
      'preset.2': 'Hochsaison 55 Std.',
      errNonNegative: 'Werte dürfen nicht negativ sein',
      'in.hourly': 'Stundenlohn', 'in.hours': 'Stunden pro Woche',
      'out.annual': 'Jahresgehalt', 'out.monthly': 'Monatlich', 'out.weekly': 'Wöchentlich', 'out.daily': 'Täglich (8 Std.)',
      note: '💵 Geht von 52 bezahlten Wochen/Jahr aus. Passe die Stunden für Teilzeit oder Überstunden an.',
    },
  },
}
