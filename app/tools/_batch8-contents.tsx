import type { ReactNode } from 'react'
import { ToolContent } from '@/lib/content-templates'

/** 第八批 17 个工具内容 */

export function APYCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>APY</strong> (Annual Percentage Yield) is the real return on savings accounting for compounding. APR is the simple rate; APY is what you actually earn when interest compounds more than once a year.</p>}
      sections={[
        { heading: 'APR vs APY', body: <p>On a 5% APR savings account: compounding monthly gives APY of 5.116%; compounding daily gives 5.127%. The more frequent the compounding, the higher the APY — and the bigger the gap between APR and APY.</p> },
        { heading: 'The Formula', body: <p>APY = (1 + APR/n)ⁿ − 1, where n is compounding periods per year. This tool computes it for any frequency.</p> },
        { heading: 'What to Look For', body: <ul>
          <li>High-yield savings accounts quote APY (looks better than APR)</li>
          <li>Credit cards and loans quote APR (looks lower than APY)</li>
          <li>Always compare the same metric when shopping rates</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why do banks show APY but lenders show APR?', a: 'Marketing. APY makes savings look bigger; APR makes loans look cheaper. Always read the fine print to know which metric is being quoted.' }]}
    />
  )
}

export function CreditCardMinimumPaymentCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Minimum payments are calculated as a small percentage of your balance (usually 1-3%) plus any interest — which means most of your payment goes to interest, not principal. This calculator shows the brutal math.</p>}
      sections={[
        { heading: 'The Minimum Payment Trap', body: <p>On a $5,000 balance at 20% APR, the minimum payment is around $100. Of that, about $83 is interest — only $17 reduces your debt. At this rate, full repayment takes decades.</p> },
        { heading: 'Always Pay More Than Minimum', body: <ul>
          <li>Pay $200/month instead of $100 → payoff in ~2.5 years instead of 30+</li>
          <li>Pay $500/month → payoff in about 1 year</li>
          <li>Every extra dollar above the minimum goes 100% to principal</li>
        </ul> },
      ]}
      faqs={[{ q: 'How do credit card companies calculate minimum?', a: 'Usually 1-3% of balance plus interest and fees, with a floor around $25-35. Read your cardholder agreement for the exact formula.' }]}
    />
  )
}

export function CashBackCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Cash back credit cards give you a percentage of spending back as rewards. This calculator shows the true annual value — accounting for any annual fee — so you can compare cards honestly.</p>}
      sections={[
        { heading: 'When Annual Fees Are Worth It', body: <p>A card with a $95 annual fee and 2% back beats a no-fee 1.5% card only if you spend more than $19,000/year. Below that, the no-fee card wins. Do the math before paying a fee.</p> },
        { heading: 'Common Card Categories', body: <ul>
          <li><strong>Flat-rate:</strong> 1.5-2% on everything (simple)</li>
          <li><strong>Tiered:</strong> 3-5% on groceries/gas, 1% on others</li>
          <li><strong>Rotating:</strong> 5% on categories that change quarterly</li>
          <li><strong>Travel:</strong> Points worth ~1-2¢ each when redeemed for travel</li>
        </ul> },
      ]}
      faqs={[{ q: 'Points vs cash back?', a: 'Cash back is simpler and guaranteed value. Points can be worth more if redeemed for travel (especially business/first class), but require more effort and have variable value.' }]}
    />
  )
}

export function DownPaymentCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>The <strong>down payment</strong> is the upfront cash you pay toward a home; the rest becomes your mortgage. This calculator shows the dollar amount and whether you&apos;ll need PMI.</p>}
      sections={[
        { heading: 'The 20% Threshold', body: <p>Putting down 20% or more means avoiding <strong>PMI</strong> (Private Mortgage Insurance), which typically costs $50-300/month. On a $400,000 home, that&apos;s $80,000 down to avoid PMI entirely.</p> },
        { heading: 'Lower Down Payment Options', body: <ul>
          <li><strong>Conventional:</strong> As low as 3% down (with PMI)</li>
          <li><strong>FHA loans:</strong> 3.5% down (first-time buyers)</li>
          <li><strong>VA/USDA:</strong> 0% down (qualified buyers)</li>
        </ul> },
        { heading: 'Don\'t Empty Your Savings', body: <p>Bigger down payments mean smaller loans and no PMI — but don&apos;t drain your emergency fund to get there. Lenders want to see reserves after closing.</p> },
      ]}
      faqs={[{ q: 'When does PMI go away?', a: 'For conventional loans, PMI cancels automatically at 78% loan-to-value, or you can request removal at 80%. FHA loans (post-2013) require PMI for the life of the loan unless refinanced.' }]}
    />
  )
}

export function DTICalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>DTI</strong> (Debt-to-Income ratio) compares your monthly debt payments to your gross income. Lenders use it as a key factor in approving mortgages, car loans, and credit cards.</p>}
      sections={[
        { heading: 'Lender DTI Thresholds', body: <ul>
          <li><strong>Below 36%:</strong> Healthy — most loan types approve easily</li>
          <li><strong>36-43%:</strong> Tight — many lenders cap at 43% for mortgages</li>
          <li><strong>Above 43%:</strong> High — most lenders deny; consider paying down debt first</li>
        </ul> },
        { heading: 'The 28/36 Rule', body: <p>A classic guideline: housing payment should be ≤28% of gross income; total debts (including housing) ≤36%. Many conventional mortgages allow up to 43-50% on the back end with strong credit.</p> },
        { heading: 'What Counts as Debt', body: <ul>
          <li>Mortgage or rent (proposed housing for new loans)</li>
          <li>Minimum credit card payments</li>
          <li>Auto, student, and personal loans</li>
          <li>Child support, alimony</li>
        </ul> },
      ]}
      faqs={[{ q: 'How can I lower my DTI?', a: 'Pay down existing debt (especially high-interest), increase income, or avoid new debt before applying. Paying off a credit card can drop your DTI within a billing cycle.' }]}
    />
  )
}

export function CommissionCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This calculator figures out commission earnings from sales totals. Common for real estate agents, car salespeople, brokers, and software sales reps.</p>}
      sections={[
        { heading: 'Typical Commission Rates', body: <ul>
          <li><strong>Real estate:</strong> 2.5-3% per side (5-6% total, split between buyer/seller agents)</li>
          <li><strong>Car sales:</strong> 20-30% of dealership profit (not sticker price)</li>
          <li><strong>Tech sales:</strong> 5-15% of contract value (SaaS, enterprise)</li>
          <li><strong>Insurance:</strong> 5-15% of premium, often with renewal commissions</li>
        </ul> },
      ]}
      faqs={[{ q: 'How do real estate commissions work?', a: 'A 6% total commission is typical, split between buyer\'s agent (3%) and seller\'s agent (3%). Each agent then shares with their brokerage — often 50/50 for new agents, more favorable for experienced ones.' }]}
    />
  )
}

export function AgeDifferenceCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool calculates the age gap between two people from their birth years. Useful for relationships, family history, and trivia.</p>}
      sections={[
        { heading: 'Common Uses', body: <ul>
          <li>Relationship age gaps</li>
          <li>Sibling age differences</li>
          <li>Historical figure comparisons</li>
          <li>Family tree research</li>
        </ul> },
      ]}
      faqs={[{ q: 'What\'s the "half your age plus seven" rule?', a: 'A common social guideline for minimum acceptable dating age: half your age plus 7. For a 30-year-old: 22. It\'s just a cultural heuristic, not a rule.' }]}
    />
  )
}

export function GradeCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Convert points earned into a percentage and letter grade. Standard US letter grade scale (A-F).</p>}
      sections={[
        { heading: 'Standard Letter Grades', body: <ul>
          <li>A: 90-100%</li>
          <li>B: 80-89%</li>
          <li>C: 70-79%</li>
          <li>D: 60-69%</li>
          <li>F: below 60%</li>
        </ul> },
      ]}
      faqs={[{ q: 'What about +/- grades?', a: 'Many schools use finer divisions (A-, B+, etc.). This tool uses the basic 5-tier scale. Check your school\'s specific thresholds for plus/minus grades.' }]}
    />
  )
}

export function FinalGradeCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This calculator answers the classic student question: &quot;What do I need on the final to get an A?&quot; Enter your current grade, target grade, and final exam weight to see the required score.</p>}
      sections={[
        { heading: 'How It Works', body: <p>Solves for the final exam score using the weighted average formula: <code>target = current × (1 − w) + final × w</code>. Rearranging: <code>final = (target − current(1−w)) / w</code>.</p> },
        { heading: 'When It\'s Impossible', body: <p>If the required final score is over 100%, your target is unreachable — even a perfect final won&apos;t get you there. The tool will warn you in this case.</p> },
      ]}
      faqs={[{ q: 'My final is cumulative — does this still work?', a: 'Yes — the formula works for any final exam. The "weight" is just how much the final counts toward your total grade, regardless of what it covers.' }]}
    />
  )
}

export function BillSplitCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Split a bill evenly among any number of people, with tip included. For group dinners, shared expenses, and joint purchases.</p>}
      sections={[
        { heading: 'Even vs Itemized Splitting', body: <p>This tool splits evenly — everyone pays the same. For itemized splitting (where each person pays for what they ordered), use a dedicated app or calculate per-person totals separately.</p> },
        { heading: 'Tip Etiquette for Groups', body: <ul>
          <li>Large groups (6+): Many restaurants auto-add 18% gratuity</li>
          <li>Always check the bill before adding extra tip</li>
          <li>Split apps/mains are shared by all; drinks usually tracked per person</li>
        </ul> },
      ]}
      faqs={[{ q: 'How do we handle someone who didn\'t drink?', a: 'Itemize those parts separately. Subtract the alcohol cost from the total, divide that among drinkers, and split the food evenly.' }]}
    />
  )
}

export function TrapezoidCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>A <strong>trapezoid</strong> has two parallel sides (the bases). This calculator finds the area from the lengths of those sides and the perpendicular height.</p>}
      sections={[
        { heading: 'The Formula', body: <p>Area = ((a + b) / 2) × h, where a and b are the parallel sides and h is the perpendicular distance between them.</p> },
        { heading: 'Real-World Uses', body: <ul>
          <li>Irregular lots in real estate</li>
          <li>Trapezoidal windows and architectural features</li>
          <li>Calculating volumes of ditches and embankments</li>
          <li>Graphics and design work</li>
        </ul> },
      ]}
      faqs={[{ q: 'What if my sides aren\'t parallel?', a: 'Then it\'s not a trapezoid — it\'s an irregular quadrilateral. You\'ll need more measurements or different formulas (like dividing into triangles).' }]}
    />
  )
}

export function CubeCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Calculate cube volume and surface area from the side length.</p>}
      sections={[
        { heading: 'The Formulas', body: <ul>
          <li>Volume = s³ (side cubed)</li>
          <li>Surface area = 6s² (6 square faces)</li>
        </ul> },
        { heading: 'Everyday Cubes', body: <ul>
          <li>Dice (16mm side, ~4 cm³ volume)</li>
          <li>Rubik&apos;s Cube (57mm side, ~185 cm³)</li>
          <li>Shipping boxes (often near-cubic for efficiency)</li>
          <li>Sugar cubes (16mm side)</li>
        </ul> },
      ]}
      faqs={[{ q: 'How is a cube different from a square?', a: 'A square is 2D (flat); a cube is 3D. Squares have area; cubes have volume and surface area. A cube is made of 6 identical squares.' }]}
    />
  )
}

export function SphereCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Calculate sphere volume and surface area from the radius.</p>}
      sections={[
        { heading: 'The Formulas', body: <ul>
          <li>Volume = ⁴⁄₃ π r³</li>
          <li>Surface area = 4 π r²</li>
        </ul> },
        { heading: 'Real Spheres', body: <ul>
          <li>Basketball: r ≈ 12 cm, volume ≈ 7,238 cm³</li>
          <li>Soccer ball: r ≈ 11 cm</li>
          <li>Tennis ball: r ≈ 3.3 cm</li>
          <li>Earth (slightly oblate): r ≈ 6,371 km</li>
        </ul> },
        { heading: 'The Volume-to-Surface Ratio', body: <p>Of all 3D shapes, the sphere has the smallest surface area for a given volume. That&apos;s why bubbles, droplets, and planets are spherical — surface tension and gravity minimize surface energy.</p> },
      ]}
      faqs={[{ q: 'Why are planets and stars spheres?', a: 'Gravity pulls equally in all directions, so material settles into the shape with the lowest potential energy — a sphere. Large moons and planets are round; small asteroids aren\'t, because their gravity is too weak to overcome material strength.' }]}
    />
  )
}

export function HashGeneratorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>A <strong>hash function</strong> turns any input into a fixed-length fingerprint. The same input always produces the same hash; even tiny input changes produce totally different hashes. This tool generates SHA-256 and SHA-1 using your browser&apos;s SubtleCrypto API.</p>}
      sections={[
        { heading: 'What Hashes Are Used For', body: <ul>
          <li><strong>Verifying file integrity</strong> — download a file, hash it, compare to published hash</li>
          <li><strong>Password storage</strong> — sites store hashes, not plaintext passwords</li>
          <li><strong>Digital signatures</strong> — sign a hash, not the whole document</li>
          <li><strong>Blockchain</strong> — Bitcoin uses SHA-256 for proof-of-work</li>
          <li><strong>Content addressing</strong> — IPFS uses hashes as addresses</li>
        </ul> },
        { heading: 'Why SHA-256, Not MD5', body: <p>MD5 and SHA-1 are cryptographically broken — collisions (two inputs with the same hash) can be found. SHA-256 is still secure as of 2026. For anything security-critical, use SHA-256 or stronger.</p> },
        { heading: 'Hashes Are One-Way', body: <p>You can hash &quot;hello&quot; into a SHA-256, but you cannot reverse the hash back to &quot;hello&quot; (without brute force). This one-way property is what makes hashes useful for passwords — even if a database leaks, attackers only get hashes.</p> },
      ]}
      faqs={[{ q: 'Can a hash be decrypted?', a: 'No — by design. Hashes are one-way functions. The only way to "crack" a hash is to try inputs until one matches (brute force). For SHA-256, this is computationally infeasible for any reasonable-length input.' }]}
    />
  )
}

export function SlugToTitleContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool reverses a URL slug back into a readable title. Hyphens and underscores become spaces; each word is capitalized.</p>}
      sections={[
        { heading: 'Common Uses', body: <ul>
          <li>Importing old blog posts and recovering titles from URLs</li>
          <li>Cleaning up exported CMS data</li>
          <li>Generating human-readable names from machine-formatted strings</li>
        </ul> },
      ]}
      faqs={[{ q: 'Will this recover original capitalization?', a: 'No — slugs are usually lowercased, so original capitals are lost. This tool applies Title Case, which works well for most uses but won\'t recover names like "iPhone" or "McDonald".' }]}
    />
  )
}

export function BinaryToTextContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool decodes binary (1s and 0s) back into readable text. Each group of 8 bits represents one character in ASCII/UTF-8.</p>}
      sections={[
        { heading: 'How Binary Encoding Works', body: <p>Computers store everything as bits — 0s and 1s. Text characters are assigned numeric codes (ASCII): &apos;H&apos; is 72, which is 01001000 in binary. Eight bits = one byte = one character.</p> },
        { heading: 'Common Binary Patterns', body: <ul>
          <li>01001000 01101001 = &quot;Hi&quot;</li>
          <li>01000001 = &quot;A&quot; (capital)</li>
          <li>01100001 = &quot;a&quot; (lowercase)</li>
          <li>00110000 = &quot;0&quot; (digit zero)</li>
        </ul> },
      ]}
      faqs={[{ q: 'Does this handle UTF-8 / Unicode?', a: 'This tool decodes each 8-bit group as a single character (ASCII range 0-127). Multi-byte UTF-8 characters (like emoji) would need each byte separated and decoded as a sequence — this tool does not handle that.' }]}
    />
  )
}

export function TextToBinaryContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool encodes text as binary — each character becomes 8 bits (1s and 0s). Useful for learning how computers represent text, or for low-level data inspection.</p>}
      sections={[
        { heading: 'ASCII Reference', body: <ul>
          <li>A-Z: 65-90 (01000001-01011010)</li>
          <li>a-z: 97-122 (01100001-01111010)</li>
          <li>0-9: 48-57 (00110000-00111001)</li>
          <li>Space: 32 (00100000)</li>
        </ul> },
        { heading: 'When You\'ll Need This', body: <ul>
          <li>Computer science homework</li>
          <li>Understanding how text is stored</li>
          <li>Debugging low-level data formats</li>
          <li>Creating binary-themed art or messages</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why 8 bits per character?', a: '8 bits (one byte) can represent 256 distinct values (0-255). This is enough for English text, common symbols, and control characters in ASCII/extended ASCII. UTF-8 uses 1-4 bytes per character for full Unicode support.' }]}
    />
  )
}
