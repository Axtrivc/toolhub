'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool adds line numbers to each line of your text, formatted with right-aligned numbers and consistent spacing. Useful for code review, transcripts, and any text you need to reference by line.</p>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Code review &mdash; reference &quot;line 42 has a bug&quot;</li>
        <li>Transcripts and interview notes</li>
        <li>Log file analysis</li>
        <li>Document review and editing</li>
        <li>Educational materials and tutorials</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具会为文本的每一行添加行号,数字右对齐并保持一致的间距。适合用于代码审查、会议记录,以及任何需要按行引用的文本。</p>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>代码审查 —— 引用「第 42 行有 bug」</li>
        <li>会议记录和访谈笔记</li>
        <li>日志文件分析</li>
        <li>文档审阅与编辑</li>
        <li>教学材料与教程</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta añade números de línea a cada línea de tu texto, con números alineados a la derecha y un espaciado uniforme. Útil para revisión de código, transcripciones y cualquier texto que necesites referenciar por línea.</p>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Revisión de código — referencia «la línea 42 tiene un error»</li>
        <li>Transcripciones y notas de entrevistas</li>
        <li>Análisis de archivos de log</li>
        <li>Revisión y edición de documentos</li>
        <li>Materiales educativos y tutoriales</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug fügt jeder Textzeile Zeilennummern hinzu, rechtsbündig ausgerichtet und mit gleichmäßigem Abstand. Nützlich für Code-Reviews, Transkripte und jeden Text, den du zeilenweise referenzieren möchtest.</p>
    <div>
      <h2>Häufige Anwendungsfälle</h2>
      <ul>
        <li>Code-Review — Bezug wie „Zeile 42 hat einen Fehler“</li>
        <li>Transkripte und Interviewnotizen</li>
        <li>Analyse von Logdateien</li>
        <li>Dokumentprüfung und -bearbeitung</li>
        <li>Lernmaterialien und Tutorials</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AddLineNumbersContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
