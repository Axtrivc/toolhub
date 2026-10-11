import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CssClampCalculatorClient } from '@/components/webtools/CssClampCalculatorClient'
import { CssClampCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('css-clamp-calculator')

export default function Page() {
  const tool = getTool('css-clamp-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('css-clamp-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('css-clamp-calculator')}>
        <CssClampCalculatorClient />
        <CssClampCalculatorContent />
      </ToolLayout>
    </>
  )
}
