import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DownloadTimeCalculatorClient } from '@/components/calculators/batch30Calculators'
import { DownloadTimeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('download-time-calculator')

export default function DownloadTimeCalculatorPage() {
  const tool = getTool('download-time-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('download-time-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('download-time-calculator')}>
        <DownloadTimeCalculatorClient />
        <DownloadTimeCalculatorContent />
      </ToolLayout>
    </>
  )
}
