/**
 * retirement-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const retirementCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Balance = P(1+i)^n + PMT × [ ((1+i)^n − 1) / i ]   (i = annual rate ÷ 12, n = years × 12)\nSafe withdrawal ≈ Balance × 4%',
      variables:
        'Balance = fondo de jubilación al retirarte ($)\nP = ahorro de jubilación actual ($)\nPMT = aportación mensual ($)\ni = tipo mensual (rentabilidad anual ÷ 12)\nn = meses hasta la jubilación (años × 12)\nSafe withdrawal = retiro anual según la regla del 4% ($)',
      explain: 'Ahorro capitalizado (saldo inicial P más aportaciones mensuales PMT, i = rentabilidad anual ÷ 12, n en meses) forma el fondo; una regla común es retirar ~4 % anual.',
      example:
        'Paso 1: P = $25,000, PMT = $500/mes, i = 7 % ÷ 12 ≈ 0.0058333, n = 30 × 12 = 360 meses.\nPaso 2: (1 + i)^n = 1.0058333^360 ≈ 8.1165.\nPaso 3: capital inicial: 25,000 × 8.1165 ≈ $202,913.\nPaso 4: aportaciones: 500 × (8.1165 − 1) / 0.0058333 ≈ $609,985.\nResultado: fondo ≈ $202,913 + $609,985 = $812,898; con la regla del 4 % se pueden retirar unos $32,516 al año.',
    },
    useCases: ['proyectar el ahorro para la jubilación con el capital y las aportaciones actuales', 'ver si vas camino de tu meta de jubilación', 'comparar la acumulación con distintas rentabilidades', 'calcular cuántos años más debes ahorrar'],
    faqs: [
      { q: '¿Cuánto necesito para jubilarme?', a: 'Una regla común es 25× tus gastos anuales (el inverso de la regla del 4 %). Con $40,000 de gastos anuales, apunta a $1 millón. Muchos asesores sugieren ahora 30× para ir sobre seguro dada la mayor esperanza de vida.' },
      { q: '¿Sirve la regla del 4 % fuera de EE. UU.?', a: 'Se calibró con datos bursátiles estadounidenses; para carteras europeas o latinoamericanas conviene ser más prudente (3 %–3,5 % de retirada). Ajusta por la inflación local y la fiscalidad de tu país antes de fijar la meta.' },
      { q: '¿Qué rentabilidad introduzco?', a: 'Rango habitual: 5 %–7 % para una cartera global diversificada a 30 años y 3 %–4 % para perfiles conservadores o plazos cortos. Usa valores reales (descontada la inflación) o nominales, pero de forma consistente en todos los campos.' },
      { q: '¿Cómo encaja con mi plan de pensiones?', a: 'Suma al «ahorro actual» tu plan de empleo (en España, el plan de pensiones de empleo) y las aportaciones mensuales de planes privados; el plan individual admite 1.500 €/año (más si aporta la empresa) con ventajas fiscales. Todo cuenta como parte de tu aportación mensual.' },
    ],
    ui: {
      'in.current': 'Ahorros actuales', 'in.monthly': 'Aportación mensual', 'in.rate': 'Retorno anual', 'in.years': 'Años hasta la jubilación',
      'out.total': 'Ahorro para la jubilación', 'out.monthlyIncome': 'Ingreso mensual (regla del 4%)', 'out.contributed': 'Tus aportaciones', 'out.growth': 'Crecimiento de la inversión',
      chartTitle: 'Camino a la jubilación', 'line.contributed': 'Tu aportación', 'line.balance': 'Fondo de jubilación', 'band.contributed-balance': 'Crecimiento',
      'preset.0': 'Conservador 4%', 'preset.1': 'Equilibrado 6%', 'preset.2': 'Agresivo 8%',
      note: '👵 Crecimiento compuesto más aportaciones regulares. Empieza pronto: el tiempo importa más que la cantidad. Regla del 4%: retirar el 4% anual suele sostener ~30 años de jubilación.',
      'errNonNegative': 'Los valores no pueden ser negativos',
    },
  },
  de: {
    formula: {
      formula: 'Balance = P(1+i)^n + PMT × [ ((1+i)^n − 1) / i ]   (i = annual rate ÷ 12, n = years × 12)\nSafe withdrawal ≈ Balance × 4%',
      variables:
        'Balance = Altersvermögen beim Ruhestand ($)\nP = aktuelle Ersparnisse ($)\nPMT = monatlicher Beitrag ($)\ni = monatlicher Zinssatz (Jahresrendite ÷ 12)\nn = Monate bis zum Ruhestand (Jahre × 12)\nSafe withdrawal = jährliche Entnahme nach der 4%-Regel ($)',
      explain: 'Verzinstes Sparen (Startguthaben P plus monatliche Beiträge PMT, i = Jahresrendite ÷ 12, n in Monaten) bildet das Altersvermögen; eine Daumenregel ist, etwa 4 % pro Jahr zu entnehmen.',
      example:
        'Schritt 1: P = $25,000, PMT = $500/Monat, i = 7 % ÷ 12 ≈ 0.0058333, n = 30 × 12 = 360 Monate.\nSchritt 2: (1 + i)^n = 1.0058333^360 ≈ 8.1165.\nSchritt 3: Startkapital: 25,000 × 8.1165 ≈ $202,913.\nSchritt 4: Beiträge: 500 × (8.1165 − 1) / 0.0058333 ≈ $609,985.\nErgebnis: Altersvermögen ≈ $202,913 + $609,985 = $812,898; nach der 4%-Regel lassen sich jährlich etwa $32,516 entnehmen.',
    },
    useCases: ['das Rentenkapital mit aktuellem Sparstand und Beiträgen hochrechnen', 'sehen, ob du auf Kurs für dein Rentenziel bist', 'die Ansparung bei verschiedenen Renditen vergleichen', 'berechnen, wie viele Jahre du noch sparen musst'],
    faqs: [
      { q: 'Wie viel brauche ich für die Rente?', a: 'Eine gängige Regel ist das 25-Fache deiner Jahresausgaben (der Kehrwert der 4 %-Regel). Bei $40,000 Jahresausgaben peile $1 Million an. Viele Berater empfehlen inzwischen das 30-Fache, um wegen längerer Lebenserwartung auf der sicheren Seite zu sein.' },
      { q: 'Gilt die 4-%-Regel auch in Deutschland?', a: 'Sie basiert auf US-Marktdaten; für sicherheitsorientierte deutsche Depots wird oft nur 3 %–3,5 % Entnahme empfohlen. Riester-, Rürup- und Betriebsrente (bAV) einrechnen — sie decken einen Teil des Bedarfs separat ab.' },
      { q: 'Welche Rendite soll ich einsetzen?', a: 'Realistisch: 5 %–7 % für ein breit gestreutes ETF-Depot über 30 Jahre, 3 %–4 % für konservative Mischfonds. Nutze durchgehend reale (inflationsbereinigte) oder nominale Werte, nicht beides gemischt.' },
      { q: 'Wie viel sollte ich monatlich sparen?', a: 'Faustregel: 15 %–20 % des Bruttos inklusive Arbeitgeberanteil. Wer mit 55–60 aufhören will, braucht oft über 40 % Sparquote — im Rechner einfach die Jahre reduzieren und die Lücke ansehen.' },
    ],
    ui: {
      'in.current': 'Aktuelle Ersparnisse', 'in.monthly': 'Monatlicher Beitrag', 'in.rate': 'Jahresrendite', 'in.years': 'Jahre bis zur Rente',
      'out.total': 'Altersvorsorge', 'out.monthlyIncome': 'Monatseinkommen (4%-Regel)', 'out.contributed': 'Deine Einzahlungen', 'out.growth': 'Investment-Wachstum',
      chartTitle: 'Weg in die Rente', 'line.contributed': 'Deine Einzahlungen', 'line.balance': 'Altersvermögen', 'band.contributed-balance': 'Wachstum',
      'preset.0': 'Konservativ 4%', 'preset.1': 'Ausgewogen 6%', 'preset.2': 'Aggressiv 8%',
      note: '👵 Zinseszins plus regelmäßige Einzahlungen. Früh anfangen — Zeit zählt mehr als die Summe. 4%-Regel: 4% jährliche Entnahme tragen historisch ~30 Rentenjahre.',
      'errNonNegative': 'Werte dürfen nicht negativ sein',
    },
  },
}
