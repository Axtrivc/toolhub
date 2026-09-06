/**
 * energy-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const energyConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '⚡ 食物标示的「卡路里」其实是千卡 (kcal)。1 千卡 = 4.184 千焦。',
      'unit.btu': '英热单位 (BTU)',
      'unit.cal': '卡路里 (cal)',
      'unit.ev': '电子伏特 (eV)',
      'unit.ftlbf': '英尺·磅力 (ft·lbf)',
      'unit.j': '焦耳 (J)',
      'unit.kcal': '千卡 (kcal)',
      'unit.kj': '千焦 (kJ)',
      'unit.kwh': '千瓦时 (kWh)',
      'unit.mj': '兆焦 (MJ)',
      'unit.wh': '瓦时 (Wh)',
    },
    useCases: [
      '读懂电费账单上的 kWh 用量',
      '在食物卡路里和大卡之间换算',
      '计算家用电器的耗电量(焦耳/kWh)',
    ],
    faqs: [
      { q: '为什么电费账单用的是 kWh?', a: '瓦特是焦耳/秒,乘以小时就得到总能量。1 kWh = 以 1000 瓦功率运行 1 小时所消耗的能量。这是衡量家庭用电量的常用单位。' },
      { q: '食品标签上的"卡"到底是哪个单位?', a: '营养学说的卡路里其实是千卡:1 kcal = 4.184 kJ = 1000 cal。一碗 200 g 的米饭约 232 kcal,即约 970 kJ——对不上就说明单位用混了。' },
      { q: '空调铭牌上的 BTU 是什么?', a: '1 BTU ≈ 1055 J,是把 1 磅水升高 1°F 所需的能量。空调标注的是 BTU/h:12000 BTU/h ≈ 3.5 kW 制冷量,即市售"1.5 匹"机型。BTU 是能量,BTU/h 才是功率,换算时别混。' },
      { q: '怎么估算电器电费?', a: '功率 × 小时 × 电价:1500 W 暖风机开 1 小时 = 1.5 度(1.5 kWh),按 0.55 元/度约 0.83 元;每天 8 小时,一个月约 200 元。先把功率换算成 kWh 最直观。' },
    ],
  },
  es: {
    ui: {
      'note': '⚡ Las «Calorías» de los alimentos son en realidad kilocalorías (kcal). 1 kcal = 4,184 kJ.',
      'unit.btu': 'Unidades térmicas británicas (BTU)',
      'unit.cal': 'Calorías (cal)',
      'unit.ev': 'Electronvoltios (eV)',
      'unit.ftlbf': 'Libras-pie (ft·lbf)',
      'unit.j': 'Julios (J)',
      'unit.kcal': 'Kilocalorías (kcal)',
      'unit.kj': 'Kilojulios (kJ)',
      'unit.kwh': 'Kilovatio-hora (kWh)',
      'unit.mj': 'Megajulios (MJ)',
      'unit.wh': 'Vatio-hora (Wh)',
    },
    useCases: [
      'entender el consumo en kWh de la factura eléctrica',
      'convertir entre calorías pequeñas y kilocalorías de alimentos',
      'calcular el consumo de electrodomésticos (julios / kWh)',
    ],
    faqs: [
      { q: '¿Por qué mi factura eléctrica usa kWh?', a: 'Un vatio son julios por segundo, así que multiplicar por horas da la energía total. 1 kWh = usar 1.000 vatios durante 1 hora. Es una unidad práctica para el consumo doméstico.' },
      { q: '¿Qué son las «calorías» de la etiqueta?', a: 'En nutrición cada «caloría» es una kilocaloría: 1 kcal = 4,184 kJ = 1.000 cal. Un plato de 500 kcal son 2.092 kJ; por eso muchas etiquetas de Latinoamérica muestran ambas unidades.' },
      { q: '¿Qué significa el BTU de un aire acondicionado?', a: '1 BTU ≈ 1.055 J, la energía para subir 1 °F la temperatura de una libra de agua. Los aires se anuncian en BTU/h: 12.000 BTU/h ≈ 3,5 kW de potencia frigorífica. BTU es energía; BTU/h, potencia — no los mezcles al convertir.' },
      { q: '¿Cómo estimo el coste de un aparato?', a: 'Potencia × horas × precio del kWh: un calefactor de 1.500 W encendido 8 h gasta 12 kWh; a 0,15 €/kWh son 1,80 € al día, unos 54 € al mes. Convierte primero a kWh y la cuenta es directa.' },
    ],
  },
  de: {
    ui: {
      'note': '⚡ Nahrungs-«Kalorien» sind eigentlich Kilokalorien (kcal). 1 kcal = 4,184 kJ.',
      'unit.btu': 'British Thermal Units (BTU)',
      'unit.cal': 'Kalorien (cal)',
      'unit.ev': 'Elektronenvolt (eV)',
      'unit.ftlbf': 'Fuß-Pfund (ft·lbf)',
      'unit.j': 'Joule (J)',
      'unit.kcal': 'Kilokalorien (kcal)',
      'unit.kj': 'Kilojoule (kJ)',
      'unit.kwh': 'Kilowattstunden (kWh)',
      'unit.mj': 'Megajoule (MJ)',
      'unit.wh': 'Wattstunden (Wh)',
    },
    useCases: [
      'den kWh-Verbrauch auf der Stromrechnung verstehen',
      'zwischen kleinen Kalorien und Lebensmittelskalorien umrechnen',
      'den Verbrauch von Haushaltsgeräten berechnen (Joule / kWh)',
    ],
    faqs: [
      { q: 'Warum verwendet meine Stromrechnung kWh?', a: 'Ein Watt sind Joule pro Sekunde, daher ergibt die Multiplikation mit Stunden die Gesamtenergie. 1 kWh = 1.000 Watt über 1 Stunde lang. Das ist eine praktische Einheit für den Haushaltsstrom.' },
      { q: 'Was sind die «Kalorien» auf der Verpackung?', a: 'In der Nährwerttabelle ist jede Kalorie eine Kilokalorie: 1 kcal = 4,184 kJ = 1.000 cal. 500 kcal entsprechen 2.092 kJ — deutsche Etiketten müssen beides ausweisen.' },
      { q: 'Was bedeutet BTU bei Klimaanlagen?', a: '1 BTU ≈ 1.055 J, die Energie, um ein Pfund Wasser um 1 °F zu erwärmen. Klimageräte geben BTU/h an: 12.000 BTU/h sind rund 3,5 kW Kühlleistung. BTU ist Energie, BTU/h Leistung — beim Umrechnen nicht vermischen.' },
      { q: 'Wie schätze ich die Stromkosten eines Geräts?', a: 'Leistung × Stunden × Arbeitspreis: Ein 2.000-W-Heizlüfter kostet bei 40 ct/kWh nach 5 Stunden schon 4 €. Ein alter 60-W-Fernseher (5 h/Tag) verbraucht im Jahr 109 kWh — rund 44 €. Erst in kWh umrechnen, dann rechnen.' },
    ],
  },
}
