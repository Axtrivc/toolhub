import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RandomChoicePickerClient } from '@/components/calculators/RandomChoicePickerClient'
import { RandomChoicePickerContent } from './content'

export const metadata: Metadata = buildToolMetadata('random-choice-picker')

export default function Page() {
  const tool = getTool('random-choice-picker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('random-choice-picker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RandomChoicePickerClient />
        <RandomChoicePickerContent />
      </ToolLayout>
    </>
  )
}
