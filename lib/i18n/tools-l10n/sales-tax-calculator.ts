/**
 * sales-tax-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const salesTaxCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['结账前算出商品的含税总价', '从含税总额反推税前金额(报销、对账)', '比较不同州/县的合并销售税率', '理解 VAT/GST 与销售税的换算关系'],
    faqs: [
      { q: '食品杂货要交税吗?', a: '在美国很多州,食品杂货免税或适用更低税率。食品和药品等必需品通常有特殊规定,但各地差异很大。' },
      { q: '销售税和 VAT 一样吗?', a: '两者都是消费税,但运作方式不同。销售税只在最终卖给消费者时征收一次。VAT 在每个生产环节都征收但会抵扣回去,最终仍由消费者承担。对最终买家来说,计算方式相似。' },
      { q: '为什么美国标价不含税?', a: '因为美国有成千上万个地方税区,零售商显示税前价格以便做全国统一广告。税款在结账时根据购买地加上。' },
    ],
    ui: {
      'in.amount': '金额', 'inSuffix.amount': '$', 'in.rate': '税率', 'inSuffix.rate': '%', 'in.mode': '计算方式',
      'opt.mode.add': '加税(税前 → 含税)', 'opt.mode.remove': '去税(含税 → 税前)',
      'out.tax': '税额', 'out.result': '最终金额',
      note: '💰 当你只有最终总价时,用「去税」反推税前金额——VAT 和 GST 场景常用。',
    },
  },
  es: {
    useCases: ['calcular el total con impuestos antes de pagar', 'obtener el importe antes de impuestos a partir del total (reembolsos, conciliación)', 'comparar las tasas combinadas de distintos estados o condados', 'entender la relación entre IVA/GST y el impuesto sobre ventas'],
    faqs: [
      { q: '¿Los alimentos básicos tributan?', a: 'En muchos estados de EE. UU., los alimentos básicos están exentos o se gravan a una tasa menor. Los productos esenciales como comida y medicinas suelen tener un trato especial, pero las reglas varían mucho según la jurisdicción.' },
      { q: '¿El impuesto sobre ventas es igual al IVA?', a: 'Ambos son impuestos al consumo pero funcionan distinto. El impuesto sobre ventas se añade una sola vez en la venta final al consumidor. El IVA se cobra en cada etapa de producción pero se acredita, de modo que al final lo paga el consumidor. La matemática para el comprador final es parecida.' },
      { q: '¿Por qué los precios en EE. UU. no incluyen impuestos?', a: 'Como EE. UU. tiene miles de jurisdicciones fiscales locales, los minoristas muestran precios sin impuesto para poder publicar precios nacionales consistentes. El impuesto se añade en caja según el lugar de compra.' },
    ],
    ui: {
      'in.amount': 'Importe', 'inSuffix.amount': '$', 'in.rate': 'Tasa de impuesto', 'inSuffix.rate': '%', 'in.mode': 'Modo de cálculo',
      'opt.mode.add': 'Añadir impuesto (antes → con impuesto)', 'opt.mode.remove': 'Quitar impuesto (con impuesto → antes)',
      'out.tax': 'Importe del impuesto', 'out.result': 'Importe final',
      note: '💰 Usa «Quitar impuesto» para hallar el importe antes de impuestos cuando solo tienes el total final — común para IVA y GST.',
    },
  },
  de: {
    useCases: ['den Endpreis inklusive Steuer vor dem Bezahlen ausrechnen', 'den Netto­betrag aus dem Brutto­total zurückrechnen (Spesen, Abrechnung)', 'kombinierte Steuersätze verschiedener Bundesstaaten/Kantone vergleichen', 'den Zusammenhang zwischen Mehrwertsteuer/GST und Sales Tax verstehen'],
    faqs: [
      { q: 'Werden Lebensmittel besteuert?', a: 'In vielen US-Bundesstaaten sind Lebensmittel befreit oder werden niedriger besteuert. Grundnahrungsmittel und Medikamente erhalten oft eine Sonderbehandlung, aber die Regeln unterscheiden sich je nach Gebiet stark.' },
      { q: 'Ist Sales Tax dasselbe wie die Mehrwertsteuer?', a: 'Beides sind Verbrauchsteuern, aber sie funktionieren unterschiedlich. Sales Tax wird einmalig beim Endverkauf an den Verbraucher erhoben. Die Mehrwertsteuer wird auf jeder Produktionsstufe erhoben, aber erstattet, sodass sie am Ende der Verbraucher trägt. Die Rechnung für den Endkäufer ist ähnlich.' },
      { q: 'Warum enthalten US-Preise keine Steuer?', a: 'Da die USA Tausende lokale Steuergebiete haben, zeigen Händler Nettopreise, um einheitliche nationale Werbung zu schalten. Die Steuer wird an der Kasse basierend auf dem Kaufort hinzugefügt.' },
    ],
    ui: {
      'in.amount': 'Betrag', 'inSuffix.amount': '$', 'in.rate': 'Steuersatz', 'inSuffix.rate': '%', 'in.mode': 'Berechnungsmodus',
      'opt.mode.add': 'Steuer hinzufügen (netto → brutto)', 'opt.mode.remove': 'Steuer abziehen (brutto → netto)',
      'out.tax': 'Steuerbetrag', 'out.result': 'Endbetrag',
      note: '💰 Nutze „Steuer abziehen", um den Nettobetrag zu finden, wenn du nur das Bruttototal hast — häufig bei Mehrwertsteuer und GST.',
    },
  },
}
