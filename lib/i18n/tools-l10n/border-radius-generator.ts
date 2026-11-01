/**
 * border-radius-generator 本地化 bundle —— zh / es / de(B14 生成器与趣味批次)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BorderRadiusGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['ajustar las cuatro esquinas con vista previa en vivo', 'generar border-radius elíptico con sintaxis de barra', 'aplicar presets de tarjeta, píldora, hoja o blob', 'obtener la forma abreviada más corta y válida'],
    faqs: [
      { q: '¿Qué es la sintaxis con barra?', a: 'En `border-radius: 30% 70% / 40% 60%`, antes de la barra van los radios horizontales y después los verticales, creando esquinas elípticas. Un solo valor sin barra da un arco circular.' },
      { q: '¿Mejor px o %?', a: 'Los píxeles son predecibles pero se rompen al redimensionar la caja; los porcentajes se refieren a la longitud de cada lado, así que 50 % en una caja no cuadrada produce una elipse. Diseños fluidos: %; componentes fijos: px.' },
      { q: '¿Cómo colapsa la forma abreviada?', a: 'Los cuatro valores van en sentido horario desde arriba-izquierda (TL TR BR BL); si TR equivale a BL se omite, y si además TL equivale a TR se colapsa más — el generador emite la forma válida más corta.' },
      { q: '¿Cómo logro una píldora o círculo perfecto?', a: 'Cualquier radio de al menos la mitad del lado corto da una píldora — 999px es la expresión habitual. Un círculo exige ancho = alto más un radio del 50 %.' },
    ],
    ui: {
      'preview': 'Vista previa en vivo',
      'linkAll': 'Enlazar esquinas',
      'elliptical': 'Elíptico (/)',
      'allCorners': 'Las cuatro esquinas',
      'allCornersV': 'Las cuatro esquinas',
      'tl': 'Arriba izq.',
      'tr': 'Arriba der.',
      'br': 'Abajo der.',
      'bl': 'Abajo izq.',
      'horizontal': 'Radios horizontales',
      'vertical': 'Radios verticales',
      'copyCss': 'Copiar CSS',
      'presetCard': 'Tarjeta',
      'presetPill': 'Píldora',
      'presetSquircle': 'Squircle',
      'presetLeaf': 'Hoja',
      'presetBlob': 'Blob',
      'presetTicket': 'Ticket',
      'note': '📐 El orden es horario desde arriba a la izquierda: TL TR BR BL. La forma elíptica toma radios horizontales / verticales separados por barra — 50 % / 50 % en pares iguales dibuja una elipse perfecta. Los porcentajes se refieren al lado donde están, por eso los blobs sobreviven mejor al redimensionado que los píxeles.',
    },
  },
  de: {
    useCases: ['die vier Ecken justieren mit Live-Vorschau', 'elliptische border-radius-Slash-Syntax erzeugen', 'Voreinstellungen für Karte, Pille, Blatt oder Blob', 'die kürzeste gültige Kurzform ausgeben'],
    faqs: [
      { q: 'Was ist die Slash-Syntax?', a: 'Bei `border-radius: 30% 70% / 40% 60%` stehen vor dem Schrägstrich die horizontalen und danach die vertikalen Radien — es entstehen elliptische Ecken. Ein einzelner Wert ohne Slash ergibt einen Kreisbogen.' },
      { q: 'px oder %?', a: 'Pixel sind berechenbar, brechen aber beim Vergrößern der Box; Prozentwerte beziehen sich auf die jeweilige Seitenlänge, weshalb 50 % bei einem nicht quadratischen Kasten eine Ellipse ergibt. Fluide Layouts: %; fixe Komponenten: px.' },
      { q: 'Wie funktioniert die Kurzform?', a: 'Vier Werte laufen im Uhrzeigersinn ab oben links (TL TR BR BL); gleicht TR dem BL, darf er entfallen, und gleicht zusätzlich TL dem TR, kollabiert weiter — der Generator gibt die kürzeste gültige Form aus.' },
      { q: 'Wie entsteht eine perfekte Pille oder ein Kreis?', a: 'Jeder Radius ab der halben kurzen Seite ergibt eine Pille — 999px ist der übliche Kniff. Ein Kreis verlangt Breite = Höhe plus 50 % Radius.' },
    ],
    ui: {
      'preview': 'Live-Vorschau',
      'linkAll': 'Ecken koppeln',
      'elliptical': 'Elliptisch (/)',
      'allCorners': 'Alle vier Ecken',
      'allCornersV': 'Alle vier Ecken',
      'tl': 'Oben links',
      'tr': 'Oben rechts',
      'br': 'Unten rechts',
      'bl': 'Unten links',
      'horizontal': 'Horizontale Radien',
      'vertical': 'Vertikale Radien',
      'copyCss': 'CSS kopieren',
      'presetCard': 'Karte',
      'presetPill': 'Pille',
      'presetSquircle': 'Squircle',
      'presetLeaf': 'Blatt',
      'presetBlob': 'Blob',
      'presetTicket': 'Ticket',
      'note': '📐 Die Reihenfolge läuft im Uhrzeigersinn ab oben links: TL TR BR BL. Die elliptische Form nimmt horizontale / vertikale Radien getrennt durch einen Schrägstrich — 50 % / 50 % in gleichen Paaren zeichnet eine perfekte Ellipse. Prozente beziehen sich auf die jeweilige Seite, deshalb überstehen Blobs das Skalieren besser als Pixelwerte.',
    },
  },
}
