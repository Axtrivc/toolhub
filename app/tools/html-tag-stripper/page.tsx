import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HTMLTagStripperClient } from '@/components/texttools/batch4TextTools'
import { HTMLTagStripperContent } from './content'

export const metadata: Metadata = buildToolMetadata('html-tag-stripper')

export default function Page() {
  const tool = getTool('html-tag-stripper')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('html-tag-stripper')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HTMLTagStripperClient />
        <HTMLTagStripperContent />
      </ToolLayout>
    </>
  )
}
