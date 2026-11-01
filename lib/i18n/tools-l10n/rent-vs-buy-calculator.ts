/**
 * rent-vs-buy-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const rentVsBuyCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['comparar el coste total de comprar frente a alquilar en el periodo', 'hallar el punto de equilibrio donde comprar sale más barato', 'ver por años si conviene comprar o alquilar', 'decidir si alquilar o comprar vivienda'],
    faqs: [
      { q: '¿Considera la subida del valor de la vivienda?', a: 'No — esta versión simplificada ignora la revalorización, que es un gran beneficio de comprar. Pero también ignora el coste de oportunidad de invertir tu entrada en bolsa. Los modelos completos de alquilar vs. comprar incluyen ambos. Históricamente, las viviendas en EE. UU. se revalorizan un 3-4 % anual, más o menos como la inflación.' },
      { q: '¿Cómo sé si me quedaré el tiempo suficiente?', a: 'La estabilidad laboral, la situación sentimental y los distritos escolares son las señales habituales. Una buena regla: ten confianza en quedarte al menos 5 años, idealmente 7-10. Cada año extra diluye más los gastos de cierre y inclina la balanza hacia comprar.' },
      { q: '¿Y la deducción fiscal por intereses de la hipoteca?', a: 'Desde el cambio fiscal de 2017 en EE. UU., el mayor mínimo deducible ($14,600 soltero / $29,200 matrimonio en 2024) hace que la mayoría de propietarios ya no detallen, así que la deducción por intereses beneficia a menos gente que antes. Cuenta con ella solo si tus deducciones detalladas superan claramente el mínimo.' },
      { q: '¿Qué gastos de compra quedan fuera del cálculo?', a: 'Impuestos de compraventa (ITP o IVA), notaría y registro, comisión inmobiliaria, reforma y mantenimiento anual; en España suman en torno al 8-12 % del precio. Cuanto más corto el periodo, más pesan estos costes contra la compra.' },
      { q: '¿Cuánto cambia el resultado con el tipo de interés?', a: 'Mucho: una hipoteca de 200 000 € a 30 años pasa de unos 843 €/mes al 3 % a unos 1.013 € al 4,5 % — 170 € más al mes y más de 60 000 € de intereses en total. Recalcula con el tipo real que te ofrezcan antes de decidir.' },
    ],
    ui: {
      errYears: 'Introduce un número de años mayor que 0',
      winnerBuying: 'Comprar (~{amount} más barato)',
      winnerRenting: 'Alquilar (~{amount} más barato)',
      'in.home': 'Precio de la vivienda', 'in.rent': 'Alquiler comparable', 'in.down': 'Entrada', 'in.rate': 'Tipo de la hipoteca', 'in.term': 'Plazo del préstamo', 'inSuffix.term': 'años', 'in.years': 'Años en la vivienda',
      'out.buyTotal': 'Coste neto de comprar', 'outSub.buyTotal': 'Entrada + pagos − patrimonio final', 'out.rentTotal': 'Coste total de alquilar', 'outSub.rentTotal': 'Alquiler durante el periodo', 'out.winner': 'Opción más barata',
      note: '🏠 Coste neto de comprar = entrada + pagos de hipoteca durante el periodo − patrimonio recuperado en la venta (valor de la vivienda − capital pendiente). Simplificado — sin impuestos, mantenimiento, revalorización ni coste de oportunidad de invertir. Úsalo como comparación aproximada inicial.',
      chartTitle: 'Coste acumulado: alquilar vs comprar',
      'line.rent': 'Alquilar (acumulado)',
      'line.buy': 'Comprar (coste neto)',
    },
  },
  de: {
    useCases: ['die Gesamtkosten von Kauf gegen Miete im Zeitraum vergleichen', 'den Break-even-Punkt finden, ab dem Kaufen günstiger ist', 'nach Jahren sehen, ob Miete oder Kauf günstiger ist', 'entscheiden, ob mieten oder kaufen'],
    faqs: [
      { q: 'Berücksichtigt das eine Wertsteigerung der Immobilie?', a: 'Nein — diese vereinfachte Version ignoriert die Wertsteigerung, die ein großer Vorteil des Kaufens ist. Sie ignoriert aber auch die Opportunitätskosten, dein Eigenkapital in Aktien zu investieren. Vollständige Miet-Kauf-Modelle berücksichtigen beides. Historisch steigen US-Immobilien um 3-4 % pro Jahr, grob wie die Inflation.' },
      { q: 'Wie weiß ich, ob ich lange genug bleibe?', a: 'Jobsicherheit, Beziehungsstatus und Schulbezirke sind die üblichen Signale. Eine gute Faustregel: sei dir sicher, mindestens 5 Jahre zu bleiben, idealerweise 7-10. Jedes zusätzliche Jahr verdünnt die Abschlusskosten und kippt die Rechnung weiter Richtung Kauf.' },
      { q: 'Was ist mit dem Steuerabzug für Hypothekenzinsen?', a: 'Seit der US-Steuerreform 2017 bedeutet der höhere Pauschbetrag ($14,600 Single / $29,200 Verheiratet 2024), dass die meisten Eigentümer nicht mehr itemisieren, also hilft der Hypothekenzinsabzug weniger Leuten als früher. Rechne nur damit, wenn deine itemisierten Abzüge den Pauschbetrag deutlich übersteigen.' },
      { q: 'Welche Kaufnebenkosten fehlen in dieser Rechnung?', a: 'Grunderwerbsteuer (3,5-6,5 % je nach Bundesland), Notar und Grundbuch (~2 %), ggf. Maklerprovision (bis 7,14 %) plus Instandhaltung von rund 1 % des Kaufpreises pro Jahr. In vielen Städten kommen so über 10 % zusammen — bei kurzer Wohnzeit kippt das die Rechnung Richtung Mieten.' },
      { q: 'Warum die Zinsbindung mitdenken?', a: 'Mit 10 Jahren Zinsbindung ist die Rate planbar, aber die Anschlussfinanzierung kann teurer werden. Rechne konservativ mit 0,5-1 Prozentpunkt mehr bei der Folgefinanzierung, sonst schönt der Vergleich das Kaufen.' },
    ],
    ui: {
      errYears: 'Gib eine Anzahl von Jahren größer als 0 ein',
      winnerBuying: 'Kaufen (~{amount} günstiger)',
      winnerRenting: 'Mieten (~{amount} günstiger)',
      'in.home': 'Hauspreis', 'in.rent': 'Vergleichsmiete', 'in.down': 'Anzahlung', 'in.rate': 'Hypothekenzins', 'in.term': 'Kreditlaufzeit', 'inSuffix.term': 'Jahre', 'in.years': 'Wohnjahre',
      'out.buyTotal': 'Nettokosten Kauf', 'outSub.buyTotal': 'Anzahlung + Zahlungen − Eigenkapital beim Verkauf', 'out.rentTotal': 'Gesamtkosten Miete', 'outSub.rentTotal': 'Miete über den Zeitraum', 'out.winner': 'Günstigere Option',
      note: '🏠 Nettokosten Kauf = Anzahlung + Hypothekenzahlungen während der Wohnzeit − beim Verkauf zurückgewonnenes Eigenkapital (Hauswert − Restschuld). Vereinfacht — ohne Steuern, Instandhaltung, Wertsteigerung und Opportunitätskosten der Investition. Als groben Erstvergleich nutzen.',
      chartTitle: 'Kumulierte Kosten: Mieten vs Kaufen',
      'line.rent': 'Mieten (kumuliert)',
      'line.buy': 'Kaufen (Nettokosten)',
    },
  },
}
