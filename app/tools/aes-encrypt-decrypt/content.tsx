/**
 * AesEncryptDecrypt 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function AesEncryptDecryptContent() {
  return (
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
}
