/**
 * tip-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const tipCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'tip = bill × rate\ntotal = bill + tip',
      explain: 'La propina es un porcentaje elegido de la cuenta (15–20% es común en servicio de mesa en EE. UU.). Divide el total entre comensales para el reparto por persona.',
    },
    useCases: ['calcular rápidamente la propina y el reparto tras una comida en restaurante', 'sacar una propina adecuada para comida a domicilio o taxi', 'repartir la cuenta a partes iguales entre varias personas', 'consultar las costumbres de propina al viajar'],
    faqs: [
      { q: '¿Cuánta propina debo dejar?', a: 'En EE. UU., el 15-20 % es lo estándar para servicio en mesa, siendo el 18 % lo más común. El 15 % indica servicio adecuado; el 20 %+, servicio excelente. En muchos otros países no se espera propina o ya se incluye como cargo por servicio — revisa las costumbres locales al viajar.' },
      { q: '¿Debo propinar sobre el importe antes o después de impuestos?', a: 'La regla tradicional es propinar sobre el subtotal sin impuestos, pero propinar sobre el total (incluidos los impuestos) es cada vez más común y solo añade una pequeña cantidad. Ambas opciones son aceptables; la calculadora usa el importe que ingreses.' },
      { q: '¿Cómo reparto la propina en un grupo?', a: 'Primero suma la propina a la cuenta total, luego divide entre el número de personas para un reparto igualitario. Si los pedidos varían mucho, calcula la parte de cada persona, aplica el mismo porcentaje de propina a cada una y suma.' },
      { q: '¿Se deja propina en España y Latinoamérica?', a: 'En España no es obligatoria: se suele redondear o dejar un 5-10 % si el servicio fue bueno. En México y gran parte de Latinoamérica es habitual un 10-15 % que se añade a la cuenta; en Argentina el servicio ya suele venir incluido.' },
    ],
    ui: {
      'chartTitle': 'Cuenta vs propina',
      'cmp.0': 'Cuenta total',
      'cmpseg.0': 'Cuenta',
      'cmpseg.1': 'Propina',
      'preset.0': '15% adecuado',
      'preset.1': '18% bueno',
      'preset.2': '20% excelente',
      'preset.3': '25% excepcional',
      errMinOnePerson: 'Introduce al menos 1 persona',
      errNonNegativeBill: 'El importe de la cuenta no puede ser negativo',
      errNonNegativeTip: 'El porcentaje de propina no puede ser negativo',
      'in.bill': 'Importe de la cuenta', 'inSuffix.bill': '$', 'in.tipPct': 'Porcentaje de propina', 'inSuffix.tipPct': '%', 'in.people': 'Número de personas',
      'out.tip': 'Importe de propina', 'out.total': 'Cuenta total', 'out.perPerson': 'Por persona', 'outSub.perPerson': 'Reparto igualitario',
      note: '💡 Propinas habituales: 15 % para servicio adecuado, 18 % para buen servicio, 20 %+ para servicio excelente.',
    },
  },
  de: {
    formula: {
      formula: 'tip = bill × rate\ntotal = bill + tip',
      explain: 'Trinkgeld ist ein gewählter Prozentsatz der Rechnung (in den USA 15–20 % üblich am Tisch). Teilt man den Gesamtbetrag durch die Personenanzahl, ergibt das den Anteil pro Person.',
    },
    useCases: ['Trinkgeld und Anteil nach einem Restaurantbesuch schnell berechnen', 'ein passendes Trinkgeld für Lieferung oder Fahrt ermitteln', 'die Rechnung unter mehreren Personen gerecht teilen', 'beim Reisen die lokalen Trinkgeld-Sitten nachschlagen'],
    faqs: [
      { q: 'Wie viel Trinkgeld sollte ich geben?', a: 'In den USA sind 15-20 % für Bedienung üblich, 18 % ein häufiger Standard. 15 % stehen für ordentlichen Service, 20 %+ für ausgezeichneten. In vielen anderen Ländern wird kein Trinkgeld erwartet oder es ist als Servicegebühr enthalten — beim Reisen sieh dich nach den lokalen Gepflogenheiten um.' },
      { q: 'Soll ich vor oder nach Steuer Trinkgeld geben?', a: 'Traditionell gibt man Trinkgeld auf die Zwischensumme vor Steuer, aber Trinkgeld auf den Gesamtbetrag (inklusive Steuer) wird immer üblicher und macht nur einen kleinen Unterschied. Beides ist akzeptabel; der Rechner nimmt den Betrag, den du eingibst.' },
      { q: 'Wie teile ich das Trinkgeld in einer Gruppe?', a: 'Addiere zuerst das Trinkgeld zur Gesamtrechnung und teile dann durch die Personenanzahl für eine gleiche Aufteilung. Wenn die Bestellungen stark abweichen, berechne den Anteil jeder Person, wende denselben Trinkgeld-Prozentsatz auf jeden an und summiere.' },
      { q: 'Gibt man in Deutschland Trinkgeld?', a: 'Ja, aber bescheidener als in den USA: Im Restaurant und beim Lieferdienst sind 5-10 % oder einfach Aufrunden üblich, meist bar oder über die Trinkgeld-Taste am Kartenterminal. Anders als in den USA ist es freiwillig — die Bedienung ist über den Mindestlohn abgesichert.' },
    ],
    ui: {
      'chartTitle': 'Rechnung vs. Trinkgeld',
      'cmp.0': 'Gesamtrechnung',
      'cmpseg.0': 'Rechnung',
      'cmpseg.1': 'Trinkgeld',
      'preset.0': '15 % angemessen',
      'preset.1': '18 % gut',
      'preset.2': '20 % exzellent',
      'preset.3': '25 % überragend',
      errMinOnePerson: 'Gib mindestens 1 Person an',
      errNonNegativeBill: 'Der Rechnungsbetrag darf nicht negativ sein',
      errNonNegativeTip: 'Der Trinkgeld-Prozentsatz darf nicht negativ sein',
      'in.bill': 'Rechnungsbetrag', 'inSuffix.bill': '$', 'in.tipPct': 'Trinkgeld-Prozentsatz', 'inSuffix.tipPct': '%', 'in.people': 'Anzahl Personen',
      'out.tip': 'Trinkgeldbetrag', 'out.total': 'Gesamtrechnung', 'out.perPerson': 'Pro Person', 'outSub.perPerson': 'Gleiche Aufteilung',
      note: '💡 Übliche Trinkgelder: 15 % für ordentlichen Service, 18 % für guten Service, 20 %+ für ausgezeichneten Service.',
    },
  },
}
