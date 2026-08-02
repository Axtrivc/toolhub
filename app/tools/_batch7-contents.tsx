import type { ReactNode } from 'react'
import { ToolContent } from '@/lib/content-templates'

/** 第七批 16 个工具内容 */

export function ScientificNotationConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>Scientific notation</strong> expresses very large or small numbers as a mantissa times a power of 10 — like 6.022 × 10²³ for Avogadro&apos;s number, or 1.6 × 10⁻¹⁹ for an electron&apos;s charge. This tool converts to scientific, E-, and engineering notation.</p>}
      sections={[
        { heading: 'Three Notations', body: <ul>
          <li><strong>Scientific:</strong> a × 10ⁿ (mantissa between 1 and 10)</li>
          <li><strong>E-notation:</strong> ae±n (programming style: 6.022e23)</li>
          <li><strong>Engineering:</strong> exponent is a multiple of 3 (matches SI prefixes: kilo, mega, giga)</li>
        </ul> },
        { heading: 'When You\'ll Use It', body: <ul>
          <li>Physics and chemistry homework</li>
          <li>Programming with very large/small numbers</li>
          <li>Reading scientific papers</li>
          <li>Engineering and electronics</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why use engineering notation?', a: 'The exponent is always a multiple of 3, so it maps cleanly to SI prefixes (kilo = 10³, mega = 10⁶, giga = 10⁹). Engineers prefer 12.3 × 10⁶ over 1.23 × 10⁷.' }]}
    />
  )
}

export function PrimeNumberCheckerContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>A <strong>prime number</strong> is divisible only by 1 and itself — like 2, 3, 5, 7, 11. This tool checks any number for primality and finds the next and previous primes.</p>}
      sections={[
        { heading: 'Why Primes Matter', body: <ul>
          <li><strong>Cryptography:</strong> RSA encryption relies on the difficulty of factoring large primes</li>
          <li><strong>Hash tables:</strong> Prime-sized buckets reduce collisions</li>
          <li><strong>Number theory:</strong> The Fundamental Theorem of Arithmetic</li>
          <li><strong>Random number generators:</strong> Often use primes</li>
        </ul> },
        { heading: 'Interesting Prime Facts', body: <ul>
          <li>2 is the only even prime</li>
          <li>There are infinitely many primes (Euclid proved this ~300 BC)</li>
          <li>The largest known prime has over 24 million digits</li>
          <li>Primes become less common as numbers get larger, but never run out</li>
        </ul> },
      ]}
      faqs={[{ q: 'Is 1 a prime?', a: 'No. By modern definition, primes have exactly two distinct divisors (1 and itself). 1 has only one divisor, so it\'s excluded. This keeps the Fundamental Theorem of Arithmetic (unique factorization) clean.' }]}
    />
  )
}

export function PrimeFactorizationCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>Prime factorization</strong> breaks a number into its prime building blocks. Every integer greater than 1 has exactly one unique prime factorization — this is the Fundamental Theorem of Arithmetic.</p>}
      sections={[
        { heading: 'How It Works', body: <p>This tool divides out primes one by one, starting from 2. For example: <code>360 = 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5</code>.</p> },
        { heading: 'Uses', body: <ul>
          <li><strong>Simplifying fractions:</strong> GCD comes from common prime factors</li>
          <li><strong>Cryptography:</strong> RSA keys depend on factorization difficulty</li>
          <li><strong>Math homework:</strong> LCM, GCD, simplifying radicals</li>
          <li><strong>Music theory:</strong> Just intonation uses prime ratios</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why is factoring hard for large numbers?', a: 'For small numbers it\'s easy, but for products of two large primes, no fast algorithm is known. This asymmetry — easy to multiply, hard to factor — is what makes RSA encryption secure.' }]}
    />
  )
}

export function CombinationCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>A <strong>combination</strong> counts how many ways to choose r items from n, where order doesn&apos;t matter. Choosing 3 toppings from 10 is the same no matter which order you pick them — that&apos;s a combination.</p>}
      sections={[
        { heading: 'The Formula', body: <p>C(n,r) = n! / (r! × (n−r)!). For choosing 3 from 10: <code>10! / (3! × 7!) = 120</code>.</p> },
        { heading: 'Common Uses', body: <ul>
          <li><strong>Lottery odds:</strong> Picking 6 from 49 = C(49,6) = 13,983,816</li>
          <li><strong>Card games:</strong> A 5-card poker hand = C(52,5) = 2,598,960</li>
          <li><strong>Team selection:</strong> Picking a 3-person committee from 10</li>
          <li><strong>Inventory sampling:</strong> Quality control</li>
        </ul> },
      ]}
      faqs={[{ q: 'Combination vs permutation?', a: 'In combinations, order doesn\'t matter (a salad of {lettuce, tomato} equals {tomato, lettuce}). In permutations, order matters (a password "abc" differs from "cba"). Use the Permutation Calculator for ordered arrangements.' }]}
    />
  )
}

export function PermutationCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>A <strong>permutation</strong> counts how many ways to arrange r items from n, where order matters. Arranging 3 books on a shelf from 5 is different based on which order — that&apos;s a permutation.</p>}
      sections={[
        { heading: 'The Formula', body: <p>P(n,r) = n! / (n−r)!. For arranging 3 from 5: <code>5! / 2! = 60</code>.</p> },
        { heading: 'Common Uses', body: <ul>
          <li><strong>Passwords:</strong> 4-digit PIN = 10⁴ permutations</li>
          <li><strong>Race results:</strong> Top 3 from 8 runners (ordered)</li>
          <li><strong>Seating arrangements:</strong> Who sits where at a table</li>
          <li><strong>Code generation:</strong> Counting possible IDs</li>
        </ul> },
      ]}
      faqs={[{ q: 'When is P(n,r) = n!?', a: 'When r = n — you\'re arranging ALL items. The number of ways to arrange n distinct items is n! (n factorial). For 5 books on a shelf: 5! = 120 arrangements.' }]}
    />
  )
}

export function MassConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <>
          <p>This tool converts between precise mass units — including carats (for gemstones and jewelry) and grains (for ammunition and historical medicine doses). Different from weight, which is technically a force.</p>
          <p>
            <strong>Note:</strong> mass and weight share the same converter below — every unit (metric, imperial, carats, grains) is available in one place. For everyday body-weight conversions (kg ↔ lb), our{' '}
            <a href="/tools/weight-converter/" className="text-brand-600 underline">Weight Converter</a>{' '}
            shows the same tool. Switch any unit freely.
          </p>
        </>
      }
      sections={[
        { heading: 'Key Conversions', body: <ul>
          <li>1 carat = 200 mg = 0.2 g (standard for diamonds and gems)</li>
          <li>1 grain = 64.7989 mg (used in bullets and old pharmacy doses)</li>
          <li>1 gram = 5 carats = 15.4324 grains</li>
        </ul> },
        { heading: 'Why So Many Units', body: <p>Different fields standardized on different bases historically. Jewelers use carats, ammo reloaders use grains, scientists use grams. This tool unifies them.</p> },
      ]}
      faqs={[{ q: 'Carat vs. karat?', a: 'Carat (ct) measures gemstone mass = 200 mg. Karat (K) measures gold purity — 24K is pure gold. Same word origin, different meanings today.' }]}
    />
  )
}

export function DensityConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>Density</strong> measures how much mass fits in a given volume (mass ÷ volume). Water has a density of 1 g/cm³; gold is 19.3 g/cm³; air is just 0.0012 g/cm³.</p>}
      sections={[
        { heading: 'Reference Densities', body: <ul>
          <li>Water (4°C): 1000 kg/m³ = 1 g/cm³</li>
          <li>Ice: 917 kg/m³ (floats on water — that&apos;s unusual)</li>
          <li>Gold: 19,320 kg/m³</li>
          <li>Iron: 7,870 kg/m³</li>
          <li>Air (sea level): 1.225 kg/m³</li>
        </ul> },
        { heading: 'Why Density Matters', body: <ul>
          <li><strong>Float or sink:</strong> Objects less dense than fluid float</li>
          <li><strong>Material identification:</strong> Density helps identify unknown materials</li>
          <li><strong>Engineering:</strong> Strength-to-weight calculations</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why does ice float?', a: 'Water is unusual — it expands when freezing, making ice less dense than liquid water. Most substances are denser as solids. Without this quirk, lakes would freeze from the bottom up.' }]}
    />
  )
}

export function PowerConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>Power</strong> is the rate of energy use — one watt = one joule per second. This tool converts between watts, kilowatts, horsepower, BTU/sec, and more.</p>}
      sections={[
        { heading: 'Key Conversions', body: <ul>
          <li>1 horsepower (hp) ≈ 745.7 watts</li>
          <li>1 metric horsepower (PS) ≈ 735.5 watts</li>
          <li>1 kilowatt (kW) = 1000 watts</li>
          <li>1 BTU/sec ≈ 1055 watts (for heating/cooling)</li>
        </ul> },
        { heading: 'Real-World Power', body: <ul>
          <li>LED bulb: 10 W</li>
          <li>Microwave: 1000 W (1 kW)</li>
          <li>Typical car engine: 100-200 hp (75-150 kW)</li>
          <li>Home electric usage: ~1-2 kW average, ~10-30 kW peak</li>
          <li>Small nuclear reactor: ~1 GW (1,000,000 kW)</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why two horsepowers?', a: 'Mechanical horsepower (hp, ~746 W) originated with James Watt. Metric horsepower (PS, ~735 W) is the European equivalent. Cars sold in Europe are rated in PS; US cars in hp. The difference is ~1.4%.' }]}
    />
  )
}

export function FlowRateConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>Flow rate</strong> measures how much fluid passes through a point per unit time. This tool converts between liters/second, liters/minute, cubic meters/hour, gallons/minute, and cubic feet/minute.</p>}
      sections={[
        { heading: 'Common Conversions', body: <ul>
          <li>1 L/s = 60 L/min = 3.6 m³/h</li>
          <li>1 gallon/min (US) ≈ 3.785 L/min ≈ 0.063 L/s</li>
          <li>1 CFM (ft³/min) ≈ 28.32 L/min ≈ 0.472 L/s</li>
        </ul> },
        { heading: 'Real-World Flow Rates', body: <ul>
          <li>Shower head: ~8-10 L/min</li>
          <li>Garden hose: ~15-20 L/min</li>
          <li>Fire hydrant: ~1000+ L/min</li>
          <li>Small river: ~10,000 m³/h</li>
        </ul> },
      ]}
      faqs={[{ q: 'CFM in HVAC?', a: 'CFM (cubic feet per minute) measures air flow in heating/cooling systems. A typical central AC moves 1000-2000 CFM. The higher the CFM, the faster air circulates.' }]}
    />
  )
}

export function URLQueryParserContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>URL <strong>query strings</strong> are the part after the &quot;?&quot; — parameters like <code>?q=hello&page=2</code>. This tool parses them into a clean JSON object for easy inspection or use.</p>}
      sections={[
        { heading: 'When You\'ll Need This', body: <ul>
          <li>Debugging API requests</li>
          <li>Reverse-engineering tracking URLs</li>
          <li>Inspecting UTM campaign parameters</li>
          <li>Building query strings in code</li>
        </ul> },
      ]}
      faqs={[{ q: 'What about URL encoding in values?', a: 'This tool uses the native URLSearchParams parser, so encoded values like %20 are decoded automatically in the output.' }]}
    />
  )
}

export function HTMLTagStripperContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool removes all HTML tags from input, leaving only the readable text. Useful for cleaning up content copied from websites or converting HTML emails to plain text.</p>}
      sections={[
        { heading: 'How It Works', body: <p>The tool uses the browser&apos;s native DOM parser — safer than regex, which can miss edge cases. It strips tags but preserves the text content between them.</p> },
        { heading: 'Common Uses', body: <ul>
          <li>Cleaning text scraped from websites</li>
          <li>Converting HTML emails to plain text</li>
          <li>Extracting article body from CMS exports</li>
          <li>Removing formatting before pasting into a plain-text editor</li>
        </ul> },
      ]}
      faqs={[{ q: 'Does it preserve line breaks?', a: 'It depends on the source HTML. Block-level tags like <p> and <div> are removed, but the text they contained gets concatenated. To preserve paragraph breaks, replace <p> with \n<p> first.' }]}
    />
  )
}

export function CharacterFrequencyContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool counts how often each character appears in your text, sorted by frequency. Useful for writing analysis, cryptanalysis, and understanding text patterns.</p>}
      sections={[
        { heading: 'Letter Frequency in English', body: <p>In typical English text, the most common letters are E, T, A, O, I, N — accounting for about 45% of all letters. This pattern is exploited in simple substitution ciphers (like in Sherlock Holmes&apos; &quot;Dancing Men&quot;).</p> },
        { heading: 'Uses', body: <ul>
          <li>Cryptanalysis and code-breaking</li>
          <li>Linguistic analysis of writing samples</li>
          <li>Optimizing Huffman encoding for compression</li>
          <li>Detecting unusual character distributions</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why doesn\'t it count spaces?', a: 'Whitespace is excluded by default to focus on actual characters. To include spaces, prefix them in your input — they\'ll appear as " " in the output.' }]}
    />
  )
}

export function EmailExtractorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool extracts all email addresses from any text — paste a document, web page source, or list, and it pulls out every valid-looking email automatically.</p>}
      sections={[
        { heading: 'How It Works', body: <p>The tool uses a regex pattern matching standard email format: <code>user@domain.tld</code>. Duplicates are removed, and results are listed one per line.</p> },
        { heading: 'Common Uses', body: <ul>
          <li>Pulling contact info from documents</li>
          <li>Cleaning up scattered contact lists</li>
          <li>Building email lists from existing materials (use responsibly)</li>
          <li>Verifying what emails exist in old files</li>
        </ul> },
      ]}
      faqs={[{ q: 'Does this validate emails?', a: 'It detects the format pattern. True validation requires sending an email — no tool can verify an address exists without that. Always respect anti-spam laws when contacting extracted addresses.' }]}
    />
  )
}

export function URLExtractorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool extracts all web links (http and https URLs) from any text — useful for cleaning up messy documents, building link lists, or analyzing content.</p>}
      sections={[
        { heading: 'Common Uses', body: <ul>
          <li>Pulling all links from an article or email</li>
          <li>Building link inventories from content</li>
          <li>Cleaning up messy copy-pasted URLs</li>
          <li>Auditing outbound links in text</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why doesn\'t it catch "example.com" without http?', a: 'This tool only catches URLs starting with http:// or https://. Domains without protocol could be mistaken for filenames or other text. If you need to find bare domains, a more aggressive pattern is needed.' }]}
    />
  )
}

export function TextDiffContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool compares two texts word by word and shows the differences clearly. Separate the two texts with <code>|||</code> so the tool knows where one ends and the other begins.</p>}
      sections={[
        { heading: 'How to Use', body: <p>Format: <code>original text ||| modified text</code>. The tool compares word by word and marks lines as <code>=</code> (unchanged) or <code>-old → +new</code> (changed).</p> },
        { heading: 'Common Uses', body: <ul>
          <li>Comparing two versions of a document</li>
          <li>Proofreading changes</li>
          <li>Verifying text edits</li>
          <li>Tracking what changed between drafts</li>
        </ul> },
      ]}
      faqs={[{ q: 'Is this a character-level or word-level diff?', a: 'Word-level — splits on whitespace and compares word by word. This is usually what people want for prose. Character-level diffs are better for code.' }]}
    />
  )
}

export function TextSizeEstimatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool estimates the storage size of your text in different formats — bytes (UTF-8), kilobytes, Base64, and character/word/line counts. Useful for planning database fields and API limits.</p>}
      sections={[
        { heading: 'Why UTF-8 Size Matters', body: <p>Characters take different byte counts in UTF-8: ASCII letters = 1 byte, accented Latin = 2 bytes, Chinese/CJK = 3 bytes, emoji = 4 bytes. A 1000-character Chinese text is ~3000 bytes, not 1000.</p> },
        { heading: 'Common Uses', body: <ul>
          <li>Planning database VARCHAR sizes</li>
          <li>Checking API payload limits</li>
          <li>Estimating storage costs</li>
          <li>Validating text field constraints</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why does Base64 add 33%?', a: 'Base64 encodes 3 bytes as 4 characters. The size grows by 4/3 ≈ 1.33. This is the standard overhead for embedding binary data in text formats.' }]}
    />
  )
}
