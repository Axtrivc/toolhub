import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
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
      <ToolLayout tool={tool} l10n={getToolL10nRecord('text-size-estimator')}>
        <TextSizeEstimatorClient />
        <TextSizeEstimatorContent />
      </ToolLayout>
    </>
  )
}
