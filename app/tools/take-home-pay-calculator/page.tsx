import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TakeHomePayCalculatorClient } from '@/components/calculators/batch11Calculators'
import { TakeHomePayCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('take-home-pay-calculator')

export default function TakeHomePayCalculatorPage() {
  const tool = getTool('take-home-pay-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('take-home-pay-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TakeHomePayCalculatorClient />
        <TakeHomePayCalculatorContent />
      </ToolLayout>
    </>
  )
}
