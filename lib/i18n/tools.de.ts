/**
 * Werkzeuge — deutsche Übersetzungen (de)
 *
 * Struktur: Record<slug, { name, shortIntro }>
 * - Die slugs entsprechen 1:1 lib/tools.ts (225 Werkzeuge).
 * - Fehlt ein slug, wird auf den englischen Originalwert zurückgegriffen
 *   (siehe lib/i18n.ts getToolName/getToolShortIntro).
 * - Übersetzt werden nur name + shortIntro der Karten;
 *   SEO-Felder (title/description/h1/keywords) bleiben englisch.
 */

export const deTools: Record<string, { name: string; shortIntro: string }> = {
  // ─────────── 💳 Finanzrechner ───────────
  'loan-calculator': {
    name: 'Kreditrechner',
    shortIntro: 'Berechne Monatsrate, Zinsen und Gesamtkosten für jeden Kredit.',
  },
  'mortgage-calculator': {
    name: 'Hypothekenrechner',
    shortIntro: 'Berechne monatliche Rate und Zinsen der Hypothek.',
  },
  'compound-interest-calculator': {
    name: 'Zinseszinsrechner',
    shortIntro: 'Sieh, wie dein Erspartes durch Zinseszins wächst.',
  },
  'apy-calculator': {
    name: 'APY-Rechner',
    shortIntro: 'Rechne APR in APY je nach Zinsperiode um.',
  },
  'roi-calculator': {
    name: 'ROI-Rechner',
    shortIntro: 'Berechne Gesamt- und annualisierte Rendite.',
  },
  'credit-card-minimum-payment-calculator': {
    name: 'Mindestzahlungsrechner (Kreditkarte)',
    shortIntro: 'Sieh, wie die Mindestzahlung in Zins und Tilgung zerfällt.',
  },
  'cash-back-calculator': {
    name: 'Cashback-Rechner',
    shortIntro: 'Berechne den wahren Wert des Cashbacks abzüglich Jahresgebühren.',
  },
  'down-payment-calculator': {
    name: 'Eigenkapitalrechner',
    shortIntro: 'Finde dein Eigenkapital und ob PMI nötig ist.',
  },
  'dti-calculator': {
    name: 'Schulden-Einkommens-Rechner',
    shortIntro: 'Berechne die DTI-Quote und ob Kreditgeber zustimmen.',
  },
  'commission-calculator': {
    name: 'Provisionsrechner',
    shortIntro: 'Berechne Verkaufsprovision plus Grundgehalt.',
  },
  'bill-split-calculator': {
    name: 'Rechnungs-Teilungsrechner',
    shortIntro: 'Teile eine Rechnung inkl. Trinkgeld fair auf.',
  },
  'savings-goal-calculator': {
    name: 'Sparziel-Rechner',
    shortIntro: 'Finde den Monatsbetrag für jedes Sparziel.',
  },
  'net-worth-calculator': {
    name: 'Vermögensrechner',
    shortIntro: 'Berechne dein Vermögen — Aktiva minus Verbindlichkeiten.',
  },
  'annuity-calculator': {
    name: 'Annuitätenrechner',
    shortIntro: 'Jährliche/monatliche Auszahlung aus Kapital über N Jahre.',
  },
  'capital-gains-tax-estimator': {
    name: 'Schätzer für Kapitalertragsteuer',
    shortIntro: 'Schätzt die Steuer (kurz- vs. langfristige Sätze).',
  },
  'rent-vs-buy-calculator': {
    name: 'Mieten-vs-Kaufen-Rechner',
    shortIntro: 'Vergleiche die Gesamtkosten von Miete vs. Kauf über einen Zeitraum.',
  },
  'inflation-calculator': {
    name: 'Inflationsrechner',
    shortIntro: 'Sieh, wie Inflation den Geldwert über Zeit verringert.',
  },
  'retirement-calculator': {
    name: 'Rentenrechner',
    shortIntro: 'Projiziere dein Altersvorsorgevermögen mit Zinseszins.',
  },
  'simple-interest-calculator': {
    name: 'Zinsrechner (einfach)',
    shortIntro: 'Berechne Zinsen mit der Formel I = Prt.',
  },
  'unit-price-calculator': {
    name: 'Stückpreisrechner',
    shortIntro: 'Vergleiche Stückpreise, um das beste Angebot zu finden.',
  },
  'markup-calculator': {
    name: 'Aufschlagsrechner',
    shortIntro: 'Verkaufspreis und Marge aus Kosten und Aufschlag.',
  },
  'hourly-to-salary-calculator': {
    name: 'Stundenlohn-zu-Jahresgehalt',
    shortIntro: 'Rechne deinen Stundenlohn in ein Jahresgehalt um.',
  },
  'credit-card-payoff-calculator': {
    name: 'Kreditkarten-Tilgungsrechner',
    shortIntro: 'Sieh, wie lange die Kartenschuld braucht.',
  },
  'income-tax-estimator': {
    name: 'Einkommensteuer-Schätzer',
    shortIntro: 'Schätzt US-Einkommensteuer und Nettoeinkommen.',
  },
  'salary-converter': {
    name: 'Gehaltsrechner',
    shortIntro: 'Rechne Gehalt zwischen jährlich, monatlich, 14-tägig und Stunden.',
  },
  'sales-tax-calculator': {
    name: 'Mehrwertsteuerrechner',
    shortIntro: 'Füge Steuer zu jedem Preis hinzu oder entferne sie sofort.',
  },
  'tip-calculator': {
    name: 'Trinkgeldrechner',
    shortIntro: 'Berechne Trinkgeld und teile es beliebig auf.',
  },
  'discount-calculator': {
    name: 'Rabattrechner',
    shortIntro: 'Finde den Endpreis nach Rabatt und dein Sparpotenzial.',
  },
  'auto-loan-calculator': {
    name: 'Autokredit-Rechner',
    shortIntro: 'Berechne die Autorate mit Anzahlung, Inzahlungnahme und Steuern.',
  },
  'ebay-fee-calculator': {
    name: 'eBay-Gebührenrechner',
    shortIntro: 'Sieh genau, was nach eBay- oder Etsy-Gebühren netto übrig bleibt.',
  },
  'reverse-stripe-fee-calculator': {
    name: 'Stripe-Gebühren-Rückrechner',
    shortIntro: 'Berechne, wie viel du verlangen musst, um netto genau den Wunschbetrag zu erhalten.',
  },
  'electricity-cost-calculator': {
    name: 'Stromkosten-Rechner',
    shortIntro: 'Was jedes Gerät wirklich pro Tag, Monat und Jahr kostet.',
  },
  'fuel-cost-calculator': {
    name: 'Spritkosten-Rechner',
    shortIntro: 'Benzinkosten für jede Fahrt — hin, zurück und pro Person.',
  },
  'subscription-cost-calculator': {
    name: 'Abo-Kosten-Rechner',
    shortIntro: 'Alle Abos summieren und den jährlichen Schaden sehen.',
  },
  'overtime-calculator': {
    name: 'Überstunden-Rechner',
    shortIntro: 'Wochenlohn mit 1,5×, 2× oder eigenen Multiplikatoren.',
  },
  'take-home-pay-calculator': {
    name: 'Netto-Gehaltsrechner',
    shortIntro: 'Nettolohn nach Bundessteuer, FICA und Abzügen vor Steuern.',
  },
  'wedding-budget-calculator': {
    name: 'Hochzeitsbudget-Rechner',
    shortIntro: 'Gesamtbudget in Kategoriebeträge mit typischen Prozentsätzen.',
  },
  'amortization-table-generator': {
    name: 'Tilgungsplan-Generator',
    shortIntro: 'Kompletter Zahlungsplan mit laufendem Saldo und CSV-Export.',
  },
  'car-cost-calculator': {
    name: 'Autokosten-Rechner',
    shortIntro: 'Gesamte Haltungskosten: Sprit, Versicherung, Wartung, Wertverlust, Finanzierung.',
  },

  // ─────────── ⚙️ Entwickler-Werkzeuge ───────────
  'json-formatter': {
    name: 'JSON-Formatierer',
    shortIntro: 'Formatiere und validiere JSON mit korrekter Einrückung.',
  },
  'jwt-decoder': {
    name: 'JWT-Decoder',
    shortIntro: 'Decodiere JWT lokal: Header, Payload und Signatur ansehen.',
  },
  'base64-encoder': {
    name: 'Base64-Codierer',
    shortIntro: 'Codiere Text sofort in Base64, mit korrektem UTF-8.',
  },
  'base64-decoder': {
    name: 'Base64-Decodierer',
    shortIntro: 'Decodiere Base64 sofort in lesbaren Text.',
  },
  'regex-tester': {
    name: 'Regex-Tester & Erklärer',
    shortIntro: 'Teste Regex mit Treffer-Highlight und Syntax-Spickzettel.',
  },
  'uuid-generator': {
    name: 'UUID-Generator',
    shortIntro: 'Erzeugt zufällige v4-UUIDs für DB, Sessions und APIs.',
  },
  'curl-converter': {
    name: 'curl-zu-Code-Konverter',
    shortIntro: 'Macht aus curl JavaScript (Fetch/Axios) und Python requests.',
  },
  'markdown-to-html': {
    name: 'Markdown-zu-HTML-Konverter',
    shortIntro: 'Mache aus Markdown sauberes HTML mit Live-Vorschau.',
  },
  'hash-generator': {
    name: 'Hash-Generator (SHA-256)',
    shortIntro: 'SHA-256- und SHA-1-Hashes aus Text erzeugen.',
  },
  'binary-to-text': {
    name: 'Binär-zu-Text-Konverter',
    shortIntro: 'Decodiere Binärdaten zurück in lesbaren Text.',
  },
  'text-to-binary': {
    name: 'Text-zu-Binär-Konverter',
    shortIntro: 'Wandle Textzeichen in Binärdarstellung um.',
  },
  'url-query-parser': {
    name: 'URL-Query-Parser',
    shortIntro: 'Extrahiere URL-Query-Parameter in ein JSON-Objekt.',
  },
  'text-size-estimator': {
    name: 'Textgrößen-Schätzer',
    shortIntro: 'Schätze die Byte-Größe deines Textes in diversen Formaten.',
  },
  'json-minifier': {
    name: 'JSON-Minifier',
    shortIntro: 'Entfernt allen Whitespace, um JSON zu minimieren.',
  },
  'csv-to-json': {
    name: 'CSV-zu-JSON-Konverter',
    shortIntro: 'CSV in ein JSON-Array mithilfe der Kopfzeile.',
  },
  'json-to-csv': {
    name: 'JSON-zu-CSV-Konverter',
    shortIntro: 'JSON-Objekt-Array in das CSV-Format umwandeln.',
  },
  'lorem-ipsum-generator': {
    name: 'Lorem-Ipsum-Generator',
    shortIntro: 'Platzhaltertext für Mockups und Designs erzeugen.',
  },
  'random-number-generator': {
    name: 'Zufallszahlengenerator',
    shortIntro: 'Zufallszahlen in beliebigem Bereich, optional eindeutig.',
  },
  'html-escape': {
    name: 'HTML-Escape',
    shortIntro: 'Maskiere HTML-Sonderzeichen, um XSS zu verhindern.',
  },
  'html-unescape': {
    name: 'HTML-Unescape',
    shortIntro: 'Wandelt HTML-Entities zurück in lesbare Zeichen.',
  },
  'url-encoder': {
    name: 'URL-Codierer',
    shortIntro: 'Codiere Text für sichere Verwendung in URLs.',
  },
  'url-decoder': {
    name: 'URL-Decodierer',
    shortIntro: 'Decodiere Prozent-codierte URLs zurück in Text.',
  },
  'slug-generator': {
    name: 'Slug-Generator',
    shortIntro: 'Macht aus Titeln sofort saubere, SEO-freundliche URL-Slugs.',
  },
  'json-to-typescript': {
    name: 'JSON-zu-TypeScript',
    shortIntro: 'JSON einfügen und sofort saubere, verschachtelte TS-Interfaces erhalten.',
  },
  'yaml-to-json': {
    name: 'YAML-zu-JSON-Konverter',
    shortIntro: 'YAML einfügen und sofort sauberes, formatiertes JSON erhalten.',
  },
  'sql-formatter': {
    name: 'SQL-Formatierer',
    shortIntro: 'Verschönere SQL mit sauberer Einrückung und Großschreibung.',
  },
  'image-to-base64': {
    name: 'Bild-zu-Base64-Konverter',
    shortIntro: 'Macht aus einem Bild eine Base64-Data-URI zum Einbetten.',
  },
  'ip-checker': {
    name: 'IP-Qualitäts- & Fraud-Checker',
    shortIntro: 'Prüft IP-Qualität, ASN-Typ, Fraud-Score und Zeitzonen-Konsistenz.',
  },
  'chmod-calculator': {
    name: 'Chmod-Rechner',
    shortIntro: 'Zwischen oktalen 755 und symbolischen rwxr-xr-x Rechten umrechnen.',
  },
  'code-beautifier': {
    name: 'Code-Beautifier',
    shortIntro: 'Minifiziertes HTML, CSS, JS und JSON formatieren und einrücken.',
  },
  'gpt-token-counter': {
    name: 'GPT-Token-Zähler',
    shortIntro: 'Tokens und API-Kosten für GPT- und Claude-Prompts schätzen.',
  },
  'ip-subnet-calculator': {
    name: 'IP-Subnetz-Rechner',
    shortIntro: 'Netzmaske, Netzwerk, Broadcast und Host-Bereich aus CIDR berechnen.',
  },
  'json-schema-generator': {
    name: 'JSON-Schema-Generator',
    shortIntro: 'Beliebige JSON-Daten in ein Draft-07-JSON-Schema umwandeln.',
  },
  'naming-case-converter': {
    name: 'Namenskonvention-Konverter',
    shortIntro: 'Namen zwischen camelCase, snake_case, kebab-case u. a. umwandeln.',
  },
  'nginx-config-generator': {
    name: 'Nginx-Konfiggenerator',
    shortIntro: 'Reverse-Proxy-Serverblock für nginx mit SSL und Caching erstellen.',
  },
  'random-choice-picker': {
    name: 'Zufallsauswahl',
    shortIntro: 'Optionen einfügen, drehen und den Zufall entscheiden lassen.',
  },
  'user-agent-parser': {
    name: 'User-Agent-Parser',
    shortIntro: 'User-Agent-Strings in Browser, OS, Engine und Gerät zerlegen.',
  },
  'epoch-converter': {
    name: 'Epoch-Konverter',
    shortIntro: 'Unix-Timestamps in Datum und zurück, in UTC oder Ortszeit.',
  },
  'json-diff': {
    name: 'JSON-Vergleich',
    shortIntro: 'Zwei JSON-Payloads Feld für Feld vergleichen, reihenfolgeunabhängig.',
  },
  'robots-txt-generator': {
    name: 'robots.txt-Generator',
    shortIntro: 'Korrekte robots.txt mit Vorlagen und Live-Vorschau erstellen.',
  },
  'keycode-info': {
    name: 'Tastatur-Event-Info (Keycode)',
    shortIntro: 'Beliebige Taste drücken — key, code, keyCode und Modifikatoren live.',
  },
  'mime-type-lookup': {
    name: 'MIME-Typ-Suche',
    shortIntro: 'Erweiterung ↔ MIME-Typ für HTTP-Header und Konfigurationen.',
  },
  'xml-formatter': {
    name: 'XML-Formatter & Validator',
    shortIntro: 'XML schön drucken, minifizieren oder gezielt validieren.',
  },
  'log-filter-tool': {
    name: 'Log-Filter & Grep',
    shortIntro: 'Grep-artiges Filtern von Logs — Stichwort, Level oder Regex.',
  },
  'ascii-table': {
    name: 'ASCII-Tabelle',
    shortIntro: 'Jedes ASCII-Zeichen mit Dez/Hex/Okt/Bin-Code, durchsuchbar.',
  },
  'jwt-generator': {
    name: 'JWT-Generator',
    shortIntro: 'Signierte JWTs lokal erstellen — passt zu unserem Decoder zum Testen.',
  },
  'base-converter': {
    name: 'Basen-Umrechner (2-36)',
    shortIntro: 'Beliebige Basis 2–36, mit Brüchen, alle gängigen Basen auf einmal.',
  },
  'cron-expression-generator': {
    name: 'Cron-Ausdrucks-Generator',
    shortIntro: 'Cron-Zeitpläne per Klick bauen, mit Live-Preview in Klartext.',
  },
  'htaccess-redirect-generator': {
    name: '.htaccess-Redirect-Generator',
    shortIntro: '301s, Domain-Umzüge, HTTPS und Canonical-Regeln ohne Tränen.',
  },
  'unicode-character-lookup': {
    name: 'Unicode-Zeichensuche',
    shortIntro: 'Jedes Symbol per Name oder Einfügen finden — Codepoint und Block.',
  },
  'toml-to-json': {
    name: 'TOML zu JSON',
    shortIntro: 'Cargo-/pyproject-TOML lokal zu sauberem JSON parsen.',
  },

  // ─────────── 🔤 Text-Werkzeuge ───────────
  'word-counter': {
    name: 'Wortzähler',
    shortIntro: 'Zählt sofort Wörter, Zeichen, Sätze und Lesezeit.',
  },
  'text-diff': {
    name: 'Text-Diff-Vergleich',
    shortIntro: 'Vergleiche zwei Texte und sieh, was sich geändert hat.',
  },
  'remove-line-breaks': {
    name: 'Zeilenumbrüche entfernen',
    shortIntro: 'Verbindet mehrzeiligen Text zu einer Zeile.',
  },
  'find-and-replace': {
    name: 'Suchen und Ersetzen',
    shortIntro: 'Finde und ersetze sofort beliebigen Text.',
  },
  'uppercase-converter': {
    name: 'In GROSSBUCHSTABEN',
    shortIntro: 'Wandelt jeden Text sofort in GROSSBUCHSTABEN um.',
  },
  'lowercase-converter': {
    name: 'In Kleinbuchstaben',
    shortIntro: 'Wandelt jeden Text sofort in kleinbuchstaben um.',
  },
  'title-case-converter': {
    name: 'Title-Case-Konverter',
    shortIntro: 'Jedes Wort großschreiben — für Titel und Überschriften.',
  },
  'sentence-case-converter': {
    name: 'Satz-Case-Konverter',
    shortIntro: 'Ersten Buchstaben jedes Satzes automatisch großschreiben.',
  },
  'slug-to-title': {
    name: 'Slug-zu-Titel-Konverter',
    shortIntro: 'Macht aus URL-Slugs wieder lesbare Titel.',
  },
  'html-tag-stripper': {
    name: 'HTML-Tag-Entferner',
    shortIntro: 'Entfernt alle HTML-Tags für sauberen Text.',
  },
  'character-frequency': {
    name: 'Zeichenhäufigkeits-Zähler',
    shortIntro: 'Zählt, wie oft jedes Zeichen im Text vorkommt.',
  },
  'email-extractor': {
    name: 'E-Mail-Extraktor',
    shortIntro: 'Zieht alle E-Mail-Adressen aus beliebigem Text heraus.',
  },
  'url-extractor': {
    name: 'URL-Extraktor',
    shortIntro: 'Zieht alle Web-Links aus beliebigem Text heraus.',
  },
  'add-line-numbers': {
    name: 'Zeilennummern hinzufügen',
    shortIntro: 'Jeder Textzeile eine Nummer geben.',
  },
  'text-to-list': {
    name: 'Text-zu-Liste-Konverter',
    shortIntro: 'Jeder Textzeile einen Aufzählungspunkt hinzufügen.',
  },
  'reverse-text': {
    name: 'Text-Umkehr-Generator',
    shortIntro: 'Kehre beliebigen Text um — Spaß für Rätsel und Chiffren.',
  },
  'remove-duplicate-lines': {
    name: 'Duplikat-Zeilen entfernen',
    shortIntro: 'Listen bereinigen, Duplikate entfernen, Reihenfolge erhalten.',
  },
  'sort-lines': {
    name: 'Textzeilen sortieren',
    shortIntro: 'Sortiere jede Liste mit einem Klick alphabetisch.',
  },
  'whitespace-remover': {
    name: 'Whitespace-Entferner',
    shortIntro: 'Bereinigt unordentliche Abstände in jedem Text.',
  },
  'list-diff': {
    name: 'Listen-Diff- und Schnittmengen-Prüfer',
    shortIntro: 'Vergleiche zwei Listen und finde eindeutige/gemeinsame Items.',
  },
  'csv-to-markdown-table': {
    name: 'CSV zu Markdown-Tabelle',
    shortIntro: 'CSV-/TSV-Daten in GitHub-fertige Markdown-Tabellen umwandeln.',
  },
  'srt-subtitle-shift': {
    name: 'SRT-Untertitel-Shifter',
    shortIntro: 'Untertitel-Zeiten um einen beliebigen Offset verschieben und Formatierung entfernen.',
  },
  'text-cleaner': {
    name: 'Text-Bereiniger',
    shortIntro: 'Emojis, Akzente und Sonderzeichen aus Text entfernen.',
  },
  'wordle-solver': {
    name: 'Wordle-Löser',
    shortIntro: 'Wordle-Antworten anhand bekannter, enthaltener und ausgeschlossener Buchstaben eingrenzen.',
  },
  'line-diff-checker': {
    name: 'Zeilen-Diff',
    shortIntro: 'Diff Zeile für Zeile mit Anzahl von Ergänzungen, Löschungen und Änderungen.',
  },
  'markdown-toc-generator': {
    name: 'Markdown-Inhaltsverzeichnis',
    shortIntro: 'Verlinkte Gliederung aus deinen Überschriften, GitHub-Slug-kompatibel.',
  },
  'reading-level-checker': {
    name: 'Lesbarkeits-Check',
    shortIntro: 'Flesch-Scores und Klassenstufe mit Satz-für-Satz-Analyse.',
  },
  'morse-code-translator': {
    name: 'Morse-Übersetzer',
    shortIntro: 'Zweiseitige Morse-Übersetzung mit Punkt-Strich-Ansicht und Piepton.',
  },
  'typing-speed-test': {
    name: 'Tippgeschwindigkeitstest',
    shortIntro: 'Einminütiger WPM- und Genauigkeitstest — clean und werbefrei.',
  },

  // ─────────── 📐 Einheiten-Umrechner ───────────
  'mass-converter': {
    name: 'Massen-Umrechner',
    shortIntro: 'Rechnet zwischen metrisch, Karat und Grain um.',
  },
  'density-converter': {
    name: 'Dichte-Umrechner',
    shortIntro: 'Rechnet Dichteeinheiten für Physik und Chemie um.',
  },
  'power-converter': {
    name: 'Leistungs-Umrechner',
    shortIntro: 'Rechnet zwischen Watt, Kilowatt, PS und BTU um.',
  },
  'flow-rate-converter': {
    name: 'Durchfluss-Umrechner',
    shortIntro: 'Rechnet zwischen L/min, GPM, CFM und mehr um.',
  },
  'data-storage-converter': {
    name: 'Speicherplatz-Umrechner',
    shortIntro: 'Rechnet zwischen Byte, KB, MB, GB, TB und mehr um.',
  },
  'time-converter': {
    name: 'Zeit-Umrechner',
    shortIntro: 'Rechnet zwischen Sekunden, Minuten, Stunden, Tagen und mehr.',
  },
  'numeral-system-converter': {
    name: 'Zahlensystem-Umrechner',
    shortIntro: 'Rechnet zwischen Binär, Oktal, Dezimal und Hexadezimal.',
  },
  'angle-converter': {
    name: 'Winkel-Umrechner',
    shortIntro: 'Rechnet zwischen Grad, Bogenmaß und Gon um.',
  },
  'fuel-economy-converter': {
    name: 'Verbrauchs-Umrechner',
    shortIntro: 'Rechnet zwischen MPG und L/100 km fürs Auto um.',
  },
  'pressure-converter': {
    name: 'Druck-Umrechner',
    shortIntro: 'Rechnet zwischen Bar, PSI, Pascal, atm und mehr um.',
  },
  'energy-converter': {
    name: 'Energie-Umrechner',
    shortIntro: 'Rechnet zwischen Joule, Kalorien, kWh und BTU um.',
  },
  'frequency-converter': {
    name: 'Frequenz-Umrechner',
    shortIntro: 'Rechnet zwischen Hz, kHz, MHz, GHz und RPM um.',
  },
  'weight-converter': {
    name: 'Gewichts-Umrechner',
    shortIntro: 'Rechnet sofort zwischen metrischen und imperialen Einheiten.',
  },
  'temperature-converter': {
    name: 'Temperatur-Umrechner',
    shortIntro: 'Rechnet sofort zwischen Celsius, Fahrenheit und Kelvin.',
  },
  'speed-converter': {
    name: 'Geschwindigkeits-Umrechner',
    shortIntro: 'Rechnet sofort zwischen km/h, mph, m/s, Knoten und ft/s.',
  },
  'area-converter': {
    name: 'Flächen-Umrechner',
    shortIntro: 'Rechnet zwischen metrischen und imperialen Flächen, inkl. Acre und Hektar.',
  },
  'volume-converter': {
    name: 'Volumen-Umrechner',
    shortIntro: 'Rechnet sofort zwischen metrischen und US-Kücheneinheiten.',
  },
  'length-converter': {
    name: 'Längen-Umrechner',
    shortIntro: 'Rechnet sofort zwischen metrischen und imperialen Längen.',
  },
  'cooking-converter': {
    name: 'Küchen-Maß-Umrechner',
    shortIntro: 'Tassen ↔ Gramm ↔ Unzen, je nach Zutaten-Dichte angepasst.',
  },

  // ─────────── 🧮 Mathe-Rechner ───────────
  'trapezoid-calculator': {
    name: 'Trapez-Rechner',
    shortIntro: 'Fläche eines Trapezes aus zwei parallelen Seiten und Höhe.',
  },
  'cube-calculator': {
    name: 'Würfel-Rechner',
    shortIntro: 'Volumen und Oberfläche eines Würfels.',
  },
  'sphere-calculator': {
    name: 'Kugel-Rechner',
    shortIntro: 'Volumen und Oberfläche einer Kugel aus dem Radius.',
  },
  'scientific-notation-converter': {
    name: 'Wissenschaftliche-Notation-Umrechner',
    shortIntro: 'Zahlen in wissenschaftliche, E- und Ingenieurnotation umwandeln.',
  },
  'prime-number-checker': {
    name: 'Primzahl-Prüfer',
    shortIntro: 'Prüft, ob eine Zahl prim ist, und findet benachbarte Primzahlen.',
  },
  'prime-factorization-calculator': {
    name: 'Primfaktorzerlegung',
    shortIntro: 'Zerlegt jede Zahl in ihre Primfaktoren.',
  },
  'combination-calculator': {
    name: 'Kombinations-Rechner',
    shortIntro: 'Berechnet Kombinationen C(n,r) für Wahrscheinlichkeit.',
  },
  'permutation-calculator': {
    name: 'Permutations-Rechner',
    shortIntro: 'Berechnet Permutationen (Anordnungen mit Reihenfolge).',
  },
  'circle-calculator': {
    name: 'Kreis-Rechner',
    shortIntro: 'Fläche, Umfang und Durchmesser aus dem Radius.',
  },
  'triangle-calculator': {
    name: 'Dreiecks-Rechner',
    shortIntro: 'Löst rechtwinklige Dreiecke — Hypotenuse, Fläche, Umfang.',
  },
  'rectangle-calculator': {
    name: 'Rechteck-Rechner',
    shortIntro: 'Fläche, Umfang und Diagonale eines Rechtecks.',
  },
  'standard-deviation-calculator': {
    name: 'Standardabweichungs-Rechner',
    shortIntro: 'Berechnet Standardabweichung, Varianz und Mittelwert.',
  },
  'percentile-calculator': {
    name: 'Perzentil-Rechner',
    shortIntro: 'Findet den Wert an jedem Perzentil deiner Daten.',
  },
  'fraction-calculator': {
    name: 'Bruch-Rechner',
    shortIntro: 'Addiere, subtrahiere, multipliziere, dividiere Brüche exakt.',
  },
  'ratio-calculator': {
    name: 'Verhältnis-Rechner',
    shortIntro: 'Löst Proportionen und findet fehlende Verhältniswerte.',
  },
  'lcm-gcd-calculator': {
    name: 'kgV & ggT-Rechner',
    shortIntro: 'Findet kgV und ggT für beliebige Zahlen.',
  },
  'average-calculator': {
    name: 'Durchschnitts-Rechner',
    shortIntro: 'Mittelwert, Median, Summe, Min/Max und Spanne jeder Liste.',
  },
  'percentage-calculator': {
    name: 'Prozentrechner',
    shortIntro: 'Berechnet sofort Prozente, Zu-/Abnahmen und Rabatte.',
  },
  'roman-numeral-converter': {
    name: 'Römische-Zahlen-Umrechner',
    shortIntro: 'Zweiseitige römische Zahlen mit schneller Referenztabelle.',
  },

  // ─────────── 💪 Gesundheitsrechner ───────────
  'bmi-calculator': {
    name: 'BMI-Rechner',
    shortIntro: 'Body-Mass-Index und dein gesunder Gewichtsbereich.',
  },
  'calorie-calculator': {
    name: 'Kalorienrechner',
    shortIntro: 'Dein täglicher Kalorienbedarf für Abnehmen oder Zunehmen.',
  },
  'tdee-calculator': {
    name: 'TDEE-Rechner',
    shortIntro: 'Täglicher Kalorienbedarf (TDEE) für Definition, Erhalt, Masse.',
  },
  'bmr-calculator': {
    name: 'Grundumsatz-Rechner (BMR)',
    shortIntro: 'Kalorien, die dein Körper in völliger Ruhe verbrennt.',
  },
  'body-fat-calculator': {
    name: 'Körperfett-Rechner',
    shortIntro: 'Schätzt Körperfettanteil mittels Umfangsmessungen.',
  },
  'macro-calculator': {
    name: 'Makro-Rechner',
    shortIntro: 'Teilt Tageskalorien in Protein, Kohlenhydrate und Fett auf.',
  },
  'pregnancy-due-date-calculator': {
    name: 'Geburtstermin-Rechner',
    shortIntro: 'Schätzt den Geburtstermin ab der letzten Periode.',
  },
  'water-intake-calculator': {
    name: 'Trinkmengen-Rechner',
    shortIntro: 'Findet deine ideale tägliche Trinkmenge.',
  },
  'ideal-weight-calculator': {
    name: 'Idealgewicht-Rechner',
    shortIntro: 'Findet dein Idealgewicht nach Größe und Geschlecht.',
  },
  'pace-calculator': {
    name: 'Lauf-Pace-Rechner',
    shortIntro: 'Pace, Zielzeit-Prognose und Zwischenzeiten für jede Distanz.',
  },
  'protein-intake-calculator': {
    name: 'Eiweiß-Bedarfsrechner',
    shortIntro: 'Tägliches Eiweißziel in Gramm, abgestimmt auf Gewicht und Ziel.',
  },
  'sleep-calculator': {
    name: 'Schlafzyklus-Rechner',
    shortIntro: 'Bedtimes nach 90-Minuten-Zyklen, damit du erholt aufwachst.',
  },
  'heart-rate-zone-calculator': {
    name: 'Pulszonen-Rechner',
    shortIntro: 'Deine fünf Trainingszonen, personalisiert mit Ruhepuls.',
  },
  'caffeine-calculator': {
    name: 'Koffein-Rechner',
    shortIntro: 'Schätze das Koffein, das gerade noch in deinem Körper ist.',
  },
  'steps-to-calories-calculator': {
    name: 'Schritte-zu-Kalorien-Rechner',
    shortIntro: 'Schritte → Kalorien und Distanz, an deinen Körper angepasst.',
  },

  // ─────────── 🎓 Bildungsrechner ───────────
  'grade-calculator': {
    name: 'Notenrechner',
    shortIntro: 'Notenprozentsatz und Buchstabe aus Punkten.',
  },
  'final-grade-calculator': {
    name: 'Endnoten-Rechner',
    shortIntro: 'Findet die nötige Prüfungsnote für deine Zielnote.',
  },
  'gpa-calculator': {
    name: 'GPA-Rechner',
    shortIntro: 'Berechne sofort deinen GPA: Kurse, Credits, Noten hinzufügen.',
  },

  // ─────────── ⏰ Zeitrechner ───────────
  'age-calculator': {
    name: 'Altersrechner',
    shortIntro: 'Genaues Alter in Jahren, Monaten, Tagen oder zwischen zwei Daten.',
  },
  'date-difference-calculator': {
    name: 'Datumsdifferenz-Rechner',
    shortIntro: 'Genaue Dauer zwischen zwei Daten — Tage, Wochen, Monate, Arbeitstage.',
  },
  'age-difference-calculator': {
    name: 'Altersunterschied-Rechner',
    shortIntro: 'Findet den Altersunterschied zwischen zwei Personen.',
  },
  'days-countdown-calculator': {
    name: 'Countdown-Rechner',
    shortIntro: 'Live-Countdown bis zu einem Datum oder Tage zwischen zwei Daten.',
  },
  'reading-speaking-time': {
    name: 'Lesezeit-Rechner',
    shortIntro: 'Lese- und Sprechzeit für beliebige Texte schätzen.',
  },
  'timezone-converter': {
    name: 'Zeitzonen-Konverter',
    shortIntro: 'Zeiten zwischen Zonen umrechnen und meetingfreundliche Stunden finden.',
  },
  'screen-time-calculator': {
    name: 'Bildschirmzeit-Rechner',
    shortIntro: 'Tägliche Scroll-Stunden, übersetzt in Lebensjahre.',
  },

  // ─────────── 🎨 Webdesign-Werkzeuge ───────────
  'svg-to-image': {
    name: 'SVG-zu-PNG-Konverter',
    shortIntro: 'SVG im Browser in PNG oder WebP, mit Skalierung und Download.',
  },
  'px-to-rem': {
    name: 'px-zu-rem/em-Konverter',
    shortIntro: 'Pixel in rem und em mit eigener Root-Schriftgröße umrechnen.',
  },
  'aspect-ratio-calculator': {
    name: 'Seitenverhältnis-Rechner',
    shortIntro: 'Fehlende Breite oder Höhe für jedes Seitenverhältnis berechnen.',
  },
  'color-contrast-checker': {
    name: 'Farbkontrast-Prüfer (WCAG)',
    shortIntro: 'Teste Kontrast nach WCAG-Stufen AA und AAA.',
  },
  'color-converter': {
    name: 'Farbkonverter',
    shortIntro: 'HEX, RGB und HSL umrechnen, mit visuellem Picker.',
  },
  'open-graph-generator': {
    name: 'Open-Graph- & Meta-Tag-Generator',
    shortIntro: 'OG- und Twitter-Card-Tags mit Live-Social-Vorschau erstellen.',
  },
  'css-shadow-generator': {
    name: 'CSS-Schatten- & Glassmorphismus-Generator',
    shortIntro: 'Schatten und Glassmorphismus visuell einstellen, CSS kopieren.',
  },
  'favicon-generator': {
    name: 'Favicon-Generator',
    shortIntro: 'Macht aus einem Bild 16×16-, 32×32-Favicons und Apple-Touch-Icon.',
  },
  'css-clamp-calculator': {
    name: 'CSS-Clamp-Rechner',
    shortIntro: 'Fluide Schriftgrößen mit CSS clamp() erzeugen.',
  },
  'css-gradient-generator': {
    name: 'CSS-Verlaufsgenerator',
    shortIntro: 'Lineare, radiale und Mesh-Verläufe mit Live-Vorschau erstellen.',
  },
  'image-resizer': {
    name: 'Bild-Resizer',
    shortIntro: 'Bilder skalieren und komprimieren, mit Live-Vorschau der Dateigröße.',
  },
  'png-to-webp-converter': {
    name: 'PNG-zu-WebP-Konverter',
    shortIntro: 'PNG/JPG in WebP umwandeln und die Ersparnis sehen.',
  },
  'svg-minifier': {
    name: 'SVG-Minifier',
    shortIntro: 'Kommentare, Metadaten und Leerzeichen aus SVG-Dateien entfernen.',
  },
  'webp-to-png-converter': {
    name: 'WebP-zu-PNG-Konverter',
    shortIntro: 'WebP-Bilder im Browser in PNG oder JPG umwandeln.',
  },

  // ─────────── 🔒 Sicherheits-Werkzeuge ───────────
  'password-strength-checker': {
    name: 'Passwortstärke-Prüfer',
    shortIntro: 'Teste Passwortstärke mit Entropie-Analyse und Checkliste.',
  },
  'password-generator': {
    name: 'Passwort-Generator',
    shortIntro: 'Erzeuge mit einem Klick starke, zufällige, sichere Passwörter.',
  },
  'bcrypt-hash-generator': {
    name: 'Bcrypt-Hash-Generator',
    shortIntro: 'Passwörter mit Bcrypt oder gesalzenem SHA im Browser hashen und prüfen.',
  },
  'secret-key-generator': {
    name: 'Secret-Key-Generator',
    shortIntro: 'API-Keys und Secrets mit hoher Entropie im Browser erzeugen.',
  },
  'ssh-key-generator': {
    name: 'SSH-Key-Generator',
    shortIntro: 'RSA- oder Ed25519-SSH-Schlüsselpaare im Browser erzeugen.',
  },
  'hmac-generator': {
    name: 'HMAC-Generator',
    shortIntro: 'HMAC-SHA256/384/512-Signaturen über natives WebCrypto.',
  },
  'hash-comparator': {
    name: 'Hash-Vergleicher',
    shortIntro: 'Zeitkonstanter Vergleich zweier Hashes — ohne Timing-Lecks.',
  },
  'password-entropy-checker': {
    name: 'Passwort-Entropie-Check',
    shortIntro: 'Entropie in Bits — das ehrliche Maß für Passwortstärke.',
  },
  'aes-encrypt-decrypt': {
    name: 'AES Ver- & Entschlüsseln',
    shortIntro: 'AES-256-GCM im Browser: authentifiziert, PBKDF2-Schlüssel, null Upload.',
  },

  // ─────────── 💼 Business-Werkzeuge ───────────
  'qr-code-generator': {
    name: 'QR-Code-Generator',
    shortIntro: 'QR-Codes für URLs, Text und WLAN. Kostenlos, ohne Wasserzeichen.',
  },
  'freelance-invoice-generator': {
    name: 'Rechnungsgenerator',
    shortIntro: 'Professionelle Rechnungen kostenlos erstellen, ansehen und drucken.',
  },
  'saas-ltv-churn-calculator': {
    name: 'SaaS-LTV-Rechner',
    shortIntro: 'LTV, Churn, CAC-Amortisation und LTV:CAC für dein SaaS modellieren.',
  },

  // ─────────── 🛠️ Weitere Entwickler-Werkzeuge ───────────
  'cron-parser': {
    name: 'Cron-Ausdrucks-Parser',
    shortIntro: 'Macht cron in Klartext und zeigt die nächsten 5 Zeitpunkte.',
  },

  // ─────────── 🤖 KI-Tools ───────────
  'llm-cost-calculator': {
    name: 'LLM-API-Kostenrechner',
    shortIntro: 'Kosten pro Request und monatlich über 17 Modelle, side by side.',
  },
  'context-window-checker': {
    name: 'Context-Window-Check',
    shortIntro: 'Token-Anzahl vs. Limit jedes Modells, mit Spielraum in Prozent.',
  },
  'json-to-zod': {
    name: 'JSON zu Zod-Schema',
    shortIntro: 'JSON einfügen, typisiertes Zod-Schema bekommen — bereit für KI-Validierung.',
  },
  'json-repair': {
    name: 'JSON-Reparatur',
    shortIntro: 'Kaputtes LLM-JSON retten — abgeschnitten, Kommas am Ende, Fences.',
  },
  'markdown-fence-extractor': {
    name: 'Codeblock-Extractor',
    shortIntro: 'Jeden ```-Codeblock aus Markdown oder KI-Antworten ziehen.',
  },
  'prompt-template-filler': {
    name: 'Prompt-Template-Filler',
    shortIntro: '{{Variablen}} in Prompt-Templates aus JSON füllen — Live-Preview.',
  },
  'openai-tools-builder': {
    name: 'OpenAI-Tools-JSON-Builder',
    shortIntro: 'Tool-Definitionen per Formular → sauberes tools-JSON für LLM-APIs.',
  },
  'csv-to-finetune-jsonl': {
    name: 'CSV zu Fine-Tuning-JSONL',
    shortIntro: 'CSV-Zeilen → OpenAI-Chat-JSONL, gemappt und validiert.',
  },
  'token-visualizer': {
    name: 'Token-Visualizer',
    shortIntro: 'Farbcodierte Token-Grenzen mit Zählern — sieh, was Modelle sehen.',
  },
  'embedding-price-calculator': {
    name: 'Embedding-Preisrechner',
    shortIntro: 'Embedding-Kosten pro Modell: Dimensionen, $/1M Tokens, Gesamtsummen.',
  },

  // ─────────── 🎲 Spiele ───────────
  'dice-roller': {
    name: 'Würfel-Tool',
    shortIntro: 'Würfel jeder Art — d4 bis d100, mehrere gleichzeitig, faire Würfe.',
  },
  'coin-flip': {
    name: 'Münzwurf',
    shortIntro: 'Knackiges Kopf-oder-Zahl mit laufender Statistik.',
  },
  'wheel-spinner': {
    name: 'Glücksrad',
    shortIntro: 'Drehen und entscheiden: Namen, Aufgaben, Restaurants — fair gewählt.',
  },
  'random-team-generator': {
    name: 'Zufalls-Team-Generator',
    shortIntro: 'Jede Liste fair in Teams teilen — neu mischen, bis es passt.',
  },

  // ─────────── 🐶 Haustiere ───────────
  'dog-age-calculator': {
    name: 'Hundealter-Rechner',
    shortIntro: 'Hundealter in Menschenjahre je nach Rassengröße — ohne ×7-Mythos.',
  },

  // ─────────── 🏠 Haushaltsrechner ───────────
  'paint-calculator': {
    name: 'Farbbedarfs-Rechner',
    shortIntro: 'Gallonen oder Liter Farbe pro Raum, Anstriche und Öffnungen eingerechnet.',
  },

}
