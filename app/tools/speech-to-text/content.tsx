'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SpeechToText 长文正文 —— 三语 dispatcher
 *
 * en 分支为英文原值。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Live dictation in your browser</h2>
    <p>The Web Speech API turns your microphone into a text stream: words appear while you speak, interim guesses in gray, confirmed phrases dropping into the editable transcript. No installs, no accounts — just allow the microphone.</p>
    <h2>Where your audio goes</h2>
    <p>Browsers like Chrome send the audio to their vendor&rsquo;s speech service to recognize it; ToolHub itself never receives or stores audio. The final text lives only in your page — edit it, copy it, or download it as .txt.</p>
    <h2>Languages and sessions</h2>
    <p>Recognition follows the interface language by default and can be switched between English, Spanish and German at any moment — a running session restarts on the fly. Pause and resume keep the transcript so far; each continuation picks up the same text.</p>
    <h2>Honest limits</h2>
    <p>Live dictation needs a Chromium-based browser or Safari plus an internet connection for the recognition service; Firefox currently offers no SpeechRecognition. Noisy rooms degrade accuracy, and the transcript is plain text — no timestamps or speaker labels.</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dictado en vivo en tu navegador</h2>
    <p>La Web Speech API convierte tu micrófono en un flujo de texto: las palabras aparecen mientras hablas, lo provisional en gris y cada frase confirmada cae a la transcripción editable. Sin instalaciones ni cuentas: solo permite el micrófono.</p>
    <h2>A dónde va tu audio</h2>
    <p>Navegadores como Chrome envían el audio al servicio de voz del fabricante para reconocerlo; ToolHub no recibe ni almacena audio. El texto final vive solo en tu página: edítalo, cópialo o descárgalo como .txt.</p>
    <h2>Idiomas y sesiones</h2>
    <p>El reconocimiento sigue por defecto el idioma de la interfaz y se puede cambiar entre inglés, español y alemán en cualquier momento — una sesión en curso se reinicia al vuelo. Pausar y continuar conserva lo transcrito; cada reanudación prosigue el mismo texto.</p>
    <h2>Límites honestos</h2>
    <p>El dictado en vivo exige un navegador basado en Chromium o Safari y conexión para el servicio de reconocimiento; Firefox hoy no ofrece SpeechRecognition. Las salas ruidosas restan precisión, y la transcripción es texto plano: sin marcas de tiempo ni etiquetas de hablante.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Live-Diktat im Browser</h2>
    <p>Die Web Speech API macht dein Mikrofon zum Textstrom: Wörter erscheinen beim Sprechen, Vorläufiges grau, bestätigte Phrasen fallen in die bearbeitbare Transkription. Keine Installation, kein Konto — nur das Mikrofon erlauben.</p>
    <h2>Wohin dein Audio geht</h2>
    <p>Browser wie Chrome senden das Audio zum Sprachdienst des Herstellers; ToolHub selbst empfängt und speichert kein Audio. Der fertige Text liegt allein in deiner Seite — bearbeiten, kopieren oder als .txt herunterladen.</p>
    <h2>Sprachen und Sitzungen</h2>
    <p>Die Erkennung folgt standardmäßig der Oberflächensprache und lässt sich jederzeit zwischen Englisch, Spanisch und Deutsch wechseln — eine laufende Sitzung startet dabei im Hintergrund neu. Pause und Weiter behalten die Transkription; jede Fortsetzung führt denselben Text weiter.</p>
    <h2>Ehrliche Grenzen</h2>
    <p>Live-Diktat braucht einen Chromium-Browser oder Safari plus Verbindung zum Erkennungsdienst; Firefox bietet derzeit keine SpeechRecognition. Laute Räume kosten Genauigkeit, und die Transkription ist reiner Text — ohne Zeitmarken oder Sprecher-Labels.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SpeechToTextContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
