'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool removes all whitespace from JSON to minimize file size. Useful for API responses,
      embedded data, and storage where every byte counts.
    </p>
    <div>
      <h2>The Size Savings</h2>
      <p>
        Minified JSON is typically 20-50% smaller than pretty-printed JSON. For large payloads served
        over the network, this adds up — especially on mobile or metered connections.
      </p>
    </div>
    <div>
      <h2>When to Minify</h2>
      <ul>
        <li>API responses (often gzipped on top)</li>
        <li>Embedded JSON in HTML or JavaScript</li>
        <li>Stored configurations in databases</li>
        <li>Mobile apps where bandwidth matters</li>
      </ul>
    </div>
    <div>
      <h2>When Not to Minify</h2>
      <p>
        Don&apos;t minify JSON that humans need to read or edit by hand — config files, log output,
        debugging artifacts. The size savings aren&apos;t worth the lost readability.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      这个工具会移除 JSON 中的所有空白字符,以最小化文件大小。适用于 API 响应、内嵌数据以及每个字节都很重要的存储场景。
    </p>
    <div>
      <h2>体积的节省</h2>
      <p>
        压缩后的 JSON 通常比格式化美化的 JSON 小 20-50%。对于通过网络传输的大型负载,这点节省会累积起来——尤其在移动网络或按量计费的连接上更是如此。
      </p>
    </div>
    <div>
      <h2>何时压缩</h2>
      <ul>
        <li>API 响应(通常还会再 gzip 压缩)</li>
        <li>嵌入在 HTML 或 JavaScript 中的 JSON</li>
        <li>存储在数据库中的配置</li>
        <li>对带宽敏感的移动应用</li>
      </ul>
    </div>
    <div>
      <h2>何时不该压缩</h2>
      <p>
        不要压缩需要人工阅读或手动编辑的 JSON——例如配置文件、日志输出和调试产物。牺牲可读性换来的体积节省并不划算。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta elimina todos los espacios en blanco del JSON para minimizar el tamaño del
      archivo. Útil para respuestas de API, datos incrustados y almacenamiento donde cada byte cuenta.
    </p>
    <div>
      <h2>El ahorro de tamaño</h2>
      <p>
        El JSON minimizado suele ser entre un 20-50 % más pequeño que el JSON con formato legible. Para
        payloads grandes servidos por la red, esto se acumula — especialmente en conexiones móviles o
        medidas.
      </p>
    </div>
    <div>
      <h2>Cuándo minimizar</h2>
      <ul>
        <li>Respuestas de API (a menudo con gzip adicional)</li>
        <li>JSON incrustado en HTML o JavaScript</li>
        <li>Configuraciones almacenadas en bases de datos</li>
        <li>Aplicaciones móviles donde el ancho de banda importa</li>
      </ul>
    </div>
    <div>
      <h2>Cuándo no minimizar</h2>
      <p>
        No minimices el JSON que los humanos necesitan leer o editar a mano — archivos de
        configuración, salida de logs, artefactos de depuración. El ahorro de tamaño no compensa la
        pérdida de legibilidad.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug entfernt alle Leerzeichen aus JSON, um die Dateigröße zu minimieren. Nützlich
      für API-Antworten, eingebettete Daten und Speicherung, wo jedes Byte zählt.
    </p>
    <div>
      <h2>Die Größeneinsparung</h2>
      <p>
        Minimiertes JSON ist normalerweise 20-50 % kleiner als formatiertes JSON. Bei großen Payloads,
        die über das Netzwerk ausgeliefert werden, summiert sich das — besonders bei mobilen oder
        volumenbegrenzten Verbindungen.
      </p>
    </div>
    <div>
      <h2>Wann du minimieren solltest</h2>
      <ul>
        <li>API-Antworten (oft zusätzlich per gzip)</li>
        <li>Eingebettetes JSON in HTML oder JavaScript</li>
        <li>Gespeicherte Konfigurationen in Datenbanken</li>
        <li>Mobile Apps, bei denen Bandbreite wichtig ist</li>
      </ul>
    </div>
    <div>
      <h2>Wann du nicht minimieren solltest</h2>
      <p>
        Minimiere kein JSON, das Menschen lesen oder von Hand bearbeiten müssen — Konfigurationsdateien,
        Log-Ausgaben, Debug-Artefakte. Die Größeneinsparung ist den Verlust an Lesbarkeit nicht wert.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function JSONMinifierContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
