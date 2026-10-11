'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HashComparator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why constant-time matters</h2>
    <p>A naive comparison returns false at the first differing byte, so response time leaks how many leading characters match. Timing attacks have exploited exactly this against signature checks; XOR-accumulating every byte removes the signal.</p>
    <h2>Verifying downloads</h2>
    <p>Publishers list SHA-256 digests next to releases precisely so you can catch corrupted or tampered files. Compute the local hash (sha256sum, shasum -a 256) and paste both sides here.</p>
    <h2>Normalization first</h2>
    <p>Hashes arrive upper- or lowercase, sometimes spaced in pairs (Windows certutil style). Both fields are normalized before comparing so formatting never causes a false mismatch.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么恒定时间比较很重要</h2>
    <p>朴素的字符串比较在遇到第一个不同的字节时就返回 false,于是响应时间会泄露前缀有多少位相同。计时攻击正是利用这一点攻破签名校验的;对每个字节做异或累积,就能消除这个信号。</p>
    <h2>校验下载文件</h2>
    <p>发布方在版本旁边列出 SHA-256 摘要,正是为了让你能发现损坏或被篡改的文件。在本地计算哈希(sha256sum、shasum -a 256),然后把两边粘贴到这里。</p>
    <h2>先做归一化</h2>
    <p>哈希值可能大小写不一,有时还会成对加空格(Windows certutil 风格)。两个字段在比较前都会先归一化,格式差异永远不会造成误报。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué importa el tiempo constante</h2>
    <p>Una comparación ingenua devuelve false en el primer byte distinto, así que el tiempo de respuesta filtra cuántos caracteres iniciales coinciden. Los ataques de temporización han explotado justo esto contra verificaciones de firmas; acumular el XOR de cada byte elimina la señal.</p>
    <h2>Verificar descargas</h2>
    <p>Quienes publican software listan los digestos SHA-256 junto a cada release precisamente para que detectes archivos corruptos o manipulados. Calcula el hash local (sha256sum, shasum -a 256) y pega ambos lados aquí.</p>
    <h2>Primero, normalizar</h2>
    <p>Los hashes llegan en mayúsculas o minúsculas, a veces con espacios entre pares (estilo certutil de Windows). Ambos campos se normalizan antes de comparar, así que el formato nunca provoca un desajuste falso.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum zeitkonstante Vergleiche wichtig sind</h2>
    <p>Ein naiver Vergleich bricht beim ersten abweichenden Byte mit false ab, die Antwortzeit verrät also, wie viele führende Zeichen übereinstimmen. Timing-Angriffe haben genau das gegen Signaturprüfungen ausgenutzt; XOR-Akkumulation über alle Bytes beseitigt das Signal.</p>
    <h2>Downloads prüfen</h2>
    <p>Publisher legen SHA-256-Digests neben ihre Releases, damit du beschädigte oder manipulierte Dateien erwischst. Berechne den lokalen Hash (sha256sum, shasum -a 256) und füge beide Seiten hier ein.</p>
    <h2>Zuerst normalisieren</h2>
    <p>Hashes kommen in Groß- oder Kleinschreibung, manchmal paarweise mit Leerzeichen (Windows-certutil-Stil). Beide Felder werden vor dem Vergleich normalisiert — Formatierung erzeugt daher nie eine falsche Nichtübereinstimmung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HashComparatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
