import { ToolContent } from '@/lib/content-templates'

export function IpCheckerContent() {
  return (
    <ToolContent
      intro={
        <p>
          This IP quality inspector grades any IP address the way anti-fraud systems do — resolving its{' '}
          <strong>ASN and ownership</strong>, classifying it as <strong>residential ISP or datacenter (IDC)</strong>,
          computing a <strong>0–100 fraud score</strong>, and cross-checking consistency signals like your browser
          timezone versus the IP&apos;s geolocation. Everything runs in your browser against free, CORS-enabled
          endpoints (Cloudflare trace, ipwho.is, ipapi.co, and Cloudflare DNS-over-HTTPS); no lookup ever touches a
          server we control.
        </p>
      }
      sections={[
        {
          heading: 'What the fraud score actually measures',
          body: (
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
          ),
        },
        {
          heading: 'Why platforms care about residential vs datacenter IPs',
          body: (
            <p>
              TikTok, Amazon, Meta, and AI providers like OpenAI all score inbound IPs. <strong>Residential
              ISP</strong> addresses map to real households and pass most checks, while <strong>datacenter</strong>{' '}
              ranges are sold in bulk and heavily abused for automation — so accounts on IDC IPs get throttled,
              challenged, or banned. The use-case rating matrix in the tool translates the inspection result into
              per-platform star ratings so you can see at a glance whether an exit node is suitable for video
              outreach, cross-border e-commerce, social media operations, or AI services.
            </p>
          ),
        },
        {
          heading: 'Querying custom IPs and domains',
          body: (
            <p>
              Paste any IPv4/IPv6 address or domain into the query box. Domains are first resolved through
              Cloudflare&apos;s DNS-over-HTTPS resolver, then geolocated; reverse DNS (PTR) is looked up the same
              way. The latency probe measures real HTTP round-trips from your current connection to AWS edge
              regions in US West, US East, Tokyo, Singapore, and Frankfurt using <code>performance.now()</code>{' '}
              timing.
            </p>
          ),
        },
      ]}
    />
  )
}
