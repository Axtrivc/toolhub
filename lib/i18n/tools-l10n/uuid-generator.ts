/**
 * uuid-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const uuidGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'copyAll': '复制全部',
      'generate': '🎲 生成 UUID',
      'howMany': '生成个数',
      'note': '🆔 使用 Web Crypto API 生成 RFC 4122 v4 UUID。用于数据库、会话和分布式系统的唯一 ID。',
    },
    useCases: ['为数据库生成唯一主键', '创建会话令牌或 API 请求 ID', '给上传的文件生成唯一文件名', '在分布式系统中标识设备、用户或事件'],
    faqs: [
      { q: 'UUID 真的唯一吗?', a: '从实用角度来说,是的。两个随机 v4 UUID 碰撞的概率约为 1/2.7 × 10^36。你需要每秒生成数十亿个、持续数千年,才可能看到一次碰撞。' },
    ],
  },
  es: {
    ui: {
      'copyAll': 'Copiar todo',
      'generate': '🎲 Generar UUIDs',
      'howMany': 'Cuántos',
      'note': '🆔 Genera UUID v4 RFC 4122 con la Web Crypto API. Se usan como IDs únicos en bases de datos, sesiones y sistemas distribuidos.',
    },
    useCases: ['generar claves primarias únicas para bases de datos', 'crear tokens de sesión o IDs de petición para APIs', 'producir nombres de archivo únicos para contenido subido', 'identificar dispositivos, usuarios o eventos en sistemas distribuidos'],
    faqs: [
      { q: '¿Los UUID son realmente únicos?', a: 'Para todos los efectos prácticos, sí. La probabilidad de que dos UUID v4 aleatorios colisionen es de unas 1 en 2,7 × 10^36. Tendrías que generar miles de millones por segundo durante milenios para ver una colisión.' },
    ],
  },
  de: {
    ui: {
      'copyAll': 'Alle kopieren',
      'generate': '🎲 UUIDs erzeugen',
      'howMany': 'Wie viele',
      'note': '🆔 Erzeugt RFC-4122-v4-UUIDs mit der Web Crypto API. Dienen als eindeutige IDs in Datenbanken, Sessions und verteilten Systemen.',
    },
    useCases: ['eindeutige Primärschlüssel für Datenbanken erzeugen', 'Session-Tokens oder API-Request-IDs erstellen', 'eindeutige Dateinamen für Uploads erzeugen', 'Geräte, Benutzer oder Ereignisse in verteilten Systemen kennzeichnen'],
    faqs: [
      { q: 'Sind UUIDs wirklich eindeutig?', a: 'Für alle praktischen Zwecke: ja. Die Wahrscheinlichkeit einer Kollision zwischen zwei zufälligen v4-UUIDs liegt bei etwa 1 zu 2,7 × 10^36. Du müsstest Milliarden pro Sekunde über Jahrtausende hinweg erzeugen, um eine Kollision zu sehen.' },
    ],
  },
}
