'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Intermittent Fasting Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
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


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Elige tu protocolo</h2>
    <p>
      El <strong>ayuno intermitente (IF)</strong> restringe <em>cuándo</em> comes, no qué comes. Los cuatro protocolos más estudiados son <strong>16:8</strong> (16 h de ayuno / 8 h de comida — el más popular), <strong>18:6</strong> (una ventana más estrecha para una quema de grasa más estable), <strong>20:4</strong> (la «dieta del guerrero», avanzada) y <strong>14:10</strong> (una rampa suave con la que empieza mucha gente). La constancia gana a la agresividad: un 14:10 que mantienes vale más que un 20:4 que abandonas el jueves.
    </p>

    <h2>Qué ocurre, hora a hora</h2>
    <p>
      Tras tu última comida, el cuerpo sigue una secuencia predecible: la digestión y la insulina alcanzan su pico entre las 0-4 horas, la glucemia se normaliza hacia la hora 8, el glucógeno hepático se agota entre las horas 8-12 y la <strong>quema de grasa (cetosis)</strong> se vuelve significativa a partir de la hora 12. Pasadas las 16-24 horas, procesos de limpieza celular como la <strong>autofagia</strong> se aceleran — la línea de tiempo de esta herramienta marca cada fase prevista en tu reloj para que veas dónde te lleva realmente un día 16:8.
    </p>

    <h2>Por qué el horario importa menos de lo que crees — y más</h2>
    <p>
      Los ensayos controlados muestran que el IF funciona sobre todo por una reducción espontánea de calorías, no por magia: una ventana más corta simplemente elimina el picoteo nocturno. Pero la adherencia es el verdadero mecanismo — quien no puede contar calorías suele poder seguir un reloj. El agua, el café solo y el té sin nada no rompen el ayuno; un latte de 50 calorías «solo con crema», sí.
    </p>

    <h2>Quién no debería ayunar</h2>
    <p>
      Saltarse comidas no encaja si estás embarazada o en lactancia, tienes bajo peso, eres diabético con medicación, tienes menos de 18 años o has tenido trastornos alimentarios. Los deportistas pueden ayunar pero conviene asegurar la proteína alrededor del entrenamiento. Este planificador es información general, no consejo médico — consulta a un médico antes de ayunos prolongados.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wähle dein Protokoll</h2>
    <p>
      <strong>Intervallfasten (IF)</strong> beschränkt <em>wann</em> du isst, nicht was. Die vier am besten untersuchten Schemata sind <strong>16:8</strong> (16 h fasten / 8 h essen — am verbreitetsten), <strong>18:6</strong> (engeres Fenster für konstantere Fettverbrennung), <strong>20:4</strong> (die „Warrior Diet“, fortgeschritten) und <strong>14:10</strong> (sanfter Einstieg, mit dem viele anfangen). Beständigkeit schlägt Härte — ein 14:10-Plan, den du durchhältst, schlägt ein 20:4, das du am Donnerstag aufgibst.
    </p>

    <h2>Was Stunde für Stunde passiert</h2>
    <p>
      Nach der letzten Mahlzeit durchläuft der Körper eine vorhersehbare Abfolge: Verdauung und Insulin kulminieren etwa in den Stunden 0-4, der Blutzucker normalisiert sich bis Stunde 8, das Leberglykogen schwindet in den Stunden 8-12, und ab etwa Stunde 12 wird die <strong>Fettverbrennung (Ketose)</strong> signifikant. Irgendwann nach 16-24 Stunden fahren zelluläre Aufräumprozesse wie die <strong>Autophagie</strong> hoch — die Zeitleiste in diesem Tool markiert jede erwartete Phase an deiner Uhr, damit du siehst, wohin dich ein 16:8-Tag tatsächlich führt.
    </p>

    <h2>Warum das Essensfenster weniger zählt als du denkst — und mehr</h2>
    <p>
      Kontrollierte Studien zeigen: IF wirkt vor allem über spontane Kalorienreduktion, nicht über Magie — ein kürzeres Fenster streicht einfach den Mitternachtssnack. Entscheidend ist aber die Adhärenz — wer Kalorien nicht zählen mag, hält oft einen Zeitplan ein. Wasser, schwarzer Kaffee und purer Tee brechen das Fasten nicht; ein 50-Kalorien-Latte „nur mit Sahne“ schon.
    </p>

    <h2>Wer nicht fasten sollte</h2>
    <p>
      Mahlzeiten ausfallen zu lassen passt schlecht, wenn du schwanger bist oder stillst, Untergewicht hast, als Diabetiker Medikamente nimmst, unter 18 bist oder eine Essstörung in der Vorgeschichte hast. Sportler können fasten, sollten aber um das Training herum auf Protein achten. Dieser Planer ist allgemeine Information, keine medizinische Beratung — sprich vor verlängertem Fasten mit einem Arzt.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function IntermittentFastingContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
