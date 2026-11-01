'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BaseConverter 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Digits past 9</h2>
    <p>Bases above ten need extra digit symbols: a=10, b=11 … z=35. Base 36 therefore spells 0-9 then a-z, which is why it appears in URL shorteners and auto-generated IDs where case-insensitive compactness matters.</p>
    <h2>Fractions behave differently</h2>
    <p>Decimal 0.1 has no exact binary form — binary fractions repeat forever, like 1/3 does in decimal. The converter shows up to ten fractional digits, which is plenty for inspection but not bit-exact storage math.</p>
    <h2>Where each base shows up</h2>
    <p>Binary underlies everything, octal survives in file permissions, decimal is for humans, hex is the programmer default (colors, memory, hashes), base32 labels data centers and backup codes, base36 packs IDs into URLs.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dígitos más allá del 9</h2>
    <p>Las bases superiores a diez necesitan símbolos extra: a=10, b=11 … z=35. Por eso la base 36 se escribe 0-9 y luego a-z, y por eso aparece en acortadores de URLs e IDs autogenerados donde importa la compacidad sin distinguir mayúsculas.</p>
    <h2>Las fracciones se comportan distinto</h2>
    <p>El 0,1 decimal no tiene forma binaria exacta — las fracciones binarias se repiten infinito, como el 1/3 en decimal. El conversor muestra hasta diez dígitos fraccionarios: de sobra para inspeccionar, pero no es aritmética de almacenamiento exacta al bit.</p>
    <h2>Dónde aparece cada base</h2>
    <p>El binario está debajo de todo; el octal sobrevive en los permisos de archivos; el decimal es para humanos; el hexadecimal es el default del programador (colores, memoria, hashes); base32 etiqueta centros de datos y códigos de respaldo; base36 mete IDs en URLs.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ziffern jenseits der 9</h2>
    <p>Basen über zehn brauchen zusätzliche Ziffernsymbole: a=10, b=11 … z=35. Basis 36 besteht daher aus 0-9 gefolgt von a-z — deshalb taucht sie in URL-Shortnern und automatisch erzeugten IDs auf, wo es auf kompakte Schreibweise ohne Groß-/Kleinschreibung ankommt.</p>
    <h2>Brüche verhalten sich anders</h2>
    <p>Dezimal 0,1 hat keine exakte binäre Darstellung — Binärbrüche wiederholen sich endlos, wie 1/3 im Dezimalsystem. Der Konverter zeigt bis zu zehn Nachkommastellen; zum Prüfen reicht das locker, für bitgenaue Speicherarithmetik nicht.</p>
    <h2>Wo welche Basis auftaucht</h2>
    <p>Binär liegt allem zugrunde, Oktal überlebt in Dateirechten, Dezimal ist für Menschen, Hex ist die Programmierer-Default (Farben, Speicher, Hashes), Base32 beschriftet Rechenzentren und Backup-Codes, Base36 packt IDs in URLs.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function BaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
