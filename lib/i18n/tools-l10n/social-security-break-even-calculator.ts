/**
 * social-security-break-even-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SocialSecurityBreakEvenCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['comparar la prestación mensual al reclamar a los 62, la FRA o los 70', 'hallar la edad de equilibrio del retraso', 'ver los totales acumulados a los 80 y 85 años', 'decidir con tu PIA real en vez de estimaciones'],
    faqs: [
      { q: '¿Cuánto se pierde reclamando a los 62?', a: 'Depende de tu edad plena de jubilación (FRA): nacidos en 1960 o después tienen FRA a los 67 y un 70% al reclamar a los 62; con FRA de 66 es un 75%. La regla: 5/9 de punto por mes durante los primeros 36 meses y 5/12 por cada mes adicional.' },
      { q: '¿Cuánto premia esperar hasta los 70?', a: 'Nacidos en 1943 o después suman 2/3 de punto por mes de retraso, un 8% anual. Con FRA a los 67 llegas al 124% del PIA a los 70; con FRA de 66, hasta el 132%. Pasados los 70 no hay premio adicional.' },
      { q: '¿Qué significa la edad de equilibrio (break-even)?', a: 'Reclamar pronto paga menos pero antes; retrasar paga más pero después. La edad de equilibrio es cuando el total acumulado del que retrasa alcanza al que reclamó pronto — vive más que esa edad y retrasar «valió la pena»; muere antes, y reclamar temprano fue mejor. La herramienta resuelve el cruce mes a mes.' },
      { q: '¿Qué simplificaciones hace?', a: 'Cifras nominales: sin ajuste por COLA, sin impuestos, sin invertir lo cobrado pronto, y sin prestaciones de cónyuge o supervivencia — todo eso mueve el punto real. Responde a lo esencial: con estas cuotas mensuales, ¿dónde se cruzan las curvas acumuladas?' },
    ],
    ui: {
      'chartTitle': 'Total acumulado (62-90 años)',
      'preset.0': 'Salario medio (2 000 $)',
      'preset.1': 'Salario alto (2 800 $)',
      'preset.2': 'Máximo (4 000 $+)',
      'line.at62': 'Cobrando desde los 62',
      'line.atFRA': 'Cobrando desde la FRA',
      'line.at70': 'Cobrando desde los 70',
      'in.birthYear': 'Año de nacimiento',
      'in.pia': 'Prestación mensual en la FRA (PIA)',
      'out.benefit62': 'Mensual si reclamas a los 62',
      'out.benefitFRA': 'Mensual en la FRA',
      'out.benefit70': 'Mensual si reclamas a los 70',
      'out.breakEven1': 'La FRA alcanza al 62 a los',
      'out.breakEven2': 'Los 70 alcanzan a la FRA a los',
      'out.at85': 'Acumulado a los 85',
      'outSub.benefit62': 'con descuento por adelanto',
      'outSub.benefit70': 'con créditos por retraso',
      'note': '🎂 Cifras nominales, sin COLA ni impuestos. Descuento por adelanto: 5/9% mensual los primeros 36 meses, 5/12% después; crédito por retraso (nacidos desde 1943): 2/3% mensual. Si tu esperanza de vida supera claramente la edad de equilibrio, retrasar suele ganar; si no, reclamar pronto es más seguro.',
      'errInvalid': 'Introduce un año de nacimiento entre 1943 y 2010 y un PIA positivo',
    },
  },
  de: {
    useCases: ['Monatsrente bei Beantragung mit 62, zur FRA oder mit 70 vergleichen', 'das Einhol-Alter des verzögerten Beginns finden', 'die kumulierten Summen mit 80 und 85 sehen', 'mit der echten PIA statt Schätzwerten entscheiden'],
    faqs: [
      { q: 'Wie viel kostet der Beginn mit 62?', a: 'Es hängt von deinem Full Retirement Age (FRA) ab: Ab 1960 Geborene haben FRA 67 und erhalten mit 62 nur 70%; bei FRA 66 sind es 75%. Regel: 5/9 Prozentpunkt pro Monat der ersten 36 Monate, danach 5/12 pro Monat.' },
      { q: 'Wie viel bringt Warten bis 70?', a: 'Ab Geburtsjahr 1943 gibt es 2/3 Prozentpunkt pro verzögertem Monat — 8% pro Jahr. Bei FRA 67 erreichst du mit 70 die 124% der PIA; bei FRA 66 bis zu 132%. Nach 70 gibt es keinen weiteren Zuschlag.' },
      { q: 'Was bedeutet das Break-even-Alter?', a: 'Früher Beginn zahlt weniger, aber länger; später zahlt mehr, aber später. Das Break-even-Alter ist der Punkt, an dem die kumulierte Summe des Späteren den Frühen einholt — wer darüber hinaus lebt, für den lohnte das Warten; wer davor stirbt, für den war der frühe Beginn besser. Der Rechner löst die Kreuzung monatsgenau.' },
      { q: 'Welche Vereinfachungen gelten?', a: 'Nominale Beträge: ohne COLA, ohne Steuern, ohne Anlage der früher bezogenen Gelder und ohne Partner-/Hinterbliebenenrenten — all das verschiebt den echten Punkt. Beantwortet wird das Kernproblem: Bei diesen Monatsbeträgen, wo schneiden sich die Kumulativkurven?' },
    ],
    ui: {
      'chartTitle': 'Kumulierte Bezüge (62-90 Jahre)',
      'preset.0': 'Durchschnittsverdiener (2.000 $)',
      'preset.1': 'Höheres Einkommen (2.800 $)',
      'preset.2': 'Höchstsatz (4.000 $+)',
      'line.at62': 'Bezug ab 62',
      'line.atFRA': 'Bezug ab FRA',
      'line.at70': 'Bezug ab 70',
      'in.birthYear': 'Geburtsjahr',
      'in.pia': 'Monatsbetrag bei FRA (PIA)',
      'out.benefit62': 'Monatlich ab 62',
      'out.benefitFRA': 'Monatlich bei FRA',
      'out.benefit70': 'Monatlich ab 70',
      'out.breakEven1': 'FRA holt 62 ein mit',
      'out.breakEven2': '70 holt FRA ein mit',
      'out.at85': 'Kumuliert bis 85',
      'outSub.benefit62': 'nach Frühbezugabschlag',
      'outSub.benefit70': 'mit Zuschlägen',
      'note': '🎂 Nominale Werte, ohne COLA und Steuern. Frühabschlag: 5/9% pro Monat der ersten 36 Monate, danach 5/12%; Aufschub-Zuschlag (ab 1943): 2/3% pro Monat. Liegt die Lebenserwartung klar über dem Break-even, gewinnt meist der spätere Beginn — sonst ist früher sicherer.',
      'errInvalid': 'Gib ein Geburtsjahr zwischen 1943 und 2010 und eine positive PIA ein',
    },
  },
}
