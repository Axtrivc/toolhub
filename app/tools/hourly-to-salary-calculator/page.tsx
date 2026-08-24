import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HourlyToSalaryCalculatorClient } from '@/components/calculators/batch3Calculators'
import { HourlyToSalaryCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('hourly-to-salary-calculator')

export default function Page() {
  const tool = getTool('hourly-to-salary-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('hourly-to-salary-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HourlyToSalaryCalculatorClient />
        <HourlyToSalaryCalculatorContent />
      </ToolLayout>
    </>
  )
}
