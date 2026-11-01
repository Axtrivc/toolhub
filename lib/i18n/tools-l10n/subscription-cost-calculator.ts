/**
 * subscription-cost-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SubscriptionCostCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['sumar el coste mensual real de todas tus suscripciones', 'ver cuánto cuesta ese «solo 9,99» en cinco años', 'convertir tus suscripciones a horas de trabajo', 'decidir qué suscripciones cancelar'],
    faqs: [
      { q: '¿Cómo funciona el cálculo?', a: 'Las suscripciones anuales se dividen entre 12 y las trimestrales entre 3, y se suman a tu total mensual: ese es el coste mensual real. El año multiplica por 12 y la cifra a cinco años por 60, todo en términos mensuales equivalentes y coherentes.' },
      { q: '¿Qué significa la cifra en horas de trabajo?', a: 'Divide tu total anual entre 25 —aproximadamente una media salarial neta por hora— para mostrar cuántas horas de trabajo consumen tus suscripciones al año. Ver «42 horas de mi vida» suele motivar la limpieza más que cualquier cifra en dólares.' },
      { q: '¿Qué cargos debo incluir?', a: 'Todos los recurrentes: streaming, almacenamiento en la nube, apps, gimnasio, dominios, prensa y también las pequeñas suscripciones dentro de apps. Revisa un extracto de tarjeta buscando cargos que no reconozcas: el hogar medio arrastra varias suscripciones fantasma olvidadas.' },
      { q: '¿Por qué mostrar cinco años?', a: 'Los plazos largos revelan el precio real de «solo 9,99 al mes»: un servicio a esa tasa son unos 600 $ en cinco años. Es el mismo encuadre que usan los prestamistas con los intereses: el total importa más que el pago diminuto.' },
    ],
    ui: {
      'chartTitle': 'Total pagado con el tiempo',
      'line.total': 'Total pagado',
      'in.fiveYear': 'En 5 años',
      'in.monthly': 'Coste mensual real',
      'in.monthlySubs': 'Total de suscripciones mensuales',
      'in.quarterlySubs': 'Total de suscripciones trimestrales',
      'in.workHours': 'Horas de trabajo al año',
      'in.yearly': 'Total anual',
      'in.yearlySubs': 'Total de suscripciones anuales',
      'note': '💡 Apunta todo cargo recurrente: streaming, nube, apps, gimnasio, dominios, prensa. La columna de 5 años es el precio honesto de «solo 9,99 $ al mes».',
      'out.fiveYear': 'En 5 años',
      'out.monthly': 'Coste mensual real',
      'out.monthlySubs': 'Total de suscripciones mensuales',
      'out.quarterlySubs': 'Total de suscripciones trimestrales',
      'out.workHours': 'Horas de trabajo al año',
      'out.yearly': 'Total anual',
      'out.yearlySubs': 'Total de suscripciones anuales',
          'errNonNegative': "Los importes de las suscripciones no pueden ser negativos",
      'outSub.workHours': "A $25/h netos",
},
  },
  de: {
    useCases: ['die wahren Monatskosten aller Abos zusammenrechnen', 'sehen, was das „nur 9,99“ über fünf Jahre kostet', 'Abos in Arbeitsstunden umrechnen', 'entscheiden, welche Abos gekündigt werden'],
    faqs: [
      { q: 'Wie funktioniert die Rechnung?', a: 'Jahresabos werden durch 12 geteilt, Quartalsabos durch 3 und zu deinen Monatskosten addiert — das ist der wahre Monatsbetrag. Das Jahr multipliziert mit 12, die Fünf-Jahres-Zahl mit 60, alles in einheitlich umgerechneten Monatsbeträgen.' },
      { q: 'Was bedeutet die Arbeitsstunden-Zahl?', a: 'Sie teilt deine Jahressumme durch 25 — etwa ein Nettodurchschnittsstundenlohn — und zeigt, wie viele Arbeitsstunden deine Abos pro Jahr verschlingen. „42 Stunden meines Lebens“ motiviert oft stärker zum Ausmisten als jede Dollarsumme.' },
      { q: 'Welche Abbuchungen soll ich eintragen?', a: 'Alle wiederkehrenden: Streaming, Cloud-Speicher, Apps, Fitnessstudio, Domains, Nachrichten — auch die kleinen In-App-Abos. Gehe eine Kartenabrechnung durch und suche Posten, die du nicht erkennst; der Durchschnittshaushalt schleppt mehrere vergessene Geister-Abos mit.' },
      { q: 'Warum fünf Jahre zeigen?', a: 'Lange Zeiträume enthüllen den echten Preis von „das sind nur 9,99 im Monat“ — ein Dienst in dieser Höhe sind rund 600 $ über fünf Jahre. Derselbe Rahmen wie bei Kreditzinsen: Die Gesamtsumme zählt mehr als die winzige Rate.' },
    ],
    ui: {
      'chartTitle': 'Kumulierte Zahlungen',
      'line.total': 'Gesamt bezahlt',
      'in.fiveYear': 'Über 5 Jahre',
      'in.monthly': 'Wahre Monatskosten',
      'in.monthlySubs': 'Monatliche Abos gesamt',
      'in.quarterlySubs': 'Vierteljährliche Abos gesamt',
      'in.workHours': 'Arbeitsstunden pro Jahr',
      'in.yearly': 'Jahressumme',
      'in.yearlySubs': 'Jährliche Abos gesamt',
      'note': '💡 Liste jede wiederkehrende Gebühr: Streaming, Cloud, Apps, Fitness, Domains, News. Die 5-Jahres-Spalte ist der ehrliche Preis von „nur 9,99 $ im Monat“.',
      'out.fiveYear': 'Über 5 Jahre',
      'out.monthly': 'Wahre Monatskosten',
      'out.monthlySubs': 'Monatliche Abos gesamt',
      'out.quarterlySubs': 'Vierteljährliche Abos gesamt',
      'out.workHours': 'Arbeitsstunden pro Jahr',
      'out.yearly': 'Jahressumme',
      'out.yearlySubs': 'Jährliche Abos gesamt',
          'errNonNegative': "Die Abonnement-Beträge dürfen nicht negativ sein",
      'outSub.workHours': "Bei 25 $/h netto",
},
  },
}
