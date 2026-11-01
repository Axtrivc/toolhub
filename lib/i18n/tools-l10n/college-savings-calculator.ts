/**
 * college-savings-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CollegeSavingsCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular cuánto ahorrar al mes para la universidad según la edad del hijo', 'comparar el coste total de universidad pública estatal, fuera del estado y privada', 'incluir la inflación educativa (no la general) en la meta', 'comprobar cuánto falta tras capitalizar el saldo actual del plan 529'],
    faqs: [
      { q: '¿Por qué no usar la inflación normal?', a: 'La educación superior en EE. UU. ha subido históricamente un 4-6% anual, muy por encima del IPC general. Fijar la meta con un 2-3% casi garantiza quedarse corto el año de ingreso; el 5% que usa la herramienta por defecto viene de ese rango histórico.' },
      { q: '¿Cómo se calcula el coste total?', a: 'El coste anual de hoy se capitaliza con la inflación hasta el año de ingreso, y cada curso posterior infla un año más: el total de una carrera de cuatro años es la suma de cuatro cifras crecientes, no el coste del primer año por cuatro.' },
      { q: '¿Cómo se tratan los ahorros actuales y el ahorro mensual?', a: 'El saldo actual se capitaliza con interés mensual hasta el ingreso; la aportación mensual usa el valor futuro de una renta ordinaria. La diferencia restante dividida por el factor de renta es el «cuánto al mes falta ahorrar».' },
      { q: '¿Qué ventajas fiscales tiene un plan 529?', a: 'Las ganancias retiradas para gastos educativos cualificados son libres de impuestos federales, y muchos estados ofrecen deducciones. Es solo el «recipiente»: la herramienta calcula cuánto ahorrar — el dinero puede estar en un 529, un Coverdell o una cuenta taxable, ajustando el rendimiento esperado.' },
    ],
    ui: {
      'chartTitle': 'Ahorro acumulado vs coste total',
      'line.balance': 'Saldo previsto de la cuenta',
      'line.target': 'Meta: coste total de la carrera',
      'preset.0': 'Pública estatal',
      'preset.1': 'Pública fuera del estado',
      'preset.2': 'Universidad privada',
      'in.childAge': 'Edad del hijo',
      'in.annualCost': 'Coste anual actual',
      'in.years': 'Años de carrera',
      'in.inflation': 'Inflación del coste',
      'in.currentSavings': 'Ahorros actuales',
      'in.returnRate': 'Rentabilidad esperada',
      'out.costAtStart': 'Coste en el año de ingreso',
      'out.totalCost': 'Coste total de la carrera',
      'out.savingsFV': 'Valor futuro de lo ahorrado',
      'out.monthlyNeed': 'Aporte mensual necesario',
      'outSub.costAtStart': 'con inflación capitalizada',
      'outSub.monthlyNeed': 'descontando el saldo actual',
      'note': '🎓 Los valores predefinidos usan costes totales de 2024-25 (matrícula + alojamiento + varios): pública estatal ≈ 30 000 $, fuera del estado ≈ 49 000 $, privada ≈ 68 000 $. El 529 crece libre de impuestos si se gasta en educación — pero primero hay que saber la meta.',
      'errInvalid': 'Introduce una edad válida (0-17), un coste anual positivo y tasas razonables',
    },
  },
  de: {
    useCases: ['aus dem Alter des Kindes das nötige Monats-Sparziel fürs Studium ableiten', 'Gesamtkosten von Landesuniversität, Out-of-State und Privatuni vergleichen', 'die Bildungsinflation (nicht die allgemeine) in das Ziel einrechnen', 'prüfen, wie viel nach Verzinsung des vorhandenen 529-Guthabens fehlt'],
    faqs: [
      { q: 'Warum nicht die normale Inflation nehmen?', a: 'Die Studienkosten in den USA sind historisch um 4-6% pro Jahr gestiegen — deutlich schneller als die allgemeine Inflation. Wer die Zielsumme mit 2-3% ansetzt, reißt im Einschulungsjahr fast sicher eine Lücke; die 5%-Voreinstellung stammt aus diesem historischen Bereich.' },
      { q: 'Wie entsteht die Gesamtsumme?', a: 'Die heutigen Jahreskosten werden bis zum Einschulungsjahr verzinst, und jedes weitere Studienjahr inflate nochmals ein Jahr: Die Summe eines Vierjahresstudiums ist die Addition von vier steigenden Jahresbeträgen, nicht Jahreskosten mal vier.' },
      { q: 'Wie werden vorhandenes Guthaben und Monatssparen behandelt?', a: 'Das vorhandene Guthaben wird mit monatlicher Verzinsung bis zur Einschulung hochgerechnet; der Monatsbeitrag über den Endwert einer nachschüssigen Rente. Die verbleibende Lücke geteilt durch den Rentenfaktor ergibt das nötige „wie viel pro Monat“.' },
      { q: 'Welche Steuervorteile hat ein 529-Plan?', a: 'Gewinne sind steuerfrei, wenn sie für qualifizierte Bildungsausgaben abgezogen werden; viele Bundesstaaten gewähren zusätzlich Abzüge. Der 529 ist nur das „Gefäß“ — der Rechner bestimmt die Sparsumme. Das Geld kann auch in Coverdell oder einem normalen Depot liegen, dann die erwartete Rendite anpassen.' },
    ],
    ui: {
      'chartTitle': 'Sparverlauf vs. Gesamtkosten',
      'line.balance': 'Erwartetes Guthaben',
      'line.target': 'Ziel: Gesamtkosten des Studiums',
      'preset.0': 'Staatlich im Bundesstaat',
      'preset.1': 'Out-of-State',
      'preset.2': 'Privatuni',
      'in.childAge': 'Alter des Kindes',
      'in.annualCost': 'Aktuelle Jahreskosten',
      'in.years': 'Studienjahre',
      'in.inflation': 'Kosteninflation',
      'in.currentSavings': 'Bereits gespart',
      'in.returnRate': 'Erwartete Rendite',
      'out.costAtStart': 'Jahreskosten bei Einschulung',
      'out.totalCost': 'Gesamtkosten des Studiums',
      'out.savingsFV': 'Endwert des Ersparten',
      'out.monthlyNeed': 'Nötige Monatsrate',
      'outSub.costAtStart': 'inflationiert',
      'outSub.monthlyNeed': 'abzüglich verzinstem Guthaben',
      'note': '🎓 Die Voreinstellungen nutzen volle Jahreskosten 2024-25 (Studiengebühren + Unterkunft + Sonstiges): staatlich im Bundesstaat ≈ 30 000 $, Out-of-State ≈ 49 000 $, privat ≈ 68 000 $. Ein 529 wächst steuerfrei für Bildung — aber erst muss das Ziel stehen.',
      'errInvalid': 'Gib ein gültiges Alter (0-17), positive Jahreskosten und sinnvolle Sätze ein',
    },
  },
}
