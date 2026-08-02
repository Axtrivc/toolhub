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
    w: { label: 'Watts (W)', factor: 1 },
    kw: { label: 'Kilowatts (kW)', factor: 1000 },
    mw: { label: 'Megawatts (MW)', factor: 1000000 },
    hp: { label: 'Horsepower (hp)', factor: 745.7 },
    'hp-metric': { label: 'Metric horsepower (PS)', factor: 735.499 },
    'bs': { label: 'BTU/sec', factor: 1055.06 },
    'cal-s': { label: 'Calories/sec', factor: 4.184 },
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
    'ls': { label: 'Liters/sec (L/s)', factor: 1 },
    'lmin': { label: 'Liters/min (L/min)', factor: 1 / 60 },
    'm3h': { label: 'm³/hour', factor: 1 / 3600 },
    'gpm': { label: 'Gallons/min US (gpm)', factor: 6.309e-5 },
    'gps': { label: 'Gallons/sec US', factor: 0.003785 },
    'cfm': { label: 'ft³/min (CFM)', factor: 4.719e-4 },
  },
  note: '🚰 Pipe and pump flow rates. Used in plumbing, HVAC, and irrigation.',
})
