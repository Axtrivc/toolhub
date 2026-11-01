'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HtaccessRedirectGenerator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Order of rules matters</h2>
    <p>Apache applies RewriteRules top-down; the HTTPS and canonical-host blocks must precede individual redirects or they will chain through them and leak intermediate URLs into browsers.</p>
    <h2>Test with 302 first</h2>
    <p>Browsers cache 301s aggressively and there is no reliable un-cache. Ship new rules as R=302, verify every path, then flip to R=301. This generator emits 301 because that is the end goal.</p>
    <h2>Domain migrations</h2>
    <p>The whole-domain block preserves paths automatically: old.com/any/path lands on new.com/any/path with one rule instead of thousands of lines. Update Search Console afterward to speed reindexing.</p>
    <h2>When htaccess is not read</h2>
    <p>If directives seem ignored, check AllowOverride in the vhost config — shared hosts enable it; some performance-tuned setups disable .htaccess entirely in favor of main config.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El orden de las reglas importa</h2>
    <p>Apache aplica las RewriteRule de arriba abajo; los bloques de HTTPS y de host canónico deben ir antes de las redirecciones individuales, o las peticiones encadenarán a través de ellas y filtrarán URLs intermedias al navegador.</p>
    <h2>Prueba primero con 302</h2>
    <p>Los navegadores cachean los 301 con agresividad y no existe un «des-caché» fiable. Publica las reglas nuevas como R=302, verifica cada ruta y luego cambia a R=301. Este generador emite 301 porque ese es el objetivo final.</p>
    <h2>Migraciones de dominio</h2>
    <p>El bloque de dominio completo conserva las rutas automáticamente: old.com/any/path aterriza en new.com/any/path con una sola regla en lugar de miles de líneas. Actualiza Search Console después para acelerar la reindexación.</p>
    <h2>Cuándo .htaccess no se lee</h2>
    <p>Si las directivas parecen ignoradas, revisa AllowOverride en la configuración del vhost — el hosting compartido lo activa; algunos entornos afinados para rendimiento desactivan .htaccess por completo en favor de la configuración principal.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Reihenfolge der Regeln zählt</h2>
    <p>Apache wendet RewriteRules von oben nach unten an; die HTTPS- und Canonical-Host-Blöcke müssen vor den einzelnen Redirects stehen, sonst laufen Requests durch sie hindurch und leaken Zwischen-URLs in den Browser.</p>
    <h2>Erst mit 302 testen</h2>
    <p>Browser cachen 301 aggressiv, und es gibt kein verlässliches Un-Cache. Shippe neue Regeln als R=302, prüfe jeden Pfad und stelle dann auf R=301 um. Dieser Generator gibt 301 aus, denn das ist das Endziel.</p>
    <h2>Domain-Migrationen</h2>
    <p>Der Ganz-Domain-Block erhält Pfade automatisch: old.com/any/path landet mit einer einzigen Regel auf new.com/any/path statt mit tausenden Zeilen. Aktualisiere danach die Search Console, um die Neuindexierung zu beschleunigen.</p>
    <h2>Wann .htaccess nicht gelesen wird</h2>
    <p>Wirken Direktiven ignoriert, prüfe AllowOverride in der vhost-Konfiguration — Shared Hosting aktiviert es; manche performance-getunten Setups deaktivieren .htaccess komplett zugunsten der Haupt-Konfiguration.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HtaccessRedirectGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
