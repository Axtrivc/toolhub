/**
 * 工具公式注册表 —— "Formula / 原理公式" 区的数据源(单一数据源)
 *
 * 作用:
 *  为计算器/转换器类工具在详情页中部 SEO 区渲染一段「原理公式」区块:
 *  主公式 + 变量符号表(variables) + 直觉解释(explain) + 逐步算例(example)。
 *  直接通吃 Google 长尾词:"how to calculate [tool]" / "[tool] formula step by step"。
 *
 * 维护规范(与 tool-faqs.ts 一致):
 *  - 只在此文件加/改公式,不要在内容组件里另写;
 *  - 每条 4 要素:formula(展示主公式)、variables(变量表,一行一个,带单位)、
 *    explain(1-3 句直觉解释)、example(带具体数字的 step-by-step 算例);
 *  - formula/example 支持纯文本 + 换行;组件等宽渲染公式,其余按段落渲染;
 *  - 只给有明确闭式公式/换算关系的工具填,纯文本型工具不要硬凑。
 *
 * 语言:全字段为英文(英文站面向 Google 的可见正文)。
 * 本地化覆盖见 lib/i18n/tools-l10n/<slug>.ts(FormulaSection 优先取本地化)。
 *
 * 用法:
 *   <FormulaSection slug="loan-calculator" />
 *   getToolFormula('loan-calculator') → ToolFormula | null
 */

export interface ToolFormula {
  /** 主公式,等宽展示,保留换行。例: "M = P × r(1+r)^n / ((1+r)^n − 1)" */
  formula: string
  /** 变量符号表:符号 = 含义(单位),逐行一条。可选,普通文本(英文) */
  variables?: string
  /** 变量说明 / 通俗解释(可选),普通文本(英文) */
  explain?: string
  /** 逐步算例:Step 1 → Step 2 → 结果,带具体数字。可选,普通文本(英文) */
  example?: string
}

export const toolFormulas: Record<string, ToolFormula> = {
  // ───────── 贷款 / 信用 / 债务 ─────────
  "loan-calculator": {
    formula: "M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]",
    variables: "M = Fixed monthly payment ($)\nP = Loan principal ($)\nr = Monthly interest rate (annual rate ÷ 12, as a decimal)\nn = Total number of monthly payments",
    explain: "Equal monthly payment (amortization). P = principal, r = monthly rate (annual rate ÷ 12), n = total number of months. M is the fixed monthly payment.",
    example: "Step 1: P = $20,000, annual rate 7% → r = 0.07 / 12 = 0.0058333, n = 5 × 12 = 60 months.\nStep 2: (1 + r)^n = 1.0058333^60 ≈ 1.4176.\nStep 3: numerator = 0.0058333 × 1.4176 ≈ 0.0082695; denominator = 1.4176 − 1 = 0.4176.\nStep 4: M = 20,000 × 0.0082695 / 0.4176 ≈ $396.\nResult: the fixed monthly payment is about $396 — roughly $23,760 across the 60 payments, of which about $3,760 is interest.",
  },
  "mortgage-calculator": {
    formula: "M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]",
    variables: "M = Monthly payment ($)\nP = Loan principal ($)\nr = Monthly interest rate (annual % ÷ 12)\nn = Total number of monthly payments",
    explain: "Monthly mortgage payment (amortization). P = loan principal, r = monthly rate, n = number of months. This tool adds PMI, property tax, and insurance estimates on top.",
    example: "Step 1: P = $300,000, annual rate 6.5% → r = 0.065 / 12 = 0.0054167, n = 30 × 12 = 360.\nStep 2: (1 + r)^n = 1.0054167^360 ≈ 6.992.\nStep 3: numerator = 0.0054167 × 6.992 ≈ 0.037875; denominator = 6.992 − 1 = 5.992.\nStep 4: M = 300,000 × 0.037875 / 5.992 ≈ $1,896.\nResult: the monthly principal-and-interest payment is about $1,896.",
  },
  "auto-loan-calculator": {
    formula: "M = P × [ r(1+r)^n ] / [ (1+r)^n − 1 ]",
    variables: "M = Monthly payment ($)\nP = Amount financed ($; price − down payment − trade-in + tax/fees)\nr = Monthly interest rate (annual APR ÷ 12)\nn = Loan term in months",
    explain: "Monthly auto-loan payment (amortization). P = amount financed (price − down payment − trade-in + tax/fees), r = monthly APR, n = total months.",
    example: "Step 1: $30,000 car with $5,000 down → P = 25,000; APR 6.9% → r = 0.069 / 12 = 0.00575; n = 60.\nStep 2: (1 + r)^n = 1.00575^60 ≈ 1.4106.\nStep 3: numerator = 0.00575 × 1.4106 ≈ 0.0081110; denominator = 1.4106 − 1 = 0.4106.\nStep 4: M = 25,000 × 0.0081110 / 0.4106 ≈ $493.85.\nResult: the monthly principal-and-interest payment is about $494 for 60 months.",
  },
  "amortization-table-generator": {
    formula: "M = P × r × (1 + r)^n / ( (1 + r)^n − 1 )\nInterest(k) = Balance(k−1) × r\nPrincipal(k) = M − Interest(k)\nBalance(k) = Balance(k−1) − Principal(k)",
    variables: "M = Monthly payment ($)\nP = Loan principal ($)\nr = Monthly interest rate (annual rate ÷ 12)\nn = Total number of payments\nBalance(k−1) = Remaining balance after payment k−1 ($)\nInterest(k) = Interest portion of payment k ($)\nPrincipal(k) = Principal portion of payment k ($)\nBalance(k) = Remaining balance after payment k ($)",
    explain: "Every payment is fixed, but its split shifts: early payments are mostly interest, later ones mostly principal. The table applies the three recurrence formulas once per payment until the balance reaches zero.",
    example: "Step 1: P = $20,000 car loan, APR 6%, 60 months: r = 0.06 ÷ 12 = 0.005.\nStep 2: (1.005)^60 ≈ 1.34885, so M = 20,000 × 0.005 × 1.34885 ÷ 0.34885 ≈ $386.66.\nStep 3: Payment 1: interest = 20,000 × 0.005 = $100.00; principal = 386.66 − 100.00 = $286.66; balance = 20,000 − 286.66 = $19,713.34.\nStep 4: Payment 2: interest = 19,713.34 × 0.005 = $98.57; principal = 386.66 − 98.57 = $288.09; balance = $19,425.25.\nResult: the schedule repeats this for all 60 payments, ending at a $0 balance.",
  },
  "credit-card-payoff-calculator": {
    formula: "months = − ln( 1 + r·B / PMT ) / ln(1 + r)",
    variables: "months = Number of monthly payments until the balance is gone\nB = Current card balance ($)\nPMT = Fixed monthly payment ($)\nr = Monthly interest rate (APR ÷ 12, as a decimal)\nln = Natural logarithm",
    explain: "Months to pay off balance B with fixed payment PMT at monthly rate r. Larger payments shrink the time steeply because less interest accrues each month.",
    example: "Step 1: balance B = $5,000, APR 18% → r = 0.18 / 12 = 0.015, fixed payment PMT = $200.\nStep 2: r × B / PMT = 0.015 × 5,000 / 200 = 0.375.\nStep 3: ln(1 − 0.375) = ln(0.625) = −0.4700, and ln(1.015) = 0.014889.\nStep 4: months = 0.4700 / 0.014889 ≈ 31.6.\nResult: about 32 monthly payments (roughly 2.6 years) to clear the $5,000 balance.",
  },
  "credit-card-minimum-payment-calculator": {
    formula: "Min payment = max( balance × min%, fixed floor )",
    variables: "Min payment = Minimum payment due ($)\nbalance = Current card balance ($)\nmin% = Percentage of balance the issuer charges (often 1-3%, as a decimal)\nfixed floor = Smallest dollar amount the issuer will accept ($)",
    explain: "Issuers charge the larger of a small percentage of the balance (often 1–3%) and a fixed floor (e.g. $25). Interest is then added on the remaining balance until it is paid off.",
    example: "Step 1: balance = $1,200, min% = 2% → 1,200 × 0.02 = $24.\nStep 2: fixed floor = $25.\nStep 3: max(24, 25) = $25.\nResult: the minimum payment is $25. If the balance were $3,000, 2% would be $60, so the percentage would win and the minimum would be $60.",
  },
  "rent-vs-buy-calculator": {
    formula: "Renting cost = Monthly rent × 12 × Years\nBuying cost = Down payment + Closing costs + ( Mortgage payment + Taxes + Insurance + Maintenance ) × 12 × Years − Appreciation + Selling costs",
    variables: "Monthly rent = Rent per month ($)\nYears = Comparison period (years)\nDown payment = Cash paid upfront at purchase ($)\nClosing costs = Purchase fees, typically 2-5% of the price ($)\nMortgage payment = Monthly principal and interest ($)\nTaxes, Insurance, Maintenance = Annual ownership costs ($)\nAppreciation = Increase in home value over the period ($)\nSelling costs = Agent commission and closing fees when selling, about 6-8% of the sale price ($)",
    explain: "Renting costs are simply rent paid over the period. Buying stacks upfront cash and monthly ownership costs, then credits back the home's value gain net of selling fees, so the breakeven usually arrives after several years.",
    example: "Step 1: Rent $1,800 per month for 5 years: 1,800 × 12 × 5 = $108,000.\nStep 2: Buy a $350,000 home with 20% down: down payment $70,000 plus closing costs of 3% = $10,500. A $280,000 loan at 6.5% for 30 years costs about $1,770 per month, and taxes, insurance, and maintenance add about $700, so 60 months of ownership costs about $2,470 × 60 = $148,200.\nStep 3: The home appreciates 3% per year: 350,000 × 1.03^5 = 350,000 × 1.159274 ≈ $405,746, a gain of $55,746; selling costs of 6% are $24,345, so the net credit is 55,746 − 24,345 = $31,401.\nStep 4: Buying total = 70,000 + 10,500 + 148,200 − 31,401 = $197,299.\nResult: renting costs about $108,000 versus about $197,300 to buy over 5 years; the gap narrows as equity and appreciation accumulate over longer horizons.",
  },
  "down-payment-calculator": {
    formula: "Down payment = price × rate\nLoan = price − down payment",
    variables: "Down payment = Upfront cash paid at closing ($)\nprice = Purchase price ($)\nrate = Down payment percentage (as a decimal, so 20% = 0.20)\nLoan = Amount borrowed ($)",
    explain: "Down payment is the upfront cash portion, usually quoted as a percentage of the price. The loan covers the rest; a larger down payment lowers the principal, the monthly payment, and often the interest rate.",
    example: "Step 1: price = $400,000, rate = 20% = 0.20.\nStep 2: down payment = 400,000 × 0.20 = $80,000.\nStep 3: loan = 400,000 − 80,000 = $320,000.\nResult: $80,000 cash down and a $320,000 loan; at 20% down there is usually no PMI.",
  },
  "dti-calculator": {
    formula: "DTI = ( total monthly debt / gross monthly income ) × 100%",
    variables: "DTI = Debt-to-income ratio (%)\ntotal monthly debt = Sum of monthly debt payments, including the new loan ($)\ngross monthly income = Pre-tax monthly income ($)",
    explain: "Debt-to-income ratio. Include housing, auto, student, and minimum card payments plus the new loan, divided by gross (pre-tax) monthly income. Lenders usually want this under 36–43%.",
    example: "Step 1: monthly debts = $1,800 mortgage + $350 car + $200 student loan + $100 card minimums = $2,450.\nStep 2: gross monthly income = $6,500.\nStep 3: 2,450 / 6,500 = 0.377.\nStep 4: 0.377 × 100% = 37.7%.\nResult: DTI is about 37.7% — above the common 36% guideline but under the 43% ceiling many lenders allow.",
  },
  "take-home-pay-calculator": {
    formula: "Pre-tax wages = Gross − 401(k) − Health premium\nFICA = ( Gross − Health premium ) × 7.65%\nFederal income tax = IRS brackets applied to ( annual Pre-tax wages − standard deduction )\nTake-home pay = Gross − Federal income tax − FICA − 401(k) − Health premium",
    variables: "Gross = Total pay before deductions, per pay period ($)\n401(k) = Pre-tax retirement contribution ($)\nHealth premium = Pre-tax health insurance cost ($)\nFICA = Social Security 6.2% (up to the yearly wage base) plus Medicare 1.45% ($)\nFederal income tax = Withholding per IRS brackets and your W-4 ($)\nTake-home pay = Net pay actually deposited ($)",
    explain: "Start from gross pay and subtract pre-tax deductions, FICA, and federal withholding. Note the quirk that 401(k) contributions escape income tax but still owe FICA, while health premiums escape both.",
    example: "Step 1: Gross $5,000 per month; 401(k) at 5% = $250; health premium $150; income-tax wages = 5,000 − 250 − 150 = $4,600.\nStep 2: FICA = (5,000 − 150) × 7.65% = 4,850 × 0.0765 = $371.03.\nStep 3: Annual income-tax wages 4,600 × 12 = $55,200; minus the $15,000 standard deduction = $40,200 taxable; 2025 single brackets give 11,925 × 10% + 28,275 × 12% = 1,192.50 + 3,393 = $4,585.50 per year = $382.13 per month.\nStep 4: Take-home = 5,000 − 382.13 − 371.03 − 250 − 150 = $3,846.84.\nResult: about $3,847 lands in the bank each month from $5,000 gross (roughly 77%).",
  },
  "overtime-calculator": {
    formula: "Regular pay = Hourly rate × Regular hours\nOvertime pay = Hourly rate × Multiplier × OT hours\nTotal weekly pay = Regular pay + Overtime pay\nHourly rate from salary = Annual salary ÷ 2,080",
    variables: "Hourly rate = Base pay per hour ($)\nRegular hours = Hours up to 40 in a week\nOT hours = Hours beyond 40 in a week\nMultiplier = 1.5 for time-and-a-half (FLSA standard), 2 for double time, or a custom rate\nTotal weekly pay = Regular pay plus overtime pay ($)",
    explain: "Under the FLSA, hours worked beyond 40 in a week earn at least 1.5 times the regular rate. Salaried workers can convert to an hourly equivalent using a 2,080-hour work year.",
    example: "Step 1: Hourly rate $25.00, 46 hours worked in the week, multiplier 1.5.\nStep 2: Regular pay = 25 × 40 = $1,000.00.\nStep 3: Overtime pay = 25 × 1.5 × 6 = 37.50 × 6 = $225.00.\nStep 4: Total = 1,000 + 225 = $1,225.00.\nResult: gross weekly pay is $1,225.00, of which $225.00 is overtime.",
  },
  "hourly-to-salary-calculator": {
    formula: "Annual salary = hourly rate × hours/week × weeks/year",
    variables: "Annual salary = Gross yearly pay ($)\nhourly rate = Pay per hour ($)\nhours/week = Hours worked per week\nweeks/year = Weeks worked per year (52 with no unpaid time off)",
    explain: "Convert an hourly wage to a yearly salary. The standard assumption is 40 hours/week and 52 weeks/year (2,080 hours), which you can adjust for part-time or unpaid time off.",
    example: "Step 1: hourly rate = $25, standard 40 hours per week.\nStep 2: weekly pay = 25 × 40 = $1,000.\nStep 3: annual salary = 1,000 × 52 = $52,000 (2,080 hours).\nResult: $25 per hour equals about $52,000 per year before taxes.",
  },
  "salary-converter": {
    formula: "Annual = hourly × 2080\nMonthly = annual / 12",
    variables: "Annual = Gross annual salary ($)\nhourly = Hourly wage ($/hour)\n2080 = Working hours per year (40 hours/week × 52 weeks)\nMonthly = Gross monthly salary ($)",
    explain: "Converts between hourly, weekly, monthly, and annual pay. Assumes 2,080 working hours per year (40 h × 52 w); adjust the hours for a different schedule.",
    example: "Step 1: hourly = $25.00.\nStep 2: Annual = 25 × 2080 = $52,000.\nStep 3: Monthly = 52,000 / 12 ≈ $4,333.33.\nStep 4: Cross-check: weekly = 25 × 40 = $1,000, biweekly = $2,000.\nResult: $25/hour is about $52,000 per year or $4,333.33 per month before taxes and deductions.",
  },

  // ───────── 储蓄 / 投资 / 退休 ─────────
  "simple-interest-calculator": {
    formula: "I = P × r × t",
    variables: "I = Interest accrued ($)\nP = Principal ($)\nr = Annual interest rate (as a decimal, so 4% = 0.04)\nt = Time in years",
    explain: "Simple interest. P = principal, r = annual rate (as a decimal), t = years. I is the interest accrued over the period.",
    example: "Step 1: P = $5,000, r = 4% = 0.04, t = 3 years.\nStep 2: yearly interest = 5,000 × 0.04 = $200.\nStep 3: I = 200 × 3 = $600.\nResult: $600 of interest accrues over 3 years, so the balance grows to $5,600.",
  },
  "compound-interest-calculator": {
    formula: "A = P × (1 + r/n)^(n·t) + PMT × [((1 + r/n)^(n·t) − 1) / (r/n)]",
    variables: "A = Future value, total balance at the end ($)\nP = Initial principal ($)\nPMT = Contribution added each compounding period ($)\nr = Annual interest rate (as a decimal)\nn = Compounding periods per year\nt = Number of years",
    explain: "Compound interest (future value). P = initial principal, PMT = recurring periodic contribution, r = annual rate, n = compounding periods per year, t = years. A is the total balance at the end; the first term grows the principal and the second is the future value of the contributions.",
    example: "Step 1: P = $10,000, PMT = $200 per month, annual rate 6%, n = 12, t = 10 → r/n = 0.06 / 12 = 0.005 and n·t = 120 periods.\nStep 2: (1.005)^120 ≈ 1.8194.\nStep 3: principal term = 10,000 × 1.8194 = $18,194.\nStep 4: contributions term = 200 × (1.8194 − 1) / 0.005 = 200 × 163.88 = $32,776.\nResult: A = 18,194 + 32,776 ≈ $50,970 after 10 years.",
  },
  "apy-calculator": {
    formula: "APY = (1 + r/n)^n − 1",
    variables: "APY = Annual Percentage Yield (as a decimal; multiply by 100 for %)\nr = Nominal annual interest rate (as a decimal)\nn = Compounding periods per year",
    explain: "Annual Percentage Yield. r = nominal annual rate, n = compounding periods per year. APY reflects the true annual return after compounding.",
    example: "Step 1: nominal rate r = 5% = 0.05 with monthly compounding, so n = 12.\nStep 2: r/n = 0.05 / 12 = 0.0041667.\nStep 3: (1.0041667)^12 ≈ 1.05116.\nStep 4: APY = 1.05116 − 1 = 0.05116 = 5.12%.\nResult: the account really earns about 5.12% per year — a $10,000 deposit grows to about $10,512 in one year.",
  },
  "hysa-calculator": {
    formula: "FV = P × (1 + r/n)^(n·t) + PMT × [((1 + r/n)^(n·t) − 1) / (r/n)]",
    variables: "FV = Balance at the end ($)\nP = Initial deposit ($)\nPMT = Deposit added each compounding period ($; monthly deposits pair with n = 12)\nr = Annual percentage yield (decimal)\nn = Compounding periods per year (12 monthly, 365 daily)\nt = Years",
    explain: "High-yield savings growth. P = initial deposit, PMT = monthly deposit, r = APY (decimal), n = compounding periods per year (365 for daily), t = years. The first term compounds the principal; the second grows the deposit stream.",
    example: "Step 1: P = $10,000, PMT = $500/month, APY 4.25% → r = 0.0425, n = 12, t = 2; r/n = 0.0035417, n·t = 24.\nStep 2: (1 + r/n)^(n·t) = 1.0035417^24 ≈ 1.08855.\nStep 3: principal term = 10,000 × 1.08855 = $10,885.53.\nStep 4: deposit term = 500 × ((1.08855 − 1) / 0.0035417) = 500 × 25.003 ≈ $12,501.60.\nResult: FV ≈ 10,885.53 + 12,501.60 = $23,387 after 2 years — $22,000 deposited plus about $1,387 in interest.",
  },
  "cd-calculator": {
    formula: "Maturity = P × (1 + r/n)^(n·t) · Penalty = P × (r/12) × penalty months",
    variables: "Maturity = Value at the end of the term ($)\nP = Principal deposit ($)\nr = Annual interest rate (decimal)\nn = Compounding periods per year (12 for monthly)\nt = Term length (years)\nPenalty = Early-withdrawal penalty ($)\npenalty months = Months of interest forfeited",
    explain: "Certificate of Deposit value at maturity with r = annual rate, n = compounding frequency, t = term in years. An early exit keeps accrued interest minus the penalty, which banks quote as months of interest on principal — never touching principal itself.",
    example: "Step 1: P = $25,000, 12-month CD at 4.60% compounded monthly → r = 0.046, n = 12, t = 1.\nStep 2: (1 + 0.046/12)^12 = 1.0038333^12 ≈ 1.04698.\nStep 3: Maturity = 25,000 × 1.04698 ≈ $26,174.55 (about $1,174.55 interest earned).\nStep 4: one month of interest = 25,000 × 0.046 / 12 ≈ $95.83; a 3-month penalty = 3 × 95.83 = $287.50.\nResult: the CD matures at about $26,174.55; cashing out early costs about $287.50 of earned interest.",
  },
  "savings-goal-calculator": {
    formula: "FV = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]",
    variables: "FV = Future value, amount saved at the end ($)\nP = Starting balance ($)\nr = Interest rate per period (as a decimal)\nn = Number of periods\nPMT = Deposit added each period ($)",
    explain: "Future value of a starting balance P plus a recurring deposit PMT. r = period rate, n = number of periods. This is how regular contributions compound toward a savings target.",
    example: "Step 1: P = $5,000, PMT = $300 per month, annual rate 5% → r = 0.05 / 12 = 0.0041667, n = 36 months.\nStep 2: (1.0041667)^36 ≈ 1.16147.\nStep 3: starting balance grows to 5,000 × 1.16147 = $5,807.\nStep 4: deposits grow to 300 × (1.16147 − 1) / 0.0041667 = 300 × 38.753 = $11,626.\nResult: FV = 5,807 + 11,626 ≈ $17,433 after 3 years.",
  },
  "annuity-calculator": {
    formula: "PMT = P × [ r(1+r)^n / ((1+r)^n − 1) ]",
    variables: "PMT = Fixed payment per period ($)\nP = Present value, the balance being paid out ($)\nr = Interest rate per period (as a decimal)\nn = Number of periods",
    explain: "Fixed payment (PMT) that pays off a present value P over n periods at rate r — the same amortization formula as a loan, used here for annuity payout planning.",
    example: "Step 1: P = $500,000, annual rate 5% → r = 0.05 / 12 = 0.0041667, n = 20 × 12 = 240 monthly payments.\nStep 2: (1.0041667)^240 ≈ 2.71264.\nStep 3: numerator = 0.0041667 × 2.71264 ≈ 0.0113027; denominator = 2.71264 − 1 = 1.71264.\nStep 4: payment factor = 0.0113027 / 1.71264 ≈ 0.0065996.\nResult: PMT = 500,000 × 0.0065996 ≈ $3,300 per month for 20 years (about $792,000 paid out in total).",
  },
  "retirement-calculator": {
    formula: "Balance = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]\nSafe withdrawal ≈ Balance × 4%",
    variables: "Balance = Retirement nest egg ($)\nP = Current retirement savings ($)\nPMT = Contribution added each year ($)\nr = Annual investment return (as a decimal)\nn = Years until retirement\nSafe withdrawal = Annual income under the 4% rule ($)",
    explain: "Compounded savings (starting balance P plus recurring PMT at return r for n years) form the nest egg; a common rule of thumb is to withdraw about 4% of it per year.",
    example: "Step 1: P = $50,000, PMT = $10,000 per year, r = 7% = 0.07, n = 30 years.\nStep 2: (1.07)^30 ≈ 7.6123.\nStep 3: current savings grow to 50,000 × 7.6123 = $380,615.\nStep 4: contributions grow to 10,000 × (7.6123 − 1) / 0.07 = 10,000 × 94.4614 = $944,614.\nStep 5: Balance = 380,615 + 944,614 ≈ $1,325,000; safe withdrawal ≈ 1,325,000 × 4% ≈ $53,000 per year.\nResult: a nest egg of roughly $1.33 million supporting about $53,000 of annual income.",
  },
  "fire-calculator": {
    formula: "FIRE number = annual spending ÷ SWR · balance(t) = P(1+r)ᵗ + S × ((1+r)ᵗ − 1)/r",
    variables: "FIRE number = Target portfolio size ($)\nannual spending = Expected yearly expenses in retirement ($)\nSWR = Safe withdrawal rate (decimal, 0.04 for 4%)\nP = Current portfolio balance ($)\nS = Annual contribution ($)\nr = Real annual return after inflation (decimal)\nt = Years until the portfolio reaches the FIRE number",
    explain: "The safe withdrawal rate (classic 4%) inverts into a target of 25× annual spending. The portfolio reaches it after t years of compounding current savings P at real return r with annual contributions S; the tool solves for the crossing year and re-solves at savings rate +10 points to show the compression effect.",
    example: "Step 1: spending $48,000 at a 4% SWR → FIRE number = 48,000 / 0.04 = $1,200,000.\nStep 2: P = $200,000, S = $30,000/year, r = 5% real. At t = 16: 1.05^16 ≈ 2.1829 → balance = 200,000 × 2.1829 + 30,000 × (2.1829 − 1)/0.05 ≈ 436,575 + 709,725 = $1,146,300.\nStep 3: at t = 17: 1.05^17 ≈ 2.2920 → balance ≈ 458,404 + 775,211 = $1,233,615.\nStep 4: interpolating for $1,200,000 gives t ≈ 16.6 years.\nResult: financial independence arrives in roughly 16 years 7 months at this savings pace.",
  },
  "roth-ira-calculator": {
    formula: "FV = C × ((1+r)ⁿ − 1)/r · Roth net = FV × (1 − t_now) · Trad net = FV × (1 − t_retire)",
    variables: "FV = Future value of the contribution stream ($)\nC = Annual contribution ($)\nr = Annual return (decimal)\nn = Years invested\nt_now = Your marginal tax rate today (decimal)\nt_retire = Expected marginal tax rate in retirement (decimal)",
    explain: "Identical annual contributions C compound at return r for n years (future value of an annuity). Roth pays tax up front (smaller balance, tax-free out); Traditional deducts now (full balance, taxed at the retirement rate t_retire on withdrawal). The after-tax winner is decided purely by t_now vs t_retire.",
    example: "Step 1: C = $7,000/year, r = 7%, n = 30 → (1.07)^30 ≈ 7.6123.\nStep 2: FV = 7,000 × (7.6123 − 1) / 0.07 ≈ $661,226.\nStep 3: Roth net at t_now = 22%: 661,226 × (1 − 0.22) ≈ $515,756.\nStep 4: Traditional net at t_retire = 32%: 661,226 × (1 − 0.32) ≈ $449,634.\nResult: if your retirement tax rate rises from 22% to 32%, the Roth comes out about $66,122 ahead.",
  },
  "inflation-calculator": {
    formula: "Future value = present × (1 + i)^n",
    variables: "Future value = Cost of the same goods after n years ($)\npresent = Current price or amount ($)\ni = Annual inflation rate (as a decimal)\nn = Number of years",
    explain: "Purchasing-power erosion. i = annual inflation rate, n = years. The same money buys proportionally less as prices compound upward over time.",
    example: "Step 1: present = $100, i = 3% = 0.03, n = 10 years.\nStep 2: (1.03)^10 ≈ 1.3439.\nStep 3: Future value = 100 × 1.3439 = $134.39.\nResult: a $100 cart of groceries today will cost about $134.39 in 10 years; equivalently, today's $100 will only buy about $74.41 worth of goods.",
  },
  "net-worth-calculator": {
    formula: "Net worth = total assets − total liabilities",
    variables: "Net worth = Net worth ($)\ntotal assets = Everything owned: cash, investments, home, car ($)\ntotal liabilities = Everything owed: mortgage, loans, card balances ($)",
    explain: "Assets are what you own (cash, investments, home, car); liabilities are what you owe (mortgage, loans, card balances). Positive net worth means assets exceed debts.",
    example: "Step 1: assets = $350,000 home + $60,000 investments + $15,000 cash + $20,000 car = $445,000.\nStep 2: liabilities = $250,000 mortgage + $12,000 car loan + $3,000 cards = $265,000.\nStep 3: 445,000 − 265,000 = $180,000.\nResult: net worth is $180,000.",
  },
  "roi-calculator": {
    formula: "ROI = (Gain − Cost) / Cost × 100%",
    variables: "ROI = Return on investment (%)\nGain = Final value of the investment ($)\nCost = Original amount invested ($)",
    explain: "Return on investment. Gain = final value − cost (or sale price − purchase price). Expressed as a percentage of the original cost.",
    example: "Step 1: Cost = $2,000, final value (Gain) = $2,500.\nStep 2: profit = 2,500 − 2,000 = $500.\nStep 3: ROI = 500 / 2,000 × 100% = 25%.\nResult: the investment returned 25% — $1.25 back for every $1.00 invested.",
  },
  "income-tax-estimator": {
    formula: "Tax = Σ ( income in bracket × bracket rate )",
    variables: "Tax = Total estimated tax ($)\nincome in bracket = Portion of income falling inside that bracket ($)\nbracket rate = Tax rate applied to that bracket (decimal, e.g. 0.22)\nΣ = Sum across all brackets\nEffective rate = Tax ÷ total income (%)",
    explain: "Progressive (bracketed) tax: each portion of income is taxed at its own bracket rate, then summed. Your marginal rate is the top bracket you touch; your effective rate is tax ÷ income.",
    example: "Step 1: Single filer with $80,000 taxable income (2025 brackets: 10% up to $11,925, 12% to $48,475, 22% to $103,350).\nStep 2: First bracket: 11,925 × 0.10 = $1,192.50.\nStep 3: Second bracket: (48,475 − 11,925) × 0.12 = 36,550 × 0.12 = $4,386.00.\nStep 4: Third bracket: (80,000 − 48,475) × 0.22 = 31,525 × 0.22 = $6,935.50.\nResult: Tax = 1,192.50 + 4,386.00 + 6,935.50 = $12,514.00, an effective rate of about 15.6% with a 22% marginal rate.",
  },
  "capital-gains-tax-estimator": {
    formula: "Gain = sale − basis\nTax = Σ (bracket share of gain × bracket rate)\nNet = gain − tax",
    variables: "Gain = Capital gain ($)\nsale = Sale price ($)\nbasis = Purchase price plus buying and selling costs ($)\nbracket share = Slice of the gain falling inside each long-term bracket ($)\nbracket rate = Rate for that slice (0%, 15%, or 20% for long-term gains)\nNet = After-tax gain ($)",
    explain: "Basis is usually the purchase price plus costs. Long-term gains (held more than 1 year) stack on top of your ordinary income and each 0%/15%/20% bracket is applied to the slice of the gain falling inside it, so the rate shown is a blended effective rate; short-term gains are added to ordinary income and taxed at those brackets.",
    example: "Step 1: basis = $50,000, sale = $70,000 → gain = $20,000, held more than 1 year so it is long-term.\nStep 2: single filer with $40,000 of taxable ordinary income; the 0% bracket reaches $47,025, leaving $7,025 of headroom.\nStep 3: first $7,025 of the gain is taxed at 0% → $0 tax.\nStep 4: remaining $12,975 of the gain is taxed at 15% → 12,975 × 0.15 = $1,946.\nResult: tax is about $1,946 (a blended effective rate of about 9.7%), leaving a net gain of about $18,054.",
  },

  // ───────── 商业 / 定价 / 平台与 AI 费用 ─────────
  "unit-price-calculator": {
    formula: "Unit price = total price / quantity",
    variables: "Unit price = Price per single unit ($ per unit)\ntotal price = Price of the whole package ($)\nquantity = Number of units in the package (items, ounces, meters, ...)",
    explain: "Price per single unit (per ounce, per item, per meter). Comparing unit prices — not package prices — reveals the true best buy when sizes differ.",
    example: "Step 1: large jar: $6.48 / 24 oz = $0.27 per oz.\nStep 2: small jar: $4.20 / 12 oz = $0.35 per oz.\nStep 3: compare 0.27 vs 0.35.\nResult: the 24 oz jar is the better buy at $0.27 per oz, even though it costs more at the register.",
  },
  "markup-calculator": {
    formula: "Selling price = cost × (1 + markup%)",
    variables: "Selling price = Price charged to the customer ($)\ncost = Cost of the item to the seller ($)\nmarkup% = Percentage added on top of cost (as a decimal)",
    explain: "Markup is added on top of cost to set the selling price. Note markup% is relative to cost, whereas margin% is relative to the selling price — they are not the same number.",
    example: "Step 1: cost = $40, markup = 60% = 0.60.\nStep 2: Selling price = 40 × (1 + 0.60) = 40 × 1.60 = $64.\nStep 3: margin check: (64 − 40) / 64 = 37.5%.\nResult: the selling price is $64, and the 37.5% margin is not the same as the 60% markup.",
  },
  "profit-margin-calculator": {
    formula: "Margin = Profit ÷ Price · Markup = Profit ÷ Cost · Price = Cost ÷ (1 − Margin)",
    variables: "Margin = Gross margin (Profit ÷ Price, %)\nMarkup = Markup on cost (Profit ÷ Cost, %)\nPrice = Selling price ($)\nCost = Unit cost ($)\nProfit = Price − Cost ($)",
    explain: "Margin and markup describe the same profit from two bases: margin divides by selling price, markup by cost. To hit a target margin m, price at Cost ÷ (1 − m); a 100% markup equals a 50% margin.",
    example: "Step 1: Cost = $60, Price = $100 → Profit = $40.\nStep 2: Margin = 40 / 100 = 40%; Markup = 40 / 60 ≈ 66.7%.\nStep 3: pricing for a 40% target margin: Price = 60 / (1 − 0.40) = $100.\nResult: the same $40 profit is a 40% margin but a 66.7% markup — always check which base a quote uses.",
  },
  "break-even-calculator": {
    formula: "Break-even units = Fixed Costs ÷ (Price − Variable Cost)",
    variables: "Break-even units = Units to sell to cover all costs\nFixed Costs = Overhead that does not vary with volume ($ per month)\nPrice = Selling price per unit ($)\nVariable Cost = Direct cost to produce one unit ($)\nBreak-even revenue = Break-even units × Price ($)",
    explain: "Sales volume where total revenue equals total cost. Contribution margin per unit (Price − Variable Cost) chips away at fixed costs until the balance hits zero; multiplying by price gives break-even revenue.",
    example: "Step 1: Fixed Costs = $8,500/month, Price = $45, Variable Cost = $18.\nStep 2: contribution margin = 45 − 18 = $27 per unit.\nStep 3: Break-even units = 8,500 / 27 ≈ 314.8 → round up to 315 units.\nStep 4: Break-even revenue = 315 × 45 = $14,175.\nResult: you need about 315 sales per month (roughly $14,175 in revenue) to break even.",
  },
  "cac-ltv-calculator": {
    formula: "CAC = spend ÷ customers · LTV = ARPU × margin ÷ churn · health ≈ 3:1",
    variables: "CAC = Customer acquisition cost ($)\nspend = Total sales and marketing spend ($)\ncustomers = New customers acquired\nLTV = Customer lifetime value ($)\nARPU = Average revenue per user per month ($)\nmargin = Gross margin (decimal, e.g. 0.80)\nchurn = Monthly churn rate (decimal)\npayback = Months to recover CAC (CAC ÷ monthly margin)",
    explain: "Unit-economics core: acquisition cost divides total spend by customers won; lifetime value multiplies monthly margin (ARPU × gross margin) by the average lifetime in months (1 ÷ monthly churn). The LTV:CAC ratio is judged against the 3:1 golden rule, with payback = CAC ÷ monthly margin.",
    example: "Step 1: spend = $24,000, customers = 120 → CAC = 24,000 / 120 = $200.\nStep 2: ARPU = $50, margin 80% → monthly margin = $40; churn 5% → LTV = 40 / 0.05 = $800.\nStep 3: LTV:CAC = 800 / 200 = 4:1, above the 3:1 health line.\nStep 4: payback = 200 / 40 = 5 months.\nResult: each $200 customer returns about $800 of gross margin over a ~20-month lifetime, with CAC repaid in 5 months.",
  },
  "saas-ltv-churn-calculator": {
    formula: "LTV = ARPU / churn\nLTV:CAC = LTV / CAC",
    variables: "LTV = Customer lifetime value ($)\nARPU = Average revenue per user per month ($)\nchurn = Monthly churn rate (decimal, e.g. 0.04 for 4%)\nCAC = Customer acquisition cost ($)\nLTV:CAC = Ratio of lifetime value to acquisition cost",
    explain: "Customer lifetime value equals average revenue per user divided by the churn rate (average lifetime ≈ 1/churn). LTV:CAC compares value to acquisition cost; 3:1 is a common target.",
    example: "Step 1: ARPU = $40/month, monthly churn = 4% → 0.04.\nStep 2: LTV = 40 / 0.04 = $1,000 (average customer lifetime = 1/0.04 = 25 months).\nStep 3: CAC = $250 → LTV:CAC = 1,000 / 250 = 4:1.\nResult: a 4:1 ratio clears the 3:1 target, so acquisition spend is efficient at these churn levels.",
  },
  "ebay-fee-calculator": {
    formula: "Net = sale − [ sale × finalValue% + fixed + sale × processing% ]",
    variables: "Net = Amount that reaches your account ($)\nsale = Total amount the buyer pays, including shipping ($)\nfinalValue% = Final value fee rate for the category (decimal)\nfixed = Fixed per-order fee ($)\nprocessing% = Payment processing rate (decimal)",
    explain: "eBay deducts a final value fee (a percentage of the total sale) plus a fixed per-order fee and a payment processing percentage. The net is what reaches your account.",
    example: "Step 1: sale = $120, final value fee 13.25% → 120 × 0.1325 = $15.90.\nStep 2: processing 3% → 120 × 0.03 = $3.60; fixed per-order fee = $0.40.\nStep 3: total fees = 15.90 + 3.60 + 0.40 = $19.90.\nResult: Net = 120 − 19.90 = $100.10, so about 83.4% of the sale reaches your account.",
  },
  "reverse-stripe-fee-calculator": {
    formula: "Charge = ( target + fixed ) / (1 − rate%)",
    variables: "Charge = Amount to bill the customer ($)\ntarget = Net amount you want to keep ($)\nrate% = Processing percentage (decimal, e.g. 0.029 for 2.9%)\nfixed = Fixed fee per transaction ($)",
    explain: "Reverse fee math: to net a target amount after a percentage rate plus a fixed fee, gross up by dividing by (1 − rate) and adding the fixed part back. This is the price to charge the customer.",
    example: "Step 1: target = $100, rate = 2.9% → 0.029, fixed = $0.30.\nStep 2: Charge = (100 + 0.30) / (1 − 0.029) = 100.30 / 0.971 ≈ $103.30.\nStep 3: verify: fee = 103.30 × 0.029 + 0.30 ≈ $3.30.\nResult: charging $103.30 leaves about $100.00 after processing fees.",
  },
  "freelance-invoice-generator": {
    formula: "Line total = Quantity × Rate\nSubtotal = Sum of all line totals\nTax = Subtotal × Tax rate\nInvoice total = Subtotal + Tax\nLate fee = Unpaid total × Monthly penalty rate (often 1.5%) after the net-terms deadline",
    variables: "Quantity = Hours worked or units delivered\nRate = Price per hour or per unit ($)\nLine total = Quantity × Rate ($)\nSubtotal = Sum of line totals before tax ($)\nTax rate = Sales tax or VAT (%)\nInvoice total = Amount due ($)\nNet terms = Payment window in days, such as Net 30\nLate fee = Charge added per month past due ($)",
    explain: "Each line item multiplies quantity by rate, the subtotal carries the tax, and payment terms set the due date. A late-fee clause, typically 1.5% per month, compensates you when clients pay past the deadline.",
    example: "Step 1: Line items: 12 hours of design at $75 = $900; 6 hours of revisions at $60 = $360.\nStep 2: Subtotal = 900 + 360 = $1,260.00.\nStep 3: Tax at 8% = 1,260 × 0.08 = $100.80, so the invoice total = 1,260 + 100.80 = $1,360.80, due Net 30.\nStep 4: The client pays 15 days late, so one month of the 1.5% penalty applies: 1,360.80 × 0.015 = $20.41.\nResult: the invoice is $1,360.80 on time, or $1,381.21 with the late fee.",
  },
  "subscription-cost-calculator": {
    formula: "Monthly total = Sum of every subscription's monthly price\nYearly total = Monthly total × 12\nAnnual-plan saving = Monthly price × 12 − Annual price",
    variables: "Monthly total = Combined cost of all subscriptions ($ per month)\nYearly total = Combined cost over a year ($ per year)\nMonthly price = A service billed monthly ($)\nAnnual price = The same service billed yearly ($)\nAnnual-plan saving = Money saved by prepaying yearly ($ per year)",
    explain: "Small monthly charges add up fast: multiplying the monthly total by 12 exposes the true yearly spend, and comparing monthly versus annual pricing shows where prepaying saves money.",
    example: "Step 1: Streaming $15.99 + music $11.99 + cloud storage $9.99 + fitness app $12.99 = $50.96 per month.\nStep 2: Yearly spend = 50.96 × 12 = $611.52.\nStep 3: The streaming service offers an annual plan at $159.99; paying monthly costs 15.99 × 12 = $191.88.\nStep 4: Saving = 191.88 − 159.99 = $31.89 per year.\nResult: subscriptions total $50.96 per month ($611.52 per year), and switching the streamer to its annual plan saves $31.89.",
  },
  "wedding-budget-calculator": {
    formula: "Category budget = Total budget × Category %\nStandard split: Catering and bar 30%, Venue 25%, Photography and video 12%, Music and entertainment 10%, Attire 8%, Flowers and decor 8%, Cake 3%, Stationery 2%, Hair and makeup 2%",
    variables: "Total budget = Overall wedding spending cap ($)\nCategory % = Industry-standard share for that category\nCategory budget = Dollar amount allocated to that category ($)",
    explain: "Wedding budgets follow predictable proportions, with venue and catering dominating the total. Applying standard percentages to your budget turns one big number into a realistic line item for every vendor.",
    example: "Step 1: Total budget $30,000.\nStep 2: Catering and bar = 30,000 × 0.30 = $9,000; venue = 30,000 × 0.25 = $7,500.\nStep 3: Photography = 30,000 × 0.12 = $3,600; music = 30,000 × 0.10 = $3,000; attire = 30,000 × 0.08 = $2,400; flowers and decor = 30,000 × 0.08 = $2,400.\nStep 4: Cake = 30,000 × 0.03 = $900; stationery = 30,000 × 0.02 = $600; hair and makeup = 30,000 × 0.02 = $600.\nResult: every category is funded and the allocations add up to exactly $30,000.",
  },
  "bill-split-calculator": {
    formula: "Tip = Subtotal × Tip%\nPer person = ( Subtotal + Tip + Fixed fees ) ÷ Number of diners",
    variables: "Subtotal = Bill amount before tip ($)\nTip% = Tip rate as a decimal (18% = 0.18)\nTip = Tip amount ($)\nFixed fees = Tax or fees not affected by the tip ($)\nNumber of diners = People sharing the bill\nPer person = What each person pays ($)",
    explain: "Add the tip to the bill, include any fixed charges like tax, then divide evenly. Tipping on the pre-tax subtotal is the usual etiquette.",
    example: "Step 1: Dinner subtotal is $120.00 and tax is $9.60; tip 18% on the subtotal = 120 × 0.18 = $21.60.\nStep 2: Grand total = 120 + 21.60 + 9.60 = $151.20.\nStep 3: Four diners split evenly: 151.20 ÷ 4 = $37.80.\nResult: each of the 4 people pays $37.80.",
  },
  "tip-calculator": {
    formula: "tip = bill × rate\ntotal = bill + tip",
    variables: "tip = Tip amount ($)\nbill = Pre-tip bill ($)\nrate = Tip percentage (decimal, e.g. 0.18 for 18%)\ntotal = Bill plus tip ($)\ndiners = Number of people splitting the check",
    explain: "Tip is a chosen percentage of the bill (15–20% is common for sit-down service in the US). Split the total by the number of diners for a per-person share.",
    example: "Step 1: bill = $64.50, rate = 18% → 0.18.\nStep 2: tip = 64.50 × 0.18 = $11.61.\nStep 3: total = 64.50 + 11.61 = $76.11.\nStep 4: split 3 ways: 76.11 / 3 ≈ $25.37 each.\nResult: an 18% tip on $64.50 is $11.61, for a total of $76.11 or about $25.37 per person.",
  },
  "discount-calculator": {
    formula: "saved = price × discount%\nfinal = price × (1 − discount%)",
    variables: "saved = Amount saved ($)\nprice = Original price ($)\ndiscount% = Discount rate (decimal, e.g. 0.30 for 30%)\nfinal = Sale price ($)",
    explain: "A percentage discount reduces the original price. For stacked discounts apply them in sequence — each acts on the already-reduced price.",
    example: "Step 1: price = $180, discount 30% → saved = 180 × 0.30 = $54.\nStep 2: final = 180 − 54 = $126.\nStep 3: stacked extra 10% off the reduced price: 126 × 0.10 = $12.60 → 126 − 12.60 = $113.40.\nResult: total saved = 180 − 113.40 = $66.60, an effective 37% off (not the 40% you might guess).",
  },
  "sales-tax-calculator": {
    formula: "tax = price × rate\ntotal = price × (1 + rate)",
    variables: "tax = Sales tax amount ($)\nprice = Pre-tax price ($)\nrate = Sales tax rate (decimal, e.g. 0.0825 for 8.25%)\ntotal = Price with tax ($)",
    explain: "Sales tax is a percentage of the pre-tax price added at checkout. rate is expressed as a decimal (e.g. 0.08 for 8%).",
    example: "Step 1: price = $85.00, rate = 8.25% → 0.0825.\nStep 2: tax = 85 × 0.0825 = $7.01.\nStep 3: total = 85 × (1 + 0.0825) = 85 × 1.0825 = $92.01.\nResult: an $85 purchase in an 8.25% tax area comes to $92.01 at the register.",
  },
  "commission-calculator": {
    formula: "Commission = sales × rate + bonus",
    variables: "Commission = Commission earnings ($)\nsales = Total sales for the period ($)\nrate = Commission rate per sale (as a decimal)\nbonus = Extra payment for hitting a quota ($)",
    explain: "Pay tied to sales. Rate is the percentage earned per sale; an optional bonus is added for hitting quotas. Total pay often combines a base salary with this commission.",
    example: "Step 1: sales = $50,000, rate = 5% → 50,000 × 0.05 = $2,500.\nStep 2: quota bonus = $500.\nStep 3: 2,500 + 500 = $3,000.\nResult: commission earnings are $3,000 for the period, before any base salary.",
  },
  "cash-back-calculator": {
    formula: "Cash back = Σ ( spendᵢ × rateᵢ ) − annual fee",
    variables: "Cash back = Net annual rewards after the fee ($)\nspendᵢ = Spending in category i ($)\nrateᵢ = Cash back rate for category i (as a decimal)\nΣ = Sum across all spending categories\nannual fee = Card yearly fee ($)",
    explain: "Multiply spend in each category by its reward rate, sum across categories, then subtract the card annual fee. Bonus rates apply only up to their quarterly or yearly spend caps.",
    example: "Step 1: dining spend $4,000 × 3% = $120.\nStep 2: groceries spend $6,000 × 2% = $120.\nStep 3: all other spend $10,000 × 1% = $100.\nStep 4: total rewards = 120 + 120 + 100 = $340; subtract the $95 annual fee.\nResult: net cash back is $245 for the year.",
  },
  "llm-cost-calculator": {
    formula: "Cost per request = Tin ÷ 1,000,000 × Pin + Tout ÷ 1,000,000 × Pout\nDaily cost = requests/day × Cost per request\nMonthly cost = Daily cost × 30\nWith cached input: Cost = (Tin,cached × Pcache + Tin,fresh × Pin + Tout × Pout) ÷ 1,000,000",
    variables: "Tin = Input tokens per request (tokens)\nTout = Output tokens per request (tokens)\nPin = Input price ($ per 1M tokens)\nPout = Output price ($ per 1M tokens)\nTin,cached = Input tokens served from the cache (tokens)\nTin,fresh = Input tokens billed at full price (tokens)\nPcache = Cached-input price ($ per 1M tokens)\nrequests/day = Requests sent per day\nMonthly cost = Projected cost for a 30-day month ($)",
    explain: "API pricing is quoted per million tokens, so divide each token count by 1,000,000 and multiply by its side's rate, then scale by request volume. Cached input is billed at a deep discount, so splitting input into cached and fresh portions captures that saving. Output tokens typically cost several times more than input, which is why long replies dominate the bill.",
    example: "Step 1: model prices $3 per 1M input and $15 per 1M output; a request uses 2,000 input and 800 output tokens.\nStep 2: input = 2,000 ÷ 1,000,000 × 3 = $0.006; output = 800 ÷ 1,000,000 × 15 = $0.012 → $0.018 per request.\nStep 3: at 500 requests/day: 500 × 0.018 = $9.00/day → × 30 = $270/month.\nStep 4: with half the input cached at $0.30 per 1M: (1,000 × 0.30 + 1,000 × 3 + 800 × 15) ÷ 1,000,000 = $0.0153 per request → 500 × 0.0153 × 30 = $229.50/month.\nResult: caching trims the monthly bill from $270 to about $229.50, a 15% saving.",
  },
  "llm-api-cost-calculator": {
    formula: "monthly cost = (input tokens ÷ 1M × price_in) + (output tokens ÷ 1M × price_out)",
    variables: "price_in = Input price per 1M tokens ($)\nprice_out = Output price per 1M tokens ($)\ninput tokens = Monthly prompt (input) token volume\noutput tokens = Monthly completion (output) token volume",
    explain: "Per-model API bill from monthly token volumes. Prices are uncached list rates per million tokens; cached-input and batch discounts are not applied, so results are worst-case planning numbers.",
    example: "Step 1: workload = 20M input tokens and 4M output tokens per month; model priced at  per 1M input and 5 per 1M output.\nStep 2: input cost = 20 ×  = 0.\nStep 3: output cost = 4 × 5 = 0.\nResult: about 20 per month at list rates — prompt caching on the input side could cut the input half substantially.",
  },
  "embedding-price-calculator": {
    formula: "Indexing cost = documents × tokens/doc ÷ 1,000,000 × P\nMonthly query cost = queries/day × tokens/query × 30 ÷ 1,000,000 × P\nTotal first month = Indexing cost + Monthly query cost",
    variables: "documents = Number of texts to embed once (count)\ntokens/doc = Average tokens per document (tokens)\nqueries/day = Search or retrieval queries per day\ntokens/query = Average tokens per query (tokens)\nP = Model price ($ per 1M tokens)\ndimensions = Embedding vector size (e.g. 1536); affects storage, not token price\nIndexing cost = One-time cost to embed the whole corpus ($)\nMonthly query cost = Recurring cost to embed daily queries ($)",
    explain: "Embeddings are billed only on input tokens, so cost is simply tokens ÷ 1,000,000 × price with no output component. The one-time corpus indexing is usually small next to recurring query traffic, and the price per million tokens is the main lever that separates providers on the same workload.",
    example: "Step 1: corpus = 50,000 documents × 400 tokens = 20,000,000 tokens.\nStep 2: Model A at $0.02 per 1M tokens → indexing = 20 × 0.02 = $0.40 one time.\nStep 3: traffic = 5,000 queries/day × 40 tokens = 200,000 tokens/day → × 30 = 6,000,000 tokens/month → 6 × 0.02 = $0.12/month.\nStep 4: Model B at $0.10 per 1M tokens → indexing = 20 × 0.10 = $2.00; queries = 6 × 0.10 = $0.60/month.\nResult: first-month total is $0.52 on Model A vs $2.60 on Model B — a 5× price gap passes straight through to the bill.",
  },
  "context-window-checker": {
    formula: "tokens ≈ characters ÷ 4\nfill = tokens ÷ context window × 100\nremaining = context window − tokens",
    variables: "tokens = Estimated token count (1 token ≈ 4 characters of English, closer to 3 for code)\ncharacters = Character count of the pasted text or code\ncontext window = Model's maximum context (tokens, e.g. 128,000)\nfill = Percentage of the window your text occupies (%)\nremaining = Tokens left for instructions, other files, and the model's reply",
    explain: "Estimates come from the rule of thumb that one token averages about 4 English characters, so a quick character count predicts usage without running a real tokenizer. Dividing by each model's context window shows how much of that model's memory your text consumes and how much room is left for everything else.",
    example: "Step 1: paste 48,000 characters of code → tokens ≈ 48,000 ÷ 4 = 12,000.\nStep 2: on a 128,000-token window: fill = 12,000 ÷ 128,000 = 9.4%.\nStep 3: remaining = 128,000 − 12,000 = 116,000 tokens.\nStep 4: on a 32,000-token window: fill = 12,000 ÷ 32,000 = 37.5%, leaving only 20,000 tokens.\nResult: the same paste is a light 9.4% load on a large-context model but over a third of a small one.",
  },
  "token-visualizer": {
    formula: "tokens ≈ characters ÷ 4\nwords ≈ tokens × 0.75\ncost = tokens ÷ 1,000,000 × price per 1M tokens",
    variables: "tokens = Approximate token count shown by the visualization\ncharacters = Character count of the text\n1 token ≈ 4 characters of typical English prose\ncommon word = Usually 1 token; rare or long words split into several subword tokens\nprice per 1M tokens = Model rate ($ per 1,000,000 tokens)\ncost = Estimated cost to process the text once ($)",
    explain: "Models read subword pieces, not whole words: frequent short words like 'the' are a single token, while rare or long words break into several, so token count follows character patterns rather than word count. The color-coded boundaries make each piece visible, which is why the ≈ 4 characters per token rule is only an average.",
    example: "Step 1: a 600-character English paragraph → tokens ≈ 600 ÷ 4 = 150.\nStep 2: sanity check: 150 tokens ≈ 150 × 0.75 ≈ 112 words.\nStep 3: a rare word like antidisestablishmentarianism (28 characters) can cost 5+ tokens while the costs 1 — that is why character count is only an estimate.\nStep 4: at $3 per 1M input tokens: cost = 150 ÷ 1,000,000 × 3 = $0.00045.\nResult: sending the paragraph once costs about $0.00045, and 10,000 such calls would cost about $4.50.",
  },

  // ───────── 车辆 / 出行 / 居家 ─────────
  "car-cost-calculator": {
    formula: "Monthly cost = Loan payment + Insurance + Fuel + Maintenance + Depreciation + Fees\nFuel = ( Miles per month ÷ MPG ) × Price per gallon\nDepreciation = ( Purchase price − Resale value ) ÷ Months owned\nPer-mile cost = Monthly cost × 12 ÷ Annual miles (divide miles by 1.609 for per-km)",
    variables: "Loan payment = Monthly financing cost ($)\nInsurance = Monthly premium ($)\nFuel = Monthly fuel spend ($)\nMaintenance = Oil changes, tires, and repairs averaged per month ($)\nDepreciation = Value the car loses per month ($)\nFees = Registration and taxes averaged per month ($)\nMonthly cost = True cost of ownership ($ per month)\nPer-mile cost = Monthly cost × 12 ÷ annual miles ($ per mile)",
    explain: "The loan payment is only part of what a car really costs. Adding fuel, insurance, upkeep, fees, and depreciation gives the true monthly figure, which divides into an honest per-mile or per-km rate.",
    example: "Step 1: Payment $420, insurance $140, fees $15, maintenance $60, depreciation = (30,000 − 18,000) ÷ 60 months = $200.\nStep 2: Fuel: 1,000 miles per month ÷ 28 MPG = 35.71 gallons × $3.40 = $121.43.\nStep 3: Monthly cost = 420 + 140 + 15 + 60 + 200 + 121.43 = $956.43.\nStep 4: Per-mile = 956.43 × 12 ÷ 12,000 annual miles = $0.96.\nResult: the car truly costs about $956.43 per month, or $0.96 per mile.",
  },
  "fuel-cost-calculator": {
    formula: "Fuel used = Distance ÷ MPG\nTrip cost = Fuel used × Price per gallon\nCost per person = Trip cost ÷ Passengers\nMetric: Liters = Distance km ÷ 100 × L per 100 km",
    variables: "Distance = Trip length (miles)\nMPG = Vehicle fuel efficiency (miles per gallon)\nFuel used = Gallons required (gal)\nPrice per gallon = Current fuel price ($/gal)\nTrip cost = Total fuel cost ($)\nPassengers = People sharing the cost",
    explain: "Divide the trip length by your vehicle's efficiency to get gallons burned, then multiply by the pump price. Splitting the total across passengers turns it into a fair per-person share.",
    example: "Step 1: A 480-mile trip in a car averaging 28 MPG with gas at $3.40 per gallon.\nStep 2: Fuel used = 480 ÷ 28 = 17.143 gallons.\nStep 3: Trip cost = 17.143 × 3.40 ≈ $58.29.\nStep 4: Three people split it: 58.29 ÷ 3 ≈ $19.43 per person.\nResult: the trip costs about $58.29 in fuel, or $19.43 each for 3 passengers.",
  },
  "electricity-cost-calculator": {
    formula: "kWh = Watts ÷ 1000 × Hours\nCost = kWh × Rate per kWh\nMonthly cost = Watts ÷ 1000 × Hours per day × 30 × Rate per kWh\nYearly cost = Monthly cost × 12",
    variables: "Watts = Appliance power draw (W)\nHours = Hours used per day\nkWh = Energy consumed (kilowatt-hours)\nRate per kWh = Electricity price ($ per kWh; US average about $0.17)\nCost per day, month, year = Running cost over each period ($)",
    explain: "A watt is a rate of energy use, so cost is power times hours, converted to kilowatt-hours and priced at your utility rate. The same three inputs scale the estimate to any day, month, or year.",
    example: "Step 1: A 1,500 W space heater runs 5 hours per day at $0.17 per kWh.\nStep 2: Energy = 1,500 ÷ 1000 × 5 = 7.5 kWh per day.\nStep 3: Daily cost = 7.5 × 0.17 = $1.275 ≈ $1.28.\nStep 4: Monthly = 1.275 × 30 = $38.25; yearly = 38.25 × 12 = $459.00.\nResult: the heater costs about $1.28 per day, $38.25 per month, and $459 per year to run.",
  },
  "paint-calculator": {
    formula: "wall area = 2 × (L + W) × H\nnet area = wall area − (doors × 21 + windows × 15)\ngallons = net area × coats ÷ 350\n(1 US gallon covers ≈ 350-400 ft² per coat; door ≈ 21 ft², window ≈ 15 ft²)",
    variables: "L, W = Room length and width (ft)\nH = Wall height (ft)\nwall area = Total wall surface (ft²)\nnet area = Wall area after subtracting doors and windows (ft²)\ncoats = Number of coats of paint\ngallons = Paint to buy (US gallons)\n350 = Coverage of one gallon per coat, typical range 350-400 ft²",
    explain: "Paint volume is just the paintable surface area times the number of coats, divided by the coverage of one gallon (about 350-400 ft²). Doors and windows are subtracted first, and rounding up adds the waste margin for spills, touch-ups, and porous walls.",
    example: "Step 1: Room 14 ft × 12 ft with 8 ft ceilings: wall area = 2 × (14 + 12) × 8 = 416 ft².\nStep 2: One door (21 ft²) and two windows (2 × 15 = 30 ft²): net area = 416 − 51 = 365 ft².\nStep 3: Two coats: 365 × 2 = 730 ft² of coverage needed.\nStep 4: gallons = 730 ÷ 350 ≈ 2.1.\nResult: about 2.1 gallons for two coats — buy 3 gallons for a safe margin (2 may just cover if your paint reaches 400 ft²/gallon).",
  },
  "flooring-calculator": {
    formula: "boxes = ⌈L × W × (1 + waste%) ÷ box coverage⌉ · cost = boxes × box price",
    variables: "L = Room length (ft)\nW = Room width (ft)\nwaste% = Waste allowance for cuts and defects (decimal, e.g. 0.10)\nbox coverage = Area covered by one box (sq ft)\nboxes = Boxes to order, rounded up (⌈ ⌉)\nbox price = Price per box ($)\ncost = Total material cost ($)",
    explain: "Room area (length × width, ft or m) grows by the waste factor for cuts and defects, then divides by the per-box coverage of the chosen material and always rounds up — you cannot buy a fraction of a box, and dye lots make \"buy more later\" a gamble.",
    example: "Step 1: room 18 ft × 12 ft = 216 sq ft.\nStep 2: add 10% waste: 216 × 1.10 = 237.6 sq ft.\nStep 3: box coverage 24.5 sq ft → 237.6 / 24.5 ≈ 9.7 → round up to 10 boxes.\nStep 4: cost = 10 × $89 = $890.\nResult: buy 10 boxes for about $890; the leftover half-box covers future repairs.",
  },

  // ───────── 健康 / 体能 ─────────
  "bmi-calculator": {
    formula: "BMI = weight(kg) / height(m)^2",
    variables: "BMI = Body Mass Index (kg/m^2)\nweight = Body weight (kilograms)\nheight = Height (meters)\nImperial variant: weight(lb) in pounds, height(in) in inches, multiplied by 703",
    explain: "Metric BMI. For imperial units, use BMI = 703 × weight(lb) / height(in)². WHO adult categories: 18.5–24.9 is the healthy range.",
    example: "Step 1: Weight 70 kg, height 1.75 m.\nStep 2: height^2 = 1.75 × 1.75 = 3.0625.\nStep 3: BMI = 70 ÷ 3.0625 ≈ 22.9.\nResult: BMI ≈ 22.9, inside the healthy range of 18.5-24.9.",
  },
  "bmr-calculator": {
    formula: "BMR(men) = 10W + 6.25H − 5A + 5\nBMR(women) = 10W + 6.25H − 5A − 161",
    variables: "W = Weight (kilograms)\nH = Height (centimeters)\nA = Age (years)\nBMR = Basal metabolic rate, calories burned per day at rest (kcal/day)",
    explain: "Mifflin-St Jeor basal metabolic rate. W = weight (kg), H = height (cm), A = age. BMR is the daily calories burned at rest.",
    example: "Step 1: Man, 30 years old, 80 kg, 180 cm.\nStep 2: 10W = 800; 6.25H = 6.25 × 180 = 1,125; 5A = 150.\nStep 3: BMR = 800 + 1,125 − 150 + 5 = 1,780.\nResult: BMR ≈ 1,780 calories per day at rest.",
  },
  "tdee-calculator": {
    formula: "TDEE = BMR × activity factor",
    variables: "TDEE = Total Daily Energy Expenditure (kcal/day)\nBMR = Basal metabolic rate (kcal/day)\nactivity factor = ~1.2 sedentary, ~1.55 moderate, ~1.9 very active",
    explain: "Total Daily Energy Expenditure. Multiply basal metabolic rate by an activity factor: ~1.2 sedentary, ~1.55 moderate, ~1.9 very active. TDEE is the maintenance calorie level.",
    example: "Step 1: A 35-year-old woman, 60 kg, 165 cm: BMR = 10×60 + 6.25×165 − 5×35 − 161 ≈ 1,295.\nStep 2: Moderate activity (3-5 workouts a week): factor 1.55.\nStep 3: TDEE = 1,295 × 1.55 ≈ 2,007.\nResult: about 2,007 calories per day to maintain; eating near 1,507 targets a loss of about one pound per week.",
  },
  "calorie-calculator": {
    formula: "TDEE = BMR × activity factor",
    variables: "TDEE = Total daily energy expenditure (kcal/day)\nBMR = Basal metabolic rate, calories burned at rest (kcal/day)\nactivity factor = 1.2 sedentary, 1.375 light, 1.55 moderate, 1.725 very active, 1.9 extremely active",
    explain: "Total daily energy expenditure. BMR (Mifflin-St Jeor) is calories at rest; the activity factor (≈1.2 sedentary to ≈1.9 very active) scales it for movement. Eat below TDEE to lose weight.",
    example: "Step 1: A 30-year-old man, 80 kg, 180 cm has BMR = 1,780 (Mifflin-St Jeor).\nStep 2: Moderate exercise 3-5 days a week: activity factor 1.55.\nStep 3: TDEE = 1,780 × 1.55 = 2,759.\nResult: about 2,760 calories per day to maintain weight.",
  },
  "macro-calculator": {
    formula: "grams = ( calories × macro% ) / kcalPerGram",
    variables: "grams = Grams of that macro to eat per day\ncalories = Daily calorie target (kcal)\nmacro% = Share of daily calories from that macro (as a decimal)\nkcalPerGram = 4 for protein and carbohydrate, 9 for fat",
    explain: "Split daily calories into protein, carbs, and fat by percentage, then convert each to grams (protein and carbs = 4 kcal/g, fat = 9 kcal/g).",
    example: "Step 1: Target 2,000 kcal split 30% protein, 40% carbs, 30% fat.\nStep 2: Protein = 2,000 × 0.30 ÷ 4 = 150 g; carbs = 2,000 × 0.40 ÷ 4 = 200 g.\nStep 3: Fat = 2,000 × 0.30 ÷ 9 ≈ 66.7 g.\nResult: 150 g protein, 200 g carbs, and about 67 g fat per day.",
  },
  "body-fat-calculator": {
    formula: "BF% (US Navy) from height, neck, waist (and hip for women)",
    variables: "BF% = Estimated body-fat percentage\nheight = Height (cm, or inches in the imperial variant)\nneck = Neck circumference below the larynx (cm)\nwaist = Waist circumference at the navel (cm)\nhip = Hip circumference at the widest point (women only)",
    explain: "The U.S. Navy method estimates body-fat percentage from circumference measurements. It is convenient and free but less precise than clinical methods like DEXA or hydrostatic weighing.",
    example: "Step 1: A man 180 cm tall, neck 38 cm, waist 85 cm; waist − neck = 47.\nStep 2: log10(47) ≈ 1.672; log10(180) ≈ 2.255.\nStep 3: Denominator = 1.0324 − 0.19077 × 1.672 + 0.15456 × 2.255 ≈ 1.0324 − 0.319 + 0.349 = 1.062.\nStep 4: BF% = 495 ÷ 1.062 − 450 ≈ 466.1 − 450 = 16.1.\nResult: estimated body fat about 16.1%, in the fitness range for men.",
  },
  "ideal-weight-calculator": {
    formula: "Devine: men 50 + 2.3×(height_in − 60)\n         women 45.5 + 2.3×(height_in − 60)",
    variables: "Ideal weight = Estimated ideal body weight (kilograms)\nheight_in = Height in inches (inches over 5 ft, i.e., total inches − 60)\n50 = Baseline kg for a 5-foot man\n45.5 = Baseline kg for a 5-foot woman\n2.3 = Additional kg per inch of height above 5 feet",
    explain: "A common formula (Devine) estimates ideal body weight in kg from height above 5 feet. It is a population reference, not a personal health target — build and muscle mass vary widely.",
    example: "Step 1: A man 5 ft 10 in tall = 70 inches.\nStep 2: Inches over 5 feet = 70 − 60 = 10.\nStep 3: 2.3 × 10 = 23 kg above the 50 kg baseline.\nStep 4: 50 + 23 = 73 kg ≈ 161 lb.\nResult: estimated ideal weight about 73 kg (161 lb).",
  },
  "water-intake-calculator": {
    formula: "Water (ml) ≈ 35 ml × weight (kg)   [ ≈ 0.5 oz × weight (lb) ]",
    variables: "Water (ml) = Daily water intake target (milliliters)\nweight (kg) = Body weight (kilograms)\nweight (lb) = Body weight (pounds)\noz = Fluid ounces per day (1 oz ≈ 30 ml)\n35 = Baseline milliliters of water per kg of body weight",
    explain: "A common hydration baseline: about half your body weight in pounds, taken as ounces per day — roughly 35 ml per kg. The calculator then adjusts this baseline upward for exercise, hot climate, and pregnancy.",
    example: "Step 1: Body weight 68 kg (about 150 lb).\nStep 2: 35 × 68 = 2,380 ml.\nStep 3: Cross-check in imperial: 0.5 × 150 = 75 oz ≈ 2,219 ml, the same ballpark.\nResult: about 2,380 ml (roughly 2.4 liters) of water per day before adjustments for exercise, heat, or pregnancy.",
  },
  "protein-intake-calculator": {
    formula: "Protein (g/day) = W × f\nf: 0.8 (RDA, sedentary), 1.2-1.6 (active), 1.6-2.2 (building muscle; higher end also for fat loss)",
    variables: "Protein = Daily protein target (grams per day)\nW = Body weight (kg; lb ÷ 2.205)\nf = Factor in grams of protein per kg of body weight: 0.8 sedentary RDA, 1.2-1.6 active, 1.6-2.2 muscle gain or fat loss",
    explain: "Protein needs are set per kilogram of body weight, not as one fixed number. The 0.8 g/kg RDA is only the amount that prevents deficiency; sports-nutrition research supports 1.2-2.2 g/kg for active people, with the top of the range when building muscle or dieting.",
    example: "Step 1: Weight 154 lb → W = 154 / 2.205 ≈ 70 kg.\nStep 2: Goal is muscle gain, so f = 1.6-2.2 g/kg.\nStep 3: Lower end: 70 × 1.6 = 112 g/day; upper end: 70 × 2.2 = 154 g/day.\nResult: aim for roughly 112-154 g of protein per day.",
  },
  "heart-rate-zone-calculator": {
    formula: "HRmax ≈ 220 − age\nTHR = (HRmax − HRrest) × intensity + HRrest\nZ1 50-60% · Z2 60-70% · Z3 70-80% · Z4 80-90% · Z5 90-100% of heart-rate reserve",
    variables: "HRmax = Estimated maximum heart rate (bpm)\nage = Age (years)\nHRrest = Resting heart rate (bpm)\nTHR = Target heart rate for a zone (bpm)\nintensity = Zone fraction of heart-rate reserve, 0.50 to 1.00\nHRR = Heart-rate reserve = HRmax − HRrest (bpm)",
    explain: "The Karvonen method measures intensity as a share of your heart-rate reserve — the span from resting to maximum heart rate — so zones shift with your fitness, not just your age. Each zone's bounds come from inserting its percentage into the THR formula.",
    example: "Step 1: Age 40, resting HR 60: HRmax ≈ 220 − 40 = 180 bpm; HRR = 180 − 60 = 120 bpm.\nStep 2: Zone 2 lower bound: (120 × 0.60) + 60 = 72 + 60 = 132 bpm.\nStep 3: Zone 2 upper bound: (120 × 0.70) + 60 = 84 + 60 = 144 bpm.\nResult: Zone 2 (easy aerobic work) is about 132-144 bpm; the Zone 5 ceiling is (120 × 1.00) + 60 = 180 bpm.",
  },
  "steps-to-calories-calculator": {
    formula: "distance (km) = steps × step length (m) ÷ 1000\ncalories ≈ steps × 0.0005 × W\nstep length ≈ height (cm) × 0.415 ÷ 100 (walking)",
    variables: "distance = Distance covered (km)\nsteps = Number of steps\nstep length = Distance per step (m)\nheight = Body height (cm)\nW = Body weight (kg)\ncalories = Energy burned walking (kcal)\n0.0005 = kcal per step per kg of body weight at a typical walking pace",
    explain: "Calories from walking scale with how far you carry your body, so heavier walkers burn more per step. The approximation of about 0.0005 kcal per step per kg matches published walking energy costs at a normal pace, and distance comes from your step length.",
    example: "Step 1: Weight 70 kg, height 170 cm → step length ≈ 0.415 × 170 = 70.6 cm ≈ 0.71 m.\nStep 2: 10,000 steps → distance = 10,000 × 0.71 ÷ 1000 = 7.1 km.\nStep 3: calories ≈ 10,000 × 0.0005 × 70 = 350 kcal.\nResult: 10,000 steps ≈ 7.1 km and about 350 kcal at 70 kg; a 90 kg walker covering the same steps burns ≈ 450 kcal.",
  },
  "intermittent-fasting-calculator": {
    formula: "eating window = first meal → first meal + E · fasting = first meal + E → first meal + 24",
    variables: "first meal = Clock time of your first calories of the day (e.g. 12:00 PM)\nE = Eating window length (hours; 8 for a 16:8 schedule)\nF = Fasting length (hours; F = 24 − E)\neating window = first meal to first meal + E\nfasting = first meal + E to first meal + 24 (next day's first meal)",
    explain: "Schedule derivation for a fasting ratio F:E: the eating window opens at your first meal and closes E hours later; the fasting window runs F hours until the next day’s first meal. Metabolic phase markers (ketosis ≈ 12h+, autophagy ≈ 16-24h) are added on top as research-informed estimates.",
    example: "Step 1: 16:8 schedule → E = 8, F = 16.\nStep 2: first meal at 12:00 PM → eating window = 12:00 PM to 8:00 PM.\nStep 3: fasting window = 8:00 PM today to 12:00 PM tomorrow (16 hours).\nStep 4: markers: ketosis ≈ 12 h into the fast (about 8:00 AM), autophagy ≈ 16 h (near the window's close).\nResult: finish eating by 8:00 PM and break the fast at noon the next day.",
  },
  "caffeine-calculator": {
    formula: "C(t) = C₀ × 0.5^(t / H)\ntime to cutoff: t = H × log₂(C₀ / Ccutoff)\nH ≈ 5-6 hours (population average ≈ 5.7 h)",
    variables: "C(t) = Caffeine left in the body t hours after a dose (mg)\nC₀ = Size of the dose consumed (mg)\nt = Hours since the dose (hours)\nH = Half-life, about 5-6 hours (average 5.7 h)\nCcutoff = Personal cutoff level, e.g. 50-100 mg (mg)\nlog₂ = Base-2 logarithm",
    explain: "Caffeine is eliminated exponentially: each half-life cuts what remains in half, so it never drops to zero abruptly. Every logged drink decays on its own clock, and your current level is the sum of what is left of each one.",
    example: "Step 1: A large coffee = 95 mg at 8:00 am.\nStep 2: At 2:00 pm (t = 6 h): C = 95 × 0.5^(6/5.7) ≈ 95 × 0.483 ≈ 46 mg.\nStep 3: At 8:00 pm (t = 12 h): C = 95 × 0.5^(12/5.7) ≈ 95 × 0.232 ≈ 22 mg.\nStep 4: Time to fall below 50 mg: t = 5.7 × log₂(95/50) ≈ 5.7 × 0.926 ≈ 5.3 h → about 1:17 pm.\nResult: about 46 mg remains by 2:00 pm and 22 mg by 8:00 pm; you drop under 50 mg around 1:15 pm.",
  },
  "sleep-calculator": {
    formula: "wake time = bedtime + 15 min + n × 90 min\nbedtime = wake time − 15 min − n × 90 min\nn = 5-6 cycles (adults)",
    variables: "n = Number of sleep cycles (5-6 for adults)\n90 min = Average length of one sleep cycle (minutes)\n15 min = Average time to fall asleep (minutes)\nbedtime = Lights-out time (clock time)\nwake time = Alarm or wake-up time (clock time)",
    explain: "Sleep moves through roughly 90-minute cycles, and waking at a cycle boundary — in light sleep — feels much easier than being pulled out of deep sleep mid-cycle. The calculator adds about 15 minutes to fall asleep, then steps in 90-minute multiples in whichever direction you need.",
    example: "Step 1: Target wake-up 6:30 am with 6 cycles: 6 × 90 = 540 min of sleep plus 15 min to fall asleep = 555 min = 9 h 15 min.\nStep 2: bedtime = 6:30 am − 9 h 15 min = 9:15 pm.\nStep 3: With 5 cycles: 5 × 90 + 15 = 465 min = 7 h 45 min → bedtime = 6:30 am − 7 h 45 min = 10:45 pm.\nResult: fall asleep by 10:45 pm (5 cycles) or 9:15 pm (6 cycles) to wake at 6:30 am; set lights-out about 15 minutes earlier.",
  },
  "pregnancy-due-date-calculator": {
    formula: "Due date = LMP + 280 days",
    variables: "Due date = Estimated delivery date (calendar date)\nLMP = First day of the last menstrual period (calendar date)\n280 days = 40 weeks of gestation",
    explain: "Naegele's rule: add 280 days (40 weeks) to the first day of the last menstrual period. Actual delivery varies by roughly two weeks either way; it is an estimate, not a guarantee.",
    example: "Step 1: LMP is January 10, 2026.\nStep 2: January has 21 days left after the 10th; then Feb 28, Mar 31, Apr 30, May 31, Jun 30, Jul 31, Aug 31, Sep 30 add 242 more, totaling 263 days through September 30.\nStep 3: 280 − 263 = 17, so the due date lands 17 days into October.\nResult: estimated due date October 17, 2026.",
  },
  "age-calculator": {
    formula: "years = (current year − birth year) if the birthday has occurred this year, else (current year − birth year) − 1\nmonths, days = elapsed time since the most recent birthday\ntotal days = exact count of calendar days lived (each Feb 29 adds 1)",
    variables: "years = Completed years of age (years)\nmonths, days = Remainder since the last birthday (months, days)\nbirthdate = Date of birth (day, month, year)\ntoday = Reference date, defaults to the current date\ntotal days = Exact days lived, leap days included (days)",
    explain: "Your age is the number of full calendar years completed since your birthdate, so it ticks over on each birthday. Leap days count as real days: a February 29 birthday arrives only in leap years, but the day count of your life includes every Feb 29.",
    example: "Step 1: Born March 10, 1990; today is September 5, 2026. September 5 is after March 10, so the birthday has passed this year.\nStep 2: years = 2026 − 1990 = 36.\nStep 3: Remainder since the birthday: March 10 + 5 months = August 10; August 10 + 26 days = September 5, so 5 months and 26 days.\nStep 4: total days = 36 × 365 + 9 leap days (1992-2024) + 179 days since March 10 = 13,149 + 179 = 13,328.\nResult: 36 years, 5 months, 26 days old — about 13,328 days.",
  },
  "age-difference-calculator": {
    formula: "gap = |birthdate₁ − birthdate₂|\nyears = whole calendar years between the two birthdates\nmonths, days = calendar remainder after the whole years",
    variables: "gap = Age difference (years, months, days)\nbirthdate₁, birthdate₂ = The two dates of birth (day, month, year)\nyears = Completed years in the gap (years)\nmonths, days = Remainder after the full years (months, days)",
    explain: "The age gap is the elapsed time between the two birthdates, expressed exactly like an age: whole years plus the leftover months and days. The absolute value bars mean the result is the same regardless of whose birthdate you enter first.",
    example: "Step 1: Person A born June 15, 1990; Person B born October 20, 1994.\nStep 2: From June 15, 1990 to June 15, 1994 is exactly 4 completed years; October 20 falls after June 15, so the whole-year count is 4.\nStep 3: Remainder: June 15 → October 15 is 4 months; October 15 + 5 days = October 20, so 4 months and 5 days.\nResult: the age gap is 4 years, 4 months, and 5 days.",
  },
  "screen-time-calculator": {
    formula: "weekly hours = daily hours × 7\nshare of waking time = weekly hours ÷ (waking hours/day × 7)\nlifetime screen years = daily hours × L ÷ 24\nreclaimed per year = 1 h/day × 365 ≈ 365 h ≈ 15 full days",
    variables: "daily hours = Screen time per day (hours)\nweekly hours = Screen time per week (hours)\nwaking hours/day = Hours awake per day (about 16-17)\nL = Years of life used in the projection (years)\nlifetime screen years = 24-hour-day equivalents spent on screens (years)\nreclaimed = Time saved by cutting 1 hour a day (hours or days per year)",
    explain: "Daily screen hours look harmless until multiplied out: 5 hours a day is 35 hours a week — nearly a full-time job — and daily hours ÷ 24 converts straight into years of your life over any span. Reclaiming even one hour a day compounds to about 15 full days a year.",
    example: "Step 1: 5 hours of screen time a day.\nStep 2: weekly = 5 × 7 = 35 hours; against 17 waking hours/day, share = 35 ÷ (17 × 7) = 35 ÷ 119 ≈ 29% of your waking week.\nStep 3: Over 60 adult years: 5 × 60 ÷ 24 = 12.5 years of round-the-clock time.\nStep 4: Cutting to 4 hours saves 1 h/day × 365 = 365 hours ≈ 15 full days a year.\nResult: 5 h/day ≈ 35 h/week ≈ 29% of waking time ≈ 12.5 years across 60 years.",
  },
  "dog-age-calculator": {
    formula: "human age (dog ≤ 2 years) = 15 × year 1 + 9 × remaining fraction of year 2\nhuman age (dog > 2 years) = 24 + (dog age − 2) × k\nk ≈ 4 for small breeds, ≈ 5 for large breeds",
    variables: "human age = Equivalent human age (years)\ndog age = Actual age of the dog (years)\n15 = Human-year equivalent of the first year\n9 = Extra human years credited during the second year\nk = Human years per dog year after age 2 (about 4 for small, 5 for large breeds)",
    explain: "Dogs mature extremely fast early: the first year is worth about 15 human years and the second adds about 9, reaching a 24-year-old equivalent at age 2. After that, aging settles to roughly 4-5 human years per dog year, with larger breeds on the higher end.",
    example: "Step 1: A 5-year-old large dog.\nStep 2: First two years: 15 + 9 = 24 human years.\nStep 3: Remaining: 5 − 2 = 3 dog years × k = 5 = 15 human years.\nStep 4: human age = 24 + 15 = 39.\nResult: about 39 human years for a large dog (a small dog with k = 4 gives 24 + 12 = 36).",
  },
  "pace-calculator": {
    formula: "pace = time ÷ distance (min per km or per mile)\nspeed = distance ÷ time (km/h or mph)\nfinish time = pace × distance",
    variables: "pace = Time per unit distance (min:sec per km or mile)\nspeed = Distance per unit time (km/h or mph)\ntime = Total running time (minutes)\ndistance = Race or run length (km or miles)",
    explain: "Pace spreads your total time evenly over each kilometer or mile, and it is the exact reciprocal of speed. Because it is linear, multiplying a pace by any race distance predicts finish times for the 5K, 10K, half marathon, and marathon.",
    example: "Step 1: A 10 km run in 52:30 = 52.5 min.\nStep 2: pace = 52.5 ÷ 10 = 5.25 min/km = 5:15 per km.\nStep 3: speed = 10 ÷ 52.5 × 60 ≈ 11.4 km/h.\nStep 4: Marathon at the same pace: 5.25 × 42.195 ≈ 221.5 min ≈ 3:41:31.\nResult: pace 5:15/km, speed about 11.4 km/h, marathon prediction about 3:41:31.",
  },
  "dog-food-calculator": {
    formula: "RER = 70 × kg^0.75 · MER = RER × factor · cups = MER ÷ kcal/cup",
    variables: "RER = Resting energy requirement (kcal/day)\nkg = Body weight (kg; pounds ÷ 2.205)\nMER = Maintenance energy requirement (kcal/day)\nfactor = Life-stage multiplier (1.2 weight loss to 3.0 young puppy)\ncups = Daily food amount (cups)\nkcal/cup = Energy density from the food label (kcal per cup)",
    explain: "Veterinary energy math (AAHA): resting energy scales with metabolic weight (kg to the 3/4 power), and the life-stage factor — 1.2 weight loss to 3.0 young puppy — converts it into daily needs. The food label's kcal-per-cup (or kcal-per-100g) density then turns calories into cups and grams.",
    example: "Step 1: 40 lb dog → 40 / 2.205 ≈ 18.14 kg.\nStep 2: RER = 70 × 18.14^0.75 = 70 × 8.79 ≈ 615 kcal/day.\nStep 3: neutered adult factor 1.6 → MER = 615 × 1.6 ≈ 984 kcal/day.\nStep 4: label says 375 kcal/cup → cups = 984 / 375 ≈ 2.6 cups/day.\nResult: feed about 2.6 cups per day, ideally split into two meals.",
  },

  // ───────── 几何 / 数学 / 教育 ─────────
  "percentage-calculator": {
    formula: "part = ( percent / 100 ) × whole",
    variables: "part = Portion of the whole (same unit as whole)\npercent = Percentage rate (%)\nwhole = Total or reference amount (currency, units, or count)",
    explain: "Finding \"a percent of a number\": convert the percent to a decimal and multiply by the whole. Reverse: percent = part / whole × 100.",
    example: "Step 1: What is 15% of $240? Convert: 15 / 100 = 0.15.\nStep 2: part = 0.15 × 240 = 36.\nStep 3: Reverse check: 36 / 240 × 100 = 15.\nResult: 15% of $240 is $36.",
  },
  "circle-calculator": {
    formula: "A = π·r²    C = 2π·r",
    variables: "A = Area (square units)\nC = Circumference (units)\nr = Radius (units)\nπ ≈ 3.14159",
    explain: "Circle area A and circumference C, where r is the radius.",
    example: "Step 1: r = 5 cm.\nStep 2: A = π × 5² = 3.14159 × 25 ≈ 78.54 cm².\nStep 3: C = 2πr = 2 × 3.14159 × 5 ≈ 31.42 cm.\nResult: area ≈ 78.54 cm² and circumference ≈ 31.42 cm.",
  },
  "triangle-calculator": {
    formula: "A = ½ × b × h",
    variables: "A = Area (square units)\nb = Base length (units)\nh = Perpendicular height to that base (units)",
    explain: "Triangle area. b = base length, h = corresponding height.",
    example: "Step 1: b = 12 m, h = 7 m.\nStep 2: b × h = 12 × 7 = 84.\nStep 3: A = ½ × 84 = 42.\nResult: the triangle's area is 42 m².",
  },
  "rectangle-calculator": {
    formula: "A = w × h",
    variables: "A = Area (square units)\nw = Width (units)\nh = Height (units)",
    explain: "Rectangle area. w = width, h = height.",
    example: "Step 1: w = 4.5 m, h = 3 m.\nStep 2: A = 4.5 × 3 = 13.5.\nResult: the rectangle's area is 13.5 m².",
  },
  "cube-calculator": {
    formula: "V = s³    SA = 6s²",
    variables: "V = Volume (cubic units)\nSA = Surface area (square units)\ns = Edge length (units)",
    explain: "Cube volume V and surface area SA, where s is the edge length.",
    example: "Step 1: s = 4 cm.\nStep 2: V = s³ = 4³ = 64 cm³.\nStep 3: SA = 6s² = 6 × 16 = 96 cm².\nResult: volume 64 cm³, surface area 96 cm².",
  },
  "sphere-calculator": {
    formula: "V = 4/3 × π × r³\nSA = 4 × π × r²",
    variables: "V = Volume (cubic units)\nSA = Surface area (square units)\nr = Radius (units)\nπ ≈ 3.14159",
    explain: "Sphere volume V and surface area SA, where r is the radius.",
    example: "Step 1: r = 3 m.\nStep 2: V = 4/3 × π × 3³ = 4/3 × π × 27 = 36π ≈ 113.10 m³.\nStep 3: SA = 4 × π × 3² = 4 × π × 9 = 36π ≈ 113.10 m².\nResult: volume ≈ 113.1 m³ and surface area ≈ 113.1 m² (they coincide when r = 3).",
  },
  "trapezoid-calculator": {
    formula: "A = ½ × (a + b) × h",
    variables: "A = Area (square units)\na, b = The two parallel sides (units)\nh = Perpendicular distance between them (units)",
    explain: "Trapezoid area. a and b are the two parallel sides (bases), h is the perpendicular height between them.",
    example: "Step 1: a = 8 m, b = 14 m, h = 5 m.\nStep 2: a + b = 8 + 14 = 22.\nStep 3: A = ½ × 22 × 5 = 55.\nResult: the trapezoid's area is 55 m².",
  },
  "fraction-calculator": {
    formula: "a/b ± c/d = (a·d ± b·c) / (b·d)\na/b × c/d = (a·c)/(b·d)",
    variables: "a, c = Numerators of the two fractions\nb, d = Denominators (nonzero)\n± = Add or subtract, matching the operation",
    explain: "Add/subtract with a common denominator, multiply numerators and denominators. Results are reduced to lowest terms by dividing out the greatest common divisor.",
    example: "Step 1: Add 1/3 + 1/4.\nStep 2: Numerator = (1 × 4) + (3 × 1) = 7; denominator = 3 × 4 = 12.\nStep 3: GCD(7, 12) = 1, so 7/12 is already in lowest terms.\nResult: 1/3 + 1/4 = 7/12 ≈ 0.583.",
  },
  "ratio-calculator": {
    formula: "a : b = (a/g) : (b/g),    g = GCD(a, b)",
    variables: "a, b = The two terms of the ratio\ng = GCD(a, b), the largest number dividing both terms",
    explain: "Simplify a ratio by dividing both terms by their greatest common divisor. Scaling multiplies both terms by the same factor so the proportion is preserved.",
    example: "Step 1: Simplify 36 : 60.\nStep 2: GCD(36, 60) = 12.\nStep 3: 36 / 12 = 3 and 60 / 12 = 5.\nResult: 36 : 60 = 3 : 5.",
  },
  "average-calculator": {
    formula: "mean = ( Σ xᵢ ) / n",
    variables: "mean = Arithmetic average\nxᵢ = Each data point\nn = Number of data points\nΣ xᵢ = Sum of all data points",
    explain: "Arithmetic mean. xᵢ are the data points, n is the count.",
    example: "Step 1: Test scores: 78, 85, 90, 92.\nStep 2: Σ xᵢ = 78 + 85 + 90 + 92 = 345.\nStep 3: mean = 345 / 4 = 86.25.\nResult: the average score is 86.25.",
  },
  "standard-deviation-calculator": {
    formula: "σ = √[ Σ(xᵢ − x̄)² / n ]",
    variables: "σ = Population standard deviation\nxᵢ = Each data point\nx̄ = Mean of the data\nn = Number of data points",
    explain: "Population standard deviation. x̄ is the mean, n is the number of data points. Sample standard deviation uses n−1 in the denominator.",
    example: "Step 1: Data 2, 4, 4, 4, 5, 5, 7, 9: n = 8, x̄ = 40 / 8 = 5.\nStep 2: Squared deviations: 9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.\nStep 3: Variance = 32 / 8 = 4.\nStep 4: σ = √4 = 2.\nResult: the population standard deviation is 2.",
  },
  "percentile-calculator": {
    formula: "rank = ( P / 100 ) × (n − 1)",
    variables: "rank = 0-based position in the sorted list\nP = Percentile to find (0-100)\nn = Number of data points",
    explain: "Position of the P-th percentile in a sorted list of n values. The value is then interpolated between neighboring ranks when rank is not a whole number.",
    example: "Step 1: Sorted scores 3, 5, 8, 10, 14 (n = 5); find the 50th percentile.\nStep 2: rank = (50 / 100) × (5 − 1) = 0.5 × 4 = 2.\nStep 3: Rank 2 is the third value: 8. The rank is a whole number, so no interpolation is needed.\nResult: the 50th percentile (median) is 8.",
  },
  "combination-calculator": {
    formula: "C(n, k) = n! / [ k! × (n − k)! ]",
    variables: "C(n, k) = Number of ways to choose k from n, unordered\nn = Total items available\nk = Items chosen\n! = Factorial: n! = n × (n−1) × … × 1",
    explain: "Number of ways to choose k items from n without regard to order. Read as \"n choose k\"; central to binomial probability and Pascal's triangle.",
    example: "Step 1: Choose 2 pizza toppings from 5: n = 5, k = 2.\nStep 2: 5! = 120, 2! = 2, (5 − 2)! = 3! = 6.\nStep 3: C(5, 2) = 120 / (2 × 6) = 120 / 12 = 10.\nResult: there are 10 different topping pairs.",
  },
  "permutation-calculator": {
    formula: "P(n, k) = n! / (n − k)!",
    variables: "P(n, k) = Number of ordered arrangements of k from n\nn = Total items available\nk = Items arranged\n! = Factorial: n! = n × (n−1) × … × 1",
    explain: "Number of ordered arrangements of k items chosen from n. Unlike combinations, order matters, so P(n,k) ≥ C(n,k).",
    example: "Step 1: Gold, silver, bronze among 8 runners: n = 8, k = 3.\nStep 2: 8! = 40,320; (8 − 3)! = 5! = 120.\nStep 3: P(8, 3) = 40,320 / 120 = 336.\nResult: 336 possible podium orders.",
  },
  "lcm-gcd-calculator": {
    formula: "GCD via Euclid\nLCM(a, b) = (a × b) / GCD(a, b)",
    variables: "GCD(a, b) = Greatest common divisor\nLCM(a, b) = Least common multiple\na, b = Positive integers",
    explain: "The GCD is found by repeated remainder (Euclid's algorithm). The LCM follows from the identity linking the two — multiplying the numbers and dividing by their GCD.",
    example: "Step 1: Euclid for GCD(12, 18): 18 mod 12 = 6; 12 mod 6 = 0, so GCD = 6.\nStep 2: a × b = 12 × 18 = 216.\nStep 3: LCM = 216 / 6 = 36.\nResult: GCD(12, 18) = 6 and LCM(12, 18) = 36.",
  },
  "prime-number-checker": {
    formula: "n is prime ⟺ n > 1 and n mod d ≠ 0 for every d in [2, √n]",
    variables: "n = The integer being tested\nd = Trial divisor, 2 ≤ d ≤ √n\n√n = Square root of n, the testing cutoff\nmod = Remainder after division",
    explain: "Trial division up to the square root: any composite n must have a factor at or below √n, so testing larger divisors is unnecessary. 1 is not prime by definition; 2 is the only even prime.",
    example: "Step 1: Test n = 97. √97 ≈ 9.85, so only d = 2, 3, 5, 7 need testing.\nStep 2: 97 mod 2 = 1, 97 mod 3 = 1, 97 mod 5 = 2, 97 mod 7 = 6.\nStep 3: No divisor up to √n divides 97 evenly.\nResult: 97 is prime.",
  },
  "prime-factorization-calculator": {
    formula: "n = p₁^e₁ × p₂^e₂ × … × pₖ^eₖ",
    variables: "n = The integer being factored (n > 1)\np₁ … pₖ = Distinct prime factors, in increasing order\ne₁ … eₖ = Exponent of each prime, how many times it divides n",
    explain: "Every integer > 1 factors uniquely into primes. The exponents count how many times each prime divides n. The tool divides out 2, then 3, 5, … up to √n.",
    example: "Step 1: n = 360. Divide by 2 while even: 360 → 180 → 90 → 45, so 2³.\nStep 2: Divide 45 by 3: 45 → 15 → 5, so 3².\nStep 3: 5 is prime, so 5¹.\nResult: 360 = 2³ × 3² × 5 (check: 8 × 9 × 5 = 360).",
  },
  "scientific-notation-converter": {
    formula: "N = a × 10^n    (1 ≤ |a| < 10)",
    variables: "N = The number being converted\na = Mantissa, with 1 ≤ |a| < 10\nn = Integer exponent, the order of magnitude\n10^n = Power-of-ten scale factor",
    explain: "Scientific notation writes a number as a mantissa a times a power of ten. The exponent n shows the order of magnitude; converting just moves the decimal point.",
    example: "Step 1: N = 47,300. Move the decimal 4 places left: a = 4.73.\nStep 2: n = 4, so N = 4.73 × 10^4.\nStep 3: Reverse direction: 0.0021 → move the decimal 3 places right: a = 2.1, n = −3.\nResult: 47,300 = 4.73 × 10^4 and 0.0021 = 2.1 × 10^−3.",
  },
  "grade-calculator": {
    formula: "grade = Σ ( scoreᵢ × weightᵢ ) / Σ weightᵢ",
    variables: "grade = Weighted course grade (%)\nscoreᵢ = Score on component i (%)\nweightᵢ = Weight of component i (share of the final grade)",
    explain: "Weighted average. Each score is multiplied by its weight (e.g. exam 40%, homework 60%), then divided by the total weight. Higher-weighted items move the grade more.",
    example: "Step 1: midterm 85% at 30%, homework 92% at 20%, final 78% at 50%.\nStep 2: weighted sum = 85 × 0.30 + 92 × 0.20 + 78 × 0.50 = 25.5 + 18.4 + 39 = 82.9.\nResult: the course grade is 82.9% — a B, with the 50% final doing most of the damage.",
  },
  "final-grade-calculator": {
    formula: "needed = ( target − current × (1 − w) ) / w",
    variables: "needed = Required score on the final (%)\ntarget = Desired overall course grade (%)\ncurrent = Current grade before the final (%)\nw = Final exam weight (decimal, e.g. 0.4 for 40%)",
    explain: "Score required on the final to reach a target overall grade. current is your grade so far, w is the final’s weight (as a decimal). It tells you what you must score on what remains.",
    example: "Step 1: current = 84%, target = 90%, final worth w = 0.40.\nStep 2: locked-in points from coursework = 84 × 0.60 = 50.4.\nStep 3: points still needed = 90 − 50.4 = 39.6.\nStep 4: needed = 39.6 ÷ 0.40 = 99.\nResult: you must score 99% on the final to finish the course at 90%.",
  },
  "gpa-calculator": {
    formula: "GPA = Σ ( gradePoint × credits ) / Σ credits",
    variables: "GPA = Grade point average (0.0–4.0 scale)\ngradePoint = Points per letter (A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0)\ncredits = Credit hours of each course",
    explain: "Grade point average. Convert each letter grade to points (A = 4.0), multiply by course credits, sum, then divide by total credits. Weighted GPA adds extra points for honors/AP courses.",
    example: "Step 1: A in a 4-credit course, B+ (3.3) in 3 credits, B in 3 credits.\nStep 2: quality points = 4.0 × 4 + 3.3 × 3 + 3.0 × 3 = 16 + 9.9 + 9 = 34.9.\nStep 3: total credits = 4 + 3 + 3 = 10.\nResult: GPA = 34.9 ÷ 10 = 3.49.",
  },

  // ───────── 单位换算 ─────────
  "weight-converter": {
    formula: "lb = kg × 2.2046226218    oz = lb × 16    kg = lb × 0.45359237",
    variables: "kg = mass in kilograms\nlb = mass in pounds (1 lb = 0.45359237 kg)\noz = mass in ounces (1 lb = 16 oz)",
    explain: "Kilograms to pounds and ounces. 1 kg = 2.20462 lb, 1 lb = 16 oz, 1 g = 0.035274 oz. Conversions use the international avoirdupois pound, the exact standard since 1959.",
    example: "Convert 70 kg to pounds:\nlb = 70 × 2.2046226218 = 154.32 lb\nSplit into pounds and ounces:\n0.32 lb × 16 = 5.12 oz, so 70 kg ≈ 154 lb 5.12 oz\nCheck the reverse: 154.32 lb × 0.45359237 = 70.00 kg",
  },
  "temperature-converter": {
    formula: "°C = (°F − 32) × 5/9\nK = °C + 273.15",
    variables: "°C = temperature in degrees Celsius\n°F = temperature in degrees Fahrenheit\nK = temperature in kelvin",
    explain: "Fahrenheit → Celsius → Kelvin conversion.",
    example: "Convert 98.6 °F to Celsius and kelvin:\n°C = (98.6 − 32) × 5/9 = 66.6 × 5/9 = 37 °C\nK = 37 + 273.15 = 310.15 K\nReverse: 37 °C × 9/5 + 32 = 66.6 + 32 = 98.6 °F",
  },
  "length-converter": {
    formula: "1 in = 25.4 mm (exact)\n1 ft = 12 in = 0.3048 m\n1 yd = 3 ft = 0.9144 m\n1 mi = 5280 ft = 1609.344 m\n1 nmi = 1852 m\n1 km = 1000 m",
    variables: "mm = millimeters\ncm = centimeters\nm = meters\nkm = kilometers\nin = inches\nft = feet\nyd = yards\nmi = statute miles\nnmi = nautical miles",
    explain: "The 1959 international yard and pound agreement defines the inch as exactly 25.4 mm, which makes the foot (0.3048 m) and mile (1609.344 m) conversions exact rather than rounded measurements. The nautical mile is 1 minute of latitude, fixed at 1852 m.",
    example: "Convert a 6 ft person to metric:\nm = 6 × 0.3048 = 1.8288 m ≈ 183 cm\nConvert 5 km to miles:\nmi = 5000 ÷ 1609.344 ≈ 3.11 mi\nReverse: a 26.2 mi marathon = 26.2 × 1609.344 ≈ 42.16 km",
  },
  "mass-converter": {
    formula: "1 t = 1000 kg\n1 kg = 1000 g\n1 g = 1000 mg\n1 carat = 0.2 g\n1 grain = 0.06479891 g",
    variables: "mg = milligrams\ng = grams\nkg = kilograms\nt = metric tons (tonnes)\ncarat = carats, gemstone mass\ngrain = grains, 1 grain = 64.79891 mg",
    explain: "Metric mass steps by 1000: 1000 mg = 1 g, 1000 g = 1 kg, 1000 kg = 1 t. The carat is fixed at exactly 200 mg for gemstones, and the grain, once based on a barley grain, is now exactly 64.79891 mg (7000 grains = 1 pound).",
    example: "Convert 2.5 kg:\ng = 2.5 × 1000 = 2500 g\nt = 2.5 ÷ 1000 = 0.0025 t\ncarats = 2500 × 5 = 12,500 ct\ngrains = 2500 ÷ 0.06479891 ≈ 38,581 gr",
  },
  "area-converter": {
    formula: "1 ha = 10,000 m²\n1 km² = 1,000,000 m² = 100 ha\n1 acre = 4046.8564224 m² = 43,560 ft²\n1 ft² = 0.09290304 m²\n1 mi² = 640 acres = 2.589988 km²",
    variables: "m² = square meters, the SI unit\nkm² = square kilometers\nha = hectares (100 m × 100 m)\nft² = square feet\nacre = acre, 43,560 ft²\nmi² = square miles",
    explain: "Area units are the squares of length units, so 1 ft² = 0.3048 × 0.3048 = 0.09290304 m². A hectare is a 100 m by 100 m square; an acre descends from the area a team of oxen plowed in a day, standardized as a furlong (660 ft) by a chain (66 ft) = 43,560 ft².",
    example: "Convert a 2 ha farm field to acres:\nm² = 2 × 10,000 = 20,000 m²\nacres = 20,000 ÷ 4046.8564224 ≈ 4.94 acres\nReverse: 1 acre = 4046.86 m² ≈ 0.405 ha",
  },
  "volume-converter": {
    formula: "1 L = 1000 ml = 1000 cm³\n1 m³ = 1000 L\n1 US gal = 3.785411784 L\n1 imp gal = 4.54609 L\n1 cup (US) = 236.588 ml\n1 fl oz (US) = 29.5735 ml",
    variables: "ml = milliliters\nL = liters\nm³ = cubic meters\nUS gal = US liquid gallons\nimp gal = imperial (UK) gallons\ncup = US legal cup\nfl oz = US fluid ounces",
    explain: "The liter is one cubic decimeter, so 1 L = 1000 cm³ exactly and 1 m³ = 1000 L. US and imperial gallons differ by about 20% (3.785 L vs 4.546 L), a classic source of errors when mixing UK recipes or fuel figures with US ones.",
    example: "A 5 US gallon water cooler bottle:\nL = 5 × 3.785411784 = 18.93 L\nReverse: a 20 L jerrycan holds 20 ÷ 3.785411784 ≈ 5.28 US gal\nThe same 20 L in imperial gallons: 20 ÷ 4.54609 ≈ 4.40 imp gal",
  },
  "speed-converter": {
    formula: "km/h = m/s × 3.6\nmph = km/h ÷ 1.609344\n1 knot = 1.852 km/h\n1 ft/s = 0.3048 m/s",
    variables: "m/s = meters per second, the SI unit\nkm/h = kilometers per hour\nmph = miles per hour (1 mi = 1609.344 m)\nknot = nautical miles per hour (1 nmi = 1852 m)\nft/s = feet per second",
    explain: "The mile is exactly 1609.344 m, so 1 mph = 1.609344 km/h. The 3.6 factor between m/s and km/h comes from 3600 seconds per hour divided by 1000 meters per kilometer. Knots are nautical miles per hour and are standard at sea and in aviation.",
    example: "Convert 100 km/h:\nmph = 100 ÷ 1.609344 ≈ 62.14 mph\nm/s = 100 ÷ 3.6 ≈ 27.78 m/s\nReverse: 60 mph × 1.609344 = 96.56 km/h",
  },
  "pressure-converter": {
    formula: "1 atm = 101,325 Pa\n1 bar = 100,000 Pa\n1 psi = 6,894.76 Pa\n1 mmHg (Torr) = 133.322 Pa\nkPa = Pa ÷ 1000",
    variables: "Pa = pascal, the SI unit (1 N/m²)\nkPa = kilopascals\nbar = bar, exactly 100,000 Pa\npsi = pounds per square inch\natm = standard atmospheres\nmmHg (Torr) = millimeters of mercury",
    explain: "A pascal is one newton per square meter. The atmosphere is defined as exactly 101,325 Pa and 1 bar = 100,000 Pa, so bar and the hPa used on weather charts are nearly the same scale. Millimeters of mercury come from old barometers and survive in blood pressure readings.",
    example: "Convert 32 psi (typical tire pressure) to metric units:\nPa = 32 × 6894.76 = 220,632 Pa = 220.6 kPa ≈ 2.21 bar\nReverse: 220 kPa ÷ 6894.76 ≈ 31.9 psi",
  },
  "energy-converter": {
    formula: "1 cal = 4.184 J\n1 kcal = 1 food Calorie = 4184 J\n1 kWh = 3,600,000 J = 3.6 MJ\n1 BTU = 1055.06 J\n1 eV = 1.602176634 × 10⁻¹⁹ J",
    variables: "J = joule, the SI unit (1 watt acting for 1 second)\ncal = small calorie\nkcal = kilocalorie, the food Calorie with capital C\nkWh = kilowatt-hour\nBTU = British thermal unit\neV = electronvolt",
    explain: "The joule is one watt-second. The calorie was defined as the energy to warm 1 g of water by 1 °C and is now fixed at exactly 4.184 J; food Calories are kilocalories, 1000 times larger. A kWh is what a 1000 W appliance uses in one hour, exactly 3.6 MJ.",
    example: "A 2000 kcal daily diet in SI units:\nJ = 2000 × 4184 = 8,368,000 J = 8.37 MJ\nA 2 kW heater running for 3 h:\n2 × 3 = 6 kWh = 6 × 3.6 = 21.6 MJ",
  },
  "power-converter": {
    formula: "1 hp = 745.699872 W\n1 PS = 735.49875 W\n1 kW = 1000 W\n1 BTU/s = 1055.06 W",
    variables: "W = watts, the SI unit of power (1 W = 1 J/s)\nkW = kilowatts\nhp = mechanical horsepower (550 ft·lb/s)\nPS = metric horsepower, used in Europe (75 kgf·m/s)\nBTU/s = British thermal units per second",
    explain: "Power is energy per second, so 1 W = 1 J/s. Mechanical horsepower is defined as 550 foot-pounds per second = 745.699872 W, while metric horsepower (PS) is 75 kilogram-force meters per second = 735.49875 W, about 1.4% smaller, which is why European and American engine ratings differ slightly.",
    example: "Convert a 150 kW motor to horsepower:\nW = 150 × 1000 = 150,000 W\nhp = 150,000 ÷ 745.699872 ≈ 201.2 hp\nPS = 150,000 ÷ 735.49875 ≈ 203.9 PS\nReverse: 201.2 hp × 745.699872 ≈ 150,047 W ≈ 150 kW",
  },
  "frequency-converter": {
    formula: "f = 1/T\n1 kHz = 1000 Hz\n1 MHz = 10⁶ Hz\n1 GHz = 10⁹ Hz\nHz = rpm ÷ 60",
    variables: "f = frequency in hertz\nT = period, the seconds per cycle\nHz = hertz, cycles per second\nkHz, MHz, GHz = kilo-, mega-, gigahertz (powers of 1000)\nrpm = revolutions per minute",
    explain: "Hertz counts cycles per second; rpm counts rotations per minute, so divide rpm by 60 to get hertz. Frequency and period are reciprocals: the 50 Hz mains supply completes one cycle every 1/50 s = 20 ms.",
    example: "A motor spinning at 1800 rpm:\nHz = 1800 ÷ 60 = 30 Hz\nPeriod: T = 1/30 ≈ 0.0333 s = 33.3 ms per revolution\nReverse: 30 Hz × 60 = 1800 rpm",
  },
  "angle-converter": {
    formula: "rad = deg × π/180\ndeg = rad × 180/π\n1 rev = 360° = 2π rad = 400 grad\n1° = 60 arcmin, 1 arcmin = 60 arcsec\n1 grad = 0.9°",
    variables: "deg (°) = degrees\nrad = radians\ngrad = gradians, 400 per full circle\narcmin (′) = arcminutes, 60 per degree\narcsec (″) = arcseconds, 60 per arcminute\nrev = full revolutions",
    explain: "A full circle is 360°, 2π rad, or 400 grad. Radians are the natural unit for math because arc length equals radius times the angle in radians; gradians split the circle into 400 parts so a right angle is exactly 100 grad.",
    example: "Convert 90° to radians and gradians:\nrad = 90 × π/180 = π/2 ≈ 1.5708 rad\ngrad = 90 ÷ 0.9 = 100 grad\nConvert 0.5° to arcunits:\n0.5 × 60 = 30 arcmin = 30 × 60 = 1800 arcsec\nReverse: 1.5708 rad × 180/π ≈ 90°",
  },
  "density-converter": {
    formula: "ρ = m ÷ V\n1 g/cm³ = 1000 kg/m³\n1 g/cm³ = 1 kg/L\n1 g/cm³ = 62.428 lb/ft³",
    variables: "ρ = density\nm = mass in kg or g\nV = volume in m³ or cm³\nkg/m³ = kilograms per cubic meter, the SI unit\ng/cm³ = grams per cubic centimeter (same as g/ml)\nlb/ft³ = pounds per cubic foot",
    explain: "Density is mass divided by volume. Water is the reference at about 1000 kg/m³ = 1 g/cm³. The factor of 1000 appears because 1 g = 0.001 kg while 1 cm³ = 0.000001 m³.",
    example: "Convert 1.25 g/cm³ (sugar syrup) to SI and imperial units:\nkg/m³ = 1.25 × 1000 = 1250 kg/m³\nlb/ft³ = 1.25 × 62.428 = 78.035 lb/ft³\nReverse: 1250 kg/m³ ÷ 1000 = 1.25 g/cm³",
  },
  "flow-rate-converter": {
    formula: "Q = V ÷ t\n1 L/s = 60 L/min = 3.6 m³/h\n1 GPM (US) = 3.78541 L/min\n1 CFM = 28.3168 L/min ≈ 1.699 m³/h",
    variables: "Q = flow rate\nV = volume delivered\nt = time taken\nL/s = liters per second\nL/min = liters per minute\nm³/h = cubic meters per hour\nGPM = US gallons per minute\nCFM = cubic feet per minute",
    explain: "Flow rate is volume divided by time. Because 1 US gallon = 3.78541 L, 1 GPM = 3.78541 L/min; and since an hour has 3600 seconds, 1 L/s = 3600 L/h = 3.6 m³/h.",
    example: "A pump delivers 12 L/min:\nL/s = 12 ÷ 60 = 0.2 L/s\nm³/h = 0.2 × 3.6 = 0.72 m³/h\nGPM = 12 ÷ 3.78541 ≈ 3.17 GPM",
  },
  "data-storage-converter": {
    formula: "1 byte = 8 bits\ndecimal: 1 kB = 1000 B, 1 MB = 1000 kB, 1 GB = 10⁹ B, 1 TB = 10¹² B\nbinary: 1 KiB = 1024 B, 1 MiB = 1024 KiB, 1 GiB = 2³⁰ B\nGiB = GB × 0.931323",
    variables: "B = byte (8 bits)\nb = bit\nkB, MB, GB, TB = decimal units, powers of 1000\nKiB, MiB, GiB, TiB = binary units, powers of 1024",
    explain: "Decimal (SI) units count in powers of 1000, while binary (IEC) units count in powers of 1024 because memory is addressed in binary. Drive makers quote decimal GB but Windows displays binary GiB, so a 500 GB drive shows about 465 GiB (500 × 0.931323).",
    example: "A 500 GB drive as reported by Windows:\nGiB = 500 × 0.931323 ≈ 465.66 GiB\nInternet speed check:\n100 Mbps ÷ 8 = 12.5 MB/s, so a 750 MB file takes about 60 s to download",
  },
  "time-converter": {
    formula: "1 min = 60 s\n1 h = 60 min = 3600 s\n1 d = 24 h = 86,400 s\n1 week = 604,800 s\n1 month (average) = 30.436875 d\n1 year = 365.2425 d = 31,556,952 s",
    variables: "s = seconds\nmin = minutes\nh = hours\nd = days\nweek = weeks (7 days)\nmonth = average calendar month\nyear = average Gregorian year",
    explain: "Seconds, minutes, hours and days are defined exactly: a day is 86,400 s. Calendar years average 365.2425 days under the Gregorian leap rule, which makes the average month 30.436875 days. Astronomy uses the Julian year of exactly 365.25 days = 31,557,600 s.",
    example: "How long is 1,000,000 seconds?\ndays = 1,000,000 ÷ 86,400 ≈ 11.57 days\nConvert 2.5 h the other way:\nmin = 2.5 × 60 = 150 min\ns = 150 × 60 = 9000 s",
  },
  "fuel-economy-converter": {
    formula: "L/100km = 235.214583 ÷ MPG (US)\nMPG (US) = 235.214583 ÷ (L/100km)\nL/100km = 282.481 ÷ MPG (UK)\n1 MPG (UK) = 1.201 MPG (US)",
    variables: "MPG = miles per US gallon (1 US gal = 3.785411784 L)\nMPG (UK) = miles per imperial gallon (1 imp gal = 4.54609 L)\nL/100km = liters of fuel consumed per 100 kilometers",
    explain: "MPG measures distance per fuel (higher is better) while L/100km measures fuel per distance (lower is better), so the relationship is an inverse. The constant 235.214583 comes from 100 × 3.785411784 ÷ 1.609344; the UK version uses the larger imperial gallon, giving 282.481.",
    example: "A car rated at 30 MPG (US):\nL/100km = 235.214583 ÷ 30 = 7.84 L/100km\nReverse: 235.214583 ÷ 7.84 ≈ 30 MPG\nA UK rating of 40 MPG (UK) = 40 × 1.201 ≈ 48.0 MPG (US)",
  },
  "cooking-converter": {
    formula: "weight (g) = volume (ml) × density (g/ml)\n1 cup = 236.588 ml\n1 tbsp = 14.79 ml = 3 tsp\n1 tsp = 4.93 ml\n1 cup flour ≈ 125 g\n1 cup sugar ≈ 200 g\n1 cup butter ≈ 227 g",
    variables: "cup = US volume cup, 236.588 ml\ntbsp = tablespoon, 14.79 ml\ntsp = teaspoon, 4.93 ml\ng = grams on a kitchen scale\noz = ounces, 1 oz = 28.35 g\ndensity = packed density of the ingredient in g/ml",
    explain: "Cups measure volume but grams measure weight, so the conversion depends on each ingredient's density: sifted flour sits at about 0.53 g/ml while granulated sugar packs near 0.85 g/ml. That is why a cup of flour weighs roughly 125 g but a cup of sugar 200 g, and dense butter exactly 227 g (two US sticks).",
    example: "A recipe asks for 2 cups of flour:\ng = 2 × 125 = 250 g\nYou have 340 g of butter:\ncups = 340 ÷ 227 ≈ 1.5 cups (3 sticks)\nSmall amounts: 1 tbsp = 3 tsp = 14.79 ml",
  },
  "numeral-system-converter": {
    formula: "N = Σ dᵢ × bⁱ (digits dᵢ, base b, positions i counted from 0 at the right)\n1 hex digit = 4 bits\n1 octal digit = 3 bits",
    variables: "b = base: 2 for binary, 8 for octal, 10 for decimal, 16 for hexadecimal\ndᵢ = the digit in position i (rightmost digit is position 0)\nbⁱ = the base raised to the power of the position\nA-F = hex digits standing for 10-15",
    explain: "In positional notation each digit is worth digit × base to the power of its position, counted from 0 on the right. Hexadecimal uses A-F for 10-15, and since 16 = 2⁴, every hex digit maps to exactly 4 binary digits, which is why programmers write binary compactly as hex.",
    example: "Convert hex 0xFF to decimal, binary and octal:\n0xFF = 15 × 16 + 15 × 1 = 240 + 15 = 255\n255 in binary = 11111111 (two hex digits = 8 bits)\n255 in octal = 377 (3 × 64 + 7 × 8 + 7 = 192 + 56 + 7 = 255)",
  },

  // ───────── 开发者 / 安全 / 时间 ─────────
  "gpt-token-counter": {
    formula: "tokens ≈ characters / 4",
    variables: "characters: number of characters in the text (count)\ntokens: estimated token count of the text (tokens)\n4: rule-of-thumb average characters per token for English text",
    explain: "A rule-of-thumb estimate: English text averages roughly 4 characters per token, refined by splitting on words and punctuation. Real counts depend on the model's exact tokenizer.",
    example: "Step 1: Take a 1,200-character paragraph of English text.\nStep 2: Apply the rule of thumb: tokens ≈ 1200 / 4 = 300.\nStep 3: A real tokenizer may return 280-320 because punctuation, code, and rare words split differently.\nResult: about 300 tokens (estimate).",
  },
  "ip-subnet-calculator": {
    formula: "addresses = 2^(32 − prefix)\nusable hosts = 2^(32 − prefix) − 2",
    variables: "prefix: CIDR prefix length, the number of network bits (0-32)\naddresses: total addresses in the subnet (addresses)\nusable hosts: addresses assignable to devices, excluding network and broadcast (hosts)",
    explain: "For an IPv4 /prefix, the host bits are (32 − prefix). Two addresses are reserved (network and broadcast), so usable hosts are two fewer than the total address count.",
    example: "Step 1: Take a /26 subnet, so prefix = 26.\nStep 2: Host bits = 32 − 26 = 6.\nStep 3: Total addresses = 2^6 = 64.\nStep 4: Usable hosts = 64 − 2 = 62.\nResult: a /26 subnet holds 64 addresses, 62 usable.",
  },
  "ip-checker": {
    formula: "Risk Score = W_type × S_datacenter + W_tz × S_timezone_diff + W_bl × S_blacklist",
    variables: "W_type, W_tz, W_bl: weights for the datacenter, timezone-mismatch, and blacklist signals (points)\nS_datacenter: 1 if the IP ASN matches datacenter keywords such as AWS, hosting, or cloud, else 0\nS_timezone_diff: 1 if the device timezone differs from the IP geolocation timezone, else 0\nS_blacklist: proxy/VPN keyword and public blacklist trait score (0-1)",
    explain: "A heuristic weighted model. S_datacenter is scored 1 when the ASN owner matches datacenter keywords such as AWS, hosting, or cloud, and carries the highest weight W_type. S_timezone_diff flags a mismatch between your device timezone and the IP geolocation timezone (a classic proxy leak signal). S_blacklist approximates proxy/VPN keywords and public blacklist traits. The total is scaled to 0–100: 0–20 low risk (native residential), 21–60 medium risk (hosting/VPN traits), 61–100 high risk (proxy/Tor/blacklisted).",
    example: "Step 1: An IP sits on a hosting ASN (S_datacenter = 1) with a matching device timezone (S_timezone_diff = 0) and no blacklist hits (S_blacklist = 0).\nStep 2: Use weights W_type = 40, W_tz = 20, W_bl = 40.\nStep 3: Risk Score = 40 × 1 + 20 × 0 + 40 × 0 = 40.\nResult: 40 out of 100, medium risk (hosting/VPN traits).",
  },
  "chmod-calculator": {
    formula: "octal digit = read(4) + write(2) + execute(1)",
    variables: "read: r permission, worth 4\nwrite: w permission, worth 2\nexecute: x permission, worth 1\noctal digit: one digit for each of owner, group, and others",
    explain: "Each of the three groups (owner, group, others) becomes one octal digit by adding the enabled permission values. rwx = 7, rw- = 6, r-x = 5.",
    example: "Step 1: Owner has rwx = 4 + 2 + 1 = 7.\nStep 2: Group has r-x = 4 + 0 + 1 = 5.\nStep 3: Others have r-- = 4 + 0 + 0 = 4.\nResult: chmod 754.",
  },
  "aspect-ratio-calculator": {
    formula: "h₂ = h₁ × ( w₂ / w₁ )",
    variables: "w₁: original width (px)\nh₁: original height (px)\nw₂: new width (px)\nh₂: new height (px)",
    explain: "Resize while keeping the aspect ratio: the height scales by the same factor as the width. Given one new dimension, the other is computed to preserve the proportion.",
    example: "Step 1: Original image is 1920 × 1080; new width is 1280.\nStep 2: Scale factor = 1280 / 1920 = 0.6667.\nStep 3: h₂ = 1080 × 0.6667 = 720.\nResult: 1280 × 720, the same 16:9 ratio.",
  },
  "color-contrast-checker": {
    formula: "CR = ( L_lighter + 0.05 ) / ( L_darker + 0.05 )",
    variables: "L_lighter: relative luminance of the lighter color (0-1)\nL_darker: relative luminance of the darker color (0-1)\nCR: contrast ratio (ranges from 1 to 21)\n0.05: constant that accounts for ambient light flare",
    explain: "WCAG contrast ratio of two colors from their relative luminance L. Ratios ≥ 4.5 pass AA for normal text; ≥ 7 passes AAA. The 0.05 accounts for ambient light flare.",
    example: "Step 1: White text has L = 1.0 on a black background with L = 0.0.\nStep 2: CR = (1.0 + 0.05) / (0.0 + 0.05) = 1.05 / 0.05 = 21.\nResult: 21:1, the maximum possible contrast; passes AAA (≥ 7).",
  },
  "px-to-rem": {
    formula: "rem = px / root font size (px)",
    variables: "px: length in pixels (px)\nroot font size: font size of the html element, default 16 px\nrem: length in rem units",
    explain: "Convert pixels to rem relative to the root font size (default 16 px). rem scales with user font settings, so it is the accessible unit for type and spacing.",
    example: "Step 1: Convert 24 px with the default 16 px root font size.\nStep 2: rem = 24 / 16 = 1.5.\nResult: 24 px = 1.5 rem.",
  },
  "date-difference-calculator": {
    formula: "days = date₂ − date₁",
    variables: "date₁: earlier calendar date\ndate₂: later calendar date\ndays: whole days between the two dates",
    explain: "The whole-day difference between two calendar dates, counting each midnight crossed. Time-of-day and time-zone settings can add or subtract a day at the edges.",
    example: "Step 1: From 2024-03-01 to 2024-03-31.\nStep 2: March has 31 days, so 31 − 1 = 30 midnights are crossed.\nResult: 30 days.",
  },
  "days-countdown-calculator": {
    formula: "days remaining = target date − today",
    variables: "today: current calendar date\ntarget date: future date counting down to\ndays remaining: whole calendar days until the target",
    explain: "Calendar days from today to the target date. Business-day mode further excludes Saturdays and Sundays from the count.",
    example: "Step 1: Today is 2024-12-25 and the target is 2025-01-01.\nStep 2: December has 31 days, so 31 − 25 = 6 days remain in December.\nStep 3: Add 1 day to reach January 1.\nResult: 7 days remaining.",
  },
  "timezone-converter": {
    formula: "local time = UTC + offset",
    variables: "UTC: Coordinated Universal Time\noffset: the zone offset in hours, written +hh:mm or −hh:mm (may shift with daylight saving)\nlocal time: wall-clock time in the target zone",
    explain: "Every time zone is UTC plus a fixed offset (which may shift with daylight saving). Converting between zones goes through UTC: add one offset, subtract the other.",
    example: "Step 1: An event happens at 14:00 UTC.\nStep 2: New York in winter uses UTC−5.\nStep 3: 14:00 − 5 = 09:00 local time.\nResult: 09:00 EST in New York (it becomes 10:00 EDT in summer).",
  },
  "base-converter": {
    formula: "N = Σ dᵢ × bⁱ\nwhere dᵢ is the digit at position i, counting from 0 at the rightmost digit, and b is the base (2-36)",
    variables: "N: value of the number in decimal\nb: base of the numeral system (2-36)\ndᵢ: digit at position i, with 0 ≤ dᵢ < b (digits above 9 use letters A-Z)\ni: position index, starting at 0 from the right",
    explain: "Positional notation: each digit contributes its face value multiplied by the base raised to its position power. Summing every digit's contribution gives the decimal value, and dividing by the base repeatedly gives the digits in any other base.",
    example: "Step 1: Convert 1011010 in base 2 to decimal.\nStep 2: Bits from left to right sit at positions 6 down to 0: 1×2⁶ + 0×2⁵ + 1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0×2⁰.\nStep 3: = 64 + 0 + 16 + 8 + 0 + 2 + 0 = 90.\nResult: 1011010₂ = 90 in decimal.",
  },
  "roman-numeral-converter": {
    formula: "total = Σ symbol values read left to right\nsubtractive rule: a smaller symbol before a larger one is subtracted (IV = 4, XC = 90)\nI=1, V=5, X=10, L=50, C=100, D=500, M=1000",
    variables: "I: 1\nV: 5\nX: 10\nL: 50\nC: 100\nD: 500\nM: 1000\nsubtractive rule: smaller value placed before a larger one (I, X, C only) is subtracted instead of added\nrange: valid Roman numerals cover 1 to 3999",
    explain: "Roman numerals are additive: each symbol contributes its fixed value, read left to right. When a smaller symbol precedes a larger one (IV, IX, XL, XC, CD, CM), it is subtracted, which keeps the notation within four repeated symbols. Values are grouped by thousands, hundreds, tens, and ones, so conversion splits the number digit by digit.",
    example: "Step 1: Convert 2026 to a Roman numeral.\nStep 2: Thousands: 2000 = MM.\nStep 3: Tens: 20 = XX.\nStep 4: Ones: 6 = VI.\nResult: 2026 = MMXXVI.",
  },
  "epoch-converter": {
    formula: "Unix time = seconds elapsed since 1970-01-01 00:00:00 UTC (leap seconds ignored)\ndays since epoch = seconds ÷ 86,400\nmilliseconds timestamp = seconds × 1000",
    variables: "Unix time: seconds elapsed since the epoch 1970-01-01 00:00:00 UTC (s)\n86,400: seconds per day\nmilliseconds: JavaScript-style timestamps, equal to seconds × 1000 (ms)",
    explain: "Unix time is a plain count of seconds since the fixed epoch of 1970-01-01 00:00:00 UTC, ignoring leap seconds, so it is the same number everywhere on Earth. Dividing by 86,400 gives whole days since 1970; the remainder of each day converts to hours, minutes, and seconds. Converting between zones then only means adding the local UTC offset.",
    example: "Step 1: Take the timestamp 1,700,000,000 seconds.\nStep 2: Days since epoch = 1,700,000,000 ÷ 86,400 ≈ 19,675 whole days, landing on 2023-11-14.\nStep 3: Remainder = 1,700,000,000 − 19,675 × 86,400 = 80,000 s = 22 h 13 min 20 s.\nResult: 1,700,000,000 s = 2023-11-14 22:13:20 UTC.",
  },
  "password-entropy-checker": {
    formula: "H = L × log₂(N) − pattern penalties\nN: 26 lowercase only, 52 both cases, 62 with digits, 95 with symbols",
    variables: "H: password entropy (bits)\nL: password length (characters)\nN: charset pool size (26 lowercase, +26 uppercase = 52, +10 digits = 62, +33 symbols = 95)\npenalties: bits subtracted for patterns such as dictionary words, repeats, or keyboard sequences",
    explain: "Each random character carries log₂(N) bits of information, so length times that value is the brute-force entropy. Patterns like dictionary words or repeated sequences reduce the number of guesses an attacker actually needs, so their cost is subtracted as bits.",
    example: "Step 1: Take the password Tr0ub4dor&3, length L = 11.\nStep 2: It mixes lower, upper, digits, and symbols, so N = 95.\nStep 3: H = 11 × log₂(95) = 11 × 6.570 ≈ 72.3 bits.\nStep 4: A dictionary-word penalty of about 10 bits lowers it to roughly 62 bits.\nResult: about 62 bits of effective entropy.",
  },
  "password-generator": {
    formula: "H = L × log₂(N)\nN: 26 lowercase, 52 both cases, 62 alphanumeric, 95 printable ASCII",
    variables: "H: generated entropy (bits)\nL: password length (characters)\nN: charset pool size (26 lowercase, 52 letters, 62 alphanumeric, 95 printable ASCII)",
    explain: "A password generated by picking each character uniformly at random from a pool of N symbols carries log₂(N) bits per character. Total strength is therefore length times bits per character; 80 bits is a common comfort threshold, 128 bits is very strong.",
    example: "Step 1: Generate a 16-character password from the 62 alphanumeric symbols.\nStep 2: log₂(62) = 5.954 bits per character.\nStep 3: H = 16 × 5.954 ≈ 95.3 bits.\nResult: about 95 bits of entropy, well above the 80-bit comfort threshold.",
  },
  "password-strength-checker": {
    formula: "H = L × log₂(N) − penalties\ncrack time ≈ 2^H ÷ guesses per second",
    variables: "H: entropy estimate (bits)\nL: password length (characters)\nN: charset pool size (26 lowercase, 52 both cases, 62 with digits, 95 with symbols)\npenalties: bits subtracted for dictionary words, repeats, and sequences\nguesses per second: attacker hash rate, e.g. 10^10 for fast offline cracking of weak hashes",
    explain: "Strength is estimated as brute-force entropy from length and charset, then reduced for predictable structure such as dictionary words, repeated characters, or sequences like abcdef. Dividing 2^H guesses by the attacker's hash rate converts entropy into an honest time-to-crack estimate.",
    example: "Step 1: Take the password summer2024, L = 10, using lowercase plus digits so N = 62.\nStep 2: H = 10 × log₂(62) = 10 × 5.954 ≈ 59.5 bits.\nStep 3: Subtract about 20 bits for two dictionary words plus a year pattern: H ≈ 39.5 bits.\nStep 4: Crack time ≈ 2^39.5 ÷ 10^10 ≈ 7.8 × 10^11 ÷ 10^10 ≈ 78 seconds.\nResult: weak despite decent length, because the pattern penalty leaves under 40 bits.",
  },
  "secret-key-generator": {
    formula: "keyspace bits = log₂(charset^length) = length × log₂(charset)\nbytes for a 256-bit key = 256 ÷ 8 = 32",
    variables: "keyspace bits: information content of the generated key (bits)\ncharset: number of distinct symbols in the format (16 for hex, 64 for Base64, 95 for printable ASCII)\nlength: number of characters in the key\nbytes: raw key material, 8 bits per byte",
    explain: "A random key of a given length over a fixed alphabet has as many possible values as charset^length, and log₂ of that count is its strength in bits. Different encodings of the same random bytes (hex doubles the length, Base64 multiplies by 4/3) carry identical security.",
    example: "Step 1: A 64-character hex key uses a charset of 16.\nStep 2: keyspace bits = 64 × log₂(16) = 64 × 4 = 256 bits.\nStep 3: 256 bits ÷ 8 = 32 bytes of raw key material.\nResult: a 64-character hex key carries the same 256-bit strength as 32 random bytes.",
  },
  "uuid-generator": {
    formula: "random bits = 128 − 6 = 122 (RFC 4122 v4)\ncollision probability p ≈ n² / 2^123 for n generated UUIDs (birthday bound)",
    variables: "128: total bits in a UUID\n6: fixed bits (4 version bits plus 2 variant bits)\n122: cryptographically random bits in a v4 UUID\nn: number of UUIDs generated\np: approximate probability that at least one pair of UUIDs collides",
    explain: "A v4 UUID has 128 bits, but 6 are fixed by the version and variant fields, leaving 122 random bits. The birthday bound says collisions become plausible only when n approaches 2^61.5, so p stays near zero for any realistic n.",
    example: "Step 1: A v4 UUID stores 122 random bits (128 minus 6 fixed version/variant bits).\nStep 2: Generate n = 1 billion = 10^9 UUIDs.\nStep 3: p ≈ n² / 2^123 = 10^18 ÷ (1.06 × 10^37) ≈ 9.4 × 10^−20.\nResult: even a billion UUIDs collide with probability about 1 in 10 billion billion.",
  },
  "qr-code-generator": {
    formula: "modules per side = 21 + 4 × (version − 1)\nerror correction: L 7%, M 15%, Q 25%, H 30% of codewords recoverable\nquiet zone = 4 modules on each side",
    variables: "version: QR size level, 1 (smallest) to 40 (largest)\nmodules: black/white cells per side of the symbol\nL, M, Q, H: error-correction levels that recover 7%, 15%, 25%, and 30% of codewords\nquiet zone: blank margin around the code, 4 modules wide",
    explain: "QR symbols come in 40 versions whose square grid grows by 4 modules per side per version, starting at 21 for version 1. Higher error-correction levels spend more codewords on redundancy, so capacity drops as damage tolerance rises. A 4-module quiet zone helps scanners find the symbol's edges.",
    example: "Step 1: Take a version 5 QR code.\nStep 2: modules per side = 21 + 4 × (5 − 1) = 21 + 16 = 37.\nStep 3: At level M it survives up to 15% damage, and it needs a 4-module quiet zone around it.\nResult: a 37 × 37 module code plus margin.",
  },
  "unicode-character-lookup": {
    formula: "code point = U+XXXX (hexadecimal, U+0000 to U+10FFFF)\nUTF-8 length: 1 byte for U+0000-007F, 2 bytes U+0080-07FF, 3 bytes U+0800-FFFF, 4 bytes U+10000-10FFFF",
    variables: "U+XXXX: Unicode code point in hexadecimal\nUTF-8: variable-width encoding using 1 to 4 bytes per code point\nblock: named range the character belongs to, e.g. Latin-1 Supplement\ncategory: character class, e.g. Letter, Punctuation, Symbol",
    explain: "Every character has a numeric code point written U+ followed by hex digits, and UTF-8 stores it in as few bytes as the code point's magnitude requires: shorter for ASCII and Latin, longer for CJK and emoji. The leading bits of each UTF-8 byte mark how many bytes the sequence spans, which makes the encoding self-synchronizing.",
    example: "Step 1: Take é, code point U+00E9.\nStep 2: U+00E9 falls in U+0080-07FF, so UTF-8 uses 2 bytes.\nStep 3: Fill its 11 bits 000 1110 1001 into the 2-byte template 110xxxxx 10xxxxxx.\nResult: é (U+00E9) is stored as the 2 bytes 0xC3 0xA9.",
  },
  "word-counter": {
    formula: "reading time ≈ words ÷ 200 wpm\nspeaking time ≈ words ÷ 130 wpm",
    variables: "words: number of words in the text\n200 wpm: average adult silent reading speed (typically 200-250 wpm)\n130 wpm: average speaking pace for presentations and narration",
    explain: "Reading and speaking speeds are roughly constant per person, so dividing the word count by the rate gives the duration. Silent reading runs faster (about 200-250 wpm) than spoken delivery (about 130 wpm), which is why scripts take longer to perform than to skim.",
    example: "Step 1: An article contains 1,500 words.\nStep 2: Reading time ≈ 1500 ÷ 200 = 7.5 minutes.\nStep 3: Speaking time ≈ 1500 ÷ 130 ≈ 11.5 minutes.\nResult: about 7.5 minutes to read, 11.5 minutes to read aloud.",
  },
  "text-size-estimator": {
    formula: "size ≈ Σ bytes per character\nUTF-8: ASCII 1 byte, Latin/Greek/Cyrillic/Arabic 2 bytes, CJK 3 bytes, emoji 4 bytes\nBase64 size ≈ 4 × ⌈bytes ÷ 3⌉",
    variables: "size: UTF-8 storage size of the text (bytes)\nASCII: characters U+0000-007F, 1 byte each\nLatin/Greek/Cyrillic/Arabic: accented and non-Latin letters, 2 bytes each\nCJK: Chinese, Japanese, Korean characters, 3 bytes each\nemoji: 4 bytes each\nBase64: encoded size ≈ 4 × ⌈bytes ÷ 3⌉ characters",
    explain: "UTF-8 is variable-width: common characters cost fewer bytes, so storage size depends on the script mix, not the character count. Base64 packs every 3 bytes into 4 characters, which is why encoded text is always about a third larger than the raw bytes.",
    example: "Step 1: The text héllo has 5 characters.\nStep 2: h, l, l, o are ASCII at 1 byte each; é is Latin at 2 bytes.\nStep 3: size = 1 + 2 + 1 + 1 + 1 = 6 bytes.\nStep 4: Base64 ≈ 4 × ⌈6 ÷ 3⌉ = 8 characters.\nResult: 6 bytes in UTF-8, about 8 characters in Base64.",
  },

}

/** 读取某工具的公式;未注册返回 null(组件据此不渲染空区) */
export function getToolFormula(slug: string): ToolFormula | null {
  return toolFormulas[slug] ?? null
}
