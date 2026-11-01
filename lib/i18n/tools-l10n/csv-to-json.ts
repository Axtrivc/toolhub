/**
 * csv-to-json 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const csvToJsonL10n: ToolL10n = {

  es: {
    ui: {
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para calcular.',
      defaultInput: 'nombre,edad,ciudad\nJuan,30,Madrid\nAna,25,Barcelona',
      inputLabel: 'CSV (con fila de encabezado)',
      outputLabel: 'Array JSON',
      note: '🔄 Convierte CSV a objetos JSON usando la fila de encabezado como claves. El delimitador (coma, punto y coma, tabulación) se detecta automáticamente — añade " ||| ;" o " ||| \\t" al final para forzarlo. Los campos entre comillas conservan sus espacios.',
    },
    useCases: [
      'importar datos de hojas de cálculo a aplicaciones',
      'convertir encabezados CSV en claves de objetos JSON',
      'preparar datos de configuración para una API',
      'transformar datos exportados desde Excel',
    ],
    faqs: [
      { q: '¿Y los archivos de Excel (.xlsx)?', a: 'Esta herramienta solo maneja CSV (texto plano). Para archivos de Excel, expórtalos a CSV desde Excel primero y conviértelos aquí. Librerías como SheetJS manejan .xlsx directamente en código.' },
    ],
  },
  de: {
    ui: {
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe.',
      defaultInput: 'name,alter,stadt\nMax,30,Berlin\nAnna,25,Hamburg',
      inputLabel: 'CSV (mit Kopfzeile)',
      outputLabel: 'JSON-Array',
      note: '🔄 Wandelt CSV anhand der Kopfzeile als Schlüssel in JSON-Objekte um. Das Trennzeichen (Komma, Semikolon, Tab) wird automatisch erkannt — hänge " ||| ;" oder " ||| \\t" an, um es vorzugeben. Felder in Anführungszeichen behalten ihre Leerzeichen.',
    },
    useCases: [
      'Tabellendaten in Anwendungen importieren',
      'CSV-Header zu JSON-Objektschlüsseln machen',
      'Konfigurationsdaten für eine API aufbereiten',
      'aus Excel exportierte Daten umwandeln',
    ],
    faqs: [
      { q: 'Was ist mit Excel-Dateien (.xlsx)?', a: 'Dieses Werkzeug verarbeitet nur CSV (Klartext). Für Excel-Dateien exportiere sie zuerst aus Excel als CSV und wandle sie hier um. Bibliotheken wie SheetJS verarbeiten .xlsx im Code direkt.' },
    ],
  },
}
