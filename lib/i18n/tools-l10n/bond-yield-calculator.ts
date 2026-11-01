/**
 * bond-yield-calculator 本地化 bundle —— zh / es / de(2025-10 B2 投资与交易批次)
 */
import type { ToolL10n } from '../tool-l10n'

export const BondYieldCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular la rentabilidad corriente de un bono a su precio de mercado', 'estimar la TIR (YTM) de un bono con descuento o con prima', 'ver la diferencia entre cupón contractual y rentabilidad real', 'desglosar el cupón frente a la ganancia por convergencia al nominal'],
    faqs: [
      { q: '¿En qué se diferencian la rentabilidad corriente y la TIR?', a: 'La corriente es cupón anual ÷ precio, e ignora lo que ocurre al vencimiento. La TIR además anualiza el tirón hacia el nominal: en un bono con descuento la TIR supera a la corriente; con prima es al revés.' },
      { q: '¿Cómo de precisa es la TIR de aquí?', a: 'Usa la fórmula clásica aproximada [C + (N−P)/n] ÷ [(N+P)/2]. Con el precio dentro del ±10 % del nominal difiere de la solución exacta en pocos puntos básicos; en descuentos profundos o plazos muy largos el error crece.' },
      { q: '¿Por qué el precio va en sentido contrario a los tipos?', a: 'El cupón es fijo: cuando las emisiones nuevas pagan más, el bono antiguo tiene que abaratarse para competir. Por eso el precio de mercado es un dato de entrada, no una constante.' },
      { q: '¿Qué queda fuera del cálculo?', a: 'El cupón semestral (convención de EE. UU., que subestima algo la rentabilidad efectiva), el interés devengado (precio limpio vs sucio), el riesgo de crédito y las cláusulas de recompra.' },
    ],
    ui: {
      'in.face': 'Valor nominal (par)',
      'in.coupon': 'Cupón anual',
      'in.price': 'Precio de mercado (limpio)',
      'in.years': 'Años hasta el vencimiento',
      'out.currentYield': 'Rentabilidad corriente',
      'out.ytm': 'TIR (aproximada)',
      'out.annualCoupon': 'Cupón anual',
      'out.totalCoupons': 'Cupones totales hasta el vencimiento',
      'out.capitalGain': 'Ganancia/pérdida al vencimiento',
      'chartTitle': 'Lo que pagas vs lo que recibes',
      'cmp.0': 'Pagas hoy',
      'cmp.1': 'Recibes hasta el vencimiento',
      'preset.0': 'Bono con descuento',
      'preset.1': 'Bono con prima',
      'preset.2': 'Bono a la par',
      'errInvalid': 'Introduce nominal y precio positivos, 1-50 años',
      'note': '📉 La rentabilidad corriente = cupón ÷ precio, sin contar el vencimiento. La TIR usa la fórmula clásica aproximada: anualiza cupón más el tirón hacia el nominal, asume cupones anuales y queda a pocos puntos básicos de la TIR exacta en rangos de precio habituales.',
    },
  },
  de: {
    useCases: ['die laufende Rendite einer Anleihe zum Marktpreis berechnen', 'die Umlaufrendite (YTM) einer Diskont- oder Prämieanleihe schätzen', 'den Unterschied zwischen Nominalcoupon und tatsächlicher Rendite sehen', 'Kupon und Zuziehung zum Nennwert aufschlüsseln'],
    faqs: [
      { q: 'Was unterscheidet Laufzeit- und laufende Rendite?', a: 'Die laufende Rendite ist Jahreskupons ÷ Preis und ignoriert die Rückzahlung. Die Umlaufrendite annualisiert zusätzlich den Pull-to-Par-Effekt: Bei Diskontanleihen liegt sie über der laufenden, bei Prämieanleihen darunter.' },
      { q: 'Wie genau ist die YTM hier?', a: 'Es gilt die klassische Näherung [C + (N−P)/n] ÷ [(N+P)/2]. Innerhalb von ±10 % um den Nennwert weicht sie nur um wenige Basispunkte von der exakten Lösung ab; bei tiefem Diskont oder sehr langer Laufzeit wächst der Fehler.' },
      { q: 'Warum bewegt sich der Kurs gegen die Zinsen?', a: 'Der Kupon ist fix: Zahlen neue Emissionen mehr, muss die alte Anleihe billiger werden, um konkurrenzfähig zu bleiben — der Marktpreis ist also Eingabe, keine Konstante.' },
      { q: 'Was fehlt in der Rechnung?', a: 'Halbjahreskupons (US-Konvention, unterschätzt die Effektivrendite leicht), Stückzinsen (Clean vs. Dirty Price), Bonitätsrisiko und Kündigungsrechte.' },
    ],
    ui: {
      'in.face': 'Nennwert (Nominal)',
      'in.coupon': 'Jahrescoupon',
      'in.price': 'Marktpreis (Clean)',
      'in.years': 'Jahre bis Fälligkeit',
      'out.currentYield': 'Laufende Rendite',
      'out.ytm': 'Umlaufrendite (YTM, näherungsweise)',
      'out.annualCoupon': 'Kuponertrag pro Jahr',
      'out.totalCoupons': 'Kupons bis Fälligkeit',
      'out.capitalGain': 'Gewinn/Verlust bei Fälligkeit',
      'chartTitle': 'Heute zahlen vs. bis Fälligkeit erhalten',
      'cmp.0': 'Heute zahlen',
      'cmp.1': 'Bis Fälligkeit erhalten',
      'preset.0': 'Diskontanleihe',
      'preset.1': 'Prämieanleihe',
      'preset.2': 'Pari-Anleihe',
      'errInvalid': 'Positiven Nennwert und Preis eingeben, 1–50 Jahre',
      'note': '📉 Laufende Rendite = Kupon ÷ Preis, ohne die Rückzahlung. Die YTM nutzt die klassische Näherungsformel — sie annualisiert Kupon plus Pull-to-Par-Effekt, unterstellt Jahreskupons und liegt bei üblichen Preisen nur wenige Basispunkte neben der exakten IRR.',
    },
  },
}
