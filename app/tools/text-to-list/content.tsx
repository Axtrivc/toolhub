'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool converts lines of text into a bulleted list, adding a bullet point (•) to the start of each non-empty line. Perfect for turning brain-dumped notes into a structured list.</p>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Formatting brain-dumped notes</li>
        <li>Creating outlines from raw ideas</li>
        <li>Preparing shopping or task lists</li>
        <li>Formatting data for slides and documents</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具会把多行文本转换为项目列表,在每个非空行开头添加项目符号(•)。非常适合把随手记录的笔记整理成结构化清单。</p>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>整理随手记录的笔记</li>
        <li>把零散想法整理成大纲</li>
        <li>准备购物或待办清单</li>
        <li>为幻灯片和文档格式化数据</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta convierte líneas de texto en una lista de viñetas, añadiendo una viñeta (•) al inicio de cada línea no vacía. Perfecto para transformar notas rápidas en una lista estructurada.</p>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Dar formato a notas rápidas</li>
        <li>Crear esquemas a partir de ideas en bruto</li>
        <li>Preparar listas de compra o de tareas</li>
        <li>Formatear datos para diapositivas y documentos</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug wandelt Textzeilen in eine Aufzählungsliste um und setzt vor jede nicht leere Zeile einen Aufzählungspunkt (•). Ideal, um schnell notierte Ideen in eine strukturierte Liste zu verwandeln.</p>
    <div>
      <h2>Häufige Anwendungsfälle</h2>
      <ul>
        <li>Schnell notierte Ideen formatieren</li>
        <li>Aus rohen Ideen Gliederungen erstellen</li>
        <li>Einkaufs- oder Aufgabenlisten vorbereiten</li>
        <li>Daten für Folien und Dokumente formatieren</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TextToListContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
