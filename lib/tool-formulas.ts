/**
 * 工具公式注册表 —— "Formula / 原理公式" 区的数据源
 *
 * 作用:
 *  为计算器类工具在详情页中部 SEO 区渲染一段「原理公式」,
 *  解释工具背后的数学/物理/金融公式。利于:
 *   1. SEO 内容厚度(权威性、长尾词如 "x formula");
 *   2. 用户信任(透明展示计算依据);
 *   3. 教育/引用价值(吸引外链)。
 *
 * 维护规范(与 tool-faqs.ts 一致):
 *  - 只在此文件加/改公式,不要在内容组件里另写;
 *  - 每条 = { formula(展示主公式), explain(1-3 句通俗解释,可选) };
 *  - formula 支持纯文本;组件以等宽字体渲染,保留换行;
 *  - 只给有明确闭式公式的工具填,工具型(文本/生成器)不要硬凑。
 *
 * 用法:
 *   <FormulaSection slug="loan-calculator" />
 *   getToolFormula('loan-calculator') → ToolFormula | null
 */

export interface ToolFormula {
  /** 主公式,等宽展示,保留换行。例: "M = P × r(1+r)^n / ((1+r)^n − 1)" */
  formula: string
  /** 变量说明 / 通俗解释(可选),普通文本 */
  explain?: string
}

export const toolFormulas: Record<string, ToolFormula> = {
  // ───────── 贷款 / 金融 ─────────
  'loan-calculator': {
    formula: 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]',
    explain:
      '等额本息月供。P = 本金,r = 月利率(年利率 ÷ 12),n = 总月数。结果 M 即每月固定还款额。',
  },
  'mortgage-calculator': {
    formula: 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]',
    explain:
      '房贷月供(等额本息)。P = 贷款本金,r = 月利率,n = 期数(月)。本工具在此基础上另加 PMI、房产税与保险估算。',
  },
  'simple-interest-calculator': {
    formula: 'I = P × r × t',
    explain: '单利。P = 本金,r = 年利率(小数),t = 年数。I 为到期利息。',
  },
  'compound-interest-calculator': {
    formula: 'A = P × (1 + r/n)^(n·t)',
    explain: '复利终值。P = 本金,r = 年利率,n = 每年计息次数,t = 年数,A = 到期本息和。',
  },
  'apy-calculator': {
    formula: 'APY = (1 + r/n)^n − 1',
    explain: '年化收益率。r = 名义年利率,n = 每年计息次数。APY 反映复利后的真实年收益。',
  },
  'cash-back-calculator': {
    formula: 'Cash back = Σ ( spendᵢ × rateᵢ ) − annual fee',
    explain:
      'Multiply spend in each category by its reward rate, sum across categories, then subtract the card annual fee. Bonus rates apply only up to their quarterly or yearly spend caps.',
  },

  // ───────── 百分比 ─────────
  'percentage-calculator': {
    formula: 'part = ( percent / 100 ) × whole',
    explain: '求"某数的百分之几":把百分数化为小数后乘以整体。反向:percent = part / whole × 100。',
  },
  'percentage-change-calculator': {
    formula: 'change% = ( new − old ) / old × 100',
    explain: '百分比增减。new、old 为新旧值;正值表增长,负值表下降。',
  },

  // ───────── 健康 ─────────
  'bmi-calculator': {
    formula: 'BMI = weight(kg) / height(m)^2',
    explain:
      '公制 BMI。英制改用 BMI = 703 × weight(lb) / height(in)^2。WHO 成人分级:18.5–24.9 为健康区间。',
  },
  'bmr-calculator': {
    formula: 'BMR(men) = 10W + 6.25H − 5A + 5\nBMR(women) = 10W + 6.25H − 5A − 161',
    explain:
      'Mifflin-St Jeor 基础代谢率。W = 体重(kg),H = 身高(cm),A = 年龄。BMR 为静息状态下每日热量消耗。',
  },
  'water-intake-calculator': {
    formula: 'Water (oz) ≈ weight (lb) × ⅔    [ ≈ 33 ml × weight (kg) ]',
    explain:
      'A common hydration baseline: about two-thirds of your body weight in pounds, in ounces per day — roughly 33 ml per kg. The calculator then adjusts this baseline upward for exercise, hot climate, and pregnancy.',
  },

  // ───────── 几何 ─────────
  'circle-calculator': {
    formula: 'A = π·r²    C = 2π·r',
    explain: '圆面积 A 与周长 C,r 为半径。',
  },
  'triangle-calculator': {
    formula: 'A = ½ × b × h',
    explain: '三角形面积。b = 底边长,h = 对应高。',
  },
  'rectangle-calculator': {
    formula: 'A = w × h',
    explain: '矩形面积。w = 宽,h = 高。',
  },
  'cube-calculator': {
    formula: 'V = s³    SA = 6s²',
    explain: '正方体体积 V 与表面积 SA,s 为棱长。',
  },

  // ───────── 单位 / 数学 ─────────
  'weight-converter': {
    formula: 'lb = kg × 2.2046226218    oz = lb × 16    kg = lb × 0.45359237',
    explain:
      'Kilograms to pounds and ounces. 1 kg = 2.20462 lb, 1 lb = 16 oz, 1 g = 0.035274 oz. Conversions use the international avoirdupois pound, the exact standard since 1959.',
  },
  'prime-number-checker': {
    formula: 'n is prime ⟺ n > 1 and n mod d ≠ 0 for every d in [2, √n]',
    explain:
      'Trial division up to the square root: any composite n must have a factor at or below √n, so testing larger divisors is unnecessary. 1 is not prime by definition; 2 is the only even prime.',
  },
  'temperature-converter': {
    formula: '°C = (°F − 32) × 5/9\nK = °C + 273.15',
    explain: '华氏→摄氏→开尔文换算。',
  },
  'average-calculator': {
    formula: 'mean = ( Σ xᵢ ) / n',
    explain: '算术平均。xᵢ 为各数据点,n 为个数。',
  },
  'standard-deviation-calculator': {
    formula: 'σ = √[ Σ(xᵢ − x̄)² / n ]',
    explain: '总体标准差。x̄ 为均值,n 为数据点数。样本标准差分母用 n−1。',
  },
}

/** 读取某工具的公式;未注册返回 null(组件据此不渲染空区) */
export function getToolFormula(slug: string): ToolFormula | null {
  return toolFormulas[slug] ?? null
}
