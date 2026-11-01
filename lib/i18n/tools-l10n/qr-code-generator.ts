/**
 * qr-code-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(explain・variables・example 译文;
 * formula 代码块是数学/代码示例,按站规保持英文原值)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA =
  'modules per side = 21 + 4 × (version − 1)\nerror correction: L 7%, M 15%, Q 25%, H 30% of codewords recoverable\nquiet zone = 4 modules on each side'

export const qrCodeGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'anyTextPlaceholder': 'Cualquier texto…',
      'background': 'Fondo',
      'contrastWarn': 'Los lectores suelen esperar un código oscuro sobre fondo claro; esta combinación de colores podría no escanearse bien.',
      'downloadPng': 'Descargar PNG',
      'downloadSvg': 'Descargar SVG',
      'eclH': 'H — alta (~30%)',
      'eclL': 'L — baja (~7%)',
      'eclM': 'M — media (~15%)',
      'eclQ': 'Q — cuartil (~25%)',
      'emptyContent': 'Introduce contenido para generar un código QR',
      'emptyWifi': 'Introduce un nombre de red para generar el código',
      'encNoPass': 'Sin contraseña',
      'encWep': 'WEP',
      'encWpa': 'WPA / WPA2',
      'encryption': 'Cifrado',
      'errorCorrection': 'Corrección de errores',
      'errorTooLong': 'El contenido es demasiado largo para un código QR con este nivel de corrección de errores (medido en bytes UTF-8). Usa una entrada más corta o un nivel menor.',
      'errGenerate': 'No se pudo generar el código QR. Revisa la entrada e inténtalo de nuevo.',
      'errSameColor': 'El color del primer plano y del fondo no pueden ser el mismo.',
      'foreground': 'Primer plano',
      'generatedQrAlt': 'Código QR generado',
      'hiddenNetwork': 'Red oculta',
      'invertColors': 'Invertir colores',
      'modeText': 'Texto',
      'modeUrl': 'URL / Enlace',
      'modeWifi': 'WiFi',
      'networkName': 'Nombre de red (SSID)',
      'password': 'Contraseña',
      'previewSize': 'Tamaño de vista previa',
      'presetSwatches': 'Paletas rápidas',
      'privacyNote': '🔒 Los códigos QR se generan localmente en tu navegador. Tus datos nunca se suben a ningún servidor.',
      'quick': 'Rápido:',
      'sizeHint': 'Las descargas siempre se generan en alta resolución (al menos 512 px); esta opción solo ajusta la vista previa en pantalla.',
      'sizeLarge': 'Grande (384px)',
      'sizeMedium': 'Mediano (256px)',
      'sizeSmall': 'Pequeño (192px)',
      'textToEncode': 'Texto a codificar',
      'websiteUrl': 'URL del sitio',
      'wifiBadFormat': 'Parece una cadena de configuración WiFi, pero no se ha podido interpretar. Revisa el formato.',
      'wifiParsed': 'Configuración WiFi reconocida y rellenada',
    },
    useCases: [
      'generador de código QR para URL',
      'creador de códigos QR online gratis',
      'crear un código QR de WiFi',
      'descargar código QR en PNG o SVG',
    ],
    faqs: [
      { q: '¿Estos códigos QR caducan?', a: 'No. Como los datos van incrustados directamente en el código, los códigos QR estáticos nunca caducan ni dejan de funcionar. Mientras el contenido mismo (como una URL) siga siendo válido, el código se escaneará para siempre.' },
      { q: '¿Hay un límite de datos que puedo codificar?', a: 'Sí. Un único código QR almacena hasta aproximadamente 4.000 caracteres alfanuméricos o 2.900 bytes de datos binarios. Para URLs y credenciales WiFi es más que suficiente. Si intentas codificar un texto muy largo, el código se vuelve más denso y difícil de escanear.' },
      { q: '¿Son seguros los códigos QR?', a: 'Los códigos QR por sí solos son solo una forma de entregar texto: no son ni seguros ni peligrosos en sí mismos. El riesgo es que un código malicioso pueda enlazar a un sitio de phishing. Como usuario, trata los enlaces escaneados con la misma cautela que cualquier otro enlace. Como creador, enlaza solo a destinos que controlas y en los que confías.' },
      { q: '¿Qué nivel de corrección de errores elijo?', a: 'El nivel H tolera que ~30 % del código esté dañado u oculto: ideal para envases y carteles impresos. En pantalla basta el M (~15 %). Cuanto más alto el nivel, más denso el código, y con textos largos cuesta más escanearlo.' },
    ],
    formula: {
      formula: FORMULA,
      variables:
        'version: nivel de tamaño del código QR, de 1 (el más pequeño) a 40 (el más grande)\nmodules: celdas blancas/negras por lado del símbolo\nL, M, Q, H: niveles de corrección de errores que recuperan el 7 %, 15 %, 25 % y 30 % de las palabras de código\nquiet zone: margen en blanco alrededor del código, de 4 módulos de ancho',
      explain:
        'Los símbolos QR tienen 40 versiones cuya cuadrícula crece 4 módulos por lado en cada versión, empezando en 21 para la versión 1. Los niveles de corrección de errores más altos dedican más palabras de código a la redundancia, así que la capacidad baja a medida que sube la tolerancia al daño. Una zona de silencio de 4 módulos ayuda a los escáneres a encontrar los bordes del símbolo.',
      example:
        'Paso 1: Toma un código QR de versión 5.\nPaso 2: módulos por lado = 21 + 4 × (5 − 1) = 21 + 16 = 37.\nPaso 3: En el nivel M soporta hasta un 15 % de daño y necesita una zona de silencio de 4 módulos alrededor.\nResultado: un código de 37 × 37 módulos, más el margen.',
    },
  },
  de: {
    ui: {
      'anyTextPlaceholder': 'Beliebiger Text…',
      'background': 'Hintergrund',
      'contrastWarn': 'Scanner setzen in der Regel auf dunklen Code vor hellem Hintergrund – diese Farbkombination lässt sich möglicherweise nicht zuverlässig scannen.',
      'downloadPng': 'PNG herunterladen',
      'downloadSvg': 'SVG herunterladen',
      'eclH': 'H — hoch (~30%)',
      'eclL': 'L — niedrig (~7%)',
      'eclM': 'M — mittel (~15%)',
      'eclQ': 'Q — Quartil (~25%)',
      'emptyContent': 'Inhalt eingeben, um einen QR-Code zu erzeugen',
      'emptyWifi': 'Netzwerknamen eingeben, um den Code zu erzeugen',
      'encNoPass': 'Kein Passwort',
      'encWep': 'WEP',
      'encWpa': 'WPA / WPA2',
      'encryption': 'Verschlüsselung',
      'errorCorrection': 'Fehlerkorrektur',
      'errorTooLong': 'Der Inhalt ist zu lang für einen QR-Code mit dieser Fehlerkorrekturstufe (gemessen in UTF-8-Bytes). Kürzere Eingabe oder niedrigere Stufe verwenden.',
      'errGenerate': 'QR-Code konnte nicht erzeugt werden. Bitte Eingabe prüfen und erneut versuchen.',
      'errSameColor': 'Vordergrund- und Hintergrundfarbe dürfen nicht identisch sein.',
      'foreground': 'Vordergrund',
      'generatedQrAlt': 'Generierter QR-Code',
      'hiddenNetwork': 'Verstecktes Netzwerk',
      'invertColors': 'Farben umkehren',
      'modeText': 'Text',
      'modeUrl': 'URL / Link',
      'modeWifi': 'WLAN',
      'networkName': 'Netzwerkname (SSID)',
      'password': 'Passwort',
      'previewSize': 'Vorschaugröße',
      'presetSwatches': 'Schnellpaletten',
      'privacyNote': '🔒 QR-Codes werden lokal in deinem Browser erzeugt. Deine Daten werden nie auf einen Server hochgeladen.',
      'quick': 'Schnell:',
      'sizeHint': 'Downloads werden immer in hoher Auflösung (mindestens 512 px) erzeugt; diese Option skaliert nur die Vorschau auf dem Bildschirm.',
      'sizeLarge': 'Groß (384px)',
      'sizeMedium': 'Mittel (256px)',
      'sizeSmall': 'Klein (192px)',
      'textToEncode': 'Zu codierender Text',
      'websiteUrl': 'Website-URL',
      'wifiBadFormat': 'Das sieht nach einer WLAN-Konfigurationszeichenkette aus, konnte aber nicht gelesen werden. Bitte Format prüfen.',
      'wifiParsed': 'WLAN-Konfiguration erkannt und übernommen',
    },
    useCases: [
      'QR-Code-Generator für URLs',
      'kostenlos online QR-Codes erstellen',
      'einen WLAN-QR-Code erzeugen',
      'QR-Code als PNG oder SVG herunterladen',
    ],
    faqs: [
      { q: 'Verfallen diese QR-Codes?', a: 'Nein. Da die Daten direkt im Code eingebettet sind, verfallen statische QR-Codes nie und funktionieren dauerhaft. Solange der Inhalt selbst (etwa eine URL) gültig bleibt, lässt sich der Code für immer scannen.' },
      { q: 'Gibt es ein Limit, wie viel Daten ich kodieren kann?', a: 'Ja. Ein einzelner QR-Code fasst grob 4.000 alphanumerische Zeichen oder 2.900 Byte Binärdaten. Für URLs und WLAN-Zugangsdaten reicht das mehr als aus. Wenn du einen sehr langen Text kodierst, wird der Code dichter und schwerer zu scannen.' },
      { q: 'Sind QR-Codes sicher?', a: 'QR-Codes sind selbst nur ein Weg, Text zu übermitteln – sie sind weder sicher noch gefährlich. Das Risiko besteht darin, dass ein böswilliger Code auf eine Phishing-Seite verlinken könnte. Als Nutzer behandle gescannte Links mit derselben Vorsicht wie jeden anderen Link. Als Ersteller verlinke nur auf Ziele, die du kontrollierst und denen du vertraust.' },
      { q: 'Welche Fehlerkorrekturstufe soll ich wählen?', a: 'Stufe H verträgt ~30 % beschädigte oder verdeckte Fläche — ideal für Verpackungen und gedruckte Poster. Am Bildschirm reicht M (~15 %). Je höher die Stufe, desto dichter der Code; bei langen Texten wird das Scannen schwieriger.' },
    ],
    formula: {
      formula: FORMULA,
      variables:
        'version: Größenstufe des QR-Codes, 1 (kleinste) bis 40 (größte)\nmodules: schwarz-weiße Zellen je Seite des Symbols\nL, M, Q, H: Fehlerkorrekturstufen, die 7 %, 15 %, 25 % bzw. 30 % der Codewörter wiederherstellen\nquiet zone: freier Rand um den Code, 4 Module breit',
      explain:
        'QR-Symbole gibt es in 40 Versionen, deren quadratisches Raster pro Version um 4 Module je Seite wächst, beginnend bei 21 für Version 1. Höhere Fehlerkorrekturstufen verwenden mehr Codewörter für Redundanz, daher sinkt die Kapazität, während die Toleranz gegenüber Beschädigung steigt. Eine 4 Module breite Ruhezone hilft Scannern, die Ränder des Symbols zu finden.',
      example:
        'Schritt 1: Nimm einen QR-Code der Version 5.\nSchritt 2: Module je Seite = 21 + 4 × (5 − 1) = 21 + 16 = 37.\nSchritt 3: Auf Stufe M verträgt er bis zu 15 % Beschädigung und braucht rundherum eine 4 Module breite Ruhezone.\nErgebnis: ein Code mit 37 × 37 Modulen plus Rand.',
    },
  },
}
