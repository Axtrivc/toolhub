/**
 * 工具「加载示例」数据注册表 —— 站内唯一的示例数据源(Single Source of Truth)
 *
 * 作用:
 *  为工具交互区提供一键填充的测试数据,降低用户/爬虫体验门槛,
 *  同时让 HowTo JSON-LD 的 Step 1「Input your values ... click Load Sample」
 *  始终对应一个真实可见的页面按钮(避免 schema 与页面失配)。
 *
 * 数据形态分两种:
 *  - 计算器(配置驱动): `calculatorSamples[slug]` —— key→value,
 *    key 对应 CalculatorConfig.inputs[].key。
 *  - 单位转换器(工厂驱动): `converterSamples[slug]` —— { value, from, to },
 *    匹配 makeUnitConverter 的 value/from/to 三个 state。
 *
 * 维护规范:
 *  - 新增某工具示例时,只改本文件;key 必须与该工具 config.inputs 的 key 完全一致。
 *  - 用贴近真实场景的数值(如房贷 $400k/30y/6.8%),既给用户参照也利于 SEO 长尾。
 *  - 未注册的工具返回空对象/undefined,Load Sample 按钮自动隐藏(见 LoadSampleButton)。
 */

// ─────────────────────────── 计算器示例 ───────────────────────────

/**
 * 计算器示例数据:key 对应 makeCalculatorClient 的 config.inputs[].key,
 * value 为字符串(与 input value 类型一致)。
 */
export const calculatorSamples: Record<string, Record<string, string>> = {
  // ── 金融 / 生活计算器 ──
  'loan-calculator': { amount: '400000', rate: '6.8', years: '30' },
  'mortgage-calculator': { home: '400000', down: '20', rate: '6.8', years: '30' },
  'compound-interest-calculator': { principal: '10000', rate: '7', years: '20', monthly: '200' },
  'simple-interest-calculator': { principal: '5000', rate: '5', years: '3' },
  'savings-goal-calculator': { goal: '50000', years: '5', rate: '4', current: '5000' },
  'annuity-calculator': { principal: '300000', years: '20', rate: '5' },
  'credit-card-payoff-calculator': { balance: '8000', apr: '22', payment: '300' },
  'credit-card-minimum-payment-calculator': { balance: '5000', apr: '22', minPct: '2' },
  'roi-calculator': { initial: '10000', final: '15000', years: '3' },
  'apy-calculator': { principal: '10000', apr: '4.5', compound: '12', years: '5' },
  'markup-calculator': { cost: '60', markup: '40' },
  'commission-calculator': { sales: '400000', rate: '3', base: '3000' },
  'tip-calculator': { bill: '85', tipPct: '18', people: '2' },
  'bill-split-calculator': { total: '120', tip: '18', people: '4' },
  'discount-calculator': { price: '79.99', discount: '30' },
  'sales-tax-calculator': { amount: '50', rate: '8.25', mode: 'add' },
  'percentage-calculator': { x: '25', y: '200', mode: '1' },
  'cash-back-calculator': { spend: '24000', rate: '2', fee: '0' },
  'down-payment-calculator': { price: '400000', down: '20' },
  'dti-calculator': { income: '6000', debts: '1500' },
  'income-tax-estimator': { income: '75000', filing: 'single' },
  'capital-gains-tax-estimator': { purchase: '10000', sale: '16000', years: '2', bracket: '24' },
  'rent-vs-buy-calculator': { home: '400000', rent: '1800', down: '20', rate: '6.8', years: '7' },
  'hourly-to-salary-calculator': { hourly: '28', hours: '40' },
  'salary-converter': { unit: 'annual', amount: '65000', hours: '40' },
  'retirement-calculator': { current: '120000', monthly: '800', rate: '6', years: '30' },
  'net-worth-calculator': { assets: '450000', liabilities: '180000' },
  'inflation-calculator': { amount: '1000', rate: '3', years: '14' },
  'unit-price-calculator': { price1: '12.99', size1: '500', unit1: 'g', price2: '19.99', size2: '750', unit2: 'g' },

  // ── 健康 ──
  'bmi-calculator': { weight: '70', height: '175' },
  'bmr-calculator': { gender: 'male', age: '30', weight: '70', height: '175' },
  'calorie-calculator': { gender: 'male', age: '30', weight: '70', height: '175', activity: 'moderate' },
  'body-fat-calculator': { gender: 'male', height: '175', neck: '38', waist: '85', hip: '95' },
  'macro-calculator': { calories: '2200', goal: 'maintain' },
  'ideal-weight-calculator': { gender: 'male', height: '175' },
  'water-intake-calculator': { weight: '70', activity: '30', climate: 'normal' },
  'pregnancy-due-date-calculator': { lmp: '2025-01-01' },
  'tdee-calculator': { weight: '70', height: '175', age: '30', sex: 'male', activity: '1.55' },

  // ── 计算器型转换器(length 用 makeCalculatorClient,inputs 为 value/from/to)──
  'length-converter': { value: '100', from: 'm', to: 'ft' },

  // ── 数学 / 几何 ──
  'circle-calculator': { r: '8' },
  'triangle-calculator': { a: '3', b: '4', c: '5' },
  'rectangle-calculator': { w: '12', h: '8' },
  'trapezoid-calculator': { a: '6', b: '10', h: '4' },
  'cube-calculator': { side: '5' },
  'sphere-calculator': { r: '7' },
  'fraction-calculator': { num1: '1', den1: '2', op: '+', num2: '1', den2: '3' },
  'ratio-calculator': { a: '3', b: '4', c: '9' },
  'lcm-gcd-calculator': { numbers: '12, 18, 24' },
  'combination-calculator': { n: '10', r: '3' },
  'permutation-calculator': { n: '8', r: '3' },
  'average-calculator': { numbers: '12, 15, 22, 9, 30' },
  'standard-deviation-calculator': { numbers: '4, 8, 15, 16, 23, 42' },
  'percentile-calculator': { numbers: '40, 55, 60, 70, 80, 90', p: '75' },
  'prime-number-checker': { n: '9973' },
  'prime-factorization-calculator': { n: '360' },

  // ── 教育成绩 ──
  'gpa-calculator': { courses: '4' },
  'grade-calculator': { earned: '85', possible: '100' },
  'final-grade-calculator': { current: '85', goal: '90', finalWeight: '25' },
  'age-calculator': { dob: '1995-06-15' },
  'age-difference-calculator': { birth1: '1990', birth2: '1998' },
  'date-difference-calculator': { start: '2024-01-01', end: '2024-12-31' },

  // ── 其它 ──
  'scientific-notation-converter': { number: '12345.678' },
}

// ─────────────────────────── 单位转换器示例 ───────────────────────────

/**
 * 单位转换器示例数据:匹配 makeUnitConverter 的 value/from/to 三个 state。
 * from/to 用的是 unit key(对应 makeUnitConverter config.units 的 key),非显示标签。
 */
export interface ConverterSample {
  value: string
  /** 起始单位 key(对应 makeUnitConverter config.units 的 key) */
  from: string
  /** 目标单位 key */
  to: string
}

export const converterSamples: Record<string, ConverterSample> = {
  // 仅 makeUnitConverter 工厂型转换器在此(单位键对应该 config.units 的 key)。
  // length 用的是 makeCalculatorClient,其示例在上方 calculatorSamples 里;
  // temperature 是独立组件。
  'weight-converter': { value: '70', from: 'kg', to: 'lb' },
  'speed-converter': { value: '100', from: 'kmh', to: 'mph' },
  'area-converter': { value: '1', from: 'acre', to: 'sqm' },
  'volume-converter': { value: '2', from: 'cup', to: 'ml' },
  'time-converter': { value: '2', from: 'h', to: 'min' },
  'data-storage-converter': { value: '1', from: 'gb', to: 'mb' },
  'mass-converter': { value: '5', from: 'kg', to: 'carat' },
  'density-converter': { value: '1', from: 'kgm3', to: 'gl' },
  'power-converter': { value: '1', from: 'hp', to: 'w' },
  'flow-rate-converter': { value: '1000', from: 'cfm', to: 'm3h' },
  'angle-converter': { value: '90', from: 'deg', to: 'rad' },
  'fuel-economy-converter': { value: '30', from: 'mpg-us', to: 'l100km' },
  'pressure-converter': { value: '32', from: 'psi', to: 'bar' },
  'energy-converter': { value: '1', from: 'kwh', to: 'j' },
  'frequency-converter': { value: '3600', from: 'rpm', to: 'hz' },
}

// ─────────────────────────── 取数 helper ───────────────────────────

/** 读取计算器示例;无记录返回 undefined(LoadSampleButton 自动隐藏)。 */
export function getCalculatorSample(slug: string): Record<string, string> | undefined {
  return calculatorSamples[slug]
}

/** 读取单位转换器示例;无记录返回 undefined。 */
export function getConverterSample(slug: string): ConverterSample | undefined {
  return converterSamples[slug]
}
