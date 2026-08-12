'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Secret Key Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      这个工具用 <code>crypto.getRandomValues</code>（你浏览器里加密安全的随机数生成器）生成<strong>高熵密钥</strong>——API 密钥、访问令牌、webhook
      密钥、签名密钥，或一次性初始密码。选择一种格式（hex、Base64、Base64URL、字母数字、带自定义前缀的
      API-key 风格字符串，或 UUID v4），设置长度，然后生成一个密钥或一批五个、十个。所有处理 100% 在你的设备上完成：不会被记录、存储或上传。
    </p>

    <div>
      <h2>你需要多少熵？</h2>
      <p>
        熵衡量的是攻击者平均需要多少次猜测才能找到你的密钥。经验法则：<strong>低于 80 位算弱</strong>（适合短时效的验证码，不适合做密钥），{' '}
        <strong>80–128 位算良好</strong>（适用于大多数令牌），而<strong>高于 128 位算强</strong>——
        这正是签名密钥和长期 API 密钥应处的区间。工具会把每个结果标注为 Weak /{' '}
        Good / Strong，方便你一眼核对。对于按字节计算的格式，数学很简单：{' '}
        <code>bytes × 8</code> 位，所以 32 个随机字节正好给出完整的 256 位。字母数字字符串每个字符大约承载{' '}
        <code>5.95</code> 位（62 个符号的 log₂），因此你需要约 22 个字符才能超过 128 位。
      </p>
    </div>

    <div>
      <h2>选择合适的格式</h2>
      <p>
        <strong>Hex</strong> 是 HMAC 密钥以及任何要复制进配置文件内容的经典选择；{' '}
        <strong>Base64URL</strong> 把同样的熵塞进更少的字符里，并且在 URL 和 HTTP 头中无需转义就能幸存，这也是 JWT 密钥和 OAuth 令牌常常使用它的原因。{' '}
        <strong>字母数字</strong>完全避开了标点符号——在挑剔的系统拒绝符号时很方便。
        <strong>API key 风格</strong>会加上一个人类可读的前缀，例如 <code>sk_live_</code>，让密钥在控制台和泄露扫描器中更容易被识别（前缀本身不增加熵——熵全部来自
        随机后缀）。<strong>UUID v4</strong> 用于必须唯一且不透明的标识符，而不是密钥：在
        122 位下它作为令牌没问题，但它真正的用途是生成 ID。
      </p>
    </div>

    <div>
      <h2>为什么拒绝采样很重要</h2>
      <p>
        挑选随机字符的一个朴素办法是 <code>byte % 62</code>——但 256 不是 62 的整数倍，因此有少数字符会比其他的略微更可能出现。这种偏差叫做<strong>模偏差（modulo bias）</strong>，
        虽然很小，但恰恰是那种会在大规模下削弱密钥的缺陷。本生成器会丢弃任何 ≥ <code>248</code>（能装进一个字节里 62 的最大倍数）的随机字节并重新抽取，因此每个字符都<em>完全均匀</em>。按字节计算的格式无需这种修正：每个字节都被完整使用。最后两个提示：每个环境都生成全新的密钥（绝不在开发和生产之间复用同一个），并且一旦某个密钥落进了日志、邮件或截图里，就<strong>立即轮换</strong>。
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
        el terreno adecuado para claves de firma y secretos de API de larga duración. La herramienta etiqueta cada resultado Weak /
        Good / Strong para que puedas comprobarlo de un vistazo. Para los formatos basados en bytes la matemática es sencilla:{' '}
        <code>bytes × 8</code> bits, por lo que 32 bytes aleatorios dan 256 bits completos. Las cadenas alfanuméricas transportan unos{' '}
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
        reconocibles en paneles y escáneres de fugas (el prefijo no añade entropía — toda proviene del
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
        producción) y <strong>rota inmediatamente</strong> si una clave acaba en un registro, un correo o una captura de pantalla.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Tool erzeugt <strong>hochentropische Secrets</strong> — API-Schlüssel, Access-Tokens, Webhook-Secrets, Signier
      schlüssel oder einmalige Einrichtungspasswörter — mit <code>crypto.getRandomValues</code>, dem kryptografisch
      sicheren Zufallszahlengenerator deines Browsers. Wähl ein Format (hex, Base64, Base64URL, alphanumerisch, einen
      API-Key-artigen String mit eigenem Präfix oder UUID v4), leg die Länge fest und erzeug ein Secret oder einen Satz
      von fünf oder zehn. Alles passiert zu 100 % auf deinem Gerät: Nichts wird geloggt, gespeichert oder hochgeladen.
    </p>

    <div>
      <h2>Wie viel Entropie brauchst du?</h2>
      <p>
        Entropie misst, wie viele Versuche ein Angreifer im Durchschnitt bräuchte, um dein Secret zu finden. Als Faust
        regel: <strong>unter 80 Bit ist schwach</strong> (in Ordnung für kurzlebige Codes, nicht für Schlüssel),{' '}
        <strong>80–128 Bit ist gut</strong> für die meisten Tokens, und <strong>über 128 Bit ist stark</strong> —
        das richtige Terrain für Signierschlüssel und langlebige API-Secrets. Das Tool labelt jedes Ergebnis Weak /
        Good / Strong, damit du es auf einen Blick prüfen kannst. Bei bytebasierten Formaten ist die Mathe einfach:{' '}
        <code>bytes × 8</code> Bit, also liefern 32 zufällige Bytes volle 256 Bit. Alphanumerische Strings tragen etwa{' '}
        <code>5.95</code> Bit pro Zeichen (log₂ von 62 Symbolen), du brauchst also ~22 Zeichen, um 128 Bit zu übertreffen.
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
        wird ganz verwendet. Zwei abschließende Tipps: erzeuge Secrets frisch pro Umgebung (verwende nie dasselbe über Dev und
        Prod hinweg) und <strong>rotiere sofort</strong>, falls ein Schlüssel jemals in einem Log, einer E-Mail oder einem Screenshot landet.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SecretKeyGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
