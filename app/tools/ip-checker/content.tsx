'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * IP Quality & Fraud Checker 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This IP quality inspector grades any IP address the way anti-fraud systems do — resolving its{' '}
      <strong>ASN and ownership</strong>, classifying it as <strong>residential ISP or datacenter (IDC)</strong>,
      computing a <strong>0–100 fraud score</strong>, and cross-checking consistency signals like your browser
      timezone versus the IP&apos;s geolocation. Everything runs in your browser against free, CORS-enabled
      endpoints (Cloudflare trace, ipwho.is, ipapi.co, and Cloudflare DNS-over-HTTPS); no lookup ever touches a
      server we control.
    </p>

    <div>
      <h2>What the fraud score actually measures</h2>
      <ul>
        <li>
          <strong>ASN type</strong> — ownership strings containing <em>hosting</em>, <em>cloud</em>,{' '}
          <em>AWS</em>, <em>DigitalOcean</em>, and similar keywords mark the IP as a datacenter (IDC) exit,
          which carries the heaviest weight in the score.
        </li>
        <li>
          <strong>Timezone consistency</strong> — your device timezone (from{' '}
          <code>Intl.DateTimeFormat</code>) is compared with the timezone of the IP&apos;s location. A
          mismatch such as <code>Asia/Shanghai</code> vs <code>America/New_York</code> is a classic
          VPN/proxy leak and raises the score.
        </li>
        <li>
          <strong>Proxy &amp; blacklist heuristics</strong> — VPN/proxy keywords in the ASN owner name and
          known hosting ranges approximate what commercial blacklist services flag.
        </li>
      </ul>
    </div>

    <div>
      <h2>Why platforms care about residential vs datacenter IPs</h2>
      <p>
        TikTok, Amazon, Meta, and AI providers like OpenAI all score inbound IPs. <strong>Residential
        ISP</strong> addresses map to real households and pass most checks, while <strong>datacenter</strong>{' '}
        ranges are sold in bulk and heavily abused for automation — so accounts on IDC IPs get throttled,
        challenged, or banned. The use-case rating matrix in the tool translates the inspection result into
        per-platform star ratings so you can see at a glance whether an exit node is suitable for video
        outreach, cross-border e-commerce, social media operations, or AI services.
      </p>
    </div>

    <div>
      <h2>Querying custom IPs and domains</h2>
      <p>
        Paste any IPv4/IPv6 address or domain into the query box. Domains are first resolved through
        Cloudflare&apos;s DNS-over-HTTPS resolver, then geolocated; reverse DNS (PTR) is looked up the same
        way. The latency probe measures real HTTP round-trips from your current connection to AWS edge
        regions in US West, US East, Tokyo, Singapore, and Frankfurt using <code>performance.now()</code>{' '}
        timing.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Este inspector de calidad IP evalúa cualquier dirección IP como lo hacen los sistemas antifraude: resuelve su{' '}
      <strong>ASN y propiedad</strong>, la clasifica como <strong>ISP residencial o centro de datos (IDC)</strong>,
      calcula una <strong>puntuación de fraude de 0–100</strong> y verifica señales de consistencia como la zona horaria
      de tu navegador frente a la geolocalización de la IP. Todo se ejecuta en tu navegador contra endpoints gratuitos
      con CORS habilitado (Cloudflare trace, ipwho.is, ipapi.co y Cloudflare DNS-over-HTTPS); ninguna consulta pasa por
      un servidor nuestro.
    </p>

    <div>
      <h2>Qué mide realmente la puntuación de fraude</h2>
      <ul>
        <li>
          <strong>Tipo de ASN</strong> — las cadenas de propiedad que contienen <em>hosting</em>, <em>cloud</em>,{' '}
          <em>AWS</em>, <em>DigitalOcean</em> y palabras clave similares marcan la IP como salida de centro de datos
          (IDC), lo que tiene el mayor peso en la puntuación.
        </li>
        <li>
          <strong>Consistencia de zona horaria</strong> — la zona horaria de tu dispositivo (obtenida de{' '}
          <code>Intl.DateTimeFormat</code>) se compara con la zona horaria de la ubicación de la IP. Una discrepancia
          como <code>Asia/Shanghai</code> frente a <code>America/New_York</code> es una fuga clásica de VPN/proxy y
          eleva la puntuación.
        </li>
        <li>
          <strong>Heurísticas de proxy y lista negra</strong> — las palabras clave de VPN/proxy en el nombre del
          propietario del ASN y los rangos de hosting conocidos aproximan lo que marcan los servicios comerciales de
          listas negras.
        </li>
      </ul>
    </div>

    <div>
      <h2>Por qué a las plataformas les importa si la IP es residencial o de centro de datos</h2>
      <p>
        TikTok, Amazon, Meta y proveedores de IA como OpenAI puntúan las IP entrantes. Las direcciones de{' '}
        <strong>ISP residencial</strong> se asignan a hogares reales y superan la mayoría de las comprobaciones, mientras
        que los rangos de <strong>centro de datos</strong> se venden al por mayor y se usan de forma masiva y abusiva para
        automatización — por eso las cuentas en IP de IDC sufren limitaciones, desafíos de verificación o baneos. La matriz de calificación de casos de uso
        de la herramienta traduce el resultado de la inspección en valoraciones con estrellas para cada plataforma, de
        modo que veas de un vistazo si un nodo de salida es adecuado para divulgación en vídeo, comercio electrónico
        transfronterizo, operaciones en redes sociales o servicios de IA.
      </p>
    </div>

    <div>
      <h2>Consultar IP y dominios personalizados</h2>
      <p>
        Pega cualquier dirección IPv4/IPv6 o dominio en el cuadro de consulta. Los dominios se resuelven primero a través
        del resolver DNS-over-HTTPS de Cloudflare y luego se geolocalizan; el DNS inverso (PTR) se consulta de la misma
        manera. La sonda de latencia mide los tiempos reales de ida y vuelta HTTP desde tu conexión actual a las regiones
        edge de AWS en Oeste de EE. UU., Este de EE. UU., Tokio, Singapur y Fráncfort usando la temporización de{' '}
        <code>performance.now()</code>.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser IP-Qualitäts-Inspektor bewertet jede IP-Adresse so wie Anti-Betrugssysteme: Er löst{' '}
      <strong>ASN und Eigentümer</strong> auf, klassifiziert sie als <strong>Residential-ISP oder Datacenter (IDC)</strong>,
      berechnet einen <strong>Betrugsscore von 0–100</strong> und gleicht Konsistenzsignale ab, etwa deine Browser-Zeitzone
      mit der Geolokalisierung der IP. Alles läuft in deinem Browser gegen kostenlose, CORS-fähige Endpunkte
      (Cloudflare trace, ipwho.is, ipapi.co und Cloudflare DNS-over-HTTPS); keine Abfrage berührt jemals einen von uns
      kontrollierten Server.
    </p>

    <div>
      <h2>Was der Betrugsscore tatsächlich misst</h2>
      <ul>
        <li>
          <strong>ASN-Typ</strong> — Eigentümerzeichenketten, die <em>hosting</em>, <em>cloud</em>, <em>AWS</em>,{' '}
          <em>DigitalOcean</em> und ähnliche Schlüsselwörter enthalten, markieren die IP als Datacenter-(IDC-)Exit,
          was das höchste Gewicht im Score trägt.
        </li>
        <li>
          <strong>Zeitzonen-Konsistenz</strong> — deine Gerätezeitzone (aus <code>Intl.DateTimeFormat</code>) wird mit der
          Zeitzone des IP-Standorts verglichen. Eine Abweichung wie <code>Asia/Shanghai</code> gegenüber{' '}
          <code>America/New_York</code> ist ein klassischer VPN-/Proxy-Leak und erhöht den Score.
        </li>
        <li>
          <strong>Proxy- und Blacklist-Heuristiken</strong> — VPN-/Proxy-Schlüsselwörter im ASN-Eigentümernamen und
          bekannte Hosting-Ranges bilden nach, was kommerzielle Blacklist-Dienste markieren.
        </li>
      </ul>
    </div>

    <div>
      <h2>Warum Plattformen zwischen Residential- und Datacenter-IPs unterscheiden</h2>
      <p>
        TikTok, Amazon, Meta und KI-Anbieter wie OpenAI bewerten alle eingehenden IPs. <strong>Residential-ISP</strong>-
        Adressen lassen sich echten Haushalten zuordnen und bestehen die meisten Prüfungen, während{' '}
        <strong>Datacenter</strong>-Ranges massenhaft verkauft und stark für Automatisierung missbraucht werden — deshalb
        werden Konten auf IDC-IPs gedrosselt, mit Verifizierungsabfragen herausgefordert oder gesperrt. Die Use-Case-Bewertungsmatrix im Tool
        übersetzt das Inspektionsergebnis in plattformspezifische Sternebewertungen, damit du auf einen Blick siehst, ob
        ein Exit-Knoten für Video-Outreach, grenzüberschreitenden E-Commerce, Social-Media-Betrieb oder KI-Dienste
        geeignet ist.
      </p>
    </div>

    <div>
      <h2>Eigene IPs und Domains abfragen</h2>
      <p>
        Füge beliebige IPv4-/IPv6-Adressen oder Domains in das Abfragefeld ein. Domains werden zuerst über den
        DNS-over-HTTPS-Resolver von Cloudflare aufgelöst und anschließend geolokalisiert; Reverse-DNS (PTR) wird
        gleichermaßen abgefragt. Die Latenzsonde misst mit <code>performance.now()</code> die echten
        HTTP-Round-Trips von deiner aktuellen Verbindung zu AWS-Edge-Regionen in US-West, US-Ost, Tokio, Singapur und
        Frankfurt.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function IpCheckerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
