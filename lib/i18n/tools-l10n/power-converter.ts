/**
 * power-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + ui(note 与单位标签;交互客户端 = makeUnitConverter)
 */
import type { ToolL10n } from '../tool-l10n'

export const powerConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '⚡ Potencia de motor en hp, eléctrica en kW, grandes plantas en MW. 1 hp ≈ 746 W.',
      'unit.bs': 'BTU/seg',
      'unit.cal-s': 'calorías/seg (cal/s)',
      'unit.gigawatt': 'Gigavatios (GW)',
      'unit.hp': 'Caballos de fuerza (hp)',
      'unit.hp-metric': 'Caballos de vapor (CV)',
      'unit.kw': 'Kilovatios (kW)',
      'unit.milliwatt': 'Miliwatios (mW)',
      'unit.mw': 'Megavatios (MW)',
      'unit.w': 'Vatios (W)',
    },
    useCases: [
      'comparar caballos de fuerza y kilovatios del motor de un coche',
      'pasar el vatiaje de un electrodoméstico a kilovatios',
      'evaluar la potencia en BTU de equipos de calefacción y refrigeración',
    ],
    faqs: [
      { q: '¿Por qué hay dos caballos de fuerza?', a: 'El caballo de fuerza mecánico (hp, ~746 W) se originó con James Watt. El caballo de vapor (CV, ~735 W) es el equivalente europeo. Los coches vendidos en Europa se anuncian en CV; los de EE. UU., en hp. La diferencia es de ~1,4 %.' },
      { q: '¿Cómo paso de BTU a vatios?', a: '1 W equivale a 3,412 BTU/h. Un split de 3000 W ronda los 10.000 BTU/h y suele bastar para una sala de 25–30 m²; un aire acondicionado portátil de 2000 W equivale a ~6800 BTU/h.' },
      { q: '¿Por qué la ficha técnica indica kW y no CV?', a: 'La normativa de la UE exige expresar la potencia en kW; el CV sigue como referencia comercial. 1 kW = 1,3596 CV, así que 110 kW son unos 150 CV. Respecto al hp estadounidense (~746 W), la diferencia es de ~1,4 %.' },
      { q: '¿Qué diferencia hay entre kW y kWh?', a: 'kW mide potencia y kWh energía (potencia × tiempo). Un calefactor de 2 kW encendido 3 h consume 6 kWh; con la luz a ~0,25 €/kWh, unos 1,50 €. En coches eléctricos, la potencia de carga se da en kW y la capacidad de la batería en kWh.' },
    ],
  },
  de: {
    ui: {
      'note': '⚡ Motorleistung in hp, elektrisch in kW, Großkraftwerke in MW. 1 hp ≈ 746 W.',
      'unit.bs': 'BTU/Sek',
      'unit.cal-s': 'Kalorien/Sek (cal/s)',
      'unit.gigawatt': 'Gigawatt (GW)',
      'unit.hp': 'Pferdestärke (hp)',
      'unit.hp-metric': 'Metrische Pferdestärke (PS)',
      'unit.kw': 'Kilowatt (kW)',
      'unit.milliwatt': 'Milliwatt (mW)',
      'unit.mw': 'Megawatt (MW)',
      'unit.w': 'Watt (W)',
    },
    useCases: [
      'Pferdestärken und Kilowatt eines Automotors vergleichen',
      'die Wattzahl eines Geräts in Kilowatt umrechnen',
      'die BTU-Leistung von Heiz- und Kühlgeräten einschätzen',
    ],
    faqs: [
      { q: 'Warum gibt es zwei Pferdestärken?', a: 'Die mechanische Pferdestärke (hp, ~746 W) geht auf James Watt zurück. Die metrische Pferdestärke (PS, ~735 W) ist das europäische Äquivalent. In Europa verkaufte Autos werden in PS angegeben, US-Autos in hp. Der Unterschied liegt bei ~1,4 %.' },
      { q: 'Warum steht im Fahrzeugschein kW statt PS?', a: 'In EU-Dokumenten ist die Leistung in kW vorgeschrieben; PS bleibt die umgangssprachliche Referenz. 1 kW = 1,35962 PS — 110 kW sind rund 150 PS. Gegenüber der mechanischen hp (~746 W) beträgt der Unterschied ~1,4 %.' },
      { q: 'Wie rechne ich BTU in Watt um?', a: '1 W entspricht 3,412 BTU/h. Ein Klimagerät mit 9000 BTU/h entspricht rund 2,6 kW Kühlleistung und reicht für ein Zimmer von 20–25 m²; die 12.000-BTU-Klasse entspricht ~3,5 kW.' },
      { q: 'Was ist der Unterschied zwischen kW und kWh?', a: 'kW ist Leistung, kWh ist Arbeit (Leistung × Zeit). Eine 2-kW-Heizung, 3 Stunden laufen gelassen, verbraucht 6 kWh — beim deutschen Strompreis von ~0,35–0,40 €/kWh also gut 2 €. Bei E-Autos: Ladeleistung in kW, Akkukapazität in kWh.' },
    ],
  },
}
