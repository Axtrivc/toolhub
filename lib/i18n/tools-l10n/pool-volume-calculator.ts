/**
 * pool-volume-calculator 本地化 bundle —— zh / es / de(B9 家居与厨房批次)
 * 覆盖: ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const PoolVolumeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['saber cuántos galones o litros tiene tu piscina', 'estimar cuánto tarda la bomba en mover todo el volumen', 'verificar la cifra de agua en presupuestos de mantenimiento', 'confirmar el tamaño al comprar lona o calentador'],
    faqs: [
      { q: '¿Cómo saco la profundidad media con fondo inclinado?', a: 'Lo habitual es (profundidad somera + profunda) ÷ 2. Con 3 pies en la parte baja y 8 en la honda, usa 5,5; en pozos con plataforma el error crece un poco.' },
      { q: '¿Cuántos galones hay en un pie cúbico?', a: '7,48 galones estadounidenses. Largo × ancho × profundidad media × 7,48 da los galones rectangulares: una piscina de 32×16×5 pies ronda los 19.150.' },
      { q: '¿Y el área de una piscina riñón?', a: 'La fórmula práctica es 0,45 × (ancho A + ancho B) × largo, multiplicada por la profundidad media. Es una estimación: mide los dos vientres en su punto más ancho; basta para dimensionar la bomba.' },
      { q: '¿Cada cuánto debe recircular el agua?', a: 'Las piscinas residenciales se diseñan para mover todo el volumen cada 8-12 horas; la herramienta calcula ese turnover con tu caudal (GPM). Es solo circulación, no dosificación de químicos.' },
    ],
    ui: {
      'in.shape': 'Forma de la piscina',
      'in.length': 'Largo / diámetro',
      'in.width': 'Ancho (ancho A en riñón)',
      'in.width2': 'Ancho B (riñón)',
      'in.depth': 'Profundidad media',
      'in.flow': 'Caudal de la bomba',
      'opt.shape.rect': 'Rectangular',
      'opt.shape.round': 'Redonda',
      'opt.shape.kidney': 'Riñón',
      'out.gallons': 'Volumen de la piscina',
      'out.liters': 'En litros',
      'out.turnover': 'Un turnover completo',
      'out.perDay': 'Turnovers al día',
      'outSub.turnover': 'Todo el volumen por el filtro',
      'preset.0': 'Enterrada 16×32 pies',
      'preset.1': 'Redonda elevada de 24 pies',
      'preset.2': 'Riñón libre',
      'errPositive': 'Introduce dimensiones y profundidad positivas',
      'note': '🏊 Profundidad media con fondo inclinado ≈ (somera + honda) ÷ 2; 1 ft³ = 7,48 galones. La guía residencial recircula todo el volumen cada 8-12 h. Solo circulación — no es consejo de dosificación química.',
    },
  },
  de: {
    useCases: ['berechnen, wie viele Gallonen oder Liter dein Pool fasst', 'abschätzen, wie lange die Pumpe für das ganze Volumen braucht', 'die Wassermenge in Angeboten von Poolfirmen prüfen', 'die Größe für Planen oder Heizung bestätigen'],
    faqs: [
      { q: 'Wie bestimme ich die mittlere Tiefe bei Schrägboden?', a: 'Üblich ist (flaches Ende + tiefes Ende) ÷ 2. Bei 3 Fuß flach und 8 Fuß tief nimm 5,5; bei Sprunggruben mit Plattform wird die Schätzung etwas ungenauer.' },
      { q: 'Wie viele Gallonen sind ein Kubikfuß Wasser?', a: '7,48 US-Gallonen. Länge × Breite × mittlere Tiefe × 7,48 ergibt Gallonen — ein Becken von 32×16×5 Fuß fasst rund 19.150.' },
      { q: 'Wie berechne ich die Fläche einer Nierenform?', a: 'Die Faustformel: 0,45 × (Breite A + Breite B) × Länge, mal mittlerer Tiefe. Miss die zwei breitesten Stellen der „Bauchungen" — für die Pumpenauslegung reicht das locker.' },
      { q: 'Wie oft soll das Wasser umgewälzt werden?', a: 'Heimpools sind auf 8-12 Stunden pro komplettem Durchlauf ausgelegt; der Rechner ermittelt diese Zeit aus deinem Durchfluss (GPM). Das ist reine Zirkulation, keine Chemie-Dosierung.' },
    ],
    ui: {
      'in.shape': 'Beckenform',
      'in.length': 'Länge / Durchmesser',
      'in.width': 'Breite (bei Niere Breite A)',
      'in.width2': 'Nieren-Breite B',
      'in.depth': 'Mittlere Tiefe',
      'in.flow': 'Pumpen-Durchfluss',
      'opt.shape.rect': 'Rechteckig',
      'opt.shape.round': 'Rund',
      'opt.shape.kidney': 'Niere',
      'out.gallons': 'Beckenvolumen',
      'out.liters': 'In Litern',
      'out.turnover': 'Ein kompletter Durchlauf',
      'out.perDay': 'Durchläufe pro Tag',
      'outSub.turnover': 'Gesamtvolumen durch den Filter',
      'preset.0': 'Einbaubecken 16×32 ft',
      'preset.1': 'Rundes Aufstellbecken 24 ft',
      'preset.2': 'Freiform-Niere',
      'errPositive': 'Gib positive Maße und Tiefen ein',
      'note': '🏊 Mittlere Tiefe bei Schrägboden ≈ (flach + tief) ÷ 2; 1 ft³ = 7,48 gal. Heimpools wälzen das Volumen alle 8-12 h um. Nur Zirkulationsrechnung — keine Dosierungsempfehlung für Pflegemittel.',
    },
  },
}
