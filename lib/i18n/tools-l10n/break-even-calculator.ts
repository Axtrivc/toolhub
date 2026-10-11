/**
 * break-even-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'Break-even units = Fixed Costs ÷ (Price − Variable Cost)'

export const breakEvenCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    ui: {
      'in.fixed': '月固定成本',
      'in.price': '单价',
      'in.variable': '单位变动成本',
      'out.beUnits': '保本销量',
      'outSub.beUnits': '覆盖固定成本所需销量',
      'out.beRevenue': '保本销售额',
      'out.contribution': '单位边际贡献',
      'out.cmRatio': '边际贡献率',
      'preset.0': '手工艺品',
      'preset.1': 'SaaS 初创',
      'preset.2': '咖啡馆',
      'errInvalid': '请输入有效的非负成本',
      'errMargin': '单价必须大于单位变动成本',
      'inSuffix.fixed': '$',
      'inSuffix.price': '$',
      'inSuffix.variable': '$',
      'cmp.0': '单价',
      'cmpseg.0': '变动成本',
      'cmpseg.1': '边际贡献',
      'chartTitle': '每笔销售的成本与毛利构成',
      'note': '📊 保本销量 = 固定成本 ÷ (单价 − 单位变动成本)。盈亏平衡点之前的每一笔销售都在弥补固定成本；之后的每一笔销售都会产生纯利润。边际贡献率表示每 1 美元收入中用于覆盖固定成本的比例。',
    },
    useCases: [
      '咖啡店定价:月固定成本 3.5 万(房租+人工),拿铁 28 元/杯、变动成本 9 元,月销约 1842 杯保本',
      '评估降价:单价 45 降到 39,边际贡献 27→21,保本量从 315 单涨到 405 单,先看销量补不补得回来',
      '拆半变动成本:底薪 6000 元归固定,每单提成加包装 4.5 元归变动,保本点立刻变实',
      '算保本营收:固定 8500 美元、价 45、变动 18,约 315 单 ≈ 14175 美元营收,当月度 KPI 底线',
    ],
    faqs: [
      {
        q: '保本公式是什么?',
        a: '保本销量 = 固定成本 ÷ (单价 − 单位变动成本)。每件先把边际贡献攒起来填固定成本,填满那一刻就是保本点。',
      },
      {
        q: '边际贡献率是什么?',
        a: '边际贡献率 = (单价 − 变动成本) ÷ 单价,即每 1 元收入扣除变动成本后剩下的比例。60% 意味着每 1 元销售额有 0.6 元可覆盖固定成本,之后就开始变成利润。',
      },
      {
        q: '半变动成本怎么处理?',
        a: '拆成两部分:固定月基数(如底薪、房租)放进固定成本,每件的部分(如计件工资、包装)放进变动成本。公式只认这两个桶。',
      },
      {
        q: '结果要考虑税吗?',
        a: '保本点是不含税口径,上面算的「利润」还没扣增值税和所得税。含税价先除以 (1+征收率) 还原成不含税价再算;算完建议再加 10%-20% 的安全边际,给淡季和坏账留缓冲。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '保本销量 = 固定成本 ÷ (单价 − 单位变动成本)。每件的边际贡献逐步填平固定成本,填满即保本;乘以单价就是保本销售额。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.fixed': 'Costes fijos (mensuales)',
      'in.price': 'Precio por unidad',
      'in.variable': 'Coste variable por unidad',
      'out.beUnits': 'Unidades de equilibrio',
      'outSub.beUnits': 'Unidades para cubrir costes fijos',
      'out.beRevenue': 'Ingresos de equilibrio',
      'out.contribution': 'Margen de contribución / unidad',
      'out.cmRatio': 'Ratio de margen de contribución',
      'preset.0': 'Producto artesanal',
      'preset.1': 'Startup SaaS',
      'preset.2': 'Cafetería',
      'errInvalid': 'Introduce costes no negativos válidos',
      'errMargin': 'El precio debe ser superior al coste variable por unidad',
      'inSuffix.fixed': '$',
      'inSuffix.price': '$',
      'inSuffix.variable': '$',
      'cmp.0': 'Precio por unidad',
      'cmpseg.0': 'Coste variable',
      'cmpseg.1': 'Margen de contribución',
      'chartTitle': 'Desglose de cada venta',
      'note': '📊 Punto de equilibrio = Costes fijos ÷ (Precio − Coste variable). Cada venta antes del equilibrio cubre costes fijos; después aporta beneficio puro. El ratio de contribución indica qué porcentaje de cada venta cubre costes fijos.',
    },
    useCases: [
      'poner precio a una cafetería: 3.500 € fijos al mes, latte a 2,80 € con 0,90 € de coste variable, unas 1.842 tazas para cuadrar',
      'evaluar una rebaja: el precio baja de 45 a 39, el margen cae de 27 a 21 y el equilibrio salta de 315 a 405 unidades',
      'repartir costes semivariables: el sueldo base a fijos, 4,50 € de comisión y embalaje por pedido a variables',
      'calcular el ingreso de equilibrio: 8.500 € fijos, precio 45 €, variable 18 € — 315 unidades ≈ 14.175 € de facturación, el mínimo mensual',
    ],
    faqs: [
      {
        q: '¿Cuál es la fórmula del punto de equilibrio?',
        a: 'Unidades de equilibrio = costes fijos ÷ (precio − coste variable). Cada unidad aporta su margen a cubrir los fijos; en cuanto las aportaciones igualan los fijos, quedas en cero.',
      },
      {
        q: '¿Qué es el ratio de margen de contribución?',
        a: 'Es (precio − coste variable) ÷ precio: la parte de cada euro de ventas que queda tras los costes variables. Un 60 % significa que de cada euro vendido quedan 0,60 € para cubrir fijos y, después, para ser beneficio.',
      },
      {
        q: '¿Cómo trato los costes semivariables?',
        a: 'Divídelos: la base fija mensual (p. ej., el sueldo base) va a costes fijos y la parte por unidad (mano de obra por hora, embalaje) a coste variable. La fórmula solo entiende esos dos cubos.',
      },
      {
        q: '¿Y el IVA en el cálculo?',
        a: 'Trabaja con importes sin IVA: el IVA repercutido no es ingreso tuyo y el soportado se deduce. Si solo tienes PVP con impuesto, divide entre 1,21 (España) o el tipo de tu país — 16 % en México, 19 % en Colombia o Chile — antes de entrar los datos.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Unidades de equilibrio = costes fijos ÷ (precio − coste variable). El margen de contribución por unidad cubre los fijos hasta llegar a cero; multiplicado por el precio da el ingreso de equilibrio.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.fixed': 'Fixkosten (monatlich)',
      'in.price': 'Preis pro Einheit',
      'in.variable': 'Variable Kosten pro Einheit',
      'out.beUnits': 'Gewinnschwelle (Einheiten)',
      'outSub.beUnits': 'Einheiten zur Deckung der Fixkosten',
      'out.beRevenue': 'Break-even-Umsatz',
      'out.contribution': 'Deckungsbeitrag / Einheit',
      'out.cmRatio': 'Deckungsbeitragsquote',
      'preset.0': 'Handgefertigtes Produkt',
      'preset.1': 'SaaS-Startup',
      'preset.2': 'Café',
      'errInvalid': 'Gültige nicht-negative Kosten eingeben',
      'errMargin': 'Preis muss höher als variable Stückkosten sein',
      'inSuffix.fixed': '$',
      'inSuffix.price': '$',
      'inSuffix.variable': '$',
      'cmp.0': 'Preis pro Einheit',
      'cmpseg.0': 'Variable Kosten',
      'cmpseg.1': 'Deckungsbeitrag',
      'chartTitle': 'Aufteilung jedes Verkaufs',
      'note': '📊 Break-even = Fixkosten ÷ (Preis − variable Kosten). Jeder Verkauf vor der Gewinnschwelle deckt Fixkosten; danach entsteht reiner Gewinn. Die Deckungsbeitragsquote zeigt den Anteil jedes Umsatz-Euros zur Fixkostendeckung.',
    },
    useCases: [
      'Preise für ein Café kalkulieren: 3.500 € Fixkosten im Monat, Latte für 2,80 € bei 0,90 € variabel — rund 1.842 Tassen zum Break-even',
      'Preissenkung prüfen: Preis von 45 auf 39, Deckungsbeitrag 27 → 21, Break-even-Menge von 315 auf 405 Stück',
      'Teilsvariable Kosten splitten: Grundgehalt zu den Fixkosten, 4,50 € Provision und Verpackung pro Auftrag zu den variablen Kosten',
      'Break-even-Umsatz ermitteln: 8.500 € fix, Preis 45 €, variabel 18 € — 315 Stück ≈ 14.175 € Umsatz als Monatsminimum',
    ],
    faqs: [
      {
        q: 'Wie lautet die Break-even-Formel?',
        a: 'Break-even-Menge = Fixkosten ÷ (Preis − variable Kosten je Stück). Jede verkaufte Einheit trägt ihren Deckungsbeitrag zu den Fixkosten bei; sobald die Beiträge die Fixkosten decken, hast du die Gewinnschwelle erreicht.',
      },
      {
        q: 'Was ist die Deckungsbeitragsquote?',
        a: 'Sie ist (Preis − variable Kosten) ÷ Preis — der Anteil jedes Euro Umsatz nach variablen Kosten. 60 % bedeuten: Von jedem Verkaufseuro bleiben 0,60 €, um Fixkosten zu decken — und danach bleibt Gewinn.',
      },
      {
        q: 'Wie teile ich teilsvariable Kosten auf?',
        a: 'Splitten: die feste Monatsbasis (z. B. Grundgehalt) zu den Fixkosten, der Stückanteil (Stundenlohn, Verpackung) zu den variablen Kosten. Die Formel kennt nur diese zwei Eimer.',
      },
      {
        q: 'Wie wirkt sich die Umsatzsteuer aus?',
        a: 'Rechne netto: Die USt ist ein durchlaufender Posten. Preise inkl. 19 % USt vorher durch 1,19 teilen. Kleinunternehmer nach § 19 UStG (bis 25.000 € Vorjahresumsatz) rechnen faktisch brutto = netto, sollten die entstehende Steuer aber im Blick behalten.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Break-even-Menge = Fixkosten ÷ (Preis − variable Kosten). Der Stückdeckungsbeitrag arbeitet die Fixkosten ab, bis die Lücke null ist; mal Preis ergibt den Break-even-Umsatz.',
    },
  },
}
