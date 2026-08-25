/**
 * electricity-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ElectricityCostCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['算某台电器一天/一个月的电费', '估算取暖器、烘干机的年度电费', '找出家里的耗电大户', '按当地电价折算 kWh 成本'],
    faqs: [
      { q: '电费是怎么算的?', a: '功率(W)× 小时 ÷ 1000 得出每天 kWh,再乘电价就是日成本。月度按 30.44 天(真实的年均天数)计算,年度按 365 天——对常年开着的设备,年度那行才是诚实的数字。' },
      { q: '哪里查电器的功率?', a: '看铭牌、电源适配器或规格表,通常标 W 或 input。差距非常大:1500 W 的取暖器每小时电费约是 50 W 笔记本的 30 倍——这正是本工具帮你轻松完成的比较。' },
      { q: '电价应该填多少?', a: '填最近账单上的边际电价;若按 kWh 单独计费,输配费用也要算进去。美国住宅均价约 $0.16-0.17/kWh,但各州、各套餐、各时段差异很大。' },
    ],
    ui: {
      'in.daily': '每日成本',
      'in.hours': '每日使用小时',
      'in.kwh': '每日耗电',
      'in.monthly': '每月成本',
      'in.rate': '电价',
      'in.watts': '额定功率',
      'in.yearly': '每年成本',
      'note': '⚡ 功率见电器铭牌或规格表。取暖器和烘干机(1500-5000 W)远超笔记本(≈50 W);年度那行数字最能暴露意外。',
      'out.daily': '每日成本',
      'out.hours': '每日使用小时',
      'out.kwh': '每日耗电',
      'out.monthly': '每月成本',
      'out.rate': '电价',
      'out.watts': '额定功率',
      'out.yearly': '每年成本',
    },
  },
  es: {
    useCases: ['calcular lo que cuesta un aparato al día o al mes', 'estimar el coste anual de calefactores y secadoras', 'descubrir los aparatos que más consumen en casa', 'convertir kWh a coste con tu tarifa local'],
    faqs: [
      { q: '¿Cómo se calcula el coste?', a: 'Vatios × horas ÷ 1000 da los kWh diarios; multiplicando por tu tarifa obtienes el coste diario. El mes usa 30,44 días (la media anual real) y el año 365: para aparatos siempre encendidos, la línea anual es el número honesto.' },
      { q: '¿Dónde encuentro el vatiaje?', a: 'En la placa del aparato, el adaptador de corriente o la ficha técnica, normalmente marcado como W o entrada. La horquilla es enorme: una estufa de 1500 W cuesta por hora unas 30 veces más que un portátil de 50 W — justo la comparación que esta herramienta hace fácil.' },
      { q: '¿Qué tarifa debo introducir?', a: 'Tu tarifa marginal de una factura reciente, incluyendo el coste de distribución si se factura por kWh. La media residencial en EE. UU. ronda los 0,16-0,17 $/kWh, pero varía mucho según estado, plan y franja horaria.' },
    ],
    ui: {
      'in.daily': 'Coste diario',
      'in.hours': 'Horas de uso al día',
      'in.kwh': 'Energía diaria',
      'in.monthly': 'Coste mensual',
      'in.rate': 'Precio de la luz',
      'in.watts': 'Potencia nominal',
      'in.yearly': 'Coste anual',
      'note': '⚡ Busca el vatiaje en la etiqueta del aparato. Calefactores y secadoras (1500-5000 W) superan de lejos a un portátil (≈50 W); la fila anual es donde están las sorpresas.',
      'out.daily': 'Coste diario',
      'out.hours': 'Horas de uso al día',
      'out.kwh': 'Energía diaria',
      'out.monthly': 'Coste mensual',
      'out.rate': 'Precio de la luz',
      'out.watts': 'Potencia nominal',
      'out.yearly': 'Coste anual',
    },
  },
  de: {
    useCases: ['ausrechnen, was ein Gerät pro Tag oder Monat kostet', 'die Jahreskosten von Heizlüfter und Trockner schätzen', 'die größten Stromfresser im Haushalt finden', 'kWh mit deinem lokalen Tarif in Kosten umrechnen'],
    faqs: [
      { q: 'Wie wird der Strompreis berechnet?', a: 'Watt × Stunden ÷ 1000 ergibt kWh pro Tag; multipliziert mit deinem Tarif ergibt das die Tageskosten. Der Monat rechnet mit 30,44 Tagen (der wahre Jahresschnitt), das Jahr mit 365 — bei Dauingeräten ist die Jahreszeile die ehrliche Zahl.' },
      { q: 'Wo finde ich die Wattzahl eines Geräts?', a: 'Auf dem Typenschild, dem Netzteil oder im Datenblatt, meist als W oder Input gekennzeichnet. Die Spanne ist riesig: Ein 1500-W-Heizlüfter kostet pro Stunde rund 30-mal so viel wie ein 50-W-Laptop — genau dieser Vergleich fällt hier leicht.' },
      { q: 'Welchen Tarif soll ich eingeben?', a: 'Deinen Grenztarif aus einer aktuellen Rechnung, inklusive der Netzentgelte, wenn sie pro kWh abgerechnet werden. Der deutsche Haushaltsdurchschnitt liegt bei etwa 0,30-0,40 €/kWh, je nach Region und Tarif teils deutlich anders.' },
    ],
    ui: {
      'in.daily': 'Kosten pro Tag',
      'in.hours': 'Stunden Nutzung pro Tag',
      'in.kwh': 'Energie pro Tag',
      'in.monthly': 'Kosten pro Monat',
      'in.rate': 'Strompreis',
      'in.watts': 'Nennleistung',
      'in.yearly': 'Kosten pro Jahr',
      'note': '⚡ Die Wattzahl steht auf dem Typenschild. Heizlüfter und Trockner (1500-5000 W) übertreffen Laptops (≈50 W) bei Weitem; die Jahreszeile zeigt die Überraschungen.',
      'out.daily': 'Kosten pro Tag',
      'out.hours': 'Stunden Nutzung pro Tag',
      'out.kwh': 'Energie pro Tag',
      'out.monthly': 'Kosten pro Monat',
      'out.rate': 'Strompreis',
      'out.watts': 'Nennleistung',
      'out.yearly': 'Kosten pro Jahr',
    },
  },
}
