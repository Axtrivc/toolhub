import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TypingSpeedTestClient } from '@/components/tools/batch14FunTools'
import { TypingSpeedTestContent } from './content'

export const metadata: Metadata = buildToolMetadata('typing-speed-test')

export default function TypingSpeedTestPage() {
  const tool = getTool('typing-speed-test')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('typing-speed-test')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TypingSpeedTestClient />
        <TypingSpeedTestContent />
      </ToolLayout>
    </>
  )
}
