'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Cooking Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致(240 ml 表述已按工具实际的 1 cup = 236.588 ml 口径修正为 ~237)。
 * zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why ingredient choice matters</h2>
    <p>A US cup holds about 237 milliliters of anything, but weight depends on what fills it: one cup of flour weighs about 120 g while one cup of honey weighs 340 g. Converting &quot;1 cup&quot; without naming the ingredient is where recipes break.</p>
    <h2>Scooped vs sifted vs spooned</h2>
    <p>Flour measured by scooping the cup straight into the bag can weigh 140 g or more; spooned-and-levelled hits ~120 g; sifted drops toward 114 g. This tool uses spoon-and-level averages, the standard in modern baking references.</p>
    <h2>Butter is the exception</h2>
    <p>Stick butter is sold by weight with tablespoon markings already printed on the wrapper — trust those. One US cup of butter equals exactly 227 g or two sticks.</p>
    <h2>When precision really matters</h2>
    <p>Baking (bread, cakes, macarons) rewards scale accuracy; soups and stews forgive everything. If a dough feels wrong by feel, trust the dough over the chart.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么必须选对食材</h2>
    <p>一美制杯装任何东西都是约 237 毫升,但重量取决于装的是什么:一杯面粉约 120 g,一杯蜂蜜却有 340 g。不说明食材就把「1 杯」直接换算,正是食谱翻车的常见原因。</p>
    <h2>舀入、过筛还是勺舀刮平</h2>
    <p>用量杯直接从袋子里舀面粉,一杯可能重达 140 g 以上;用勺舀入再刮平约为 120 g;过筛后会降到 114 g 附近。本工具采用「勺舀刮平」的平均值,这也是现代烘焙参考书的标准口径。</p>
    <h2>黄油是例外</h2>
    <p>块装黄油按重量出售,包装纸上本来就印好了汤匙刻度——直接信它。一美制杯黄油恰好等于 227 g,即两块标准装。</p>
    <h2>什么时候精度真正重要</h2>
    <p>烘焙(面包、蛋糕、马卡龙)值得用厨房秤;汤和炖菜则怎么都行。如果面团手感不对,相信手感而不是换算表。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué importa el ingrediente</h2>
    <p>Una taza US contiene unos 237 mililitros de cualquier cosa, pero el peso depende de qué la llene: una taza de harina pesa unos 120 g y una de miel, 340 g. Convertir «1 taza» sin decir de qué ingrediente es justo donde las recetas se rompen.</p>
    <h2>¿Sacada, tamizada o cuchareada?</h2>
    <p>La harina sacada con la taza directamente de la bolsa puede pesar 140 g o más; cuchareada y rasada ronda los 120 g; tamizada baja hacia los 114 g. Esta herramienta usa medias de cuchara y rasero, el estándar de las referencias modernas de repostería.</p>
    <h2>La mantequilla es la excepción</h2>
    <p>La mantequilla en barra se vende por peso y ya trae las marcas de cucharadas impresas en el envoltorio: fíate de ellas. Una taza US de mantequilla equivale exactamente a 227 g, es decir, dos barras.</p>
    <h2>Cuándo importa de verdad la precisión</h2>
    <p>La repostería (pan, bizcochos, macarons) premia la báscula; las sopas y guisos lo perdonan todo. Si una masa parece estar mal al tacto, hazle caso a la masa antes que a la tabla.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum die Zutat entscheidend ist</h2>
    <p>Eine US-Tasse fasst rund 237 Milliliter von allem — aber das Gewicht hängt davon ab, was sie füllt: Eine Tasse Mehl wiegt etwa 120 g, eine Tasse Honig 340 g. „1 Tasse“ umzurechnen, ohne die Zutat zu nennen, ist der Punkt, an dem Rezepte schiefgehen.</p>
    <h2>Geschöpft, gesiebt oder gelöffelt</h2>
    <p>Mehl, das mit der Tasse direkt aus dem Beutel geschöpft wird, kann 140 g oder mehr wiegen; gelöffelt und abgestrichen landet es bei ~120 g; gesiebt fällt es Richtung 114 g. Dieses Tool nutzt Löffel-und-abstreichen-Mittelwerte, den Standard moderner Backbücher.</p>
    <h2>Butter ist die Ausnahme</h2>
    <p>Stangenbutter wird nach Gewicht verkauft, und die Esslöffelmarken stehen bereits auf der Verpackung — vertrau ihnen. Eine US-Tasse Butter entspricht exakt 227 g, also zwei Stangen.</p>
    <h2>Wann Präzision wirklich zählt</h2>
    <p>Backen (Brot, Kuchen, Makronen) belohnt die Waage; Suppen und Eintöpfe verzeihen alles. Wenn ein Teig sich falsch anfühlt, vertrau dem Teig mehr als der Tabelle.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CookingConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
