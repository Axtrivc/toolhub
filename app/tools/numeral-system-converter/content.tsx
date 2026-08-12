'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool converts numbers between four bases: <strong>binary</strong> (base 2),{' '}
      <strong>octal</strong> (base 8), <strong>decimal</strong> (base 10), and{' '}
      <strong>hexadecimal</strong> (base 16). These are the number systems used in computing.
    </p>
    <div>
      <h2>Why Different Bases Exist</h2>
      <ul>
        <li><strong>Decimal</strong> — what humans use daily (10 fingers)</li>
        <li><strong>Binary</strong> — how computers store data (on/off electrical signals)</li>
        <li><strong>Hexadecimal</strong> — compact way to represent binary (4 bits = 1 hex digit)</li>
        <li><strong>Octal</strong> — historical Unix file permissions, less common today</li>
      </ul>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li><strong>Hex colors</strong> in web design: #FFFFFF = 255,255,255 in decimal</li>
        <li><strong>Memory addresses</strong> shown in hex by debuggers</li>
        <li><strong>File permissions</strong> on Unix: chmod 755 (octal)</li>
        <li><strong>Network masks</strong> and MAC addresses</li>
        <li><strong>Binary logic</strong> in electronics and computer science class</li>
      </ul>
    </div>
    <div>
      <h2>Quick Reference</h2>
      <ul>
        <li>Decimal 255 = FF hex = 11111111 binary</li>
        <li>Decimal 16 = 10 hex = 10000 binary</li>
        <li>Decimal 8 = 10 octal = 1000 binary</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具在四种进制之间换算数字:<strong>二进制</strong>(基数 2)、<strong>八进制</strong>(基数 8)、<strong>十进制</strong>(基数 10)和 <strong>十六进制</strong>(基数 16)。这些都是计算机中使用的数制。
    </p>
    <div>
      <h2>为什么会有不同的进制</h2>
      <ul>
        <li><strong>十进制</strong>——人类日常使用(10 根手指)</li>
        <li><strong>二进制</strong>——计算机存储数据的方式(开/关电信号)</li>
        <li><strong>十六进制</strong>——二进制的紧凑表示(4 位 = 1 个十六进制位)</li>
        <li><strong>八进制</strong>——历史上的 Unix 文件权限,如今较少使用</li>
      </ul>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>网页设计中的<strong>十六进制颜色</strong>:#FFFFFF = 十进制的 255,255,255</li>
        <li>调试器用十六进制显示<strong>内存地址</strong></li>
        <li>Unix 的<strong>文件权限</strong>:chmod 755(八进制)</li>
        <li><strong>网络掩码</strong>和 MAC 地址</li>
        <li>电子学和计算机课中的<strong>二进制逻辑</strong></li>
      </ul>
    </div>
    <div>
      <h2>速查表</h2>
      <ul>
        <li>十进制 255 = 十六进制 FF = 二进制 11111111</li>
        <li>十进制 16 = 十六进制 10 = 二进制 10000</li>
        <li>十进制 8 = 八进制 10 = 二进制 1000</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta convierte números entre cuatro bases: <strong>binario</strong> (base 2),{' '}
      <strong>octal</strong> (base 8), <strong>decimal</strong> (base 10) y{' '}
      <strong>hexadecimal</strong> (base 16). Estos son los sistemas numéricos que se usan en
      informática.
    </p>
    <div>
      <h2>Por qué existen distintas bases</h2>
      <ul>
        <li><strong>Decimal</strong> — el que usamos a diario (10 dedos)</li>
        <li><strong>Binario</strong> — cómo almacenan datos los ordenadores (señales eléctricas on/off)</li>
        <li><strong>Hexadecimal</strong> — forma compacta de representar el binario (4 bits = 1 dígito hex)</li>
        <li><strong>Octal</strong> — permisos de archivos históricos de Unix, menos común hoy</li>
      </ul>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li><strong>Colores hex</strong> en diseño web: #FFFFFF = 255,255,255 en decimal</li>
        <li><strong>Direcciones de memoria</strong> mostradas en hex por los depuradores</li>
        <li><strong>Permisos de archivos</strong> en Unix: chmod 755 (octal)</li>
        <li><strong>Máscaras de red</strong> y direcciones MAC</li>
        <li><strong>Lógica binaria</strong> en electrónica y clases de informática</li>
      </ul>
    </div>
    <div>
      <h2>Referencia rápida</h2>
      <ul>
        <li>Decimal 255 = FF hex = 11111111 binario</li>
        <li>Decimal 16 = 10 hex = 10000 binario</li>
        <li>Decimal 8 = 10 octal = 1000 binario</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug rechnet Zahlen zwischen vier Zahlensystemen um: <strong>Binär</strong> (Basis 2),{' '}
      <strong>Oktal</strong> (Basis 8), <strong>Dezimal</strong> (Basis 10) und{' '}
      <strong>Hexadezimal</strong> (Basis 16). Das sind die Zahlensysteme, die in der Informatik
      verwendet werden.
    </p>
    <div>
      <h2>Warum es verschiedene Zahlensysteme gibt</h2>
      <ul>
        <li><strong>Dezimal</strong> — was Menschen täglich nutzen (10 Finger)</li>
        <li><strong>Binär</strong> — wie Computer Daten speichern (an/aus-Elektriksignale)</li>
        <li><strong>Hexadezimal</strong> — kompakte Darstellung von Binär (4 Bits = 1 Hex-Ziffer)</li>
        <li><strong>Oktal</strong> — historische Unix-Dateirechte, heute seltener</li>
      </ul>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>Hex-Farben</strong> im Webdesign: #FFFFFF = 255,255,255 als Dezimalzahl</li>
        <li><strong>Speicheradressen</strong> werden von Debuggern in Hex angezeigt</li>
        <li><strong>Dateirechte</strong> unter Unix: chmod 755 (oktal)</li>
        <li><strong>Netzmasken</strong> und MAC-Adressen</li>
        <li><strong>Binärlogik</strong> in Elektronik und Informatikunterricht</li>
      </ul>
    </div>
    <div>
      <h2>Schnellreferenz</h2>
      <ul>
        <li>Dezimal 255 = FF hex = 11111111 binär</li>
        <li>Dezimal 16 = 10 hex = 10000 binär</li>
        <li>Dezimal 8 = 10 oktal = 1000 binär</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function NumeralSystemConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
