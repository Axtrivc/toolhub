import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { FindReplaceClient } from '@/components/texttools/batchTextTools'
import { FindAndReplaceContent } from './content'

export const metadata: Metadata = buildToolMetadata('find-and-replace')

export default function Page() {
  const tool = getTool('find-and-replace')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('find-and-replace')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <FindReplaceClient />
        <FindAndReplaceContent />
      </ToolLayout>
    </>
  )
}
