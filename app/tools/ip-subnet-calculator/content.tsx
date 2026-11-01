'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * IP Subnet Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Subnetting is the arithmetic every network engineer does daily: given an address like{' '}
      <code>192.168.1.10/24</code>, which network does it belong to, what is its broadcast address, and how many
      hosts fit inside? This calculator answers instantly with the subnet mask, wildcard mask, network and
      broadcast addresses, usable host range, address class, and RFC 1918 private/public classification — all
      computed locally in your browser with exact 32-bit binary math.
    </p>

    <div>
      <h2>How CIDR math works</h2>
      <p>
        An IPv4 address is a 32-bit number, and the prefix length (<code>/24</code>) says how many leading bits
        identify the network. The <strong>subnet mask</strong> is those bits set to 1; the{' '}
        <strong>wildcard mask</strong> is its inverse, used in Cisco ACLs and OSPF. AND-ing the address with the
        mask yields the <strong>network address</strong>; OR-ing with the wildcard yields the{' '}
        <strong>broadcast address</strong>. Everything between them — minus those two reserved addresses — is the
        usable host range: <code>2^(32−prefix) − 2</code> hosts.
      </p>
    </div>

    <div>
      <h2>The /31 and /32 edge cases</h2>
      <p>
        Two prefixes break the &quot;minus two&quot; rule. <code>/31</code> links (RFC 3021) are point-to-point
        WAN links with no network or broadcast address at all — <strong>both</strong> addresses are usable, which
        halves address waste on router-to-router links. <code>/32</code> identifies exactly one host and is
        common for loopback interfaces and firewall rules. This tool handles both correctly instead of reporting
        zero usable hosts.
      </p>
    </div>

    <div>
      <h2>Classes, private ranges, and practical tips</h2>
      <p>
        Classful labels survive mostly in documentation: class A (<code>1–126</code>), B (<code>128–191</code>),
        C (<code>192–223</code>), D (multicast), and E (experimental). What matters operationally is{' '}
        <strong>RFC 1918</strong>: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, and{' '}
        <code>192.168.0.0/16</code> are private and unroutable on the public internet, so overlapping them across
        sites breaks VPNs. When planning, leave room to grow — splitting a <code>/24</code> into two{' '}
        <code>/25</code>s later is far easier than renumbering a full network.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El subnetting es la aritmética que todo ingeniero de redes hace a diario: dada una dirección como{' '}
      <code>192.168.1.10/24</code>, ¿a qué red pertenece, cuál es su dirección de broadcast y cuántos hosts caben?
      Esta calculadora responde al instante con la máscara de subred, la máscara comodín, las direcciones de red y
      de broadcast, el rango de hosts utilizables, la clase de dirección y la clasificación privada/pública RFC 1918 —
      todo calculado localmente en tu navegador con aritmética binaria exacta de 32 bits.
    </p>

    <div>
      <h2>Cómo funciona el cálculo CIDR</h2>
      <p>
        Una dirección IPv4 es un número de 32 bits, y la longitud del prefijo (<code>/24</code>) indica cuántos bits
        iniciales identifican la red. La <strong>máscara de subred</strong> son esos bits puestos a 1; la{' '}
        <strong>máscara comodín</strong> es su inversa, usada en las ACL de Cisco y en OSPF. Aplicar AND entre la
        dirección y la máscara da la <strong>dirección de red</strong>; aplicar OR con la comodín da la{' '}
        <strong>dirección de broadcast</strong>. Todo lo que hay entre ellas — menos esas dos direcciones reservadas —
        es el rango de hosts utilizables: <code>2^(32−prefijo) − 2</code> hosts.
      </p>
    </div>

    <div>
      <h2>Los casos límite /31 y /32</h2>
      <p>
        Dos prefijos rompen la regla de «menos dos». Los enlaces <code>/31</code> (RFC 3021) son enlaces WAN
        punto a punto sin dirección de red ni de broadcast — <strong>ambas</strong> direcciones son utilizables, lo
        que reduce a la mitad el desperdicio de direcciones en enlaces entre routers. <code>/32</code> identifica exactamente un host
        y es común en interfaces de loopback y reglas de firewall. Esta herramienta gestiona ambos correctamente en
        lugar de reportar cero hosts utilizables.
      </p>
    </div>

    <div>
      <h2>Clases, rangos privados y consejos prácticos</h2>
      <p>
        Las etiquetas de clase sobreviven sobre todo en la documentación: clase A (<code>1–126</code>), B (<code>128–191</code>),
        C (<code>192–223</code>), D (multidifusión) y E (experimental). Lo que importa operativamente es la{' '}
        <strong>RFC 1918</strong>: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code> y{' '}
        <code>192.168.0.0/16</code> son privadas y no enrutables en internet público, así que solaparlas entre sitios
        rompe las VPN. Al planificar, deja margen de crecimiento — dividir un <code>/24</code> en dos{' '}
        <code>/25</code> más tarde es mucho más fácil que reenumerar toda una red.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Subnetting ist die Arithmetik, die jeder Netzwerkingenieur täglich durchführt: Zu einer Adresse wie{' '}
      <code>192.168.1.10/24</code> — zu welchem Netz gehört sie, wie lautet ihre Broadcast-Adresse und wie viele
      Hosts passen hinein? Dieser Rechner antwortet sofort mit Subnetzmaske, Wildcard-Maske, Netzwerk- und
      Broadcast-Adresse, nutzbarem Host-Bereich, Adressklasse und der privaten/öffentlichen RFC-1918-Klassifizierung —
      alles lokal in deinem Browser mit exakter 32-Bit-Binärarithmetik.
    </p>

    <div>
      <h2>Wie die CIDR-Mathematik funktioniert</h2>
      <p>
        Eine IPv4-Adresse ist eine 32-Bit-Zahl, und die Präfixlänge (<code>/24</code>) gibt an, wie viele führende
        Bits das Netz identifizieren. Die <strong>Subnetzmaske</strong> besteht aus genau diesen auf 1 gesetzten Bits; die{' '}
        <strong>Wildcard-Maske</strong> ist deren Umkehrung, verwendet in Cisco-ACLs und OSPF. Ein AND aus Adresse und
        Maske ergibt die <strong>Netzwerkadresse</strong>; ein OR mit der Wildcard ergibt die{' '}
        <strong>Broadcast-Adresse</strong>. Alles dazwischen — abzüglich dieser beiden reservierten Adressen — ist der
        nutzbare Host-Bereich: <code>2^(32−Präfix) − 2</code> Hosts.
      </p>
    </div>

    <div>
      <h2>Die Sonderfälle /31 und /32</h2>
      <p>
        Zwei Präfixe durchbrechen die „minus zwei“-Regel. <code>/31</code>-Verbindungen (RFC 3021) sind
        Punkt-zu-Punkt-WAN-Verbindungen ganz ohne Netzwerk- oder Broadcast-Adresse — <strong>beide</strong> Adressen
        sind nutzbar, was Adressverschwendung bei Router-zu-Router-Verbindungen halbiert. <code>/32</code> identifiziert
        genau einen Host und ist typisch für Loopback-Interfaces und Firewall-Regeln. Dieses Werkzeug behandelt beide
        Fälle korrekt, statt null nutzbare Hosts zu melden.
      </p>
    </div>

    <div>
      <h2>Klassen, private Bereiche und praktische Tipps</h2>
      <p>
        Klassenbasierte Bezeichnungen überleben meist nur in der Dokumentation: Klasse A (<code>1–126</code>), B (<code>128–191</code>),
        C (<code>192–223</code>), D (Multicast) und E (experimentell). Operativ wichtig ist <strong>RFC 1918</strong>:{' '}
        <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code> und <code>192.168.0.0/16</code> sind privat und im öffentlichen
        Internet nicht routbar, weshalb eine Überschneidung über Standorte hinweg VPNs bricht. Plane mit Wachstumsspielraum —
        ein <code>/24</code> später in zwei <code>/25</code> aufzuteilen ist weit einfacher, als ein ganzes Netz neu zu nummerieren.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function IpSubnetCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
