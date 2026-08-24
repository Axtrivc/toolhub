import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PrimeNumberCheckerClient } from '@/components/calculators/batch7Calculators'
import { PrimeNumberCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('prime-number-checker')

export default function Page() {
  const tool = getTool('prime-number-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('prime-number-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PrimeNumberCheckerClient />
        <PrimeNumberCheckerContent />
      </ToolLayout>
    </>
  )
}
