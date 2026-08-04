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

  // 呼吸动画(reduce-motion 下为 undefined,关闭)。
  // 振幅适中(scale ±4%、opacity ±12%):光斑有存在感,呼吸让光场"活"起来,
  // 但不过度,避免抢戏或闪烁。
  const breathing = reduceMotion
    ? undefined
    : {
        animate: { scale: [1, 1.04, 1], opacity: [0.88, 1, 0.88] },
        transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' as const },
      }

  return (
    // ★ 黄金中庸点光斑(Golden-ratio ambient glow)—— 顶级 SaaS Hero 质感:
    //   尺寸中等(w-[680px] h-[320px])—— 比极简微光大一档,撑得起大标题,
    //   又比上一版 1155px 巨幕克制,绝不溢出到下方卡片区。
    //   渐变蓝→靛→紫,饱和度适中(/35 /30 /25),blur-[100px] 丝滑羽化。
    //   亮/暗模式分别调色:暗色用更深的 blue-600/indigo-500/purple-600 并降饱和,
    //   避免深底上过亮的浅色光斑发灰。
    //   锚定:调用方需 relative 容器;top-8 让光斑略偏上,正对标题主体。
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-8 -z-10 h-[320px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-400/35 via-indigo-400/30 to-purple-400/25 blur-[100px] dark:from-blue-600/30 dark:via-indigo-500/25 dark:to-purple-600/20"
      animate={breathing?.animate}
      transition={breathing?.transition}
    />
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

  // Hover 抬升:只做 y:-4 transform,reduce-motion 下关闭。
  // ★ 关键:不在 motion.div 上设 boxShadow。motion.div 是直角的(没圆角),
  //   它产生的阴影会是直角矩形 —— 抬升时会在圆角白卡下方拖出一截直角白/蓝色块(Bug 根源)。
  //   蓝色光晕改由内层 Link 的 hover:shadow-[...] 投射(圆角元素 → 圆角阴影),见 hoverClass。
  const hoverProps = reduceMotion ? {} : { y: -4 }

  // 卡片基础样式 —— 全部视觉收敛到这一个带圆角的主卡片元素上(Link):
  //   bg-white / rounded-2xl / border / shadow 全在 Link,外层 motion.div 保持透明。
  //   ★ 不在 className 加 hover:-translate-y-1,否则与 motion 的 y:-4 双写 transform 会抖动;
  //     抬升统一交给 motion.div(它透明,只管 transform,不产生任何直角阴影/底色)。
  const baseClass =
    variant === 'featured'
      ? 'group relative flex flex-col rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-transparent p-5 shadow-sm transition-all duration-300 dark:bg-none dark:border-slate-800/80 dark:bg-[#111827] dark:shadow-none'
      : 'group block rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-900 dark:shadow-none'

  // 悬停:边框高亮变蓝 + 蓝色光晕阴影(用 Tailwind 任意值,圆角元素投射圆角阴影)。
  // 阴影值与原 motion boxShadow 一致(0 20px 40px -12px /0.22),保持视觉不变。
  const hoverClass =
    'hover:border-blue-400/80 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.22)] dark:hover:border-blue-500/60'

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
