/**
 * electricity-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ElectricityCostCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular lo que cuesta un aparato al día o al mes', 'estimar el coste anual de calefactores y secadoras', 'descubrir los aparatos que más consumen en casa', 'convertir kWh a coste con tu tarifa local'],
    faqs: [
      { q: '¿Cómo se calcula el coste?', a: 'Vatios × horas ÷ 1000 da los kWh diarios; multiplicando por tu tarifa obtienes el coste diario. El mes usa 30,44 días (la media anual real) y el año 365: para aparatos siempre encendidos, la línea anual es el número honesto.' },
      { q: '¿Dónde encuentro el vatiaje?', a: 'En la placa del aparato, el adaptador de corriente o la ficha técnica, normalmente marcado como W o entrada. La horquilla es enorme: una estufa de 1500 W cuesta por hora unas 30 veces más que un portátil de 50 W — justo la comparación que esta herramienta hace fácil.' },
      { q: '¿Qué tarifa debo introducir?', a: 'Tu tarifa marginal de una factura reciente, incluyendo el coste de distribución si se factura por kWh. La media residencial en EE. UU. ronda los 0,16-0,17 $/kWh, pero varía mucho según estado, plan y franja horaria.' },
      { q: '¿Cuenta el consumo en reposo?', a: 'Sí. Decodificadores, routers y televisores antiguos consumen 5-15 W sin parar: 10 W las 24 horas son unos 88 kWh al año, entre 22 y 31 € con una tarifa de 0,25-0,35 €/kWh. Pon 24 horas de uso para calcular el coste de un aparato siempre encendido.' },
    ],
    ui: {
      'chartTitle': 'Escalera de costes',
      'cmp.0': 'Al día',
      'cmp.1': 'Al mes',
      'cmp.2': 'Al año',
      'cmpseg.0': 'Coste',
      'errInvalid': 'Los valores no pueden ser negativos y las horas ≤ 24',
      'in.daily': 'Coste diario',
      'in.hours': 'Horas de uso al día',
      'in.kwh': 'Energía diaria',
      'in.monthly': 'Coste mensual',
      'in.rate': 'Precio de la luz',
      'in.watts': 'Potencia nominal',
      'in.yearly': 'Coste anual',
      'inSuffix.hours': 'h',
      'inSuffix.rate': '$/kWh',
      'inSuffix.watts': 'W',
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
      { q: 'Zählt der Standby-Verbrauch?', a: 'Ja. Receiver, Router und ältere Fernseher ziehen im Standby dauerhaft 5-15 W: 10 W rund um die Uhr sind etwa 88 kWh pro Jahr, bei 0,35 €/kWh rund 31 €. Ein 20 Jahre alter Kühlschrank (≈400 kWh/Jahr) gegen ein neues Gerät (≈120 kWh) getauscht spart bei diesem Preis fast 100 € im Jahr.' },
    ],
    ui: {
      'chartTitle': 'Kostenleiter',
      'cmp.0': 'Pro Tag',
      'cmp.1': 'Pro Monat',
      'cmp.2': 'Pro Jahr',
      'cmpseg.0': 'Kosten',
      'errInvalid': 'Werte dürfen nicht negativ sein und die Stunden ≤ 24',
      'in.daily': 'Kosten pro Tag',
      'in.hours': 'Stunden Nutzung pro Tag',
      'in.kwh': 'Energie pro Tag',
      'in.monthly': 'Kosten pro Monat',
      'in.rate': 'Strompreis',
      'in.watts': 'Nennleistung',
      'in.yearly': 'Kosten pro Jahr',
      'inSuffix.hours': 'h',
      'inSuffix.rate': '$/kWh',
      'inSuffix.watts': 'W',
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
