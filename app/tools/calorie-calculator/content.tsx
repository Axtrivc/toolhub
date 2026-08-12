'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This calculator estimates your daily calorie needs using the{' '}
      <strong>Mifflin-St Jeor equation</strong>, the most accurate formula for most people. It shows
      your BMR (calories at rest) and TDEE (total daily burn including activity), plus targets for
      losing or gaining weight.
    </p>

    <div>
      <h2>How Calorie Needs Are Calculated</h2>
      <p>
        The Mifflin-St Jeor formula estimates BMR from your weight, height, age, and sex. Your TDEE
        multiplies BMR by an activity factor (1.2 for sedentary up to 1.9 for very active). To lose
        weight, eat below TDEE; to gain, eat above.
      </p>
    </div>

    <div>
      <h2>Safe Rate of Change</h2>
      <ul>
        <li>
          <strong>Mild loss:</strong> &minus;250 cal/day ≈ &minus;0.25 kg (0.5 lb) per week
        </li>
        <li>
          <strong>Standard loss:</strong> &minus;500 cal/day ≈ &minus;0.5 kg (1 lb) per week
        </li>
        <li>
          <strong>Aggressive loss:</strong> &minus;1000 cal/day ≈ &minus;1 kg (2 lb) per week (not
          for everyone)
        </li>
        <li>
          Don&apos;t eat below 1,200 cal (women) or 1,500 cal (men) without medical supervision
        </li>
      </ul>
    </div>

    <div>
      <h2>Why Estimates Vary</h2>
      <p>
        These formulas are accurate within about ±10% for most people, but individual metabolism
        varies based on muscle mass, genetics, hormones, and gut health. Use the number as a
        starting point and adjust based on real-world results over 2-3 weeks.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这个工具是什么?</h2>
    <p>
      这个计算器使用 <strong>Mifflin-St Jeor 公式</strong>(对大多数人最准确的公式)估算你每日所需的卡路里。它会显示你的 BMR(静息时消耗的卡路里)和 TDEE(包含活动在内的每日总消耗),以及减重或增重的目标值。
    </p>

    <div>
      <h2>卡路里需求是如何计算的</h2>
      <p>
        Mifflin-St Jeor 公式根据你的体重、身高、年龄和性别估算 BMR。你的 TDEE 将 BMR 乘以一个活动系数(久坐为 1.2,非常高强度可达 1.9)。想减重,摄入要低于 TDEE;想增重,摄入要高于 TDEE。
      </p>
    </div>

    <div>
      <h2>安全的增减速度</h2>
      <ul>
        <li>
          <strong>温和减重:</strong> −250 cal/天 ≈ 每周 −0.25 kg(0.5 lb)
        </li>
        <li>
          <strong>标准减重:</strong> −500 cal/天 ≈ 每周 −0.5 kg(1 lb)
        </li>
        <li>
          <strong>激进减重:</strong> −1000 cal/天 ≈ 每周 −1 kg(2 lb)(并不适合所有人)
        </li>
        <li>
          在没有医生指导的情况下,女性不要低于 1,200 cal,男性不要低于 1,500 cal
        </li>
      </ul>
    </div>

    <div>
      <h2>为什么估算值会有差异</h2>
      <p>
        这些公式对大多数人的准确度大约在 ±10% 以内,但个人代谢会因肌肉量、基因、激素和肠道健康而异。把这个数字当作起点,并根据 2-3 周的实际效果进行调整。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora estima tus necesidades diarias de calorías usando la{' '}
      <strong>ecuación de Mifflin-St Jeor</strong>, la fórmula más precisa para la mayoría de las
      personas. Muestra tu BMR (calorías en reposo) y tu TDEE (gasto diario total incluyendo la
      actividad), además de objetivos para perder o ganar peso.
    </p>

    <div>
      <h2>Cómo se calculan las necesidades de calorías</h2>
      <p>
        La fórmula de Mifflin-St Jeor estima el BMR a partir de tu peso, altura, edad y sexo. Tu
        TDEE multiplica el BMR por un factor de actividad (1,2 para sedentario hasta 1,9 para muy
        activo). Para perder peso, come por debajo del TDEE; para ganar, come por encima.
      </p>
    </div>

    <div>
      <h2>Ritmo de cambio seguro</h2>
      <ul>
        <li>
          <strong>Pérdida suave:</strong> −250 cal/día ≈ −0,25 kg (0,5 lb) por semana
        </li>
        <li>
          <strong>Pérdida estándar:</strong> −500 cal/día ≈ −0,5 kg (1 lb) por semana
        </li>
        <li>
          <strong>Pérdida agresiva:</strong> −1000 cal/día ≈ −1 kg (2 lb) por semana (no es para
          todos)
        </li>
        <li>
          No comas por debajo de 1.200 cal (mujeres) o 1.500 cal (hombres) sin supervisión médica
        </li>
      </ul>
    </div>

    <div>
      <h2>Por qué las estimaciones varían</h2>
      <p>
        Estas fórmulas son precisas dentro de aproximadamente ±10 % para la mayoría de las personas,
        pero el metabolismo individual varía según la masa muscular, la genética, las hormonas y la
        salud intestinal. Usa el número como punto de partida y ajústalo según los resultados reales
        durante 2-3 semanas.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Worum geht es bei diesem Werkzeug?</h2>
    <p>
      Dieser Rechner schätzt deinen täglichen Kalorienbedarf mit der{' '}
      <strong>Mifflin-St-Jeor-Gleichung</strong>, der genauesten Formel für die meisten Menschen.
      Er zeigt deinen Grundumsatz (BMR, Kalorien in Ruhe) und deinen Gesamtumsatz (TDEE, täglicher
      Gesamtverbrauch inklusive Aktivität) sowie Zielwerte für Abnehmen oder Zunehmen.
    </p>

    <div>
      <h2>Wie der Kalorienbedarf berechnet wird</h2>
      <p>
        Die Mifflin-St-Jeor-Formel schätzt den BMR aus deinem Gewicht, deiner Größe, deinem Alter
        und deinem Geschlecht. Dein TDEE multipliziert den BMR mit einem Aktivitätsfaktor (1,2 bei
        sitzender bis 1,9 bei sehr aktiver Lebensweise). Zum Abnehmen iss unterhalb des TDEE; zum
        Zunehmen darüber.
      </p>
    </div>

    <div>
      <h2>Sicheres Tempo der Veränderung</h2>
      <ul>
        <li>
          <strong>Mäßiger Verlust:</strong> −250 cal/Tag ≈ −0,25 kg (0,5 lb) pro Woche
        </li>
        <li>
          <strong>Standardverlust:</strong> −500 cal/Tag ≈ −0,5 kg (1 lb) pro Woche
        </li>
        <li>
          <strong>Aggressiver Verlust:</strong> −1000 cal/Tag ≈ −1 kg (2 lb) pro Woche (nicht für
          jeden geeignet)
        </li>
        <li>
          Iss nicht unter 1.200 cal (Frauen) oder 1.500 cal (Männer) ohne ärztliche Aufsicht
        </li>
      </ul>
    </div>

    <div>
      <h2>Warum die Schätzwerte schwanken</h2>
      <p>
        Diese Formeln sind für die meisten Menschen auf etwa ±10 % genau, aber der individuelle
        Stoffwechsel variiert je nach Muskelmasse, Genetik, Hormonen und Darmgesundheit. Nutze den
        Wert als Ausgangspunkt und passe ihn nach 2-3 Wochen anhand der tatsächlichen Ergebnisse an.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CalorieCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
