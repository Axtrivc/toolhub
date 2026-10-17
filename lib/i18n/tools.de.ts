/**
 * Werkzeuge — deutsche Übersetzungen (de)
 *
 * Struktur: Record<slug, { name, shortIntro }>
 * - Die slugs entsprechen 1:1 lib/tools.ts (239 Werkzeuge).
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
    shortIntro: 'Berechne die DTI-Quote und sieh, ob Kreditgeber zustimmen.',
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
    shortIntro: 'Sieh, wie Inflation den Geldwert mit der Zeit verringert.',
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
    shortIntro: 'Sieh, wie lange die Tilgung deiner Kreditkarte braucht.',
  },
  'income-tax-estimator': {
    name: 'Einkommensteuer-Schätzer',
    shortIntro: 'Schätzt US-Einkommensteuer und Nettoeinkommen.',
  },
  'salary-converter': {
    name: 'Gehaltsrechner',
    shortIntro: 'Rechne Gehalt zwischen jährlich, monatlich, 14-tägig und stündlich um.',
  },
  'sales-tax-calculator': {
    name: 'Umsatzsteuerrechner',
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
    shortIntro: 'Spritkosten für jede Fahrt — einfach, hin und zurück oder pro Person aufgeteilt.',
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
    shortIntro: 'Gesamte Haltungskosten: Sprit, Versicherung, Wartung und Wertverlust — pro Monat und pro km.',
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
    shortIntro: 'Wandelt jeden Text sofort in Kleinbuchstaben um.',
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
    shortIntro: 'Zeilenweiser Diff mit Anzahl von Ergänzungen, Löschungen und Änderungen.',
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
    shortIntro: 'Schlafenszeiten nach 90-Minuten-Zyklen, damit du erholt aufwachst.',
  },
  'heart-rate-zone-calculator': {
    name: 'Pulszonen-Rechner',
    shortIntro: 'Deine fünf Trainingszonen, personalisiert mit Ruhepuls.',
  },
  'caffeine-calculator': {
    name: 'Koffein-Rechner',
    shortIntro: 'Schätze, wie viel Koffein noch in deinem Körper ist.',
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
    shortIntro: 'Zeiten zwischen Zonen umrechnen und gemeinsame Meeting-Stunden finden.',
  },
  'screen-time-calculator': {
    name: 'Bildschirmzeit-Rechner',
    shortIntro: 'Tägliche Scroll-Stunden, umgerechnet in Lebensjahre.',
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
    shortIntro: 'AES-256-GCM im Browser: authentifiziert, PBKDF2-Schlüssel, kein Upload.',
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
    shortIntro: 'Kosten pro Request und monatlich über 17 Modelle im direkten Vergleich.',
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
    shortIntro: 'Gallonen oder Liter Farbe pro Raum — Anstriche, Türen und Fenster eingerechnet.',
  },

  // ─────────── 🚀 Neue Werkzeuge (2026-09) ───────────
  'hysa-calculator': {
    name: 'Tagesgeld-Rechner',
    shortIntro: 'Wachstum mit täglicher Verzinsung und monatlichen Einlagen.',
  },
  'cd-calculator': {
    name: 'Festgeld-Rechner',
    shortIntro: 'Endwert bei Fälligkeit inkl. Vorentnahme-Strafe-Simulation.',
  },
  'break-even-calculator': {
    name: 'Break-Even-Rechner',
    shortIntro: 'Deckungsbeitrag, Break-Even-Menge und -Umsatz auf einen Blick.',
  },
  'profit-margin-calculator': {
    name: 'Gewinnmargen-Rechner',
    shortIntro: 'Kosten plus ein Wert → Preis, Gewinn, Marge und Aufschlag sofort.',
  },
  'intermittent-fasting-calculator': {
    name: 'Intervallfasten-Rechner',
    shortIntro: '16:8 / 18:6 / 20:4 Pläne mit Countdown und Stoffwechsel-Zeitleiste.',
  },
  'llm-api-cost-calculator': {
    name: 'LLM-API-Kostenvergleich',
    shortIntro: 'Vergleicht die echte Monatsrechnung aller großen KI-Modelle.',
  },

  // ─────────── 🚀 Neue Werkzeuge (2026-09 v4) ───────────
  'roth-ira-calculator': {
    name: 'Roth-vs-Traditionell-IRA-Rechner',
    shortIntro: 'Roth gegen traditionelle IRA im Direktvergleich — gleiche Dollars, andere Steuer.',
  },
  'fire-calculator': {
    name: 'FIRE-Rechner',
    shortIntro: 'Deine FIRE-Zahl, Ziel-Ruhestandsjahr und Sparquote-Mathematik auf einen Blick.',
  },
  'cac-ltv-calculator': {
    name: 'CAC- & LTV-Rechner',
    shortIntro: 'CAC, LTV, Amortisationsmonate und der LTV:CAC-Gesundheitsindikator.',
  },
  'flooring-calculator': {
    name: 'Bodenbelags-Rechner',
    shortIntro: 'Raummaß + Verschnitt → nötige Kartons und Materialbudget (ft²/m²).',
  },
  'dog-food-calculator': {
    name: 'Hundefutter-Rechner',
    shortIntro: 'Gewicht + Lebensphase → Tageskalorien, Tassen und Gramm laut Futteretikett.',
  },
  'runway-calculator': {
    name: 'Startup-Runway-Rechner',
    shortIntro: 'Cash-Runway in Monaten, Zero-Cash-Datum und monatliche Netto-Burn-Rate.',
  },
  'freelance-rate-calculator': {
    name: 'Freelance-Stundensatz-Rechner',
    shortIntro: 'Zielgehalt rückwärts zu Stunden- und Tagessatz inklusive Steuern und Marge.',
  },
  'docker-run-to-compose': {
    name: 'Docker Run zu Compose Konverter',
    shortIntro: 'Wandelt docker run Befehle direkt in saubere docker-compose.yml-Dateien um.',
  },
  'mortgage-affordability-calculator': {
    name: 'Wohnbezahlbarkeitsrechner',
    shortIntro: 'Vom Einkommen und Schulden zum maximalen Hauspreis — inklusive Steuern, Versicherung, HOA.',
  },
  'refinance-break-even-calculator': {
    name: 'Refinanzierungs-Break-Even-Rechner',
    shortIntro: 'Alte gegen neue Rate: nach wie vielen Monaten sich das Refinanzieren rechnet.',
  },
  'biweekly-mortgage-payment-calculator': {
    name: '14-Tage-Raten-Rechner',
    shortIntro: 'Halbraten alle zwei Wochen: gesparte Zinsen und frühere Tilgung.',
  },
  'closing-cost-calculator': {
    name: 'Abschlusskostenrechner',
    shortIntro: 'Käufer- und Verkäuferkosten im Detail plus Bare auf dem Tisch.',
  },
  'property-tax-calculator': {
    name: 'Grundsteuerrechner',
    shortIntro: 'Steuerwert × Mills: Jahresgrundsteuer und Monatsanteil der Rate.',
  },
  'prorated-rent-calculator': {
    name: 'Pro-rata-Mietrechner',
    shortIntro: 'Einzug oder Auszug mittendrin: Tagesmiete und exakter erster/letzter Monat.',
  },
  'rental-property-calculator': {
    name: 'Mietobjektrechner',
    shortIntro: 'NOI, Cap-Rate, Cashflow, Cash-on-Cash und 1%-Regel in einem Durchgang.',
  },
  'house-flip-calculator': {
    name: 'House-Flip-Rechner',
    shortIntro: 'Maximalpreis per 70%-Regel, Flip-Gewinn und ROI.',
  },
  'college-savings-calculator': {
    name: 'College-Sparrechner',
    shortIntro: 'Gesamtkosten mit Bildungsinflation hochrechnen und das Monatsziel ableiten.',
  },
  '401k-match-calculator': {
    name: '401(k)-Match-Rechner',
    shortIntro: 'Wie viel der Arbeitgeber-Match wert ist — und was liegen bleibt.',
  },
  'social-security-break-even-calculator': {
    name: 'Social-Security-Break-even-Rechner',
    shortIntro: 'Beantragung mit 62, FRA oder 70 vergleichen, mit Einhol-Alter.',
  },
  'student-loan-payment-calculator': {
    name: 'Studienkredit-Rechner',
    shortIntro: 'Rate und Zinsen in drei Tilgungsplänen gegenüberstellen.',
  },
  'car-lease-calculator': {
    name: 'Auto-Leasing-Rechner',
    shortIntro: 'Monatsrate, APR-Äquivalent und Leasing-Gesamtkosten berechnen.',
  },
  'ev-charging-cost-calculator': {
    name: 'E-Auto-Ladekosten-Rechner',
    shortIntro: 'Kosten pro Meile und Jahr beim Laden, im Vergleich zu Benzin.',
  },
  'rent-budget-calculator': {
    name: 'Mietbudget-Rechner',
    shortIntro: 'Bezahlbare Miete nach 30%-Regel und 50/30/20-Regel.',
  },
  'christmas-budget-calculator': {
    name: 'Weihnachtsbudget-Rechner',
    shortIntro: 'Das Festbudget nach Personen und Kategorien aufteilen.',
  },
  'one-rep-max-calculator': {
    name: 'Maximalkraft-Rechner (1RM)',
    shortIntro: 'Jeder harte Satz als geschätztes 1RM, inklusive 50-95%-Tabelle.',
  },
  'race-time-predictor': {
    name: 'Laufzeit-Prognose',
    shortIntro: 'Ein Rennen rein — Vorhersagen von 5K bis Marathon plus Tempo.',
  },
  'vo2-max-calculator': {
    name: 'VO2max-Rechner',
    shortIntro: 'Zwei Feldmethoden: Cooper-12-Minuten-Lauf und Pulsquotient.',
  },
  'body-surface-area-calculator': {
    name: 'Körperoberflächen-Rechner',
    shortIntro: 'BSA in m² nach Mosteller und DuBois aus Größe und Gewicht.',
  },
  'waist-to-height-ratio-calculator': {
    name: 'Taille-zu-Größe-Rechner',
    shortIntro: 'Umfang ÷ Größe mit Risikobändern nach der 0,5-Regel.',
  },
  'steps-to-miles-calculator': {
    name: 'Schritte-zu-Meilen-Rechner',
    shortIntro: 'Schritte in Meilen und km nach Größe oder gemessener Schrittweite.',
  },
  'weight-loss-goal-calculator': {
    name: 'Abnehmziel-Rechner',
    shortIntro: 'Zielgewicht rein — Tagesdefizit, Wochen und Zieldatum raus.',
  },
  'fiber-intake-calculator': {
    name: 'Ballaststoff-Rechner',
    shortIntro: 'Tägliche Gramm nach Alter und Geschlecht, mit Lebensmittel-Äquivalenten.',
  },
  'paypal-fee-calculator': {
    name: 'PayPal-Gebührenrechner',
    shortIntro: 'PayPal-Gebühren in beide Richtungen: dein Netto und der passende Preis.',
  },
  'etsy-fee-calculator': {
    name: 'Etsy-Gebührenrechner',
    shortIntro: 'Alle Gebühren pro Etsy-Auftrag, die effektive Quote und deine Auszahlung.',
  },
  'amazon-seller-fee-calculator': {
    name: 'Amazon-Verkäufergebühren-Rechner',
    shortIntro: 'Provision + FBA + Landed Cost → Gewinn, Marge und ROI pro Stück.',
  },
  'square-fee-calculator': {
    name: 'Square-Gebührenrechner',
    shortIntro: 'Square-Gebühren in beide Richtungen plus effektiver Satz je Ticket.',
  },
  'youtube-money-calculator': {
    name: 'YouTube-Geldrechner',
    shortIntro: 'Aufrufe × RPM-Spanne → monatliches und jährliches AdSense-Einkommen.',
  },
  'nps-calculator': {
    name: 'NPS-Rechner',
    shortIntro: 'Promotoren − Kritiker: dein NPS-Score mit Bain-Stufen.',
  },
  'conversion-rate-calculator': {
    name: 'Conversion-Rate-Rechner',
    shortIntro: 'Besucher → Conversions: Rate, CPA und Steigerungsziel.',
  },
  'gym-cost-per-visit-calculator': {
    name: 'Kosten-pro-Besuch-Rechner',
    shortIntro: 'Beitrag ÷ echte Besuche: Kosten pro Training und ob es sich lohnt.',
  },
  'concrete-calculator': {
    name: 'Betonrechner',
    shortIntro: 'Platte, Stütze oder Stufe zu Kubikyards und 40/60/80-lb-Säcken.',
  },
  'mulch-calculator': {
    name: 'Mulchrechner',
    shortIntro: 'Beet und Höhe zu Kubikyards, Säcken und Kosten.',
  },
  'gravel-calculator': {
    name: 'Kiesrechner',
    shortIntro: 'Fläche und Dicke zu Yards und Tonnen nach Materialdichte.',
  },
  'drywall-calculator': {
    name: 'Gipsplatten-Rechner',
    shortIntro: 'Wände und Decke zu Platten, Schrauben und Spachtelmasse.',
  },
  'roofing-calculator': {
    name: 'Dachrechner',
    shortIntro: 'Grundriss × Neigung zu Squares, Schindelbündeln und Bahnen.',
  },
  'fence-calculator': {
    name: 'Zaunrechner',
    shortIntro: 'Länge und Pfostenabstand zu Pfosten, Latten und Beton.',
  },
  'paver-calculator': {
    name: 'Pflasterrechner',
    shortIntro: 'Fläche zu Steinen, Schotterbasis und Bettsand.',
  },
  'deck-board-calculator': {
    name: 'Deckbretter-Rechner',
    shortIntro: 'Fläche, Breite und Fuge zu Brettern, Laufmetern und Balken.',
  },
  'dividend-calculator': {
    name: 'Dividenden-Rechner',
    shortIntro: 'Dividendeneinkommen, Rendite und den DRIP-Effekt über Jahrzehnte schätzen.',
  },
  'dca-calculator': {
    name: 'Sparplan-Rechner',
    shortIntro: 'Durchschnittskurs berechnen und Sparplan gegen Einmalanlage testen.',
  },
  'stock-average-calculator': {
    name: 'Aktien-Verbilligungsrechner',
    shortIntro: 'Gewichteter Durchschnittskurs über Pakete und das unrealisierte G/V.',
  },
  'options-profit-calculator': {
    name: 'Optionen-Gewinn-Rechner',
    shortIntro: 'Break-even, Maximalwerte und die Auszahlungskurve zum Verfall.',
  },
  'crypto-profit-calculator': {
    name: 'Krypto-Gewinn-Rechner',
    shortIntro: 'Nettogewinn nach Gebühren, ROI und Ziel-Verkaufskurs.',
  },
  'treasury-bill-calculator': {
    name: 'Treasury-Bill-Rechner',
    shortIntro: 'Kaufpreis und beide Renditekonventionen (360/365 Tage).',
  },
  'bond-yield-calculator': {
    name: 'Anleihenrendite-Rechner',
    shortIntro: 'Laufende Rendite und genäherte Umlaufrendite auf einen Blick.',
  },
  'lottery-odds-calculator': {
    name: 'Lotto-Wahrscheinlichkeitsrechner',
    shortIntro: 'Exakte Chancen der großen Lotterien oder eigener Trommeln.',
  },
  'self-employment-tax-calculator': {
    name: 'Selbstständigen-Steuerrechner',
    shortIntro: 'SE-Steuer auf Freelance-Gewinn: 15,3 % und die absetzbare Hälfte.',
  },
  'depreciation-calculator': {
    name: 'Abschreibungsrechner',
    shortIntro: 'Linear, degressiv und digitale Summe, Jahr für Jahr.',
  },
  'mileage-reimbursement-calculator': {
    name: 'Meilen-Erstattungsrechner',
    shortIntro: 'Meilen × IRS-Pauschale: 70 ¢ geschäftlich ab 2025.',
  },
  'contractor-vs-employee-calculator': {
    name: '1099-vs-W-2-Rechner',
    shortIntro: 'Dasselbe Gehalt, beide Welten: die echte Netto-Differenz.',
  },
  'gross-up-calculator': {
    name: 'Gross-Up-Rechner',
    shortIntro: 'Vom Wunsch-Netto zum exakten Brutto, das gezahlt werden muss.',
  },
  'commute-cost-calculator': {
    name: 'Pendelkosten-Rechner',
    shortIntro: 'Jahreskosten des Arbeitswegs — in Geld und in Stunden.',
  },
  'smoking-cost-calculator': {
    name: 'Rauchkosten-Rechner',
    shortIntro: 'Wochen-, Jahres- und 10-Jahres-Kosten plus angelegte Alternative.',
  },
  'emergency-fund-calculator': {
    name: 'Notgroschen-Rechner',
    shortIntro: 'Ziel von 3-12 Monaten setzen und die Füllzeit sehen.',
  },
  'btu-calculator': {
    name: 'BTU-Rechner',
    shortIntro: 'Klimageräte nach Fläche, Decke, Sonne und Personen dimensionieren – in BTU und Tonnen.',
  },
  'board-foot-calculator': {
    name: 'Board-Foot-Rechner',
    shortIntro: 'Dicke × Breite × Länge ÷ 12: Volumen und Kosten der Holzbestellung.',
  },
  'wallpaper-calculator': {
    name: 'Tapetenrechner',
    shortIntro: 'Bahnen, Rapport und Rollen: Tapete bedarfsgerecht kalkuliert.',
  },
  'raised-bed-soil-calculator': {
    name: 'Hochbeet-Erde-Rechner',
    shortIntro: 'Wie viel Erde das Hochbeet braucht – mit Mel-Mix und Spar-Mischung.',
  },
  'generator-wattage-calculator': {
    name: 'Generator-Rechner',
    shortIntro: 'Geräte ankreuzen: Betriebslast, Anlaufspitze und empfohlene Generatorgröße.',
  },
  'pool-volume-calculator': {
    name: 'Poolvolumen-Rechner',
    shortIntro: 'Gallonen und Liter für Rechteck-, Rund- und Nierenbecken samt Umwälzzeit.',
  },
  'coffee-ratio-calculator': {
    name: 'Kaffeeverhältnis-Rechner',
    shortIntro: 'Wasser und Kaffee in Gramm je Methode: Filter, French Press, Espresso, Cold Brew.',
  },
  'bread-hydration-calculator': {
    name: 'Brot-Hydratationsrechner',
    shortIntro: 'Wasser ÷ Mehl in Bäckerprozent, mit Levain-Anteil und Gesamtteiggewicht.',
  },
  'ovulation-calculator': {
    name: 'Eisprungrechner',
    shortIntro: 'Eisprungtag und fruchtbares Fenster aus deinem Zyklus.',
  },
  'pregnancy-weight-gain-calculator': {
    name: 'Schwangerschaftszunahme-Rechner',
    shortIntro: 'IOM-Bereiche und Wochentempo nach Vor-BMI.',
  },
  'diaper-cost-calculator': {
    name: 'Windelkosten-Rechner',
    shortIntro: 'Monats-, Jahres- und Gesamtkosten für Windeln.',
  },
  'cat-age-calculator': {
    name: 'Katzenalter-Rechner',
    shortIntro: 'Katzenjahre in Menschenjahre nach der 15/24/+4-Kurve.',
  },
  'cat-food-calculator': {
    name: 'Katzenfutter-Rechner',
    shortIntro: 'Tageskalorien, Dosen und Gramm nach Lebensphase.',
  },
  'zodiac-sign-calculator': {
    name: 'Sternzeichen-Rechner',
    shortIntro: 'Dein Sternzeichen nach Geburtstag, Element und Modalität.',
  },
  'chinese-zodiac-calculator': {
    name: 'Chinesischer Tierkreis-Rechner',
    shortIntro: 'Tier, Element und Yin-Yang nach Geburtsjahr.',
  },
  'shoe-size-converter': {
    name: 'Schuhgrößen-Konverter',
    shortIntro: 'US, UK, EU und cm für Damen, Herren und Kinder.',
  },
  'time-card-calculator': {
    name: 'Stundenzettel-Rechner',
    shortIntro: 'Stempelzeiten in Dezimalstunden, Wochensumme und Überstunden.',
  },
  'business-days-calculator': {
    name: 'Werktage-Rechner',
    shortIntro: 'Werktage addieren oder abziehen — Wochenende und Feiertage ausgespart.',
  },
  'week-number-calculator': {
    name: 'Wochennummer-Rechner',
    shortIntro: 'ISO-Wochennummer, Wochenpanne und Restwochen jedes Datums.',
  },
  'pto-accrual-calculator': {
    name: 'Urlaubssaldo-Rechner',
    shortIntro: 'Angesparter Urlaub und Prognose zum Jahreswechsel.',
  },
  'download-time-calculator': {
    name: 'Downloadzeit-Rechner',
    shortIntro: 'Dateigröße ÷ Speed (mit Overhead) → Stunden, Minuten, Sekunden.',
  },
  'gps-coordinate-converter': {
    name: 'GPS-Koordinatenkonverter',
    shortIntro: 'Dezimalgrade ↔ GMS ↔ GDM mit Hemisphären-Erkennung.',
  },
  'tire-size-calculator': {
    name: 'Reifengrößen-Rechner',
    shortIntro: 'Reifengröße dekodiert; Größenvergleich mit Tachoabweichung.',
  },
  'wind-chill-calculator': {
    name: 'Windchill-Rechner',
    shortIntro: 'Temperatur + Wind → gefühlte Temperatur nach JAG/TI-Formel.',
  },
  'quadratic-equation-solver': {
    name: 'Quadratische Gleichungen lösen',
    shortIntro: 'Diskriminante, Wurzeln, Scheitelpunkt und Faktorform auf einmal.',
  },
  'slope-calculator': {
    name: 'Steigungsrechner',
    shortIntro: 'Zwei Punkte → Steigung, Achsenabschnitt, Winkel, Gleichung.',
  },
  'confidence-interval-calculator': {
    name: 'Konfidenzintervall-Rechner',
    shortIntro: 'KI für Mittelwert oder Anteil auf 90/95/99%.',
  },
  'sample-size-calculator': {
    name: 'Stichprobengrößen-Rechner',
    shortIntro: 'Wie viele Befragte nötig sind, nach Konfidenz und Fehlerband.',
  },
  'z-score-calculator': {
    name: 'z-Wert-Rechner',
    shortIntro: 'Standardisieren, Percentil und p-Wert — auch z→x.',
  },
  'bayes-theorem-calculator': {
    name: 'Bayes-Theorem-Rechner',
    shortIntro: 'Was ein positives Screening-Ergebnis wirklich bedeutet.',
  },
  'heat-index-calculator': {
    name: 'Hitzeindex-Rechner',
    shortIntro: 'Temperatur + Feuchte → Hitzeindex des NWS und Risikostufe.',
  },
  'dew-point-calculator': {
    name: 'Taupunktrechner',
    shortIntro: 'Magnus-Tetens-Taupunkt, absolute Feuchte und Komfort.',
  },
  'passphrase-generator': {
    name: 'Passphrasen-Generator',
    shortIntro: 'Zufallswörter aus einer 256-Liste mit Live-Entropie.',
  },
  'border-radius-generator': {
    name: 'Border-Radius-Generator',
    shortIntro: 'Vier Ecken, Ellipsen-Syntax und CSS mit Live-Vorschau.',
  },
  'color-palette-generator': {
    name: 'Farbpaletten-Generator',
    shortIntro: 'Aus einer Grundfarbe fünf Harmonieschemata mit hex/rgb/hsl.',
  },
  'image-compressor': {
    name: 'Bildkompressor',
    shortIntro: 'JPG/WebP lokal neu kodieren mit echtem Größenvergleich.',
  },
  'username-generator': {
    name: 'Benutzernamen-Generator',
    shortIntro: 'Stichwort + vier Stile, gefiltert nach Maximallänge.',
  },
  'secret-santa-generator': {
    name: 'Wichtel-Generator',
    shortIntro: 'Geschlossener Kreis mit Ausschlüssen, einzeln aufdecken.',
  },
  'faq-schema-generator': {
    name: 'FAQ-Schema-Generator',
    shortIntro: 'Frage-Antwort-Paare einfügen und FAQPage-JSON-LD erhalten.',
  },
  'number-to-words-converter': {
    name: 'Zahlen-in-Wörter-Umwandler',
    shortIntro: 'Zahlen als englische Wörter — Billionen, Dezimalen, Ordinalzahlen.',
  },
  'ohms-law-calculator': {
    name: 'Ohmscher-Gesetz-Rechner',
    shortIntro: 'Zwei von V, I, R oder P eingeben, den Rest lösen.',
  },
  'led-resistor-calculator': {
    name: 'LED-Vorwiderstandsrechner',
    shortIntro: 'Spannung, Flussspannung, Strom rein — Ideal- und E12-Wert raus.',
  },
  'resistor-color-code-calculator': {
    name: 'Widerstands-Farbcode-Rechner',
    shortIntro: '4-6 Ringe deuten oder Ohm in Farben zurückübersetzen.',
  },
  'voltage-divider-calculator': {
    name: 'Spannungsteiler-Rechner',
    shortIntro: 'Vin, R1, R2 zu Vout und Leistung — oder R2 rückwärts.',
  },
  'tone-generator': {
    name: 'Ton-Generator',
    shortIntro: 'Sinus, Rechteck, Dreieck und Sägezahn von 20 Hz bis 20 kHz.',
  },
  'bpm-tap-counter': {
    name: 'BPM-Tap-Zähler',
    shortIntro: 'Mit dem Song tippen und das BPM lesen, inkl. Konsistenz.',
  },
  'delay-time-calculator': {
    name: 'Delay-Zeit-Rechner',
    shortIntro: 'BPM zu Millisekunden je Notenwert und LFO-Raten.',
  },
  'utm-link-builder': {
    name: 'UTM-Link-Generator',
    shortIntro: 'Basis-URL plus UTM-Parameter: fertiger Tracking-Link inklusive Naming-Hinweisen.',
  },
  'credit-card-validator': {
    name: 'Kreditkarten-Prüfer',
    shortIntro: 'Luhn-Prüfsumme plus Marken-Präfix und Längenregeln, rein lokal.',
  },
  'iban-validator': {
    name: 'IBAN-Prüfer',
    shortIntro: 'Länderlängen aus dem offiziellen Register plus mod-97, im Browser.',
  },
  'graphql-formatter': {
    name: 'GraphQL-Formatter',
    shortIntro: 'GraphQL mit echtem Lexer beautifacen und minifizieren — Queries und SDL.',
  },
  'http-status-code-lookup': {
    name: 'HTTP-Statuscode-Suche',
    shortIntro: 'Alle 62 IANA-Codes nach Nummer oder Stichwort, mit Lösungen.',
  },
  'css-minifier': {
    name: 'CSS-Minifier',
    shortIntro: 'Bytesichere Kompression: calc()-Leerzeichen, Strings und /*!-Banner überleben.',
  },
  'csv-to-sql-converter': {
    name: 'CSV-zu-SQL-Konverter',
    shortIntro: 'CSV rein, gestapelte Mehrfach-INSERTs raus — mit Escaping und NULL-Optionen.',
  },
  'rot13-converter': {
    name: 'ROT13-Konverter',
    shortIntro: 'ROT13 kodieren und dekodieren, optional ROT5 und ROT-N-Verschiebung.',
  },

}
