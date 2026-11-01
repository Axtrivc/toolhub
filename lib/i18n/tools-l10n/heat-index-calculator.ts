/**
 * heat-index-calculator 本地化 bundle —— zh / es / de(B11 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HeatIndexCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['mirar la sensación térmica antes de salir para dosificar ejercicio e hidratación', 'comparar con los niveles de riesgo de golpe de calor en trabajo y entrenamiento al aire libre', 'entender por qué la humedad mata más que el termómetro', 'contrastar calor seco (desierto) y húmedo (trópico)'],
    faqs: [
      { q: '¿Qué fórmula usa?', a: 'La regresión de Rothfusz del NWS: HI = −42,379 + 2,04901523T + 10,14333127R − 0,22475541TR − 0,00683783T² − 0,05481717R² + 0,00122874T²R + 0,00085282TR² − 0,00000199T²R² (T en °F, R en %), con los ajustes de 1984 para humedad baja/alta y la fórmula simple por debajo de 80 °F.' },
      { q: '¿Por qué la humedad hace que se sienta más calor?', a: 'El sudor enfría al evaporarse; con humedad alta esa evaporación se estanca y el cuerpo pierde su principal vía de refrigeración. El índice de calor pliega ese efecto en una sola temperatura aparente.' },
      { q: '¿Para qué condiciones vale el índice?', a: 'El NWS lo considera significativo desde unos 80 °F y 40% de humedad. Por debajo la fórmula sigue calculando, pero el termómetro basta — la herramienta usa ahí la fórmula oficial de respaldo.' },
      { q: '¿Cuáles son los niveles de riesgo?', a: '80–90 °F precaución (fatiga con exposición larga), 90–103 °F precaución extrema (posible insolación y calambres), 103–125 °F peligro (agotamiento probable), por encima de 125 °F peligro extremo (golpe de calor inminente). El sol directo añade hasta 15 °F; ropa ligera, sombra y agua lo empujan todo a tu favor.' },
    ],
    ui: {
      'in.temp': 'Temperatura del aire',
      'in.tUnit': 'Unidad de temperatura',
      'in.rh': 'Humedad relativa',
      'opt.tUnit.F': '°F',
      'opt.tUnit.C': '°C',
      'out.hi': 'Índice de calor (sensación)',
      'out.hiAlt': 'En la otra unidad',
      'out.diff': 'Más caliente que el termómetro',
      'out.risk': 'Nivel de riesgo',
      'chartTitle': 'Índice de calor según la humedad a tu temperatura',
      'line.hi': 'Índice de calor',
      'line.air': 'Temperatura real',
      'preset.0': 'Ola de calor: 92 °F, 70%',
      'preset.1': 'Desierto seco: 105 °F, 15%',
      'preset.2': 'Trópico: 88 °F, 90%',
      'preset.3': 'Europa: 34 °C, 55%',
      'note': '🔥 Regresión de Rothfusz (NWS) con los ajustes de 1984 para humedad baja/alta y la fórmula simple por debajo de 80 °F. El sol directo añade hasta 15 °F. El índice está definido para T ≥ 80 °F y HR ≥ 40%; por debajo, el termómetro ya refleja la sensación.',
      'errInput': 'Temperatura numérica y humedad 0-100%',
      'risk.extreme': 'Peligro extremo — golpe de calor inminente',
      'risk.danger': 'Peligro — calambres/agotamiento por calor probables',
      'risk.extremeCaution': 'Precaución extrema — posible insolación',
      'risk.caution': 'Precaución — fatiga posible con exposición prolongada',
      'risk.below': 'Por debajo del umbral de 80 °F',
    },
  },
  de: {
    useCases: ['vor dem Rausgehen die gefühlte Temperatur checken und Belastung dosieren', 'Hitzerisiko-Stufen für Arbeit und Training im Freien abgleichen', 'verstehen, warum Hitze plus Feuchte gefährlicher ist als das Thermometer allein', 'trockene Wüstenhitze gegen schwüle Tropenluft vergleichen'],
    faqs: [
      { q: 'Welche Formel steckt dahinter?', a: 'Die Rothfusz-Regression des US-Wetterdiensts: HI = −42,379 + 2,04901523T + 10,14333127R − 0,22475541TR − 0,00683783T² − 0,05481717R² + 0,00122874T²R + 0,00085282TR² − 0,00000199T²R² (T in °F, R in %), mit den Korrekturen von 1984 für niedrige/hohe Feuchte und der einfachen Formel unter 80 °F.' },
      { q: 'Warum fühlt sich Feuchte heißer an?', a: 'Schweiß kühlt durch Verdunstung; bei hoher Luftfeuchtung stockt sie und der Körper verliert seinen Hauptkühlkanal. Der Hitzeindex faltet diesen Effekt in eine einzige gefühlte Temperatur.' },
      { q: 'Für welche Bedingungen gilt der Index?', a: 'Der NWS hält ihn ab etwa 80 °F und 40% relativer Feuchte für aussagekräftig. Darunter rechnet die Formel zwar weiter, aber das Thermometer genügt — dort nutzt das Tool die offizielle Ersatzformel.' },
      { q: 'Welche Risikostufen gibt es?', a: '80–90 °F Vorsicht (Erschöpfung bei langer Belastung), 90–103 °F erhöhte Vorsicht (Hitzekrämpfe, Sonnenstich möglich), 103–125 °F Gefahr (Hitzerschöpfung wahrscheinlich), über 125 °F extreme Gefahr (Hitzschlag unmittelbar drohend). Direkte Sonne fügt bis zu 15 °F hinzu; leichte Kleidung, Schatten und Wasser schieben alles zu deinen Gunsten.' },
    ],
    ui: {
      'in.temp': 'Lufttemperatur',
      'in.tUnit': 'Temperatureinheit',
      'in.rh': 'Relative Luftfeuchtigkeit',
      'opt.tUnit.F': '°F',
      'opt.tUnit.C': '°C',
      'out.hi': 'Hitzeindex (gefühlte Temperatur)',
      'out.hiAlt': 'In der anderen Einheit',
      'out.diff': 'Heißer als das Thermometer',
      'out.risk': 'Risikostufe',
      'chartTitle': 'Hitzeindex je Luftfeuchtigkeit bei deiner Temperatur',
      'line.hi': 'Hitzeindex',
      'line.air': 'Tatsächliche Temperatur',
      'preset.0': 'Hitze im Mittleren Westen: 92 °F, 70%',
      'preset.1': 'Trockene Wüste: 105 °F, 15%',
      'preset.2': 'Tropen: 88 °F, 90%',
      'preset.3': 'Europa: 34 °C, 55%',
      'note': '🔥 Rothfusz-Regression des NWS mit den Korrekturen von 1984 und dem einfachen Formel-Rückgriff unter 80 °F. Direkte Sonne fügt bis zu 15 °F hinzu. Definiert für T ≥ 80 °F und RH ≥ 40%; darunter liegt das Thermometer nahe am Gefühl.',
      'errInput': 'Numerische Temperatur und Feuchte 0-100% eingeben',
      'risk.extreme': 'Extreme Gefahr — Hitzschlag unmittelbar drohend',
      'risk.danger': 'Gefahr — Hitzekrämpfe/-erschöpfung wahrscheinlich',
      'risk.extremeCaution': 'Erhöhte Vorsicht — Sonnenstich möglich',
      'risk.caution': 'Vorsicht — Erschöpfung bei langer Belastung möglich',
      'risk.below': 'Unter der 80-°F-Vorsichtsschwelle',
    },
  },
}
