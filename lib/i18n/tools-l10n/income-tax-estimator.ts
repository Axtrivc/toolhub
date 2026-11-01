/**
 * income-tax-estimator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const incomeTaxEstimatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Tax = Σ ( income in bracket × bracket rate )',
      explain: 'Impuesto progresivo (por tramos): cada porción de la renta tributa a su propio tipo y se suma. Tu tipo marginal es el del tramo superior que alcanzas; el tipo efectivo es impuesto ÷ renta.',
    },
    useCases: ['estimar el impuesto sobre la renta con los tramos federales de EE. UU. 2026', 'calcular el sueldo neto (tipo efectivo y marginal)', 'comparar el impuesto entre declaración única y conjunta', 'ver en qué tramo impositivo estás'],
    faqs: [
      { q: '¿Por qué mi nómina muestra más impuesto retenido?', a: 'Los empleadores retienen según tu impuesto anual previsto más un margen de seguridad. Las retenciones son estimaciones; tu impuesto real se ajusta al declarar. Si pagaste de más, recibes un reembolso.' },
    ],
    ui: {
      errNonNegative: 'Los ingresos no pueden ser negativos',
      'in.income': 'Ingresos anuales', 'in.filing': 'Estado civil',
      'opt.filing.single': 'Soltero', 'opt.filing.hoh': 'Cabeza de familia', 'opt.filing.married': 'Casado, declaración conjunta',
      'out.tax': 'Impuesto federal estimado', 'out.effective': 'Tipo efectivo', 'out.fica': 'FICA estimado', 'outSub.fica': 'Seguridad Social + Medicare', 'out.takehome': 'Sueldo neto estimado', 'outSub.takehome': 'Tras impuesto federal + FICA',
      note: '📊 Tramos federales EE. UU. 2026 con deducción estándar aplicada ($16,100 individual / $24,150 cabeza de familia / $32,200 conjunta). FICA estimado al 7,65 % hasta la base salarial de la Seguridad Social de $184,500 (1,45 % de Medicare por encima; se ignora el recargo del 0,9 % sobre $200k). Sin impuesto estatal ni créditos. Solo estimación.',
      chartTitle: 'A dónde va tu ingreso', chartCenter: 'Ingreso', 'slice.tax': 'Impuesto federal', 'slice.fica': 'FICA (Seguridad Social + Medicare)', 'slice.takehome': 'Sueldo neto',
    },
  },
  de: {
    formula: {
      formula: 'Tax = Σ ( income in bracket × bracket rate )',
      explain: 'Progressive (gestaffelte) Steuer: jeder Einkommensanteil wird mit dem Satz seiner Stufe versteuert; die Teile werden addiert. Dein Grenzsteuersatz ist der Satz der höchsten erreichten Stufe; der effektive Steuersatz ist Steuer ÷ Einkommen.',
    },
    useCases: ['die Einkommensteuer mit den US-Bundessteuerklassen 2026 schätzen', 'das Nettoeinkommen berechnen (effektiver + Grenzsteuersatz)', 'die Steuer zwischen Alleinveranlagung und Zusammenveranlagung vergleichen', 'sehen, in welcher Steuerklasse du bist'],
    faqs: [
      { q: 'Warum zeigt meine Lohnabrechnung mehr einbehaltene Steuer?', a: 'Arbeitgeber behalten auf Basis deiner voraussichtlichen Jahressteuer plus einer Sicherheitsmarge ein. Die Einbehalte sind Schätzungen; deine tatsächliche Steuer wird bei der Steuererklärung verrechnet. Wer zu viel gezahlt hat, erhält eine Rückerstattung.' },
    ],
    ui: {
      errNonNegative: 'Das Einkommen darf nicht negativ sein',
      'in.income': 'Jahreseinkommen', 'in.filing': 'Familienstand',
      'opt.filing.single': 'Ledig', 'opt.filing.hoh': 'Haushaltsvorstand', 'opt.filing.married': 'Verheiratet, Zusammenveranlagung',
      'out.tax': 'Geschätzte Bundessteuer', 'out.effective': 'Effektivsteuersatz', 'out.fica': 'Geschätzte FICA', 'outSub.fica': 'Social Security + Medicare', 'out.takehome': 'Geschätztes Netto', 'outSub.takehome': 'Nach Bundessteuer + FICA',
      note: '📊 US-Bundessteuerklassen 2026 mit Standardabzug ($16,100 Single / $24,150 Haushaltsvorstand / $32,200 zusammen). FICA geschätzt mit 7,65 % bis zur Social-Security-Bemessungsgrenze von $184,500 (darüber 1,45 % Medicare; der 0,9 %-Zuschlag über $200k wird ignoriert). Ohne Bundesstaatensteuer und Freibeträge. Nur Schätzung.',
      chartTitle: 'Wohin dein Einkommen geht', chartCenter: 'Einkommen', 'slice.tax': 'Bundessteuer', 'slice.fica': 'FICA (Social Security + Medicare)', 'slice.takehome': 'Nettoeinkommen',
    },
  },
}
