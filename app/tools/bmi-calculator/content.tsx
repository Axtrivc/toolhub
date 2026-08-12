'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
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
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是 BMI？</h2>
    <p>
      <strong>BMI</strong>（身体质量指数）是根据你的身高和体重计算出的一个数字，用于粗略判断你的体重是否处于健康范围。它是最广泛使用的体重类别筛查工具：体重过轻、健康体重、超重和肥胖。该标准由比利时数学家 Adolphe Quetelet 于 19 世纪 30 年代提出，并被世界卫生组织用于人群层面的健康统计。
    </p>

    <h2>BMI 公式</h2>
    <p>计算很简单：</p>
    <ul>
      <li>
        <strong>公制：</strong>BMI = 体重 (kg) ÷ 身高² (m²)
      </li>
      <li>
        <strong>英制：</strong>BMI = (体重 (lb) ÷ 身高² (in²)) × 703
      </li>
    </ul>
    <p>
      例如，一位身高 170 cm、体重 65 kg 的人：<code>65 ÷ (1.70 × 1.70) = 22.5</code>，属于健康体重范围。
    </p>

    <h2>BMI 分类（WHO 标准）</h2>
    <ul>
      <li><strong>低于 18.5：</strong>体重过轻</li>
      <li><strong>18.5 – 24.9：</strong>健康体重</li>
      <li><strong>25.0 – 29.9：</strong>超重</li>
      <li><strong>30.0 – 34.9：</strong>肥胖（I 级）</li>
      <li><strong>35.0 – 39.9：</strong>肥胖（II 级）</li>
      <li><strong>40.0 及以上：</strong>肥胖（III 级）</li>
    </ul>

    <h2>BMI 无法告诉你的事</h2>
    <p>
      BMI 是一个有用的筛查工具，但它确实存在局限性。它衡量的是相对于身高的总重量，却无法区分脂肪、肌肉、骨骼和水分。这一点很重要：
    </p>
    <ul>
      <li>
        <strong>运动员和健美者</strong>常被评为「超重」，因为肌肉的密度大于脂肪。一位体脂率 10% 的职业橄榄球运动员，BMI 可能在 28 左右。
      </li>
      <li>
        <strong>老年人</strong>可能拥有「健康」的 BMI，但体脂率高、肌肉量少——这是 BMI 所忽略的风险。
      </li>
      <li>
        <strong>体脂分布</strong>很重要。腰部脂肪比臀部脂肪带来更高的健康风险，但 BMI 无法区分。
      </li>
      <li>
        <strong>儿童和青少年</strong>需要基于百分位的图表，而不是成人的范围。
      </li>
    </ul>

    <h2>适合你身高的健康体重范围</h2>
    <p>
      本计算器还会显示与你的身高相对应、BMI 为 18.5–24.9 的体重范围。如果你当前的体重落在该范围内，你的 BMI 就属于健康类别。如果偏高或偏低，这个范围会给你一个具体的目标。
    </p>

    <h2>BMI 的替代方案</h2>
    <p>想要更全面地了解健康状况，可以考虑以下互补的测量指标：</p>
    <ul>
      <li>
        <strong>腰围。</strong>男性超过 40 inches（102 cm）或女性超过 35 inches（88 cm）提示较高的代谢风险。
      </li>
      <li>
        <strong>腰臀比。</strong>比较腰围和臀围，用以评估脂肪分布。
      </li>
      <li>
        <strong>体脂率。</strong>用卡尺、体脂秤或 DEXA 扫描测量。能够提供 BMI 无法提供的信息。
      </li>
    </ul>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es el IMC?</h2>
    <p>
      El <strong>IMC</strong> (Índice de Masa Corporal) es un número calculado a partir de tu
      estatura y peso que da una indicación aproximada de si tu peso está en un rango saludable.
      Es la herramienta de cribado más utilizada para las categorías de peso: bajo peso, peso
      saludable, sobrepeso y obesidad. El estándar fue desarrollado en la década de 1830 por el
      matemático belga Adolphe Quetelet y adoptado por la Organización Mundial de la Salud para
      las estadísticas de salud a nivel poblacional.
    </p>

    <h2>La fórmula del IMC</h2>
    <p>El cálculo es sencillo:</p>
    <ul>
      <li>
        <strong>Métrico:</strong> IMC = peso (kg) ÷ estatura² (m²)
      </li>
      <li>
        <strong>Imperial:</strong> IMC = (peso (lb) ÷ estatura² (in²)) × 703
      </li>
    </ul>
    <p>
      Por ejemplo, alguien que mide 170 cm y pesa 65 kg: <code>65 ÷ (1.70 × 1.70) = 22.5</code>,
      lo que lo sitúa en el rango de peso saludable.
    </p>

    <h2>Categorías de IMC (estándar de la OMS)</h2>
    <ul>
      <li><strong>Por debajo de 18.5:</strong> Bajo peso</li>
      <li><strong>18.5 – 24.9:</strong> Peso saludable</li>
      <li><strong>25.0 – 29.9:</strong> Sobrepeso</li>
      <li><strong>30.0 – 34.9:</strong> Obesidad (clase I)</li>
      <li><strong>35.0 – 39.9:</strong> Obesidad (clase II)</li>
      <li><strong>40.0 y superior:</strong> Obesidad (clase III)</li>
    </ul>

    <h2>Lo que el IMC no te dice</h2>
    <p>
      El IMC es una herramienta de cribado útil, pero tiene limitaciones reales. Mide el peso
      total en relación con la estatura, pero no puede distinguir entre grasa, músculo, hueso y
      agua. Esto importa:
    </p>
    <ul>
      <li>
        <strong>Los atletas y fisicoculturistas</strong> a menudo obtienen un resultado de
        «sobrepeso» porque el músculo es más denso que la grasa. Un jugador profesional de rugby
        con 10% de grasa corporal podría tener un IMC de 28.
      </li>
      <li>
        <strong>Los adultos mayores</strong> pueden tener un IMC «saludable» pero mucha grasa
        corporal y poca masa muscular — un riesgo que el IMC pasa por alto.
      </li>
      <li>
        <strong>La distribución de la grasa corporal</strong> importa. La grasa alrededor de la
        cintura conlleva más riesgo para la salud que la grasa alrededor de las caderas, pero el
        IMC no puede notar la diferencia.
      </li>
      <li>
        <strong>Los niños y adolescentes</strong> necesitan gráficos basados en percentiles, no
        los rangos para adultos.
      </li>
    </ul>

    <h2>Rango de peso saludable para tu estatura</h2>
    <p>
      Esta calculadora también muestra el rango de peso que corresponde a un IMC de 18.5–24.9 para
      tu estatura. Si tu peso actual cae dentro de este rango, tu IMC está en la categoría
      saludable. Si estás por encima o por debajo, el rango te da un objetivo concreto.
    </p>

    <h2>Alternativas al IMC</h2>
    <p>Para una imagen más completa de la salud, considera estas mediciones complementarias:</p>
    <ul>
      <li>
        <strong>Perímetro de cintura.</strong> Más de 40 inches (102 cm) en hombres o 35 inches
        (88 cm) en mujeres indica un riesgo metabólico mayor.
      </li>
      <li>
        <strong>Relación cintura-cadera.</strong> Compara las mediciones de cintura y cadera para
        evaluar la distribución de la grasa.
      </li>
      <li>
        <strong>Porcentaje de grasa corporal.</strong> Se mide con calibradores, básculas o
        escaneos DEXA. Aporta lo que el IMC no puede.
      </li>
    </ul>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist der BMI?</h2>
    <p>
      Der <strong>BMI</strong> (Body-Mass-Index) ist eine Zahl, die aus deiner Größe und deinem
      Gewicht berechnet wird und einen groben Hinweis darauf gibt, ob dein Gewicht in einem
      gesunden Bereich liegt. Er ist das am weitesten verbreitete Screening-Instrument für
      Gewichtskategorien: Untergewicht, Normalgewicht, Übergewicht und Adipositas. Der Standard
      wurde in den 1830er Jahren vom belgischen Mathematiker Adolphe Quetelet entwickelt und von
      der Weltgesundheitsorganisation für gesundheitsstatistische Erhebungen auf
      Bevölkerungsebene übernommen.
    </p>

    <h2>Die BMI-Formel</h2>
    <p>Die Berechnung ist einfach:</p>
    <ul>
      <li>
        <strong>Metrisch:</strong> BMI = Gewicht (kg) ÷ Größe² (m²)
      </li>
      <li>
        <strong>Imperial:</strong> BMI = (Gewicht (lb) ÷ Größe² (in²)) × 703
      </li>
    </ul>
    <p>
      Zum Beispiel jemand, der 170 cm groß ist und 65 kg wiegt:{' '}
      <code>65 ÷ (1.70 × 1.70) = 22.5</code>, was ihn in den Normalgewichtsbereich einordnet.
    </p>

    <h2>BMI-Kategorien (WHO-Standard)</h2>
    <ul>
      <li><strong>Unter 18.5:</strong> Untergewicht</li>
      <li><strong>18.5 – 24.9:</strong> Normalgewicht</li>
      <li><strong>25.0 – 29.9:</strong> Übergewicht</li>
      <li><strong>30.0 – 34.9:</strong> Adipositas (Klasse I)</li>
      <li><strong>35.0 – 39.9:</strong> Adipositas (Klasse II)</li>
      <li><strong>40.0 und darüber:</strong> Adipositas (Klasse III)</li>
    </ul>

    <h2>Was dir der BMI nicht sagt</h2>
    <p>
      BMI ist ein nützliches Screening-Instrument, hat aber echte Grenzen. Er misst das
      Gesamtgewicht im Verhältnis zur Größe, kann aber nicht zwischen Fett, Muskel, Knochen und
      Wasser unterscheiden. Das ist wichtig:
    </p>
    <ul>
      <li>
        <strong>Athleten und Bodybuilder</strong> erzielen oft den Wert „Übergewicht", da Muskel
        dichter ist als Fett. Ein professioneller Rugbyspieler mit 10% Körperfett könnte einen BMI
        von 28 haben.
      </li>
      <li>
        <strong>Ältere Erwachsene</strong> können einen „gesunden" BMI haben, aber einen hohen
        Körperfettanteil und eine geringe Muskelmasse — ein Risiko, das der BMI übersieht.
      </li>
      <li>
        <strong>Die Körperfettverteilung</strong> ist wichtig. Fett an der Taille birgt ein
        höheres Gesundheitsrisiko als Fett an den Hüften, aber der BMI kann den Unterschied nicht
        erkennen.
      </li>
      <li>
        <strong>Kinder und Jugendliche</strong> benötigen perzentilbasierte Diagramme, nicht die
        Erwachsenenbereiche.
      </li>
    </ul>

    <h2>Gesunder Gewichtsbereich für deine Größe</h2>
    <p>
      Dieser Rechner zeigt außerdem den Gewichtsbereich, der einem BMI von 18.5–24.9 für deine
      Größe entspricht. Wenn dein aktuelles Gewicht in diesen Bereich fällt, liegt dein BMI in der
      gesunden Kategorie. Liegst du darüber oder darunter, gibt dir der Bereich ein konkretes Ziel.
    </p>

    <h2>Alternativen zum BMI</h2>
    <p>Für ein vollständigeres Bild der Gesundheit ziehe diese ergänzenden Messungen in Betracht:</p>
    <ul>
      <li>
        <strong>Taillenumfang.</strong> Über 40 inches (102 cm) bei Männern oder 35 inches (88 cm)
        bei Frauen weist auf ein höheres metabolisches Risiko hin.
      </li>
      <li>
        <strong>Taille-Hüft-Verhältnis.</strong> Vergleicht Taillen- und Hüftmessungen, um die
        Fettverteilung zu beurteilen.
      </li>
      <li>
        <strong>Körperfettanteil.</strong> Wird mit Messzangen, Waagen oder DEXA-Scans gemessen.
        Liefert, was der BMI nicht liefern kann.
      </li>
    </ul>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BMICalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
