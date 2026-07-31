import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { QRCodeGeneratorClient } from '@/components/tools/QRCodeGeneratorClient'
import { QRCodeGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('qr-code-generator')

export default function QRCodeGeneratorPage() {
  const tool = getTool('qr-code-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('qr-code-generator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout tool={tool}>
        <QRCodeGeneratorClient />
        <QRCodeGeneratorContent />
      </ToolLayout>
    </>
  )
}
