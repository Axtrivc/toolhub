'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * RentBudgetCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where the 30% rule comes from</h2>
    <p>Housing policy has used the 30%-of-income threshold since the 1980s: spend more and you count as &quot;rent-burdened,&quot; with less left for everything else. On $6,000 a month gross, the cap is $1,800. It is a screening heuristic, not law — but breaking it should be a deliberate choice, not an accident.</p>
    <h2>The 50/30/20 cross-check</h2>
    <p>The 50/30/20 budget splits after-tax income into needs, wants, and savings at 50/30/20, with rent living inside the needs bucket. That bucket also holds groceries, commuting, insurance, and utilities — so a rent equal to the whole 50% leaves nothing for the rest. In practice, keeping rent near 25-30% of net income keeps the bucket realistic.</p>
    <h2>Gross versus net changes the answer</h2>
    <p>The 30% rule traditionally applies to gross income; 50/30/20 works on after-tax. The same $6,000 is a $1,800 cap on gross but only about $1,400 if you apply 30% to a 22%-tax net. The truth lives between those poles — the tool shows both so you can decide where.</p>
    <h2>What landlords actually check</h2>
    <p>Many landlords require gross annual income of 40× the monthly rent — mathematically the same 30% rule. Some accept 3× monthly income; competitive markets often demand more, and guarantors or extra deposits substitute for the ratio. Knowing your number before the showing saves everyone an application fee.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>De dónde viene la regla del 30%</h2>
    <p>La política de vivienda usa el umbral del 30% del ingreso desde los años 80: gastar más te cuenta como «sobrecargado de alquiler», con menos para todo lo demás. Con 6 000 $ brutos al mes, el tope es 1 800 $. Es un filtro heurístico, no ley — pero romperlo debería ser una elección deliberada, no un accidente.</p>
    <h2>El contraste del 50/30/20</h2>
    <p>El 50/30/20 reparte el ingreso neto en necesidades, caprichos y ahorro a 50/30/20, con el alquiler dentro del bloque de necesidades. Ese bloque también contiene comida, transporte, seguros y utilidades — un alquiler que consuma el 50% entero no deja nada para el resto. En la práctica, mantener el alquiler cerca del 25-30% neto mantiene el bloque realista.</p>
    <h2>Bruto o neto cambia la respuesta</h2>
    <p>La regla del 30% se aplica por tradición al bruto; el 50/30/20, al neto. Los mismos 6 000 $ son un tope de 1 800 $ en bruto pero solo ~1 400 $ si aplicas el 30% a un neto con 22% de impuestos. La verdad vive entre ambos polos — la herramienta muestra los dos para que elijas dónde.</p>
    <h2>Lo que los caseros comprueban</h2>
    <p>Muchos exigen un ingreso bruto anual de 40× la renta mensual — matemáticamente la misma regla del 30%. Otros aceptan 3× el alquiler mensual; los mercados competitivos piden más, y los avalistas o depósitos extra sustituyen la proporción. Saber tu cifra antes de la visita le ahorra a todos una tasa de solicitud.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Woher die 30%-Regel kommt</h2>
    <p>Die Wohnungspolitik nutzt die 30%-Schwelle seit den 80ern: Wer mehr ausgibt, gilt als „mietbelastet“ und hat für alles andere weniger übrig. Bei 6.000 $ Brutto im Monat liegt die Grenze bei 1.800 $. Es ist ein Faustfilter, kein Gesetz — aber ihn zu überschreiten sollte bewusste Entscheidung sein, kein Unfall.</p>
    <h2>Der 50/30/20-Gegencheck</h2>
    <p>Das 50/30/20 teilt das Nettoeinkommen in Bedarf, Wünsche und Sparen zu 50/30/20, die Miete wohnt im Bedarfsblock. Dort liegen auch Essen, Pendeln, Versicherungen und Nebenkosten — eine Miete in Höhe des ganzen 50% lässt für den Rest nichts übrig. Praktisch hält eine Miete nahe 25-30% des Netto den Block realistisch.</p>
    <h2>Brutto oder netto ändert die Antwort</h2>
    <p>Die 30%-Regel gilt traditionell vom Brutto, das 50/30/20 vom Netto. Dieselben 6.000 $ bedeuten eine Grenze von 1.800 $ brutto, aber nur rund 1.400 $, wenn du 30% auf ein Netto mit 22% Steuern ansetzt. Die Wahrheit liegt zwischen den Polen — das Tool zeigt beide, du entscheidest, wo du stehst.</p>
    <h2>Was Vermieter tatsächlich prüfen</h2>
    <p>Viele verlangen ein Bruttojahreseinkommen vom 40-fachen der Monatsmiete — mathematisch dieselbe 30%-Regel. Manche akzeptieren das 3-fache der Miete; umkämpfte Märkte verlangen mehr, und Bürgen oder Extra-Kaution ersetzen die Quote. Die eigene Zahl vor dem Besichtigungstermin zu kennen, spart allen eine Antragsgebühr.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function RentBudgetCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
