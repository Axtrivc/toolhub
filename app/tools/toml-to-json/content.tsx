'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TomlToJson 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TomlToJsonContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
