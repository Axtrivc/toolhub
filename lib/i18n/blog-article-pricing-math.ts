/**
 * 《Markup vs. Margin: The Math of Profitable E-commerce and Retail Pricing》
 * Pillar 集群 #8(电商定价,2026-09-05)。
 * 内链:profit-margin-calculator / markup-calculator /
 * reverse-stripe-fee-calculator / ebay-fee-calculator /
 * freelance-rate-calculator / freelance-invoice-generator /
 * discount-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_MARGIN = `// The two ratios that get confused daily
margin = (price - cost) / price    // share of the PRICE
markup = (price - cost) / cost     // share of the COST
//
// cost $40, price $60:
//   margin = 20/60 = 33.3%   |   markup = 20/40 = 50%
//
// Conversions:
//   margin = markup / (1 + markup)
//   price  = cost / (1 - target margin)`

// ── 标题类字段英文原值(articleTitle 三语已回填;breadcrumbTitle 暂以 en 值占位)──
const EN_TITLE = 'Markup vs. Margin: The Math of Profitable E-commerce and Retail Pricing'
const EN_CRUMB_TITLE = 'Markup vs Margin Guide'

export const pricingMathArticle: LocalizedArticle = {
  en: {
    articleTitle: { en: EN_TITLE,  es: 'Markup vs. margen: la matemática de los precios rentables en e-commerce y comercio minorista', de: 'Markup vs. Marge: die Mathematik profitabler Preise im E-Commerce und Einzelhandel' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 10,
    lead: 'Confusing markup with margin is the most expensive arithmetic error in small business — a 50% markup is only a 33% margin, and the gap is where profits leak. This guide nails the formulas, walks the fee stack, and prices a product end to end.',
    sections: [
      {
        heading: '1. Margin vs Markup: Same Dollars, Different Denominators',
        blocks: [
          'Both measure the same gap between cost and price — they just divide by different things. **Margin** divides by the *selling price* (what share of each revenue dollar is profit). **Markup** divides by the *cost* (how much you multiplied up). Buy at $40, sell at $60: margin is 33.3%, markup is 50%.',
          { code: CODE_MARGIN },
          'Why it matters in practice: discounts, fees, and commissions are all charged **on the price**. Your P&L runs on margin. A seller who thinks in markup while paying price-based fees systematically overestimates what is left.',
          {
            card: {
              title: 'Profit Margin Calculator',
              href: '/tools/profit-margin-calculator/',
              desc: 'Margin, markup, and profit from any cost/price pair — see both ratios side by side so the confusion dies here.',
            },
          },
        ],
      },
      {
        heading: '2. Pricing From a Target Margin (Not a Habit)',
        blocks: [
          'Cost-plus habits produce prices like "double it" — keystone pricing (100% markup) is really a 50% margin, which may be wildly wrong for your category. Grocery runs 1–3% net, apparel 50–60% gross, software 80%+ gross. Price from the margin your category requires to survive returns, fees, and marketing.',
          'The working formula is **price = cost ÷ (1 − target margin)**. Need 40% margin on a $25 item? Price = 25 ÷ 0.6 = **$41.67** — not the $35 a "40% markup" habit would produce. The $6.67 difference, times volume, is the business.',
          {
            card: {
              title: 'Markup Calculator',
              href: '/tools/markup-calculator/',
              desc: 'Convert any markup into its true margin (and back) — price from targets, not from habits.',
            },
          },
        ],
      },
      {
        heading: '3. The Fee Stack: What the Platform Actually Takes',
        blocks: [
          'The listed fee is never the real fee. Marketplaces and processors stack: eBay\u2019s final value fee plus payment processing; Stripe\u2019s 2.9% + $0.30; PayPal similar; plus shipping subsidies and return reserves. On a $30 order, **2.9% + $0.30 is really 3.9%** — the flat $0.30 punishes small tickets hardest.',
          'If you need to *net* a specific amount after fees, solving backwards is its own calculation: to pocket $100 after 2.9% + $0.30, you must charge **$103.30**, not $102.90 — the fee applies to the gross including the fee itself.',
          {
            card: {
              title: 'Reverse Stripe Fee Calculator',
              href: '/tools/reverse-stripe-fee-calculator/',
              desc: 'Enter what you want to receive — get the exact amount to charge after percentage + flat fees.',
            },
          },
          {
            card: {
              title: 'eBay Fee Calculator',
              href: '/tools/ebay-fee-calculator/',
              desc: 'Final value fee, payment processing, and promoted listings — the true net on every eBay or Etsy sale.',
            },
          },
        ],
      },
      {
        heading: '4. Freelance Pricing: The Same Math, Dressed as an Invoice',
        blocks: [
          'Freelancers who price "hours × rate" are doing cost-plus with their own time as the cost. The margin lens still applies: your rate must cover non-billable hours, taxes, software, insurance, and unpaid admin — typically **a third to half of working time is non-billable**. A $60/hour employee equivalent needs $90–120/hour as a freelancer to break even on the same life.',
          'Then protect the invoice itself: late fees stated upfront, net-15 not net-60, and a deposit on any engagement over a week. The invoice is a pricing instrument, not paperwork.',
          {
            card: {
              title: 'Freelance Rate Calculator',
              href: '/tools/freelance-rate-calculator/',
              desc: 'The $90–120 answer for your own numbers — hourly and daily rates from income, billable share, and expenses.',
            },
          },
          {
            card: {
              title: 'Freelance Invoice Generator',
              href: '/tools/freelance-invoice-generator/',
              desc: 'Line items, tax, deposits, and late-fee terms in a clean invoice — the last step where the margin is actually collected.',
            },
          },
        ],
      },
      {
        heading: '5. Discount Discipline: The Margin You Give Away',
        blocks: [
          'Discounts are charged on price but paid from margin. At a 40% margin, a **10% discount cuts profit by 25%** — to earn the same profit, unit volume must rise 33%. At a 25% margin, that same 10% discount needs a 67% volume lift. Most discount campaigns never come close; the spreadsheet knew in advance.',
          'The discipline: before any promotion, compute the volume required to hold profit constant. If the campaign cannot plausibly reach it, the promotion is a donation, not marketing.',
          {
            card: {
              title: 'Discount Calculator',
              href: '/tools/discount-calculator/',
              desc: 'Sale price and stacked discounts in one pass — pair it with the margin math before the next promotion goes live.',
            },
          },
        ],
      },
      {
        heading: 'Pricing a Product in Fifteen Minutes',
        blocks: [
          { list: [
            'Total the **true landed cost**: product, packaging, inbound shipping, payment allocation.',
            'Set the **target margin** from your category and fixed-cost load — not from "what feels fair".',
            'Compute price = cost ÷ (1 − margin), then check against comparables.',
            'Subtract the **full fee stack** at that price; if the remainder misses target, re-price.',
            'Before any discount: calculate the volume needed to hold profit; walk away from donations.',
          ] },
        ],
      },
    ],
  },

  es: {
    articleTitle: { en: EN_TITLE,  es: 'Markup vs. margen: la matemática de los precios rentables en e-commerce y comercio minorista', de: 'Markup vs. Marge: die Mathematik profitabler Preise im E-Commerce und Einzelhandel' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 10,
    lead: 'Confundir markup con margin es el error aritmético más caro del pequeño negocio: un markup del 50 % es solo un margen del 33 %, y la diferencia es por donde se fuga el beneficio. Esta guía fija las fórmulas, desmonta la pila de comisiones y pone precio a un producto de principio a fin.',
    sections: [
      {
        heading: '1. Margin vs markup: mismos dólares, distintos denominadores',
        blocks: [
          'Ambas miden la misma brecha entre coste y precio — solo que dividen por cosas distintas. El **margin (margen)** divide entre el *precio de venta* (qué parte de cada dólar de ingreso es beneficio). El **markup (sobreprecio)** divide entre el *coste* (cuánto multiplicas). Comprar a $40 y vender a $60: margen 33,3 %, markup 50 %.',
          { code: CODE_MARGIN },
          'Por qué importa en la práctica: descuentos, comisiones y fees se cobran **sobre el precio**. Tu cuenta de resultados corre sobre el margen. El vendedor que piensa en markup mientras paga comisiones basadas en precio sobreestima sistemáticamente lo que le queda.',
          {
            card: {
              title: 'Calculadora de margen de beneficio',
              href: '/tools/profit-margin-calculator/',
              desc: 'Margen, markup y beneficio desde cualquier par coste/precio — ambas ratios lado a lado para que la confusión muera aquí.',
            },
          },
        ],
      },
      {
        heading: '2. Fijar precio desde un margen objetivo (no desde la costumbre)',
        blocks: [
          'Los hábitos de coste-plus producen precios tipo «el doble» — el keystone pricing (markup del 100 %) es en realidad un margen del 50 %, que puede estar salvajemente mal en tu categoría. Los supermercados corren con 1–3 % neto, la moda con 50–60 % bruto, el software con 80 %+ bruto. Pon el precio desde el margen que tu categoría necesita para sobrevivir a devoluciones, comisiones y marketing.',
          'La fórmula de trabajo: **precio = coste ÷ (1 − margen objetivo)**. ¿Necesitas 40 % de margen sobre un artículo de $25? Precio = 25 ÷ 0,6 = **$41,67** — no los $35 que produce la costumbre del «40 % de markup». La diferencia de $6,67, multiplicada por volumen, es el negocio.',
          {
            card: {
              title: 'Calculadora de markup',
              href: '/tools/markup-calculator/',
              desc: 'Convierte cualquier markup en su margen real (y viceversa) — fija precios desde objetivos, no desde hábitos.',
            },
          },
        ],
      },
      {
        heading: '3. La pila de comisiones: lo que la plataforma realmente se lleva',
        blocks: [
          'La comisión publicada nunca es la real. Marketplaces y procesadores apilan: el final value fee de eBay más el procesamiento; el 2,9 % + $0,30 de Stripe; PayPal similar; más subsidios de envío y reservas por devoluciones. En un pedido de $30, **el 2,9 % + $0,30 es en realidad un 3,9 %** — el fijo de $0,30 castiga más a los tickets pequeños.',
          'Si necesitas *netear* una cantidad tras comisiones, resolver al revés es su propio cálculo: para embolsar $100 tras el 2,9 % + $0,30 debes cobrar **$103,30**, no $102,90 — la comisión se aplica al bruto, que incluye la propia comisión.',
          {
            card: {
              title: 'Calculadora inversa de comisiones Stripe',
              href: '/tools/reverse-stripe-fee-calculator/',
              desc: 'Introduce lo que quieres recibir — obtén la cantidad exacta a cobrar tras porcentaje + fijo.',
            },
          },
          {
            card: {
              title: 'Calculadora de comisiones de eBay',
              href: '/tools/ebay-fee-calculator/',
              desc: 'Comisión de venta, procesamiento y promoción — la ganancia neta real de cada venta en eBay o Etsy.',
            },
          },
        ],
      },
      {
        heading: '4. Precios freelance: la misma matemática, vestida de factura',
        blocks: [
          'El freelance que cobra «horas × tarifa» hace coste-plus con su propio tiempo como coste. La lente del margen sigue aplicándose: tu tarifa debe cubrir horas no facturables, impuestos, software, seguros y administración no pagada — típicamente **entre un tercio y la mitad del tiempo de trabajo no es facturable**. Un equivalente a empleado de $60/hora necesita $90–120/hora como freelance para mantener el mismo nivel de vida.',
          'Luego protege la factura misma: recargos por mora declarados por adelantado, net-15 en lugar de net-60, y un depósito en cualquier encargo de más de una semana. La factura es un instrumento de pricing, no papeleo.',
          {
            card: {
              title: 'Calculadora de Tarifas Freelance',
              href: '/tools/freelance-rate-calculator/',
              desc: 'La respuesta de los $90–120 con tus propios números — tarifas por hora y por día desde salario, parte facturable y gastos.',
            },
          },
          {
            card: {
              title: 'Generador de facturas freelance',
              href: '/tools/freelance-invoice-generator/',
              desc: 'Líneas, impuestos, depósitos y condiciones de mora en una factura limpia — el último paso donde el margen realmente se cobra.',
            },
          },
        ],
      },
      {
        heading: '5. Disciplina de descuentos: el margen que regalas',
        blocks: [
          'Los descuentos se aplican sobre el precio pero se pagan desde el margen. Con un 40 % de margen, un **10 % de descuento recorta el beneficio un 25 %** — para ganar lo mismo, el volumen debe subir un 33 %. Con un 25 % de margen, ese mismo 10 % exige un 67 % más de volumen. La mayoría de campañas ni se acercan; la hoja de cálculo lo sabía de antemano.',
          'La disciplina: antes de cualquier promoción, calcula el volumen necesario para mantener el beneficio. Si la campaña no puede alcanzarlo de forma plausible, la promoción es una donación, no marketing.',
          {
            card: {
              title: 'Calculadora de descuentos',
              href: '/tools/discount-calculator/',
              desc: 'Precio de oferta y descuentos apilados de una vez — combínala con la matemática del margen antes de lanzar la próxima promo.',
            },
          },
        ],
      },
      {
        heading: 'Poner precio a un producto en quince minutos',
        blocks: [
          { list: [
            'Suma el **coste puesto en casa**: producto, embalaje, envío entrante, parte de procesamiento.',
            'Fija el **margen objetivo** desde tu categoría y tu carga de costes fijos — no desde «qué parece justo».',
            'Calcula precio = coste ÷ (1 − margen) y contrástalo con comparables.',
            'Resta la **pila completa de comisiones** a ese precio; si lo que queda no llega al objetivo, reprecia.',
            'Antes de cualquier descuento: calcula el volumen que mantiene el beneficio; di no a las donaciones.',
          ] },
        ],
      },
    ],
  },
  de: {
    articleTitle: { en: EN_TITLE,  es: 'Markup vs. margen: la matemática de los precios rentables en e-commerce y comercio minorista', de: 'Markup vs. Marge: die Mathematik profitabler Preise im E-Commerce und Einzelhandel' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 10,
    lead: 'Markup mit Margin zu verwechseln ist der teuerste Rechenfehler im Kleinunternehmen — ein 50-%-Aufschlag ist nur eine 33-%-Marge, und in der Lücke versickert der Gewinn. Dieser Leitfaden nagelt die Formeln fest, zerlegt den Gebührenstapel und bepreist ein Produkt von Anfang bis Ende.',
    sections: [
      {
        heading: '1. Margin vs. Markup: Gleiche Dollars, andere Nenner',
        blocks: [
          'Beide messen dieselbe Kluft zwischen Kosten und Preis — sie teilen nur durch Verschiedenes. **Margin (Marge)** teilt durch den *Verkaufspreis* (welcher Anteil jedes Umsatz-Dollars Gewinn ist). **Markup (Aufschlag)** teilt durch die *Kosten* (wie stark du hochmultiplizierst). Einkauf $40, Verkauf $60: Marge 33,3 %, Aufschlag 50 %.',
          { code: CODE_MARGIN },
          'Warum das praktisch zählt: Rabatte, Gebühren und Provisionen werden alle **auf den Preis** erhoben. Deine GuV läuft auf Marge. Wer in Markup denkt, aber preisbasierte Gebühren zahlt, überschätzt systematisch, was übrig bleibt.',
          {
            card: {
              title: 'Gewinnmargen-Rechner',
              href: '/tools/profit-margin-calculator/',
              desc: 'Marge, Aufschlag und Gewinn aus jedem Kosten-/Preispaar — beide Kennzahlen nebeneinander, damit die Verwechslung hier stirbt.',
            },
          },
        ],
      },
      {
        heading: '2. Vom Ziel-Margin aus bepreisen (nicht aus Gewohnheit)',
        blocks: [
          'Cost-plus-Gewohnheiten erzeugen Preise wie „verdoppeln“ — Keystone-Pricing (100 % Aufschlag) ist in Wahrheit eine 50-%-Marge, was für deine Kategorie wild falsch sein kann. Lebensmittel laufen auf 1–3 % netto, Bekleidung auf 50–60 % brutto, Software auf 80 %+ brutto. Der Preis folgt der Marge, die deine Kategorie braucht, um Retouren, Gebühren und Marketing zu überleben.',
          'Die Arbeitsformel: **Preis = Kosten ÷ (1 − Zielmarge)**. Brauchst du 40 % Marge auf einen $25-Artikel? Preis = 25 ÷ 0,6 = **$41,67** — nicht die $35, die die „40-%-Aufschlag“-Gewohnheit ergäbe. Die $6,67 Differenz mal Volumen ist das Geschäft.',
          {
            card: {
              title: 'Aufschlags-Rechner',
              href: '/tools/markup-calculator/',
              desc: 'Rechne jeden Aufschlag in seine wahre Marge um (und zurück) — von Zielen bepreisen, nicht von Gewohnheiten.',
            },
          },
        ],
      },
      {
        heading: '3. Der Gebührenstapel: Was die Plattform wirklich nimmt',
        blocks: [
          'Die ausgewiesene Gebühr ist nie die echte. Marktplätze und Prozessoren stapeln: eBays Verkaufsprovision plus Zahlungsabwicklung; Stripes 2,9 % + $0,30; PayPal ähnlich; dazu Versandzuschüsse und Retouren-Rückstellungen. Bei einer $30-Bestellung sind **2,9 % + $0,30 real 3,9 %** — die fixen $0,30 treffen kleine Tickets am härtesten.',
          'Musst du nach Gebühren einen bestimmten Betrag *netto* erhalten, ist das Rückwärtsrechnen eine eigene Rechnung: Um nach 2,9 % + $0,30 genau $100 zu behalten, musst du **$103,30** berechnen, nicht $102,90 — die Gebühr gilt auf das Brutto inklusive der Gebühr selbst.',
          {
            card: {
              title: 'Reverse-Stripe-Gebührenrechner',
              href: '/tools/reverse-stripe-fee-calculator/',
              desc: 'Gib ein, was du erhalten willst — erhalte den exakten Betrag, den du nach Prozentsatz + Fixgebühr berechnen musst.',
            },
          },
          {
            card: {
              title: 'eBay-Gebührenrechner',
              href: '/tools/ebay-fee-calculator/',
              desc: 'Verkaufsprovision, Zahlungsabwicklung und Promoted Listings — der wahre Nettoerlös pro eBay- oder Etsy-Verkauf.',
            },
          },
        ],
      },
      {
        heading: '4. Freelance-Preise: Dieselbe Mathematik als Rechnung verkleidet',
        blocks: [
          'Freelancer, die „Stunden × Satz“ berechnen, betreiben Cost-plus mit der eigenen Zeit als Kostenbasis. Die Margen-Brille gilt trotzdem: Dein Satz muss nicht fakturierbare Stunden, Steuern, Software, Versicherung und unbezahlte Verwaltung decken — typischerweise **ist ein Drittel bis die Hälfte der Arbeitszeit nicht fakturierbar**. Ein $60/Stunde-Angestellten-Äquivalent braucht als Freelancer $90–120/Stunde, um dasselbe Leben zu finanzieren.',
          'Dann schütze die Rechnung selbst: Verzugszinsen vorab genannt, net-15 statt net-60, und eine Anzahlung bei jedem Auftrag über einer Woche. Die Rechnung ist ein Preis-Instrument, kein Papierkram.',
          {
            card: {
              title: 'Freelance-Stundensatz-Rechner',
              href: '/tools/freelance-rate-calculator/',
              desc: 'Die $90–120-Antwort mit deinen eigenen Zahlen — Stunden- und Tagessätze aus Gehalt, fakturierbarem Anteil und Ausgaben.',
            },
          },
          {
            card: {
              title: 'Freelance-Rechnungsgenerator',
              href: '/tools/freelance-invoice-generator/',
              desc: 'Positionen, Steuer, Anzahlungen und Verzugsbedingungen in einer sauberen Rechnung — der letzte Schritt, in dem die Marge tatsächlich eingetrieben wird.',
            },
          },
        ],
      },
      {
        heading: '5. Rabatt-Disziplin: Die Marge, die du verschenkst',
        blocks: [
          'Rabatte werden auf den Preis gewährt, aber aus der Marge bezahlt. Bei 40 % Marge kostet ein **10-%-Rabatt 25 % des Gewinns** — für denselben Gewinn muss das Volumen um 33 % steigen. Bei 25 % Marge braucht derselbe 10-%-Rabatt 67 % mehr Volumen. Die meisten Aktionen kommen nicht annähernd hin; die Tabelle wusste es vorher.',
          'Die Disziplin: Vor jeder Promotion das Volumen berechnen, das den Gewinn konstant hält. Kann die Kampagne das nicht plausibel erreichen, ist die Aktion eine Spende, kein Marketing.',
          {
            card: {
              title: 'Rabattrechner',
              href: '/tools/discount-calculator/',
              desc: 'Aktionspreis und gestapelte Rabatte in einem Durchgang — vor der nächsten Aktion mit der Margenmathematik kombinieren.',
            },
          },
        ],
      },
      {
        heading: 'Ein Produkt in fünfzehn Minuten bepreisen',
        blocks: [
          { list: [
            'Summiere die **wahren Einstandskosten**: Ware, Verpackung, Inbound-Versand, Zahlungsanteil.',
            'Setze die **Zielmarge** aus Kategorie und Fixkostenlast — nicht aus „was fair wirkt“.',
            'Rechne Preis = Kosten ÷ (1 − Marge) und prüfe gegen Vergleichsangebote.',
            'Ziehe den **vollen Gebührenstapel** bei diesem Preis ab; verfehlt der Rest das Ziel, neu bepreisen.',
            'Vor jedem Rabatt: das gewinnhaltende Volumen berechnen; Spenden ablehnen.',
          ] },
        ],
      },
    ],
  },
}
