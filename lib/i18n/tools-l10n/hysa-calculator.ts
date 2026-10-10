/**
 * hysa-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'FV = P × (1 + r/n)^(n·t) + PMT × [((1 + r/n)^(n·t) − 1) / (r/n)]'

export const hysaCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    ui: {
      'in.initial': '初始存入金额',
      'in.monthly': '每月定投金额',
      'in.apy': '年化收益率 (APY)',
      'in.years': '投资/储蓄年限',
      'in.compound': '复利方式',
      'opt.compound.daily': '按日复利 (常见 HYSA 规则)',
      'opt.compound.monthly': '按月复利',
      'out.finalBalance': '期末账户总额',
      'out.totalInterest': '获得总利息收益',
      'outSub.totalInterest': '纯高息账户利息',
      'out.totalDeposited': '累计本金存入',
      'outSub.totalDeposited': '初始本金 + 每月定投',
      'out.avgMonthlyInterest': '月均利息收入',
      'preset.0': '应急备用金 (4.5% APY / 2 年)',
      'preset.1': '积极攒钱 (5.0% APY / 5 年)',
      'preset.2': '闲钱理财 (3.5% APY / 1 年)',
      'errInvalid': '请输入有效的非负数',
      'errYears': '存续年限必须大于 0',
      'inSuffix.initial': '$',
      'inSuffix.monthly': '$',
      'inSuffix.apy': '%',
      'inSuffix.years': '年',
      'chartTitle': '余额构成:存入本金 vs 利息',
      'chartCenter': '期末',
      'chartTitleGrowth': '账户增长曲线',
      'slice.totalDeposited': '存入本金',
      'slice.totalInterest': '利息收益',
      'line.balance': '账户余额',
      'line.deposited': '累计存入',
      'band.deposited-balance': '复利利息',
      'note': '🏦 大多数高收益储蓄账户（HYSA / 境外数字银行）按日计算复利、按月派息入账。利率为浮动利率——本测算假设 APY 在周期内保持恒定，仅供财务规划参考，不作为收益保证。',
    },
    useCases: [
      '对比 4.25% 与 3.8% APY 的两种高息储蓄:10 万本金加每月 3000 定存,两年利息差在千元级',
      '算应急基金的机会成本:6 个月生活费约 4.5 万,按 4% APY 存三年多出约 5600 元利息',
      '把税算进去再决策:20% 税档下 4.5% APY 到手约 3.6%,判断值不值得把钱搬去利率更高的账户',
      '银行降息后重测:APY 从 5% 降到 4%,5 万存款五年少拿约 3000 元利息,再决定要不要换银行',
    ],
    faqs: [
      {
        q: '高息储蓄(HYSA)的利息是怎么算的?',
        a: '多数高息储蓄按日复利、按月入账:余额每年按 (1 + APY/365)^365 增长。本工具把它折算成有效月利率,并把每月定存一并计入来推算余额。',
      },
      {
        q: '储蓄利息要交税吗?',
        a: '要。在美国利息按普通收入计税(1099-INT 表),钱留在账户里也要报——4.5% APY 在 22% 税档下税后约 3.5%。中国大陆自 2008 年起对储蓄存款利息暂免个税,其他产品规则各异,按当地政策算。',
      },
      {
        q: '银行调整 APY 怎么办?',
        a: 'HYSA 利率是浮动的,跟着央行走。本预测假设利率恒定,长期只当估算看;银行每次改价就重跑一遍——用这个工具重测只要 10 秒。',
      },
      {
        q: '它和货币基金可以直接比吗?',
        a: '收益率口径可以直接比:七日年化与 APY 都含复利。保障不同——美国 HYSA 受 FDIC 存款保险(每行每户 25 万美元),货币基金不是存款,理论上可能亏损;把这点折进对比再决定。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '高息储蓄增长公式。P = 初始存款,PMT = 每月定存,r = APY(小数),n = 每年计息次数(按日复利取 365),t = 年数。第一项对本金复利,第二项对定存流复利。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.initial': 'Depósito inicial',
      'in.monthly': 'Aportación mensual',
      'in.apy': 'APY (rendimiento anual)',
      'in.years': 'Plazo en años',
      'in.compound': 'Capitalización',
      'opt.compound.daily': 'Diaria (habitual en cuentas remuneradas)',
      'opt.compound.monthly': 'Mensual',
      'out.finalBalance': 'Saldo final acumulado',
      'out.totalInterest': 'Intereses ganados',
      'outSub.totalInterest': 'Rendimiento puro de la cuenta',
      'out.totalDeposited': 'Total aportado',
      'outSub.totalDeposited': 'Depósito inicial + aportaciones',
      'out.avgMonthlyInterest': 'Interés medio mensual',
      'preset.0': 'Fondo de emergencia (4,5% APY)',
      'preset.1': 'Ahorrador agresivo (5% APY)',
      'preset.2': 'Liquidez a corto plazo (3,5% APY)',
      'errInvalid': 'Introduce importes positivos válidos',
      'errYears': 'Los años deben ser mayores que 0',
      'inSuffix.initial': '$',
      'inSuffix.monthly': '$',
      'inSuffix.apy': '%',
      'inSuffix.years': 'años',
      'chartTitle': 'Saldo: aportaciones vs intereses',
      'chartCenter': 'Final',
      'chartTitleGrowth': 'Crecimiento de la cuenta',
      'slice.totalDeposited': 'Aportado (principal)',
      'slice.totalInterest': 'Intereses ganados',
      'line.balance': 'Saldo de la cuenta',
      'line.deposited': 'Total aportado',
      'band.deposited-balance': 'Interés compuesto',
      'note': '🏦 La mayoría de cuentas de ahorro de alto rendimiento capitalizan intereses a diario y los abonan mensualmente. Las tasas son variables.',
    },
    useCases: [
      'comparar dos cuentas al 4,25 % y 3,8 % de TAE: 10.000 € más 300 € al mes, unos 110 € extra de intereses en dos años',
      'ver qué rinde el colchón de emergencia: 6 meses de gastos (5.000 €) al 4 % durante tres años generan unos 620 €',
      'meter el impuesto en la ecuación: con el 19 %-28 % del IRPF, una TAE del 4,5 % queda entre el 3,2 % y el 3,6 % neto',
      'recalcular cuando el banco baja el tipo: del 5 % al 4 %, 20.000 € a cinco años dejan de ganar unos 1.200 €',
    ],
    faqs: [
      {
        q: '¿Cómo se calcula el interés de una cuenta remunerada?',
        a: 'La mayoría capitaliza a diario y abona cada mes: el saldo crece (1 + TAE/365)^365 al año. La calculadora convierte eso en un tipo mensual efectivo y proyecta el saldo incluyendo las aportaciones.',
      },
      {
        q: '¿Se tributa por los intereses?',
        a: 'Sí. En España tributan como rendimientos del capital mobiliario en el IRPF, del 19 % al 28 % por tramos, y la entidad retiene a cuenta; una TAE del 4,5 % deja en torno al 3,6 % neto en el tramo del 19 %.',
      },
      {
        q: '¿Y si el banco cambia la rentabilidad?',
        a: 'Las cuentas remuneradas tienen tipo variable y siguen los tipos del BCE. La proyección asume un tipo constante: lee los horizontes largos como estimación y recalcula cada vez que tu banco revise el tipo — con la herramienta son diez segundos.',
      },
      {
        q: '¿La TAE ya incluye la capitalización?',
        a: 'Sí: la TAE (Tasa Anual Equivalente) incorpora la capitalización de los intereses, igual que el APY estadounidense. No la confundas con el tipo nominal (TIN): un 4,40 % nominal con capitalización diaria equivale a una TAE cercana al 4,50 %.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Crecimiento de una cuenta remunerada. P = depósito inicial, PMT = aportación mensual, r = TAE en decimal, n = capitalizaciones por año (365 si es diaria), t = años. El primer término compone el principal; el segundo, la serie de aportaciones.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.initial': 'Ersteinzahlung',
      'in.monthly': 'Monatliche Sparrate',
      'in.apy': 'APY (Jahresrendite)',
      'in.years': 'Anlagehorizont (Jahre)',
      'in.compound': 'Zinseszinseffekt',
      'opt.compound.daily': 'Täglich (typisch für Tagesgeld)',
      'opt.compound.monthly': 'Monatlich',
      'out.finalBalance': 'Endsaldo',
      'out.totalInterest': 'Erzielte Zinsen',
      'outSub.totalInterest': 'Reine Zinserträge',
      'out.totalDeposited': 'Eingezahltes Kapital',
      'outSub.totalDeposited': 'Ersteinzahlung + monatliche Raten',
      'out.avgMonthlyInterest': 'Durchschnittlicher Zins / Monat',
      'preset.0': 'Notgroschen (4,5% APY)',
      'preset.1': 'Offensives Sparen (5% APY)',
      'preset.2': 'Parkgeld (3,5% APY)',
      'errInvalid': 'Gültige positive Zahlen eingeben',
      'errYears': 'Jahre müssen größer als 0 sein',
      'inSuffix.initial': '$',
      'inSuffix.monthly': '$',
      'inSuffix.apy': '%',
      'inSuffix.years': 'Jahre',
      'chartTitle': 'Saldo: Einzahlungen vs. Zinsen',
      'chartCenter': 'Ende',
      'chartTitleGrowth': 'Kontoentwicklung',
      'slice.totalDeposited': 'Eingezahlt (Kapital)',
      'slice.totalInterest': 'Erzielte Zinsen',
      'line.balance': 'Kontostand',
      'line.deposited': 'Eingezahlt gesamt',
      'band.deposited-balance': 'Zinseszins',
      'note': '🏦 Die meisten Tagesgeldkonten verzinsen das Guthaben täglich und schreiben die Zinsen monatlich gut. Die Zinssätze sind variabel.',
    },
    useCases: [
      'zwei Tagesgeldkonten mit 4,25 % und 3,8 % APY vergleichen: 10.000 € plus 300 € monatlich, rund 110 € Zinsunterschied in zwei Jahren',
      'den Notgroschen verzinst planen: sechs Monatsausgaben (5.000 €) zu 4 % über drei Jahre bringen rund 620 € Zinsen',
      'die Steuer einpreisen: bei 26,375 % Abgeltungsteuer bringt eine APY von 4,5 % real rund 3,3 %',
      'nach Zinssenkung neu rechnen: sinkt der Satz von 5 % auf 4 %, verlieren 20.000 € in fünf Jahren rund 1.200 € Zinsen',
    ],
    faqs: [
      {
        q: 'Wie wird der Tagesgeld-Zins berechnet?',
        a: 'Die meisten Konten verzinsen täglich und schreiben monatlich gut: Das Guthaben wächst jedes Jahr um den Faktor (1 + APY/365)^365. Der Rechner übersetzt das in einen effektiven Monatssatz und projiziert den Saldo inklusive Einzahlungen.',
      },
      {
        q: 'Werden die Zinsen besteuert?',
        a: 'Ja — Zinsen unterliegen der Abgeltungsteuer: 25 % plus Solidaritätszuschlag = 26,375 %, zzgl. Kirchensteuer. Mit Freistellungsauftrag bleibt der Sparerpauschbetrag (1.000 €, Ehepaare 2.000 €) steuerfrei; ohne ihn wird ab dem ersten Euro besteuert.',
      },
      {
        q: 'Was, wenn die Bank den Zinssatz ändert?',
        a: 'Tagesgeldzinsen sind variabel und folgen der EZB. Die Projektion unterstellt einen konstanten Satz — lange Horizonte als Schätzung lesen und nach jeder Zinsänderung neu durchrechnen; mit dem Tool sind das zehn Sekunden.',
      },
      {
        q: 'Tagesgeld oder Festgeld?',
        a: 'Tagesgeld ist das deutsche Pendant zur HYSA — täglich verfügbar, variabel verzinst; Festgeld sperrt die Summe gegen einen festen Satz. Steigende Zinsen sprechen für Tagesgeld; wer den Spitzenzins über Jahre sichern will, staffelt mehrere Festgeld-Laufzeiten.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Wachstumsformel für Tagesgeld. P = Startkapital, PMT = Monatseinzahlung, r = APY als Dezimalzahl, n = Zinsperioden pro Jahr (365 bei täglicher Verzinsung), t = Jahre. Der erste Term verzinst das Startkapital, der zweite die Einzahlungsreihe.',
    },
  },
}
