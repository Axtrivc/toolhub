/**
 * percentage-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = PercentageCalculatorClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'part = ( percent / 100 ) × whole'

export const percentageCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'chartTitle': 'Parte frente a total',
      'cmpWhole': 'Total',
      'cmpPart': 'Parte',
      'cmpRemainder': 'Restante',
      'change': 'Cambio',
      'crossesZero': 'Indefinido: el cambio cruza el cero',
      'decrease': 'Disminución',
      'fromOriginal': 'De (original)',
      'increase': 'Aumento',
      'mode1Title': '¿Cuánto es el X% de Y?',
      'mode2Title': '¿Qué porcentaje es X de Y?',
      'mode3Title': 'Cambio porcentual de X a Y',
      'mode4Title': 'Sumar o restar X%',
      'noChange': 'Sin cambio',
      'ofValue': 'Del total',
      'part': 'Parte',
      'percentage': 'Porcentaje (%)',
      'percentageToAdd': 'Porcentaje a sumar',
      'result': 'Resultado',
      'tipNote': '💡 Consejo: deja un campo vacío para tratarlo como 0. Esta calculadora funciona totalmente en tu navegador.',
      'toNew': 'A (nuevo)',
      'value': 'Valor',
      'whole': 'Total',
    },
    useCases: [
      'calcular descuentos, impuestos y propinas',
      'convertir las notas de examen en porcentaje',
      'medir crecimiento, inflación y márgenes',
      'sumar o restar un porcentaje a un precio',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Hallar «un porcentaje de un número»: convierte el porcentaje en decimal y multiplica por el total. A la inversa: porcentaje = parte / total × 100.',
    },
    faqs: [
      { q: '¿Cómo calculo un descuento?', a: 'Usa el modo 1 para hallar el importe del descuento (X % del precio original) y réstalo del original. O usa el modo 4 con un porcentaje negativo para obtener directamente el precio final.' },
      { q: '¿Cómo calculo la propina?', a: 'En el modo 1, introduce el importe de la cuenta como Y y el porcentaje de propina como X. Para una propina del 18 % sobre una cuenta de $45: 18 % de 45 = $8,10.' },
      { q: '¿Cómo calculo el porcentaje de mi examen?', a: 'Usa el modo 2. Introduce tus puntos como la parte y los puntos totales posibles como el total. Con 42 de 50: 42 de 50 es el 84 %.' },
    ],
  },
  de: {
    ui: {
      'chartTitle': 'Teil vs. Ganzes',
      'cmpWhole': 'Ganzes',
      'cmpPart': 'Teil',
      'cmpRemainder': 'Rest',
      'change': 'Änderung',
      'crossesZero': 'Undefiniert – die Änderung geht durch null',
      'decrease': 'Abnahme',
      'fromOriginal': 'Von (Ausgangswert)',
      'increase': 'Zunahme',
      'mode1Title': 'Was sind X% von Y?',
      'mode2Title': 'Wie viel Prozent von Y ist X?',
      'mode3Title': 'Prozentuale Änderung von X zu Y',
      'mode4Title': 'X% addieren oder subtrahieren',
      'noChange': 'Keine Änderung',
      'ofValue': 'Grundwert',
      'part': 'Teil',
      'percentage': 'Prozent (%)',
      'percentageToAdd': 'Zu addierender Prozentsatz',
      'result': 'Ergebnis',
      'tipNote': '💡 Tipp: Ein leeres Feld wird als 0 behandelt. Dieser Rechner läuft vollständig in deinem Browser.',
      'toNew': 'Nach (neuer Wert)',
      'value': 'Wert',
      'whole': 'Ganzes',
    },
    useCases: [
      'Rabatte, Steuern und Trinkgelder berechnen',
      'Prüfungsergebnisse in Prozent umrechnen',
      'Wachstum, Inflation und Margen messen',
      'einen Prozentbetrag auf einen Preis addieren oder abziehen',
    ],
    formula: {
      formula: FORMULA,
      explain: '„Ein Prozentsatz einer Zahl“ finden: Wandle den Prozentsatz in eine Dezimalzahl und multipliziere mit dem Ganzen. Umgekehrt: Prozent = Teil / Ganzes × 100.',
    },
    faqs: [
      { q: 'Wie berechne ich einen Rabatt?', a: 'Nutze Modus 1, um den Rabattbetrag (X % vom Originalpreis) zu ermitteln, und ziehe ihn vom Original ab. Oder verwende Modus 4 mit einem negativen Prozentsatz, um direkt den Endpreis zu erhalten.' },
      { q: 'Wie berechne ich das Trinkgeld?', a: 'Im Modus 1 gib den Rechnungsbetrag als Y und den Trinkgeld-Prozentsatz als X ein. Für 18 % Trinkgeld auf $45: 18 % von 45 = $8,10.' },
      { q: 'Wie berechne ich meine Prüfungsnote in Prozent?', a: 'Nutze Modus 2. Gib deine Punkte als Teil und die maximal erreichbaren Punkte als Ganzes ein. Bei 42 von 50: 42 von 50 ergibt 84 %.' },
    ],
  },
}
