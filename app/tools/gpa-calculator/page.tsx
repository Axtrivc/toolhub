import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { GPACalculatorClient } from '@/components/calculators/batch2Clients'
import { GpaCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('gpa-calculator')

export default function GpaCalculatorPage() {
  const tool = getTool('gpa-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('gpa-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <GPACalculatorClient />
        <GpaCalculatorContent />
      </ToolLayout>
    </>
  )
}
