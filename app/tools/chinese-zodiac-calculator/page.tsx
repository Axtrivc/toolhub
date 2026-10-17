import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ChineseZodiacCalculatorClient } from '@/components/calculators/batch27Calculators'
import { ChineseZodiacCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('chinese-zodiac-calculator')

export default function ChineseZodiacCalculatorPage() {
  const tool = getTool('chinese-zodiac-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('chinese-zodiac-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('chinese-zodiac-calculator')}>
        <ChineseZodiacCalculatorClient />
        <ChineseZodiacCalculatorContent />
      </ToolLayout>
    </>
  )
}
