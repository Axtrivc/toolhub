'use client'

/**
 * 第二十八批:建材与施工估算器(B8 建材与施工)
 * Concrete / Mulch / Gravel / Drywall / Roofing / Fence / Paver / Deck Board
 * 均基于 makeCalculatorClient 配置驱动;compute 为纯函数,美制口径
 * (ft / in / yd³ / US ton),袋数一律向上取整(半袋买不到)。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import { ConcreteCalculatorL10n } from '@/lib/i18n/tools-l10n/concrete-calculator'
import { MulchCalculatorL10n } from '@/lib/i18n/tools-l10n/mulch-calculator'
import { GravelCalculatorL10n } from '@/lib/i18n/tools-l10n/gravel-calculator'
import { DrywallCalculatorL10n } from '@/lib/i18n/tools-l10n/drywall-calculator'
import { RoofingCalculatorL10n } from '@/lib/i18n/tools-l10n/roofing-calculator'
import { FenceCalculatorL10n } from '@/lib/i18n/tools-l10n/fence-calculator'
import { PaverCalculatorL10n } from '@/lib/i18n/tools-l10n/paver-calculator'
import { DeckBoardCalculatorL10n } from '@/lib/i18n/tools-l10n/deck-board-calculator'

// ─────────────────────────────────────────────────────────────
// Concrete Calculator(混凝土:板/柱/台阶 → 体积 + 袋数)
// 袋装产量惯例:80 lb ≈ 0.60 ft³,60 lb ≈ 0.45 ft³,40 lb ≈ 0.30 ft³
// ─────────────────────────────────────────────────────────────
export const ConcreteCalculatorClient = makeCalculatorClient({
  slug: 'concrete-calculator',
  l10n: ConcreteCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Patio slab 10×10', values: { shape: 'slab', length: '10', width: '10', thickness: '4', waste: '10' } },
    { label: 'Deck footings 12″×6', values: { shape: 'column', diameter: '12', height: '3', quantity: '6', waste: '10' } },
    { label: 'Entry steps 4 risers', values: { shape: 'steps', width: '5', run: '11', rise: '7', stepCount: '4', waste: '10' } },
  ],
  inputs: [
    { key: 'shape', label: 'Shape', default: 'slab', options: [
      { label: 'Slab / pad', value: 'slab' },
      { label: 'Round column', value: 'column' },
      { label: 'Steps', value: 'steps' },
    ]},
    { key: 'length', label: 'Length', suffix: 'ft', default: '10', slider: { min: 1, max: 120, step: 0.5 } },
    { key: 'width', label: 'Width', suffix: 'ft', default: '8', slider: { min: 1, max: 120, step: 0.5 } },
    { key: 'thickness', label: 'Thickness', suffix: 'in', default: '4', slider: { min: 1, max: 24, step: 0.5 } },
    { key: 'diameter', label: 'Column diameter', suffix: 'in', default: '12', slider: { min: 4, max: 60, step: 1 } },
    { key: 'height', label: 'Column height', suffix: 'ft', default: '3', slider: { min: 0.5, max: 20, step: 0.5 } },
    { key: 'quantity', label: 'Columns', default: '1', slider: { min: 1, max: 60, step: 1 } },
    { key: 'run', label: 'Step tread run', suffix: 'in', default: '11', slider: { min: 6, max: 18, step: 0.5 } },
    { key: 'rise', label: 'Step rise', suffix: 'in', default: '7', slider: { min: 4, max: 12, step: 0.5 } },
    { key: 'stepCount', label: 'Number of steps', default: '4', slider: { min: 1, max: 24, step: 1 } },
    { key: 'waste', label: 'Waste margin', suffix: '%', default: '10', slider: { min: 0, max: 25, step: 1 } },
  ],
  outputs: [
    { key: 'buyYd', label: 'Concrete to order', highlight: true, sublabel: 'Waste margin included' },
    { key: 'volFt', label: 'Exact volume' },
    { key: 'bags80', label: '80 lb bags', sublabel: 'Yields 0.60 ft³ each' },
    { key: 'bags60', label: '60 lb bags', sublabel: 'Yields 0.45 ft³ each' },
    { key: 'bags40', label: '40 lb bags', sublabel: 'Yields 0.30 ft³ each' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(ConcreteCalculatorL10n, locale, k, fb)
    const waste = Math.min(Math.max(toNum(v.waste), 0), 50)
    let ft3 = 0
    let ok = true
    if (v.shape === 'column') {
      const d = toNumStrict(v.diameter), h = toNumStrict(v.height)
      const q = Math.max(1, Math.round(toNum(v.quantity)))
      if (!(d > 0) || !(h > 0)) ok = false
      else ft3 = Math.PI * (d / 24) ** 2 * h * q // d 英寸 → 半径英尺 = d/24
    } else if (v.shape === 'steps') {
      const run = toNumStrict(v.run), rise = toNumStrict(v.rise), w = toNumStrict(v.width)
      const n = Math.max(1, Math.round(toNum(v.stepCount)))
      if (!(run > 0) || !(rise > 0) || !(w > 0)) ok = false
      // 每级踏步 ≈ 直角三角棱柱:run×rise/2(in²)×宽(ft)÷144 → ft³
      else ft3 = ((run * rise) / 2) * (w / 144) * n
    } else {
      const l = toNumStrict(v.length), w = toNumStrict(v.width), t = toNumStrict(v.thickness)
      if (!(l > 0) || !(w > 0) || !(t > 0)) ok = false
      else ft3 = l * w * (t / 12)
    }
    if (!ok) {
      return {
        buyYd: `⚠️ ${T('errDims', 'Enter valid dimensions for the selected shape')}`,
        volFt: '—', bags80: '—', bags60: '—', bags40: '—',
      }
    }
    const withWaste = ft3 * (1 + waste / 100)
    return {
      buyYd: `${fmtNum(withWaste / 27, 2)} yd³`,
      volFt: `${fmtNum(ft3, 1)} ft³`,
      bags80: `${Math.ceil(withWaste / 0.6)}`,
      bags60: `${Math.ceil(withWaste / 0.45)}`,
      bags40: `${Math.ceil(withWaste / 0.3)}`,
    }
  },
  chart: { kind: 'compare', title: 'Exact volume vs order volume' },
  compare: (v) => {
    const waste = Math.min(Math.max(toNum(v.waste), 0), 50)
    let ft3 = 0
    if (v.shape === 'column') {
      const d = toNum(v.diameter), h = toNum(v.height), q = Math.max(1, Math.round(toNum(v.quantity)))
      if (!(d > 0) || !(h > 0)) return null
      ft3 = Math.PI * (d / 24) ** 2 * h * q
    } else if (v.shape === 'steps') {
      const run = toNum(v.run), rise = toNum(v.rise), w = toNum(v.width), n = Math.max(1, Math.round(toNum(v.stepCount)))
      if (!(run > 0) || !(rise > 0) || !(w > 0)) return null
      ft3 = ((run * rise) / 2) * (w / 144) * n
    } else {
      const l = toNum(v.length), w = toNum(v.width), t = toNum(v.thickness)
      if (!(l > 0) || !(w > 0) || !(t > 0)) return null
      ft3 = l * w * (t / 12)
    }
    return {
      rows: [
        { label: 'Exact need', segments: [{ label: 'Volume', value: ft3 / 27, color: '#3b82f6' }] },
        { label: 'Order (with waste)', segments: [{ label: 'Volume', value: (ft3 * (1 + waste / 100)) / 27, color: '#f59e0b' }] },
      ],
      formatTotal: (n) => `${fmtNum(n, 2)} yd³`,
    }
  },
  note: '🧱 At 4 inches thick, one cubic yard covers 81 ft². Past about a full yard (≈45 eighty-lb bags) order ready-mix by the truck — hand-mixing 20+ bags is a day of its own.',
})

// ─────────────────────────────────────────────────────────────
// Mulch Calculator(覆盖物:面积×铺厚 → yd³ + 袋数与价格)
// ─────────────────────────────────────────────────────────────
export const MulchCalculatorClient = makeCalculatorClient({
  slug: 'mulch-calculator',
  l10n: MulchCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Flower bed 10×4 @ 2″', values: { length: '10', width: '4', depth: '2' } },
    { label: 'Refresh 20×10 @ 3″', values: { length: '20', width: '10', depth: '3' } },
    { label: 'Playground 20×20 @ 9″', values: { length: '20', width: '20', depth: '9' } },
  ],
  inputs: [
    { key: 'length', label: 'Bed length', suffix: 'ft', default: '20', slider: { min: 1, max: 300, step: 1 } },
    { key: 'width', label: 'Bed width', suffix: 'ft', default: '10', slider: { min: 1, max: 200, step: 1 } },
    { key: 'depth', label: 'Mulch depth', suffix: 'in', default: '3', slider: { min: 1, max: 12, step: 0.5 } },
    { key: 'bagSize', label: 'Bag size', default: '2', options: [
      { label: '2 ft³ bags', value: '2' },
      { label: '3 ft³ bags', value: '3' },
    ]},
    { key: 'price', label: 'Price per bag', suffix: '$', default: '4.50', slider: { min: 0, max: 20, step: 0.25 } },
  ],
  outputs: [
    { key: 'mulchYd', label: 'Mulch needed', highlight: true },
    { key: 'mulchCf', label: 'Volume in cubic feet' },
    { key: 'bags2cf', label: 'Bags (2 ft³)' },
    { key: 'bags3cf', label: 'Bags (3 ft³)' },
    { key: 'cost', label: 'Bagged cost' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(MulchCalculatorL10n, locale, k, fb)
    const l = toNumStrict(v.length), w = toNumStrict(v.width), d = toNumStrict(v.depth)
    if (!(l > 0) || !(w > 0) || !(d > 0)) {
      return {
        mulchYd: `⚠️ ${T('errDims', 'Enter valid bed dimensions')}`,
        mulchCf: '—', bags2cf: '—', bags3cf: '—', cost: '—',
      }
    }
    const cf = l * w * (d / 12)
    const bags2 = Math.ceil(cf / 2)
    const bags3 = Math.ceil(cf / 3)
    const price = Math.max(0, toNum(v.price))
    const bags = v.bagSize === '3' ? bags3 : bags2
    return {
      mulchYd: `${fmtNum(cf / 27, 2)} yd³`,
      mulchCf: `${fmtNum(cf, 1)} ft³`,
      bags2cf: `${bags2}`,
      bags3cf: `${bags3}`,
      cost: fmtUSD(bags * price),
    }
  },
  chart: { kind: 'compare', title: 'Cost by mulch depth' },
  compare: (v) => {
    const l = toNum(v.length), w = toNum(v.width), price = Math.max(0, toNum(v.price))
    if (!(l > 0) || !(w > 0) || price <= 0) return null
    const bagSize = v.bagSize === '3' ? 3 : 2
    const costAt = (depth: number) => Math.ceil((l * w * depth) / 12 / bagSize) * price
    return {
      rows: [
        { label: '2″ depth', segments: [{ label: 'Cost', value: costAt(2), color: '#22c55e' }] },
        { label: '3″ depth', segments: [{ label: 'Cost', value: costAt(3), color: '#3b82f6' }] },
        { label: '4″ depth', segments: [{ label: 'Cost', value: costAt(4), color: '#f59e0b' }] },
      ],
      formatTotal: (n) => fmtUSD(n),
    }
  },
  note: '🌿 One cubic yard covers 324 ft² at 1 inch — 108 ft² at the standard 3″. Playground fall zones need 9-12″ of certified engineered wood fiber, not decorative mulch.',
})

// ─────────────────────────────────────────────────────────────
// Gravel Calculator(砾石:面积×厚度 → yd³ + 吨数,按材料密度)
// 密度口径(松散堆置惯例):碎石 2,700 / 豌豆砾石 2,600 / 干砂 2,500 lb/yd³
// ─────────────────────────────────────────────────────────────
export const GravelCalculatorClient = makeCalculatorClient({
  slug: 'gravel-calculator',
  l10n: GravelCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Driveway 20×30 @ 4″', values: { length: '30', width: '20', depth: '4', material: 'crushed' } },
    { label: 'Garden path @ 2″', values: { length: '20', width: '3', depth: '2', material: 'pea' } },
    { label: 'French drain trench', values: { length: '50', width: '1.5', depth: '10', material: 'crushed' } },
  ],
  inputs: [
    { key: 'length', label: 'Area length', suffix: 'ft', default: '20', slider: { min: 1, max: 400, step: 1 } },
    { key: 'width', label: 'Area width', suffix: 'ft', default: '10', slider: { min: 1, max: 200, step: 1 } },
    { key: 'depth', label: 'Depth', suffix: 'in', default: '3', slider: { min: 1, max: 12, step: 0.5 } },
    { key: 'material', label: 'Material', default: 'crushed', options: [
      // 标签保持 ≤10 字符:3 段分段控件在 375px 下每段约 78px 可用,密度数值放 note
      { label: 'Crushed', value: 'crushed' },
      { label: 'Pea gravel', value: 'pea' },
      { label: 'Dry sand', value: 'sand' },
    ]},
    { key: 'price', label: 'Price per ton', suffix: '$', default: '45', slider: { min: 0, max: 200, step: 1 } },
  ],
  outputs: [
    { key: 'tons', label: 'Weight to order', highlight: true },
    { key: 'yd3', label: 'Volume in cubic yards' },
    { key: 'cf', label: 'Volume in cubic feet' },
    { key: 'cost', label: 'Material cost' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(GravelCalculatorL10n, locale, k, fb)
    const l = toNumStrict(v.length), w = toNumStrict(v.width), d = toNumStrict(v.depth)
    if (!(l > 0) || !(w > 0) || !(d > 0)) {
      return {
        tons: `⚠️ ${T('errDims', 'Enter valid area and depth')}`,
        yd3: '—', cf: '—', cost: '—',
      }
    }
    const lbPerYd = v.material === 'pea' ? 2600 : v.material === 'sand' ? 2500 : 2700
    const cf = l * w * (d / 12)
    const yd = cf / 27
    const tons = (yd * lbPerYd) / 2000
    const price = Math.max(0, toNum(v.price))
    return {
      tons: `${fmtNum(tons, 2)} US tons`,
      yd3: `${fmtNum(yd, 2)} yd³`,
      cf: `${fmtNum(cf, 1)} ft³`,
      cost: fmtUSD(tons * price),
    }
  },
  chart: { kind: 'compare', title: 'Same volume, different materials' },
  compare: (v) => {
    const l = toNum(v.length), w = toNum(v.width), d = toNum(v.depth)
    if (!(l > 0) || !(w > 0) || !(d > 0)) return null
    const yd = (l * w * d) / 12 / 27
    return {
      rows: [
        { label: 'Crushed stone', segments: [{ label: 'Weight', value: (yd * 2700) / 2000, color: '#3b82f6' }] },
        { label: 'Pea gravel', segments: [{ label: 'Weight', value: (yd * 2600) / 2000, color: '#22c55e' }] },
        { label: 'Sand (dry)', segments: [{ label: 'Weight', value: (yd * 2500) / 2000, color: '#f59e0b' }] },
      ],
      formatTotal: (n) => `${fmtNum(n, 2)} t`,
    }
  },
  note: '🪨 Quarries bill by the ton, not the yard: crushed stone ≈2,700 lb/yd³ (1.35 tons), pea gravel 2,600, dry sand 2,500. Delivered loads step in 1-10 yd³ truck tiers — a two-car driveway (≈600 ft² at 4″) lands near 10 tons.',
})

// ─────────────────────────────────────────────────────────────
// Drywall Calculator(石膏板:面积 → 板数 + 螺丝 + 嵌缝膏)
// 惯例:螺丝 ≈ 每 250 ft² 一磅(约 300 颗/lb);嵌缝膏 ≈ 0.01 gal/ft²
// ─────────────────────────────────────────────────────────────
export const DrywallCalculatorClient = makeCalculatorClient({
  slug: 'drywall-calculator',
  l10n: DrywallCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Bedroom 12×10', values: { perimeter: '44', height: '8', ceilL: '12', ceilW: '10' } },
    { label: 'Garage 24×24', values: { perimeter: '96', height: '9', ceilL: '24', ceilW: '24' } },
    { label: 'Basement 30×14', values: { perimeter: '88', height: '8', ceilL: '30', ceilW: '14' } },
  ],
  inputs: [
    { key: 'perimeter', label: 'Wall perimeter (all walls)', suffix: 'ft', default: '40', slider: { min: 10, max: 400, step: 2 } },
    { key: 'height', label: 'Wall height', suffix: 'ft', default: '8', slider: { min: 5, max: 14, step: 0.5 } },
    { key: 'ceilL', label: 'Ceiling length (0 = none)', suffix: 'ft', default: '12', slider: { min: 0, max: 100, step: 1 } },
    { key: 'ceilW', label: 'Ceiling width (0 = none)', suffix: 'ft', default: '10', slider: { min: 0, max: 100, step: 1 } },
    { key: 'panel', label: 'Panel size', default: '4x8', options: [
      { label: '4 × 8 ft (32 ft²)', value: '4x8' },
      { label: '4 × 12 ft (48 ft²)', value: '4x12' },
    ]},
  ],
  outputs: [
    { key: 'sheets', label: 'Drywall sheets', highlight: true, sublabel: '10% waste included' },
    { key: 'totalArea', label: 'Board area' },
    { key: 'screws', label: 'Screws', sublabel: '≈300 screws per lb' },
    { key: 'mud', label: 'Joint compound' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(DrywallCalculatorL10n, locale, k, fb)
    const per = toNumStrict(v.perimeter), h = toNumStrict(v.height)
    if (!(per > 0) || !(h > 0)) {
      return {
        sheets: `⚠️ ${T('errDims', 'Enter valid perimeter and height')}`,
        totalArea: '—', screws: '—', mud: '—',
      }
    }
    const wall = per * h
    const cL = Math.max(0, toNum(v.ceilL)), cW = Math.max(0, toNum(v.ceilW))
    const ceiling = cL > 0 && cW > 0 ? cL * cW : 0
    const total = wall + ceiling
    const buy = total * 1.1 // 10% 损耗(切口/破损)
    const sheetArea = v.panel === '4x12' ? 48 : 32
    const sheets = Math.ceil(buy / sheetArea)
    const screwLb = Math.ceil(total / 250) // ≈1 螺丝/ft²,300 颗/lb
    const mudGal = total * 0.01 // 贴带 + 三道腻子
    return {
      sheets: `${sheets} × ${sheetArea === 48 ? '4×12' : '4×8'}`,
      totalArea: `${fmtNum(total, 0)} ft²`,
      screws: `${screwLb} lb`,
      mud: `${fmtNum(mudGal, 1)} gal (${Math.ceil(mudGal / 4.5)} × 4.5 gal)`,
    }
  },
  chart: { kind: 'compare', title: 'Sheet count by panel size' },
  compare: (v) => {
    const per = toNum(v.perimeter), h = toNum(v.height)
    if (!(per > 0) || !(h > 0)) return null
    const cL = Math.max(0, toNum(v.ceilL)), cW = Math.max(0, toNum(v.ceilW))
    const ceiling = cL > 0 && cW > 0 ? cL * cW : 0
    const buy = (per * h + ceiling) * 1.1
    return {
      rows: [
        { label: '4×8 panels', segments: [{ label: 'Sheets', value: Math.ceil(buy / 32), color: '#3b82f6' }] },
        { label: '4×12 panels', segments: [{ label: 'Sheets', value: Math.ceil(buy / 48), color: '#22c55e' }] },
      ],
      formatTotal: (n) => `${fmtNum(Math.round(n), 0)}`,
    }
  },
  note: '🔨 On 8-ft walls, hanging 12-ft sheets horizontally cuts total joint length by a quarter. Screw spacing: 12″ on ceilings, 16″ on walls. Buy every sheet in one trip — finish batches differ visibly.',
})

// ─────────────────────────────────────────────────────────────
// Roofing Calculator(屋面:footprint×坡度系数 → squares + 瓦束 + 毡卷)
// 坡度系数(标准乘数):4/12=1.054 5/12=1.083 6/12=1.118 7/12=1.158 8/12=1.202 9/12=1.250
// ─────────────────────────────────────────────────────────────
export const RoofingCalculatorClient = makeCalculatorClient({
  slug: 'roofing-calculator',
  l10n: RoofingCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Gable 30×20, 6/12', values: { length: '30', width: '20', pitch: '6', waste: '10' } },
    { label: 'Bungalow 40×30, 8/12', values: { length: '40', width: '30', pitch: '8', waste: '12' } },
    { label: 'Shed 12×10, 4/12', values: { length: '12', width: '10', pitch: '4', waste: '5' } },
  ],
  inputs: [
    { key: 'length', label: 'Building length', suffix: 'ft', default: '30', slider: { min: 5, max: 200, step: 1 } },
    { key: 'width', label: 'Building width (incl. both slopes)', suffix: 'ft', default: '20', slider: { min: 5, max: 200, step: 1 } },
    { key: 'pitch', label: 'Roof pitch', default: '6', options: [
      { label: '4/12', value: '4' },
      { label: '5/12', value: '5' },
      { label: '6/12', value: '6' },
      { label: '7/12', value: '7' },
      { label: '8/12', value: '8' },
      { label: '9/12', value: '9' },
    ]},
    { key: 'waste', label: 'Waste allowance', suffix: '%', default: '10', slider: { min: 5, max: 25, step: 1 } },
  ],
  outputs: [
    { key: 'bundles', label: 'Shingle bundles', highlight: true, sublabel: '3 bundles per square' },
    { key: 'roofArea', label: 'Roof surface area' },
    { key: 'squares', label: 'Roofing squares', sublabel: '1 square = 100 ft²' },
    { key: 'buySq', label: 'Squares to buy', sublabel: 'Waste included' },
    { key: 'rolls', label: 'Underlayment rolls', sublabel: '400 ft² per roll' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(RoofingCalculatorL10n, locale, k, fb)
    const l = toNumStrict(v.length), w = toNumStrict(v.width)
    if (!(l > 0) || !(w > 0)) {
      return {
        bundles: `⚠️ ${T('errDims', 'Enter valid building footprint')}`,
        roofArea: '—', squares: '—', buySq: '—', rolls: '—',
      }
    }
    const factors: Record<string, number> = { '4': 1.054, '5': 1.083, '6': 1.118, '7': 1.158, '8': 1.202, '9': 1.25 }
    const factor = factors[v.pitch] ?? 1.118
    const waste = Math.min(Math.max(toNum(v.waste), 0), 50)
    const area = l * w * factor
    const buyArea = area * (1 + waste / 100)
    const buySq = buyArea / 100
    return {
      bundles: `${Math.ceil(buySq * 3)}`,
      roofArea: `${fmtNum(area, 0)} ft²`,
      squares: `${fmtNum(area / 100, 2)} sq`,
      buySq: `${fmtNum(buySq, 2)} sq`,
      rolls: `${Math.ceil(buyArea / 400)}`,
    }
  },
  chart: { kind: 'compare', title: 'Bundles rise with pitch' },
  compare: (v) => {
    const l = toNum(v.length), w = toNum(v.width)
    if (!(l > 0) || !(w > 0)) return null
    const waste = Math.min(Math.max(toNum(v.waste), 0), 50)
    const bundlesAt = (factor: number) => Math.ceil((l * w * factor * (1 + waste / 100)) / 100 * 3)
    return {
      rows: [
        { label: '4/12 pitch', segments: [{ label: 'Bundles', value: bundlesAt(1.054), color: '#22c55e' }] },
        { label: '6/12 pitch', segments: [{ label: 'Bundles', value: bundlesAt(1.118), color: '#3b82f6' }] },
        { label: '9/12 pitch', segments: [{ label: 'Bundles', value: bundlesAt(1.25), color: '#ef4444' }] },
      ],
      formatTotal: (n) => `${fmtNum(Math.round(n), 0)}`,
    }
  },
  note: '🏠 Three bundles per square holds only for 3-tab shingles — architectural lines often run 4-5 bundles per square, so check the wrapper. Measure the footprint from the ground; the pitch factor turns it into roof area.',
})

// ─────────────────────────────────────────────────────────────
// Fence Calculator(栅栏:周长+桩距 → 桩/栏板/横杆 + 桩洞混凝土)
// ─────────────────────────────────────────────────────────────
export const FenceCalculatorClient = makeCalculatorClient({
  slug: 'fence-calculator',
  l10n: FenceCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Privacy 100 ft, 8 ft posts', values: { length: '100', spacing: '8', style: 'privacy' } },
    { label: 'Post-and-rail 200 ft', values: { length: '200', spacing: '10', style: 'rail' } },
    { label: 'Tight 6 ft posts', values: { length: '100', spacing: '6', style: 'privacy' } },
  ],
  inputs: [
    { key: 'length', label: 'Fence length', suffix: 'ft', default: '100', slider: { min: 5, max: 1000, step: 5 } },
    { key: 'spacing', label: 'Post spacing', default: '8', options: [
      { label: '4 ft', value: '4' },
      { label: '6 ft', value: '6' },
      { label: '8 ft', value: '8' },
      { label: '10 ft', value: '10' },
    ]},
    { key: 'style', label: 'Fence style', default: 'privacy', options: [
      { label: 'Privacy (pickets)', value: 'privacy' },
      { label: 'Post-and-rail', value: 'rail' },
    ]},
    { key: 'picketW', label: 'Picket width', suffix: 'in', default: '5.5', slider: { min: 3.5, max: 12, step: 0.25 } },
    { key: 'gap', label: 'Gap between pickets', suffix: 'in', default: '0', slider: { min: 0, max: 2, step: 0.125 } },
    { key: 'holeD', label: 'Post hole diameter', suffix: 'in', default: '10', slider: { min: 6, max: 18, step: 1 } },
    { key: 'holeDepth', label: 'Post hole depth', suffix: 'in', default: '24', slider: { min: 12, max: 48, step: 1 } },
  ],
  outputs: [
    { key: 'posts', label: 'Posts', highlight: true },
    { key: 'sections', label: 'Sections' },
    { key: 'pickets', label: 'Pickets (privacy)' },
    { key: 'rails', label: 'Rails' },
    { key: 'bags', label: 'Concrete for holes', sublabel: '80 lb bags' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(FenceCalculatorL10n, locale, k, fb)
    const len = toNumStrict(v.length)
    const spacing = toNum(v.spacing)
    if (!(len > 0) || !(spacing > 0)) {
      return {
        posts: `⚠️ ${T('errDims', 'Enter a valid fence length and spacing')}`,
        sections: '—', pickets: '—', rails: '—', bags: '—',
      }
    }
    const isPrivacy = v.style !== 'rail'
    const posts = Math.ceil(len / spacing) + 1
    const sections = posts - 1
    const picketW = Math.max(0.5, toNum(v.picketW))
    const gap = Math.max(0, toNum(v.gap))
    const pickets = Math.ceil((len * 12) / (picketW + gap))
    const rails = sections * (isPrivacy ? 2 : 3)
    const holeD = Math.max(1, toNum(v.holeD))
    const holeDepth = Math.max(1, toNum(v.holeDepth))
    const holeFt3 = Math.PI * (holeD / 24) ** 2 * (holeDepth / 12)
    const bags = Math.ceil((posts * holeFt3) / 0.6)
    return {
      posts: `${posts}`,
      sections: `${sections}`,
      pickets: isPrivacy ? `${pickets}` : T('notApplicable', 'n/a for rail fence'),
      rails: `${rails}`,
      bags: `${bags}`,
    }
  },
  chart: { kind: 'compare', title: 'Post count by spacing' },
  compare: (v) => {
    const len = toNum(v.length)
    if (!(len > 0)) return null
    const postsAt = (s: number) => Math.ceil(len / s) + 1
    return {
      rows: [
        { label: '6 ft spacing', segments: [{ label: 'Posts', value: postsAt(6), color: '#3b82f6' }] },
        { label: '8 ft spacing', segments: [{ label: 'Posts', value: postsAt(8), color: '#22c55e' }] },
        { label: '10 ft spacing', segments: [{ label: 'Posts', value: postsAt(10), color: '#f59e0b' }] },
      ],
      formatTotal: (n) => `${fmtNum(Math.round(n), 0)}`,
    }
  },
  note: '🪵 Set posts to one-third their height and below the local frost line — a 10″×24″ hole takes nearly two 80-lb bags. Pickets shrink: butted cedar now is a spaced fence later.',
})

// ─────────────────────────────────────────────────────────────
// Paver Calculator(铺路石:面积 → 块数 + 碎石基料 + 铺沙)
// 每平方英尺块数:4×8=4.5 6×6=4 8×8=2.25 12×12=1;铺沙固定 1″
// ─────────────────────────────────────────────────────────────
export const PaverCalculatorClient = makeCalculatorClient({
  slug: 'paver-calculator',
  l10n: PaverCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Patio 16×12', values: { length: '16', width: '12', paver: '4x8', base: '4' } },
    { label: 'Walkway 3×20', values: { length: '20', width: '3', paver: '6x6', base: '4' } },
    { label: 'Driveway 24×20 @ 6″ base', values: { length: '24', width: '20', paver: '8x8', base: '6' } },
  ],
  inputs: [
    { key: 'length', label: 'Area length', suffix: 'ft', default: '16', slider: { min: 1, max: 200, step: 0.5 } },
    { key: 'width', label: 'Area width', suffix: 'ft', default: '12', slider: { min: 1, max: 200, step: 0.5 } },
    { key: 'paver', label: 'Paver size', default: '4x8', options: [
      // 短标签:4 段分段控件 375px 下每段约 70px,每 ft² 用量放 note
      { label: '4×8', value: '4x8' },
      { label: '6×6', value: '6x6' },
      { label: '8×8', value: '8x8' },
      { label: '12×12', value: '12x12' },
    ]},
    { key: 'base', label: 'Crushed base depth', suffix: 'in', default: '4', slider: { min: 2, max: 12, step: 1 } },
    { key: 'waste', label: 'Waste margin', suffix: '%', default: '10', slider: { min: 5, max: 20, step: 1 } },
  ],
  outputs: [
    { key: 'pavers', label: 'Pavers to buy', highlight: true, sublabel: 'Waste included' },
    { key: 'area', label: 'Patio area' },
    { key: 'gravelYd', label: 'Crushed base' },
    { key: 'sandYd', label: 'Bedding sand (1″)' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(PaverCalculatorL10n, locale, k, fb)
    const l = toNumStrict(v.length), w = toNumStrict(v.width)
    if (!(l > 0) || !(w > 0)) {
      return {
        pavers: `⚠️ ${T('errDims', 'Enter valid area dimensions')}`,
        area: '—', gravelYd: '—', sandYd: '—',
      }
    }
    const perSqFt = v.paver === '6x6' ? 4 : v.paver === '8x8' ? 2.25 : v.paver === '12x12' ? 1 : 4.5
    const waste = Math.min(Math.max(toNum(v.waste), 0), 50)
    const base = Math.max(1, toNum(v.base))
    const area = l * w
    const pavers = Math.ceil(area * perSqFt * (1 + waste / 100))
    const gravelCf = area * (base / 12)
    const sandCf = area * (1 / 12)
    return {
      pavers: `${pavers}`,
      area: `${fmtNum(area, 0)} ft²`,
      gravelYd: `${fmtNum(gravelCf / 27, 2)} yd³`,
      sandYd: `${fmtNum(sandCf / 27, 2)} yd³`,
    }
  },
  chart: {
    title: 'Base build-up volume',
    centerLabel: 'Base layers',
    slices: [
      { valueKey: 'gravelYd', label: 'Crushed base', color: '#3b82f6' },
      { valueKey: 'sandYd', label: 'Bedding sand', color: '#f59e0b' },
    ],
  },
  note: '🧱 Coverage runs 4.5 pieces per ft² for 4×8, 4 for 6×6, 2.25 for 8×8 and 1 for 12×12. Base depth follows traffic: 4″ for patios and paths, 6-12″ under driveways. Bedding sand stays at 1″ — thicker sand beds creep, rut, and wreck the surface.',
})

// ─────────────────────────────────────────────────────────────
// Deck Board Calculator(甲板:面积+板宽+间距 → 板数/线性英尺 + 托梁)
// 损耗固定 10%;托梁沿 deck length 按 OC 间距排布
// ─────────────────────────────────────────────────────────────
export const DeckBoardCalculatorClient = makeCalculatorClient({
  slug: 'deck-board-calculator',
  l10n: DeckBoardCalculatorL10n,
  urlState: true,
  presets: [
    { label: 'Platform 16×12', values: { length: '16', width: '12', boardLen: '16', joist: '16' } },
    { label: 'Small 10×10', values: { length: '10', width: '10', boardLen: '12', joist: '16' } },
    { label: 'Ground-level 20×14', values: { length: '20', width: '14', boardLen: '20', joist: '16' } },
  ],
  inputs: [
    { key: 'length', label: 'Deck length', suffix: 'ft', default: '16', slider: { min: 4, max: 200, step: 0.5 } },
    { key: 'width', label: 'Deck width', suffix: 'ft', default: '12', slider: { min: 4, max: 100, step: 0.5 } },
    { key: 'boardW', label: 'Board width', suffix: 'in', default: '5.5', slider: { min: 3.5, max: 12, step: 0.25 } },
    { key: 'gap', label: 'Gap between boards', suffix: 'in', default: '0.125', slider: { min: 0, max: 0.5, step: 0.0625 } },
    { key: 'boardLen', label: 'Stock board length', default: '16', options: [
      { label: '8 ft', value: '8' },
      { label: '12 ft', value: '12' },
      { label: '16 ft', value: '16' },
      { label: '20 ft', value: '20' },
    ]},
    { key: 'joist', label: 'Joist spacing (OC)', default: '16', options: [
      { label: '12 in', value: '12' },
      { label: '16 in', value: '16' },
      { label: '24 in', value: '24' },
    ]},
  ],
  outputs: [
    { key: 'boards', label: 'Decking boards', highlight: true, sublabel: '10% waste included' },
    { key: 'lineal', label: 'Linear feet of decking' },
    { key: 'joists', label: 'Joists' },
    { key: 'area', label: 'Deck area' },
  ],
  compute: (v, locale) => {
    const T = (k: string, fb: string) => tuiFromEntry(DeckBoardCalculatorL10n, locale, k, fb)
    const l = toNumStrict(v.length), w = toNumStrict(v.width)
    const boardW = toNumStrict(v.boardW)
    if (!(l > 0) || !(w > 0) || !(boardW > 0)) {
      return {
        boards: `⚠️ ${T('errDims', 'Enter valid deck and board dimensions')}`,
        lineal: '—', joists: '—', area: '—',
      }
    }
    const gap = Math.max(0, toNum(v.gap))
    const boardLen = toNum(v.boardLen) || 16
    const joistSp = toNum(v.joist) || 16
    const area = l * w
    // 每线性英尺覆盖宽度 =(板宽+缝)/12 ft;线材 = 面积 ÷ 覆盖宽度
    const lineal = (area * 12) / (boardW + gap)
    const boards = Math.ceil((lineal * 1.1) / boardLen)
    const joists = Math.ceil(l / (joistSp / 12)) + 1
    return {
      boards: `${boards} × ${boardLen} ft`,
      lineal: `${fmtNum(lineal, 0)} ft`,
      joists: `${joists}`,
      area: `${fmtNum(area, 0)} ft²`,
    }
  },
  chart: { kind: 'compare', title: 'Board count by stock length' },
  compare: (v) => {
    const l = toNum(v.length), w = toNum(v.width), boardW = toNum(v.boardW)
    if (!(l > 0) || !(w > 0) || !(boardW > 0)) return null
    const gap = Math.max(0, toNum(v.gap))
    const lineal = ((l * w) * 12) / (boardW + gap)
    const boardsAt = (len: number) => Math.ceil((lineal * 1.1) / len)
    return {
      rows: [
        { label: '12 ft boards', segments: [{ label: 'Boards', value: boardsAt(12), color: '#3b82f6' }] },
        { label: '16 ft boards', segments: [{ label: 'Boards', value: boardsAt(16), color: '#22c55e' }] },
        { label: '20 ft boards', segments: [{ label: 'Boards', value: boardsAt(20), color: '#f59e0b' }] },
      ],
      formatTotal: (n) => `${fmtNum(Math.round(n), 0)}`,
    }
  },
  note: '🪵 Gap pressure-treated lumber 1/8-1/4″ — it shrinks as it dries — and follow composite specs (often 3/16″+). 16″ OC joists suit most decking; 24″ OC only for boards perpendicular to joists.',
})
