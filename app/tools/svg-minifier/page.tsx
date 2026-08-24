import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SvgMinifierClient } from '@/components/webtools/SvgMinifierClient'
import { SvgMinifierContent } from './content'

export const metadata: Metadata = buildToolMetadata('svg-minifier')

export default function Page() {
  const tool = getTool('svg-minifier')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('svg-minifier')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SvgMinifierClient />
        <SvgMinifierContent />
      </ToolLayout>
    </>
  )
}
