'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

export interface AnimatedToolCardProps {
  href: string
  title?: string
  ariaLabel?: string
  variant?: 'default' | 'featured'
  badge?: ReactNode
  index?: number
  children: ReactNode
}

/** SSR-visible cards shared by tool recommendations and blog articles. */
export function AnimatedToolCard({ href, title, ariaLabel, variant, badge, children }: AnimatedToolCardProps) {
  return (
    <Link
      href={href}
      title={title}
      aria-label={ariaLabel}
      className={`group relative flex h-full min-w-0 flex-col rounded-xl border border-hairline p-5 ${variant === 'featured' ? 'bg-surface-soft' : 'bg-canvas'}`}
    >
      {badge}
      {children}
    </Link>
  )
}

export function StaggerGroup({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={className}>{children}</div>
}

export { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
