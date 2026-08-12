'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool converts any text to <strong>lowercase</strong> — every capital letter becomes
      lowercase, while everything else stays the same. Fast, free, and private.
    </p>
    <div>
      <h2>When to Use Lowercase</h2>
      <ul>
        <li><strong>Email addresses</strong> — officially case-insensitive, but lowercase avoids confusion</li>
        <li><strong>URLs and slugs</strong> — convention is lowercase to avoid duplicate-content issues</li>
        <li><strong>Programming variables</strong> — most languages use camelCase or snake_case</li>
        <li><strong>Hashtags</strong> — #lowercase reads cleaner and avoids accessibility issues</li>
        <li><strong>Casual messaging</strong> — many people type in lowercase informally</li>
      </ul>
    </div>
    <div>
      <h2>Why URLs Should Be Lowercase</h2>
      <p>
        Web servers treat <code>/About</code> and <code>/about</code> as different URLs on many
        systems (including Linux). Mixing cases creates duplicate content that splits SEO ranking.
        Stick to lowercase for all URLs and slugs.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具可将任意文本转换为<strong>小写</strong> —— 每个大写字母都会变成小写,其余内容保持不变。快速、免费、私密。
    </p>
    <div>
      <h2>何时使用小写</h2>
      <ul>
        <li><strong>电子邮件地址</strong> —— 官方上不区分大小写,但使用小写可避免混淆</li>
        <li><strong>URL 和 slug</strong> —— 惯例是使用小写,以避免重复内容问题</li>
        <li><strong>编程变量</strong> —— 大多数语言使用 camelCase 或 snake_case</li>
        <li><strong>话题标签</strong> —— #lowercase 更清晰易读,并能避免无障碍问题</li>
        <li><strong>日常聊天</strong> —— 很多人非正式地用小写打字</li>
      </ul>
    </div>
    <div>
      <h2>为什么 URL 应该使用小写</h2>
      <p>
        Web 服务器在许多系统(包括 Linux)上会将 <code>/About</code> 和 <code>/about</code> 视为不同的 URL。混用大小写会产生重复内容,从而分散 SEO 排名。所有 URL 和 slug 都应坚持使用小写。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta convierte cualquier texto a <strong>minúsculas</strong> — cada letra
      mayúscula se convierte en minúscula, mientras que todo lo demás se mantiene igual. Rápido,
      gratis y privado.
    </p>
    <div>
      <h2>Cuándo usar minúsculas</h2>
      <ul>
        <li><strong>Direcciones de correo electrónico</strong> — oficialmente no distinguen mayúsculas, pero las minúsculas evitan confusiones</li>
        <li><strong>URL y slugs</strong> — la convención es usar minúsculas para evitar problemas de contenido duplicado</li>
        <li><strong>Variables de programación</strong> — la mayoría de los lenguajes usan camelCase o snake_case</li>
        <li><strong>Hashtags</strong> — #lowercase se lee más limpio y evita problemas de accesibilidad</li>
        <li><strong>Mensajería informal</strong> — mucha gente escribe en minúsculas de forma casual</li>
      </ul>
    </div>
    <div>
      <h2>Por qué las URL deberían ir en minúsculas</h2>
      <p>
        Los servidores web tratan <code>/About</code> y <code>/about</code> como URL diferentes en
        muchos sistemas (incluido Linux). Mezclar mayúsculas y minúsculas crea contenido duplicado
        que divide el ranking SEO. Usa minúsculas para todas las URL y slugs.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug wandelt jeden Text in <strong>Kleinbuchstaben</strong> um — jeder
      Großbuchstabe wird zu einem Kleinbuchstaben, alles andere bleibt gleich. Schnell, kostenlos
      und privat.
    </p>
    <div>
      <h2>Wann du Kleinbuchstaben einsetzt</h2>
      <ul>
        <li><strong>E-Mail-Adressen</strong> — offiziell unabhängig von Groß-/Kleinschreibung, aber Kleinbuchstaben vermeiden Verwirrung</li>
        <li><strong>URLs und Slugs</strong> — die Konvention sind Kleinbuchstaben, um Probleme mit doppeltem Content zu vermeiden</li>
        <li><strong>Variablen beim Programmieren</strong> — die meisten Sprachen verwenden camelCase oder snake_case</li>
        <li><strong>Hashtags</strong> — #lowercase liest sich sauberer und vermeidet Barrierefreiheitsprobleme</li>
        <li><strong>Lockere Nachrichten</strong> — viele Menschen tippen informell in Kleinbuchstaben</li>
      </ul>
    </div>
    <div>
      <h2>Warum URLs in Kleinbuchstaben sein sollten</h2>
      <p>
        Webserver behandeln <code>/About</code> und <code>/about</code> auf vielen Systemen
        (einschließlich Linux) als unterschiedliche URLs. Gemischte Groß-/Kleinschreibung erzeugt
        doppelten Content, der das SEO-Ranking aufteilt. Verwende durchgehend Kleinbuchstaben für
        alle URLs und Slugs.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function LowercaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
