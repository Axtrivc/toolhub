import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ChmodCalculatorClient } from '@/components/devtools/ChmodCalculatorClient'
import { ChmodCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('chmod-calculator')

export default function Page() {
  const tool = getTool('chmod-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('chmod-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('chmod-calculator')}>
        <ChmodCalculatorClient />
        <ChmodCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
