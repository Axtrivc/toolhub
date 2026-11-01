/**
 * mortgage-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts、
 * MortgageCalculatorClient 配置里的英文 fallback、content.tsx 的 en 分支)。
 *
 * 覆盖:faqs(可见)+ ui(交互界面)+ useCases(Common uses)+ formula(公式区)。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'M = P × [ r(1 + r)^n ] / [ (1 + r)^n − 1 ]'

export const mortgageCalculatorL10n: ToolL10n = {


  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'ver un simulador de hipoteca con PMI e impuestos',
      'calcular la cuota según el pago inicial',
      'estimar la cuota mensual con impuestos y seguro',
      'calcular el pago de la hipoteca con PMI',
    ],
    faqs: [
      {
        q: '¿Incluye esta calculadora el PMI, los impuestos y el seguro?',
        a: 'Sí. Introduce tu impuesto a la propiedad anual, el seguro del hogar anual, la cuota mensual de la comunidad y una tasa de PMI (0,5 % anual es habitual). El PMI solo se añade automáticamente cuando tu pago inicial es inferior al 20 %; con un 20 % o más, queda en 0 $. El resultado destacado es tu cuota PITI completa, con cada componente desglosado por separado.',
      },
      {
        q: '¿Elijo una hipoteca a 15 o a 30 años?',
        a: '30 años si necesitas cuotas más bajas o quieres invertir la diferencia; 15 años si te lo puedes permitir y quieres ahorrar muchísimo en intereses. Mucha gente elige 30 años y paga extra cuando puede — así obtienes la cuota obligatoria más baja del plazo de 30 años con gran parte del ahorro en intereses del de 15, además de la flexibilidad de dejar de pagar extra si el dinero escasea.',
      },
      {
        q: '¿Cuánta casa puedo permitirme?',
        a: 'Una pauta habitual: tu pago mensual total de vivienda (PITI) debe estar por debajo del 28 % de los ingresos mensuales brutos, y todos los pagos de deudas por debajo del 36 %. Con ingresos de 100 000 $ al año, eso es aproximadamente 2 300 $/mes de PITI. Pero la capacidad también depende del pago inicial, las deudas existentes, el puntaje de crédito, los impuestos locales y otros gastos. Usa la regla 28/36 como un techo inicial, no como meta.',
      },
      {
        q: '¿Qué puntaje de crédito necesito para una hipoteca?',
        a: 'Los préstamos convencionales suelen exigir 620 o más. Los préstamos FHA aceptan puntajes desde 580 (a veces 500 con un 10 % de pago inicial). Pero la tasa que consigues mejora notablemente con tu puntaje: un puntaje de 760 o más puede significar una tasa más de 0,5 % inferior a la de un 680, ahorrando decenas de miles a lo largo del préstamo. Antes de solicitarla, revisa tu puntaje y corrige cualquier error del informe.',
      },
      {
        q: '¿Ayuda hacer pagos extra?',
        a: 'Sí, y mucho. Los pagos extra van directos al capital (confirma con tu prestamista que no haya penalización por amortización anticipada). En una vivienda de 400 000 $ con un 20 % de entrada a 30 años y 6,8 % (préstamo de 320 000 $), pagar 200 $ extra al mes recorta unos 7 años de plazo y ahorra aproximadamente 113 000 $ en intereses. Incluso un pago completo adicional al año supone una diferencia notable. Usa el campo de pago extra mensual para simularlo en tu propio préstamo: verás la nueva fecha de amortización, los intereses ahorrados y los meses recortados.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Cuota mensual de la hipoteca (amortización). P = capital del préstamo, r = tasa mensual, n = número de meses. Esta herramienta añade además estimaciones de PMI, impuesto a la propiedad y seguro.',
    },
    ui: {
      errYears: 'Los años deben ser mayores que 0',
      errPayoffCap: 'No se amortiza en 600 meses',
      errHomePrice: 'El precio de la vivienda debe ser mayor que 0',
      errDownOver100: 'El pago inicial no puede superar el 100 %',
      errNonNegative: 'Los valores no pueden ser negativos',
      errInvalidInput: 'Introduce números válidos en todos los campos',
      errRateMax: 'La tasa de interés no puede superar el 100 %',
      'in.home': 'Precio de la vivienda',
      'in.down': 'Pago inicial',
      'in.rate': 'Tasa de interés',
      'in.years': 'Plazo del préstamo',
      'inSuffix.years': 'años',
      'in.tax': 'Impuesto a la propiedad (al año)',
      'in.insurance': 'Seguro del hogar (al año)',
      'in.hoa': 'Cuota de comunidad (al mes)',
      'in.pmiRate': 'Tasa de PMI (al año)',
      'in.extra': 'Pago extra mensual',
      'out.piti': 'Cuota mensual total (PITI)',
      'out.monthly': 'Pago mensual (P&I)',
      'out.loan': 'Importe del préstamo',
      'out.total': 'Intereses totales',
      'out.taxM': 'Impuesto / mes',
      'out.insM': 'Seguro / mes',
      'out.pmiM': 'PMI / mes',
      'out.hoaM': 'Comunidad / mes',
      'out.payoff': 'Amortización con pago extra',
      'out.saved': 'Intereses ahorrados con el pago extra',
      'out.timeSaved': 'Tiempo ahorrado',
      'outSub.pmiM': '$0 automático con 20 % o más inicial',
      'outSub.payoff': 'Introduce un pago extra > 0 $',
      monthsOne: '1 mes',
      monthsN: '{m} meses',
      yrsN: '{y} años',
      monthsYrs: '{m} meses ({y})',
      note: '🏠 El PMI solo se añade automáticamente cuando el pago inicial es inferior al 20 % (LTV superior al 80 %); con un 20 % o más es 0 $. El impuesto y el seguro anuales se dividen entre 12; la cuota de comunidad es mensual. Los pagos extra van directos al capital.',
      chartTitle: 'Total pagado: capital frente a intereses',
      chartCenter: 'Total',
      'slice.principal': 'Capital (importe del préstamo)',
      'slice.total': 'Interés (coste del préstamo)',
      chartTitleBalance: 'Saldo del préstamo en el tiempo',
      'preset.0': 'Fijo 30 años (6.8%)',
      'preset.1': 'Fijo 15 años (6.1%)',
      'preset.2': 'Préstamo FHA (3.5% inicial)',
      'preset.3': 'Jumbo ($1M)',
      'line.base': 'Pagos estándar',
      'line.extra': 'Con pagos extra',
      'band.base-extra': 'Brecha cerrada por pagos extra',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'einen Hypothekenrechner mit PMI und Steuern nutzen',
      'die Monatsrate nach Anzahlung berechnen',
      'die Monatsrate mit Steuern und Versicherung schätzen',
      'die Hypothekenrate mit PMI berechnen',
    ],
    faqs: [
      {
        q: 'Enthält dieser Rechner PMI, Grundsteuer und Versicherung?',
        a: 'Ja. Gib deine jährliche Grundsteuer, die jährliche Wohngebäudeversicherung, das monatliche Hausgeld und einen PMI-Satz ein (0,5 % pro Jahr sind üblich). PMI wird nur automatisch hinzugefügt, wenn die Anzahlung unter 20 % liegt — ab 20 % fällt es auf 0 $. Das hervorgehobene Ergebnis ist deine vollständige PITI-Rate, jede Komponente einzeln aufgeschlüsselt.',
      },
      {
        q: 'Soll ich eine 15- oder 30-jährige Hypothek wählen?',
        a: '30 Jahre, wenn du niedrigere Raten brauchst oder die Differenz investieren willst; 15 Jahre, wenn du dir die höhere Rate leisten kannst und massiv Zinsen sparen willst. Viele nehmen 30 Jahre und tilgen zusätzlich, wenn sie können — so bekommst du die niedrigere Pflichtrate der 30 Jahre mit einem Großteil der Zinsersparnis der 15 Jahre, plus die Flexibilität, die Sondertilgung zu stoppen, wenn das Geld knapp wird.',
      },
      {
        q: 'Wie viel Haus kann ich mir leisten?',
        a: 'Eine gängige Faustregel: Deine monatliche Wohnbelastung insgesamt (PITI) sollte unter 28 % des monatlichen Bruttoeinkommens liegen, alle Schuldentilgungen unter 36 %. Bei 100 000 $ Jahreseinkommen sind das rund 2 300 $/Monat für PITI. Die Tragbarkeit hängt aber auch von Anzahlung, bestehenden Schulden, Bonitätsscore, lokaler Grundsteuer und anderen Lebenshaltungskosten ab. Nutze die 28/36-Regel als obere Orientierung, nicht als Ziel.',
      },
      {
        q: 'Welchen Bonitätsscore brauche ich für eine Hypothek?',
        a: 'Konventionelle Kredite verlangen meist 620 oder mehr. FHA-Kredite nehmen Scores ab 580 (manchmal 500 mit 10 % Anzahlung). Aber der Zins, den du bekommst, verbessert sich deutlich mit deinem Score — ein Score ab 760 kann einen über 0,5 % niedrigeren Zins bedeuten als ein 680er, was über die Laufzeit Zehntausende Dollar spart. Vor der Antragstellung solltest du deinen Score prüfen und Fehler im Bericht korrigieren.',
      },
      {
        q: 'Hilft Sondertilgung?',
        a: 'Ja, erheblich. Zusätzliche Zahlungen gehen direkt auf den Kredit (kläre vorher mit dem Kreditgeber, dass keine Vorfälligkeitsentschädigung anfällt). Bei einer 400 000 $-Immobilie mit 20 % Anzahlung über 30 Jahre und 6,8 % (Kredit: 320 000 $) kürzt eine Sondertilgung von 200 $/Monat die Laufzeit um etwa 7 Jahre und spart rund 113 000 $ Zinsen. Schon eine zusätzliche Vollrate pro Jahr macht einen spürbaren Unterschied. Simuliere es mit dem Feld für die zusätzliche Monatsrate an deinem eigenen Kredit: du siehst das neue Tilgungsende, die gesparten Zinsen und die gekürzten Monate.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain:
        'Monatliche Hypothekenrate (Annuitätentilgung). P = Kreditbetrag, r = monatlicher Zins, n = Anzahl der Monate. Dieses Werkzeug rechnet zusätzlich Schätzungen für PMI, Grundsteuer und Versicherung darauf.',
    },
    ui: {
      errYears: 'Die Laufzeit muss größer als 0 sein',
      errPayoffCap: 'Innerhalb von 600 Monaten nicht getilgt',
      errHomePrice: 'Der Hauspreis muss größer als 0 sein',
      errDownOver100: 'Die Anzahlung darf 100 % nicht überschreiten',
      errNonNegative: 'Werte dürfen nicht negativ sein',
      errInvalidInput: 'Bitte in allen Feldern gültige Zahlen eingeben',
      errRateMax: 'Der Zinssatz darf 100 % nicht überschreiten',
      'in.home': 'Hauspreis',
      'in.down': 'Anzahlung',
      'in.rate': 'Zinssatz',
      'in.years': 'Laufzeit',
      'inSuffix.years': 'Jahre',
      'in.tax': 'Grundsteuer (pro Jahr)',
      'in.insurance': 'Wohngebäudeversicherung (pro Jahr)',
      'in.hoa': 'Hausgeld (pro Monat)',
      'in.pmiRate': 'PMI-Satz (pro Jahr)',
      'in.extra': 'Zusätzliche Monatsrate',
      'out.piti': 'Gesamte Monatsrate (PITI)',
      'out.monthly': 'Monatsrate (Tilgung + Zins)',
      'out.loan': 'Kreditbetrag',
      'out.total': 'Zinsen gesamt',
      'out.taxM': 'Grundsteuer / Monat',
      'out.insM': 'Versicherung / Monat',
      'out.pmiM': 'PMI / Monat',
      'out.hoaM': 'Hausgeld / Monat',
      'out.payoff': 'Tilgung mit Sondertilgung',
      'out.saved': 'Durch Sondertilgung gesparte Zinsen',
      'out.timeSaved': 'Gesparte Zeit',
      'outSub.pmiM': 'Ab 20 % Anzahlung automatisch 0 $',
      'outSub.payoff': 'Sondertilgung > 0 $ eingeben',
      monthsOne: '1 Monat',
      monthsN: '{m} Monate',
      yrsN: '{y} Jahre',
      monthsYrs: '{m} Monate ({y})',
      note: '🏠 PMI wird nur automatisch hinzugefügt, wenn die Anzahlung unter 20 % liegt (LTV über 80 %) — ab 20 % sind es 0 $. Grundsteuer und Versicherung sind Jahresbeträge ÷ 12; das Hausgeld ist monatlich. Sondertilgungen gehen direkt auf den Kredit.',
      chartTitle: 'Gesamte Zahlungen: Tilgung vs. Zinsen',
      chartCenter: 'Gesamt',
      'slice.principal': 'Tilgung (Kreditbetrag)',
      'slice.total': 'Zins (Kosten des Kredits)',
      chartTitleBalance: 'Kreditsaldo über die Zeit',
      'preset.0': '30 Jahre fest (6.8 %)',
      'preset.1': '15 Jahre fest (6.1 %)',
      'preset.2': 'FHA-Kredit (3.5 % Anzahlung)',
      'preset.3': 'Jumbo-Kredit (1 Mio. $)',
      'line.base': 'Standard-Raten',
      'line.extra': 'Mit Sondertilgung',
      'band.base-extra': 'Vorsprung durch Sondertilgung',
    },
  },
}
