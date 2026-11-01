/**
 * csv-to-finetune-jsonl 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(格式转换工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const CsvToFinetuneJsonlL10n: ToolL10n = {

  es: {
    useCases: [
      'Convertir el CSV de pares pregunta-respuesta del equipo de etiquetado al JSONL chat-messages que exige la API de fine-tuning de OpenAI',
      'Usar la columna system opcional para que todas las muestras compartan la misma personalidad o reglas de negocio, sin escribir scripts',
      'Chequeo de formato antes del envío: convertir 50 muestras y verificar la estructura messages y la codificación UTF-8',
      'Limpieza de datos: las filas con assistant vacío quedan marcadas para corregirlas en el origen en lugar de descartarlas',
    ],
    faqs: [
      { q: '¿Cómo es el JSONL resultante?', a: 'Un objeto JSON por línea: {"messages":[{"role":"system",...},{"role":"user",...},{"role":"assistant",...}]} — exactamente el formato chat que espera el endpoint de fine-tuning de OpenAI, listo para subir con la files API.' },
      { q: '¿Qué pasa con las filas sin assistant?', a: 'Se marcan, no se descartan. Un assistant vacío es letal en fine-tuning (el modelo aprende a «no responder»), así que la herramienta lista los números de fila para que los corrijas en el CSV de origen.' },
      { q: '¿Y si las celdas tienen comas o comillas?', a: 'Se parsean según RFC 4180: las celdas con comas, saltos de línea o comillas van entre comillas dobles y las comillas internas se duplican. Las exportaciones de Excel y Google Sheets cumplen la norma — pégalas directamente.' },
      { q: '¿Cuántas muestras hacen falta?', a: 'OpenAI recomienda empezar con 50-100 ejemplos de alta calidad para ver mejoras claras; la mayoría de tareas bastan con unos cientos. La calidad (estilo consistente, respuestas correctas) pesa mucho más que la cantidad — limpia los datos aquí antes de escalar.' },
    ],
    ui: {
      'note': '📚 La salida es el JSONL de mensajes que espera la API de fine-tuning de OpenAI. Las filas con assistant vacío se marcan (no se descartan). Comillas y comas dentro de las celdas se tratan según RFC 4180.',
      'assistantColLabel': 'Columna assistant',
      'copyJsonl': 'Copiar JSONL',
      'csvLabel': 'CSV (con fila de encabezado)',
      'errAssistantCol': 'Columna assistant no encontrada',
      'errSysCol': 'Columna system no encontrada',
      'errUserCol': 'Columna user no encontrada',
      'examples': 'ejemplos',
      'loadSample': 'Cargar ejemplo',
      'needHeaderRow': 'Se necesita una fila de encabezado y al menos una fila de datos',
      'rowNoAssistant': 'Fila {n}: contenido assistant vacío',
      'sysColLabel': 'Columna system (opcional)',
      'userColLabel': 'Columna user',
      'inputTooLarge': 'La entrada supera los {n} caracteres — la conversión se omite para mantener la escritura fluida. Recorta o divide el CSV.',
    },
  },
  de: {
    useCases: [
      'Das CSV mit Frage-Antwort-Paaren vom Labeling-Team in das chat-messages-JSONL der OpenAI-Fine-Tuning-API umwandeln',
      'Über die optionale system-Spalte in jeder Probe dieselbe Persona oder Geschäftsregel hinterlegen — ganz ohne Skript',
      'Format-Check vor dem Upload: 50 Proben konvertieren und messages-Struktur sowie UTF-8-Kodierung verifizieren',
      'Datenhygiene: Zeilen mit leerem Assistant werden explizit markiert, damit du sie direkt in der Quelle korrigierst, statt sie still zu verlieren',
    ],
    faqs: [
      { q: 'Wie sieht das JSONL aus?', a: 'Ein JSON-Objekt pro Zeile: {"messages":[{"role":"system",...},{"role":"user",...},{"role":"assistant",...}]} — exakt das Chat-Format des OpenAI-Fine-Tuning-Endpunkts, direkt für die files-API geeignet.' },
      { q: 'Was passiert mit Zeilen ohne Assistant?', a: 'Sie werden markiert, nicht verworfen. Ein leerer Assistant ist im Fine-Tuning fatal (das Modell lernt „nicht antworten“), darum listet das Werkzeug die Zeilennummern zur Korrektur im Quell-CSV.' },
      { q: 'Wie werden Kommas und Anführungszeichen behandelt?', a: 'Strikt nach RFC 4180: Zellen mit Kommas, Zeilenumbrüchen oder Anführungszeichen stehen in doppelten Anführungszeichen, innere Anführungszeichen werden verdoppelt. Exporte aus Excel und Google Sheets erfüllen das von Haus aus — du kannst sie direkt einfügen.' },
      { q: 'Wie viele Beispiele braucht ein Fine-Tuning?', a: 'OpenAI empfiehlt 50-100 hochwertige Beispiele für den Anfang; die meisten Aufgaben kommen mit wenigen hundert aus. Qualität (konsistenter Stil, korrekte Antworten) schlägt Quantität deutlich — erst hier säubern, dann skalieren.' },
    ],
    ui: {
      'note': '📚 Die Ausgabe ist das Chat-Messages-JSONL der OpenAI-Fine-Tuning-API. Zeilen mit leerem Assistant werden markiert, nicht verworfen. Anführungszeichen und Kommas in Zellen folgen RFC 4180.',
      'assistantColLabel': 'Assistant-Spalte',
      'copyJsonl': 'JSONL kopieren',
      'csvLabel': 'CSV (mit Kopfzeile)',
      'errAssistantCol': 'Assistant-Spalte nicht gefunden',
      'errSysCol': 'System-Spalte nicht gefunden',
      'errUserCol': 'User-Spalte nicht gefunden',
      'examples': 'Beispiele',
      'loadSample': 'Beispiel laden',
      'needHeaderRow': 'Eine Kopfzeile und mindestens eine Datenzeile sind erforderlich',
      'rowNoAssistant': 'Zeile {n}: leerer Assistant-Inhalt',
      'sysColLabel': 'System-Spalte (optional)',
      'userColLabel': 'User-Spalte',
      'inputTooLarge': 'Die Eingabe überschreitet {n} Zeichen — die Konvertierung wird übersprungen, damit die Eingabe reaktionsfähig bleibt. CSV kürzen oder aufteilen.',
    },
  },
}
