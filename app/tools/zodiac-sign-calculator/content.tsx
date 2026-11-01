'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ZodiacSignCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dates, boundaries, and the cusp question</h2>
    <p>The twelve signs divide the solar year into 30° arcs of the Sun's apparent path. Aries opens the zodiac at the March equinox, which is why the dates run Mar 21-Apr 19 and so on — each boundary shifts by at most a day across years, so your birth year barely matters for the Sun sign. Born within a day of a changeover? You still belong to exactly one sign: the "cusp" is a pop-astrology framing, and this tool flags it while assigning one definite answer.</p>
    <h2>Element, modality, polarity — the grammar</h2>
    <p>Every sign belongs to one element (Fire initiates, Earth builds, Air connects, Water feels), one modality (Cardinal starts seasons, Fixed holds them, Mutable closes them), and a polarity that alternates through the wheel. The same structure repeats every four signs: Aries, Leo and Sagittarius are all Fire, but Cardinal, Fixed and Mutable respectively — the reason signs of one element still feel different.</p>
    <h2>What the calculator does not pretend to know</h2>
    <p>Sun sign is one placement of dozens; a full birth chart needs the exact time and place to place the Moon, Ascendant and planets. If someone promises personality from month and day alone, that is entertainment — fine as such. For the curious: your Venus sign (love style) and Mercury sign (thinking style) often explain more than the Sun does.</p>
    <h2>Astronomy's awkward footnote</h2>
    <p>Precession has shifted the constellations roughly one sign westward since Hellenistic astrology was codified, and the Sun also crosses Ophiuchus, which no newspaper horoscope acknowledges. None of this invalidates the symbolic tradition — it just means the zodiac is a cultural coordinate system, not a sky map. Use it accordingly.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Fechas, fronteras y la cuestión de la cúspide</h2>
    <p>Los doce signos reparten el año solar en arcos de 30° del recorrido aparente del Sol. Aries abre el zodiaco en el equinoccio de marzo, de ahí que las fechas vayan del 21 de marzo al 19 de abril y así sucesivamente — cada frontera se mueve como mucho un día entre años, así que tu año de nacimiento casi no importa para el signo solar. ¿Naciste a un día del cambio? Perteneces exactamente a un signo: la «cúspide» es un marco de la astrología popular, y esta herramienta la señala dando una respuesta única.</p>
    <h2>Elemento, modalidad, polaridad — la gramática</h2>
    <p>Cada signo pertenece a un elemento (Fuego inicia, Tierra construye, Aire conecta, Agua siente), a una modalidad (Cardinal abre las estaciones, Fijo las sostiene, Mutable las cierra) y a una polaridad que alterna por la rueda. La estructura se repite cada cuatro signos: Aries, Leo y Sagitario son Fuego, pero Cardinal, Fijo y Mutable respectivamente — la razón de que signos del mismo elemento se sientan distintos.</p>
    <h2>Lo que esta calculadora no finge saber</h2>
    <p>El signo solar es una colocación entre decenas; una carta natal completa exige hora y lugar exactos para situar Luna, Ascendente y planetas. Quien prometa personalidad solo con mes y día ofrece entretenimiento — y como tal está bien. Para curiosos: tu Venus (estilo amoroso) y tu Mercurio (estilo mental) suelen explicar más que el Sol.</p>
    <h2>La nota incómoda de la astronomía</h2>
    <p>La precesión ha desplazado las constelaciones aproximadamente un signo hacia el oeste desde que la astrología helenística se codificó, y el Sol también cruza Ofiuco, algo que ningún horóscopo de periódico reconoce. Nada de ello invalida la tradición simbólica: solo significa que el zodiaco es un sistema de coordenadas cultural, no un mapa del cielo. Úsalo en consecuencia.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Daten, Grenzen und die Cusp-Frage</h2>
    <p>Die zwölf Zeichen teilen das Sonnenjahr in 30°-Bögen der scheinbaren Sonnenbahn. Der Widder öffnet den Tierkreis zur März-Tagundnachtgleiche, daher laufen die Daten vom 21. März bis 19. April und so weiter — jede Grenze verschiebt sich höchstens um einen Tag, das Geburtsjahr spielt für das Sonnenzeichen also kaum eine Rolle. Innerhalb eines Tages um den Wechsel geboren? Du gehörst weiterhin exakt zu einem Zeichen: die „Cusp“ ist ein pop-astrologisches Rahmenkonzept; dieses Werkzeug weist darauf hin und gibt eine eindeutige Antwort.</p>
    <h2>Element, Modalität, Polarität — die Grammatik</h2>
    <p>Jedes Zeichen gehört zu einem Element (Feuer beginnt, Erde baut, Luft verbindet, Wasser fühlt), einer Modalität (Kardinal eröffnet die Jahreszeiten, Fix hält sie, Beweglich beschließt sie) und einer Polarität, die sich durch das Rad abwechselt. Die Struktur wiederholt sich alle vier Zeichen: Widder, Löwe und Schütze sind Feuer, aber Kardinal, Fix bzw. Beweglich — der Grund, warum Zeichen desselben Elements sich trotzdem verschieden anfühlen.</p>
    <h2>Was dieser Rechner nicht zu wissen vorgibt</h2>
    <p>Das Sonnenzeichen ist eine von vielen Positionen; ein vollständiges Geburtshoroskop braucht exakte Uhrzeit und Ort, um Mond, Aszendent und Planeten zu setzen. Wer aus Monat und Tag allein Persönlichkeit verspricht, bietet Unterhaltung — als solche völlig in Ordnung. Für Neugierige: Venuszeichen (Liebesstil) und Merkurzeichen (Denkstil) erklären oft mehr als die Sonne.</p>
    <h2>Die unbequeme Fußnote der Astronomie</h2>
    <p>Die Präzession hat die Sternbilder seit der Kodifizierung der hellenistischen Astrologie um rund ein Zeichen nach Westen verschoben, und die Sonne überquert auch den Schlangenträger — was kein Zeitungshoroskop erwähnt. Das entwertet die symbolische Tradition nicht; es bedeutet nur, dass der Tierkreis ein kulturelles Koordinatensystem ist, keine Himmelskarte. So sollte man ihn benutzen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ZodiacSignCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
