'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Password Strength Checker 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool analyzes your password&apos;s strength in real time and shows the estimated
      entropy, a strength rating, and a checklist of what would make it stronger. Everything
      runs in your browser — your password is never transmitted or stored.
    </p>

    <div>
      <h2>How Strength Is Measured</h2>
      <p>
        Strength is based on <strong>entropy</strong> — the number of possible combinations
        an attacker would need to try. Longer passwords with more character types have higher
        entropy. A 12-character password using all four types (upper, lower, numbers,
        symbols) has about 78 bits of entropy, which is effectively uncrackable.
      </p>
    </div>

    <div>
      <h2>Strength Levels</h2>
      <ul>
        <li><strong>Very Weak (&lt;40 bits):</strong> Crackable in seconds. Never use.</li>
        <li><strong>Weak (40-60 bits):</strong> Hours to days to crack.</li>
        <li><strong>Strong (60-80 bits):</strong> Years to crack. Good for most accounts.</li>
        <li><strong>Very Strong (&gt;80 bits):</strong> Uncrackable. Use for email, banking, password managers.</li>
      </ul>
    </div>

    <div>
      <h2>Why Length Matters Most</h2>
      <p>
        Adding length increases entropy exponentially, while adding character types increases
        it linearly. A 16-character lowercase password (75 bits) is stronger than an 8-character
        password using all four types (52 bits). When in doubt, go longer.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具实时分析你的密码强度,显示估算的熵值、强度评级,以及一份「如何让密码更强」的检查清单。所有运算都在你的浏览器中完成——你的密码绝不会被传输或存储。
    </p>

    <div>
      <h2>强度是如何衡量的</h2>
      <p>
        强度取决于<strong>熵</strong>——也就是攻击者需要尝试多少种可能组合。密码越长、使用的字符类型越多,熵就越高。一个 12 位、同时包含大小写字母、数字和符号的密码大约有 78 位熵,实际上无法被破解。
      </p>
    </div>

    <div>
      <h2>强度等级</h2>
      <ul>
        <li><strong>极弱(&lt;40 位):</strong>几秒即可破解,切勿使用。</li>
        <li><strong>较弱(40-60 位):</strong>数小时到数天可破解。</li>
        <li><strong>较强(60-80 位):</strong>需要数年才能破解,适合大多数账户。</li>
        <li><strong>极强(&gt;80 位):</strong>无法破解,用于邮箱、银行、密码管理器等关键账户。</li>
      </ul>
    </div>

    <div>
      <h2>为什么长度最重要</h2>
      <p>
        增加长度会让熵呈指数级增长,而增加字符类型只是线性增长。一个 16 位的全小写字母密码(75 位熵)比一个 8 位、包含全部四类字符的密码(52 位熵)更强。拿不准时,优先加长。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta analiza la fuerza de tu contraseña en tiempo real y muestra la entropía
      estimada, una valoración de fuerza y una lista de comprobación para hacerla más robusta.
      Todo se ejecuta en tu navegador — tu contraseña nunca se transmite ni se almacena.
    </p>

    <div>
      <h2>Cómo se mide la fuerza</h2>
      <p>
        La fuerza se basa en la <strong>entropía</strong> — el número de combinaciones posibles
        que un atacante tendría que probar. Las contraseñas más largas y con más tipos de caracteres
        tienen mayor entropía. Una contraseña de 12 caracteres que usa los cuatro tipos (mayúsculas,
        minúsculas, números, símbolos) tiene unos 78 bits de entropía, lo que en la práctica es
        irrompible.
      </p>
    </div>

    <div>
      <h2>Niveles de fuerza</h2>
      <ul>
        <li><strong>Muy débil (&lt;40 bits):</strong> se rompe en segundos. No la uses nunca.</li>
        <li><strong>Débil (40-60 bits):</strong> de horas a días para romperla.</li>
        <li><strong>Fuerte (60-80 bits):</strong> años para romperla. Buena para la mayoría de cuentas.</li>
        <li><strong>Muy fuerte (&gt;80 bits):</strong> irrompible. Úsala para correo, banca y gestores de contraseñas.</li>
      </ul>
    </div>

    <div>
      <h2>Por qué la longitud es lo más importante</h2>
      <p>
        Añadir longitud aumenta la entropía de forma exponencial, mientras que añadir tipos de
        caracteres la aumenta de forma lineal. Una contraseña de 16 caracteres solo en minúsculas
        (75 bits) es más fuerte que una de 8 caracteres con los cuatro tipos (52 bits). Ante la duda, hazla más larga.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug analysiert die Stärke deines Passworts in Echtzeit und zeigt die geschätzte
      Entropie, eine Stärkebewertung sowie eine Checkliste, wie du es sicherer machst. Alles läuft
      in deinem Browser — dein Passwort wird weder übertragen noch gespeichert.
    </p>

    <div>
      <h2>Wie die Stärke gemessen wird</h2>
      <p>
        Die Stärke basiert auf <strong>Entropie</strong> — der Anzahl möglicher Kombinationen, die
        ein Angreifer durchprobieren müsste. Längere Passwörter mit mehr Zeichentypen haben eine
        höhere Entropie. Ein 12-stelliges Passwort mit allen vier Typen (Groß-, Kleinschreibung,
        Zahlen, Symbole) hat etwa 78 Bit Entropie und ist praktisch unknackbar.
      </p>
    </div>

    <div>
      <h2>Stärkestufen</h2>
      <ul>
        <li><strong>Sehr schwach (&lt;40 Bit):</strong> in Sekunden knackbar. Niemals verwenden.</li>
        <li><strong>Schwach (40-60 Bit):</strong> Stunden bis Tage zum Knacken.</li>
        <li><strong>Stark (60-80 Bit):</strong> Jahre zum Knacken. Gut für die meisten Konten.</li>
        <li><strong>Sehr stark (&gt;80 Bit):</strong> unknackbar. Für E-Mail, Banking und Passwortmanager.</li>
      </ul>
    </div>

    <div>
      <h2>Warum die Länge am wichtigsten ist</h2>
      <p>
        Mehr Länge erhöht die Entropie exponentiell, während mehr Zeichentypen sie nur linear
        steigern. Ein 16-stelliges Passwort nur aus Kleinbuchstaben (75 Bit) ist stärker als ein
        8-stelliges Passwort mit allen vier Typen (52 Bit). Im Zweifel lieber länger.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PasswordStrengthCheckerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
