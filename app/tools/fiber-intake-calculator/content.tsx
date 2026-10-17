'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * FiberIntakeCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Two numbers that cover almost everyone</h2>
    <p>The Institute of Medicine's Adequate Intakes boil down to 38 g of fiber a day for men aged 19-50 and 25 g for women, stepping down to 30 and 21 after 51 — roughly 14 g per 1,000 calories for anyone who eats like an athlete. Most adults land near 15 g, which is why "eat more fiber" survives every nutrition fad.</p>
    <h2>Why the food equivalents matter</h2>
    <p>A gram target is abstract; two and a half cups of lentils is a meal plan. One cup of cooked lentils carries 15.5 g, a cup of raspberries 8 g, a tablespoon of chia 4.1 g — mixing legumes, fruit, and seeds across the day reaches the number without a single supplement.</p>
    <h2>Ramp, don't leap</h2>
    <p>Your gut microbiome needs weeks to grow the populations that ferment fiber gracefully. Adding 20 g overnight reliably produces bloating and gas; adding about 5 g per week, with an extra glass or two of water, lets the system adapt. The people who "can't eat fiber" usually just tried too fast.</p>
    <h2>Soluble, insoluble — count both</h2>
    <p>Oats, barley, and beans skew soluble (the cholesterol-lowering, gel-forming kind); wheat bran and vegetables skew insoluble (the regularity kind). The AI targets count total fiber, so there is no need to split hairs — a varied pattern with legumes, whole grains, fruit, and vegetables delivers both forms automatically.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>两个数字覆盖几乎所有人</h2>
    <p>美国医学研究院的适宜摄入量可以浓缩成:19-50 岁男性每天 38 g、女性 25 g,51 岁后降到 30 与 21——对吃得像运动员的人,约合每 1000 kcal 配 14 g。多数成年人实际只吃到 15 g 上下,这就是"多吃纤维"能熬过所有营养风潮的原因。</p>
    <h2>食物等价为什么重要</h2>
    <p>克数目标是抽象的,"两杯半扁豆"才是食谱。一杯熟扁豆含 15.5 g,一杯树莓 8 g,一汤匙奇亚籽 4.1 g——把豆类、水果和种子摊到一天里,不用任何补充剂就能达标。</p>
    <h2>加量要爬坡,不要跳崖</h2>
    <p>肠道菌群需要数周时间繁殖出能从容发酵纤维的种群。一夜加 20 g 几乎必然换来腹胀和胀气;每周加约 5 g、配一两杯额外的水,让系统慢慢适应。"吃不了纤维"的人,多半只是加得太快。</p>
    <h2>可溶与不可溶,都计入总量</h2>
    <p>燕麦、大麦和豆类偏可溶性(降胆固醇、成凝胶那种);麦麸和蔬菜偏不溶性(管规律那种)。AI 目标按总纤维计,不必细拆——豆类、全谷物、水果和蔬菜的多样组合会自动把两种都送到。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dos cifras que cubren a casi todos</h2>
    <p>Las Ingestas Adecuadas del Instituto de Medicina se resumen en 38 g de fibra al día para hombres de 19-50 y 25 g para mujeres, bajando a 30 y 21 desde los 51 — unos 14 g por cada 1.000 kcal para quien come como atleta. La mayoría de adultos anda por 15 g, y por eso el «come más fibra» sobrevive a todas las modas nutricionales.</p>
    <h2>Por qué importan los equivalentes</h2>
    <p>Un objetivo en gramos es abstracto; dos tazas y media de lentejas son un plan de comida. Una taza de lentejas cocidas aporta 15,5 g, una de frambuesas 8 g y una cucharada de chía 4,1 g — combinando legumbres, fruta y semillas a lo largo del día se llega sin ningún suplemento.</p>
    <h2>Sube en rampa, no de golpe</h2>
    <p>La microbiota necesita semanas para cultivar las poblaciones que fermentan fibra sin drama. Añadir 20 g de la noche a la mañana produce hinchazón y gases con seguridad; subir ~5 g por semana con un vaso extra de agua deja al sistema adaptarse. Quien «no puede comer fibra» casi siempre lo intentó demasiado rápido.</p>
    <h2>Soluble, insoluble — cuenta ambas</h2>
    <p>Avena, cebada y legumbres tiran a soluble (la que baja colesterol y forma gel); salvado y verduras a insoluble (la de la regularidad). Las AI cuentan la fibra total, así que no hace falta rizar el rizo: un patrón variado con legumbres, integrales, fruta y verdura entrega las dos de serie.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Zwei Zahlen, die fast alle abdecken</h2>
    <p>Die Adequaten Zufuhrmengen des Institute of Medicine laufen auf 38 g Ballaststoffe täglich für Männer von 19-50 und 25 g für Frauen hinaus, ab 51 sinken sie auf 30 und 21 — für alle, die wie Sportler essen, etwa 14 g je 1.000 kcal. Die meisten Erwachsenen liegen bei 15 g, weshalb „iss mehr Ballaststoffe" jede Ernährungswelle überlebt.</p>
    <h2>Warum die Lebensmittel-Äquivalente zählen</h2>
    <p>Ein Gramm-Ziel ist abstrakt; zweieinhalb Tassen Linsen sind ein Essensplan. Eine Tasse gekochte Linsen liefert 15,5 g, eine Tasse Himbeeren 8 g, ein Esslöffel Chia 4,1 g — Hülsenfrüchte, Obst und Samen über den Tag verteilt erreichen die Zahl ganz ohne Supplement.</p>
    <h2>Rampen statt springen</h2>
    <p>Die Darmflora braucht Wochen, um die Populationen heranzuziehen, die Ballaststoffe souverän fermentieren. 20 g über Nacht erzeugen zuverlässig Blähungen; etwa 5 g pro Woche plus ein Glas Wasser mehr lassen dem System Zeit. Wer „keine Ballaststoffe verträgt", hat es fast immer nur zu schnell versucht.</p>
    <h2>Löslich, unlöslich — beides zählt</h2>
    <p>Hafer, Gerste und Hülsenfrüchte gehen Richtung löslich (cholesterinsenkend, gelbildend); Weizenkleie und Gemüse Richtung unlöslich (die Regelmäßigkeit). Die AI-Ziele zählen Gesamtballaststoffe, also muss man nicht spalten — eine abwechslungsreiche Kost mit Hülsenfrüchten, Vollkorn, Obst und Gemüse liefert beide von selbst.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FiberIntakeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
