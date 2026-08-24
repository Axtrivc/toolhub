import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CharacterFrequencyClient } from '@/components/texttools/batch4TextTools'
import { CharacterFrequencyContent } from './content'

export const metadata: Metadata = buildToolMetadata('character-frequency')

export default function Page() {
  const tool = getTool('character-frequency')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('character-frequency')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CharacterFrequencyClient />
        <CharacterFrequencyContent />
      </ToolLayout>
    </>
  )
}
