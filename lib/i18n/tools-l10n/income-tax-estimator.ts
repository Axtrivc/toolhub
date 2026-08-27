/**
 * income-tax-estimator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const incomeTaxEstimatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Tax = Σ ( income in bracket × bracket rate )',
      explain: '累进(分档)税:收入的每一部分按其所在档次的税率计算后相加。你的边际税率是触及的最高档;有效税率是税额 ÷ 收入。',
    },
    useCases: ['用 2026 美国联邦税率档估算所得税', '算到手工资(effective + marginal rate)', '比较单身 vs 已婚联合申报的税额', '看自己处于哪个税率档'],
    faqs: [
      { q: '为什么工资条上预扣的税更多?', a: '雇主按你预计的年度税款加上一个安全余量来预扣。预扣是估算;你的实际税款在报税时结算。多预了就会退税。' },
    ],
    ui: {
      'in.income': '年收入', 'in.filing': '申报身份',
      'opt.filing.single': '单身', 'opt.filing.hoh': '户主', 'opt.filing.married': '已婚,联合申报',
      'out.tax': '预估联邦税', 'out.effective': '实际税率', 'out.fica': '预估 FICA', 'outSub.fica': '社保 + 医保', 'out.takehome': '预估到手收入', 'outSub.takehome': '扣除联邦税 + FICA 后',
      note: '📊 美国 2026 联邦税率档,已扣标准扣除额(单身 $16,100 / 户主 $24,150 / 已婚联合 $32,200)。FICA 按社保工资基数上限 $184,500 以内 7.65%、超出部分仅医保 1.45% 估算(忽略超 $200k 的 0.9% 附加税)。未含州税和抵免。仅供参考。',
      chartTitle: '你的收入去了哪里', chartCenter: '收入', 'slice.tax': '联邦税', 'slice.fica': 'FICA(社保+医保)', 'slice.takehome': '到手收入',
    },
  },
  es: {
    formula: {
      formula: 'Tax = Σ ( income in bracket × bracket rate )',
      explain: 'Impuesto progresivo (por tramos): cada porción de la renta tributa a su propio tipo y se suma. Tu tipo marginal es el tramo superior que tocas; el efectivo es impuesto ÷ renta.',
    },
    useCases: ['estimar el impuesto sobre la renta con los tramos federales de EE. UU. 2026', 'calcular la renta neta (tipo efectivo y marginal)', 'comparar el impuesto entre declaración única y conjunta', 'ver en qué tramo impositivo estás'],
    faqs: [
      { q: '¿Por qué mi nómina muestra más impuesto retenido?', a: 'Los empleadores retienen según tu impuesto anual previsto más un margen de seguridad. Las retenciones son estimaciones; tu impuesto real se ajusta al declarar. Si pagaste de más, recibes un reembolso.' },
    ],
    ui: {
      'in.income': 'Ingresos anuales', 'in.filing': 'Estado civil',
      'opt.filing.single': 'Soltero', 'opt.filing.hoh': 'Cabeza de familia', 'opt.filing.married': 'Casado, declaración conjunta',
      'out.tax': 'Impuesto federal estimado', 'out.effective': 'Tipo efectivo', 'out.fica': 'FICA estimado', 'outSub.fica': 'Seguridad Social + Medicare', 'out.takehome': 'Renta neta estimada', 'outSub.takehome': 'Tras impuesto federal + FICA',
      note: '📊 Tramos federales EE. UU. 2026 con deducción estándar aplicada ($16,100 individual / $24,150 cabeza de familia / $32,200 conjunta). FICA estimado al 7,65 % hasta la base salarial de la Seguridad Social de $184,500 (1,45 % de Medicare por encima; se ignora el recargo del 0,9 % sobre $200k). Sin impuesto estatal ni créditos. Solo estimación.',
      chartTitle: 'A dónde va tu ingreso', chartCenter: 'Ingreso', 'slice.tax': 'Impuesto federal', 'slice.fica': 'FICA (Seguridad Social + Medicare)', 'slice.takehome': 'Renta neta',
    },
  },
  de: {
    formula: {
      formula: 'Tax = Σ ( income in bracket × bracket rate )',
      explain: 'Progressive (Staffel-)Steuer: jeder Einkommensanteil wird mit seinem eigenen Grenzsatz versteuert und summiert. Dein Grenzsatz ist die höchste erreichte Stufe; der effektive Satz ist Steuer ÷ Einkommen.',
    },
    useCases: ['die Einkommensteuer mit den US-Bundestranchen 2026 schätzen', 'das Nettoeinkommen berechnen (effektiver + Grenzsteuersatz)', 'die Steuer zwischen Alleinveranlagung und Zusammenveranlagung vergleichen', 'sehen, in welcher Steuertranche du bist'],
    faqs: [
      { q: 'Warum zeigt meine Lohnabrechnung mehr einbehaltene Steuer?', a: 'Arbeitgeber behalten nach deiner voraussichtlichen Jahressteuer plus einer Sicherheitsmarge ein. Die Einbehalte sind Schätzungen; deine tatsächliche Steuer wird bei der Steuererklärung verrechnet. Zu viel gezahlt führt zu einer Rückerstattung.' },
    ],
    ui: {
      'in.income': 'Jahreseinkommen', 'in.filing': 'Steuerklasse',
      'opt.filing.single': 'Allein', 'opt.filing.hoh': 'Haushaltsvorstand', 'opt.filing.married': 'Verheiratet, gemeinsam',
      'out.tax': 'Geschätzte Bundessteuer', 'out.effective': 'Effektivsteuersatz', 'out.fica': 'Geschätzte FICA', 'outSub.fica': 'Social Security + Medicare', 'out.takehome': 'Geschätztes Netto', 'outSub.takehome': 'Nach Bundessteuer + FICA',
      note: '📊 US-Bundestranchen 2026 mit Standardabzug ($16,100 Single / $24,150 Haushaltsvorstand / $32,200 zusammen). FICA geschätzt mit 7,65 % bis zur Social-Security-Bemessungsgrenze von $184,500 (darüber 1,45 % Medicare; der 0,9 %-Zuschlag über $200k wird ignoriert). Ohne Bundesstaatensteuer und Freibeträge. Nur Schätzung.',
      chartTitle: 'Wohin dein Einkommen geht', chartCenter: 'Einkommen', 'slice.tax': 'Bundessteuer', 'slice.fica': 'FICA (Social Security + Medicare)', 'slice.takehome': 'Nettoeinkommen',
    },
  },
}
