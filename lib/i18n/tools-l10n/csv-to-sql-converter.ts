/**
 * csv-to-sql-converter 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CsvToSqlConverterL10n: ToolL10n = {

  es: {
    useCases: ['convertir un CSV exportado en datos semilla INSERT', 'montar rápido un lote de datos de prueba para demos', 'migrar a la base de datos un CSV guardado desde Excel', 'generar INSERT multivalor por lotes para importar más rápido'],
    faqs: [
      { q: '¿Qué dialecto SQL genera?', a: 'INSERT INTO ... VALUES puro, válido en MySQL/PostgreSQL/SQLite; las comillas de identificador conmutan entre backticks (MySQL) y comillas dobles (ANSI), con MySQL por defecto.' },
      { q: '¿Cómo escapa comillas y caracteres especiales?', a: 'Las comillas simples de los valores se duplican según el estándar SQL; los nombres de tabla y columna se sanean a [A-Za-z0-9_] antes de entrecomillar, para que un encabezado de CSV no arrastre backticks ni fragmentos de inyección.' },
      { q: '¿Qué pasa con las celdas vacías?', a: 'A elegir: NULL o cadena vacía. Con la inferencia de tipos activa, las columnas totalmente numéricas van sin comillas y el resto se emite como cadena.' },
      { q: '¿Puede generar también el CREATE TABLE?', a: 'No — solo produce INSERT. La fila de encabezado se convierte en nombres de columna, perfecta para escribir tu CREATE TABLE a mano; los tipos no se pueden inferir con fiabilidad de un CSV y es mejor dejarlos en manos de la base.' },
    ],
    ui: {
      'inputLabel': 'Tu CSV',
      'outputLabel': 'Sentencias INSERT',
      'loadSample': 'Cargar ejemplo',
      'tblLabel': 'Nombre de tabla',
      'batchLabel': 'Filas por INSERT',
      'headerRow': 'La primera fila es el encabezado',
      'includeCols': 'Lista de columnas en el INSERT',
      'inferTypes': 'Columnas numéricas sin comillas',
      'nullsAsNull': 'Celdas vacías → NULL',
      'quoteLabel': 'Comillas de identificador:',
      'rowsStat': '{r} filas · {s} sentencias',
      'raggedNote': '{n} fila(s) cortas, completadas con celdas vacías',
      'errNoRows': 'No se detectaron filas — pega primero un CSV con encabezado.',
      'errHeaderOnly': 'Solo se encontró la fila de encabezado — añade al menos una fila de datos.',
      'tooLarge': 'Entrada demasiado grande — el máximo admitido es de 200 000 caracteres.',
      'note': '🔐 Los valores se escapan al estilo estándar SQL (comillas simples duplicadas); los identificadores se sanean a [A-Za-z0-9_] y se entrecomilan con backticks o comillas dobles. Es un generador de scripts de importación — para cargar datos no confiables en tiempo de ejecución usa consultas parametrizadas, nunca concatenación.',
    },
  },
  de: {
    useCases: ['exportiertes CSV in INSERT-Seed-Daten umwandeln', 'schnell Demo-Testdaten aufsetzen', 'ein aus Excel gespeichertes CSV in die Datenbank migrieren', 'mehrwertige Batch-INSERTs für schnellere Imports erzeugen'],
    faqs: [
      { q: 'Welcher SQL-Dialekt kommt raus?', a: 'Pures INSERT INTO ... VALUES, gültig in MySQL/PostgreSQL/SQLite; die Identifier-Quotes schalten zwischen Backticks (MySQL) und doppelten Anführungszeichen (ANSI) um, Standard ist MySQL.' },
      { q: 'Wie werden Anführungszeichen und Sonderzeichen escaped?', a: 'Einfache Anführungszeichen in Werten werden SQL-Standard-gemäß verdoppelt; Tabellen- und Spaltennamen werden zu [A-Za-z0-9_] gesäubert und erst dann gequotet — so schleppt ein CSV-Header keine Backticks oder Injection-Fragmente mit.' },
      { q: 'Was passiert mit leeren Zellen?', a: 'Wählbar: NULL oder leerer String. Bei aktiver Typerkennung bleiben rein numerische Spalten ungequotet, alles andere geht als String raus.' },
      { q: 'Kann es auch das CREATE TABLE erzeugen?', a: 'Nein — es entstehen nur INSERTs. Die Kopfzeile wird zu Spaltennamen, ideal, um das CREATE TABLE selbst zu schreiben; Typen lassen sich aus einem CSV nicht zuverlässig ableiten, das sollte die Datenbank entscheiden.' },
    ],
    ui: {
      'inputLabel': 'Dein CSV',
      'outputLabel': 'INSERT-Anweisungen',
      'loadSample': 'Beispiel laden',
      'tblLabel': 'Tabellenname',
      'batchLabel': 'Zeilen pro INSERT',
      'headerRow': 'Erste Zeile ist der Header',
      'includeCols': 'Spaltenliste im INSERT',
      'inferTypes': 'Numerische Spalten ohne Quotes',
      'nullsAsNull': 'Leere Zellen → NULL',
      'quoteLabel': 'Identifier-Quotes:',
      'rowsStat': '{r} Zeilen · {s} Anweisungen',
      'raggedNote': '{n} kurze Zeile(n) mit leeren Zellen aufgefüllt',
      'errNoRows': 'Keine Datenzeilen erkannt — füge zuerst CSV-Text mit Header ein.',
      'errHeaderOnly': 'Es gibt nur die Headerzeile — füge mindestens eine Datenzeile hinzu.',
      'tooLarge': 'Eingabe zu groß — unterstützt sind bis zu 200.000 Zeichen.',
      'note': '🔐 Werte werden SQL-Standard-gemäß escaped (einfache Anführungszeichen verdoppelt); Identifier werden zu [A-Za-z0-9_] gesäubert und mit Backticks bzw. doppelten Anführungszeichen versehen. Das ist ein Generator für Importskripte — für nicht vertrauenswürdige Daten zur Laufzeit parametrisierte Abfragen nutzen, keine String-Verkettung.',
    },
  },
}
