import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { GptTokenCounterClient } from '@/components/devtools/GptTokenCounterClient'
import { GptTokenCounterClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('gpt-token-counter')

export default function Page() {
  const tool = getTool('gpt-token-counter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('gpt-token-counter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <GptTokenCounterClient />
        <GptTokenCounterClientContent />
      </ToolLayout>
    </>
  )
}
