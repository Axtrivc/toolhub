import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SlugToTitleClient } from '@/components/texttools/batch5TextTools'
import { SlugToTitleContent } from './content'

export const metadata: Metadata = buildToolMetadata('slug-to-title')

export default function Page() {
  const tool = getTool('slug-to-title')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('slug-to-title')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SlugToTitleClient />
        <SlugToTitleContent />
      </ToolLayout>
    </>
  )
}
