import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { MacroCalculatorClient } from '@/components/calculators/batch6Calculators'
import { MacroCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('macro-calculator')

export default function Page() {
  const tool = getTool('macro-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('macro-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <MacroCalculatorClient />
        <MacroCalculatorContent />
      </ToolLayout>
    </>
  )
}
