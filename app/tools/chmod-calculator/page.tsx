import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ChmodCalculatorClient } from '@/components/devtools/ChmodCalculatorClient'
import { ChmodCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('chmod-calculator')

export default function Page() {
  const tool = getTool('chmod-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('chmod-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ChmodCalculatorClient />
        <ChmodCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
