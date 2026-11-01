/**
 * roi-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值)。覆盖:faqs + ui + useCases。
 * 该工具在 lib/tool-formulas.ts 无 formula 条目,FormulaSection 不渲染。
 */

import type { ToolL10n } from '../tool-l10n'

export const roiCalculatorL10n: ToolL10n = {


  // ──────────────────────────── Español ────────────────────────────
  es: {
    formula: {
      formula: 'ROI = (Gain − Cost) / Cost × 100%',
      variables:
        'ROI = retorno de la inversión (%)\nGain = valor final de la inversión ($)\nCost = importe invertido originalmente ($)',
      explain: 'Rentabilidad de la inversión. Ganancia = valor final − coste (o precio de venta − precio de compra). Se expresa como porcentaje del coste original.',
      example:
        'Paso 1: Cost = $2,000, valor final (Gain) = $2,500.\nPaso 2: beneficio = 2,500 − 2,000 = $500.\nPaso 3: ROI = 500 / 2,000 × 100% = 25%.\nResultado: la inversión devolvió un 25% — $1.25 por cada $1.00 invertido.',
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
      variables:
        'ROI = Rendite der Investition (%)\nGain = Endwert der Investition ($)\nCost = ursprünglich investierter Betrag ($)',
      explain: 'Rendite der Investition. Gewinn = Endwert − Kosten (oder Verkaufspreis − Kaufpreis), ausgedrückt als Prozentsatz der ursprünglichen Kosten.',
      example:
        'Schritt 1: Cost = $2,000, Endwert (Gain) = $2,500.\nSchritt 2: Gewinn = 2,500 − 2,000 = $500.\nSchritt 3: ROI = 500 / 2,000 × 100% = 25%.\nErgebnis: die Investition brachte 25% — $1.25 für jeden investierten $1.00.',
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
