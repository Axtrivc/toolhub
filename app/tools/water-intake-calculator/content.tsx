'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This calculator estimates how much water you should drink daily, based on body weight,
      exercise, and climate. It uses the widely cited guideline of ~35 ml per kg of body weight,
      adjusted for activity and heat.
    </p>

    <div>
      <h2>General Guidelines</h2>
      <ul>
        <li>
          <strong>Sedentary adults:</strong> ~35 ml per kg body weight
        </li>
        <li>
          <strong>Add 350-500 ml</strong> per hour of exercise
        </li>
        <li>
          <strong>Hot/humid climates:</strong> add 10-20%
        </li>
        <li>
          <strong>Pregnancy or breastfeeding:</strong> add 500-700 ml
        </li>
        <li>Coffee, tea, and food all count toward your total water intake</li>
      </ul>
    </div>

    <div>
      <h2>Listen to Your Body</h2>
      <p>
        Formulas are starting points, not rules. Thirst is a reliable signal for most people. Check
        urine color &mdash; pale yellow means you&apos;re well hydrated; dark yellow means drink
        more. Clear urine means you may be overhydrated.
      </p>
    </div>

    <div>
      <h2>Can You Drink Too Much Water?</h2>
      <p>
        Yes. <strong>Hyponatremia</strong> (low blood sodium from excessive water) is rare but
        dangerous, and has affected endurance athletes who drink far more than they lose. Don&apos;t
        force multiple liters beyond thirst unless advised by a doctor.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这个工具是什么?</h2>
    <p>
      这个计算器根据体重、运动量和气候,估算你每天应该喝多少水。它采用广泛引用的标准——每公斤体重约 35 ml——并根据活动和炎热程度进行调整。
    </p>

    <div>
      <h2>一般建议</h2>
      <ul>
        <li>
          <strong>久坐成年人:</strong> 每公斤体重约 35 ml
        </li>
        <li>
          每运动一小时<strong>增加 350-500 ml</strong>
        </li>
        <li>
          <strong>炎热/潮湿气候:</strong> 增加 10-20%
        </li>
        <li>
          <strong>孕期或哺乳期:</strong> 增加 500-700 ml
        </li>
        <li>咖啡、茶和食物都计入你的总饮水量</li>
      </ul>
    </div>

    <div>
      <h2>倾听身体的声音</h2>
      <p>
        公式只是起点,不是硬性规定。对大多数人来说,口渴是可靠的信号。观察尿液颜色——浅黄色说明水分充足;深黄色说明该多喝水了。透明的尿液可能意味着饮水过量。
      </p>
    </div>

    <div>
      <h2>水喝多了会有问题吗?</h2>
      <p>
        是的。<strong>低钠血症</strong>(因饮水过量导致的血钠过低)虽然罕见但很危险,已有耐力运动员因饮水远超流失量而发病的案例。除非医生另有建议,否则不要为了硬灌而喝下超过口渴需求的几升水。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta calculadora estima cuánta agua deberías beber al día, según tu peso corporal, el
      ejercicio y el clima. Usa la pauta muy citada de ~35 ml por kg de peso corporal, ajustada
      según la actividad y el calor.
    </p>

    <div>
      <h2>Pautas generales</h2>
      <ul>
        <li>
          <strong>Adultos sedentarios:</strong> ~35 ml por kg de peso corporal
        </li>
        <li>
          <strong>Añade 350-500 ml</strong> por hora de ejercicio
        </li>
        <li>
          <strong>Climas calurosos/húmedos:</strong> añade un 10-20 %
        </li>
        <li>
          <strong>Embarazo o lactancia:</strong> añade 500-700 ml
        </li>
        <li>El café, el té y la comida cuentan para tu ingesta total de agua</li>
      </ul>
    </div>

    <div>
      <h2>Escucha a tu cuerpo</h2>
      <p>
        Las fórmulas son puntos de partida, no reglas. La sed es una señal fiable para la mayoría
        de las personas. Revisa el color de la orina — amarillo pálido significa que estás bien
        hidratado; amarillo oscuro significa que debes beber más. Una orina transparente significa
        que puedes estar sobrehidratado.
      </p>
    </div>

    <div>
      <h2>¿Puedes beber demasiada agua?</h2>
      <p>
        Sí. La <strong>hiponatremia</strong> (sodio bajo en sangre por exceso de agua) es poco
        frecuente pero peligrosa, y ha afectado a deportistas de resistencia que beben mucho más de
        lo que pierden. No fuerces varios litros más allá de la sed salvo que lo indique un médico.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Worum geht es bei diesem Werkzeug?</h2>
    <p>
      Dieser Rechner schätzt, wie viel Wasser du täglich trinken solltest, basierend auf
      Körpergewicht, Bewegung und Klima. Er verwendet die oft zitierte Richtlinie von ~35 ml pro kg
      Körpergewicht, angepasst an Aktivität und Hitze.
    </p>

    <div>
      <h2>Allgemeine Richtlinien</h2>
      <ul>
        <li>
          <strong>Sitzende Erwachsene:</strong> ~35 ml pro kg Körpergewicht
        </li>
        <li>
          <strong>Plus 350-500 ml</strong> pro Stunde Bewegung
        </li>
        <li>
          <strong>Heiße/feuchte Klimate:</strong> plus 10-20 %
        </li>
        <li>
          <strong>Schwangerschaft oder Stillzeit:</strong> plus 500-700 ml
        </li>
        <li>Kaffee, Tee und Essen zählen alle zur gesamten Wasseraufnahme</li>
      </ul>
    </div>

    <div>
      <h2>Hör auf deinen Körper</h2>
      <p>
        Formeln sind Ausgangspunkte, keine Regeln. Durst ist für die meisten Menschen ein
        zuverlässiges Signal. Achte auf die Urinfarbe — hellgelb bedeutet, du bist gut hydriert;
        dunkelgelb bedeutet, trink mehr. Klarer Urin kann bedeuten, dass du überhydriert bist.
      </p>
    </div>

    <div>
      <h2>Kannst du zu viel Wasser trinken?</h2>
      <p>
        Ja. Eine <strong>Hyponatriämie</strong> (niedriger Blut-Natrium-Spiegel durch übermäßiges
        Wasser) ist selten, aber gefährlich und hat schon Ausdauersportler betroffen, die weit mehr
        tranken, als sie verloren. Trink nicht mehrere Liter über den Durst hinaus, es sei denn, ein
        Arzt rät dir dazu.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WaterIntakeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
