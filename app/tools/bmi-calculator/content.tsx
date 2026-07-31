import type { ReactNode } from 'react'

export function BMICalculatorContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What Is BMI?</h2>
      <p>
        <strong>BMI</strong> (Body Mass Index) is a number calculated from your height and weight
        that gives a rough indication of whether your weight is in a healthy range. It&apos;s the
        most widely used screening tool for weight categories: underweight, healthy weight,
        overweight, and obese. The standard was developed in the 1830s by Belgian mathematician
        Adolphe Quetelet and adopted by the World Health Organization for population-level health
        statistics.
      </p>

      <h2>The BMI Formula</h2>
      <p>The calculation is simple:</p>
      <ul>
        <li>
          <strong>Metric:</strong> BMI = weight (kg) ÷ height² (m²)
        </li>
        <li>
          <strong>Imperial:</strong> BMI = (weight (lb) ÷ height² (in²)) × 703
        </li>
      </ul>
      <p>
        For example, someone who is 170 cm and 65 kg: <code>65 ÷ (1.70 × 1.70) = 22.5</code>,
        placing them in the healthy weight range.
      </p>

      <h2>BMI Categories (WHO Standard)</h2>
      <ul>
        <li><strong>Below 18.5:</strong> Underweight</li>
        <li><strong>18.5 – 24.9:</strong> Healthy weight</li>
        <li><strong>25.0 – 29.9:</strong> Overweight</li>
        <li><strong>30.0 – 34.9:</strong> Obese (Class I)</li>
        <li><strong>35.0 – 39.9:</strong> Obese (Class II)</li>
        <li><strong>40.0 and above:</strong> Obese (Class III)</li>
      </ul>

      <h2>What BMI Doesn&apos;t Tell You</h2>
      <p>
        BMI is a useful screening tool, but it has real limitations. It measures total weight
        relative to height, but it cannot tell the difference between fat, muscle, bone, and water.
        This matters:
      </p>
      <ul>
        <li>
          <strong>Athletes and bodybuilders</strong> often score &quot;overweight&quot; because
          muscle is denser than fat. A professional rugby player with 10% body fat might have a BMI
          of 28.
        </li>
        <li>
          <strong>Older adults</strong> may have a &quot;healthy&quot; BMI but high body fat and low
          muscle mass — a risk that BMI misses.
        </li>
        <li>
          <strong>Body fat distribution</strong> matters. Fat around the waist carries more health
          risk than fat around the hips, but BMI can&apos;t tell the difference.
        </li>
        <li>
          <strong>Children and teens</strong> need percentile-based charts, not the adult ranges.
        </li>
      </ul>

      <h2>Healthy Weight Range for Your Height</h2>
      <p>
        This calculator also shows the weight range that corresponds to a BMI of 18.5–24.9 for your
        height. If your current weight falls within this range, your BMI is in the healthy category.
        If you&apos;re above or below, the range gives you a concrete target.
      </p>

      <h2>Alternatives to BMI</h2>
      <p>For a more complete picture of health, consider these complementary measurements:</p>
      <ul>
        <li>
          <strong>Waist circumference.</strong> Over 40 inches (102 cm) for men or 35 inches (88 cm)
          for women indicates higher metabolic risk.
        </li>
        <li>
          <strong>Waist-to-hip ratio.</strong> Compares waist and hip measurements to assess fat
          distribution.
        </li>
        <li>
          <strong>Body fat percentage.</strong> Measured with calipers, scales, or DEXA scans.
          Provides what BMI cannot.
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>Is BMI accurate for everyone?</h3>
      <p>
        No. BMI works reasonably for the average sedentary adult but overestimates body fat in
        muscular people and underestimates it in older adults who have lost muscle. Use it as a
        starting point, not the final word.
      </p>

      <h3>What is a healthy BMI for me?</h3>
      <p>
        For most adults aged 20-65, a BMI between 18.5 and 24.9 is considered healthy. People over
        65 may benefit from a slightly higher BMI (25-27), as some extra weight can be protective in
        older age. Consult your doctor for personalized guidance.
      </p>

      <h3>Should I use BMI to set weight loss goals?</h3>
      <p>
        BMI is a useful reference point, but better goals focus on body fat percentage, waist
        measurement, fitness level, and how you feel. A 5-10% weight loss can significantly improve
        health markers even if your BMI doesn&apos;t cross a category line.
      </p>
    </section>
  )
}
