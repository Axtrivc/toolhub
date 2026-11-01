/**
 * srt-subtitle-shift 本地化 bundle —— zh / es / de
 * 覆盖:ui + useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const srtSubtitleShiftL10n: ToolL10n = {

  es: {
    ui: {
      'blockPlural': 'bloques',
      'blockSingular': 'bloque',
      'clampClampedTo': 'a 00:00:00,000.',
      'clampLabel': 'Limitar tiempos negativos a 00:00:00,000',
      'clampWas': 'se limitó',
      'clampWentBelowZero': 'al quedar por debajo de cero tras el desplazamiento,',
      'clampWere': 'se limitaron',
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'copySrt': 'Copiar SRT',
      'cuePlural': 'entradas',
      'cueSingular': 'entrada',
      'errReadFile': 'No se pudo leer el archivo seleccionado. Prueba a volver a guardarlo como texto plano (.srt).',
      'inputLabel': 'Pega subtítulos SRT',
      'invalidOffsetOr': ' o ',
      'invalidOffsetPrefix': '⚠️ Introduce un número válido de segundos, p. ej. ',
      'invalidOffsetSuffix': '.',
      'offsetHint': 'Negativo = los subtítulos aparecen antes; positivo = más tarde.',
      'offsetLabel': 'Desfase (segundos, negativo permitido)',
      'parseCouldNotBeParsed': 'con error de análisis (sin línea de tiempo válida) y',
      'parseSkipped': 'del resultado.',
      'parseWas': 'se omitió',
      'parseWere': 'se omitieron',
      'privacyNote': '🔒 100% en el cliente — tu archivo de subtítulos nunca sale del navegador.',
      'renumberLabel': 'Renumerar entradas',
      'resultTitle': 'SRT desplazado',
      'stripLabel': 'Quitar formato (etiquetas, bloques ASS, ♪)',
      'uploadSrt': 'Subir .srt',
    },
    useCases: [
      'desplazar subtítulos SRT por segundos online',
      'arreglar subtítulos desincronizados',
      'ajustador de desfase de subtítulos gratis',
      'eliminar etiquetas HTML de archivos SRT',
    ],
    faqs: [
      {
        q: '¿Un desfase positivo adelanta o retrasa los subtítulos?',
        a: 'Un desfase positivo suma tiempo, así que cada entrada empieza más tarde — úsalo cuando los subtítulos aparecen antes que la voz. Un desfase negativo resta tiempo y adelanta las entradas, para cuando van por detrás del audio.',
      },
      {
        q: '¿Se renumeran los índices de las entradas?',
        a: 'Sí. Tras desplazar, las entradas se renumeran secuencialmente desde 1 en su nuevo orden cronológico, así la salida es siempre un archivo SRT válido y correctamente ordenado aunque los desfases muevan las entradas unas respecto a otras.',
      },
      {
        q: '¿Puede eliminar etiquetas de formato HTML y ASS?',
        a: 'Sí. La opción de quitar etiquetas elimina el HTML en línea (<i>, <b>) y las etiquetas de anulación de estilo ASS, dejando subtítulos limpios en texto plano. Es útil cuando un reproductor muestra las etiquetas como galimatías visible en vez de aplicar estilo.',
      },
      {
        q: '¿Cómo calculo el desfase necesario?',
        a: 'Apunta a una frase concreta: mira en qué tiempo la voz dice la línea (el reproductor lo muestra) y cuándo aparece el subtítulo; la diferencia es el desfase, con 0,5 segundos de precisión basta. Si el retraso crece a lo largo del vídeo, no es cuestión de desfase: los FPS no coinciden y ningún desfase lo corrige.',
      },
      {
        q: '¿El archivo resultante sirve tal cual?',
        a: 'Sí, la salida es SRT estándar con índices renumerados; VLC, MPC-HC o IINA la cargan sin tocar nada. Todo se procesa en el navegador y el archivo no se sube; si el original trae bloques ASS o símbolos ♪, marca «Quitar formato» para dejarlo limpio.',
      },
    ],
  },
  de: {
    ui: {
      'blockPlural': 'Blöcke',
      'blockSingular': 'Block',
      'clampClampedTo': 'auf 00:00:00,000 begrenzt.',
      'clampLabel': 'Negative Zeiten auf 00:00:00,000 begrenzen',
      'clampWas': 'wurde',
      'clampWentBelowZero': 'nach dem Verschieben unter null',
      'clampWere': 'wurden',
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'copySrt': 'SRT kopieren',
      'cuePlural': 'Einträge',
      'cueSingular': 'Eintrag',
      'errReadFile': 'Die ausgewählte Datei konnte nicht gelesen werden. Speichere sie erneut als reinen Text (.srt).',
      'inputLabel': 'SRT-Untertitel einfügen',
      'invalidOffsetOr': ' oder ',
      'invalidOffsetPrefix': '⚠️ Bitte gültige Sekundenzahl eingeben, z. B. ',
      'invalidOffsetSuffix': '.',
      'offsetHint': 'Negativ = Untertitel erscheinen früher; positiv = später.',
      'offsetLabel': 'Offset (Sekunden, negativ erlaubt)',
      'parseCouldNotBeParsed': 'nicht analysierbar (keine gültige Zeitstempelzeile) und',
      'parseSkipped': 'übersprungen.',
      'parseWas': 'wurde',
      'parseWere': 'wurden',
      'privacyNote': '🔒 100% clientseitig — deine Untertiteldatei verlässt nie den Browser.',
      'renumberLabel': 'Einträge neu nummerieren',
      'resultTitle': 'Verschobenes SRT',
      'stripLabel': 'Format entfernen (Tags, ASS-Blöcke, ♪)',
      'uploadSrt': '.srt hochladen',
    },
    useCases: [
      'SRT-Untertitel online um Sekunden verschieben',
      'nicht synchronisierte Untertitel reparieren',
      'Untertitel-Offset kostenlos anpassen',
      'HTML-Tags aus SRT-Datei entfernen',
    ],
    faqs: [
      {
        q: 'Verschiebt ein positiver Offset Untertitel nach früher oder später?',
        a: 'Ein positiver Offset addiert Zeit, sodass jeder Eintrag später startet — verwende das, wenn die Untertitel vor der Sprachausgabe erscheinen. Ein negativer Offset zieht Zeit ab und verschiebt Einträge nach früher, wenn sie dem Audio hinterherhinken.',
      },
      {
        q: 'Werden die Eintrags-Indizes neu nummeriert?',
        a: 'Ja. Nach dem Verschieben werden die Einträge in ihrer neuen chronologischen Reihung ab 1 fortlaufend nummeriert, sodass die Ausgabe immer eine gültige, korrekt sortierte SRT-Datei ist — selbst wenn Offsets Einträge gegeneinander verschieben.',
      },
      {
        q: 'Können HTML- und ASS-Format-Tags entfernt werden?',
        a: 'Ja. Die Option zum Tag-Entfernen löscht Inline-HTML (<i>, <b>) und ASS-Stil-Override-Tags und lässt saubere Klartext-Untertitel zurück. Das hilft, wenn ein Player die Tags als sichtbaren Zeichensalat statt als Formatierung rendert.',
      },
      {
        q: 'Wie ermittle ich die nötige Verschiebung?',
        a: 'Nimm einen konkreten Satz: Wann sagt die Stimme den Text (der Player zeigt es) und wann erscheint der Untertitel? Die Differenz ist der Offset, 0,5 Sekunden Genauigkeit genügt. Wächst der Versatz im Lauf des Films, ist es kein Offset-Problem, sondern ein FPS-Mismatch — den korrigiert kein Offset.',
      },
      {
        q: 'Kann ich das Ergebnis direkt verwenden?',
        a: 'Ja, die Ausgabe ist Standard-SRT mit neu nummerierten Indizes; VLC, MPC-HC oder IINA laden sie ohne Anpassung. Alles bleibt im Browser, nichts wird hochgeladen; bei ASS-Blöcken oder ♪-Symbolen im Original vorab „Format entfernen“ aktivieren.',
      },
    ],
  },
}
