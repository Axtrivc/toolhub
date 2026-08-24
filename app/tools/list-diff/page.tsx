import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ListDiffClient } from '@/components/texttools/ListDiffClient'
import { ListDiffContent } from './content'

export const metadata: Metadata = buildToolMetadata('list-diff')

export default function Page() {
  const tool = getTool('list-diff')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('list-diff')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ListDiffClient />
        <ListDiffContent />
      </ToolLayout>
    </>
  )
}
