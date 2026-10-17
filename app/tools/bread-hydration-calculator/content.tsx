'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BreadHydrationCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Hydration is a percentage of flour, nothing else</h2>
    <p>In baker's percentages flour is always 100%, and hydration is water ÷ flour. 350 g water on 500 g flour reads as 70% regardless of batch size — which is the whole point: recipes scale by multiplication, not re-derivation. Salt, starter, and every add-in are expressed the same way.</p>
    <h2>Your starter is secretly flour and water</h2>
    <p>A levain at 100% hydration is half flour and half water by weight: 100 g contributes 50 g + 50 g. Ignore that and a heavily leavened dough looks drier than it is. The effective hydration — (water + levain water) ÷ (flour + levain flour) — is what your hands actually feel; stiff 50-60% starters pull it down, liquid 125% levains push it up.</p>
    <h2>What each band of hydration bakes like</h2>
    <p>55-60% gives you bagels and sandwich bread that shape themselves. 65-70% is the friendly artisan range — open enough crumb, dough that still holds tension. 75-80% is country loaf and focaccia territory where stretch-and-folds replace kneading. Above 85% (ciabatta, some durum loaves) the dough is more batter than ball and needs patience, oil, and a scraper.</p>
    <h2>Why the same recipe behaves differently</h2>
    <p>Flour is not flour: bread flour at 12-14% protein absorbs several points more water than all-purpose, and freshly milled whole grain drinks more still — at the same "70%" the whole-grain loaf will feel stiff. Treat hydration as a starting dial, adjust by feel, and log what worked: the number only means something tied to the flour you used.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>水合度只相对面粉而言</h2>
    <p>烘焙百分比里面粉永远是 100%,水合度 = 水 ÷ 粉。500 克粉配 350 克水就是 70%,与批量无关——这正是其意义所在:配方靠乘法缩放,不用重推。盐、酵种和所有辅料都用同一套表达。</p>
    <h2>你的酵种里藏着面粉和水</h2>
    <p>100% 水合的液种按重量就是一半粉一半水:100 克贡献 50 克粉 + 50 克水。无视这一点,高酵种量的面团会被误判得偏干。有效水合度——(水 + 种中水)÷(粉 + 种中粉)——才是手上的真实触感;硬种(50-60%)拉低它,液态种(125%)推高它。</p>
    <h2>各水合段位烤出来什么样</h2>
    <p>55-60% 是贝果与三明治吐司,面团自己成型;65-70% 是友好的工匠区间——气孔够开、面团仍保张力;75-80% 进入乡村欧包与佛卡夏,揉面让位给叠抱面;85% 以上(夏巴塔、部分杜兰小麦面包)与其说是面团不如说是面糊,需要耐心、油和刮板。</p>
    <h2>同一个配方为什么手感不同</h2>
    <p>面粉并不等价:12-14% 蛋白的面包粉比中筋多吸好几个百分点的水,现磨全麦更甚——同样标"70%",全麦那缸会明显偏硬。把水合度当起点刻度,按手感微调,并记录有效的那组数字:离开具体面粉,这个数没有意义。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La hidratación es un porcentaje de la harina, nada más</h2>
    <p>En porcentajes de panadero la harina siempre es 100 % y la hidratación = agua ÷ harina. 350 g de agua sobre 500 g de harina es 70 %, sin importar el tamaño del lote — ese es todo el punto: las recetas escalan multiplicando, sin volver a derivar. La sal, el fermento y cada extra se expresan igual.</p>
    <h2>Tu masa madre es harina y agua en secreto</h2>
    <p>Un levain al 100 % de hidratación es, en peso, mitad harina mitad agua: 100 g aportan 50 + 50. Ignóralo y una masa muy leudada parecerá más seca de lo que es. La hidratación efectiva — (agua + agua del fermento) ÷ (harina + harina del fermento) — es lo que tus manos sienten: los fermentos firmes (50-60 %) la bajan y los líquidos (125 %) la suben.</p>
    <h2>Qué hornea cada franja</h2>
    <p>55-60 % da bagels y pan de molde que casi se moldean solos. 65-70 % es el rango artesano amable: miga suficientemente abierta y masa que aún tensa. 75-80 % es territorio de rústicos y focaccia, donde los pliegues sustituyen al amasado. Por encima del 85 % (ciabatta, panes de sémola) la masa es más bien crema y pide paciencia, aceite y rasqueta.</p>
    <h2>Por qué la misma receta cambia de carácter</h2>
    <p>Harina no es harina: una de fuerza con 12-14 % de proteína absorbe varios puntos más de agua que la de todo uso, y la integral recién molida aún más — al mismo «70 %» la integral se sentirá tiesa. Toma la hidratación como dial inicial, ajusta al tacto y anota lo que funcionó: el número solo significa algo atado a la harina que usaste.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Hydratation ist ein Prozentsatz des Mehls, sonst nichts</h2>
    <p>Im Bäckerprozent ist Mehl stets 100 %, die Hydratation = Wasser ÷ Mehl. 350 g Wasser auf 500 g Mehl liest sich als 70 %, egal wie groß der Ansatz — genau das ist der Sinn: Rezepte skalieren per Multiplikation, nicht per Neuberechnung. Salz, Starter und jede Zugabe drücken sich genauso aus.</p>
    <h2>Dein Starter ist heimlich Mehl und Wasser</h2>
    <p>Ein Levain mit 100 % Hydratation ist nach Gewicht halb Mehl, halb Wasser: 100 g bringen 50 + 50 g. Wer das ignoriert, hält stark gesäuerte Teige für trockener, als sie sind. Die effektive Hydratation — (Wasser + Levain-Wasser) ÷ (Mehl + Levain-Mehl) — ist das, was deine Hände fühlen; feste Starter (50-60 %) senken sie, flüssige (125 %) heben sie.</p>
    <h2>Was jede Hydratations-Zone backt</h2>
    <p>55-60 % geben Bagels und Toastbrot, die sich fast von selbst formen. 65-70 % ist die freundliche Artisan-Zone: ausreichend offene Krume, Teig mit Spannung. 75-80 % ist Landbrot- und Focaccia-Terrain, wo Stretch & Folds das Kneten ersetzen. Über 85 % (Ciabatta, Durumbrote) ist der Teig eher ein Teig als ein Ballen — Geduld, Öl und Teigkarte nötig.</p>
    <h2>Warum dasselbe Rezept anders handelt</h2>
    <p>Mehl ist nicht Mehl: 12-14 % Protein in Bread Flour binden mehrere Prozentpunkte mehr Wasser als Universalmehl, frisch gemahlenes Vollkorn noch mehr — bei gleichen „70 %" fühlt sich das Vollkorn deutlich steifer an. Nimm die Hydratation als Startregler, korrigiere nach Gefühl und protokolliere, was ging: Die Zahl gilt nur zusammen mit dem verwendeten Mehl.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BreadHydrationCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
