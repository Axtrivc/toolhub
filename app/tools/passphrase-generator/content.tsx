'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PassphraseGenerator 长文正文 —— 三语 dispatcher
 *
 * en 分支与英文站渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why words beat symbols</h2>
    <p>A random 10-character password with symbols carries about 65 bits of entropy but costs you a minute to type correctly. A five-word passphrase from a 256-word list carries 40 bits and reads like a sentence fragment. For master passwords and phone keyboards, length you can remember wins over density you cannot.</p>
    <h2>How the entropy math works</h2>
    <p>Each word is a uniform pick from exactly 256 options, so every word contributes precisely log2(256) = 8 bits — six words give 48 bits, ten give 80. A trailing digit adds log2(10) ≈ 3.3 bits. Capitalization adds at most 1 bit per word and is honestly ignored in the estimate.</p>
    <h2>Choosing your word count</h2>
    <p>Security teams generally recommend 75-80 bits for high-value accounts (email, password manager, crypto), which means nine or ten words here. Four to five words (32-40 bits) is fine for throwaway logins where a reset costs nothing. For site logins that cap password length, use a character-based password generator instead.</p>
    <h2>The mistakes that undo a good passphrase</h2>
    <p>Reusing one passphrase across sites, choosing words from a famous quote or song lyric (attackers test those first), or writing it on a sticky note. The generator draws with the Web Crypto API locally — nothing is transmitted, so the passphrase is only as exposed as the place you store it.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué las palabras ganan a los símbolos</h2>
    <p>Una contraseña aleatoria de 10 caracteres con símbolos ronda los 65 bits de entropía, pero te cuesta un minuto teclearla bien. Cinco palabras de una lista de 256 suman 40 bits y se leen como media frase. Para contraseñas maestras y teclados de móvil, la longitud que recuerdas gana a la densidad que no.</p>
    <h2>Cómo funciona la entropía</h2>
    <p>Cada palabra se sortea uniformemente entre exactamente 256 opciones, así que aporta log2(256) = 8 bits — seis palabras dan 48, diez dan 80. Un dígito final añade log2(10) ≈ 3,3 bits. Capitalizar suma como mucho 1 bit por palabra y se ignora con honestidad.</p>
    <h2>Elegir cuántas palabras</h2>
    <p>Los equipos de seguridad suelen recomendar 75-80 bits para cuentas valiosas (correo, gestor de contraseñas, cripto): aquí, nueve o diez palabras. Cuatro o cinco (32-40 bits) bastan para inicios de sesión de usar y tirar. Si el sitio limita la longitud, usa un generador de contraseñas de caracteres.</p>
    <h2>Los errores que arruinan una buena frase</h2>
    <p>Reutilizarla entre sitios, sacar palabras de una cita o una canción (los atacantes lo prueban primero) o pegarla en una nota adhesiva. El sorteo usa la Web Crypto API en local — no se transmite nada, así que la frase solo está tan expuesta como el lugar donde la guardas.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum Wörter Symbole schlagen</h2>
    <p>Ein zufälliges 10-Zeichen-Passwort mit Symbolen trägt rund 65 Bits Entropie, kostet dich aber eine Minute sauberen Tippens. Fünf Wörter aus einer 256-Wort-Liste bringen 40 Bits und lesen sich wie ein halber Satz. Für Master-Passwörter und Handytastaturen schlägt Merkbarkeit die Dichte.</p>
    <h2>Wie die Entropie rechnet</h2>
    <p>Jedes Wort ist eine gleichmäßige Wahl aus genau 256 Optionen, trägt also log2(256) = 8 Bits bei — sechs Wörter geben 48, zehn 80. Eine Endziffer addiert log2(10) ≈ 3,3 Bits. Großschreibung bringt höchstens 1 Bit pro Wort und wird sauber ignoriert.</p>
    <h2>Die Wortanzahl wählen</h2>
    <p>Für wertvolle Konten (Mail, Passwort-Manager, Krypto) empfehlen Sicherheitsteams meist 75-80 Bits — hier neun oder zehn Wörter. Vier bis fünf Wörter (32-40 Bits) reichen für Wegwerf-Logins. Begrenzt die Seite die Passwortlänge, nimm einen zeichenbasierten Passwort-Generator.</p>
    <h2>Die Fehler, die eine gute Passphrase ruinieren</h2>
    <p>Sie über Sites wiederzuverwenden, Wörter aus berühmten Zitaten oder Songtexten zu nehmen (Angreifer probieren das zuerst) oder sie auf einen Klebezettel zu schreiben. Die Auslosung läuft lokal über die Web-Crypto-API — nichts wird übertragen, also ist die Passphrase nur so exponiert wie ihr Aufbewahrungsort.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PassphraseGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
