import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PregnancyDueDateCalculatorClient } from '@/components/calculators/batch6Calculators'
import { PregnancyDueDateCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('pregnancy-due-date-calculator')

export default function Page() {
  const tool = getTool('pregnancy-due-date-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('pregnancy-due-date-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PregnancyDueDateCalculatorClient />
        <PregnancyDueDateCalculatorContent />
      </ToolLayout>
    </>
  )
}
