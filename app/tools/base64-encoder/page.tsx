import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { Base64CodecTool } from '@/components/devtools/encoderTools'
import { Base64EncoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('base64-encoder')

export default function Page() {
  const tool = getTool('base64-encoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('base64-encoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <Base64CodecTool initialMode="encode" />
        <Base64EncoderContent />
      </ToolLayout>
    </>
  )
}
