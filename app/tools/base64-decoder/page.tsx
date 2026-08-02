import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { Base64CodecTool } from '@/components/devtools/encoderTools'
import { Base64DecoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('base64-decoder')

export default function Page() {
  const tool = getTool('base64-decoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('base64-decoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <Base64CodecTool initialMode="decode" />
        <Base64DecoderContent />
      </ToolLayout>
    </>
  )
}
