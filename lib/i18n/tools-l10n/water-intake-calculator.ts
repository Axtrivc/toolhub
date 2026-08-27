/**
 * water-intake-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = WaterIntakeCalculatorClient,自定义 client:
 * 含 metric/imperial 单位切换,通用 chrome 键走 COMMON_CALC_UI)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'Water (ml) ≈ 35 ml × weight (kg)   [ ≈ 0.5 oz × weight (lb) ]'

export const waterIntakeCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      litersPerDay: '升/天', cupsUnit: '杯', ozUnit: '盎司',
      metric: '公制 (cm / kg)',
      imperial: '英制 (ft/in / lb)',
      weight: '体重',
      activity: '运动量(分钟/天)',
      climate: '气候',
      climateNormal: '正常 / 温带',
      climateHot: '炎热 / 潮湿',
      outLiters: '每日需水量',
      gaugeTitle: '你的目标 vs 常规指导',
      zoneLow: '低于指导',
      zoneTypical: '常规充足',
      zoneActive: '活跃生活方式',
      zoneHigh: '高于常规',
      outCups: '以杯计(250ml)',
      outOz: '以盎司计(美制)',
      emptyState: '输入体重、运动量和气候即可估算每日需水量',
      note: '💧 一般建议:每公斤体重约 35 ml,运动或高温时需更多。个人需求因人而异。',
    },
    useCases: [
      '根据体重估算每日饮水量',
      '为运动或炎热天气调整补水',
      '孕期或哺乳期额外补水参考',
      '把咖啡、茶和食物计入水分摄入',
    ],
    formula: {
      formula: FORMULA,
      explain: '常见的补水基准:约为体重(磅)的一半,以盎司计——换算约每公斤体重 35 ml。计算器会在此基础上根据运动、炎热气候和孕期上调。',
    },
    faqs: [
      { q: '咖啡和茶算水分吗?', a: '算。尽管它们有轻微利尿作用,含咖啡因的饮品仍会带来净正水分。「咖啡不算水」的旧说法已被推翻。' },
      { q: '每天该喝多少水?', a: '常见基准是每公斤体重 30–35 ml——约合体重(磅)的一半,以盎司计。一个 70 kg 的成年人在未计入运动、炎热气候或孕期之前约为每天 2.45 L,本计算器会在这些基础上额外上调。' },
      { q: '水喝多了会有害吗?', a: '会。水中毒(低钠血症)会稀释血钠,可能带来危险,多见于耐力赛事。健康的肾脏每小时约能排出 0.8–1.0 L,所以应把饮水分散到全天,而不是一次大量灌入。' },
    ],
  },
  es: {
    ui: {
      litersPerDay: 'litros/día', cupsUnit: 'tazas', ozUnit: 'oz',
      metric: 'Métrico (cm / kg)',
      imperial: 'Imperial (ft/in / lb)',
      weight: 'Peso',
      activity: 'Ejercicio (min/día)',
      climate: 'Clima',
      climateNormal: 'Normal / templado',
      climateHot: 'Cálido / húmedo',
      outLiters: 'Necesidad diaria de agua',
      gaugeTitle: 'Tu objetivo frente a la guía',
      zoneLow: 'Por debajo de la guía',
      zoneTypical: 'Adecuado típico',
      zoneActive: 'Estilo de vida activo',
      zoneHigh: 'Por encima de lo típico',
      outCups: 'En tazas (250 ml)',
      outOz: 'En onzas (EE. UU.)',
      emptyState: 'Introduce peso, ejercicio y clima para estimar tu necesidad diaria de agua',
      note: '💧 Guía general: ~35 ml por kg de peso corporal, más con ejercicio o calor. Las necesidades individuales varían.',
    },
    useCases: [
      'estimar cuánta agua beber según tu peso',
      'ajustar la hidratación para el ejercicio o el calor',
      'referencia de hidratación extra en embarazo o lactancia',
      'contar café, té y alimentos en tu ingesta de agua',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Una referencia común de hidratación: aproximadamente la mitad de tu peso corporal en libras, en onzas al día — unas 35 ml por kg. La calculadora ajusta esta base al alza según ejercicio, clima caluroso y embarazo.',
    },
    faqs: [
      { q: '¿Cuentan el café y el té?', a: 'Sí. Aunque son diuréticos suaves, las bebidas con cafeína siguen aportando un balance hídrico neto positivo. La vieja idea de que el café «no cuenta» está desmentida.' },
      { q: '¿Cuánta agua debo beber al día?', a: 'Una base común es 30–35 ml por kg de peso corporal — aproximadamente la mitad de tu peso en libras, en onzas. Un adulto de 70 kg llega a unos 2,45 L diarios antes de ajustar por ejercicio, calor o embarazo, que esta calculadora suma después.' },
      { q: '¿Se puede beber demasiada agua?', a: 'Sí. La sobrehidratación (hiponatremia) diluye el sodio de la sangre y puede ser peligrosa, sobre todo en pruebas de resistencia. Los riñones sanos eliminan unos 0,8–1,0 L por hora, reparte la ingesta a lo largo del día en lugar de beber mucho de golpe.' },
    ],
  },
  de: {
    ui: {
      litersPerDay: 'Liter/Tag', cupsUnit: 'Tassen', ozUnit: 'oz',
      metric: 'Metrisch (cm / kg)',
      imperial: 'Imperial (ft/in / lb)',
      weight: 'Gewicht',
      activity: 'Bewegung (Min./Tag)',
      climate: 'Klima',
      climateNormal: 'Normal / gemäßigt',
      climateHot: 'Heiß / schwül',
      outLiters: 'Täglicher Wasserbedarf',
      gaugeTitle: 'Dein Ziel vs. Empfehlung',
      zoneLow: 'Unter der Empfehlung',
      zoneTypical: 'Üblich ausreichend',
      zoneActive: 'Aktiver Lebensstil',
      zoneHigh: 'Über dem Üblichen',
      outCups: 'In Tassen (250 ml)',
      outOz: 'In Unzen (US)',
      emptyState: 'Gib Gewicht, Bewegung und Klima ein, um deinen täglichen Wasserbedarf zu schätzen',
      note: '💧 Richtwert: ~35 ml pro kg Körpergewicht, mehr bei Sport oder Hitze. Der Einzelbedarf variiert.',
    },
    useCases: [
      'abschätzen, wie viel Wasser du nach Körpergewicht trinken solltest',
      'die Flüssigkeitsaufnahme für Sport oder Hitze anpassen',
      'Referenz für Mehrbedarf in Schwangerschaft und Stillzeit',
      'Kaffee, Tee und Lebensmittel in die Wasserbilanz einbeziehen',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Eine gängige Trinkregel: etwa die Hälfte deines Körpergewichts in Pfund, in Unzen pro Tag — rund 35 ml pro kg. Der Rechner hebt diesen Basiswert für Sport, heißes Klima und Schwangerschaft an.',
    },
    faqs: [
      { q: 'Zählen Kaffee und Tee?', a: 'Ja. Obwohl sie leicht harntreibend wirken, liefern koffeinhaltige Getränke netto positiven Wasseranteil. Die alte Behauptung, Kaffee «zähle nicht», ist widerlegt.' },
      { q: 'Wie viel Wasser sollte ich pro Tag trinken?', a: 'Ein gängiger Richtwert sind 30–35 ml pro kg Körpergewicht — etwa die Hälfte deines Gewichts in Pfund, in Unzen. Ein 70-kg-Erwachsener kommt auf etwa 2,45 L pro Tag, bevor Sport, Hitze oder Schwangerschaft angerechnet werden, die dieser Rechner zusätzlich aufschlägt.' },
      { q: 'Kann man zu viel Wasser trinken?', a: 'Ja. Überwässerung (Hyponatriämie) verdünnt das Natrium im Blut und kann gefährlich sein, meist bei Ausdauerwettkämpfen. Gesunde Nieren scheiden etwa 0,8–1,0 L pro Stunde aus, also verteile die Aufnahme über den Tag statt viel auf einmal zu trinken.' },
    ],
  },
}
