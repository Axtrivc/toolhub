/**
 * overtime-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const OvertimeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular cuánto pagarán tus horas extra', 'comprobar la partida de horas extra de tu nómina', 'comparar multiplicadores de 1,5× y 2×', 'decidir si merece la pena aceptar un turno extra'],
    faqs: [
      { q: '¿Cuándo son obligatorias las horas extra?', a: 'La ley federal estadounidense (FLSA) exige 1,5× pasado las 40 horas semanales para empleados no exentos. Algunos estados añaden horas extra diarias (California tras 8 h/día); el doble tiempo en festivos suele venir de convenios o políticas de empresa: elige el multiplicador de tu jurisdicción o contrato.' },
      { q: '¿Cómo se calcula la paga?', a: 'La paga regular es tarifa × horas ordinarias; la extra es tarifa × multiplicador × horas extra. Elige el multiplicador que marque tu contrato o jurisdicción: para la mayoría de no exentos en EE. UU. es ×1,5, y el doble en festivos suele ofrecerlo el convenio o la empresa.' },
      { q: 'Cobro salario fijo, ¿me aplica?', a: 'Solo si eres no exento. Calcula tu tarifa horaria como salario semanal ÷ 40, introdúcela con tus horas extra y el multiplicador se aplica desde ahí. Los empleados exentos no reciben horas extra por muchas que trabajen.' },
    ],
    ui: {
      'chartTitle': 'Desglose del salario semanal',
      'slice.regularPay': 'Paga regular',
      'slice.otPay': 'Paga de horas extra',
      'chartCenter': 'Total semanal',
      'in.base': 'Salario por hora',
      'in.otHours': 'Horas extra/semana',
      'in.otMultiplier': 'Multiplicador de horas extra',
      'in.otPay': 'Pago de horas extra',
      'in.otRate': 'Tarifa extra efectiva',
      'in.regularHours': 'Horas normales/semana',
      'in.regularPay': 'Pago regular',
      'in.totalWeekly': 'Pago semanal total',
      'note': '💼 La ley federal estadounidense (FLSA) exige ×1,5 pasadas las 40 h/semana para empleados no exentos; algunos estados exigen horas extra diarias, y el doble en festivos suele venir de convenios o políticas de empresa. Asalariados no exentos: tarifa regular ÷ 40.',
      'opt.otMultiplier.1.5': 'Hora y media (×1,5)',
      'opt.otMultiplier.2': 'Doble (×2)',
      'out.base': 'Salario por hora',
      'out.otHours': 'Horas extra/semana',
      'out.otMultiplier': 'Multiplicador de horas extra',
      'out.otPay': 'Pago de horas extra',
      'out.otRate': 'Tarifa extra efectiva',
      'out.regularHours': 'Horas normales/semana',
      'out.regularPay': 'Pago regular',
      'out.totalWeekly': 'Pago semanal total',
          'errInvalidRate': "Introduce una tarifa horaria válida",
      'errNonNegative': "Las horas no pueden ser negativas",
},
  },
  de: {
    useCases: ['ausrechnen, was deine Überstunden bringen', 'den Überstundenposten auf der Abrechnung prüfen', '1,5×- mit 2×-Sätzen vergleichen', 'entscheiden, ob sich ein Zusatzdienst lohnt'],
    faqs: [
      { q: 'Wann sind Überstunden gesetzlich Pflicht?', a: 'Das US-Bundesrecht (FLSA) verlangt 1,5× über 40 Wochenstunden für nicht freigestellte Beschäftigte. Manche Bundesstaaten ergänzen Tagesüberstunden (Kalifornien nach 8 h/Tag); Feiertags-Doppellohn kommt typischerweise aus Tarifverträgen oder Firmenrichtlinien — wähle den Multiplikator deiner Rechtslage oder deines Vertrags.' },
      { q: 'Wie wird die Bezahlung berechnet?', a: 'Die Regelvergütung ist Stundenlohn × Regelstunden, die Überstundenvergütung ist Stundenlohn × Multiplikator × Überstunden. Wähle den Faktor laut Vertrag oder Rechtslage: für die meisten nicht freigestellten Beschäftigten in den USA 1,5×; Feiertags-Doppellohn bieten meist Tarifvertrag oder Arbeitgeber.' },
      { q: 'Ich bin Festangestellt — gilt das für mich?', a: 'Nur wenn du nicht freigestellt bist. Dein Regelstundenlohn ergibt sich als Wochengehalt ÷ 40 — gib ihn mit deinen Überstunden ein, und der Multiplikator greift von dort. Wirklich freigestellte Beschäftigte erhalten unabhängig von den Stunden keine Überstunden.' },
    ],
    ui: {
      'chartTitle': 'Wochenlohn-Aufschlüsselung',
      'slice.regularPay': 'Regelvergütung',
      'slice.otPay': 'Überstundenvergütung',
      'chartCenter': 'Wochensumme',
      'in.base': 'Stundenlohn',
      'in.otHours': 'Überstunden/Woche',
      'in.otMultiplier': 'Überstunden-Faktor',
      'in.otPay': 'Überstundenvergütung',
      'in.otRate': 'Effektiver Überstundenlohn',
      'in.regularHours': 'Regelstunden/Woche',
      'in.regularPay': 'Regelvergütung',
      'in.totalWeekly': 'Wochenlohn gesamt',
      'note': '💼 US-Bundesrecht (FLSA) verlangt ×1,5 über 40 h/Woche für nicht freigestellte Beschäftigte; manche Bundesstaaten verlangen tägliche Überstunden, Feiertags-Doppellohn kommt typischerweise aus Tarifverträgen oder Firmenrichtlinien. Nicht freigestellte Festangestellte: Regelstundenlohn = Wochengehalt ÷ 40.',
      'opt.otMultiplier.1.5': 'Anderthalbfacher Lohn (×1,5)',
      'opt.otMultiplier.2': 'Doppelter Lohn (×2)',
      'out.base': 'Stundenlohn',
      'out.otHours': 'Überstunden/Woche',
      'out.otMultiplier': 'Überstunden-Faktor',
      'out.otPay': 'Überstundenvergütung',
      'out.otRate': 'Effektiver Überstundenlohn',
      'out.regularHours': 'Regelstunden/Woche',
      'out.regularPay': 'Regelvergütung',
      'out.totalWeekly': 'Wochenlohn gesamt',
          'errInvalidRate': "Gib einen gültigen Stundenlohn ein",
      'errNonNegative': "Die Stunden dürfen nicht negativ sein",
},
  },
}
