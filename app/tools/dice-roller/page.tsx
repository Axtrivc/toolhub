import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DiceRollerClient } from '@/components/tools/batch14FunTools'
import { DiceRollerContent } from './content'

export const metadata: Metadata = buildToolMetadata('dice-roller')

export default function DiceRollerPage() {
  const tool = getTool('dice-roller')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('dice-roller')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DiceRollerClient />
        <DiceRollerContent />
      </ToolLayout>
    </>
  )
}
