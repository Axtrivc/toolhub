/**
 * 站点级共享常量(构建期与客户端组件均可安全 import)。
 *
 * SITE_URL 原本定义在 next.config.ts,但 next.config 是构建期配置,
 * 客户端组件(AdSlot / EmbedTool)不应 import 它,故抽到这里。
 * next.config.ts 从此文件 re-export,保持既有引用兼容。
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolhub.axtrivc.com'
