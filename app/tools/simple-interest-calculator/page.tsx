import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SimpleInterestCalculatorClient } from '@/components/generators/batchGenerators'
import { SimpleInterestCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('simple-interest-calculator')

export default function Page() {
  const tool = getTool('simple-interest-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('simple-interest-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SimpleInterestCalculatorClient />
        <SimpleInterestCalculatorContent />
      </ToolLayout>
    </>
  )
}
