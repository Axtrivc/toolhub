'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DogAgeCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where ×7 came from — and why it fails</h2>
    <p>The old rule divided a human lifespan by a dog lifespan. It misses that dogs reach adulthood within two years: a one-year-old Lab is closer to a 15-year-old human than a 7-year-old child.</p>
    <h2>Size changes the curve</h2>
    <p>After year two, small breeds age about 4 human-years per dog year, medium breeds 5, and giant breeds 6.5+. Great Danes hit senior status years before Chihuahuas despite identical calendars.</p>
    <h2>Life stages to plan around</h2>
    <p>Puppy (under 1), junior (1-2), adult prime (2-7 depending on size), mature, senior. Vet screening frequency should step up in the senior band — bloodwork yearly rather than biennially.</p>
    <h2>Better than any chart</h2>
    <p>Body condition beats birthday: lean-fed, well-exercised dogs of the same age are biologically younger. Keep weight down and dental care up — those move dog-years more than anything else.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>×7 从哪来——又为何失灵</h2>
    <p>老规则用人类寿命除以狗的寿命得出倍数。它忽略了狗在两年之内就成年:一岁的拉布拉多更接近 15 岁的人类,而不是 7 岁的孩童。</p>
    <h2>体型改变曲线</h2>
    <p>两岁之后,小型犬每狗年约增加 4 人岁,中型犬 5,巨型犬 6.5+。尽管日历年龄相同,大丹犬比吉娃娃早好几年进入老年。</p>
    <h2>需要提前规划的生命阶段</h2>
    <p>幼犬(1 岁以下)、少年(1-2 岁)、壮年(2-7 岁,因体型而异)、中年、老年。进入老年段后,兽医筛查频率应该提高——血液检查从两年一次改为一年一次。</p>
    <h2>比任何图表都管用</h2>
    <p>体况比生日更有说服力:同龄的狗里,喂得精瘦、运动充足的那只在生物学上更年轻。控制体重、做好牙齿护理——这两件事比别的任何办法都更能拉低狗的"人类年龄"。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>De dónde salió el ×7 — y por qué falla</h2>
    <p>La vieja regla dividía una vida humana entre una vida canina. Olvida que los perros alcanzan la edad adulta en dos años: un labrador de un año se parece más a un humano de 15 que a un niño de 7.</p>
    <h2>El tamaño cambia la curva</h2>
    <p>Tras el segundo año, las razas pequeñas suman unos 4 años humanos por año canino, las medianas 5 y las gigantes 6,5+. Los gran daneses llegan a la vejez años antes que los chihuahuas pese a calendarios idénticos.</p>
    <h2>Etapas vitales para planificar</h2>
    <p>Cachorro (menos de 1), joven (1-2), adulto en plenitud (2-7 según tamaño), maduro, senior. La frecuencia de las revisiones veterinarias debería subir en la etapa senior: analíticas anuales en lugar de cada dos años.</p>
    <h2>Mejor que cualquier tabla</h2>
    <p>La condición corporal gana al cumpleaños: perros delgadamente alimentados y bien ejercitados de la misma edad son biológicamente más jóvenes. Mantén el peso a raya y el cuidado dental al día — nada mueve más los años-caninos que eso.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Woher das ×7 kommt — und warum es scheitert</h2>
    <p>Die alte Regel teilte die menschliche Lebensspanne durch die des Hundes. Sie übersieht, dass Hunde innerhalb von zwei Jahren erwachsen werden: Ein einjähriger Labrador ist einem 15-jährigen Menschen näher als einem 7-jährigen Kind.</p>
    <h2>Die Größe ändert die Kurve</h2>
    <p>Nach Jahr zwei altern kleine Rassen um etwa 4 Menschenjahre pro Hundejahr, mittlere um 5, riesige um 6,5+. Deutsche Doggen erreichen den Senior-Status Jahre vor Chihuahuas — bei identischem Kalender.</p>
    <h2>Lebensphasen, die man planen sollte</h2>
    <p>Welpe (unter 1), Junghund (1-2), erwachsen in Bestform (2-7 je nach Größe), reif, Senior. Im Senior-Band sollte die tierärztliche Vorsorge hochgestuft werden — Blutwerte jährlich statt alle zwei Jahre.</p>
    <h2>Besser als jede Tabelle</h2>
    <p>Der Körperzustand schlägt den Geburtstag: schlank gefütterte, gut bewegte Hunde sind im selben Alter biologisch jünger. Halte das Gewicht unten und die Zahnpflege oben — nichts verschiebt Hundejahre mehr.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DogAgeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
