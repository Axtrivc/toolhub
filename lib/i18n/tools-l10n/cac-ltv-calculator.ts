/**
 * cac-ltv-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'CAC = spend ÷ customers · LTV = ARPU × margin ÷ churn · health ≈ 3:1'

export const cacLtvCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    ui: {
      'in.marketingSpend': '市场推广与获客总支出',
      'in.newCustomers': '获得的新客户数量',
      'in.arpu': '客户平均月收入 (ARPU)',
      'in.grossMargin': '毛利率',
      'in.churn': '月度客户流失率',
      'out.ratio': 'LTV : CAC 比率',
      'out.verdict': '商业健康度诊断',
      'out.cac': '客户获取成本 (CAC)',
      'out.ltv': '客户终身价值 (LTV)',
      'outSub.ltv': '毛利调整后',
      'out.payback': 'CAC 回本周期',
      'out.lifetime': '客户平均留存周期',
      'preset.0': '健康 SaaS (3.2:1)',
      'preset.1': '高流失率预警 (高 Churn)',
      'preset.2': '电商业务模式',
      'errInvalid': '支出 ≥ 0，客户数 ≥ 1，毛利率 0–100%，流失率 > 0',
      'vDanger': '每个客户都在亏损——在扩张前必须优化留存或降低获客成本',
      'vBelow': '低于 3:1 黄金法则——建议提升留存复购或优化获客渠道',
      'vGolden': '健康的单体经济学模型——处于 3:1 ~ 5:1 黄金区间',
      'vHigh': '效率极高——你当前可能在市场扩张上的投资过少',
      'monthsWord': '个月',
      'chartTitle': 'LTV:CAC 健康仪表盘',
      'zone.0': '危险',
      'zone.1': '低于目标',
      'zone.2': '黄金区间',
      'zone.3': '投入不足',
      'chartCaption': '3:1 = 黄金法则',
      'note': '💡 行业基准：LTV:CAC 低于 1:1 意味着每获一客都在净亏损；~3:1 是 SaaS 与订阅业务的黄金法则；超过 5:1 通常说明获客过于保守，可加大投放力度。CAC 回本周期小于 12 个月可保持健康的现金流。',
    },
    useCases: [
      '算 CAC:月投放 2.4 万带来 120 个新客,CAC 200 元/客;客单月毛利 40 元,回本期 5 个月',
      '从流失率推 LTV:月流失 5% → 平均生命周期 20 个月,ARPU 50 元、毛利 80% 时 LTV 800 元',
      '体检比值:LTV 800 对 CAC 200 是 4:1,过 3:1 健康线;CAC 若涨到 300,比值掉到 2.7:1,投放要刹车',
      '判断该不该加大投放:>5:1 常说明投入不足,可试探性提竞价,边看 CAC 边看回本期变化',
    ],
    faqs: [
      {
        q: 'LTV:CAC 多少算健康?',
        a: '约 3:1——每个客户的毛利既要盖住管理成本,还要留出错余量。低于 1:1 等于每获一个客户都在亏;1-3:1 缓冲太薄;超过 5:1 很高效,但多半意味着增长投入不足。',
      },
      {
        q: '怎么从流失率算 LTV?',
        a: 'LTV = ARPU × 毛利率 ÷ 月流失率。月流失 5% 意味着平均生命周期 20 个月(1 ÷ 0.05);ARPU 50 美元、毛利 80% 得 800 美元。务必用毛利而非营收——只有留下的毛利才能偿还获客成本。',
      },
      {
        q: 'CAC 回本周期是什么?',
        a: '收回获客成本所需的毛利月数:CAC ÷ (ARPU × 毛利率)。250 美元 CAC 配每月 40 美元毛利要 6.3 个月。SaaS 投资人一般希望 12 个月内回本,增长才能自我供血而不是烧现金。',
      },
      {
        q: 'CAC 里该算哪些钱?',
        a: '至少包含:广告投放、渠道佣金、获客工具订阅,以及分摊的销售人力底薪。只算广告费会低估 CAC 20%-50%。取 3 个月滚动平均值——单月波动会误导判断。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '单位经济学核心:CAC = 总投放 ÷ 新客数;LTV = 月毛利(ARPU × 毛利率)× 平均生命周期(1 ÷ 月流失率)。LTV:CAC 对标 3:1 经验法则,回本期 = CAC ÷ 月毛利。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.marketingSpend': 'Gasto total de marketing y ventas',
      'in.newCustomers': 'Nuevos clientes captados',
      'in.arpu': 'Ingreso medio por usuario (ARPU/mes)',
      'in.grossMargin': 'Margen bruto',
      'in.churn': 'Tasa de bajas mensual (Churn)',
      'out.ratio': 'Ratio LTV : CAC',
      'out.verdict': 'Diagnóstico financiero',
      'out.cac': 'CAC — coste de captación de cliente',
      'out.ltv': 'LTV — valor de vida del cliente',
      'outSub.ltv': 'Ajustado por margen bruto',
      'out.payback': 'Periodo de recuperación de CAC',
      'out.lifetime': 'Vida media del cliente',
      'preset.0': 'SaaS saludable (3,2:1)',
      'preset.1': 'Problema de retención (alto churn)',
      'preset.2': 'Mix de comercio electrónico',
      'errInvalid': 'Gasto ≥ 0, clientes ≥ 1, margen 0–100%, churn > 0',
      'vDanger': 'Pierdes dinero con cada cliente: arregla la retención o el CAC',
      'vBelow': 'Por debajo de la regla 3:1: mejora la retención o reduce el CAC',
      'vGolden': 'Métricas unitarias saludables: en la zona óptima de 3:1 a 5:1',
      'vHigh': 'Muy eficiente: podrías estar invirtiendo poco en crecimiento',
      'monthsWord': 'meses',
      'chartTitle': 'Indicador de salud LTV:CAC',
      'zone.0': 'Peligro',
      'zone.1': 'Bajo el objetivo',
      'zone.2': 'Zona óptima',
      'zone.3': 'Subinversión',
      'chartCaption': '3:1 = regla de oro',
      'note': '💡 Referencias: LTV:CAC inferior a 1:1 genera pérdidas; ~3:1 es la regla de oro para SaaS; más de 5:1 sugiere margen para invertir más en captación.',
    },
    useCases: [
      'calcular el CAC: 24.000 € de inversión traen 120 clientes — 200 € cada uno; con 40 €/mes de margen, payback en 5 meses',
      'derivar el LTV del churn: 5 % mensual = 20 meses de vida media; ARPU 50 € y 80 % de margen dan 800 €',
      'chequear la ratio: LTV 800 frente a CAC 200 es 4:1, por encima de la línea 3:1; si el CAC sube a 300, cae a 2,7:1',
      'decidir si escalar: por encima de 5:1 suele sobrar presupuesto — sube la puja y vigila CAC y payback a la vez',
    ],
    faqs: [
      {
        q: '¿Qué ratio LTV:CAC es buena?',
        a: 'Cerca de 3:1 — suficiente beneficio bruto por cliente para cubrir overhead y errores sin perder eficiencia. Bajo 1:1 pierdes dinero con cada cliente; 1-3:1 deja poco margen de fallo; por encima de 5:1 es eficiente, pero suele indicar que inviertes poco en crecer.',
      },
      {
        q: '¿Cómo calculo el LTV a partir del churn?',
        a: 'LTV = ARPU × margen bruto ÷ churn mensual. Un churn del 5 % mensual implica una vida media de 20 meses (1 ÷ 0,05); un ARPU de 50 € con 80 % de margen da 800 €. Usa siempre margen bruto, no ingresos — solo el margen retenido puede devolver el coste de adquisición.',
      },
      {
        q: '¿Qué es el periodo de recuperación del CAC?',
        a: 'Los meses de margen bruto necesarios para recuperar el coste de adquisición: CAC ÷ (ARPU × margen). Un CAC de 250 € con 40 €/mes de margen tarda 6,3 meses. Los inversores SaaS suelen querer payback bajo 12 meses para que el crecimiento se autofinancie.',
      },
      {
        q: '¿Qué entra en el CAC?',
        a: 'Como mínimo: pauta publicitaria, comisiones de canal, herramientas y la parte proporcional del equipo comercial. Contar solo anuncios subestima el CAC entre un 20 % y un 50 %; usa medias móviles de 3 meses porque un solo mes engaña.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Núcleo de la economía unitaria: CAC = gasto total ÷ clientes ganados; LTV = margen mensual (ARPU × margen bruto) × vida media en meses (1 ÷ churn mensual). La ratio LTV:CAC se mide contra la regla 3:1, con payback = CAC ÷ margen mensual.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.marketingSpend': 'Gesamte Marketing- & Vertriebskosten',
      'in.newCustomers': 'Gewonnene Neukunden',
      'in.arpu': 'Monatlicher Umsatz pro Kunde (ARPU)',
      'in.grossMargin': 'Bruttomarge',
      'in.churn': 'Monatliche Abwanderungsrate (Churn)',
      'out.ratio': 'LTV : CAC-Verhältnis',
      'out.verdict': 'Rentabilitäts-Diagnose',
      'out.cac': 'CAC — Kundenakquisitionskosten',
      'out.ltv': 'LTV — Customer Lifetime Value',
      'outSub.ltv': 'Margenbereinigt',
      'out.payback': 'CAC-Amortisationszeit',
      'out.lifetime': 'Durchschnittliche Kundenlebensdauer',
      'preset.0': 'Gesundes SaaS (3,2:1)',
      'preset.1': 'Abwanderungsproblem (hoher Churn)',
      'preset.2': 'E-Commerce-Modell',
      'errInvalid': 'Ausgaben ≥ 0, Kunden ≥ 1, Marge 0–100%, Churn > 0',
      'vDanger': 'Verlust bei jedem Kunden — Churn oder CAC vor Skalierung senken',
      'vBelow': 'Unter der goldenen 3:1-Regel — Kundenbindung oder Akquise optimieren',
      'vGolden': 'Gesunde Unit Economics — in der goldenen 3:1–5:1-Zone',
      'vHigh': 'Sehr effizient — möglicherweise zu wenig Wachstumsinvestitionen',
      'monthsWord': 'Monate',
      'chartTitle': 'LTV:CAC-Gesundheitsanzeige',
      'zone.0': 'Gefahr',
      'zone.1': 'Unter dem Ziel',
      'zone.2': 'Goldzone',
      'zone.3': 'Unterinvestition',
      'chartCaption': '3:1 = Goldregel',
      'note': '💡 Benchmarks: LTV:CAC unter 1:1 bedeutet Verlust pro Kunde; ~3:1 ist die SaaS-Goldregel; über 5:1 deutet auf ungenutztes Wachstumspotenzial hin.',
    },
    useCases: [
      'CAC ermitteln: 24.000 € Ausgaben bringen 120 Kunden — 200 € je Kunde; bei 40 € Marge/Monat ist das Payback in 5 Monaten',
      'LTV aus der Churn Rate ableiten: 5 % monatlich = 20 Monate mittlere Lebensdauer; ARPU 50 €, Marge 80 % → 800 €',
      'Verhältnis prüfen: LTV 800 gegen CAC 200 = 4:1, über der 3:1-Marke; steigt der CAC auf 300, fällt es auf 2,7:1',
      'Skalierung entscheiden: über 5:1 deutet oft auf Unterinvestition — Gebote anheben und CAC wie Payback gleichzeitig beobachten',
    ],
    faqs: [
      {
        q: 'Welches LTV:CAC-Verhältnis ist gut?',
        a: 'Rund 3:1 — genug Bruttomarge je Kunde, um Overhead und Fehlkäufe zu decken und trotzdem effizient zu bleiben. Unter 1:1 verlierst du an jedem Kunden; 1-3:1 lässt kaum Puffer; über 5:1 ist effizient, signalisiert aber oft Unterinvestition ins Wachstum.',
      },
      {
        q: 'Wie berechne ich den LTV aus der Churn Rate?',
        a: 'LTV = ARPU × Bruttomarge ÷ monatliche Churn. 5 % monatlicher Churn bedeutet eine mittlere Lebensdauer von 20 Monaten (1 ÷ 0,05); ARPU 50 € bei 80 % Marge ergibt 800 €. Immer Bruttomarge statt Umsatz — nur behaltene Marge kann den CAC zurückzahlen.',
      },
      {
        q: 'Was ist die CAC-Payback-Zeit?',
        a: 'Die Monatsmarge, die nötig ist, um den CAC zurückzuholen: CAC ÷ (ARPU × Marge). Ein CAC von 250 € bei 40 € Marge/Monat dauert 6,3 Monate. SaaS-Investoren wollen meist Payback unter 12 Monaten, damit Wachstum sich selbst finanziert.',
      },
      {
        q: 'Monatlich oder jährlich rechnen?',
        a: 'Bleib bei monatlicher Churn: 5 % monatlich = rund 46 % jährlich (Resthaltung 0,95^12 ≈ 0,54). Wer die Jahreszahl in die Monatsformel steckt, schrumpft die Lebensdauer von 20 auf gut 2 Monate und den LTV von 800 € auf unter 90 €.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Kern der Unit Economics: CAC = Ausgaben ÷ gewonnene Kunden; LTV = Monatsmarge (ARPU × Bruttomarge) × mittlere Lebensdauer in Monaten (1 ÷ monatliche Churn). LTV:CAC wird an der 3:1-Regel gemessen, Payback = CAC ÷ Monatsmarge.',
    },
  },
}
