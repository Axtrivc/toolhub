import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { IpSubnetCalculatorClient } from '@/components/devtools/IpSubnetCalculatorClient'
import { IpSubnetCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('ip-subnet-calculator')

export default function Page() {
  const tool = getTool('ip-subnet-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ip-subnet-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <IpSubnetCalculatorClient />
        <IpSubnetCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
