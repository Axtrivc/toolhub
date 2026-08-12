'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool extracts all email addresses from any text &mdash; paste a document, web page source, or list, and it pulls out every valid-looking email automatically.</p>
    <div>
      <h2>How It Works</h2>
      <p>The tool uses a regex pattern matching standard email format: <code>user@domain.tld</code>. Duplicates are removed, and results are listed one per line.</p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Pulling contact info from documents</li>
        <li>Cleaning up scattered contact lists</li>
        <li>Building email lists from existing materials (use responsibly)</li>
        <li>Verifying what emails exist in old files</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具可以从任意文本中提取所有邮箱地址。只需粘贴文档、网页源码或列表,它就会自动找出所有格式合法的 email。</p>
    <div>
      <h2>工作原理</h2>
      <p>工具使用正则表达式匹配标准邮箱格式:<code>user@domain.tld</code>。重复项会被去除,结果每行显示一个。</p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>从文档中提取联系信息</li>
        <li>整理零散的联系人列表</li>
        <li>从已有资料中构建 email 列表(请合法使用)</li>
        <li>核实旧文件中存在哪些邮箱</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta extrae todas las direcciones de correo electrónico de cualquier texto — pega un documento, el código fuente de una página web o una lista, y recupera automáticamente cada correo con formato válido.</p>
    <div>
      <h2>Cómo funciona</h2>
      <p>La herramienta utiliza un patrón regex que coincide con el formato estándar de correo: <code>user@domain.tld</code>. Se eliminan los duplicados y los resultados se listan uno por línea.</p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Extraer información de contacto de documentos</li>
        <li>Limpiar listas de contacto dispersas</li>
        <li>Crear listas de correo a partir de materiales existentes (úsalas de forma responsable)</li>
        <li>Verificar qué correos existen en archivos antiguos</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug extrahiert alle E-Mail-Adressen aus beliebigem Text — füge ein Dokument, den Quelltext einer Webseite oder eine Liste ein, und es findet automatisch jede gültig aussehende E-Mail-Adresse.</p>
    <div>
      <h2>So funktioniert’s</h2>
      <p>Das Werkzeug verwendet ein Regex-Muster, das dem Standard-E-Mail-Format entspricht: <code>user@domain.tld</code>. Duplikate werden entfernt, und die Ergebnisse werden zeilenweise aufgelistet.</p>
    </div>
    <div>
      <h2>Häufige Anwendungsfälle</h2>
      <ul>
        <li>Kontaktdaten aus Dokumenten extrahieren</li>
        <li>Verteilte Kontaktlisten bereinigen</li>
        <li>E-Mail-Listen aus vorhandenen Materialien erstellen (verantwortungsvoll nutzen)</li>
        <li>Prüfen, welche E-Mail-Adressen in alten Dateien enthalten sind</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function EmailExtractorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
