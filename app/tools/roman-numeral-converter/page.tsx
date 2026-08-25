import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RomanNumeralConverterClient } from '@/components/calculators/batch9Calculators'
import { RomanNumeralConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('roman-numeral-converter')

export default function RomanNumeralConverterPage() {
  const tool = getTool('roman-numeral-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('roman-numeral-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RomanNumeralConverterClient />
        <RomanNumeralConverterContent />
      </ToolLayout>
    </>
  )
}
