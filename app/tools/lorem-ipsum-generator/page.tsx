import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { LoremIpsumGeneratorClient } from '@/components/generators/batchGenerators'
import { LoremIpsumGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('lorem-ipsum-generator')

export default function Page() {
  const tool = getTool('lorem-ipsum-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('lorem-ipsum-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <LoremIpsumGeneratorClient />
        <LoremIpsumGeneratorContent />
      </ToolLayout>
    </>
  )
}
