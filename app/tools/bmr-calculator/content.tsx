'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>BMR</strong> (Basal Metabolic Rate) is the number of calories your body burns at
      complete rest, just to keep you alive &mdash; breathing, circulating blood, maintaining body
      temperature. It accounts for 60-75% of the calories you burn each day.
    </p>

    <div>
      <h2>The Mifflin-St Jeor Formula</h2>
      <p>This calculator uses the most accurate modern formula:</p>
    </div>

    <div>
      <h2>Factors That Affect BMR</h2>
      <ul>
        <li>
          <strong>Muscle mass</strong> &mdash; muscle burns more than fat, even at rest
        </li>
        <li>
          <strong>Age</strong> &mdash; BMR drops about 2% per decade after 20
        </li>
        <li>
          <strong>Sex</strong> &mdash; men typically have higher BMR due to more muscle
        </li>
        <li>
          <strong>Body size</strong> &mdash; larger bodies burn more calories
        </li>
        <li>
          <strong>Genetics</strong> &mdash; some people naturally burn more or less
        </li>
      </ul>
    </div>

    <div>
      <h2>BMR vs. TDEE</h2>
      <p>
        BMR is calories at <em>complete rest</em>. Your actual daily burn (TDEE) is BMR multiplied
        by an activity factor. Even light activity adds 20-40% on top of BMR. Use the Calorie
        Calculator if you want your full daily burn.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这个工具是什么?</h2>
    <p>
      <strong>BMR</strong>(基础代谢率)是你的身体在完全静息状态下、仅为维持生命所消耗的卡路里——呼吸、血液循环、维持体温。它占你每天消耗卡路里的 60-75%。
    </p>

    <div>
      <h2>Mifflin-St Jeor 公式</h2>
      <p>本计算器使用最准确的现代公式:</p>
    </div>

    <div>
      <h2>影响 BMR 的因素</h2>
      <ul>
        <li>
          <strong>肌肉量</strong>——即使在静息时,肌肉也比脂肪消耗更多
        </li>
        <li>
          <strong>年龄</strong>——20 岁之后,BMR 每十年大约下降 2%
        </li>
        <li>
          <strong>性别</strong>——由于肌肉更多,男性的 BMR 通常更高
        </li>
        <li>
          <strong>体型</strong>——体型越大,消耗的卡路里越多
        </li>
        <li>
          <strong>基因</strong>——有些人天生消耗更多或更少
        </li>
      </ul>
    </div>

    <div>
      <h2>BMR 与 TDEE</h2>
      <p>
        BMR 是<em>完全静息</em>状态下的卡路里消耗。你实际的每日消耗(TDEE)是 BMR 乘以一个活动系数。即使是轻度活动,也会在 BMR 基础上增加 20-40%。如果你想知道完整的每日消耗,请使用卡路里计算器。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>BMR</strong> (tasa metabólica basal) es la cantidad de calorías que tu cuerpo
      quema en reposo completo, solo para mantenerte vivo — respirar, bombear sangre, mantener la
      temperatura corporal. Representa el 60-75 % de las calorías que quemas cada día.
    </p>

    <div>
      <h2>La fórmula de Mifflin-St Jeor</h2>
      <p>Esta calculadora utiliza la fórmula moderna más precisa:</p>
    </div>

    <div>
      <h2>Factores que afectan al BMR</h2>
      <ul>
        <li>
          <strong>Masa muscular</strong> — el músculo quema más que la grasa, incluso en reposo
        </li>
        <li>
          <strong>Edad</strong> — el BMR cae aproximadamente un 2 % por década a partir de los 20
        </li>
        <li>
          <strong>Sexo</strong> — los hombres suelen tener un BMR más alto por tener más músculo
        </li>
        <li>
          <strong>Tamaño corporal</strong> — los cuerpos más grandes queman más calorías
        </li>
        <li>
          <strong>Genética</strong> — algunas personas queman de forma natural más o menos
        </li>
      </ul>
    </div>

    <div>
      <h2>BMR frente a TDEE</h2>
      <p>
        El BMR son las calorías en <em>reposo completo</em>. Tu quema diaria real (TDEE) es el BMR
        multiplicado por un factor de actividad. Incluso la actividad ligera añade un 20-40 % por
        encima del BMR. Usa la Calculadora de Calorías si quieres tu quema diaria completa.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Worum geht es bei diesem Werkzeug?</h2>
    <p>
      Der <strong>BMR</strong> (Grundumsatz) ist die Anzahl an Kalorien, die dein Körper im
      vollständigen Ruhezustand verbrennt, nur um dich am Leben zu erhalten — Atmen, Blutkreislauf,
      Körpertemperatur aufrechterhalten. Er macht 60-75 % der Kalorien aus, die du täglich
      verbrennst.
    </p>

    <div>
      <h2>Die Mifflin-St-Jeor-Formel</h2>
      <p>Dieser Rechner verwendet die genaueste moderne Formel:</p>
    </div>

    <div>
      <h2>Faktoren, die den BMR beeinflussen</h2>
      <ul>
        <li>
          <strong>Muskelmasse</strong> — Muskeln verbrennen mehr als Fett, auch in Ruhe
        </li>
        <li>
          <strong>Alter</strong> — Der BMR sinkt ab 20 um etwa 2 % pro Jahrzehnt
        </li>
        <li>
          <strong>Geschlecht</strong> — Männer haben typischerweise einen höheren BMR wegen ihres
          höheren Muskelanteils
        </li>
        <li>
          <strong>Körpergröße</strong> — Größere Körper verbrennen mehr Kalorien
        </li>
        <li>
          <strong>Genetik</strong> — Manche Menschen verbrennen von Natur aus mehr oder weniger
        </li>
      </ul>
    </div>

    <div>
      <h2>BMR vs. TDEE</h2>
      <p>
        Der BMR sind die Kalorien in <em>vollständiger Ruhe</em>. Dein tatsächlicher Tagesverbrauch
        (TDEE) ist der BMR multipliziert mit einem Aktivitätsfaktor. Selbst leichte Aktivität legt
        20-40 % obendrauf. Nutze den Kalorienrechner, wenn du deinen vollständigen Tagesverbrauch
        wissen möchtest.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function BMRCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
