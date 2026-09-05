/**
 * Intermittent Fasting Calculator 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function IntermittentFastingContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Pick your protocol</h2>
      <p>
        <strong>Intermittent fasting (IF)</strong> restricts <em>when</em> you eat rather than what. The four most
        studied schedules are <strong>16:8</strong> (16h fast / 8h eating — the most popular), <strong>18:6</strong>{' '}
        (a tighter window for steadier fat burning), <strong>20:4</strong> (the &quot;warrior diet&quot;, advanced), and{' '}
        <strong>14:10</strong> (a gentle on-ramp many people start with). Consistency beats aggressiveness — a 14:10
        schedule you keep outranks a 20:4 you abandon by Thursday.
      </p>

      <h2>What happens, hour by hour</h2>
      <p>
        After your last meal, the body runs a predictable sequence: digestion and insulin peak around 0-4 hours, blood
        sugar normalizes by hour 8, liver glycogen depletes across hours 8-12, and <strong>fat burning (ketosis)</strong>{' '}
        becomes significant around hour 12+. Somewhere past 16-24 hours, cellular cleanup processes such as{' '}
        <strong>autophagy</strong> ramp up — the timeline in this tool marks each expected phase against your clock so
        you can see where a 16:8 day actually takes you.
      </p>

      <h2>Why meal timing matters less than you think — and more</h2>
      <p>
        Controlled trials show IF works mostly through spontaneous calorie reduction, not magic: a shorter window
        simply removes the late-night snack. But adherence is the real mechanism — people who can&apos;t track calories
        often can follow a clock. Water, black coffee, and plain tea don&apos;t break the fast; a 50-calorie &quot;just
        cream&quot; latte does.
      </p>

      <h2>Who should not fast</h2>
      <p>
        Skipping meals is a poor fit if you are pregnant or nursing, underweight, diabetic on medication, under 18, or
        have a history of disordered eating. Athletes can fast but should keep protein around training. This scheduler
        is general information, not medical advice — talk to a doctor before extended fasts.
      </p>
    </section>
  )
}
