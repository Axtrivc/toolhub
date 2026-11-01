/**
 * treasury-bill-calculator 本地化 bundle —— zh / es / de(2025-10 B2 投资与交易批次)
 */
import type { ToolL10n } from '../tool-l10n'

export const TreasuryBillCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular el precio de compra con descuento en una subasta de letras', 'convertir la tasa de descuento en rendimiento de inversión comparable (base 365)', 'comparar plazos de 4 / 13 / 26 / 52 semanas', 'estimar el interés que recibirás manteniendo hasta el vencimiento'],
    faqs: [
      { q: '¿Por qué hay dos rendimientos?', a: 'La subasta cotiza el rendimiento bancario de descuento: descuento ÷ valor nominal × (360/días), año de 360. El rendimiento de inversión divide por el precio que pagaste y anualiza con 365 días — es el comparable honesto con depósitos y bonos, y siempre es algo mayor.' },
      { q: '¿Cómo se determina el precio de compra?', a: 'Precio = nominal × (1 − tasa × días/360). Por ejemplo, una letra de 13 semanas al 4,5 % cuesta 988,63 $ por cada 1.000 $ nominales.' },
      { q: '¿Cómo se gravan las letras del Tesoro?', a: 'El interés está exento de impuestos estatales y locales, pero tributa íntegro en el federal (se declara en el 1099-INT). Comprar en el mercado secundario con prima o descuento cambia el tratamiento.' },
      { q: '¿Qué pasa si vendo antes del vencimiento?', a: 'Recibes el precio de mercado, que se mueve con los tipos: solo manteniendo hasta el vencimiento el rendimiento queda bloqueado. Las letras cortas tienen poca sensibilidad a tipos, pero no cero.' },
    ],
    ui: {
      'in.face': 'Valor nominal al vencimiento',
      'in.rate': 'Tasa de descuento anual',
      'in.days': 'Días hasta el vencimiento',
      'out.price': 'Precio de compra',
      'out.interest': 'Interés por descuento',
      'out.per100': 'Precio por 100 $ nominales',
      'out.invYield': 'Rendimiento de inversión (365 días)',
      'out.discYield': 'Rendimiento bancario de descuento (360 días)',
      'chartTitle': 'Composición del valor nominal',
      'chartCenter': 'Nominal',
      'slice.price': 'Precio de compra',
      'slice.interest': 'Interés del descuento',
      'preset.0': 'Letra de 4 semanas',
      'preset.1': 'Letra de 13 semanas',
      'preset.2': 'Letra de 26 semanas',
      'preset.3': 'Letra de 52 semanas',
      'errInvalid': 'Introduce un nominal positivo y un plazo de hasta dos años',
      'errDeep': 'La tasa de descuento × plazo supera el valor nominal',
      'note': '🏦 Las letras no pagan cupones: se compran con descuento y cobras el nominal al vencimiento. La tasa de subasta es el rendimiento bancario de descuento (año 360, sobre el nominal); el rendimiento de inversión (365 días, sobre lo que pagaste) es el comparable honesto y siempre es algo mayor.',
    },
  },
  de: {
    useCases: ['den Diskont-Kaufpreis einer T-Bill-Auktion berechnen', 'die Diskontrate in ein vergleichbares Anlagerendite (365-Tage-Basis) umrechnen', 'Laufzeiten von 4 / 13 / 26 / 52 Wochen vergleichen', 'die Zinsen bis zur Fälligkeit abschätzen'],
    faqs: [
      { q: 'Warum gibt es zwei Renditen?', a: 'Die Auktion notiert die Bank-Diskontrendite: Disagio ÷ Nennwert × (360/Tage) auf 360-Tage-Jahr. Die Anlagerendite teilt durch den tatsächlich gezahlten Preis und annualisiert mit 365 Tagen — der ehrliche Vergleich mit Festgeld und Anleihen, stets etwas höher.' },
      { q: 'Wie ergibt sich der Kaufpreis?', a: 'Preis = Nennwert × (1 − Satz × Tage/360). Eine 13-Wochen-Bill mit 4,5 % Diskontsatz kostet z. B. 988,63 $ je 1.000 $ Nennwert.' },
      { q: 'Wie werden T-Bills besteuert?', a: 'Die Zinsen sind von Landes- und Kommunalsteuer befreit, aber voll bundessteuerpflichtig (1099-INT). Kauf über die Börse mit Auf-/Abschlag behandelt es anders.' },
      { q: 'Was passiert bei vorzeitigem Verkauf?', a: 'Du bekommst den Marktpreis, der mit den Zinsen schwankt — nur das Halten bis Fälligkeit lockert die Rendite. Kurze Bills haben geringe, aber keine Zinssensitivität.' },
    ],
    ui: {
      'in.face': 'Nennwert bei Fälligkeit',
      'in.rate': 'Jahres-Diskontsatz',
      'in.days': 'Tage bis Fälligkeit',
      'out.price': 'Kaufpreis',
      'out.interest': 'Diskontzins-Ertrag',
      'out.per100': 'Preis je 100 $ Nennwert',
      'out.invYield': 'Anlagerendite (365 Tage)',
      'out.discYield': 'Bank-Diskontrendite (360 Tage)',
      'chartTitle': 'Wohin der Nennwert geht',
      'chartCenter': 'Nennwert',
      'slice.price': 'Kaufpreis',
      'slice.interest': 'Diskontzins',
      'preset.0': '4-Wochen-Bill',
      'preset.1': '13-Wochen-Bill',
      'preset.2': '26-Wochen-Bill',
      'preset.3': '52-Wochen-Bill',
      'errInvalid': 'Positiven Nennwert und eine Laufzeit von bis zu zwei Jahren eingeben',
      'errDeep': 'Diskontsatz × Laufzeit übersteigt den Nennwert',
      'note': '🏦 Bills zahlen keine Kupons — diskontiert kaufen, Nennwert bei Fälligkeit erhalten. Der Auktionssatz ist die Bank-Diskontrendite (360-Tage-Jahr, auf Nennwert); die Anlagerendite (365 Tage, auf den real gezahlten Preis) ist der ehrliche Vergleich und immer etwas höher.',
    },
  },
}
