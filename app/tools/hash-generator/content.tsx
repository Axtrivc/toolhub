'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>A <strong>hash function</strong> turns any input into a fixed-length fingerprint. The same input always produces the same hash; even tiny input changes produce totally different hashes. This tool generates SHA-256 and SHA-1 using your browser&apos;s SubtleCrypto API.</p>
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>哈希函数会将任意输入转换为固定长度的指纹。相同的输入始终产生相同的哈希;哪怕输入只改动一点点,也会得到完全不同的哈希。本工具使用你浏览器的 SubtleCrypto API 生成 SHA-256 和 SHA-1。</p>
    <div>
      <h2>哈希的用途</h2>
      <ul>
        <li><strong>验证文件完整性</strong> — 下载文件、计算哈希、与已公布的哈希对比</li>
        <li><strong>密码存储</strong> — 网站存储的是哈希,而非明文密码</li>
        <li><strong>数字签名</strong> — 对哈希签名,而不是对整个文档签名</li>
        <li><strong>区块链</strong> — Bitcoin 使用 SHA-256 进行工作量证明</li>
        <li><strong>内容寻址</strong> — IPFS 使用哈希作为地址</li>
      </ul>
    </div>
    <div>
      <h2>为什么用 SHA-256 而不是 MD5</h2>
      <p>MD5 和 SHA-1 在密码学上已被攻破 — 可以找到碰撞(两个不同输入产生相同哈希)。截至 2026 年,SHA-256 依然安全。对于任何涉及安全的场景,请使用 SHA-256 或更强的算法。</p>
    </div>
    <div>
      <h2>哈希是单向的</h2>
      <p>你可以把「hello」哈希成 SHA-256,却无法把哈希还原回「hello」(除非暴力破解)。这种单向特性正是哈希适合用于密码的原因 — 即使数据库泄露,攻击者拿到的也只是哈希。</p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Una <strong>función hash</strong> convierte cualquier entrada en una huella digital de longitud fija. La misma entrada siempre produce el mismo hash; incluso cambios diminutos en la entrada producen hashes totalmente distintos. Esta herramienta genera SHA-256 y SHA-1 usando la API SubtleCrypto de tu navegador.</p>
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
    <p>Eine <strong>Hashfunktion</strong> wandelt jede Eingabe in einen Fingerabdruck fester Länge um. Dieselbe Eingabe erzeugt immer denselben Hash; schon winzige Eingabeänderungen ergeben völlig andere Hashes. Dieses Werkzeug erzeugt SHA-256 und SHA-1 über die SubtleCrypto-API deines Browsers.</p>
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
      <p>MD5 und SHA-1 sind kryptografisch gebrochen — Kollisionen (zwei Eingaben mit demselben Hash) lassen sich finden. SHA-256 ist Stand 2026 weiterhin sicher. Für alles Sicherheitkritische verwende SHA-256 oder stärker.</p>
    </div>
    <div>
      <h2>Hashes sind Einweg</h2>
      <p>Du kannst „hello" in einen SHA-256 hashen, aber du kannst den Hash nicht zurück in „hello" verwandeln (ohne Brute Force). Diese Einwegeigenschaft macht Hashes nützlich für Passwörter — selbst wenn eine Datenbank geleakt wird, erhalten Angreifer nur Hashes.</p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HashGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
