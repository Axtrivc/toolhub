/**
 * flow-rate-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const flowRateConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '🚰 管道和泵的流量。用于管道、暖通和灌溉。',
      'unit.cfm': 'ft³/分 (CFM)',
      'unit.gpm': '加仑/分 美 (gpm)',
      'unit.gps': '加仑/秒 美',
      'unit.lh': '升/小时 (L/h)',
      'unit.lmin': '升/分 (L/min)',
      'unit.ls': '升/秒 (L/s)',
      'unit.m3h': 'm³/小时',
      'unit.m3s': 'm³/秒',
    },
    useCases: [
      '计算管道和水泵的流量',
      '估算淋浴喷头或花园水管的水流',
      '评估暖通空调系统的送风量(CFM)',
    ],
    faqs: [
      { q: '暖通里的 CFM 是什么?', a: 'CFM(立方英尺每分钟)用来衡量供暖制冷系统中的空气流量。一台典型的中央空调风量约为 1000–2000 CFM。CFM 越高,空气循环越快。' },
    ],
  },
  es: {
    ui: {
      'note': '🚰 Caudales de tuberías y bombas. Usado en plomería, climatización y riego.',
      'unit.cfm': 'ft³/min (CFM)',
      'unit.gpm': 'Galones/min EE. UU. (gpm)',
      'unit.gps': 'Galones/seg EE. UU.',
      'unit.lh': 'Litros/hora (L/h)',
      'unit.lmin': 'Litros/min (L/min)',
      'unit.ls': 'Litros/seg (L/s)',
      'unit.m3h': 'm³/hora',
      'unit.m3s': 'm³/seg',
    },
    useCases: [
      'calcular el caudal de tuberías y bombas',
      'estimar el flujo de una ducha o manguera de jardín',
      'evaluar el caudal de aire (CFM) de un sistema de climatización',
    ],
    faqs: [
      { q: '¿Qué es CFM en climatización?', a: 'CFM (pies cúbicos por minuto) mide el flujo de aire en sistemas de calefacción y refrigeración. Un aire acondicionado central típico mueve 1000-2000 CFM. Cuanto mayor sea el CFM, más rápido circula el aire.' },
    ],
  },
  de: {
    ui: {
      'note': '🚰 Rohr- und Pumpen-Durchflussmengen. Für Sanitär, Klima und Bewässerung.',
      'unit.cfm': 'ft³/Min (CFM)',
      'unit.gpm': 'Gallonen/Min US (gpm)',
      'unit.gps': 'Gallonen/Sek US',
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
