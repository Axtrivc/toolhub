'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SecretSantaGenerator 长文正文 —— 三语 dispatcher
 *
 * en 分支与英文站渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What a fair draw actually requires</h2>
    <p>A Secret Santa draw is a derangement: a closed loop where everyone gives exactly one gift and receives exactly one, and nobody draws their own name. For four participants only 9 of the 24 possible permutations qualify; for a large group roughly 1 in e (about 36.8%) of all permutations works. This generator searches with crypto-shuffled backtracking, so it either finds a valid pairing or tells you the rules are impossible — it never quietly bends one.</p>
    <h2>Exclusions are what make it hard</h2>
    <p>Couples who shouldn't draw each other, teammates from last year's exchange, siblings — each pair you ban shrinks the solution space. Ban too many and no valid loop exists (the classic failure: three people with every pair excluded). That is a math fact, not a bug, and the tool reports it so you can loosen one rule instead of wondering why it keeps spinning.</p>
    <h2>Running the reveal without a spoiler</h2>
    <p>Pass one device around: each person picks their own name from the list, sees only their recipient, and copies the message to their notes. Nobody's match is displayed by default and the organizer never has to see anyone's pairing — which is the whole point, since an organizer who knows everything can still play favorites subconsciously.</p>
    <h2>House rules worth agreeing on first</h2>
    <p>Fix the budget before drawing (a range like $20-30 beats a single number for wish lists), set a deadline, and decide whether gag gifts are allowed. For remote groups, draw on a video call and let each person open the page on their own device — the results live in your browser only, nothing is sent anywhere.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué exige de verdad un sorteo justo</h2>
    <p>Un amigo invisible es una permutación sin puntos fijos: un circuito cerrado donde cada quien da exactamente un regalo y recibe exactamente uno, y nadie se saca a sí mismo. Con cuatro participantes solo 9 de las 24 permutaciones valen; en grupos grandes solo sirve aproximadamente 1 de cada e (un 36,8 %). Este generador busca con barajado criptográfico y backtracking: encuentra un emparejamiento válido o te dice que las reglas son imposibles — jamás dobla una en silencio.</p>
    <h2>Las exclusiones son lo difícil</h2>
    <p>Parejas que no deben emparejarse, compañeros del intercambio del año pasado, hermanos — cada par vetado encoge el espacio de soluciones. Veta demasiados y no existe circuito válido (el fallo clásico: tres personas con todas las parejas prohibidas). Es un hecho matemático, no un bug, y la herramienta lo informa para que sueltes una regla en vez de preguntarte por qué no termina.</p>
    <h2>Revelar sin espoilear</h2>
    <p>Pasa un solo dispositivo: cada persona elige su nombre en la lista, ve únicamente a su destinatario y copia el mensaje a sus notas. Por defecto no se muestra el emparejamiento de nadie y el organizador jamás necesita ver ninguna pareja — que es la gracia: un organizador que lo sabe todo, sesga sin querer.</p>
    <h2>Reglas de la casa que conviene pactar antes</h2>
    <p>Fija el presupuesto antes de sortear (para listas de deseos, un rango tipo 20-30 € va mejor que una cifra única), pon fecha límite y decide si se admiten regalos de broma. Para grupos remotos, sorteáis en videollamada y cada uno abre la página en su propio dispositivo — los resultados viven solo en tu navegador, nada se envía.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was eine faire Auslosung wirklich verlangt</h2>
    <p>Wichteln ist eine fixpunktfreie Permutation: ein geschlossener Kreis, in dem jeder genau ein Mal schenkt und genau ein Mal beschenkt wird, und niemand sich selbst zieht. Bei vier Teilnehmenden taugen nur 9 der 24 Permutationen; in großen Gruppen funktioniert ungefähr 1 von e (rund 36,8 %). Dieses Werkzeug sucht mit Krypto-Mischung und Backtracking — es findet entweder eine gültige Paarung oder meldet, dass die Regeln unmöglich sind; gebogen wird nie still.</p>
    <h2>Die Ausschlüsse machen es schwer</h2>
    <p>Paare, die sich nicht gegenseitig ziehen sollen, Kollegen vom Vorjahr, Geschwister — jedes verbotene Paar schrumpft den Lösungsraum. Zu viele verboten, und kein gültiger Kreis existiert (der Klassiker: drei Personen, alle Paare verboten). Das ist Mathematik, kein Bug — das Werkzeug meldet es, damit du eine Regel lockerst, statt dich zu fragen, warum es ewig dreht.</p>
    <h2>Aufdecken, ohne zu verraten</h2>
    <p>Gib ein Gerät herum: Jede Person wählt ihren Namen aus der Liste, sieht nur ihren Beschenkten und kopiert die Nachricht in ihre Notizen. Standardmäßig erscheint niemandes Paarung, und der Organisator muss nie eine sehen — genau der Sinn: Wer alles weiß, bevorzugt auch ungewollt.</p>
    <h2>Hausregeln, die man vorher klären sollte</h2>
    <p>Das Budget vor der Auslosung festlegen (für Wunschlisten schlägt eine Spanne wie 20-30 € eine Einzelzahl), eine Deadline setzen und ob Scherzgeschenke erlaubt sind. Für verteilte Teams: in einem Videocall losen und die Seite auf dem eigenen Gerät öffnen — die Ergebnisse leben nur im Browser, nichts wird gesendet.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SecretSantaGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
