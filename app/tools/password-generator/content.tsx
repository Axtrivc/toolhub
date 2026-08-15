'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Password Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Makes a Password Strong?</h2>
    <p>
      Password strength comes down to one thing: <strong>entropy</strong> — how unpredictable the
      password is to an attacker. The more entropy (measured in bits), the longer it takes to
      crack. A random 16-character password using uppercase, lowercase, numbers, and symbols has
      roughly 100 bits of entropy, which would take billions of years to brute-force on modern
      hardware.
    </p>

    <h2>How to Create a Strong Password</h2>
    <p>Follow these principles and your accounts will be dramatically harder to compromise:</p>
    <ol>
      <li>
        <strong>Go long.</strong> Length beats complexity. A 20-character password of random
        words is stronger than a short, garbled one. Aim for at least 12 characters; 16+ is ideal.
      </li>
      <li>
        <strong>Mix character types.</strong> Combine uppercase letters, lowercase letters,
        numbers, and symbols. Mixing all four types expands the pool from 26 (lowercase only) to
        about 95 characters — every extra character then adds ~6.6 bits of entropy.
      </li>
      <li>
        <strong>Avoid the predictable.</strong> Never use names, birthdays, &quot;password123,&quot;
        keyboard patterns (qwerty), or anything found in a dictionary. Attackers try these first.
      </li>
      <li>
        <strong>Use a unique password for every account.</strong> If one service is breached,
        attackers will try the same password on your email, banking, and social accounts.
      </li>
      <li>
        <strong>Store them in a password manager.</strong> Trying to memorize dozens of strong
        passwords is impossible. Use a reputable manager (Bitwarden, 1Password, KeePass) to store
        them encrypted.
      </li>
    </ol>

    <h2>How Secure Is This Generator?</h2>
    <p>
      This tool uses the <code>Web Crypto API</code> (<code>crypto.getRandomValues</code>), which
      pulls randomness from your operating system&apos;s cryptographically secure random number
      generator. This is the same standard used by banks and security software. It is dramatically
      more secure than <code>Math.random()</code>, which is predictable and unsafe for passwords.
    </p>
    <p>
      Even better: the password is generated entirely in your browser and is never transmitted
      anywhere. There is no server log, no database, and no tracking. Once you copy it, it lives
      only on your clipboard.
    </p>

    <h2>Understanding Password Strength Scores</h2>
    <p>
      The strength meter shown above estimates entropy based on your password&apos;s length and
      the size of the character pool used. Here&apos;s what each level means:
    </p>
    <ul>
      <li>
        <strong>Very Weak (&lt;40 bits):</strong> Crackable in seconds to minutes. Never use for
        anything important.
      </li>
      <li>
        <strong>Weak (40–60 bits):</strong> Crackable in hours to days with consumer hardware.
        Upgrade your length.
      </li>
      <li>
        <strong>Strong (60–80 bits):</strong> Would take years to crack. Suitable for most
        personal accounts.
      </li>
      <li>
        <strong>Very Strong (&gt;80 bits):</strong> Effectively uncrackable. Use for email,
        banking, and password manager master passwords.
      </li>
    </ul>

    <h2>Should I Memorize or Use a Manager?</h2>
    <p>
      For most people, a password manager is the right answer. The only password you need to
      memorize is the <strong>master password</strong> that unlocks your manager — make it a long
      passphrase (4-5 random words) rather than a short complex string. Every other password can
      be a random 20+ character string generated here, since you&apos;ll never need to type it.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么决定密码的强度?</h2>
    <p>
      密码强度归结为一件事:<strong>熵</strong>——也就是密码对攻击者来说有多不可预测。熵越高(以比特衡量),破解所需的时间就越长。一个由大写字母、小写字母、数字和符号随机组成的 16 位密码大约有 100 比特熵,在现代硬件上需要数十亿年才能暴力破解。
    </p>

    <h2>如何创建一个强密码</h2>
    <p>遵循以下原则,你的账户将变得极难被攻破:</p>
    <ol>
      <li>
        <strong>加长。</strong>长度胜过复杂度。一个 20 位的随机单词密码比一个短而杂乱的密码更强。至少要 12 位;16 位以上最理想。
      </li>
      <li>
        <strong>混合多种字符类型。</strong>结合大写字母、小写字母、数字和符号。四种类型全部混用,字符池会从 26 个(仅小写字母)扩大到约 95 个字符——此后每多一个字符大约增加 6.6 比特的熵。
      </li>
      <li>
        <strong>避开可预测的内容。</strong>绝不使用姓名、生日、「password123」、键盘图案(qwerty)或任何能在字典里查到的词。攻击者会最先尝试这些。
      </li>
      <li>
        <strong>每个账户使用唯一的密码。</strong>一旦某个服务被攻破,攻击者就会拿同一个密码去试你的邮箱、银行和社交账户。
      </li>
      <li>
        <strong>用密码管理器来存储。</strong>想要记住几十个强密码是不可能的。使用一个可信的管理器(Bitwarden、1Password、KeePass)以加密形式保存它们。
      </li>
    </ol>

    <h2>这个生成器有多安全?</h2>
    <p>
      本工具使用 <code>Web Crypto API</code>(<code>crypto.getRandomValues</code>),从你的操作系统的密码学安全随机数生成器中获取随机性。这与银行和安全软件使用的标准相同。它远比 <code>Math.random()</code> 安全——后者是可预测的,不适合用于密码。
    </p>
    <p>
      更棒的是:密码完全在你的浏览器中生成,绝不会传输到任何地方。没有服务器日志、没有数据库、没有跟踪。一旦你复制了它,它只存在于你的剪贴板上。
    </p>

    <h2>理解密码强度评分</h2>
    <p>
      上方显示的强度指示器根据你密码的长度和所使用的字符池大小来估算熵。以下是每个级别的含义:
    </p>
    <ul>
      <li>
        <strong>极弱(&lt;40 位):</strong>几秒到几分钟即可破解。切勿用于任何重要账户。
      </li>
      <li>
        <strong>较弱(40–60 位):</strong>用消费级硬件数小时到数天可破解。请增加长度。
      </li>
      <li>
        <strong>较强(60–80 位):</strong>需要数年才能破解。适合大多数个人账户。
      </li>
      <li>
        <strong>极强(&gt;80 位):</strong>实际上无法破解。用于邮箱、银行和密码管理器主密码。
      </li>
    </ul>

    <h2>该记在脑子里,还是用管理器?</h2>
    <p>
      对大多数人来说,密码管理器才是正确答案。你唯一需要记住的是解锁管理器的<strong>主密码</strong>——把它做成长口令(4-5 个随机单词),而不是一个短而复杂的字符串。其他所有密码都可以是这里生成的 20 位以上随机字符串,因为你永远不需要手动输入它们。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué hace fuerte a una contraseña?</h2>
    <p>
      La fuerza de una contraseña se reduce a una sola cosa: la <strong>entropía</strong> — lo impredecible que es
      para un atacante. Cuanta más entropía (medida en bits), más tiempo tarda en romperse. Una contraseña aleatoria
      de 16 caracteres con mayúsculas, minúsculas, números y símbolos tiene aproximadamente 100 bits de entropía, lo
      que tardaría miles de millones de años en fuerza bruta con hardware moderno.
    </p>

    <h2>Cómo crear una contraseña fuerte</h2>
    <p>Sigue estos principios y tus cuentas serán mucho más difíciles de comprometer:</p>
    <ol>
      <li>
        <strong>Hazla larga.</strong> La longitud vence a la complejidad. Una contraseña de 20 caracteres con palabras
        aleatorias es más fuerte que una corta y embrollada. Apunta a al menos 12 caracteres; 16+ es ideal.
      </li>
      <li>
        <strong>Mezcla tipos de caracteres.</strong> Combina mayúsculas, minúsculas, números y símbolos. Mezclando
        los cuatro tipos, el conjunto pasa de 26 (solo minúsculas) a unos 95 caracteres — cada carácter adicional
        añade entonces ~6,6 bits de entropía.
      </li>
      <li>
        <strong>Evita lo predecible.</strong> Nunca uses nombres, cumpleaños, «password123», patrones de teclado
        (qwerty) ni nada que aparezca en un diccionario. Los atacantes lo prueban primero.
      </li>
      <li>
        <strong>Usa una contraseña única para cada cuenta.</strong> Si un servicio sufre una brecha, los atacantes
        probarán la misma contraseña en tu correo, banca y cuentas sociales.
      </li>
      <li>
        <strong>Guárdalas en un gestor de contraseñas.</strong> Memorizar decenas de contraseñas fuertes es imposible.
        Usa un gestor reputado (Bitwarden, 1Password, KeePass) para almacenarlas cifradas.
      </li>
    </ol>

    <h2>¿Qué tan seguro es este generador?</h2>
    <p>
      Esta herramienta usa la <code>Web Crypto API</code> (<code>crypto.getRandomValues</code>), que obtiene
      aleatoriedad del generador de números criptográficamente seguro de tu sistema operativo. Es el mismo estándar
      que usan los bancos y el software de seguridad. Es drásticamente más seguro que <code>Math.random()</code>, que
      es predecible y no seguro para contraseñas.
    </p>
    <p>
      Mejor aún: la contraseña se genera por completo en tu navegador y nunca se transmite a ningún sitio. No hay
      log del servidor, ni base de datos, ni rastreo. Una vez que la copias, vive solo en tu portapapeles.
    </p>

    <h2>Entender las puntuaciones de fuerza</h2>
    <p>
      El medidor de fuerza mostrado arriba estima la entropía a partir de la longitud de tu contraseña y del tamaño
      del conjunto de caracteres utilizado. Esto es lo que significa cada nivel:
    </p>
    <ul>
      <li>
        <strong>Muy débil (&lt;40 bits):</strong> se rompe en segundos o minutos. Nunca la uses para algo importante.
      </li>
      <li>
        <strong>Débil (40–60 bits):</strong> se rompe en horas o días con hardware de consumo. Aumenta la longitud.
      </li>
      <li>
        <strong>Fuerte (60–80 bits):</strong> tardaría años en romperse. Adecuada para la mayoría de cuentas personales.
      </li>
      <li>
        <strong>Muy fuerte (&gt;80 bits):</strong> prácticamente irrompible. Úsala para correo, banca y la contraseña
        maestra del gestor.
      </li>
    </ul>

    <h2>¿Debo memorizar o usar un gestor?</h2>
    <p>
      Para la mayoría de las personas, un gestor de contraseñas es la respuesta correcta. La única contraseña que
      necesitas memorizar es la <strong>contraseña maestra</strong> que desbloquea tu gestor — haz que sea una frase
      larga (4-5 palabras aleatorias) en vez de una cadena corta y compleja. Todas las demás pueden ser cadenas
      aleatorias de 20+ caracteres generadas aquí, ya que nunca tendrás que escribirlas.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was macht ein Passwort stark?</h2>
    <p>
      Passwortstärke kommt auf eins hinaus: <strong>Entropie</strong> — wie unvorhersehbar das Passwort für einen
      Angreifer ist. Je mehr Entropie (gemessen in Bit), desto länger dauert das Knacken. Ein zufälliges 16-stelliges
      Passwort aus Groß-, Kleinbuchstaben, Zahlen und Symbolen hat rund 100 Bit Entropie und würde auf moderner
      Hardware Milliarden Jahre für eine Brute-Force-Attacke brauchen.
    </p>

    <h2>Wie du ein starkes Passwort erstellst</h2>
    <p>Halt dich an diese Grundsätze und deine Konten sind deutlich schwerer zu kompromittieren:</p>
    <ol>
      <li>
        <strong>Geh in die Länge.</strong> Länge schlägt Komplexität. Ein 20-stelliges Passwort aus Zufallswörtern ist
        stärker als ein kurzes, wirres. Ziel auf mindestens 12 Zeichen; 16+ ist ideal.
      </li>
      <li>
        <strong>Mische Zeichentypen.</strong> Kombiniere Groß-, Kleinbuchstaben, Zahlen und Symbole. Mischst du alle
        vier Typen, wächst der Pool von 26 (nur Kleinbuchstaben) auf etwa 95 Zeichen — jedes zusätzliche Zeichen
        bringt dann ~6,6 Bit Entropie.
      </li>
      <li>
        <strong>Vermeide das Vorhersehbare.</strong> Nutze nie Namen, Geburtstage, „password123", Tastaturmuster
        (qwerty) oder irgendetwas aus dem Wörterbuch. Angreifer probieren das zuerst.
      </li>
      <li>
        <strong>Nutze für jedes Konto ein einzigartiges Passwort.</strong> Wird ein Dienst kompromittiert, probieren
        Angreifer dasselbe Passwort bei E-Mail, Banking und Social-Media-Konten.
      </li>
      <li>
        <strong>Speichere sie in einem Passwortmanager.</strong> Sich dutzende starke Passwörter zu merken ist
        unmöglich. Nutze einen seriösen Manager (Bitwarden, 1Password, KeePass), um sie verschlüsselt zu speichern.
      </li>
    </ol>

    <h2>Wie sicher ist dieser Generator?</h2>
    <p>
      Dieses Werkzeug nutzt die <code>Web Crypto API</code> (<code>crypto.getRandomValues</code>), die Zufälligkeit
      aus dem kryptografisch sicheren Zufallszahlengenerator deines Betriebssystems zieht. Das ist derselbe Standard,
      den Banken und Security-Software verwenden. Er ist dramatisch sicherer als <code>Math.random()</code>, das
      vorhersagbar und für Passwörter ungeeignet ist.
    </p>
    <p>
      Noch besser: Das Passwort wird vollständig in deinem Browser erzeugt und nirgendwohin übertragen. Es gibt kein
      Server-Log, keine Datenbank, kein Tracking. Sobald du es kopierst, existiert es nur in deiner Zwischenablage.
    </p>

    <h2>Die Stärkebewertungen verstehen</h2>
    <p>
      Die oben angezeigte Stärkeanzeige schätzt die Entropie anhand der Länge deines Passworts und der Größe des
      genutzten Zeichenpools. Das bedeuten die einzelnen Stufen:
    </p>
    <ul>
      <li>
        <strong>Sehr schwach (&lt;40 Bit):</strong> in Sekunden bis Minuten knackbar. Niemals für etwas Wichtiges verwenden.
      </li>
      <li>
        <strong>Schwach (40–60 Bit):</strong> in Stunden bis Tagen mit Consumer-Hardware knackbar. Erhöhe die Länge.
      </li>
      <li>
        <strong>Stark (60–80 Bit):</strong> würde Jahre zum Knacken brauchen. Geeignet für die meisten persönlichen Konten.
      </li>
      <li>
        <strong>Sehr stark (&gt;80 Bit):</strong> praktisch unknackbar. Für E-Mail, Banking und das Master-Passwort des Passwortmanagers.
      </li>
    </ul>

    <h2>Soll ich mir Passwörter merken oder einen Manager nutzen?</h2>
    <p>
      Für die meisten Menschen ist ein Passwortmanager die richtige Antwort. Das einzige Passwort, das du dir merken
      musst, ist das <strong>Master-Passwort</strong>, das deinen Manager entsperrt — mach es zu einer langen Passphrase
      (4-5 zufällige Wörter) statt zu einer kurzen, komplexen Zeichenkette. Jedes andere Passwort kann eine hier
      erzeugte Zufallszeichenkette mit 20+ Zeichen sein, da du sie nie eintippen musst.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PasswordGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
