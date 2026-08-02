import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RegexTesterClient } from '@/components/devtools/RegexTesterClient'
import { RegexTesterContent } from './content'

export const metadata: Metadata = buildToolMetadata('regex-tester')

export default function Page() {
  const tool = getTool('regex-tester')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('regex-tester')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RegexTesterClient />
        <RegexTesterContent />
      </ToolLayout>
    </>
  )
}
