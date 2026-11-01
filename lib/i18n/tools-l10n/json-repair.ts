/**
 * json-repair 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonRepairL10n: ToolL10n = {

  es: {
    useCases: [
      'rescatar JSON truncado cuando la respuesta del LLM corta a mitad de objeto',
      'quitar la valla de código markdown que envuelve la salida del modelo',
      'corregir comas finales y claves sin comillas en configuraciones generadas',
      'depurar por qué el parser rechaza la salida de un agente de IA',
    ],
    faqs: [
      { q: '¿Qué tipo de JSON roto puede arreglar?', a: 'Los fallos clásicos de los LLM: salidas truncadas (objetos, arrays o cadenas sin cerrar), comas finales, claves entre comillas simples o sin comillas, vallas markdown alrededor del payload, comillas tipográficas, literales NaN/Infinity y caracteres de control. Registra cada arreglo para que puedas auditarlo.' },
      { q: '¿Puede la reparación producir datos erróneos?', a: 'Posiblemente: la reparación es inferencia de mejor esfuerzo, no magia. Una cadena truncada se cierra en un límite adivinado y una clave sin comillas se toma literalmente. Revisa siempre el registro de reparaciones y valida semánticamente antes de llevar la salida a producción.' },
      { q: '¿Por qué los LLM emiten JSON inválido?', a: 'Muestreo: el modelo genera texto token a token y puede detenerse al llegar a max tokens a mitad de objeto, o desviarse de la instrucción JSON sin modo de salida estructurada. La solución duradera es el modo estructurado/JSON del proveedor más una pasada de reparación como red de seguridad.' },
      { q: '¿Hay límite de tamaño o problema de privacidad?', a: 'La reparación corre localmente en tu navegador: nada se sube, así que los payloads confidenciales se quedan en tu máquina. El límite práctico es la memoria del navegador; cargas de decenas de MB se procesan sin problema.' },
    ],
    ui: {
      'appliedAnyway': 'Reparaciones intentadas antes de fallar:',
      'copyJson': 'Copiar JSON',
      'inputLabel': 'JSON roto',
      'loadSample': 'Cargar ejemplo',
      'logBareKeys': 'Se entrecomillaron las claves sin comillas',
      'logClosed': 'Se cerraron los corchetes/cadenas truncados',
      'logControlChars': 'Se eliminaron los caracteres de control',
      'logFence': 'Se retiraron las vallas de código markdown',
      'logSingleQuotes': 'Se convirtieron las cadenas con comillas simples a comillas dobles',
      'logSmartQuotes': 'Se convirtieron las comillas tipográficas en comillas rectas',
      'logTrailingCommas': 'Se eliminaron las comas finales',
      'logTrimmed': 'Se recortó el texto fuera del par de llaves o corchetes más externo',
      'note': 'Cubre los fallos típicos de los LLM: vallas markdown, comas finales, comillas simples, claves sin comillas, comillas tipográficas y salidas truncadas. Una entrada profundamente malformada falla ruidosamente con la posición del parser, en lugar de adivinar.',
      'repairsApplied': 'Reparaciones aplicadas',
      'stillBroken': 'Sigue sin poder analizarse tras las reparaciones; el error de abajo indica dónde:',
      'validJson': 'JSON válido',
      'inputTooLarge': 'La entrada supera los {n} caracteres — la reparación se omite para mantener la escritura fluida. Recorta o divide la entrada.',
    },
  },
  de: {
    useCases: [
      'abgeschnittenes JSON retten, wenn die LLM-Antwort mitten im Objekt abbricht',
      'Markdown-Codezäune um die Modellantwort entfernen, bevor der Parser läuft',
      'Endkommas und nackte Keys in generierten Konfigurationen korrigieren',
      'nachvollziehen, warum ein Parser die Ausgabe eines KI-Agenten ablehnt',
    ],
    faqs: [
      { q: 'Welche Art von kaputtem JSON kann es reparieren?', a: 'Die klassischen LLM-Fehler: abgeschnittene Ausgaben (unterminierte Objekte/Arrays/Strings), Endkommas, Keys in einfachen Anführungszeichen oder ohne, Markdown-Zäune um den Payload, typografische Anführungszeichen, NaN/Infinity-Literale und rohe Steuerzeichen. Jede Reparatur wird protokolliert, damit du sie prüfen kannst.' },
      { q: 'Kann die Reparatur falsche Daten erzeugen?', a: 'Möglich — Reparatur ist best-effort-Inferenz, keine Magie. Ein abgeschnittener String wird an einer geratenen Grenze geschlossen, ein nackter Key wörtlich übernommen. Prüfe immer das Reparaturprotokoll und validiere semantisch, bevor die Ausgabe in Produktionscode landet.' },
      { q: 'Warum liefern LLMs überhaupt ungültiges JSON?', a: 'Sampling: Modelle generieren Token für Token und stoppen bei max tokens mitten im Objekt oder weichen ohne strukturierten Ausgabemodus von der JSON-Anweisung ab. Die dauerhafte Lösung ist Structured Output / JSON-Mode des Anbieters plus genau so einen Reparaturdurchlauf als Sicherheitsnetz.' },
      { q: 'Gibt es Größenlimits oder Datenschutzbedenken?', a: 'Die Reparatur läuft lokal im Browser — nichts wird hochgeladen, vertrauliche Payloads bleiben auf deinem Rechner. Praktische Grenze ist der Browserspeicher: Payloads im niedrigen zweistelligen MB-Bereich funktionieren problemlos.' },
    ],
    ui: {
      'appliedAnyway': 'Vor dem Scheitern versuchte Reparaturen:',
      'copyJson': 'JSON kopieren',
      'inputLabel': 'Kaputtes JSON',
      'loadSample': 'Beispiel laden',
      'logBareKeys': 'Nackte Keys in Anführungszeichen gesetzt',
      'logClosed': 'Abgeschnittene Klammern/Strings geschlossen',
      'logControlChars': 'Steuerzeichen entfernt',
      'logFence': 'Markdown-Codezäune entfernt',
      'logSingleQuotes': 'Strings in einfachen Anführungszeichen zu doppelten umgewandelt',
      'logSmartQuotes': 'Typografische Anführungszeichen in gerade Anführungszeichen umgewandelt',
      'logTrailingCommas': 'Endkommas entfernt',
      'logTrimmed': 'Text außerhalb des äußersten { } oder [ ] entfernt',
      'note': 'Deckt typische LLM-Fehler ab: Markdown-Zäune, Endkommas, einfache Anführungszeichen, nackte Keys, typografische Anführungszeichen und abgeschnittene Ausgaben. Tief kaputte Eingaben scheitern laut mit Parser-Position, statt zu raten.',
      'repairsApplied': 'Angewandte Reparaturen',
      'stillBroken': 'Auch nach Reparaturen unlesbar — der Fehler zeigt die Stelle:',
      'validJson': 'Gültiges JSON',
      'inputTooLarge': 'Die Eingabe überschreitet {n} Zeichen — die Reparatur wird übersprungen, damit die Eingabe reaktionsfähig bleibt. Eingabe kürzen oder teilen.',
    },
  },
}
