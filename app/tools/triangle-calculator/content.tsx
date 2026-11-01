'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This calculator solves <strong>right triangles</strong> using the Pythagorean theorem. Given the two legs (a and b), it finds the hypotenuse (c), the area, and the perimeter.</p>
    <div>
      <h2>The Pythagorean Theorem</h2>
      <p>For any right triangle, <code>a² + b² = c²</code>, where a and b are the legs and c is the hypotenuse (the side opposite the right angle). This is one of the oldest and most useful results in mathematics, proven over 400 different ways.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li><strong>Construction:</strong> Square corners — measure 3 ft one way, 4 ft the other, diagonal should be 5 ft</li>
        <li><strong>Navigation:</strong> Straight-line distance between two GPS points</li>
        <li><strong>TV sizes:</strong> A 65-inch TV is measured diagonally</li>
        <li><strong>Ladders:</strong> How high a ladder reaches when leaned at an angle</li>
      </ul>
    </div>
    <div>
      <h2>The 3-4-5 Triangle</h2>
      <p>The simplest Pythagorean triple is 3-4-5: 3² + 4² = 9 + 16 = 25 = 5². Carpenters use it constantly — measure 3 units along one wall, 4 along the other, and adjust until the diagonal is exactly 5. Then the corner is perfectly square.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta calculadora resuelve <strong>triángulos rectángulos</strong> usando el teorema de Pitágoras. Dados los dos catetos (a y b), obtiene la hipotenusa (c), el área y el perímetro.</p>
    <div>
      <h2>El teorema de Pitágoras</h2>
      <p>Para cualquier triángulo rectángulo, <code>a² + b² = c²</code>, donde a y b son los catetos y c es la hipotenusa (el lado opuesto al ángulo recto). Es uno de los resultados más antiguos y útiles de las matemáticas, demostrado de más de 400 formas distintas.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li><strong>Construcción:</strong> Esquinas a escuadra — mide 3 ft en una dirección, 4 ft en la otra, la diagonal debe ser 5 ft</li>
        <li><strong>Navegación:</strong> Distancia en línea recta entre dos puntos GPS</li>
        <li><strong>Tamaños de TV:</strong> Un televisor de 65 pulgadas se mide en diagonal</li>
        <li><strong>Escaleras:</strong> A qué altura llega una escalera apoyada en ángulo</li>
      </ul>
    </div>
    <div>
      <h2>El triángulo 3-4-5</h2>
      <p>La terna pitagórica más sencilla es 3-4-5: 3² + 4² = 9 + 16 = 25 = 5². Los carpinteros la usan a diario — mide 3 unidades a lo largo de una pared, 4 a lo largo de la otra y ajusta hasta que la diagonal sea exactamente 5. Entonces la esquina es perfectamente recta.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieser Rechner löst <strong>rechtwinklige Dreiecke</strong> mit dem Satz des Pythagoras. Aus den beiden Katheten (a und b) ermittelt er die Hypotenuse (c), die Fläche und den Umfang.</p>
    <div>
      <h2>Der Satz des Pythagoras</h2>
      <p>Für jedes rechtwinklige Dreieck gilt <code>a² + b² = c²</code>, wobei a und b die Katheten sind und c die Hypotenuse (die dem rechten Winkel gegenüberliegende Seite). Es ist eines der ältesten und nützlichsten Ergebnisse der Mathematik, auf über 400 verschiedene Arten bewiesen.</p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>Bauwesen:</strong> Rechte Winkel — miss 3 ft in die eine, 4 ft in die andere Richtung, die Diagonale muss 5 ft sein</li>
        <li><strong>Navigation:</strong> Luftlinie zwischen zwei GPS-Punkten</li>
        <li><strong>Fernsehergrößen:</strong> Ein 65-Zoll-Fernseher wird diagonal gemessen</li>
        <li><strong>Leitern:</strong> Wie hoch eine Leiter im Winkel reicht</li>
      </ul>
    </div>
    <div>
      <h2>Das 3-4-5-Dreieck</h2>
      <p>Das einfachste pythagoreische Zahlentripel ist 3-4-5: 3² + 4² = 9 + 16 = 25 = 5². Zimmerer nutzen es ständig — miss 3 Einheiten an der einen Wand entlang, 4 an der anderen und passe an, bis die Diagonale genau 5 ist. Dann ist die Ecke exakt rechtwinklig.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TriangleCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
