import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { URLCodecTool } from '@/components/devtools/encoderTools'
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
        <URLCodecTool initialMode="decode" slug="url-decoder" />
        <URLdecoderContent />
      </ToolLayout>
    </>
  )
}
