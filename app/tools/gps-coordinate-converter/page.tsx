import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { GpsCoordinateConverterClient } from '@/components/tools/batch30Tools'
import { GpsCoordinateConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('gps-coordinate-converter')

export default function GpsCoordinateConverterPage() {
  const tool = getTool('gps-coordinate-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('gps-coordinate-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('gps-coordinate-converter')}>
        <GpsCoordinateConverterClient />
        <GpsCoordinateConverterContent />
      </ToolLayout>
    </>
  )
}
