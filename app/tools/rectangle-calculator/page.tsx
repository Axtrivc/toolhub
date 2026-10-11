import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RectangleCalculatorClient } from '@/components/generators/batchGenerators'
import { RectangleCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('rectangle-calculator')

export default function Page() {
  const tool = getTool('rectangle-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('rectangle-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('rectangle-calculator')}>
        <RectangleCalculatorClient />
        <RectangleCalculatorContent />
      </ToolLayout>
    </>
  )
}
