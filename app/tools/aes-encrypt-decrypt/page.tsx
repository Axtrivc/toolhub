import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { AesEncryptDecryptClient } from '@/components/tools/batch15Tools'
import { AesEncryptDecryptContent } from './content'

export const metadata: Metadata = buildToolMetadata('aes-encrypt-decrypt')

export default function AesEncryptDecryptPage() {
  const tool = getTool('aes-encrypt-decrypt')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('aes-encrypt-decrypt')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('aes-encrypt-decrypt')}>
        <AesEncryptDecryptClient />
        <AesEncryptDecryptContent />
      </ToolLayout>
    </>
  )
}
