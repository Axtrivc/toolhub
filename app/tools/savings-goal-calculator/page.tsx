import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SavingsGoalCalculatorClient } from '@/components/calculators/batch6Calculators'
import { SavingsGoalCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('savings-goal-calculator')

export default function Page() {
  const tool = getTool('savings-goal-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('savings-goal-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SavingsGoalCalculatorClient />
        <SavingsGoalCalculatorContent />
      </ToolLayout>
    </>
  )
}
