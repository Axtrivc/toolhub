'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Age Calculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How Age Is Calculated</h2>
    <p>
      Calculating age sounds simple, but there&apos;s more to it than subtracting two years.
      Proper age calculation counts <strong>completed years, months, and days</strong> — you are
      not &quot;25 years old&quot; until your 25th birthday has fully passed. This calculator uses
      calendar-aware logic that handles varying month lengths, leap years, and month-end edge
      cases (for example, the difference between January 31 and February 28).
    </p>

    <h2>Why Calculate Age Precisely?</h2>
    <ul>
      <li>
        <strong>Age verification.</strong> Many services — driving, voting, drinking, retirement
        benefits, and age-restricted content — depend on exact age thresholds.
      </li>
      <li>
        <strong>Legal and medical.</strong> Insurance premiums, pediatric dosing, and legal
        documents often require age in years and months, not just years.
      </li>
      <li>
        <strong>Pediatrics.</strong>{' '}A baby&apos;s development is tracked in months for the first
        two years and sometimes weeks for newborns.
      </li>
      <li>
        <strong>Pets.</strong> Animal ages, especially for young pets, are often measured in
        months.
      </li>
      <li>
        <strong>Historical research.</strong> Find exactly how old a person was at a specific
        historical event, or how long ago something happened.
      </li>
    </ul>

    <h2>Different Ways to Express Age</h2>
    <p>
      Depending on the context, you might want age expressed in different units. This calculator
      provides all of them:
    </p>
    <ul>
      <li><strong>Years + months + days</strong> — the everyday format, ideal for most uses</li>
      <li><strong>Total months</strong> — useful for infant development and subscriptions</li>
      <li><strong>Total weeks</strong> — common for pregnancy and infant age</li>
      <li><strong>Total days</strong> — fun for celebrating &quot;10,000 days alive&quot; milestones</li>
      <li><strong>Total hours</strong> — for when precision matters, or just curiosity</li>
    </ul>

    <h2>Cultural Differences in Age Counting</h2>
    <p>
      Age isn&apos;t counted the same way everywhere. Be aware of these differences when comparing
      ages internationally:
    </p>
    <ul>
      <li>
        <strong>International (most common):</strong> You are 0 at birth and gain a year on each
        birthday. This is the system this calculator uses.
      </li>
      <li>
        <strong>Traditional East Asian (Korean):</strong>{' '}
        You are 1 at birth and gain a year on
        New Year&apos;s Day rather than your birthday. A baby born on December 31 turns 2 the next
        day. South Korea officially shifted to the international system in 2023.
      </li>
      <li>
        <strong>Vietnamese:</strong> Similar to the traditional East Asian system.
      </li>
    </ul>

    <h2>The Leap Year Complication</h2>
    <p>
      People born on February 29 only have a true birthday every four years. By convention, in
      non-leap years their birthday is celebrated on February 28 or March 1, depending on the
      country and context. This calculator anchors the anniversary to the last day of the month,
      so a February 29 birth turns a year older on February 28 in non-leap years.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo se calcula la edad</h2>
    <p>
      Calcular la edad parece sencillo, pero es más que restar dos años. El cálculo correcto de la edad cuenta <strong>años, meses y días completos</strong> — no tienes «25 años» hasta que tu cumpleaños número 25 ha pasado por completo. Esta calculadora usa una lógica basada en el calendario que maneja distintas duraciones de mes, años bisiestos y casos límite de fin de mes (por ejemplo, la diferencia entre el 31 de enero y el 28 de febrero).
    </p>

    <h2>¿Por qué calcular la edad con precisión?</h2>
    <ul>
      <li>
        <strong>Verificación de edad.</strong> Muchos servicios — conducir, votar, beber alcohol, prestaciones de jubilación y contenido con restricción de edad — dependen de umbrales exactos de edad.
      </li>
      <li>
        <strong>Legal y médico.</strong> Las primas de seguros, la dosificación pediátrica y los documentos legales suelen requerir la edad en años y meses, no solo en años.
      </li>
      <li>
        <strong>Pediatría.</strong> El desarrollo de un bebé se sigue en meses durante los dos primeros años y, a veces, en semanas para los recién nacidos.
      </li>
      <li>
        <strong>Mascotas.</strong> La edad de los animales, especialmente la de las mascotas jóvenes, suele medirse en meses.
      </li>
      <li>
        <strong>Investigación histórica.</strong> Descubre exactamente qué edad tenía una persona en un acontecimiento histórico concreto, o cuánto tiempo hace que ocurrió algo.
      </li>
    </ul>

    <h2>Distintas formas de expresar la edad</h2>
    <p>
      Según el contexto, puede que quieras expresar la edad en distintas unidades. Esta calculadora ofrece todas ellas:
    </p>
    <ul>
      <li><strong>Años + meses + días</strong> — el formato cotidiano, ideal para la mayoría de los usos</li>
      <li><strong>Meses totales</strong> — útil para el desarrollo infantil y las suscripciones</li>
      <li><strong>Semanas totales</strong> — habitual para el embarazo y la edad infantil</li>
      <li><strong>Días totales</strong> — divertido para celebrar hitos de «10.000 días de vida»</li>
      <li><strong>Horas totales</strong> — cuando importa la precisión, o por simple curiosidad</li>
    </ul>

    <h2>Diferencias culturales en el cómputo de la edad</h2>
    <p>
      La edad no se cuenta igual en todas partes. Ten en cuenta estas diferencias al comparar edades a nivel internacional:
    </p>
    <ul>
      <li>
        <strong>Internacional (la más común):</strong> Tienes 0 al nacer y sumas un año en cada cumpleaños. Este es el sistema que usa esta calculadora.
      </li>
      <li>
        <strong>Asiático oriental tradicional (coreano):</strong> Tienes 1 al nacer y sumas un año el día de Año Nuevo en lugar de en tu cumpleaños. Un bebé nacido el 31 de diciembre cumple 2 años al día siguiente. Corea del Sur pasó oficialmente al sistema internacional en 2023.
      </li>
      <li>
        <strong>Vietnamita:</strong> Similar al sistema tradicional asiático oriental.
      </li>
    </ul>

    <h2>La complicación de los años bisiestos</h2>
    <p>
      Las personas nacidas el 29 de febrero solo tienen un verdadero cumpleaños cada cuatro años. Por convención, en los años no bisiestos su cumpleaños se celebra el 28 de febrero o el 1 de marzo, según el país y el contexto. Esta calculadora ancla el aniversario al último día del mes, de modo que una persona nacida el 29 de febrero cumple años el 28 de febrero en los años no bisiestos.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie das Alter berechnet wird</h2>
    <p>
      Das Alter zu berechnen klingt einfach, aber dahinter steckt mehr als das Subtrahieren zweier Jahreszahlen. Eine korrekte Altersberechnung zählt <strong>volle Jahre, Monate und Tage</strong> — du bist nicht „25 Jahre alt“, bis dein 25. Geburtstag vollständig vergangen ist. Dieser Rechner verwendet eine kalenderbewusste Logik, die unterschiedlich lange Monate, Schaltjahre und Monatsend-Fälle (z. B. die Differenz zwischen dem 31. Januar und dem 28. Februar) korrekt behandelt.
    </p>

    <h2>Warum das Alter präzise berechnen?</h2>
    <ul>
      <li>
        <strong>Altersverifikation.</strong> Viele Dienstleistungen — Fahren, Wählen, Alkoholkonsum, Rentenleistungen und altersbeschränkte Inhalte — hängen von genauen Altersgrenzen ab.
      </li>
      <li>
        <strong>Recht und Medizin.</strong> Versicherungsprämien, pädiatrische Dosierungen und Rechtsdokumente erfordern oft das Alter in Jahren und Monaten, nicht nur in Jahren.
      </li>
      <li>
        <strong>Pädiatrie.</strong> Die Entwicklung eines Babys wird in den ersten zwei Jahren in Monaten verfolgt, bei Neugeborenen manchmal in Wochen.
      </li>
      <li>
        <strong>Haustiere.</strong> Das Alter von Tieren, besonders bei jungen Tieren, wird oft in Monaten gemessen.
      </li>
      <li>
        <strong>Historische Forschung.</strong> Finde genau heraus, wie alt eine Person bei einem bestimmten historischen Ereignis war oder wie lange etwas her ist.
      </li>
    </ul>

    <h2>Verschiedene Arten, das Alter auszudrücken</h2>
    <p>
      Je nach Kontext willst du das Alter vielleicht in verschiedenen Einheiten ausdrücken. Dieser Rechner bietet sie alle:
    </p>
    <ul>
      <li><strong>Jahre + Monate + Tage</strong> — das alltägliche Format, ideal für die meisten Zwecke</li>
      <li><strong>Monate gesamt</strong> — nützlich für die Entwicklung von Säuglingen und Abonnements</li>
      <li><strong>Wochen gesamt</strong> — üblich für Schwangerschaft und das Alter von Säuglingen</li>
      <li><strong>Tage gesamt</strong> — spaßig für Meilensteine wie „10.000 Tage am Leben“</li>
      <li><strong>Stunden gesamt</strong> — wenn es auf Präzision ankommt oder aus reiner Neugier</li>
    </ul>

    <h2>Kulturelle Unterschiede bei der Alterszählung</h2>
    <p>
      Das Alter wird nicht überall gleich gezählt. Beachte diese Unterschiede, wenn du Alter international vergleichst:
    </p>
    <ul>
      <li>
        <strong>International (am weitesten verbreitet):</strong> Du bist bei der Geburt 0 und bekommst jedes Jahr an deinem Geburtstag ein Jahr dazu. Das ist das System, das dieser Rechner verwendet.
      </li>
      <li>
        <strong>Traditionell ostasiatisch (koreanisch):</strong> Du bist bei der Geburt 1 und bekommst ein Jahr am Neujahrstag statt an deinem Geburtstag dazu. Ein am 31. Dezember geborenes Baby wird am nächsten Tag 2. Südkorea ist 2023 offiziell zum internationalen System gewechselt.
      </li>
      <li>
        <strong>Vietnamesisch:</strong> Ähnlich dem traditionellen ostasiatischen System.
      </li>
    </ul>

    <h2>Die Schaltjahr-Komplikation</h2>
    <p>
      Personen, die am 29. Februar geboren sind, haben nur alle vier Jahre einen echten Geburtstag. Konventionell wird ihr Geburtstag in Nicht-Schaltjahren am 28. Februar oder 1. März gefeiert, je nach Land und Kontext. Dieser Rechner verankert den Jahrestag am letzten Tag des Monats, sodass eine am 29. Februar geborene Person in Nicht-Schaltjahren am 28. Februar ein Jahr älter wird.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function AgeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
