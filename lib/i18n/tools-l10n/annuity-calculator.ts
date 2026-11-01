/**
 * annuity-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const annuityCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'PMT = P × [ r(1+r)^n / ((1+r)^n − 1) ]',
      explain: 'Pago fijo (PMT) que amortiza un valor presente P en n periodos al tipo r — la misma fórmula de amortización de un préstamo, aquí usada para planificar el cobro de una anualidad.',
    },
    useCases: ['planificar cuántos años durarán los retiros en la jubilación', 'decidir entre suma única o anualidad', 'valorar pensiones o acuerdos estructurados', 'calcular cuánto puedes retirar al mes por años'],
    faqs: [
      { q: '¿Y si vivo más de N años?', a: 'Entonces la anualidad se agota. Es el riesgo principal de gestionar los retiros uno mismo. Las anualidades comerciales de aseguradoras suelen pagar de por vida, pero a tasas más bajas porque reparten el riesgo de longevidad entre muchos compradores.' },
      { q: '¿Qué tasa de retorno debo suponer para la jubilación?', a: 'Los planificadores conservadores usan un 4-5 % para ir sobre seguro, porque el dinero de jubilación debe resistir las caídas del mercado al inicio (riesgo de secuencia de retornos). Usar tasas optimistas del 7 % hace que el pago parezca mayor, pero eleva la probabilidad de quedarte sin dinero. Ejecuta ambos escenarios.' },
      { q: '¿Vale la pena una anualidad inmediata?', a: 'Depende de tu longevidad y de la necesidad de ingresos garantizados. Las anualidades brillan si esperas vivir mucho, porque la aseguradora sigue pagando incluso si superas el promedio actuarial. La contrapartida es perder acceso a la suma única y dejar menos a los herederos.' },
    ],
    ui: {
      errYears: 'Introduce un número de años mayor que 0',
      errNonNegative: 'El capital y la tasa no pueden ser negativos',
      'in.principal': 'Capital inicial', 'in.rate': 'Retorno anual', 'in.years': 'Periodo de pago', 'inSuffix.years': 'años',
      'out.annual': 'Pago anual', 'out.monthly': 'Pago mensual', 'out.total': 'Pagos totales',
      note: '🏦 Anualidad: cuánto puedes retirar al año para que el dinero dure exactamente N años. Habitual en la planificación de la jubilación.',
      chartTitle: 'Saldo durante los retiros',
      'line.balance': 'Capital restante',
    },
  },
  de: {
    formula: {
      formula: 'PMT = P × [ r(1+r)^n / ((1+r)^n − 1) ]',
      explain: 'Feste Rate (PMT), die einen Barwert P über n Perioden zum Zins r tilgt — dieselbe Tilgungsformel wie bei einem Kredit, hier für die Auszahlungsplanung einer Annuität.',
    },
    useCases: ['planen, wie viele Jahre das Entsparen in der Rente reicht', 'zwischen Einmalbetrag und Rente wählen', 'Pensionen oder strukturierte Abfindungen bewerten', 'nach Jahren berechnen, wie viel du monatlich entnehmen kannst'],
    faqs: [
      { q: 'Was, wenn ich länger als N Jahre lebe?', a: 'Dann ist die Rente aufgebraucht. Das ist das Kernrisiko selbst verwalteter Entnahmen. Gewerbliche Renten von Versicherungen zahlen oft lebenslang, aber zu niedrigeren Sätzen, weil sie das Langlebigkeitsrisiko über viele Käufer streuen.' },
      { q: 'Welche Rendite sollte ich für die Rente annehmen?', a: 'Vorsichtige Planer rechnen mit 4-5 %, um auf der sicheren Seite zu sein, weil das Rentengeld Marktrückgängen früh in der Rente standhalten muss (Sequenzrisiko). Mit optimistischen 7 % wirkt die Auszahlung größer, aber das Risiko, das Geld zu überleben, steigt. Rechne beide Szenarien.' },
      { q: 'Lohnt sich eine sofortbeginnende Rente?', a: 'Es hängt von deiner Lebenserwartung und dem Bedarf an garantiertem Einkommen ab. Renten glänzen, wenn du lange zu leben erwartest, weil der Versicherer weiter zahlt, auch wenn du den versicherungsmathematischen Durchschnitt überlebst. Der Preis ist der Verlust des Zugriffs auf den Einmalbetrag und weniger für die Erben.' },
    ],
    ui: {
      errYears: 'Gib eine Anzahl von Jahren größer als 0 ein',
      errNonNegative: 'Kapital und Satz dürfen nicht negativ sein',
      'in.principal': 'Anfangskapital', 'in.rate': 'Jahresrendite', 'in.years': 'Auszahlungszeitraum', 'inSuffix.years': 'Jahre',
      'out.annual': 'Jährliche Auszahlung', 'out.monthly': 'Monatliche Auszahlung', 'out.total': 'Gesamtauszahlungen',
      note: '🏦 Rente: wie viel du jährlich entnehmen kannst, damit das Geld genau N Jahre reicht. Typisch für die Rentenplanung.',
      chartTitle: 'Saldo während der Entnahmen',
      'line.balance': 'Verbleibendes Kapital',
    },
  },
}
