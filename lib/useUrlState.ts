'use client'

/**
 * useUrlState —— 把任意工具的状态同步进 URL query(刷新不丢失 / 可分享)
 *
 * 渐进式 URL 同步层:工具客户端组件无需自己处理 history.replaceState /
 * URLSearchParams,只需把要持久化的字段通过本 hook 接管。
 *
 * 用 history.replaceState(不触发路由跳转、不留历史栈污染、不重新渲染),
 * 把当前 query 与组件状态双向绑定。
 *
 * 用法(百分比计算器示例):
 *   const [pct, setPct] = useUrlState('pct', '20')
 *   const [of, setOf]   = useUrlState('of', '1000')
 *   // 修改 setPct/setOf 即同步进 ?pct=20&of=1000;刷新页面自动读回初始值。
 *
 * 设计取舍:
 *  - 用 replaceState 而非 pushState:避免每按键留一条历史(后退会卡)。
 *  - 值恒为 string(URL 只能存字符串);数值由调用方在 setState 时转换。
 *  - 跨字段安全:多个 useUrlState(key) 各自只改自己的 key,互不覆盖
 *    (每次 replaceState 都基于当前 location 取最新 query 再改)。
 *  - 跳过空值:值为 '' 时从 query 移除该 key,保持 URL 干净。
 *  - SSR 安全:首次渲染用传入的 defaultValue;挂载后从 location 读初始值。
 */

import { useEffect, useRef, useState, useCallback } from 'react'

export function useUrlState(key: string, defaultValue: string): [string, (v: string) => void] {
  // ⚠️ Hydration 安全:首帧(SSR + 客户端首渲染)统一用 defaultValue,
  //    保证服务端输出与客户端首帧完全一致。挂载后再从 URL 读真实值并对齐。
  //    (若用 lazy initializer 在首帧就读 window.location,SSR=default、CSR=url,
  //     会触发 React hydration mismatch 警告并重建子树。)
  const [value, setValue] = useState<string>(defaultValue)

  // 是否已完成首次"从 URL 读回"。用 useRef 避免触发额外渲染。
  const hydrated = useRef(false)

  // 挂载后:① 把 URL 里的值读进 state(只一次);② 之后 value 变化即写回 URL。
  useEffect(() => {
    if (typeof window === 'undefined') return

    // 首次挂载:从 URL 读初始值。若有则 setState 对齐(URL 是真实来源)。
    if (!hydrated.current) {
      hydrated.current = true
      const params = new URLSearchParams(window.location.search)
      const fromUrl = params.get(key)
      if (fromUrl != null && fromUrl !== defaultValue) {
        setValue(fromUrl)
      }
      return // 首次不写回 URL(URL 已是当前来源),避免覆盖用户分享链接
    }

    // 后续:value 变化 → 同步进 URL(replaceState,不污染历史栈、不重渲染)
    const url = new URL(window.location.href)
    if (value === '' || value === defaultValue) {
      url.searchParams.delete(key) // 空值/等于默认值 → 移除该 key,保持 URL 干净
    } else {
      url.searchParams.set(key, value)
    }
    window.history.replaceState({}, '', url.toString())
  }, [key, value, defaultValue])

  const setter = useCallback((v: string) => setValue(v), [])

  return [value, setter]
}
