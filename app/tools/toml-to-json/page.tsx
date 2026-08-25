import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TomlToJsonClient } from '@/components/tools/batch13bTools'
import { TomlToJsonContent } from './content'

export const metadata: Metadata = buildToolMetadata('toml-to-json')

export default function TomlToJsonPage() {
  const tool = getTool('toml-to-json')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('toml-to-json')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TomlToJsonClient />
        <TomlToJsonContent />
      </ToolLayout>
    </>
  )
}
