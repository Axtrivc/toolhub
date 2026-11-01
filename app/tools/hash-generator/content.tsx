'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>hash function</strong> turns any input into a fixed-length fingerprint. The same input always produces the same hash; even tiny input changes produce totally different hashes. This tool generates SHA-256, SHA-384, SHA-512 and SHA-1 using your browser&apos;s SubtleCrypto API.</p>
    <div>
      <h2>What Hashes Are Used For</h2>
      <ul>
        <li><strong>Verifying file integrity</strong> — download a file, hash it, compare to published hash</li>
        <li><strong>Password storage</strong> — sites store hashes, not plaintext passwords</li>
        <li><strong>Digital signatures</strong> — sign a hash, not the whole document</li>
        <li><strong>Blockchain</strong> — Bitcoin uses SHA-256 for proof-of-work</li>
        <li><strong>Content addressing</strong> — IPFS uses hashes as addresses</li>
      </ul>
    </div>
    <div>
      <h2>Why SHA-256, Not MD5</h2>
      <p>MD5 and SHA-1 are cryptographically broken — collisions (two inputs with the same hash) can be found. SHA-256 is still secure as of 2026. For anything security-critical, use SHA-256 or stronger.</p>
    </div>
    <div>
      <h2>Hashes Are One-Way</h2>
      <p>You can hash &quot;hello&quot; into a SHA-256, but you cannot reverse the hash back to &quot;hello&quot; (without brute force). This one-way property is what makes hashes useful for passwords — even if a database leaks, attackers only get hashes.</p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>función hash</strong> convierte cualquier entrada en una huella digital de longitud fija. La misma entrada siempre produce el mismo hash; incluso cambios diminutos en la entrada producen hashes totalmente distintos. Esta herramienta genera SHA-256, SHA-384, SHA-512 y SHA-1 usando la API SubtleCrypto de tu navegador.</p>
    <div>
      <h2>Para qué se usan los hashes</h2>
      <ul>
        <li><strong>Verificar la integridad de archivos</strong> — descarga un archivo, calcula su hash y compáralo con el hash publicado</li>
        <li><strong>Almacenamiento de contraseñas</strong> — los sitios guardan hashes, no contraseñas en texto plano</li>
        <li><strong>Firmas digitales</strong> — se firma un hash, no el documento completo</li>
        <li><strong>Blockchain</strong> — Bitcoin usa SHA-256 para la prueba de trabajo</li>
        <li><strong>Direccionamiento de contenido</strong> — IPFS usa hashes como direcciones</li>
      </ul>
    </div>
    <div>
      <h2>Por qué SHA-256 y no MD5</h2>
      <p>MD5 y SHA-1 están criptográficamente rotos — pueden encontrarse colisiones (dos entradas con el mismo hash). SHA-256 sigue siendo seguro a fecha de 2026. Para cualquier uso crítico de seguridad, usa SHA-256 o superior.</p>
    </div>
    <div>
      <h2>Los hashes son unidireccionales</h2>
      <p>Puedes convertir «hello» en un SHA-256, pero no puedes revertir el hash de vuelta a «hello» (sin fuerza bruta). Esta propiedad unidireccional es lo que hace a los hashes útiles para contraseñas — incluso si se filtra una base de datos, los atacantes solo obtienen hashes.</p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>Eine <strong>Hashfunktion</strong> wandelt jede Eingabe in einen Fingerabdruck fester Länge um. Dieselbe Eingabe erzeugt immer denselben Hash; schon winzige Eingabeänderungen ergeben völlig andere Hashes. Dieses Werkzeug erzeugt SHA-256, SHA-384, SHA-512 und SHA-1 über die SubtleCrypto-API deines Browsers.</p>
    <div>
      <h2>Wofür Hashes verwendet werden</h2>
      <ul>
        <li><strong>Dateiintegrität prüfen</strong> — lade eine Datei herunter, hashe sie und vergleiche mit dem veröffentlichten Hash</li>
        <li><strong>Passwortspeicherung</strong> — Websites speichern Hashes, keine Klartextpasswörter</li>
        <li><strong>Digitale Signaturen</strong> — signiere einen Hash, nicht das ganze Dokument</li>
        <li><strong>Blockchain</strong> — Bitcoin nutzt SHA-256 für Proof-of-Work</li>
        <li><strong>Content-Adressierung</strong> — IPFS nutzt Hashes als Adressen</li>
      </ul>
    </div>
    <div>
      <h2>Warum SHA-256, nicht MD5</h2>
      <p>MD5 und SHA-1 sind kryptografisch gebrochen — Kollisionen (zwei Eingaben mit demselben Hash) lassen sich finden. SHA-256 ist Stand 2026 weiterhin sicher. Für alles, was sicherheitskritisch ist, verwende SHA-256 oder stärker.</p>
    </div>
    <div>
      <h2>Hashes sind Einwegfunktionen</h2>
      <p>Du kannst „hello“ in einen SHA-256 hashen, aber du kannst den Hash nicht zurück in „hello“ verwandeln (ohne Brute Force). Diese Einwegeigenschaft macht Hashes nützlich für Passwörter — selbst wenn eine Datenbank geleakt wird, erhalten Angreifer nur Hashes.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HashGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
