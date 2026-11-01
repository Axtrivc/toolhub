'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BodySurfaceAreaCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与 SSR 输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Nine wax bodies and a square root</h2>
    <p>DuBois and DuBois derived their 1916 formula by coating exactly nine subjects in wax molds — including one subject who was DuBois himself. Mosteller's 1987 rewrite, √(height × weight ÷ 3600), fits the same data in one line and landed within about 2% for typical adults, which is why it displaced the older formula at the bedside.</p>
    <h2>Why medicine normalizes by BSA</h2>
    <p>Chemotherapy doses are written in mg/m² because drug clearance scales better with surface area than with weight. Cardiac index divides heart output by BSA (normal 2.5-4.0 L/min/m²) so a 50 kg patient and a 100 kg patient can share reference ranges. Pediatric fluid rules and burn-area charts lean on the same idea.</p>
    <h2>The obesity caveat</h2>
    <p>Both formulas were built on lean-to-normal bodies and underestimate surface area at very high BMI. Oncology protocols commonly cap BSA at 2.2-2.5 m² to avoid overdosing — one of several reasons this page is for orientation, and dosing decisions belong to the treating team.</p>
    <h2>Which number to quote</h2>
    <p>Most institutions default to Mosteller; some older protocols and Japanese literature still specify DuBois. The calculator shows both plus their gap, so you can copy whichever your form actually asks for — and see that the choice rarely moves the needle by more than a few percent.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Nueve cuerpos de cera y una raíz cuadrada</h2>
    <p>DuBois y DuBois derivaron su fórmula de 1916 recubriendo de cera a exactamente nueve sujetos — uno de ellos el propio DuBois. La reescritura de Mosteller (1987), √(talla × peso ÷ 3600), ajusta los mismos datos en una sola línea y quedó a ~2 % en adultos típicos, por eso desplazó a la vieja fórmula a pie de cama.</p>
    <h2>Por qué la medicina normaliza por BSA</h2>
    <p>La quimioterapia se prescribe en mg/m² porque el aclaramiento del fármaco escala mejor con la superficie que con el peso. El índice cardíaco divide el gasto por el BSA (normal 2,5-4,0 L/min/m²) para que un paciente de 50 kg y uno de 100 compartan rangos de referencia. Las reglas pediátricas de líquidos y los diagramas de quemaduras usan la misma idea.</p>
    <h2>La letra pequeña de la obesidad</h2>
    <p>Ambas fórmulas se construyeron con cuerpos delgados o normales y subestiman el área en IMC muy altos. Los protocolos de oncología suelen truncar el BSA en 2,2-2,5 m² para no sobredosificar — una razón más para que esta página sirva de orientación y la decisión de dosis pertenezca al equipo tratante.</p>
    <h2>Qué cifra citar</h2>
    <p>La mayoría de las instituciones usan Mosteller por defecto; algunos protocolos antiguos y la literatura japonesa aún piden DuBois. La calculadora muestra ambos y su diferencia, para que copies el que tu formulario exija — y compruebes que la elección rara vez mueve la aguja más de unos puntos porcentuales.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Neun Wachskörper und eine Wurzel</h2>
    <p>DuBois und DuBois leiteten ihre Formel von 1916 ab, indem sie genau neun Probanden in Wachs abformten — einer davon war DuBois selbst. Mostellers Neufassung von 1987, √(Größe × Gewicht ÷ 3600), bildet dieselben Daten in einer Zeile ab und lag bei typischen Erwachsenen bei etwa 2 % — deshalb verdrängte sie die alte Formel vom Krankenbett.</p>
    <h2>Warum die Medizin nach BSA normiert</h2>
    <p>Chemotherapien werden in mg/m² verordnet, weil die Clearance besser mit der Körperoberfläche als mit dem Gewicht skaliert. Der Herzindex teilt das Herzminutenvolumen durch die BSA (normal 2,5-4,0 L/min/m²), damit 50-kg- und 100-kg-Patienten dieselben Referenzbereiche teilen. Pädiatrische Flüssigkeitsregeln und Brandwundendiagramme bauen auf derselben Idee auf.</p>
    <h2>Der Adipositas-Vorbehalt</h2>
    <p>Beide Formeln entstanden an schlanken bis normalen Körpern und unterschätzen die Fläche bei sehr hohem BMI. Onkologieprotokolle deckeln die BSA deshalb oft bei 2,2-2,5 m², um nicht zu überdosieren — ein weiterer Grund, warum diese Seite der Orientierung dient und Dosierentscheidungen beim Behandlungsteam bleiben.</p>
    <h2>Welche Zahl man nennt</h2>
    <p>Die meisten Kliniken nutzen standardmäßig Mosteller; manche alte Protokolle und die japanische Literatur verlangen weiterhin DuBois. Der Rechner zeigt beide plus Differenz — kopiere die Zahl, die dein Formular tatsächlich verlangt, und sieh, dass die Wahl selten mehr als ein paar Prozent bewegt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function BodySurfaceAreaCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
