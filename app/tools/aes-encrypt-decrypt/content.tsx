'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * AesEncryptDecrypt 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What AES-GCM guarantees</h2>
    <p>Confidentiality plus authenticity: the GCM tag proves the ciphertext was not modified, so wrong passwords and tampered payloads fail with a clear error instead of decrypting to garbage.</p>
    <h2>The PBKDF2 layer</h2>
    <p>Passwords are not keys — PBKDF2-SHA256 with 150,000 iterations and a per-message random salt stretches your passphrase into a 256-bit key, making offline brute-force dramatically more expensive.</p>
    <h2>Portable payload format</h2>
    <p>Output is AES-v1:salt:iv:ciphertext in base64 — self-contained and decryptable here, in Node, or any WebCrypto runtime. No hidden state, no server round-trip.</p>
    <h2>Honest limits</h2>
    <p>This encrypts text in your browser; it does not manage keys, rotate them, or protect a compromised endpoint. For files and backups, age or GPG remain the right tools.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué garantiza AES-GCM</h2>
    <p>Confidencialidad más autenticidad: la etiqueta GCM demuestra que el cifrado no fue manipulado — una contraseña errónea o un payload alterado falla con un error claro en lugar de devolver basura.</p>
    <h2>La capa PBKDF2</h2>
    <p>Las contraseñas no son claves — PBKDF2-SHA256 con 150 000 iteraciones y una sal aleatoria por mensaje estira tu contraseña hasta una clave de 256 bits, encareciendo drásticamente la fuerza bruta sin conexión.</p>
    <h2>Formato de payload portable</h2>
    <p>La salida es AES-v1:salt:iv:ciphertext en base64 — autocontenida y descifrable aquí, en Node o en cualquier entorno compatible con WebCrypto. Sin estado oculto, sin ida y vuelta al servidor.</p>
    <h2>Límites honestos</h2>
    <p>Esto cifra texto en tu navegador; no gestiona ni rota claves, ni protege un equipo comprometido. Para archivos y copias de seguridad, age o GPG siguen siendo la herramienta adecuada.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was AES-GCM garantiert</h2>
    <p>Vertraulichkeit plus Authentizität: Das GCM-Tag belegt, dass der Chiffretext unverändert blieb — falsche Passwörter oder manipulierte Nutzdaten scheitern mit klarem Fehler, statt Datenmüll zu liefern.</p>
    <h2>Die PBKDF2-Schicht</h2>
    <p>Passwörter sind keine Schlüssel — PBKDF2-SHA256 mit 150 000 Iterationen und einem zufälligen Salt je Nachricht streckt deine Passphrase auf einen 256-Bit-Schlüssel und macht Offline-Brute-Force drastisch teurer.</p>
    <h2>Portables Nutzdatenformat</h2>
    <p>Die Ausgabe ist AES-v1:salt:iv:ciphertext in Base64 — in sich geschlossen und entschlüsselbar hier, in Node oder in jeder WebCrypto-Umgebung. Kein versteckter Zustand, kein Server-Roundtrip.</p>
    <h2>Ehrliche Grenzen</h2>
    <p>Das hier verschlüsselt Text im Browser; es verwaltet keine Schlüssel, rotiert sie nicht und schützt keinen kompromittierten Rechner. Für Dateien und Backups bleiben age oder GPG die richtigen Werkzeuge.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function AesEncryptDecryptContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
