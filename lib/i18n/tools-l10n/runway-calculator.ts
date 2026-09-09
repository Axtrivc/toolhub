/**
 * runway-calculator 本地化 bundle —— zh / es / de
 */

import type { ToolL10n } from '../tool-l10n'

export const runwayCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.cash': '当前可用现金储备',
      'in.monthlyBurn': '每月总运营支出 (Gross Burn)',
      'in.monthlyRevenue': '当前每月总营收 (Revenue)',
      'in.revenueGrowth': '月度营收复合增长率',
      'out.runwayMonths': '资金跑道 (Net Runway)',
      'outSub.runwayMonths': '预计耗尽现金的月数',
      'out.zeroCashDate': '资金归零预估日期',
      'out.netBurn': '当前每月净烧钱 (Net Burn)',
      'outSub.netBurn': '总支出 − 营业收入',
      'out.profitStatus': '盈利平衡状态',
      'outSub.profitStatus': '现金流自给自足判断',
      'out.grossRunway': '原始跑道 (零收入兜底)',
      'outSub.grossRunway': '资金储备 ÷ 每月总支出',
      'preset.0': '种子轮 ($50万 / 月净烧$3万)',
      'preset.1': '独立开发 ($6万 / 高速增长)',
      'preset.2': '零收入阶段 ($20万 / 月烧$2万)',
      'errInvalid': '请输入有效的正数现金与支出，非负营收',
      'monthsWord': '个月',
      'profitNotice': '已实现现金流为正 (月结余 {amount})',
      'defaultAlive': 'Default Alive (第 {month} 个月实现盈利)',
      'defaultDead': 'Default Dead (资金将在实现盈利前耗尽)',
      'chartTitle': '未来 24 个月现金余额走势',
      'note': '💡 净烧钱率 = 每月总支出 − 每月营收。资金跑道是初创公司与独立开发者的生命倒计时。若营收月增速能在资金耗尽前追平支出，企业将进入 Default Alive（自给自足）状态，摆脱对外部融资的依赖。',
    },
    useCases: [
      '种子轮融资规划: 账上 50 万美元, 月支出 4.5 万, 月营收 1.5 万, 测算出 16.7 个月跑道, 需在第 10 个月前启动下轮融资',
      '独立开发者保命线: 储蓄 6 万美元, 月生活开销 4000 元, SaaS 月入 1500 元且月增 10%, 验证能否在资金耗尽前跑通自负盈亏',
      '扩招员工测算: 计划新招 2 名工程师(月增成本 2.5 万), 跑道从 18 个月缩短至 11 个月, 直观评估现金风险',
      'Default Alive 诊断: 结合当前营收增速模拟现金流曲线, 判断企业是自我造血还是必须依赖 VC 输血',
    ],
    faqs: [
      {
        q: '毛烧钱(Gross Burn)与净烧钱(Net Burn)有何区别?',
        a: 'Gross Burn 是公司每月支付的所有现金成本(工资、服务器、房租、工具等); Net Burn 则是 Gross Burn 减去当月实际收到的营业收入。若支出 3 万元、营收 1 万元, 则 Gross Burn 为 3 万, Net Burn 为 2 万。跑道以 Net Burn 为准。',
      },
      {
        q: '初创公司应该储备多少个月的资金跑道?',
        a: '行业公认的安全标准是 18 到 24 个月, 绝对底线为 12 个月。这能为你提供约 6 个月的业务验证期, 以及预留 6 个月时间去推进和完成下一轮股权融资。',
      },
      {
        q: '什么是 Default Alive 与 Default Dead?',
        a: 'Paul Graham 提出的概念: 如果按当前的营收增长率推算, 公司账面现金能支撑到实现自负盈亏(现金流平衡), 则为 Default Alive; 反之如果在盈利前就会烧完钱, 则为 Default Dead。',
      },
      {
        q: '什么时候应该启动下一轮融资?',
        a: '千万不要等到只剩 3-5 个月跑道才去找投资人。从接触机构、意向书到资金到账通常需要 4-6 个月。建议在账面还剩 10-14 个月跑道时正式启动融资。',
      },
    ],
    formula: {
      formula: 'Net Burn = Gross Expenses − Monthly Revenue\nGross Runway = Cash ÷ Gross Expenses\nNet Runway = Cash ÷ Net Burn\nCash(m) = Cash(m−1) − (Gross Expenses − Revenue(0) × (1 + g)^m)',
      explain: '净烧钱率衡量企业每月净消耗的现金。若月营收保持复合增长, 每月净烧钱将逐步缩减, 从而将实际资金跑道显著延长, 直至实现现金流转正。',
    },
  },
  es: {
    ui: {
      'in.cash': 'Saldo de caja actual disponible',
      'in.monthlyBurn': 'Gastos brutos mensuales (Gross Burn)',
      'in.monthlyRevenue': 'Ingresos mensuales actuales (Revenue)',
      'in.revenueGrowth': 'Crecimiento mensual de ingresos',
      'out.runwayMonths': 'Runway neto (meses)',
      'outSub.runwayMonths': 'Meses hasta agotar la caja',
      'out.zeroCashDate': 'Fecha estimada de fin de caja',
      'out.netBurn': 'Quema neta mensual (Net Burn)',
      'outSub.netBurn': 'Gastos brutos − ingresos',
      'out.profitStatus': 'Estado de rentabilidad',
      'outSub.profitStatus': 'Punto de equilibrio de caja',
      'out.grossRunway': 'Runway bruto (sin ingresos)',
      'outSub.grossRunway': 'Caja ÷ gastos brutos',
      'preset.0': 'Fase Semilla ($500k / quema $30k)',
      'preset.1': 'Bootstrapped ($60k / alto crecimiento)',
      'preset.2': 'Pre-ingresos ($200k / quema $20k)',
      'errInvalid': 'Introduce caja y gastos positivos, ingresos no negativos',
      'monthsWord': 'meses',
      'profitNotice': 'Flujo de caja positivo (superávit {amount}/mes)',
      'defaultAlive': 'Default Alive (rentable en mes {month})',
      'defaultDead': 'Default Dead (caja se agota antes de ser rentable)',
      'chartTitle': 'Proyección de saldo de caja a 24 meses',
      'note': '💡 Quema neta = Gastos brutos − Ingresos. El runway es la cuenta atrás de tu startup. Si el crecimiento de ingresos supera la quema antes de que se agote la caja, alcanzas la rentabilidad orgánica sin depender de rondas externas.',
    },
    useCases: [
      'Planificar ronda semilla: $500k en banco, $45k de gasto y $15k de ingresos calculan 16,7 meses de margen para levantar la siguiente ronda',
      'Validar proyectos bootstrapped: $60k de ahorros personales con $4k de gastos y 10% de crecimiento mensual de MRR',
      'Simular nuevas contrataciones: sumar 2 desarrolladores ($25k/mes) reduce el runway de 18 a 11 meses',
      'Evaluar Default Alive vs Dead: comprueba si la tasa de crecimiento actual te lleva a la rentabilidad antes del colapso',
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre quema bruta y quema neta?',
        a: 'La quema bruta (Gross Burn) es la suma total de gastos que salen de tu cuenta cada mes. La quema neta (Net Burn) resta los ingresos reales. Si gastas 30.000 € y facturas 10.000 €, tu quema neta es de 20.000 €.',
      },
      {
        q: '¿Cuántos meses de runway debe tener una startup?',
        a: 'El estándar recomendado en la industria es de 18 a 24 meses. Un mínimo estricto es de 12 meses, lo que da margen para experimentar durante 6 meses y negociar una nueva ronda durante otros 6 meses.',
      },
      {
        q: '¿Qué significa Default Alive?',
        a: 'Una startup es Default Alive si, con su ritmo actual de crecimiento de ingresos y gastos, alcanzará el flujo de caja positivo antes de quedarse sin dinero.',
      },
      {
        q: '¿Cuándo se debe empezar a levantar financiación?',
        a: 'Nunca esperes a tener menos de 6 meses de caja. El momento idóneo para iniciar el contacto con inversores es entre los 10 y 14 meses de runway restantes.',
      },
    ],
    formula: {
      formula: 'Net Burn = Gastos Brutos − Ingresos Mensuales\nRunway Neto = Caja ÷ Net Burn',
      explain: 'La quema neta disminuye cada mes a medida que los ingresos crecen a un ritmo compuesto, extendiendo el runway real hasta el equilibrio financiero.',
    },
  },
  de: {
    ui: {
      'in.cash': 'Aktuelles Barvermögen / Cash',
      'in.monthlyBurn': 'Monatliche Gesamtausgaben (Gross Burn)',
      'in.monthlyRevenue': 'Aktueller Monatsumsatz (Revenue)',
      'in.revenueGrowth': 'Monatliches Umsatzwachstum',
      'out.runwayMonths': 'Netto-Runway (Monate)',
      'outSub.runwayMonths': 'Monate bis Cash-Erschöpfung',
      'out.zeroCashDate': 'Datum der Cash-Erschöpfung',
      'out.netBurn': 'Monatliche Netto-Burn-Rate',
      'outSub.netBurn': 'Ausgaben − Einnahmen',
      'out.profitStatus': 'Rentabilitätsstatus',
      'outSub.profitStatus': 'Cashflow-Breakeven-Analyse',
      'out.grossRunway': 'Brutto-Runway (ohne Umsatz)',
      'outSub.grossRunway': 'Cash ÷ monatliche Ausgaben',
      'preset.0': 'Seed-Phase ($500k / $30k Burn)',
      'preset.1': 'Bootstrapped ($60k / schnelles Wachstum)',
      'preset.2': 'Pre-Revenue ($200k / $20k Burn)',
      'errInvalid': 'Bitte positive Cash- und Ausgabenwerte sowie nicht-negativen Umsatz eingeben',
      'monthsWord': 'Monate',
      'profitNotice': 'Bereits profitabel (+{amount}/Monat Überschuss)',
      'defaultAlive': 'Default Alive (profitabel ab Monat {month})',
      'defaultDead': 'Default Dead (Geld reicht nicht bis zur Profitabilität)',
      'chartTitle': 'Cash-Entwicklung über die nächsten 24 Monate',
      'note': '💡 Net Burn = Monatliche Ausgaben − Umsatz. Die Runway ist der Countdown für Startups und Solo-Gründer. Überholt das Umsatzwachstum die Kosten vor Cash-Ende, wird das Startup organisch profitabel.',
    },
    useCases: [
      'Seed-Finanzierung planen: 500.000 $ Cash bei 30.000 $ Net Burn ergeben 16,7 Monate Zeit bis zum nächsten Meilenstein',
      'Bootstrapped-Gründer: 60.000 $ Erspartes bei 4.000 $ Lebenshaltung und 10% MRR-Wachstum auf Profitabilität testen',
      'Einstellungsplanung: 2 neue Entwickler (+25.000 $/Mo) verkürzen die Runway von 18 auf 11 Monate',
      'Default Alive Diagnose: Mathematisch prüfen, ob das organische Wachstum ausreicht oder weiteres VC-Geld nötig ist',
    ],
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen Gross Burn und Net Burn?',
        a: 'Gross Burn umfasst alle monatlichen Ausgaben (Gehälter, Cloud, Miete). Net Burn zieht die monatlichen Umsätze ab. Bei 30.000 € Ausgaben und 10.000 € Umsatz beträgt die Netto-Burn-Rate 20.000 €.',
      },
      {
        q: 'Wie viele Monate Runway sollte ein Startup haben?',
        a: 'Branchenüblich sind 18 bis 24 Monate. 12 Monate gelten als absolutes Minimum, um 6 Monate Aufbauzeit und 6 Monate Verhandlungszeitraum für die nächste Runde zu haben.',
      },
      {
        q: 'Was bedeutet Default Alive?',
        a: 'Ein Startup ist Default Alive, wenn das vorhandene Kapital bei aktuellem Umsatzwachstum ausreicht, um die Gewinnschwelle vor dem Auslaufen der Geldmittel zu erreichen.',
      },
      {
        q: 'Wann sollte man die nächste Finanzierungsrunde starten?',
        a: 'Niemals mit weniger als 6 Monaten Runway verhandeln. Der ideale Startzeitpunkt liegt bei 10 bis 14 Monaten verbleibender Runway.',
      },
    ],
    formula: {
      formula: 'Net Burn = Gesamtausgaben − Monatsumsatz\nNetto-Runway = Cash ÷ Net Burn',
      explain: 'Mit steigendem Monatsumsatz sinkt die Netto-Burn-Rate jeden Monat und verlängert die tatsächliche Lebensdauer des Startups spürbar.',
    },
  },
}
