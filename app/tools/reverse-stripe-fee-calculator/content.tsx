import { ToolContent } from '@/lib/content-templates'

export function ReverseStripeFeeCalculatorClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          This <strong>payment fee calculator</strong> works in both directions: see what a Stripe or PayPal charge
          actually nets you, or work backwards from the amount you need to receive and find the price you must charge.
          Presets cover common Stripe and PayPal rates, and a custom mode accepts any percentage + fixed fee. All math
          happens locally in your browser.
        </p>
      }
      sections={[
        {
          heading: 'Forward vs. reverse mode',
          body: (
            <p>
              In <strong>forward mode</strong> you enter what you charge and get the fee, the net payout, and the{' '}
              <em>effective fee rate</em> — which is always higher than the headline percentage on small transactions
              because of the fixed <code>$0.30</code>. In <strong>reverse mode</strong> you enter what you need to
              receive and the tool solves <code>charge = (net + fixed) / (1 − pct)</code>, then verifies the result
              with a net-check card. Use reverse mode when quoting clients so the fee does not eat into your rate.
            </p>
          ),
        },
        {
          heading: 'Which preset should I pick?',
          body: (
            <p>
              <strong>Stripe US online</strong> (2.9% + $0.30) covers standard domestic card charges. Add the{' '}
              <strong>international card</strong> preset (+1.5%) when the buyer&apos;s card was issued outside the US,
              and the <strong>currency conversion</strong> preset (+1% more) when you also charge in a foreign
              currency. <strong>PayPal US</strong> uses 3.49% + $0.49. If your plan differs — volume discounts,
              non-profit rates, micropayments — switch to <strong>Custom</strong> and type your exact numbers.
            </p>
          ),
        },
        {
          heading: 'Before you pass fees to customers',
          body: (
            <p>
              Surcharging is <em>regulated</em>: some US states and countries restrict or ban it, and card networks
              impose caps and disclosure rules. A common alternative is raising your base price and offering a
              cash/ACH discount instead. Rates shown here are approximations as of 2025 — confirm against your actual
              Stripe or PayPal agreement, since pricing changes and negotiated rates are common.
            </p>
          ),
        },
      ]}
    />
  )
}
