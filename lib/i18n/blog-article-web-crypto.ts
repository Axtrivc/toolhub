/**
 * 《Demystifying In-Browser AES-256-GCM and PBKDF2: A Developer\u2019s Practical Guide》
 * Pillar 集群 #5(安全隐私,2026-09-05)。
 * 内链:aes-encrypt-decrypt / hmac-generator / secret-key-generator / password-generator / jwt-decoder。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_WEBCRYPTO = `// In-browser AES-256-GCM with PBKDF2 key derivation (WebCrypto)
const salt = crypto.getRandomValues(new Uint8Array(16))
const iv   = crypto.getRandomValues(new Uint8Array(12))

const keyMaterial = await crypto.subtle.importKey(
  'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey'])

const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 150000 },
  keyMaterial, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt'])

const cipher = await crypto.subtle.encrypt(
  { name: 'AES-GCM', iv }, key, new TextEncoder().encode(plaintext))
// Ship salt:iv:cipher together — no server ever saw the password.`

export const webCryptoGuideArticle: LocalizedArticle = {
  en: {
    lead: 'The strongest privacy architecture is the one where the server never holds the plaintext. Browser-native WebCrypto makes AES-256-GCM + PBKDF2 available without a single dependency — here is how the pieces actually fit, and where developers still cut their fingers.',
    sections: [
      {
        heading: '1. Why Client-Side at All: The Zero-Knowledge Argument',
        blocks: [
          'Every server-side encryption scheme asks the user to trust a promise. Client-side encryption replaces the promise with a *property*: plaintext and passwords never leave the device, so a breach of the server yields ciphertext only. For notes, backups, contract drafts, and personal records, this is the difference between "we promise we can\u2019t read it" and "there is nothing to read".',
          'The catch: the browser must do real cryptography, not XOR with a hex key. That is what the Web Crypto API (`crypto.subtle`) is for — a native, constant-time, hardware-backed implementation that no pure-JS library can match for safety.',
        ],
      },
      {
        heading: '2. AES-256-GCM: Encryption With a Lie Detector',
        blocks: [
          'AES-GCM is **authenticated encryption**: alongside the ciphertext it produces a 128-bit authentication tag. On decryption, if even one bit was flipped — or the password is wrong — the operation fails loudly instead of returning plausible garbage. Older modes like CBC decrypt tampered data happily and let your application discover the corruption the hard way.',
          'The one rule that must never break: **never reuse an IV/nonce with the same key**. GCM nonces are 96 bits, generated randomly per message — with random 12-byte IVs, the collision probability only becomes meaningful after billions of messages under one key. Rotating keys or keeping PBKDF2\u2019s random salt per encryption (which yields a fresh key every time) makes the problem vanish by construction.',
          {
            card: {
              title: 'AES-256-GCM Encrypt & Decrypt',
              href: '/tools/aes-encrypt-decrypt/',
              desc: 'Password-based AES-256-GCM with PBKDF2 (150k iterations, random salt) — fully in-browser, self-contained salt:iv:ciphertext payloads.',
            },
          },
        ],
      },
      {
        heading: '3. PBKDF2: Turning Human Passwords Into Machine Keys',
        blocks: [
          'Passwords are terrible keys: low entropy, reused, guessable. **PBKDF2-HMAC-SHA256** stretches them — hash the password together with a random 16-byte salt, then repeat 150,000+ times. The salt kills rainbow tables (identical passwords produce different keys); the iteration count taxes every guess an attacker makes.',
          'What PBKDF2 cannot fix is a weak password: 150k iterations raise the cost of each guess by roughly 2¹⁷, which converts a 40-bit password into something like 57 bits of effective work — still crackable. Key stretching buys a multiplier, not a miracle; the password itself must carry most of the entropy.',
          { code: CODE_WEBCRYPTO },
          {
            card: {
              title: 'HMAC Generator',
              href: '/tools/hmac-generator/',
              desc: 'PBKDF2 is HMAC-SHA256 iterated 150,000 times — run the underlying primitive yourself with any key and message, output in hex or base64.',
            },
          },
        ],
      },
      {
        heading: '4. Keys and Secrets: Generate Them Like a Paranoid',
        blocks: [
          'Any secret your code or users rely on should come from a **cryptographically secure RNG** — `crypto.getRandomValues`, never `Math.random()`. An API key or token generated from a predictable PRNG is not a secret; it is a puzzle.',
          { list: [
            '**API keys / tokens** — 128 bits minimum (32 hex chars), CSPRNG only.',
            '**Encryption passwords** — length beats complexity: 5 random words outrun 10 muddled characters.',
            '**Salts and IVs** — random per operation, stored *with* the ciphertext; they are not secrets, but they must be unique.',
          ] },
          {
            card: {
              title: 'Secret Key Generator',
              href: '/tools/secret-key-generator/',
              desc: 'CSPRNG-generated API keys and tokens in hex/base64 — the randomness your security assumptions quietly depend on.',
            },
          },
          {
            card: {
              title: 'Password Generator',
              href: '/tools/password-generator/',
              desc: 'High-entropy passwords and passphrases, generated locally — nothing typed, nothing transmitted.',
            },
          },
        ],
      },
      {
        heading: '5. JWTs: Decoding Is Not Verifying',
        blocks: [
          'A JWT is base64url(header).base64url(payload).signature. Anyone can decode the first two segments — they are *signed, not encrypted*. Two consequences developers trip over: never put secrets in a JWT payload (your users can read it with any decoder), and on the server, **verify the signature before trusting a single claim**, with the `alg` allowlist pinned — the classic "alg: none" and RS256-to-HS256 confusion attacks both begin with skipping that step.',
          'Client-side decoding is for *debugging*: inspect expiry, audience, and scopes in the payload you received — then verify on the server side, where the secret or public key lives.',
          {
            card: {
              title: 'JWT Decoder',
              href: '/tools/jwt-decoder/',
              desc: 'Inspect header and payload locally, with expiry and claims rendered readably — decoding stays in the browser where the token already was.',
            },
          },
        ],
      },
      {
        heading: 'The Client-Side Checklist',
        blocks: [
          { list: [
            'Use **AES-GCM** (or another AEAD mode), never raw CBC/ECB.',
            'Derive keys with **PBKDF2/Argon2-class** stretching: random 16-byte salt, ≥100k iterations.',
            'Every secret from **crypto.getRandomValues** — audit every `Math.random()` in security paths.',
            'Random IV per message; transmit salt:iv:ciphertext together.',
            'Decode JWTs freely; **verify** them only with the real key, allowlisted algorithms, and unexpired timestamps.',
          ] },
        ],
      },
    ],
  },
  zh: {
    lead: '最强的隐私架构是服务器根本拿不到明文的那种。浏览器原生 WebCrypto 让 AES-256-GCM + PBKDF2 零依赖可用——本文讲清各部件如何真正咬合,以及开发者仍会割到手的地方。',
    sections: [
      {
        heading: '1. 为什么要在客户端加密:零知识论证',
        blocks: [
          '所有服务端加密方案都要求用户相信一句承诺。客户端加密把承诺换成*属性*:明文与密码永不离开设备,服务器被拖库也只捞到密文。对笔记、备份、合同草稿和个人档案而言,这是"我们承诺读不了"和"根本没东西可读"的区别。',
          '代价是浏览器必须做真加密,而不是拿十六进制字符串做 XOR。这正是 Web Crypto API(`crypto.subtle`)存在的意义——原生、常数时间、有硬件支持的实现,任何纯 JS 库在安全性上都无法企及。',
        ],
      },
      {
        heading: '2. AES-256-GCM:自带测谎仪的加密',
        blocks: [
          'AES-GCM 是**认证加密**:除了密文还产出 128 位认证标签。解密时哪怕被翻转一个比特——或者密码错了——操作会响亮地失败,而不是返回看似合理的乱码。老式 CBC 模式会高高兴兴解密被篡改的数据,让你的应用用更疼的方式发现损坏。',
          '那条绝不能破的规矩:**同一密钥绝不复用 IV/nonce**。GCM nonce 为 96 位,逐条消息随机生成——随机 12 字节 IV 下,同一密钥加密数十亿条消息后碰撞概率才有意义。每次加密都用 PBKDF2 的随机盐(等于每次拿到全新密钥),问题在构造上就不存在。',
          {
            card: {
              title: 'AES-256-GCM 加密 / 解密',
              href: '/tools/aes-encrypt-decrypt/',
              desc: '口令式 AES-256-GCM + PBKDF2(15 万次迭代、随机盐)——全程浏览器本地,自包含 salt:iv:ciphertext 载荷。',
            },
          },
        ],
      },
      {
        heading: '3. PBKDF2:把人类密码拉伸成机器密钥',
        blocks: [
          '密码是糟糕的密钥:熵低、复用、可猜。**PBKDF2-HMAC-SHA256** 负责拉伸——把密码与随机 16 字节盐一起哈希,再重复 15 万次以上。盐让彩虹表失效(相同密码产出不同密钥),迭代次数给攻击者的每次猜测征税。',
          'PBKDF2 救不了弱密码:15 万次迭代把单次猜测成本抬高约 2¹⁷ 倍,40 位的密码等效约 57 位工作量——依然可破。密钥拉伸买的是乘数,不是奇迹;密码本身必须扛起大部分熵。',
          { code: CODE_WEBCRYPTO },
          {
            card: {
              title: 'HMAC 生成器',
              href: '/tools/hmac-generator/',
              desc: 'PBKDF2 本质是迭代 15 万次的 HMAC-SHA256——亲手跑一遍这个底层原语:任意密钥与消息,输出 hex 或 base64。',
            },
          },
        ],
      },
      {
        heading: '4. 密钥与机密:以偏执狂的方式生成',
        blocks: [
          '任何被代码或用户依赖的机密都应来自**密码学安全 RNG**——`crypto.getRandomValues`,永远不是 `Math.random()`。用可预测 PRNG 生成的 API key 不是机密,是谜题。',
          { list: [
            '**API key / token**——至少 128 位(32 个十六进制字符),只用 CSPRNG。',
            '**加密口令**——长度胜过复杂度:5 个随机单词强过 10 个拧巴字符。',
            '**盐与 IV**——每次操作随机生成,与密文*一起存储*;它们不是机密,但必须唯一。',
          ] },
          {
            card: {
              title: '密钥生成器',
              href: '/tools/secret-key-generator/',
              desc: 'CSPRNG 生成的 API key 与 token(hex/base64)——你的安全假设悄悄依赖的那种随机性。',
            },
          },
          {
            card: {
              title: '密码生成器',
              href: '/tools/password-generator/',
              desc: '本地生成高熵密码与口令短语——不键入、不传输。',
            },
          },
        ],
      },
      {
        heading: '5. JWT:解码不等于验证',
        blocks: [
          'JWT 的结构是 base64url(header).base64url(payload).signature。任何人都能解码前两段——它们是*签名而非加密*。开发者常踩两个推论:绝不要往 JWT payload 里放机密(用户拿任意解码器就能读);服务端必须**先验签再信任任何 claim**,并钉死 `alg` 白名单——经典的 "alg: none" 与 RS256→HS256 混淆攻击,都从跳过这一步开始。',
          '客户端解码只用于*调试*:查看你手里 token 的过期时间、受众与 scope——验签永远放在服务端,密钥或公钥在哪里,验证就在哪里。',
          {
            card: {
              title: 'JWT 解码器',
              href: '/tools/jwt-decoder/',
              desc: '本地检视 header 与 payload,过期时间与 claims 可读化呈现——解码留在浏览器里,token 本来就在那里。',
            },
          },
        ],
      },
      {
        heading: '客户端加密清单',
        blocks: [
          { list: [
            '用 **AES-GCM**(或其他 AEAD 模式),绝不裸用 CBC/ECB。',
            '密钥派生用 **PBKDF2/Argon2 级**拉伸:随机 16 字节盐,≥10 万次迭代。',
            '一切机密出自 **crypto.getRandomValues**——审计安全路径上的每一个 `Math.random()`。',
            '每条消息随机 IV;salt:iv:ciphertext 一起传输。',
            'JWT 随便解码;**验签**只在持真实密钥、锁定算法白名单、未过期校验齐全的地方做。',
          ] },
        ],
      },
    ],
  },
  es: {
    lead: 'La arquitectura de privacidad más fuerte es aquella en la que el servidor nunca posee el texto en claro. WebCrypto, nativo del navegador, ofrece AES-256-GCM + PBKDF2 sin una sola dependencia — así encajan las piezas de verdad, y dónde se cortan los desarrolladores.',
    sections: [
      {
        heading: '1. ¿Por qué cifrar en el cliente? El argumento de conocimiento cero',
        blocks: [
          'Todo esquema de cifrado en servidor pide al usuario confiar en una promesa. El cifrado en cliente convierte la promesa en una *propiedad*: el texto en claro y las contraseñas nunca salen del dispositivo, así que una brecha en el servidor solo deja texto cifrado. Para notas, copias de seguridad, borradores de contrato y registros personales, es la diferencia entre «prometemos que no podemos leerlo» y «no hay nada que leer».',
          'La trampa: el navegador debe hacer criptografía real, no un XOR con una clave en hex. Para eso existe la Web Crypto API (`crypto.subtle`): una implementación nativa, de tiempo constante y con respaldo hardware que ninguna biblioteca en JS puro iguala en seguridad.',
        ],
      },
      {
        heading: '2. AES-256-GCM: cifrado con detector de mentiras',
        blocks: [
          'AES-GCM es **cifrado autenticado**: junto al texto cifrado produce una etiqueta de autenticación de 128 bits. Al descifrar, si se ha volteado un solo bit — o la contraseña es errónea — la operación falla ruidosamente en lugar de devolver basura plausible. Modos antiguos como CBC descifran datos manipulados sin protestar y dejan que tu aplicación descubra la corrupción por las malas.',
          'La regla que jamás debe romperse: **nunca reutilices un IV/nonce con la misma clave**. Los nonces GCM son de 96 bits, aleatorios por mensaje — con IVs aleatorios de 12 bytes, la probabilidad de colisión solo importa tras miles de millones de mensajes con una clave. Como PBKDF2 usa una sal aleatoria por cifrado (clave nueva cada vez), el problema desaparece por construcción.',
          {
            card: {
              title: 'Cifrar y descifrar AES-256-GCM',
              href: '/tools/aes-encrypt-decrypt/',
              desc: 'AES-256-GCM por contraseña con PBKDF2 (150k iteraciones, sal aleatoria) — todo en el navegador, payloads autocontenidos salt:iv:ciphertext.',
            },
          },
        ],
      },
      {
        heading: '3. PBKDF2: convertir contraseñas humanas en claves de máquina',
        blocks: [
          'Las contraseñas son claves terribles: poca entropía, reutilizadas, adivinables. **PBKDF2-HMAC-SHA256** las estira: hashea la contraseña con una sal aleatoria de 16 bytes y repite más de 150 000 veces. La sal anula las tablas rainbow (contraseñas idénticas producen claves distintas); las iteraciones gravan cada intento del atacante.',
          'Lo que PBKDF2 no puede arreglar es una contraseña débil: 150k iteraciones elevan el coste por intento ~2¹⁷ veces, convirtiendo una contraseña de 40 bits en ~57 bits de trabajo efectivo — aún crackeable. El estiramiento compra un multiplicador, no un milagro: la contraseña debe aportar la mayor parte de la entropía.',
          { code: CODE_WEBCRYPTO },
          {
            card: {
              title: 'Generador de HMAC',
              href: '/tools/hmac-generator/',
              desc: 'PBKDF2 es HMAC-SHA256 iterado 150 000 veces — ejecuta tú mismo la primitiva subyacente con cualquier clave y mensaje, salida en hex o base64.',
            },
          },
        ],
      },
      {
        heading: '4. Claves y secretos: genéralos como un paranoico',
        blocks: [
          'Cualquier secreto del que dependa tu código o tus usuarios debe salir de un **RNG criptográficamente seguro** — `crypto.getRandomValues`, jamás `Math.random()`. Una API key generada con un PRNG predecible no es un secreto: es un rompecabezas.',
          { list: [
            '**API keys / tokens** — 128 bits mínimo (32 caracteres hex), solo CSPRNG.',
            '**Contraseñas de cifrado** — la longitud vence a la complejidad: 5 palabras aleatorias superan a 10 caracteres retorcidos.',
            '**Sales e IVs** — aleatorios por operación, guardados *junto* al cifrado; no son secretos, pero deben ser únicos.',
          ] },
          {
            card: {
              title: 'Generador de claves secretas',
              href: '/tools/secret-key-generator/',
              desc: 'API keys y tokens generados por CSPRNG en hex/base64 — la aleatoriedad de la que dependen en silencio tus supuestos de seguridad.',
            },
          },
          {
            card: {
              title: 'Generador de contraseñas',
              href: '/tools/password-generator/',
              desc: 'Contraseñas y frases de alta entropía, generadas en local — nada se teclea, nada se transmite.',
            },
          },
        ],
      },
      {
        heading: '5. JWT: decodificar no es verificar',
        blocks: [
          'Un JWT es base64url(header).base64url(payload).firma. Cualquiera puede decodificar los dos primeros segmentos — están *firmados, no cifrados*. Dos consecuencias en las que caen los desarrolladores: nunca pongas secretos en el payload (tus usuarios lo leen con cualquier decodificador) y, en el servidor, **verifica la firma antes de confiar en un solo claim**, con la lista blanca de `alg` fijada — los clásicos ataques «alg: none» y la confusión RS256→HS256 empiezan saltándose ese paso.',
          'La decodificación en cliente es para *depurar*: inspecciona expiración, audiencia y scopes del token que recibiste — y verifica en el servidor, donde vive el secreto o la clave pública.',
          {
            card: {
              title: 'Decodificador JWT',
              href: '/tools/jwt-decoder/',
              desc: 'Inspecciona header y payload en local, con expiración y claims legibles — la decodificación se queda en el navegador, donde el token ya estaba.',
            },
          },
        ],
      },
      {
        heading: 'La lista del cifrado en cliente',
        blocks: [
          { list: [
            'Usa **AES-GCM** (u otro modo AEAD), nunca CBC/ECB en crudo.',
            'Deriva claves con estiramiento de clase **PBKDF2/Argon2**: sal aleatoria de 16 bytes, ≥100k iteraciones.',
            'Todo secreto desde **crypto.getRandomValues** — audita cada `Math.random()` en rutas de seguridad.',
            'IV aleatorio por mensaje; transmite salt:iv:ciphertext juntos.',
            'Decodifica JWTs libremente; **verifícalos** solo con la clave real, algoritmos en lista blanca y marcas de tiempo vigentes.',
          ] },
        ],
      },
    ],
  },
  de: {
    lead: 'Die stärkste Privacy-Architektur ist die, bei der der Server den Klartext nie besitzt. Das browser-native WebCrypto bringt AES-256-GCM + PBKDF2 ohne eine einzige Abhängigkeit — so passen die Teile wirklich zusammen, und wo sich Entwickler noch schneiden.',
    sections: [
      {
        heading: '1. Warum überhaupt clientseitig? Das Zero-Knowledge-Argument',
        blocks: [
          'Jede serverseitige Verschlüsselung verlangt vom Nutzer, einem Versprechen zu trauen. Clientseitige Verschlüsselung ersetzt das Versprechen durch eine *Eigenschaft*: Klartext und Passwörter verlassen das Gerät nie, ein Server-Einbruch erntet nur Chiffretext. Für Notizen, Backups, Vertragsentwürfe und persönliche Aufzeichnungen ist das der Unterschied zwischen „wir versprechen, es nicht lesen zu können" und „es gibt nichts zu lesen".',
          'Der Haken: Der Browser muss echte Kryptografie leisten, kein XOR mit einem Hex-Schlüssel. Dafür existiert die Web Crypto API (`crypto.subtle`) — eine native, konstantzeitige, hardwaregestützte Implementierung, die keine reine JS-Bibliothek sicherheitstechnisch erreicht.',
        ],
      },
      {
        heading: '2. AES-256-GCM: Verschlüsselung mit Lügendetektor',
        blocks: [
          'AES-GCM ist **authentifizierte Verschlüsselung**: Neben dem Chiffretext entsteht ein 128-Bit-Authentifizierungs-Tag. Wird bei der Entschlüsselung auch nur ein Bit gekippt — oder das Passwort ist falsch — schlägt die Operation laut fehl, statt plausiblen Datenmüll zurückzugeben. Ältere Modi wie CBC entschlüsseln manipulierte Daten munter weiter, und deine Anwendung entdeckt die Korruption auf die harte Tour.',
          'Die eine Regel, die nie brechen darf: **Niemals eine IV/einen Nonce mit demselben Schlüssel wiederverwenden**. GCM-Nonces sind 96 Bit, pro Nachricht zufällig — bei zufälligen 12-Byte-IVs wird die Kollisionswahrscheinlichkeit erst nach Milliarden Nachrichten pro Schlüssel relevant. Da PBKDF2 pro Verschlüsselung ein frisches Salt nutzt (also jedes Mal ein neuer Schlüssel entsteht), verschwindet das Problem konstruktionsbedingt.',
          {
            card: {
              title: 'AES-256-GCM ver- & entschlüsseln',
              href: '/tools/aes-encrypt-decrypt/',
              desc: 'Passwortbasiertes AES-256-GCM mit PBKDF2 (150k Iterationen, Zufalls-Salt) — komplett im Browser, in sich geschlossene salt:iv:ciphertext-Payloads.',
            },
          },
        ],
      },
      {
        heading: '3. PBKDF2: Menschliche Passwörter zu Maschinenschlüsseln strecken',
        blocks: [
          'Passwörter sind miserable Schlüssel: wenig Entropie, wiederverwendet, erratbar. **PBKDF2-HMAC-SHA256** streckt sie — Passwort plus zufälliges 16-Byte-Salt hashen und über 150 000-mal wiederholen. Das Salt killt Rainbow Tables (gleiche Passwörter ergeben unterschiedliche Schlüssel); die Iterationen besteuern jeden Rateversuch des Angreifers.',
          'Was PBKDF2 nicht retten kann: ein schwaches Passwort. 150k Iterationen verteuern jeden Versuch um etwa 2¹⁷ — ein 40-Bit-Passwort wird zu ~57 Bit effektiver Arbeit, immer noch knackbar. Stretching kauft einen Multiplikator, kein Wunder; das Passwort selbst muss den Großteil der Entropie tragen.',
          { code: CODE_WEBCRYPTO },
          {
            card: {
              title: 'HMAC-Generator',
              href: '/tools/hmac-generator/',
              desc: 'PBKDF2 ist 150 000-mal iteriertes HMAC-SHA256 — führe das zugrunde liegende Primitiv selbst aus, mit beliebigem Schlüssel und Message, Ausgabe in Hex oder Base64.',
            },
          },
        ],
      },
      {
        heading: '4. Schlüssel und Secrets: Generiere sie wie ein Paranoiker',
        blocks: [
          'Jedes Secret, auf das dein Code oder deine Nutzer bauen, gehört in einen **kryptografisch sicheren RNG** — `crypto.getRandomValues`, niemals `Math.random()`. Ein API-Key aus einem vorhersagbaren PRNG ist kein Geheimnis; er ist ein Rätsel.',
          { list: [
            '**API-Keys / Tokens** — mindestens 128 Bit (32 Hex-Zeichen), nur CSPRNG.',
            '**Verschlüsselungs-Passwörter** — Länge schlägt Komplexität: 5 Zufallswörter schlagen 10 verrenkte Zeichen.',
            '**Salts und IVs** — pro Operation zufällig, *zusammen mit* dem Chiffretext gespeichert; sie sind keine Geheimnisse, müssen aber einzigartig sein.',
          ] },
          {
            card: {
              title: 'Secret-Key-Generator',
              href: '/tools/secret-key-generator/',
              desc: 'Per CSPRNG erzeugte API-Keys und Tokens in hex/base64 — die Zufälligkeit, von der deine Sicherheitsannahmen still abhängen.',
            },
          },
          {
            card: {
              title: 'Passwort-Generator',
              href: '/tools/password-generator/',
              desc: 'Hoch-entropische Passwörter und Phrasen, lokal erzeugt — nichts getippt, nichts übertragen.',
            },
          },
        ],
      },
      {
        heading: '5. JWTs: Dekodieren ist nicht Verifizieren',
        blocks: [
          'Ein JWT ist base64url(header).base64url(payload).signatur. Jeder kann die ersten zwei Segmente dekodieren — sie sind *signiert, nicht verschlüsselt*. Zwei Konsequenzen, über die Entwickler stolpern: Nie Secrets ins JWT-Payload legen (deine Nutzer lesen es mit jedem Decoder), und auf dem Server **die Signatur verifizieren, bevor man auch nur einem Claim traut** — mit gepinnter `alg`-Whitelist; die klassischen „alg: none"- und RS256-zu-HS256-Verwechslungsangriffe beginnen beide mit dem Überspringen dieses Schritts.',
          'Clientseitiges Dekodieren dient dem *Debugging*: Ablaufzeit, Audience und Scopes des erhaltenen Tokens inspizieren — verifiziert wird serverseitig, wo das Secret oder der Public Key liegt.',
          {
            card: {
              title: 'JWT-Decoder',
              href: '/tools/jwt-decoder/',
              desc: 'Header und Payload lokal inspizieren, mit lesbarer Ablaufzeit und Claims — das Dekodieren bleibt im Browser, wo das Token ohnehin war.',
            },
          },
        ],
      },
      {
        heading: 'Die Client-Side-Checkliste',
        blocks: [
          { list: [
            '**AES-GCM** (oder einen anderen AEAD-Modus) verwenden, niemals rohes CBC/ECB.',
            'Schlüssel mit **PBKDF2-/Argon2-Klasse** strecken: zufälliges 16-Byte-Salt, ≥100k Iterationen.',
            'Jedes Secret aus **crypto.getRandomValues** — auditiere jedes `Math.random()` in Sicherheitspfaden.',
            'Zufällige IV pro Nachricht; salt:iv:ciphertext gemeinsam übertragen.',
            'JWTs frei dekodieren; **verifiziert** wird nur mit echtem Schlüssel, Allowlist-Algorithmen und gültigen Zeitstempeln.',
          ] },
        ],
      },
    ],
  },
}
