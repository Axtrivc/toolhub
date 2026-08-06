'use client'

/**
 * Framer Motion 共享动画原语(全站统一复用)
 *
 * 设计原则(严格遵守用户要求):
 *  1. GPU 加速 —— 所有计时动画仅作用于 `opacity` 与 `transform`(translate/scale),
 *     绝不触发 layout 重排,避免 CLS(布局偏移)与掉帧。
 *     (Hover 的 box-shadow / 鼠标跟随光泽为纯 paint,不占位、无 CLS。)
 *  2. CLS 安全 —— 入场动画使用 transform 偏移而非真实占用空间,
 *     卡片先以 opacity:0 占位(transform 不影响布局),再过渡到可见,
 *     避免首屏内容跳动。
 *  3. 可访问性 —— 通过 useReducedMotion() 检测「减少动态效果」偏好,
 *     用户开启后降级为瞬时无动效(尊重 prefers-reduced-motion)。
 *
 * 本轮强度升级(对齐 Raycast / Linear 质感):
 *  - Hero 入场:ease 位移 → spring 物理弹跳(damping 20 / stiffness 300,带过冲)。
 *  - 卡片入场:容器整体 stagger → 每张卡片独立 whileInView + 列延迟(column-based
 *    stagger),滚动时每行卡片在视口内从左到右依次弹入,而非整网一次性加载。
 *  - Hover:更大抬升(-8px)+ 更大更柔阴影 + 鼠标跟随折射光泽(Sheen)。
 */

import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'
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

/**
 * 工具卡片入场(spring + 列交错):
 *  - spring 物理进场(damping 26 / stiffness 280):轻微过冲回弹,比 ease 更有速度感与质感。
 *  - custom 传列序号(0–3):delay 按列递增 0.07s,同一行卡片从左到右波纹式依次弹入
 *    (column-based stagger);不同行由各自的 whileInView 在滚入视口时分别触发。
 *  - scale 0.96 → 1 配合 y:32 → 0:浮现带"跃出"感,仍 transform-only(CLS 安全)。
 */
export const toolCardEnterVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: (column: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 26,
      stiffness: 280,
      delay: Math.min(column, 3) * 0.07,
    },
  }),
}

/** Hero 入场交响容器:比卡片区更慢的 stagger(0.12s),营造"依次点亮"的节奏感 */
export const heroStaggerContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

/**
 * Hero 单项入场:spring 物理进场(damping 20 / stiffness 300)。
 * 相对旧 ease 版:起步更快、落点带轻微过冲回弹,各元素依次"跳跃浮现",
 * 有强烈速度感与弹性;仍 transform-only(CLS 安全)。
 */
export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 300 },
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
 * spring 调校(stiffness 350 / damping 30 / mass 0.9):
 * 滑移顺滑且收尾带一点点弹性过冲 —— 背景像在两个 Chip 之间"流动",
 * 而不是瞬间替换;外发光 boxShadow 让激活态更有浮现感。
 *
 * 注意:absolute inset-0,不占用按钮内文本空间,不影响布局。
 */
export function LayoutHighlight({ layoutId }: { layoutId: string }) {
  return (
    <motion.span
      layoutId={layoutId}
      className="absolute inset-0 -z-0 rounded-full bg-blue-600"
      style={{ boxShadow: '0 2px 14px rgba(37,99,235,0.45)' }}
      initial={false}
      transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.9 }}
    />
  )
}

/* ════════════════════════════════════════
 * 4. 工具卡片 —— 列交错入场 + Hover 抬升 + 鼠标跟随光泽
 * ════════════════════════════════════════ */

export interface AnimatedToolCardProps {
  href: string
  title?: string
  ariaLabel?: string
  /** 卡片视觉变体:默认(纯描边)/ featured(蓝色渐变高亮) */
  variant?: 'default' | 'featured'
  /** 右上角徽章节点(FeaturedTools 的 POPULAR/NEW) */
  badge?: ReactNode
  /** 卡片在网格中的序号(0 起):换算列号(index % 4)驱动列交错入场延迟 */
  index?: number
  children: ReactNode
}

/**
 * 统一的动画工具卡片(替代各处重复的 <Link> 卡片结构)。
 *
 * 入场(每张卡片独立触发,不再依赖容器 stagger):
 *  - `initial="hidden" whileInView="show" viewport once`:卡片滚入视口才浮现,
 *    用户向下滚动时每批卡片依次入场,而不是整网一次性加载。
 *  - 延迟按列(index % 4 × 0.07s):同一行卡片从左到右波纹弹入(column-based stagger)。
 *  - spring(damping 26 / stiffness 280)+ y:32 + scale:0.96:带过冲的"跃出"质感。
 *  - reduce-motion:降级为 0.2s 纯淡入,无位移/延迟。
 *
 * Hover(全部 CSS 驱动,避免入场 variant 的 delay 污染 hover-out 回弹):
 *  - `hover:-translate-y-2`(-8px)抬升 + spring 感贝塞尔 overshoot 回弹;
 *  - 更大更柔的蓝色阴影(0 24px 70px -16px)+ 边框高亮;
 *  - 鼠标跟随 Sheen:径向渐变光斑跟随光标折射(--glow-x/--glow-y 由 onMouseMove
 *    直接写 CSS 变量,不经 React state,零重渲染);reduce-motion 下关闭跟踪,
 *    光斑静止于默认位(50% 20%)。
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
  index = 0,
  children,
}: AnimatedToolCardProps) {
  const reduceMotion = useReducedMotion()

  // 列序号(以桌面 4 列为基准):同一行卡片左→右 0.07s/列 波纹弹入;
  // 平板 2 列时仍呈对角 cascade,视觉同样成立。
  const column = index % 4

  // 入场 variants:reduce-motion 下降级为纯淡入(无位移、无列延迟)
  const variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : toolCardEnterVariants

  // 鼠标跟随折射光泽:把光标相对卡片坐标写入 CSS 变量,Sheen 层(下方 span)
  // 的 radial-gradient 锚点读取该变量。直接操作 DOM style,不过 React state,
  // mousemove 高频事件不触发重渲染;仅 paint,无 layout(CLS=0)。
  const handleMouseMove = reduceMotion
    ? undefined
    : (event: MouseEvent<HTMLDivElement>) => {
        const el = event.currentTarget
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
        el.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
      }

  // 卡片基础样式 —— 全部视觉收敛到这一个带圆角的主卡片元素上(Link):
  //   bg-white / rounded-2xl / border / shadow 全在 Link,外层 motion.div 保持透明。
  //   ★ 等高对齐:h-full flex flex-col —— Link 占满 motion.div 高度(Grid stretch 拉伸 motion.div,
  //     motion.div 再 h-full 撑满网格行高,Link 内 flex-col 让标题区/描述区可分配剩余空间)。
  //   ★ Hover 抬升(-translate-y-2 = -8px)走 CSS 而非 motion:入场 variant 的列 delay
  //     会在 hover 结束时被重新解析,造成 hover-out 明显迟滞;CSS 过渡则进出对称顺滑。
  //     贝塞尔 cubic-bezier(0.34,1.56,0.64,1) 带 overshoot,模拟 spring 回弹手感。
  //   ★ Link(子)与 motion.div(父)的 transform 互不干扰(嵌套元素各自动画)。
  const baseClass =
    variant === 'featured'
      ? 'group relative flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 to-transparent p-5 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 dark:bg-none dark:border-slate-800/80 dark:bg-[#111827] dark:shadow-none'
      : 'group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 dark:border-slate-800/80 dark:bg-slate-900 dark:shadow-none'

  // 悬停:边框高亮变蓝 + 大范围柔和蓝色光晕阴影(0 24px 70px -16px,
  // 比旧 0 20px 40px -12px 更大更柔,暗色也有独立蓝色光晕);圆角元素投射圆角阴影。
  const hoverClass =
    'hover:border-blue-400/80 hover:shadow-[0_24px_70px_-16px_rgba(37,99,235,0.28)] dark:hover:border-blue-500/60 dark:hover:shadow-[0_24px_70px_-16px_rgba(59,130,246,0.22)]'

  return (
    // ★ motion.div 加 h-full:Grid 的 align-items:stretch 拉伸的是网格直接子元素(即 motion.div),
    //   motion.div 必须显式 h-full 才能把拉伸的高度传给内层 Link(否则 Link 仍按内容高度)。
    //   ★ motion.div 是直角无圆角的透明元素,绝不在它上面投阴影(会在圆角卡下方拖出直角色块);
    //     它只负责入场 transform,hover 阴影由 Link 自己投射。
    <motion.div
      variants={variants}
      custom={column}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-48px' }}
      onMouseMove={handleMouseMove}
      className="h-full"
    >
      <Link
        href={href}
        title={title}
        aria-label={ariaLabel}
        className={`${baseClass} ${hoverClass}`}
      >
        {/* Hover 光泽层(Sheen):240px 径向光斑,锚点跟随光标(--glow-x/--glow-y,
            由外层 onMouseMove 写入;缺省 50% 20% = 静止居中偏上)。
            蓝靛折射色(亮 0.14 / 暗 0.16,比旧静态对角渐变更强、更有"玻璃反光"感);
            hover 时 opacity 0→1 淡入(300ms 纯 opacity 过渡,不重排、GPU 合成);
            absolute inset-0 + rounded-2xl 贴合卡片圆角,无需 overflow-hidden;
            pointer-events-none 不拦截交互;
            位于内容之前(DOM 序)自然压在卡片底上、文字之下,不遮盖内容。 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(240px_circle_at_var(--glow-x,50%)_var(--glow-y,20%),rgba(59,130,246,0.14),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(240px_circle_at_var(--glow-x,50%)_var(--glow-y,20%),rgba(129,140,248,0.16),transparent_70%)]"
        />
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
 * 网格容器包装器(提供 className 网格布局 + 容器级 stagger variants)。
 *
 * 注意:AnimatedToolCard 现在自带 `initial/whileInView`(每张卡片独立按视口触发
 * 列交错入场),不再继承本容器的 variants 传播;本组件保留容器级 stagger,
 * 仅对"没有自己 initial/animate 的其它 variants 子项"生效。
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
