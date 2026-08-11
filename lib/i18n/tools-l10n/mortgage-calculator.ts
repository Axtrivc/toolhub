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
        a: '非常有用。多还的钱直接冲本金(先确认贷款机构没有提前还款违约金)。在 $400k、30 年、6.8% 的贷款上,每月多还 $200 大约能缩短 7 年期限,省下约 $130,000 利息。哪怕一年只多还一次全额,差别也很可观。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        '月供(等额本息)。P = 贷款本金,r = 月利率,n = 总月数。本工具在此基础上叠加 PMI、房产税和保险的估算。',
    },
    ui: {
      inputs: '输入',
      'in.home': '房屋价格',
      'in.down': '首付款',
      'in.rate': '利率',
      'in.years': '贷款期限',
      'inSuffix.years': '年',
      'out.monthly': '月供(本金+利息)',
      'out.loan': '贷款金额',
      'out.total': '总利息',
      note: '🏠 仅含本金和利息。加上房产税、保险和物业费才是你的全部月供。',
      chartTitle: '总还款额:本金 vs 利息',
      chartCenter: '总计',
      'slice.principal': '本金(贷款金额)',
      'slice.total': '利息(借款成本)',
      summaryTitle: '计算摘要',
      inputsLabel: '输入:',
      resultsLabel: '结果:',
      copySummary: '复制摘要',
      csvField: '字段',
      csvType: '类型',
      csvValue: '数值',
      csvInput: '输入',
      csvResult: '结果',
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
        a: 'Sí, y mucho. Los pagos extra van directos al capital (confirma con tu prestamista que no haya penalización por amortización anticipada). En un préstamo de 400 000 $ a 30 años y 6,8 %, pagar 200 $ extra al mes recorta unos 7 años de plazo y ahorra aproximadamente 130 000 $ en intereses. Incluso un pago completo adicional al año supone una diferencia notable.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Cuota mensual de la hipoteca (amortización). P = capital del préstamo, r = tasa mensual, n = número de meses. Esta herramienta añade además estimaciones de PMI, impuesto a la propiedad y seguro.',
    },
    ui: {
      inputs: 'Entradas',
      'in.home': 'Precio de la vivienda',
      'in.down': 'Pago inicial',
      'in.rate': 'Tasa de interés',
      'in.years': 'Plazo del préstamo',
      'inSuffix.years': 'años',
      'out.monthly': 'Pago mensual (P&I)',
      'out.loan': 'Importe del préstamo',
      'out.total': 'Intereses totales',
      note: '🏠 Solo capital e intereses. Suma impuesto a la propiedad, seguro y cuota de la comunidad para tu pago completo.',
      chartTitle: 'Total pagado: capital frente a intereses',
      chartCenter: 'Total',
      'slice.principal': 'Capital (importe del préstamo)',
      'slice.total': 'Interés (coste del préstamo)',
      summaryTitle: 'Resumen del cálculo',
      inputsLabel: 'Entradas:',
      resultsLabel: 'Resultados:',
      copySummary: 'Copiar resumen',
      csvField: 'Campo',
      csvType: 'Tipo',
      csvValue: 'Valor',
      csvInput: 'Entrada',
      csvResult: 'Resultado',
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
        a: 'Ja, erheblich. Zusätzliche Zahlungen gehen direkt auf den Kredit (kläre vorher mit dem Kreditgeber, dass keine Vorfälligkeitsentschädigung anfällt). Bei einem 400 000 $-Kredit über 30 Jahre und 6,8 % kürzt eine Sondertilgung von 200 $/Monat die Laufzeit um etwa 7 Jahre und spart rund 130 000 $ Zinsen. Schon eine zusätzliche Vollrate pro Jahr macht einen spürbaren Unterschied.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Monatliche Hypothekenrate (Annuitätentilgung). P = Kreditbetrag, r = monatlicher Zins, n = Anzahl der Monate. Dieses Werkzeug legt zusätzlich Schätzungen für PMI, Grundsteuer und Versicherung darüber.',
    },
    ui: {
      inputs: 'Eingaben',
      'in.home': 'Hauspreis',
      'in.down': 'Anzahlung',
      'in.rate': 'Zinssatz',
      'in.years': 'Laufzeit',
      'inSuffix.years': 'Jahre',
      'out.monthly': 'Monatsrate (Kredit + Zins)',
      'out.loan': 'Kreditbetrag',
      'out.total': 'Zinsen gesamt',
      note: '🏠 Nur Kredit und Zinsen. Addiere Grundsteuer, Versicherung und Hausgeld für deine vollständige Rate.',
      chartTitle: 'Gesamtbetrag: Kredit vs. Zinsen',
      chartCenter: 'Gesamt',
      'slice.principal': 'Kredit (Kreditbetrag)',
      'slice.total': 'Zins (Kosten des Kredits)',
      summaryTitle: 'Zusammenfassung der Berechnung',
      inputsLabel: 'Eingaben:',
      resultsLabel: 'Ergebnis:',
      copySummary: 'Zusammenfassung kopieren',
      csvField: 'Feld',
      csvType: 'Typ',
      csvValue: 'Wert',
      csvInput: 'Eingabe',
      csvResult: 'Ergebnis',
    },
  },
}
