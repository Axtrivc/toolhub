'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GPA Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is GPA?</h2>
    <p>
      <strong>GPA</strong> (Grade Point Average) is a number that summarizes your academic
      performance across all your courses, typically on a scale from 0.0 to 4.0. Each letter grade
      is assigned a point value, and your GPA is the credit-weighted average of those points. It&apos;s
      the standard metric colleges, scholarship committees, and employers use to compare students.
    </p>

    <h2>The Standard 4.0 GPA Scale</h2>
    <ul>
      <li><strong>A / A+:</strong> 4.0 (Excellent)</li>
      <li><strong>A-:</strong> 3.7</li>
      <li><strong>B+:</strong> 3.3</li>
      <li><strong>B:</strong> 3.0 (Good)</li>
      <li><strong>B-:</strong> 2.7</li>
      <li><strong>C+:</strong> 2.3</li>
      <li><strong>C:</strong> 2.0 (Satisfactory)</li>
      <li><strong>D:</strong> 1.0 (Passing)</li>
      <li><strong>F:</strong> 0.0 (Failing)</li>
    </ul>

    <h2>How GPA Is Calculated</h2>
    <p>
      GPA is a <strong>credit-weighted average</strong>, not a simple average of your grades. A
      4-credit course counts twice as much as a 2-credit course. The formula:
    </p>
    <p>
      <code>GPA = Σ(grade points × credits) ÷ Σ(credits)</code>
    </p>
    <p>
      For example, if you have an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course:
      <code> (4.0×3 + 3.0×4) ÷ (3+4) = 24 ÷ 7 = 3.43</code>.
    </p>

    <h2>Why GPA Matters</h2>
    <ul>
      <li><strong>College admissions.</strong> Most universities weight GPA heavily in their decisions.</li>
      <li><strong>Scholarships.</strong> Many require a minimum GPA (often 3.0, 3.5, or 3.7).</li>
      <li><strong>Honors programs.</strong> Dean&apos;s List typically requires 3.5+; Latin honors (cum laude) often start at 3.5.</li>
      <li><strong>Graduate school.</strong> Competitive programs often expect 3.5+.</li>
      <li><strong>First jobs.</strong> Some employers filter by GPA, especially for new graduates.</li>
    </ul>

    <h2>Weighted vs. Unweighted GPA</h2>
    <p>
      This calculator uses the <strong>unweighted</strong> 4.0 scale, where an A is always 4.0
      regardless of course difficulty. Many high schools use a <strong>weighted</strong> scale that
      gives extra points for honors or AP classes (an A in AP might be 5.0). If your school weights
      grades, adjust the grade point values to match — the math is the same.
    </p>

    <h2>How to Raise Your GPA</h2>
    <ol>
      <li><strong>Focus on high-credit courses.</strong> They move your GPA the most.</li>
      <li><strong>Retake failed classes</strong> if your school replaces the grade.</li>
      <li><strong>Take easier electives strategically</strong> to offset tougher required courses.</li>
      <li><strong>Use office hours.</strong> A small grade bump (B+ to A-) compounds across classes.</li>
    </ol>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>GPA 是什么?</h2>
    <p>
      <strong>GPA</strong>(平均学分绩点)是一个汇总你所有课程学业表现的数字,通常采用 0.0 到 4.0 的量表。每个字母等级对应一个积分,你的 GPA 就是这些积分按学分加权的平均值。它是大学、奖学金评审委员会和雇主用来比较学生的标准指标。
    </p>

    <h2>标准 4.0 GPA 量表</h2>
    <ul>
      <li><strong>A / A+:</strong>4.0(优秀)</li>
      <li><strong>A-:</strong>3.7</li>
      <li><strong>B+:</strong>3.3</li>
      <li><strong>B:</strong>3.0(良好)</li>
      <li><strong>B-:</strong>2.7</li>
      <li><strong>C+:</strong>2.3</li>
      <li><strong>C:</strong>2.0(合格)</li>
      <li><strong>D:</strong>1.0(及格)</li>
      <li><strong>F:</strong>0.0(不及格)</li>
    </ul>

    <h2>GPA 是怎么算的</h2>
    <p>
      GPA 是<strong>按学分加权</strong>的平均值,而不是各科成绩的简单平均。一门 4 学分的课的影响力是一门 2 学分课的两倍。公式如下:
    </p>
    <p>
      <code>GPA = Σ(积分 × 学分) ÷ Σ(学分)</code>
    </p>
    <p>
      例如,你在一门 3 学分的课拿了 A(4.0),在一门 4 学分的课拿了 B(3.0):
      <code> (4.0×3 + 3.0×4) ÷ (3+4) = 24 ÷ 7 = 3.43</code>。
    </p>

    <h2>GPA 为什么重要</h2>
    <ul>
      <li><strong>大学录取。</strong>大多数大学在录取决定中非常看重 GPA。</li>
      <li><strong>奖学金。</strong>许多奖学金要求最低 GPA(常见为 3.0、3.5 或 3.7)。</li>
      <li><strong>荣誉项目。</strong>「院长名单」通常要求 3.5 以上;拉丁文荣誉(cum laude)往往从 3.5 起算。</li>
      <li><strong>研究生院。</strong>有竞争力的项目通常期望 3.5 以上。</li>
      <li><strong>第一份工作。</strong>部分雇主会按 GPA 筛选,尤其是应届毕业生。</li>
    </ul>

    <h2>加权 GPA 与不加权 GPA</h2>
    <p>
      本计算器使用<strong>不加权</strong>的 4.0 量表,即不论课程难度如何,A 永远是 4.0。许多高中采用<strong>加权</strong>量表,会给荣誉课程或 AP 课程额外加分(AP 中的 A 可能是 5.0)。如果你的学校采用加权成绩,请相应调整积分值——计算方法是一样的。
    </p>

    <h2>如何提高 GPA</h2>
    <ol>
      <li><strong>把精力放在高学分课程上。</strong>它们对 GPA 的影响最大。</li>
      <li><strong>重修不及格的课程</strong>,前提是你的学校会替换原有成绩。</li>
      <li><strong>策略性地选修较简单的课</strong>,以抵消难度更高的必修课。</li>
      <li><strong>利用答疑时间。</strong>一个小的提分(B+ 到 A-)会在多门课之间累积放大。</li>
    </ol>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es el GPA?</h2>
    <p>
      El <strong>GPA</strong> (Grade Point Average, promedio de calificaciones) es un número que resume tu desempeño
      académico en todos tus cursos, normalmente en una escala de 0,0 a 4,0. Cada letra de calificación tiene
      asignado un valor en puntos, y tu GPA es el promedio ponderado por créditos de esos puntos. Es la métrica
      estándar que usan universidades, comités de becas y empleadores para comparar estudiantes.
    </p>

    <h2>La escala estándar de GPA 4.0</h2>
    <ul>
      <li><strong>A / A+:</strong> 4,0 (Excelente)</li>
      <li><strong>A-:</strong> 3,7</li>
      <li><strong>B+:</strong> 3,3</li>
      <li><strong>B:</strong> 3,0 (Bueno)</li>
      <li><strong>B-:</strong> 2,7</li>
      <li><strong>C+:</strong> 2,3</li>
      <li><strong>C:</strong> 2,0 (Satisfactorio)</li>
      <li><strong>D:</strong> 1,0 (Aprobado)</li>
      <li><strong>F:</strong> 0,0 (Reprobado)</li>
    </ul>

    <h2>Cómo se calcula el GPA</h2>
    <p>
      El GPA es un <strong>promedio ponderado por créditos</strong>, no un promedio simple de tus calificaciones. Un
      curso de 4 créditos cuenta el doble que uno de 2. La fórmula:
    </p>
    <p>
      <code>GPA = Σ(puntos × créditos) ÷ Σ(créditos)</code>
    </p>
    <p>
      Por ejemplo, si tienes una A (4,0) en un curso de 3 créditos y una B (3,0) en uno de 4 créditos:
      <code> (4,0×3 + 3,0×4) ÷ (3+4) = 24 ÷ 7 = 3,43</code>.
    </p>

    <h2>Por qué importa el GPA</h2>
    <ul>
      <li><strong>Admisión universitaria.</strong> La mayoría de las universidades ponderan mucho el GPA en sus decisiones.</li>
      <li><strong>Becas.</strong> Muchas exigen un GPA mínimo (a menudo 3,0, 3,5 o 3,7).</li>
      <li><strong>Programas de honores.</strong> El Dean&apos;s List suele requerir 3,5+; los honores latinos (cum laude) suelen empezar en 3,5.</li>
      <li><strong>Posgrado.</strong> Los programas competitivos suelen esperar 3,5+.</li>
      <li><strong>Primer empleo.</strong> Algunos empleadores filtran por GPA, sobre todo con recién graduados.</li>
    </ul>

    <h2>GPA ponderado vs. no ponderado</h2>
    <p>
      Esta calculadora usa la escala <strong>no ponderada</strong> de 4,0, donde una A siempre vale 4,0
      independientemente de la dificultad del curso. Muchas escuelas secundarias usan una escala <strong>ponderada</strong>
      que da puntos extra por cursos de honores o AP (una A en AP puede ser 5,0). Si tu escuela pondera las
      calificaciones, ajusta los valores de puntos para que coincidan — la matemática es la misma.
    </p>

    <h2>Cómo subir tu GPA</h2>
    <ol>
      <li><strong>Concéntrate en los cursos de muchos créditos.</strong> Mueven tu GPA más que ningún otro.</li>
      <li><strong>Vuelve a cursar las asignaturas reprobadas</strong> si tu escuela reemplaza la nota.</li>
      <li><strong>Elige optativas más ligeras con estrategia</strong> para compensar los cursos obligatorios más duros.</li>
      <li><strong>Aprovecha las tutorías.</strong> Una pequeña mejora (de B+ a A-) se acumula entre asignaturas.</li>
    </ol>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist der GPA?</h2>
    <p>
      Der <strong>GPA</strong> (Grade Point Average, Notendurchschnitt) ist eine Zahl, die deine akademische Leistung
      über alle Kurse hinweg zusammenfasst, üblicherweise auf einer Skala von 0,0 bis 4,0. Jeder Buchstabennote ist ein
      Punktwert zugeordnet, und dein GPA ist der nach Credits gewichtete Durchschnitt dieser Punkte. Er ist die
      Standardkennzahl, mit der Universitäten, Stipendienausschüsse und Arbeitgeber Studierende vergleichen.
    </p>

    <h2>Die Standard-GPA-Skala 4,0</h2>
    <ul>
      <li><strong>A / A+:</strong> 4,0 (Auszeichnung)</li>
      <li><strong>A-:</strong> 3,7</li>
      <li><strong>B+:</strong> 3,3</li>
      <li><strong>B:</strong> 3,0 (Gut)</li>
      <li><strong>B-:</strong> 2,7</li>
      <li><strong>C+:</strong> 2,3</li>
      <li><strong>C:</strong> 2,0 (Befriedigend)</li>
      <li><strong>D:</strong> 1,0 (Bestanden)</li>
      <li><strong>F:</strong> 0,0 (Nicht bestanden)</li>
    </ul>

    <h2>Wie der GPA berechnet wird</h2>
    <p>
      Der GPA ist ein <strong>nach Credits gewichteter Durchschnitt</strong>, kein einfacher Notendurchschnitt. Ein
      4-Credit-Kurs zählt doppelt so viel wie ein 2-Credit-Kurs. Die Formel:
    </p>
    <p>
      <code>GPA = Σ(Punkte × Credits) ÷ Σ(Credits)</code>
    </p>
    <p>
      Beispiel: Du hast eine A (4,0) in einem 3-Credit-Kurs und eine B (3,0) in einem 4-Credit-Kurs:
      <code> (4,0×3 + 3,0×4) ÷ (3+4) = 24 ÷ 7 = 3,43</code>.
    </p>

    <h2>Warum der GPA wichtig ist</h2>
    <ul>
      <li><strong>Uni-Zulassung.</strong> Die meisten Universitäten gewichten den GPA stark in ihren Entscheidungen.</li>
      <li><strong>Stipendien.</strong> Viele fordern einen Mindest-GPA (oft 3,0, 3,5 oder 3,7).</li>
      <li><strong>Honors-Programme.</strong> Die Dean&apos;s List erfordert meist 3,5+; lateinische Ehrungen (cum laude) beginnen oft bei 3,5.</li>
      <li><strong>Postgraduiertenstudium.</strong> Wettbewerbsfähige Programme erwarten oft 3,5+.</li>
      <li><strong>Erster Job.</strong> Manche Arbeitgeber filtern nach GPA, besonders bei Absolventen.</li>
    </ul>

    <h2>Gewichteter vs. ungewichteter GPA</h2>
    <p>
      Dieser Rechner verwendet die <strong>ungewichtete</strong> 4,0-Skala, bei der ein A immer 4,0 ergibt,
      unabhängig von der Schwierigkeit des Kurses. Viele Oberstufen nutzen eine <strong>gewichtete</strong> Skala, die
      für Honors- oder AP-Kurse Extrapunkte vergibt (ein A in AP kann 5,0 sein). Wenn deine Schule Noten gewichtet,
      passe die Punktwerte entsprechend an — die Mathematik bleibt dieselbe.
    </p>

    <h2>Wie du deinen GPA verbesserst</h2>
    <ol>
      <li><strong>Konzentriere dich auf Kurse mit vielen Credits.</strong> Sie bewegen deinen GPA am meisten.</li>
      <li><strong>Wiederhole nicht bestandene Kurse</strong>, wenn deine Schule die Note ersetzt.</li>
      <li><strong>Wähle strategisch leichtere Wahlfächer</strong>, um schwerere Pflichtkurse auszugleichen.</li>
      <li><strong>Nutze die Sprechstunden.</strong> Eine kleine Verbesserung (B+ auf A-) summiert sich über Kurse hinweg.</li>
    </ol>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function GpaCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
