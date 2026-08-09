import { ToolContent } from '@/lib/content-templates'

export function FreelanceInvoiceGeneratorClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          This <strong>freelance invoice generator</strong> builds a clean, professional invoice right in your
          browser: fill in your details, add line items, and watch the paper-style preview update live. When you are
          done, print it or save it as a PDF — no account, no upload, no subscription.
        </p>
      }
      sections={[
        {
          heading: 'How it works',
          body: (
            <p>
              Enter your name or company, your client, an invoice number, and the issue and due dates. Add as many
              line items as you need — each with a <strong>description, quantity, and unit rate</strong> — and an
              optional tax percentage. The preview computes the subtotal, tax, and total automatically in USD, EUR,
              GBP, or JPY. <strong>Print / Save as PDF</strong> opens a self-contained invoice page and triggers the
              browser&apos;s print dialog (choose &quot;Save as PDF&quot; as the destination), while{' '}
              <strong>Download HTML</strong> saves the same invoice as a standalone file you can email or archive.
            </p>
          ),
        },
        {
          heading: 'What a good invoice includes',
          body: (
            <p>
              Clients pay faster when invoices are unambiguous. Always include a <strong>unique invoice number</strong>{' '}
              (increment it per client, e.g. <code>INV-0042</code>), a clear due date, and itemized descriptions that
              reference the work delivered — &quot;Landing page redesign — milestone 2&quot; beats &quot;Design
              work&quot;. Use the notes field for payment terms: accepted methods, late fees, and your bank or payment
              link. If you bill across borders, match the currency to the client&apos;s contract to avoid disputes
              over exchange rates.
            </p>
          ),
        },
        {
          heading: 'Privacy — and its trade-off',
          body: (
            <p>
              Everything runs <strong>100% client-side</strong>: your client names, rates, and totals never leave your
              device, which makes this safe for sensitive contracts. The flip side is that nothing is saved —{' '}
              <em>refreshing the page discards your work</em>. Print or download the HTML as soon as an invoice is
              ready, and keep the downloaded files as your record; each one opens offline in any browser.
            </p>
          ),
        },
      ]}
    />
  )
}
