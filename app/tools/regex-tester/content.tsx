'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Regex Tester 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中),DOM 级 SEO 安全。zh/es/de 在客户端 hydration
 * 后按 locale 切换。<code> 中的正则模式、标志位 (g/i/m/s/u) 与变量名保持不变。
 */

// ──────────────────────────── en (matches original rendering) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>regular expression</strong> (regex) is a compact pattern language for matching text &mdash;
      validating emails, extracting order numbers, splitting logs, or finding-and-replacing. The
      trouble is that a regex is nearly impossible to read until you see what it matches. This tester
      shows every match highlighted live, lists each capture group, and includes a syntax cheat sheet.
    </p>
    <div>
      <h2>The flags, explained</h2>
      <ul>
        <li>
          <code>g</code> &mdash; <strong>global</strong>: find every match, not just the first. Without it,
          only the first match is returned.
        </li>
        <li>
          <code>i</code> &mdash; <strong>case-insensitive</strong>: <code>[a-z]</code> also matches{' '}
          <code>[A-Z]</code>.
        </li>
        <li>
          <code>m</code> &mdash; <strong>multiline</strong>: <code>^</code> and <code>$</code> match the
          start and end of each line, not just the whole string.
        </li>
        <li>
          <code>s</code> &mdash; <strong>dotAll</strong>: <code>.</code> matches newlines too (normally it
          does not).
        </li>
        <li>
          <code>u</code> &mdash; <strong>unicode</strong>: treat the pattern as Unicode code points
          (important for emoji and non-Latin scripts).
        </li>
      </ul>
    </div>
    <div>
      <h2>Reading capture groups</h2>
      <p>
        Parentheses <code>(...)</code> create a <strong>capture group</strong> that remembers the
        portion it matched, accessible as <code>$1</code>, <code>$2</code>, etc. (left to right by
        opening paren). Named groups <code>(?&lt;name&gt;...)</code> are referenced by name. This
        tool lists every group for every match, which is the fastest way to debug a pattern like{' '}
        <code>{'/Order #(\\d+).*?\\$(\\d+[\\d.]*)/'}</code> and confirm it captured the order number
        and price correctly.
      </p>
    </div>
    <div>
      <h2>This engine is JavaScript flavor</h2>
      <p>
        The matches reflect the JavaScript (ECMAScript) RegExp engine running in your browser. It
        supports lookahead, named groups, and the <code>s</code>/<code>u</code> flags. It does{' '}
        <em>not</em> support lookbehind in older Safari (pre-16.4) or PCRE-only features like atomic
        groups and possessive quantifiers. If you test a pattern here it will behave identically in
        your JavaScript code.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>正则表达式</strong>(regex)是一种紧凑的模式语言,用于匹配文本——验证邮箱、提取订单号、拆分日志或查找替换。问题在于,在你看到它到底匹配了什么之前,正则几乎无法阅读。这个测试器实时高亮每个匹配项,列出每个捕获组,并附带语法速查表。
    </p>
    <div>
      <h2>标志位详解</h2>
      <ul>
        <li>
          <code>g</code> —— <strong>global</strong>(全局):查找每个匹配,而不仅仅是第一个。不带它时只返回第一个匹配。
        </li>
        <li>
          <code>i</code> —— <strong>case-insensitive</strong>(不区分大小写):<code>[a-z]</code> 也会匹配{' '}
          <code>[A-Z]</code>。
        </li>
        <li>
          <code>m</code> —— <strong>multiline</strong>(多行):<code>^</code> 和 <code>$</code> 匹配每一行的开头和结尾,而不仅仅是整个字符串。
        </li>
        <li>
          <code>s</code> —— <strong>dotAll</strong>:<code>.</code> 也匹配换行符(通常不匹配)。
        </li>
        <li>
          <code>u</code> —— <strong>unicode</strong>:将模式视为 Unicode 码点(对 emoji 和非拉丁文字很重要)。
        </li>
      </ul>
    </div>
    <div>
      <h2>读取捕获组</h2>
      <p>
        括号 <code>(...)</code> 会创建一个 <strong>捕获组</strong>(capture group),它记住所匹配的部分,可通过 <code>$1</code>、<code>$2</code> 等访问(按左括号从左到右编号)。命名组 <code>(?&lt;name&gt;...)</code> 通过名称引用。这个工具为每个匹配列出所有分组,这是调试类似{' '}
        <code>{'/Order #(\\d+).*?\\$(\\d+[\\d.]*)/'}</code>{' '}
        这样的模式、并确认它正确捕获了订单号和价格的最快方法。
      </p>
    </div>
    <div>
      <h2>此引擎为 JavaScript 风味</h2>
      <p>
        匹配结果反映的是在你浏览器中运行的 JavaScript(ECMAScript)RegExp 引擎。它支持先行断言(lookahead)、命名分组以及 <code>s</code>/<code>u</code> 标志。它不支持旧版 Safari(16.4 之前)中的后行断言(lookbehind),也不支持 PCRE 独有的特性,如原子分组和占有型量词。如果你在这里测试某个模式,它在你的 JavaScript 代码中行为会完全一致。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Una <strong>expresión regular</strong> (regex) es un lenguaje compacto de patrones para buscar texto —
      validar correos, extraer números de pedido, dividir registros o buscar y reemplazar. El problema
      es que una regex es casi imposible de leer hasta que ves qué coincide. Este probador resalta cada
      coincidencia en vivo, enumera cada grupo de captura e incluye una guía rápida de sintaxis.
    </p>
    <div>
      <h2>Las flags, explicadas</h2>
      <ul>
        <li>
          <code>g</code> — <strong>global</strong>: encuentra todas las coincidencias, no solo la primera. Sin ella,
          solo se devuelve la primera coincidencia.
        </li>
        <li>
          <code>i</code> — <strong>case-insensitive</strong> (sin distinguir mayúsculas): <code>[a-z]</code> también coincide con{' '}
          <code>[A-Z]</code>.
        </li>
        <li>
          <code>m</code> — <strong>multiline</strong>: <code>^</code> y <code>$</code> coinciden con el
          inicio y el final de cada línea, no solo de toda la cadena.
        </li>
        <li>
          <code>s</code> — <strong>dotAll</strong>: <code>.</code> también coincide con saltos de línea (normalmente no).
        </li>
        <li>
          <code>u</code> — <strong>unicode</strong>: trata el patrón como puntos de código Unicode
          (importante para emojis y escrituras no latinas).
        </li>
      </ul>
    </div>
    <div>
      <h2>Leer los grupos de captura</h2>
      <p>
        Los paréntesis <code>(...)</code> crean un <strong>grupo de captura</strong> (capture group) que recuerda la
        porción que coincidió, accesible como <code>$1</code>, <code>$2</code>, etc. (de izquierda a derecha por
        paréntesis de apertura). Los grupos con nombre <code>(?&lt;name&gt;...)</code> se referencian por nombre. Esta
        herramienta enumera cada grupo de cada coincidencia, la forma más rápida de depurar un patrón como{' '}
        <code>{'/Order #(\\d+).*?\\$(\\d+[\\d.]*)/'}</code> y confirmar que capturó el número de pedido
        y el precio correctamente.
      </p>
    </div>
    <div>
      <h2>Este motor tiene el sabor de JavaScript</h2>
      <p>
        Las coincidencias reflejan el motor JavaScript (ECMAScript) RegExp que se ejecuta en tu navegador. Admite
        inspección hacia adelante (lookahead), grupos con nombre y las flags <code>s</code>/<code>u</code>. No admite{' '}
        inspección hacia atrás (lookbehind) en Safari antiguo (anterior a 16.4) ni funciones exclusivas de PCRE como
        grupos atómicos y cuantificadores posesivos. Si pruebas un patrón aquí, se comportará de forma idéntica en tu
        código JavaScript.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>regulärer Ausdruck</strong> (regex) ist eine kompakte Mustersprache zum Durchsuchen von Text —
      E-Mails validieren, Bestellnummern extrahieren, Logs aufteilen oder suchen und ersetzen. Das Problem: Eine
      regex ist fast unmöglich zu lesen, bis man sieht, worauf sie passt. Dieser Tester hebt jeden Treffer live
      hervor, listet jede Capture-Group und enthält eine Syntax-Übersicht.
    </p>
    <div>
      <h2>Die Flags, erklärt</h2>
      <ul>
        <li>
          <code>g</code> — <strong>global</strong>: findet jeden Treffer, nicht nur den ersten. Ohne sie
          wird nur der erste Treffer zurückgegeben.
        </li>
        <li>
          <code>i</code> — <strong>case-insensitive</strong>: <code>[a-z]</code> passt auch auf{' '}
          <code>[A-Z]</code>.
        </li>
        <li>
          <code>m</code> — <strong>multiline</strong>: <code>^</code> und <code>$</code> passen auf den
          Anfang und das Ende jeder Zeile, nicht nur der ganzen Zeichenkette.
        </li>
        <li>
          <code>s</code> — <strong>dotAll</strong>: <code>.</code> passt auch auf Zeilenumbrüche (normalerweise nicht).
        </li>
        <li>
          <code>u</code> — <strong>unicode</strong>: behandelt das Muster als Unicode-Codepunkte
          (wichtig für Emojis und nicht-lateinische Schriften).
        </li>
      </ul>
    </div>
    <div>
      <h2>Capture-Groups lesen</h2>
      <p>
        Klammern <code>(...)</code> erzeugen eine <strong>Capture-Group</strong>, die sich den getroffenen
        Abschnitt merkt, zugänglich als <code>$1</code>, <code>$2</code> usw. (von links nach rechts nach
        öffnender Klammer). Benannte Gruppen <code>(?&lt;name&gt;...)</code> werden über den Namen referenziert. Dieses
        Tool listet jede Gruppe für jeden Treffer — der schnellste Weg, ein Muster wie{' '}
        <code>{'/Order #(\\d+).*?\\$(\\d+[\\d.]*)/'}</code> zu debuggen und zu bestätigen, dass es Bestellnummer
        und Preis korrekt erfasst hat.
      </p>
    </div>
    <div>
      <h2>Diese Engine spricht den JavaScript-Dialekt</h2>
      <p>
        Die Treffer spiegeln die JavaScript- (ECMAScript) RegExp-Engine wider, die in deinem Browser läuft. Sie
        unterstützt Lookahead, benannte Gruppen und die <code>s</code>/<code>u</code>-Flags. Sie unterstützt kein{' '}
        Lookbehind in älterem Safari (vor 16.4) und keine PCRE-exklusiven Features wie atomare Gruppen und
        possessive Quantoren. Wenn du ein Muster hier testest, verhält es sich in deinem JavaScript-Code identisch.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function RegexTesterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
