/**
 * water-intake-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = WaterIntakeCalculatorClient,自定义 client:
 * 含 metric/imperial 单位切换,通用 chrome 键走 COMMON_CALC_UI)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'Water (ml) ≈ 35 ml × weight (kg)   [ ≈ 0.5 oz × weight (lb) ]'

export const waterIntakeCalculatorL10n: ToolL10n = {

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
      explain: 'Una referencia común de hidratación: aproximadamente la mitad de tu peso corporal en libras, en onzas al día — unos 35 ml por kg. La calculadora ajusta esta base al alza según ejercicio, clima caluroso y embarazo.',
    },
    faqs: [
      { q: '¿Cuentan el café y el té?', a: 'Sí. Aunque son diuréticos suaves, las bebidas con cafeína siguen aportando un balance hídrico neto positivo. La vieja idea de que el café «no cuenta» está desmentida.' },
      { q: '¿Cuánta agua debo beber al día?', a: 'Una base común es 30–35 ml por kg de peso corporal — aproximadamente la mitad de tu peso en libras, en onzas. Un adulto de 70 kg llega a unos 2,45 L diarios antes de ajustar por ejercicio, calor o embarazo, que esta calculadora suma después.' },
      { q: '¿Se puede beber demasiada agua?', a: 'Sí. La sobrehidratación (hiponatremia) diluye el sodio de la sangre y puede ser peligrosa, sobre todo en pruebas de resistencia. Los riñones sanos eliminan unos 0,8–1,0 L por hora, así que reparte la ingesta a lo largo del día en lugar de beber mucho de golpe.' },
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
      { q: 'Zählen Kaffee und Tee?', a: 'Ja. Obwohl sie leicht harntreibend wirken, liefern koffeinhaltige Getränke netto positiven Wasseranteil. Die alte Behauptung, Kaffee „zähle nicht“, ist widerlegt.' },
      { q: 'Wie viel Wasser sollte ich pro Tag trinken?', a: 'Ein gängiger Richtwert sind 30–35 ml pro kg Körpergewicht — etwa die Hälfte deines Gewichts in Pfund, in Unzen. Ein 70-kg-Erwachsener kommt auf etwa 2,45 L pro Tag, bevor Sport, Hitze oder Schwangerschaft angerechnet werden, die dieser Rechner zusätzlich aufschlägt.' },
      { q: 'Kann man zu viel Wasser trinken?', a: 'Ja. Überwässerung (Hyponatriämie) verdünnt das Natrium im Blut und kann gefährlich sein, meist bei Ausdauerwettkämpfen. Gesunde Nieren scheiden etwa 0,8–1,0 L pro Stunde aus, also verteile die Aufnahme über den Tag statt viel auf einmal zu trinken.' },
    ],
  },
}
