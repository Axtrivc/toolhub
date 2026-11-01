'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * UtmLinkBuilder 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The five parameters, one job each</h2>
    <p>utm_source answers "where did this click come from" (google, newsletter, partner-42). utm_medium names the channel (cpc, email, referral). utm_campaign groups everything under one push (spring-sale-2026). utm_term carries the paid keyword and utm_content separates creative variants for A/B reading. GA4 joins source and medium into session source/medium — without them, every click lands in the (direct) / (none) bucket where no report can rescue it.</p>
    <h2>Case sensitivity is the silent report-killer</h2>
    <p>"Email" and "email" are two different values, and so are "Spring Sale" and "spring-sale" after encoding. Most attribution messes are not tooling problems — they are naming drift: three marketers typing the same campaign three ways. Pick lowercase-with-dashes once, write it down, and keep the list somewhere shared. The tool flags uppercase input as a hint for exactly this reason.</p>
    <h2>What happens to the base URL</h2>
    <p>Existing query parameters survive; each utm_* parameter you fill replaces any same-named one already present, and values are URL-encoded (spaces become %20). A missing protocol is auto-completed with https:// the way browsers do it — but pasting a full https:// URL keeps encoded characters you may already have in a query string untouched.</p>
    <h2>Keep tagged links out of search results</h2>
    <p>UTM parameters do not affect Google rankings, but a tagged URL can still be crawled and shown in SERPs, splitting your signals. Self-referencing canonical tags on landing pages — or Search Console parameter handling — keep the clean version canonical. Internal links should never carry UTMs: tagging internal navigation overwrites the visitor's original source mid-session.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cinco parámetros, un trabajo cada uno</h2>
    <p>utm_source responde «¿de dónde vino este clic?» (google, newsletter, partner-42). utm_medium nombra el canal (cpc, email, referral). utm_campaign agrupa todo bajo una misma campaña (spring-sale-2026). utm_term lleva la palabra clave pagada y utm_content separa variantes de creativo para lectura A/B. GA4 une source y medium en el source/medium de la sesión — sin ellos, cada clic cae en el cajón (direct)/(none), del que ningún informe lo rescata.</p>
    <h2>Las mayúsculas matan informes en silencio</h2>
    <p>«Email» y «email» son dos valores distintos, y «Spring Sale» y «spring-sale» tampoco se combinan tras la codificación. La mayoría del caos de atribución no es culpa de la herramienta: es deriva de nombres — tres marketers escribiendo la misma campaña de tres maneras. Elige una vez minúsculas-con-guiones, escríbelo y compártelo. Por eso la herramienta avisa cuando detecta mayúsculas.</p>
    <h2>Qué le pasa a la URL base</h2>
    <p>Los parámetros de consulta existentes se conservan; cada utm_* que rellenas sustituye al homónimo que ya estuviera, y los valores se codifican (los espacios pasan a %20). Si falta el protocolo se completa con https:// como hacen los navegadores — pero pegando la URL completa con https:// los caracteres ya codificados de la query quedan intactos.</p>
    <h2>Mantén los enlaces etiquetados fuera de resultados</h2>
    <p>Los parámetros UTM no afectan al ranking, pero una URL etiquetada puede rastrearse y mostrarse en SERPs, repartiendo señales. Una canónica autorreferente en las landings — o el manejo de parámetros de Search Console — mantiene limpia la versión canónica. Y los enlaces internos jamás deben llevar UTM: etiquetar la navegación interna sobrescribe el origen original a mitad de sesión.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Fünf Parameter, je ein Job</h2>
    <p>utm_source beantwortet „Woher kam dieser Klick?“ (google, newsletter, partner-42). utm_medium benennt den Kanal (cpc, email, referral). utm_campaign bündelt alles unter einer Kampagne (spring-sale-2026). utm_term trägt das gebuchte Keyword, utm_content trennt Kreativ-Varianten für A/B-Ablesungen. GA4 verschmilzt Source und Medium zur Session-Source/Medium — ohne sie fällt jeder Klick in den Eimer (direct)/(none), aus dem kein Bericht ihn herausholt.</p>
    <h2>Groß-/Kleinschreibung ist der stille Berichtskiller</h2>
    <p>„Email“ und „email“ sind zwei Werte, und „Spring Sale“ und „spring-sale“ verschmelzen nach der Kodierung ebenso wenig. Die meisten Attributions-Chaosse sind kein Werkzeugproblem, sondern Namensdrift: drei Marketer schreiben dieselbe Kampagne auf drei Arten. Einmal klein-mit-Bindestrichen festlegen, aufschreiben, teilen. Genau deshalb markiert das Werkzeug Großbuchstaben als Hinweis.</p>
    <h2>Was mit der Basis-URL passiert</h2>
    <p>Vorhandene Query-Parameter bleiben; jedes ausgefüllte utm_* ersetzt einen gleichnamigen Bestandteil, Werte werden URL-kodiert (Leerzeichen zu %20). Fehlt das Protokoll, wird es browserüblich mit https:// ergänzt — wer die vollständige https://-URL einfügt, hält bereits kodierte Zeichen in der Query unangetastet.</p>
    <h2>Getaggte Links aus den Suchergebnissen fernhalten</h2>
    <p>UTM-Parameter beeinflussen das Ranking nicht, aber eine getaggte URL kann gecrawlt und in den SERPs gezeigt werden und zersplittert Signale. Eine selbstreferenzierende Canonical auf den Landings — oder die Parameterbehandlung der Search Console — hält die saubere Version kanonisch. Interne Links tragen niemals UTM: Damit überschreibst du mitten in der Session die ursprüngliche Quelle des Besuchers.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function UtmLinkBuilderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
