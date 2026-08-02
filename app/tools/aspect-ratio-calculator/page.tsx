import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { AspectRatioClient } from '@/components/webtools/AspectRatioClient'
import { AspectRatioContent } from './content'

export const metadata: Metadata = buildToolMetadata('aspect-ratio-calculator')

export default function Page() {
  const tool = getTool('aspect-ratio-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('aspect-ratio-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <AspectRatioClient />
        <AspectRatioContent />
      </ToolLayout>
    </>
  )
}
