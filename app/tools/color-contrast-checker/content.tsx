'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Color contrast is the single most common accessibility failure on the web. If your text does not
      stand out enough from its background, low-vision users, people in bright sunlight, and anyone on
      a dim screen will struggle to read it. The <strong>WCAG</strong> standard defines minimum
      contrast ratios; this checker computes the exact ratio for any two colors and tells you which
      levels you pass.
    </p>
    <div>
      <h2>The WCAG thresholds</h2>
      <ul>
        <li>
          <strong>AA (normal text)</strong> — at least <code>4.5:1</code>. This is the legal
          requirement in most accessibility laws.
        </li>
        <li>
          <strong>AA (large text)</strong> — at least <code>3:1</code>. Large means ≥18pt, or
          ≥14pt bold.
        </li>
        <li>
          <strong>AAA (normal text)</strong> — at least <code>7:1</code>. A stricter target for
          maximum readability.
        </li>
        <li>
          <strong>AAA (large text)</strong> — at least <code>4.5:1</code>.
        </li>
        <li>
          <strong>Non-text UI</strong> (icons, chart strokes, focus outlines) —{' '}
          <code>3:1</code> against adjacent colors.
        </li>
      </ul>
    </div>
    <div>
      <h2>How the ratio is computed</h2>
      <p>
        Each color is converted to a <strong>relative luminance</strong> value that weights red,
        green, and blue by how sensitive the human eye is to each. The contrast ratio is{' '}
        <code>(L1 + 0.05) ÷ (L2 + 0.05)</code>, where L1 is the lighter and L2 the darker luminance.
        The maximum possible ratio is 21:1 (pure black on pure white). The 0.05 offset accounts for
        ambient screen glare.
      </p>
    </div>
    <div>
      <h2>Fixing a failing pair</h2>
      <p>
        If a pair fails, darken the text or lighten the background — small luminance changes move the
        ratio a lot. Avoid relying on hue alone: red on green can &quot;look&quot; different but have
        a near-identical luminance (a problem for color-blind users). For large text, you have more
        freedom, but for body copy aim well above 4.5:1 so users on dim or dirty screens can still
        read comfortably.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El contraste de color es el fallo de accesibilidad más habitual en la web. Si tu texto no se distingue lo suficiente de su fondo, los usuarios con baja visión, las personas a plena luz del sol y cualquiera con una pantalla tenue tendrán dificultades para leerlo. El estándar <strong>WCAG</strong> define relaciones mínimas de contraste; este comprobador calcula la relación exacta para cualquier par de colores y te indica qué niveles superas.
    </p>
    <div>
      <h2>Los umbrales de WCAG</h2>
      <ul>
        <li>
          <strong>AA (texto normal)</strong> — al menos <code>4.5:1</code>. Es el requisito legal en la mayoría de las leyes de accesibilidad.
        </li>
        <li>
          <strong>AA (texto grande)</strong> — al menos <code>3:1</code>. Grande significa ≥18pt, o ≥14pt en negrita.
        </li>
        <li>
          <strong>AAA (texto normal)</strong> — al menos <code>7:1</code>. Un objetivo más estricto para máxima legibilidad.
        </li>
        <li>
          <strong>AAA (texto grande)</strong> — al menos <code>4.5:1</code>.
        </li>
        <li>
          <strong>UI no textual</strong> (iconos, trazos de gráficos, contornos de foco) —{' '}
          <code>3:1</code> frente a los colores adyacentes.
        </li>
      </ul>
    </div>
    <div>
      <h2>Cómo se calcula la relación</h2>
      <p>
        Cada color se convierte a un valor de <strong>luminancia relativa</strong> que pondera el rojo, el verde y el azul según la sensibilidad del ojo humano a cada uno. La relación de contraste es{' '}
        <code>(L1 + 0.05) ÷ (L2 + 0.05)</code>, donde L1 es la luminancia más clara y L2 la más oscura. La máxima relación posible es 21:1 (negro puro sobre blanco puro). El desplazamiento de 0,05 compensa el reflejo ambiental de la pantalla.
      </p>
    </div>
    <div>
      <h2>Cómo arreglar una combinación que falla</h2>
      <p>
        Si una combinación falla, oscurece el texto o aclara el fondo — pequeños cambios de luminancia mueven mucho la relación. Evita depender solo del tono: el rojo sobre verde puede «parecer» diferente pero tener una luminancia casi idéntica (un problema para usuarios con daltonismo). Para texto grande tienes más margen, pero en el cuerpo del texto apunta claramente por encima de 4,5:1 para que los usuarios con pantallas tenues o sucias puedan seguir leyendo con comodidad.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Farbkontrast ist das häufigste Barrierefreiheits-Problem im Web. Wenn dein Text sich nicht ausreichend vom Hintergrund abhebt, haben sehbehinderte Nutzer, Menschen im grellen Sonnenlicht und alle mit einem dunklen Bildschirm Mühe beim Lesen. Der <strong>WCAG</strong>-Standard legt minimale Kontrastverhältnisse fest; dieser Prüfer berechnet das genaue Verhältnis für zwei beliebige Farben und sagt dir, welche Stufen du bestehst.
    </p>
    <div>
      <h2>Die WCAG-Schwellenwerte</h2>
      <ul>
        <li>
          <strong>AA (Normaltext)</strong> — mindestens <code>4.5:1</code>. Das ist die gesetzliche Anforderung in den meisten Barrierefreiheits-Gesetzen.
        </li>
        <li>
          <strong>AA (großer Text)</strong> — mindestens <code>3:1</code>. Groß bedeutet ≥18pt bzw. ≥14pt fett.
        </li>
        <li>
          <strong>AAA (Normaltext)</strong> — mindestens <code>7:1</code>. Ein strengeres Ziel für maximale Lesbarkeit.
        </li>
        <li>
          <strong>AAA (großer Text)</strong> — mindestens <code>4.5:1</code>.
        </li>
        <li>
          <strong>Nicht-textliche UI</strong> (Icons, Diagrammlinien, Fokus-Rahmen) —{' '}
          <code>3:1</code> gegenüber angrenzenden Farben.
        </li>
      </ul>
    </div>
    <div>
      <h2>Wie das Verhältnis berechnet wird</h2>
      <p>
        Jede Farbe wird in einen Wert der <strong>relativen Leuchtdichte</strong> umgerechnet, der Rot, Grün und Blau entsprechend der Empfindlichkeit des menschlichen Auges gewichtet. Das Kontrastverhältnis ist{' '}
        <code>(L1 + 0.05) ÷ (L2 + 0.05)</code>, wobei L1 die hellere und L2 die dunklere Leuchtdichte ist. Das maximal mögliche Verhältnis ist 21:1 (reines Schwarz auf reinem Weiß). Der Offset von 0,05 berücksichtigt die Blendung durch Umgebungslicht.
      </p>
    </div>
    <div>
      <h2>Eine fehlschlagende Kombination reparieren</h2>
      <p>
        Wenn eine Kombination durchfällt, verdunkle den Text oder helle den Hintergrund auf — schon kleine Änderungen der Leuchtdichte verändern das Verhältnis stark. Verlasse dich nicht allein auf den Farbton: Rot auf Grün kann „anders“ wirken, aber eine fast identische Leuchtdichte haben (ein Problem für farbenblinde Nutzer). Bei großem Text hast du mehr Freiheit, beim Fließtext solltest du aber deutlich über 4,5:1 liegen, damit Nutzer auf dunklen oder verschmutzten Bildschirmen noch bequem lesen können.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ColorContrastContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
