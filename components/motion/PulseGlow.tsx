'use client'

import type { ReactNode } from 'react'

/** Keep result wrappers stable while the value updates. */
interface ResultProps {
  children: ReactNode
  className?: string
}

export function PulseGlow({ children, className }: ResultProps & { trigger: string | number | null | undefined }) {
  return <div className={className}>{children}</div>
}

export function PulseGlowKeyed({ children, className }: ResultProps & { triggerKey: number }) {
  return <div className={className}>{children}</div>
}
