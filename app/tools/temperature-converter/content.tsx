'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>三种温度标尺</h2>
    <p>
      常用的温度标尺有三种。<strong>摄氏度(°C)</strong>用于几乎所有国家的日常天气和烹饪。<strong>华氏度(°F)</strong>在美国用于相同用途。<strong>开尔文(K)</strong>用于科学领域,测量绝对温度,从绝对零度开始计起。
    </p>

    <h2>换算公式</h2>
    <ul>
      <li><strong>摄氏度转华氏度:</strong> °F = (°C × 9/5) + 32</li>
      <li><strong>华氏度转摄氏度:</strong> °C = (°F − 32) × 5/9</li>
      <li><strong>摄氏度转开尔文:</strong> K = °C + 273.15</li>
      <li><strong>开尔文转摄氏度:</strong> °C = K − 273.15</li>
      <li><strong>华氏度转开尔文:</strong> K = (°F − 32) × 5/9 + 273.15</li>
    </ul>

    <h2>关键参考点</h2>
    <ul>
      <li><strong>水的冰点:</strong> 0°C = 32°F = 273.15 K</li>
      <li><strong>水的沸点:</strong> 100°C = 212°F = 373.15 K</li>
      <li><strong>体温:</strong> 37°C = 98.6°F</li>
      <li><strong>室温:</strong> ~20-22°C = 68-72°F</li>
      <li><strong>绝对零度:</strong> 0 K = -273.15°C = -459.67°F</li>
    </ul>

    <h2>快速心算技巧</h2>
    <p>
      估算 °C 到 °F:把摄氏度数值加倍再加 30。对于 20°C:<code>2×20 + 30 = 70°F</code>{' '}
      (实际:68°F — 对天气来说足够接近)。反过来,先减 30 再减半。这种近似方法适用于日常温度,但在极端温度下就不准了。
    </p>

    <h2>为什么美国使用华氏度</h2>
    <p>
      华氏温标由丹尼尔·加布里埃尔·华氏在 18 世纪初制定。美国在摄氏度成为全球标准之前就采用了它,而切换的成本——重新校准每一个恒温器、烤箱、天气预报和工业流程——使其沿用至今。大多数其他国家在 20 世纪 60—70 年代改用摄氏度。
    </p>

    <h2>开尔文在科学中的重要性</h2>
    <p>
      开尔文是一种<strong>绝对</strong>温标:0 K 是绝对零度,即所有热运动停止的理论点。开尔文温度没有负值(尽管摄氏度和华氏度的负值很常见)。开尔文与摄氏度的度数大小相同,只是偏移了 273.15,这使科学计算更简洁。
    </p>

    <h2>烹饪温度</h2>
    <p>常见烤箱温度参考:</p>
    <ul>
      <li><strong>慢烤 / 低温:</strong> 120°C = 250°F</li>
      <li><strong>中等:</strong> 180°C = 350°F(大多数烘焙)</li>
      <li><strong>高温:</strong> 200°C = 400°F</li>
      <li><strong>极高温:</strong> 230°C = 450°F(面包、披萨)</li>
    </ul>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Las tres escalas de temperatura</h2>
    <p>
      Hay tres escalas de temperatura de uso común. <strong>Los Celsius (°C)</strong> se usan para
      el clima y la cocina cotidianos en casi todos los países. <strong>Los Fahrenheit (°F)</strong>{' '}
      se usan para los mismos fines en Estados Unidos. <strong>Los Kelvin (K)</strong> se usan en
      ciencia y miden la temperatura absoluta, partiendo del cero absoluto.
    </p>

    <h2>Fórmulas de conversión</h2>
    <ul>
      <li><strong>De Celsius a Fahrenheit:</strong> °F = (°C × 9/5) + 32</li>
      <li><strong>De Fahrenheit a Celsius:</strong> °C = (°F − 32) × 5/9</li>
      <li><strong>De Celsius a Kelvin:</strong> K = °C + 273,15</li>
      <li><strong>De Kelvin a Celsius:</strong> °C = K − 273,15</li>
      <li><strong>De Fahrenheit a Kelvin:</strong> K = (°F − 32) × 5/9 + 273,15</li>
    </ul>

    <h2>Puntos de referencia clave</h2>
    <ul>
      <li><strong>El agua se congela:</strong> 0°C = 32°F = 273,15 K</li>
      <li><strong>El agua hierve:</strong> 100°C = 212°F = 373,15 K</li>
      <li><strong>Temperatura corporal:</strong> 37°C = 98,6°F</li>
      <li><strong>Temperatura ambiente:</strong> ~20-22°C = 68-72°F</li>
      <li><strong>Cero absoluto:</strong> 0 K = -273,15°C = -459,67°F</li>
    </ul>

    <h2>Truco rápido de conversión mental</h2>
    <p>
      Para estimar de °C a °F: duplica el número de Celsius y suma 30. Para 20°C:{' '}
      <code>2×20 + 30 = 70°F</code> (real: 68°F — lo suficientemente cercano para el clima). Para
      ir en sentido inverso, resta 30 y divide entre dos. Esta aproximación funciona bien para
      temperaturas cotidianas, pero falla en los extremos.
    </p>

    <h2>Por qué Estados Unidos usa Fahrenheit</h2>
    <p>
      La escala Fahrenheit fue desarrollada a principios del siglo XVIII por Daniel Gabriel
      Fahrenheit. Estados Unidos la adoptó antes de que los Celsius se convirtieran en el estándar
      mundial, y el coste del cambio — recalibrar cada termostato, horno, pronóstico del tiempo y
      proceso industrial — la ha mantenido en su lugar. La mayoría de los demás países cambiaron a
      Celsius en las décadas de 1960 y 1970.
    </p>

    <h2>Por qué los Kelvin importan en la ciencia</h2>
    <p>
      Kelvin es una escala <strong>absoluta</strong>: 0 K es el cero absoluto, el punto teórico en
      el que se detiene todo movimiento térmico. No hay temperaturas Kelvin negativas (aunque las
      negativas en Celsius y Fahrenheit son comunes). Kelvin usa el mismo tamaño de grado que los
      Celsius, simplemente desplazado 273,15, lo que hace más limpios los cálculos científicos.
    </p>

    <h2>Temperaturas de cocción</h2>
    <p>Ajustes comunes de horno como referencia:</p>
    <ul>
      <li><strong>Lento / bajo:</strong> 120°C = 250°F</li>
      <li><strong>Moderado:</strong> 180°C = 350°F (la mayoría de la repostería)</li>
      <li><strong>Alto:</strong> 200°C = 400°F</li>
      <li><strong>Muy alto:</strong> 230°C = 450°F (pan, pizza)</li>
    </ul>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die drei Temperaturskalen</h2>
    <p>
      Es gibt drei weit verbreitete Temperaturskalen. <strong>Celsius (°C)</strong> wird für
      alltägliches Wetter und Kochen in fast jedem Land verwendet. <strong>Fahrenheit (°F)</strong>{' '}
      wird in den Vereinigten Staaten für dieselben Zwecke verwendet. <strong>Kelvin (K)</strong>{' '}
      wird in der Wissenschaft verwendet und misst die absolute Temperatur, ausgehend vom absoluten
      Nullpunkt.
    </p>

    <h2>Umrechnungsformeln</h2>
    <ul>
      <li><strong>Celsius nach Fahrenheit:</strong> °F = (°C × 9/5) + 32</li>
      <li><strong>Fahrenheit nach Celsius:</strong> °C = (°F − 32) × 5/9</li>
      <li><strong>Celsius nach Kelvin:</strong> K = °C + 273,15</li>
      <li><strong>Kelvin nach Celsius:</strong> °C = K − 273,15</li>
      <li><strong>Fahrenheit nach Kelvin:</strong> K = (°F − 32) × 5/9 + 273,15</li>
    </ul>

    <h2>Wichtige Referenzpunkte</h2>
    <ul>
      <li><strong>Wasser gefriert:</strong> 0°C = 32°F = 273,15 K</li>
      <li><strong>Wasser siedet:</strong> 100°C = 212°F = 373,15 K</li>
      <li><strong>Körpertemperatur:</strong> 37°C = 98,6°F</li>
      <li><strong>Raumtemperatur:</strong> ~20-22°C = 68-72°F</li>
      <li><strong>Absoluter Nullpunkt:</strong> 0 K = -273,15°C = -459,67°F</li>
    </ul>

    <h2>Trick zur schnellen Kopfrechnung</h2>
    <p>
      Um von °C auf °F zu schätzen: verdopple die Celsius-Zahl und addiere 30. Für 20°C:{' '}
      <code>2×20 + 30 = 70°F</code> (tatsächlich: 68°F — für das Wetter nah genug). In die andere
      Richtung ziehst du 30 ab und halbierst. Diese Näherung funktioniert gut bei
      Alltagstemperaturen, bricht aber bei Extremen zusammen.
    </p>

    <h2>Warum die USA Fahrenheit verwenden</h2>
    <p>
      Die Fahrenheit-Skala wurde Anfang des 18. Jahrhunderts von Daniel Gabriel Fahrenheit
      entwickelt. Die USA übernahmen sie, bevor Celsius zum weltweiten Standard wurde, und die
      Kosten des Wechsels — jedes Thermostat, jeden Ofen, jede Wettervorhersage und jeden
      industriellen Prozess neu zu kalibrieren — haben sie bis heute gehalten. Die meisten anderen
      Länder wechselten in den 1960er- und 1970er-Jahren zu Celsius.
    </p>

    <h2>Warum Kelvin in der Wissenschaft wichtig ist</h2>
    <p>
      Kelvin ist eine <strong>absolute</strong> Skala: 0 K ist der absolute Nullpunkt, der
      theoretische Punkt, an dem alle thermische Bewegung stoppt. Es gibt keine negativen
      Kelvin-Temperaturen (obwohl negative Celsius- und Fahrenheit-Werte häufig vorkommen). Kelvin
      verwendet dieselbe Gradgröße wie Celsius, nur um 273,15 verschoben, was wissenschaftliche
      Berechnungen sauberer macht.
    </p>

    <h2>Gartemperaturen</h2>
    <p>Häufige Ofeneinstellungen als Referenz:</p>
    <ul>
      <li><strong>Niedrig:</strong> 120°C = 250°F</li>
      <li><strong>Mittel:</strong> 180°C = 350°F (die meisten Backwaren)</li>
      <li><strong>Heiß:</strong> 200°C = 400°F</li>
      <li><strong>Sehr heiß:</strong> 230°C = 450°F (Brot, Pizza)</li>
    </ul>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TemperatureConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
