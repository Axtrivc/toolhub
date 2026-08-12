'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Chmod Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Linux file permissions decide who can read, write, or execute every file — and <code>chmod</code> is how you
      change them. This calculator turns the abstract octal and symbolic notations into a clickable grid: tick the
      boxes and instantly see the octal value (<code>755</code>), the symbolic form (<code>rwxr-xr-x</code>), and a
      ready-to-paste <code>chmod</code> command. It also works in reverse — paste <code>644</code> or{' '}
      <code>rwxr--r--</code> and the grid updates. Everything runs locally in your browser.
    </p>

    <div>
      <h2>Reading octal permissions</h2>
      <p>
        Each octal digit is the sum of <strong>read = 4, write = 2, execute = 1</strong>, and the three digits
        cover Owner, Group, and Others in that order. So <code>755</code> means the owner gets 4+2+1
        (everything), while group and others get 4+1 (read + execute) — the standard for scripts and web
        directories. <code>644</code> (owner read/write, everyone else read-only) is the default for regular
        files, and <code>600</code> locks a file to its owner — the required mode for SSH private keys.
      </p>
    </div>

    <div>
      <h2>The special bits: setuid, setgid, sticky</h2>
      <p>
        A fourth, leading octal digit encodes three special flags. <strong>setuid</strong> (4) makes an
        executable run with the file owner&apos;s privileges — that is how <code>passwd</code> edits{' '}
        <code>/etc/shadow</code>. <strong>setgid</strong> (2) does the same for the group, and on a directory it
        forces new files to inherit the directory&apos;s group. The <strong>sticky bit</strong> (1) on a
        directory lets only a file&apos;s owner delete it — essential for shared folders like{' '}
        <code>/tmp</code> (<code>1777</code>). In symbolic output they overlay the execute slot as{' '}
        <code>s</code>/<code>S</code> and <code>t</code>/<code>T</code>.
      </p>
    </div>

    <div>
      <h2>Common pitfalls to avoid</h2>
      <p>
        Resist <code>chmod 777</code>: world-writable files are a classic security hole, and the real fix is
        usually correcting ownership with <code>chown</code>. Remember that <strong>directories need the execute
        bit</strong> — without it you can list names (<code>r</code>) but cannot enter or access anything inside.
        Also note <code>chmod</code> is not recursive unless you pass <code>-R</code>, and recursive apply-every
        mode to a tree mixes files and folders — use{' '}
        <code>find . -type d -exec chmod 755 {} +</code> and a matching <code>-type f</code> pass instead.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这个工具是什么?</h2>
    <p>
      Linux 文件权限决定了谁能读取、写入或执行每一个文件,而 <code>chmod</code> 就是用来修改它的命令。本计算器把抽象的八进制与符号表示法变成一个可点击的网格:勾选复选框,即可立即看到八进制值(<code>755</code>)、符号形式(<code>rwxr-xr-x</code>)以及一条可直接粘贴的 <code>chmod</code> 命令。它也支持反向操作——粘贴 <code>644</code> 或 <code>rwxr--r--</code>,网格会自动更新。所有运算都在你的浏览器本地完成。
    </p>

    <div>
      <h2>读懂八进制权限</h2>
      <p>
        每个八进制位都是 <strong>读 = 4、写 = 2、执行 = 1</strong> 的加和,三个位依次对应所有者、组和其他人。因此 <code>755</code> 表示所有者拥有 4+2+1(全部权限),而组和其他人拥有 4+1(读 + 执行)——这是脚本和 Web 目录的标准权限。<code>644</code>(所有者可读写,其他人只读)是普通文件的默认权限,而 <code>600</code> 将文件锁定为仅所有者可访问——这是 SSH 私钥要求的权限模式。
      </p>
    </div>

    <div>
      <h2>特殊位:setuid、setgid、sticky</h2>
      <p>
        第四个前导八进制位编码了三个特殊标志。<strong>setuid</strong>(4)让可执行文件以文件所有者的权限运行——<code>passwd</code> 正是借此编辑 <code>/etc/shadow</code>。<strong>setgid</strong>(2)对组起到同样作用,当作用于目录时,它会强制新建文件继承该目录的组。<strong>sticky 位</strong>(1)作用于目录时,只允许文件所有者删除该文件——这对 <code>/tmp</code>(<code>1777</code>)等共享文件夹至关重要。在符号表示中,它们叠加在执行位上,显示为 <code>s</code>/<code>S</code> 和 <code>t</code>/<code>T</code>。
      </p>
    </div>

    <div>
      <h2>需要避免的常见陷阱</h2>
      <p>
        慎用 <code>chmod 777</code>:全局可写的文件是典型的安全漏洞,而真正的解决办法通常是用 <code>chown</code> 纠正属主。请记住<strong>目录需要执行位</strong>——没有它,你能列出名称(<code>r</code>),却无法进入或访问其中的任何内容。另外,除非传入 <code>-R</code>,否则 <code>chmod</code> 不会递归执行;而对整个目录树应用统一的权限模式会混淆文件与文件夹——请改用 <code>find . -type d -exec chmod 755 {} +</code>,并配合一次对应的 <code>-type f</code> 处理。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Los permisos de archivo de Linux deciden quién puede leer, escribir o ejecutar cada archivo, y <code>chmod</code> es la forma de cambiarlos. Esta calculadora convierte las abstractas notaciones octal y simbólica en una cuadrícula clicable: marca las casillas y verás al instante el valor octal (<code>755</code>), la forma simbólica (<code>rwxr-xr-x</code>) y un comando <code>chmod</code> listo para pegar. También funciona a la inversa — pega <code>644</code> o <code>rwxr--r--</code> y la cuadrícula se actualiza. Todo se ejecuta localmente en tu navegador.
    </p>

    <div>
      <h2>Leer los permisos en octal</h2>
      <p>
        Cada dígito octal es la suma de <strong>lectura = 4, escritura = 2, ejecución = 1</strong>, y los tres dígitos cubren, en ese orden, propietario, grupo y otros. Así, <code>755</code> significa que el propietario obtiene 4+2+1 (todo), mientras que el grupo y los demás obtienen 4+1 (lectura + ejecución) — el estándar para scripts y directorios web. <code>644</code> (propietario con lectura/escritura, todos los demás solo lectura) es el valor predeterminado para archivos regulares, y <code>600</code> limita un archivo a su propietario — el modo requerido para las claves privadas SSH.
      </p>
    </div>

    <div>
      <h2>Los bits especiales: setuid, setgid, sticky</h2>
      <p>
        Un cuarto dígito octal inicial codifica tres indicadores especiales. <strong>setuid</strong> (4) hace que un ejecutable se ejecute con los privilegios del propietario del archivo — así es como <code>passwd</code> edita <code>/etc/shadow</code>. <strong>setgid</strong> (2) hace lo mismo para el grupo y, en un directorio, obliga a los archivos nuevos a heredar el grupo del directorio. El <strong>bit sticky</strong> (1) en un directorio permite que solo el propietario de un archivo lo elimine — esencial para carpetas compartidas como <code>/tmp</code> (<code>1777</code>). En la salida simbólica se superponen a la posición de ejecución como <code>s</code>/<code>S</code> y <code>t</code>/<code>T</code>.
      </p>
    </div>

    <div>
      <h2>Errores comunes que conviene evitar</h2>
      <p>
        Resiste <code>chmod 777</code>: los archivos escribibles por todos son un agujero de seguridad clásico, y la solución real suele ser corregir la propiedad con <code>chown</code>. Recuerda que <strong>los directorios necesitan el bit de ejecución</strong> — sin él puedes listar los nombres (<code>r</code>), pero no entrar ni acceder a nada de su interior. Ten en cuenta también que <code>chmod</code> no es recursivo a menos que pases <code>-R</code>, y aplicar recursivamente un único modo a un árbol mezcla archivos y carpetas — usa <code>find . -type d -exec chmod 755 {} +</code> y una pasada <code>-type f</code> equivalente en su lugar.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Tool?</h2>
    <p>
      Linux-Dateirechte legen fest, wer jede Datei lesen, beschreiben oder ausführen darf, und <code>chmod</code> ist der Befehl, um sie zu ändern. Dieser Rechner verwandelt die abstrakte Oktal- und Symbolnotation in ein klickbares Raster: Setze die Häkchen und sieh sofort den Oktalwert (<code>755</code>), die Symbolform (<code>rwxr-xr-x</code>) und einen fertigen <code>chmod</code>-Befehl zum Einfügen. Es funktioniert auch umgekehrt — füge <code>644</code> oder <code>rwxr--r--</code> ein und das Raster aktualisiert sich. Alles läuft lokal in deinem Browser.
    </p>

    <div>
      <h2>Oktale Berechtigungen lesen</h2>
      <p>
        Jede Oktalziffer ist die Summe aus <strong>Lesen = 4, Schreiben = 2, Ausführen = 1</strong>, und die drei Ziffern decken in dieser Reihenfolge Eigentümer, Gruppe und Andere ab. <code>755</code> bedeutet also, dass der Eigentümer 4+2+1 (alles) erhält, während Gruppe und Andere 4+1 (Lesen + Ausführen) bekommen — der Standard für Skripte und Webverzeichnisse. <code>644</code> (Eigentümer liest/schreibt, alle anderen nur lesend) ist die Voreinstellung für reguläre Dateien, und <code>600</code> sperrt eine Datei auf ihren Eigentümer — der erforderliche Modus für private SSH-Schlüssel.
      </p>
    </div>

    <div>
      <h2>Die Spezialbits: setuid, setgid, sticky</h2>
      <p>
        Eine vierte, führende Oktalziffer codiert drei spezielle Flags. <strong>setuid</strong> (4) lässt ein Programm mit den Rechten des Dateieigentümers laufen — so bearbeitet <code>passwd</code> die Datei <code>/etc/shadow</code>. <strong>setgid</strong> (2) macht das Gleiche für die Gruppe und erzwingt bei einem Verzeichnis, dass neue Dateien die Gruppe des Verzeichnisses erben. Das <strong>Sticky-Bit</strong> (1) auf einem Verzeichnis erlaubt nur dem Eigentümer einer Datei, diese zu löschen — unerlässlich für gemeinsame Ordner wie <code>/tmp</code> (<code>1777</code>). In der Symbolausgabe überlagern sie das Ausführungs-Slot als <code>s</code>/<code>S</code> und <code>t</code>/<code>T</code>.
      </p>
    </div>

    <div>
      <h2>Häufige Fallstricke, die du vermeiden solltest</h2>
      <p>
        Widerstehe <code>chmod 777</code>: weltweit beschreibbare Dateien sind ein klassisches Sicherheitsloch, und die echte Lösung besteht meist darin, den Eigentümer mit <code>chown</code> zu korrigieren. Denk daran, dass <strong>Verzeichnisse das Ausführungsbit brauchen</strong> — ohne ihn kannst du zwar Namen auflisten (<code>r</code>), aber nicht eintreten oder auf den Inhalt zugreifen. Beachte außerdem, dass <code>chmod</code> nur mit <code>-R</code> rekursiv ist, und ein rekursiver Modus für den gesamten Baum Dateien und Ordner vermischt — verwende stattdessen <code>find . -type d -exec chmod 755 {} +</code> und einen passenden <code>-type f</code>-Durchlauf.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ChmodCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
