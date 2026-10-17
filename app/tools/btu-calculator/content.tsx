'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BtuCalculator 长文正文 —— 四语 dispatcher
 * en 分支与工厂渲染一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where the 20 BTU per square foot rule comes from</h2>
    <p>The 20 BTU/ft² baseline assumes an 8 ft ceiling, average insulation, and moderate sun — conditions where a 350 ft² room needs about 7,000 BTU/hr. Vaulted ceilings add air volume, so the calculator scales by height ÷ 8: a 10 ft ceiling adds 25% to the base load before anything else.</p>
    <h2>The corrections that actually move the number</h2>
    <p>Heavy shade trims 10% and a baking south or west exposure adds 10%; a top floor with an attic roof above adds another 10% because the ceiling radiates stored heat all afternoon. Each person beyond two adds roughly 600 BTU (a human at rest releases the heat of an old incandescent bulb), and a kitchen adds about 4,000 BTU per DOE guidance.</p>
    <h2>Why oversizing backfires</h2>
    <p>An oversized unit drops the air temperature in minutes, satisfies the thermostat, and shuts off before it has condensed moisture out of the air. The result is a cold, clammy room — short-cycling also wears the compressor. If your corrected load is more than ~30% above the area-only baseline, insulation, window film, or shade usually beat the next size up.</p>
    <h2>Reading BTU in tons and kW</h2>
    <p>Central and mini-split systems are sold in tons: 12,000 BTU/hr per ton, so a 24,000 BTU result is a 2-ton unit. Engineers convert with 1 ton ≈ 3.52 kW of cooling. Window units stay labeled in BTU, which is why this calculator shows both.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>"每平方英尺 20 BTU"从哪来</h2>
    <p>20 BTU/ft² 的基准假设 8 英尺层高、普通隔热、日照适中——在这个条件下,350 ft² 的房间约需 7,000 BTU/小时。挑高会增加空气体积,所以计算器按"层高 ÷ 8"缩放:10 英尺层高在所有其他修正之前,就先给基准负荷加 25%。</p>
    <h2>真正改变结果的修正项</h2>
    <p>重度遮荫减 10%,朝南或朝西暴晒加 10%;顶楼上方是阁楼或屋面,再加 10%——天花板整个下午都在辐射蓄热。两人之外每多一人约加 600 BTU(静坐的人放出的热量接近一只老式白炽灯泡),厨房按 DOE 指南加约 4,000 BTU。</p>
    <h2>为什么买大会适得其反</h2>
    <p>过大的机组几分钟就把气温拉下来,温控器达标即停机——空气里的水分还没来得及冷凝排出。结果是一个又冷又潮的房间,频繁启停还伤压缩机。如果修正后的负荷比"只按面积"高出 30% 以上,加隔热、贴窗膜、做遮荫通常比买大一号更划算。</p>
    <h2>用吨和 kW 读懂 BTU</h2>
    <p>中央空调和迷你分体按"吨"销售:1 吨 = 12,000 BTU/小时,算出 24,000 BTU 就是 2 吨机组。工程口径 1 吨 ≈ 3.52 kW 制冷量。窗机仍以 BTU 标注——这正是本计算器两种单位都显示的原因。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>De dónde sale la regla de 20 BTU por pie cuadrado</h2>
    <p>El punto de partida de 20 BTU/ft² asume techo de 8 pies, aislamiento medio y sol moderado: ahí una habitación de 350 ft² pide unos 7.000 BTU/h. Los techos altos añaden volumen de aire, por eso la calculadora escala por altura ÷ 8 — un techo de 10 pies suma un 25 % a la carga base antes de cualquier otra corrección.</p>
    <h2>Las correcciones que de verdad mueven la cifra</h2>
    <p>La sombra densa resta un 10 % y una fachada sur u oeste castigada añade un 10 %; el último piso con ático encima suma otro 10 % porque el techo irradia calor acumulado toda la tarde. Cada persona por encima de dos añade unos 600 BTU (un humano en reposo emite lo que una bombilla incandescente antigua) y una cocina suma unos 4.000 BTU según la guía del DOE.</p>
    <h2>Por qué sobredimensionar sale caro</h2>
    <p>Un equipo demasiado grande baja la temperatura en minutos, cumple el termostato y se apaga antes de condensar la humedad del aire: habitación fría y pegajosa, además de ciclos cortos que desgastan el compresor. Si tu carga corregida supera en ~30 % a la de solo superficie, aislar, films de ventana o sombra suelen ganarle a la siguiente talla.</p>
    <h2>Leer BTU en toneladas y kW</h2>
    <p>Los centrales y minisplits se venden en toneladas: 12.000 BTU/h por tonelada, así que 24.000 BTU son un equipo de 2 toneladas. En ingeniería, 1 tonelada ≈ 3,52 kW de refrigeración. Los de ventana siguen etiquetados en BTU — por eso aquí ves ambas unidades.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Woher die 20-BTU-pro-Quadratfuß-Regel kommt</h2>
    <p>Die 20 BTU/ft²-Basis setzt 8-Fuß-Decken, durchschnittliche Dämmung und mäßige Sonne voraus — unter diesen Bedingungen braucht ein 350-ft²-Raum etwa 7.000 BTU/h. Hohe Decken bedeuten mehr Luftvolumen, daher skaliert der Rechner mit Höhe ÷ 8: Eine 10-Fuß-Decke schlägt mit +25 % auf die Grundlast, bevor sonst etwas korrigiert wird.</p>
    <h2>Die Zuschläge, die die Zahl wirklich bewegen</h2>
    <p>Starke Schattierung zieht 10 % ab, eine gebeizte Süd- oder Westfassade gibt 10 % dazu; ein Obergeschoss mit Dachboden darüber addiert weitere 10 %, weil die Decke den ganzen Nachmittag gespeicherte Wärme abstrahlt. Jede Person über zwei bringt rund 600 BTU (ein ruhender Mensch strahlt so viel ab wie eine alte Glühlampe), und eine Küche bekommt nach DOE-Leitlinie etwa 4.000 BTU obendrauf.</p>
    <h2>Warum zu groß nachhinten losgeht</h2>
    <p>Ein zu großes Gerät senkt die Temperatur in Minuten, der Thermostat ist zufrieden, und der Kompressor schaltet ab, bevor Feuchtigkeit aus der Luft kondensiert: kalt und klebrig statt angenehm — und die Kurztaktung verschleißt den Kompressor. Liegt die korrigierte Last ~30 % über der Flächenbasis, schlagen Dämmung, Fensterfolie oder Verschattung meist das nächstgrößere Gerät.</p>
    <h2>BTU in Tonnen und kW gelesen</h2>
    <p>Zentral- und Split-Anlagen werden in Tonnen verkauft: 12.000 BTU/h pro Tonne, 24.000 BTU sind also ein 2-Tonnen-Gerät. Ingenieurskürzel: 1 Tonne ≈ 3,52 kW Kälteleistung. Fenstergeräte bleiben in BTU beschriftet — deshalb zeigt der Rechner beide.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BtuCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
