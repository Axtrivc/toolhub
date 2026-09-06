# GLM-INNOVATION-TASKS v1 — 2026-08-22 站点创新方案

> ✅ **全部完成(2026-08-26)**:P0-A/B/C、P1-D/E/F、P2-G/H 及扩展轮(ret-vs-buy 交叉曲线、
> grade 仪表盘、compare 图表类型、Loan/AutoLoan 预设、retirement 升级)已全部落地并推送。
> 历史见 commit 2d17eb8→b377afce(共 20 个)。本文档仅作存档,无需再执行。

目标排序（用户钦定）：**① 客户第一眼印象 ② 可视化 ③ 丰富交互**。

一句话方向：把 ToolHub 从「工具目录站」升级为「**上手即用的可视化仪器盘**」——
首页第一屏就能真的用工具（不是看介绍），所有结果默认图形化（不是纯数字表格），
输入从「填表单」变成「推滑杆、看曲线实时动」。

现状盘点（方案落点依据）：
- 169 工具 / Next.js 16 静态导出 / 4 语 en-zh-es-de / 零图表依赖（唯一可视化是手写 SVG 环形图 `components/calculator/BreakdownChart.tsx`，仅 config.chart 声明的工具可见）
- 55 个计算器走 `makeCalculatorClient` 工厂（`lib/calculator-types.ts` 的 FieldDef/OutputDef/ChartConfig 声明式配置，一处改全家受益）
- 首页已是 Raycast/Linear 风：渐变 Hero + ⌘K 面板 + 6 主题 Hub 卡（`ToolHubExplorer`）+ Workspace 抽屉
- 已有可复用资产：framer-motion v12 + useReducedMotion 规范、D1 访客计数 API（`/api/stats` 返回 total/today/visitors）、`lib/format.ts` fmtNum/fmtUSD、l10n 走 tui()/t() 四语

全局约束（每个任务都必须遵守）：
- 静态导出：一切纯客户端，无新服务端；SSR/首帧恒默认值终值（hydration 安全），动画一律挂载后启动
- 零新 npm 依赖：图表全部手写 SVG，与 BreakdownChart 同风格、主题变量感知
- reduced-motion 全部降级为直接显示；动画只动 transform/opacity（移动端性能）
- 所有新用户可见串走 tui()/t() 并补 zh/es/de；首页 SEO 文案/H1/内链与 AdSlot 位置不动
- 单会话不跑 tsc/next build/git，中央统一验收

优先级总览：

| # | 任务 | 目标 | 工作量 | 依赖 |
|---|------|------|--------|------|
| P0-A | 首页 Bento 活工具矩阵 | 第一眼 | M | 无 |
| P0-B | SVG 图表套件 + 工厂 chart 类型扩展 | 可视化 | M-L | 无 |
| P0-C | 数值滑杆输入 + 实时联动 | 交互 | M | 与 B 并行安全（不同文件区） |
| P1-D | 金融四件套核心曲线 | 可视化 | S/工具 | B |
| P1-E | 健康仪表盘 + 人生周格 | 可视化+传播 | S-M | B |
| P1-F | 结果数字动画 + 移动端 sticky 结果条 | 交互打磨 | S-M | 无 |
| P2-G | ⌘K 内联计算/换算答案 | 交互 | M | 无 |
| P2-H | 场景预设 chips + 结果分享卡 | 交互+传播 | S-M | 无 |

---

## P0-A 首页 Bento 活工具矩阵（第一眼的决定性一击）

**问题**：首页第一屏是「标题 + 搜索框 + 6 张目录卡」——再精致也是目录。所有竞品（calculator.net / rapidtables / 10015.io）首屏全是列表，用户 1 秒内没有任何「已经用上了」的感觉。

**方案**：Hero 搜索框与 ToolHubExplorer 之间插入 Apple 风格 Bento Grid（`grid-cols-2 md:grid-cols-4`，格子尺寸不等），其中 4~5 格是**真正能用的迷你工具**，不是截图不是 GIF：

1. **迷你百分比计算器格**（2 输入即时出结果，最通用的心算刚需）
2. **迷你单位换算格**（复用 `makeUnitConverter` 工厂的换算表，cm↔in 起步，⇄ 按钮带上）
3. **自动演示格**：一个小型月供卡每 4s 自动「打字→出结果→数字滚动」循环（mortgage 最能代表站点价值；挂载后才开始动画，SSR 是静帧）
4. **访客心跳格**：复用 `/api/stats` D1 链路显示 `visitors today` + count-up 滚动（社交证明；请求失败静默隐藏，沿用 SiteStats 的 dead-ref 模式）
5. **今日格**：今日日期 + 第几周 + 距年末倒计时（纯派生数据，SSR 安全用 '—' 占位挂载后填充，同 deriveNow 模式）

每格底部小字 + → 跳完整工具（内链到对应工具页，SEO 不减反增）。

**Why 值得做**：「show, don't tell」的极致——落地 3 秒内用户已经完成一次计算，跳出率/停留时长/回访率全利好，且这是所有竞品都没做的差异点。

**落点**：`app/page.tsx`（插一节）、新 `components/home/LiveBento.tsx`（+ 迷你格子子组件）、`lib/i18n` 补 4 语 key。注意 WorkspaceDashboard 是 dynamic ssr:false，Bento 里除自动演示格外均可 SSR（默认值终值），保持首屏内容充实。

**验收**：Lighthouse 性能不掉（Bento 无重依赖、纯静态首帧）；zh 首屏无英文残留；reduced-motion 下自动演示格静止。

---

## P0-B SVG 图表套件 + 工厂 chart 配置扩展（可视化的地基）

**问题**：全站唯一可视化是 donut 环形图，且只覆盖显式声明 chart 的少数工具。贷款摊销、复利增长、BMI 区间这类「工具站最该图形化」的场景全是纯数字。

**方案**：新建 `components/charts/` 套件（全部手写 SVG、零依赖、主题变量取色、与 BreakdownChart 同族设计语言）：

1. **LineAreaChart**：单/多序列面积折线。特性：hover 竖直 crosshair + tooltip（显示该 x 点各序列值）；入场 path 描线动画（stroke-dashoffset，reduced-motion 直接显示）；数值轴自动 nice ticks。
2. **GaugeChart**：半环仪表盘。多色区带（如 BMI 的 4 区间）+ 指针（spring 动画）+ 当前值大字。
3. **StackedCompareChart**：横向堆叠对比条（方案 A vs B，如「30 年 vs 15 年总利息」）。

**工厂接入**（一处改动，55 工具受益）：`CalculatorConfig.chart` 从单一 donut 形状扩展为联合类型：

```ts
type ChartConfig =
  | { kind?: 'donut'; /* 现有字段不动 */ }
  | { kind: 'gauge'; valueKey: string; min: number; max: number;
      zones: { upTo: number; color: string; label: string }[] }
  | { kind: 'series'; seriesKey: string }  // 见下
// 新增可选钩子：compute 只回格式化字符串，曲线需要原始数值序列
series?: (values: Record<string, string>) => {
  xLabels: string[]            // 每点 x 标签（如 'Y5'）
  lines: { key: string; label: string; color: string; points: number[] }[]
  area?: boolean; compareHighlight?: [number, number] // 高亮区间（省息区域）
}
```

向后兼容：现有 `config.chart`（donut）不写 kind 也照常工作；自定义 client（Mortgage/Loan 等非工厂组件）后续单独接组件。

**验收**：任一现有 donut 工具回归无 diff；新类型只在声明处渲染；SSR 首帧用默认值画完整图（确定性数据，hydration 安全）。

---

## P0-C 数值滑杆输入 + 实时联动（交互手感质变）

**问题**：现在所有数值输入是 `<input type="number">`——改利率要选中、删除、重敲，「调参」的手感是表单不是仪器。

**方案**：`FieldDef` 加可选 `slider?: { min: number; max: number; step: number }`；工厂对声明了 slider 的 number 字段渲染 **range 滑杆 + 数字框双向绑定**（拖杆即时回写数字框，数字框输入也同步杆位）。结果卡与图表随拖动实时刷新。

首批接入字段（config-only 改动）：
- 利率类：mortgage/loan/auto-loan/compound-interest/apy/savings 的 rate 字段（min 0 max 15 step 0.05）
- 年限/期数：term 字段（1–40）
- 健康类：年龄（18–80）、身高体重滑杆谨慎（范围太大粒度差，体重 30–200 step 1 可试）

**细节**：滑杆轨道/thumb 用主题变量自定义样式（accent-color 兜底）；拖动用 React state 已有链路（compute 是纯函数 + useMemo，性能足够）；滑杆旁显示当前值气泡（可选 P2）。

**验收**：拖 mortgage 利率滑杆，月供数字与（P1-D 接入后的）曲线连续跟随；SSR 首帧 = 默认值，无 hydration 警告。

---

## P1-D 金融四件套核心曲线（可视化落地在流量最大的工具上）

用 P0-B 套件给头部金融工具上曲线（每工具 S 工作量，主要是 series 钩子实现）：

1. **mortgage-calculator**（刚完成 PITI + 提前还款，正是可视化最佳时机）：
   - 余额递减面积图（360 个月）
   - **双曲线对比**：有/无 extra payment 的余额曲线，中间省息区域半透明高亮 —— 「你省下的 $XX,XXX」一眼看到，是全站最强的转化画面
2. **loan / auto-loan / credit-card-payoff**：余额曲线 + 本息 donut（已有）
3. **compound-interest / retirement / savings-goal**：本金 vs 收益堆叠面积（「利滚利」的视觉冲击）+ StackedCompareChart（提前开始 vs 晚 10 年）
4. **investment-fee-calculator**（若有费率对比）：费用吞噬曲线

**Why**：这些是 SEO 长尾主力页，图 = 停留时长 = AdSense 收入；NerdWallet/Bankrate 标配曲线，咱们静态导出加载比它们快，是「更快还更好看」的碾压点。

---

## P1-E 健康仪表盘 + 人生周格（差异化传播型可视化）

1. **BMI / BodyFat / IdealWeight**：GaugeChart 半环色区（过轻/正常/超重/肥胖），指针 spring 滑动到当前值；BodyFat 双方法共用仪表。数字变成「表盘落在哪个颜色带」，感知效率完全不同。
2. **age-calculator：Life in Weeks 人生周格**——90 年 × 52 周的 4680 点阵，已过的周实色、剩余的周淡色、当前周高亮脉冲。这是著名可视化（Wait But Why），社交传播力极强，竞品工具站几乎没人做，且天然适配手写 SVG 网格 + SSR（数据由生日输入派生，确定性）。

---

## P1-F 结果数字动画 + 移动端 sticky 结果条（交互打磨）

1. **ResultCard 主数字 tween**：值变化时旧值→新值 spring 过渡（framer-motion `useSpring`/`animate`），挂载后启用，SSR 终值。数字「活」了，整个站立刻像实时仪表。
2. **移动端 sticky 结果条**：滚动越过结果卡后，底部悬浮迷你条显示主结果（highlight 字段），输入任何变化即时更新。手机上调表单时结果永远可见——移动端体验的胜负手。

---

## P2-G ⌘K 内联计算/换算（Raycast 式 wow）

SearchPalette 输入即答：
- `15% of 2400` → `360`
- `120*1.08` → `129.6`
- `100cm to in` → `39.37`（复用 makeUnitConverter 换算表 + 温度偏移钩子）

命中时结果行置顶，↓ 选中回车跳对应完整工具（既是答案又是工具发现入口）。纯客户端、零依赖（表达式求值用受限手写 tokenizer，禁 eval）。

## P2-H 场景预设 chips + 结果分享卡

1. **Preset chips**：输入区上方一排场景按钮（mortgage：「30yr fixed / 15yr fixed / 10% down FHA」），一键填充多字段后配合滑杆调参——「选场景→微调」是真实用户路径。
2. **分享卡**：结果卡一键「Copy as image」——canvas 2D 绘制（数值 + donut/曲线缩略 + 站点域名水印），navigator.share 优先。用户把结果图发社群 = 免费获客回路。

---

## 执行顺序与并行建议

```
第 1 批（并行）：P0-B（calculator-types + components/charts/ 新目录 + 工厂渲染分支）
              + P0-C（FieldDef.slider + CalculatorField 渲染）   ← 两者文件区不重叠，可并行
              + P0-A（page.tsx + components/home/ 新目录）        ← 与上两者不重叠，可并行
第 2 批（依赖 B）：P1-D 金融曲线逐工具、P1-E gauge/周格
第 3 批（随时）：P1-F、P2-G、P2-H
中央验收：cd D:/ToolHub && npx tsc --noEmit && npx next build
```

commit 惯例：`feat(ux): 首页Bento活工具矩阵` / `feat(viz): SVG图表套件+工厂chart扩展` / `feat(ux): 数值滑杆输入` 等。
