'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool cleans up messy whitespace: trims leading and trailing spaces from each line, collapses multiple consecutive spaces into one, and removes empty lines. The result is neat, consistent text.</p>
    <div>
      <h2>What Gets Cleaned</h2>
      <ul>
        <li>Spaces at the start or end of each line — removed</li>
        <li>Multiple spaces in a row — collapsed to a single space</li>
        <li>Tabs mixed with spaces — normalized to single spaces</li>
        <li>Empty lines — removed entirely</li>
      </ul>
    </div>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li>Cleaning up text copied from websites or PDFs</li>
        <li>Formatting data before pasting into spreadsheets</li>
        <li>Preparing text for code (extra spaces break indentation)</li>
        <li>Normalizing user input in forms</li>
        <li>Tidying notes and drafts</li>
      </ul>
    </div>
    <div>
      <h2>Preserving Intentional Formatting</h2>
      <p>This tool removes <em>all</em> extra whitespace. If you have intentional indentation (like code or poetry), don&apos;t use it on that text — it will flatten everything.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具用于清理杂乱的空白:去除每行首尾的空格,将连续的多个空格合并为一个,并删除空行。最终得到整洁、统一的文本。</p>
    <div>
      <h2>哪些内容会被清理</h2>
      <ul>
        <li>每行开头或结尾的空格 —— 被去除</li>
        <li>连续的多个空格 —— 合并为单个空格</li>
        <li>制表符与空格混用 —— 统一为单个空格</li>
        <li>空行 —— 被完全删除</li>
      </ul>
    </div>
    <div>
      <h2>何时需要使用</h2>
      <ul>
        <li>清理从网站或 PDF 复制的文本</li>
        <li>粘贴到电子表格前先格式化数据</li>
        <li>为代码准备文本(多余的空格会破坏缩进)</li>
        <li>规范化表单中的用户输入</li>
        <li>整理笔记和草稿</li>
      </ul>
    </div>
    <div>
      <h2>保留有意的格式</h2>
      <p>本工具会删除<em>所有</em>多余的空白。如果你有刻意保留的缩进(如代码或诗歌),请不要对其使用 —— 它会把一切都铺平。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta limpia los espacios en blanco desordenados: recorta los espacios al principio y al final de cada línea, contrae varios espacios consecutivos en uno solo y elimina las líneas vacías. El resultado es un texto ordenado y uniforme.</p>
    <div>
      <h2>Qué se limpia</h2>
      <ul>
        <li>Los espacios al principio o al final de cada línea — eliminados</li>
        <li>Varios espacios seguidos — contraídos a un solo espacio</li>
        <li>Tabulaciones mezcladas con espacios — normalizadas a espacios simples</li>
        <li>Líneas vacías — eliminadas por completo</li>
      </ul>
    </div>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Limpiar texto copiado de sitios web o PDF</li>
        <li>Dar formato a los datos antes de pegarlos en hojas de cálculo</li>
        <li>Preparar texto para código (los espacios adicionales rompen la sangría)</li>
        <li>Normalizar la entrada del usuario en formularios</li>
        <li>Ordenar notas y borradores</li>
      </ul>
    </div>
    <div>
      <h2>Conservar el formato intencional</h2>
      <p>Esta herramienta elimina <em>todo</em> el espacio en blanco adicional. Si tienes sangría intencional (como código o poesía), no la uses en ese texto — lo aplanará todo.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug bereinigt unordentliche Leerzeichen: Es schneidet führende und nachfolgende Leerzeichen jeder Zeile ab, fasst mehrere aufeinanderfolgende Leerzeichen zu einem zusammen und entfernt leere Zeilen. Das Ergebnis ist sauberer, einheitlicher Text.</p>
    <div>
      <h2>Was bereinigt wird</h2>
      <ul>
        <li>Leerzeichen am Anfang oder Ende jeder Zeile — entfernt</li>
        <li>Mehrere Leerzeichen in Folge — zu einem einzigen zusammengefasst</li>
        <li>Tabulatoren gemischt mit Leerzeichen — zu einfachen Leerzeichen normalisiert</li>
        <li>Leere Zeilen — vollständig entfernt</li>
      </ul>
    </div>
    <div>
      <h2>Wann du es brauchst</h2>
      <ul>
        <li>Bereinigen von Text, der von Websites oder PDFs kopiert wurde</li>
        <li>Formatieren von Daten vor dem Einfügen in Tabellenkalkulationen</li>
        <li>Vorbereiten von Text für Code (zusätzliche Leerzeichen brechen die Einrückung)</li>
        <li>Normalisieren von Benutzereingaben in Formularen</li>
        <li>Aufräumen von Notizen und Entwürfen</li>
      </ul>
    </div>
    <div>
      <h2>Bewusste Formatierung beibehalten</h2>
      <p>Dieses Werkzeug entfernt <em>alle</em> zusätzlichen Leerzeichen. Wenn du bewusste Einrückungen hast (wie Code oder Poesie), benutze es nicht für diesen Text — es wird alles einebnen.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WhitespaceRemoverContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
