# 信息架构、可信度与缓存审查（2026-10-31）

## 可确认的问题与已实施修改

| 发现 | 证据 / 影响 | 修复 / 验证 | 副作用与回滚 |
|---|---|---|---|
| Related Tools 忽略已存在的工作流 `nextTools` | 基线 `getRelatedTools` 仅按分类与 featured 排序；JSON Repair 推荐上下文窗口、训练数据等，而不是格式化 / schema 验证；这些链接确实会静态渲染 | 先选已发布的任务链和显式 nextTools，再按原分类规则补齐。Loan→Amortization/Mortgage；JSON Formatter→Repair→Zod/Diff；Token→API Cost→Context。生成轻量索引，测试源与客户端 350 页一致 | 会改变推荐顺序，保留全部页面和 URL。回滚 `getRelatedTools`，重跑索引生成器；没有新增服务或依赖 |
| SW 离线兜底查错缓存 | install 将 `/` 写入 STATIC_CACHE；networkFirst 却只查 RUNTIME_CACHE。此前未导航访问的页面离线时找不到已预缓存首页 | 导航失败才查 STATIC_CACHE 的首页；缓存过的当前页面仍优先。行为测试覆盖安装→离线导航 | 离线可用仍需首次联网成功安装，不能保证任意工具首次离线可用；回滚 sw.js 和版本号 |
| SW 把 HTML 兜底用于文本/RSC | networkFirst 同时处理 HTML 与无哈希 `.txt`/RSC；不区分类型就可能给 RSC 返回首页 HTML | 只有 HTML 导航可回退 shell；未缓存 RSC 正常拒绝，不伪造成功响应；测试验证 | 未缓存的离线动态导航仍可能失败，这是准确的能力边界 |
| SW 清理其它同源应用缓存 | activate 删除所有非当前版本缓存，无命名空间约束 | 只清理 `static-toolhub-sw-*` / `runtime-toolhub-sw-*` 的旧版本；保留其它命名空间；测试验证 | 不再替其它应用清理缓存；ToolHub 自己旧版仍删除 |
| Token Counter 准确度承诺无校准依据 | `content.tsx` 四语声称误差约10–20%，代码仅字符/词/标点启发式，未运行模型 tokenizer；FAQ 与复制结果暗示接近 cl100k_base | 四语正文明确没有已验证误差界限；FAQ、复制摘要改成不暗示具体 tokenizer 的估算说明，推荐模型官方 tokenizer/token-count API | 未改变数值算法或费用结果；减少误用上下文硬限制/账单判断。可独立回滚文案，但不建议恢复无依据承诺 |

以上是当前代码确认问题，不是 8 月 18 日搜索曝光下降的因果证明。

## 架构与广告检查

- RelatedTools 是客户端组件，但静态预渲染输出标准链接，不能仅因 `use client` 判断抓取故障。
- `ToolLayout` 引用轻量索引而非全部 SEO 注册表，PR #3 / 前序优化仍保留；没有借 SEO 调查重写整体组件架构。
- 轻量索引也含首页搜索所需 keywords、H1，不是仅四字段（旧注释过时）。本次不拆包，没有宣称 JS 体积降低。
- AdSlot 在生产缺真实 client/slot 时返回 null；开发占位不代表线上广告高度。已配置时有顶部/内容后/FAQ前/底部四处，预留最小高度，用户拒绝广告及 embed 模式隐藏。最小高度不等于实测 CLS 为零。
- 未获取生产广告配置和广告加载场景的完整现场性能，不据此盲删广告。应在真实配置手机设备上测输入区域位置、广告填充高度和布局移动，再决定减少顶部广告。
- 独立浏览器审查产生的 baseline/final JSON 是本地实验；其 LCP/CLS 不等同 CrUX 的75百分位。INP 需要真实交互分布，不能把一次点击延迟称为现场 INP。

## 专题中心决策

本次不新增只是目录副本的 AI / Developer / Finance 索引页。已有目录和相关工具链接可发现这些页面；先把任务链做准再增 URL。

下一轮值得产出的独立任务指南：
1. **JSON 数据质量流程**：原始响应→修复→人工核对变更→schema 推断→用真实数据验证；公开失败样例、损坏字符保留规则和可运行测试。跨 Repair/Formatter/Zod/Diff 链接。
2. **LLM 容量与费用规划**：真实 tokenizer 计数→输入与输出预算→上下文窗口限制→按供应商价格计算，公开模型/价格来源及核验日期，区别估算与账单。当前启发式计数不足以支持“精确 token”定位。
3. Finance/Loans 适合有公式、独立数值测试、费用排除说明和贷款条款来源的比较指南；先补准确性证据，不将免责声明当成专业资质。

优先方向选 JSON 数据质量与可复现的浏览器开发工具。AI 费用工具是候选方向，需要先解决价格来源与 tokenizer 精度证据。金融工具继续维护，但不能仅靠覆盖大量关键词建立信任。

## 其它核查与限制

- `lib/rating.ts` 基线残留伪随机评分函数，`rg` 未发现实际使用；父任务处理去除残留和 schema 门禁。未使用的文件不是当前渲染假评分的证据。
- Mortgage 当前已有税费/保险/PMI实现，不能把历史缺功能问题直接套到最新版本。
- GPT Token Counter 当前 UI 已标“估算”，问题是更强的准确度承诺而非隐瞒所有估算性质。
- `lib/model-pricing.ts` 头注释写最后核对2026-08-14，同时解释8月17日价格规则。可确认来源日期不一致，不能确认每个数值错误。本次未改价格或捏造核验日期；需供应商官方定价快照与实际账单规则进一步核验。
- Contact 暴露联系地址不等于已验证邮箱投递；没有发送邮件作测试。

## 已执行检查

- `node scripts/test-service-worker.mjs`：5 个行为测试通过。
- `node scripts/test-related-tools.mjs`：4 项通过，其中全量检查350个工具的目标有效性、无自链/重复及生成索引一致。
- `node --experimental-strip-types --disable-warning=ExperimentalWarning scripts/gen-related-index.mjs`：重新生成350工具索引；无新增依赖。
- 浏览器与最终构建以主任务 `AUDIT.md` / `CHANGES.md` 中的实际结果为准。
