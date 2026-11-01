/**
 * css-shadow-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = CssShadowGeneratorClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const cssShadowGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'backdropBlur': 'Desenfoque de fondo',
      'backgroundOpacity': 'Opacidad del fondo',
      'blur': 'Desenfoque',
      'borderColorLabel': 'Color del borde',
      'boxShadowTitle': 'Sombra de caja',
      'colorLabel': 'Color',
      'copy': 'Copiar',
      'enableLabel': 'Activar',
      'generatedCss': 'CSS generado',
      'glassmorphismTitle': 'Glassmorfismo',
      'insetLabel': 'Inset',
      'livePreview': 'Vista en vivo',
      'note': '🔒 100% en el cliente — todos los valores se calculan localmente. La vista previa usa un fondo de degradado para que el glassmorfismo sea visible.',
      'offsetX': 'Desplazamiento X',
      'offsetY': 'Desplazamiento Y',
      'opacity': 'Opacidad',
      'previewLabel': 'Vista previa',
      'spread': 'Expansión',
      'shadowColorAria': 'Color de la sombra',
      'glassBorderColorAria': 'Color del borde del cristal',
    },
    useCases: [
      'crear el box-shadow ideal con controles deslizantes',
      'lograr un efecto de cristal esmerilado (glassmorfismo)',
      'previsualizar en vivo y copiar el CSS con un clic',
      'generar sombras para componentes neumórficos',
    ],
    faqs: [
      { q: '¿Cuál es la diferencia entre blur y spread de box-shadow?', a: 'El radio de desenfoque (blur) suaviza los bordes de la sombra: valores más altos dan una sombra más suave y difusa. El radio de expansión (spread) agranda o reduce la sombra misma: positivo la hace más grande que el elemento, negativo más pequeña. Un blur de 0 con expansión positiva crea un duplicado de bordes duros.' },
      { q: '¿Cómo hago un efecto glassmorphism?', a: 'El glassmorfismo necesita tres partes: un fondo semitransparente (rgba con poco alfa), un backdrop-filter: blur(...) en el elemento y un borde sutil. Esta herramienta expone los tres para que puedas ajustarlos en vivo. Ten en cuenta que backdrop-filter requiere que el elemento tenga algo detrás que difuminar.' },
      { q: '¿Funciona backdrop-filter en todos los navegadores?', a: 'Funciona en todos los Chrome, Edge y Safari modernos (con el prefijo -webkit-) y en Firefox 103+. Los navegadores antiguos lo ignoran y el elemento muestra el fondo sólido en su lugar. El CSS generado incluye el prefijo -webkit-backdrop-filter para compatibilidad con Safari.' },
      { q: '¿Cómo escribo sombras en varias capas?', a: 'box-shadow admite capas separadas por comas: una de contacto cercana (0 2px 4px) y otra ambiental más difusa (0 8px 24px rgba(0,0,0,0.12)). Dos o tres capas se ven más realistas que una sola; es la idea detrás de la elevación de Material Design.' },
    ],
  },
  de: {
    ui: {
      'backdropBlur': 'Hintergrundunschärfe',
      'backgroundOpacity': 'Hintergrunddeckkraft',
      'blur': 'Unschärfe',
      'borderColorLabel': 'Rahmenfarbe',
      'boxShadowTitle': 'Box-Shadow',
      'colorLabel': 'Farbe',
      'copy': 'Kopieren',
      'enableLabel': 'Aktivieren',
      'generatedCss': 'Erzeugtes CSS',
      'glassmorphismTitle': 'Glassmorphismus',
      'insetLabel': 'Inset',
      'livePreview': 'Live-Vorschau',
      'note': '🔒 100% clientseitig — alle Werte werden lokal berechnet. Die Vorschau nutzt einen Farbverlauf-Hintergrund, damit der Glassmorphismus-Effekt sichtbar ist.',
      'offsetX': 'Versatz X',
      'offsetY': 'Versatz Y',
      'opacity': 'Deckkraft',
      'previewLabel': 'Vorschau',
      'spread': 'Ausbreitung',
      'shadowColorAria': 'Schattenfarbe',
      'glassBorderColorAria': 'Glas-Rahmenfarbe',
    },
    useCases: [
      'den idealen box-shadow mit Schiebereglern erstellen',
      'einen Glassmorphismus-Effekt (Milchglas) erzeugen',
      'live vorschauen und CSS mit einem Klick kopieren',
      'Schatten für Neumorphismus-Komponenten generieren',
    ],
    faqs: [
      { q: 'Was ist der Unterschied zwischen Blur und Spread bei box-shadow?', a: 'Der Blur-Radius weicht die Schattenkanten auf — höhere Werte ergeben einen weicheren, diffuseren Schatten. Der Spread-Radius vergrößert oder verkleinert den Schatten selbst — positiv macht ihn größer als das Element, negativ kleiner. Ein Blur von 0 mit positivem Spread erzeugt eine Kopie mit harten Kanten.' },
      { q: 'Wie erstelle ich einen Glassmorphismus-Effekt?', a: 'Glassmorphismus braucht drei Teile: einen halbtransparenten Hintergrund (rgba mit niedrigem Alpha), ein backdrop-filter: blur(...) auf dem Element und einen dezenten Rand. Dieses Werkzeug bietet alle drei, sodass du sie live einstellen kannst. Beachte, dass backdrop-filter voraussetzt, dass sich etwas hinter dem Element befindet, das verschwommen werden kann.' },
      { q: 'Funktioniert backdrop-filter in allen Browsern?', a: 'Es funktioniert in allen modernen Chrome-, Edge- und Safari-Versionen (mit -webkit-Präfix) sowie in Firefox 103+. Ältere Browser ignorieren es und das Element zeigt stattdessen den deckenden Hintergrund. Das generierte CSS enthält das Präfix -webkit-backdrop-filter für Safari-Kompatibilität.' },
      { q: 'Wie schreibe ich Schatten in mehreren Ebenen?', a: 'box-shadow akzeptiert kommagetrennte Ebenen: eine nahe Kontaktschicht (0 2px 4px) und eine diffusere Umgebungsschicht (0 8px 24px rgba(0,0,0,0.12)). Zwei bis drei Ebenen wirken realistischer als eine einzige — genau das Prinzip hinter der Elevation von Material Design.' },
    ],
  },
}
