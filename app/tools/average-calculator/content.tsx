'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是平均值？</h2>
    <p>
      <strong>平均值</strong>是代表一组数据中心位置的单一数字。但平均值有好几种，同一组数据用不同的平均值可能讲出完全不同的故事。本计算器一次显示所有最常用的平均值，方便你根据情况选择合适的指标。
    </p>

    <h2>平均值与中位数：为什么两者都重要</h2>
    <p>
      <strong>平均值</strong>（大多数人所说的「the average」）是总和除以个数。<strong>中位数</strong>是将数字排序后的中间值。当存在离群值时，两者差异巨大。
    </p>
    <p>
      例如：九个人每人收入 $50,000，一位 CEO 收入 $1,000,000。平均收入是 $145,000，但中位数是 $50,000。中位数反映了普通人实际挣多少；平均值被离群值拉高。<strong>务必两者都看。</strong>
    </p>

    <h2>何时使用每种指标</h2>
    <ul>
      <li>
        <strong>平均值：</strong>数据对称分布且没有极端离群值时最佳。用于考试分数、温度、身高。
      </li>
      <li>
        <strong>中位数：</strong>适用于收入、房价或响应时间等偏态数据。对离群值不敏感。
      </li>
      <li>
        <strong>极差（最大值 − 最小值）：</strong>显示离散程度。范围越大，变异性越高。
      </li>
    </ul>

    <h2>如何计算平均值</h2>
    <p>
      把所有数字相加，再除以数字的个数。对于 12, 15, 18, 22, 9：{' '}
      <code>(12 + 15 + 18 + 22 + 9) ÷ 5 = 76 ÷ 5 = 15.2</code>。
    </p>

    <h2>如何计算中位数</h2>
    <p>
      将数字排序，然后取中间那个。如果是偶数个，就取中间两个数的平均值。对于 9, 12, 15, 18, 22（已排序）：中位数是 15。对于 9, 12, 15, 18（偶数个）：中位数是 <code>(12 + 15) ÷ 2 = 13.5</code>。
    </p>

    <h2>常见用途</h2>
    <ul>
      <li><strong>成绩：</strong>将多次考试分数求平均得到最终成绩</li>
      <li><strong>体育：</strong>击球率、每场得分</li>
      <li><strong>商业：</strong>平均销售额、响应时间、客户评分</li>
      <li><strong>个人理财：</strong>月均支出</li>
      <li><strong>科学：</strong>重复测量以减少误差</li>
    </ul>

    <h2>当心辛普森悖论</h2>
    <p>
      当你混合不同群体时，平均值可能产生误导。一个著名例子：一所大学的整体录取率可能偏向男性，尽管每个单独的院系都偏向女性——因为男性更多申请了更容易进入的院系。在相信一个平均值之前，务必检查你的数据是否混入了不同的人群。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es un promedio?</h2>
    <p>
      Un <strong>promedio</strong> es un solo número que representa el centro de un conjunto de
      números. Pero hay varios tipos de promedios, y pueden contar historias muy diferentes
      sobre los mismos datos. Esta calculadora muestra todos los más útiles a la vez para que
      elijas la métrica correcta para tu situación.
    </p>

    <h2>Media vs. Mediana: por qué importan ambas</h2>
    <p>
      La <strong>media</strong> (lo que la mayoría llama «el promedio») es la suma dividida entre
      la cantidad. La <strong>mediana</strong> es el valor central cuando los números están
      ordenados. Difieren drásticamente cuando hay valores atípicos.
    </p>
    <p>
      Ejemplo: nueve personas ganan $50,000 y un CEO gana $1,000,000. La media de ingresos es
      $145,000, pero la mediana es $50,000. La mediana refleja lo que gana realmente la persona
      típica; la media es arrastrada por el valor atípico. <strong>Siempre mira ambas.</strong>
    </p>

    <h2>Cuándo usar cada medida</h2>
    <ul>
      <li>
        <strong>Media:</strong> mejor cuando los datos están distribuidos simétricamente sin
        valores atípicos extremos. Se usa para calificaciones de exámenes, temperaturas, alturas.
      </li>
      <li>
        <strong>Mediana:</strong> mejor para datos sesgados como ingresos, precios de vivienda o
        tiempos de respuesta. Resistente a valores atípicos.
      </li>
      <li>
        <strong>Rango (máx − mín):</strong> muestra la dispersión. Un rango amplio significa alta
        variabilidad.
      </li>
    </ul>

    <h2>Cómo calcular la media</h2>
    <p>
      Suma todos los números y divide entre cuántos hay. Para 12, 15, 18, 22, 9:{' '}
      <code>(12 + 15 + 18 + 22 + 9) ÷ 5 = 76 ÷ 5 = 15.2</code>.
    </p>

    <h2>Cómo calcular la mediana</h2>
    <p>
      Ordena los números y toma el del medio. Si hay una cantidad par, promedia los dos valores
      centrales. Para 9, 12, 15, 18, 22 (ordenados): la mediana es 15. Para 9, 12, 15, 18 (cantidad
      par): la mediana es <code>(12 + 15) ÷ 2 = 13.5</code>.
    </p>

    <h2>Usos comunes</h2>
    <ul>
      <li><strong>Calificaciones:</strong> promediar notas de exámenes para obtener una nota final</li>
      <li><strong>Deportes:</strong> promedios de bateo, puntos por partido</li>
      <li><strong>Negocios:</strong> ventas promedio, tiempos de respuesta, calificaciones de clientes</li>
      <li><strong>Finanzas personales:</strong> gasto mensual promedio</li>
      <li><strong>Ciencia:</strong> mediciones repetidas para reducir el error</li>
    </ul>

    <h2>Cuidado con la paradoja de Simpson</h2>
    <p>
      Los promedios pueden engañar cuando mezclas grupos diferentes. Un ejemplo famoso: la tasa
      de admisión general de una universidad puede favorecer a los hombres, aunque cada
      departamento individual favorezca a las mujeres, porque los hombres aplicaron más a
      departamentos más fáciles de entrar. Siempre verifica si tus datos combinan poblaciones
      distintas antes de confiar en un promedio.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist ein Durchschnitt?</h2>
    <p>
      Ein <strong>Durchschnitt</strong> ist eine einzelne Zahl, die das Zentrum einer Zahlenmenge
      darstellt. Es gibt aber mehrere Arten von Durchschnitten, und sie können sehr unterschiedliche
      Geschichten über dieselben Daten erzählen. Dieser Rechner zeigt alle nützlichsten auf einmal,
      damit du die richtige Kennzahl für deine Situation wählen kannst.
    </p>

    <h2>Mittelwert vs. Median: Warum beide wichtig sind</h2>
    <p>
      Der <strong>Mittelwert</strong> (was die meisten „den Durchschnitt" nennen) ist die Summe
      geteilt durch die Anzahl. Der <strong>Median</strong> ist der mittlere Wert, wenn die Zahlen
      sortiert sind. Sie unterscheiden sich stark, wenn Ausreißer vorhanden sind.
    </p>
    <p>
      Beispiel: neun Personen verdienen $50,000 und ein CEO verdient $1,000,000. Das
      Durchschnittseinkommen ist $145,000, aber der Median ist $50,000. Der Median spiegelt wider,
      was eine typische Person tatsächlich verdient; der Mittelwert wird vom Ausreißer nach oben
      gezogen. <strong>Schau dir immer beide an.</strong>
    </p>

    <h2>Wann man welche Maßzahl verwendet</h2>
    <ul>
      <li>
        <strong>Mittelwert:</strong> am besten, wenn die Daten symmetrisch verteilt sind ohne
        extreme Ausreißer. Verwendet für Testergebnisse, Temperaturen, Körpergrößen.
      </li>
      <li>
        <strong>Median:</strong> am besten für schiefe Daten wie Einkommen, Immobilienpreise oder
        Antwortzeiten. Unempfindlich gegenüber Ausreißern.
      </li>
      <li>
        <strong>Spannweite (max − min):</strong> zeigt die Streuung. Eine weite Spannweite bedeutet
        hohe Variabilität.
      </li>
    </ul>

    <h2>Wie man den Mittelwert berechnet</h2>
    <p>
      Addiere alle Zahlen und teile durch ihre Anzahl. Für 12, 15, 18, 22, 9:{' '}
      <code>(12 + 15 + 18 + 22 + 9) ÷ 5 = 76 ÷ 5 = 15.2</code>.
    </p>

    <h2>Wie man den Median berechnet</h2>
    <p>
      Sortiere die Zahlen und nimm die mittlere. Bei einer geraden Anzahl bilde den Durchschnitt
      der beiden mittleren Werte. Für 9, 12, 15, 18, 22 (sortiert): der Median ist 15. Für 9, 12,
      15, 18 (gerade Anzahl): der Median ist <code>(12 + 15) ÷ 2 = 13.5</code>.
    </p>

    <h2>Häufige Anwendungen</h2>
    <ul>
      <li><strong>Noten:</strong> Testergebnisse mitteln, um eine Endnote zu erhalten</li>
      <li><strong>Sport:</strong> Schlagdurchschnitte, Punkte pro Spiel</li>
      <li><strong>Business:</strong> durchschnittliche Verkäufe, Antwortzeiten, Kundenbewertungen</li>
      <li><strong>Persönliche Finanzen:</strong> durchschnittliche monatliche Ausgaben</li>
      <li><strong>Wissenschaft:</strong> wiederholte Messungen zur Fehlerreduktion</li>
    </ul>

    <h2>Vorsicht vor Simpsons Paradoxon</h2>
    <p>
      Durchschnitte können täuschen, wenn du verschiedene Gruppen mischst. Ein berühmtes Beispiel:
      die generelle Zulassungsrate einer Universität kann Männer bevorzugen, obwohl jede einzelne
      Fachrichtung Frauen bevorzugt — weil Männer sich häufiger bei leichter zugänglichen
      Fachrichtungen bewarben. Prüfe immer, ob deine Daten unterschiedliche Populationen
      kombinieren, bevor du einem Durchschnitt vertraust.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AverageCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
