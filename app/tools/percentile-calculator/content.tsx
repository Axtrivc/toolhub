'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>percentile</strong> tells you what percentage of values fall below a given number. The 90th percentile means 90% of the data is below that value. This calculator finds the value at any percentile you choose.</p>
    <div>
      <h2>Common Percentile Uses</h2>
      <ul>
        <li><strong>Test scores:</strong> SAT, GRE — &quot;95th percentile&quot; means you scored higher than 95% of test takers</li>
        <li><strong>Salaries:</strong> Income percentiles show where you stand vs. peers</li>
        <li><strong>Health:</strong> Children&apos;s height/weight percentiles for growth tracking</li>
        <li><strong>Performance:</strong> API response times — &quot;p95 latency&quot; means 95% of requests were faster</li>
      </ul>
    </div>
    <div>
      <h2>How Percentiles Are Calculated</h2>
      <p>There are several methods. This calculator uses <strong>linear interpolation</strong> (the same method Excel&apos;s PERCENTILE function uses). It sorts the data, then interpolates between adjacent values for percentiles that fall between data points.</p>
    </div>
    <div>
      <h2>Percentile vs. Percentage</h2>
      <p>These are different. A <strong>percentage</strong> is a fraction of 100 (you got 85% of questions right). A <strong>percentile</strong> compares you to others (you scored higher than 90% of people). Scoring 85% on a test might put you in the 70th or 99th percentile, depending on how others did.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p><strong>百分位数</strong>告诉你有多大比例的数值低于某个给定数字。第 90 百分位数意味着 90% 的数据低于该值。本计算器可求出你指定的任意百分位数所对应的数值。</p>
    <div>
      <h2>百分位数的常见用途</h2>
      <ul>
        <li><strong>考试成绩:</strong>SAT、GRE ——「第 95 百分位数」表示你的得分高于 95% 的考生</li>
        <li><strong>薪资:</strong>收入百分位数显示你在同龄人中所处的位置</li>
        <li><strong>健康:</strong>儿童身高/体重百分位数,用于追踪生长发育</li>
        <li><strong>性能:</strong>API 响应时间 ——「p95 延迟」表示 95% 的请求比它更快</li>
      </ul>
    </div>
    <div>
      <h2>百分位数如何计算</h2>
      <p>计算方法有多种。本计算器采用<strong>线性插值法</strong>(与 Excel 的 PERCENTILE 函数所用方法相同)。它先对数据排序,再对落在两个数据点之间的百分位数,在相邻数值之间进行插值。</p>
    </div>
    <div>
      <h2>百分位数 vs 百分比</h2>
      <p>二者不同。<strong>百分比</strong>是 100 中的份额(你答对了 85% 的题目)。<strong>百分位数</strong>则是将你与他人比较(你的得分高于 90% 的人)。在一场考试中考 85%,可能把你置于第 70 或第 99 百分位,取决于其他人的表现。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Un <strong>percentil</strong> te dice qué porcentaje de valores caen por debajo de un número dado. El percentil 90 significa que el 90 % de los datos está por debajo de ese valor. Esta calculadora encuentra el valor en cualquier percentil que elijas.</p>
    <div>
      <h2>Usos comunes de los percentiles</h2>
      <ul>
        <li><strong>Notas de exámenes:</strong> SAT, GRE — «percentil 95» significa que sacaste más que el 95 % de quienes hicieron la prueba</li>
        <li><strong>Salarios:</strong> Los percentiles de ingresos muestran tu posición frente a tus colegas</li>
        <li><strong>Salud:</strong> Percentiles de altura y peso infantil para seguir el crecimiento</li>
        <li><strong>Rendimiento:</strong> Tiempos de respuesta de API — «latencia p95» significa que el 95 % de las solicitudes fueron más rápidas</li>
      </ul>
    </div>
    <div>
      <h2>Cómo se calculan los percentiles</h2>
      <p>Existen varios métodos. Esta calculadora usa la <strong>interpolación lineal</strong> (el mismo método que emplea la función PERCENTILE de Excel). Ordena los datos y luego interpola entre valores adyacentes para los percentiles que caen entre puntos de datos.</p>
    </div>
    <div>
      <h2>Percentil frente a porcentaje</h2>
      <p>Son cosas distintas. Un <strong>porcentaje</strong> es una fracción de 100 (acertaste el 85 % de las preguntas). Un <strong>percentil</strong> te compara con otros (sacaste más que el 90 % de las personas). Sacar un 85 % en un examen puede situarte en el percentil 70 o 99, según cómo lo hayan hecho los demás.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Ein <strong>Perzentil</strong> sagt dir, welcher Prozentsatz der Werte unter einer bestimmten Zahl liegt. Das 90. Perzentil bedeutet, dass 90 % der Daten unterhalb dieses Wertes liegen. Dieser Rechner findet den Wert an jedem von dir gewählten Perzentil.</p>
    <div>
      <h2>Häufige Anwendungen von Perzentilen</h2>
      <ul>
        <li><strong>Prüfungsergebnisse:</strong> SAT, GRE — „95. Perzentil“ bedeutet, du hast besser abgeschnitten als 95 % der Teilnehmenden</li>
        <li><strong>Gehälter:</strong> Einkommensperzentile zeigen, wo du im Vergleich zu Gleichgestellten stehst</li>
        <li><strong>Gesundheit:</strong> Perzentile für Körpergröße und Gewicht von Kindern zur Entwicklungsnachverfolgung</li>
        <li><strong>Performance:</strong> API-Antwortzeiten — „p95-Latenz“ bedeutet, dass 95 % der Anfragen schneller waren</li>
      </ul>
    </div>
    <div>
      <h2>Wie Perzentile berechnet werden</h2>
      <p>Es gibt mehrere Methoden. Dieser Rechner verwendet <strong>lineare Interpolation</strong> (dieselbe Methode wie die PERCENTILE-Funktion von Excel). Er sortiert die Daten und interpoliert dann zwischen benachbarten Werten für Perzentile, die zwischen Datenpunkten liegen.</p>
    </div>
    <div>
      <h2>Perzentil vs. Prozent</h2>
      <p>Das sind verschiedene Dinge. Ein <strong>Prozent</strong>satz ist ein Bruchteil von 100 (du hast 85 % der Fragen richtig). Ein <strong>Perzentil</strong> vergleicht dich mit anderen (du hast besser abgeschnitten als 90 % der Leute). 85 % in einer Prüfung können dich ins 70. oder 99. Perzentil bringen, je nachdem, wie die anderen abgeschnitten haben.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PercentileCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
