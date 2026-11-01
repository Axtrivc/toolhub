/**
 * savings-goal-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases（无 formula 条目）
 */
import type { ToolL10n } from '../tool-l10n'

export const savingsGoalCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'FV = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]',
      explain: 'Valor futuro de un saldo inicial P más un depósito recurrente PMT. r = tasa por periodo, n = periodos. Así es como los aportes regulares capitalizan hacia una meta de ahorro.',
    },
    useCases: ['calcular el objetivo de ahorro por fecha', 'saber cuánto ahorrar al mes', 'calcular el objetivo con intereses', 'alcanzar la meta de ahorro para un año'],
    faqs: [
      { q: '¿Qué tasa de retorno debo usar?', a: 'Usa un 4–5 % para cuentas de ahorro de alto rendimiento o inversiones conservadoras. Usa un 7 % para inversión bursátil a largo plazo. Tasas más altas implican aportaciones mensuales menores, pero más volatilidad. Ante la duda, calcula dos veces — una con una tasa optimista y otra con una conservadora — y apunta a la aportación más alta.' },
      { q: '¿Debo tener en cuenta la inflación?', a: 'Sí, si tu objetivo está a años de distancia. Un objetivo de 30 000 $ dentro de 5 años comprará menos que 30 000 $ hoy. Para compensar, sube tu meta un ~3 % anual o usa una tasa «real» (tu retorno menos la inflación). Por ejemplo, un retorno nominal del 7 % se convierte en ~4 % real.' },
      { q: '¿Es mejor ahorrar mensualmente o en importes únicos?', a: 'Las aportaciones mensuales ganan para la mayoría porque imponen disciplina y reparten el riesgo (promedio de coste). La inversión a tanto alzado rinde algo más de media porque el dinero pasa más tiempo en el mercado, pero requiere tener el efectivo por adelantado y tolerar las oscilaciones.' },
    ],
    ui: {
      errYears: 'Los años deben ser mayores que 0',
      'in.goal': 'Objetivo de ahorro', 'in.current': 'Ahorrado actualmente', 'in.rate': 'Retorno anual', 'in.years': 'Años hasta la meta',
      'out.monthly': 'Aportación mensual necesaria', 'out.gap': 'Importe a ahorrar', 'out.growth': 'Crecimiento de la inversión',
      note: '🎯 Calcula el importe mensual necesario para alcanzar cualquier meta de ahorro, considerando el crecimiento de lo que ya tienes ahorrado.',
      chartTitle: 'Camino a tu meta',
      'line.savings': 'Tus ahorros',
      'line.goal': 'Meta',
    },
  },
  de: {
    formula: {
      formula: 'FV = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]',
      explain: 'Endwert eines Startguthabens P plus wiederkehrender Einzahlung PMT. r = Periodenzins, n = Perioden. So wachsen regelmäßige Beiträge durch Zinseszins auf ein Sparziel an.',
    },
    useCases: ['das Sparziel nach Datum berechnen', 'herausfinden, wie viel monatlich zu sparen ist', 'das Sparziel mit Zinsen berechnen', 'ein Sparziel bis zu einem bestimmten Jahr erreichen'],
    faqs: [
      { q: 'Welche Rendite soll ich annehmen?', a: 'Nutze 4–5 % für Hochzinstagesgeld oder konservative Anlagen. Nutze 7 % für langfristige Aktienanlage. Höhere Raten bedeuten niedrigere Monatsbeiträge, aber mehr Schwankung. Im Zweifel rechne zweimal — einmal optimistisch, einmal konservativ — und ziele auf den höheren Beitrag.' },
      { q: 'Soll ich die Inflation berücksichtigen?', a: 'Ja, wenn dein Ziel Jahre entfernt liegt. Ein 30 000 $-Ziel in 5 Jahren kauft weniger als 30 000 $ heute. Zum Ausgleich erhöhe dein Ziel um ~3 % pro Jahr oder nutze eine „reale“ Rendite (Anlagerendite minus Inflation). Eine nominale 7 %-Rendite wird z. B. zu ~4 % real.' },
      { q: 'Ist monatliches Sparen oder Einmalanlage besser?', a: 'Monatliche Einzahlungen gewinnen für die meisten, weil sie Disziplin erzwingen und Risiko streuen (Cost-Average-Effekt). Die Einmalanlage schneidet im Schnitt leicht besser ab, weil das Geld länger am Markt ist, erfordert aber, das Geld vorab zu haben und kurzfristige Schwankungen auszuhalten.' },
    ],
    ui: {
      errYears: 'Die Jahre müssen größer als 0 sein',
      'in.goal': 'Sparziel', 'in.current': 'Bereits gespart', 'in.rate': 'Jahresrendite', 'in.years': 'Jahre bis Ziel',
      'out.monthly': 'Nötiger monatlicher Beitrag', 'out.gap': 'Noch zu sparen', 'out.growth': 'Investment-Wachstum',
      note: '🎯 Berechnet den monatlichen Betrag, der nötig ist, um jedes Sparziel zu erreichen — inklusive Wachstum auf das bereits Ersparte.',
      chartTitle: 'Weg zum Ziel',
      'line.savings': 'Deine Ersparnisse',
      'line.goal': 'Ziel',
    },
  },
}
