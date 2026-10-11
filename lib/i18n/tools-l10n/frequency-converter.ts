/**
 * frequency-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = makeUnitConverter,不 locale-aware,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const frequencyConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '📡 CPU 时钟用 GHz,音频用 Hz–kHz,转速用 RPM。',
      'unit.deg-s': '度/秒 (°/s)',
      'unit.ghz': '吉赫 (GHz)',
      'unit.hz': '赫兹 (Hz)',
      'unit.khz': '千赫 (kHz)',
      'unit.mhz': '兆赫 (MHz)',
      'unit.rad-s': '弧度/秒 (rad/s)',
      'unit.rpm': '转/分 (RPM)',
    },
    useCases: [
      '把电机转速(RPM)换算成赫兹',
      '在无线电频率单位之间互转(kHz/MHz/GHz)',
      '换算心率(次/分 → Hz)',
      '换算 kHz 与 MHz 之间的电台频率',
    ],
    faqs: [
      { q: '怎样把 RPM 换算成 Hz?', a: '用 RPM 除以 60。一台 3600 RPM 的电机运行在 60 Hz。这就是为什么美国的交流电是 60 Hz——发电机转速为 3600 RPM。' },
      { q: '为什么欧洲电网是 50 Hz,美国是 60 Hz?', a: '历史选择,并无绝对优劣:欧洲和中国(220-230V)用 50 Hz,美国(120V)用 60 Hz。50 Hz 对应发电机 3000 RPM,60 Hz 对应 3600 RPM。跨国带电器前先看铭牌是否兼容宽频。' },
      { q: 'rad/s 和 Hz 怎么互转?', a: '1 Hz = 2π rad/s ≈ 6.283 rad/s,例如 60 Hz 对应约 377 rad/s。工程里转角量用 rad/s、周期量用 Hz,这个 2π 换算在电机和振动分析里天天用到。' },
      { q: '人耳能听到什么频率范围?', a: '大约 20 Hz 到 20 kHz(20,000 Hz)。低音炮下限常做到 20-30 Hz,CD 音质上限 22.05 kHz;随年龄增长高频听力先退化,40 岁后很多人已听不到 15 kHz 以上。' },
    ],
  },
  es: {
    ui: {
      'note': '📡 Relojes de CPU en GHz, audio en Hz-kHz, rotación en RPM.',
      'unit.deg-s': 'Grados/segundo (°/s)',
      'unit.ghz': 'Gigahercios (GHz)',
      'unit.hz': 'Hercios (Hz)',
      'unit.khz': 'Kilohercios (kHz)',
      'unit.mhz': 'Megahercios (MHz)',
      'unit.rad-s': 'Radianes/segundo (rad/s)',
      'unit.rpm': 'Revoluciones/min (RPM)',
    },
    useCases: [
      'convertir rpm de motor a hercios',
      'alternar entre unidades de radio (kHz / MHz / GHz)',
      'convertir frecuencia cardiaca (latidos/min → Hz)',
      'convertir la frecuencia de radio entre kHz y MHz',
    ],
    faqs: [
      { q: '¿Cómo convierto RPM a Hz?', a: 'Divide las RPM entre 60. Un motor que gira a 3.600 RPM funciona a 60 Hz. Por eso la corriente alterna en EE. UU. es de 60 Hz — los generadores giran a 3.600 RPM.' },
      { q: '¿Por qué Europa usa 50 Hz y EE. UU. 60 Hz?', a: 'Una elección histórica sin ventaja clara: Europa y buena parte de Latinoamérica (220-230 V) usan 50 Hz, EE. UU. (120 V) usa 60 Hz. Con 50 Hz los generadores giran a 3.000 RPM y con 60 Hz a 3.600. Antes de enchufar un aparato en el extranjero, mira si la placa admite ambas frecuencias.' },
      { q: '¿Cómo convierto rad/s y Hz?', a: '1 Hz = 2π rad/s ≈ 6,283 rad/s; por ejemplo, 60 Hz equivalen a unos 377 rad/s. En ingeniería se usan rad/s para magnitudes angulares y Hz para las cíclicas; esta conversión aparece constantemente en motores y análisis de vibraciones.' },
      { q: '¿Qué frecuencias escucha el oído humano?', a: 'Aproximadamente de 20 Hz a 20 kHz (20.000 Hz). Los subwoofers suelen bajar hasta 20-30 Hz y el CD llega a 22,05 kHz; con la edad se pierde primero la audición aguda y a los 40 muchos ya no oyen por encima de 15 kHz.' },
    ],
  },
  de: {
    ui: {
      'note': '📡 CPU-Takte in GHz, Audio in Hz–kHz, Drehung in RPM.',
      'unit.deg-s': 'Grad/Sekunde (°/s)',
      'unit.ghz': 'Gigahertz (GHz)',
      'unit.hz': 'Hertz (Hz)',
      'unit.khz': 'Kilohertz (kHz)',
      'unit.mhz': 'Megahertz (MHz)',
      'unit.rad-s': 'Radiant/Sekunde (rad/s)',
      'unit.rpm': 'Umdrehungen/Min (RPM)',
    },
    useCases: [
      'Motordrehzahl (RPM) in Hertz umrechnen',
      'zwischen Funkfrequenzeinheiten wechseln (kHz / MHz / GHz)',
      'Herzfrequenz umrechnen (Schläge/Min → Hz)',
      'Radiofrequenzen zwischen kHz und MHz umrechnen',
    ],
    faqs: [
      { q: 'Wie rechne ich RPM in Hz um?', a: 'Teile die RPM durch 60. Ein Motor mit 3.600 RPM läuft auf 60 Hz. Deshalb hat der US-Wechselstrom 60 Hz — die Generatoren drehen sich mit 3.600 RPM.' },
      { q: 'Warum hat Europa 50 Hz und die USA 60 Hz?', a: 'Eine historische Wahl ohne klaren Vorteil: Europa und auch China (220-230 V) nutzen 50 Hz, die USA (120 V) 60 Hz. Bei 50 Hz drehen Generatoren 3.000 RPM, bei 60 Hz 3.600. Vor Auslandsreisen aufs Typenschild schauen, ob das Gerät beide Netzfrequenzen verträgt.' },
      { q: 'Wie rechne ich rad/s und Hz um?', a: '1 Hz = 2π rad/s ≈ 6,283 rad/s; 60 Hz entsprechen rund 377 rad/s. In der Technik rechnet man Winkelgrößen in rad/s und zyklische in Hz — diese 2π-Umrechnung braucht man täglich bei Motoren und Schwingungsanalyse.' },
      { q: 'Welchen Frequenzbereich hört der Mensch?', a: 'Etwa 20 Hz bis 20 kHz (20.000 Hz). Subwoofer beginnen bei 20-30 Hz, die CD-Qualität endet bei 22,05 kHz. Mit dem Alter lassen zuerst die Höhen nach — viele über 40 hören 15 kHz und darüber nicht mehr.' },
    ],
  },
}
