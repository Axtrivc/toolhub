'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool reverses a URL slug back into a readable title. Hyphens and underscores become spaces; each word is capitalized.</p>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Importing old blog posts and recovering titles from URLs</li>
        <li>Cleaning up exported CMS data</li>
        <li>Generating human-readable names from machine-formatted strings</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具可将 URL slug 还原为可读的标题。连字符和下划线会变为空格,每个单词首字母大写。</p>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>导入旧博客文章时,从 URL 中恢复标题</li>
        <li>清理导出的 CMS 数据</li>
        <li>从机器格式的字符串生成可读名称</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta convierte un slug de URL de vuelta en un título legible. Los guiones y los guiones bajos se convierten en espacios; cada palabra se escribe con mayúscula inicial.</p>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Importar artículos antiguos del blog y recuperar títulos a partir de URLs</li>
        <li>Limpiar datos CMS exportados</li>
        <li>Generar nombres legibles para humanos a partir de cadenas con formato máquina</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug wandelt einen URL-Slug zurück in einen lesbaren Titel. Bindestriche und Unterstriche werden zu Leerzeichen; jedes Wort wird großgeschrieben.</p>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Alte Blogbeiträge importieren und Titel aus URLs zurückgewinnen</li>
        <li>Exportierte CMS-Daten bereinigen</li>
        <li>Menschenlesbare Namen aus maschinenformatierten Zeichenketten erzeugen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SlugToTitleContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
