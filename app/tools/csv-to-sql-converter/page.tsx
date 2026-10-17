import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CsvToSqlConverterClient } from '@/components/tools/batch32Tools'
import { CsvToSqlConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('csv-to-sql-converter')

export default function CsvToSqlConverterPage() {
  const tool = getTool('csv-to-sql-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('csv-to-sql-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('csv-to-sql-converter')}>
        <CsvToSqlConverterClient />
        <CsvToSqlConverterContent />
      </ToolLayout>
    </>
  )
}
