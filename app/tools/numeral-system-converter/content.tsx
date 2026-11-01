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
        <li><strong>Colores hex</strong> en diseño web: #FFFFFF = 255.255.255 en decimal</li>
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
        <li><strong>Binär</strong> — wie Computer Daten speichern (elektrische Ein/Aus-Signale)</li>
        <li><strong>Hexadezimal</strong> — kompakte Darstellung von Binär (4 Bits = 1 Hex-Ziffer)</li>
        <li><strong>Oktal</strong> — historische Unix-Dateirechte, heute seltener</li>
      </ul>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li><strong>Hex-Farben</strong> im Webdesign: #FFFFFF = 255.255.255 als Dezimalzahl</li>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function NumeralSystemConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
