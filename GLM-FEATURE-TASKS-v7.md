# GLM-FEATURE-TASKS v7 — 2026-08-17 第三轮审计后的功能增强 Backlog

> ✅ **全部完成(2026-08-25 前后各轮)**:命令 1 健康公英制、2 单位换算全单位面板、
> 3 Mortgage PITI、4 D5 示例本地化均已落地(见 toolhub-audit-fix-2026-08 记忆)。
> 本文档仅作存档,无需再执行。

来源：commit `5d6a7dc` 审计中标记为"功能增强而非缺陷"的遗留项。
用法：每条命令整段粘贴到新的 ZCode 会话即可执行（自带完整上下文）。
并行约束：**命令 1 与命令 3 共享 `batch3Calculators.tsx`，不可同时跑**；
安全组合 = {1 + 2 + 4} 并行，命令 3 随后单独跑。

---

## 命令 1 — 健康五件套公制/英制切换

```
项目 D:\ToolHub（Next.js 15 静态导出工具站，4 语 en/zh/es/de）。参考实现：components/calculators/BMICalculatorClient.tsx 已有 metric/imperial 单位切换 UI 模式（unitMode state + 切换按钮），以它为范式。

任务：给健康类计算器补英制单位支持（美国是英文站主力用户，竞品标配）。

你负责的文件（禁止触碰清单外文件）：
- components/calculators/BMICalculatorClient.tsx
- components/calculators/TdeeCalculatorClient.tsx
- components/calculators/batch3Calculators.tsx（只动 BMRCalculatorClient / CalorieCalculatorClient / WaterIntakeCalculatorClient / IdealWeightCalculatorClient 四个组件，勿动同文件的 mortgage/credit-card-payoff 等）
- components/calculators/batch6Calculators.tsx（只动 BodyFatCalculatorClient）
- l10n bundle：lib/i18n/tools-l10n/ 下 bmi-calculator、tdee-calculator、bmr-calculator、calorie-calculator、water-intake-calculator、ideal-weight-calculator、body-fat-calculator

逐项要求：
1. BMI（已有切换，两个增强）：a) 英制模式身高改为 ft + in 双输入框（内部合成 inches，6'0"=72in）；b) 切换单位制时按 1in=2.54cm、1lb=0.45359237kg 自动换算保留数值，不再清空。
2. TDEE / BMR / Calorie：加 metric|imperial 切换（lb + ft/in），内部换算成 kg/cm 后走既有 Mifflin-St Jeor 公式（公式本身勿改），输出体重类结果双单位显示或跟随所选单位制。
3. WaterIntake：体重支持 lb（35ml/kg 口径换算），输出 oz 双显（1ml≈0.033814oz）。
4. IdealWeight：身高支持 ft/in（Devine 公式本身按英寸 over 5ft，英制输入更自然；注意保持 152.4cm 以下负值直接代入公式的既有修复）。
5. BodyFat（Navy 法）：加 metric|imperial 切换；再加 Method 切换：Navy / BMI（Deurenberg 公式：BF% = 1.20×BMI + 0.23×age − 10.8×sex − 5.4，sex 男=1 女=0；BMI 法需补 weight 字段输入）。

约束：初始 state 固定公制（SSR/hydration 安全），切换是纯客户端事件；换算常数精确（1lb=0.45359237kg、1in=2.54cm）；新增用户可见字符串走该组件既有 L()/tui() 模式并同步补 zh/es/de bundle 键；不要运行 tsc/next build/git（中央统一验收）。
完成后输出「文件→改动点」清单与任何偏离。
```

## 命令 2 — 单位换算器「一值全单位同显 + 交换按钮」

```
项目 D:\ToolHub（Next.js 15 静态导出工具站，4 语 en/zh/es/de）。

任务：改造单位换算工厂，让全部 ~16 个单位换算器获得竞品标准形态。

你负责的文件（禁止触碰清单外文件）：
- components/calculators/makeUnitConverter.tsx（工厂本体，一处改动全家受益）
- 该工厂 UI 新增 chrome 字串所需的 l10n 接入（按工厂现有 i18n 模式；若走 tui 则只需在 bundle 缺省回退英文即可，不强制逐工具补键）

功能要求：
1. 交换按钮 ⇄：结果区上方，setFrom(to)/setTo(from)，输入数值保持不变（语义跟随单位互换）。
2. "All units" 同显面板：输入一个值 → 一次性显示所有单位的换算结果（表格或紧凑列表）；换算方向必须复用工厂现有 toBase/fromBase 逻辑——特别注意：a) 温度类有偏移换算钩子（°C/°F/K），不能按线性 factor 直算；b) fuel-economy 的 L/100km 与 mpg/km/L 是倒数关系，检查该工具 units 表结构后按其机制正确输出。面板中每行可点击设为 To 单位。
3. 极小/极大值显示沿用 lib/format.ts 的 fmtNum（已支持科学计数法），勿另写格式化。
4. 保持 SSR 首帧确定性（面板是纯派生数据，无随机/时间依赖）。

受益工具（无需逐个改动，验证时抽查）：angle/data-storage/energy/frequency/fuel-economy/pressure/time/density/power/flow-rate（components/converters/）+ length/mass/speed/volume/weight/area/temperature（batch2Clients / generatedClients 生成）。numeral-system-converter 不走该工厂，不受影响。
验收口径（脑中/纸面核对）：100°C 面板显示 212°F / 373.15K；30 US mpg 显示 7.84 L/100km 与 12.75 km/L；1 GiB 显示 1073741824 bytes 或 1.0737e9（双轨表）。
不要运行 tsc/next build/git。完成后输出「文件→改动点」清单与任何偏离。
```

## 命令 3 — Mortgage PMI/税/保险完整 PITI（与命令 1 串行，共享 batch3Calculators.tsx）

```
项目 D:\ToolHub（Next.js 15 静态导出工具站，4 语 en/zh/es/de）。背景：lib/tools.ts 里 mortgage-calculator 的 titleLongTail 承诺了 "Mortgage Calculator with PMI & Taxes"，但当前工具只算 P&I，SEO 承诺未兑现。

任务：给 mortgage-calculator 补 PMI/房产税/保险/HOA 与提前还款对比。

你负责的文件（禁止触碰清单外文件）：
- components/calculators/batch3Calculators.tsx（只动 MortgageCalculatorClient，勿动同文件其他组件；注意上一批次可能已改动此文件，动手前完整重读）
- app/tools/mortgage-calculator/content.tsx（正文若有 "P&I only" 类表述，四语同步更新为新功能）
- lib/tool-faqs.ts 中 mortgage 相关条目（若有 P&I only 表述则同步）
- l10n bundle：lib/i18n/tools-l10n/mortgage-calculator.ts

功能要求：
1. 新增可选输入（合理默认：年房产税 $3,600、年房屋保险 $1,500、月 HOA $0、PMI 0.5%）：
   - PMI 逻辑：月 PMI = 贷款额 × PMI% / 12，且仅当首付 < 20%（LTV > 80%）时生效，否则自动为 $0 并在 note 说明。
2. 输出：P&I（现有）+ 税/保险/HOA/PMI 分项月供 + PITI 总月供（highlight）。
3. Extra payment：可选每月额外还款 $ 字段（默认 0），>0 时摊销模拟输出：提前还清月数、节省利息、相比不额外还款的时间差（月数上限 600 防死循环）。
4. 数学口径：月供公式与现有 LoanCalculatorClient 一致（标准摊销）；税/保险按年额/12 折月。

约束：新增字段/输出 label 走 makeCalculatorClient 的 fields/outputs 配置 + tui() 本地化（bundle 补 zh/es/de 键，照既有键风格）；数字格式沿用 lib/format 的 fmtUSD/fmtNum；不要运行 tsc/next build/git。
验收口径：$400,000 房 / 20% 首付 / 6.5% / 30 年 → P&I ≈ $2,025，PMI 自动 $0；同条件 10% 首付 → PMI ≈ $150/月，PITI = P&I + $300 税 + $125 保险 + $150 PMI。
完成后输出「文件→改动点」清单与任何偏离。
```

## 命令 4 — D5：24 个文本工具 defaultInput 本地化

```
项目 D:\ToolHub（Next.js 15 静态导出工具站，4 语 en/zh/es/de）。

任务：解决遗留的 D5 项——makeTextTool 工厂工具的默认示例输入恒英文，zh/es/de 用户首屏看到英文示例。

你负责的文件（禁止触碰清单外文件）：
- components/tools/makeTextTool.tsx（工厂机制改造）
- components/tools/EncoderDecoderTool.tsx（同机制适配，两方向示例）
- lib/i18n/tools-l10n/ 下以下 24+6 个工具的 bundle（仅加 defaultInput 相关键）：
  batchTextTools：uppercase-converter lowercase-converter title-case-converter sentence-case-converter reverse-text remove-duplicate-lines sort-lines remove-line-breaks
  batch3TextTools：json-formatter json-minifier csv-to-json json-to-csv add-line-numbers text-to-list
  batch4TextTools：url-query-parser html-tag-stripper character-frequency email-extractor url-extractor text-diff text-size-estimator
  batch5TextTools：slug-to-title binary-to-text text-to-binary
  EncoderDecoderTool 六件套：base64-encoder base64-decoder url-encoder url-decoder html-escape html-unescape

机制要求：
1. 工厂改造：config.defaultInput 保持英文初值（SSR/静态导出首帧恒英文，hydration 安全）；挂载后（mounted 门控已有）若用户从未编辑过输入（pristine：用 ref 在 onChange 首次触发时置 false，或 input === 当前生效示例的判定），且 tui(slug, locale, 'defaultInput', ...) 存在本地化值（≠英文 fallback），则把输入替换为本地化示例；locale 运行时切换时同样处理（仍 pristine 才替换，用户输入永不覆盖）。
2. EncoderDecoderTool 同理，键名 defaultInputEncode / defaultInputDecode（encode/decode 两方向各自的示例）。
3. bundle 补键：zh/es/de 各写一个贴合该工具语义的真实本地化示例（中文示例必须是真实中文文本/数据，不是英文占位；如 csv-to-json 的中文表头示例、sort-lines 的中文行）。注意部分工具的 defaultInput 已有语法含义（text-diff 的 " ||| " 分隔、csv-to-json 的 "||| 分隔符覆盖" 尾段），本地化示例必须保持该语法结构有效。
4. 与 LoadSampleButton/lib/tool-samples.ts 的关系：动手前先查这两个机制是否已有本地化示例，避免两套示例打架；若 LoadSample 已覆盖某工具则该工具 bundle 只需与 sample 口径一致。

约束：不改任何工具的 transform 逻辑；不要运行 tsc/next build/git。
验收口径：zh locale 打开 uppercase-converter 首屏英文（SSR HTML），挂载瞬间换为中文示例且无 hydration 警告；用户手动输入后切 locale 不被覆盖。
完成后输出「文件→改动点」清单与任何偏离。
```

---

## 中央验收（全部命令完成后执行一次）

```
cd D:/ToolHub && npx tsc --noEmit && npx next build
```

通过后按仓库惯例提交：`feat(tools): 健康英制/全单位同显/抵押PITI/D5示例本地化`，
push 经代理 127.0.0.1:10808（代理未开时直连可推）。
