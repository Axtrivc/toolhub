/**
 * jwt-decoder 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const jwtDecoderL10n: ToolL10n = {
  zh: {
    useCases: ['查看 JWT 的 header 和 payload 内容', '确认令牌是否已过期(exp 字段)', '调试登录/鉴权流程中的令牌', '在不连服务器的情况下本地解码令牌'],
    faqs: [
      { q: '在这里粘贴真实 JWT 安全吗?', a: '解码是安全的——一切都在浏览器本地通过内置 atob 函数完成,令牌不会发往任何服务器。但要注意:JWT 是持有者凭证,任何拿到它的人在过期前都能冒充你。避免把真实访问令牌贴到截图、聊天或公开场合。如果只是想了解解码效果,点「加载示例」按钮即可。' },
      { q: '为什么这个工具不能验证签名?', a: '验证签名需要密钥(HS256 等 HMAC 算法)或公钥(RS256/ES256 等 RSA/ECDSA 算法)。它们由签发服务器持有,不在令牌里。本工具只解码 header 和 payload——没有那把密钥,无法证明令牌是真实或未被篡改的。' },
      { q: 'iat、exp、sub 这些字段是什么意思?', a: 'iat(签发时间)和 exp(过期时间)是秒级 Unix 时间戳。sub(主体)标识令牌的归属对象,通常是用户 ID。其他常见字段包括 iss(签发方)、aud(受众),以及你的应用可能添加的角色/邮箱字段。如果 exp 已过去,令牌即过期,服务器应拒绝它。' },
    ],
  },
  es: {
    useCases: ['inspeccionar el header y el payload de un JWT', 'comprobar si un token ha expirado (campo exp)', 'depurar tokens en flujos de inicio de sesión y autenticación', 'decodificar tokens localmente sin tocar el servidor'],
    faqs: [
      { q: '¿Es seguro pegar mi JWT real aquí?', a: 'Sí para decodificar — todo se ejecuta localmente en tu navegador con la función atob incorporada, así que tu token nunca llega a un servidor. Dicho esto, un JWT es una credencial al portador: quien la tenga puede suplantarte hasta que expire. Evita pegar tokens reales en capturas, chats o lugares públicos. Usa el botón «Cargar ejemplo» si solo quieres ver cómo funciona la decodificación.' },
      { q: '¿Por qué esta herramienta no puede verificar la firma?', a: 'Verificar una firma requiere el secreto (para algoritmos HMAC como HS256) o la clave pública (para RSA/ECDSA como RS256/ES256). Esos los tiene el servidor emisor, no van dentro del token. Esta herramienta solo decodifica el header y el payload — no puede probar que el token sea auténtico o esté sin modificar sin esa clave.' },
      { q: '¿Qué significan los claims iat, exp y sub?', a: 'iat (issued-at) y exp (expiration) son marcas de tiempo Unix en segundos. sub (subject) identifica para quién es el token, normalmente un ID de usuario. Otros claims comunes incluyen iss (emisor), aud (audiencia) y campos de rol/email que tu app añada. Si exp está en el pasado, el token expiró y los servidores deberían rechazarlo.' },
    ],
  },
  de: {
    useCases: ['Header und Payload eines JWT einsehen', 'prüfen, ob ein Token abgelaufen ist (Feld exp)', 'Tokens in Login- und Authentifizierungs­abläufen debuggen', 'Tokens lokal decodieren, ohne den Server zu berühren'],
    faqs: [
      { q: 'Ist es sicher, mein echtes JWT hier einzufügen?', a: 'Ja zum Decodieren — alles läuft lokal in deinem Browser über die eingebaute atob-Funktion, dein Token erreicht nie einen Server. Aber beachte: Ein JWT ist ein Bearer-Credential — wer es hat, kann sich bis zum Ablauf als du ausgeben. Vermeide es, echte Access-Tokens in Screenshots, Chats oder öffentliche Orte einzufügen. Nutze den Button „Beispiel laden", wenn du nur sehen willst, wie die Decodierung funktioniert.' },
      { q: 'Warum kann dieses Tool die Signatur nicht verifizieren?', a: 'Die Verifikation der Signatur erfordert das Secret (bei HMAC-Algorithmen wie HS256) oder den öffentlichen Schlüssel (bei RSA/ECDSA wie RS256/ES256). Diese hält der ausstellende Server, sie sind nicht im Token enthalten. Dieses Tool decodiert nur Header und Payload — ohne diesen Schlüssel kann es nicht beweisen, dass das Token authentisch oder unverändert ist.' },
      { q: 'Was bedeuten die Claims iat, exp und sub?', a: 'iat (issued-at) und exp (expiration) sind Unix-Zeitstempel in Sekunden. sub (subject) identifiziert, für wen das Token ist, meist eine Benutzer-ID. Weitere häufige Claims sind iss (Aussteller), aud (Zielgruppe) und Rollen-/E-Mail-Felder, die deine App hinzufügt. Wenn exp in der Vergangenheit liegt, ist das Token abgelaufen und Server sollten es ablehnen.' },
    ],
  },
}
