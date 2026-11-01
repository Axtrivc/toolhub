'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Robots.txt Generator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致(CCBot 表述已按预设实际封禁清单修正)。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where the file goes</h2>
    <p>Robots.txt must live at the root of your domain — <code>https://example.com/robots.txt</code>. Search engines never look anywhere else, and subdomains need their own file.</p>
    <h2>Presets explained</h2>
    <p><strong>Standard site</strong> allows everything except a common admin path. <strong>Block everything</strong> is useful for staging sites. <strong>Block AI crawlers</strong> adds directives honored by GPTBot, ClaudeBot, PerplexityBot, and the other major AI training crawlers.</p>
    <h2>Crawl-delay caveats</h2>
    <p>Google explicitly ignores Crawl-delay; Bing and Yandex honor it. If Googlebot hammers your server, use the crawl-rate settings in Search Console instead.</p>
    <h2>robots.txt is advisory</h2>
    <p>Well-behaved crawlers obey it, but it is not authentication. Anything truly private must sit behind access control — disallow rules just ask politely.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dónde va el archivo</h2>
    <p>Robots.txt debe estar en la raíz de tu dominio: <code>https://example.com/robots.txt</code>. Los buscadores no miran en ningún otro sitio, y los subdominios necesitan su propio archivo.</p>
    <h2>Qué hace cada preset</h2>
    <p><strong>Sitio estándar</strong> permite todo salvo una ruta de administración habitual. <strong>Bloquear todo</strong> sirve para entornos de staging. <strong>Bloquear rastreadores IA</strong> añade directivas que hoy respetan los operadores de GPTBot, ClaudeBot, PerplexityBot y el resto de rastreadores de entrenamiento de IA importantes.</p>
    <h2>Matices de Crawl-delay</h2>
    <p>Google ignora Crawl-delay de forma explícita; Bing y Yandex sí lo respetan. Si Googlebot satura tu servidor, usa el ajuste de frecuencia de rastreo de Search Console.</p>
    <h2>robots.txt es solo un aviso</h2>
    <p>Los rastreadores bien educados lo obedecen, pero no es autenticación. Lo realmente privado debe ir tras un control de acceso — las reglas Disallow solo son una petición de cortesía.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wo die Datei hingehört</h2>
    <p>Robots.txt muss in die Wurzel deiner Domain — <code>https://example.com/robots.txt</code>. Suchmaschinen schauen nirgendwo anders hin, und Subdomains brauchen eine eigene Datei.</p>
    <h2>Was die Presets bedeuten</h2>
    <p><strong>Standard-Website</strong> erlaubt alles außer einem üblichen Admin-Pfad. <strong>Alles blockieren</strong> ist nützlich für Staging-Seiten. <strong>KI-Crawler blockieren</strong> fügt Direktiven hinzu, denen die Betreiber von GPTBot, ClaudeBot, PerplexityBot und weiteren großen KI-Trainings-Crawlern derzeit folgen.</p>
    <h2>Zu Crawl-delay</h2>
    <p>Google ignoriert Crawl-delay ausdrücklich; Bing und Yandex beachten es. Wenn Googlebot deinen Server belastet, nutze stattdessen die Crawl-Rate-Einstellungen der Search Console.</p>
    <h2>robots.txt ist eine Bitte</h2>
    <p>Brave Crawler halten sich daran, aber es ist keine Authentifizierung. Wirklich Privates gehört hinter eine Zugriffskontrolle — Disallow-Regeln bitten nur höflich.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RobotsTxtGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
