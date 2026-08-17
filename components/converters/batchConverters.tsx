'use client'

import { makeUnitConverter } from '../calculators/makeUnitConverter'

/**
 * 批量单位转换器 - 全部用通用转换工厂,每个仅需几行配置
 * 这些都是线性比例转换,适合 makeUnitConverter
 */

// ── 数据存储(双轨:十进制 KB/MB/GB 1000 基 + 二进制 KiB/MiB/GiB 1024 基)──
// 基准单位 = byte。十进制(SI)是硬盘/网速标称口径,二进制(IEC)是操作系统显示口径。
// 比特系按电信惯例 1000 基(1 Mbit = 125000 bytes),网速 "100 Mb" → 12.5 MB/s。
export const DataStorageConverterClient = makeUnitConverter({
  slug: 'data-storage-converter',
  defaultValue: '1',
  defaultFrom: 'gb',
  defaultTo: 'mb',
  digits: 3,
  units: {
    // 十进制(SI,1000 基)
    b: { label: 'Bytes (B)', factor: 1 },
    kb: { label: 'Kilobytes (KB)', factor: 1000 },
    mb: { label: 'Megabytes (MB)', factor: 1000 ** 2 },
    gb: { label: 'Gigabytes (GB)', factor: 1000 ** 3 },
    tb: { label: 'Terabytes (TB)', factor: 1000 ** 4 },
    pb: { label: 'Petabytes (PB)', factor: 1000 ** 5 },
    // 二进制(IEC,1024 基)
    kib: { label: 'Kibibytes (KiB)', factor: 1024 },
    mib: { label: 'Mebibytes (MiB)', factor: 1024 ** 2 },
    gib: { label: 'Gibibytes (GiB)', factor: 1024 ** 3 },
    tib: { label: 'Tebibytes (TiB)', factor: 1024 ** 4 },
    pib: { label: 'Pebibytes (PiB)', factor: 1024 ** 5 },
    // 比特系(1000 基,1 byte = 8 bit)
    bit: { label: 'Bits (bit)', factor: 1 / 8 },
    kbit: { label: 'Kilobits (Kb)', factor: 1000 / 8 },
    mbit: { label: 'Megabits (Mb)', factor: 1000 ** 2 / 8 },
    gbit: { label: 'Gigabits (Gb)', factor: 1000 ** 3 / 8 },
  },
  note: '💾 Decimal units (KB = 1000 B) match drive and network labels; binary units (KiB = 1024 B) match OS reports. Bits are 1000-based (1 byte = 8 bits).',
})

// ── 时间(Time 转 ms/s/min/h/day)──
export const TimeConverterClient = makeUnitConverter({
  slug: 'time-converter',
  defaultValue: '1',
  defaultFrom: 'h',
  defaultTo: 'min',
  digits: 4,
  units: {
    ns: { label: 'Nanoseconds (ns)', factor: 1e-9 },
    us: { label: 'Microseconds (µs)', factor: 1e-6 },
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
    rad: { label: 'Radians (rad)', factor: 180 / Math.PI },
    mrad: { label: 'Milliradians (mrad)', factor: 180 / Math.PI / 1000 },
    grad: { label: 'Gradians (grad)', factor: 0.9 },
    arcmin: { label: 'Arc minutes (′)', factor: 1 / 60 },
    arcsec: { label: 'Arc seconds (″)', factor: 1 / 3600 },
    rev: { label: 'Revolutions (rev)', factor: 360 },
  },
  note: '📐 Used in math, engineering, and navigation. 1 revolution = 360° = 2π rad.',
})

// ── 燃油经济性(MPG vs L/100km vs km/L)──
// 基准单位 = US mpg(等效):1 US mpg = 235.215 / 1 L/100km。
// L/100km 与 mpg 是倒数关系(L/100km = 235.215 ÷ mpg),
// 不能用线性 factor,故对 l100km 单位配置自定义 toBase/fromBase 钩子。
// km/L 与 mpg 同为「距离/体积」,是线性关系:1 km/L = 3.785411784/1.609344 ≈ 2.3521458 US mpg。
// UK mpg → US mpg:1 UK gallon = 1.20095 US gallon,故 x mpg(UK) = x/1.20095 mpg(US) = x*0.83267。
// v ≤ 0(含空输入 toNum=0)无物理意义:倒数关系下 0 → Infinity、负数 → 负油耗。
// 工厂不支持逐工具校验,故在每个 toBase 入口统一拦截为 NaN → 结果区显示「—」,note 提示需为正数。
const KML_TO_MPG = 3.785411784 / 1.609344 // ≈ 2.3521458
// 输入须为正数,否则返回 NaN(工厂对非有限值显示「—」)
const positiveOrNaN = (v: number): number => (v > 0 ? v : NaN)

export const FuelEconomyConverterClient = makeUnitConverter({
  slug: 'fuel-economy-converter',
  defaultValue: '30',
  defaultFrom: 'mpg-us',
  defaultTo: 'l100km',
  digits: 3,
  units: {
    'mpg-us': { label: 'Miles/Gallon US (mpg)', factor: 1, toBase: positiveOrNaN },
    'mpg-uk': {
      label: 'Miles/Gallon UK (mpg)',
      factor: 0.83267,
      toBase: (v) => positiveOrNaN(v) * 0.83267,
    },
    kml: {
      label: 'Kilometers/Liter (km/L)',
      factor: KML_TO_MPG, // 线性:1 km/L ≈ 2.3521458 mpg(US)
      toBase: (v) => positiveOrNaN(v) * KML_TO_MPG,
    },
    l100km: {
      label: 'Liters/100km (L/100km)',
      factor: 0, // 占位,实际走 toBase/fromBase(倒数关系)
      toBase: (v) => 235.215 / positiveOrNaN(v), // L/100km → US mpg
      fromBase: (b) => 235.215 / positiveOrNaN(b), // US mpg → L/100km
    },
  },
  note: '⛽ L/100km is inverse to mpg (lower = better): L/100km = 235.215 ÷ US mpg. km/L is linear: 1 km/L ≈ 2.35215 US mpg. 1 UK mpg ≈ 1.20095 US mpg. Enter a value greater than 0 (0 or negative is undefined). Values are approximate.',
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
    psi: { label: 'Pounds/sq inch (psi)', factor: 6894.757293168361 },
    'kgfcm2': { label: 'Kilogram-force/cm² (kgf/cm²)', factor: 98066.5 },
    atm: { label: 'Atmospheres (atm)', factor: 101325 },
    torr: { label: 'Torr (mmHg)', factor: 133.32236842105263 }, // = 101325/760
    inhg: { label: 'Inches of mercury (inHg)', factor: 3386.389 },
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
    mj: { label: 'Megajoules (MJ)', factor: 1000000 },
    cal: { label: 'Calories (cal)', factor: 4.184 },
    kcal: { label: 'Kilocalories (kcal)', factor: 4184 },
    wh: { label: 'Watt-hours (Wh)', factor: 3600 },
    kwh: { label: 'Kilowatt-hours (kWh)', factor: 3600000 },
    btu: { label: 'British Thermal Units (BTU)', factor: 1055.05585262 }, // IT 卡定义
    ftlbf: { label: 'Foot-pounds (ft·lbf)', factor: 1.3558179483314004 },
    ev: { label: 'Electron-volts (eV)', factor: 1.602176634e-19 }, // SI 精确值
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
