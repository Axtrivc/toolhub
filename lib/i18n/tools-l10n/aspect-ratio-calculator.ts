/**
 * aspect-ratio-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = AspectRatioClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const aspectRatioCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'aspectRatio': 'Relación de aspecto',
      'copyResult': 'Copiar resultado',
      'enterWidthPlaceholder': 'introduce el ancho…',
      'height': 'Alto',
      'heightPx': 'Alto (px)',
      'note': '🔒 100% en el cliente. Introduce una relación y una dimensión; la otra se calcula como ',
      'orEnterHeightPlaceholder': 'o introduce el alto…',
      'reducedRatio': 'Relación simplificada',
      'width': 'Ancho',
      'widthPx': 'Ancho (px)',
    },
    formula: {
      formula: 'h₂ = h₁ × ( w₂ / w₁ )',
      explain: 'Escalar manteniendo la relación de aspecto: la altura cambia en el mismo factor que el ancho. Dada una nueva dimensión, la otra se calcula para preservar la proporción.',
    },
    useCases: [
      'escalar imágenes sin distorsión',
      'incrustar vídeos en un contenedor fijo manteniendo la proporción',
      'calcular las dimensiones de las publicaciones en redes sociales',
      'calcular dimensiones proporcionales para diseño responsive',
    ],
    faqs: [
      { q: '¿Cómo se calcula la dimensión que falta?', a: 'A partir de la relación W:H. Si conoces el ancho, la altura = ancho × (H ÷ W). Si conoces la altura, el ancho = altura × (W ÷ H). Para 16:9 con un ancho de 1920, la altura es 1920 × (9 ÷ 16) = 1080.' },
      { q: '¿Cuál es la diferencia entre ajustar (fit) y rellenar (fill) un recuadro?', a: 'Ajustar (contain) escala la imagen para que se vea completa dentro del recuadro, lo que puede dejar espacio vacío. Rellenar (cover) escala para que el recuadro quede totalmente cubierto, lo que puede recortar la imagen. Corresponden a object-fit / background-size en CSS, y el cálculo de la relación de aspecto es lo que determina cuánto se recorta o se deja vacío. Ante la duda, usa cover para fotos y contain para logotipos o capturas de pantalla que deban verse completos.' },
      { q: '¿Qué relaciones de aspecto son las más comunes?', a: '16:9 para YouTube y vídeo moderno, 4:3 para televisores antiguos y algunas cámaras, 21:9 para monitores ultrapanorámicos, 1:1 para cuadrados de Instagram, 9:16 para historias de móvil (vídeo vertical) y 3:2 para la mayoría de fotos de réflex. Usa los preajustes o introduce cualquier relación personalizada como 5:4.' },
    ],
  },
  de: {
    ui: {
      'aspectRatio': 'Seitenverhältnis',
      'copyResult': 'Ergebnis kopieren',
      'enterWidthPlaceholder': 'Breite eingeben…',
      'height': 'Höhe',
      'heightPx': 'Höhe (px)',
      'note': '🔒 100% clientseitig. Gib ein Verhältnis und eine Dimension ein; die andere wird mit folgender Formel berechnet: ',
      'orEnterHeightPlaceholder': 'oder Höhe eingeben…',
      'reducedRatio': 'Gekürztes Verhältnis',
      'width': 'Breite',
      'widthPx': 'Breite (px)',
    },
    formula: {
      formula: 'h₂ = h₁ × ( w₂ / w₁ )',
      explain: 'Skalieren unter Beibehaltung des Seitenverhältnisses: die Höhe wird um denselben Faktor wie die Breite skaliert. Bei einer neuen Dimension wird die andere proportional berechnet.',
    },
    useCases: [
      'Bilder ohne Verzerrung skalieren',
      'Videos in einen festen Container im richtigen Verhältnis einbetten',
      'Abmessungen für Social-Media-Beiträge berechnen',
      'proportionale Abmessungen für responsives Design ermitteln',
    ],
    faqs: [
      { q: 'Wie wird die fehlende Dimension berechnet?', a: 'Aus dem Verhältnis W:H. Bei bekannter Breite gilt: Höhe = Breite × (H ÷ W). Bei bekannter Höhe: Breite = Höhe × (W ÷ H). Bei 16:9 mit einer Breite von 1920 ist die Höhe 1920 × (9 ÷ 16) = 1080.' },
      { q: 'Was ist der Unterschied zwischen Einpassen (fit) und Füllen (fill)?', a: 'Einpassen (contain) skaliert das Bild so, dass es vollständig im Rahmen sichtbar bleibt, was Leerräume lassen kann. Füllen (cover) skaliert so, dass der Rahmen vollständig bedeckt ist, was das Bild beschneiden kann — das entspricht object-fit / background-size in CSS, und die Berechnung des Seitenverhältnisses bestimmt, wie viel beschnitten bzw. leer bleibt. Im Zweifel: Bei Fotos cover verwenden; bei Logos und Screenshots, die vollständig sichtbar bleiben müssen, contain.' },
      { q: 'Welche Seitenverhältnisse sind am häufigsten?', a: '16:9 für YouTube und moderne Videos, 4:3 für ältere Fernseher und einige Kameras, 21:9 für Ultrawide-Monitore, 1:1 für Instagram-Quadrate, 9:16 für Handy-Stories (Hochformat) und 3:2 für die meisten DSLR-Fotos. Nutze die Vorgaben oder gib ein beliebiges Verhältnis wie 5:4 ein.' },
    ],
  },
}
