/**
 * gps-coordinate-converter 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs + formula(变量说明/解释;公式本体与算例保留英文回退)。
 */
import type { ToolL10n } from '../tool-l10n'

// 公式本体(纯数学,三语共用;与 lib/tool-formulas.ts 逐字一致)
const FORMULA = 'DD = D + M ÷ 60 + S ÷ 3600 (negative for S/W)\nD = floor(|DD|);  M = floor((|DD| − D) × 60);  S = ((|DD| − D) × 60 − M) × 60'

export const GpsCoordinateConverterL10n: ToolL10n = {

  es: {
    formula: {
      formula: FORMULA,
      variables: 'DD = Grados decimales (N/E positivos, S/W negativos)\nD, M, S = Grados, minutos, segundos\nHemisferio = N/S para la latitud, E/W para la longitud\nPrecisión = 5 decimales ≈ 1,1 m, 6 ≈ 0,11 m',
      explain: 'Un minuto es la sexagésima parte de un grado y un segundo, la de un minuto, así que los tres formatos contienen exactamente la misma información — la conversión solo reajusta la base de la fracción, y las letras del hemisferio se traducen a signos.',
    },
    useCases: ['pegar coordenadas decimales de Google Maps en formularios que piden DMS', 'convertir grados-minutos-segundos de bitácoras o cartas náuticas a decimales', 'preparar entradas WGS84 para drones y receptores GPS', 'validar que latitud ≤90° y longitud ≤180°'],
    faqs: [
      { q: '¿Dónde se usa cada formato?', a: 'Los grados decimales (DD) son el estándar de Google Maps, GeoJSON y la mayoría del software; los grados-minutos-segundos (DMS) aparecen en cartas náuticas, aviación y navegación tradicional; los grados-minutos decimales (DDM) son habituales en GPS de mano y sentencias NMEA.' },
      { q: '¿Cómo se corresponden letras y signo?', a: 'Norte y Este son positivos; Sur y Oeste, negativos — «74.0060° W» y «-74.0060» son la misma coordenada. La herramienta acepta ambas formas, incluso con la letra pegada al número (40.7128°N).' },
      { q: '¿Cuántos decimales hacen falta?', a: 'El quinto decimal equivale a ~1,1 m y el sexto a ~0,11 m: 5 bastan para uso diario, 6 para geocaching o topografía. Con menos de 4 (~11 m) la navegación a pie ya se desvía.' },
      { q: '¿Por qué GeoJSON pone la longitud primero?', a: 'GeoJSON, PostGIS o shapely siguen el orden [longitud, latitud] (x-y), al revés del uso cotidiano — invertirlo lanza el punto al mar. Por eso la salida incluye una línea específica lon-first.' },
    ],
    ui: {
      'inputLabel': 'Coordenada (cualquier formato)',
      'outputLabel': 'Convertida a todos los formatos',
      'placeholder': "40.7128, -74.0060 o 40° 42' 46.1\" N, 74° 0' 21.6\" W",
      // 西经字母必须用 W:解析器只认 N/S/E/W 国际字母(USAGE 列表同口径),
      // 西班牙语的 "O"(Oeste)会被判为无法解析,示例不能自相矛盾
      'defaultInput': '40.7128° N, 74.0060° W',
      'note': '🧭 Grados decimales ↔ DMS ↔ DDM, con letras N/S/E/W en cualquier posición (pegadas al número también). Latitud dentro de ±90°, longitud ±180°; los 6 decimales resuelven unos 0,11 m.',
      'usage': '⚠️ No he podido interpretar esa coordenada. Formatos aceptados:',
    },
  },
  de: {
    formula: {
      formula: FORMULA,
      variables: 'DD = Dezimalgrade (N/E positiv, S/W negativ)\nD, M, S = Grad, Minuten, Sekunden\nHemisphäre = N/S für die Breite, E/W für die Länge\nPräzision = 5 Nachkommastellen ≈ 1,1 m, 6 ≈ 0,11 m',
      explain: 'Minuten sind Sechzigstel eines Grades und Sekunden Sechzigstel einer Minute — alle drei Formate tragen also dieselbe Information; die Umrechnung verschiebt nur die Basis des Bruchs, und die Hemisphärenbuchstaben übersetzen sich in Vorzeichen.',
    },
    useCases: ['Dezimalkoordinaten aus Google Maps in Formulare mit DMS-Angabe eintragen', 'Grad-Minuten-Sekunden aus Logbüchern oder Seekarten in Dezimalgrade umrechnen', 'WGS84-Eingaben für Drohnen und GPS-Empfänger vorbereiten', 'Breite ≤90° und Länge ≤180° auf Gültigkeit prüfen'],
    faqs: [
      { q: 'Wo wird welches Format gebraucht?', a: 'Dezimalgrade (DD) sind der Standard bei Google Maps, GeoJSON und den meisten Programmen; Grad-Minuten-Sekunden (DMS) dominieren Seekarten, Luftfahrt und klassische Navigation; Grad-Dezimalminuten (DDM) sind typisch für Hand-GPS und NMEA-Daten.' },
      { q: 'Wie entsprechen Buchstaben und Vorzeichen?', a: 'Nord und Ost sind positiv, Süd und West negativ — „74.0060° W“ und „-74.0060“ sind dieselbe Koordinate. Der Rechner nimmt beide Schreibungen, auch mit angehängtem Buchstaben (40.7128°N).' },
      { q: 'Wie viele Nachkommastellen brauche ich?', a: 'Die fünfte Stelle entspricht ~1,1 m, die sechste ~0,11 m: fünf genügen im Alltag, sechs für Geocaching oder Vermessung. Unter vier Stellen (~11 m) driftet die Fußnavigation spürbar.' },
      { q: 'Warum steht bei GeoJSON der Längengrad zuerst?', a: 'GeoJSON, PostGIS oder shapely nutzen die Reihenfolge [Längengrad, Breitengrad] (x-y), umgekehrt zum Alltag — vertauscht landet der Punkt im Meer. Deshalb gibt die Ausgabe eine eigene Lon-first-Zeile.' },
    ],
    ui: {
      'inputLabel': 'Koordinate (beliebiges Format)',
      'outputLabel': 'In alle Formate umgerechnet',
      'placeholder': "40.7128, -74.0060 oder 40° 42' 46.1\" N, 74° 0' 21.6\" W",
      'defaultInput': '40.7128° N, 74.0060° W',
      'note': '🧭 Dezimalgrade ↔ DMS ↔ DDM, Buchstaben N/S/E/W an beliebiger Position (auch direkt an der Zahl). Breite innerhalb ±90°, Länge ±180°; sechs Nachkommastellen auflösen etwa 0,11 m.',
      'usage': '⚠️ Diese Koordinate konnte nicht gelesen werden. Unterstützte Formate:',
    },
  },
}
