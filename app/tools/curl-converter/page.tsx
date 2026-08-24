import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CurlConverterClient } from '@/components/devtools/CurlConverterClient'
import { CurlConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('curl-converter')

export default function Page() {
  const tool = getTool('curl-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('curl-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CurlConverterClient />
        <CurlConverterContent />
      </ToolLayout>
    </>
  )
}
