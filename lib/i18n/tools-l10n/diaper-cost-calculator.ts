/**
 * diaper-cost-calculator 本地化 bundle —— zh / es / de(2026-10 B7 家庭健康批次)
 * 覆盖: ui + faqs + useCases(client = DiaperCostCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const DiaperCostCalculatorL10n: ToolL10n = {

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
      'preset.0': 'Recién nacido (0-3 m)',
      'preset.1': '6-12 meses',
      'preset.2': '12-24 meses',
      'preset.3': 'Control de esfínteres',
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
      'preset.0': 'Neugeborenes (0-3 Mo.)',
      'preset.1': '6-12 Monate',
      'preset.2': 'Kleinkind (12-24 Mo.)',
      'preset.3': 'Trockenwerden',
      'errInvalid': 'Keine negativen Werte; Windeln pro Tag müssen > 0 sein',
      'note': '🧷 Im ersten Jahr sind es 2.500-3.000 Windeln. Kistenkauf: Der Stückpreis sinkt von ~0,35 $ in kleinen Packungen auf 0,20-0,25 $ in Jumbo-Boxen. Der Stoff-Gesamtbetrag enthält keine zusätzlichen Waschkosten (~0,50-1,00 $ pro Waschgang).',
    },
  },
}
