/**
 * cash-back-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases + formula
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'Cash back = Σ ( spendᵢ × rateᵢ ) − annual fee'

export const cashBackCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular si una tarjeta con anualidad compensa', 'calcular el valor real de las recompensas', 'encontrar la mejor tarjeta por gasto', 'comparar reembolso frente a puntos'],
    faqs: [
      { q: '¿Puntos o reembolso en efectivo?', a: 'El reembolso es más sencillo y de valor garantizado. Los puntos pueden valer más si se canjean por viajes (especialmente negocios/primera clase), pero requieren más esfuerzo y su valor varía.' },
      { q: '¿Cuándo compensa una tarjeta con anualidad?', a: 'Cuando tus recompensas anuales superan la cuota. Divide la anualidad entre la tasa de reembolso para hallar el gasto de equilibrio — una cuota de 95 $ en una tarjeta con 3 % en restaurantes se equilibra con unos 3 167 $ de gasto anual en restaurantes. Por debajo de eso, la tarjeta sin cuota es mejor.' },
      { q: '¿Caducan las recompensas de reembolso?', a: 'Normalmente no mientras la cuenta permanezca abierta y al corriente, pero los emisores pueden incautarlas al cierre o tras una inactividad prolongada. Los programas de puntos pueden devaluarse con el tiempo, mientras que el reembolso acreditado en el estado de cuenta mantiene un valor fijo en dólares.' },
      { q: '¿Hay que declarar el cashback?', a: 'El reembolso ligado a tu gasto cuenta como descuento del precio, no como ingreso, así que en España no tributa en el IRPF. Las primas de bienvenida sin consumo asociado son otra historia: en EE. UU. el banco puede emitir un 1099 a partir de 600 $ al año.' },
    ],
    formula: { formula: FORMULA, explain: 'Multiplica el gasto de cada categoría por su tasa de recompensa, suma todas las categorías y resta la cuota anual de la tarjeta. Las tasas bonus solo se aplican hasta sus límites trimestrales o anuales.' },
    ui: {
      'chartTitle': 'Recompensas vs cuota anual',
      'cmp.0': 'Reembolso al año',
      'cmp.1': 'Cuota anual',
      'cmpseg.0': 'Recompensas',
      'cmpseg.1': 'Cuota',
      'in.spend': 'Gasto mensual', 'in.rate': 'Tasa de reembolso', 'in.fee': 'Cuota anual',
      'out.monthly': 'Reembolso mensual', 'out.annual': 'Reembolso anual (antes de cuota)', 'out.net': 'Valor neto (después de cuota)',
      errNonNegative: 'Los valores no pueden ser negativos',
      note: '💳 Compara tarjetas de recompensa con honestidad. Una cuota de 95 $ solo compensa si ganas más de 95 $ extra en recompensas.',
    },
  },
  de: {
    useCases: ['berechnen, ob eine Karte mit Jahresgebühr lohnt', 'den wahren Wert von Prämien berechnen', 'die beste Cashback-Karte nach Ausgaben finden', 'Cashback mit Punkten vergleichen'],
    faqs: [
      { q: 'Punkte oder Cashback?', a: 'Cashback ist einfacher und garantiert wertbeständig. Punkte können beim Einlösen für Reisen (besonders Business/First Class) mehr wert sein, erfordern aber mehr Aufwand und schwanken im Wert.' },
      { q: 'Wann lohnt sich eine Karte mit Jahresgebühr?', a: 'Wenn deine jährlichen Prämien die Gebühr übersteigen. Teile die Jahresgebühr durch die Bonusrate, um die Break-even-Ausgaben zu finden — eine 95 $-Gebühr bei 3 % Restaurant-Cashback rechnet sich bei etwa 3 167 $ Restaurantausgaben pro Jahr. Darunter ist die gebührenfreie Karte besser.' },
      { q: 'Verfallen Cashback-Prämien?', a: 'In der Regel nicht, solange das Konto offen und in gutem Stand ist, aber Aussteller können Prämien bei Schließung oder langer Inaktivität einbehalten. Punkteprogramme können mit der Zeit abgewertet werden, während Cashback als Gutschrift einen festen Dollarwert behält.' },
      { q: 'Warum ist Cashback in Deutschland niedriger als in den USA?', a: 'Weil der EU-Interchange-Deckel Kartenunternehmen nur 0,3 % (Kredit) bzw. 0,2 % (Debit) lässt — üblich sind hier 0,5-1 % oder Punkte statt 2-5 %. Die Break-even-Rechnung gegen die Jahresgebühr funktioniert trotzdem genauso.' },
    ],
    formula: { formula: FORMULA, explain: 'Multipliziere die Ausgaben jeder Kategorie mit ihrer Bonusrate, summiere über alle Kategorien und ziehe die Jahresgebühr der Karte ab. Bonusraten gelten nur bis zu ihren quartals- oder jahresweisen Obergrenzen.' },
    ui: {
      'chartTitle': 'Cashback vs. Jahresgebühr',
      'cmp.0': 'Cashback pro Jahr',
      'cmp.1': 'Jahresgebühr',
      'cmpseg.0': 'Cashback',
      'cmpseg.1': 'Gebühr',
      'in.spend': 'Monatliche Ausgaben', 'in.rate': 'Cashback-Rate', 'in.fee': 'Jahresgebühr',
      'out.monthly': 'Monatliches Cashback', 'out.annual': 'Jährliches Cashback (vor Gebühr)', 'out.net': 'Nettowert (nach Gebühr)',
      errNonNegative: 'Werte dürfen nicht negativ sein',
      note: '💳 Vergleiche Prämienkarten ehrlich. Eine 95 $-Gebühr lohnt sich nur, wenn du mehr als 95 $ extra an Prämien verdienst.',
    },
  },
}
