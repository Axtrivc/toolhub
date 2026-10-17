import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BodySurfaceAreaCalculatorClient } from '@/components/calculators/batch26Calculators'
import { BodySurfaceAreaCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('body-surface-area-calculator')

export default function BodySurfaceAreaCalculatorPage() {
  const tool = getTool('body-surface-area-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('body-surface-area-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('body-surface-area-calculator')}>
        <BodySurfaceAreaCalculatorClient />
        <BodySurfaceAreaCalculatorContent />
      </ToolLayout>
    </>
  )
}
