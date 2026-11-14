/**
 * pdf-compressor 本地化 bundle —— es / de(2026-11 语音/PDF 批次)
 * 覆盖: ui + useCases + faqs。formula 不适用。
 */
import type { ToolL10n } from '../tool-l10n'

export const pdfCompressorL10n: ToolL10n = {

  es: {
    useCases: [
      'Reducir el peso de un PDF antes de adjuntarlo a un correo con límite de tamaño',
      'Compactar varios documentos re-empaquetándolos y comparar el antes y el después en bytes',
      'Optimizar un escaneo pesado para subirlo a un formulario que impone un máximo de tamaño',
      'Re-empaquetar PDFs antiguos y comprobar si el flujo de objetos ahorra espacio',
    ],
    faqs: [
      {
        q: '¿Cómo comprime esta herramienta?',
        a: 'Re-guardando el PDF con flujos de objetos (object streams): las estructuras internas se reescriben de forma compacta y desaparece la grasa estructural. Las páginas en sí no se tocan: ni imágenes recomprimidas ni pérdida de calidad.',
      },
      {
        q: '¿Se garantiza que el archivo sea más pequeño?',
        a: 'No, y no te mentimos: muchos PDF habituales encogen claramente, pero los ya optimizados apenas cambian y los escaneados con imágenes pueden incluso crecer. El antes y el después en bytes se muestra siempre.',
      },
      {
        q: '¿Pierde calidad el contenido?',
        a: 'No hay rasterizado ni recompresión de imágenes: el contenido se copia tal cual en la nueva estructura. Lo que cambia es el empaquetado, no las páginas.',
      },
      {
        q: '¿Y si el PDF tiene contraseña?',
        a: 'Los PDFs cifrados no se pueden volver a guardar sin la clave, así que verás un aviso claro. Quita la protección y el archivo se re-empaqueta con normalidad.',
      },
    ],
    ui: {
      'afterLabel': 'Después',
      'beforeLabel': 'Antes',
      'chooseFile': 'Elegir un PDF',
      'compressButton': 'Re-guardar y comprimir',
      'downloadCompressed': 'Descargar compressed.pdf',
      'dropHint': 'o arrastra y suelta un PDF aquí',
      'errCorrupt': 'No se pudo leer el PDF: parece dañado',
      'errEncrypted': 'Este PDF está protegido con contraseña: quita la protección primero',
      'errNotPdf': 'Solo se admite un archivo PDF',
      'grew': 'más grande',
      'note': '🔒 Todo ocurre en tu navegador con pdf-lib: el PDF se re-guarda con flujos de objetos y nada se sube ni se almacena. Somos honestos: la mayoría de PDFs habituales se encogen, pero no hay garantía — los ya optimizados apenas cambian y los escaneados con imágenes pueden crecer. Las imágenes no se recomprimen.',
      'processing': 'Re-guardando…',
      'saved': 'ahorrado',
    },
  },
  de: {
    useCases: [
      'Ein PDF abspecken, bevor es an eine Mail mit Größenlimit geht',
      'Mehrere Dokumente durch Neuverpackung kompakter machen und Bytes vorher/nachher vergleichen',
      'Einen schweren Scan für ein Upload-Formular mit Größenobergrenze optimieren',
      'Alte PDFs neu verpacken und prüfen, ob der Objektstrom Platz spart',
    ],
    faqs: [
      {
        q: 'Wie komprimiert dieses Tool?',
        a: 'Durch erneutes Speichern mit Object Streams: Die internen Strukturen werden kompakt neu geschrieben, struktureller Ballast fällt weg. Die Seiten selbst bleiben unangetastet — keine Bild-Rekompression, kein Qualitätsverlust.',
      },
      {
        q: 'Wird die Datei garantiert kleiner?',
        a: 'Nein, und wir tun nicht so, als ob: Viele Alltags-PDFs schrumpfen deutlich, bereits optimierte ändern sich kaum, und gescannte PDFs mit Bildern können sogar wachsen. Vorher/nachher in Bytes siehst du immer.',
      },
      {
        q: 'Verliert der Inhalt Qualität?',
        a: 'Es wird nichts gerastert und kein Bild neu komprimiert: Der Inhalt wird unverändert in die neue Struktur kopiert. Neu verpackt wird — die Seiten nicht.',
      },
      {
        q: 'Und bei passwortgeschützten PDFs?',
        a: 'Verschlüsselte PDFs lassen sich ohne Schlüssel nicht neu speichern — du bekommst einen klaren Hinweis. Entferne den Schutz, dann wird die Datei ganz normal neu verpackt.',
      },
    ],
    ui: {
      'afterLabel': 'Nachher',
      'beforeLabel': 'Vorher',
      'chooseFile': 'PDF auswählen',
      'compressButton': 'Neu speichern & komprimieren',
      'downloadCompressed': 'compressed.pdf herunterladen',
      'dropHint': 'oder ein PDF hierher ziehen',
      'errCorrupt': 'Das PDF ließ sich nicht lesen: offenbar beschädigt',
      'errEncrypted': 'Dieses PDF ist passwortgeschützt — entferne zuerst den Schutz',
      'errNotPdf': 'Es ist nur eine PDF-Datei erlaubt',
      'grew': 'größer geworden',
      'note': '🔒 Alles läuft in deinem Browser mit pdf-lib: Das PDF wird mit Object Streams neu gespeichert, nichts wird hochgeladen oder gespeichert. Ehrlich gesagt: Die meisten Alltags-PDFs werden kleiner, garantiert ist es nicht — bereits optimierte ändern sich kaum, gescannte mit Bildern können wachsen. Bilder werden nicht neu komprimiert.',
      'processing': 'Speichere neu…',
      'saved': 'gespart',
    },
  },
}
