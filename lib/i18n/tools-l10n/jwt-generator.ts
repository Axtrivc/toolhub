/**
 * jwt-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JwtGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['generar tokens HS256 de prueba en local', 'depurar la estructura header/payload de un JWT', 'producir tokens rápidos para integrar con el backend', 'comprobar que el algoritmo coincide con la clave'],
    faqs: [
      { q: '¿Qué algoritmos están soportados?', a: 'HS256, HS384 y HS512 — la familia HMAC, firmados en tu navegador con WebCrypto. RS256/ES256 exigen una clave privada que jamás debe vivir en código frontend, así que la firma asimétrica pertenece al servidor o a la línea de comandos.' },
      { q: '¿Puedo generar token sin secreto?', a: 'Sí: deja el secreto vacío y obtienes la vista previa sin firma, base64url(header).base64url(payload) con el punto final. Sirve para ver exactamente qué recibirá un verificador, pero ningún sistema de autenticación lo aceptará.' },
      { q: '¿Es seguro firmar en el navegador?', a: 'Solo para pruebas y aprendizaje. Un secreto en una página del navegador lo ve cualquiera con devtools, y acabaría dentro del bundle de producción. Prototipa payloads y depura verificadores aquí; la firma real, en el servidor.' },
      { q: '¿Añade algo a mi header?', a: 'No: el header es exactamente el JSON que escribas; el valor por defecto incluye typ y alg, pero no se inyecta nada. Algunos verificadores exigen que alg coincida con la clave — mantenlos coherentes.' },
    ],
    ui: {
      'algErr': 'Aquí solo se admite HS256/384/512',
      'copyToken': 'Copiar token',
      'headerLabel': 'Cabecera (JSON)',
      'insecure': 'WebCrypto requiere HTTPS o localhost',
      'note': '🔑 Solo para pruebas: los secretos HS* viven aquí en el cliente; nunca los metas en el código del frontend. Para RS256/ES256 usa una librería de servidor — la firma asimétrica exige mantener la clave privada en privado.',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': 'Secreto de firma (vacío = vista previa sin firmar)',
      'tokenLabel': 'Token firmado',
    },
  },
  de: {
    useCases: ['HS256-Testtokens lokal erzeugen', 'die Header/Payload-Struktur eines JWT debuggen', 'schnell Tokens für die Backend-Integration erzeugen', 'prüfen, ob Algorithmus und Schlüssel zusammenpassen'],
    faqs: [
      { q: 'Welche Algorithmen werden unterstützt?', a: 'HS256, HS384 und HS512 — die HMAC-Familie, im Browser per WebCrypto signiert. RS256/ES256 brauchen einen privaten Schlüssel, der nie in Frontend-Code gehören darf; asymmetrisches Signieren gehört auf Server oder CLI.' },
      { q: 'Geht es auch ohne Secret?', a: 'Ja — lass das Secret leer und du bekommst die unsignierte Vorschau: base64url(header).base64url(payload) mit abschließendem Punkt. Praktisch, um zu sehen, was ein Verifier erhält — akzeptiert wird es von keinem Auth-System.' },
      { q: 'Ist Signieren im Browser sicher?', a: 'Nur für Tests und Lernen. Ein Secret im Browser sieht jeder mit Devtools, und es landete im Produktions-Bundle. Prototypisiere Payloads und debugge Verifier hier — Produktivsignierung bleibt serverseitig.' },
      { q: 'Wird meinem Header etwas hinzugefügt?', a: 'Nein — der Header ist exakt dein JSON; der Default enthält typ und alg, injiziert wird nichts. Manche Verifier bestehen auf Konsistenz zwischen alg und Schlüssel — halte beides konsistent.' },
    ],
    ui: {
      'algErr': 'Hier werden nur HS256/384/512 unterstützt',
      'copyToken': 'Token kopieren',
      'headerLabel': 'Header (JSON)',
      'insecure': 'WebCrypto erfordert HTTPS oder localhost',
      'note': '🔑 Nur zum Testen: HS*-Secrets bleiben hier im Browser; niemals in Frontend-Code shippen. RS256/ES256 über eine Server-Bibliothek — asymmetrisches Signieren braucht den privaten Schlüssel privat.',
      'payloadLabel': 'Payload (JSON)',
      'secretLabel': 'Signatur-Secret (leer = unsignierte Vorschau)',
      'tokenLabel': 'Signiertes Token',
    },
  },
}
