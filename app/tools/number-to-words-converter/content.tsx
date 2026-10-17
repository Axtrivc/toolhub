'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * NumberToWordsConverter 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How far the words go</h2>
    <p>This converter follows the short scale used in American English: thousand (10³), million (10⁶), billion (10⁹), trillion (10¹²). It reads values up to 999,999,999,999,999 — beyond that you need quadrillion, and the tool says so instead of guessing.</p>
    <h2>Hyphens, and the missing "and"</h2>
    <p>Compound numbers from twenty-one to ninety-nine take a hyphen, and American style omits "and": 123 is "one hundred twenty-three", not "one hundred and twenty-three". British usage inserts the "and" — both conventions are correct, but mixing them inside one document is not.</p>
    <h2>Where spelled-out numbers matter</h2>
    <p>Checks and legal documents require the amount in words because words are harder to alter than digits: "$1,250" can become "$11,250", but "one thousand two hundred fifty" cannot be casually edited. Ordinals handle positions and dates — the 42nd entry, the 21st of March.</p>
    <h2>Decimals, negatives, and precision</h2>
    <p>The decimal point is read as "point" with each digit named separately: 3.14159 becomes "three point one four one five nine". Negatives take "negative" in front (math convention) rather than "minus". Paste values with commas or currency symbols — the parser strips them before spelling.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>能拼到多大的数</h2>
    <p>本转换器采用美式英语的短级差制:thousand(10³)、million(10⁶)、billion(10⁹)、trillion(10¹²),最大拼到 999,999,999,999,999。再往上需要 quadrillion,工具会明确提示超范围,而不是硬编一个结果。</p>
    <h2>连字符与消失的 "and"</h2>
    <p>21 到 99 的合成数一律连字符(twenty-one);美式拼法不加 "and":123 是 "one hundred twenty-three",不是 "one hundred and twenty-three"。英式会插入 "and"——两种拼法都对,但同一份文档里混用就是错。</p>
    <h2>什么场合必须拼写成单词</h2>
    <p>支票和法律文书要求金额大写,因为单词比数字难篡改:"$1,250" 能改成 "$11,250","one thousand two hundred fifty" 却没法随手添一笔。序数负责位置和日期——第 42 条(the 42nd)、3 月 21 日(the 21st)。</p>
    <h2>小数、负数与粘贴精度</h2>
    <p>小数点读作 "point",其后逐位拼读:3.14159 是 "three point one four one five nine"。负数按数学惯例前置 "negative" 而非 "minus"。直接粘贴带逗号或货币符号的数值也行——解析器会在拼写前剥掉它们。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Hasta dónde llegan las palabras</h2>
    <p>Este conversor sigue la escala corta del inglés americano: thousand (10³), million (10⁶), billion (10⁹), trillion (10¹²). Lee valores hasta 999.999.999.999.999; más allá haría falta quadrillion, y la herramienta lo avisa en lugar de inventar.</p>
    <h2>Guiones y el "and" ausente</h2>
    <p>Los compuestos de twenty-one a ninety-nine llevan guion, y la variante americana omite el "and": 123 es "one hundred twenty-three", no "one hundred and twenty-three". La británica lo inserta — ambas convenciones son correctas; mezclarlas en un mismo documento, no.</p>
    <h2>Dónde importa escribir con palabras</h2>
    <p>Cheques y documentos legales exigen el importe en palabras porque son más difíciles de alterar que las cifras: «1.250 $» puede convertirse en «11.250 $», pero "one thousand two hundred fifty" no se edita al azar. Los ordinales cubren posiciones y fechas — la 42.ª entrada, el 21 de marzo.</p>
    <h2>Decimales, negativos y precisión al pegar</h2>
    <p>El punto decimal se lee "point" con cada dígito por separado: 3,14159 es "three point one four one five nine". Los negativos van con "negative" delante (convención matemática), no "minus". Pega valores con comas o símbolos de moneda: el analizador los limpia antes de escribir.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie weit die Wörter reichen</h2>
    <p>Dieser Konverter folgt der amerikanischen Kurzskala: thousand (10³), million (10⁶), billion (10⁹), trillion (10¹²). Er liest Werte bis 999.999.999.999.999 — darüber bräuchte es quadrillion, und das Werkzeug meldet das, statt etwas zu erfinden.</p>
    <h2>Bindestriche und das fehlende „and"</h2>
    <p>Zusammengesetzte Zahlen von twenty-one bis ninety-nine bekommen einen Bindestrich, und die amerikanische Schreibweise lässt das „and" weg: 123 heißt "one hundred twenty-three", nicht "one hundred and twenty-three". Die britische fügt es ein — beide Konventionen sind korrekt, ihre Vermischung im selben Dokument nicht.</p>
    <h2>Wo ausgeschriebene Zahlen zählen</h2>
    <p>Schecks und Verträge verlangen den Betrag in Worten, weil Worte schwerer fälschbar sind als Ziffern: Aus „$1.250" wird schnell „$11.250", aus "one thousand two hundred fifty" nichts. Ordinalzahlen tragen Positionen und Daten — der 42. Eintrag, der 21. März.</p>
    <h2>Dezimalen, Negative und Einfügegenauigkeit</h2>
    <p>Das Dezimalkomma heißt "point", die folgenden Ziffern einzeln: 3,14159 ist "three point one four one five nine". Negative bekommen ein "negative" davor (Mathematik-Konvention), kein "minus". Werte mit Tausenderpunkten oder Währungssymbolen einfügen geht auch — der Parser räumt das vor dem Ausschreiben weg.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function NumberToWordsConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
