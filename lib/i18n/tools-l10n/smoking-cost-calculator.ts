/**
 * smoking-cost-calculator 本地化 bundle —— zh / es / de(batch23 / B3)
 */
import type { ToolL10n } from '../tool-l10n'

export const SmokingCostCalculatorL10n: ToolL10n = {

  es: {
    useCases: [
      'convertir los cigarrillos diarios en gasto semanal, anual y a diez años',
      'ver cuánto valdría ese dinero invertido a un interés anual',
      'comparar el gasto anual según el precio de tu estado',
      'poner precio al hábito antes de decidir dejarlo',
    ],
    faqs: [
      { q: '¿Cómo se calcula el valor invertido?', a: 'El gasto anual se invierte una vez al año y se capitaliza a tu rentabilidad elegida durante diez años: aportación anual × ((1+r)^10 − 1) ÷ r. Con un paquete diario a 12 $ y un 7%, son unos 60.500 $ — suponiendo que el precio nunca suba, algo que los impuestos hacen improbable.' },
      { q: '¿Y si el precio sigue subiendo?', a: 'Los impuestos al tabaco casi solo suben: un paquete cuesta 12-15 $ en Nueva York y 6-7 $ en Misuri, y los impuestos superan a menudo la mitad del precio. Meter el precio de hoy ya subestima el futuro: el coste real a diez años será mayor.' },
      { q: 'Fumo menos de un paquete, ¿cómo lo introduzco?', a: 'Escribe los cigarrillos por día (paquete = 20): medio paquete es 10, y unas pocas unidades también valen. El precio es el de una cajetilla de 20 en tu zona.' },
      { q: '¿Cuándo «se paga» dejar de fumar?', a: 'El flujo de caja mejora desde el primer día sin tabaco; la curva de inversión necesita unos años de interés compuesto para abrir hueco. Los recargos de seguro (hasta un 50% en los planes del marketplace) y la salud quedan fuera de este cálculo y pesan más.' },
    ],
    ui: {
      'in.perDay': 'Cigarrillos por día',
      'in.packPrice': 'Precio por cajetilla (20)',
      'in.returnRate': 'Rentabilidad anual',
      'inSuffix.perDay': 'cig.',
      'inSuffix.packPrice': '$',
      'inSuffix.returnRate': '%/año',
      'out.weekly': 'Coste semanal',
      'out.yearly': 'Coste anual',
      'out.tenYear': 'Coste a 10 años',
      'out.invested10': 'Lo mismo invertido (10 años)',
      'preset.0': 'Un paquete al día, 12 $',
      'preset.1': 'Medio paquete, 15 $',
      'preset.2': 'Ligero, 5 al día',
      'errInvalid': 'Ni los cigarrillos ni el precio pueden ser negativos; el precio debe ser mayor que 0',
      'chartTitle': 'Dinero quemado vs invertido (10 años)',
      'line.smoked': 'Tabaco acumulado',
      'line.invested': 'Mismo dinero invertido',
      'note': '🚬 Un paquete al día a 12 $ son unos 4.380 $ al año — el precio de un buen coche a plazos o de la mayor parte de un Roth IRA completo. La línea de inversión supone que el dinero anual entra de una vez a la rentabilidad elegida; dejar de fumar además devuelve horas, pulmones y recargos de seguro que esta herramienta no puede tasar.',
    },
  },
  de: {
    useCases: [
      'Zigaretten pro Tag in Wochen-, Jahres- und Zehnjahresausgaben umrechnen',
      'sehen, was dasselbe Geld angelegt in zehn Jahren wert wäre',
      'Jahresausgaben je nach Preis im eigenen Bundesland vergleichen',
      'dem Habit einen Preis geben, bevor man aufhört',
    ],
    faqs: [
      { q: 'Wie wird der Investitionswert berechnet?', a: 'Das Jahresgeld fließt einmal jährlich ein und verzinst sich zehn Jahre mit der gewählten Rendite: Jahresbetrag × ((1+r)^10 − 1) ÷ r. Bei einer Schachtel täglich zu 12 $ und 7 % sind das rund 60.500 $ — und das ohne jede Preiserhöhung, die Tabaksteuern unwahrscheinlich macht.' },
      { q: 'Was, wenn die Preise weiter steigen?', a: 'Tabaksteuern gehen fast nur nach oben: Eine Schachtel kostet in New York 12-15 $, in Missouri 6-7 $; Steuern machen oft mehr als die Hälfte aus. Der heutige Preis unterschätzt die Zukunft bereits — die echten Zehnjahreskosten liegen höher.' },
      { q: 'Ich rauche weniger als eine Schachtel — was trage ich ein?', a: 'Einfach die Zigaretten pro Tag (Schachtel = 20): eine halbe Schachtel ist 10, auch Einzelne zählen. Als Preis der lokale Kioskpreis für 20er-Packungen.' },
      { q: 'Wann „rechnet sich" das Aufhören?', a: 'Der Cashflow verbessert sich ab dem ersten rauchfreien Tag; die Investitionskurve braucht ein paar Jahre Zinseszins, um sich abzuheben. Versicherungszuschläge (bis 50 % bei Marketplace-Plänen) und Gesundheit wiegen schwerer und sind hier nicht eingerechnet.' },
    ],
    ui: {
      'in.perDay': 'Zigaretten pro Tag',
      'in.packPrice': 'Preis pro Schachtel (20)',
      'in.returnRate': 'Jahresrendite',
      'inSuffix.perDay': 'Zig.',
      'inSuffix.packPrice': '$',
      'inSuffix.returnRate': '%/Jahr',
      'out.weekly': 'Wochenkosten',
      'out.yearly': 'Jahreskosten',
      'out.tenYear': 'Kosten über 10 Jahre',
      'out.invested10': 'Gleiches Geld angelegt (10 J.)',
      'preset.0': 'Schachtel täglich, 12 $',
      'preset.1': 'Halbe Schachtel, 15 $',
      'preset.2': 'Wenig, 5 am Tag',
      'errInvalid': 'Zigaretten und Preis dürfen nicht negativ sein, der Preis muss über 0 liegen',
      'chartTitle': 'Verbranntes vs. angelegtes Geld (10 Jahre)',
      'line.smoked': 'Kumulierte Rauchkosten',
      'line.invested': 'Gleiches Geld investiert',
      'note': '🚬 Eine Schachtel täglich zu 12 $ sind rund 4.380 $ im Jahr — eine ordentliche Autorate oder der Großteil eines vollen Roth-IRA. Die Investitionslinie legt das Jahresgeld einmal jährlich zur gewählten Rendite an; mit dem Aufhören bekommst du zusätzlich Stunden, Lunge und Versicherungszuschläge zurück, die dieser Rechner nicht beziffern kann.',
    },
  },
}
