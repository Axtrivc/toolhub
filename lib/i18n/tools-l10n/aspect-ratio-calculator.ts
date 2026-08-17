/**
 * aspect-ratio-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = AspectRatioClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const aspectRatioCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'aspectRatio': '宽高比',
      'enterWidthPlaceholder': '输入宽度…',
      'height': '高度',
      'heightPx': '高度 (px)',
      'note': '🔒 100% 在客户端。输入比例和一个维度,另一个按 ',
      'orEnterHeightPlaceholder': '或输入高度…',
      'reducedRatio': '约分比例',
      'width': '宽度',
      'widthPx': '宽度 (px)',
    },
    formula: {
      formula: 'h₂ = h₁ × ( w₂ / w₁ )',
      explain: '保持宽高比缩放:高度按与宽度相同的系数缩放。给定一个新尺寸,另一个按比例算出,以保持比例。',
    },
    useCases: [
      '缩放图片而不失真变形',
      '把视频嵌入固定容器并保持比例',
      '计算社交媒体所需的画幅尺寸',
      '把指定比例适配到边界框内',
    ],
    faqs: [
      { q: '缺失的尺寸怎么算？', a: '根据比例 W:H 计算。已知宽度时,高度 = 宽度 × (H ÷ W);已知高度时,宽度 = 高度 × (W ÷ H)。以 16:9、宽度 1920 为例,高度 = 1920 × (9 ÷ 16) = 1080。' },
      { q: '放入(fit)和填满(fill)边框有什么区别？', a: '放入(contain)会缩放图片让整体完全可见,可能留出黑边。填满(cover)会缩放让边框被完全覆盖,可能裁掉溢出部分。本工具同时显示适配后的尺寸和缩放系数,方便你选择。' },
      { q: '哪些宽高比最常见？', a: '16:9 用于 YouTube 和现代视频,4:3 用于老式电视和部分相机,21:9 用于超宽显示器,1:1 用于 Instagram 方图,9:16 用于手机竖屏短视频,3:2 用于大多数单反照片。可使用预设或输入 5:4 等任意自定义比例。' },
    ],
  },
  es: {
    ui: {
      'aspectRatio': 'Relación de aspecto',
      'enterWidthPlaceholder': 'introduce el ancho…',
      'height': 'Alto',
      'heightPx': 'Alto (px)',
      'note': '🔒 100% en el cliente. Introduce una relación y una dimensión; la otra se calcula como ',
      'orEnterHeightPlaceholder': 'o introduce el alto…',
      'reducedRatio': 'Proporción reducida',
      'width': 'Ancho',
      'widthPx': 'Ancho (px)',
    },
    formula: {
      formula: 'h₂ = h₁ × ( w₂ / w₁ )',
      explain: 'Escalar manteniendo la relación de aspecto: la altura cambia en el mismo factor que la anchura. Dada una nueva dimensión, la otra se calcula para preservar la proporción.',
    },
    useCases: [
      'escalar imágenes sin distorsión',
      'incrustar vídeos en un contenedor fijo manteniendo la proporción',
      'calcular las dimensiones de publicación en redes sociales',
      'ajustar una proporción dentro de un recuadro delimitador',
    ],
    faqs: [
      { q: '¿Cómo se calcula la dimensión que falta?', a: 'A partir de la proporción W:H. Si conoces el ancho, la altura = ancho × (H ÷ W). Si conoces la altura, el ancho = altura × (W ÷ H). Para 16:9 con un ancho de 1920, la altura es 1920 × (9 ÷ 16) = 1080.' },
      { q: '¿Cuál es la diferencia entre ajustar (fit) y rellenar (fill) un recuadro?', a: 'Ajustar (contain) escala la imagen para que se vea completa dentro del recuadro, lo que puede dejar espacio vacío. Rellenar (cover) escala para que el recuadro quede totalmente cubierto, lo que puede recortar la imagen. Esta herramienta muestra tanto las dimensiones ajustadas como el factor de escala para que elijas.' },
      { q: '¿Qué proporciones son las más comunes?', a: '16:9 para YouTube y vídeo moderno, 4:3 para televisores antiguos y algunas cámaras, 21:9 para monitores ultrapanorámicos, 1:1 para cuadrados de Instagram, 9:16 para historias de móvil (vídeo vertical) y 3:2 para la mayoría de fotos de réflex. Usa los preajustes o introduce cualquier proporción personalizada como 5:4.' },
    ],
  },
  de: {
    ui: {
      'aspectRatio': 'Seitenverhältnis',
      'enterWidthPlaceholder': 'Breite eingeben…',
      'height': 'Höhe',
      'heightPx': 'Höhe (px)',
      'note': '🔒 100% clientseitig. Gib ein Verhältnis und eine Dimension ein; die andere wird berechnet als ',
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
      'ein Seitenverhältnis in einen Begrenzungsrahmen einpassen',
    ],
    faqs: [
      { q: 'Wie wird die fehlende Dimension berechnet?', a: 'Aus dem Verhältnis W:H. Bei bekannter Breite gilt: Höhe = Breite × (H ÷ W). Bei bekannter Höhe: Breite = Höhe × (W ÷ H). Bei 16:9 mit einer Breite von 1920 ist die Höhe 1920 × (9 ÷ 16) = 1080.' },
      { q: 'Was ist der Unterschied zwischen Einpassen (fit) und Füllen (fill)?', a: 'Einpassen (contain) skaliert das Bild so, dass es vollständig im Rahmen sichtbar bleibt, was Leerräume lassen kann. Füllen (cover) skaliert so, dass der Rahmen vollständig bedeckt ist, was das Bild beschneiden kann. Dieses Werkzeug zeigt sowohl die eingepassten Abmessungen als auch den Skalierungsfaktor an.' },
      { q: 'Welche Seitenverhältnisse sind am häufigsten?', a: '16:9 für YouTube und moderne Videos, 4:3 für ältere Fernseher und einige Kameras, 21:9 für Ultrawide-Monitore, 1:1 für Instagram-Quadrate, 9:16 für Handy-Stories (Hochformat) und 3:2 für die meisten DSLR-Fotos. Nutze die Vorgaben oder gib ein beliebiges Verhältnis wie 5:4 ein.' },
    ],
  },
}
