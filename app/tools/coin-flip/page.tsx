import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CoinFlipClient } from '@/components/tools/batch14FunTools'
import { CoinFlipContent } from './content'

export const metadata: Metadata = buildToolMetadata('coin-flip')

export default function CoinFlipPage() {
  const tool = getTool('coin-flip')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('coin-flip')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CoinFlipClient />
        <CoinFlipContent />
      </ToolLayout>
    </>
  )
}
