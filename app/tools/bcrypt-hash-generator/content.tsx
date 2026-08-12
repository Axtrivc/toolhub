'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Bcrypt Hash Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool turns a password into a <strong>bcrypt hash</strong> (or a salted SHA-256/SHA-512 digest) and can
      verify a password against an existing hash — all 100% in your browser, with nothing sent over the network.
      It is useful for checking what a stored hash really contains, generating a hash for a config file or a
      seeded test user, or learning how password hashing parameters behave before wiring them into a backend.
    </p>

    <div>
      <h2>What makes bcrypt different</h2>
      <p>
        bcrypt is a <strong>deliberately slow, adaptive</strong> password hash built on the Blowfish cipher. Each
        hash embeds everything needed to verify it: the version (<code>$2a$</code>/<code>$2b$</code>), the cost
        factor, and a 16-byte random salt — so a bcrypt string like{' '}
        <code>$2a$10$N9qo8uLOickgx2ZMRZoMye…</code> is fully self-describing. Slowness is the feature: an
        attacker who steals your database must pay the same expensive computation for <em>every guess</em>,
        which makes bulk cracking of strong passwords impractical. Salts are generated automatically per hash, so
        two users with the same password still get different hashes.
      </p>
    </div>

    <div>
      <h2>Choosing a cost factor</h2>
      <p>
        The cost factor is exponential: <strong>2^cost iterations</strong>, so every step doubles the work for
        you <em>and</em> for an attacker. <code>10</code>–<code>12</code> is the common sweet spot today — pick
        the highest value that keeps your login flow comfortably fast on your production hardware, then revisit
        it every year or two as machines get faster. Values above <code>12</code> are noticeably slow in a
        browser tab (this tool warns you), which is exactly the resistance you want against offline cracking.
        Note that bcrypt only reads the <strong>first 72 bytes</strong> of a password; anything beyond that is
        silently ignored by design.
      </p>
    </div>

    <div>
      <h2>Salted SHA-256/SHA-512 — and their limits</h2>
      <p>
        A salted SHA-2 digest (<code>sha256$salt$hash</code>) stops rainbow tables and identical-password
        collisions, but SHA-2 is built for <strong>speed</strong> — a GPU can test billions of candidates per
        second, so it is <em>not</em> suitable for storing real user passwords on its own. Use the SHA options
        here for learning, checksums, or verifying legacy formats; for anything that protects actual accounts,
        hash <strong>server-side</strong> with <code>argon2id</code> or <code>bcrypt</code> (or at minimum PBKDF2
        with a high iteration count), keep the hashes server-side too, and never log plaintext passwords. This
        page never transmits what you type — but your production system should not trust client-side hashing
        either.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具把密码转换为 <strong>bcrypt 哈希</strong>(或加盐的 SHA-256/SHA-512 摘要),并可根据现有哈希校验密码——全部 100% 在你的浏览器中完成,不经过任何网络传输。它适合用来查看已存储的哈希到底包含什么、为配置文件或种子测试用户生成哈希,或者在把参数接入后端之前先了解密码哈希参数的行为。
    </p>

    <div>
      <h2>bcrypt 的独特之处</h2>
      <p>
        bcrypt 是一种<strong>刻意缓慢、可调节</strong>的密码哈希,基于 Blowfish 加密算法构建。每个哈希都内嵌了校验所需的全部信息:版本(<code>$2a$</code>/<code>$2b$</code>)、成本因子和一个 16 字节的随机盐——因此像 <code>$2a$10$N9qo8uLOickgx2ZMRZoMye…</code> 这样的 bcrypt 字符串是完全自描述的。缓慢正是它的特性:窃取了你数据库的攻击者必须为<em>每一次猜测</em>付出同样昂贵的计算代价,从而让强密码的大规模破解变得不切实际。每个哈希的盐都是自动生成的,因此两个密码相同的用户得到的哈希依然不同。
      </p>
    </div>

    <div>
      <h2>如何选择成本因子</h2>
      <p>
        成本因子是指数级的:<strong>2^cost 次迭代</strong>,所以每提高一档,你和攻击者的计算量都翻倍。如今 <code>10</code>–<code>12</code> 是常见的最佳区间——在生产硬件上选择能让登录流程保持流畅的最高值,然后每隔一两年随着机器变快再回顾调整。高于 <code>12</code> 的值在浏览器标签页中会明显变慢(本工具会警告你),而这恰恰是你抵御离线破解所希望的阻力。请注意,bcrypt 只读取密码的<strong>前 72 个字节</strong>;超出部分会被设计上静默忽略。
      </p>
    </div>

    <div>
      <h2>加盐 SHA-256/SHA-512——及其局限</h2>
      <p>
        加盐的 SHA-2 摘要(<code>sha256$salt$hash</code>)能阻止彩虹表和相同密码碰撞,但 SHA-2 是为<strong>速度</strong>而生的——一块 GPU 每秒可以测试数十亿个候选,因此它<em>并不</em>适合单独用来存储真实用户密码。这里的 SHA 选项可用于学习、校验和或验证遗留格式;凡是保护真实账户的场景,都应在<strong>服务端</strong>用 <code>argon2id</code> 或 <code>bcrypt</code>(至少是高迭代次数的 PBKDF2)进行哈希,哈希也保存在服务端,并且绝不记录明文密码。本页面绝不传输你输入的内容——但你的生产系统也不应信任客户端哈希。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta convierte una contraseña en un <strong>hash bcrypt</strong> (o un resumen SHA-256/SHA-512 con
      salt) y puede verificar una contraseña contra un hash existente — todo 100 % en tu navegador, sin enviar nada
      por la red. Es útil para comprobar qué contiene realmente un hash almacenado, generar uno para un archivo de
      configuración o un usuario de pruebas, o entender cómo se comportan los parámetros de hash antes de integrarlos
      en un backend.
    </p>

    <div>
      <h2>Qué hace diferente a bcrypt</h2>
      <p>
        bcrypt es un hash de contraseña <strong>deliberadamente lento y adaptable</strong> basado en el cifrado
        Blowfish. Cada hash incorpora todo lo necesario para verificarlo: la versión (<code>$2a$</code>/<code>$2b$</code>),
        el factor de coste y un salt aleatorio de 16 bytes — así que una cadena bcrypt como{' '}
        <code>$2a$10$N9qo8uLOickgx2ZMRZoMye…</code> se describe por completo a sí misma. La lentitud es la característica:
        un atacante que robe tu base de datos debe pagar el mismo cálculo costoso por <em>cada intento</em>, lo que hace
        inviable el craqueo masivo de contraseñas fuertes. Los salt se generan automáticamente por hash, así que dos
        usuarios con la misma contraseña obtienen hashes distintos.
      </p>
    </div>

    <div>
      <h2>Elegir un factor de coste</h2>
      <p>
        El factor de coste es exponencial: <strong>2^coste iteraciones</strong>, así que cada paso duplica el trabajo
        para ti <em>y</em> para el atacante. <code>10</code>–<code>12</code> es el punto óptimo habitual hoy — elige el
        valor más alto que mantenga tu flujo de login cómodamente rápido en tu hardware de producción y revísalo cada
        año o dos a medida que las máquinas se vuelven más rápidas. Los valores por encima de <code>12</code> son
        notablemente lentos en una pestaña del navegador (esta herramienta te avisa), que es precisamente la resistencia
        que quieres contra el craqueo sin conexión. Ten en cuenta que bcrypt solo lee los <strong>primeros 72 bytes</strong>
        de una contraseña; el resto se ignora silenciosamente por diseño.
      </p>
    </div>

    <div>
      <h2>SHA-256/SHA-512 con salt — y sus límites</h2>
      <p>
        Un resumen SHA-2 con salt (<code>sha256$salt$hash</code>) detiene las tablas arcoíris y las colisiones de
        contraseñas idénticas, pero SHA-2 está diseñado para la <strong>velocidad</strong> — una GPU puede probar
        miles de millones de candidatos por segundo, así que <em>no</em> es adecuado para almacenar contraseñas reales
        de usuarios por sí solo. Usa las opciones SHA aquí para aprender, para checksums o para verificar formatos
        heredados; para todo lo que proteja cuentas reales, haz el hash en el <strong>servidor</strong> con{' '}
        <code>argon2id</code> o <code>bcrypt</code> (o como mínimo PBKDF2 con un recuento de iteraciones alto), guarda
        también los hashes en el servidor y nunca registres contraseñas en texto plano. Esta página nunca transmite lo
        que escribes — pero tu sistema de producción tampoco debería confiar en el hash del lado del cliente.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug wandelt ein Passwort in einen <strong>bcrypt-Hash</strong> (oder einen gesalzenen SHA-256/SHA-512-Hash)
      um und kann ein Passwort gegen einen bestehenden Hash verifizieren — alles zu 100 % in deinem Browser, ohne dass
      etwas über das Netzwerk gesendet wird. Es ist nützlich, um nachzusehen, was ein gespeicherter Hash wirklich enthält,
      einen Hash für eine Konfigurationsdatei oder einen Test-User zu erzeugen oder das Verhalten von Passwort-Hashing-Parametern
      zu verstehen, bevor du sie ins Backend einbaust.
    </p>

    <div>
      <h2>Was bcrypt besonders macht</h2>
      <p>
        bcrypt ist ein <strong>bewusst langsamer, anpassbarer</strong> Passwort-Hash basierend auf der Blowfish-Verschlüsselung.
        Jeder Hash bettet alles ein, was zur Verifikation nötig ist: die Version (<code>$2a$</code>/<code>$2b$</code>),
        den Cost-Faktor und ein 16-Byte-Zufalls-Salt — also ist eine bcrypt-Zeichenkette wie{' '}
        <code>$2a$10$N9qo8uLOickgx2ZMRZoMye…</code> vollständig selbstbeschreibend. Die Langsamkeit ist das Feature: Ein
        Angreifer, der deine Datenbank stiehlt, muss für <em>jeden Versuch</em> dieselbe teure Berechnung bezahlen, was
        das Massenknacken starker Passwörter unpraktikabel macht. Salts werden pro Hash automatisch erzeugt, sodass zwei
        Nutzer mit demselben Passwort dennoch unterschiedliche Hashes erhalten.
      </p>
    </div>

    <div>
      <h2>Einen Cost-Faktor wählen</h2>
      <p>
        Der Cost-Faktor ist exponentiell: <strong>2^cost Iterationen</strong>, sodass jeder Schritt den Aufwand für dich
        <em>und</em> den Angreifer verdoppelt. <code>10</code>–<code>12</code> ist heute der übliche Sweet Spot — wähle
        den höchsten Wert, der deinen Login-Ablauf auf deiner Produktionshardware angenehm schnell hält, und überprüfe ihn
        alle ein bis zwei Jahre, wenn die Maschinen schneller werden. Werte über <code>12</code> sind in einem Browser-Tab
        spürbar langsam (dieses Werkzeug warnt dich), was genau der Widerstand ist, den du gegen Offline-Knacken willst.
        Beachte, dass bcrypt nur die <strong>ersten 72 Byte</strong> eines Passworts liest; alles darüber hinaus wird
        bewusst still ignoriert.
      </p>
    </div>

    <div>
      <h2>Gesalzenes SHA-256/SHA-512 — und seine Grenzen</h2>
      <p>
        Ein gesalzener SHA-2-Hash (<code>sha256$salt$hash</code>) stoppt Rainbow Tables und Identische-Passwort-Kollisionen,
        aber SHA-2 ist für <strong>Geschwindigkeit</strong> gebaut — eine GPU kann Milliarden Kandidaten pro Sekunde testen,
        sodass er <em>nicht</em> geeignet ist, um echte Nutzerpasswörter allein zu speichern. Nutze die SHA-Optionen hier
        zum Lernen, für Checksummen oder zum Verifizieren von Legacy-Formaten; für alles, was echte Konten schützt, hashe{' '}
        <strong>serverseitig</strong> mit <code>argon2id</code> oder <code>bcrypt</code> (oder zumindest PBKDF2 mit hoher
        Iterationszahl), bewahre auch die Hashes serverseitig auf und protokolliere nie Klartextpasswörter. Diese Seite
        überträgt nie, was du eingibst — aber dein Produktionssystem sollte clientseitigem Hashing ebenfalls nicht vertrauen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BcryptHashGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
