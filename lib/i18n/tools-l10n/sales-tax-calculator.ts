/**
 * sales-tax-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const salesTaxCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'tax = price × rate\ntotal = price × (1 + rate)',
      explain: 'El impuesto sobre las ventas es un porcentaje del precio sin impuestos añadido en caja. Rate se expresa como decimal (p. ej. 0,08 para 8%).',
    },
    useCases: ['calcular el total con impuestos antes de pagar', 'obtener el importe antes de impuestos a partir del total (reembolsos, conciliación)', 'comparar las tasas combinadas de distintos estados o condados', 'entender la relación entre IVA/GST y el impuesto sobre ventas'],
    faqs: [
      { q: '¿Los alimentos básicos tributan?', a: 'En muchos estados de EE. UU., los alimentos básicos están exentos o se gravan a una tasa menor. Los productos esenciales como comida y medicinas suelen tener un trato especial, pero las reglas varían mucho según la jurisdicción.' },
      { q: '¿El impuesto sobre ventas es igual al IVA?', a: 'Ambos son impuestos al consumo pero funcionan distinto. El impuesto sobre ventas se añade una sola vez en la venta final al consumidor. El IVA se cobra en cada etapa de producción pero se acredita, de modo que al final lo paga el consumidor. La matemática para el comprador final es parecida.' },
      { q: '¿Por qué los precios en EE. UU. no incluyen impuestos?', a: 'Como EE. UU. tiene miles de jurisdicciones fiscales locales, los minoristas muestran precios sin impuesto para poder publicar precios nacionales consistentes. El impuesto se añade en caja según el lugar de compra.' },
      { q: '¿Cómo quito el impuesto de un precio final?', a: 'Con el modo «Quitar impuesto»: base = total ÷ (1 + tasa). Un ticket de 121 € con IVA del 21 % vuelve a 100 € netos con 21 € de impuesto. El error habitual es restar el 21 % del total, lo que daría unos 95,59 € — incorrecto.' },
      { q: '¿Qué tipos se usan en España y Latinoamérica?', a: 'España: IVA del 21 % general, con tipos reducidos del 10 % y el 4 %. México: IVA del 16 % en todo el país (8 % solo en la franja fronteriza norte). Argentina y Colombia usan IVA del 21 % y 19 %; ajusta la tasa antes de calcular.' },
    ],
    ui: {
      'chartTitle': 'Neto vs impuesto',
      'cmp.0': 'Importe final',
      'cmpseg.0': 'Importe neto',
      'cmpseg.1': 'Impuesto',
      errTaxRate: 'La tasa de impuesto debe ser superior a −100 %',
      errNonNegative: 'El importe y la tasa de impuesto no pueden ser negativos',
      'in.amount': 'Importe', 'inSuffix.amount': '$', 'in.rate': 'Tasa de impuesto', 'inSuffix.rate': '%', 'in.mode': 'Modo de cálculo',
      'opt.mode.add': 'Añadir impuesto (antes → con impuesto)', 'opt.mode.remove': 'Quitar impuesto (con impuesto → antes)',
      'out.tax': 'Importe del impuesto', 'out.result': 'Importe final',
      note: '💰 Usa «Quitar impuesto» para hallar el importe antes de impuestos cuando solo tienes el total final — común para IVA y GST.',
    },
  },
  de: {
    formula: {
      formula: 'tax = price × rate\ntotal = price × (1 + rate)',
      explain: 'Die Umsatzsteuer ist ein Prozentsatz des Nettopreises, der an der Kasse addiert wird. Rate als Dezimalzahl (z. B. 0,08 für 8 %).',
    },
    useCases: ['den Endpreis inklusive Steuer vor dem Bezahlen ausrechnen', 'den Nettobetrag aus dem Bruttobetrag zurückrechnen (Spesen, Abrechnung)', 'kombinierte Steuersätze verschiedener Bundesstaaten und Countys vergleichen', 'den Zusammenhang zwischen Umsatzsteuer/Sales Tax und Mehrwertsteuer/GST verstehen'],
    faqs: [
      { q: 'Werden Lebensmittel besteuert?', a: 'In vielen US-Bundesstaaten sind Lebensmittel befreit oder werden niedriger besteuert. Grundnahrungsmittel und Medikamente erhalten oft eine Sonderbehandlung, aber die Regeln unterscheiden sich je nach Gebiet stark.' },
      { q: 'Ist Sales Tax dasselbe wie die Mehrwertsteuer?', a: 'Beides sind Verbrauchsteuern, aber sie funktionieren unterschiedlich. Sales Tax wird einmalig beim Endverkauf an den Verbraucher erhoben. Die Mehrwertsteuer wird auf jeder Produktionsstufe erhoben, aber erstattet, sodass sie am Ende der Verbraucher trägt. Die Rechnung für den Endkäufer ist ähnlich.' },
      { q: 'Warum enthalten US-Preise keine Steuer?', a: 'Da die USA Tausende lokale Steuergebiete haben, zeigen Händler Nettopreise, um einheitliche nationale Werbung zu schalten. Die Steuer wird an der Kasse basierend auf dem Kaufort hinzugefügt.' },
      { q: 'Wie rechne ich die Mehrwertsteuer aus einem Bruttopreis heraus?', a: 'Mit „Steuer abziehen“: Brutto ÷ (1 + Satz). 119 € brutto bei 19 % ergeben 100 € netto und 19 € USt. Nicht einfach 19 % vom Brutto abziehen — das ergäbe falsche 96,39 €.' },
      { q: 'Welche Sätze gelten im DACH-Raum?', a: 'Deutschland: 19 % Regelsatz, 7 % ermäßigt für Lebensmittel und Bücher. Österreich: 20 % bzw. 10 %; die Schweiz: 8,1 % Normalsatz seit 2024. Setze den passenden Satz ein, dann stimmen Netto und Brutto exakt.' },
    ],
    ui: {
      'chartTitle': 'Netto vs. Steuer',
      'cmp.0': 'Endbetrag',
      'cmpseg.0': 'Nettobetrag',
      'cmpseg.1': 'Steuer',
      errTaxRate: 'Der Steuersatz muss über −100 % liegen',
      errNonNegative: 'Betrag und Steuersatz dürfen nicht negativ sein',
      'in.amount': 'Betrag', 'inSuffix.amount': '$', 'in.rate': 'Steuersatz', 'inSuffix.rate': '%', 'in.mode': 'Berechnungsmodus',
      'opt.mode.add': 'Steuer hinzufügen (netto → brutto)', 'opt.mode.remove': 'Steuer abziehen (brutto → netto)',
      'out.tax': 'Steuerbetrag', 'out.result': 'Endbetrag',
      note: '💰 Nutze „Steuer abziehen“, um den Nettobetrag zu finden, wenn du nur den Bruttobetrag hast — häufig bei Mehrwertsteuer und GST.',
    },
  },
}
