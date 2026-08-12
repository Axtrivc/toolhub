'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>JSON Web Token (JWT)</strong> is a compact, URL-safe string used to securely pass claims between a
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
        Yes. Decoding runs entirely in your browser with the built-in <code>atob</code> function &mdash; your token is
        never uploaded to a server, stored, or logged. That said, treat real access tokens like passwords: do not
        share them in screenshots, chat, or public repos. If you only want to understand a token&apos;s structure,
        use the <em>Load Sample</em> button for a harmless example.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>JSON Web Token (JWT)</strong> 是一种紧凑、URL 安全的字符串,用于在客户端和服务器之间安全地传递声明——最常用于身份验证。一个 JWT 由三段 Base64URL 编码的部分组成,以点号分隔:{' '}
      <code>header.payload.signature</code>。本解码器把这三段拆开,把 header 和 payload 显示为可读的 JSON,并展示原始签名。
    </p>
    <div>
      <h2>如何阅读 JWT</h2>
      <ul>
        <li>
          <strong>Header</strong> —— 算法(如 HS256、RS256)和令牌类型 (JWT)。
        </li>
        <li>
          <strong>Payload</strong> —— 声明内容:令牌属于谁(<code>sub</code>),签发时间(<code>iat</code>),过期时间(<code>exp</code>),以及你的应用添加的任何自定义字段。
        </li>
        <li>
          <strong>Signature</strong> —— 证明令牌未被篡改。它只能用匹配的密钥 (HMAC) 或公钥 (RSA/ECDSA) 来验证,而本解码器并不持有这些。
        </li>
      </ul>
    </div>
    <div>
      <h2>在这里粘贴我的令牌安全吗?</h2>
      <p>
        安全。解码完全在你的浏览器中通过内置的 <code>atob</code> 函数完成——你的令牌绝不会被上传到服务器、存储或记录。话虽如此,请把真实的访问令牌当作密码一样对待:不要在截图、聊天或公开仓库中分享。如果你只是想了解令牌的结构,可以使用 <em>Load Sample</em> 按钮加载一个无害的示例。
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
        entender la estructura de un token, usa el botón <em>Load Sample</em> para un ejemplo inofensivo.
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
      sicher zwischen einem Client und einem Server zu übertragen — meistens zur Authentifizierung. Ein JWT besteht
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
          wann es abläuft (<code>exp</code>), und alle selbst hinzugefügten Felder deiner App.
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
        nur die Struktur eines Tokens verstehen willst, verwende die Schaltfläche <em>Load Sample</em> für ein
        harmloses Beispiel.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function JwtDecoderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
