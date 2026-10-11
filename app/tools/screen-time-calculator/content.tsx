'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ScreenTimeCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What the numbers mean</h2>
    <p>Four hours daily equals 61 full 24-hour days per year — about two months. Projected across decades the figure feels abstract until compared against learning a language or writing a book.</p>
    <h2>Where the average sits</h2>
    <p>US adults average roughly 4.5-5 hours daily on mobile alone; total screen exposure including TV and work pushes past seven hours. If yours is below average, that still compounds the same way.</p>
    <h2>Reclaiming realistically</h2>
    <p>The 1-hour scenario is deliberately modest: deleting one habitual app session usually recovers that without willpower theatrics. Grayscale mode and home-screen decluttering beat app timers in most trials.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这些数字意味着什么</h2>
    <p>每天 4 小时,一年就是 61 个完整的 24 小时天——约合两个月。拉长到几十年看,数字显得抽象;一旦换算成"够学一门语言、写一本书"就有感觉了。</p>
    <h2>平均线在哪里</h2>
    <p>美国成年人仅手机就日均约 4.5-5 小时;算上电视和工作,总屏幕暴露超过 7 小时。即使你低于平均,这笔账照样复利式累积。</p>
    <h2>现实地找回时间</h2>
    <p>"每天找回 1 小时"的情境刻意保守:删掉一个习惯性刷的应用通常就能拿回这一小时,不需要意志力表演。灰度模式和主屏精简在多数试验中比应用限时更有效。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué significan los números</h2>
    <p>Cuatro horas diarias son 61 días completos de 24 horas al año — cerca de dos meses. Proyectada a décadas, la cifra suena abstracta hasta que la comparas con aprender un idioma o escribir un libro.</p>
    <h2>Dónde está la media</h2>
    <p>Los adultos de EE. UU. promedian unas 4.5-5 h diarias solo en el móvil; la exposición total a pantallas, con TV y trabajo, supera las siete horas. Aunque estés por debajo de la media, el efecto se acumula igual.</p>
    <h2>Recuperar con realismo</h2>
    <p>El escenario de 1 hora es deliberadamente modesto: eliminar una sesión habitual de app suele recuperarla sin dramas de fuerza de voluntad. El modo escala de grises y depurar la pantalla de inicio ganan a los límites de apps en la mayoría de los ensayos.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was die Zahlen bedeuten</h2>
    <p>Vier Stunden täglich sind 61 volle 24-Stunden-Tage pro Jahr — gut zwei Monate. Über Jahrzehnte projiziert wirkt die Zahl abstrakt, bis du sie gegen eine neue Sprache oder ein Buch hältst.</p>
    <h2>Wo der Durchschnitt liegt</h2>
    <p>US-Erwachsene schaffen im Schnitt 4.5-5 Stunden täglich allein am Handy; die gesamte Bildschirmzeit inklusive TV und Arbeit liegt über sieben Stunden. Selbst unterdurchschnittliche Werte summieren sich genauso.</p>
    <h2>Realistisch zurückgewinnen</h2>
    <p>Das 1-Stunden-Szenario ist bewusst bescheiden: Eine gewohnheitsmäßige App-Session zu löschen, holt die Stunde meist ohne Willenskraft-Theater zurück. Graustufenmodus und ausgeräumter Homescreen schlagen App-Timer in den meisten Studien.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ScreenTimeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
