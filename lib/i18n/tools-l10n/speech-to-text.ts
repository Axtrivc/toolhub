/**
 * speech-to-text 本地化 bundle —— es / de(2026-11 语音/PDF 批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(无计算公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const speechToTextL10n: ToolL10n = {

  es: {
    useCases: [
      'Dictar correos, notas o mensajes largos sin teclear, con el texto apareciendo mientras hablas',
      'Transcribir reuniones o clases en tiempo real y corregir sobre la marcha el resultado editable',
      'Redactar borradores en cualquier idioma del sitio cambiando el idioma de reconocimiento al vuelo',
      'Capturar ideas manos libres mientras conduces o cocinas y descargar la transcripción como .txt',
    ],
    faqs: [
      {
        q: '¿Cómo funciona el reconocimiento de voz?',
        a: 'Con la Web Speech API nativa del navegador: el audio se procesa en una sesión de dictado continua y el texto aparece palabra a palabra. No hay que instalar nada; solo hace falta un navegador compatible y permiso de micrófono.',
      },
      {
        q: '¿A dónde va mi audio?',
        a: 'El navegador (por ejemplo Chrome) envía el audio al servicio de reconocimiento del fabricante para convertirlo en texto. ToolHub no recibe, no guarda y no ve tu audio: la página solo muestra el texto que devuelve el navegador.',
      },
      {
        q: '¿Puedo corregir el texto mientras hablo?',
        a: 'Sí. El área de transcripción es un campo editable: lo provisional se muestra en gris y cada frase confirmada cae al texto editable, donde puedes retocarla en cualquier momento sin detener el dictado.',
      },
      {
        q: '¿Por qué se detiene solo a veces?',
        a: 'Las sesiones de dictado se reinician automáticamente tras cada pausa larga o silencio; si el servicio se detiene, pulsa Continuar y sigue hablando. Un fallo de red o de permiso se muestra con un mensaje claro y localizado.',
      },
    ],
    ui: {
      'charStats': '≈ {c} caracteres · {w} palabras',
      'clearButton': 'Limpiar',
      'downloadTxt': 'Descargar .txt',
      'errGeneric': 'Error de reconocimiento: {e}',
      'errNetwork': 'No se pudo contactar con el servicio de voz. Revisa tu conexión y vuelve a intentarlo.',
      'errNoMic': 'No se ha encontrado ningún micrófono. Conecta uno y vuelve a intentarlo.',
      'errPermission': 'Acceso al micrófono denegado. Permite el micrófono en la barra de direcciones del navegador y vuelve a intentarlo.',
      'interimLabel': 'Escuchando…',
      'languageLabel': 'Idioma de reconocimiento',
      'note': '🎙️ El reconocimiento usa la Web Speech API del navegador: Chrome y similares envían el audio al servicio de voz del fabricante para transcribirlo, por lo que necesitas conexión. ToolHub no recibe ni almacena audio, y el texto final queda solo en tu navegador: edítalo, cópialo o descárgalo como .txt. En Firefox el dictado en vivo aún no está disponible.',
      'pauseButton': 'Pausar',
      'resumeButton': 'Continuar',
      'startButton': 'Empezar a dictar',
      'statusIdle': 'Listo',
      'statusListening': 'Escuchando — habla ahora',
      'statusPaused': 'En pausa — pulsa Continuar para seguir',
      'stopButton': 'Detener',
      'transcriptLabel': 'Transcripción (editable)',
      'unsupported': 'Tu navegador no ofrece reconocimiento de voz. El dictado en vivo funciona en Chrome, Edge y Safari; en Firefox todavía no está disponible.',
    },
  },
  de: {
    useCases: [
      'E-Mails, Notizen oder lange Nachrichten diktieren, ohne zu tippen — der Text erscheint beim Sprechen',
      'Meetings oder Vorlesungen in Echtzeit transkribieren und das bearbeitbare Ergebnis sofort korrigieren',
      'Entwürfe in jeder Sprache der Seite verfassen, indem du die Erkennungssprache unterwegs wechselst',
      'Ideen freihändig festhalten — beim Fahren oder Kochen — und die Transkription als .txt herunterladen',
    ],
    faqs: [
      {
        q: 'Wie funktioniert die Spracherkennung?',
        a: 'Über die native Web Speech API des Browsers: Das Audio läuft in einer durchgehenden Diktat-Sitzung, und der Text erscheint Wort für Wort. Nichts zu installieren — nur ein kompatibler Browser und Mikrofonzugriff nötig.',
      },
      {
        q: 'Wohin geht mein Audio?',
        a: 'Der Browser (etwa Chrome) sendet das Audio an den Sprachdienst des Herstellers, um es in Text umzuwandeln. ToolHub empfängt, speichert oder sieht dein Audio nicht: Die Seite zeigt nur den Text, den der Browser zurückgibt.',
      },
      {
        q: 'Kann ich den Text beim Sprechen korrigieren?',
        a: 'Ja. Der Transkriptionsbereich ist editierbar: Vorläufiges erscheint grau, jede bestätigte Phrase landet im bearbeitbaren Text — dort kannst du jederzeit feilen, ohne das Diktat zu stoppen.',
      },
      {
        q: 'Warum bricht das Diktat manchmal ab?',
        a: 'Diktat-Sitzungen starten nach längeren Pausen automatisch neu; bleibt der Dienst stehen, tippe auf Weiter und sprich weiter. Netzwerk- oder Berechtigungsfehler zeigen eine klare, lokalisierte Meldung.',
      },
    ],
    ui: {
      'charStats': '≈ {c} Zeichen · {w} Wörter',
      'clearButton': 'Leeren',
      'downloadTxt': '.txt herunterladen',
      'errGeneric': 'Erkennungsfehler: {e}',
      'errNetwork': 'Der Sprachdienst ist nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.',
      'errNoMic': 'Kein Mikrofon gefunden. Schließe eines an und versuche es erneut.',
      'errPermission': 'Mikrofonzugriff verweigert. Erlaube das Mikrofon in der Adressleiste des Browsers und versuche es erneut.',
      'interimLabel': 'Ich höre zu…',
      'languageLabel': 'Erkennungssprache',
      'note': '🎙️ Die Erkennung nutzt die Web Speech API des Browsers: Chrome & Co. senden das Audio zum Sprachdienst des Herstellers, du brauchst also eine Verbindung. ToolHub empfängt und speichert kein Audio; der fertige Text bleibt allein in deinem Browser — bearbeite, kopiere oder lade ihn als .txt herunter. In Firefox ist Live-Diktat noch nicht verfügbar.',
      'pauseButton': 'Pause',
      'resumeButton': 'Weiter',
      'startButton': 'Diktat starten',
      'statusIdle': 'Bereit',
      'statusListening': 'Ich höre zu — sprich jetzt',
      'statusPaused': 'Pausiert — tippe Weiter, um fortzufahren',
      'stopButton': 'Stoppen',
      'transcriptLabel': 'Transkription (bearbeitbar)',
      'unsupported': 'Dein Browser bietet keine Spracherkennung. Live-Diktat funktioniert in Chrome, Edge und Safari; in Firefox ist es noch nicht verfügbar.',
    },
  },
}
