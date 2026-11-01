/**
 * student-loan-payment-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const StudentLoanCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['comparar mensualidad e intereses totales: 10 años estándar vs 25 extendido', 'ver cuán baja arranca la cuota del plan escalonado', 'calcular el interés capitalizado durante el grace period', 'decidir cuánto ahorra pagar de más cada mes'],
    faqs: [
      { q: '¿Cómo se calculan las tres cuotas?', a: 'El plan estándar amortiza a 10 años (120 cuotas) con cuota fija; el extendido, a 25 años (300 cuotas), con cuota menor pero muchos más intereses; el escalonado dura también 10 años, arranca bajo y sube cada dos años — la herramienta resuelve la cuota inicial exacta con incrementos del 25% bianual.' },
      { q: '¿En qué consiste la trampa de la capitalización?', a: 'Los préstamos federales tienen 6 meses de carencia tras graduarse: en los subsidiados el gobierno paga el interés; en los no subsidiados se acumula y se suma al capital al empezar a pagar — después pagas intereses sobre ese capital extra durante 10-25 años.' },
      { q: '¿Cuánto cuesta de más extender a 25 años?', a: 'Con 35 000 $ al 6,8% y 6 meses de carencia: la cuota estándar a 10 años ronda los 417 $ con unos 13 800 $ de intereses; a 25 años baja a unos 251 $ pero los intereses suben a unos 39 200 $ — unos 25 000 $ extra es el precio de la comodidad.' },
      { q: '¿Sirve para préstamos privados?', a: 'La matemática sirve — cualquier préstamo a cuota fija se calcula igual. Pero los privados no ofrecen los planes escalonado/extendido federales y a menudo devengan interés ya durante los estudios; manda tu contrato.' },
    ],
    ui: {
      'chartTitle': 'Saldo pendiente de los tres planes',
      'preset.0': 'Stafford no subsidiado',
      'preset.1': 'Deuda de posgrado',
      'preset.2': 'Refinanciado, sin carencia',
      'line.std': 'Estándar 10 años',
      'line.grad': 'Escalonado 10 años',
      'line.ext': 'Extendido 25 años',
      'in.balance': 'Capital del préstamo',
      'in.rate': 'Tasa anual',
      'in.deferred': 'Meses de carencia',
      'out.capitalized': 'Interés capitalizado en la carencia',
      'out.stdPay': 'Cuota estándar 10 años',
      'out.gradStart': 'Cuota inicial escalonada',
      'out.extPay': 'Cuota extendida 25 años',
      'out.totalInt10': 'Intereses en la amortización, 10 años',
      'out.totalInt25': 'Intereses en la amortización, 25 años',
      'outSub.totalInt10': 'Excluye el interés capitalizado de la carencia',
      'outSub.totalInt25': 'Excluye el interés capitalizado de la carencia',
      'outSub.stdPay': '120 cuotas fijas',
      'outSub.gradStart': '+25% cada 2 años',
      'note': '🎓 El escalonado encaja en carreras que arrancan con sueldo bajo y crecen rápido: cuota baja al principio, escalones empinados después y más intereses totales que el estándar. Durante la carencia, paga el interés que puedas — cada dólar capitalizado te acompaña años.',
      'errInvalid': 'Introduce un capital positivo, una tasa no negativa y 0-24 meses de carencia',
    },
  },
  de: {
    useCases: ['Rate und Zinsen vergleichen: 10 Jahre Standard vs 25 verlängert', 'sehen, wie niedrig die Startquote der gestuften Rate ist', 'die während der Karenzzeit kapitalisierten Zinsen berechnen', 'entscheiden, wie viel Mehrrate spart'],
    faqs: [
      { q: 'Wie entstehen die drei Raten?', a: 'Der Standardplan tilgt über 10 Jahre (120 Raten) mit fester Quote; der verlängerte über 25 Jahre (300 Raten) mit niedrigerer Quote, aber deutlich mehr Zinsen; der gestufte läuft ebenfalls 10 Jahre, startet niedrig und steigt alle zwei Jahre — der Rechner löst die exakte Startquote bei +25% je Stufe.' },
      { q: 'Worin besteht die Kapitalisierungsfalle?', a: 'Bundeskredite haben nach dem Abschluss 6 Monate Karenz: Bei subventionierten zahlt der Staat die Zinsen, bei nicht subventionierten laufen sie weiter und werden beim Tilgungsstart dem Kapital zugeschlagen — danach zahlst du auf dieses Mehrkapital 10-25 Jahre lang Zinsen.' },
      { q: 'Was kostet die Verlängerung auf 25 Jahre?', a: 'Bei 35.000 $, 6,8% und 6 Monaten Karenz: Die Standardrate liegt um 417 $ mit rund 13.800 $ Zinsen; auf 25 Jahre sinkt sie auf etwa 251 $, aber die Zinsen steigen auf rund 39.200 $ — etwa 25.000 $ Aufpreis für die bequeme Rate.' },
      { q: 'Gilt das auch für private Studienkredite?', a: 'Die Mathematik ja — jeder Kredit mit fester Rate rechnet gleich. Private Kredite kennen aber keine bundesweisen gestuften/verlängerten Pläne und verzinsen oft schon während des Studiums; maßgeblich ist dein Vertrag.' },
    ],
    ui: {
      'chartTitle': 'Restschuld der drei Pläne',
      'preset.0': 'Unsubsidized Stafford',
      'preset.1': 'Master-Schulden',
      'preset.2': 'Refinanziert, ohne Karenz',
      'line.std': 'Standard 10 Jahre',
      'line.grad': 'Gestuft 10 Jahre',
      'line.ext': 'Verlängert 25 Jahre',
      'in.balance': 'Kreditbetrag',
      'in.rate': 'Jahreszins',
      'in.deferred': 'Karenzmonate',
      'out.capitalized': 'Kapitalisierte Zinsen',
      'out.stdPay': 'Standardrate 10 Jahre',
      'out.gradStart': 'Startquote gestuft',
      'out.extPay': 'Rate verlängert 25 Jahre',
      'out.totalInt10': 'Zinsen in der Tilgung, 10 Jahre',
      'out.totalInt25': 'Zinsen in der Tilgung, 25 Jahre',
      'outSub.totalInt10': 'Ohne kapitalisierte Karenzzinsen',
      'outSub.totalInt25': 'Ohne kapitalisierte Karenzzinsen',
      'outSub.stdPay': '120 feste Raten',
      'outSub.gradStart': '+25% alle 2 Jahre',
      'note': '🎓 Der gestufte Plan passt zu Berufen mit niedrigem Start- und steigendem Gehalt: erst niedrige Rate, später steile Stufen und mehr Gesamtzinsen als im Standard. In der Karenz Zinsen zahlen, wo möglich — jeder kapitalisierte Dollar begleitet dich jahrelang.',
      'errInvalid': 'Gib einen positiven Kreditbetrag, einen nicht-negativen Zins und 0-24 Karenzmonate ein',
    },
  },
}
