import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { URLdecoderClient } from '@/components/devtools/batchDevTools'
import { URLdecoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('url-decoder')

export default function Page() {
  const tool = getTool('url-decoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('url-decoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <URLdecoderClient />
        <URLdecoderContent />
      </ToolLayout>
    </>
  )
}
