'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Age Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
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
        <strong>Pediatrics.</strong> A baby&apos;s development is tracked in months for the first
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
        <strong>Traditional East Asian (Korean):</strong> You are 1 at birth and gain a year on
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
      country and context. This calculator handles February 29 births by treating March 1 as the
      age-increment day in non-leap years.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>年龄是如何计算的</h2>
    <p>
      计算年龄听起来简单,但远不止把两个年份相减那么简单。规范的年龄计算要统计<strong>已满的年、月、日</strong>——在你的第 25 个生日完全过去之前,你还不算「25 岁」。本计算器采用日历感知逻辑,能处理不同的月份长度、闰年以及月末边界情况(例如 1 月 31 日与 2 月 28 日之间的差值)。
    </p>

    <h2>为什么要精确计算年龄?</h2>
    <ul>
      <li>
        <strong>年龄核验。</strong> 许多服务——驾驶、投票、饮酒、退休福利以及限制年龄的内容——都依赖精确的年龄门槛。
      </li>
      <li>
        <strong>法律与医疗。</strong> 保险费率、儿科用药剂量以及法律文件常常需要精确到年和月的年龄,而不仅仅是年。
      </li>
      <li>
        <strong>儿科。</strong> 婴儿在前两年的发育以月为单位追踪,新生儿有时以周为单位。
      </li>
      <li>
        <strong>宠物。</strong> 动物的年龄,尤其是幼龄宠物,通常以月来衡量。
      </li>
      <li>
        <strong>历史研究。</strong> 精确查找某人在某个历史事件发生时的年龄,或某事距今已有多久。
      </li>
    </ul>

    <h2>表达年龄的不同方式</h2>
    <p>
      根据具体场景,你可能希望用不同的单位来表达年龄。本计算器提供了所有这些方式:
    </p>
    <ul>
      <li><strong>年 + 月 + 日</strong> —— 日常格式,适合大多数用途</li>
      <li><strong>总月数</strong> —— 适用于婴儿发育和订阅周期</li>
      <li><strong>总周数</strong> —— 常用于孕期和婴儿年龄</li>
      <li><strong>总天数</strong> —— 适合庆祝「存活 10,000 天」这样的里程碑</li>
      <li><strong>总小时数</strong> —— 在需要精确或纯粹出于好奇时使用</li>
    </ul>

    <h2>年龄计算的文化差异</h2>
    <p>
      各地计算年龄的方式并不相同。在国际间比较年龄时,请注意这些差异:
    </p>
    <ul>
      <li>
        <strong>国际通用(最常见):</strong> 出生时为 0 岁,每过一个生日长一岁。本计算器采用的就是这一体系。
      </li>
      <li>
        <strong>传统东亚(韩国):</strong> 出生时即算 1 岁,并在新年当天而非生日当天长一岁。12 月 31 日出生的婴儿第二天就满 2 岁。韩国已于 2023 年正式改用国际通用体系。
      </li>
      <li>
        <strong>越南:</strong> 与传统东亚体系类似。
      </li>
    </ul>

    <h2>闰年带来的麻烦</h2>
    <p>
      2 月 29 日出生的人每四年才有一次真正的生日。按照惯例,在非闰年,他们的生日会在 2 月 28 日或 3 月 1 日庆祝,具体取决于国家和场景。本计算器在非闰年中将 3 月 1 日作为年龄增长日来处理 2 月 29 日的出生。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo se calcula la edad</h2>
    <p>
      Calcular la edad parece sencillo, pero hay más que restar dos años. El cálculo correcto de la edad cuenta <strong>años, meses y días completos</strong> — no tienes «25 años» hasta que tu cumpleaños número 25 ha pasado por completo. Esta calculadora usa una lógica basada en el calendario que maneja distintas duraciones de mes, años bisiestos y casos límite de fin de mes (por ejemplo, la diferencia entre el 31 de enero y el 28 de febrero).
    </p>

    <h2>¿Por qué calcular la edad con precisión?</h2>
    <ul>
      <li>
        <strong>Verificación de edad.</strong> Muchos servicios — conducir, votar, beber, prestaciones de jubilación y contenido con restricción de edad — dependen de umbrales exactos de edad.
      </li>
      <li>
        <strong>Legal y médico.</strong> Las primas de seguros, la dosificación pediátrica y los documentos legales suelen requerir la edad en años y meses, no solo en años.
      </li>
      <li>
        <strong>Pediatría.</strong> El desarrollo de un bebé se sigue en meses durante los dos primeros años y, a veces, en semanas para los recién nacidos.
      </li>
      <li>
        <strong>Mascotas.</strong> La edad de los animales, especialmente de los jóvenes, se suele medir en meses.
      </li>
      <li>
        <strong>Investigación histórica.</strong> Descubre exactamente qué edad tenía una persona en un acontecimiento histórico concreto, o cuánto tiempo hace que ocurrió algo.
      </li>
    </ul>

    <h2>Distintas formas de expresar la edad</h2>
    <p>
      Según el contexto, puede que quieras la edad expresada en distintas unidades. Esta calculadora ofrece todas ellas:
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
      Las personas nacidas el 29 de febrero solo tienen un verdadero cumpleaños cada cuatro años. Por convención, en los años no bisiestos su cumpleaños se celebra el 28 de febrero o el 1 de marzo, según el país y el contexto. Esta calculadora trata los nacimientos del 29 de febrero considerando el 1 de marzo como el día de incremento de edad en los años no bisiestos.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie das Alter berechnet wird</h2>
    <p>
      Das Alter zu berechnen klingt einfach, aber es ist mehr als die Subtraktion zweier Jahreszahlen. Eine korrekte Altersberechnung zählt <strong>volle Jahre, Monate und Tage</strong> — du bist nicht „25 Jahre alt", bis dein 25. Geburtstag vollständig vergangen ist. Dieser Rechner verwendet eine kalenderbewusste Logik, die unterschiedlich lange Monate, Schaltjahre und Monatsend-Fälle (z. B. die Differenz zwischen dem 31. Januar und dem 28. Februar) korrekt behandelt.
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
      Je nach Kontext möchtest du das Alter vielleicht in verschiedenen Einheiten ausgedrückt haben. Dieser Rechner bietet sie alle:
    </p>
    <ul>
      <li><strong>Jahre + Monate + Tage</strong> — das alltägliche Format, ideal für die meisten Zwecke</li>
      <li><strong>Monate gesamt</strong> — nützlich für die Entwicklung von Säuglingen und Abonnements</li>
      <li><strong>Wochen gesamt</strong> — üblich für Schwangerschaft und das Alter von Säuglingen</li>
      <li><strong>Tage gesamt</strong> — spaßig für Meilensteine wie „10.000 Tage am Leben"</li>
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
        <strong>Traditionell ostasiatisch (koreanisch):</strong> Du bist bei der Geburt 1 und bekommst ein Jahr am Neujahrstag statt an deinem Geburtstag. Ein am 31. Dezember geborenes Baby wird am nächsten Tag 2. Südkorea ist 2023 offiziell zum internationalen System gewechselt.
      </li>
      <li>
        <strong>Vietnamesisch:</strong> Ähnlich dem traditionellen ostasiatischen System.
      </li>
    </ul>

    <h2>Die Schaltjahr-Komplikation</h2>
    <p>
      Personen, die am 29. Februar geboren sind, haben nur alle vier Jahre einen echten Geburtstag. Konventionell wird ihr Geburtstag in Nicht-Schaltjahren am 28. Februar oder 1. März gefeiert, je nach Land und Kontext. Dieser Rechner behandelt Geburten am 29. Februar, indem er in Nicht-Schaltjahren den 1. März als den Tag der Alterserhöhung betrachtet.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AgeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
