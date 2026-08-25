import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ScreenTimeCalculatorClient } from '@/components/tools/batch12bTools'
import { ScreenTimeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('screen-time-calculator')

export default function ScreenTimeCalculatorPage() {
  const tool = getTool('screen-time-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('screen-time-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ScreenTimeCalculatorClient />
        <ScreenTimeCalculatorContent />
      </ToolLayout>
    </>
  )
}
