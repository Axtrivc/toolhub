'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ChineseZodiacCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Lichun is the line most people miss</h2>
    <p>The zodiac year traditionally turns at Lichun — Start of Spring, one of the 24 solar terms, falling on February 3-5 — not on January 1. About 1 in 12 people born in January or early February carry the previous year's animal without knowing it. The folk alternative counts from Lunar New Year (which drifts between Jan 21 and Feb 20); Bazi practitioners and most published year-columns use Lichun, so this tool does too, and lets you pick the January-February case explicitly.</p>
    <h2>Animal, element, yin-yang: the 60-year machine</h2>
    <p>Twelve animals rotate yearly while ten Heavenly Stems pair the five elements into yin and yang versions: Yang Wood Rat (1984), Yin Wood Ox (1985), Yang Fire Tiger (1986), and so on. The full pattern takes 60 years to repeat — 2026 is a Yang Fire Horse, and the next Yang Fire Horse arrives in 2086. Your "Ben Ming Nian" (zodiac year recurrence, every 12 years) is traditionally a year for red underwear and extra caution, not a jackpot.</p>
    <h2>Quick reference table 1924-2031</h2>
    <p>Rat 1924 · Ox 1925 · Tiger 1926 · Rabbit 1927 · Dragon 1928 · Snake 1929 · Horse 1930 · Goat 1931 · Monkey 1932 · Rooster 1933 · Dog 1934 · Pig 1935 — then the same twelve animals every twelve years: Dragon years are 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024; Horse years 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026. Remember: check February birthdays against Lichun first.</p>
    <h2>Compatibility talk, with the salt it needs</h2>
    <p>The folklore pairs the six "trine" groups (Monkey-Rat-Dragon, Snake-Rooster-Ox, Tiger-Horse-Dog, Rabbit-Goat-Pig) and names six clashing pairs (Rat-Horse, Ox-Goat, Tiger-Monkey, Rabbit-Rooster, Dragon-Dog, Snake-Pig). It is a charming social script with no predictive record — marriages of every pairing do fine at similar rates. Take the animal, enjoy the element, and blame nothing on a goat.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>立春是最容易被忽略的那条线</h2>
    <p>传统上生肖年在立春——二十四节气之首,落在 2 月 3-5 日——切换,而不是元旦。大约每 12 个人中就有 1 个生于 1 月或 2 月上旬、实际属上一年生肖却毫不知情。民俗口径则从农历新年起算(在 1 月 21 日-2 月 20 日之间浮动);八字命理与多数公开的年柱资料用立春,本工具亦然,并让你显式选择"1-2 月生日"的情形。</p>
    <h2>生肖、五行、阴阳:60 年的机器</h2>
    <p>十二生肖逐年轮换,十天干把五行各分阴阳两版:阳木鼠(1984)、阴木牛(1985)、阳火虎(1986)……整个组合 60 年才重复一轮——2026 是阳火马(丙午),下一个阳火马要等到 2086 年。你的"本命年"(所属生肖每 12 年重现一次)传统上是穿红、行事谨慎的一年,不是"中大奖"之年。</p>
    <h2>1924-2031 速查表</h2>
    <p>鼠 1924 · 牛 1925 · 虎 1926 · 兔 1927 · 龙 1928 · 蛇 1929 · 马 1930 · 羊 1931 · 猴 1932 · 鸡 1933 · 狗 1934 · 猪 1935——此后每 12 年轮回一次:龙年为 1928、1940、1952、1964、1976、1988、2000、2012、2024;马年为 1930、1942、1954、1966、1978、1990、2002、2014、2026。记住:2 月生日先对照立春。</p>
    <h2>三合六冲之说,配该配的盐</h2>
    <p>民俗把十二生肖分成三合组(猴鼠龙、蛇鸡牛、虎马狗、兔羊猪)与六个相冲(鼠马、牛羊、虎猴、兔鸡、龙狗、蛇猪)。它是一套有趣的社会剧本,没有任何预测记录——各种配对的婚姻幸福率并无系统差异。属相照看,五行照聊,但别把什么事都怪到羊头上。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Lichun es la línea que casi todos pasan por alto</h2>
    <p>El año zodiacal cambia tradicionalmente en Lichun —el Inicio de la Primavera, uno de los 24 términos solares, entre el 3 y el 5 de febrero— y no el 1 de enero. Aproximadamente 1 de cada 12 personas nacidas en enero o principios de febrero lleva el animal del año anterior sin saberlo. La variante popular cuenta desde el Año Nuevo lunar (entre el 21 de enero y el 20 de febrero); los practicantes de Bazi y la mayoría de tablas usan Lichun, y esta herramienta también, dejándote marcar el caso de enero-febrero.</p>
    <h2>Animal, elemento, yin-yang: la máquina de 60 años</h2>
    <p>Doce animales rotan cada año mientras los diez troncos celestes reparten los cinco elementos en versión yin y yang: Rata de Madera Yang (1984), Buey de Madera Yin (1985), Tigre de Fuego Yang (1986)... El patrón completo tarda 60 años en repetirse: 2026 es Caballo de Fuego Yang, y el siguiente llegará en 2086. Tu «Ben Ming Nian» (recurrencia cada 12 años) es por tradición año de ropa roja y cautela extra, no de premio gordo.</p>
    <h2>Tabla rápida 1924-2031</h2>
    <p>Rata 1924 · Buey 1925 · Tigre 1926 · Conejo 1927 · Dragón 1928 · Serpiente 1929 · Caballo 1930 · Cabra 1931 · Mono 1932 · Gallo 1933 · Perro 1934 · Cerdo 1935 — y los mismos doce animales cada doce años: años Dragón 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024; años Caballo 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026. Recuerda: los cumpleaños de febrero se cotejan primero con Lichun.</p>
    <h2>La compatibilidad, con la sal que merece</h2>
    <p>El folclore agrupa tríos (Mono-Rata-Dragón, Serpiente-Gallo-Buey, Tigre-Caballo-Perro, Conejo-Cabra-Cerdo) y señala seis choques (Rata-Caballo, Buey-Cabra, Tigre-Mono, Conejo-Gallo, Dragón-Perro, Serpiente-Cerdo). Es un guion social simpático sin registro predictivo alguno: los matrimonios de cualquier pareja les van igual de bien por término medio. Mira el animal, disfruta del elemento y no le eches la culpa a una cabra.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Lichun ist die Linie, die fast alle übersehen</h2>
    <p>Das Tierkreisjahr wechselt traditionell am Lichun — dem Frühlingsbeginn, einem der 24 Sonnentermine, am 3.-5. Februar — und nicht am 1. Januar. Etwa jeder zwölfte Mensch, der im Januar oder Anfang Februar geboren ist, trägt unwissend das Tier des Vorjahres. Die volkstümliche Variante zählt vom Mondneujahr (21. Januar bis 20. Februar); Bazi-Praktiker und die meisten Tabellen nutzen Lichun — dieses Werkzeug auch, und der Januar-Februar-Fall lässt sich explizit wählen.</p>
    <h2>Tier, Element, Yin-Yang: die 60-Jahre-Maschine</h2>
    <p>Zwölf Tiere rotieren jährlich, während die zehn Himmelsstämme die fünf Elemente in Yin- und Yang-Versionen teilen: Yang-Holz-Ratte (1984), Yin-Holz-Büffel (1985), Yang-Feuer-Tiger (1986) und so weiter. Das volle Muster wiederholt sich erst nach 60 Jahren — 2026 ist ein Yang-Feuer-Pferd, das nächste kommt 2086. Das eigene „Ben Ming Nian" (Wiederkehr alle 12 Jahre) gilt traditionell als Jahr für rote Wäsche und extra Vorsicht, nicht als Jackpot.</p>
    <h2>Schnelltabelle 1924-2031</h2>
    <p>Ratte 1924 · Büffel 1925 · Tiger 1926 · Hase 1927 · Drache 1928 · Schlange 1929 · Pferd 1930 · Ziege 1931 · Affe 1932 · Hahn 1933 · Hund 1934 · Schwein 1935 — danach dieselben zwölf Tiere alle zwölf Jahre: Drachenjahre 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024; Pferdejahre 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026. Denke daran: Februar-Geburtstage zuerst mit Lichun abgleichen.</p>
    <h2>Kompatibilitätsrede, mit der nötigen Prise Salz</h2>
    <p>Die Volksüberlieferung bildet Trigonen (Affe-Ratte-Drache, Schlange-Hahn-Büffel, Tiger-Pferd-Hund, Hase-Ziege-Schwein) und nennt sechs Clash-Paare (Ratte-Pferd, Büffel-Ziege, Tiger-Affe, Hase-Hahn, Drache-Hund, Schlange-Schwein). Das ist ein charmantes soziales Drehbuch ohne jede Vorhersagebilanz — Ehen jeder Kombination laufen im Schnitt gleich gut. Tier ansehen, Element genießen, und gib der Ziege keine Schuld.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ChineseZodiacCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
