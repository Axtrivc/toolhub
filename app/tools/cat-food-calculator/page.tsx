import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CatFoodCalculatorClient } from '@/components/calculators/batch27Calculators'
import { CatFoodCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('cat-food-calculator')

export default function CatFoodCalculatorPage() {
  const tool = getTool('cat-food-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('cat-food-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('cat-food-calculator')}>
        <CatFoodCalculatorClient />
        <CatFoodCalculatorContent />
      </ToolLayout>
    </>
  )
}
