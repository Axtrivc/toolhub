import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RothIraCalculatorClient } from '@/components/calculators/batch19Calculators'
import { RothIraCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('roth-ira-calculator')

export default function Page() {
  const tool = getTool('roth-ira-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('roth-ira-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RothIraCalculatorClient />
        <RothIraCalculatorContent />
      </ToolLayout>
    </>
  )
}
