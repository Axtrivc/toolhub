'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * IP Quality & Fraud Checker 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      这个 IP 质量检测器以反欺诈系统的方式给任意 IP 地址打分——解析它的 <strong>ASN 与归属</strong>，把它归类为
      <strong> 住宅 ISP 还是机房（IDC）</strong>，计算一个 <strong>0–100 的欺诈评分</strong>，并交叉核对一致性信号，比如你的浏览器
      时区与 IP 归属地是否吻合。所有检测都在浏览器中完成，直连免费的、支持 CORS 的接口（Cloudflare trace、ipwho.is、
      ipapi.co 以及 Cloudflare DNS-over-HTTPS）；任何查询都不会经过我们自己的服务器。
    </p>

    <div>
      <h2>欺诈评分到底衡量了什么</h2>
      <ul>
        <li>
          <strong>ASN 类型</strong> —— 归属字符串中若包含 <em>hosting</em>、<em>cloud</em>、<em>AWS</em>、
          <em>DigitalOcean</em> 等关键词，即判定该 IP 为机房（IDC）出口，在评分中权重最高。
        </li>
        <li>
          <strong>时区一致性</strong> —— 你的设备时区（取自 <code>Intl.DateTimeFormat</code>）会与 IP 归属地的时区做比对。
          出现 <code>Asia/Shanghai</code> 与 <code>America/New_York</code> 这类不匹配，是典型的 VPN/代理泄漏，会拉高评分。
        </li>
        <li>
          <strong>代理与黑名单启发式</strong> —— ASN 所有者名称中的 VPN/代理关键词，加上已知的机房 IP 段，近似还原了商用
          黑名单服务的标记逻辑。
        </li>
      </ul>
    </div>

    <div>
      <h2>平台为什么在意住宅 IP 还是机房 IP</h2>
      <p>
        TikTok、Amazon、Meta 以及 OpenAI 等 AI 服务商都会对入站 IP 打分。<strong>住宅 ISP</strong> 地址映射到真实家庭，
        能通过大多数检测；而<strong>机房</strong> IP 段被批量出售、大量用于自动化滥用——因此机房 IP 上的账号会被限流、
        挑战甚至封禁。工具里的用途评级矩阵把检测结果翻译成各平台的星级评分，让你一眼看出一个出口节点是否适合做视频
        触达、跨境电商、社媒运营或 AI 服务。
      </p>
    </div>

    <div>
      <h2>查询自定义 IP 与域名</h2>
      <p>
        把任意 IPv4/IPv6 地址或域名粘贴到查询框即可。域名会先经 Cloudflare 的 DNS-over-HTTPS 解析器解析，再做地理定位；
        反向 DNS（PTR）也以同样方式查询。延迟探测用 <code>performance.now()</code> 计时，测量从你当前网络到 AWS 位于美西、
        美东、东京、新加坡和法兰克福边缘区域的真实 HTTP 往返耗时。
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
        que los rangos de <strong>centro de datos</strong> se venden al por mayor y se abusan mucho para automatización —
        por eso las cuentas en IP de IDC son limitadas, desafiadas o baneadas. La matriz de calificación de casos de uso
        de la herramienta traduce el resultado de la inspección en valoraciones por estrellas para cada plataforma, de
        modo que veas de un vistazo si un nodo de salida es adecuado para outreach en vídeo, comercio electrónico
        transfronterizo, operaciones en redes sociales o servicios de IA.
      </p>
    </div>

    <div>
      <h2>Consultar IP y dominios personalizados</h2>
      <p>
        Pega cualquier dirección IPv4/IPv6 o dominio en el cuadro de consulta. Los dominios se resuelven primero a través
        del resolver DNS-over-HTTPS de Cloudflare y luego se geolocalizan; el DNS inverso (PTR) se consulta de la misma
        manera. La sonda de latencia mide los tiempos reales de ida y vuelta HTTP desde tu conexión actual a las regiones
        edge de AWS en Costa Oeste de EE. UU., Costa Este, Tokio, Singapur y Fráncfort usando la temporización de{' '}
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
      gegenüber der Geolokalisierung der IP. Alles läuft in deinem Browser gegen kostenlose, CORS-fähige Endpunkte
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
          <code>America/New_York</code> ist ein klassischer VPN-/Proxy-Leck und erhöht den Score.
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
        <strong>Datacenter</strong>-Ranges in bulk verkauft und stark für Automatisierung missbraucht werden — deshalb
        werden Konten auf IDC-IPs gedrosselt, herausgefordert oder gesperrt. Die Use-Case-Bewertungsmatrix im Tool
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
        gleichermaßen abgefragt. Die Latenzsonde misst mit <code>performance.now()</code>-Zeitmessung die echten
        HTTP-Round-Trips von deiner aktuellen Verbindung zu AWS-Edge-Regionen in US-West, US-Ost, Tokio, Singapur und
        Frankfurt.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function IpCheckerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
