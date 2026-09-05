import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { IntermittentFastingClient } from '@/components/calculators/batch18Calculators'
import { IntermittentFastingContent } from './content'

export const metadata: Metadata = buildToolMetadata('intermittent-fasting-calculator')

export default function Page() {
  const tool = getTool('intermittent-fasting-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('intermittent-fasting-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <IntermittentFastingClient />
        <IntermittentFastingContent />
      </ToolLayout>
    </>
  )
}
