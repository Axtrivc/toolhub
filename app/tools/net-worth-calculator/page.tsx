import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { NetWorthCalculatorClient } from '@/components/calculators/batch6Calculators'
import { NetWorthCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('net-worth-calculator')

export default function Page() {
  const tool = getTool('net-worth-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('net-worth-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <NetWorthCalculatorClient />
        <NetWorthCalculatorContent />
      </ToolLayout>
    </>
  )
}
