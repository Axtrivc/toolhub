'use client'

import { ChartCard } from './chartKit'
import { fmtNum } from '@/lib/format'

/**
 * 参数化几何图形预览(几何计算器专用可视化)。
 *
 * 圆/直角三角形/矩形/梯形/立方体/球,按当前输入等比缩放绘制,并标注
 * 尺寸线 —— 拖滑杆时图形实时变形,「输入 → 形状」的映射一眼建立。
 *
 * 约束(与图表套件一致):
 *  - 手写 SVG 零依赖,主题变量取色,填充仅半透明底色;
 *  - SSR 首帧按默认值画完整形状(确定性,hydration 安全);
 *  - 尺寸标注走 dim 数组(顺序由 config.dimKeys 决定),值非法(<0/NaN)
 *    时整卡不渲染。
 */

const VB_W = 320
const VB_H = 190
const PAD = 34

type Dim = { label: string; value: number; unit?: string }

function dimText(d: Dim): string {
  return `${d.label} = ${fmtNum(d.value, 2)}${d.unit && d.unit.length <= 3 ? ` ${d.unit}` : ''}`
}

/** 尺寸线(两端短竖线 + 虚线)+ 居中标注 */
function DimLine({
  x1, y1, x2, y2, text, tx, ty,
}: { x1: number; y1: number; x2: number; y2: number; text: string; tx?: number; ty?: number }) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  const T = 5
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(var(--text-faint))" strokeWidth="1" strokeDasharray="4 3" />
      <line x1={x1 - nx * T} y1={y1 - ny * T} x2={x1 + nx * T} y2={y1 + ny * T} stroke="rgb(var(--text-faint))" strokeWidth="1" />
      <line x1={x2 - nx * T} y1={y2 - ny * T} x2={x2 + nx * T} y2={y2 + ny * T} stroke="rgb(var(--text-faint))" strokeWidth="1" />
      <text
        x={tx ?? (x1 + x2) / 2}
        y={ty ?? (y1 + y2) / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="11"
        fill="rgb(var(--text-muted))"
        style={{ paintOrder: 'stroke', stroke: 'rgb(var(--bg-card))', strokeWidth: 3 }}
      >
        {text}
      </text>
    </g>
  )
}

export function ShapeFigure({
  title,
  shape,
  dims,
}: {
  title?: string
  shape: 'circle' | 'triangle' | 'rectangle' | 'trapezoid' | 'cube' | 'sphere'
  dims: Dim[]
}) {
  // 0 尺寸会让缩放系数 k = max/0 → Infinity → 图形坐标 NaN(属性被浏览器丢弃,卡片空白)
  if (dims.some((d) => !Number.isFinite(d.value) || d.value <= 0)) return null

  const fill = 'rgb(var(--primary) / 0.10)'
  const stroke = 'rgb(var(--primary))'

  let body: React.ReactNode = null

  if (shape === 'circle' || shape === 'sphere') {
    const r = dims[0]?.value ?? 1
    const maxR = Math.min(VB_W, VB_H) / 2 - PAD
    const k = maxR / r
    const cx = VB_W / 2 - 20
    const cy = VB_H / 2
    const R = r * k
    body = (
      <>
        <circle cx={cx} cy={cy} r={R} fill={fill} stroke={stroke} strokeWidth="1.5" />
        {shape === 'sphere' && (
          <>
            <ellipse cx={cx} cy={cy} rx={R} ry={R * 0.28} fill="none" stroke={stroke} strokeWidth="1" opacity="0.5" />
            <ellipse cx={cx} cy={cy} rx={R * 0.28} ry={R} fill="none" stroke={stroke} strokeWidth="1" opacity="0.5" strokeDasharray="4 3" />
          </>
        )}
        {/* 半径标注:圆心 → 右侧 */}
        <line x1={cx} y1={cy} x2={cx + R * Math.cos(-Math.PI / 4)} y2={cy + R * Math.sin(-Math.PI / 4)} stroke="rgb(var(--text-faint))" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx={cx} cy={cy} r="2" fill={stroke} />
        <text
          x={cx + (R * Math.cos(-Math.PI / 4)) / 2 + 8}
          y={cy + (R * Math.sin(-Math.PI / 4)) / 2 - 6}
          fontSize="11" fill="rgb(var(--text-muted))"
          style={{ paintOrder: 'stroke', stroke: 'rgb(var(--bg-card))', strokeWidth: 3 }}
        >
          {dimText(dims[0])}
        </text>
      </>
    )
  } else if (shape === 'rectangle') {
    const w = dims[0]?.value ?? 1
    const h = dims[1]?.value ?? 1
    const k = Math.min((VB_W - PAD * 3) / w, (VB_H - PAD * 2.2) / h)
    const W = w * k
    const H = h * k
    const x0 = (VB_W - W) / 2
    const y0 = (VB_H - H) / 2
    body = (
      <>
        <rect x={x0} y={y0} width={W} height={H} rx="3" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <DimLine x1={x0} y1={y0 + H + 14} x2={x0 + W} y2={y0 + H + 14} text={dimText(dims[0])} ty={y0 + H + 14} />
        <DimLine x1={x0 + W + 16} y1={y0} x2={x0 + W + 16} y2={y0 + H} text={dimText(dims[1])} tx={x0 + W + 16} />
      </>
    )
  } else if (shape === 'triangle') {
    // 直角三角形:竖边 a,横边 b,斜边 c
    const a = dims[0]?.value ?? 1
    const b = dims[1]?.value ?? 1
    const k = Math.min((VB_W - PAD * 3.4) / b, (VB_H - PAD * 2.6) / a)
    const A = a * k
    const B = b * k
    const x0 = (VB_W - B) / 2 + 10
    const y0 = (VB_H - A) / 2
    const pts = `${x0},${y0 + A} ${x0},${y0} ${x0 + B},${y0 + A}`
    body = (
      <>
        <polygon points={pts} fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <DimLine x1={x0 - 16} y1={y0} x2={x0 - 16} y2={y0 + A} text={dimText(dims[0])} tx={x0 - 16} />
        <DimLine x1={x0} y1={y0 + A + 14} x2={x0 + B} y2={y0 + A + 14} text={dimText(dims[1])} ty={y0 + A + 14} />
      </>
    )
  } else if (shape === 'trapezoid') {
    const a = dims[0]?.value ?? 1
    const b = dims[1]?.value ?? 1
    const h = dims[2]?.value ?? 1
    const k = Math.min((VB_W - PAD * 3) / Math.max(a, b), (VB_H - PAD * 3) / h)
    const A = a * k
    const B = b * k
    const H = h * k
    const x0 = (VB_W - B) / 2
    const y0 = (VB_H - H) / 2
    const xA = x0 + (B - A) / 2
    const pts = `${xA},${y0} ${xA + A},${y0} ${x0 + B},${y0 + H} ${x0},${y0 + H}`
    body = (
      <>
        <polygon points={pts} fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <DimLine x1={xA} y1={y0 + H + 14} x2={xA + A} y2={y0 + H + 14} text={dimText(dims[0])} ty={y0 + H + 14} />
        <DimLine x1={x0 - 16} y1={y0} x2={x0 - 16} y2={y0 + H} text={dimText(dims[2])} tx={x0 - 16} />
        <text x={x0 + B + 12} y={y0 + H / 2} fontSize="11" fill="rgb(var(--text-muted))" dominantBaseline="middle" style={{ paintOrder: 'stroke', stroke: 'rgb(var(--bg-card))', strokeWidth: 3 }}>
          {dimText(dims[1])}
        </text>
      </>
    )
  } else if (shape === 'cube') {
    const s = dims[0]?.value ?? 1
    const k = (Math.min(VB_W, VB_H) - PAD * 2.6) / s
    const S = s * k
    const off = S * 0.32
    const x0 = (VB_W - S - off) / 2
    const y0 = (VB_H - S - off) / 2 + 4
    body = (
      <>
        {/* 2.5D 立方体:正面 + 顶面 + 右侧面 */}
        <rect x={x0} y={y0} width={S} height={S} rx="2" fill={fill} stroke={stroke} strokeWidth="1.5" />
        <polygon points={`${x0},${y0} ${x0 + off},${y0 - off} ${x0 + S + off},${y0 - off} ${x0 + S},${y0}`} fill="rgb(var(--primary) / 0.18)" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points={`${x0 + S},${y0} ${x0 + S + off},${y0 - off} ${x0 + S + off},${y0 + S - off} ${x0 + S},${y0 + S}`} fill="rgb(var(--primary) / 0.05)" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        <DimLine x1={x0} y1={y0 + S + 14} x2={x0 + S} y2={y0 + S + 14} text={dimText(dims[0])} ty={y0 + S + 14} />
      </>
    )
  }

  return (
    <ChartCard title={title}>
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full" role="img" aria-label={title ?? shape}>
        {body}
      </svg>
    </ChartCard>
  )
}
