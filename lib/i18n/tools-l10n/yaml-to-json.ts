/**
 * yaml-to-json 本地化 bundle —— zh / es / de
 * 覆盖:ui + useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const yamlToJsonL10n: ToolL10n = {

  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'errAnchors': 'No se admiten anclas (&) ni alias (*) de YAML. Si el valor debe ser una cadena literal, ponlo entre comillas.',
      'errDuplicateKey': 'Clave duplicada "{key}" en la línea {line}',
      'errIndent': 'Sangría inesperada en la línea {line}',
      'errMalformedFlow': 'Valor de flujo en línea "{value}" mal formado — revisa los corchetes y las comillas.',
      'errMixedFlow': 'No se admite el flujo en línea mixto/anidado en "{value}". Escribe las colecciones anidadas en sus propias líneas con sangría (estilo de bloque).',
      'errMixedMapSeq': 'Mezclar mapeo y secuencia en el mismo nivel no es YAML válido.',
      'errNestedFlow': 'No se admite el flujo en línea anidado ({pair} dentro de {pair}). Escribe las colecciones anidadas en sus propias líneas con sangría (estilo de bloque).',
      'errParseLine': 'No se pudo analizar la línea {line}: "{content}"',
      'errTabs': 'No se permiten tabuladores para la indentación en YAML (usa espacios).',
      'errUnclosedFlow': 'Flujo en línea "{value}" sin cerrar — falta el "{closer}" de cierre.',
      'errUnexpectedCloser': '"{closer}" inesperado fuera de un flujo en línea en "{value}".',
      'inputLabel': 'Pega tu YAML',
      'invalidYaml': 'YAML inválido',
      'multiDocWarning': 'Se detectaron varios documentos YAML (---). Solo se convirtió el primero. Elimina los separadores "---" sobrantes o convierte los documentos de uno en uno.',
      'note': '🔒 100% en el cliente — un parser de un subconjunto YAML hecho a mano. Admite mapeos, secuencias, flujo en línea, comillas, comentarios y escalares de bloque (| y >).',
      'outputLabel': 'Salida JSON',
    },
    useCases: [
      'convertir configuraciones de Docker Compose / Kubernetes a JSON',
      'pasar configuración de CI a herramientas que solo aceptan JSON',
      'depurar problemas de indentación de YAML',
      'transformar flujos de trabajo como los de GitHub Actions',
    ],
    faqs: [
      { q: '¿Qué características de YAML admite?', a: 'El analizador maneja mapeos, secuencias (listas), estructuras anidadas, sintaxis de flujo en línea ([a,b] y {k: v}), cadenas con comillas simples y dobles, escalares planos, números, booleanos, null, escalares de bloque (| y >) y comentarios #. Los flujos multidocumento (---) no se dividen; solo se convierte el primero.' },
      { q: '¿Por qué falló el análisis de mi YAML?', a: 'YAML es sensible a la indentación — mezclar tabuladores con espacios o una profundidad de indentación inconsistente es la causa más habitual. Usa solo espacios y mantén un paso de indentación uniforme (lo habitual son 2 espacios). Revisa también valores sin comillas que parecen tokens especiales (yes/no/on/off se vuelven booleanos): ponlos entre comillas si los necesitas como texto.' },
      { q: '¿Cómo se gestionan las claves duplicadas?', a: 'A diferencia de algunas librerías de YAML que sobrescriben los duplicados en silencio, este analizador reporta un error ante claves duplicadas en el mismo mapeo, porque casi siempre señala un error real y produce pérdida de datos. Corrige el duplicado en el YAML original y vuelve a convertir.' },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'errAnchors': 'YAML-Anker (&) und Aliase (*) werden nicht unterstützt. Setze den Wert in Anführungszeichen, wenn es ein literaler String sein soll.',
      'errDuplicateKey': 'Doppelter Schlüssel "{key}" in Zeile {line}',
      'errIndent': 'Unerwartete Einrückung in Zeile {line}',
      'errMalformedFlow': 'Fehlerhafter Inline-Flow-Wert "{value}" — prüfe Klammern und Anführungszeichen.',
      'errMixedFlow': 'Gemischter/verschachtelter Inline-Flow in "{value}" wird nicht unterstützt. Schreibe verschachtelte Collections jeweils in eine eigene, eingerückte Zeile (Block-Stil).',
      'errMixedMapSeq': 'Mapping und Sequenz auf derselben Ebene zu mischen ist kein gültiges YAML.',
      'errNestedFlow': 'Verschachtelter Inline-Flow wird nicht unterstützt ({pair} innerhalb von {pair}). Schreibe verschachtelte Collections jeweils in eine eigene, eingerückte Zeile (Block-Stil).',
      'errParseLine': 'Zeile {line} konnte nicht geparst werden: "{content}"',
      'errTabs': 'Tabulatoren sind für Einrückungen in YAML nicht erlaubt (verwende Leerzeichen).',
      'errUnclosedFlow': 'Inline-Flow "{value}" nicht geschlossen — es fehlt ein schließendes "{closer}".',
      'errUnexpectedCloser': 'Unerwartetes "{closer}" außerhalb eines Inline-Flows in "{value}".',
      'inputLabel': 'Füge dein YAML ein',
      'invalidYaml': 'Ungültiges YAML',
      'multiDocWarning': 'Mehrere YAML-Dokumente erkannt (---). Nur das erste Dokument wurde konvertiert. Entferne überzählige "---"-Trenner oder wandle die Dokumente einzeln um.',
      'note': '🔒 100% clientseitig — ein handgeschriebener Parser für eine YAML-Teilmenge. Unterstützt Mappings, Sequenzen, Inline-Flow, Anführungszeichen, Kommentare und Block-Skalare (| und >).',
      'outputLabel': 'JSON-Ausgabe',
    },
    useCases: [
      'Docker-Compose-/Kubernetes-Konfigurationen in JSON umwandeln',
      'CI-Konfiguration an Werkzeuge übergeben, die nur JSON akzeptieren',
      'YAML-Einrückungsprobleme debuggen',
      'Workflow-Dateien wie die von GitHub Actions umwandeln',
    ],
    faqs: [
      { q: 'Welche YAML-Funktionen werden unterstützt?', a: 'Der Parser verarbeitet Mappings, Sequenzen (Listen), verschachtelte Strukturen, Inline-Flow-Syntax ([a,b] und {k: v}), einfache und doppelte Anführungszeichen, Plain Scalars, Zahlen, Booleans, null, Block-Scalars (| und >) sowie #-Kommentare. Streams mit mehreren Dokumenten (---) werden nicht aufgeteilt; nur das erste wird konvertiert.' },
      { q: 'Warum schlug das Parsen meines YAML fehl?', a: 'YAML ist einrückungsempfindlich — Tabulatoren gemischt mit Leerzeichen oder inkonsistente Einrückungstiefe sind die häufigste Ursache. Verwende nur Leerzeichen und halte die Einrückungsschritte einheitlich (üblich sind 2 Leerzeichen). Achte außerdem auf Werte ohne Anführungszeichen, die wie spezielle Tokens wirken (yes/no/on/off werden zu Booleans) — setze sie in Anführungszeichen, wenn du Strings brauchst.' },
      { q: 'Wie werden doppelte Schlüssel behandelt?', a: 'Anders als manche YAML-Bibliotheken, die Duplikate stillschweigend überschreiben, meldet dieser Parser einen Fehler bei doppelten Schlüsseln im selben Mapping, weil das fast immer auf einen echten Fehler und Datenverlust hinweist. Korrigiere das Duplikat im Quell-YAML und wandle erneut um.' },
    ],
  },
}
