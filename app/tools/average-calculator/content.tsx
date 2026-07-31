import type { ReactNode } from 'react'

export function AverageCalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Is an Average?</h2>
      <p>
        An <strong>average</strong> is a single number that represents the center of a set of
        numbers. But there are several kinds of averages, and they can tell very different stories
        about the same data. This calculator shows all the most useful ones at once so you can pick
        the right metric for your situation.
      </p>

      <h2>Mean vs. Median: Why Both Matter</h2>
      <p>
        The <strong>mean</strong> (what most people call &quot;the average&quot;) is the sum divided
        by the count. The <strong>median</strong> is the middle value when numbers are sorted. They
        differ dramatically when outliers are present.
      </p>
      <p>
        Example: nine people earn $50,000 and one CEO earns $1,000,000. The mean income is
        $145,000, but the median is $50,000. The median reflects what the typical person actually
        earns; the mean is dragged up by the outlier. <strong>Always look at both.</strong>
      </p>

      <h2>When to Use Each Measure</h2>
      <ul>
        <li>
          <strong>Mean:</strong> Best when data is symmetrically distributed with no extreme
          outliers. Used for test scores, temperatures, heights.
        </li>
        <li>
          <strong>Median:</strong> Best for skewed data like income, housing prices, or response
          times. Resistant to outliers.
        </li>
        <li>
          <strong>Range (max − min):</strong> Shows the spread. A wide range means high variability.
        </li>
      </ul>

      <h2>How to Calculate the Mean</h2>
      <p>
        Add up all the numbers and divide by how many there are. For 12, 15, 18, 22, 9:{' '}
        <code>(12 + 15 + 18 + 22 + 9) ÷ 5 = 76 ÷ 5 = 15.2</code>.
      </p>

      <h2>How to Calculate the Median</h2>
      <p>
        Sort the numbers, then take the middle one. If there&apos;s an even count, average the two
        middle values. For 9, 12, 15, 18, 22 (sorted): the median is 15. For 9, 12, 15, 18 (even
        count): the median is <code>(12 + 15) ÷ 2 = 13.5</code>.
      </p>

      <h2>Common Uses</h2>
      <ul>
        <li><strong>Grades:</strong> Averaging test scores to get a final grade</li>
        <li><strong>Sports:</strong> Batting averages, points per game</li>
        <li><strong>Business:</strong> Average sales, response times, customer ratings</li>
        <li><strong>Personal finance:</strong> Average monthly spending</li>
        <li><strong>Science:</strong> Repeated measurements to reduce error</li>
      </ul>

      <h2>Beware of Simpson&apos;s Paradox</h2>
      <p>
        Averages can mislead when you mix different groups. A famous example: a university&apos;s
        overall admission rate can favor men, even though every individual department favors women —
        because men applied more to easier-to-enter departments. Always check whether your data
        combines distinct populations before trusting an average.
      </p>
    </section>
  )
}
