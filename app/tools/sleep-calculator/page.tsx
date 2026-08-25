import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SleepCalculatorClient } from '@/components/tools/batch10Tools'
import { SleepCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('sleep-calculator')

export default function SleepCalculatorPage() {
  const tool = getTool('sleep-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('sleep-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SleepCalculatorClient />
        <SleepCalculatorContent />
      </ToolLayout>
    </>
  )
}
