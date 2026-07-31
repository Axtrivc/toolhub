import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { FinalGradeCalculatorClient } from '@/components/calculators/batch8Calculators'
import { FinalGradeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('final-grade-calculator')

export default function Page() {
  const tool = getTool('final-grade-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('final-grade-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <FinalGradeCalculatorClient />
        <FinalGradeCalculatorContent />
      </ToolLayout>
    </>
  )
}
