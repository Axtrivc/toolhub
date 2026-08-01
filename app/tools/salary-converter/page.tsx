import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SalaryConverterClient } from '@/components/calculators/batch8Calculators'
import { SalaryConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('salary-converter')

export default function Page() {
  const tool = getTool('salary-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('salary-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SalaryConverterClient />
        <SalaryConverterContent />
      </ToolLayout>
    </>
  )
}
