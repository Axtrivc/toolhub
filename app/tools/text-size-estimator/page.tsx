import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TextSizeEstimatorClient } from '@/components/texttools/batch4TextTools'
import { TextSizeEstimatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('text-size-estimator')

export default function Page() {
  const tool = getTool('text-size-estimator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('text-size-estimator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TextSizeEstimatorClient />
        <TextSizeEstimatorContent />
      </ToolLayout>
    </>
  )
}
