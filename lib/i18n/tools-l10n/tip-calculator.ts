/**
 * tip-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const tipCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'tip = bill × rate\ntotal = bill + tip',
      explain: '小费是账单的一个自选百分比(美国堂食常见 15–20%)。把总额除以用餐人数得到每人分摊。',
    },
    useCases: ['在餐厅就餐后快速算出小费和平摊金额', '给外卖或打车算合适的小费比例', '多人聚餐时均摊账单', '旅行时参考各地小费惯例'],
    faqs: [
      { q: '小费该给多少?', a: '在美国,堂食服务一般给 15-20%,18% 是常见默认值。15% 表示服务尚可,20% 以上表示很满意。很多其他国家不期望小费或已含服务费——出国时请留意当地习惯。' },
      { q: '该按税前还是税后金额给小费?', a: '传统上按税前小计给小费,但按含税总额给也越来越常见,差别通常很小。两种都可以;本工具按你输入的账单金额计算。' },
      { q: '多人怎么分摊小费?', a: '先把小费加到总账单上,再除以人数即可均摊。如果各人消费差距大,可先算每人应付的餐费,再分别乘以相同的小费比例后求和。' },
    ],
    ui: {
      errMinOnePerson: '请至少输入 1 人',
      errNonNegativeBill: '账单金额不能为负',
      'in.bill': '账单金额', 'inSuffix.bill': '$', 'in.tipPct': '小费比例', 'inSuffix.tipPct': '%', 'in.people': '人数',
      'out.tip': '小费金额', 'out.total': '总账单', 'out.perPerson': '人均', 'outSub.perPerson': '均摊',
      note: '💡 常见小费比例:服务尚可 15%,服务不错 18%,服务很好 20% 以上。',
    },
  },
  es: {
    formula: {
      formula: 'tip = bill × rate\ntotal = bill + tip',
      explain: 'La propina es un porcentaje elegido de la cuenta (15–20% es común en servicio de mesa en EE. UU.). Divide el total entre comensales para el reparto por persona.',
    },
    useCases: ['calcular rápidamente la propina y el reparto tras una comida en restaurante', 'sacar una propina adecuada para comida a domicilio o taxi', 'repartir la cuenta a partes iguales entre varias personas', 'consultar las costumbres de propina al viajar'],
    faqs: [
      { q: '¿Cuánta propina debo dejar?', a: 'En EE. UU., el 15-20 % es lo habitual para servicio en mesa, con un 18 % como default común. El 15 % indica servicio adecuado; el 20 %+, servicio excelente. En muchos otros países no se espera propina o ya se incluye como cargo por servicio — revisa las costumbres locales al viajar.' },
      { q: '¿Debo propinar sobre el importe antes o después de impuestos?', a: 'La regla tradicional es propinar sobre el subtotal sin impuestos, pero propinar sobre el total (incluidos los impuestos) es cada vez más común y solo añade una pequeña cantidad. Ambas opciones son aceptables; la calculadora usa el importe que ingreses.' },
      { q: '¿Cómo reparto la propina en un grupo?', a: 'Primero suma la propina a la cuenta total, luego divide entre el número de personas para un reparto igualitario. Si los pedidos varían mucho, calcula la parte de cada persona, aplica el mismo porcentaje de propina a cada una y suma.' },
    ],
    ui: {
      errMinOnePerson: 'Introduce al menos 1 persona',
      errNonNegativeBill: 'El importe de la cuenta no puede ser negativo',
      'in.bill': 'Importe de la cuenta', 'inSuffix.bill': '$', 'in.tipPct': 'Porcentaje de propina', 'inSuffix.tipPct': '%', 'in.people': 'Número de personas',
      'out.tip': 'Importe de propina', 'out.total': 'Cuenta total', 'out.perPerson': 'Por persona', 'outSub.perPerson': 'Reparto igualitario',
      note: '💡 Propinas habituales: 15 % para servicio adecuado, 18 % para buen servicio, 20 %+ para servicio excelente.',
    },
  },
  de: {
    formula: {
      formula: 'tip = bill × rate\ntotal = bill + tip',
      explain: 'Trinkgeld ist ein gewählter Prozentsatz der Rechnung (in den USA 15–20 % üblich am Tisch). Gesamtbetrag durch Personen teilen ergibt den Anteil pro Kopf.',
    },
    useCases: ['Trinkgeld und Anteil nach einem Restaurantbesuch schnell berechnen', 'ein passendes Trinkgeld für Lieferung oder Fahrt ermitteln', 'die Rechnung unter mehreren Personen gerecht teilen', 'beim Reisen die lokalen Trinkgeld-Sitten nachschlagen'],
    faqs: [
      { q: 'Wie viel Trinkgeld sollte ich geben?', a: 'In den USA sind 15-20 % für Bedienung üblich, 18 % ein häufiger Standard. 15 % stehen für ordentlichen Service, 20 %+ für ausgezeichneten. In vielen anderen Ländern wird kein Trinkgeld erwartet oder es ist als Servicegebühr enthalten — beim Reisen sieh dich nach den lokalen Gepflogenheiten um.' },
      { q: 'Soll ich vor oder nach Steuer Trinkgeld geben?', a: 'Traditionell gibt man Trinkgeld auf den Steuer-Zwischensumme, aber Trinkgeld auf das Gesamt (inklusive Steuer) wird immer üblicher und macht nur einen kleinen Unterschied. Beides ist akzeptabel; der Rechner nimmt den Betrag, den du eingibst.' },
      { q: 'Wie teile ich das Trinkgeld in einer Gruppe?', a: 'Addiere zuerst das Trinkgeld zur Gesamtrechnung und teile dann durch die Personenanzahl für eine gleiche Aufteilung. Wenn die Bestellungen stark abweichen, berechne den Anteil jeder Person, wende denselben Trinkgeld-Prozentsatz auf jeden an und summiere.' },
    ],
    ui: {
      errMinOnePerson: 'Gib mindestens 1 Person an',
      errNonNegativeBill: 'Der Rechnungsbetrag darf nicht negativ sein',
      'in.bill': 'Rechnungsbetrag', 'inSuffix.bill': '$', 'in.tipPct': 'Trinkgeld-Prozentsatz', 'inSuffix.tipPct': '%', 'in.people': 'Anzahl Personen',
      'out.tip': 'Trinkgeldbetrag', 'out.total': 'Gesamtrechnung', 'out.perPerson': 'Pro Person', 'outSub.perPerson': 'Gleiche Aufteilung',
      note: '💡 Übliche Trinkgelder: 15 % für ordentlichen Service, 18 % für guten Service, 20 %+ für ausgezeichneten Service.',
    },
  },
}
