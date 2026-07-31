import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PasswordStrengthCheckerClient } from '@/components/devtools/batchDevTools'
import { PasswordStrengthCheckerContent } from './content'

export const metadata: Metadata = buildToolMetadata('password-strength-checker')

export default function Page() {
  const tool = getTool('password-strength-checker')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('password-strength-checker')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PasswordStrengthCheckerClient />
        <PasswordStrengthCheckerContent />
      </ToolLayout>
    </>
  )
}
