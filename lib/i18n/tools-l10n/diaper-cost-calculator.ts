/**
 * diaper-cost-calculator 本地化 bundle —— zh / es / de(2026-10 B7 家庭健康批次)
 * 覆盖: ui + faqs + useCases(client = DiaperCostCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const DiaperCostCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['估算新生儿第一年的尿布开销', '比较不同单片价下的月度与年度支出', '算出到如厕训练前的尿布总花费', '对比一次性尿布与布尿布的整体成本'],
    faqs: [
      { q: '宝宝一天到底用多少片尿布?', a: '新生儿每天 8-12 片,六个月后降到 6-8 片,学步期 4-6 片——仅第一年就要约 2,500-3,000 片,如厕训练前累计 6,000-8,000 片。' },
      { q: '布尿布真的更省钱吗?', a: '通常是的,前提是同一批布尿布给二胎接着用:$400-800 的全套加上水洗衣费,比 $1,500-2,500 的一次性尿布便宜。只养一个孩子的话,算上水电气和你的时间,差距会缩小。' },
      { q: '单片尿布的真实价格是多少?', a: '小包装约 $0.30-0.40/片;大箱装和订阅省价能压到 $0.18-0.25。按宝宝能穿的最大码整箱囤货,是单项最有效的省钱杠杆。' },
      { q: '什么时候该囤货?', a: '只囤确定会穿到的码数——很多宝宝会跳码或快速穿过去;大多数零售商对未开封整箱支持 90 天内退换。' },
    ],
    ui: {
      'in.perDay': '每天尿布片数',
      'in.cost': '单片价格',
      'in.months': '穿尿布总月数',
      'in.clothCost': '布尿布一次性投入',
      'out.monthly': '每月花费',
      'out.yearly': '每年花费',
      'out.total': '如厕训练前总计',
      'out.clothSave': '布尿布可省',
      'chartTitle': '一次性 vs 布尿布(全程)',
      'cmp.0': '一次性尿布',
      'cmp.1': '布尿布',
      'cmpseg.0': '总花费',
      'errInvalid': '各数值不能为负,片数需大于 0',
      'note': '🧷 第一年通常用掉 2,500-3,000 片。按箱买:单片价能从小包的约 $0.35 降到超大箱的 $0.20-0.25。布尿布的总额未计入额外洗衣成本(每锅约 $0.50-1.00)。',
    },
  },
  es: {
    useCases: ['estimar el gasto en pañales del primer año', 'comparar coste mensual y anual según el precio por pañal', 'calcular el total hasta el retirar pañales', 'comparar pañales desechables vs de tela'],
    faqs: [
      { q: '¿Cuántos pañales usa un bebé al día?', a: 'Los recién nacidos, 8-12 al día; hacia los seis meses bajan a 6-8 y en la etapa de andar a 4-6 — unas 2.500-3.000 unidades solo en el primer año y 6.000-8.000 antes del control de esfínteres.' },
      { q: '¿Salen más baratos los de tela?', a: 'Normalmente sí, si los reutilizas entre hermanos: un lote de 400-800 $ más el lavado supera a los 1.500-2.500 $ de desechables. Con un solo hijo la diferencia se estrecha al sumar agua, luz y tu tiempo.' },
      { q: '¿Cuál es el precio real por pañal?', a: 'Los paquetes pequeños rondan 0,30-0,40 € por pañal; las cajas gigantes y la suscripción lo bajan a 0,18-0,25. Comprar la caja más grande que le quede es la palanca de ahorro más potente.' },
      { q: '¿Cuándo conviene hacer acopio?', a: 'Solo en tallas que seguro alcanzará — muchos bebés se saltan una talla o la superan enseguida, y la mayoría de tiendas acepta devolver cajas sin abrir en 90 días.' },
    ],
    ui: {
      'in.perDay': 'Pañales por día',
      'in.cost': 'Precio por pañal',
      'in.months': 'Meses totales con pañal',
      'in.clothCost': 'Coste inicial de tela',
      'out.monthly': 'Coste mensual',
      'out.yearly': 'Coste anual',
      'out.total': 'Total hasta el aprendizaje',
      'out.clothSave': 'Ahorro con tela',
      'chartTitle': 'Desechables vs tela (todo el periodo)',
      'cmp.0': 'Desechables',
      'cmp.1': 'De tela',
      'cmpseg.0': 'Coste total',
      'errInvalid': 'Los valores no pueden ser negativos; los pañales al día deben ser > 0',
      'note': '🧷 El primer año son 2.500-3.000 pañales. Compra por caja: el precio unitario baja de ~0,35 en paquetes pequeños a 0,20-0,25 en cajas gigantes. El total de tela no incluye el lavado extra (~0,50-1,00 por ciclo).',
    },
  },
  de: {
    useCases: ['die Windelkosten des ersten Jahres schätzen', 'Monats- und Jahreskosten je Windelpreis vergleichen', 'die Gesamtkosten bis zum Trockenwerden berechnen', 'Wegwerf- gegen Stoffwindeln vergleichen'],
    faqs: [
      { q: 'Wie viele Windeln braucht ein Baby pro Tag?', a: 'Neugeborene 8-12, ab sechs Monaten 6-8, als Kleinkind 4-6 — allein im ersten Jahr rund 2.500-3.000 Windeln und 6.000-8.000 vor dem Trockenwerden.' },
      { q: 'Sind Stoffwindeln wirklich günstiger?', a: 'Meist ja, wenn dieselben Windeln weitere Kinder mitbekommen: 400-800 $ Grundausstattung plus Waschkosten schlagen 1.500-2.500 $ Wegwerfwindeln. Bei nur einem Kind schrumpft der Vorsprung, sobald Wasser, Strom und deine Zeit einfließen.' },
      { q: 'Was kostet eine Windel wirklich?', a: 'Kleine Packungen liegen bei 0,30-0,40 $ pro Windel; Jumbo-Boxen und Abos drücken den Preis auf 0,18-0,25 $. Die größte Box, die noch passt, zu kaufen, ist der wirksamste Hebel.' },
      { q: 'Wann sollte ich Vorrat kaufen?', a: 'Nur in Größen, die sicher erreicht werden — viele Babys überspringen eine Größe oder wachsen schneller als gedacht; die meisten Händler nehmen ungeöffnete Boxen innerhalb von 90 Tagen zurück.' },
    ],
    ui: {
      'in.perDay': 'Windeln pro Tag',
      'in.cost': 'Preis pro Windel',
      'in.months': 'Windelmonate insgesamt',
      'in.clothCost': 'Einmalinvestition Stoff',
      'out.monthly': 'Kosten pro Monat',
      'out.yearly': 'Kosten pro Jahr',
      'out.total': 'Gesamt bis Trockenwerden',
      'out.clothSave': 'Ersparnis mit Stoff',
      'chartTitle': 'Wegwerf vs. Stoff (ganze Zeit)',
      'cmp.0': 'Wegwerfwindeln',
      'cmp.1': 'Stoffwindeln',
      'cmpseg.0': 'Gesamtkosten',
      'errInvalid': 'Keine negativen Werte; Windeln pro Tag müssen > 0 sein',
      'note': '🧷 Im ersten Jahr sind es 2.500-3.000 Windeln. Kistenkauf: Der Stückpreis sinkt von ~0,35 $ in kleinen Packungen auf 0,20-0,25 $ in Jumbo-Boxen. Der Stoff-Gesamtbetrag enthält keine zusätzlichen Waschkosten (~0,50-1,00 $ pro Waschgang).',
    },
  },
}
