import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { UUIDGeneratorClient } from '@/components/generators/batchGenerators'
import { UUIDGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('uuid-generator')

export default function Page() {
  const tool = getTool('uuid-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('uuid-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <UUIDGeneratorClient />
        <UUIDGeneratorContent />
      </ToolLayout>
    </>
  )
}
