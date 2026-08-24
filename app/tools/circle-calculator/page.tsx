import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CircleCalculatorClient } from '@/components/generators/batchGenerators'
import { CircleCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('circle-calculator')

export default function Page() {
  const tool = getTool('circle-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('circle-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CircleCalculatorClient />
        <CircleCalculatorContent />
      </ToolLayout>
    </>
  )
}
