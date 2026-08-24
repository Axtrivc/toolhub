import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WordleSolverClient } from '@/components/texttools/WordleSolverClient'
import { WordleSolverContent } from './content'

export const metadata: Metadata = buildToolMetadata('wordle-solver')

export default function Page() {
  const tool = getTool('wordle-solver')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('wordle-solver')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <WordleSolverClient />
        <WordleSolverContent />
      </ToolLayout>
    </>
  )
}
