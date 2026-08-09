import { ToolContent } from '@/lib/content-templates'

export function IpSubnetCalculatorClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          Subnetting is the arithmetic every network engineer does daily: given an address like{' '}
          <code>192.168.1.10/24</code>, which network does it belong to, what is its broadcast address, and how many
          hosts fit inside? This calculator answers instantly with the subnet mask, wildcard mask, network and
          broadcast addresses, usable host range, address class, and RFC 1918 private/public classification — all
          computed locally in your browser with exact 32-bit binary math.
        </p>
      }
      sections={[
        {
          heading: 'How CIDR math works',
          body: (
            <p>
              An IPv4 address is a 32-bit number, and the prefix length (<code>/24</code>) says how many leading bits
              identify the network. The <strong>subnet mask</strong> is those bits set to 1; the{' '}
              <strong>wildcard mask</strong> is its inverse, used in Cisco ACLs and OSPF. AND-ing the address with the
              mask yields the <strong>network address</strong>; OR-ing with the wildcard yields the{' '}
              <strong>broadcast address</strong>. Everything between them — minus those two reserved addresses — is the
              usable host range: <code>2^(32−prefix) − 2</code> hosts.
            </p>
          ),
        },
        {
          heading: 'The /31 and /32 edge cases',
          body: (
            <p>
              Two prefixes break the &quot;minus two&quot; rule. <code>/31</code> links (RFC 3021) are point-to-point
              WAN links with no network or broadcast address at all — <strong>both</strong> addresses are usable, which
              halves address waste on router-to-router links. <code>/32</code> identifies exactly one host and is
              common for loopback interfaces and firewall rules. This tool handles both correctly instead of reporting
              zero usable hosts.
            </p>
          ),
        },
        {
          heading: 'Classes, private ranges, and practical tips',
          body: (
            <p>
              Classful labels survive mostly in documentation: class A (<code>1–126</code>), B (<code>128–191</code>),
              C (<code>192–223</code>), D (multicast), and E (experimental). What matters operationally is{' '}
              <strong>RFC 1918</strong>: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, and{' '}
              <code>192.168.0.0/16</code> are private and unroutable on the public internet, so overlapping them across
              sites breaks VPNs. When planning, leave room to grow — splitting a <code>/24</code> into two{' '}
              <code>/25</code>s later is far easier than renumbering a full network.
            </p>
          ),
        },
      ]}
    />
  )
}
