'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SSH Key Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool generates a complete <strong>SSH key pair</strong> — a public key in the{' '}
      <code>authorized_keys</code> format you paste onto servers, and a matching private key in PKCS#8 PEM — using
      only your browser&apos;s built-in <strong>Web Crypto API</strong>. It is handy for spinning up a key for a new
      server, CI job, or Git hosting account when you are away from a terminal. Everything runs 100% locally: the
      keys are created in your browser tab and are never sent anywhere.
    </p>

    <div>
      <h2>How the OpenSSH public key format works</h2>
      <p>
        An OpenSSH public key line is just <strong>base64 of a small binary blob</strong>, plus an optional
        comment. The blob is a sequence of length-prefixed fields: for Ed25519 it is the string{' '}
        <code>ssh-ed25519</code> followed by the raw 32-byte public key; for RSA it is <code>ssh-rsa</code>{' '}
        followed by the exponent <code>e</code> and modulus <code>n</code>, each encoded as an{' '}
        <em>mpint</em> (a big-endian integer padded with a <code>0x00</code> byte when its top bit would
        otherwise look negative). The <strong>SHA256 fingerprint</strong> shown after generation is the same one{' '}
        <code>ssh-keygen -l</code> would print, so you can cross-check the key on a server later.
      </p>
    </div>

    <div>
      <h2>Ed25519 or RSA?</h2>
      <p>
        <strong>Pick Ed25519 unless you have a reason not to.</strong> It produces short keys (~68 characters in
        the public line), is fast to generate and verify, and is considered the modern default — GitHub, GitLab
        and every current OpenSSH release accept it. <strong>RSA</strong> is still universally supported and is
        the safer choice for very old servers, appliances, or tooling that predates Ed25519; use{' '}
        <code>4096</code> bits there for a comfortable security margin, <code>2048</code> if the target system
        rejects larger keys. One caveat: Ed25519 in the Web Crypto API needs a recent browser — this tool detects
        that and tells you if yours is too old.
      </p>
    </div>

    <div>
      <h2>Keeping the private key safe</h2>
      <p>
        The private key is the <em>only</em> half that must stay secret, and this page never transmits it — but
        what you do next matters. Save it as <code>~/.ssh/id_ed25519</code> (or <code>id_rsa</code>) and lock it
        down immediately with <code>chmod 600</code>, or ssh will refuse to use it. The exported format is{' '}
        <strong>PKCS#8 PEM</strong>, which modern OpenSSH reads directly; to convert it to the classic OpenSSH
        private-key format, run <code>ssh-keygen -p -m PEM -f id_ed25519</code> (press Enter when asked for a
        passphrase, or set one). Finally, treat a key made in a browser tab like any credential: store it in
        your SSH agent or a password manager, and <strong>regenerate a fresh pair on your own machine</strong>{' '}
        for high-value production systems.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这个工具是什么?</h2>
    <p>
      本工具生成一对完整的 <strong>SSH 密钥</strong>——一把可粘贴到服务器上的 <code>authorized_keys</code> 格式公钥,以及匹配的 PKCS#8 PEM 私钥——全部仅使用浏览器内置的 <strong>Web Crypto API</strong> 完成。当你不在终端旁,却需要为新服务器、CI 任务或 Git 托管账号快速生成密钥时,它非常实用。所有操作 100% 在本地运行:密钥在你的浏览器标签页内创建,绝不会发送到任何地方。
    </p>

    <div>
      <h2>OpenSSH 公钥格式是如何工作的</h2>
      <p>
        一行 OpenSSH 公钥本质上就是<strong>一小段二进制数据的 base64 编码</strong>,外加可选的注释。这段数据由若干带长度前缀的字段组成:对于 Ed25519,它是字符串 <code>ssh-ed25519</code> 加上原始的 32 字节公钥;对于 RSA,它是 <code>ssh-rsa</code> 后跟指数 <code>e</code> 和模数 <code>n</code>,每个都以 <em>mpint</em> 格式编码(一种大端整数,当其最高位会被误判为负时补一个 <code>0x00</code> 字节)。生成后显示的 <strong>SHA256 指纹</strong>与 <code>ssh-keygen -l</code> 打印的结果一致,方便你之后在服务器上核对密钥。
      </p>
    </div>

    <div>
      <h2>选 Ed25519 还是 RSA?</h2>
      <p>
        <strong>除非有特殊原因,否则请选 Ed25519。</strong>它生成的密钥很短(公钥行约 68 个字符),生成和验证速度都快,被视为现代默认选择——GitHub、GitLab 以及当前所有 OpenSSH 版本都支持它。<strong>RSA</strong> 仍被普遍支持,对于非常老旧的服务器、设备或早于 Ed25519 的工具链是更稳妥的选择;在这些场景下使用 <code>4096</code> 位以获得充足的安全余量,若目标系统拒绝大密钥则用 <code>2048</code>。需要注意:Web Crypto API 中的 Ed25519 需要较新的浏览器——本工具会自动检测,并在你的浏览器过旧时提示你。
      </p>
    </div>

    <div>
      <h2>保护好私钥</h2>
      <p>
        私钥是<em>唯一</em>必须保密的一半,本页面也绝不传输它——但你接下来的操作同样重要。请将它保存为 <code>~/.ssh/id_ed25519</code>(或 <code>id_rsa</code>),并立即用 <code>chmod 600</code> 锁定,否则 ssh 会拒绝使用。导出格式为 <strong>PKCS#8 PEM</strong>,现代 OpenSSH 可直接读取;若要转换为经典的 OpenSSH 私钥格式,请运行 <code>ssh-keygen -p -m PEM -f id_ed25519</code>(提示输入口令时按回车跳过,或设置一个)。最后,请把在浏览器标签页中生成的密钥当作普通凭据对待:存入 SSH agent 或密码管理器,并为高价值的生产系统<strong>在你自己的机器上重新生成一对全新密钥</strong>。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta genera un <strong>par de claves SSH</strong> completo — una clave pública en el formato <code>authorized_keys</code> que pegas en los servidores y una clave privada coincidente en PKCS#8 PEM — usando únicamente la <strong>Web Crypto API</strong> integrada de tu navegador. Es útil para crear una clave para un servidor nuevo, un job de CI o una cuenta de hosting de Git cuando no tienes un terminal a mano. Todo se ejecuta 100 % en local: las claves se crean en tu pestaña del navegador y nunca se envían a ningún sitio.
    </p>

    <div>
      <h2>Cómo funciona el formato de clave pública OpenSSH</h2>
      <p>
        Una línea de clave pública OpenSSH es simplemente <strong>base64 de un pequeño blob binario</strong>, más un comentario opcional. El blob es una secuencia de campos con prefijo de longitud: para Ed25519 es la cadena <code>ssh-ed25519</code> seguida de la clave pública de 32 bytes en bruto; para RSA es <code>ssh-rsa</code> seguida del exponente <code>e</code> y el módulo <code>n</code>, cada uno codificado como <em>mpint</em> (un entero big-endian rellenado con un byte <code>0x00</code> cuando su bit superior parecería negativo de otro modo). La <strong>huella SHA256</strong> que se muestra tras la generación es la misma que imprimiría <code>ssh-keygen -l</code>, para que puedas verificar la clave en un servidor más tarde.
      </p>
    </div>

    <div>
      <h2>¿Ed25519 o RSA?</h2>
      <p>
        <strong>Elige Ed25519 salvo que tengas un motivo para no hacerlo.</strong> Produce claves cortas (~68 caracteres en la línea pública), es rápido de generar y verificar, y se considera el valor moderno por defecto — GitHub, GitLab y todas las versiones actuales de OpenSSH lo aceptan. <strong>RSA</strong> sigue siendo compatible universalmente y es la opción más segura para servidores muy antiguos, appliances o herramientas previas a Ed25519; usa <code>4096</code> bits ahí para un margen de seguridad cómodo, <code>2048</code> si el sistema de destino rechaza claves más grandes. Una advertencia: Ed25519 en la Web Crypto API necesita un navegador reciente — esta herramienta lo detecta y te avisa si el tuyo es demasiado antiguo.
      </p>
    </div>

    <div>
      <h2>Mantener la clave privada a salvo</h2>
      <p>
        La clave privada es la <em>única</em> mitad que debe permanecer secreta, y esta página nunca la transmite — pero lo que hagas después importa. Guárdala como <code>~/.ssh/id_ed25519</code> (o <code>id_rsa</code>) y bloquéala de inmediato con <code>chmod 600</code>, o ssh se negará a usarla. El formato exportado es <strong>PKCS#8 PEM</strong>, que OpenSSH moderno lee directamente; para convertirlo al clásico formato de clave privada OpenSSH, ejecuta <code>ssh-keygen -p -m PEM -f id_ed25519</code> (pulsa Enter cuando te pida una frase de paso, o establece una). Por último, trata una clave creada en una pestaña del navegador como cualquier credencial: guárdala en tu agente SSH o en un gestor de contraseñas, y <strong>regenera un par nuevo en tu propia máquina</strong> para sistemas de producción de alto valor.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Tool?</h2>
    <p>
      Dieses Tool erzeugt ein vollständiges <strong>SSH-Schlüsselpaar</strong> — einen öffentlichen Schlüssel im <code>authorized_keys</code>-Format zum Einfügen auf Servern und einen passenden privaten Schlüssel in PKCS#8 PEM — ausschließlich über die eingebaute <strong>Web Crypto API</strong> deines Browsers. Es ist praktisch, um schnell einen Schlüssel für einen neuen Server, einen CI-Job oder einen Git-Hosting-Account zu erzeugen, wenn du gerade keinen Terminal zur Hand hast. Alles läuft zu 100 % lokal: Die Schlüssel werden in deinem Browser-Tab erzeugt und nirgendwohin gesendet.
    </p>

    <div>
      <h2>Wie das OpenSSH-Public-Key-Format funktioniert</h2>
      <p>
        Eine OpenSSH-Public-Key-Zeile ist einfach <strong>Base64 eines kleinen Binär-Blobs</strong> plus einem optionalen Kommentar. Der Blob ist eine Folge von längenpräfixierten Feldern: Bei Ed25519 ist es die Zeichenkette <code>ssh-ed25519</code> gefolgt vom rohen 32-Byte-öffentlichen Schlüssel; bei RSA ist es <code>ssh-rsa</code> gefolgt vom Exponenten <code>e</code> und dem Modul <code>n</code>, jeweils als <em>mpint</em> codiert (eine Big-Endien-Ganzzahl, die mit einem <code>0x00</code>-Byte aufgefüllt wird, wenn ihr oberstes Bit sonst negativ erschiene). Der nach der Erzeugung angezeigte <strong>SHA256-Fingerabdruck</strong> ist derselbe, den <code>ssh-keygen -l</code> ausgeben würde, damit du den Schlüssel später auf einem Server abgleichen kannst.
      </p>
    </div>

    <div>
      <h2>Ed25519 oder RSA?</h2>
      <p>
        <strong>Wähle Ed25519, es sei denn, du hast einen Grund, es nicht zu tun.</strong> Es erzeugt kurze Schlüssel (~68 Zeichen in der Public-Zeile), ist schnell zu erzeugen und zu prüfen und gilt als moderner Standard — GitHub, GitLab und jede aktuelle OpenSSH-Version akzeptieren es. <strong>RSA</strong> wird weiterhin universell unterstützt und ist die sicherere Wahl für sehr alte Server, Appliances oder Werkzeuge, die Ed25519 noch nicht kennen; verwende dort <code>4096</code> Bit für einen komfortablen Sicherheitsabstand, <code>2048</code>, falls das Zielsystem größere Schlüssel ablehnt. Ein Vorbehalt: Ed25519 in der Web Crypto API benötigt einen aktuellen Browser — dieses Tool erkennt das und sagt dir, ob deiner zu alt ist.
      </p>
    </div>

    <div>
      <h2>Den privaten Schlüssel sicher aufbewahren</h2>
      <p>
        Der private Schlüssel ist die <em>einzige</em> Hälfte, die geheim bleiben muss, und diese Seite überträgt ihn nie — aber was du danach tust, ist entscheidend. Speichere ihn als <code>~/.ssh/id_ed25519</code> (oder <code>id_rsa</code>) und sperre ihn sofort mit <code>chmod 600</code>, sonst verweigert ssh die Nutzung. Das exportierte Format ist <strong>PKCS#8 PEM</strong>, das moderne OpenSSH direkt liest; um es ins klassische OpenSSH-Private-Key-Format umzuwandeln, führe <code>ssh-keygen -p -m PEM -f id_ed25519</code> aus (drücke Enter, wenn nach einer Passphrase gefragt wird, oder lege eine fest). Behandle einen in einem Browser-Tab erzeugten Schlüssel schließlich wie jede andere Zugangsdaten: Speichere ihn in deinem SSH-Agent oder einem Passwort-Manager und <strong>erzeuge für wertvolle Produktionssysteme ein frisches Paar auf deiner eigenen Maschine</strong>.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SshKeyGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
