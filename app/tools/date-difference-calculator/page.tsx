import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DateDifferenceClient } from '@/components/calculators/batch2Clients'
import { DateDifferenceCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('date-difference-calculator')

export default function DateDifferenceCalculatorPage() {
  const tool = getTool('date-difference-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('date-difference-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DateDifferenceClient />
        <DateDifferenceCalculatorContent />
      </ToolLayout>
    </>
  )
}
