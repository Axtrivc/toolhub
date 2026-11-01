/**
 * gross-up-calculator 本地化 bundle —— zh / es / de(batch23 / B3)
 */
import type { ToolL10n } from '../tool-l10n'

export const GrossUpCalculatorL10n: ToolL10n = {

  es: {
    useCases: [
      'revertir el impuesto para que un bonus nete 5.000 $ exactos',
      'presupuestar un paquete de reubicación «neto garantizado»',
      'usar el 29,65% estándar: retención complementaria 22% + FICA 7,65%',
      'fijar premios o acuerdos con una cifra neta prometida',
    ],
    faqs: [
      { q: '¿Qué tarifa uso para el gross-up de un bonus?', a: 'Los bonus por debajo de 1 millón de dólares usan el 22% de retención federal complementaria; suma el 7,65% de FICA y tienes el 29,65% que usa casi todas las nóminas. Por encima del millón la tarifa salta al 37%, y el impuesto estatal se añade encima.' },
      { q: '¿La retención es mi impuesto definitivo?', a: 'No. El gross-up garantiza el neto en el momento del pago; en la declaración anual recuperas lo demás si tu tipo real es menor, o pagas la diferencia si es mayor. La fórmula no cambia, solo la tarifa que introduces.' },
      { q: '¿Cuál es la fórmula del gross-up?', a: 'Bruto = neto deseado ÷ (1 − tarifa), e impuesto = bruto − neto. Ejemplo: 5.000 $ netos al 29,65% → 5.000 ÷ 0,7035 = 7.107,32 $, con 2.107,32 $ retenidos.' },
      { q: '¿Para qué se usa un gross-up?', a: 'El caso clásico son reubicaciones gravables (la empresa quiere que el empleado reciba un importe limpio), premios, bonus y ciertos acuerdos legales: siempre que prometas «te quedarán X netos», hay que revertir la retención.' },
    ],
    ui: {
      'in.targetNet': 'Neto deseado',
      'in.rate': 'Tipo impositivo combinado',
      'inSuffix.targetNet': '$',
      'inSuffix.rate': '%',
      'out.gross': 'Bruto a pagar',
      'out.tax': 'Impuesto retenido a este tipo',
      'out.netCheck': 'El neto queda en',
      'out.multiplier': 'Coste por cada 1 $ neto',
      'preset.0': 'Bonus: 22% + FICA 7,65%',
      'preset.1': 'Bonus alto: 37% + FICA',
      'preset.2': 'Simple: 25%',
      'errInvalid': 'El neto debe ser positivo y el tipo mayor que 0 y menor que 95%',
      'chartTitle': 'Neto frente a impuestos',
      'chartCenter': 'Bruto',
      'slice.netCheck': 'Neto que recibes',
      'slice.tax': 'Impuesto retenido',
      'note': '🎯 Preset estándar de bonus: 22% de retención complementaria + 7,65% FICA = 29,65%, la combinación habitual en EE. UU. para pagos de menos de 1 M$ (encima, el 37%); añade tu impuesto estatal. La retención no es el impuesto final: la diferencia se ajusta en la declaración.',
    },
  },
  de: {
    useCases: [
      'einen Bonus, der netto 5.000 $ bringen soll, brutto hochrechnen',
      'Umzugspakete mit zugesicherter Netto-Summe kalkulieren',
      'die Standardkombination 22 % Ergänzungssteuer + 7,65 % FICA nutzen',
      'Prämien oder Vergleiche mit fester Netto-Zusage bepreisen',
    ],
    faqs: [
      { q: 'Welchen Satz nutze ich für einen Bonus-Gross-up?', a: 'US-Boni unter 1 Million Dollar unterliegen 22 % bundesweiter Ergänzungssteuer; plus 7,65 % FICA ergibt das 29,65 %, das fast jede Payroll nutzt. Über der Million springt der Satz auf 37 %, die Landessteuer kommt obendrauf.' },
      { q: 'Ist die Einbehaltung meine endgültige Steuer?', a: 'Nein. Der Gross-up sichert den Nettobetrag im Zahlungszeitpunkt; bei der Jahresveranlagung holst du zuviel Behaltenes zurück oder zahlst nach, je nachdem ob dein Grenzsatz niedriger oder höher liegt. Die Formel bleibt gleich — nur der eingegebene Satz ändert sich.' },
      { q: 'Wie lautet die Gross-up-Formel?', a: 'Brutto = Zielnetto ÷ (1 − Satz), Steuer = Brutto − Netto. Beispiel: 5.000 $ netto bei 29,65 % → 5.000 ÷ 0,7035 = 7.107,32 $, davon 2.107,32 $ einbehalten.' },
      { q: 'Wann braucht man einen Gross-up?', a: 'Der Klassiker sind steuerpflichtige Umzugspakete (der Arbeitgeber will einen runden Nettobetrag liefern), Prämien, Boni und manche Vergleiche: Überall, wo man „dir bleiben X netto" zusagt, muss man die Steuern hochrechnen.' },
    ],
    ui: {
      'in.targetNet': 'Gewünschtes Netto',
      'in.rate': 'Kombinierter Steuersatz',
      'inSuffix.targetNet': '$',
      'inSuffix.rate': '%',
      'out.gross': 'Zu zahlendes Brutto',
      'out.tax': 'Einbehaltene Steuer',
      'out.netCheck': 'Netto landet bei',
      'out.multiplier': 'Kosten pro 1 $ Netto',
      'preset.0': 'Bonus: 22% + FICA 7,65%',
      'preset.1': 'Top-Bonus: 37% + FICA',
      'preset.2': 'Einfach 25%',
      'errInvalid': 'Netto muss positiv sein, der Satz über 0 und unter 95 %',
      'chartTitle': 'Netto vs. Steuer',
      'chartCenter': 'Brutto',
      'slice.netCheck': 'Netto für dich',
      'slice.tax': 'Einbehaltene Steuer',
      'note': '🎯 Bonus-Preset: 22 % Ergänzungssteuer + 7,65 % FICA = 29,65 %, die Standardkombination für US-Bonuszahlungen unter 1 Mio. $ (darüber 37 %); die Landessteuer kommt hinzu. Einbehaltung ≠ Endsteuer — die Differenz klärt die Jahresveranlagung.',
    },
  },
}
