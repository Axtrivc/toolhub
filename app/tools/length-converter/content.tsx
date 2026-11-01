'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metric vs. Imperial Units</h2>
    <p>
      The world uses two main measurement systems for length. The <strong>metric system</strong>{' '}
      (millimeters, centimeters, meters, kilometers) is used by nearly every country and is based
      on powers of 10, making conversions simple. The <strong>imperial system</strong> (inches,
      feet, yards, miles) is used primarily in the United States and has more irregular
      relationships between units.
    </p>

    <h2>Common Conversion Factors</h2>
    <p>The most-used length conversions, with exact values:</p>
    <ul>
      <li><strong>1 inch</strong> = 2.54 centimeters (exact)</li>
      <li><strong>1 foot</strong> = 0.3048 meters (exact)</li>
      <li><strong>1 yard</strong> = 0.9144 meters (exact)</li>
      <li><strong>1 mile</strong> = 1.609344 kilometers (exact)</li>
      <li><strong>1 meter</strong> = 3.28084 feet</li>
      <li><strong>1 kilometer</strong> = 0.621371 miles</li>
    </ul>

    <h2>Quick Reference Table</h2>
    <p>Everyday conversions worth memorizing:</p>
    <ul>
      <li>5 km ≈ 3.1 miles (a common &quot;5K&quot; race distance)</li>
      <li>1.6 km ≈ 1 mile (use 1.6 when converting mentally)</li>
      <li>30 cm ≈ 12 inches (1 foot)</li>
      <li>1.8 meters ≈ 6 feet (typical doorway height)</li>
      <li>100 meters ≈ 328 feet (length of a football field)</li>
    </ul>

    <h2>When You&apos;ll Need Length Conversion</h2>
    <ul>
      <li>
        <strong>Travel.</strong> Speed limits in km/h vs. mph, hiking distances, luggage size
        limits.
      </li>
      <li>
        <strong>DIY and construction.</strong> Mixing metric building materials with imperial
        tools, or following international plans.
      </li>
      <li>
        <strong>Science and engineering.</strong> Almost all scientific work uses metric, but US
        manufacturing still uses imperial.
      </li>
      <li>
        <strong>Running and fitness.</strong> Race distances, treadmill speeds, track lengths.
      </li>
      <li>
        <strong>Buying furniture or fabric.</strong> Dimensions listed in different units than
        your measuring tape.
      </li>
    </ul>

    <h2>Why the US Still Uses Imperial</h2>
    <p>
      The US adopted the imperial system before metric became the global standard, and switching
      would be enormously expensive — every road sign, recipe, and manufacturing spec would need
      to change. The UK uses a hybrid: distances in miles, fuel in liters, beer in pints.
      Canada is officially metric but still uses imperial for many everyday measurements due to US
      cultural influence.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Sistema métrico frente a imperial</h2>
    <p>
      El mundo utiliza dos sistemas principales de medición de longitud. El <strong>sistema métrico</strong>{' '}
      (milímetros, centímetros, metros, kilómetros) lo usan casi todos los países y se basa en
      potencias de 10, lo que facilita las conversiones. El <strong>sistema imperial</strong> (pulgadas,
      pies, yardas, millas) se usa sobre todo en Estados Unidos y tiene relaciones más irregulares
      entre sus unidades.
    </p>

    <h2>Factores de conversión habituales</h2>
    <p>Las conversiones de longitud más usadas, con valores exactos:</p>
    <ul>
      <li><strong>1 pulgada</strong> = 2,54 centímetros (exacto)</li>
      <li><strong>1 pie</strong> = 0,3048 metros (exacto)</li>
      <li><strong>1 yarda</strong> = 0,9144 metros (exacto)</li>
      <li><strong>1 milla</strong> = 1,609344 kilómetros (exacto)</li>
      <li><strong>1 metro</strong> = 3,28084 pies</li>
      <li><strong>1 kilómetro</strong> = 0,621371 millas</li>
    </ul>

    <h2>Tabla de referencia rápida</h2>
    <p>Conversiones cotidianas que vale la pena memorizar:</p>
    <ul>
      <li>5 km ≈ 3,1 millas (distancia típica de una carrera «5K»)</li>
      <li>1,6 km ≈ 1 milla (usa 1,6 al convertir mentalmente)</li>
      <li>30 cm ≈ 12 pulgadas (1 pie)</li>
      <li>1,8 metros ≈ 6 pies (altura típica de una puerta)</li>
      <li>100 metros ≈ 328 pies (longitud de un campo de fútbol)</li>
    </ul>

    <h2>Cuándo necesitarás convertir longitudes</h2>
    <ul>
      <li>
        <strong>Viajes.</strong> Límites de velocidad en km/h frente a mph, distancias de senderismo,
        tamaños de equipaje.
      </li>
      <li>
        <strong>Bricolaje y construcción.</strong> Mezclar materiales métricos con herramientas
        imperiales o seguir planos internacionales.
      </li>
      <li>
        <strong>Ciencia e ingeniería.</strong> Casi todo el trabajo científico usa el sistema
        métrico, pero la fabricación estadounidense sigue usando el imperial.
      </li>
      <li>
        <strong>Running y fitness.</strong> Distancias de carrera, velocidades de cinta, longitudes
        de pista.
      </li>
      <li>
        <strong>Comprar muebles o telas.</strong> Dimensiones en unidades distintas a las de tu
        cinta métrica.
      </li>
    </ul>

    <h2>Por qué Estados Unidos sigue usando el sistema imperial</h2>
    <p>
      Estados Unidos adoptó el sistema imperial antes de que el métrico se convirtiera en el estándar
      mundial, y el cambio sería enormemente caro — cada señal de tráfico, receta y especificación de
      fabricación tendría que modificarse. El Reino Unido usa un sistema híbrido: distancias en millas,
      combustible en litros, cerveza en pintas. Canadá es oficialmente métrico, pero aún usa el imperial
      en muchas mediciones cotidianas debido a la influencia cultural estadounidense.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Metrische vs. imperiale Einheiten</h2>
    <p>
      Die Welt nutzt zwei Hauptmaßsysteme für Längen. Das <strong>metrische System</strong>{' '}
      (Millimeter, Zentimeter, Meter, Kilometer) wird in fast jedem Land verwendet und basiert auf
      Zehnerpotenzen, was Umrechnungen einfach macht. Das <strong>imperiale System</strong> (Zoll,
      Fuß, Yard, Meilen) wird vor allem in den USA verwendet und hat unregelmäßigere Beziehungen
      zwischen den Einheiten.
    </p>

    <h2>Häufige Umrechnungsfaktoren</h2>
    <p>Die meistgenutzten Längenumrechnungen, mit exakten Werten:</p>
    <ul>
      <li><strong>1 Zoll</strong> = 2,54 Zentimeter (exakt)</li>
      <li><strong>1 Fuß</strong> = 0,3048 Meter (exakt)</li>
      <li><strong>1 Yard</strong> = 0,9144 Meter (exakt)</li>
      <li><strong>1 Meile</strong> = 1,609344 Kilometer (exakt)</li>
      <li><strong>1 Meter</strong> = 3,28084 Fuß</li>
      <li><strong>1 Kilometer</strong> = 0,621371 Meilen</li>
    </ul>

    <h2>Schnellreferenztabelle</h2>
    <p>Alltagsumrechnungen, die es sich zu merken lohnt:</p>
    <ul>
      <li>5 km ≈ 3,1 Meilen (übliche Distanz eines „5K“-Laufs)</li>
      <li>1,6 km ≈ 1 Meile (verwende 1,6 beim Kopfrechnen)</li>
      <li>30 cm ≈ 12 Zoll (1 Fuß)</li>
      <li>1,8 Meter ≈ 6 Fuß (typische Türhöhe)</li>
      <li>100 Meter ≈ 328 Fuß (Länge eines Fußballfelds)</li>
    </ul>

    <h2>Wann du Längenumrechnung brauchst</h2>
    <ul>
      <li>
        <strong>Reisen.</strong> Tempolimits in km/h vs. mph, Wanderstrecken, Gepäckgrößen.
      </li>
      <li>
        <strong>Heimwerken und Bauen.</strong> Metrische Baustoffe mit imperialen Werkzeugen
        kombinieren oder internationalen Plänen folgen.
      </li>
      <li>
        <strong>Wissenschaft und Technik.</strong> Fast die gesamte Wissenschaft nutzt metrisch,
        aber die US-Fertigung verwendet noch imperial.
      </li>
      <li>
        <strong>Laufen und Fitness.</strong> Wettkampfdistanzen, Laufbandgeschwindigkeiten,
        Bahnlängen.
      </li>
      <li>
        <strong>Möbel oder Stoffe kaufen.</strong> Maße in anderen Einheiten als dein Maßband.
      </li>
    </ul>

    <h2>Warum die USA noch imperiale Einheiten nutzen</h2>
    <p>
      Die USA übernahmen das imperiale System, bevor metrisch zum weltweiten Standard wurde, und eine
      Umstellung wäre enorm teuer — jedes Verkehrsschild, jedes Rezept und jede Fertigungsspezifikation
      müsste geändert werden. Großbritannien nutzt eine Mischung: Strecken in Meilen, Kraftstoff in
      Litern, Bier in Pints. Kanada ist offiziell metrisch, verwendet aber aufgrund des US-Kultureinflusses
      bei vielen Alltagsmessungen noch imperiale Einheiten.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function LengthConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
