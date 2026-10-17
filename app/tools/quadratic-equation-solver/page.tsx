import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { QuadraticEquationSolverClient } from '@/components/calculators/batch31Calculators'
import { QuadraticEquationSolverContent } from './content'

export const metadata: Metadata = buildToolMetadata('quadratic-equation-solver')

export default function QuadraticEquationSolverPage() {
  const tool = getTool('quadratic-equation-solver')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('quadratic-equation-solver')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('quadratic-equation-solver')}>
        <QuadraticEquationSolverClient />
        <QuadraticEquationSolverContent />
      </ToolLayout>
    </>
  )
}
