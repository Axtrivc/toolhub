import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { FreelanceInvoiceGeneratorClient } from '@/components/calculators/FreelanceInvoiceGeneratorClient'
import { FreelanceInvoiceGeneratorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('freelance-invoice-generator')

export default function Page() {
  const tool = getTool('freelance-invoice-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('freelance-invoice-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <FreelanceInvoiceGeneratorClient />
        <FreelanceInvoiceGeneratorClientContent />
      </ToolLayout>
    </>
  )
}
