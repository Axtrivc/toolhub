/**
 * pregnancy-due-date-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PregnancyDueDateCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const pregnancyDueDateCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Due date = LMP + 280 days',
      explain: '内格莱法则:末次月经首日加 280 天(40 周)。实际分娩可能前后差约两周;这是估算,不是保证。',
    },
    ui: {
      weekN: '第 {n} 周', notPregnant: '未怀孕 / 已过预产期',
      'in.lmp': '末次月经首日(YYYY-MM-DD)',
      'out.due': '预计预产期',
      'out.conceived': '可能受孕日',
      'out.weeks': '当前孕周',
      'outSub.weeks': '以今天为准',
      note: '🤰 Naegele 法则:预产期 = 末次月经 + 280 天。仅为估算——只有约 5% 的宝宝在预产期当天出生。',
    },
    useCases: [
      '根据末次月经推算预产期',
      '估算受孕日期与当前孕周',
      '了解三个孕期的划分',
      '为产检和待产做时间规划',
    ],
    faqs: [
      { q: '月经周期不规律怎么办?', a: 'Naegele 法则假设周期为 28 天、第 14 天排卵。如果你的周期更长或更短,早期(12 周前)的 B 超能给出更准确的预产期。' },
      { q: '孕周从哪天开始算?', a: '从末次月经首日算起,不是从受孕日——受孕大约发生在第 14 天。预产期 40 周 = 280 天;当前孕周 = 今天距末次月经的天数 ÷ 7,本工具已自动算好。' },
      { q: '三个孕期怎么划分?', a: '第一孕期 1–13 周(器官形成期,对致畸物最敏感);第二孕期 14–27 周(大排畸约 20–24 周,糖筛 24–28 周);第三孕期 28–40 周(孕晚期每两周产检一次,37 周后即算足月)。' },
      { q: '试管婴儿(IVF)怎么算预产期?', a: '移植日期比末次月经更准:第 3 天卵裂期胚胎用移植日 + 263 天,第 5 天囊胚 + 261 天。若按 Naegele 反推,LMP ≈ 移植日 − 17 天(囊胚 − 19 天)。' },
    ],
  },
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
