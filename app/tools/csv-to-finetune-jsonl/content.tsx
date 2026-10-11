'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CsvToFinetuneJsonl 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The fine-tuning format</h2>
    <p>Each training example is one JSON line containing a messages array — the same chat structure as the API. This converter maps your CSV columns onto system/user/assistant roles and emits valid .jsonl directly.</p>
    <h2>Column mapping</h2>
    <p>Name the columns in the three fields above; a system column is optional and omitted from rows where the cell is empty. The header row is consumed, not exported.</p>
    <h2>Validation before you pay</h2>
    <p>Rows with empty assistant cells are flagged with their line number instead of silently dropped — training on empty completions quietly ruins runs. Quotes and embedded commas follow RFC 4180.</p>
    <h2>Sizing expectations</h2>
    <p>Hundreds of examples teach style; thousands teach behavior. Before fine-tuning at all, try few-shot prompting — many "needs fine-tuning" tasks are actually prompt-engineering tasks.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>微调格式是什么样的</h2>
    <p>每条训练样本是一行 JSON,包含一个 messages 数组——与 API 的 chat 结构完全一致。本转换器把你的 CSV 列映射到 system/user/assistant 角色,直接输出合法的 .jsonl。</p>
    <h2>列映射</h2>
    <p>在上方三个输入框里填列名;system 列可选,单元格为空的行会省略该字段。表头行只用于解析,不会导出。</p>
    <h2>花钱之前先校验</h2>
    <p>assistant 为空的行会连同行号一起被标记出来,而不是被静默丢弃——拿空 completion 去微调会悄悄毁掉整个训练。引号与内嵌逗号按 RFC 4180 处理。</p>
    <h2>样本数量的预期</h2>
    <p>几百条样本教风格,几千条教行为。真要微调之前,先试试 few-shot 提示——很多「需要微调」的任务其实是提示工程任务。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El formato de fine-tuning</h2>
    <p>Cada ejemplo de entrenamiento es una línea JSON con un array messages — la misma estructura de chat que la API. Este conversor mapea tus columnas CSV a los roles system/user/assistant y emite .jsonl válido directamente.</p>
    <h2>Mapeo de columnas</h2>
    <p>Indica los nombres de las columnas en los tres campos de arriba; la columna system es opcional y se omite en las filas cuya celda está vacía. La fila de encabezado se consume, no se exporta.</p>
    <h2>Validación antes de pagar</h2>
    <p>Las filas con celdas assistant vacías se marcan con su número de línea en lugar de descartarse en silencio — entrenar con completaciones vacías arruina los runs sin avisar. Comillas y comas incrustadas siguen la RFC 4180.</p>
    <h2>Expectativas de tamaño</h2>
    <p>Cientos de ejemplos enseñan estilo; miles enseñan comportamiento. Antes de plantearte el fine-tuning, prueba el prompting few-shot — muchas tareas que «necesitan fine-tuning» son en realidad tareas de ingeniería de prompts.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Das Fine-Tuning-Format</h2>
    <p>Jedes Trainingsbeispiel ist eine JSON-Zeile mit einem messages-Array — exakt die Chat-Struktur der API. Dieser Konverter bildet deine CSV-Spalten auf die Rollen system/user/assistant ab und liefert direkt gültiges .jsonl.</p>
    <h2>Spaltenzuordnung</h2>
    <p>Trage die Spaltennamen in den drei Feldern oben ein; die system-Spalte ist optional und entfällt in Zeilen mit leerer Zelle. Die Kopfzeile wird nur zum Parsen genutzt, nicht exportiert.</p>
    <h2>Validierung, bevor du bezahlst</h2>
    <p>Zeilen mit leerer Assistant-Zelle werden mitsamt Zeilennummer markiert, statt still verworfen zu werden — Training auf leeren Completions ruiniert Runs im Verborgenen. Anführungszeichen und eingebettete Kommas folgen RFC 4180.</p>
    <h2>Mengenerwartungen</h2>
    <p>Hunderte Beispiele lehren Stil; Tausende lehren Verhalten. Bevor du überhaupt ein Fine-Tuning startest, probiere Few-Shot-Prompting — viele Aufgaben, die angeblich „Fine-Tuning brauchen“, sind in Wahrheit Prompt-Engineering-Aufgaben.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CsvToFinetuneJsonlContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
