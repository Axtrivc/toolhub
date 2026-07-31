import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TitleCaseConverterClient } from '@/components/texttools/batchTextTools'
import { TitleCaseConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('title-case-converter')

export default function Page() {
  const tool = getTool('title-case-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('title-case-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TitleCaseConverterClient />
        <TitleCaseConverterContent />
      </ToolLayout>
    </>
  )
}
