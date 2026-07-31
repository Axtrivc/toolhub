import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DataStorageConverterClient } from '@/components/converters/batchConverters'
import { DataStorageConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('data-storage-converter')

export default function Page() {
  const tool = getTool('data-storage-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('data-storage-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DataStorageConverterClient />
        <DataStorageConverterContent />
      </ToolLayout>
    </>
  )
}
