'use client'

import { EncoderDecoderTool } from '../tools/EncoderDecoderTool'

/**
 * 编码/解码双向工具集中定义(Base64 / URL / HTML)
 *
 * 每个工具 = 一个 <EncoderDecoderTool> 实例,内置 Mode Toggle (Encode ↔ Decode)。
 * pSEO 路由与 SEO metadata 由各自 page.tsx 独立保留;本文件只负责把对立的两个方向
 * 统一成一个可切换方向的组件,从 encode 入口一键切 decode(反之亦然)。
 *
 * transform 函数从原 batchDevTools.tsx 原样迁移(UTF-8 安全的 Base64、HTML textarea 反转义等)。
 */

// ── Base64 编解码 ──
export function Base64CodecTool({ initialMode = 'encode', slug = 'base64-encoder' }: { initialMode?: 'encode' | 'decode'; slug?: string }) {
  return (
    <EncoderDecoderTool
      initialMode={initialMode}
      slug={slug}
      encode={{
        inputLabel: 'Text to encode',
        outputLabel: 'Base64',
        defaultInput: 'Hello World',
        transform: (t) => {
          try {
            const bytes = new TextEncoder().encode(t)
            let s = ''
            for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i])
            return btoa(s)
          } catch {
            return '⚠️ Cannot encode'
          }
        },
        note: '🔐 Base64 encodes binary data as text. Common in emails, data URIs, and APIs. Note: it is NOT encryption.',
      }}
      decode={{
        inputLabel: 'Base64 to decode',
        outputLabel: 'Decoded text',
        defaultInput: 'SGVsbG8gV29ybGQ=',
        transform: (t) => {
          try {
            const bin = atob(t.replace(/\s+/g, ''))
            const bytes = new Uint8Array(bin.length)
            for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
            return new TextDecoder().decode(bytes)
          } catch {
            return '⚠️ Invalid Base64'
          }
        },
        note: '🔓 Paste valid Base64 to decode. Handles UTF-8 properly.',
      }}
    />
  )
}

// ── URL 编解码 ──
export function URLCodecTool({ initialMode = 'encode', slug = 'url-encoder' }: { initialMode?: 'encode' | 'decode'; slug?: string }) {
  return (
    <EncoderDecoderTool
      initialMode={initialMode}
      slug={slug}
      encode={{
        inputLabel: 'Text to encode',
        outputLabel: 'URL-encoded',
        defaultInput: 'hello world & friends?',
        transform: (t) => encodeURIComponent(t),
        note: '🔗 Encodes special characters for safe use in URLs. Spaces become %20, & becomes %26.',
      }}
      decode={{
        inputLabel: 'URL-encoded text',
        outputLabel: 'Decoded',
        defaultInput: 'hello%20world%20%26%20friends%3F',
        transform: (t) => {
          try {
            return decodeURIComponent(t)
          } catch {
            return '⚠️ Invalid'
          }
        },
        note: '🔗 Decodes %20 back to spaces, %26 back to &, etc.',
      }}
    />
  )
}

// ── HTML 转义/反转义 ──
export function HTMLEscapeTool({ initialMode = 'encode', slug = 'html-escape' }: { initialMode?: 'encode' | 'decode'; slug?: string }) {
  return (
    <EncoderDecoderTool
      initialMode={initialMode}
      slug={slug}
      encode={{
        inputLabel: 'Text or HTML',
        outputLabel: 'Escaped HTML',
        defaultInput: '<a href="x">Tom & Jerry</a>',
        transform: (t) =>
          t
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;'),
        note: '🌐 Escapes & < > " and \'. Use before inserting user input into HTML to prevent XSS.',
      }}
      decode={{
        inputLabel: 'Escaped HTML',
        outputLabel: 'Unescaped text',
        defaultInput: '&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&lt;/a&gt;',
        transform: (t) => {
          const el = document.createElement('textarea')
          el.innerHTML = t
          return el.value
        },
        note: '🌐 Reverses HTML entities back to characters. Safe — uses a detached textarea element.',
      }}
    />
  )
}
