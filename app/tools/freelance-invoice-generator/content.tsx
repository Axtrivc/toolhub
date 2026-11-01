'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Freelance Invoice Generator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This <strong>freelance invoice generator</strong> builds a clean, professional invoice right in your
      browser: fill in your details, add line items, and watch the paper-style preview update live. When you are
      done, print it or save it as a PDF — no account, no upload, no subscription.
    </p>

    <div>
      <h2>How it works</h2>
      <p>
        Enter your name or company, your client, an invoice number, and the issue and due dates. Add as many
        line items as you need — each with a <strong>description, quantity, and unit rate</strong> — and an
        optional tax percentage. The preview computes the subtotal, tax, and total automatically in one of 10
        currencies — USD, EUR, GBP, JPY, CNY, CAD, AUD, CHF, INR, or KRW. <strong>Print / Save as PDF</strong>{' '}
        opens a
        self-contained invoice page and triggers the
        browser&apos;s print dialog (choose &quot;Save as PDF&quot; as the destination), while{' '}
        <strong>Download HTML</strong> saves the same invoice as a standalone file you can email or archive.
      </p>
    </div>

    <div>
      <h2>What a good invoice includes</h2>
      <p>
        Clients pay faster when invoices are unambiguous. Always include a <strong>unique invoice number</strong>{' '}
        (increment it per client, e.g. <code>INV-0042</code>), a clear due date, and itemized descriptions that
        reference the work delivered — &quot;Landing page redesign — milestone 2&quot; beats &quot;Design
        work&quot;. Use the notes field for payment terms: accepted methods, late fees, and your bank or payment
        link. If you bill across borders, match the currency to the client&apos;s contract to avoid disputes
        over exchange rates.
      </p>
    </div>

    <div>
      <h2>Privacy — and its trade-off</h2>
      <p>
        Everything runs <strong>100% client-side</strong>: your client names, rates, and totals never leave your
        device, which makes this safe for sensitive contracts. The flip side is that nothing is saved —{' '}
        <em>refreshing the page discards your work</em>. Print or download the HTML as soon as an invoice is
        ready, and keep the downloaded files as your record; each one opens offline in any browser.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Este <strong>generador de facturas para freelancers</strong> crea una factura limpia y profesional directamente en tu
      navegador: rellena tus datos, añade líneas de concepto y observa cómo la vista previa con aspecto de papel se actualiza al momento. Cuando termines,
      imprímela o guárdala como PDF — sin cuenta, sin subidas, sin suscripción.
    </p>

    <div>
      <h2>Cómo funciona</h2>
      <p>
        Introduce tu nombre o empresa, tu cliente, un número de factura y las fechas de emisión y de vencimiento. Añade todas
        las líneas de concepto que necesites — cada una con una <strong>descripción, cantidad y precio unitario</strong> — y un
        porcentaje de impuestos opcional. La vista previa calcula el subtotal, los impuestos y el total automáticamente en una de
        10 monedas: USD, EUR, GBP, JPY, CNY, CAD, AUD, CHF, INR o KRW. <strong>Imprimir / Guardar como PDF</strong> abre una página
        de factura independiente y activa el
        diálogo de impresión del navegador (elige «Guardar como PDF» como destino), mientras que{' '}
        <strong>Descargar HTML</strong> guarda la misma factura como un archivo independiente que puedes enviar por correo o archivar.
      </p>
    </div>

    <div>
      <h2>Qué debe incluir una buena factura</h2>
      <p>
        Los clientes pagan antes cuando las facturas no dejan dudas. Incluye siempre un <strong>número de factura único</strong>{' '}
        (incrémentalo por cliente, p. ej. <code>INV-0042</code>), una fecha de vencimiento clara y descripciones detalladas que
        referencien el trabajo entregado — «Rediseño de landing page — hito 2» vale más que «Trabajo
        de diseño». Usa el campo de notas para las condiciones de pago: métodos aceptados, recargos por retraso y tu banco o enlace de
        pago. Si facturas entre países, haz que la moneda coincida con el contrato del cliente para evitar disputas
        por el tipo de cambio.
      </p>
    </div>

    <div>
      <h2>Privacidad — y su contrapartida</h2>
      <p>
        Todo se ejecuta <strong>100 % en el lado del cliente</strong>: los nombres de tus clientes, las tarifas y los totales nunca salen de tu
        dispositivo, lo cual hace que esto sea seguro para contratos sensibles. El reverso de la moneda es que no se guarda nada —{' '}
        <em>recargar la página descarta tu trabajo</em>. Imprime o descarga el HTML en cuanto una factura
        esté lista, y conserva los archivos descargados como tu registro; cada uno se abre sin conexión en cualquier navegador.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser <strong>Rechnungsgenerator für Freelancer</strong> erstellt direkt in deinem
      Browser eine saubere, professionelle Rechnung: Gib deine Daten ein, füge Positionen hinzu und sieh zu, wie die papierähnliche Vorschau live aktualisiert wird. Wenn du fertig bist,
      drucke sie oder speichere sie als PDF — ohne Konto, ohne Upload, ohne Abo.
    </p>

    <div>
      <h2>So funktioniert es</h2>
      <p>
        Gib deinen Namen oder dein Unternehmen, deinen Kunden, eine Rechnungsnummer sowie das Rechnungs- und Fälligkeitsdatum ein. Füge so viele
        Positionen hinzu, wie du brauchst — jede mit einer <strong>Beschreibung, Menge und Einheitspreis</strong> — und einem
        optionalen Steuersatz. Die Vorschau berechnet Zwischensumme, Steuer und Gesamtbetrag automatisch in einer von
        10 Währungen: USD, EUR, GBP, JPY, CNY, CAD, AUD, CHF, INR oder KRW. <strong>Drucken / Als PDF speichern</strong> öffnet eine in
        sich geschlossene Rechnungsseite und löst den
        Druckdialog des Browsers aus (wähle „Als PDF speichern“ als Ziel), während{' '}
        <strong>HTML herunterladen</strong> dieselbe Rechnung als eigenständige Datei speichert, die du per E-Mail verschicken oder archivieren kannst.
      </p>
    </div>

    <div>
      <h2>Was eine gute Rechnung enthält</h2>
      <p>
        Kunden zahlen schneller, wenn Rechnungen eindeutig sind. Gib immer eine <strong>eindeutige Rechnungsnummer</strong>{' '}
        an (inkrementiere sie pro Kunde, z. B. <code>INV-0042</code>), ein klares Fälligkeitsdatum und detaillierte Beschreibungen,
        die die gelieferte Arbeit referenzieren — „Redesign der Landingpage — Meilenstein 2“ schlägt „Design-Arbeit“. Nutze das Notizfeld für die Zahlungsbedingungen: akzeptierte Zahlungsmethoden, Verzugsgebühren sowie deine Bankverbindung oder deinen Zahlungslink. Wenn du grenzüberschreitend abrechnest, wähle die Währung passend zum Vertrag des Kunden, um Streit
        über Wechselkurse zu vermeiden.
      </p>
    </div>

    <div>
      <h2>Datenschutz — und der Preis dafür</h2>
      <p>
        Alles läuft <strong>zu 100 % clientseitig</strong>: deine Kundennamen, Preise und Summen verlassen nie dein
        Gerät, was dies sicher für sensible Verträge macht. Die Kehrseite ist, dass nichts gespeichert wird —{' '}
        <em>ein Seitenreload verwirft deine Arbeit</em>. Drucke oder lade das HTML herunter, sobald eine Rechnung
        fertig ist, und bewahre die heruntergeladenen Dateien als deine Unterlagen auf; jede davon lässt sich offline in jedem Browser öffnen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function FreelanceInvoiceGeneratorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
