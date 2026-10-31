interface AmortRow {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

/**
 * 标准等额本息贷款计算
 * M = P × [r(1+r)^n] / [(1+r)^n − 1]
 *   P = 本金, r = 月利率, n = 总月数
 */
export function calcLoan(principal: number, annualRate: number, years: number) {
  const months = Math.round(years * 12)
  const monthlyRate = annualRate / 100 / 12

  let monthlyPayment: number
  if (monthlyRate === 0) {
    monthlyPayment = principal / months
  } else {
    const factor = Math.pow(1 + monthlyRate, months)
    monthlyPayment = (principal * monthlyRate * factor) / (factor - 1)
  }

  // 生成还款明细。末期按剩余本金结清:固定月供的舍入残差落在最后一期,
  // 保证期末余额恰好为 0、总还款与明细逐行自洽(0% 利率同样适用)。
  const schedule: AmortRow[] = []
  let balance = principal
  let totalPaid = 0
  for (let m = 1; m <= months; m++) {
    const interest = balance * monthlyRate
    const isLast = m === months
    const payment = isLast ? balance + interest : monthlyPayment
    const principalPaid = payment - interest
    balance = isLast ? 0 : Math.max(0, balance - principalPaid)
    schedule.push({ month: m, payment, principal: principalPaid, interest, balance })
    totalPaid += payment
  }

  const totalInterest = totalPaid - principal

  return { monthlyPayment, totalPaid, totalInterest, schedule, months }
}

