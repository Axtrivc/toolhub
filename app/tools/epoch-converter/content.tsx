'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Epoch Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What is a Unix timestamp?</h2>
    <p>A Unix timestamp (also called epoch time or POSIX time) is the number of seconds elapsed since <strong>1970-01-01 00:00:00 UTC</strong> — the &quot;Unix epoch&quot;. It is the standard way computers store points in time because it needs no timezone and no calendar rules.</p>
    <h2>Seconds vs milliseconds</h2>
    <p>Classic Unix systems store seconds (10 digits in the current era). JavaScript, Java, and many APIs use milliseconds instead (13 digits). If a conversion lands in January 1970, you almost certainly pasted seconds where milliseconds were expected or vice versa.</p>
    <h2>Does Unix time handle leap seconds?</h2>
    <p>No. Every day counts as exactly 86,400 seconds. The handful of leap seconds added since 1970 are absorbed invisibly, so timestamps drift about 27 seconds ahead of astronomical time to date.</p>
    <h2>The 2038 problem</h2>
    <p>Systems storing the timestamp in a signed 32-bit integer overflow on <strong>2038-01-19</strong>. Modern 64-bit systems are unaffected, which is why embedded devices are the main concern.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是 Unix 时间戳?</h2>
    <p>Unix 时间戳(也叫 epoch time 或 POSIX time)是从 <strong>1970-01-01 00:00:00 UTC</strong>——「Unix 纪元」——起经过的秒数。它是计算机存储时间点的标准方式:不需要时区,也不需要日历规则。</p>
    <h2>秒还是毫秒</h2>
    <p>传统 Unix 系统存秒(当前时代为 10 位数)。JavaScript、Java 以及许多 API 则用毫秒(13 位数)。如果换算结果落在 1970 年 1 月,几乎可以肯定你把秒当毫秒粘贴了,或者反过来。</p>
    <h2>Unix 时间处理闰秒吗?</h2>
    <p>不处理。每一天都固定按 86,400 秒计算。1970 年以来加入的少量闰秒被无形吸收,因此时间戳目前比天文时间超前约 27 秒。</p>
    <h2>2038 年问题</h2>
    <p>用有符号 32 位整数存储时间戳的系统会在 <strong>2038-01-19</strong> 溢出。现代 64 位系统不受影响,所以嵌入式设备才是主要隐患。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es un timestamp de Unix?</h2>
    <p>Un timestamp de Unix (también llamado epoch time o tiempo POSIX) es el número de segundos transcurridos desde el <strong>1970-01-01 00:00:00 UTC</strong>, la «época Unix». Es la forma estándar en que las computadoras guardan momentos concretos: no necesita zona horaria ni reglas de calendario.</p>
    <h2>Segundos frente a milisegundos</h2>
    <p>Los sistemas Unix clásicos guardan segundos (10 dígitos en la era actual). JavaScript, Java y muchas APIs usan milisegundos (13 dígitos). Si una conversión cae en enero de 1970, casi seguro que pegaste segundos donde se esperaban milisegundos, o al revés.</p>
    <h2>¿El tiempo Unix contempla los segundos intercalares?</h2>
    <p>No. Cada día cuenta como exactamente 86 400 segundos. Los pocos segundos intercalares añadidos desde 1970 se absorben de forma invisible, de modo que los timestamps van hoy unos 27 segundos por delante del tiempo astronómico.</p>
    <h2>El problema del 2038</h2>
    <p>Los sistemas que guardan el timestamp en un entero de 32 bits con signo se desbordan el <strong>2038-01-19</strong>. Los sistemas modernos de 64 bits no se ven afectados; por eso los dispositivos empotrados son la principal preocupación.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist ein Unix-Timestamp?</h2>
    <p>Ein Unix-Timestamp (auch Epoch- oder POSIX-Zeit genannt) ist die Zahl der Sekunden seit dem <strong>1970-01-01 00:00:00 UTC</strong> — der „Unix-Epoche“. Es ist die Standardweise, wie Computer Zeitpunkte speichern: ohne Zeitzone und ohne Kalenderregeln.</p>
    <h2>Sekunden oder Millisekunden</h2>
    <p>Klassische Unix-Systeme speichern Sekunden (heute 10 Stellen). JavaScript, Java und viele APIs nutzen stattdessen Millisekunden (13 Stellen). Landet eine Umrechnung im Januar 1970, hast du fast sicher Sekunden eingefügt, wo Millisekunden erwartet wurden — oder umgekehrt.</p>
    <h2>Berücksichtigt Unix-Zeit Schaltsekunden?</h2>
    <p>Nein. Jeder Tag zählt exakt 86 400 Sekunden. Die wenigen seit 1970 eingefügten Schaltsekunden werden unsichtbar absorbiert, sodass Timestamps heute rund 27 Sekunden vor der astronomischen Zeit liegen.</p>
    <h2>Das Jahr-2038-Problem</h2>
    <p>Systeme, die den Timestamp in einer vorzeichenbehafteten 32-Bit-Ganzzahl speichern, laufen am <strong>2038-01-19</strong> über. Moderne 64-Bit-Systeme sind nicht betroffen — deshalb sind Embedded-Geräte die Hauptsorge.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function EpochConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
