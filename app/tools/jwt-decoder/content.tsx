'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>JSON Web Token (JWT)</strong>{' '}
      is a compact, URL-safe string used to securely pass claims between a
      client and a server &mdash; most often for authentication. A JWT has three Base64URL-encoded parts separated by dots:{' '}
      <code>header.payload.signature</code>. This decoder splits those three parts and shows the header and payload
      as readable JSON, plus the raw signature.
    </p>
    <div>
      <h2>How to read a JWT</h2>
      <ul>
        <li>
          <strong>Header</strong> &mdash; the algorithm (e.g. HS256, RS256) and token type (JWT).
        </li>
        <li>
          <strong>Payload</strong> &mdash; the claims: who the token is for (<code>sub</code>), when it was issued (
          <code>iat</code>), when it expires (<code>exp</code>), and any custom fields your app added.
        </li>
        <li>
          <strong>Signature</strong> &mdash; proves the token was not tampered with. It can only be verified with the
          matching secret (HMAC) or public key (RSA/ECDSA), which this decoder does not have.
        </li>
      </ul>
    </div>
    <div>
      <h2>Is it safe to paste my token here?</h2>
      <p>
        Yes. Decoding runs entirely in your browser with the built-in <code>atob</code>{' '}
        function &mdash; your token is
        never uploaded to a server, stored, or logged. That said, treat real access tokens like passwords: do not
        share them in screenshots, chat, or public repos. If you only want to understand a token&apos;s structure,
        use the <em>Load Sample</em> button for a harmless example.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>JSON Web Token (JWT)</strong> es una cadena compacta y segura para URL que se usa para pasar claims
      de forma segura entre un cliente y un servidor — casi siempre para autenticación. Un JWT tiene tres partes
      codificadas en Base64URL separadas por puntos:{' '}
      <code>header.payload.signature</code>. Este descodificador separa esas tres partes y muestra el header y el
      payload como JSON legible, además de la firma en bruto.
    </p>
    <div>
      <h2>Cómo leer un JWT</h2>
      <ul>
        <li>
          <strong>Header</strong> — el algoritmo (p. ej. HS256, RS256) y el tipo de token (JWT).
        </li>
        <li>
          <strong>Payload</strong> — los claims: para quién es el token (<code>sub</code>), cuándo se emitió (<code>iat</code>),
          cuándo expira (<code>exp</code>) y cualquier campo personalizado que tu app haya añadido.
        </li>
        <li>
          <strong>Signature</strong> — demuestra que el token no ha sido manipulado. Solo puede verificarse con el
          secreto correspondiente (HMAC) o la clave pública (RSA/ECDSA), que este descodificador no tiene.
        </li>
      </ul>
    </div>
    <div>
      <h2>¿Es seguro pegar mi token aquí?</h2>
      <p>
        Sí. La descodificación se ejecuta completamente en tu navegador con la función incorporada <code>atob</code> —
        tu token nunca se sube a un servidor, se almacena ni se registra. Dicho esto, trata los tokens de acceso reales
        como contraseñas: no los compartas en capturas de pantalla, chats ni repositorios públicos. Si solo quieres
        entender la estructura de un token, usa el botón <em>Cargar ejemplo</em> para cargar un ejemplo inofensivo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>JSON Web Token (JWT)</strong> ist ein kompakter, URL-sicherer String, der verwendet wird, um Claims
      sicher zwischen Client und Server zu übertragen — meistens zur Authentifizierung. Ein JWT besteht
      aus drei Base64URL-kodierten Teilen, die durch Punkte getrennt sind:{' '}
      <code>header.payload.signature</code>. Dieser Decoder trennt diese drei Teile und zeigt den Header und den
      Payload als lesbares JSON sowie die rohe Signatur an.
    </p>
    <div>
      <h2>Wie man ein JWT liest</h2>
      <ul>
        <li>
          <strong>Header</strong> — der Algorithmus (z. B. HS256, RS256) und der Token-Typ (JWT).
        </li>
        <li>
          <strong>Payload</strong> — die Claims: für wen das Token ist (<code>sub</code>), wann es ausgestellt wurde (<code>iat</code>),
          wann es abläuft (<code>exp</code>), und alle benutzerdefinierten Felder, die deine App hinzufügt.
        </li>
        <li>
          <strong>Signature</strong> — beweist, dass das Token nicht manipuliert wurde. Es kann nur mit dem passenden
          Secret (HMAC) oder öffentlichen Schlüssel (RSA/ECDSA) verifiziert werden, über die dieser Decoder nicht
          verfügt.
        </li>
      </ul>
    </div>
    <div>
      <h2>Ist es sicher, mein Token hier einzufügen?</h2>
      <p>
        Ja. Das Dekodieren läuft vollständig in deinem Browser mit der eingebauten Funktion <code>atob</code> — dein
        Token wird nie auf einen Server hochgeladen, gespeichert oder protokolliert. Trotzdem solltest du echte
        Access-Tokens wie Passwörter behandeln: Teile sie nicht in Screenshots, Chats oder öffentlichen Repos. Wenn du
        nur die Struktur eines Tokens verstehen willst, verwende die Schaltfläche <em>Beispiel laden</em>, um ein
        harmloses Beispiel zu laden.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function JwtDecoderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
