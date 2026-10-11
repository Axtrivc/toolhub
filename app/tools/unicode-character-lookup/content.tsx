'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * UnicodeCharacterLookup 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Unicode actually is</h2>
    <p>One catalog assigning a number (code point) to every character in every writing system — over 150,000 entries. Fonts decide appearance; Unicode decides identity. U+2014 is an em dash everywhere, however differently fonts draw it.</p>
    <h2>Copy-paste hazards</h2>
    <p>Homoglyphs (Cyrillic а vs Latin a) look identical but break passwords, domains, and code searches invisibly. When text "matches" but comparisons fail, paste both versions here and compare code points.</p>
    <h2>This curated set vs full catalogs</h2>
    <p>150k characters would be noise. These are the arrows, math operators, typographic quotes, currency marks, and box-drawing characters that searches actually target, each with its proper name and code point.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Unicode 到底是什么</h2>
    <p>它是一个统一的目录,为每种文字系统里的每个字符分配一个编号(码点)——条目超过 15 万。字形外观由字体决定,字符身份由 Unicode 决定。U+2014 在哪里都是破折号,无论字体把它画成什么样。</p>
    <h2>复制粘贴的隐患</h2>
    <p>同形字(西里尔字母 а 与拉丁字母 a)看起来一模一样,却会在密码、域名和代码搜索里无声地埋雷。当两段文本「看起来相同」、比较却失败时,把两个版本都粘贴进来对比码点。</p>
    <h2>这套精选集与完整字库</h2>
    <p>15 万个字符只会是噪音。这里收录的是搜索真正会查的东西:箭头、数学运算符、排版引号、货币符号和制表符,每一个都带正式名称和码点。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué es Unicode en realidad</h2>
    <p>Un solo catálogo que asigna un número (punto de código) a cada carácter de cada sistema de escritura — más de 150.000 entradas. La tipografía decide el aspecto; Unicode decide la identidad. U+2014 es un guion largo en todas partes, lo dibuje como lo dibuje cada fuente.</p>
    <h2>Peligros del copiar-pegar</h2>
    <p>Los homoglifos (la а cirílica frente a la a latina) se ven idénticos pero rompen contraseñas, dominios y búsquedas en código de forma invisible. Cuando un texto «coincide» pero las comparaciones fallan, pega ambas versiones aquí y compara puntos de código.</p>
    <h2>Este conjunto curado frente a los catálogos completos</h2>
    <p>150.000 caracteres serían puro ruido. Aquí están las flechas, los operadores matemáticos, las comillas tipográficas, los símbolos monetarios y los caracteres de dibujo de cajas que la gente busca de verdad, cada uno con su nombre oficial y su punto de código.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was Unicode wirklich ist</h2>
    <p>Ein einziger Katalog, der jedem Zeichen jedes Schriftsystems eine Nummer (Codepunkt) zuweist — über 150.000 Einträge. Die Schriftart entscheidet über das Aussehen, Unicode über die Identität. U+2014 ist überall ein Geviertstrich, egal wie unterschiedlich Fonts ihn zeichnen.</p>
    <h2>Gefahren beim Kopieren und Einfügen</h2>
    <p>Homoglyphen (kyrillisches а gegenüber lateinischem a) sehen identisch aus, brechen aber unbemerkt Passwörter, Domains und Codesuchen. Wenn Text „übereinstimmt“, Vergleiche aber fehlschlagen, füge beide Versionen hier ein und vergleiche die Codepunkte.</p>
    <h2>Dieses kuratierte Set gegenüber vollständigen Katalogen</h2>
    <p>150.000 Zeichen wären nur Rauschen. Hier findest du die Pfeile, Mathe-Operatoren, typografischen Anführungszeichen, Währungszeichen und Box-Drawing-Zeichen, nach denen tatsächlich gesucht wird — jedes mit seinem echten Namen und Codepunkt.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function UnicodeCharacterLookupContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
