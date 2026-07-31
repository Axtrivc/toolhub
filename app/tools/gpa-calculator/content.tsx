import type { ReactNode } from 'react'

export function GpaCalculatorContent(): ReactNode {
  return (
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
}
