import { ToolContent } from '@/lib/content-templates'

export function EbayFeeCalculatorClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          This <strong>seller fee calculator</strong> shows what eBay or Etsy actually takes from a sale — and what
          you keep. Enter your sold price, shipping, and costs to see total fees, net payout, net profit, profit
          margin, and the break-even price. Everything runs locally in your browser; no sale data is ever uploaded.
        </p>
      }
      sections={[
        {
          heading: 'How the fees are calculated',
          body: (
            <p>
              Both platforms charge their percentage on the <strong>total sale amount</strong> — item price{' '}
              <em>plus</em> shipping charged to the buyer. For eBay that means the final value fee
              (<code>13.6%</code> for most categories) plus a <code>$0.30</code> per-order fee, and an optional
              Promoted Listings ad rate if you advertise. For Etsy it is a <code>$0.20</code> listing fee, a{' '}
              <code>6.5%</code> transaction fee, and payment processing (US preset: <code>3% + $0.25</code>). The
              advanced toggle lets you override the percentage when your category or region differs.
            </p>
          ),
        },
        {
          heading: 'Understanding the outputs',
          body: (
            <p>
              <strong>Net payout</strong> is the sale total minus platform fees — what actually reaches your account.{' '}
              <strong>Net profit</strong> subtracts your item cost and your real shipping cost from the payout; if it
              goes negative you are paying to sell. <strong>Break-even sale price</strong> solves the fee formula
              backwards to find the minimum price that covers all costs — use it as a floor when deciding whether to
              accept an offer or run a discount.
            </p>
          ),
        },
        {
          heading: 'Pricing tips for sellers',
          body: (
            <p>
              Free shipping is never free: since fees apply to the shipping you charge, rolling shipping into the item
              price changes nothing in fees but can improve search placement. Watch the ad rate — a 10% Promoted
              Listings campaign can quietly double your effective fee. And remember these are approximations as of
              2025: store subscriptions, top-rated discounts, international sales, and category-specific rates all
              change the math, so verify against the platform&apos;s current fee schedule before committing to a
              price.
            </p>
          ),
        },
      ]}
    />
  )
}
