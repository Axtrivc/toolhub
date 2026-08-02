import { ToolContent } from '@/lib/content-templates'

export function TdeeCalculatorContent() {
  return (
    <ToolContent
      intro={
        <p>
          <strong>TDEE</strong> (Total Daily Energy Expenditure) is the number of calories you burn in a day, combining
          your resting metabolism (BMR) with everything you do — walking, workouts, digesting food. It is the single
          most useful number for managing your weight: eat below it to lose fat, at it to maintain, above it to gain.
          This calculator uses the Mifflin-St Jeor BMR formula, the most accurate estimate available without lab
          equipment.
        </p>
      }
      sections={[
        {
          heading: 'How TDEE is calculated',
          body: (
            <p>
              First the calculator finds your <strong>BMR</strong> (Basal Metabolic Rate) — the calories your body uses
              just to stay alive at rest — using Mifflin-St Jeor: <code>10×weight(kg) + 6.25×height(cm) − 5×age + s</code>,
              where <code>s</code> is +5 for men and −161 for women. It then multiplies by an{' '}
              <strong>activity factor</strong> from 1.2 (sedentary) up to 1.9 (twice-daily training or a physical job)
              to get your TDEE.
            </p>
          ),
        },
        {
          heading: 'Choosing a calorie target',
          body: (
            <ul>
              <li><strong>Cut (−10 to −20%):</strong> a moderate deficit that loses fat while preserving muscle.</li>
              <li><strong>Maintain:</strong> your TDEE — weight stays roughly stable.</li>
              <li><strong>Bulk (+10 to +20%):</strong> a small surplus that builds muscle with minimal fat.</li>
            </ul>
          ),
        },
        {
          heading: 'Macros matter too',
          body: (
            <p>
              Calories determine whether your weight goes up or down; <strong>macros</strong> (protein, carbs, fat)
              determine what that weight is made of. Keep protein high (1.6–2.2 g per kg of body weight) to preserve or
              build muscle. The split shown here (30/40/30) is a balanced default — see our{' '}
              <a href="/tools/macro-calculator/" className="text-brand-600 underline">Macro Calculator</a> for
              goal-specific ratios, or the{' '}
              <a href="/tools/calorie-calculator/" className="text-brand-600 underline">Calorie Calculator</a> for a
              meal-planning view.
            </p>
          ),
        },
      ]}
    />
  )
}
