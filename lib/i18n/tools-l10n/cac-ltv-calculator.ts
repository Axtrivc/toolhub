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
      'vDanger': 'Pierdes dinero con cada cliente: arregla la retención o el CAC antes de escalar',
      'vBelow': 'Por debajo de la regla 3:1: mejora la retención o reduce el CAC',
      'vGolden': 'Economía unitaria saludable: en la zona óptima de 3:1 a 5:1',
      'vHigh': 'Muy eficiente: podrías estar invirtiendo poco en crecimiento',
      'monthsWord': 'meses',
      'chartTitle': 'Indicador de salud LTV:CAC',
      'zone.0': 'Peligro',
      'zone.1': 'Bajo el objetivo',
      'zone.2': 'Zona óptima',
      'zone.3': 'Subinversión',
      'chartCaption': '3:1 = regla de oro',
      'note': '💡 Referencias: LTV:CAC inferior a 1:1 genera pérdidas; ~3:1 es la regla de oro para SaaS; más de 5:1 sugiere margen para invertir más en captación. Un payback del CAC por debajo de 12 meses mantiene sano el flujo de caja.',
    },
    useCases: [
      'calcular el CAC: 24.000 $ de inversión traen 120 clientes — 200 $ cada uno; con 40 $/mes de margen, payback en 5 meses',
      'derivar el LTV del churn: 5 % mensual = 20 meses de vida media; ARPU de 50 $ y 80 % de margen dan 800 $',
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
        a: 'LTV = ARPU × margen bruto ÷ churn mensual. Un churn del 5 % mensual implica una vida media de 20 meses (1 ÷ 0,05); un ARPU de 50 $ con 80 % de margen da 800 $. Usa siempre margen bruto, no ingresos — solo el margen retenido puede devolver el coste de adquisición.',
      },
      {
        q: '¿Qué es el periodo de recuperación del CAC?',
        a: 'Los meses de margen bruto necesarios para recuperar el coste de adquisición: CAC ÷ (ARPU × margen). Un CAC de 250 $ con 40 $/mes de margen tarda 6,3 meses. Los inversores SaaS suelen querer payback bajo 12 meses para que el crecimiento se autofinancie.',
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
      'chartCaption': '3:1 = goldene Regel',
      'note': '💡 Benchmarks: LTV:CAC unter 1:1 bedeutet Verlust pro Kunde; ~3:1 ist die SaaS-Goldregel; über 5:1 deutet auf ungenutztes Wachstumspotenzial hin. Ein CAC-Payback unter 12 Monaten hält den Cashflow gesund.',
    },
    useCases: [
      'CAC ermitteln: 24.000 $ Ausgaben bringen 120 Kunden — 200 $ je Kunde; bei 40 $ Marge/Monat ist das Payback in 5 Monaten',
      'LTV aus der Churn Rate ableiten: 5 % monatlich = 20 Monate mittlere Lebensdauer; ARPU 50 $, Marge 80 % → 800 $',
      'Verhältnis prüfen: LTV 800 gegen CAC 200 = 4:1, über der 3:1-Marke; steigt der CAC auf 300, fällt es auf 2,7:1',
      'Skalierung entscheiden: über 5:1 deutet oft auf Unterinvestition hin — Gebote anheben und CAC wie Payback gleichzeitig beobachten',
    ],
    faqs: [
      {
        q: 'Welches LTV:CAC-Verhältnis ist gut?',
        a: 'Rund 3:1 — genug Bruttomarge je Kunde, um Overhead und Fehlgriffe zu decken und trotzdem effizient zu bleiben. Unter 1:1 verlierst du an jedem Kunden; 1-3:1 lässt kaum Puffer; über 5:1 ist effizient, signalisiert aber oft Unterinvestition ins Wachstum.',
      },
      {
        q: 'Wie berechne ich den LTV aus der Churn Rate?',
        a: 'LTV = ARPU × Bruttomarge ÷ monatliche Churn. 5 % monatlicher Churn bedeutet eine mittlere Lebensdauer von 20 Monaten (1 ÷ 0,05); ARPU 50 $ bei 80 % Marge ergibt 800 $. Immer Bruttomarge statt Umsatz — nur behaltene Marge kann den CAC zurückzahlen.',
      },
      {
        q: 'Was ist die CAC-Payback-Zeit?',
        a: 'Die Monatsmarge, die nötig ist, um den CAC zurückzuholen: CAC ÷ (ARPU × Marge). Ein CAC von 250 $ bei 40 $ Marge/Monat dauert 6,3 Monate. SaaS-Investoren wollen meist Payback unter 12 Monaten, damit Wachstum sich selbst finanziert.',
      },
      {
        q: 'Monatlich oder jährlich rechnen?',
        a: 'Bleib bei monatlicher Churn: 5 % monatlich = rund 46 % jährlich (Resthaltung 0,95^12 ≈ 0,54). Wer die Jahreszahl in die Monatsformel steckt, schrumpft die Lebensdauer von 20 auf gut 2 Monate und den LTV von 800 $ auf unter 90 $.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Kern der Unit Economics: CAC = Ausgaben ÷ gewonnene Kunden; LTV = Monatsmarge (ARPU × Bruttomarge) × mittlere Lebensdauer in Monaten (1 ÷ monatliche Churn). LTV:CAC wird an der 3:1-Regel gemessen, Payback = CAC ÷ Monatsmarge.',
    },
  },
}
