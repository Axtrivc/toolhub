import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ScreenTimeCalculatorClient } from '@/components/tools/batch12bTools'
import { ScreenTimeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('screen-time-calculator')

export default function ScreenTimeCalculatorPage() {
  const tool = getTool('screen-time-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('screen-time-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('screen-time-calculator')}>
        <ScreenTimeCalculatorClient />
        <ScreenTimeCalculatorContent />
      </ToolLayout>
    </>
  )
}
