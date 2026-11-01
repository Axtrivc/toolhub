'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SSH Key Generator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool generates a complete <strong>SSH key pair</strong> — a public key in the{' '}
      <code>authorized_keys</code>{' '}
      format you paste onto servers, and a matching private key in PKCS#8 PEM — using
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
        <strong>PKCS#8 PEM</strong>, which modern OpenSSH reads directly; to convert it to the OpenSSH native
        private-key format (<code>BEGIN OPENSSH PRIVATE KEY</code>), run <code>ssh-keygen -p -f id_ed25519</code> (press Enter when asked for a
        passphrase, or set one). Finally, treat a key made in a browser tab like any credential: store it in
        your SSH agent or a password manager, and <strong>regenerate a fresh pair on your own machine</strong>{' '}
        for high-value production systems.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta genera un <strong>par de claves SSH</strong> completo — una clave pública en el formato <code>authorized_keys</code> que pegas en los servidores y una clave privada coincidente en PKCS#8 PEM — usando únicamente la <strong>Web Crypto API</strong> integrada de tu navegador. Es útil para crear una clave para un servidor nuevo, un trabajo de CI o una cuenta de hosting de Git cuando no tienes un terminal a mano. Todo se ejecuta 100 % en local: las claves se crean en tu pestaña del navegador y nunca se envían a ningún sitio.
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
        <strong>Elige Ed25519 salvo que tengas un motivo para no hacerlo.</strong> Produce claves cortas (~68 caracteres en la línea pública), es rápido de generar y verificar, y se considera la opción moderna por defecto — GitHub, GitLab y todas las versiones actuales de OpenSSH lo aceptan. <strong>RSA</strong> sigue siendo compatible universalmente y es la opción más segura para servidores muy antiguos, appliances o herramientas previas a Ed25519; usa <code>4096</code> bits ahí para un margen de seguridad cómodo, <code>2048</code> si el sistema de destino rechaza claves más grandes. Una advertencia: Ed25519 en la Web Crypto API necesita un navegador reciente — esta herramienta lo detecta y te avisa si el tuyo es demasiado antiguo.
      </p>
    </div>

    <div>
      <h2>Mantener la clave privada a salvo</h2>
      <p>
        La clave privada es la <em>única</em> mitad que debe permanecer secreta, y esta página nunca la transmite — pero lo que hagas después importa. Guárdala como <code>~/.ssh/id_ed25519</code> (o <code>id_rsa</code>) y bloquéala de inmediato con <code>chmod 600</code>, o ssh se negará a usarla. El formato exportado es <strong>PKCS#8 PEM</strong>, que OpenSSH moderno lee directamente; para convertirlo al formato nativo de OpenSSH (<code>BEGIN OPENSSH PRIVATE KEY</code>), ejecuta <code>ssh-keygen -p -f id_ed25519</code> (pulsa Enter cuando te pida una frase de paso, o establece una). Por último, trata una clave creada en una pestaña del navegador como cualquier otra credencial: guárdala en tu agente SSH o en un gestor de contraseñas, y <strong>regenera un par nuevo en tu propia máquina</strong> para sistemas de producción de alto valor.
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
        Eine OpenSSH-Public-Key-Zeile ist einfach <strong>Base64 eines kleinen Binär-Blobs</strong> plus einem optionalen Kommentar. Der Blob ist eine Folge von längenpräfixierten Feldern: Bei Ed25519 ist es die Zeichenkette <code>ssh-ed25519</code> gefolgt vom rohen öffentlichen Schlüssel (32 Byte); bei RSA ist es <code>ssh-rsa</code> gefolgt vom Exponenten <code>e</code> und dem Modul <code>n</code>, jeweils als <em>mpint</em> codiert (eine Big-Endian-Ganzzahl, die mit einem <code>0x00</code>-Byte aufgefüllt wird, wenn ihr oberstes Bit sonst negativ erschiene). Der nach der Erzeugung angezeigte <strong>SHA256-Fingerabdruck</strong> ist derselbe, den <code>ssh-keygen -l</code> ausgeben würde, damit du den Schlüssel später auf einem Server abgleichen kannst.
      </p>
    </div>

    <div>
      <h2>Ed25519 oder RSA?</h2>
      <p>
        <strong>Wähle Ed25519, es sei denn, du hast einen Grund, es nicht zu tun.</strong> Es erzeugt kurze Schlüssel (~68 Zeichen in der Public-Key-Zeile), ist schnell zu erzeugen und zu prüfen und gilt als moderner Standard — GitHub, GitLab und jede aktuelle OpenSSH-Version akzeptieren es. <strong>RSA</strong> wird weiterhin universell unterstützt und ist die sicherere Wahl für sehr alte Server, Appliances oder Werkzeuge, die Ed25519 noch nicht kennen; verwende dort <code>4096</code> Bit für einen komfortablen Sicherheitsabstand, <code>2048</code>, falls das Zielsystem größere Schlüssel ablehnt. Ein Vorbehalt: Ed25519 in der Web Crypto API benötigt einen aktuellen Browser — dieses Tool erkennt das und sagt dir, ob deiner zu alt ist.
      </p>
    </div>

    <div>
      <h2>Den privaten Schlüssel sicher aufbewahren</h2>
      <p>
        Der private Schlüssel ist die <em>einzige</em> Hälfte, die geheim bleiben muss, und diese Seite überträgt ihn nie — aber was du danach tust, ist entscheidend. Speichere ihn als <code>~/.ssh/id_ed25519</code> (oder <code>id_rsa</code>) und sperre ihn sofort mit <code>chmod 600</code>, sonst verweigert ssh die Nutzung. Das exportierte Format ist <strong>PKCS#8 PEM</strong>, das moderne OpenSSH direkt liest; um es ins native OpenSSH-Private-Key-Format (<code>BEGIN OPENSSH PRIVATE KEY</code>) umzuwandeln, führe <code>ssh-keygen -p -f id_ed25519</code> aus (drücke Enter, wenn nach einer Passphrase gefragt wird, oder lege eine fest). Behandle einen in einem Browser-Tab erzeugten Schlüssel schließlich wie alle anderen Zugangsdaten: Speichere ihn in deinem SSH-Agent oder einem Passwort-Manager und <strong>erzeuge für wertvolle Produktionssysteme ein frisches Paar auf deiner eigenen Maschine</strong>.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SshKeyGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
