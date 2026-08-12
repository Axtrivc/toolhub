'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>This tool converts between frequency units: <strong>hertz</strong>, kilohertz, megahertz, gigahertz, and rotations per minute (RPM). Frequency measures how often something repeats per second.</p>
    <div>
      <h2>Key Conversions</h2>
      <ul>
        <li>1 kilohertz (kHz) = 1,000 Hz</li>
        <li>1 megahertz (MHz) = 1,000,000 Hz</li>
        <li>1 gigahertz (GHz) = 1,000 MHz = 1 billion Hz</li>
        <li>1 RPM = 1/60 Hz ≈ 0.0167 Hz</li>
      </ul>
    </div>
    <div>
      <h2>Frequencies You Encounter</h2>
      <ul>
        <li><strong>Heart rate:</strong> 60-100 beats/min = 1-1.7 Hz</li>
        <li><strong>Audio (human hearing):</strong> 20 Hz - 20 kHz</li>
        <li><strong>AM radio:</strong> 530-1710 kHz</li>
        <li><strong>FM radio:</strong> 88-108 MHz</li>
        <li><strong>WiFi:</strong> 2.4 GHz or 5 GHz</li>
        <li><strong>CPU clock speed:</strong> 2-5 GHz in modern computers</li>
      </ul>
    </div>
    <div>
      <h2>Why Frequencies Matter</h2>
      <p>In electronics and communications, the frequency band determines what a signal can do. Lower frequencies (AM radio) travel farther but carry less data; higher frequencies (WiFi, 5G) carry more data but over shorter distances. This trade-off shapes the entire design of wireless systems.</p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>本工具用于在频率单位之间换算:<strong>赫兹</strong>、千赫、兆赫、吉赫和每分钟转数 (RPM)。频率衡量某事物每秒重复多少次。</p>
    <div>
      <h2>关键换算</h2>
      <ul>
        <li>1 千赫 (kHz) = 1,000 Hz</li>
        <li>1 兆赫 (MHz) = 1,000,000 Hz</li>
        <li>1 吉赫 (GHz) = 1,000 MHz = 10 亿 Hz</li>
        <li>1 RPM = 1/60 Hz ≈ 0.0167 Hz</li>
      </ul>
    </div>
    <div>
      <h2>你常遇到的频率</h2>
      <ul>
        <li><strong>心率:</strong>60-100 次/分 = 1-1.7 Hz</li>
        <li><strong>音频(人耳听觉):</strong>20 Hz - 20 kHz</li>
        <li><strong>调幅广播 (AM):</strong>530-1710 kHz</li>
        <li><strong>调频广播 (FM):</strong>88-108 MHz</li>
        <li><strong>WiFi:</strong>2.4 GHz 或 5 GHz</li>
        <li><strong>CPU 时钟频率:</strong>现代计算机为 2-5 GHz</li>
      </ul>
    </div>
    <div>
      <h2>频率为什么重要</h2>
      <p>在电子和通信领域,频段决定了信号能做什么。较低频率(调幅广播)传输更远但承载的数据更少;较高频率(WiFi、5G)承载更多数据但传输距离更短。这种权衡决定了整个无线系统的设计。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Esta herramienta convierte entre unidades de frecuencia: <strong>hercios</strong>, kilohercios, megahercios, gigahercios y revoluciones por minuto (RPM). La frecuencia mide con qué frecuencia se repite algo por segundo.</p>
    <div>
      <h2>Conversiones clave</h2>
      <ul>
        <li>1 kilohercio (kHz) = 1,000 Hz</li>
        <li>1 megahercio (MHz) = 1,000,000 Hz</li>
        <li>1 gigahercio (GHz) = 1,000 MHz = 1,000 millones de Hz</li>
        <li>1 RPM = 1/60 Hz ≈ 0.0167 Hz</li>
      </ul>
    </div>
    <div>
      <h2>Frecuencias que encuentras</h2>
      <ul>
        <li><strong>Ritmo cardíaco:</strong> 60-100 latidos/min = 1-1.7 Hz</li>
        <li><strong>Audio (audición humana):</strong> 20 Hz - 20 kHz</li>
        <li><strong>Radio AM:</strong> 530-1710 kHz</li>
        <li><strong>Radio FM:</strong> 88-108 MHz</li>
        <li><strong>WiFi:</strong> 2.4 GHz o 5 GHz</li>
        <li><strong>Velocidad de reloj de CPU:</strong> 2-5 GHz en ordenadores modernos</li>
      </ul>
    </div>
    <div>
      <h2>Por qué importan las frecuencias</h2>
      <p>En electrónica y comunicaciones, la banda de frecuencia determina lo que puede hacer una señal. Las frecuencias más bajas (radio AM) viajan más lejos pero transportan menos datos; las frecuencias más altas (WiFi, 5G) transportan más datos pero a distancias más cortas. Este equilibrio define todo el diseño de los sistemas inalámbricos.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Dieses Werkzeug rechnet zwischen Frequenzeinheiten um: <strong>Hertz</strong>, Kilohertz, Megahertz, Gigahertz und Umdrehungen pro Minute (RPM). Frequenz misst, wie oft sich etwas pro Sekunde wiederholt.</p>
    <div>
      <h2>Wichtige Umrechnungen</h2>
      <ul>
        <li>1 Kilohertz (kHz) = 1,000 Hz</li>
        <li>1 Megahertz (MHz) = 1,000,000 Hz</li>
        <li>1 Gigahertz (GHz) = 1,000 MHz = 1 Milliarde Hz</li>
        <li>1 RPM = 1/60 Hz ≈ 0.0167 Hz</li>
      </ul>
    </div>
    <div>
      <h2>Frequenzen, die dir begegnen</h2>
      <ul>
        <li><strong>Herzfrequenz:</strong> 60-100 Schläge/Min = 1-1.7 Hz</li>
        <li><strong>Audio (menschliches Gehör):</strong> 20 Hz - 20 kHz</li>
        <li><strong>AM-Radio:</strong> 530-1710 kHz</li>
        <li><strong>FM-Radio:</strong> 88-108 MHz</li>
        <li><strong>WLAN:</strong> 2.4 GHz oder 5 GHz</li>
        <li><strong>CPU-Taktfrequenz:</strong> 2-5 GHz in modernen Computern</li>
      </ul>
    </div>
    <div>
      <h2>Warum Frequenzen wichtig sind</h2>
      <p>In der Elektronik und Kommunikationstechnik bestimmt das Frequenzband, was ein Signal leisten kann. Niedrigere Frequenzen (AM-Radio) reisen weiter, tragen aber weniger Daten; höhere Frequenzen (WLAN, 5G) tragen mehr Daten, aber über kürzere Distanzen. Dieser Kompromiss prägt das gesamte Design drahtloser Systeme.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function FrequencyConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
