/**
 * credit-card-payoff-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const creditCardPayoffCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['看还清信用卡要多久', '算还清过程中要付多少利息', '比较不同月供的还款时间', '决定用雪崩法还是滚雪球法还债'],
    faqs: [
      { q: '如果月供低于当月利息怎么办?', a: '计算器会警告你。如果你的还款只够付利息(或更少),余额永远不会下降——你可能永远还不完。你必须还多于当月利息。例如 $5,000、APR 22% 的账单,月利息约 $92;任何高于 $92 的还款才开始减少本金。' },
      { q: '双周还款有帮助吗?', a: '有。把月供拆成两半、每两周还一次,一年就是 26 个半次还款——相当于多还了一次月供。对信用卡来说,这也会略微降低平均日余额,从而减少利息。两者叠加能把还款时间缩短几个月。' },
      { q: '最低还款额是怎么算的?', a: '各发卡行不同,通常是「固定金额(如 $25-35)」和「余额的 1-3% 加利息和费用」二者取高。有的还会加上超过额度或逾期的部分。具体公式看你的卡片协议——它决定了你被允许还得多慢。' },
      { q: '还清信用卡会伤信用分吗?', a: '不会——还清信用卡债务通常对信用分有利。信用分的一大因素是信用利用率(余额除以额度)。利用率保持在 30% 以下、最好 10% 以下,能提分。还清余额会降低利用率。还清后保留卡片,以保住可用额度和账户年限。' },
    ],
    ui: {
      inputs: '输入', 'in.balance': '当前余额', 'in.apr': '年利率 (APR)', 'in.payment': '月供',
      'out.months': '还清时间', 'out.total': '总还款额', 'out.interest': '总利息',
      note: '💳 只还最低还款可能要几十年。多还会大幅节省利息。',
      chartTitle: '总还款:本金 vs 利息', chartCenter: '总计', 'slice.principal': '本金(你借的)', 'slice.interest': '利息(借钱成本)',
      summaryTitle: '计算摘要', inputsLabel: '输入:', resultsLabel: '结果:', copySummary: '复制摘要', csvField: '字段', csvType: '类型', csvValue: '数值', csvInput: '输入', csvResult: '结果',
    },
  },
  es: {
    useCases: ['ver cuánto tardas en pagar la tarjeta', 'calcular cuánto interés pagarás al saldarla', 'comparar el plazo con distintos pagos mensuales', 'decidir entre método avalancha o bola de nieve'],
    faqs: [
      { q: '¿Y si mi pago es menor que el interés mensual?', a: 'La calculadora te avisará. Si tu pago solo cubre el interés (o menos), el saldo nunca baja — podrías pagar para siempre sin avanzar. Debes pagar más que el interés mensual. Por ejemplo, en $5,000 al 22 % APR, el interés mensual es de unos $92; cualquier pago por encima de $92 empieza a reducir el principal.' },
      { q: '¿Ayudan los pagos quincenales?', a: 'Sí. Dividir el pago mensual en dos y pagar cada dos semanas suma 26 medios pagos al año — el equivalente a un pago mensual extra. En una tarjeta, también reduce un poco tu saldo diario medio, bajando el interés. La combinación puede recortar meses al plazo.' },
      { q: '¿Cómo se calcula el pago mínimo?', a: 'Varía por emisor, pero suele ser el mayor de: un importe fijo (p. ej. $25-35), o el 1-3 % de tu saldo más intereses y comisiones. Algunos incluyen también montos sobre el límite o atrasos. Revisa tu acuerdo de tarjeta para la fórmula exacta — determina lo lento que se te permite pagar.' },
      { q: '¿Pagar la tarjeta perjudica mi puntuación de crédito?', a: 'No — saldar la deuda de la tarjeta suele ayudar. Un factor clave es la utilización del crédito (saldo entre límite). Mantenerla por debajo del 30 %, idealmente del 10 %, mejora la puntuación. Reducir saldos baja la utilización. Conserva la tarjeta abierta tras saldarla para preservar el crédito disponible y la antigüedad de la cuenta.' },
    ],
    ui: {
      inputs: 'Entradas', 'in.balance': 'Saldo actual', 'in.apr': 'Tasa anual (APR)', 'in.payment': 'Pago mensual',
      'out.months': 'Tiempo hasta saldar', 'out.total': 'Total pagado', 'out.interest': 'Interés total',
      note: '💳 Los pagos mínimos pueden tardar décadas. Pagar más del mínimo ahorra muchísimo interés.',
      chartTitle: 'Total pagado: principal vs interés', chartCenter: 'Total', 'slice.principal': 'Principal (lo que pediste prestado)', 'slice.interest': 'Interés (coste de la deuda)',
      summaryTitle: 'Resumen del cálculo', inputsLabel: 'Entradas:', resultsLabel: 'Resultados:', copySummary: 'Copiar resumen', csvField: 'Campo', csvType: 'Tipo', csvValue: 'Valor', csvInput: 'Entrada', csvResult: 'Resultado',
    },
  },
  de: {
    useCases: ['sehen, wie lange die Kartenschuld noch läuft', 'berechnen, wie viel Zins bis zur Tilgung anfallen', 'die Laufzeit bei verschiedenen monatlichen Raten vergleichen', 'zwischen Lawinen- und Schneeballmethode wählen'],
    faqs: [
      { q: 'Was, wenn meine Rate unter den Monatszinsen liegt?', a: 'Der Rechner warnt dich. Wenn deine Zahlung nur die Zinsen (oder weniger) deckt, sinkt der Saldo nie — du könntest ewig zahlen, ohne Fortschritt. Du musst mehr als die monatlichen Zinsen zahlen. Bei $5,000 und 22 % APR sind die Monatszinsen etwa $92; jede Zahlung über $92 beginnt, die Kreditsumme zu tilgen.' },
      { q: 'Helfen vierzehntägige Zahlungen?', a: 'Ja. Die Monatsrate halbieren und alle zwei Wochen zahlen ergibt 26 Halbraten pro Jahr — das Äquivalent einer zusätzlichen Monatsrate. Bei einer Karte senkt das auch leicht deinen durchschnittlichen Tagessaldo und damit die Zinsen. Beides zusammen kann die Tilgung um Monate verkürzen.' },
      { q: 'Wie wird die Mindestrate berechnet?', a: 'Das variiert je nach Herausgeber, ist aber üblicherweise der höhere Wert von: einem Festbetrag (z. B. $25-35) oder 1-3 % deines Saldos plus Zinsen und Gebühren. Manche zählen auch Beträge über dem Limit oder Rückstände dazu. Schau in deine Kartenvereinbarung für die genaue Formel — sie bestimmt, wie langsam du zurückzahlen darfst.' },
      { q: 'Schadet das Tilgen meiner Karte meinem Kredit-Score?', a: 'Nein — Kredite tilgen hilft deinem Score meist. Ein Hauptfaktor ist die Kreditnutzung (Saldo geteilt durch Limit). Unter 30 %, idealerweise unter 10 %, verbessert den Score. Salden abbauen senkt die Nutzung. Behalte die Karte nach dem Tilgen offen, um verfügbaren Kredit und Kontoalter zu erhalten.' },
    ],
    ui: {
      inputs: 'Eingaben', 'in.balance': 'Aktueller Saldo', 'in.apr': 'Jahressatz (APR)', 'in.payment': 'Monatliche Rate',
      'out.months': 'Zeit bis tilgung', 'out.total': 'Insgesamt gezahlt', 'out.interest': 'Zinsen gesamt',
      note: '💳 Mindestraten können Jahrzehnte dauern. Mehr als das Minimum zu zahlen, spart dramatisch Zinsen.',
      chartTitle: 'Gesamt gezahlt: Tilgung vs. Zinsen', chartCenter: 'Gesamt', 'slice.principal': 'Tilgung (was du geliehen hast)', 'slice.interest': 'Zinsen (Kosten des Kredits)',
      summaryTitle: 'Zusammenfassung der Berechnung', inputsLabel: 'Eingaben:', resultsLabel: 'Ergebnis:', copySummary: 'Zusammenfassung kopieren', csvField: 'Feld', csvType: 'Typ', csvValue: 'Wert', csvInput: 'Eingabe', csvResult: 'Ergebnis',
    },
  },
}
