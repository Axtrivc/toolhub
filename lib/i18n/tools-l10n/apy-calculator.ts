/**
 * apy-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值)。覆盖:faqs + ui + useCases + formula。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'APY = (1 + r/n)^n − 1'

export const apyCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '把 APR 换算成 APY',
      '按复利频率算 APY',
      '了解 APY 和 APR 的区别',
      '计算储蓄账户的 APY',
    ],
    faqs: [
      {
        q: '为什么银行显示 APY,而贷款方显示 APR?',
        a: '营销策略。APY 让储蓄看起来更多,APR 让贷款看起来更便宜。一定要看细则,搞清楚标的是哪个指标。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '年化收益率。r = 名义年利率,n = 每年复利次数。APY 反映复利后的真实年回报。',
    },
    ui: {
      'in.principal': '本金',
      'in.apr': '年利率(APR)',
      'in.compound': '复利频率',
      'in.years': '年数',
      'opt.compound.1': '按年',
      'opt.compound.4': '按季度',
      'opt.compound.12': '按月',
      'opt.compound.365': '按日',
      'out.apy': 'APY(实际利率)',
      'out.final': '期末余额',
      'out.interest': '赚取的利息',
      note: '🏦 APY(年化收益率)考虑了复利。一年内复利超过一次时,APY > APR。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'convertir de APR a APY',
      'calcular el APY según la frecuencia de capitalización',
      'entender la diferencia entre APY y APR',
      'calcular el APY de una cuenta de ahorro',
    ],
    faqs: [
      {
        q: '¿Por qué los bancos muestran el APY y los prestamistas el APR?',
        a: 'Por marketing. El APY hace que el ahorro parezca mayor; el APR hace que los préstamos parezcan más baratos. Lee siempre la letra pequeña para saber qué métrica te están citando.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Rendimiento porcentual anual. r = tasa nominal anual, n = periodos de capitalización por año. El APY refleja el retorno anual real después de capitalizar.',
    },
    ui: {
      'in.principal': 'Capital',
      'in.apr': 'Tasa anual (APR)',
      'in.compound': 'Capitalización',
      'in.years': 'Años',
      'opt.compound.1': 'Anual',
      'opt.compound.4': 'Trimestral',
      'opt.compound.12': 'Mensual',
      'opt.compound.365': 'Diaria',
      'out.apy': 'APY (tasa efectiva)',
      'out.final': 'Saldo final',
      'out.interest': 'Interés generado',
      note: '🏦 El APY (rendimiento porcentual anual) tiene en cuenta la capitalización. APY > APR cuando se capitaliza más de una vez al año.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'APR in APY umrechnen',
      'den APY nach Zinsverrechnungsperiode berechnen',
      'den Unterschied zwischen APY und APR verstehen',
      'den APY eines Sparkontos berechnen',
    ],
    faqs: [
      {
        q: 'Warum zeigen Banken den APY, Kreditgeber aber den APR?',
        a: 'Marketing. Der APY lässt Ersparnisse größer wirken; der APR lässt Kredite günstiger wirken. Lies immer das Kleingedruckte, um zu wissen, welche Kennzahl genannt wird.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Effektive Jahresrendite. r = nominaler Jahressatz, n = Zinsperioden pro Jahr. Der APY spiegelt die tatsächliche Jahresrendite nach Verzinsung wider.',
    },
    ui: {
      'in.principal': 'Einlage',
      'in.apr': 'Jahressatz (APR)',
      'in.compound': 'Verzinsung',
      'in.years': 'Jahre',
      'opt.compound.1': 'Jährlich',
      'opt.compound.4': 'Quartalsweise',
      'opt.compound.12': 'Monatlich',
      'opt.compound.365': 'Täglich',
      'out.apy': 'APY (effektiver Satz)',
      'out.final': 'Endsaldo',
      'out.interest': 'Erzielter Zins',
      note: '🏦 Der APY (effektive Jahresrendite) berücksichtigt die Verzinsung. APY > APR, wenn öfter als einmal pro Jahr verrechnet wird.',
    },
  },
}
