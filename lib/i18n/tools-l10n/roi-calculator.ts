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
    formula: {
      formula: 'ROI = (Gain − Cost) / Cost × 100%',
      explain: '投资回报率。收益 = 终值 − 成本(或卖出价 − 买入价),以原始成本的百分比表示。',
    },
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
      {
        q: 'ROI 和年化回报(CAGR)是一回事吗?',
        a: '不是。总 ROI 衡量整个持有期的累计涨幅,年化回报把它折算成每年复合增速:10 万元 5 年后变成 15 万,总 ROI 50%,年化约 8.4%。',
      },
      {
        q: '亏了钱也能算吗?',
        a: '能,公式直接接受负值:10 万元 4 年后剩 8 万,ROI 为 −20%,年化约 −5.4%。持有越久,亏损在年化数字上被放得越大,这是复利的另一面。',
      },
      {
        q: '定投基金也能用这个算吗?',
        a: '会失真。定投是多个不同时点的现金流,简单 ROI 会低估真实收益,应改用 XIRR 口径;本工具适合一次性买入、一次卖出的场景,比如持有 3 年的沪深 300 指数基金对比银行理财。',
      },
    ],
    ui: {
      'chartTitle': '初始 vs 最终价值',
      'cmp.0': '最终价值',
      'cmp.1': '亏损',
      'cmpseg.0': '初始投资',
      'cmpseg.1': '利润',
      'cmpseg.2': '最终价值',
      errInitial: '初始投资必须大于 0',
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
    formula: {
      formula: 'ROI = (Gain − Cost) / Cost × 100%',
      explain: 'Rentabilidad de la inversión. Ganancia = valor final − coste (o precio de venta − precio de compra). Se expresa como porcentaje del coste original.',
    },
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
      {
        q: '¿El ROI anualizado es lo mismo que el CAGR?',
        a: 'Sí, aquí coinciden: el ROI total mide la subida acumulada del periodo y el retorno anualizado la convierte en ritmo compuesto anual. 10 000 € que pasan a 15 000 € en 5 años: 50 % total, unos 8,4 % anual.',
      },
      {
        q: '¿Funciona si hay pérdidas?',
        a: 'Sí, la fórmula acepta negativos: 10 000 € que acaban en 8 000 € tras 4 años son un ROI de −20 % y un −5,4 % anualizado. Cuanto más largo el periodo, más amplifica la caída en la cifra anual.',
      },
      {
        q: '¿Sirve para un plan de aportaciones periódicas?',
        a: 'No es su escenario: con aportaciones mensuales (fondos, planes de pensiones) el ROI simple se distorsiona porque el dinero entra en fechas distintas; lo correcto es la TIR modificada (XIRR). Esta herramienta es para una entrada y una salida.',
      },
    ],
    ui: {
      'chartTitle': 'Inicial vs final',
      'cmp.0': 'Valor final',
      'cmp.1': 'Pérdida',
      'cmpseg.0': 'Inversión inicial',
      'cmpseg.1': 'Beneficio',
      'cmpseg.2': 'Valor final',
      errInitial: 'La inversión inicial debe ser mayor que 0',
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
    formula: {
      formula: 'ROI = (Gain − Cost) / Cost × 100%',
      explain: 'Rendite der Investition. Gewinn = Endwert − Kosten (oder Verkaufspreis − Kaufpreis), ausgedrückt als Prozentsatz der ursprünglichen Kosten.',
    },
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
      {
        q: 'Ist der annualisierte ROI dasselbe wie der CAGR?',
        a: 'Ja, hier schon: Der Gesamt-ROI misst die kumulierte Steigerung über den Zeitraum, die annualisierte Rendite übersetzt sie in eine jährliche Wachstumsrate. 10 000 €, die in 5 Jahren zu 15 000 € werden: 50 % gesamt, rund 8,4 % pro Jahr.',
      },
      {
        q: 'Funktioniert das auch bei Verlust?',
        a: 'Ja, die Formel akzeptiert negative Werte: Aus 10 000 € werden nach 4 Jahren 8 000 € — ROI −20 %, annualisiert rund −5,4 %. Je länger der Zeitraum, desto stärker zehrt der Verlust am Jahreswert.',
      },
      {
        q: 'Eignet sich das für einen ETF-Sparplan?',
        a: 'Nicht wirklich: Bei monatlichen Raten (Sparplan, Riester) verzerrt der einfache ROI das Ergebnis, weil die Einzahlungen zu unterschiedlichen Zeitpunkten kommen — dafür braucht es XIRR/IRR. Dieser Rechner gilt für einen Einmalbetrag mit einem Ausstieg.',
      },
    ],
    ui: {
      'chartTitle': 'Anfangs- vs. Endwert',
      'cmp.0': 'Endwert',
      'cmp.1': 'Verlust',
      'cmpseg.0': 'Anfangsinvestition',
      'cmpseg.1': 'Gewinn',
      'cmpseg.2': 'Endwert',
      errInitial: 'Die Erstinvestition muss größer als 0 sein',
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
