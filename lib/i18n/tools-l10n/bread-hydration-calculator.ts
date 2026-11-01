/**
 * bread-hydration-calculator 本地化 bundle —— zh / es / de(B9 家居与厨房批次)
 * 覆盖: ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BreadHydrationCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular la hidratación real de tu masa (agua ÷ harina)', 'repartir el agua y la harina del fermento en la hidratación efectiva', 'sacar la sal y el peso total en porcentaje de panadero', 'mantener la hidratación al cambiar de harina o de masa madre'],
    faqs: [
      { q: '¿Qué son el porcentaje panadero y la hidratación?', a: 'En panadería la harina siempre es el 100 % y el resto se expresa contra ella. Hidratación = agua ÷ harina: 350 g de agua sobre 500 g de harina es una masa al 70 %.' },
      { q: '¿Por qué hablar de hidratación «efectiva»?', a: 'El fermento también aporta agua y harina: 100 g de masa madre al 100 % de hidratación = 50 g de agua + 50 g de harina. Mirando solo la masa final, una masa con fermento parecería más seca de lo que es.' },
      { q: '¿A partir de cuánto es alta hidratación?', a: '60-68 % es el territorio seguro de pan de molde; 70-78 % abre miga en rústicos y focaccia a costa de manejo pegajoso; por encima del 80 %, la ciabatta pide autólisis y pliegues.' },
      { q: '¿Por qué la sal también en porcentaje?', a: 'Entre 1,8 y 2,2 % modula la fermentación, tensa el gluten y da sabor; calcularla contra la harina es lo estable: 500 g de harina × 2 % = 10 g de sal.' },
    ],
    ui: {
      'in.flour': 'Harina',
      'in.water': 'Agua',
      'in.levain': 'Fermento / masa madre',
      'in.levainHyd': 'Hidratación del fermento',
      'in.saltPct': 'Sal (% panadero)',
      'out.hydration': 'Hidratación de la masa',
      'out.effHydration': 'Hidratación efectiva',
      'out.levainPct': 'Porcentaje de fermento',
      'out.salt': 'Sal',
      'out.doughWeight': 'Peso total de la masa',
      'outSub.hydration': 'Agua ÷ harina, sin fermento',
      'outSub.effHydration': 'Contando agua y harina del fermento',
      'outSub.levainPct': 'Fermento ÷ harina',
      'errPositive': 'Introduce un peso de harina positivo y agua no negativa',
      'errLevain': 'Introduce una hidratación del fermento del 1-300 % y una sal no negativa',
      'chartTitle': 'Clase de hidratación',
      'zone.0': 'Rígida — bagels',
      'zone.1': 'Barra estándar',
      'zone.2': 'Alta — rústicos',
      'zone.3': 'Muy alta — ciabatta',
      'note': '🥖 En porcentaje panadero la harina es siempre 100 %. Más hidratación abre la miga pero afloja la masa: 70 % es una hogaza agradable, 80 %+ pide autólisis y pliegues. Un fermento al 100 % sube la hidratación efectiva según crece su dosis.',
    },
  },
  de: {
    useCases: ['die echte Teighydratation berechnen (Wasser ÷ Mehl)', 'Wasser und Mehl des Sauerteigs in die effektive Hydratation einrechnen', 'Salz und Gesamtteiggewicht in Bäckerprozent ermitteln', 'die Hydratation konsistent halten beim Mehl- oder Starterwechsel'],
    faqs: [
      { q: 'Was sind Bäckerprozent und Hydratation?', a: 'Im Bäckerprozent ist Mehl immer 100 %, alles andere bezieht sich darauf. Hydratation = Wasser ÷ Mehl: 350 g Wasser auf 500 g Mehl ergeben einen Teig mit 70 %.' },
      { q: 'Warum eine „effektive" Hydratation?', a: 'Der Levain bringt eigenes Wasser und Mehl mit: 100 g Sauerteig mit 100 % Hydratation = 50 g Wasser + 50 g Mehl. Wer nur den Hauptteig rechnet, hält gesäuerte Teige fälschlich für „trockener".' },
      { q: 'Ab wann gilt hohe Hydratation?', a: '60-68 % ist das sichere Toastbrot-Terrain; 70-78 % öffnet die Krume bei Landbroten und Focaccia, wird aber klebrig; ab 80 % braucht Ciabatta Autolyse und Stretch & Folds.' },
      { q: 'Warum Salz ebenfalls in Prozent?', a: 'Zwischen 1,8 und 2,2 % steuert Salz Gäre, Kleberstruktur und Geschmack; aufs Mehl bezogen ist es stabil: 500 g Mehl × 2 % = 10 g Salz.' },
    ],
    ui: {
      'in.flour': 'Mehl',
      'in.water': 'Wasser',
      'in.levain': 'Levain / Sauerteig',
      'in.levainHyd': 'Hydratation des Levains',
      'in.saltPct': 'Salz (Bäcker-%)',
      'out.hydration': 'Teighydratation',
      'out.effHydration': 'Effektive Hydratation',
      'out.levainPct': 'Levain-Anteil',
      'out.salt': 'Salz',
      'out.doughWeight': 'Gesamtteiggewicht',
      'outSub.hydration': 'Wasser ÷ Mehl, ohne Levain',
      'outSub.effHydration': 'Mit Wasser und Mehl aus dem Levain',
      'outSub.levainPct': 'Levain ÷ Mehl',
      'errPositive': 'Gib ein positives Mehlgewicht und nicht-negatives Wasser ein',
      'errLevain': 'Gib eine Levain-Hydratation von 1-300 % und ein nicht-negatives Salz ein',
      'chartTitle': 'Hydratations-Klasse',
      'zone.0': 'Steif — Bagels',
      'zone.1': 'Standardlaib',
      'zone.2': 'Hoch — Landbrot',
      'zone.3': 'Sehr hoch — Ciabatta',
      'note': '🥖 Im Bäckerprozent ist Mehl stets 100 %. Mehr Hydratation öffnet die Krume, macht den Teig aber träge: 70 % ist ein freundlicher Sandwichlaib, 80 %+ verlangt Autolyse und Stretch & Folds. Ein Levain mit 100 % Hydratation hebt die effektive Hydratation.',
    },
  },
}
