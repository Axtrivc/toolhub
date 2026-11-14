/**
 * pdf-splitter 本地化 bundle —— es / de(2026-11 语音/PDF 批次)
 * 覆盖: ui + useCases + faqs。formula 不适用。
 */
import type { ToolL10n } from '../tool-l10n'

export const pdfSplitterL10n: ToolL10n = {

  es: {
    useCases: [
      'Extraer solo las páginas firmadas de un contrato largo y enviar únicamente esas',
      'Separar un capítulo concreto con la sintaxis 1-3,5,8-10 sin tocar el resto del documento',
      'Trocear un escaneo de 50 páginas en archivos de una página para repartirlos por correo',
      'Dividir un PDF recibido en un único split.pdf, un ZIP por grupos de rangos o un ZIP de páginas sueltas',
    ],
    faqs: [
      {
        q: '¿Cómo escribo los rangos de páginas?',
        a: 'Con la sintaxis «1-3,5,8-10»: números sueltos o intervalos separados por comas. La vista previa te muestra al instante qué páginas quedan seleccionadas antes de ejecutar nada.',
      },
      {
        q: '¿Cuál es la diferencia entre las salidas?',
        a: '«Un PDF» junta todas las páginas seleccionadas en un split.pdf respetando el orden indicado. «Un PDF por grupo de rangos» crea un PDF independiente para cada tramo (1-2,3 → dos PDF de 2 y 1 páginas) y los empaqueta en un ZIP. «Un archivo por página» genera un PDF por cada página (part-1.pdf, part-2.pdf…) en un ZIP.',
      },
      {
        q: '¿Qué pasa con un PDF protegido con contraseña?',
        a: 'pdf-lib no puede leerlo, así que verás un aviso claro en cuanto sueltes el archivo. Elimina la protección con la contraseña y el PDF se procesa con normalidad.',
      },
      {
        q: '¿El documento original se modifica?',
        a: 'Jamás. Se lee en memoria, se copian solo las páginas elegidas y el original queda intacto en tu disco; la herramienta no reescribe ni guarda nada.',
      },
    ],
    ui: {
      'chooseFile': 'Elegir un PDF',
      'doneSingle': 'Creado split.pdf con {n} páginas',
      'doneZip': 'Creado un ZIP con {n} PDF de una página',
      'doneRangeZip': 'Creado un ZIP con {n} PDF, uno por grupo de rangos',
      'dropHint': 'o arrastra y suelta un PDF aquí',
      'errCorrupt': 'No se pudo leer el PDF: parece dañado',
      'errEncrypted': 'Este PDF está protegido con contraseña: quita la protección primero',
      'errNoPages': 'No hay páginas válidas seleccionadas',
      'errNotPdf': 'Solo se admite un archivo PDF',
      'modeSingle': 'Un PDF con las páginas elegidas (split.pdf)',
      'modeZip': 'Un archivo por página (ZIP)',
      'modeRangeZip': 'Un PDF por grupo de rangos (ZIP)',
      'note': '🔒 La división ocurre íntegramente en tu navegador con pdf-lib: el original nunca se modifica, no hay subidas y nada se guarda. Elige páginas con la sintaxis 1-3,5,8-10 y descarga un split.pdf, un ZIP con un PDF por grupo de rangos o un ZIP de páginas sueltas.',
      'pageCount': 'El documento tiene {n} páginas',
      'previewLabel': 'Páginas seleccionadas',
      'previewNone': 'Escribe rangos para ver la vista previa',
      'previewPages': '{n} páginas: {list}',
      'processing': 'Dividiendo…',
      'rangeErrBounds': 'La página {n} no existe (el documento tiene {t})',
      'rangeErrEmpty': 'Escribe al menos un rango de páginas',
      'rangeErrOrder': 'El rango {a}-{b} está invertido',
      'rangeErrSyntax': 'Sintaxis no válida: «{s}»',
      'rangeLabel': 'Rangos de páginas',
      'rangePlaceholder': 'p. ej. 1-3,5,8-10',
      'splitButton': 'Dividir PDF',
    },
  },
  de: {
    useCases: [
      'Die unterschriebenen Seiten aus einem langen Vertrag ziehen und nur diese versenden',
      'Ein bestimmtes Kapitel per Syntax 1-3,5,8-10 herauslösen, ohne den Rest anzufassen',
      'Einen 50-Seiten-Scan in Einzelseiten-Dateien zerlegen, um sie zu verteilen',
      'Ein empfangenes PDF in ein einzelnes split.pdf, ein ZIP pro Bereichsgruppe oder ein ZIP mit Einzelseiten aufteilen',
    ],
    faqs: [
      {
        q: 'Wie gebe ich Seitenbereiche ein?',
        a: 'Mit der Syntax „1-3,5,8-10“: Einzelnummern oder Intervalle, durch Kommas getrennt. Die Vorschau zeigt sofort, welche Seiten ausgewählt sind — bevor irgendetwas ausgeführt wird.',
      },
      {
        q: 'Was unterscheidet die Ausgaben?',
        a: '„Ein PDF“ bündelt alle gewählten Seiten in angegebener Reihenfolge in einem split.pdf. „Ein PDF pro Bereichsgruppe“ erzeugt je Gruppe eine eigene Datei (1-2,3 → zwei PDFs mit 2 und 1 Seiten) und packt sie in ein ZIP. „Eine Datei pro Seite“ erzeugt je Seite ein PDF (part-1.pdf, part-2.pdf …) in einem ZIP.',
      },
      {
        q: 'Was ist mit passwortgeschützten PDFs?',
        a: 'pdf-lib kann sie nicht lesen — du bekommst sofort einen klaren Hinweis, sobald du die Datei ablegst. Entferne den Schutz mit dem Passwort, dann klappt alles wie gewohnt.',
      },
      {
        q: 'Wird das Original verändert?',
        a: 'Nie. Es wird im Speicher gelesen und nur die gewählten Seiten kopiert; das Original bleibt unangetastet auf deiner Platte. Das Tool schreibt und speichert nichts.',
      },
    ],
    ui: {
      'chooseFile': 'PDF auswählen',
      'doneSingle': 'split.pdf mit {n} Seiten erstellt',
      'doneZip': 'ZIP mit {n} Einzelseiten-PDFs erstellt',
      'doneRangeZip': 'ZIP mit {n} PDFs erstellt, eines pro Bereichsgruppe',
      'dropHint': 'oder ein PDF hierher ziehen',
      'errCorrupt': 'Das PDF ließ sich nicht lesen: offenbar beschädigt',
      'errEncrypted': 'Dieses PDF ist passwortgeschützt — entferne zuerst den Schutz',
      'errNoPages': 'Keine gültigen Seiten ausgewählt',
      'errNotPdf': 'Es ist nur eine PDF-Datei erlaubt',
      'modeSingle': 'Ein PDF mit den gewählten Seiten (split.pdf)',
      'modeZip': 'Eine Datei pro Seite (ZIP)',
      'modeRangeZip': 'Ein PDF pro Bereichsgruppe (ZIP)',
      'note': '🔒 Die Aufteilung läuft vollständig in deinem Browser mit pdf-lib: Das Original wird nie verändert, keine Uploads, keine Speicherung. Seiten per 1-3,5,8-10 wählen und ein split.pdf, ein ZIP mit einem PDF pro Bereichsgruppe oder ein ZIP mit Einzelseiten herunterladen.',
      'pageCount': 'Das Dokument hat {n} Seiten',
      'previewLabel': 'Ausgewählte Seiten',
      'previewNone': 'Bereiche eingeben, um die Vorschau zu sehen',
      'previewPages': '{n} Seiten: {list}',
      'processing': 'Teile auf…',
      'rangeErrBounds': 'Seite {n} existiert nicht (das Dokument hat {t})',
      'rangeErrEmpty': 'Gib mindestens einen Seitenbereich ein',
      'rangeErrOrder': 'Der Bereich {a}-{b} ist verdreht',
      'rangeErrSyntax': 'Ungültige Syntax: „{s}“',
      'rangeLabel': 'Seitenbereiche',
      'rangePlaceholder': 'z. B. 1-3,5,8-10',
      'splitButton': 'PDF aufteilen',
    },
  },
}
