import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ReadingLevelCheckerClient } from '@/components/tools/batch12bTools'
import { ReadingLevelCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('reading-level-checker')

export default function ReadingLevelCheckerPage() {
  const tool = getTool('reading-level-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('reading-level-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ReadingLevelCheckerClient />
        <ReadingLevelCheckerContent />
      </ToolLayout>
    </>
  )
}
