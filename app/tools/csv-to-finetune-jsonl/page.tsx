import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CsvToFinetuneClient } from '@/components/tools/batch17AITools'
import { CsvToFinetuneJsonlContent } from './content'

export const metadata: Metadata = buildToolMetadata('csv-to-finetune-jsonl')

export default function CsvToFinetuneJsonlPage() {
  const tool = getTool('csv-to-finetune-jsonl')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('csv-to-finetune-jsonl')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('csv-to-finetune-jsonl')}>
        <CsvToFinetuneClient />
        <CsvToFinetuneJsonlContent />
      </ToolLayout>
    </>
  )
}
