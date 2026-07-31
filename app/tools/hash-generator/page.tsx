import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HashGeneratorClient } from '@/components/texttools/batch5TextTools'
import { HashGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('hash-generator')

export default function Page() {
  const tool = getTool('hash-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('hash-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HashGeneratorClient />
        <HashGeneratorContent />
      </ToolLayout>
    </>
  )
}
