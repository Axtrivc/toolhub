/**
 * apy-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值)。覆盖:faqs + ui + useCases + formula。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'APY = (1 + r/n)^n − 1'

export const apyCalculatorL10n: ToolL10n = {


  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'convertir de APR a APY',
      'calcular el APY según la frecuencia de capitalización',
      'entender la diferencia entre APY y APR',
      'calcular el APY de una cuenta de ahorro',
    ],
    faqs: [
      {
        q: '¿Por qué los bancos muestran el APY y los prestamistas el APR?',
        a: 'Por marketing. El APY hace que el ahorro parezca mayor; el APR hace que los préstamos parezcan más baratos. Lee siempre la letra pequeña para saber qué métrica te están citando.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Rendimiento porcentual anual. r = tasa nominal anual, n = periodos de capitalización por año. El APY refleja el retorno anual real después de capitalizar.',
    },
    ui: {
      'in.principal': 'Capital',
      'in.apr': 'Tasa anual (APR)',
      'in.compound': 'Capitalización',
      'in.years': 'Años',
      'opt.compound.1': 'Anual',
      'opt.compound.4': 'Trimestral',
      'opt.compound.12': 'Mensual',
      'opt.compound.365': 'Diaria',
      'out.apy': 'APY (tasa efectiva)',
      'out.final': 'Saldo final',
      'out.interest': 'Interés generado',
      errNonNegative: 'El capital, la tasa y los años no pueden ser negativos',
      errInvalidInput: 'Introduce números válidos en todos los campos',
      note: '🏦 El APY (rendimiento porcentual anual) tiene en cuenta la capitalización. APY > APR cuando se capitaliza más de una vez al año.',
      chartTitle: 'Crecimiento en el tiempo',
      'line.principal': 'Capital',
      'line.balance': 'Saldo',
      'band.principal-balance': 'Interés generado',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'APR in APY umrechnen',
      'den APY nach Zinsverrechnungsperiode berechnen',
      'den Unterschied zwischen APY und APR verstehen',
      'den APY eines Sparkontos berechnen',
    ],
    faqs: [
      {
        q: 'Warum zeigen Banken den APY, Kreditgeber aber den APR?',
        a: 'Marketing. Der APY lässt Ersparnisse größer wirken; der APR lässt Kredite günstiger wirken. Lies immer das Kleingedruckte, um zu wissen, welche Kennzahl genannt wird.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Effektive Jahresrendite. r = nominaler Jahreszinssatz, n = Zinsperioden pro Jahr. Der APY spiegelt die tatsächliche Jahresrendite nach Zinseszins wider.',
    },
    ui: {
      'in.principal': 'Einlage',
      'in.apr': 'Jahressatz (APR)',
      'in.compound': 'Verzinsung',
      'in.years': 'Jahre',
      'opt.compound.1': 'Jährlich',
      'opt.compound.4': 'Quartalsweise',
      'opt.compound.12': 'Monatlich',
      'opt.compound.365': 'Täglich',
      'out.apy': 'APY (effektiver Satz)',
      'out.final': 'Endsaldo',
      'out.interest': 'Erzielte Zinsen',
      errNonNegative: 'Einlage, Satz und Jahre dürfen nicht negativ sein',
      errInvalidInput: 'Bitte in allen Feldern gültige Zahlen eingeben',
      note: '🏦 Der APY (effektive Jahresrendite) berücksichtigt die Verzinsung. APY > APR, wenn öfter als einmal pro Jahr verrechnet wird.',
      chartTitle: 'Wachstum über die Zeit',
      'line.principal': 'Einlage',
      'line.balance': 'Saldo',
      'band.principal-balance': 'Erzielte Zinsen',
    },
  },
}
