/**
 * json-diff 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonDiffL10n: ToolL10n = {

  es: {
    useCases: ['comparar dos respuestas de API', 'ver qué campos cambiaron en una configuración', 'localizar dónde divergen dos estructuras JSON', 'generar un resumen de diferencias para un ticket'],
    faqs: [
      { q: '¿Importa el orden de las claves?', a: 'No. La comparación es estructural: dos objetos coinciden cuando sus claves y valores coinciden, sin importar el orden. El orden de los arrays sí importa: [1,2] frente a [2,1] se marca como cambio, igual que en la semántica de JSON.' },
      { q: '¿Cómo se muestran los cambios anidados?', a: 'Cada diferencia incluye su ruta en notación de puntos (como user.address.city), el tipo de cambio (añadido, eliminado o modificado) y los valores antiguo y nuevo lado a lado. Puedes localizar dónde divergen dos respuestas sin revisar los archivos a ojo.' },
      { q: '¿Qué pasa si el JSON es inválido?', a: 'Se muestra en rojo el error del motor JSON de tu navegador: sin conjeturas ni resultados parciales. Corrige el error de sintaxis en el lado indicado y el diff se recalcula al instante mientras escribes.' },
      { q: '¿Puedo exportar las diferencias?', a: 'Sí. «Copiar resumen» produce una línea por diferencia con prefijo + / − / ~ más el total, lista para pegar en un pull request o ticket. También hay descarga en texto plano de los mismos datos.' },
    ],
    ui: {
      'exportFull': '«Copiar resumen» / descargar incluye siempre todas las diferencias.',
      'moreDifferences': '+{n} diferencias más no mostradas: recorta la entrada o reduce el conjunto de cambios para ver el resto.',
      'tooLong': '⚠️ La entrada supera el tamaño admitido (100 000 caracteres por lado). Recorta ambos documentos para comparar.',
      'compared': 'JSON comparado',
      'copySummary': 'Copiar resumen',
      'identical': '✓ Los dos documentos son estructuralmente idénticos',
      'note': '🔍 La comparación es estructural: el orden de claves no importa, el de arrays sí. Los valores se comparan en profundidad tras parsear.',
      'original': 'JSON original',
      'thChange': 'Cambio',
      'thPath': 'Ruta',
    },
  },
  de: {
    useCases: ['zwei API-Antworten vergleichen', 'prüfen, welche Felder in einer Config geändert wurden', 'finden, wo zwei JSON-Strukturen abweichen', 'eine Diff-Zusammenfassung für Tickets erzeugen'],
    faqs: [
      { q: 'Spielt die Reihenfolge der Schlüssel eine Rolle?', a: 'Nein. Der Vergleich ist strukturell: Zwei Objekte stimmen überein, wenn Schlüssel und Werte gleich sind — unabhängig von der Reihenfolge. Bei Arrays zählt die Reihenfolge sehr wohl: [1,2] gegenüber [2,1] wird als Änderung gemeldet.' },
      { q: 'Wie werden verschachtelte Änderungen angezeigt?', a: 'Jede Abweichung erhält einen Punkt-Pfad wie user.address.city, die Art der Änderung (hinzugefügt, entfernt, geändert) sowie alten und neuen Wert Seite an Seite. So siehst du genau, wo zwei API-Antworten auseinanderlaufen, ohne die Rohdaten durchzulesen.' },
      { q: 'Was passiert bei ungültigem JSON?', a: 'Der Parser-Fehler der JSON-Engine deines Browsers wird rot angezeigt — kein Raten, keine Teilergebnisse. Behebe den Syntaxfehler auf der markierten Seite, und der Diff aktualisiert sich sofort beim Tippen.' },
      { q: 'Kann ich das Diff exportieren?', a: 'Ja. „Zusammenfassung kopieren“ liefert eine Zeile pro Unterschied mit den Präfixen + / − / ~ plus Gesamtzahl — fertig zum Einfügen in Pull Request oder Ticket. Dieselben Daten gibt es auch als Text-Download.' },
    ],
    ui: {
      'exportFull': '„Zusammenfassung kopieren“ / Herunterladen enthält immer alle Unterschiede.',
      'moreDifferences': '+{n} weitere Unterschiede werden nicht angezeigt – kürze die Eingabe oder verkleinere die Änderungsmenge, um den Rest zu sehen.',
      'tooLong': '⚠️ Die Eingabe überschreitet die unterstützte Größe (100.000 Zeichen pro Seite). Kürze beide Dokumente zum Vergleichen.',
      'compared': 'Vergleichs-JSON',
      'copySummary': 'Zusammenfassung kopieren',
      'identical': '✓ Beide Dokumente sind strukturell identisch',
      'note': '🔍 Der Vergleich ist strukturell: Schlüsselreihenfolge egal, Array-Reihenfolge zählt. Werte werden tief verglichen.',
      'original': 'Original-JSON',
      'thChange': 'Änderung',
      'thPath': 'Pfad',
    },
  },
}
