import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PoolVolumeCalculatorClient } from '@/components/calculators/batch29Calculators'
import { PoolVolumeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('pool-volume-calculator')

export default function PoolVolumeCalculatorPage() {
  const tool = getTool('pool-volume-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('pool-volume-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('pool-volume-calculator')}>
        <PoolVolumeCalculatorClient />
        <PoolVolumeCalculatorContent />
      </ToolLayout>
    </>
  )
}