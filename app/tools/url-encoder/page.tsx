import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { URLencoderClient } from '@/components/devtools/batchDevTools'
import { URLencoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('url-encoder')

export default function Page() {
  const tool = getTool('url-encoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('url-encoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <URLencoderClient />
        <URLencoderContent />
      </ToolLayout>
    </>
  )
}
