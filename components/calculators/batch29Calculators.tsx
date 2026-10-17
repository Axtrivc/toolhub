'use client'

/**
 * 第二十九批(B9 家居与厨房):配置驱动计算器
 *  - btu-calculator:空调 BTU/吨位选型(面积×层高×日照/顶楼/人数修正);
 *  - board-foot-calculator:板英尺体积与订单成本;
 *  - wallpaper-calculator:壁纸卷数(逐条法,含对花重复);
 *  - raised-bed-soil-calculator:菜床土方与 Mel 混合/经济配方;
 *  - pool-volume-calculator:矩形/圆形/肾形泳池水量与循环周期;
 *  - coffee-ratio-calculator:冲煮比例双向换算;
 *  - bread-hydration-calculator:面包水合度与预发酵修正。
 * 均基于 makeCalculatorClient;compute 纯函数,非法输入返回 ⚠️ 文案。
 */

import { makeCalculatorClient } from '../calculator/makeCalculatorClient'
import { fmtNum, fmtUSD, toNum, toNumStrict } from '@/lib/format'
import { tui } from '@/lib/i18n/tool-l10n-accessors/calculators/batch29Calculators'
import { BtuCalculatorL10n } from '@/lib/i18n/tools-l10n/btu-calculator'
import { BoardFootCalculatorL10n } from '@/lib/i18n/tools-l10n/board-foot-calculator'
import { WallpaperCalculatorL10n } from '@/lib/i18n/tools-l10n/wallpaper-calculator'
import { RaisedBedSoilCalculatorL10n } from '@/lib/i18n/tools-l10n/raised-bed-soil-calculator'
import { PoolVolumeCalculatorL10n } from '@/lib/i18n/tools-l10n/pool-volume-calculator'
import { CoffeeRatioCalculatorL10n } from '@/lib/i18n/tools-l10n/coffee-ratio-calculator'
import { BreadHydrationCalculatorL10n } from '@/lib/i18n/tools-l10n/bread-hydration-calculator'

// ── 空调 BTU 计算器 ──
export const BtuCalculatorClient = makeCalculatorClient({
  slug: 'btu-calculator',
  l10n: BtuCalculatorL10n,
  inputs: [
    { key: 'area', label: 'Room area', suffix: 'sq ft', default: '350', slider: { min: 50, max: 2000, step: 10 } },
    { key: 'ceiling', label: 'Ceiling height', suffix: 'ft', default: '8', slider: { min: 6, max: 16, step: 0.5 } },
    { key: 'sun', label: 'Sun exposure', default: 'average', options: [
      { label: 'Heavily shaded (−10%)', value: 'shaded' },
      { label: 'Average', value: 'average' },
      { label: 'Very sunny (+10%)', value: 'sunny' },
    ]},
    { key: 'topFloor', label: 'Top floor / attic above', default: 'no', options: [
      { label: 'No', value: 'no' },
      { label: 'Yes (+10%)', value: 'yes' },
    ]},
    { key: 'occupants', label: 'People in room', default: '2', slider: { min: 1, max: 10, step: 1 } },
    { key: 'kitchen', label: 'Is it a kitchen?', default: 'no', options: [
      { label: 'No', value: 'no' },
      { label: 'Yes (+4,000 BTU)', value: 'yes' },
    ]},
  ],
  outputs: [
    { key: 'btu', label: 'Cooling capacity needed', highlight: true },
    { key: 'tons', label: 'Size in tons', sublabel: '12,000 BTU per ton' },
    { key: 'kw', label: 'Cooling power' },
    { key: 'sizing', label: 'Sizing check' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('btu-calculator', locale, key, fb)
    const area = toNumStrict(v.area)
    const ceiling = toNumStrict(v.ceiling)
    const occupants = toNum(v.occupants)
    if (isNaN(area) || isNaN(ceiling) || area <= 0 || area > 2000 || ceiling < 6 || ceiling > 16) {
      return {
        btu: `⚠️ ${T('errInvalid', 'Enter a valid area (50-2,000 sq ft) and ceiling (6-16 ft)')}`,
        tons: '—', kw: '—', sizing: '—',
      }
    }
    const sunAdj = v.sun === 'shaded' ? -0.1 : v.sun === 'sunny' ? 0.1 : 0
    const floorAdj = v.topFloor === 'yes' ? 0.1 : 0
    const areaOnly = area * 20
    const total =
      areaOnly * (ceiling / 8) * (1 + sunAdj + floorAdj) +
      600 * Math.max(0, occupants - 2) +
      (v.kitchen === 'yes' ? 4000 : 0)
    // 结果取整到 500 BTU(市售窗机/小分流的常见步进)
    const rounded = Math.max(0, Math.round(total / 500) * 500)
    const ratio = rounded / areaOnly
    const sizing =
      ratio > 1.3 ? `⚠️ ${T('sizing.up', 'Corrections add a lot — fix insulation or shade before buying a bigger unit')}`
      : ratio < 0.85 ? `✅ ${T('sizing.down', 'Shading trims the load — a smaller unit avoids short-cycling')}`
      : T('sizing.right', 'Right-sized: oversizing cools fast but never dehumidifies')
    return {
      btu: `${rounded.toLocaleString('en-US')} BTU/hr`,
      tons: `${fmtNum(rounded / 12000, 2)} tons`,
      kw: `${fmtNum(rounded * 0.000293071, 1)} kW`,
      sizing,
    }
  },
  sample: { area: '350', ceiling: '9', sun: 'sunny', topFloor: 'yes', occupants: '3', kitchen: 'no' },
  presets: [
    { label: 'Sunny south bedroom', values: { area: '140', ceiling: '8', sun: 'sunny', topFloor: 'no', occupants: '2', kitchen: 'no' } },
    { label: 'Shaded north office', values: { area: '180', ceiling: '9', sun: 'shaded', topFloor: 'no', occupants: '1', kitchen: 'no' } },
    { label: 'Top-floor studio', values: { area: '550', ceiling: '10', sun: 'sunny', topFloor: 'yes', occupants: '3', kitchen: 'yes' } },
  ],
  chart: { kind: 'compare', title: 'Base load vs your corrections' },
  compare: (v) => {
    const area = toNum(v.area), ceiling = toNum(v.ceiling)
    if (!(area > 0) || area > 2000 || !(ceiling >= 6) || ceiling > 16) return null
    const sunAdj = v.sun === 'shaded' ? -0.1 : v.sun === 'sunny' ? 0.1 : 0
    const floorAdj = v.topFloor === 'yes' ? 0.1 : 0
    const total =
      area * 20 * (ceiling / 8) * (1 + sunAdj + floorAdj) +
      600 * Math.max(0, toNum(v.occupants) - 2) +
      (v.kitchen === 'yes' ? 4000 : 0)
    return {
      rows: [
        { label: 'Area only (20 BTU/ft²)', segments: [{ label: 'Cooling load', value: area * 20, color: '#94a3b8' }] },
        { label: 'With your corrections', segments: [{ label: 'Cooling load', value: Math.round(total / 500) * 500, color: '#3b82f6' }] },
      ],
      formatTotal: (n) => `${Math.round(n).toLocaleString('en-US')} BTU`,
    }
  },
  note: '📏 Rule of thumb: 20 BTU per sq ft at 8 ft ceilings. An oversized unit short-cycles — it cools the air fast but never runs long enough to dehumidify, so do not round a small room up to the next size.',
})

// ── 板英尺计算器 ──
export const BoardFootCalculatorClient = makeCalculatorClient({
  slug: 'board-foot-calculator',
  l10n: BoardFootCalculatorL10n,
  inputs: [
    { key: 'thickness', label: 'Thickness', suffix: 'in', default: '1.5', slider: { min: 0.25, max: 8, step: 0.25 } },
    { key: 'width', label: 'Width', suffix: 'in', default: '5.5', slider: { min: 0.5, max: 24, step: 0.5 } },
    { key: 'length', label: 'Length', suffix: 'ft', default: '8', slider: { min: 1, max: 24, step: 0.5 } },
    { key: 'qty', label: 'Pieces', default: '10', slider: { min: 1, max: 200, step: 1 } },
    { key: 'price', label: 'Price per board foot', suffix: '$', default: '6.5', slider: { min: 1, max: 30, step: 0.5 } },
  ],
  outputs: [
    { key: 'boardFeet', label: 'Total board feet', highlight: true },
    { key: 'perPiece', label: 'Board feet per piece' },
    { key: 'totalCost', label: 'Order cost' },
    { key: 'perPieceCost', label: 'Cost per piece' },
  ],
  compute: (v, locale) => {
    const t = toNumStrict(v.thickness)
    const w = toNumStrict(v.width)
    const l = toNumStrict(v.length)
    const qty = toNum(v.qty)
    const price = toNum(v.price)
    if (isNaN(t) || isNaN(w) || isNaN(l) || t <= 0 || w <= 0 || l <= 0 || qty <= 0 || price < 0) {
      return {
        boardFeet: `⚠️ ${tui('board-foot-calculator', locale, 'errPositive', 'Enter positive dimensions and piece count')}`,
        perPiece: '—', totalCost: '—', perPieceCost: '—',
      }
    }
    const bf = (t * w * l) / 12
    const total = bf * Math.max(1, Math.round(qty))
    return {
      boardFeet: `${fmtNum(total, 1)} board ft`,
      perPiece: `${fmtNum(bf, 2)} board ft`,
      totalCost: fmtUSD(total * price),
      perPieceCost: fmtUSD(bf * price),
    }
  },
  sample: { thickness: '1.5', width: '5.5', length: '8', qty: '10', price: '6.5' },
  note: "🪵 Nominal vs actual: a finished \"2×6\" measures 1.5 in × 5.5 in — that difference is ~23% of the volume. Sawmills quote per board foot (BDFT) or per MBF (1,000 bf); this tool's math is the industry T×W×(L÷12).",
})

// ── 壁纸卷数计算器(逐条法)──
export const WallpaperCalculatorClient = makeCalculatorClient({
  slug: 'wallpaper-calculator',
  l10n: WallpaperCalculatorL10n,
  inputs: [
    { key: 'perimeter', label: 'Total wall perimeter', suffix: 'ft', default: '48', slider: { min: 8, max: 160, step: 1 } },
    { key: 'height', label: 'Wall height', suffix: 'ft', default: '8', slider: { min: 6, max: 14, step: 0.5 } },
    { key: 'doors', label: 'Doors', default: '2', slider: { min: 0, max: 10, step: 1 } },
    { key: 'windows', label: 'Windows', default: '2', slider: { min: 0, max: 15, step: 1 } },
    { key: 'rollWidth', label: 'Roll width', suffix: 'in', default: '27', slider: { min: 18, max: 36, step: 0.5 } },
    { key: 'rollLength', label: 'Roll length', suffix: 'ft', default: '33', slider: { min: 10, max: 40, step: 0.5 } },
    { key: 'repeat', label: 'Pattern repeat', suffix: 'in', default: '10', slider: { min: 0, max: 36, step: 1 } },
  ],
  outputs: [
    { key: 'rolls', label: 'Rolls to buy', highlight: true },
    { key: 'strips', label: 'Strips needed' },
    { key: 'perRoll', label: 'Strips per roll' },
    { key: 'wallArea', label: 'Net wall area' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('wallpaper-calculator', locale, key, fb)
    const perimeter = toNumStrict(v.perimeter)
    const height = toNumStrict(v.height)
    const doors = Math.max(0, toNum(v.doors))
    const windows = Math.max(0, toNum(v.windows))
    const rollWidth = toNumStrict(v.rollWidth)
    const rollLength = toNumStrict(v.rollLength)
    const repeat = Math.max(0, toNum(v.repeat))
    if (isNaN(perimeter) || isNaN(height) || isNaN(rollWidth) || isNaN(rollLength) ||
        perimeter <= 0 || height <= 0 || rollWidth <= 0 || rollLength <= 0) {
      return {
        rolls: `⚠️ ${T('errInvalid', 'Enter valid dimensions (perimeter, height, roll width and length must be positive)')}`,
        strips: '—', perRoll: '—', wallArea: '—',
      }
    }
    // 逐条法:开门洞宽度(门 32in、窗 36in)后按卷宽裁条
    const lineIn = Math.max(0, perimeter * 12 - doors * 32 - windows * 36)
    const strips = Math.ceil(lineIn / rollWidth)
    // 每条长度 = 墙高 + 4in 修边 + 对花重复(整条须从花位同一起点裁)
    const stripH = height + 0.33 + (repeat > 0 ? repeat / 12 : 0)
    const perRoll = Math.floor(rollLength / stripH)
    if (perRoll < 1) {
      return {
        rolls: `⚠️ ${T('errTall', 'One strip is taller than the roll — check roll length or wall height')}`,
        strips: `${strips}`, perRoll: '—', wallArea: '—',
      }
    }
    const rolls = Math.ceil(strips / perRoll)
    const area = Math.max(0, perimeter * height - doors * 20 - windows * 15)
    return {
      rolls: `${rolls}`,
      strips: `${strips}`,
      perRoll: `${perRoll}`,
      wallArea: `${fmtNum(area, 0)} ft²`,
    }
  },
  sample: { perimeter: '48', height: '8', doors: '2', windows: '2', rollWidth: '27', rollLength: '33', repeat: '10' },
  chart: { kind: 'compare', title: 'Double vs single rolls' },
  compare: (v) => {
    const perimeter = toNum(v.perimeter), height = toNum(v.height)
    const doors = Math.max(0, toNum(v.doors)), windows = Math.max(0, toNum(v.windows))
    const rollWidth = toNum(v.rollWidth), rollLength = toNum(v.rollLength), repeat = Math.max(0, toNum(v.repeat))
    if (!(perimeter > 0) || !(height > 0) || !(rollWidth > 0) || !(rollLength > 0)) return null
    const rollsFor = (len: number) => {
      const strips = Math.ceil(Math.max(0, perimeter * 12 - doors * 32 - windows * 36) / rollWidth)
      const stripH = height + 0.33 + (repeat > 0 ? repeat / 12 : 0)
      const perRoll = Math.floor(len / stripH)
      return perRoll < 1 ? null : Math.ceil(strips / perRoll)
    }
    const dbl = rollsFor(rollLength)
    const single = rollsFor(16.5)
    if (dbl == null || single == null) return null
    return {
      rows: [
        { label: 'Your roll', segments: [{ label: 'Rolls', value: dbl, color: '#3b82f6' }] },
        { label: 'US single roll (16.5 ft)', segments: [{ label: 'Rolls', value: single, color: '#f59e0b' }] },
      ],
      formatTotal: (n) => `${Math.round(n)}`,
    }
  },
  note: '🧱 Strip counting beats area division: every strip must start at the same point in the pattern, so a repeat eats real length per strip. US "double rolls" (27 in × 33 ft) and Euro rolls (21 in × 33 ft) waste far less than 16.5 ft singles. Buy one extra roll — dye lots differ.',
})

// ── 菜床土方计算器 ──
export const RaisedBedSoilCalculatorClient = makeCalculatorClient({
  slug: 'raised-bed-soil-calculator',
  l10n: RaisedBedSoilCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'unit', label: 'Units', default: 'ft', options: [
      { label: 'Feet & inches (imperial)', value: 'ft' },
      { label: 'Meters & cm (metric)', value: 'm' },
    ]},
    { key: 'length', label: 'Bed length', default: '8', slider: { min: 1, max: 40, step: 0.5 } },
    { key: 'width', label: 'Bed width', default: '4', slider: { min: 1, max: 20, step: 0.5 } },
    { key: 'depth', label: 'Bed depth', default: '12', slider: { min: 2, max: 48, step: 1 } },
  ],
  outputs: [
    { key: 'volume', label: 'Soil volume to fill', highlight: true },
    { key: 'bulkOrder', label: 'For bulk ordering' },
    { key: 'settled', label: 'After settling', sublabel: 'Fluffed soil compacts ~25%' },
    { key: 'melMix', label: "Mel's Mix (1:1:1)", sublabel: '⅓ compost · ⅓ coir · ⅓ vermiculite' },
    { key: 'budgetMix', label: 'Budget blend', sublabel: '50% topsoil · 30% compost · 20% coir' },
    { key: 'bags', label: 'Bagged soil' },
  ],
  compute: (v, locale) => {
    const T = (key: string, fb: string) => tui('raised-bed-soil-calculator', locale, key, fb)
    const len = toNumStrict(v.length)
    const wid = toNumStrict(v.width)
    const dep = toNumStrict(v.depth)
    if (isNaN(len) || isNaN(wid) || isNaN(dep) || len <= 0 || wid <= 0 || dep <= 0) {
      return {
        volume: `⚠️ ${T('errPositive', 'Enter positive bed dimensions')}`,
        bulkOrder: '—', settled: '—', melMix: '—', budgetMix: '—', bags: '—',
      }
    }
    // 统一换算:ft³ 为枢纽(1 ft³ = 28.3168466 L)
    let ft3: number
    if (v.unit === 'm') ft3 = (len * wid * (dep / 100)) / 0.0283168466
    else ft3 = len * wid * (dep / 12)
    const m3 = ft3 * 0.0283168466
    const liters = m3 * 1000
    const yd3 = ft3 / 27
    const ft = (n: number, d = 1) => fmtNum(n, d)
    return {
      volume: v.unit === 'm'
        ? `${fmtNum(m3, 2)} m³ · ${fmtNum(liters, 0)} L`
        : `${ft(ft3)} ft³ · ${fmtNum(liters, 0)} L`,
      bulkOrder: `${fmtNum(yd3, 2)} yd³ · ${fmtNum(m3, 2)} m³`,
      settled: v.unit === 'm' ? `≈ ${fmtNum(m3 * 0.75, 2)} m³` : `≈ ${ft(ft3 * 0.75)} ft³`,
      melMix: v.unit === 'm'
        ? `${fmtNum(m3 / 3, 2)} m³ (${fmtNum(liters / 3, 0)} L) ${T('each', 'each')}`
        : `${ft(ft3 / 3)} ft³ (${fmtNum(liters / 3, 0)} L) ${T('each', 'each')}`,
      budgetMix: v.unit === 'm'
        ? `${fmtNum(m3 * 0.5, 2)} / ${fmtNum(m3 * 0.3, 2)} / ${fmtNum(m3 * 0.2, 2)} m³`
        : `${ft(ft3 * 0.5)} / ${ft(ft3 * 0.3)} / ${ft(ft3 * 0.2)} ft³`,
      bags: `${Math.ceil(liters / 30)} × 30 L`,
    }
  },
  sample: { unit: 'ft', length: '8', width: '4', depth: '12' },
  presets: [
    { label: 'Classic 4×8 bed', values: { unit: 'ft', length: '8', width: '4', depth: '12' } },
    { label: 'Shallow 2×6 herb bed', values: { unit: 'ft', length: '6', width: '2', depth: '8' } },
    { label: '1 × 0.5 m balcony', values: { unit: 'm', length: '1', width: '0.5', depth: '30' } },
  ],
  chart: { kind: 'compare', title: "Mel's Mix vs budget blend" },
  compare: (v) => {
    const len = toNum(v.length), wid = toNum(v.width), dep = toNum(v.depth)
    if (!(len > 0) || !(wid > 0) || !(dep > 0)) return null
    const ft3 = v.unit === 'm' ? (len * wid * (dep / 100)) / 0.0283168466 : len * wid * (dep / 12)
    return {
      rows: [
        { label: "Mel's Mix (1:1:1)", segments: [
          { label: 'Compost', value: ft3 / 3, color: '#22c55e' },
          { label: 'Coir', value: ft3 / 3, color: '#a16207' },
          { label: 'Vermiculite', value: ft3 / 3, color: '#f59e0b' },
        ] },
        { label: 'Budget blend (50/30/20)', segments: [
          { label: 'Compost', value: ft3 * 0.3, color: '#22c55e' },
          { label: 'Coir', value: ft3 * 0.2, color: '#a16207' },
          { label: 'Topsoil', value: ft3 * 0.5, color: '#78350f' },
        ] },
      ],
      formatTotal: (n) => `${fmtNum(n, 1)} ft³`,
    }
  },
  note: "🌱 Bagged soil is measured fluffed and settles 20-30% in the first season — the settled figure is what the bed really holds. Mel's Mix (Mel Bartholomew, Square Foot Gardening) drains superbly; the topsoil blend is cheaper but heavier and compacts faster.",
})

// ── 泳池水量计算器 ──
export const PoolVolumeCalculatorClient = makeCalculatorClient({
  slug: 'pool-volume-calculator',
  l10n: PoolVolumeCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'shape', label: 'Pool shape', default: 'rect', options: [
      { label: 'Rectangular', value: 'rect' },
      { label: 'Round (length = diameter)', value: 'round' },
      { label: 'Kidney', value: 'kidney' },
    ]},
    { key: 'length', label: 'Length / diameter', suffix: 'ft', default: '32', slider: { min: 4, max: 80, step: 0.5 } },
    { key: 'width', label: 'Width (width A for kidney)', suffix: 'ft', default: '16', slider: { min: 4, max: 50, step: 0.5 } },
    { key: 'width2', label: 'Kidney width B', suffix: 'ft', default: '10', slider: { min: 0, max: 50, step: 0.5 } },
    { key: 'depth', label: 'Average depth', suffix: 'ft', default: '5', slider: { min: 2, max: 14, step: 0.5 } },
    { key: 'flow', label: 'Pump flow rate', suffix: 'GPM', default: '60', slider: { min: 10, max: 250, step: 5 } },
  ],
  outputs: [
    { key: 'gallons', label: 'Pool volume', highlight: true },
    { key: 'liters', label: 'In liters' },
    { key: 'turnover', label: 'One full turnover', sublabel: 'Whole volume through the filter' },
    { key: 'perDay', label: 'Turnovers per day' },
  ],
  compute: (v, locale) => {
    const len = toNumStrict(v.length)
    const wid = toNumStrict(v.width)
    const wid2 = Math.max(0, toNum(v.width2))
    const depth = toNumStrict(v.depth)
    const flow = toNum(v.flow)
    if (isNaN(len) || isNaN(wid) || isNaN(depth) || len <= 0 || wid <= 0 || depth <= 0) {
      return {
        gallons: `⚠️ ${tui('pool-volume-calculator', locale, 'errPositive', 'Enter positive dimensions and depth')}`,
        liters: '—', turnover: '—', perDay: '—',
      }
    }
    let ft3: number
    if (v.shape === 'round') ft3 = Math.PI * (len / 2) ** 2 * depth
    else if (v.shape === 'kidney') ft3 = 0.45 * (wid + wid2) * len * depth
    else ft3 = len * wid * depth
    const gal = ft3 * 7.4805195
    const l = ft3 * 28.3168466
    if (flow <= 0) {
      return {
        gallons: `${Math.round(gal).toLocaleString('en-US')} gal`,
        liters: `${Math.round(l).toLocaleString('en-US')} L`,
        turnover: '—',
        perDay: '—',
      }
    }
    const minutes = gal / flow
    return {
      gallons: `${Math.round(gal).toLocaleString('en-US')} gal`,
      liters: `${Math.round(l).toLocaleString('en-US')} L`,
      turnover: `${fmtNum(minutes / 60, 1)} h`,
      perDay: `${fmtNum((24 * 60) / minutes, 1)}×`,
    }
  },
  sample: { shape: 'rect', length: '32', width: '16', width2: '10', depth: '5', flow: '60' },
  note: '🏊 Average depth on a sloped floor ≈ (shallow end + deep end) ÷ 2; 1 ft³ = 7.48 gal. Residential guidance turns the full volume over every 8-12 hours. Circulation sizing only — this is not water-chemistry dosing advice.',
})

// ── 咖啡冲煮比例计算器 ──
export const CoffeeRatioCalculatorClient = makeCalculatorClient({
  slug: 'coffee-ratio-calculator',
  l10n: CoffeeRatioCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'method', label: 'Brew method', default: '16', options: [
      { label: 'Pour-over / drip (1:16)', value: '16' },
      { label: 'AeroPress standard (1:14)', value: '14' },
      { label: 'French press (1:12)', value: '12' },
      { label: 'Cold brew concentrate (1:8)', value: '8' },
      { label: 'Espresso (1:2)', value: '2' },
    ]},
    { key: 'amount', label: 'Amount you know', suffix: 'g', default: '500', slider: { min: 10, max: 2000, step: 10 } },
    { key: 'known', label: 'That amount is', default: 'water', options: [
      { label: 'Water', value: 'water' },
      { label: 'Coffee', value: 'coffee' },
    ]},
  ],
  outputs: [
    { key: 'coffee', label: 'Ground coffee', highlight: true },
    { key: 'water', label: 'Brew water' },
    { key: 'ratio', label: 'Ratio' },
    { key: 'cups', label: 'Cups (8 oz)' },
  ],
  compute: (v, locale) => {
    const ratio = toNumStrict(v.method)
    const amount = toNumStrict(v.amount)
    if (isNaN(ratio) || isNaN(amount) || ratio <= 0 || amount <= 0) {
      return {
        coffee: `⚠️ ${tui('coffee-ratio-calculator', locale, 'errPositive', 'Enter a positive amount')}`,
        water: '—', ratio: '—', cups: '—',
      }
    }
    const water = v.known === 'coffee' ? amount * ratio : amount
    const coffee = v.known === 'coffee' ? amount : amount / ratio
    const cups = water / 236.588
    return {
      coffee: `${fmtNum(coffee, 1)} g`,
      water: `${fmtNum(water, 0)} g`,
      ratio: `1:${ratio}`,
      cups: fmtNum(cups, 1),
    }
  },
  sample: { method: '16', amount: '500', known: 'water' },
  presets: [
    { label: 'Morning mug (350 g water)', values: { method: '16', amount: '350', known: 'water' } },
    { label: 'French press pot (1 L)', values: { method: '12', amount: '1000', known: 'water' } },
    { label: 'Double espresso (18 g in)', values: { method: '2', amount: '18', known: 'coffee' } },
  ],
  chart: { kind: 'compare', title: 'Coffee grams for your water, by method' },
  compare: (v) => {
    const ratio = toNum(v.method)
    const amount = toNum(v.amount)
    if (!(ratio > 0) || !(amount > 0)) return null
    const water = v.known === 'coffee' ? amount * ratio : amount
    const g = (r: number) => water / r
    return {
      rows: [
        { label: 'Espresso 1:2', segments: [{ label: 'Coffee', value: g(2), color: '#78350f' }] },
        { label: 'Cold brew 1:8', segments: [{ label: 'Coffee', value: g(8), color: '#92400e' }] },
        { label: 'French press 1:12', segments: [{ label: 'Coffee', value: g(12), color: '#b45309' }] },
        { label: 'Pour-over 1:16', segments: [{ label: 'Coffee', value: g(16), color: '#f59e0b' }] },
      ],
      formatTotal: (n) => `${Math.round(n)} g`,
    }
  },
  note: '☕ Balanced drip cups live near 1:15-1:17; French press 1:12, espresso 1:2 by mass (scales, not volume). 1 g water = 1 ml, so grams scale cleanly. When a brew tastes off, adjust grind before you touch the ratio.',
})

// ── 面包水合度计算器 ──
export const BreadHydrationCalculatorClient = makeCalculatorClient({
  slug: 'bread-hydration-calculator',
  l10n: BreadHydrationCalculatorL10n,
  urlState: true,
  inputs: [
    { key: 'flour', label: 'Flour', suffix: 'g', default: '500', slider: { min: 100, max: 3000, step: 50 } },
    { key: 'water', label: 'Water', suffix: 'g', default: '350', slider: { min: 50, max: 2500, step: 10 } },
    { key: 'levain', label: 'Levain / starter', suffix: 'g', default: '100', slider: { min: 0, max: 1000, step: 10 } },
    { key: 'levainHyd', label: 'Levain hydration', suffix: '%', default: '100', slider: { min: 50, max: 150, step: 5 } },
    { key: 'saltPct', label: 'Salt (baker\'s %)', suffix: '%', default: '2', slider: { min: 1, max: 3, step: 0.1 } },
  ],
  outputs: [
    { key: 'hydration', label: 'Dough hydration', highlight: true, sublabel: 'Water ÷ flour, levain excluded' },
    { key: 'effHydration', label: 'Effective hydration', sublabel: 'Counting levain flour & water' },
    { key: 'levainPct', label: 'Levain percent', sublabel: 'Levain ÷ flour' },
    { key: 'salt', label: 'Salt' },
    { key: 'doughWeight', label: 'Total dough weight' },
  ],
  compute: (v, locale) => {
    const flour = toNumStrict(v.flour)
    const water = toNumStrict(v.water)
    const levain = Math.max(0, toNum(v.levain))
    const levainHyd = toNum(v.levainHyd)
    const saltPct = toNum(v.saltPct)
    if (isNaN(flour) || isNaN(water) || isNaN(levainHyd) || flour <= 0 || water < 0 || levainHyd <= 0 || levainHyd > 300 || saltPct < 0) {
      return {
        hydration: `⚠️ ${tui('bread-hydration-calculator', locale, 'errPositive', 'Enter a positive flour weight and non-negative water')}`,
        effHydration: '—', levainPct: '—', salt: '—', doughWeight: '—',
      }
    }
    const hyd = (water / flour) * 100
    // levain 含水:h% → 水占比 = h/(100+h),粉占比 = 100/(100+h)(整 levain 重量拆分)
    const levainWater = (levain * levainHyd) / (100 + levainHyd)
    const levainFlour = (levain * 100) / (100 + levainHyd)
    const eff = ((water + levainWater) / (flour + levainFlour)) * 100
    const salt = (flour * saltPct) / 100
    return {
      hydration: `${fmtNum(hyd, 1)}%`,
      effHydration: `${fmtNum(eff, 1)}%`,
      levainPct: `${fmtNum((levain / flour) * 100, 0)}%`,
      salt: `${fmtNum(salt, 1)} g`,
      doughWeight: `${fmtNum(flour + water + levain + salt, 0)} g`,
    }
  },
  sample: { flour: '500', water: '350', levain: '100', levainHyd: '100', saltPct: '2' },
  chart: {
    kind: 'gauge',
    title: 'Hydration class',
    valueKey: 'hydration',
    min: 40,
    max: 100,
    zones: [
      { upTo: 58, color: '#94a3b8', label: 'Stiff — bagels' },
      { upTo: 68, color: '#3b82f6', label: 'Standard loaf' },
      { upTo: 78, color: '#22c55e', label: 'High — artisan' },
      { upTo: 100, color: '#f97316', label: 'Very high — ciabatta' },
    ],
    formatValue: (n) => `${n.toFixed(1)}%`,
  },
  note: "🥖 Baker's percentages always put flour at 100%. Higher hydration opens the crumb but makes dough slack — 70% is a friendly sandwich loaf, 80%+ wants stretch-and-folds. A 100%-hydration levain raises effective hydration as it grows in the dough.",
})
