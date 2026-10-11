/**
 * flow-rate-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + ui(note 与单位标签;交互客户端 = makeUnitConverter)
 */
import type { ToolL10n } from '../tool-l10n'

export const flowRateConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '🚰 管道和水泵的流量。常用于水暖、暖通和灌溉。',
      'unit.cfm': '立方英尺/分 (CFM)',
      'unit.gpm': '美制加仑/分 (gpm)',
      'unit.gps': '美制加仑/秒',
      'unit.lh': '升/小时 (L/h)',
      'unit.lmin': '升/分 (L/min)',
      'unit.ls': '升/秒 (L/s)',
      'unit.m3h': '立方米/小时',
      'unit.m3s': '立方米/秒',
    },
    useCases: [
      '计算管道和水泵的流量',
      '估算淋浴喷头或花园水管的流量',
      '评估暖通空调系统的送风量(CFM)',
    ],
    faqs: [
      { q: '暖通里的 CFM 是什么?', a: 'CFM(立方英尺每分钟)用来衡量供暖制冷系统中的空气流量。一台典型的中央空调风量约为 1000–2000 CFM。CFM 越高,空气循环越快。' },
    ],
  },
  es: {
    ui: {
      'note': '🚰 Caudales de tuberías y bombas. Se usan en fontanería, climatización y riego.',
      'unit.cfm': 'ft³/min (CFM)',
      'unit.gpm': 'Galones EE. UU./min (gpm)',
      'unit.gps': 'Galones EE. UU./seg',
      'unit.lh': 'Litros/hora (L/h)',
      'unit.lmin': 'Litros/min (L/min)',
      'unit.ls': 'Litros/seg (L/s)',
      'unit.m3h': 'm³/hora',
      'unit.m3s': 'm³/seg',
    },
    useCases: [
      'calcular el caudal de tuberías y bombas',
      'estimar el caudal de una ducha o manguera de jardín',
      'evaluar el caudal de aire (CFM) de un sistema de climatización',
    ],
    faqs: [
      { q: '¿Qué es CFM en climatización?', a: 'CFM (pies cúbicos por minuto) mide el flujo de aire en sistemas de calefacción y refrigeración. Un aire acondicionado central típico mueve 1000–2000 CFM. Cuanto mayor sea el CFM, más rápido circula el aire.' },
    ],
  },
  de: {
    ui: {
      'note': '🚰 Rohr- und Pumpen-Durchflussmengen. Für Sanitär, Klima und Bewässerung.',
      'unit.cfm': 'ft³/Min (CFM)',
      'unit.gpm': 'US-Gallonen/Min (gpm)',
      'unit.gps': 'US-Gallonen/Sek',
      'unit.lh': 'Liter/Stunde (L/h)',
      'unit.lmin': 'Liter/Min (L/min)',
      'unit.ls': 'Liter/Sek (L/s)',
      'unit.m3h': 'm³/Stunde',
      'unit.m3s': 'm³/Sek',
    },
    useCases: [
      'Durchflussmengen von Rohren und Pumpen berechnen',
      'den Wasserfluss von Duschköpfen oder Gartenschläuchen abschätzen',
      'den Luftdurchsatz (CFM) einer Klimaanlage einschätzen',
    ],
    faqs: [
      { q: 'Was ist CFM in der Klimatechnik?', a: 'CFM (Kubikfuß pro Minute) misst den Luftstrom in Heiz- und Kühlsystemen. Eine typische zentrale Klimaanlage bewegt 1000–2000 CFM. Je höher der CFM-Wert, desto schneller zirkuliert die Luft.' },
    ],
  },
}
