'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * AesEncryptDecrypt 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>AES-GCM 提供什么保证</h2>
    <p>机密性加真实性:GCM 认证标签能证明密文未被篡改——密码不对或载荷被改动时都会明确报错,而不是解出一堆乱码。</p>
    <h2>PBKDF2 这一层</h2>
    <p>密码不是密钥——PBKDF2-SHA256 以 15 万次迭代和每条消息独立的随机盐,把你的密码拉伸成 256 位密钥,让离线暴力破解的代价大幅提高。</p>
    <h2>可移植的载荷格式</h2>
    <p>输出为 base64 编码的 AES-v1:salt:iv:ciphertext——自包含,可在本页、Node 或任何支持 WebCrypto 的环境解密。没有隐藏状态,也不经过服务器中转。</p>
    <h2>诚实的边界</h2>
    <p>本工具在浏览器里加密文本;它不管理密钥、不轮换密钥,也保护不了已被入侵的设备。文件与备份场景,age 或 GPG 仍是更合适的工具。</p>
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AesEncryptDecryptContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
