/**
 * hourly-to-salary-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const hourlyToSalaryCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Annual salary = hourly rate × hours/week × weeks/year',
      explain: '把时薪换算成年薪。标准假设为每周 40 小时、每年 52 周(2,080 小时),可按兼职或无薪休假调整。',
    },
    useCases: ['把时薪换算成年薪/月薪/周薪', '按每周工时算年度收入', '对比两份 offer 的真实报酬', '算兼职或加班后的收入'],
    faqs: [
      { q: '薪资制和时薪制哪个更好?', a: '薪资制通常提供福利和稳定性;时薪制有加班费和灵活性。年薪 $50,000 但每周工作 50 小时,相当于约 $19/小时——还不如每周 40 小时、时薪 $25 的工作。' },
    ],
    ui: {
      'chartTitle': '你的一周(168 小时)',
      'cmp.0': '一周',
      'cmpseg.0': '工作',
      'cmpseg.1': '其余时间',
      'preset.0': '兼职 20 小时',
      'preset.1': '全职 40 小时',
      'preset.2': '旺季 55 小时',
      'in.hourly': '时薪', 'in.hours': '每周工时',
      'out.annual': '年薪', 'out.monthly': '月薪', 'out.weekly': '周薪', 'out.daily': '日薪(8 小时)',
      note: '💵 假设一年 52 个带薪周。按兼职或加班调整工时。',
    },
  },
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
      'in.hourly': 'Tarifa por hora', 'in.hours': 'Horas por semana',
      'out.annual': 'Salario anual', 'out.monthly': 'Mensual', 'out.weekly': 'Semanal', 'out.daily': 'Diario (8 h)',
      note: '💵 Supone 52 semanas pagadas/año. Ajusta las horas para trabajo a tiempo parcial o horas extra.',
    },
  },
  de: {
    formula: {
      formula: 'Annual salary = hourly rate × hours/week × weeks/year',
      explain: 'Rechnet einen Stundenlohn in ein Jahresgehalt um. Standardannahme sind 40 Std./Woche und 52 Wochen/Jahr (2.080 Std.); für Teilzeit oder unbezahlte Freizeit anpassbar.',
    },
    useCases: ['Stundenlohn in Jahres-/Monats-/Wochenlohn umrechnen', 'Jahreseinkommen nach Wochenstunden berechnen', 'die tatsächliche Bezahlung von zwei Angeboten vergleichen', 'Einkommen bei Teilzeit oder Überstunden berechnen'],
    faqs: [
      { q: 'Ist Festgehalt oder Stundenlohn besser?', a: 'Festanstellungen bieten meist Benefits und Sicherheit; Stundenlohn bietet Überstundengeld und Flexibilität. $50.000 Festgehalt bei 50 Stunden/Woche entsprechen ~$19/Stunde — weniger als ein Job mit $25/Stunde bei 40 Stunden.' },
    ],
    ui: {
      'chartTitle': 'Deine Woche (168 Std.)',
      'cmp.0': 'Eine Woche',
      'cmpseg.0': 'Arbeit',
      'cmpseg.1': 'Alles andere',
      'preset.0': 'Teilzeit 20 Std.',
      'preset.1': 'Vollzeit 40 Std.',
      'preset.2': 'Hochsaison 55 Std.',
      'in.hourly': 'Stundenlohn', 'in.hours': 'Stunden pro Woche',
      'out.annual': 'Jahresgehalt', 'out.monthly': 'Monatlich', 'out.weekly': 'Wöchentlich', 'out.daily': 'Täglich (8 Std.)',
      note: '💵 Geht von 52 bezahlten Wochen/Jahr aus. Passe die Stunden für Teilzeit oder Überstunden an.',
    },
  },
}
