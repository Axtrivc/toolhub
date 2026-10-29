const rawClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

/** 仅接受 AdSense 的真实客户端格式；示例值和位置名都不会激活广告。 */
export const ADSENSE_CLIENT = rawClient && /^ca-pub-\d+$/.test(rawClient) ? rawClient : undefined

const SLOT_IDS = {
  home: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME,
  toolTop: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_TOP,
  toolInContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_IN_CONTENT,
  toolMid: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_MID,
  toolBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_BOTTOM,
} as const

function numericSlot(value: string | undefined): string | undefined {
  return value && /^\d+$/.test(value) ? value : undefined
}

/** 位置名用于版式与统计，真实数字广告单元 ID 只来自部署环境。 */
export function getAdSlotId(placement: string): string | undefined {
  if (placement === 'homepage-mid') return numericSlot(SLOT_IDS.home)
  if (placement.endsWith('-in-content')) return numericSlot(SLOT_IDS.toolInContent)
  if (placement.endsWith('-top')) return numericSlot(SLOT_IDS.toolTop)
  if (placement.endsWith('-mid')) return numericSlot(SLOT_IDS.toolMid)
  if (placement.endsWith('-bottom')) return numericSlot(SLOT_IDS.toolBottom)
  return undefined
}

export const ADSENSE_ACTIVE = Boolean(
  ADSENSE_CLIENT && Object.values(SLOT_IDS).some((value) => numericSlot(value)),
)
