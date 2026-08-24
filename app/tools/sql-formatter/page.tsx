import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SqlFormatterClient } from '@/components/devtools/SqlFormatterClient'
import { SqlFormatterContent } from './content'

export const metadata: Metadata = buildToolMetadata('sql-formatter')

export default function Page() {
  const tool = getTool('sql-formatter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('sql-formatter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SqlFormatterClient />
        <SqlFormatterContent />
      </ToolLayout>
    </>
  )
}
