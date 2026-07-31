import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ROIcalculatorClient } from '@/components/calculators/batch3Calculators'
import { ROIcalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('roi-calculator')

export default function Page() {
  const tool = getTool('roi-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('roi-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ROIcalculatorClient />
        <ROIcalculatorContent />
      </ToolLayout>
    </>
  )
}
