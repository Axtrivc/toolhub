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
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '纠正常见报价错误:成本 60 元想留 40% 毛利,60×1.4=84 是错的,正确售价是 60÷0.6=100 元',
      '电商算价:进货 45 + 快递 6 + 平台佣金约 5,变动成本 56 元,按 35% 毛利定价约 86.2 元',
      '换算口径:成本翻倍(100% 加价率)只是 50% 毛利率,谈判前先确认对方说的是哪个',
      '复盘 SKU:售价 199、成本 120,毛利 79、毛利率 39.7%、加价率 65.8%,决定要不要调价',
    ],
    faqs: [
      {
        q: '毛利率(margin)和加价率(markup)有什么区别?',
        a: '毛利率是利润 ÷ 售价,加价率是利润 ÷ 成本。成本翻倍(100% 加价率)只等于 50% 毛利率——混淆两者是最常见的定价错误,本工具双向即时换算。',
      },
      {
        q: '想达到目标毛利率怎么定价?',
        a: '售价 = 成本 ÷ (1 − 目标毛利率)。40 元成本想要 40% 毛利:40 ÷ 0.60 = 66.67 元。选「利润率」模式输入 40,售价、加价率和单件利润会自动带出。',
      },
      {
        q: '这是毛利率还是净利率?',
        a: '算的是毛利率——只用货品成本。净利率还要扣运营费用、运费、税费和手续费。平台卖家应先把佣金、推广费计进成本,看到的毛利才接近真实。',
      },
      {
        q: '打折时守住哪条线?',
        a: '先算变动成本下限:售价一旦低于成本加变动履约费,越卖越亏。实体商品 30% 毛利是常见警戒线,软件/虚拟商品可到 70% 以上;活动前用工具反算「保住 25% 毛利」的最低售价再定折扣力度。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '同一笔利润,除以售价是毛利率,除以成本是加价率:100% 加价率 = 50% 毛利率。要达到目标毛利率 m,定价 = 成本 ÷ (1 − m)。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
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
        q: 'Wie prize ich für eine Zielmarge?',
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
