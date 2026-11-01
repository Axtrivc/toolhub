/**
 * profit-margin-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'Margin = Profit ÷ Price · Markup = Profit ÷ Cost · Price = Cost ÷ (1 − Margin)'

export const profitMarginCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.cost': 'Coste unitario',
      'in.mode': 'Segundo dato conocido',
      'in.value': 'Valor conocido',
      'opt.mode.price': 'Precio de venta',
      'opt.mode.margin': 'Margen de beneficio (% del precio)',
      'opt.mode.markup': 'Recargo (% del coste)',
      'out.price': 'Precio de venta',
      'out.profit': 'Beneficio por unidad',
      'out.margin': 'Margen de beneficio',
      'outSub.margin': 'Beneficio ÷ precio',
      'out.markup': 'Recargo (Markup)',
      'outSub.markup': 'Beneficio ÷ coste',
      'out.multiplier': 'Multiplicador de coste',
      'preset.0': 'Recargo Keystone (100%)',
      'preset.1': 'Objetivo de margen del 50%',
      'preset.2': 'Regla minorista (30% margen)',
      'errInvalid': 'El coste debe ser mayor que 0',
      'errBelowCost': 'El precio de venta está por debajo del coste — no hay beneficio posible',
      'errMarginRange': 'El margen debe estar entre 0% y 100%',
      'errNonNegative': 'El recargo no puede ser negativo',
      'inSuffix.cost': '$',
      'chartCenter': 'Precio',
      'slice.costOut': 'Coste',
      'slice.profit': 'Beneficio',
      'chartTitle': 'Precio de venta: Coste vs Beneficio',
      'note': '💡 Margen (Margin) y recargo (Markup) NO son lo mismo: un recargo del 100% solo supone un margen del 50%. El margen divide el beneficio entre el PRECIO; el recargo divide entre el COSTE.',
    },
    useCases: [
      'corregir el error clásico: coste 60 € y quieres 40 % de margen — 60×1,4=84 está mal; el precio correcto es 60÷0,6=100 €',
      'fijar precio online: 45 € de compra + 6 € de envío + 5 € de comisión, coste 56 €; con 35 % de margen salen 86,15 €',
      'convertir entre bases: duplicar el coste (markup 100 %) solo es un margen del 50 %; aclara la base antes de negociar',
      'auditar un SKU: precio 199 €, coste 120 € — margen 39,7 %, markup 65,8 % — y decidir si toca repreciar',
    ],
    faqs: [
      {
        q: '¿Diferencia entre margen y markup?',
        a: 'El margen es beneficio dividido por precio de venta; el markup, beneficio dividido por coste. Un markup del 100 % (coste × 2) equivale a un margen del 50 %. Confundirlos es el error de precios más común — la herramienta convierte en ambos sentidos al instante.',
      },
      {
        q: '¿Cómo fijo el precio para un margen objetivo?',
        a: 'Divide el coste entre (1 − margen objetivo). Para un 40 % sobre 40 €: 40 ÷ 0,60 = 66,67 €. Elige el modo «margen», mete 40, y precio, markup y beneficio por unidad se rellenan solos.',
      },
      {
        q: '¿Es margen bruto o neto?',
        a: 'Bruto — solo usa el coste de la mercancía. El margen neto resta además gastos operativos, envío, impuestos y comisiones. Quien vende en marketplace debe sumar las comisiones de plataforma al coste antes de calcular para ver un margen real.',
      },
      {
        q: '¿Qué margen es razonable?',
        a: 'Depende del sector: alimentación 2-5 %, moda 50-60 %, software y servicios 70-90 %. Compara con el margen bruto típico de tu actividad y mete en el coste todo lo variable (comisiones, envío, devoluciones), no solo el precio de compra.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'La misma ganancia dividida por el precio es el margen; dividida por el coste, el markup: 100 % de markup = 50 % de margen. Para un margen objetivo m, precio = coste ÷ (1 − m).',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.cost': 'Stückkosten',
      'in.mode': 'Zweiter bekannter Wert',
      'in.value': 'Bekannter Wert',
      'opt.mode.price': 'Verkaufspreis',
      'opt.mode.margin': 'Gewinnmarge (% des Preises)',
      'opt.mode.markup': 'Aufschlag (% der Kosten)',
      'out.price': 'Verkaufspreis',
      'out.profit': 'Gewinn pro Einheit',
      'out.margin': 'Gewinnmarge',
      'outSub.margin': 'Gewinn ÷ Preis',
      'out.markup': 'Aufschlag (Markup)',
      'outSub.markup': 'Gewinn ÷ Kosten',
      'out.multiplier': 'Kostenmultiplikator',
      'preset.0': 'Keystone-Aufschlag (100%)',
      'preset.1': '50% Margenziel',
      'preset.2': 'Einzelhandelsregel (30% Marge)',
      'errInvalid': 'Kosten müssen größer als 0 sein',
      'errBelowCost': 'Verkaufspreis liegt unter den Kosten — kein Gewinn möglich',
      'errMarginRange': 'Marge muss zwischen 0% und 100% liegen',
      'errNonNegative': 'Aufschlag darf nicht negativ sein',
      'inSuffix.cost': '$',
      'chartCenter': 'Preis',
      'slice.costOut': 'Kosten',
      'slice.profit': 'Gewinn',
      'chartTitle': 'Verkaufspreis: Kosten vs. Gewinn',
      'note': '💡 Marge und Aufschlag sind NICHT dasselbe: Ein Aufschlag von 100% (Verdopplung der Kosten) entspricht lediglich einer Marge von 50%. Die Marge teilt den Gewinn durch den PREIS; der Aufschlag durch die KOSTEN.',
    },
    useCases: [
      'den klassischen Kalkulationsfehler korrigieren: Kosten 60 €, Ziel 40 % Marge — 60×1,4=84 ist falsch, richtig: 60÷0,6=100 €',
      'Online-Preise kalkulieren: 45 € Einkauf + 6 € Versand + 5 € Provision = 56 € Kosten; bei 35 % Marge: 86,15 €',
      'Basen umrechnen: Kosten verdoppeln (100 % Aufschlag) heißt nur 50 % Marge — vor jeder Verhandlung klären, welche Basis gemeint ist',
      'SKU prüfen: Preis 199 €, Kosten 120 € — Marge 39,7 %, Aufschlag 65,8 % — und über eine Anpassung entscheiden',
    ],
    faqs: [
      {
        q: 'Worin unterscheiden sich Marge und Aufschlag?',
        a: 'Marge ist Gewinn geteilt durch Verkaufspreis, Aufschlag (Markup) Gewinn geteilt durch Kosten. 100 % Aufschlag (Kosten × 2) entsprechen 50 % Marge. Die Verwechslung ist der häufigste Preisfehler — das Tool rechnet beide Richtungen sofort um.',
      },
      {
        q: 'Wie kalkuliere ich auf eine Zielmarge?',
        a: 'Kosten teilen durch (1 − Zielmarge). Für 40 % auf 40 €: 40 ÷ 0,60 = 66,67 €. Modus »Gewinnmarge« wählen, 40 eingeben — Preis, Aufschlag und Stückgewinn füllen sich von selbst.',
      },
      {
        q: 'Ist das Brutto- oder Nettomarge?',
        a: 'Bruttomarge — sie nutzt nur die Wareneinsatzkosten. Die Nettomarge zieht zusätzlich Betriebsausgaben, Versand, Steuern und Gebühren ab. Marketplace-Händler sollten Plattformgebühren zuerst in die Kosten aufnehmen, um eine ehrliche Marge zu sehen.',
      },
      {
        q: 'Welche Marge ist branchenüblich?',
        a: 'Grob: Lebensmittel 2-5 %, Mode 50-60 %, Software und Dienstleistungen 70-90 %. Vergleiche dich mit der Bruttomarge deiner Branche und rechne mit vollständigen variablen Kosten (Provisionen, Versand, Retouren) — nicht nur mit dem Einkaufspreis.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Derselbe Gewinn geteilt durch den Verkaufspreis heißt Marge, geteilt durch die Kosten heißt Aufschlag: 100 % Aufschlag = 50 % Marge. Für eine Zielmarge m gilt: Preis = Kosten ÷ (1 − m).',
    },
  },
}
