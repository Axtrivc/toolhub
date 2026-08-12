'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p><strong>Macros</strong> (macronutrients) are the three calorie-providing nutrients: protein, carbohydrates, and fat. This calculator splits your daily calorie target into a macro breakdown based on your goal.</p>
    <div>
      <h2>The Three Macros</h2>
      <ul>
        <li><strong>Protein (4 cal/g):</strong> Builds and repairs muscle. Aim 1.6-2.2g per kg body weight.</li>
        <li><strong>Carbs (4 cal/g):</strong> Primary energy source. Critical for high-intensity exercise.</li>
        <li><strong>Fat (9 cal/g):</strong> Hormones, vitamin absorption, satiety. Don&apos;t go below 20% of calories.</li>
      </ul>
    </div>
    <div>
      <h2>Recommended Splits by Goal</h2>
      <ul>
        <li><strong>Lose weight:</strong> Higher protein (40/30/30) to preserve muscle in a deficit</li>
        <li><strong>Maintain:</strong> Balanced (30/40/30)</li>
        <li><strong>Build muscle:</strong> Higher carbs (35/45/20) for training fuel</li>
      </ul>
    </div>
    <div>
      <h2>The Formula</h2>
      <>
        <p>Each macro&apos;s grams come from its calorie share divided by its calories-per-gram:</p>
        <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
          Grams = (Daily&nbsp;Calories &times; Macro&nbsp;%) &divide; Cal&nbsp;per&nbsp;gram
        </p>
        <p>For a 2,000-calorie maintain target (30% protein / 40% carbs / 30% fat):</p>
        <ul>
          <li><strong>Protein:</strong> 2000 &times; 0.30 &divide; 4 = 150 g</li>
          <li><strong>Carbs:</strong> 2000 &times; 0.40 &divide; 4 = 200 g</li>
          <li><strong>Fat:</strong> 2000 &times; 0.30 &divide; 9 = 67 g</li>
        </ul>
        <p>The pie chart above shows the same split by calories &mdash; fat looks smaller because each gram packs more than twice the calories of protein or carbs.</p>
      </>
    </div>
    <div>
      <h2>Protein Is the Most Important Macro</h2>
      <p>For most people, hitting your protein target matters more than the exact carb/fat split. Adequate protein preserves muscle during weight loss, supports muscle gain, and increases satiety. Aim for 1.6-2.2g per kg of body weight.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>「宏量营养素」是提供热量的三大营养素：蛋白质、碳水化合物和脂肪。本计算器根据你的目标，将每日热量目标拆分为宏量营养素配比。</p>
    <div>
      <h2>三大宏量营养素</h2>
      <ul>
        <li><strong>蛋白质（4 cal/g）：</strong>构建和修复肌肉。建议每公斤体重 1.6-2.2g。</li>
        <li><strong>碳水化合物（4 cal/g）：</strong>主要能量来源，对高强度运动至关重要。</li>
        <li><strong>脂肪（9 cal/g）：</strong>参与激素合成、维生素吸收和饱腹感调节。热量占比不要低于 20%。</li>
      </ul>
    </div>
    <div>
      <h2>按目标推荐的配比</h2>
      <ul>
        <li><strong>减脂：</strong>较高蛋白质（40/30/30），在热量缺口下保留肌肉</li>
        <li><strong>维持：</strong>均衡配比（30/40/30）</li>
        <li><strong>增肌：</strong>较高碳水（35/45/20），为训练提供能量</li>
      </ul>
    </div>
    <div>
      <h2>计算公式</h2>
      <>
        <p>每种宏量营养素的克数，由其热量占比除以每克所含热量得出：</p>
        <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
          克数 = (每日热量 × 宏量营养素 %) ÷ 每克热量
        </p>
        <p>以 2,000 卡的维持目标为例（30% 蛋白质 / 40% 碳水 / 30% 脂肪）：</p>
        <ul>
          <li><strong>蛋白质：</strong>2000 × 0.30 ÷ 4 = 150 g</li>
          <li><strong>碳水：</strong>2000 × 0.40 ÷ 4 = 200 g</li>
          <li><strong>脂肪：</strong>2000 × 0.30 ÷ 9 = 67 g</li>
        </ul>
        <p>上方的饼图按热量显示了同样的配比——脂肪看起来更少，是因为每克脂肪所含热量是蛋白质或碳水的两倍多。</p>
      </>
    </div>
    <div>
      <h2>蛋白质是最重要的宏量营养素</h2>
      <p>对大多数人来说，达到蛋白质目标比精确的碳水/脂肪配比更重要。充足的蛋白质能在减脂期间保留肌肉、支持肌肉增长，并增加饱腹感。建议每公斤体重摄入 1.6-2.2g。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Los <strong>macros</strong> (macronutrientes) son los tres nutrientes que aportan calorías: proteína, carbohidratos y grasa. Esta calculadora divide tu objetivo diario de calorías en un desglose de macros según tu meta.</p>
    <div>
      <h2>Los tres macros</h2>
      <ul>
        <li><strong>Proteína (4 cal/g):</strong> Construye y repara músculo. Apunta a 1,6-2,2g por kg de peso corporal.</li>
        <li><strong>Carbohidratos (4 cal/g):</strong> Fuente principal de energía. Críticos para el ejercicio de alta intensidad.</li>
        <li><strong>Grasa (9 cal/g):</strong> Hormonas, absorción de vitaminas, saciedad. No bajes del 20% de las calorías.</li>
      </ul>
    </div>
    <div>
      <h2>Distribuciones recomendadas según tu meta</h2>
      <ul>
        <li><strong>Perder peso:</strong> Más proteína (40/30/30) para conservar músculo en un déficit</li>
        <li><strong>Mantener:</strong> Equilibrado (30/40/30)</li>
        <li><strong>Ganar músculo:</strong> Más carbohidratos (35/45/20) como combustible para el entrenamiento</li>
      </ul>
    </div>
    <div>
      <h2>La fórmula</h2>
      <>
        <p>Los gramos de cada macro provienen de su porción de calorías dividida por sus calorías por gramo:</p>
        <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
          Gramos = (Calorías diarias × % del macro) ÷ Cal por gramo
        </p>
        <p>Para un objetivo de mantenimiento de 2,000 calorías (30% proteína / 40% carbohidratos / 30% grasa):</p>
        <ul>
          <li><strong>Proteína:</strong> 2000 × 0.30 ÷ 4 = 150 g</li>
          <li><strong>Carbohidratos:</strong> 2000 × 0.40 ÷ 4 = 200 g</li>
          <li><strong>Grasa:</strong> 2000 × 0.30 ÷ 9 = 67 g</li>
        </ul>
        <p>El gráfico circular de arriba muestra la misma distribución por calorías — la grasa parece menor porque cada gramo aporta más del doble de calorías que la proteína o los carbohidratos.</p>
      </>
    </div>
    <div>
      <h2>La proteína es el macro más importante</h2>
      <p>Para la mayoría de las personas, alcanzar tu objetivo de proteína importa más que la distribución exacta de carbohidratos y grasa. Una proteína adecuada conserva el músculo durante la pérdida de peso, favorece la ganancia muscular y aumenta la saciedad. Apunta a 1,6-2,2g por kg de peso corporal.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Tool?</h2>
    <p><strong>Makros</strong> (Makronährstoffe) sind die drei kalorienliefernden Nährstoffe: Protein, Kohlenhydrate und Fett. Dieser Rechner teilt dein tägliches Kalorienziel basierend auf deinem Ziel in eine Makro-Aufteilung auf.</p>
    <div>
      <h2>Die drei Makros</h2>
      <ul>
        <li><strong>Protein (4 cal/g):</strong> Baut und repariert Muskeln. Strebe 1,6-2,2g pro kg Körpergewicht an.</li>
        <li><strong>Kohlenhydrate (4 cal/g):</strong> Hauptenergiequelle. Entscheidend für hochintensives Training.</li>
        <li><strong>Fett (9 cal/g):</strong> Hormone, Vitaminaufnahme, Sättigung. Nicht unter 20% der Kalorien gehen.</li>
      </ul>
    </div>
    <div>
      <h2>Empfohlene Aufteilungen nach Ziel</h2>
      <ul>
        <li><strong>Abnehmen:</strong> Mehr Protein (40/30/30), um Muskeln im Defizit zu erhalten</li>
        <li><strong>Halten:</strong> Ausgeglichen (30/40/30)</li>
        <li><strong>Muskeln aufbauen:</strong> Mehr Kohlenhydrate (35/45/20) als Trainingskraftstoff</li>
      </ul>
    </div>
    <div>
      <h2>Die Formel</h2>
      <>
        <p>Die Gramm jedes Makros ergeben sich aus seinem Kalorienanteil geteilt durch seine Kalorien pro Gramm:</p>
        <p style={{ fontFamily: 'monospace', background: 'rgb(var(--bg-subtle))', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.95rem' }}>
          Gramm = (Tägliche Kalorien × Makro %) ÷ Kal pro Gramm
        </p>
        <p>Für ein 2,000-Kalorien-Halt-Ziel (30% Protein / 40% Kohlenhydrate / 30% Fett):</p>
        <ul>
          <li><strong>Protein:</strong> 2000 × 0.30 ÷ 4 = 150 g</li>
          <li><strong>Kohlenhydrate:</strong> 2000 × 0.40 ÷ 4 = 200 g</li>
          <li><strong>Fett:</strong> 2000 × 0.30 ÷ 9 = 67 g</li>
        </ul>
        <p>Das Tortendiagramm oben zeigt dieselbe Aufteilung nach Kalorien — Fett wirkt kleiner, da jedes Gramm mehr als doppelt so viele Kalorien liefert wie Protein oder Kohlenhydrate.</p>
      </>
    </div>
    <div>
      <h2>Protein ist das wichtigste Makro</h2>
      <p>Für die meisten Menschen ist es wichtiger, dein Proteinziel zu erreichen, als die genaue Kohlenhydrat-/Fettaufteilung. Ausreichend Protein erhält beim Abnehmen die Muskeln, unterstützt den Muskelaufbau und erhöht die Sättigung. Strebe 1,6-2,2g pro kg Körpergewicht an.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function MacroCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
