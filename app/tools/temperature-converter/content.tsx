import type { ReactNode } from 'react'

export function TemperatureConverterContent(): ReactNode {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>The Three Temperature Scales</h2>
      <p>
        Three temperature scales are in common use. <strong>Celsius (°C)</strong> is used for
        everyday weather and cooking in nearly every country. <strong>Fahrenheit (°F)</strong> is
        used for the same purposes in the United States. <strong>Kelvin (K)</strong> is used in
        science and measures absolute temperature, starting from absolute zero.
      </p>

      <h2>Conversion Formulas</h2>
      <ul>
        <li><strong>Celsius to Fahrenheit:</strong> °F = (°C × 9/5) + 32</li>
        <li><strong>Fahrenheit to Celsius:</strong> °C = (°F − 32) × 5/9</li>
        <li><strong>Celsius to Kelvin:</strong> K = °C + 273.15</li>
        <li><strong>Kelvin to Celsius:</strong> °C = K − 273.15</li>
        <li><strong>Fahrenheit to Kelvin:</strong> K = (°F − 32) × 5/9 + 273.15</li>
      </ul>

      <h2>Key Reference Points</h2>
      <ul>
        <li><strong>Water freezes:</strong> 0°C = 32°F = 273.15 K</li>
        <li><strong>Water boils:</strong> 100°C = 212°F = 373.15 K</li>
        <li><strong>Body temperature:</strong> 37°C = 98.6°F</li>
        <li><strong>Room temperature:</strong> ~20-22°C = 68-72°F</li>
        <li><strong>Absolute zero:</strong> 0 K = -273.15°C = -459.67°F</li>
      </ul>

      <h2>Quick Mental Conversion Trick</h2>
      <p>
        To estimate °C to °F: double the Celsius number and add 30. For 20°C: <code>2×20 + 30 = 70°F</code>{' '}
        (actual: 68°F — close enough for weather). To go the other way, subtract 30 and halve. This
        approximation works well for everyday temperatures but breaks down at extremes.
      </p>

      <h2>Why the US Uses Fahrenheit</h2>
      <p>
        The Fahrenheit scale was developed in the early 1700s by Daniel Gabriel Fahrenheit. The US
        adopted it before Celsius became the global standard, and the cost of switching —
        re-calibrating every thermostat, oven, weather forecast, and industrial process — has kept
        it in place. Most other countries switched to Celsius in the 1960s-70s.
      </p>

      <h2>Why Kelvin Matters in Science</h2>
      <p>
        Kelvin is an <strong>absolute</strong> scale: 0 K is absolute zero, the theoretical point
        where all thermal motion stops. There are no negative Kelvin temperatures (though negative
        Celsius and Fahrenheit are common). Kelvin uses the same degree size as Celsius, just
        shifted by 273.15, making scientific calculations cleaner.
      </p>

      <h2>Cooking Temperatures</h2>
      <p>Common oven settings for reference:</p>
      <ul>
        <li><strong>Slow / Low:</strong> 120°C = 250°F</li>
        <li><strong>Moderate:</strong> 180°C = 350°F (most baking)</li>
        <li><strong>Hot:</strong> 200°C = 400°F</li>
        <li><strong>Very hot:</strong> 230°C = 450°F (bread, pizza)</li>
      </ul>
    </section>
  )
}
