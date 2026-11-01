'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Cron Parser 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>cron expression</strong> is a compact string that describes a repeating schedule &mdash; the same format used by Linux <code>crontab</code>, GitHub Actions, Kubernetes CronJobs, and AWS EventBridge. This parser turns that string into plain English and shows the next five times it will fire, so you can confirm a schedule before deploying it.</p>

    <div>
      <h2>The five fields</h2>
      <p>Left to right, the fields are <strong>minute</strong> (0&ndash;59), <strong>hour</strong> (0&ndash;23),{' '}
      <strong>day of month</strong> (1&ndash;31), <strong>month</strong> (1&ndash;12 or JAN&ndash;DEC), and{' '}
      <strong>day of week</strong> (0&ndash;6, where 0 = Sunday, or SUN&ndash;SAT). Each field accepts <code>*</code> (any
      value), a comma list (<code>1,15</code>), a range (<code>9-17</code>), or a step (<code>*/15</code> for
      every 15 minutes). A classic example: <code>0 9 * * 1-5</code> means 09:00 on weekdays.</p>
    </div>

    <div>
      <h2>Why day-of-month and day-of-week use OR</h2>
      <p>When both the day-of-month and day-of-week fields are restricted (neither is <code>*</code>), cron fires if{' '}
      <em>either</em> matches &mdash; this is the Vixie cron standard. So <code>0 0 1 * 1</code> runs at midnight on
      the 1st of the month <strong>or</strong> on any Monday. If one of those fields is <code>*</code>, only the other
      is considered. This is the most common source of cron confusion, so always verify with the next-runs preview.</p>
    </div>

    <div>
      <h2>Watch out for platform quirks</h2>
      <p>While the five core fields are standard, macros (<code>@daily</code>, <code>@reboot</code>), seconds, and
      years are <em>not</em>{' '}
      universal. GitHub Actions, Kubernetes, and AWS EventBridge each add their own fields
      or syntax. This parser covers the standard five-field format used by Linux crontab; confirm any extra
      fields against your specific platform&apos;s docs.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>expresión cron</strong> es una cadena compacta que describe una programación repetitiva — el mismo formato que usan Linux <code>crontab</code>, GitHub Actions, Kubernetes CronJobs y AWS EventBridge. Este analizador convierte esa cadena en lenguaje sencillo y muestra las próximas cinco veces que se ejecutará, para que puedas confirmar la programación antes de desplegarla.</p>

    <div>
      <h2>Los cinco campos</h2>
      <p>De izquierda a derecha, los campos son <strong>minuto</strong> (0–59), <strong>hora</strong> (0–23),{' '}
      <strong>día del mes</strong> (1–31), <strong>mes</strong> (1–12 o JAN–DEC) y{' '}
      <strong>día de la semana</strong> (0–6, donde 0 = domingo, o SUN–SAT). Cada campo admite <code>*</code> (cualquier
      valor), una lista separada por comas (<code>1,15</code>), un rango (<code>9-17</code>) o un paso (<code>*/15</code> para
      cada 15 minutos). Un ejemplo clásico: <code>0 9 * * 1-5</code> significa las 09:00 en días laborables.</p>
    </div>

    <div>
      <h2>Por qué el día del mes y el día de la semana usan OR</h2>
      <p>Cuando tanto el campo del día del mes como el del día de la semana están restringidos (ninguno es <code>*</code>), cron se ejecuta si coincide <em>cualquiera</em> de los dos — esto es el estándar Vixie cron. Por tanto, <code>0 0 1 * 1</code> se ejecuta a medianoche el día 1 del mes <strong>o</strong> en cualquier lunes. Si uno de esos campos es <code>*</code>, solo se tiene en cuenta el otro. Esta es la fuente más común de confusión con cron, así que verifica siempre con la vista previa de próximas ejecuciones.</p>
    </div>

    <div>
      <h2>Cuidado con las particularidades de cada plataforma</h2>
      <p>Aunque los cinco campos básicos son estándar, las macros (<code>@daily</code>, <code>@reboot</code>), los segundos y los años <em>no</em> son universales. GitHub Actions, Kubernetes y AWS EventBridge añaden cada uno sus propios campos o sintaxis. Este analizador cubre el formato estándar de cinco campos que usa Linux crontab; confirma cualquier campo adicional con la documentación específica de tu plataforma.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Ein <strong>Cron-Ausdruck</strong> ist eine kompakte Zeichenkette, die einen wiederkehrenden Zeitplan beschreibt — dasselbe Format, das auch Linux <code>crontab</code>, GitHub Actions, Kubernetes CronJobs und AWS EventBridge verwenden. Dieser Parser wandelt die Zeichenkette in verständliches Deutsch um und zeigt die nächsten fünf Ausführungszeiten an, damit du den Zeitplan vor dem Deployment bestätigen kannst.</p>

    <div>
      <h2>Die fünf Felder</h2>
      <p>Von links nach rechts sind die Felder <strong>Minute</strong> (0–59), <strong>Stunde</strong> (0–23),{' '}
      <strong>Tag des Monats</strong> (1–31), <strong>Monat</strong> (1–12 oder JAN–DEC) und{' '}
      <strong>Wochentag</strong> (0–6, wobei 0 = Sonntag ist, oder SUN–SAT). Jedes Feld akzeptiert <code>*</code> (jeder
      Wert), eine Kommaliste (<code>1,15</code>), einen Bereich (<code>9-17</code>) oder eine Schrittweite (<code>*/15</code> für
      alle 15 Minuten). Ein klassisches Beispiel: <code>0 9 * * 1-5</code> bedeutet 09:00 Uhr an Werktagen.</p>
    </div>

    <div>
      <h2>Warum Tag des Monats und Wochentag ODER verwenden</h2>
      <p>Wenn sowohl das Feld für den Tag des Monats als auch das für den Wochentag eingeschränkt sind (keines ist <code>*</code>), führt cron aus, wenn <em>eines</em> von beiden zutrifft — das ist der Vixie-cron-Standard. <code>0 0 1 * 1</code> führt also um Mitternacht am 1. des Monats <strong>oder</strong> an jedem Montag aus. Wenn eines dieser Felder <code>*</code> ist, wird nur das andere berücksichtigt. Das ist die häufigste Quelle für Cron-Verwirrung, also überprüfe es immer mit der Vorschau der nächsten Ausführungen.</p>
    </div>

    <div>
      <h2>Achte auf Eigenheiten der Plattformen</h2>
      <p>Während die fünf Kernfelder Standard sind, sind Makros (<code>@daily</code>, <code>@reboot</code>), Sekunden und Jahre <em>nicht</em> universell. GitHub Actions, Kubernetes und AWS EventBridge fügen jeweils eigene Felder oder Syntax hinzu. Dieser Parser deckt das Standardformat mit fünf Feldern ab, das Linux crontab verwendet; bestätige zusätzliche Felder anhand der Dokumentation deiner spezifischen Plattform.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CronParserContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
