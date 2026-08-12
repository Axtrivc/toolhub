'use client'

import { makeUnitConverter } from '../calculators/makeUnitConverter'

/**
 * 批量单位转换器 - 全部用通用转换工厂,每个仅需几行配置
 * 这些都是线性比例转换,适合 makeUnitConverter
 */

// ── 数据存储(Byte 转 KB/MB/GB/TB)──
export const DataStorageConverterClient = makeUnitConverter({
  slug: 'data-storage-converter',
  defaultValue: '1',
  defaultFrom: 'gb',
  defaultTo: 'mb',
  digits: 3,
  units: {
    b: { label: 'Bytes (B)', factor: 1 },
    kb: { label: 'Kilobytes (KB)', factor: 1024 },
    mb: { label: 'Megabytes (MB)', factor: 1024 ** 2 },
    gb: { label: 'Gigabytes (GB)', factor: 1024 ** 3 },
    tb: { label: 'Terabytes (TB)', factor: 1024 ** 4 },
    pb: { label: 'Petabytes (PB)', factor: 1024 ** 5 },
    bit: { label: 'Bits (bit)', factor: 1 / 8 },
    kbit: { label: 'Kilobits (Kb)', factor: 1024 / 8 },
    mbit: { label: 'Megabits (Mb)', factor: 1024 ** 2 / 8 },
    gbit: { label: 'Gigabits (Gb)', factor: 1024 ** 3 / 8 },
  },
  note: '💾 Uses binary units (1 KB = 1024 bytes). Common for file sizes and storage.',
})

// ── 时间(Time 转 ms/s/min/h/day)──
export const TimeConverterClient = makeUnitConverter({
  slug: 'time-converter',
  defaultValue: '1',
  defaultFrom: 'h',
  defaultTo: 'min',
  digits: 4,
  units: {
    ms: { label: 'Milliseconds (ms)', factor: 0.001 },
    s: { label: 'Seconds (s)', factor: 1 },
    min: { label: 'Minutes (min)', factor: 60 },
    h: { label: 'Hours (h)', factor: 3600 },
    day: { label: 'Days (d)', factor: 86400 },
    week: { label: 'Weeks (wk)', factor: 604800 },
    month: { label: 'Months (mo)', factor: 2629800 }, // 平均 30.44 天
    year: { label: 'Years (yr)', factor: 31557600 }, // 365.25 天
  },
  note: '⏱️ Months and years use averages (30.44 days/month, 365.25 days/year).',
})

// ── 数字进制(Binary/Octal/Decimal/Hex)──
// 这个不是比例转换,需要专门处理,这里单独写
export { NumeralSystemConverterClient } from './NumeralSystemConverterClient'

// ── 角度(Degree/Radian/Gradian)──
export const AngleConverterClient = makeUnitConverter({
  slug: 'angle-converter',
  defaultValue: '90',
  defaultFrom: 'deg',
  defaultTo: 'rad',
  digits: 6,
  units: {
    deg: { label: 'Degrees (°)', factor: 1 },
    rad: { label: 'Radians (rad)', factor: 57.2958 },
    grad: { label: 'Gradians (grad)', factor: 0.9 },
    arcmin: { label: 'Arc minutes (′)', factor: 1 / 60 },
    arcsec: { label: 'Arc seconds (″)', factor: 1 / 3600 },
    rev: { label: 'Revolutions (rev)', factor: 360 },
  },
  note: '📐 Used in math, engineering, and navigation. 1 revolution = 360° = 2π rad.',
})

// ── 燃油经济性(MPG vs L/100km,倒数关系)──
// L/100km 与 mpg 是倒数关系(L/100km = 235.215 ÷ mpg),
// 不能用线性 factor,故对 l100km 单位配置自定义 toBase/fromBase 钩子。
// 基准单位 = US mpg(等效):1 US mpg = 235.215 / 1 L/100km。
// UK mpg → US mpg:1 UK gallon = 1.20095 US gallon,故 x mpg(UK) = x/1.20095 mpg(US) = x*0.83267。
export const FuelEconomyConverterClient = makeUnitConverter({
  slug: 'fuel-economy-converter',
  defaultValue: '30',
  defaultFrom: 'mpg-us',
  defaultTo: 'l100km',
  digits: 3,
  units: {
    'mpg-us': { label: 'Miles/Gallon US (mpg)', factor: 1 },
    'mpg-uk': { label: 'Miles/Gallon UK (mpg)', factor: 0.83267 },
    'l100km': {
      label: 'Liters/100km (L/100km)',
      factor: 0, // 占位,实际走 toBase/fromBase(倒数关系)
      toBase: (v) => 235.215 / v, // L/100km → US mpg
      fromBase: (b) => 235.215 / b, // US mpg → L/100km
    },
  },
  note: '⛽ Note: L/100km is inverse to mpg (lower = better). L/100km = 235.215 ÷ US mpg; 1 UK mpg ≈ 1.20095 US mpg. Values are approximate.',
})

// ── 压力(Pascal/Bar/PSI/atm)──
export const PressureConverterClient = makeUnitConverter({
  slug: 'pressure-converter',
  defaultValue: '1',
  defaultFrom: 'bar',
  defaultTo: 'psi',
  digits: 4,
  units: {
    pa: { label: 'Pascals (Pa)', factor: 1 },
    kpa: { label: 'Kilopascals (kPa)', factor: 1000 },
    mpa: { label: 'Megapascals (MPa)', factor: 1000000 },
    bar: { label: 'Bars (bar)', factor: 100000 },
    mbar: { label: 'Millibars (mbar)', factor: 100 },
    psi: { label: 'Pounds/sq inch (psi)', factor: 6894.76 },
    atm: { label: 'Atmospheres (atm)', factor: 101325 },
    torr: { label: 'Torr (mmHg)', factor: 133.322 },
  },
  note: '🎈 Used in tire pressure, weather, and engineering. 1 atm = 101325 Pa = 14.7 psi.',
})

// ── 能量(Joule/Calorie/kWh/BTU)──
export const EnergyConverterClient = makeUnitConverter({
  slug: 'energy-converter',
  defaultValue: '1',
  defaultFrom: 'kcal',
  defaultTo: 'kj',
  digits: 4,
  units: {
    j: { label: 'Joules (J)', factor: 1 },
    kj: { label: 'Kilojoules (kJ)', factor: 1000 },
    cal: { label: 'Calories (cal)', factor: 4.184 },
    kcal: { label: 'Kilocalories (kcal)', factor: 4184 },
    wh: { label: 'Watt-hours (Wh)', factor: 3600 },
    kwh: { label: 'Kilowatt-hours (kWh)', factor: 3600000 },
    btu: { label: 'British Thermal Units (BTU)', factor: 1055.06 },
    ev: { label: 'Electron-volts (eV)', factor: 1.602e-19 },
  },
  note: '⚡ Food "Calories" are actually kilocalories (kcal). 1 kcal = 4.184 kJ.',
})

// ── 频率(Hz/kHz/MHz/GHz/RPM)──
export const FrequencyConverterClient = makeUnitConverter({
  slug: 'frequency-converter',
  defaultValue: '1',
  defaultFrom: 'mhz',
  defaultTo: 'hz',
  digits: 4,
  units: {
    hz: { label: 'Hertz (Hz)', factor: 1 },
    khz: { label: 'Kilohertz (kHz)', factor: 1000 },
    mhz: { label: 'Megahertz (MHz)', factor: 1000000 },
    ghz: { label: 'Gigahertz (GHz)', factor: 1000000000 },
    rpm: { label: 'Revolutions/min (RPM)', factor: 1 / 60 },
    'deg-s': { label: 'Degrees/second (°/s)', factor: 1 / 360 },
    'rad-s': { label: 'Radians/second (rad/s)', factor: 1 / (2 * Math.PI) },
  },
  note: '📡 CPU clocks in GHz, audio in Hz-kHz, rotation in RPM.',
})
