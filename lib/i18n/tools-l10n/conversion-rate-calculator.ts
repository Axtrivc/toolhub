/**
 * conversion-rate-calculator 本地化 bundle —— zh / es / de(B5 平台费批次)
 * 覆盖:ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ConversionRateCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular la tasa de conversión y el CPA reales de tu página', 'valorar cuántos pedidos extra supone una mejora del 20%', 'comparar comprar tráfico con optimizar la conversión', 'poner una cifra concreta de conversiones como objetivo'],
    faqs: [
      { q: '¿Cómo se calcula la tasa de conversión?', a: 'Divide las conversiones entre los visitantes (o sesiones) y multiplica por 100: 120 conversiones de 5.000 visitantes = 2,4%. Usa siempre el mismo denominador — sesiones y visitantes únicos dan tasas distintas.' },
      { q: '¿Qué tasa de conversión se considera buena?', a: 'Un e-commerce típico convierte en torno al 2-3%; las tiendas bien optimizadas superan el 5%, y las landing pages con tráfico cualificado llegan al 10%+. Compárate con la calidad de tu propio tráfico, no con medias de la industria.' },
      { q: '¿Qué sale mejor, subir la conversión o comprar tráfico?', a: 'Matemáticamente son intercambiables (+20% de tasa equivale a +20% de tráfico), pero no en coste: la mejora de conversión se aplica sobre el gasto publicitario que ya pagas, mientras que más tráfico exige más presupuesto. Optimiza primero y reinvierte después.' },
      { q: '¿Cuánto tráfico necesito para X conversiones más?', a: 'A la tasa actual, cada conversión extra exige visitantes extras proporcionales: para +24 conversiones al 2,4% hacen falta unas +1.000 visitas. Esa linealidad es justo lo que dobla la optimización de la conversión.' },
    ],
    ui: {
      'in.visitors': 'Visitantes (o sesiones)',
      'in.conversions': 'Conversiones',
      'in.spend': 'Gasto total (opcional)',
      'in.liftPct': 'Mejora de conversión objetivo',
      'inSuffix.spend': '$',
      'inSuffix.liftPct': '%',
      'out.convRate': 'Tasa de conversión',
      'out.cpa': 'Coste por adquisición (CPA)',
      'out.newTarget': 'Conversiones necesarias',
      'out.extraConversions': 'Conversiones extra necesarias',
      'out.extraVisitors': 'Visitantes extra (misma tasa)',
      'out.newCpa': 'CPA tras la mejora',
      'chartTitle': 'Conversiones actuales vs objetivo',
      'cmp.0': 'Ahora',
      'cmp.1': 'Objetivo',
      'cmpseg.0': 'Convertidos',
      'cmpseg.1': 'No convertidos',
      'preset.0': 'Ecommerce típico (~2,5%)',
      'preset.1': 'Búsqueda de pago (~3,5%)',
      'preset.2': 'Landing potente (~8%)',
      'errVisitors': 'Introduce un número de visitantes válido',
      'errConversions': 'Las conversiones no pueden superar a los visitantes',
      'errNonNegative': 'El gasto y el objetivo no pueden ser negativos',
      'note': '📈 Un e-commerce típico convierte al 2-3%; las landing pages fuertes superan el 5-10%. Las dos palancas son intercambiables en matemáticas (+20% de tasa ≈ +20% de tráfico) pero no en coste: la mejora de conversión se multiplica sobre el gasto que ya pagas.',
    },
  },
  de: {
    useCases: ['die echte Conversion-Rate und CPA deiner Seite berechnen', 'ausrechnen, was eine 20-%-Verbesserung an Zusatzbestellungen bringt', 'Traffic kaufen gegen Conversion-Optimierung abwägen', 'dem Optimierungsziel eine konkrete Conversion-Zahl geben'],
    faqs: [
      { q: 'Wie berechne ich die Conversion-Rate?', a: 'Conversions durch Besucher (oder Sitzungen) teilen und mit 100 multiplizieren: 120 Conversions aus 5.000 Besuchern = 2,4 %. Nutze durchgängig denselben Nenner — Sitzungen und Unique Visitor ergeben unterschiedliche Raten.' },
      { q: 'Was ist eine gute Conversion-Rate?', a: 'Typischer E-Commerce liegt bei 2-3 %, gut optimierte Shops über 5 %, Landingpages mit warmem Zielgruppen-Traffic oft über 10 %. Der Maßstab ist deine eigene Traffic-Qualität, nicht der Branchenschnitt.' },
      { q: 'Lohnt sich Conversion-Steigerung oder mehr Traffic?', a: 'Mathematisch sind sie austauschbar (+20 % Rate = +20 % Traffic), beim Cost nicht: Conversion-Gewinne wirken auf das Werbebudget, das du ohnehin zahlst, Traffic-Gewinne skalieren das Budget. Erst Rate verbessern, dann reinvestieren.' },
      { q: 'Wie viel Traffic brauche ich für X Conversions mehr?', a: 'Zur aktuellen Rate braucht jede zusätzliche Conversion proportional mehr Besucher: +24 Conversions bei 2,4 % erfordern rund +1.000 Besucher. Genau diese Linearität knickt die Conversion-Optimierung durch.' },
    ],
    ui: {
      'in.visitors': 'Besucher (oder Sitzungen)',
      'in.conversions': 'Conversions',
      'in.spend': 'Gesamtbudget (optional)',
      'in.liftPct': 'Angestrebte Conversion-Steigerung',
      'inSuffix.spend': '$',
      'inSuffix.liftPct': '%',
      'out.convRate': 'Conversion-Rate',
      'out.cpa': 'Kosten pro Akquise (CPA)',
      'out.newTarget': 'Benötigte Conversions',
      'out.extraConversions': 'Zusätzliche Conversions nötig',
      'out.extraVisitors': 'Zusätzliche Besucher (gleiche Rate)',
      'out.newCpa': 'CPA nach der Steigerung',
      'chartTitle': 'Aktuell vs. Ziel-Conversions',
      'cmp.0': 'Aktuell',
      'cmp.1': 'Ziel',
      'cmpseg.0': 'Konvertiert',
      'cmpseg.1': 'Nicht konvertiert',
      'preset.0': 'E-Commerce typisch (~2,5 %)',
      'preset.1': 'Paid Search (~3,5 %)',
      'preset.2': 'Starke Landingpage (~8 %)',
      'errVisitors': 'Gib eine gültige Besucherzahl ein',
      'errConversions': 'Conversions können die Besucher nicht übersteigen',
      'errNonNegative': 'Budget und Ziel dürfen nicht negativ sein',
      'note': '📈 Typischer E-Commerce konvertiert 2-3 %, starke Landingpages 5-10 %. Die zwei Hebel sind mathematisch austauschbar (+20 % Rate ≈ +20 % Traffic), beim Cost nicht: Conversion-Gewinne wirken auf das Werbebudget, das du ohnehin schon zahlst.',
    },
  },
}
