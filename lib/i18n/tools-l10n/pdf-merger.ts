/**
 * pdf-merger 本地化 bundle —— es / de(2026-11 语音/PDF 批次)
 * 覆盖: ui + useCases + faqs。formula 不适用。
 */
import type { ToolL10n } from '../tool-l10n'

export const pdfMergerL10n: ToolL10n = {

  es: {
    useCases: [
      'Fusionar escaneos sueltos de un contrato en un único PDF con el orden que tú decidas',
      'Unir capítulos descargados por separado en un solo libro antes de enviarlo a la tablet o al lector electrónico',
      'Reunir facturas y justificantes de un proyecto en un merged.pdf ordenado para tu gestoría',
      'Combinar informes de varios compañeros manteniendo el orden con los botones de subir y bajar',
    ],
    faqs: [
      {
        q: '¿Se suben mis PDF a algún servidor?',
        a: 'No. La fusión se hace por completo en tu navegador con pdf-lib: los archivos se leen localmente, se combinan en memoria y solo tú descargas el resultado. Tras cargar la página puedes comprobarlo incluso sin conexión.',
      },
      {
        q: '¿Puedo cambiar el orden de los archivos?',
        a: 'Sí. Cada archivo de la lista tiene botones para subir y bajar, y puedes quitarlo en cualquier momento. El PDF combinado respeta exactamente ese orden, de arriba abajo.',
      },
      {
        q: '¿Qué pasa con un PDF dañado o con contraseña?',
        a: 'Se marca en la lista con un error claro y queda excluido de la fusión; el resto sigue disponible. Quita la protección o sustituye el archivo y vuelve a intentarlo.',
      },
      {
        q: '¿Se pierde calidad al fusionar?',
        a: 'No se vuelve a comprimir ni se rasteriza: las páginas se copian tal cual en un nuevo contenedor. El texto seleccionable, los formularios y las anotaciones se conservan.',
      },
    ],
    ui: {
      'chooseFiles': 'Elegir archivos PDF',
      'dropHint': 'o arrastra y suelta tus PDF aquí',
      'dropHintShort': 'Suelta aquí más PDF',
      'errCorrupt': 'No se pudo leer «{name}»: PDF dañado o protegido con contraseña',
      'errNeedTwo': 'Añade al menos dos PDF válidos para fusionar',
      'errNotPdf': 'Solo se admiten archivos PDF: {name}',
      'fileListLabel': 'Archivos ({n})',
      'mergeButton': 'Fusionar en merged.pdf',
      'mergeDone': 'Fusión lista: {n} archivos → merged.pdf',
      'moveDown': 'Bajar',
      'moveUp': 'Subir',
      'note': '🔒 Tus PDF no salen del navegador: la fusión es 100 % local con pdf-lib, sin subidas ni almacenamiento. Reordena la lista antes de fusionar y descarga merged.pdf con las páginas copiadas tal cual, sin recomprimir.',
      'pagesOne': '1 página',
      'pagesCount': '{n} páginas',
      'processing': 'Fusionando…',
      'removeItem': 'Quitar',
    },
  },
  de: {
    useCases: [
      'Einzelne Vertrags-Scans zu einem PDF zusammenfügen — in genau der Reihenfolge, die du festlegst',
      'Separat geladene Kapitel zu einem Buch vereinen, bevor es auf Tablet oder E-Reader wandert',
      'Rechnungen und Belege eines Projekts in einem sortierten merged.pdf für die Steuerkanzlei bündeln',
      'Berichte verschiedener Kollegen kombinieren und die Reihenfolge mit Hoch/Runter passend ziehen',
    ],
    faqs: [
      {
        q: 'Werden meine PDFs auf einen Server geladen?',
        a: 'Nein. Das Zusammenfügen läuft vollständig in deinem Browser mit pdf-lib: Dateien werden lokal gelesen, im Speicher kombiniert und nur du lädst das Ergebnis herunter. Nach dem Laden der Seite funktioniert es sogar offline.',
      },
      {
        q: 'Kann ich die Reihenfolge ändern?',
        a: 'Ja. Jede Datei in der Liste hat Hoch-/Runter-Buttons und lässt sich jederzeit entfernen. Das kombinierte PDF folgt exakt dieser Reihenfolge — von oben nach unten.',
      },
      {
        q: 'Was passiert mit beschädigten oder passwortgeschützten PDFs?',
        a: 'Sie werden in der Liste klar markiert und von der Fusion ausgeschlossen; alles andere bleibt nutzbar. Schutz entfernen oder Datei ersetzen — und es nochmal versuchen.',
      },
      {
        q: 'Geht beim Fusionieren Qualität verloren?',
        a: 'Es wird nichts neu komprimiert oder gerastert: Die Seiten werden unverändert kopiert und nur in einen neuen Container gesetzt. Markierbarer Text, Formulare und Anmerkungen bleiben erhalten.',
      },
    ],
    ui: {
      'chooseFiles': 'PDF-Dateien auswählen',
      'dropHint': 'oder PDFs hierher ziehen und ablegen',
      'dropHintShort': 'Hier weitere PDFs ablegen',
      'errCorrupt': '„{name}“ konnte nicht gelesen werden: beschädigtes oder passwortgeschütztes PDF',
      'errNeedTwo': 'Füge mindestens zwei gültige PDFs hinzu',
      'errNotPdf': 'Nur PDF-Dateien sind erlaubt: {name}',
      'fileListLabel': 'Dateien ({n})',
      'mergeButton': 'Zu merged.pdf zusammenfügen',
      'mergeDone': 'Fertig: {n} Dateien → merged.pdf',
      'moveDown': 'Nach unten',
      'moveUp': 'Nach oben',
      'note': '🔒 Deine PDFs verlassen den Browser nicht: Das Zusammenfügen läuft 100 % lokal mit pdf-lib — keine Uploads, keine Speicherung. Reihenfolge vor dem Fusionieren festlegen und merged.pdf mit unverändert kopierten Seiten herunterladen.',
      'pagesOne': '1 Seite',
      'pagesCount': '{n} Seiten',
      'processing': 'Füge zusammen…',
      'removeItem': 'Entfernen',
    },
  },
}
