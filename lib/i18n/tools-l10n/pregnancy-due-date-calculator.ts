/**
 * pregnancy-due-date-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PregnancyDueDateCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const pregnancyDueDateCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '根据末次月经推算预产期',
      '估算受孕日期与当前孕周',
      '了解三个孕期的划分',
      '为产检和待产做时间规划',
    ],
    faqs: [
      { q: '月经周期不规律怎么办?', a: 'Naegele 法则假设周期为 28 天、第 14 天排卵。如果你的周期更长或更短,早期(12 周前)的 B 超能给出更准确的预产期。' },
    ],
  },
  es: {
    useCases: [
      'calcular la fecha probable de parto desde la última menstruación',
      'estimar la fecha de concepción y la semana actual',
      'conocer la división en tres trimestres',
      'planificar las citas prenatales y la preparación del parto',
    ],
    faqs: [
      { q: '¿Qué pasa si mis ciclos son irregulares?', a: 'La regla de Naegele asume un ciclo de 28 días con ovulación en el día 14. Si tus ciclos son más largos o cortos, una ecografía temprana (antes de las 12 semanas) ofrece una fecha probable más precisa.' },
    ],
  },
  de: {
    useCases: [
      'den errechneten Geburtstermin anhand der letzten Periode bestimmen',
      'den Empfängniszeitpunkt und die aktuelle Schwangerschaftswoche schätzen',
      'die Einteilung in drei Trimester kennenlernen',
      'Termine für Vorsorge und Geburtsvorbereitung planen',
    ],
    faqs: [
      { q: 'Was, wenn meine Zyklen unregelmäßig sind?', a: 'Die Naegele-Regel geht von einem 28-Tage-Zyklus mit Eisprung am 14. Tag aus. Sind deine Zyklen länger oder kürzer, liefert eine frühe Ultraschalluntersuchung (vor der 12. Woche) einen genaueren Geburtstermin.' },
    ],
  },
}
