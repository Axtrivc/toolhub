'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * JsonRepair 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why LLMs break JSON</h2>
    <p>Models emit markdown fences around JSON, forget closing brackets when hitting token limits, or lapse into Python habits (single quotes, trailing commas). Repairs are heuristics: parsing successfully does not prove the original data was recovered. Review the repair log before using the result.</p>
    <h2>What gets repaired</h2>
    <p>Fence stripping, outer-text trimming, smart quotes, bare keys, single-quoted strings, trailing commas, undefined/NaN/Infinity literals, and truncation closure via a string-aware bracket stack.</p>
    <h2>A repair that preserves the value</h2>
    <p><code>{'{"message":"undefined",}'}</code> becomes <code>{'{"message":"undefined"}'}</code>: only the trailing comma is removed. Quoted words, punctuation and apostrophes remain data. Unquoted undefined, NaN and Infinity become null, never an invented zero. Truncated strings or arrays may lose information; verify against the source and a schema.</p>
    <h2>When it refuses</h2>
    <p>If the payload still fails to parse after all repairs, you get the parser error with position instead of a fabricated guess. Silent wrong answers are worse than loud failures — especially for data pipelines.</p>
    <h2>Pair with validation</h2>
    <p>After repairing, validate the shape: pipe the output through JSON Diff against an expected example, or generate a Zod schema from a known-good sample using our JSON to Zod converter.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>LLM 为什么会输出坏 JSON</h2>
    <p>模型会在 JSON 外面套 Markdown 围栏、撞上 token 上限时忘写闭合括号,或者顺手指望 Python 习惯(单引号、尾逗号)。修复采用启发式规则：解析成功不代表恢复了原始数据。使用结果前请检查修复日志。</p>
    <h2>哪些内容会被修复</h2>
    <p>剥离围栏、截去外围正文、智能引号、裸键、单引号字符串、尾逗号、undefined/NaN/Infinity 字面量,以及基于字符串感知括号栈的截断补全。</p>
    <p>例如 <code>{'{"message":"undefined",}'}</code> 仅删除尾逗号，字符串值不变。未加引号的 undefined、NaN 和 Infinity 转为 null，不会编造为零。截断内容可能丢失信息，请对照原始来源和 schema 校验。</p><h2>什么时候拒绝修复</h2>
    <p>如果负载在所有修复之后仍然解析失败,你会拿到带位置的解析器报错,而不是编造的结果。安静的错误答案比响亮的失败更糟——对数据管道尤其如此。</p>
    <h2>搭配校验使用</h2>
    <p>修复完成后请校验数据形状:把输出接到 JSON Diff 与预期示例比对,或用我们的 JSON to Zod 转换器从合格样本生成 Zod schema。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué los LLM rompen el JSON</h2>
    <p>Los modelos emiten vallas markdown alrededor del JSON, olvidan cerrar corchetes al chocar con el límite de tokens o recaen en hábitos de Python (comillas simples, comas finales). Las reparaciones son heurísticas: un JSON válido no demuestra que se hayan recuperado los datos originales. Revisa el registro antes de usar el resultado.</p>
    <h2>Qué se repara</h2>
    <p>Retirada de vallas, recorte de texto externo, comillas tipográficas, claves sin comillas, cadenas con comillas simples, comas finales, literales undefined/NaN/Infinity y cierre de salidas truncadas mediante una pila de corchetes consciente de las cadenas.</p>
    <p>Las palabras y la puntuación dentro de cadenas se conservan. Los literales undefined, NaN e Infinity sin comillas se convierten en null, no en cero. Verifica los datos truncados con la fuente y un esquema.</p><h2>Cuándo se niega</h2>
    <p>Si el payload sigue sin analizarse tras todas las reparaciones, obtienes el error del parser con su posición en lugar de una invención. Las respuestas erróneas silenciosas son peores que los fallos ruidosos — sobre todo en canalizaciones de datos.</p>
    <h2>Combínalo con validación</h2>
    <p>Tras reparar, valida la forma: pasa la salida por JSON Diff contra un ejemplo esperado, o genera un esquema Zod desde una muestra fiable con nuestro conversor JSON to Zod.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum LLMs JSON kaputtmachen</h2>
    <p>Modelle wickeln Markdown-Zäune um JSON, vergessen beim Token-Limit die schließenden Klammern oder verfallen in Python-Gewohnheiten (einfache Anführungszeichen, Endkommas). Die Reparaturen sind heuristisch: Gültiges JSON beweist nicht, dass die ursprünglichen Daten wiederhergestellt wurden. Prüfe das Protokoll vor der Verwendung.</p>
    <h2>Was repariert wird</h2>
    <p>Zaun-Entfernung, Trimmen von Außen-Text, typografische Anführungszeichen, nackte Keys, einfach zitierte Strings, Endkommas, undefined/NaN/Infinity-Literale und die Schließung abgeschnittener Ausgaben über einen string-bewussten Klammerstapel.</p>
    <p>Wörter und Satzzeichen in Zeichenketten bleiben erhalten. Unquotierte undefined-, NaN- und Infinity-Werte werden zu null statt zu einer erfundenen Nullzahl. Prüfe abgeschnittene Daten gegen Quelle und Schema.</p><h2>Wann es sich verweigert</h2>
    <p>Wenn der Payload nach allen Reparaturen immer noch nicht parst, bekommst du den Parser-Fehler mit Position statt einer erfundenen Antwort. Stille falsche Antworten sind schlimmer als laute Fehler — besonders in Datenpipelines.</p>
    <h2>Mit Validierung kombinieren</h2>
    <p>Validiere nach der Reparatur die Struktur: Leite die Ausgabe durch den JSON Diff gegen ein erwartetes Beispiel, oder erzeuge mit unserem JSON to Zod Konverter ein Zod-Schema aus einer sauberen Stichprobe.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function JsonRepairContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
