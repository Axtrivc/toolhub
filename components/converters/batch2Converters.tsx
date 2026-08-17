'use client'

import { makeUnitConverter } from '../calculators/makeUnitConverter'

/** 第七批:线性单位转换器(mass-converter 已合并进 WeightConverterClient,见 batch2Clients.tsx) */

export const DensityConverterClient = makeUnitConverter({
  slug: 'density-converter',
  defaultValue: '1',
  defaultFrom: 'kgm3',
  defaultTo: 'gl',
  digits: 4,
  units: {
    'kgm3': { label: 'kg/m³', factor: 1 },
    'gcm3': { label: 'g/cm³', factor: 1000 },
    'gl': { label: 'g/L', factor: 1 },
    'gml': { label: 'g/mL', factor: 1000 },
    'lbft3': { label: 'lb/ft³', factor: 16.0185 },
    'lbgal': { label: 'lb/US gal', factor: 119.82642731697485 }, // 0.45359237 kg ÷ 0.003785411784 m³
    'lbin3': { label: 'lb/in³', factor: 27679.9 },
  },
  note: '🧪 Density = mass ÷ volume. Water = 1000 kg/m³ = 1 g/cm³. Gold = 19,320 kg/m³.',
})

export const PowerConverterClient = makeUnitConverter({
  slug: 'power-converter',
  defaultValue: '1',
  defaultFrom: 'kw',
  defaultTo: 'hp',
  digits: 4,
  units: {
    milliwatt: { label: 'Milliwatts (mW)', factor: 0.001 },
    w: { label: 'Watts (W)', factor: 1 },
    kw: { label: 'Kilowatts (kW)', factor: 1000 },
    mw: { label: 'Megawatts (MW)', factor: 1000000 },
    gigawatt: { label: 'Gigawatts (GW)', factor: 1000000000 },
    hp: { label: 'Horsepower (hp)', factor: 745.7 },
    'hp-metric': { label: 'Metric horsepower (PS)', factor: 735.499 },
    'bs': { label: 'BTU/sec', factor: 1055.06 },
    // 小写 c = gram-calorie(大写 Calorie 惯指千卡,易误导)
    'cal-s': { label: 'calories/sec (cal/s)', factor: 4.184 },
  },
  note: '⚡ Engine power in hp, electrical in kW, large plants in MW. 1 hp ≈ 746 W.',
})

export const FlowRateConverterClient = makeUnitConverter({
  slug: 'flow-rate-converter',
  defaultValue: '1',
  defaultFrom: 'lmin',
  defaultTo: 'gpm',
  digits: 4,
  units: {
    // 基准是 L/s:1 m³/s = 1000 L/s;1 L/h = 1/3600 L/s
    'm3s': { label: 'm³/sec', factor: 1000 },
    'ls': { label: 'Liters/sec (L/s)', factor: 1 },
    'lmin': { label: 'Liters/min (L/min)', factor: 1 / 60 },
    'lh': { label: 'Liters/hour (L/h)', factor: 1 / 3600 },
    // m³/hour:1 m³ = 1000 L,1 h = 3600 s → 1000/3600 L/s
    'm3h': { label: 'm³/hour', factor: 1000 / 3600 },
    // 基准是 L/s(1 L/s),系数须换算到升:
    //   1 US gallon/min = 3.785411784 L / 60 s = 0.0630902 L/s
    //   1 US gallon/sec = 3.785411784 L/s
    //   1 ft³/min = 28.316846592 L / 60 s = 0.471947443 L/s
    // (旧值按 m³/s 基准写,全部差 1000 倍)
    'gpm': { label: 'Gallons/min US (gpm)', factor: 0.0630902 },
    'gps': { label: 'Gallons/sec US', factor: 3.785411784 },
    'cfm': { label: 'ft³/min (CFM)', factor: 0.471947443 },
  },
  note: '🚰 Pipe and pump flow rates. Used in plumbing, HVAC, and irrigation.',
})
