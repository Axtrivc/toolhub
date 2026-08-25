import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PasswordEntropyCheckerClient } from '@/components/tools/batch14FunTools'
import { PasswordEntropyCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('password-entropy-checker')

export default function PasswordEntropyCheckerPage() {
  const tool = getTool('password-entropy-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('password-entropy-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PasswordEntropyCheckerClient />
        <PasswordEntropyCheckerContent />
      </ToolLayout>
    </>
  )
}
