'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Line Diff Checker 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How it works</h2>
    <p>The comparison uses the longest-common-subsequence (LCS) algorithm — the same family of algorithms behind git diff. Lines present in both texts anchor the comparison; everything else is reported as an addition (+) or removal (−).</p>
    <h2>Limits</h2>
    <p>Each side supports up to roughly 100,000 characters and 2,000 lines, which keeps the comparison instant even on modest hardware.</p>
    <h2>Common uses</h2>
    <p>Reviewing contract edits, checking config file changes before commit, comparing log output between runs, or verifying that a cleanup script did not drop content.</p>
    <h2>Whitespace matters</h2>
    <p>Lines are compared exactly, including trailing spaces. Use the Text Cleaner tool first if invisible whitespace noise is drowning out real changes.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>工作原理</h2>
    <p>比对采用最长公共子序列(LCS)算法——与 git diff 背后是同一族算法。两份文本共有的行作为锚点,其余内容一律按新增(+)或删除(−)报告。</p>
    <h2>规模限制</h2>
    <p>每侧最多支持约 10 万字符、2000 行,这保证了即使在普通硬件上比对也能即时完成。</p>
    <h2>常见用途</h2>
    <p>审阅合同修改、提交前检查配置文件改动、对比两次运行的日志输出,或确认清理脚本没有误删内容。</p>
    <h2>空白字符有影响</h2>
    <p>行按原样精确比较,包括行尾空格。如果不可见的空白噪声淹没了真正的改动,请先用文本清理工具预处理。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo funciona</h2>
    <p>La comparación usa el algoritmo de subsecuencia común más larga (LCS), la misma familia que hay detrás de git diff. Las líneas presentes en ambos textos anclan la comparación; todo lo demás se reporta como adición (+) o eliminación (−).</p>
    <h2>Límites</h2>
    <p>Cada lado admite hasta unos 100 000 caracteres y 2000 líneas, lo que mantiene la comparación instantánea incluso en hardware modesto.</p>
    <h2>Usos habituales</h2>
    <p>Revisar ediciones de contratos, comprobar cambios en archivos de configuración antes del commit, comparar la salida de logs entre ejecuciones o verificar que un script de limpieza no borró contenido.</p>
    <h2>Los espacios en blanco cuentan</h2>
    <p>Las líneas se comparan de forma exacta, incluidos los espacios finales. Usa primero la herramienta de limpieza de texto si el ruido de espacios invisibles ahoga los cambios reales.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>So funktioniert es</h2>
    <p>Der Vergleich nutzt den Algorithmus der längsten gemeinsamen Teilfolge (LCS) — dieselbe Familie, die auch hinter git diff steckt. Zeilen, die in beiden Texten vorkommen, verankern den Vergleich; alles andere wird als Hinzufügen (+) oder Entfernen (−) gemeldet.</p>
    <h2>Grenzen</h2>
    <p>Jede Seite unterstützt rund 100 000 Zeichen und 2000 Zeilen — so bleibt der Vergleich selbst auf bescheidener Hardware sofort.</p>
    <h2>Typische Anwendungen</h2>
    <p>Vertragsänderungen prüfen, Config-Änderungen vor dem Commit kontrollieren, Log-Ausgaben zweier Läufe vergleichen oder sicherstellen, dass ein Bereinigungsskript nichts gelöscht hat.</p>
    <h2>Leerzeichen zählen</h2>
    <p>Zeilen werden exakt verglichen, einschließlich nachfolgender Leerzeichen. Nutze zuerst das Text-Cleaner-Tool, wenn unsichtbare Leerzeichen die echten Änderungen überdecken.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function LineDiffCheckerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
