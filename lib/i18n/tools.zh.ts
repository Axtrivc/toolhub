/**
 * 工具卡片文案 - 中文翻译(zh)
 *
 * 结构:Record<slug, { name, shortIntro }>
 * - slug 与 lib/tools.ts 的 slug 字段一一对应(共 138 个)
 * - 缺失的 slug 自动回退到英文原值(见 lib/i18n.ts getToolName/getToolShortIntro)
 * - 此文件只翻译首页/卡片展示用的 name + shortIntro,
 *   不碰 SEO 字段(title/description/h1/keywords 等保持英文)
 *
 * 更新工具翻译时:对照 lib/tools.ts 对应 slug 的 name + shortIntro 翻译即可。
 */

export const zhTools: Record<string, { name: string; shortIntro: string }> = {
  // ─────────── 💳 金融计算器 ───────────
  'loan-calculator': {
    name: '贷款计算器',
    shortIntro: '计算任意贷款的月供、总利息和全部成本。',
  },
  'mortgage-calculator': {
    name: '房贷计算器',
    shortIntro: '计算月供房贷和总利息。',
  },
  'compound-interest-calculator': {
    name: '复利计算器',
    shortIntro: '见证复利如何让你的储蓄增长。',
  },
  'apy-calculator': {
    name: 'APY 计算器',
    shortIntro: '按计息频率将 APR 换算为 APY。',
  },
  'roi-calculator': {
    name: '投资回报率计算器',
    shortIntro: '计算总投资回报和年化回报率。',
  },
  'credit-card-minimum-payment-calculator': {
    name: '信用卡最低还款计算器',
    shortIntro: '查看最低还款额在利息与本金之间如何分配。',
  },
  'cash-back-calculator': {
    name: '返现计算器',
    shortIntro: '计算扣除年费后返现奖励的真实价值。',
  },
  'down-payment-calculator': {
    name: '首付计算器',
    shortIntro: '查询你的首付金额和是否需要 PMI。',
  },
  'dti-calculator': {
    name: '债务收入比计算器',
    shortIntro: '计算 DTI 比率,查看放款方是否会批准你。',
  },
  'commission-calculator': {
    name: '佣金计算器',
    shortIntro: '计算销售佣金加底薪。',
  },
  'bill-split-calculator': {
    name: 'AA 分账计算器',
    shortIntro: '含小费,把账单均匀分摊给每人。',
  },
  'savings-goal-calculator': {
    name: '储蓄目标计算器',
    shortIntro: '算出达到任意储蓄目标所需月存金额。',
  },
  'net-worth-calculator': {
    name: '净资产计算器',
    shortIntro: '计算你的净资产 —— 资产减去负债。',
  },
  'annuity-calculator': {
    name: '年金计算器',
    shortIntro: '计算本金在 N 年内的年/月领取额。',
  },
  'capital-gains-tax-estimator': {
    name: '资本利得税估算器',
    shortIntro: '估算投资的资本利得税(短期 vs 长期税率)。',
  },
  'rent-vs-buy-calculator': {
    name: '租房 vs 买房计算器',
    shortIntro: '比较一段时间内买房与租房的总成本。',
  },
  'inflation-calculator': {
    name: '通胀计算器',
    shortIntro: '查看通胀如何随时间侵蚀货币价值。',
  },
  'retirement-calculator': {
    name: '退休计算器',
    shortIntro: '按复利增长预测你的退休储蓄。',
  },
  'simple-interest-calculator': {
    name: '单利计算器',
    shortIntro: '用 I = Prt 公式计算单利。',
  },
  'unit-price-calculator': {
    name: '单价计算器',
    shortIntro: '比较单位价格,找出真正最划算的交易。',
  },
  'markup-calculator': {
    name: '加价率计算器',
    shortIntro: '由成本和加价率求售价与利润率。',
  },
  'hourly-to-salary-calculator': {
    name: '时薪转年薪计算器',
    shortIntro: '把时薪换算为年薪。',
  },
  'credit-card-payoff-calculator': {
    name: '信用卡还清计算器',
    shortIntro: '查看还清信用卡欠款需要多久。',
  },
  'income-tax-estimator': {
    name: '所得税估算器',
    shortIntro: '估算美国联邦所得税和到手收入。',
  },
  'salary-converter': {
    name: '薪资换算器',
    shortIntro: '在年薪、月薪、双周薪、时薪之间换算。',
  },
  'sales-tax-calculator': {
    name: '销售税计算器',
    shortIntro: '即时为任意价格加上或去除销售税。',
  },
  'tip-calculator': {
    name: '小费计算器',
    shortIntro: '计算合适的小费,并在任意人数间分摊。',
  },
  'discount-calculator': {
    name: '折扣计算器',
    shortIntro: '查询折扣后的最终价格和省下的金额。',
  },
  'auto-loan-calculator': {
    name: '汽车贷款计算器',
    shortIntro: '含首付、置换抵扣和税费,计算车贷月供。',
  },
  'ebay-fee-calculator': {
    name: 'eBay 费用计算器',
    shortIntro: '算清扣除 eBay 或 Etsy 费用后的实际净收入。',
  },
  'reverse-stripe-fee-calculator': {
    name: 'Stripe 手续费反算器',
    shortIntro: '反推应收金额,让扣除手续费后的净收入正好是你要的数。',
  },

  // ─────────── ⚙️ 开发者工具 ───────────
  'json-formatter': {
    name: 'JSON 格式化',
    shortIntro: '按正确缩进格式化并校验 JSON。',
  },
  'jwt-decoder': {
    name: 'JWT 解码器',
    shortIntro: '本地解码 JWT,查看 header、payload 与签名。',
  },
  'base64-encoder': {
    name: 'Base64 编码器',
    shortIntro: '即时把文本编码为 Base64,正确支持 UTF-8。',
  },
  'base64-decoder': {
    name: 'Base64 解码器',
    shortIntro: '即时把 Base64 解码回可读文本。',
  },
  'regex-tester': {
    name: '正则测试器与说明器',
    shortIntro: '实时高亮匹配结果,附语法速查表。',
  },
  'uuid-generator': {
    name: 'UUID 生成器',
    shortIntro: '为数据库、会话和 API 生成随机 v4 UUID。',
  },
  'curl-converter': {
    name: 'curl 转代码',
    shortIntro: '把 curl 命令转成 JavaScript(Fetch/Axios)和 Python requests 代码。',
  },
  'markdown-to-html': {
    name: 'Markdown 转 HTML',
    shortIntro: '带实时预览,把 Markdown 转为干净的 HTML。',
  },
  'hash-generator': {
    name: '哈希生成器(SHA-256)',
    shortIntro: '由文本生成 SHA-256 与 SHA-1 哈希。',
  },
  'binary-to-text': {
    name: '二进制转文本',
    shortIntro: '把二进制解码回可读文本。',
  },
  'text-to-binary': {
    name: '文本转二进制',
    shortIntro: '把文本字符转换为二进制表示。',
  },
  'url-query-parser': {
    name: 'URL 查询参数解析器',
    shortIntro: '把 URL 查询参数提取为 JSON 对象。',
  },
  'text-size-estimator': {
    name: '文本体积估算器',
    shortIntro: '估算文本在各种格式下的字节大小。',
  },
  'json-minifier': {
    name: 'JSON 压缩器',
    shortIntro: '移除全部空白,最小化 JSON 体积。',
  },
  'csv-to-json': {
    name: 'CSV 转 JSON',
    shortIntro: '以表头作为键,把 CSV 转为 JSON 数组。',
  },
  'json-to-csv': {
    name: 'JSON 转 CSV',
    shortIntro: '把 JSON 对象数组转换为 CSV 格式。',
  },
  'lorem-ipsum-generator': {
    name: 'Lorem Ipsum 生成器',
    shortIntro: '为原型和设计生成占位文本。',
  },
  'random-number-generator': {
    name: '随机数生成器',
    shortIntro: '在任意区间生成随机数,可选去重。',
  },
  'html-escape': {
    name: 'HTML 转义',
    shortIntro: '转义 HTML 特殊字符以防 XSS 攻击。',
  },
  'html-unescape': {
    name: 'HTML 反转义',
    shortIntro: '把 HTML 实体还原为可读字符。',
  },
  'url-encoder': {
    name: 'URL 编码器',
    shortIntro: '把文本编码为可安全用于 URL 的形式。',
  },
  'url-decoder': {
    name: 'URL 解码器',
    shortIntro: '把百分号编码的 URL 解码回可读文本。',
  },
  'slug-generator': {
    name: 'Slug 生成器',
    shortIntro: '即时把标题转为干净、对 SEO 友好的 URL slug。',
  },
  'json-to-typescript': {
    name: 'JSON 转 TypeScript',
    shortIntro: '粘贴 JSON,即时生成干净的嵌套 TS 接口。',
  },
  'yaml-to-json': {
    name: 'YAML 转 JSON',
    shortIntro: '粘贴 YAML,即时得到干净的格式化 JSON。',
  },
  'sql-formatter': {
    name: 'SQL 格式化',
    shortIntro: '用清晰的缩进和大写关键字美化 SQL。',
  },
  'image-to-base64': {
    name: '图片转 Base64',
    shortIntro: '把图片转为 Base64 data URI,用于内联嵌入。',
  },
  'ip-checker': {
    name: 'IP 质量与欺诈检测',
    shortIntro: '检测 IP 质量、ASN 类型、欺诈评分与时区一致性。',
  },
  'chmod-calculator': {
    name: 'Chmod 权限计算器',
    shortIntro: '在八进制 755 与符号式 rwxr-xr-x 权限之间互转。',
  },
  'code-beautifier': {
    name: '代码美化器',
    shortIntro: '格式化并缩进压缩过的 HTML、CSS、JS 和 JSON。',
  },
  'gpt-token-counter': {
    name: 'GPT Token 计数器',
    shortIntro: '估算 GPT 和 Claude 提示词的 token 数与 API 成本。',
  },
  'ip-subnet-calculator': {
    name: 'IP 子网计算器',
    shortIntro: '由 CIDR 计算子网掩码、网络地址、广播地址和主机范围。',
  },
  'json-schema-generator': {
    name: 'JSON Schema 生成器',
    shortIntro: '把任意 JSON 数据转成 Draft-07 JSON Schema。',
  },
  'naming-case-converter': {
    name: '命名风格转换器',
    shortIntro: '在 camelCase、snake_case、kebab-case 等命名风格间互转。',
  },
  'nginx-config-generator': {
    name: 'Nginx 配置生成器',
    shortIntro: '生成带 SSL 和缓存的反向代理 nginx server 配置块。',
  },
  'random-choice-picker': {
    name: '随机选择器',
    shortIntro: '粘贴选项,转一转,让运气替你做决定。',
  },
  'user-agent-parser': {
    name: 'User-Agent 解析器',
    shortIntro: '把 user-agent 字符串解析为浏览器、操作系统、引擎和设备。',
  },

  // ─────────── 🔤 文本工具 ───────────
  'word-counter': {
    name: '字数统计',
    shortIntro: '即时统计字数、字符数、句数和阅读时间。',
  },
  'text-diff': {
    name: '文本差异对比',
    shortIntro: '对比两段文本,查看改动内容。',
  },
  'remove-line-breaks': {
    name: '删除换行',
    shortIntro: '把多行文本合并为单行。',
  },
  'find-and-replace': {
    name: '查找替换',
    shortIntro: '即时查找并替换任意文本。',
  },
  'uppercase-converter': {
    name: '转大写',
    shortIntro: '即时把任意文本转为全大写。',
  },
  'lowercase-converter': {
    name: '转小写',
    shortIntro: '即时把任意文本转为全小写。',
  },
  'title-case-converter': {
    name: '标题格式转换器',
    shortIntro: '把每个单词首字母大写,用于标题与排版。',
  },
  'sentence-case-converter': {
    name: '句首大写转换器',
    shortIntro: '自动把每个句子的首字母大写。',
  },
  'slug-to-title': {
    name: 'Slug 转标题',
    shortIntro: '把 URL slug 还原为可读标题。',
  },
  'html-tag-stripper': {
    name: 'HTML 标签剥离器',
    shortIntro: '移除所有 HTML 标签,得到干净的文本。',
  },
  'character-frequency': {
    name: '字符频率统计',
    shortIntro: '统计文本中每个字符的出现次数。',
  },
  'email-extractor': {
    name: '邮箱提取器',
    shortIntro: '从任意文本中提取所有邮箱地址。',
  },
  'url-extractor': {
    name: 'URL 提取器',
    shortIntro: '从任意文本中提取所有网址链接。',
  },
  'add-line-numbers': {
    name: '添加行号',
    shortIntro: '为文本的每一行编号。',
  },
  'text-to-list': {
    name: '文本转列表',
    shortIntro: '为文本的每一行添加项目符号。',
  },
  'reverse-text': {
    name: '文本反转生成器',
    shortIntro: '反转任意文本 —— 适合解谜与密码游戏。',
  },
  'remove-duplicate-lines': {
    name: '删除重复行',
    shortIntro: '移除重复行,同时保留原始顺序。',
  },
  'sort-lines': {
    name: '文本行排序',
    shortIntro: '一键按字母顺序排序列表。',
  },
  'whitespace-remover': {
    name: '空白清理器',
    shortIntro: '清理任意文本中杂乱的空格。',
  },
  'list-diff': {
    name: '列表差异与交集对比',
    shortIntro: '即时对比两个列表,找出独有和共有的项。',
  },
  'csv-to-markdown-table': {
    name: 'CSV 转 Markdown 表格',
    shortIntro: '把 CSV/TSV 数据转成可直接用于 GitHub 的 Markdown 表格。',
  },
  'srt-subtitle-shift': {
    name: 'SRT 字幕平移器',
    shortIntro: '按任意偏移量平移字幕时间轴,并去除格式标签。',
  },
  'text-cleaner': {
    name: '文本清理器',
    shortIntro: '去除文本中的 emoji、重音符号和特殊字符。',
  },
  'wordle-solver': {
    name: 'Wordle 求解器',
    shortIntro: '按已知、包含和排除的字母缩小 Wordle 答案范围。',
  },

  // ─────────── 📐 单位换算器 ───────────
  'mass-converter': {
    name: '质量换算器',
    shortIntro: '在公制、克拉、格令之间换算。',
  },
  'density-converter': {
    name: '密度换算器',
    shortIntro: '为物理和化学换算常见密度单位。',
  },
  'power-converter': {
    name: '功率换算器',
    shortIntro: '在瓦、千瓦、马力、BTU 之间换算。',
  },
  'flow-rate-converter': {
    name: '流量换算器',
    shortIntro: '在 L/min、GPM、CFM 等流量单位间换算。',
  },
  'data-storage-converter': {
    name: '存储换算器',
    shortIntro: '在字节、KB、MB、GB、TB 之间换算。',
  },
  'time-converter': {
    name: '时间换算器',
    shortIntro: '在秒、分、时、天等单位间换算。',
  },
  'numeral-system-converter': {
    name: '进制换算器',
    shortIntro: '在二进制、八进制、十进制、十六进制之间换算。',
  },
  'angle-converter': {
    name: '角度换算器',
    shortIntro: '在度、弧度、梯度之间换算。',
  },
  'fuel-economy-converter': {
    name: '油耗换算器',
    shortIntro: '在 MPG 与 L/100km 之间换算汽车油耗。',
  },
  'pressure-converter': {
    name: '压力换算器',
    shortIntro: '在 bar、PSI、帕斯卡、atm 之间换算。',
  },
  'energy-converter': {
    name: '能量换算器',
    shortIntro: '在焦耳、卡、kWh、BTU 之间换算。',
  },
  'frequency-converter': {
    name: '频率换算器',
    shortIntro: '在 Hz、kHz、MHz、GHz、RPM 之间换算。',
  },
  'weight-converter': {
    name: '重量换算器',
    shortIntro: '即时在公制与英制重量单位间换算。',
  },
  'temperature-converter': {
    name: '温度换算器',
    shortIntro: '即时在摄氏、华氏、开尔文间换算。',
  },
  'speed-converter': {
    name: '速度换算器',
    shortIntro: '即时在 km/h、mph、m/s、knot、ft/s 间换算。',
  },
  'area-converter': {
    name: '面积换算器',
    shortIntro: '在公制与英制面积单位间换算,含英亩与公顷。',
  },
  'volume-converter': {
    name: '体积换算器',
    shortIntro: '即时在公制与美制烹饪体积单位间换算。',
  },
  'length-converter': {
    name: '长度换算器',
    shortIntro: '即时在公制与英制长度单位间换算。',
  },

  // ─────────── 🧮 数学计算器 ───────────
  'trapezoid-calculator': {
    name: '梯形计算器',
    shortIntro: '由两条平行边和高求梯形面积。',
  },
  'cube-calculator': {
    name: '立方体计算器',
    shortIntro: '计算立方体的体积和表面积。',
  },
  'sphere-calculator': {
    name: '球体计算器',
    shortIntro: '由半径求球体体积和表面积。',
  },
  'scientific-notation-converter': {
    name: '科学计数法换算器',
    shortIntro: '把数字转为科学计数法、E 计数法和工程计数法。',
  },
  'prime-number-checker': {
    name: '质数检查器',
    shortIntro: '检查任意数字是否为质数,并找出相邻质数。',
  },
  'prime-factorization-calculator': {
    name: '质因数分解计算器',
    shortIntro: '把任意数字分解为质因数之积。',
  },
  'combination-calculator': {
    name: '组合数计算器',
    shortIntro: '计算组合数 C(n,r),用于概率与赔率。',
  },
  'permutation-calculator': {
    name: '排列数计算器',
    shortIntro: '计算排列数(考虑顺序的安排方式)。',
  },
  'circle-calculator': {
    name: '圆计算器',
    shortIntro: '由半径求圆面积、周长和直径。',
  },
  'triangle-calculator': {
    name: '三角形计算器',
    shortIntro: '求解直角三角形 —— 斜边、面积、周长。',
  },
  'rectangle-calculator': {
    name: '矩形计算器',
    shortIntro: '求矩形的面积、周长和对角线。',
  },
  'standard-deviation-calculator': {
    name: '标准差计算器',
    shortIntro: '计算标准差、方差和均值。',
  },
  'percentile-calculator': {
    name: '百分位数计算器',
    shortIntro: '找出数据中任意百分位对应的值。',
  },
  'fraction-calculator': {
    name: '分数计算器',
    shortIntro: '分数的加减乘除,精确无误差。',
  },
  'ratio-calculator': {
    name: '比例计算器',
    shortIntro: '解比例并求出缺失的比值。',
  },
  'lcm-gcd-calculator': {
    name: 'LCM 与 GCD 计算器',
    shortIntro: '求任意一组数的最小公倍数与最大公约数。',
  },
  'average-calculator': {
    name: '平均值计算器',
    shortIntro: '计算任意数列的均值、中位数、求和、最值和极差。',
  },
  'percentage-calculator': {
    name: '百分比计算器',
    shortIntro: '即时计算百分比、增减与折扣。',
  },

  // ─────────── 💪 健康计算器 ───────────
  'bmi-calculator': {
    name: 'BMI 计算器',
    shortIntro: '计算身体质量指数,查看健康体重范围。',
  },
  'calorie-calculator': {
    name: '热量计算器',
    shortIntro: '算出减脂或增肌所需的每日热量。',
  },
  'tdee-calculator': {
    name: 'TDEE 计算器',
    shortIntro: '按减脂/维持/增肌目标算出每日总热量。',
  },
  'bmr-calculator': {
    name: '基础代谢率计算器',
    shortIntro: '计算完全静息时身体消耗的热量。',
  },
  'body-fat-calculator': {
    name: '体脂率计算器',
    shortIntro: '用围度测量估算身体脂肪百分比。',
  },
  'macro-calculator': {
    name: '宏量营养素计算器',
    shortIntro: '把每日热量拆分为蛋白、碳水、脂肪。',
  },
  'pregnancy-due-date-calculator': {
    name: '预产期计算器',
    shortIntro: '由末次月经期估算预产期。',
  },
  'water-intake-calculator': {
    name: '饮水量计算器',
    shortIntro: '算出你理想的每日饮水量。',
  },
  'ideal-weight-calculator': {
    name: '理想体重计算器',
    shortIntro: '按身高和性别算出理想体重。',
  },

  // ─────────── 🎓 教育计算器 ───────────
  'grade-calculator': {
    name: '成绩计算器',
    shortIntro: '由得分算出百分比成绩和等级。',
  },
  'final-grade-calculator': {
    name: '期末成绩计算器',
    shortIntro: '算出达到目标等级所需的期末分。',
  },
  'gpa-calculator': {
    name: 'GPA 计算器',
    shortIntro: '加入课程、学分和字母等级,即时算出 GPA。',
  },

  // ─────────── ⏰ 时间计算器 ───────────
  'age-calculator': {
    name: '年龄计算器',
    shortIntro: '按年月日精确计算年龄或两日期间隔。',
  },
  'date-difference-calculator': {
    name: '日期差计算器',
    shortIntro: '求任意两日期间隔 —— 天、周、月、工作日。',
  },
  'age-difference-calculator': {
    name: '年龄差计算器',
    shortIntro: '求两人之间的年龄差。',
  },
  'days-countdown-calculator': {
    name: '天数倒计时计算器',
    shortIntro: '实时倒计时到任意日期,或计算两个日期之间的天数。',
  },
  'reading-speaking-time': {
    name: '阅读时长计算器',
    shortIntro: '估算任意文本的阅读和演讲时长。',
  },
  'timezone-converter': {
    name: '时区转换器',
    shortIntro: '跨时区换算时间,找出适合开会的时间段。',
  },

  // ─────────── 🎨 网页设计工具 ───────────
  'svg-to-image': {
    name: 'SVG 转 PNG',
    shortIntro: '在浏览器内把 SVG 转 PNG 或 WebP,自定义缩放并下载。',
  },
  'px-to-rem': {
    name: 'px 转 rem/em',
    shortIntro: '按自定义根字号在 px 与 rem、em 之间换算。',
  },
  'aspect-ratio-calculator': {
    name: '宽高比计算器',
    shortIntro: '按宽高比补全缺失的宽或高。',
  },
  'color-contrast-checker': {
    name: '颜色对比度检查器(WCAG)',
    shortIntro: '按 WCAG AA 与 AAA 级别测试颜色对比度。',
  },
  'color-converter': {
    name: '颜色换算器',
    shortIntro: '在 HEX、RGB、HSL 之间换算,带可视化拾色器。',
  },
  'open-graph-generator': {
    name: 'Open Graph 与 Meta 标签生成器',
    shortIntro: '生成 OG 与 Twitter Card 标签,带社交分享实时预览。',
  },
  'css-shadow-generator': {
    name: 'CSS 阴影与玻璃态生成器',
    shortIntro: '可视化调节阴影和玻璃态,实时预览并复制 CSS。',
  },
  'favicon-generator': {
    name: 'Favicon 生成器',
    shortIntro: '把图片转为 16×16、32×32 favicon 和 Apple Touch Icon。',
  },
  'css-clamp-calculator': {
    name: 'CSS Clamp 计算器',
    shortIntro: '用 CSS clamp() 生成流体式字号。',
  },
  'css-gradient-generator': {
    name: 'CSS 渐变生成器',
    shortIntro: '可视化构建线性、径向和网格渐变,实时预览。',
  },
  'image-resizer': {
    name: '图片尺寸调整器',
    shortIntro: '调整并压缩图片,实时预览文件大小。',
  },
  'png-to-webp-converter': {
    name: 'PNG 转 WebP 转换器',
    shortIntro: '把 PNG/JPG 转成 WebP,直观看到节省的体积。',
  },
  'svg-minifier': {
    name: 'SVG 压缩器',
    shortIntro: '去除 SVG 文件中的注释、元数据和多余空白。',
  },
  'webp-to-png-converter': {
    name: 'WebP 转 PNG 转换器',
    shortIntro: '在浏览器中把 WebP 图片转成 PNG 或 JPG。',
  },

  // ─────────── 🔒 安全工具 ───────────
  'password-strength-checker': {
    name: '密码强度检查器',
    shortIntro: '用熵分析和检查清单测试密码强度。',
  },
  'password-generator': {
    name: '密码生成器',
    shortIntro: '一键创建强随机安全密码。',
  },
  'bcrypt-hash-generator': {
    name: 'Bcrypt 哈希生成器',
    shortIntro: '在浏览器中用 bcrypt 或加盐 SHA 哈希并校验密码。',
  },
  'secret-key-generator': {
    name: '密钥生成器',
    shortIntro: '在浏览器中生成高熵 API 密钥和机密。',
  },
  'ssh-key-generator': {
    name: 'SSH 密钥生成器',
    shortIntro: '在浏览器中生成 RSA 或 Ed25519 SSH 密钥对。',
  },

  // ─────────── 💼 商业工具 ───────────
  'qr-code-generator': {
    name: '二维码生成器',
    shortIntro: '为网址、文本和 WiFi 创建二维码,免费无水印。',
  },
  'freelance-invoice-generator': {
    name: '发票生成器',
    shortIntro: '免费制作、预览并打印专业发票。',
  },
  'saas-ltv-churn-calculator': {
    name: 'SaaS LTV 计算器',
    shortIntro: '为你的 SaaS 建模 LTV、流失率、CAC 回收期和 LTV:CAC。',
  },

  // ─────────── 🛠️ 开发者工具(其它) ───────────
  'cron-parser': {
    name: 'Cron 表达式解析器',
    shortIntro: '把 cron 表达式转为通俗语言,并查看下次 5 次触发时间。',
  },
}
