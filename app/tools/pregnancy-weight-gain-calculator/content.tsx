'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PregnancyWeightGainCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where the ranges come from</h2>
    <p>The 2009 IOM guidelines (now maintained by the National Academy of Medicine) tie recommended gain to pre-pregnancy BMI because both extremes carry risk: too little gain raises low-birth-weight odds, too much raises gestational diabetes, hypertension and cesarean rates. A normal-BMI mother carrying a singleton is guided toward 11.5-16 kg (25-35 lb) across the whole pregnancy.</p>
    <h2>The gain is not a straight line</h2>
    <p>Trimester one usually adds only 0.5-2 kg total — sometimes nothing, sometimes less with morning sickness. From about week 14 the rate becomes steady: roughly 0.42 kg per week at normal BMI, 0.51 underweight, 0.28 overweight, 0.22 obese. This calculator prorates that structure to your current week so "how much should I have gained by now" gets an honest range, not a single number.</p>
    <h2>Twins change the math</h2>
    <p>Twin pregnancies aim higher: 17-25 kg at normal BMI, 14-23 kg overweight, 11-19 kg obese, with steeper weekly rates from the second trimester. The IOM deliberately published no recommendation for underweight twin pregnancies — the data does not exist, and a tool that invents one is lying to you, so this one says so instead.</p>
    <h2>Week-over-week is the signal, not one weigh-in</h2>
    <p>Fluid, constipation and a full meal can each swing the scale by a kilo overnight. Providers watch the trend across visits and flag sudden jumps (possible fluid retention) or stalls. If your number sits outside the range, bring the trend to your next appointment — it is a starting question, never a verdict or a reason to restrict food on your own.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>推荐区间从哪里来</h2>
    <p>2009 年 IOM 指南(现由美国国家医学院维护)把增重建议与孕前 BMI 挂钩,因为两个极端都有风险:增重太少升高低出生体重概率,增重太多升高妊娠糖尿病、高血压和剖宫产率。正常 BMI 的单胎孕妇全程建议增重 11.5-16 kg(25-35 磅)。</p>
    <h2>增重不是一条直线</h2>
    <p>孕早期通常只增 0.5-2 kg——有人不增,孕吐严重的人甚至会掉秤。从约 14 周起进入稳定速率:正常 BMI 约每周 0.42 kg,偏瘦 0.51,超重 0.28,肥胖 0.22。本计算器把这个结构折算到你当前的孕周,让"到这周应该长多少"得到一个诚实的区间,而不是一个孤零零的数字。</p>
    <h2>双胎改变算法</h2>
    <p>双胎目标更高:正常 BMI 17-25 kg,超重 14-23 kg,肥胖 11-19 kg,孕中期起每周速率也更陡。IOM 刻意没有给偏瘦双胎发布建议——因为数据不存在;编造数字的工具是在骗你,所以本工具选择如实说明。</p>
    <h2>看趋势,不看单次称重</h2>
    <p>水肿、便秘和一顿饱饭都能让体重一夜波动一公斤。产检关注的是跨次的趋势,并警惕突然跳升(可能是水潴留)或停滞。如果你的数字落在区间外,把趋势图带去下次产检——那是开场问题,绝不是判决,更不是自行节食的理由。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>De dónde salen los rangos</h2>
    <p>Las guías IOM 2009 (hoy de la Academia Nacional de Medicina de EE. UU.) ligan el aumento recomendado al IMC previo al embarazo porque ambos extremos tienen riesgo: aumentar de menos eleva las probabilidades de bajo peso al nacer, y aumentar de más las de diabetes gestacional, hipertensión y cesárea. Con IMC normal y un solo bebé, la guía apunta a 11,5-16 kg en todo el embarazo.</p>
    <h2>El aumento no es una línea recta</h2>
    <p>El primer trimestre suele sumar solo 0,5-2 kg — a veces nada, a veces menos con las náuseas. Desde la semana 14 el ritmo se vuelve estable: unos 0,42 kg por semana con IMC normal, 0,51 con bajo peso, 0,28 con sobrepeso y 0,22 con obesidad. Esta calculadora prorratea esa estructura hasta tu semana actual, para que «cuánto debía haber subido ya» reciba un rango honesto, no un número suelto.</p>
    <h2>Los gemelos cambian la cuenta</h2>
    <p>Los embarazos gemelares apuntan más alto: 17-25 kg con IMC normal, 14-23 kg con sobrepeso, 11-19 kg con obesidad, y con ritmos semanales más pronunciados desde el segundo trimestre. La IOM no publicó recomendación para gemelos con bajo peso: los datos no existen, y una herramienta que invente la cifra te está mintiendo — esta prefiere decírtelo.</p>
    <h2>La señal es la tendencia, no un pesaje</h2>
    <p>Líquidos, estreñimiento o una comida copiosa mueven la báscula un kilo de la noche a la mañana. Los profesionales miran la tendencia entre visitas y vigilan saltos súbitos (posible retención) o estancamientos. Si tu número está fuera del rango, lleva la tendencia a la próxima consulta: es una pregunta inicial, jamás un veredicto ni motivo para restringir comida por tu cuenta.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Woher die Bereiche kommen</h2>
    <p>Die IOM-Leitlinien 2009 (heute von der National Academy of Medicine gepflegt) koppeln die empfohlene Zunahme an den Vor-Schwangerschafts-BMI, weil beide Extreme Risiken tragen: zu wenig Zunahme erhöht das Risiko für niedriges Geburtsgewicht, zu viel das für Schwangerschaftsdiabetes, Bluthochdruck und Kaiserschnitt. Bei normalem BMI und einem Kind sind 11,5-16 kg über die ganze Schwangerschaft das Ziel.</p>
    <h2>Die Zunahme ist keine Gerade</h2>
    <p>Das erste Trimester bringt meist nur 0,5-2 kg — manchmal nichts, mit Übelkeit manchmal weniger. Ab etwa Woche 14 wird das Tempo gleichmäßig: rund 0,42 kg pro Woche bei normalem BMI, 0,51 bei Untergewicht, 0,28 bei Übergewicht, 0,22 bei Adipositas. Der Rechner rechnet diese Struktur auf deine aktuelle Woche hoch, damit „wie viel bis jetzt" ein ehrlicher Bereich wird, keine einzelne Zahl.</p>
    <h2>Zwillinge rechnen anders</h2>
    <p>Zwillingsschwangerschaften zielen höher: 17-25 kg bei normalem BMI, 14-23 kg bei Übergewicht, 11-19 kg bei Adipositas, ab dem zweiten Trimester mit steilerem Wochentempo. Für Untergewicht mit Zwillingen hat die IOM bewusst keine Empfehlung veröffentlicht — die Daten existieren nicht, und ein Werkzeug, das Zahlen erfindet, lügt dich an; dieses sagt es lieber offen.</p>
    <h2>Der Trend ist das Signal, nicht eine Wiegelung</h2>
    <p>Wassereinlagerung, Verstopfung oder eine volle Mahlzeit bewegen die Waage über Nacht um ein Kilo. Das Behandlungsteam schaut auf den Trend über die Termine und achtet auf plötzliche Sprünge (mögliche Einlagerungen) oder Stagnation. Liegt dein Wert außerhalb des Bereichs, nimm den Trend zum nächsten Termin mit — eine Auftaktfrage, nie ein Urteil und nie ein Grund, eigenmächtig zu fasten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PregnancyWeightGainCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
