'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Secret Key Generator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool generates <strong>high-entropy secrets</strong> — API keys, access tokens, webhook secrets, signing
      keys, or one-time setup passwords — using <code>crypto.getRandomValues</code>, your browser&apos;s
      cryptographically secure random number generator. Pick a format (hex, Base64, Base64URL, alphanumeric, an
      API-key style string with your own prefix, or UUID v4), set the length, and generate one secret or a batch
      of five or ten. Everything happens 100% on your device: nothing is logged, stored, or uploaded.
    </p>

    <div>
      <h2>How much entropy do you need?</h2>
      <p>
        Entropy measures how many guesses an attacker would need, on average, to find your secret. As a rule of
        thumb: <strong>below 80 bits is weak</strong> (fine for short-lived codes, not for keys),{' '}
        <strong>80–128 bits is good</strong> for most tokens, and <strong>above 128 bits is strong</strong> —
        the right territory for signing keys and long-lived API secrets. The tool labels each result Weak /
        Good / Strong so you can sanity-check at a glance. For byte-based formats the math is simple:{' '}
        <code>bytes × 8</code> bits, so 32 random bytes give a full 256 bits. Alphanumeric strings carry about{' '}
        <code>5.95</code> bits per character (log₂ of 62 symbols), so you need ~22 characters to beat 128 bits.
      </p>
    </div>

    <div>
      <h2>Picking the right format</h2>
      <p>
        <strong>Hex</strong> is the classic for HMAC keys and anything copied into config files;{' '}
        <strong>Base64URL</strong> packs the same entropy into fewer characters and survives URLs and headers
        without escaping, which is why JWT secrets and OAuth tokens often use it.{' '}
        <strong>Alphanumeric</strong> avoids punctuation entirely — handy when a picky system rejects symbols.
        The <strong>API key style</strong> adds a human-readable prefix like <code>sk_live_</code> so keys are
        recognizable in dashboards and leak scanners (the prefix adds no entropy — that all comes from the
        random suffix). <strong>UUID v4</strong> is for identifiers that must be unique and opaque, not for
        secrets: at 122 bits it is fine as a token, but its real job is ID generation.
      </p>
    </div>

    <div>
      <h2>Why rejection sampling matters</h2>
      <p>
        A naive way to pick random characters is <code>byte % 62</code> — but 256 is not a multiple of 62, so a
        few characters become slightly more likely than others. That skew is called <strong>modulo bias</strong>,
        and while small, it is exactly the kind of flaw that weakens keys at scale. This generator discards any
        random byte ≥ <code>248</code> (the largest multiple of 62 that fits in a byte) and draws again, so
        every character is <em>perfectly uniform</em>. The byte-based formats need no such correction: each byte
        is used whole. Two parting tips: generate secrets fresh per environment (never reuse one across dev and
        prod), and <strong>rotate immediately</strong> if a key ever lands in a log, email, or screenshot.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta genera <strong>secretos de alta entropía</strong> — claves de API, tokens de acceso, secretos de webhook, claves
      de firma o contraseñas de configuración de un solo uso — usando <code>crypto.getRandomValues</code>, el generador de números
      aleatorios criptográficamente seguro de tu navegador. Elige un formato (hex, Base64, Base64URL, alfanumérico, una
      cadena estilo API key con tu propio prefijo o UUID v4), define la longitud y genera un secreto o un lote
      de cinco o diez. Todo ocurre 100 % en tu dispositivo: nada se registra, almacena ni sube.
    </p>

    <div>
      <h2>¿Cuánta entropía necesitas?</h2>
      <p>
        La entropía mide cuántos intentos necesitaría un atacante, como media, para encontrar tu secreto. Como regla
        general: <strong>menos de 80 bits es débil</strong> (válido para códigos de corta duración, no para claves),{' '}
        <strong>80–128 bits es bueno</strong> para la mayoría de tokens, y <strong>más de 128 bits es fuerte</strong> —
        el terreno adecuado para claves de firma y secretos de API de larga duración. La herramienta etiqueta cada resultado como Débil /
        Aceptable / Fuerte para que puedas comprobarlo de un vistazo. Para los formatos basados en bytes la matemática es sencilla:{' '}
        <code>bytes × 8</code> bits, por lo que 32 bytes aleatorios dan 256 bits completos. Las cadenas alfanuméricas aportan unos{' '}
        <code>5.95</code> bits por carácter (log₂ de 62 símbolos), así que necesitas ~22 caracteres para superar 128 bits.
      </p>
    </div>

    <div>
      <h2>Elegir el formato adecuado</h2>
      <p>
        <strong>Hex</strong> es el clásico para claves HMAC y cualquier cosa copiada en archivos de configuración;{' '}
        <strong>Base64URL</strong> empaqueta la misma entropía en menos caracteres y sobrevive a URLs y cabeceras
        sin escapado, por eso los secretos JWT y los tokens OAuth lo usan a menudo.{' '}
        <strong>Alfanumérico</strong> evita la puntuación por completo — útil cuando un sistema exigente rechaza símbolos.
        El <strong>estilo API key</strong> añade un prefijo legible como <code>sk_live_</code> para que las claves sean
        reconocibles en paneles y escáneres de fugas (el prefijo no añade entropía — esta proviene por completo del
        sufijo aleatorio). <strong>UUID v4</strong> es para identificadores que deben ser únicos y opacos, no para
        secretos: con 122 bits sirve como token, pero su verdadero cometido es la generación de IDs.
      </p>
    </div>

    <div>
      <h2>Por qué importa el muestreo por rechazo</h2>
      <p>
        Una forma ingenua de elegir caracteres aleatorios es <code>byte % 62</code> — pero 256 no es múltiplo de 62, así que
        algunos caracteres se vuelven ligeramente más probables que otros. Ese sesgo se llama <strong>sesgo de módulo</strong>,
        y aunque pequeño, es justo el tipo de defecto que debilita las claves a gran escala. Este generador descarta cualquier
        byte aleatorio ≥ <code>248</code> (el mayor múltiplo de 62 que cabe en un byte) y vuelve a extraer, de modo que
        cada carácter es <em>perfectamente uniforme</em>. Los formatos basados en bytes no necesitan esa corrección: cada byte
        se usa entero. Dos consejos finales: genera secretos nuevos para cada entorno (nunca reutilices uno entre desarrollo y
        producción) y <strong>rota inmediatamente</strong> si una clave acaba en un log, un correo o una captura de pantalla.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Tool erzeugt <strong>Secrets mit hoher Entropie</strong> — API-Schlüssel, Access-Tokens, Webhook-Secrets,
      Signierschlüssel oder einmalige Einrichtungspasswörter — mit <code>crypto.getRandomValues</code>, dem kryptografisch
      sicheren Zufallszahlengenerator deines Browsers. Wähl ein Format (hex, Base64, Base64URL, alphanumerisch, einen
      API-Key-artigen String mit eigenem Präfix oder UUID v4), leg die Länge fest und erzeug ein Secret oder einen Satz
      von fünf oder zehn. Alles passiert zu 100 % auf deinem Gerät: Nichts wird geloggt, gespeichert oder hochgeladen.
    </p>

    <div>
      <h2>Wie viel Entropie brauchst du?</h2>
      <p>
        Entropie misst, wie viele Versuche ein Angreifer im Durchschnitt bräuchte, um dein Secret zu finden. Als
        Faustregel: <strong>unter 80 Bit ist schwach</strong> (in Ordnung für kurzlebige Codes, nicht für Schlüssel),{' '}
        <strong>80–128 Bit ist gut</strong> für die meisten Tokens, und <strong>über 128 Bit ist stark</strong> —
        das richtige Terrain für Signierschlüssel und langlebige API-Secrets. Das Tool stuft jedes Ergebnis als Schwach /
        Gut / Stark ein, damit du es auf einen Blick prüfen kannst. Bei bytebasierten Formaten ist die Rechnung einfach:{' '}
        <code>bytes × 8</code> Bit, also liefern 32 zufällige Bytes volle 256 Bit. Alphanumerische Strings tragen etwa{' '}
        <code>5.95</code> Bit pro Zeichen (log₂ von 62 Symbolen), du brauchst also ~22 Zeichen, um 128 Bit zu überschreiten.
      </p>
    </div>

    <div>
      <h2>Das richtige Format wählen</h2>
      <p>
        <strong>Hex</strong> ist der Klassiker für HMAC-Schlüssel und alles, was in Konfigurationsdateien kopiert wird;{' '}
        <strong>Base64URL</strong> packt dieselbe Entropie in weniger Zeichen und übersteht URLs und Header
        ohne Escaping, weshalb JWT-Secrets und OAuth-Tokens es oft verwenden.{' '}
        <strong>Alphanumerisch</strong> vermeidet Satzzeichen komplett — praktisch, wenn ein wählerisches System Symbole ablehnt.
        Der <strong>API-Key-Stil</strong> fügt ein lesbares Präfix wie <code>sk_live_</code> hinzu, sodass Schlüssel in
        Dashboards und Leak-Scannern erkennbar sind (das Präfix bringt keine Entropie mit — sie stammt komplett aus dem
        zufälligen Suffix). <strong>UUID v4</strong> ist für IDs, die eindeutig und opak sein müssen, nicht für
        Secrets: Mit 122 Bit ist es als Token in Ordnung, aber sein eigentlicher Job ist die ID-Erzeugung.
      </p>
    </div>

    <div>
      <h2>Warum Rejection Sampling wichtig ist</h2>
      <p>
        Ein naiver Weg, zufällige Zeichen zu wählen, ist <code>byte % 62</code> — aber 256 ist kein Vielfaches von 62, daher
        werden manche Zeichen etwas wahrscheinlicher als andere. Diese Verzerrung heißt <strong>Modulo-Bias</strong>,
        und auch wenn sie klein ist, ist sie genau die Art Fehler, die Schlüssel im großen Maßstab schwächt. Dieser Generator verwirft jedes
        zufällige Byte ≥ <code>248</code> (das größte Vielfache von 62, das in ein Byte passt) und zieht neu, sodass
        jedes Zeichen <em>perfekt gleichverteilt</em> ist. Die bytebasierten Formate brauchen keine solche Korrektur: Jedes Byte
        wird ganz verwendet. Zwei abschließende Tipps: erzeuge Secrets für jede Umgebung neu (nie dasselbe in Dev und
        Prod wiederverwenden) und <strong>rotiere sofort</strong>, falls ein Schlüssel jemals in einem Log, einer E-Mail oder einem Screenshot landet.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SecretKeyGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
