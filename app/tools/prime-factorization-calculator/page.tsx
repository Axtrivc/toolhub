import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PrimeFactorizationCalculatorClient } from '@/components/calculators/batch7Calculators'
import { PrimeFactorizationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('prime-factorization-calculator')

export default function Page() {
  const tool = getTool('prime-factorization-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('prime-factorization-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PrimeFactorizationCalculatorClient />
        <PrimeFactorizationCalculatorContent />
      </ToolLayout>
    </>
  )
}
