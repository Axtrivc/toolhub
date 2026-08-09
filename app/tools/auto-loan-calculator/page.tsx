import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { AutoLoanCalculatorClient } from '@/components/calculators/AutoLoanCalculatorClient'
import { AutoLoanCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('auto-loan-calculator')

export default function Page() {
  const tool = getTool('auto-loan-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('auto-loan-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <AutoLoanCalculatorClient />
        <AutoLoanCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
