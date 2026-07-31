import type { ReactNode } from 'react'
import { ToolContent } from '@/lib/content-templates'

/** 第五批 12 个工具的原创内容(color 单独写,其余在此) */

export function ColorConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          Colors on the web are described in three main formats: <strong>HEX</strong> (like
          #3b82f6), <strong>RGB</strong> (like rgb(59, 130, 246)), and <strong>HSL</strong> (like
          hsl(217, 91%, 60%)). This tool converts between all three instantly — type any format or
          use the visual color picker.
        </p>
      }
      sections={[
        {
          heading: 'The Three Color Formats',
          body: (
            <ul>
              <li><strong>HEX</strong> — six hex digits (#RRGGBB), each pair is a color channel 00-FF. Most common in CSS and design tools.</li>
              <li><strong>RGB</strong> — three decimal numbers 0-255 for red, green, blue. Easier to read programmatically.</li>
              <li><strong>HSL</strong> — hue (0-360°), saturation %, lightness %. Most intuitive for humans — &quot;make it darker&quot; means lower lightness.</li>
            </ul>
          ),
        },
        {
          heading: 'When to Use Which',
          body: (
            <p>
              <strong>HEX</strong> is the default for CSS and most design tools. <strong>RGB</strong>
              is useful when you need to manipulate channels in code or add alpha transparency
              (rgba). <strong>HSL</strong> is best when adjusting colors intuitively — creating
              variations of a hue is much easier in HSL than HEX.
            </p>
          ),
        },
        {
          heading: 'Common Colors Reference',
          body: (
            <ul>
              <li>White: #FFFFFF / rgb(255,255,255) / hsl(0,0%,100%)</li>
              <li>Black: #000000 / rgb(0,0,0) / hsl(0,0%,0%)</li>
              <li>Red: #FF0000 / rgb(255,0,0) / hsl(0,100%,50%)</li>
              <li>Blue: #0000FF / rgb(0,0,255) / hsl(240,100%,50%)</li>
              <li>Tailwind blue-500: #3B82F6 / rgb(59,130,246) / hsl(217,91%,60%)</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'What about alpha transparency?', a: 'HEX uses 8 digits (#RRGGBBAA), RGB becomes rgba(r,g,b,a), HSL becomes hsla(h,s%,l%,a). The alpha value is 0-1, where 0 is fully transparent.' },
      ]}
    />
  )
}

export function UUIDGeneratorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>UUID</strong> (Universally Unique Identifier) is a 128-bit number used as a
          unique ID in databases, APIs, sessions, and distributed systems. This generator creates
          RFC 4122 version 4 UUIDs (random) using your browser&apos;s cryptographic random source.
        </p>
      }
      sections={[
        {
          heading: 'Why UUIDs?',
          body: (
            <ul>
              <li><strong>No central authority</strong> — anyone can generate without coordination</li>
              <li><strong>Effectively unique</strong> — collision probability is astronomically low</li>
              <li><strong>Used everywhere</strong> — databases, OAuth, file systems, message queues</li>
              <li><strong>Anonymous</strong> — no embedded sequence or timestamp reveals count/order</li>
            </ul>
          ),
        },
        {
          heading: 'The Structure of a UUID',
          body: (
            <p>
              A UUID looks like <code>550e8400-e29b-41d4-a716-446655440000</code> — 32 hex digits in
              5 groups separated by hyphens. Version 4 (the most common) uses random bits except for
              a version indicator and a variant indicator.
            </p>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li>Primary keys in databases (especially distributed systems)</li>
              <li>Session tokens and API request IDs</li>
              <li>File names for uploaded content</li>
              <li>Identifying devices, users, or events</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Are UUIDs truly unique?', a: 'For all practical purposes, yes. The chance of two random v4 UUIDs colliding is about 1 in 2.7 × 10^36. You would need to generate billions per second for millennia to see a collision.' },
      ]}
    />
  )
}

export function LoremIpsumGeneratorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          <strong>Lorem Ipsum</strong> is placeholder text used by designers and developers to fill
          layouts before the real content is ready. This generator produces paragraphs of
          pseudo-Latin that look like natural text without being distracting.
        </p>
      }
      sections={[
        {
          heading: 'Why Placeholder Text?',
          body: (
            <p>
              When designing a page, real text distracts reviewers — they read it instead of judging
              the layout. Lorem Ipsum has the look of language (word lengths, sentence flow) without
              the meaning, so it fills space without pulling attention.
            </p>
          ),
        },
        {
          heading: 'The Origin',
          body: (
            <p>
              Lorem Ipsum isn&apos;t random — it&apos;s scrambled pieces of a 1st-century BC Latin
              text by Cicero (De finibus bonorum et malorum). The scrambling happened in the 1500s
              when an unknown printer used it as a type specimen. The modern version was
              popularized in the 1960s with Letraset sheets.
            </p>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li>Mockups and wireframes</li>
              <li>Website templates and demos</li>
              <li>Print layouts before final copy</li>
              <li>Testing how text flows in a design</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Is it actually Latin?', a: 'It started as Latin, but the standard Lorem Ipsum text is scrambled and altered — no real Latin speaker would parse it. That\'s intentional: it should look like text without reading as any real language.' },
      ]}
    />
  )
}

export function CircleCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator finds the area, circumference, and diameter of a circle from its radius.
          Essential for math class, engineering, and any project involving round shapes.
        </p>
      }
      sections={[
        {
          heading: 'The Formulas',
          body: (
            <ul>
              <li><strong>Area</strong> = π × r²</li>
              <li><strong>Circumference</strong> = 2 × π × r</li>
              <li><strong>Diameter</strong> = 2 × r</li>
            </ul>
          ),
        },
        {
          heading: 'Why π?',
          body: (
            <p>
              π (pi) is the ratio of a circle&apos;s circumference to its diameter, approximately
              3.14159. It appears in every circle formula because it&apos;s a fundamental property
              of circles — and of waves, rotation, and many natural phenomena.
            </p>
          ),
        },
        {
          heading: 'Real-World Uses',
          body: (
            <ul>
              <li><strong>Construction:</strong> Calculating concrete for circular columns</li>
              <li><strong>Pizza:</strong> Comparing 12-inch vs 16-inch pizza sizes</li>
              <li><strong>Engineering:</strong> Pipe flow, wheel rotation, gears</li>
              <li><strong>Farming:</strong> Irrigation from a center pivot</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Why is a 16-inch pizza more than double a 12-inch?', a: 'Area scales with radius squared. A 16-inch pizza has area π(8)² = 201 sq in; a 12-inch has π(6)² = 113 sq in. So the 16-inch is 78% bigger, not 33%.' },
      ]}
    />
  )
}

export function TriangleCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator solves <strong>right triangles</strong> using the Pythagorean theorem.
          Given the two legs (a and b), it finds the hypotenuse (c), the area, and the perimeter.
        </p>
      }
      sections={[
        {
          heading: 'The Pythagorean Theorem',
          body: (
            <p>
              For any right triangle, <code>a² + b² = c²</code>, where a and b are the legs and c is
              the hypotenuse (the side opposite the right angle). This is one of the oldest and most
              useful results in mathematics, proven over 400 different ways.
            </p>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li><strong>Construction:</strong> Square corners — measure 3 ft one way, 4 ft the other, diagonal should be 5 ft</li>
              <li><strong>Navigation:</strong> Straight-line distance between two GPS points</li>
              <li><strong>TV sizes:</strong> A 65-inch TV is measured diagonally</li>
              <li><strong>Ladders:</strong> How high a ladder reaches when leaned at an angle</li>
            </ul>
          ),
        },
        {
          heading: 'The 3-4-5 Triangle',
          body: (
            <p>
              The simplest Pythagorean triple is 3-4-5: 3² + 4² = 9 + 16 = 25 = 5². Carpenters use
              it constantly — measure 3 units along one wall, 4 along the other, and adjust until
              the diagonal is exactly 5. Then the corner is perfectly square.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'What about non-right triangles?', a: 'The Pythagorean theorem only works for right triangles. For other triangles, use the Law of Cosines (c² = a² + b² − 2ab·cos C) or the Law of Sines.' },
      ]}
    />
  )
}

export function RectangleCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator finds the area, perimeter, and diagonal of a rectangle from its width and
          height. One of the most practical calculations in daily life.
        </p>
      }
      sections={[
        {
          heading: 'The Formulas',
          body: (
            <ul>
              <li><strong>Area</strong> = width × height</li>
              <li><strong>Perimeter</strong> = 2 × (width + height)</li>
              <li><strong>Diagonal</strong> = √(width² + height²)</li>
            </ul>
          ),
        },
        {
          heading: 'Everyday Uses',
          body: (
            <ul>
              <li><strong>Flooring:</strong> How much tile or carpet to buy</li>
              <li><strong>Paint:</strong> Wall area for paint estimation</li>
              <li><strong>Screens:</strong> TV and monitor sizing (diagonal)</li>
              <li><strong>Land:</strong> Lot and property dimensions</li>
              <li><strong>Fabric:</strong> Material for curtains, tablecloths</li>
            </ul>
          ),
        },
        {
          heading: 'Square Footage',
          body: (
            <p>
              In the US, area is often measured in square feet. For a 12 × 15 foot room:{' '}
              <code>12 × 15 = 180 sq ft</code>. To convert to square meters, multiply by 0.0929
              (180 sq ft ≈ 16.7 m²).
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'How much extra flooring should I buy?', a: 'Add 10% for waste and cutting mistakes. For patterned materials that need matching, add 15-20%. Order slightly more than you think you need — dye lots vary between batches.' },
      ]}
    />
  )
}

export function StandardDeviationCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          <strong>Standard deviation</strong> measures how spread out a set of numbers is from the
          average. A small standard deviation means values cluster tightly around the mean; a large
          one means they&apos;re widely scattered. This is one of the most useful statistics in data
          analysis.
        </p>
      }
      sections={[
        {
          heading: 'What Standard Deviation Tells You',
          body: (
            <p>
              If test scores have a mean of 75 with a standard deviation of 5, most scores fall
              between 70 and 80. With the same mean but a standard deviation of 15, scores spread
              from 60 to 90. Same average — very different picture.
            </p>
          ),
        },
        {
          heading: 'The 68-95-99.7 Rule',
          body: (
            <p>
              For normally distributed data: ~68% of values fall within 1 standard deviation of the
              mean, ~95% within 2, and ~99.7% within 3. So if adult heights average 170 cm with SD
              7, about 95% of people are between 156 and 184 cm.
            </p>
          ),
        },
        {
          heading: 'Population vs. Sample',
          body: (
            <p>
              This calculator uses <strong>population</strong> standard deviation (divides by N). If
              your data is a sample from a larger population, use <strong>sample</strong> standard
              deviation (divides by N−1) to get an unbiased estimate. Multiply our result by{' '}
              <code>√(N/(N−1))</code> to convert.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'When do I use population vs. sample?', a: 'Use population when your data is the entire group of interest (all students in a class). Use sample when your data represents a larger population (100 voters surveyed to estimate a country).' },
      ]}
    />
  )
}

export function PercentileCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>percentile</strong> tells you what percentage of values fall below a given
          number. The 90th percentile means 90% of the data is below that value. This calculator
          finds the value at any percentile you choose.
        </p>
      }
      sections={[
        {
          heading: 'Common Percentile Uses',
          body: (
            <ul>
              <li><strong>Test scores:</strong> SAT, GRE — &quot;95th percentile&quot; means you scored higher than 95% of test takers</li>
              <li><strong>Salaries:</strong> Income percentiles show where you stand vs. peers</li>
              <li><strong>Health:</strong> Children&apos;s height/weight percentiles for growth tracking</li>
              <li><strong>Performance:</strong> API response times — &quot;p95 latency&quot; means 95% of requests were faster</li>
            </ul>
          ),
        },
        {
          heading: 'How Percentiles Are Calculated',
          body: (
            <p>
              There are several methods. This calculator uses <strong>linear interpolation</strong>{' '}
              (the same method Excel&apos;s PERCENTILE function uses). It sorts the data, then
              interpolates between adjacent values for percentiles that fall between data points.
            </p>
          ),
        },
        {
          heading: 'Percentile vs. Percentage',
          body: (
            <p>
              These are different. A <strong>percentage</strong> is a fraction of 100 (you got 85%
              of questions right). A <strong>percentile</strong> compares you to others (you scored
              higher than 90% of people). Scoring 85% on a test might put you in the 70th or 99th
              percentile, depending on how others did.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'What is a "good" percentile?', a: 'It depends on context. For standardized tests, 90th+ is excellent. For health metrics, anywhere in the 5th-95th range is usually normal. For income, higher percentiles mean more income relative to peers.' },
      ]}
    />
  )
}

export function InflationCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          Inflation slowly erodes what your money can buy. This calculator shows how much money
          you&apos;d need in the future to match today&apos;s purchasing power, based on a steady
          inflation rate.
        </p>
      }
      sections={[
        {
          heading: 'Why Inflation Matters',
          body: (
            <p>
              At 3% annual inflation (roughly the US historical average), prices double every 24
              years. That means a $50,000 salary in 2000 has the same buying power as about $85,000
              today. Wages that don&apos;t keep up with inflation make you gradually poorer, even
              if the number stays the same.
            </p>
          ),
        },
        {
          heading: 'The Rule of 70',
          body: (
            <p>
              A quick mental shortcut: divide 70 by the inflation rate to find the doubling time.
              At 3.5% inflation, prices double in <code>70 ÷ 3.5 = 20 years</code>. At 7%, they
              double in 10 years.
            </p>
          ),
        },
        {
          heading: 'Investing to Beat Inflation',
          body: (
            <p>
              Keeping money in cash means losing ~3% per year to inflation. To preserve purchasing
              power, you need investments that return more than inflation. The stock market has
              historically returned ~10% (~7% after inflation), making it a primary inflation hedge
              for long-term savings.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'What is a normal inflation rate?', a: 'Central banks target ~2% as "healthy" inflation. The US averaged 3% over the last century. High inflation (10%+) or deflation (negative) both cause economic problems.' },
      ]}
    />
  )
}

export function RetirementCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This calculator projects how much you&apos;ll have saved by retirement, combining the
          compound growth on your current savings with regular monthly contributions. It&apos;s a
          powerful motivator — the numbers often surprise people.
        </p>
      }
      sections={[
        {
          heading: 'The 4% Rule',
          body: (
            <p>
              A common guideline: you can withdraw 4% of your retirement savings each year with low
              risk of running out. To retire on $60,000/year of investment income, you&apos;d need
              about $1.5 million saved ($60,000 ÷ 0.04).
            </p>
          ),
        },
        {
          heading: 'The Power of Starting Early',
          body: (
            <p>
              Time matters more than amount. Someone who saves $500/month from age 25 to 35 (then
              stops) often ends up with more than someone who saves $500/month from age 35 to 65.
              The early saver&apos;s money has 30 extra years to compound.
            </p>
          ),
        },
        {
          heading: 'Realistic Return Rates',
          body: (
            <ul>
              <li><strong>Aggressive (mostly stocks):</strong> ~7% after inflation — volatile but high long-term</li>
              <li><strong>Balanced (stocks + bonds):</strong> ~5% after inflation</li>
              <li><strong>Conservative (mostly bonds):</strong> ~3% after inflation</li>
              <li><strong>Cash savings:</strong> ~0-1% after inflation — barely keeps up</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'How much do I need to retire?', a: 'A common rule is 25× your annual expenses (the inverse of the 4% rule). For $40,000/year expenses, aim for $1 million. Many financial advisors now suggest 30× to be safe given longer lifespans.' },
      ]}
    />
  )
}

export function SimpleInterestCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          <strong>Simple interest</strong> is interest calculated only on the original principal.
          The formula is straightforward: <code>I = P × r × t</code> (interest = principal × rate ×
          time). Unlike compound interest, you don&apos;t earn interest on accumulated interest.
        </p>
      }
      sections={[
        {
          heading: 'The Formula',
          body: (
            <ul>
              <li><strong>I</strong> = interest earned (or paid)</li>
              <li><strong>P</strong> = principal (starting amount)</li>
              <li><strong>r</strong> = annual interest rate (as a decimal)</li>
              <li><strong>t</strong> = time in years</li>
            </ul>
          ),
        },
        {
          heading: 'Simple vs. Compound Interest',
          body: (
            <p>
              Simple interest grows linearly; compound interest grows exponentially. On $10,000 at
              5% for 10 years: simple interest earns $5,000 total; compound interest (compounded
              annually) earns $6,289. For long-term investments, always use the compound interest
              calculator.
            </p>
          ),
        },
        {
          heading: 'When Simple Interest Applies',
          body: (
            <ul>
              <li>Short-term personal loans and car loans</li>
              <li>Some bonds that pay fixed coupons</li>
              <li>Basic savings calculations for short periods</li>
              <li>Most student loans during school (before compounding begins)</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Why would I ever use simple interest?', a: 'For short time periods and basic loans, it\'s simpler to calculate. Most mortgages, credit cards, and investments use compound interest instead — use that calculator for those cases.' },
      ]}
    />
  )
}

export function UnitPriceCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          Unit price tells you the cost per gram, ounce, liter, or item — letting you compare
          products fairly regardless of package size. This calculator handles the math so the bigger
          box doesn&apos;t trick you into paying more.
        </p>
      }
      sections={[
        {
          heading: 'Why Unit Price Beats Total Price',
          body: (
            <p>
              A 500g jar of peanut butter for $8 looks more expensive than a 350g jar for $6. But
              per gram: the big jar costs 1.6¢/g, the small jar 1.7¢/g. The bigger jar is actually
              cheaper. Supermarkets know shoppers default to total price — unit price reveals the
              truth.
            </p>
          ),
        },
        {
          heading: 'Common Traps',
          body: (
            <ul>
              <li><strong>&quot;Bulk&quot; isn\'t always cheaper</strong> — sometimes the smaller size is on sale</li>
              <li><strong>Different units confuse comparison</strong> — one product in oz, another in g</li>
              <li><strong>Brand vs. store brand</strong> — store brands often win on unit price by 30%+</li>
              <li><strong>Smaller packages of the same brand</strong> — surprisingly sometimes cheaper per unit</li>
            </ul>
          ),
        },
        {
          heading: 'Real Example',
          body: (
            <p>
              Laundry detergent: Brand A is $19.99 for 75 loads (26.7¢/load). Brand B is $14.99 for
              50 loads (30.0¢/load). Brand A is bigger <em>and</em> cheaper per use. Without unit
              pricing, you might grab Brand B thinking it&apos;s the budget option.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Does this work for non-food items?', a: 'Yes. Use "count" as the unit for toilet paper, diapers, batteries, or anything sold by item count. Use ml for liquids, g for solids. The math is the same.' },
      ]}
    />
  )
}
