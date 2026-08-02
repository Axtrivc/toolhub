import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { JwtDecoderClient } from '@/components/devtools/JwtDecoderClient'
import { JwtDecoderContent } from './content'

export const metadata: Metadata = buildToolMetadata('jwt-decoder')

export default function Page() {
  const tool = getTool('jwt-decoder')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('jwt-decoder')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <JwtDecoderClient />
        <JwtDecoderContent />
      </ToolLayout>
    </>
  )
}
