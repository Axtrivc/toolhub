/**
 * roi-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值)。覆盖:faqs + ui + useCases。
 * 该工具在 lib/tool-formulas.ts 无 formula 条目,FormulaSection 不渲染。
 */

import type { ToolL10n } from '../tool-l10n'

export const roiCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '计算带年化回报的 ROI',
      '按时间段算 ROI',
      '计算年化 ROI / CAGR',
      '按年数算投资回报',
    ],
    faqs: [
      {
        q: '比较投资应该看总 ROI 还是年化 ROI?',
        a: '永远看年化。总 ROI 不考虑时间就没意义。100% 的回报听起来很棒——但如果是 20 年赚的,每年其实只有 3.5%。',
      },
    ],
    ui: {
      'in.initial': '初始投资',
      'in.final': '期末价值',
      'in.years': '持有年数',
      'out.roi': '总 ROI',
      'out.annualized': '年化回报',
      'out.profit': '利润',
      note: '📈 ROI = 总回报。年化 = 年均(CAGR)。适用于股票和房产。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'calcular el ROI con retorno anualizado',
      'calcular el ROI por periodo',
      'calcular el ROI anualizado / CAGR',
      'calcular el retorno de inversión por años',
    ],
    faqs: [
      {
        q: '¿Comparo inversiones por ROI total o anualizado?',
        a: 'Siempre anualizado. El ROI total carece de sentido sin el horizonte temporal. Una ganancia del 100 % suena genial — pero en 20 años es solo un 3,5 % anual.',
      },
    ],
    ui: {
      'in.initial': 'Inversión inicial',
      'in.final': 'Valor final',
      'in.years': 'Años',
      'out.roi': 'ROI total',
      'out.annualized': 'Retorno anualizado',
      'out.profit': 'Beneficio',
      note: '📈 ROI = retorno total. Anualizado = promedio anual (CAGR). Para bolsa y bienes raíces.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'den ROI mit annualisierter Rendite berechnen',
      'den ROI nach Zeitraum berechnen',
      'den annualisierten ROI / CAGR berechnen',
      'die Investitionsrendite nach Jahren berechnen',
    ],
    faqs: [
      {
        q: 'Soll ich Investitionen nach Gesamt-ROI oder annualisiertem ROI vergleichen?',
        a: 'Immer annualisiert. Der Gesamt-ROI ist ohne Zeitraum sinnlos. Ein 100 %-Gewinn klingt toll — aber über 20 Jahre sind das nur 3,5 % pro Jahr.',
      },
    ],
    ui: {
      'in.initial': 'Erstinvestition',
      'in.final': 'Endwert',
      'in.years': 'Jahre',
      'out.roi': 'Gesamt-ROI',
      'out.annualized': 'Annualisierte Rendite',
      'out.profit': 'Gewinn',
      note: '📈 ROI = Gesamtrendite. Annualisiert = Jahresdurchschnitt (CAGR). Für Aktien und Immobilien.',
    },
  },
}
