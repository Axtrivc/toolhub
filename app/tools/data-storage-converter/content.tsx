'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>Digital storage is measured in <strong>bytes</strong> and multiples of bytes. This tool converts between binary units (where 1 KB = 1024 bytes), which is how operating systems and most software report file sizes and disk space.</p>
    <div>
      <h2>Binary vs. Decimal Units</h2>
      <p>There are two conventions. <strong>Binary</strong> (1 KB = 1024 bytes) is used by Windows and most software. <strong>Decimal</strong> (1 KB = 1000 bytes) is used by storage manufacturers — which is why a &quot;500 GB&quot; hard drive shows up as ~465 GB on your computer. This tool uses binary units.</p>
    </div>
    <div>
      <h2>Common Conversions</h2>
      <ul>
        <li>1 KB = 1,024 bytes</li>
        <li>1 MB = 1,024 KB = 1,048,576 bytes</li>
        <li>1 GB = 1,024 MB ≈ 1.07 billion bytes</li>
        <li>1 TB = 1,024 GB ≈ 1.1 trillion bytes</li>
        <li>1 byte = 8 bits (a bit is a single 0 or 1)</li>
      </ul>
    </div>
    <div>
      <h2>Real-World Sizes</h2>
      <ul>
        <li>Text message: ~1 KB</li>
        <li>Photo (smartphone): 2-5 MB</li>
        <li>MP3 song: 3-5 MB</li>
        <li>HD movie: 1-4 GB</li>
        <li>Smartphone storage: 64-512 GB</li>
        <li>Laptop SSD: 256 GB - 2 TB</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>数字存储以<strong>字节</strong>及其倍数来衡量。本工具在二进制单位(1 KB = 1024 字节)之间换算,这也是操作系统和大多数软件报告文件大小和磁盘空间的方式。</p>
    <div>
      <h2>二进制与十进制单位</h2>
      <p>存在两种约定。<strong>二进制</strong>(1 KB = 1024 字节)由 Windows 和大多数软件使用;<strong>十进制</strong>(1 KB = 1000 字节)由存储厂商使用——这就是为什么一块「500 GB」的硬盘在电脑上显示为 ~465 GB。本工具使用二进制单位。</p>
    </div>
    <div>
      <h2>常用换算</h2>
      <ul>
        <li>1 KB = 1,024 字节</li>
        <li>1 MB = 1,024 KB = 1,048,576 字节</li>
        <li>1 GB = 1,024 MB ≈ 10.7 亿字节</li>
        <li>1 TB = 1,024 GB ≈ 1.1 万亿字节</li>
        <li>1 字节 = 8 比特(比特就是单个 0 或 1)</li>
      </ul>
    </div>
    <div>
      <h2>现实中的大小</h2>
      <ul>
        <li>短信:~1 KB</li>
        <li>照片(手机):2-5 MB</li>
        <li>MP3 歌曲:3-5 MB</li>
        <li>高清电影:1-4 GB</li>
        <li>手机存储:64-512 GB</li>
        <li>笔记本固态硬盘:256 GB - 2 TB</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>El almacenamiento digital se mide en <strong>bytes</strong> y múltiplos de bytes. Esta herramienta convierte entre unidades binarias (donde 1 KB = 1024 bytes), que es como los sistemas operativos y la mayoría del software informan del tamaño de los archivos y del espacio en disco.</p>
    <div>
      <h2>Unidades binarias frente a decimales</h2>
      <p>Existen dos convenciones. La <strong>binaria</strong> (1 KB = 1024 bytes) la usan Windows y la mayoría del software. La <strong>decimal</strong> (1 KB = 1000 bytes) la usan los fabricantes de almacenamiento — por eso un disco duro de «500 GB» aparece como ~465 GB en tu ordenador. Esta herramienta usa unidades binarias.</p>
    </div>
    <div>
      <h2>Conversiones comunes</h2>
      <ul>
        <li>1 KB = 1,024 bytes</li>
        <li>1 MB = 1,024 KB = 1,048,576 bytes</li>
        <li>1 GB = 1,024 MB ≈ 1.07 mil millones de bytes</li>
        <li>1 TB = 1,024 GB ≈ 1.1 billones de bytes</li>
        <li>1 byte = 8 bits (un bit es un único 0 o 1)</li>
      </ul>
    </div>
    <div>
      <h2>Tamaños reales</h2>
      <ul>
        <li>Mensaje de texto: ~1 KB</li>
        <li>Foto (smartphone): 2-5 MB</li>
        <li>Canción MP3: 3-5 MB</li>
        <li>Película HD: 1-4 GB</li>
        <li>Almacenamiento de smartphone: 64-512 GB</li>
        <li>SSD de portátil: 256 GB - 2 TB</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Digitaler Speicher wird in <strong>Bytes</strong> und Vielfachen davon gemessen. Dieses Werkzeug rechnet zwischen binären Einheiten um (wobei 1 KB = 1024 Bytes), so wie Betriebssysteme und die meiste Software Dateigrößen und Speicherplatz angeben.</p>
    <div>
      <h2>Binäre vs. dezimale Einheiten</h2>
      <p>Es gibt zwei Konventionen. <strong>Binär</strong> (1 KB = 1024 Bytes) wird von Windows und der meisten Software verwendet. <strong>Dezimal</strong> (1 KB = 1000 Bytes) wird von Speicherherstellern verwendet — deshalb wird eine „500 GB"-Festplatte auf deinem Computer als ~465 GB angezeigt. Dieses Werkzeug verwendet binäre Einheiten.</p>
    </div>
    <div>
      <h2>Häufige Umrechnungen</h2>
      <ul>
        <li>1 KB = 1,024 Bytes</li>
        <li>1 MB = 1,024 KB = 1,048,576 Bytes</li>
        <li>1 GB = 1,024 MB ≈ 1.07 Milliarden Bytes</li>
        <li>1 TB = 1,024 GB ≈ 1.1 Billionen Bytes</li>
        <li>1 Byte = 8 Bits (ein Bit ist eine einzelne 0 oder 1)</li>
      </ul>
    </div>
    <div>
      <h2>Größen in der Praxis</h2>
      <ul>
        <li>Textnachricht: ~1 KB</li>
        <li>Foto (Smartphone): 2-5 MB</li>
        <li>MP3-Lied: 3-5 MB</li>
        <li>HD-Film: 1-4 GB</li>
        <li>Smartphone-Speicher: 64-512 GB</li>
        <li>Laptop-SSD: 256 GB - 2 TB</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DataStorageConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
