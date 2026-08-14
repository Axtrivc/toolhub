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
    ],
    faqs: [
      { q: '怎样把 RPM 换算成 Hz?', a: '用 RPM 除以 60。一台 3600 RPM 的电机运行在 60 Hz。这就是为什么美国的交流电是 60 Hz——发电机转速为 3600 RPM。' },
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
    ],
    faqs: [
      { q: '¿Cómo convierto RPM a Hz?', a: 'Divide las RPM entre 60. Un motor que gira a 3.600 RPM funciona a 60 Hz. Por eso la corriente alterna en EE. UU. es de 60 Hz — los generadores giran a 3.600 RPM.' },
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
      'unit.rad-s': 'Bogenmaß/Sekunde (rad/s)',
      'unit.rpm': 'Umdrehungen/Min (RPM)',
    },
    useCases: [
      'Motordrehzahl (RPM) in Hertz umrechnen',
      'zwischen Funkfrequenzeinheiten wechseln (kHz / MHz / GHz)',
      'Herzfrequenz umrechnen (Schläge/Min → Hz)',
    ],
    faqs: [
      { q: 'Wie rechne ich RPM in Hz um?', a: 'Teile die RPM durch 60. Ein Motor mit 3.600 RPM läuft auf 60 Hz. Deshalb hat der US-Wechselstrom 60 Hz — die Generatoren drehen sich mit 3.600 RPM.' },
    ],
  },
}
