'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TomlToJson 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why TOML exists</h2>
    <p>Rust (Cargo), Python (pyproject), and many modern tools chose TOML for configs because it is diff-friendly and typed: strings are quoted, numbers are bare, dates are unambiguous — no YAML surprise-me typing.</p>
    <h2>What converts cleanly</h2>
    <p>Tables become objects, array tables become arrays of objects, dotted keys nest, integers (including hex/octal/binary and underscore separators) become JSON numbers, booleans map directly. Datetimes stay as ISO strings since JSON lacks a date type.</p>
    <h2>Deliberate limitations</h2>
    <p>Multi-line strings are rejected loudly with line numbers rather than silently mangled — a converter that guesses wrong on config files costs hours. Fix the syntax or collapse those values to a single line first.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>TOML 为什么存在</h2>
    <p>Rust (Cargo)、Python (pyproject) 和许多现代工具都选 TOML 做配置格式,因为它对 diff 友好且类型明确:字符串带引号、数字不带引号、日期无歧义——没有 YAML 那种"猜类型"的惊吓。</p>
    <h2>哪些内容能干净转换</h2>
    <p>表转成对象、数组表转成对象数组、点分键逐层嵌套、整数(含十六进制/八进制/二进制与下划线分隔符)转成 JSON 数字、布尔值直接映射。日期时间保留为 ISO 字符串,因为 JSON 没有日期类型。</p>
    <h2>有意为之的限制</h2>
    <p>多行字符串会带行号大声拒绝,而不是被悄悄改坏——在配置文件上猜错的转换器要让人搭上好几个小时。请先修正语法,或把这些值收成单行再转。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué existe TOML</h2>
    <p>Rust (Cargo), Python (pyproject) y muchas herramientas modernas eligieron TOML para sus configuraciones porque es diff-friendly y tipado: las cadenas van entre comillas, los números van desnudos, las fechas son inequívocas — nada del tipado adivinador de YAML.</p>
    <h2>Qué convierte limpiamente</h2>
    <p>Las tablas se vuelven objetos, los arrays de tablas se vuelven arrays de objetos, las claves con puntos se anidan, los enteros (incluidos hex/octal/binario y los separadores de guion bajo) se vuelven números JSON y los booleanos se mapean directo. Las fechas quedan como strings ISO porque JSON no tiene tipo fecha.</p>
    <h2>Limitaciones deliberadas</h2>
    <p>Las cadenas multilínea se rechazan ruidosamente con su número de línea en lugar de estropearse en silencio — un conversor que adivina mal sobre archivos de configuración cuesta horas. Corrige la sintaxis o colapsa esos valores a una sola línea antes de convertir.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum es TOML gibt</h2>
    <p>Rust (Cargo), Python (pyproject) und viele moderne Tools haben TOML für Konfigs gewählt, weil es diff-freundlich und typisiert ist: Strings in Anführungszeichen, nackte Zahlen, eindeutige Daten — kein YAML-Ratetyping.</p>
    <h2>Was sauber konvertiert wird</h2>
    <p>Tables werden zu Objekten, Array-Tables zu Arrays von Objekten, gepunktete Keys verschachteln sich, Integer (inkl. Hex/Oktal/Binär und Unterstrich-Trennern) werden zu JSON-Zahlen, Booleans werden direkt abgebildet. Datetimes bleiben ISO-Strings, denn JSON kennt keinen Datumstyp.</p>
    <h2>Bewusste Einschränkungen</h2>
    <p>Mehrzeilige Strings werden laut mit Zeilennummer abgelehnt, statt still verhunzt zu werden — ein Konverter, der bei Config-Dateien falsch rät, kostet Stunden. Korrigiere die Syntax oder fasse diese Werte vorher zu einer Zeile zusammen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TomlToJsonContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
