import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CssClampCalculatorClient } from '@/components/webtools/CssClampCalculatorClient'
import { CssClampCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('css-clamp-calculator')

export default function Page() {
  const tool = getTool('css-clamp-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('css-clamp-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CssClampCalculatorClient />
        <CssClampCalculatorContent />
      </ToolLayout>
    </>
  )
}
