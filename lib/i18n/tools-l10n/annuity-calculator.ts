/**
 * annuity-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const annuityCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'PMT = P × [ r(1+r)^n / ((1+r)^n − 1) ]',
      explain: '在 n 期、利率 r 下偿还现值 P 的固定每期还款(PMT)——与贷款摊销公式相同,这里用于年金领取规划。',
    },
    useCases: ['规划退休取款能撑多少年', '在一次性领取和年金之间做选择', '评估养老金或结构化和解金', '按年限算每月可取多少钱'],
    faqs: [
      { q: '如果我活过 N 年怎么办?', a: '那年金就领完了。这是自己管理取款的核心风险。保险公司发售的商业年金通常会终身支付,但费率较低,因为他们把长寿风险分摊到了众多购买者身上。' },
      { q: '退休应该假设多少回报率?', a: '保守的规划者用 4-5% 来确保安全,因为退休金需要在退休初期抵御市场下跌(收益顺序风险)。用乐观的 7% 会让支付额看起来更大,但提高了把钱花光的风险。两种情景都跑一下。' },
      { q: '即期年金划算吗?', a: '取决于你的寿命和对有保障收入的需求。如果你预期长寿,年金很有优势,因为即使你活过精算平均寿命,保险公司也会继续支付。代价是失去对一次性本金的支配权,留给继承人的也更少。' },
    ],
    ui: {
      errYears: '请输入大于 0 的年数',
      'in.principal': '初始本金', 'in.rate': '年回报率', 'in.years': '取款年限', 'inSuffix.years': '年',
      'out.annual': '年支付额', 'out.monthly': '月支付额', 'out.total': '总支付额',
      note: '🏦 年金:每年能取多少钱,让本金刚好撑满 N 年。常用于退休规划。',
    },
  },
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
      'in.principal': 'Capital inicial', 'in.rate': 'Retorno anual', 'in.years': 'Periodo de pago', 'inSuffix.years': 'años',
      'out.annual': 'Pago anual', 'out.monthly': 'Pago mensual', 'out.total': 'Pagos totales',
      note: '🏦 Anualidad: cuánto puedes retirar al año para que el dinero dure exactamente N años. Habitual en la planificación de la jubilación.',
    },
  },
  de: {
    formula: {
      formula: 'PMT = P × [ r(1+r)^n / ((1+r)^n − 1) ]',
      explain: 'Feste Rate (PMT), die einen Barwert P über n Perioden zum Zins r tilgt — dieselbe Tilgungsformel wie bei einem Kredit, hier für die Auszahlungsplanung einer Annuität.',
    },
    useCases: ['planen, wie viele Jahre das Entsparen in der Rente reicht', 'zwischen Einmalbetrag und Rente wählen', 'Pensionen oder Strukturierte Vergleiche bewerten', 'pro Jahr und Monat berechnen, was du entnehmen kannst'],
    faqs: [
      { q: 'Was, wenn ich länger als N Jahre lebe?', a: 'Dann ist die Rente aufgebraucht. Das ist das Kernrisiko selbst verwalteter Entnahmen. Gewerbliche Renten von Versicherungen zahlen oft lebenslang, aber zu niedrigeren Sätzen, weil sie das Langlebigkeitsrisiko über viele Käufer streuen.' },
      { q: 'Welche Rendite sollte ich für die Rente annehmen?', a: 'Vorsichtige Planer rechnen mit 4-5 %, um auf der sicheren Seite zu sein, weil das Rentengeld Marktrückgängen früh in der Rente standhalten muss (Sequenzrisiko). Mit optimistischen 7 % wirkt die Auszahlung größer, aber das Risiko, das Geld zu überleben, steigt. Rechne beide Szenarien.' },
      { q: 'Lohnt sich eine sofortbeginnende Rente?', a: 'Es hängt von deiner Lebenserwartung und dem Bedarf an garantiertem Einkommen ab. Renten glänzen, wenn du lange zu leben erwartest, weil der Versicherer weiter zahlt, auch wenn du das Versicherungsalter überlebst. Der Preis ist der Verlust des Zugriffs auf den Einmalbetrag und weniger für die Erben.' },
    ],
    ui: {
      errYears: 'Gib eine Anzahl von Jahren größer als 0 ein',
      'in.principal': 'Anfangskapital', 'in.rate': 'Jahresrendite', 'in.years': 'Auszahlungszeitraum', 'inSuffix.years': 'Jahre',
      'out.annual': 'Jährliche Auszahlung', 'out.monthly': 'Monatliche Auszahlung', 'out.total': 'Gesamtauszahlungen',
      note: '🏦 Rente: wie viel du jährlich entnehmen kannst, damit das Geld genau N Jahre reicht. Typisch für die Rentenplanung.',
    },
  },
}
