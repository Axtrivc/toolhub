import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ScientificNotationCalculatorClient } from '@/components/calculators/batch7Calculators'
import { ScientificNotationConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('scientific-notation-converter')

export default function Page() {
  const tool = getTool('scientific-notation-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('scientific-notation-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ScientificNotationCalculatorClient />
        <ScientificNotationConverterContent />
      </ToolLayout>
    </>
  )
}
