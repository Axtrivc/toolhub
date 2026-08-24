import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DownPaymentCalculatorClient } from '@/components/calculators/batch8Calculators'
import { DownPaymentCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('down-payment-calculator')

export default function Page() {
  const tool = getTool('down-payment-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('down-payment-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DownPaymentCalculatorClient />
        <DownPaymentCalculatorContent />
      </ToolLayout>
    </>
  )
}
