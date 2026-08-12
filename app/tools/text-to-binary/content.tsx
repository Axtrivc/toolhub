'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool encodes text as binary — each character becomes 8 bits (1s and 0s). Useful for learning how computers represent text, or for low-level data inspection.</p>
    <div>
      <h2>ASCII Reference</h2>
      <ul>
        <li>A-Z: 65-90 (01000001-01011010)</li>
        <li>a-z: 97-122 (01100001-01111010)</li>
        <li>0-9: 48-57 (00110000-00111001)</li>
        <li>Space: 32 (00100000)</li>
      </ul>
    </div>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li>Computer science homework</li>
        <li>Understanding how text is stored</li>
        <li>Debugging low-level data formats</li>
        <li>Creating binary-themed art or messages</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具将文本编码为二进制 — 每个字符变为 8 位(1 和 0)。适合用来学习计算机如何表示文本,或用于底层数据检查。</p>
    <div>
      <h2>ASCII 参考表</h2>
      <ul>
        <li>A-Z:65-90 (01000001-01011010)</li>
        <li>a-z:97-122 (01100001-01111010)</li>
        <li>0-9:48-57 (00110000-00111001)</li>
        <li>空格:32 (00100000)</li>
      </ul>
    </div>
    <div>
      <h2>何时会用到它</h2>
      <ul>
        <li>计算机科学作业</li>
        <li>理解文本的存储方式</li>
        <li>调试底层数据格式</li>
        <li>创作二进制主题的艺术或留言</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta codifica texto como binario — cada carácter se convierte en 8 bits (unos y ceros). Útil para aprender cómo las computadoras representan texto o para la inspección de datos de bajo nivel.</p>
    <div>
      <h2>Referencia ASCII</h2>
      <ul>
        <li>A-Z: 65-90 (01000001-01011010)</li>
        <li>a-z: 97-122 (01100001-01111010)</li>
        <li>0-9: 48-57 (00110000-00111001)</li>
        <li>Espacio: 32 (00100000)</li>
      </ul>
    </div>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Tareas de informática</li>
        <li>Entender cómo se almacena el texto</li>
        <li>Depurar formatos de datos de bajo nivel</li>
        <li>Crear arte o mensajes con temática binaria</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug codiert Text als Binärdaten — jedes Zeichen wird zu 8 Bits (Einsen und Nullen). Nützlich, um zu lernen, wie Computer Text darstellen, oder für die Inspektion von Daten auf niedriger Ebene.</p>
    <div>
      <h2>ASCII-Referenz</h2>
      <ul>
        <li>A-Z: 65-90 (01000001-01011010)</li>
        <li>a-z: 97-122 (01100001-01111010)</li>
        <li>0-9: 48-57 (00110000-00111001)</li>
        <li>Leerzeichen: 32 (00100000)</li>
      </ul>
    </div>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li>Informatik-Hausaufgaben</li>
        <li>Verstehen, wie Text gespeichert wird</li>
        <li>Debuggen von Datenformaten auf niedriger Ebene</li>
        <li>Binärthemen-Kunst oder -Nachrichten erstellen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TextToBinaryContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
