import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SvgToImageClient } from '@/components/tools/SvgToImageClient'
import { SvgToImageContent } from './content'

export const metadata: Metadata = buildToolMetadata('svg-to-image')

export default function Page() {
  const tool = getTool('svg-to-image')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('svg-to-image')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SvgToImageClient />
        <SvgToImageContent />
      </ToolLayout>
    </>
  )
}
