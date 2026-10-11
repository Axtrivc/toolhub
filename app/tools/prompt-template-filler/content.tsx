'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PromptTemplateFiller 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Two placeholder styles</h2>
    <p>Double-brace placeholders follow the mustache convention and replace first; single-brace placeholders follow Python f-string style. Mixing both is supported and predictable — doubles resolve before singles.</p>
    <h2>Variables from JSON</h2>
    <p>Paste a JSON object as the variable source; non-string values (numbers, arrays, nested objects) are stringified automatically. Missing variables are flagged by name rather than left as silent placeholders.</p>
    <h2>Testing prompts before API spend</h2>
    <p>Iterating prompt wording through real API calls burns tokens on every typo. Filling locally first catches variable mismatches, wrong brace counts, and stray text instantly — the API only sees the final draft.</p>
    <h2>Beyond LLM prompts</h2>
    <p>The same engine works for email templates, SQL skeletons, commit message formats — anywhere variable placeholders appear.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>两种占位符写法</h2>
    <p>双花括号占位符遵循 mustache 惯例并先替换;单花括号占位符是 Python f-string 风格。两者混用也没问题、行为可预期——双花括号先于单花括号解析。</p>
    <h2>变量来自 JSON</h2>
    <p>变量源直接粘贴 JSON 对象;非字符串值(数字、数组、嵌套对象)会自动字符串化。缺失的变量会按名字标出来,而不是留成无声的占位符。</p>
    <h2>花 API 的钱之前先试提示词</h2>
    <p>靠真实 API 调用迭代提示词,每个笔误都在烧 token。先在本地填充,变量不匹配、花括号数量不对、杂散文本立刻现形——API 只看到定稿。</p>
    <h2>不止 LLM 提示词</h2>
    <p>同一套引擎也适用于邮件模板、SQL 骨架、提交信息格式——凡是变量占位符出现的地方都行。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dos estilos de marcador</h2>
    <p>Los marcadores de doble llave siguen la convención mustache y se sustituyen primero; los de llave simple siguen el estilo f-string de Python. Mezclarlos está soportado y es predecible — los dobles se resuelven antes que los simples.</p>
    <h2>Variables desde JSON</h2>
    <p>Pega un objeto JSON como fuente de variables; los valores que no son cadenas (números, arrays, objetos anidados) se convierten en cadena automáticamente. Las variables que faltan se señalan por nombre, no se quedan como marcadores silenciosos.</p>
    <h2>Probar los prompts antes de gastar en la API</h2>
    <p>Iterar la redacción del prompt con llamadas reales a la API quema tokens con cada errata. Rellenar primero en local destapa al instante variables que no cuadran, llaves de más o de menos y texto suelto — la API solo ve la versión final.</p>
    <h2>Más allá de los prompts de LLM</h2>
    <p>El mismo motor sirve para plantillas de correo, esqueletos SQL, formatos de mensaje de commit — en cualquier lugar donde aparezcan marcadores de variables.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Zwei Platzhalter-Stile</h2>
    <p>Doppelte geschweifte Klammern folgen der Mustache-Konvention und werden zuerst ersetzt; einfache geschweifte Klammern folgen dem f-string-Stil von Python. Mischen ist möglich und vorhersehbar — doppelte werden vor einfachen aufgelöst.</p>
    <h2>Variablen aus JSON</h2>
    <p>Füge ein JSON-Objekt als Variablenquelle ein; Werte, die keine Strings sind (Zahlen, Arrays, verschachtelte Objekte), werden automatisch zu Strings. Fehlende Variablen werden namentlich markiert, statt still als Platzhalter stehen zu bleiben.</p>
    <h2>Prompts testen, bevor die API Kosten verursacht</h2>
    <p>Prompt-Formulierungen über echte API-Aufrufe zu iterieren verbrennt bei jedem Tippfehler Tokens. Zuerst lokal ausfüllen findet Variablen-Versehen, falsche Klammernzahlen und streunenden Text sofort — die API sieht nur die Endfassung.</p>
    <h2>Mehr als LLM-Prompts</h2>
    <p>Dieselbe Maschine funktioniert für E-Mail-Vorlagen, SQL-Gerüste, Commit-Message-Formate — überall, wo Variablen-Platzhalter auftauchen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function PromptTemplateFillerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
