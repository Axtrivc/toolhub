import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { OvertimeCalculatorClient } from '@/components/calculators/batch11Calculators'
import { OvertimeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('overtime-calculator')

export default function OvertimeCalculatorPage() {
  const tool = getTool('overtime-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('overtime-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <OvertimeCalculatorClient />
        <OvertimeCalculatorContent />
      </ToolLayout>
    </>
  )
}
