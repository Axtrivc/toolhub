/**
 * pregnancy-due-date-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PregnancyDueDateCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const pregnancyDueDateCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Due date = LMP + 280 days',
      explain: 'Regla de Naegele: suma 280 días (40 semanas) al primer día de la última menstruación. El parto real varía unas dos semanas; es una estimación, no una garantía.',
    },
    ui: {
      weekN: 'Semana {n}', notPregnant: 'No embarazada / parto ya vencido',
      'in.lmp': 'Primer día de la última menstruación (AAAA-MM-DD)',
      'out.due': 'Fecha probable de parto',
      'out.conceived': 'Fecha probable de concepción',
      'out.weeks': 'Semana actual',
      'outSub.weeks': 'Asumiendo hoy',
      note: '🤰 Regla de Naegele: fecha probable = FUM + 280 días. Solo es una estimación — solo el 5 % de los bebés nacen en su fecha.',
    },
    useCases: [
      'calcular la fecha probable de parto desde la última menstruación',
      'estimar la fecha de concepción y la semana actual',
      'conocer la división en tres trimestres',
      'planificar las citas prenatales y la preparación del parto',
    ],
    faqs: [
      { q: '¿Qué pasa si mis ciclos son irregulares?', a: 'La regla de Naegele asume un ciclo de 28 días con ovulación en el día 14. Si tus ciclos son más largos o cortos, una ecografía temprana (antes de las 12 semanas) ofrece una fecha probable más precisa.' },
      { q: '¿Desde qué día se cuentan las semanas de gestación?', a: 'Desde el primer día de la última menstruación, no desde la concepción (que ocurre unas 2 semanas después). 40 semanas = 280 días; la semana actual es los días transcurridos ÷ 7, y la herramienta ya lo calcula.' },
      { q: '¿Cómo se dividen los trimestres?', a: 'Primero: semanas 1–13 (organogénesis, la fase más sensible). Segundo: 14–27 (ecografía morfológica hacia las 20 semanas, test de tolerancia a la glucosa entre las 24–28). Tercero: 28–40; a partir de la semana 37 el parto se considera a término.' },
      { q: '¿Y si fue una FIV?', a: 'La fecha de transferencia es más precisa que la FUM: embriones de día 3, +263 días; blastocistos de día 5, +261 días. En términos de Naegele: FUM ≈ transferencia − 17 días (blastocisto − 19).' },
    ],
  },
  de: {
    formula: {
      formula: 'Due date = LMP + 280 days',
      explain: 'Naegele-Regel: 280 Tage (40 Wochen) zum ersten Tag der letzten Periode addieren. Der eigentliche Geburtstermin schwankt um etwa zwei Wochen — es ist eine Schätzung, keine Garantie.',
    },
    ui: {
      weekN: 'Woche {n}', notPregnant: 'Nicht schwanger / Termin überschritten',
      'in.lmp': 'Erster Tag der letzten Periode (JJJJ-MM-TT)',
      'out.due': 'Berechneter Geburtstermin',
      'out.conceived': 'Wahrscheinlicher Empfängniszeitpunkt',
      'out.weeks': 'Aktuelle Woche',
      'outSub.weeks': 'Geht von heute aus',
      note: '🤰 Naegele-Regel: Geburtstermin = LMP + 280 Tage. Nur eine Schätzung — nur 5 % der Babys kommen am errechneten Termin.',
    },
    useCases: [
      'den errechneten Geburtstermin anhand der letzten Periode bestimmen',
      'den Empfängniszeitpunkt und die aktuelle Schwangerschaftswoche schätzen',
      'die Einteilung in drei Trimester kennenlernen',
      'Termine für Vorsorge und Geburtsvorbereitung planen',
    ],
    faqs: [
      { q: 'Was, wenn meine Zyklen unregelmäßig sind?', a: 'Die Naegele-Regel geht von einem 28-Tage-Zyklus mit Eisprung am 14. Tag aus. Sind deine Zyklen länger oder kürzer, liefert eine frühe Ultraschalluntersuchung (vor der 12. Woche) einen genaueren Geburtstermin.' },
      { q: 'Ab welchem Tag zählen Schwangerschaftswochen?', a: 'Ab dem ersten Tag der letzten Periode, nicht ab der Befruchtung (die etwa 2 Wochen später liegt). 40 Wochen = 280 Tage; die aktuelle Woche ist vergangene Tage ÷ 7 — das Tool rechnet das automatisch.' },
      { q: 'Wie sind die drei Trimester aufgeteilt?', a: 'Erstes: Woche 1–13 (Organogenese, die empfindlichste Phase). Zweites: 14–27 (Feindiagnostik um die 20. Woche, Zuckerbelastungstest 24–28). Drittes: 28–40; ab Woche 37 gilt die Geburt als termingerecht.' },
      { q: 'Und bei künstlicher Befruchtung (IVF)?', a: 'Der Transfertag ist genauer als die letzte Periode: Tag-3-Embryonen + 263 Tage, Blastozysten (Tag 5) + 261 Tage. Umgerechnet auf Naegele: LMP ≈ Transfer − 17 Tage (Blastozyste − 19).' },
    ],
  },
}
