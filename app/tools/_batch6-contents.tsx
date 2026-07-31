import type { ReactNode } from 'react'
import { ToolContent } from '@/lib/content-templates'

/** 第六批 14 个工具的原创内容 */

export function SavingsGoalCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Find the monthly contribution needed to hit any savings goal — a house deposit, a car, an emergency fund, or a vacation — accounting for investment growth on what you already have saved.</p>}
      sections={[
        { heading: 'How It Works', body: <p>The calculator projects the future value of your current savings, then solves for the monthly contribution that fills the gap to your goal. A higher return rate means smaller monthly contributions — but with more risk.</p> },
        { heading: 'Setting Realistic Goals', body: <ul>
          <li><strong>Emergency fund:</strong> 3-6 months of expenses</li>
          <li><strong>House deposit:</strong> 10-20% of home price</li>
          <li><strong>Vehicle:</strong> Pay cash if possible to avoid loan interest</li>
          <li><strong>Wedding:</strong> Varies widely — set your number first</li>
        </ul> },
      ]}
      faqs={[{ q: 'What return rate should I use?', a: 'Use 4-5% for high-yield savings or conservative investments. Use 7% for long-term stock market investing. Higher rates mean smaller monthly contributions but more volatility.' }]}
    />
  )
}

export function NetWorthCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Your <strong>net worth</strong> is the single best snapshot of your financial health — what you own (assets) minus what you owe (liabilities). Tracking it over time reveals whether you&apos;re building wealth or treading water.</p>}
      sections={[
        { heading: 'What Counts as Assets', body: <ul>
          <li>Cash, savings, and checking accounts</li>
          <li>Investment accounts (stocks, bonds, retirement)</li>
          <li>Home value (minus mortgage = equity)</li>
          <li>Vehicles (current market value)</li>
          <li>Valuable possessions (jewelry, collectibles)</li>
        </ul> },
        { heading: 'What Counts as Liabilities', body: <ul>
          <li>Mortgage balance</li>
          <li>Student, auto, and personal loans</li>
          <li>Credit card debt</li>
          <li>Tax owed</li>
          <li>Any other money you owe</li>
        </ul> },
        { heading: 'Where You Stand', body: <p>Net worth varies enormously by age. The US median is around $192,000 across all ages, but the median for ages 30-34 is only about $40,000. Reaching $1M+ net worth puts a household in roughly the top 10-15%.</p> },
      ]}
      faqs={[{ q: 'Should I include my primary residence?', a: 'Yes, but subtract the mortgage. The remaining equity is a real asset. Some calculators exclude primary residence to focus on "investable" net worth — both approaches are valid.' }]}
    />
  )
}

export function AnnuityCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>An <strong>annuity</strong> pays out a fixed amount regularly from a principal over a set period. This calculator finds the annual and monthly payout that exhausts the principal in exactly N years, accounting for investment growth.</p>}
      sections={[
        { heading: 'The Annuity Formula', body: <p>Annual payout = <code>P × r / (1 − (1 + r)^−n)</code>, where P is principal, r is annual rate, and n is years. The formula ensures the balance hits zero exactly at year n.</p> },
        { heading: 'Annuity vs. Perpetuity', body: <p>An annuity pays out for a fixed term. A perpetuity pays forever (the &quot;4% rule&quot; for retirement is roughly a perpetuity designed to never run out). For very long horizons (30+ years), the two converge.</p> },
        { heading: 'Real-World Uses', body: <ul>
          <li>Retirement drawdown planning</li>
          <li>Lottery payout decisions (lump sum vs. annuity)</li>
          <li>Pension and structured settlement evaluation</li>
          <li>Charitable gift annuities</li>
        </ul> },
      ]}
      faqs={[{ q: 'What if I live longer than N years?', a: 'Then the annuity is exhausted. This is the core risk of self-managed drawdowns. Commercial annuities from insurance companies often pay for life, but at lower rates because they pool longevity risk.' }]}
    />
  )
}

export function CapitalGainsTaxEstimatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>When you sell an investment for more than you paid, the profit is a <strong>capital gain</strong> and is taxed. How long you held the asset dramatically changes the rate. This estimator applies US federal rules.</p>}
      sections={[
        { heading: 'Short vs. Long Term', body: <ul>
          <li><strong>Short-term (&lt;1 year):</strong> Taxed as ordinary income (your marginal rate, 10-37%)</li>
          <li><strong>Long-term (1+ years):</strong> Preferential rates of 0%, 15%, or 20% depending on income</li>
        </ul> },
        { heading: 'Why Holding Period Matters', body: <p>The difference is huge. A $10,000 gain in the 24% bracket: short-term costs $2,400 in tax; long-term costs $1,500 (a 37% tax saving). For high earners near the top bracket, holding 1+ years can save thousands.</p> },
        { heading: 'What\'s Not Included', body: <ul>
          <li><strong>NIIT:</strong> 3.8% surtax on investment income for high earners</li>
          <li><strong>State tax:</strong> Varies 0-13% depending on state</li>
          <li><strong>Capital losses:</strong> Can offset gains dollar-for-dollar</li>
          <li><strong>Tax-loss harvesting:</strong> Strategic loss-taking to reduce taxes</li>
        </ul> },
      ]}
      faqs={[{ q: 'How do I calculate my capital gains tax?', a: 'Track purchase and sale prices per lot. Gains = sale − purchase − fees. Long-term gains are taxed at 0/15/20% based on your total taxable income (including the gain itself).' }]}
    />
  )
}

export function RentVsBuyCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>The rent-vs-buy decision is one of the largest financial choices most people make. This calculator compares total cost over a holding period, but be aware it&apos;s a simplified view — the real answer depends on many factors.</p>}
      sections={[
        { heading: 'What This Calculator Shows', body: <p>The all-in cost of buying (down payment + mortgage + interest) versus renting a comparable place for the same period. It does not include property tax, insurance, maintenance (typically 1-2% of home value annually), closing costs, or the appreciation you might gain (or lose) on the home.</p> },
        { heading: 'Hidden Costs of Buying', body: <ul>
          <li>Closing costs (~2-5% of price)</li>
          <li>Property taxes (0.5-2.5% annually)</li>
          <li>Insurance, PMI if under 20% down</li>
          <li>Maintenance and repairs (1-2% of value/year)</li>
          <li>HOA fees, utilities often higher in larger homes</li>
        </ul> },
        { heading: 'Hidden Costs of Renting', body: <ul>
          <li>Rent increases over time</li>
          <li>No equity buildup</li>
          <li>Less control over the living space</li>
          <li>Possibly restricted pet/renovation options</li>
        </ul> },
        { heading: 'The 5-Year Rule', body: <p>A common guideline: if you&apos;ll move within 5 years, renting is usually cheaper due to transaction costs. Beyond 5-7 years, buying often wins — assuming modest appreciation and stable employment.</p> },
      ]}
      faqs={[{ q: 'Does this account for home value increasing?', a: 'No — this simplified version ignores appreciation, which is a major benefit of buying. But it also ignores the opportunity cost of investing your down payment in stocks instead. Full rent-vs-buy models factor in both.' }]}
    />
  )
}

export function BodyFatCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This calculator estimates body fat percentage using the <strong>US Navy method</strong>, which uses circumference measurements of your neck, waist, and (for women) hips. It&apos;s a practical at-home alternative to expensive body composition scans.</p>}
      sections={[
        { heading: 'How to Measure', body: <ul>
          <li><strong>Neck:</strong> Just below the larynx, keeping tape level</li>
          <li><strong>Waist:</strong> At the navel (men) or narrowest point (women)</li>
          <li><strong>Hip:</strong> Widest point around buttocks (women only)</li>
          <li>Measure in the morning, before eating, for consistency</li>
        </ul> },
        { heading: 'Body Fat Categories', body: <ul>
          <li><strong>Essential fat:</strong> 2-5% men / 10-13% women (minimum for survival)</li>
          <li><strong>Athlete:</strong> 6-13% men / 14-20% women</li>
          <li><strong>Fitness:</strong> 14-17% men / 21-24% women</li>
          <li><strong>Average:</strong> 18-24% men / 25-31% women</li>
          <li><strong>High:</strong> 25%+ men / 32%+ women</li>
        </ul> },
        { heading: 'Why Body Fat Beats BMI', body: <p>BMI cannot distinguish muscle from fat. A muscular athlete and an overweight person can have the same BMI but very different body fat percentages and health risks. Body fat is the more meaningful metric — though harder to measure precisely.</p> },
      ]}
      faqs={[{ q: 'How accurate is the Navy method?', a: 'It has an error range of about ±3-4% compared to DEXA scans. It works best for people near average body composition. For very lean or very muscular people, other methods (calipers, DEXA, hydrostatic) are more accurate.' }]}
    />
  )
}

export function MacroCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p><strong>Macros</strong> (macronutrients) are the three calorie-providing nutrients: protein, carbohydrates, and fat. This calculator splits your daily calorie target into a macro breakdown based on your goal.</p>}
      sections={[
        { heading: 'The Three Macros', body: <ul>
          <li><strong>Protein (4 cal/g):</strong> Builds and repairs muscle. Aim 1.6-2.2g per kg body weight.</li>
          <li><strong>Carbs (4 cal/g):</strong> Primary energy source. Critical for high-intensity exercise.</li>
          <li><strong>Fat (9 cal/g):</strong> Hormones, vitamin absorption, satiety. Don&apos;t go below 20% of calories.</li>
        </ul> },
        { heading: 'Recommended Splits by Goal', body: <ul>
          <li><strong>Lose weight:</strong> Higher protein (40/30/30) to preserve muscle in a deficit</li>
          <li><strong>Maintain:</strong> Balanced (30/40/30)</li>
          <li><strong>Build muscle:</strong> Higher carbs (35/45/20) for training fuel</li>
        </ul> },
        { heading: 'Protein Is the Most Important Macro', body: <p>For most people, hitting your protein target matters more than the exact carb/fat split. Adequate protein preserves muscle during weight loss, supports muscle gain, and increases satiety. Aim for 1.6-2.2g per kg of body weight.</p> },
      ]}
      faqs={[{ q: 'Do I have to track macros?', a: 'No. Many people lose weight or build muscle eating intuitively. But tracking macros for a few weeks teaches you portion sizes and reveals hidden calories — a valuable learning exercise even if you stop later.' }]}
    />
  )
}

export function PregnancyDueDateCalculatorContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This calculator estimates your pregnancy due date using <strong>Naegele&apos;s rule</strong>: add 280 days (40 weeks) to the first day of your last menstrual period. It also shows the likely conception date and current week.</p>}
      sections={[
        { heading: 'The 40-Week Framework', body: <p>Pregnancy is counted in weeks from the last period, not from conception. The &quot;40 weeks&quot; includes ~2 weeks before you actually conceived. Full term is anywhere from 37 to 42 weeks.</p> },
        { heading: 'Trimesters', body: <ul>
          <li><strong>First trimester:</strong> Weeks 1-13 (organ development)</li>
          <li><strong>Second trimester:</strong> Weeks 14-27 (growth, movement felt)</li>
          <li><strong>Third trimester:</strong> Weeks 28-40+ (final growth, preparation for birth)</li>
        </ul> },
        { heading: 'Only an Estimate', body: <p>Only about <strong>5% of babies</strong> arrive on their estimated due date. Most arrive within two weeks of it. First babies tend to arrive a few days late; subsequent babies often come earlier.</p> },
      ]}
      faqs={[{ q: 'What if my cycles are irregular?', a: 'Naegele\'s rule assumes a 28-day cycle with ovulation on day 14. If your cycles are longer or shorter, an early ultrasound (before 12 weeks) provides a more accurate due date.' }]}
    />
  )
}

export function JSONFormatterContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool formats and validates JSON. Paste minified or messy JSON and get back properly indented, human-readable output. Syntax errors are reported with a message.</p>}
      sections={[
        { heading: 'Why Format JSON?', body: <ul>
          <li>Debugging API responses</li>
          <li>Reading configuration files</li>
          <li>Reviewing large payloads during development</li>
          <li>Catching syntax errors before deployment</li>
        </ul> },
        { heading: 'Common JSON Errors', body: <ul>
          <li>Trailing commas (not allowed in strict JSON)</li>
          <li>Single quotes instead of double quotes</li>
          <li>Comments (JSON doesn&apos;t support them)</li>
          <li>Unquoted keys</li>
        </ul> },
      ]}
      faqs={[{ q: 'JSON vs JSON5 vs JSONC?', a: 'Standard JSON is strict. JSON5 allows comments, trailing commas, and unquoted keys. JSONC is JSON with comments (used by VS Code). This formatter expects standard JSON.' }]}
    />
  )
}

export function JSONMinifierContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool removes all whitespace from JSON to minimize file size. Useful for API responses, embedded data, and storage where every byte counts.</p>}
      sections={[
        { heading: 'The Size Savings', body: <p>Minified JSON is typically 20-50% smaller than pretty-printed JSON. For large payloads served over the network, this adds up — especially on mobile or metered connections.</p> },
        { heading: 'When to Minify', body: <ul>
          <li>API responses (often gzipped on top)</li>
          <li>Embedded JSON in HTML or JavaScript</li>
          <li>Stored configurations in databases</li>
          <li>Mobile apps where bandwidth matters</li>
        </ul> },
        { heading: 'When Not to Minify', body: <p>Don&apos;t minify JSON that humans need to read or edit by hand — config files, log output, debugging artifacts. The size savings aren&apos;t worth the lost readability.</p> },
      ]}
      faqs={[{ q: 'Does minification break anything?', a: 'No. Whitespace is not significant in JSON syntax. Minified JSON parses identically to formatted JSON. Re-minifying already-minified JSON is a no-op.' }]}
    />
  )
}

export function CSVtoJSONContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Convert CSV (comma-separated values) data to a JSON array of objects. The first row becomes the keys; each subsequent row becomes an object. Useful for importing spreadsheet data into applications.</p>}
      sections={[
        { heading: 'How It Works', body: <p>The tool splits each line by commas, treats the first row as headers, and maps each data row into an object using those headers as keys. All values are strings — convert to numbers or booleans in your code if needed.</p> },
        { heading: 'Limitations', body: <ul>
          <li>Does not handle quoted fields containing commas (advanced CSV parsing)</li>
          <li>All values are strings, not auto-typed</li>
          <li>Assumes the first row is the header</li>
        </ul> },
      ]}
      faqs={[{ q: 'What about Excel files (.xlsx)?', a: 'This tool handles CSV only — plain text. For Excel files, export to CSV from Excel first, then convert here. Libraries like SheetJS handle .xlsx directly in code.' }]}
    />
  )
}

export function JSONtoCSVContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>Convert a JSON array of objects to CSV format. Useful for exporting application data to spreadsheets, data analysis tools, or database imports.</p>}
      sections={[
        { heading: 'How It Works', body: <p>The tool reads the keys of the first object as CSV headers, then writes each object as a row. Fields containing commas, quotes, or newlines are automatically wrapped in quotes and escaped properly.</p> },
        { heading: 'When You\'ll Need This', body: <ul>
          <li>Exporting data from an app for spreadsheet analysis</li>
          <li>Preparing data for database import</li>
          <li>Sharing data with non-technical stakeholders</li>
          <li>Feeding data into BI tools like Tableau or Power BI</li>
        </ul> },
      ]}
      faqs={[{ q: 'What if my objects have different keys?', a: 'The tool uses keys from the first object. Objects with extra keys will have those keys dropped; objects missing keys will have empty values. Normalize your data structure first for best results.' }]}
    />
  )
}

export function AddLineNumbersContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool adds line numbers to each line of your text, formatted with right-aligned numbers and consistent spacing. Useful for code review, transcripts, and any text you need to reference by line.</p>}
      sections={[
        { heading: 'Common Uses', body: <ul>
          <li>Code review — reference &quot;line 42 has a bug&quot;</li>
          <li>Transcripts and interview notes</li>
          <li>Log file analysis</li>
          <li>Document review and editing</li>
          <li>Educational materials and tutorials</li>
        </ul> },
      ]}
      faqs={[{ q: 'Why right-aligned numbers?', a: 'Right alignment keeps the text column stable as line counts grow — line 9 and line 10 have the same starting position. This is the convention in code editors and print publications.' }]}
    />
  )
}

export function TextToListContent(): ReactNode {
  return (
    <ToolContent
      intro={<p>This tool converts lines of text into a bulleted list, adding a bullet point (•) to the start of each non-empty line. Perfect for turning brain-dumped notes into a structured list.</p>}
      sections={[
        { heading: 'Common Uses', body: <ul>
          <li>Formatting brain-dumped notes</li>
          <li>Creating outlines from raw ideas</li>
          <li>Preparing shopping or task lists</li>
          <li>Formatting data for slides and documents</li>
        </ul> },
      ]}
      faqs={[{ q: 'Can I use different bullet styles?', a: 'This tool uses • (bullet). For numbered lists, use the Add Line Numbers tool. For other styles (–, *, 1.), a future update may add options.' }]}
    />
  )
}
