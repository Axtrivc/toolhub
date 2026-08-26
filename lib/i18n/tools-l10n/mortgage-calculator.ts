/**
 * mortgage-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts、
 * MortgageCalculatorClient 配置里的英文 fallback、content.tsx 的 en 分支)。
 *
 * 覆盖:faqs(可见)+ ui(交互界面)+ useCases(Common uses)+ formula(公式区)。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]'

export const mortgageCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '查看含 PMI 和税费的房贷计算器',
      '按首付金额算房贷月供',
      '估算含税费和保险的月供',
      '计算含 PMI 的房贷月供',
    ],
    faqs: [
      {
        q: '这个计算器包含 PMI、房产税和保险吗?',
        a: '包含。输入年房产税、年房屋保险、月物业费(HOA)和 PMI 费率(年化 0.5% 是常见值)。只有首付不足 20% 时才会自动计入 PMI——首付达到 20% 及以上时自动为 $0。高亮结果是完整的 PITI 月供,各分项单独列出。',
      },
      {
        q: '应该选 15 年还是 30 年房贷?',
        a: '需要较低月供或想拿差额去投资,选 30 年;如果承受得了月供、又想大幅省利息,选 15 年。很多人选 30 年但在有余力时多还——这样既有 30 年的低月供保底,又能省下 15 年的大部分利息,还能在资金紧张时随时停止多还。',
      },
      {
        q: '我能买得起多贵的房子?',
        a: '一个常用准则:每月的住房总支出(PITI)不应超过月总收入的 28%,所有债务还款不超过 36%。年收入 $100k 大约对应 PITI 每月 $2,300。但实际负担能力还取决于首付、现有债务、信用分、当地房产税和其他生活开支。把 28/36 规则当作上限参考,而不是目标。',
      },
      {
        q: '办房贷需要多少信用分?',
        a: '常规贷款通常要求 620 分以上。FHA 贷款最低接受 580 分(有时 500 分搭配 10% 首付)。但信用分越高,拿到的利率越好——760 分以上可能比 680 分低 0.5% 以上,整个贷款期能省几万美元。申请前先查一下信用分,并纠正报告中的错误。',
      },
      {
        q: '多还有用吗?',
        a: '非常有用。多还的钱直接冲本金(先确认贷款机构没有提前还款违约金)。在 $400k、30 年、6.8% 的贷款上,每月多还 $200 大约能缩短 7 年期限,省下约 $130,000 利息。哪怕一年只多还一次全额,差别也很可观。用上方「每月额外还款」字段在你自己的贷款上模拟,即可看到新的还清时间、节省的利息和缩短的月数。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        '月供(等额本息)。P = 贷款本金,r = 月利率,n = 总月数。本工具在此基础上叠加 PMI、房产税和保险的估算。',
    },
    ui: {
      errYears: '年限必须大于 0',
      errPayoffCap: '600 个月内未还清',
      errHomePrice: '房屋价格必须大于 0',
      errDownOver100: '首付款不能超过 100%',
      errNonNegative: '各项数值不能为负',
      errInvalidInput: '请在所有字段中输入有效数字',
      'in.home': '房屋价格',
      'in.down': '首付款',
      'in.rate': '利率',
      'in.years': '贷款期限',
      'inSuffix.years': '年',
      'in.tax': '房产税(每年)',
      'in.insurance': '房屋保险(每年)',
      'in.hoa': '物业费 HOA(每月)',
      'in.pmiRate': 'PMI 费率(每年)',
      'in.extra': '每月额外还款',
      'out.piti': '总月供(PITI)',
      'out.monthly': '月供(本金+利息)',
      'out.loan': '贷款金额',
      'out.total': '总利息',
      'out.taxM': '房产税 / 月',
      'out.insM': '保险 / 月',
      'out.pmiM': 'PMI / 月',
      'out.hoaM': '物业费 / 月',
      'out.payoff': '提前还清时间',
      'out.saved': '额外还款省下的利息',
      'out.timeSaved': '缩短的时间',
      'outSub.pmiM': '首付 ≥ 20% 时自动 $0',
      'outSub.payoff': '额外还款 > $0 时显示',
      monthsOne: '1 个月',
      monthsN: '{m} 个月',
      yrsN: '{y} 年',
      monthsYrs: '{m} 个月({y})',
      note: '🏠 PMI 仅在首付不足 20%(LTV > 80%)时自动计入——首付达到 20% 及以上时为 $0。房产税和保险按年额 ÷ 12 折月;物业费按月输入。额外还款直接冲减本金。',
      chartTitle: '总还款额:本金 vs 利息',
      chartCenter: '总计',
      'slice.principal': '本金(贷款金额)',
      'slice.total': '利息(借款成本)',
      chartTitleBalance: '贷款余额随时间变化',
      'preset.0': '30 年固定',
      'preset.1': '15 年固定',
      'preset.2': '10% 首付 FHA',
      'preset.3': '激进提前还款',
      'line.base': '标准月供',
      'line.extra': '含提前还款',
      'band.base-extra': '提前还款缩小的差距',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'ver un simulador de hipoteca con PMI e impuestos',
      'calcular la cuota según el pago inicial',
      'estimar la cuota mensual con impuestos y seguro',
      'calcular el pago de la hipoteca con PMI',
    ],
    faqs: [
      {
        q: '¿Incluye esta calculadora el PMI, los impuestos y el seguro?',
        a: 'Sí. Introduce tu impuesto a la propiedad anual, el seguro del hogar anual, la cuota mensual de la comunidad y una tasa de PMI (0,5 % anual es habitual). El PMI solo se añade automáticamente cuando tu pago inicial es inferior al 20 %; con un 20 % o más, queda en 0 $. El resultado destacado es tu cuota PITI completa, con cada componente desglosado por separado.',
      },
      {
        q: '¿Elijo una hipoteca a 15 o a 30 años?',
        a: '30 años si necesitas cuotas más bajas o quieres invertir la diferencia; 15 años si te lo puedes permitir y quieres ahorrar muchísimo en intereses. Mucha gente elige 30 años y paga extra cuando puede — así obtienes la cuota obligatoria más baja del plazo de 30 años con gran parte del ahorro en intereses del de 15, además de la flexibilidad de dejar de pagar extra si el dinero escasea.',
      },
      {
        q: '¿Cuánta casa puedo permitirme?',
        a: 'Una pauta habitual: tu pago mensual total de vivienda (PITI) debe estar por debajo del 28 % de los ingresos mensuales brutos, y todos los pagos de deudas por debajo del 36 %. Con ingresos de 100 000 $ al año, eso es aproximadamente 2 300 $/mes de PITI. Pero la capacidad también depende del pago inicial, las deudas existentes, el puntaje de crédito, los impuestos locales y otros gastos. Usa la regla 28/36 como un techo inicial, no como meta.',
      },
      {
        q: '¿Qué puntaje de crédito necesito para una hipoteca?',
        a: 'Los préstamos convencionales suelen exigir 620 o más. Los préstamos FHA aceptan puntajes desde 580 (a veces 500 con un 10 % de pago inicial). Pero la tasa que consigues mejora notablemente con tu puntaje: un puntaje de 760 o más puede significar una tasa más de 0,5 % inferior a la de un 680, ahorrando decenas de miles a lo largo del préstamo. Antes de solicitarla, revisa tu puntaje y corrige cualquier error del informe.',
      },
      {
        q: '¿Ayuda hacer pagos extra?',
        a: 'Sí, y mucho. Los pagos extra van directos al capital (confirma con tu prestamista que no haya penalización por amortización anticipada). En un préstamo de 400 000 $ a 30 años y 6,8 %, pagar 200 $ extra al mes recorta unos 7 años de plazo y ahorra aproximadamente 130 000 $ en intereses. Incluso un pago completo adicional al año supone una diferencia notable. Usa el campo de pago extra mensual para simularlo en tu propio préstamo: verás la nueva fecha de amortización, los intereses ahorrados y los meses recortados.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Cuota mensual de la hipoteca (amortización). P = capital del préstamo, r = tasa mensual, n = número de meses. Esta herramienta añade además estimaciones de PMI, impuesto a la propiedad y seguro.',
    },
    ui: {
      errYears: 'Los años deben ser mayores que 0',
      errPayoffCap: 'No se amortiza en 600 meses',
      errHomePrice: 'El precio de la vivienda debe ser mayor que 0',
      errDownOver100: 'El pago inicial no puede superar el 100 %',
      errNonNegative: 'Los valores no pueden ser negativos',
      errInvalidInput: 'Introduce números válidos en todos los campos',
      'in.home': 'Precio de la vivienda',
      'in.down': 'Pago inicial',
      'in.rate': 'Tasa de interés',
      'in.years': 'Plazo del préstamo',
      'inSuffix.years': 'años',
      'in.tax': 'Impuesto a la propiedad (al año)',
      'in.insurance': 'Seguro del hogar (al año)',
      'in.hoa': 'Cuota de comunidad (al mes)',
      'in.pmiRate': 'Tasa de PMI (al año)',
      'in.extra': 'Pago extra mensual',
      'out.piti': 'Cuota mensual total (PITI)',
      'out.monthly': 'Pago mensual (P&I)',
      'out.loan': 'Importe del préstamo',
      'out.total': 'Intereses totales',
      'out.taxM': 'Impuesto / mes',
      'out.insM': 'Seguro / mes',
      'out.pmiM': 'PMI / mes',
      'out.hoaM': 'Comunidad / mes',
      'out.payoff': 'Amortización con pago extra',
      'out.saved': 'Intereses ahorrados con el pago extra',
      'out.timeSaved': 'Tiempo ahorrado',
      'outSub.pmiM': '$0 automático con 20 % o más inicial',
      'outSub.payoff': 'Introduce un pago extra > 0 $',
      monthsOne: '1 mes',
      monthsN: '{m} meses',
      yrsN: '{y} años',
      monthsYrs: '{m} meses ({y})',
      note: '🏠 El PMI solo se añade automáticamente cuando el pago inicial es inferior al 20 % (LTV superior al 80 %); con un 20 % o más es 0 $. El impuesto y el seguro anuales se dividen entre 12; la cuota de comunidad es mensual. Los pagos extra van directos al capital.',
      chartTitle: 'Total pagado: capital frente a intereses',
      chartCenter: 'Total',
      'slice.principal': 'Capital (importe del préstamo)',
      'slice.total': 'Interés (coste del préstamo)',
      chartTitleBalance: 'Saldo del préstamo en el tiempo',
      'preset.0': 'Fijo 30 años',
      'preset.1': 'Fijo 15 años',
      'preset.2': 'FHA 10% inicial',
      'preset.3': 'Amortización agresiva',
      'line.base': 'Pagos estándar',
      'line.extra': 'Con pagos extra',
      'band.base-extra': 'Brecha cerrada por pagos extra',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'einen Hypothekenrechner mit PMI und Steuern anzeigen',
      'die Monatsrate nach Anzahlung berechnen',
      'die Monatsrate mit Steuern und Versicherung schätzen',
      'die Hypothekenrate mit PMI berechnen',
    ],
    faqs: [
      {
        q: 'Enthält dieser Rechner PMI, Grundsteuer und Versicherung?',
        a: 'Ja. Gib deine jährliche Grundsteuer, die jährliche Wohngebäudeversicherung, das monatliche Hausgeld und einen PMI-Satz ein (0,5 % pro Jahr sind üblich). PMI wird nur automatisch hinzugefügt, wenn die Anzahlung unter 20 % liegt — ab 20 % fällt es auf 0 $. Das hervorgehobene Ergebnis ist deine vollständige PITI-Rate, jede Komponente einzeln aufgeschlüsselt.',
      },
      {
        q: 'Soll ich eine 15- oder 30-jährige Hypothek wählen?',
        a: '30 Jahre, wenn du niedrigere Raten brauchst oder die Differenz investieren willst; 15 Jahre, wenn du dir die höhere Rate leisten kannst und massiv Zinsen sparen willst. Viele nehmen 30 Jahre und tilgen zusätzlich, wenn sie können — so bekommst du die niedrigere Pflichtrate der 30 Jahre mit einem Großteil der Zinsersparnis der 15 Jahre, plus die Flexibilität, die Sondertilgung zu stoppen, wenn das Geld knapp wird.',
      },
      {
        q: 'Wie viel Haus kann ich mir leisten?',
        a: 'Eine gängige Faustregel: Deine monatliche Wohnbelastung insgesamt (PITI) sollte unter 28 % des monatlichen Bruttoeinkommens liegen, alle Schuldentilgungen unter 36 %. Bei 100 000 $ Jahreseinkommen sind das rund 2 300 $/Monat für PITI. Die Tragbarkeit hängt aber auch von Anzahlung, bestehenden Schulden, Bonitätsscore, lokaler Grundsteuer und anderen Lebenshaltungskosten ab. Nutze die 28/36-Regel als obere Orientierung, nicht als Ziel.',
      },
      {
        q: 'Welchen Bonitätsscore brauche ich für eine Hypothek?',
        a: 'Konventionelle Kredite verlangen meist 620 oder mehr. FHA-Kredite nehmen Scores ab 580 (manchmal 500 mit 10 % Anzahlung). Aber der Zins, den du bekommst, verbessert sich deutlich mit deinem Score — ein Score ab 760 kann einen über 0,5 % niedrigeren Zins bedeuten als ein 680er, was über die Laufzeit zigtausend Dollar spart. Vor der Antragstellung solltest du deinen Score prüfen und Fehler im Bericht korrigieren.',
      },
      {
        q: 'Hilft Sondertilgung?',
        a: 'Ja, erheblich. Zusätzliche Zahlungen gehen direkt auf den Kredit (kläre vorher mit dem Kreditgeber, dass keine Vorfälligkeitsentschädigung anfällt). Bei einem 400 000 $-Kredit über 30 Jahre und 6,8 % kürzt eine Sondertilgung von 200 $/Monat die Laufzeit um etwa 7 Jahre und spart rund 130 000 $ Zinsen. Schon eine zusätzliche Vollrate pro Jahr macht einen spürbaren Unterschied. Simuliere es mit dem Feld für die zusätzliche Monatsrate an deinem eigenen Kredit: du siehst das neue Tilgungsende, die gesparten Zinsen und die gekürzten Monate.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Monatliche Hypothekenrate (Annuitätentilgung). P = Kreditbetrag, r = monatlicher Zins, n = Anzahl der Monate. Dieses Werkzeug legt zusätzlich Schätzungen für PMI, Grundsteuer und Versicherung darüber.',
    },
    ui: {
      errYears: 'Die Laufzeit muss größer als 0 sein',
      errPayoffCap: 'Innerhalb von 600 Monaten nicht getilgt',
      errHomePrice: 'Der Hauspreis muss größer als 0 sein',
      errDownOver100: 'Die Anzahlung darf 100 % nicht überschreiten',
      errNonNegative: 'Werte dürfen nicht negativ sein',
      errInvalidInput: 'Bitte in allen Feldern gültige Zahlen eingeben',
      'in.home': 'Hauspreis',
      'in.down': 'Anzahlung',
      'in.rate': 'Zinssatz',
      'in.years': 'Laufzeit',
      'inSuffix.years': 'Jahre',
      'in.tax': 'Grundsteuer (pro Jahr)',
      'in.insurance': 'Wohngebäudeversicherung (pro Jahr)',
      'in.hoa': 'Hausgeld (pro Monat)',
      'in.pmiRate': 'PMI-Satz (pro Jahr)',
      'in.extra': 'Zusätzliche Monatsrate',
      'out.piti': 'Gesamte Monatsrate (PITI)',
      'out.monthly': 'Monatsrate (Kredit + Zins)',
      'out.loan': 'Kreditbetrag',
      'out.total': 'Zinsen gesamt',
      'out.taxM': 'Grundsteuer / Monat',
      'out.insM': 'Versicherung / Monat',
      'out.pmiM': 'PMI / Monat',
      'out.hoaM': 'Hausgeld / Monat',
      'out.payoff': 'Tilgung mit Sondertilgung',
      'out.saved': 'Durch Sondertilgung gesparte Zinsen',
      'out.timeSaved': 'Gesparte Zeit',
      'outSub.pmiM': 'Ab 20 % Anzahlung automatisch 0 $',
      'outSub.payoff': 'Sondertilgung > 0 $ eingeben',
      monthsOne: '1 Monat',
      monthsN: '{m} Monate',
      yrsN: '{y} Jahre',
      monthsYrs: '{m} Monate ({y})',
      note: '🏠 PMI wird nur automatisch hinzugefügt, wenn die Anzahlung unter 20 % liegt (LTV über 80 %) — ab 20 % sind es 0 $. Grundsteuer und Versicherung sind Jahresbeträge ÷ 12; das Hausgeld ist monatlich. Sondertilgungen gehen direkt auf den Kredit.',
      chartTitle: 'Gesamtbetrag: Kredit vs. Zinsen',
      chartCenter: 'Gesamt',
      'slice.principal': 'Kredit (Kreditbetrag)',
      'slice.total': 'Zins (Kosten des Kredits)',
      chartTitleBalance: 'Kreditsaldo über die Zeit',
      'preset.0': '30 Jahre fest',
      'preset.1': '15 Jahre fest',
      'preset.2': 'FHA 10 % Eigenleistung',
      'preset.3': 'Aggressive Tilgung',
      'line.base': 'Standard-Raten',
      'line.extra': 'Mit Sondertilgung',
      'band.base-extra': 'Vorsprung durch Sondertilgung',
    },
  },
}
