/**
 * 站点级共享常量(构建期与客户端组件均可安全 import)。
 *
 * SITE_URL 原本定义在 next.config.ts,但 next.config 是构建期配置,
 * 客户端组件(AdSlot / EmbedTool)不应 import 它,故抽到这里。
 * next.config.ts 从此文件 re-export,保持既有引用兼容。
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolhub.axtrivc.com'

/**
 * 站名(客户端安全):Header/Footer 等 'use client' 组件请从这里取,
 * 不要 import '@/lib/seo' —— seo.ts 是服务端 metadata 助手,静态引入
 * 工具注册表与 FAQ/多语 l10n 包,会把它们全拖进全站共享客户端 chunk
 * (历史问题:每页因此多载 ~1MB JS)。
 */
export const SITE_NAME = 'ToolHub'
