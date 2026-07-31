'use client'

import { useState, useCallback } from 'react'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

interface CopyButtonProps {
  value: string
  label?: string
  disabled?: boolean
}

/**
 * 通用复制按钮 - i18n 反馈 + 主题适配
 */
export function CopyButton({ value, label, disabled }: CopyButtonProps) {
  const { locale } = useApp()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    if (!value) return
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = value
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      } catch {
        // ignore
      }
      document.body.removeChild(textarea)
    }
  }, [value])

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={disabled || !value}
      className={`btn ${copied ? 'btn-primary' : 'btn-secondary'} disabled:cursor-not-allowed disabled:opacity-50`}
      aria-live="polite"
    >
      {copied ? t(locale, 'toolCopied') : (label || t(locale, 'toolCopy'))}
    </button>
  )
}
