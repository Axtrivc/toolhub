'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Freelance Invoice Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
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
        optional tax percentage. The preview computes the subtotal, tax, and total automatically in USD, EUR,
        GBP, or JPY. <strong>Print / Save as PDF</strong> opens a self-contained invoice page and triggers the
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      这款<strong>自由职业发票生成器</strong>直接在你的浏览器里制作一份干净、专业的发票：填写信息、添加明细项，就能看到票据样式的预览实时更新。完成后，
      打印或保存为 PDF 即可 —— 无需账号、无需上传、无需订阅。
    </p>

    <div>
      <h2>工作原理</h2>
      <p>
        填写你的姓名或公司、客户、发票编号，以及开票日期和到期日期。按需添加任意数量的明细项 —— 每项包含<strong>描述、数量和单价</strong> —— 再加上
        可选的税率。预览会自动计算出小计、税额和总计，支持 USD、EUR、
        GBP 或 JPY 货币。<strong>打印 / 另存为 PDF</strong> 会打开一个独立的发票页面并触发
        浏览器的打印对话框（在目标中选择「另存为 PDF」），而{' '}
        <strong>下载 HTML</strong> 会把同一份发票保存为独立文件，方便你邮件发送或归档。
      </p>
    </div>

    <div>
      <h2>一份合格的发票应包含什么</h2>
      <p>
        发票越清晰，客户付款就越快。务必包含<strong>唯一的发票编号</strong>{' '}
        （按客户递增，例如 <code>INV-0042</code>）、明确的到期日期，以及条理清晰且能指明已交付工作的描述 —— 「落地页改版 —— 里程碑 2」就胜过「设计
        工作」。在备注栏填写付款条款：可接受的付款方式、滞纳金，以及你的银行账户或付款
        链接。如果你做跨境业务，请让货币与客户合同保持一致，以免因汇率
        产生纠纷。
      </p>
    </div>

    <div>
      <h2>隐私 —— 以及它的代价</h2>
      <p>
        一切都在<strong>100% 客户端</strong>运行：你的客户名称、费率和金额永远不会离开你的
        设备，因此非常适合处理敏感合同。但代价是什么都不会保存 ——{' '}
        <em>刷新页面会丢失你的工作</em>。一旦发票准备就绪，请立即
        打印或下载 HTML，并将下载的文件作为你的存档；每一份都可以在任何浏览器中离线打开。
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
        las líneas de concepto que necesites — cada una con una <strong>descripción, cantidad y tarifa unitaria</strong> — y un
        porcentaje de impuestos opcional. La vista previa calcula el subtotal, los impuestos y el total automáticamente en USD, EUR,
        GBP o JPY. <strong>Imprimir / Guardar como PDF</strong> abre una página de factura independiente y abre el
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
      <h2>Privacidad — y su contraparte</h2>
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
        optionalen Steuersatz. Die Vorschau berechnet Zwischensumme, Steuer und Gesamtbetrag automatisch in USD, EUR,
        GBP oder JPY. <strong>Drucken / Als PDF speichern</strong> öffnet eine in sich geschlossene Rechnungsseite und löst den
        Druckdialog des Browsers aus (wähle „Als PDF speichern" als Ziel), während{' '}
        <strong>HTML herunterladen</strong> dieselbe Rechnung als eigenständige Datei speichert, die du per E-Mail verschicken oder archivieren kannst.
      </p>
    </div>

    <div>
      <h2>Was eine gute Rechnung enthält</h2>
      <p>
        Kunden zahlen schneller, wenn Rechnungen eindeutig sind. Gib immer eine <strong>eindeutige Rechnungsnummer</strong>{' '}
        an (inkrementiere sie pro Kunde, z. B. <code>INV-0042</code>), ein klares Fälligkeitsdatum und detaillierte Beschreibungen,
        die die gelieferte Arbeit referenzieren — „Redesign der Landingpage — Meilenstein 2" schlägt „Design-
        Arbeit". Nutze das Notizfeld für die Zahlungsbedingungen: akzeptierte Methoden, Säumnisgebühren und deine Bank- oder Zahlungs-
        links. Wenn du über Grenzen hinweg abrechnest, wähle die Währung passend zum Vertrag des Kunden, um Streit
        über Wechselkurse zu vermeiden.
      </p>
    </div>

    <div>
      <h2>Datenschutz — und sein Kompromiss</h2>
      <p>
        Alles läuft <strong>zu 100 % clientseitig</strong>: deine Kundennamen, Sätze und Summen verlassen nie dein
        Gerät, was dies sicher für sensible Verträge macht. Die Kehrseite ist, dass nichts gespeichert wird —{' '}
        <em>ein Seitenreload verwirft deine Arbeit</em>. Drucke oder lade das HTML herunter, sobald eine Rechnung
        fertig ist, und bewahre die heruntergeladenen Dateien als deine Unterlage auf; jede davon öffnet sich offline in jedem Browser.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FreelanceInvoiceGeneratorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
