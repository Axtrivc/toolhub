'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SRT Subtitle Shift 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      An <strong>SRT subtitle shifter</strong> that moves every cue in a subtitle file forward or backward by a
      fixed number of seconds — the classic fix for subtitles that are out of sync with the video. Paste your SRT
      text or upload a <code>.srt</code> file, set an offset like <code>-2.5</code>, and download the corrected
      file. It also cleans up formatting tags and renumbers cues. Everything runs 100% in your browser.
    </p>

    <div>
      <h2>How the shift works</h2>
      <p>
        Each cue&apos;s timestamps (<code>HH:MM:SS,mmm --&gt; HH:MM:SS,mmm</code>) are converted to integer
        milliseconds, the offset is added, and the result is formatted back with zero-padding — no floating-point
        drift, no rounding surprises. Positive offsets delay subtitles (use when text appears too early);
        negative values like <code>-1.75</code> make them appear sooner. When a shift pushes a cue below zero,
        the <strong>clamp</strong> option pins it to <code>00:00:00,000</code> instead of writing an invalid
        negative timestamp, and the tool tells you how many cues were clamped.
      </p>
    </div>

    <div>
      <h2>Tolerant parsing, safe renumbering</h2>
      <p>
        Real-world SRT files are messy: Windows <code>CRLF</code> line endings, missing or duplicated index
        numbers, stray blank lines. The parser handles all of that — cue indexes are optional and any block
        without a valid timestamp line is skipped and reported as a parse error, never silently mangled. Turn on{' '}
        <strong>Renumber cues</strong> (default) to write clean sequential indexes, which some strict players
        require.
      </p>
    </div>

    <div>
      <h2>Stripping formatting and music symbols</h2>
      <p>
        Subtitle files often carry styling your player can&apos;t use: <code>&lt;i&gt;</code>,{' '}
        <code>&lt;b&gt;</code>, and <code>&lt;font&gt;</code> HTML tags, ASS override blocks like{' '}
        <code>{'{\\an8}'}</code>, and ♪ markers around music cues. The <strong>strip formatting</strong> option
        removes all of them and tidies leftover whitespace, giving you a clean plain-text track. A tip: shift
        first, verify sync with one or two lines of dialogue, then download — shifting the whole file beats
        editing cue by cue.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      一个 <strong>SRT 字幕平移器</strong>，把字幕文件中的每条字幕（cue）按固定的秒数向前或向后移动——这是修复字幕与视频不同步的经典办法。粘贴你的 SRT 文本，或上传一个 <code>.srt</code> 文件，设置一个偏移量（例如 <code>-2.5</code>），然后下载修正后的文件。它还能清理格式标签并重新编号字幕。所有处理 100% 在浏览器中完成。
    </p>

    <div>
      <h2>平移是如何工作的</h2>
      <p>
        每条字幕的时间戳（<code>HH:MM:SS,mmm --&gt; HH:MM:SS,mmm</code>）会被换算成整数毫秒，加上偏移量后再用零填充格式化回去——没有浮点漂移，没有舍入意外。正偏移会让字幕延后（文字出现太早时使用）；像 <code>-1.75</code> 这样的负值会让字幕提前。当平移把某条字幕推到零以下时，<strong>clamp</strong> 选项会把它钉在 <code>00:00:00,000</code>，而不是写出无效的负时间戳，并且工具会告诉你有多少条字幕被 clamp。
      </p>
    </div>

    <div>
      <h2>宽容的解析，安全的重新编号</h2>
      <p>
        真实的 SRT 文件很乱：Windows <code>CRLF</code> 行尾、缺失或重复的索引号、零散的空行。解析器会把这些都处理好——字幕索引是可选的，任何没有有效时间戳行的块都会被跳过并报告为解析错误，绝不会悄无声息地被破坏。开启 <strong>重新编号字幕</strong>（默认），即可写出干净的连续索引，一些严格的播放器需要它。
      </p>
    </div>

    <div>
      <h2>剥离格式与音乐符号</h2>
      <p>
        字幕文件常常带有播放器用不了的样式：<code>&lt;i&gt;</code>、<code>&lt;b&gt;</code> 和 <code>&lt;font&gt;</code> HTML 标签，ASS 覆盖块（如 <code>{'{\\an8}'}</code>），以及音乐字幕周围的 ♪ 标记。<strong>剥离格式</strong> 选项会把这些全部移除，并清理残留的空白，给你一条干净的纯文本轨道。小提示：先平移，用一两句对白核对同步，再下载——整文件平移比逐条字幕编辑高效得多。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>desplazador de subtítulos SRT</strong> que mueve cada bloque del archivo de subtítulos hacia delante o hacia atrás un número fijo de segundos — la solución clásica para los subtítulos desincronizados con el vídeo. Pega tu texto SRT o sube un archivo <code>.srt</code>, define un desplazamiento como <code>-2.5</code> y descarga el archivo corregido. También limpia las etiquetas de formato y renumera los bloques. Todo se ejecuta 100 % en tu navegador.
    </p>

    <div>
      <h2>Cómo funciona el desplazamiento</h2>
      <p>
        Las marcas de tiempo de cada bloque (<code>HH:MM:SS,mmm --&gt; HH:MM:SS,mmm</code>) se convierten a milisegundos enteros, se suma el desplazamiento y el resultado se formatea de nuevo con relleno de ceros — sin deriva de coma flotante, sin sorpresas de redondeo. Los desplazamientos positivos retrasan los subtítulos (úsalos cuando el texto aparece demasiado pronto); valores negativos como <code>-1.75</code> hacen que aparezcan antes. Cuando un desplazamiento empuja un bloque por debajo de cero, la opción <strong>clamp</strong> lo fija en <code>00:00:00,000</code> en vez de escribir una marca de tiempo negativa inválida, y la herramienta te dice cuántos bloques se limitaron.
      </p>
    </div>

    <div>
      <h2>Análisis tolerante, renumeración segura</h2>
      <p>
        Los archivos SRT reales son desordenados: finales de línea <code>CRLF</code> de Windows, números de índice ausentes o duplicados, líneas en blanco sueltas. El analizador gestiona todo eso — los índices de bloque son opcionales y cualquier bloque sin una línea de marca de tiempo válida se omite y se reporta como error de análisis, nunca se altera silenciosamente. Activa <strong>Renumerar bloques</strong> (por defecto) para escribir índices secuenciales limpios, que algunos reproductores estrictos exigen.
      </p>
    </div>

    <div>
      <h2>Eliminar formato y símbolos musicales</h2>
      <p>
        Los archivos de subtítulos suelen llevar estilos que tu reproductor no puede usar: etiquetas HTML <code>&lt;i&gt;</code>, <code>&lt;b&gt;</code> y <code>&lt;font&gt;</code>, bloques de anulación ASS como <code>{'{\\an8}'}</code>, y marcas ♪ alrededor de los bloques musicales. La opción <strong>eliminar formato</strong> quita todo eso y ordena los espacios en blanco sobrantes, dándote una pista de texto plano limpia. Un consejo: desplaza primero, verifica la sincronización con una o dos líneas de diálogo y luego descarga — desplazar el archivo entero mejora a editar bloque a bloque.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>SRT-Untertitel-Verschieber</strong>, der jeden Cue einer Untertiteldatei um eine feste Anzahl Sekunden vor oder zurück bewegt — der klassische Fix für Untertitel, die nicht synchron zum Video sind. Füge deinen SRT-Text ein oder lade eine <code>.srt</code>-Datei hoch, setze einen Offset wie <code>-2.5</code> und lade die korrigierte Datei herunter. Er räumt auch Formatierungs-Tags auf und nummeriert die Cues neu. Alles läuft zu 100 % in deinem Browser.
    </p>

    <div>
      <h2>Wie die Verschiebung funktioniert</h2>
      <p>
        Die Zeitstempel jedes Cues (<code>HH:MM:SS,mmm --&gt; HH:MM:SS,mmm</code>) werden in ganzzahlige Millisekunden umgewandelt, der Offset wird addiert und das Ergebnis wird mit Nullen aufgefüllt zurück formatiert — kein Float-Drift, keine Rundungsüberraschungen. Positive Offsets verzögern Untertitel (verwende sie, wenn der Text zu früh erscheint); negative Werte wie <code>-1.75</code> lassen sie früher erscheinen. Wenn eine Verschiebung einen Cue unter Null drückt, pinnt die Option <strong>clamp</strong> ihn auf <code>00:00:00,000</code>, statt einen ungültigen negativen Zeitstempel zu schreiben, und das Tool sagt dir, wie viele Cues geclampt wurden.
      </p>
    </div>

    <div>
      <h2>Tolerantes Parsing, sichere Neunummerierung</h2>
      <p>
        Echte SRT-Dateien sind unordentlich: Windows-<code>CRLF</code>-Zeilenenden, fehlende oder doppelte Indexnummern, verstreute Leerzeilen. Der Parser handhabt all das — Cue-Indizes sind optional, und jeder Block ohne gültige Zeitstempelzeile wird übersprungen und als Parse-Fehler gemeldet, niemals still verstümmelt. Aktiviere <strong>Cues neu nummerieren</strong> (Standard), um saubere fortlaufende Indizes zu schreiben, die einige strenge Player verlangen.
      </p>
    </div>

    <div>
      <h2>Formatierung und Musiksymbole entfernen</h2>
      <p>
        Untertiteldateien tragen oft Styling, das dein Player nicht nutzen kann: HTML-Tags <code>&lt;i&gt;</code>, <code>&lt;b&gt;</code> und <code>&lt;font&gt;</code>, ASS-Override-Blöcke wie <code>{'{\\an8}'}</code> und ♪-Markierungen um Musik-Cues. Die Option <strong>Formatierung entfernen</strong> entfernt all das und räumt übrig gebliebene Leerzeichen auf, sodass du eine saubere Plain-Text-Spur erhältst. Ein Tipp: verschiebe zuerst, prüfe die Synchronität mit ein oder zwei Dialogzeilen und lade dann herunter — die ganze Datei zu verschieben schlägt das Editieren Cue für Cue.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SrtSubtitleShiftContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
