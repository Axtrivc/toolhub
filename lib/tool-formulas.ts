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
 * 语言:explain 为英文(英文站面向 Google 的可见正文,必须英文)。
 * 本地化的 explain 见 lib/i18n/tools-l10n/<slug>.ts(FormulaSection 优先取本地化)。
 *
 * 用法:
 *   <FormulaSection slug="loan-calculator" />
 *   getToolFormula('loan-calculator') → ToolFormula | null
 */

export interface ToolFormula {
  /** 主公式,等宽展示,保留换行。例: "M = P × r(1+r)^n / ((1+r)^n − 1)" */
  formula: string
  /** 变量说明 / 通俗解释(可选),普通文本(英文) */
  explain?: string
}

export const toolFormulas: Record<string, ToolFormula> = {
  // ───────── 贷款 / 金融 ─────────
  'loan-calculator': {
    formula: 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]',
    explain:
      'Equal monthly payment (amortization). P = principal, r = monthly rate (annual rate ÷ 12), n = total number of months. M is the fixed monthly payment.',
  },
  'mortgage-calculator': {
    formula: 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]',
    explain:
      'Monthly mortgage payment (amortization). P = loan principal, r = monthly rate, n = number of months. This tool adds PMI, property tax, and insurance estimates on top.',
  },
  'simple-interest-calculator': {
    formula: 'I = P × r × t',
    explain:
      'Simple interest. P = principal, r = annual rate (as a decimal), t = years. I is the interest accrued over the period.',
  },
  'compound-interest-calculator': {
    formula: 'A = P × (1 + r/n)^(n·t)',
    explain:
      'Compound interest (future value). P = principal, r = annual rate, n = compounding periods per year, t = years. A is the total balance at the end.',
  },
  'apy-calculator': {
    formula: 'APY = (1 + r/n)^n − 1',
    explain:
      'Annual Percentage Yield. r = nominal annual rate, n = compounding periods per year. APY reflects the true annual return after compounding.',
  },
  'cash-back-calculator': {
    formula: 'Cash back = Σ ( spendᵢ × rateᵢ ) − annual fee',
    explain:
      'Multiply spend in each category by its reward rate, sum across categories, then subtract the card annual fee. Bonus rates apply only up to their quarterly or yearly spend caps.',
  },

  // ───────── 百分比 ─────────
  'percentage-calculator': {
    formula: 'part = ( percent / 100 ) × whole',
    explain:
      'Finding "a percent of a number": convert the percent to a decimal and multiply by the whole. Reverse: percent = part / whole × 100.',
  },

  // ───────── 健康 ─────────
  'bmi-calculator': {
    formula: 'BMI = weight(kg) / height(m)^2',
    explain:
      'Metric BMI. For imperial units, use BMI = 703 × weight(lb) / height(in)². WHO adult categories: 18.5–24.9 is the healthy range.',
  },
  'bmr-calculator': {
    formula: 'BMR(men) = 10W + 6.25H − 5A + 5\nBMR(women) = 10W + 6.25H − 5A − 161',
    explain:
      'Mifflin-St Jeor basal metabolic rate. W = weight (kg), H = height (cm), A = age. BMR is the daily calories burned at rest.',
  },
  'water-intake-calculator': {
    formula: 'Water (ml) ≈ 35 ml × weight (kg)   [ ≈ 0.5 oz × weight (lb) ]',
    explain:
      'A common hydration baseline: about two-thirds of your body weight in pounds, in ounces per day — roughly 33 ml per kg. The calculator then adjusts this baseline upward for exercise, hot climate, and pregnancy.',
  },

  // ───────── 几何 ─────────
  'circle-calculator': {
    formula: 'A = π·r²    C = 2π·r',
    explain: 'Circle area A and circumference C, where r is the radius.',
  },
  'triangle-calculator': {
    formula: 'A = ½ × b × h',
    explain: 'Triangle area. b = base length, h = corresponding height.',
  },
  'rectangle-calculator': {
    formula: 'A = w × h',
    explain: 'Rectangle area. w = width, h = height.',
  },
  'cube-calculator': {
    formula: 'V = s³    SA = 6s²',
    explain: 'Cube volume V and surface area SA, where s is the edge length.',
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
    explain: 'Fahrenheit → Celsius → Kelvin conversion.',
  },
  'average-calculator': {
    formula: 'mean = ( Σ xᵢ ) / n',
    explain: 'Arithmetic mean. xᵢ are the data points, n is the count.',
  },
  'standard-deviation-calculator': {
    formula: 'σ = √[ Σ(xᵢ − x̄)² / n ]',
    explain:
      'Population standard deviation. x̄ is the mean, n is the number of data points. Sample standard deviation uses n−1 in the denominator.',
  },
  'ip-checker': {
    formula: 'Risk Score = W_type × S_datacenter + W_tz × S_timezone_diff + W_bl × S_blacklist',
    explain:
      'A heuristic weighted model. S_datacenter is scored 1 when the ASN owner matches datacenter keywords such as AWS, hosting, or cloud, and carries the highest weight W_type. S_timezone_diff flags a mismatch between your device timezone and the IP geolocation timezone (a classic proxy leak signal). S_blacklist approximates proxy/VPN keywords and public blacklist traits. The total is scaled to 0–100: 0–20 low risk (native residential), 21–60 medium risk (hosting/VPN traits), 61–100 high risk (proxy/Tor/blacklisted).',
  },
}

/** 读取某工具的公式;未注册返回 null(组件据此不渲染空区) */
export function getToolFormula(slug: string): ToolFormula | null {
  return toolFormulas[slug] ?? null
}
