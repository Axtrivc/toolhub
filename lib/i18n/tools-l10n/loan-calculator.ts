/**
 * loan-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts、
 * LoanCalculatorClient 里的英文 fallback、content.tsx 的 en 分支)。
 *
 * 覆盖:faqs(可见)+ ui(交互界面)+ useCases(Common uses)+ formula(公式区)。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]'

export const loanCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '查看带还款明细的贷款计算器',
      '算个人贷款的月供',
      '做车贷的等额本息测算',
      '按贷款类型比较还款方案',
    ],
    faqs: [
      {
        q: '这个计算器包含税费和保险吗?',
        a: '不包含。它只计算本金和利息。真实的房贷月供还要加上房产税、房屋保险,可能还有 PMI 或物业费(HOA)——这些每月可能多出几百美元。',
      },
      {
        q: '什么是等额本息(摊销)?',
        a: '等额本息是指以相等的金额分期偿还贷款。每期还款在利息(借款成本)和本金(减少欠款)之间分配。上方的明细表展示了这种分配如何随时间变化。',
      },
      {
        q: '多少利率算好利率?',
        a: '取决于贷款类型和你的信用。近年房贷利率大致在 3% 到 7% 以上,车贷 4%–10%,个人贷款 6%–36%。信用越好,能拿到的利率越低。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '等额本息月供。P = 本金,r = 月利率(年利率 ÷ 12),n = 总月数。结果 M 即每月固定还款额。',
    },
    ui: {
      inputs: '输入',
      loanAmount: '贷款金额',
      annualRate: '年利率',
      loanTerm: '贷款期限',
      yearsSuffix: '年',
      months: '个月',
      monthlyPayment: '月供',
      totalInterestPaid: '总利息',
      overMonths: '共 {n} 个月',
      totalPaid: '总还款额',
      principalPlusInterest: '本金 + 利息',
      amortTitle: '还款明细 ',
      chartTitleBalance: '贷款余额随时间变化',
      'preset.0': '个人贷款 ($10k @ 9%)',
      'preset.1': '债务整合 ($25k @ 7%)',
      'preset.2': '车贷 ($25k @ 7.5%)',
      'preset.3': '房贷 ($320k @ 6.8%)',
      lineBalance: '剩余欠款',
      optAll: '全部 ',
      first12Months: '前 12 期',
      showAll: '显示全部 ',
      showFirst12: '显示前 12 期',
      errNegativeRate: '利率不能为负——请输入 0% 或以上。',
      errTermTooLong: '贷款期限过长——最长 50 年(600 期)。',
      summaryErrorPrefix: '贷款计算器: ',
      thMonth: '期数',
      thPayment: '还款额',
      thPrincipal: '本金',
      thInterest: '利息',
      thBalance: '余额',
      emptyState: '输入贷款金额、利率和期限,即可查看月供',
      noteText:
        '💰 本计算器采用标准等额本息公式(每月还款额固定)。所示利率为估算值——实际利率取决于你的信用、贷款机构和贷款类型。',
      summaryEmpty: '输入贷款金额、利率和期限,即可查看月供。',
      summaryTitle: '贷款计算摘要',
      sLoanAmount: '贷款金额:',
      sAnnualRate: '年利率:',
      sTerm: '期限:',
      sResults: '结果:',
      sMonthlyPayment: '月供:',
      sTotalInterest: '总利息:',
      sTotalPaid: '总还款额:',
      csvField: '字段',
      csvValue: '数值',
      csvLoanAmount: '贷款金额',
      csvAnnualRate: '年利率',
      csvTermYears: '期限(年)',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'ver un simulador de préstamo con cuadro de amortización',
      'calcular la cuota mensual de un préstamo personal',
      'simular la amortización de un préstamo de coche',
      'comparar planes de pago según el tipo de préstamo',
    ],
    faqs: [
      {
        q: '¿Esta calculadora incluye impuestos y seguro?',
        a: 'No. Calcula solo capital e intereses. En una hipoteca real también pagarás impuestos sobre la propiedad, seguro del hogar y posiblemente PMI o cuotas de la comunidad; pueden sumar cientos de dólares al pago mensual.',
      },
      {
        q: '¿Qué es la amortización?',
        a: 'La amortización es el proceso de devolver un préstamo en cuotas iguales. Cada pago se reparte entre intereses (el coste de pedir prestado) y capital (reducir lo que debes). El cuadro anterior muestra cómo evoluciona ese reparto a lo largo del tiempo.',
      },
      {
        q: '¿Qué tasa de interés es buena?',
        a: 'Depende del tipo de préstamo y de tu crédito. En los últimos años las hipotecas han oscilado del 3 % al 7 %+, los préstamos de coche del 4 % al 10 % y los personales del 6 % al 36 %. Cuanto mejor sea tu crédito, más baja será la tasa que consigas.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Cuota mensual de amortización constante. P = capital, r = tasa mensual (anual ÷ 12), n = número total de meses. El resultado M es la cuota mensual fija.',
    },
    ui: {
      inputs: 'Entradas',
      loanAmount: 'Importe del préstamo',
      annualRate: 'Tasa de interés anual',
      loanTerm: 'Plazo del préstamo',
      yearsSuffix: 'años',
      months: 'meses',
      monthlyPayment: 'Pago mensual',
      totalInterestPaid: 'Intereses totales',
      overMonths: 'Durante {n} meses',
      totalPaid: 'Total pagado',
      principalPlusInterest: 'Capital + intereses',
      amortTitle: 'Calendario de amortización ',
      chartTitleBalance: 'Saldo del préstamo en el tiempo',
      'preset.0': 'Préstamo personal ($10k al 9%)',
      'preset.1': 'Consolidar deuda ($25k al 7%)',
      'preset.2': 'Coche ($25k al 7.5%)',
      'preset.3': 'Hipoteca ($320k al 6.8%)',
      lineBalance: 'Saldo pendiente',
      optAll: 'todas ',
      first12Months: 'primeros 12 meses',
      showAll: 'Mostrar todas ',
      showFirst12: 'Mostrar primeros 12',
      errNegativeRate: 'La tasa de interés no puede ser negativa — introduce un 0% o más.',
      errTermTooLong: 'El plazo del préstamo es demasiado largo — 50 años (600 meses) como máximo.',
      summaryErrorPrefix: 'Calculadora de préstamos: ',
      thMonth: 'Mes',
      thPayment: 'Pago',
      thPrincipal: 'Capital',
      thInterest: 'Interés',
      thBalance: 'Saldo',
      emptyState: 'Introduce el importe, la tasa y el plazo del préstamo para ver tu pago mensual',
      noteText:
        '💰 Esta calculadora usa la fórmula estándar de amortización (cuotas mensuales iguales). Las tasas mostradas son estimaciones; tu tasa real depende de tu crédito, el prestamista y el tipo de préstamo.',
      summaryEmpty: 'Introduce el importe, la tasa y el plazo del préstamo para ver tu pago mensual.',
      summaryTitle: 'Resumen del cálculo del préstamo',
      sLoanAmount: 'Importe del préstamo:',
      sAnnualRate: 'Tasa anual:',
      sTerm: 'Plazo:',
      sResults: 'Resultados:',
      sMonthlyPayment: 'Pago mensual:',
      sTotalInterest: 'Intereses totales:',
      sTotalPaid: 'Total pagado:',
      csvField: 'Campo',
      csvValue: 'Valor',
      csvLoanAmount: 'Importe del préstamo',
      csvAnnualRate: 'Tasa anual',
      csvTermYears: 'Plazo (años)',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'einen Kreditrechner mit Tilgungsplan anzeigen',
      'die monatliche Rate für einen Privatkredit berechnen',
      'die Tilgung eines Autokredits durchrechnen',
      'Rückzahlpläne nach Kreditart vergleichen',
    ],
    faqs: [
      {
        q: 'Enthält dieser Rechner Steuern und Versicherungen?',
        a: 'Nein. Er rechnet nur Kredit und Zinsen. Bei einer echten Hypothek zahlst du zusätzlich Grundsteuer, Wohngebäudeversicherung und eventuell PMI oder Hausgeld — das kann die monatliche Rate um Hunderte erhöhen.',
      },
      {
        q: 'Was ist Tilgung?',
        a: 'Tilgung ist der Prozess, einen Kredit in gleichen Raten zurückzuzahlen. Jede Rate teilt sich in Zinsen (die Kosten des Kredits) und Tilgung (Reduktion der Schuld). Der Plan oben zeigt, wie sich diese Aufteilung über die Zeit entwickelt.',
      },
      {
        q: 'Was ist ein guter Zinssatz?',
        a: 'Das hängt von der Kreditart und deiner Bonität ab. In den letzten Jahren lagen Hypothekenzinsen zwischen 3 % und 7 %+, Autokredite zwischen 4 % und 10 %, Privatkredite zwischen 6 % und 36 %. Je besser deine Bonität, desto niedriger der Zins, den du bekommst.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Annuitätentilgung (gleiche Monatsrate). P = Kreditbetrag, r = monatlicher Zins (Jahreszins ÷ 12), n = Gesamtmonate. Das Ergebnis M ist die feste monatliche Rate.',
    },
    ui: {
      inputs: 'Eingaben',
      loanAmount: 'Kreditbetrag',
      annualRate: 'Jährlicher Zinssatz',
      loanTerm: 'Laufzeit',
      yearsSuffix: 'Jahre',
      months: 'Monate',
      monthlyPayment: 'Monatliche Rate',
      totalInterestPaid: 'Zinsen gesamt',
      overMonths: 'Über {n} Monate',
      totalPaid: 'Gesamtbetrag',
      principalPlusInterest: 'Kredit + Zinsen',
      amortTitle: 'Tilgungsplan ',
      chartTitleBalance: 'Kreditsaldo über die Zeit',
      'preset.0': 'Privatkredit (10 T$ / 9 %)',
      'preset.1': 'Umschuldung (25 T$ / 7 %)',
      'preset.2': 'Autokredit (25 T$ / 7.5 %)',
      'preset.3': 'Hypothek (320 T$ / 6.8 %)',
      lineBalance: 'Restschuld',
      optAll: 'alle ',
      first12Months: 'erste 12 Monate',
      showAll: 'Alle anzeigen ',
      showFirst12: 'Erste 12 anzeigen',
      errNegativeRate: 'Der Zinssatz darf nicht negativ sein — gib 0% oder mehr ein.',
      errTermTooLong: 'Die Laufzeit ist zu lang — maximal 50 Jahre (600 Monate).',
      summaryErrorPrefix: 'Kreditrechner: ',
      thMonth: 'Monat',
      thPayment: 'Rate',
      thPrincipal: 'Tilgung',
      thInterest: 'Zins',
      thBalance: 'Restschuld',
      emptyState: 'Kreditbetrag, Zinssatz und Laufzeit eingeben, um die monatliche Rate zu sehen',
      noteText:
        '💰 Dieser Rechner nutzt die Standard-Tilgungsformel (gleiche monatliche Raten). Gezeigte Zinsen sind Schätzwerte — dein tatsächlicher Zins hängt von Bonität, Kreditgeber und Kreditart ab.',
      summaryEmpty: 'Kreditbetrag, Zinssatz und Laufzeit eingeben, um deine monatliche Rate zu sehen.',
      summaryTitle: 'Zusammenfassung der Kreditberechnung',
      sLoanAmount: 'Kreditbetrag:',
      sAnnualRate: 'Jahreszins:',
      sTerm: 'Laufzeit:',
      sResults: 'Ergebnis:',
      sMonthlyPayment: 'Monatliche Rate:',
      sTotalInterest: 'Zinsen gesamt:',
      sTotalPaid: 'Gesamtbetrag:',
      csvField: 'Feld',
      csvValue: 'Wert',
      csvLoanAmount: 'Kreditbetrag',
      csvAnnualRate: 'Jahreszins',
      csvTermYears: 'Laufzeit (Jahre)',
    },
  },
}
