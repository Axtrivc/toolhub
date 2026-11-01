'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Rot13Converter 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Self-inverse by design</h2>
    <p>ROT13 rotates every letter 13 positions around the 26-letter alphabet — exactly halfway. Apply it twice and you have rotated 26 positions, which is a full lap back to the start: encoding and decoding are the same operation, the same button, the same code path. That property is why it spread everywhere; there is no "wrong direction" to get wrong.</p>
    <h2>A 2,000-year-old idea at half power</h2>
    <p>ROT13 is the Caesar cipher with the key nailed to shift 3... generalized to 13. Caesar-shift with any key N is equally breakable by hand — 25 possible keys, try them all in a minute — but ROT13's fixed halfway shift is the special case that needs no key agreement at all. Julius Caesar's reports shifted by 3; Usenet spoilers by 13; the threat model in both cases is "someone glancing", never "someone trying".</p>
    <h2>What it does to digits and alphabets</h2>
    <p>Only the 26 ASCII letters rotate; digits, punctuation, spaces and accented characters pass through untouched. The optional ROT5 rotates digits by 5 (0↔5, 1↔6) and is self-inverse for the same reason — 5+5=10, one full lap of the ten digits. Combined ROT13+ROT5 is a common convention in puzzle communities. Unicode letters beyond a-z do not rotate here, so a text in Cyrillic or Greek stays as-is.</p>
    <h2>Legitimate uses, and the ones that aren't</h2>
    <p>Hiding puzzle answers and spoilers, scrambling exam keys, obfuscating a joke's punchline so the reader opts in to decoding — all fair game, because the point is a veil, not a lock. Storing passwords, "encrypting" API keys or hiding anything an adversary actually wants is not: ROT13 output is broken by any decoder within seconds, including this very page. Treat it as a courtesy fence, and reach for real cryptography the moment secrecy matters.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Autoreversible por diseño</h2>
    <p>ROT13 rota cada letra 13 posiciones por el alfabeto de 26 — justo la mitad. Aplícalo dos veces y habrás rotado 26 posiciones: una vuelta completa al punto de partida. Codificar y decodificar son la misma operación, el mismo botón, la misma ruta de código. Esa propiedad explica que se extendiera por todas partes: no existe el «sentido equivocado».</p>
    <h2>Una idea de 2 000 años a media potencia</h2>
    <p>ROT13 es el cifrado César con el desplazamiento clavado en 3… generalizado a 13. El César con cualquier clave N se rompe igual a mano — 25 claves posibles, todas probadas en un minuto —, pero el desplazamiento fijo a mitad de camino es el caso especial que no exige acordar clave alguna. Los partes de Julio César giraban 3; los spoilers de Usenet, 13; en ambos casos el adversario previsto es «quien echa un vistazo», jamás «quien lo intenta».</p>
    <h2>Qué le pasa a los dígitos y a otros alfabetos</h2>
    <p>Solo rotan las 26 letras ASCII; dígitos, signos, espacios y caracteres acentuados pasan intactos. El ROT5 opcional rota los dígitos en 5 (0↔5, 1↔6) y es autoreversible por la misma razón: 5+5=10, la vuelta completa a los diez dígitos. La combinación ROT13+ROT5 es convención habitual en las comunidades de acertijos. Las letras Unicode fuera de a-z no rotan aquí, así que un texto en cirílico o griego queda tal cual.</p>
    <h2>Usos legítimos y los que no</h2>
    <p>Esconder soluciones y spoilers, revolver claves de examen, velar la gracia final de un chiste para que el lector decida decodificar — todo legítimo: el objetivo es un velo, no una cerradura. Guardar contraseñas, «cifrar» claves de API o esconder algo que un adversario de verdad quiera, no: la salida de ROT13 cae ante cualquier decodificador en segundos, incluida esta misma página. Úsalo como valla de cortesía; cuando el secreto importe de verdad, criptografía de verdad.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Von Haus aus selbstinvers</h2>
    <p>ROT13 dreht jeden Buchstaben 13 Positionen durch das 26-Buchstaben-Alphabet — exakt die Hälfte. Zweimal angewandt ergibt 26 Positionen: eine komplette Runde zurück zum Start. Kodieren und Dekodieren sind dieselbe Operation, derselbe Knopf, derselbe Codepfad. Genau diese Eigenschaft trieb die Verbreitung — es gibt keine „falsche Richtung“, die man falsch machen könnte.</p>
    <h2>Eine 2.000 Jahre alte Idee bei halber Leistung</h2>
    <p>ROT13 ist die Caesar-Verschlüsselung mit auf 3 genageltem Schlüssel … verallgemeinert auf 13. Caesar mit beliebigem Schlüssel N bricht genauso von Hand — 25 mögliche Schlüssel, in einer Minute durchprobiert —, doch die fest auf die halbe Runde gelegte Verschiebung ist der Sonderfall ganz ohne Schlüsselabrede. Julius Caesars Berichte rotierten um 3, Usenet-Spoiler um 13; das Bedrohungsmodell war in beiden Fällen „jemand, der draufschaut“, niemals „jemand, der es versucht“.</p>
    <h2>Was mit Ziffern und anderen Alphabeten passiert</h2>
    <p>Gedreht werden nur die 26 ASCII-Buchstaben; Ziffern, Satzzeichen, Leerzeichen und akzentuierte Zeichen kommen unangetastet durch. Das optionale ROT5 dreht Ziffern um 5 (0↔5, 1↔6) und ist aus demselben Grund selbstinvers: 5+5=10, einmal komplett um die zehn Ziffern. ROT13+ROT5 kombiniert ist in Rätsel-Communities gängige Konvention. Unicode-Buchstaben außerhalb von a-z rotieren hier nicht — ein Text in kyrillisch oder griechisch bleibt, wie er ist.</p>
    <h2>Legitime Nutzungen — und solche, die es nicht sind</h2>
    <p>Rätsellösungen und Spoiler verbergen, Prüfungsschlüssel verwürfeln, die Pointe eines Witzes verschleiern, damit der Leser das Dekodieren selbst wählt — alles legitim, denn gewollt ist ein Schleier, kein Schloss. Passwörter speichern, API-Schlüssel „verschlüsseln“ oder irgendwas verstecken, das ein Gegner wirklich will, hingegen nicht: ROT13-Ausgabe fällt jedem Dekoder in Sekunden zum Opfer, dieser Seite eingeschlossen. Nutze es als Höflichkeitszaun — und greife zu echter Kryptografie, sobald Geheimhaltung zählt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function Rot13ConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
