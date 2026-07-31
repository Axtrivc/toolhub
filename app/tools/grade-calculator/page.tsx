import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { GradeCalculatorClient } from '@/components/calculators/batch8Calculators'
import { GradeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('grade-calculator')

export default function Page() {
  const tool = getTool('grade-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('grade-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <GradeCalculatorClient />
        <GradeCalculatorContent />
      </ToolLayout>
    </>
  )
}
