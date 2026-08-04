'use client'

/**
 * Framer Motion 共享动画原语(全站统一复用)
 *
 * 设计原则(严格遵守用户要求):
 *  1. GPU 加速 —— 所有动画仅作用于 `opacity` 与 `transform`(translate/scale),
 *     绝不触发 layout / paint 重排,避免 CLS(布局偏移)与掉帧。
 *  2. CLS 安全 —— 入场动画使用 transform 偏移而非真实占用空间,
 *     卡片先以 opacity:0 占位(transform 不影响布局),再过渡到可见,
 *     避免首屏内容跳动。
 *  3. 可访问性 —— 通过 useReducedMotion() 检测「减少动态效果」偏好,
 *     用户开启后降级为瞬时无动效(尊重 prefers-reduced-motion)。
 */

import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion'

/* ════════════════════════════════════════
 * 1. 通用 variants
 * ════════════════════════════════════════ */

/** 容器:子元素交错入场(staggerChildren 控制) */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 1 }, // 容器本身始终可见,仅控制子项
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
}

/**
 * 单项入场:从 y:15 + opacity:0 平滑过渡到 y:0 + opacity:1。
 * 注意:transform-only,不改变真实占位空间(CLS 安全)。
 */
export const fadeUpItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, // easeOutQuart
  },
}

/* ════════════════════════════════════════
 * 2. Hero 背景呼吸光晕
 * ════════════════════════════════════════ */

/**
 * Hero 区动态流光背景:多层高斯模糊径向光晕 + 缓慢呼吸放缩。
 *
 * 实现:
 *  - 绝对定位 + pointer-events-none,完全脱离布局流,不影响任何内容排版(CLS=0)。
 *  - 仅 scale/opacity 动画(GPU 合成层),blur 用 CSS filter 静态渲染。
 *  - useReducedMotion 开启时,呼吸放缩被关闭,光晕静态显示(仍保留美感)。
 */
export function HeroGlow() {
  const reduceMotion = useReducedMotion()

  // 呼吸动画 props(reduce-motion 下为 undefined,关闭呼吸)。
  // 内联字面量确保 ease 被收窄为 Easing 类型而非 string。
  const breathingPrimary = reduceMotion
    ? undefined
    : {
        animate: { scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] },
        transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' as const },
      }

  const breathingSecondary = reduceMotion
    ? undefined
    : {
        animate: { scale: [1.04, 1, 1.04], opacity: [0.6, 0.9, 0.6] },
        transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' as const },
      }

  return (
    // ★ 纯净无边界弥散光晕(Ambient Glow)—— Tailwind 官方 Hero 同款手法:
    //   外层 absolute + overflow-hidden + blur-3xl 把"光场容器"整体高斯模糊,
    //   内层只放一个 rotate-[30deg] 的纯渐变块,边缘被外层 blur 自然羽化,
    //   ★没有任何 clipPath 多边形★(之前的 polygon 在 blur 后仍保留顶点硬边,
    //   这就是右下角"硬边紫色三角形"Bug 的根因)。
    //   -inset-x / -top-20 让光晕上移并横向铺满,不被 section 矩形侧边裁切。
    //   body 已有 overflow-x:hidden,溢出不会产生横向滚动条。
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl"
    >
      {/* 主光晕(蓝紫) —— 居中,sm 以上放大到 72rem;rotate-30° 让渐变方向斜向,
          视觉更接近真实"光场"而非一块矩形色块。opacity 25% 通透不抢戏。 */}
      <motion.div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#60a5fa] to-[#c084fc] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        animate={breathingPrimary?.animate}
        transition={breathingPrimary?.transition}
      />
      {/* 副光晕(青色) —— 左侧弥散,慢一拍错峰呼吸,补色让光场更通透。
          纯 radial-gradient 圆斑,rounded-full 无任何多边形顶点。
          自身不再加 blur(外层 blur-3xl 统一接管所有子层)。 */}
      <motion.div
        className="absolute left-[6%] top-32 h-[300px] w-[300px] max-w-[50vw] rounded-full opacity-50 dark:opacity-25"
        style={{
          background:
            'radial-gradient(circle at center, rgba(56,189,248,0.50), transparent 70%)',
        }}
        animate={breathingSecondary?.animate}
        transition={breathingSecondary?.transition}
      />
      {/* 副光晕(紫色) —— 右侧弥散,与青色副光晕反相位,增强空间感。 */}
      <motion.div
        className="absolute right-[8%] top-20 h-[320px] w-[320px] max-w-[50vw] rounded-full opacity-45 dark:opacity-25"
        style={{
          background:
            'radial-gradient(circle at center, rgba(168,85,247,0.45), transparent 70%)',
        }}
        animate={breathingSecondary?.animate}
        transition={breathingSecondary?.transition}
      />
    </div>
  )
}

/* ════════════════════════════════════════
 * 3. 分类 Chip 滑轨高亮(layoutId)
 * ════════════════════════════════════════ */

/**
 * 分类 Chip 高亮背景块(配合 framer-motion layoutId 实现滑轨平滑过渡)。
 *
 * 用法:每个 Chip 按钮内部,激活态时渲染 <LayoutHighlight layoutId="activeCategory" />。
 * 切换分类时,旧高亮块消失、新高亮块挂载,framer-motion 通过共享 layoutId
 * 自动在两者间做位置 + 尺寸的平滑过渡动画(魔法滑轨效果)。
 *
 * 注意:absolute inset-0,不占用按钮内文本空间,不影响布局。
 */
export function LayoutHighlight({ layoutId }: { layoutId: string }) {
  return (
    <motion.span
      layoutId={layoutId}
      className="absolute inset-0 -z-0 rounded-full bg-blue-600"
      style={{ boxShadow: '0 1px 3px rgba(37,99,235,0.35)' }}
      initial={false}
      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }}
    />
  )
}

/* ════════════════════════════════════════
 * 4. 工具卡片 —— 交错入场 + Hover 抬升 + 光晕边框
 * ════════════════════════════════════════ */

export interface AnimatedToolCardProps {
  href: string
  title?: string
  ariaLabel?: string
  /** 卡片视觉变体:默认(纯描边)/ featured(蓝色渐变高亮) */
  variant?: 'default' | 'featured'
  /** 右上角徽章节点(FeaturedTools 的 POPULAR/NEW) */
  badge?: ReactNode
  children: ReactNode
}

/**
 * 统一的动画工具卡片(替代各处重复的 <Link> 卡片结构)。
 *
 * 动画:
 *  - 入场:容器 staggerChildren 交错,单项从 y:15+opacity:0 过渡(transform-only,CLS 安全)。
 *  - Hover:whileHover y:-4 轻微抬升 + 微弱蓝色光晕边框阴影。
 *  - whileTap:轻微 scale(触感反馈)。
 *
 * 视觉:沿用原 Tailwind 暗色描边主题(solid bg + crisp border + hover 蓝色发光),
 * 保持与现有设计一致。
 */
export function AnimatedToolCard({
  href,
  title,
  ariaLabel,
  variant = 'default',
  badge,
  children,
}: AnimatedToolCardProps) {
  const reduceMotion = useReducedMotion()

  // 入场 variants:reduce-motion 下降级为瞬时
  const variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : fadeUpItemVariants

  // Hover 抬升 + 光晕:reduce-motion 下关闭
  const hoverProps = reduceMotion
    ? {}
    : {
        y: -4,
        boxShadow: '0 8px 24px -8px rgba(37,99,235,0.18)',
      }

  // 卡片基础样式(沿用原设计)
  const baseClass =
    variant === 'featured'
      ? 'group relative flex flex-col rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-transparent p-5 shadow-sm transition-colors dark:bg-none dark:border-slate-800/80 dark:bg-[#111827] dark:shadow-none'
      : 'group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800/80 dark:bg-[#111827] dark:shadow-none'

  // 悬停描边色(由 Tailwind group-hover 已接管文字变色,这里给 motion 控制阴影)
  const hoverClass =
    'hover:border-blue-300 dark:hover:border-blue-500/60'

  return (
    <motion.div variants={variants} whileHover={hoverProps}>
      <Link
        href={href}
        title={title}
        aria-label={ariaLabel}
        className={`${baseClass} ${hoverClass}`}
      >
        {badge}
        {children}
      </Link>
    </motion.div>
  )
}

/* ════════════════════════════════════════
 * 5. 容器交错包装器(为非卡片网格提供 stagger)
 * ════════════════════════════════════════ */

/**
 * stagger 容器:包裹多个 AnimatedToolCard 或其它带 variants 的子项,
 * 触发交错入场。
 *
 * 用 `as="div"` 语义化。viewport 触发一次入场(once: true,避免回滚重播)。
 */
export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : staggerContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  )
}

/* ════════════════════════════════════════
 * 6. 复用导出(供其它组件按需引入)
 * ════════════════════════════════════════ */

export { motion, AnimatePresence, useReducedMotion }
