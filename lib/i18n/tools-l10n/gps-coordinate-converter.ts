/**
 * gps-coordinate-converter 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const GpsCoordinateConverterL10n: ToolL10n = {
  zh: {
    useCases: ['把 Google Maps 的十进制坐标填进要求 DMS 的表格', '把地理缓存/航海日志里的度分秒转成十进制', '给无人机或 GPS 设备准备 WGS84 十进制输入', '核对纬度 ≤90°、经度 ≤180° 的数据合法性'],
    faqs: [
      { q: '三种格式分别用在哪?', a: '十进制度(DD)是 Google Maps、GeoJSON、多数软件的标准;度分秒(DMS)是海图、航空和传统导航仪的写法;度分(DDM,度.分分分)常见于手持 GPS 和 NMEA 语句。' },
      { q: '方向字母和负号怎么对应?', a: '北纬、东经为正,南纬、西经为负——"74.0060° W" 与 "-74.0060" 是同一坐标。工具两种写法都认,字母粘在数字上(如 40.7128°N)也能拆开。' },
      { q: '小数点后保留几位才够用?', a: '第 5 位小数约合 1.1 米,第 6 位约 0.11 米——日常定位 5 位足够,寻宝/测绘用 6 位。少于 4 位(约 11 米)对步行导航就开始偏了。' },
      { q: '为什么 GeoJSON 要经度在前?', a: 'GeoJSON、PostGIS、shapely 等地理库遵循 [经度, 纬度] 的 x-y 顺序,与日常"纬度,经度"相反——抄错顺序会把点扔到海里。输出里专门给了 lon-first 的一行。' },
    ],
    ui: {
      'inputLabel': '坐标(任意格式)',
      'outputLabel': '转换为全部格式',
      'placeholder': '40.7128, -74.0060 或 40° 42\' 46.1" N, 74° 0\' 21.6" W',
      'defaultInput': '40.7128° N, 74.0060° W',
      'note': '🧭 十进制度 ↔ 度分秒 ↔ 度分互转,N/S/E/W 方向字母任意位置都能解析(粘在数字上也行)。纬度须在 ±90°、经度 ±180° 之内;6 位小数的十进制度约合 0.11 米。',
      'usage': '⚠️ 无法解析该坐标。支持的格式:',
    },
  },
  es: {
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
