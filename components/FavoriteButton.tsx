'use client'

/**
 * 收藏按钮 ❤️ —— 详情页顶层交互区
 *
 * 行为:
 *  - 点击切换收藏状态,实时同步 localStorage(经 useFavorites);
 *  - 已收藏显示实心红心 + "Saved",未收藏显示空心 + "Save";
 *  - 挂载前(favoritesReady=false)按"未收藏"渲染,避免 SSR/CSR 不一致(hydration 安全);
 *  - 触控友好(py-2 px-3),带 aria-pressed 与 title。
 *
 * 放在 ToolLayout 标题右侧;不影响工具本体,被 iframe 嵌入时隐藏。
 */

import { useFavorites } from '@/lib/useFavorites'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

export function FavoriteButton({ slug, name }: { slug: string; name: string }) {
  const { isFavorite, toggleFavorite, favoritesReady } = useFavorites()
  const { locale } = useApp()

  // 挂载前统一按 false 渲染,保证 SSR 与首屏一致;挂载后才用真实状态
  const saved = favoritesReady ? isFavorite(slug) : false

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-pressed={saved}
      aria-label={t(locale, saved ? 'favRemoveAria' : 'favAddAria', { name })}
      title={t(locale, saved ? 'favSavedTitle' : 'favSaveTitle')}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
      style={{
        borderColor: 'rgb(var(--border-strong))',
        color: saved ? 'rgb(220 38 38)' : 'rgb(var(--text-muted))', // red-600 / muted
        backgroundColor: saved ? 'rgb(254 226 226)' : 'rgb(var(--bg-card))', // red-100
      }}
    >
      {/* 实心 / 空心 心形随状态切换 */}
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill={saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className="hidden sm:inline">{t(locale, saved ? 'favSaved' : 'favSave')}</span>
    </button>
  )
}
