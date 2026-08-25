import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WheelSpinnerClient } from '@/components/tools/batch14FunTools'
import { WheelSpinnerContent } from './content'

export const metadata: Metadata = buildToolMetadata('wheel-spinner')

export default function WheelSpinnerPage() {
  const tool = getTool('wheel-spinner')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('wheel-spinner')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <WheelSpinnerClient />
        <WheelSpinnerContent />
      </ToolLayout>
    </>
  )
}
