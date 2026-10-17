'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Rot13Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>天生自逆</h2>
    <p>ROT13 把每个字母沿 26 个字母的环旋转 13 位——恰好半圈。作用两次就转了 26 位,正好绕回原点:编码与解码是同一个操作、同一个按钮、同一段代码。这个性质正是它四处流行的原因——不存在"搞反方向"这种错误。</p>
    <h2>两千年前的点子,半功率运行</h2>
    <p>ROT13 就是把位移固定在 3 的凯撒密码推广到 13。任意位移 N 的凯撒移位同样手撕即破——总共 25 把钥匙,一分钟全试完——但 ROT13 固定的半圈位移是无需约定钥匙的特例。凯撒的战报移 3 位,Usenet 的剧透移 13 位;两者的威胁模型都是"瞟一眼的人",从来不是"想破解的人"。</p>
    <h2>数字与其他字母表怎么办</h2>
    <p>只有 26 个 ASCII 字母旋转;数字、标点、空格与带变音符的字符原样通过。可选的 ROT5 把数字旋转 5(0↔5、1↔6),出于同样的道理自逆——5+5=10,十个数字正好一圈。ROT13+ROT5 组合在解谜圈是常见惯例。a-z 之外的 Unicode 字母不旋转,所以西里尔或希腊字母文本保持原样。</p>
    <h2>正当用途与不正当用途</h2>
    <p>藏谜底与剧透、打乱试题答案、把段子的包袱糊一层让读者自选解码——都合理,因为目的是纱,不是锁。存密码、"加密" API 密钥、藏任何对手真想要的东西,不行:ROT13 的输出任何解码器几秒即破,包括这个页面本身。把它当礼貌栅栏用;保密真要紧的那一刻,请换真密码学。</p>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function Rot13ConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
