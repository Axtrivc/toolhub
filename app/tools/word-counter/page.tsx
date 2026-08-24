import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WordCounterClient } from '@/components/tools/WordCounterClient'
import { WordCounterContent } from './content'

export const metadata: Metadata = buildToolMetadata('word-counter')

export default function WordCounterPage() {
  const tool = getTool('word-counter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('word-counter')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }}
      />
      <ToolLayout tool={tool}>
        <WordCounterClient />
        <WordCounterContent />
      </ToolLayout>
    </>
  )
}
