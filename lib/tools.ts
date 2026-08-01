/**
 * 工具元数据 - 集中管理所有工具信息
 *
 * 加新工具只需 3 步:
 * 1. 在 app/tools/<slug>/ 新建 page.tsx
 * 2. 在这里加一条配置
 * 3. 首页、导航、sitemap 会自动更新
 *
 * SEO 关键字段说明:
 * - keywords: 目标关键词,用于 meta keywords 和首页标签
 * - searchIntent: 'commercial' | 'informational' | 'navigational'
 *     commercial 工具(有花钱场景)广告主出价高,RPM 高,优先做
 */

export type SearchIntent = 'commercial' | 'informational' | 'navigational'

export interface ToolMeta {
  /** 工具唯一标识,同时是 URL slug,如 'slug-generator' → /tools/slug-generator/ */
  slug: string
  /** 工具名称(展示用) */
  name: string
  /** SEO 标题(会作为 <title>,建议 50-60 字符) */
  title: string
  /** SEO 描述(meta description,建议 150-160 字符) */
  description: string
  /** 目标关键词列表(主词在前) */
  keywords: string[]
  /** 搜索意图 - commercial 类 RPM 更高 */
  intent: SearchIntent
  /** 分类标签,用于首页分组展示 */
  category: string
  /** 工具页 H1 文案 */
  h1: string
  /** 简短介绍(首页卡片用) */
  shortIntro: string
  /** 是否已上线(用于首页过滤未完成工具) */
  published: boolean
}

export const tools: ToolMeta[] = [
  // ══════════ 第八批:金融+生活+几何+编码(17 个)══════════
  {
    slug: 'apy-calculator', name: 'APY Calculator',
    title: 'Free APY Calculator - Annual Percentage Yield Online',
    description: 'Calculate APY (Annual Percentage Yield) from APR with any compounding frequency. Free and instant.',
    keywords: ['apy calculator', 'annual percentage yield', 'apr to apy'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'APY Calculator',
    shortIntro: 'Convert APR to APY accounting for compounding frequency.', published: true,
  },
  {
    slug: 'credit-card-minimum-payment-calculator', name: 'Credit Card Minimum Payment Calculator',
    title: 'Free Credit Card Minimum Payment Calculator',
    description: 'See how your minimum payment is calculated and how little goes to principal. Free and instant.',
    keywords: ['credit card minimum payment', 'minimum payment calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Credit Card Minimum Payment Calculator',
    shortIntro: 'See how your minimum payment splits between interest and principal.', published: true,
  },
  {
    slug: 'cash-back-calculator', name: 'Cash Back Calculator',
    title: 'Free Cash Back Calculator - Credit Card Rewards Value',
    description: 'Calculate annual cash back value from your spending. Compare cards with annual fees. Free.',
    keywords: ['cash back calculator', 'credit card rewards', 'rewards calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Cash Back Calculator',
    shortIntro: 'Calculate true value of cash back rewards after annual fees.', published: true,
  },
  {
    slug: 'down-payment-calculator', name: 'Down Payment Calculator',
    title: 'Free Down Payment Calculator - How Much to Put Down',
    description: 'Calculate down payment amount and whether PMI is required. Free and instant.',
    keywords: ['down payment calculator', 'how much down payment', 'pmi calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Down Payment Calculator',
    shortIntro: 'Find your down payment amount and PMI status.', published: true,
  },
  {
    slug: 'dti-calculator', name: 'Debt-to-Income Calculator',
    title: 'Free Debt-to-Income (DTI) Calculator - Loan Eligibility',
    description: 'Calculate your DTI ratio to see if you qualify for a mortgage. Free and instant.',
    keywords: ['dti calculator', 'debt to income ratio', 'loan eligibility'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Debt-to-Income Calculator',
    shortIntro: 'Calculate DTI ratio and see if lenders will approve you.', published: true,
  },
  {
    slug: 'commission-calculator', name: 'Commission Calculator',
    title: 'Free Commission Calculator - Sales Earnings',
    description: 'Calculate commission earnings from sales and rate. Includes base salary. Free and instant.',
    keywords: ['commission calculator', 'sales commission', 'commission earnings'],
    intent: 'informational', category: 'Finance Calculators', h1: 'Commission Calculator',
    shortIntro: 'Calculate sales commission plus base salary.', published: true,
  },
  {
    slug: 'age-difference-calculator', name: 'Age Difference Calculator',
    title: 'Free Age Difference Calculator - Gap Between Two People',
    description: 'Calculate the age gap between two people from birth years. Free and instant.',
    keywords: ['age difference calculator', 'age gap calculator'],
    intent: 'informational', category: 'Time Calculators', h1: 'Age Difference Calculator',
    shortIntro: 'Find the age gap between two people.', published: true,
  },
  {
    slug: 'grade-calculator', name: 'Grade Calculator',
    title: 'Free Grade Calculator - Find Your Percentage & Letter',
    description: 'Calculate your grade percentage and letter from points earned. Free and instant.',
    keywords: ['grade calculator', 'test score calculator', 'percentage grade'],
    intent: 'informational', category: 'Education Calculators', h1: 'Grade Calculator',
    shortIntro: 'Find your grade percentage and letter from points.', published: true,
  },
  {
    slug: 'final-grade-calculator', name: 'Final Grade Calculator',
    title: 'Free Final Grade Calculator - Score Needed on Final Exam',
    description: 'Find what score you need on your final exam to reach your target grade. Free and instant.',
    keywords: ['final grade calculator', 'what do i need on final', 'rogerhub'],
    intent: 'informational', category: 'Education Calculators', h1: 'Final Grade Calculator',
    shortIntro: 'Find the final exam score needed for your target grade.', published: true,
  },
  {
    slug: 'bill-split-calculator', name: 'Bill Split Calculator',
    title: 'Free Bill Split Calculator - Split Checks & Tips Evenly',
    description: 'Split a bill evenly among any number of people including tip. Free and instant.',
    keywords: ['bill split calculator', 'split the bill', 'check splitter'],
    intent: 'informational', category: 'Finance Calculators', h1: 'Bill Split Calculator',
    shortIntro: 'Split a bill evenly including tip.', published: true,
  },
  {
    slug: 'trapezoid-calculator', name: 'Trapezoid Calculator',
    title: 'Free Trapezoid Calculator - Area of a Trapezoid',
    description: 'Calculate trapezoid area from parallel sides and height. Free and instant.',
    keywords: ['trapezoid calculator', 'area of trapezoid', 'trapezium area'],
    intent: 'informational', category: 'Math Calculators', h1: 'Trapezoid Calculator',
    shortIntro: 'Find trapezoid area from two parallel sides and height.', published: true,
  },
  {
    slug: 'cube-calculator', name: 'Cube Calculator',
    title: 'Free Cube Calculator - Volume & Surface Area',
    description: 'Calculate cube volume and surface area from side length. Free and instant.',
    keywords: ['cube calculator', 'volume of cube', 'cube surface area'],
    intent: 'informational', category: 'Math Calculators', h1: 'Cube Calculator',
    shortIntro: 'Find cube volume and surface area.', published: true,
  },
  {
    slug: 'sphere-calculator', name: 'Sphere Calculator',
    title: 'Free Sphere Calculator - Volume & Surface Area',
    description: 'Calculate sphere volume and surface area from radius. Free and instant.',
    keywords: ['sphere calculator', 'volume of sphere', 'sphere surface area'],
    intent: 'informational', category: 'Math Calculators', h1: 'Sphere Calculator',
    shortIntro: 'Find sphere volume and surface area from radius.', published: true,
  },
  {
    slug: 'hash-generator', name: 'Hash Generator (SHA-256)',
    title: 'Free Hash Generator - SHA-256, SHA-1 Online',
    description: 'Generate SHA-256 and SHA-1 hashes from any text. Uses SubtleCrypto for true cryptographic hashing.',
    keywords: ['sha256 generator', 'hash generator', 'sha-256 online', 'text to hash'],
    intent: 'informational', category: 'Developer Tools', h1: 'Hash Generator',
    shortIntro: 'Generate SHA-256 and SHA-1 hashes from text.', published: true,
  },
  {
    slug: 'slug-to-title', name: 'Slug to Title Converter',
    title: 'Free Slug to Title Converter - URL to Readable Title',
    description: 'Convert URL slugs back to readable titles. Replaces hyphens with spaces. Free and instant.',
    keywords: ['slug to title', 'url to title', 'slug converter'],
    intent: 'informational', category: 'Text Tools', h1: 'Slug to Title Converter',
    shortIntro: 'Convert URL slugs back to readable titles.', published: true,
  },
  {
    slug: 'binary-to-text', name: 'Binary to Text Converter',
    title: 'Free Binary to Text Converter - Decode Binary Online',
    description: 'Convert binary (1s and 0s) back to readable text instantly. Free and private.',
    keywords: ['binary to text', 'binary decoder', 'binary to ascii'],
    intent: 'informational', category: 'Developer Tools', h1: 'Binary to Text Converter',
    shortIntro: 'Decode binary back to readable text.', published: true,
  },
  {
    slug: 'text-to-binary', name: 'Text to Binary Converter',
    title: 'Free Text to Binary Converter - Encode Text as Binary',
    description: 'Convert text to binary (1s and 0s) for each character. Free and instant.',
    keywords: ['text to binary', 'binary encoder', 'text to ascii binary'],
    intent: 'informational', category: 'Developer Tools', h1: 'Text to Binary Converter',
    shortIntro: 'Convert text characters to binary representation.', published: true,
  },

  // ══════════ 第七批:数学+单位+开发+文本工具(16 个)══════════
  {
    slug: 'scientific-notation-converter', name: 'Scientific Notation Converter',
    title: 'Free Scientific Notation Converter - Standard & Engineering Form',
    description: 'Convert numbers to and from scientific notation, E-notation, and engineering notation. Free and instant.',
    keywords: ['scientific notation', 'scientific notation converter', 'engineering notation'],
    intent: 'informational', category: 'Math Calculators', h1: 'Scientific Notation Converter',
    shortIntro: 'Convert numbers to scientific, E-, and engineering notation.', published: true,
  },
  {
    slug: 'prime-number-checker', name: 'Prime Number Checker',
    title: 'Free Prime Number Checker - Is a Number Prime?',
    description: 'Check if any number is prime. Find the next and previous primes. Free and instant. For math and cryptography.',
    keywords: ['prime number checker', 'is it prime', 'prime checker'],
    intent: 'informational', category: 'Math Calculators', h1: 'Prime Number Checker',
    shortIntro: 'Check if any number is prime and find adjacent primes.', published: true,
  },
  {
    slug: 'prime-factorization-calculator', name: 'Prime Factorization Calculator',
    title: 'Free Prime Factorization Calculator - Factor Any Number',
    description: 'Find the prime factorization of any number. Free and instant. For math homework and cryptography.',
    keywords: ['prime factorization', 'factor tree', 'prime factors calculator'],
    intent: 'informational', category: 'Math Calculators', h1: 'Prime Factorization Calculator',
    shortIntro: 'Decompose any number into its prime factors.', published: true,
  },
  {
    slug: 'combination-calculator', name: 'Combination Calculator',
    title: 'Free Combination Calculator - nCr, Choose r from n',
    description: 'Calculate combinations C(n,r) — how many ways to choose r items from n. Free and instant. For probability and lottery.',
    keywords: ['combination calculator', 'ncr', 'choose calculator', 'lottery odds'],
    intent: 'informational', category: 'Math Calculators', h1: 'Combination Calculator',
    shortIntro: 'Calculate combinations (n choose r) for probability and odds.', published: true,
  },
  {
    slug: 'permutation-calculator', name: 'Permutation Calculator',
    title: 'Free Permutation Calculator - nPr, Arrange r from n',
    description: 'Calculate permutations P(n,r) — how many ways to arrange r items from n. Free and instant.',
    keywords: ['permutation calculator', 'npr', 'arrangements calculator'],
    intent: 'informational', category: 'Math Calculators', h1: 'Permutation Calculator',
    shortIntro: 'Calculate permutations (arrangements where order matters).', published: true,
  },
  {
    slug: 'mass-converter', name: 'Mass Converter',
    title: 'Free Mass Converter - mg, g, kg, Carats, Grains Online',
    description: 'Convert between mass units: mg, g, kg, metric tons, carats, and grains. Free and accurate. No signup.',
    keywords: ['mass converter', 'grams to milligrams', 'carat to gram', 'grain converter'],
    intent: 'informational', category: 'Unit Converters', h1: 'Mass Converter',
    shortIntro: 'Convert between metric, carats, and grains.', published: true,
  },
  {
    slug: 'density-converter', name: 'Density Converter',
    title: 'Free Density Converter - kg/m³, g/cm³, lb/ft³ Online',
    description: 'Convert between density units: kg/m³, g/cm³, g/L, lb/ft³, and more. Free and accurate. For physics and chemistry.',
    keywords: ['density converter', 'kgm3 to gcm3', 'density units'],
    intent: 'informational', category: 'Unit Converters', h1: 'Density Converter',
    shortIntro: 'Convert between density units for physics and chemistry.', published: true,
  },
  {
    slug: 'power-converter', name: 'Power Converter',
    title: 'Free Power Converter - Watts, kW, Horsepower, BTU Online',
    description: 'Convert between power units: watts, kilowatts, horsepower, BTU/sec, and more. Free and accurate.',
    keywords: ['power converter', 'watts to horsepower', 'kw to hp'],
    intent: 'informational', category: 'Unit Converters', h1: 'Power Converter',
    shortIntro: 'Convert between watts, kilowatts, horsepower, and BTU.', published: true,
  },
  {
    slug: 'flow-rate-converter', name: 'Flow Rate Converter',
    title: 'Free Flow Rate Converter - L/min, GPM, CFM Online',
    description: 'Convert between flow rate units: L/s, L/min, m³/h, gpm, CFM. For plumbing, HVAC, and irrigation. Free.',
    keywords: ['flow rate converter', 'lpm to gpm', 'gpm converter', 'cfm converter'],
    intent: 'informational', category: 'Unit Converters', h1: 'Flow Rate Converter',
    shortIntro: 'Convert between L/min, GPM, CFM and more flow units.', published: true,
  },
  {
    slug: 'url-query-parser', name: 'URL Query Parser',
    title: 'Free URL Query String Parser - Extract Parameters Online',
    description: 'Parse URL query strings into a clean JSON object. Free and private. For debugging and API development.',
    keywords: ['url query parser', 'query string parser', 'parse url parameters'],
    intent: 'informational', category: 'Developer Tools', h1: 'URL Query Parser',
    shortIntro: 'Extract URL query parameters into a JSON object.', published: true,
  },
  {
    slug: 'html-tag-stripper', name: 'HTML Tag Stripper',
    title: 'Free HTML Tag Stripper - Remove Tags to Plain Text',
    description: 'Remove all HTML tags and get clean readable text. Free and safe. For copy-pasting from websites.',
    keywords: ['html tag stripper', 'remove html tags', 'html to text'],
    intent: 'informational', category: 'Text Tools', h1: 'HTML Tag Stripper',
    shortIntro: 'Remove all HTML tags to get clean readable text.', published: true,
  },
  {
    slug: 'character-frequency', name: 'Character Frequency Counter',
    title: 'Free Character Frequency Counter - Letter Count Online',
    description: 'Count the frequency of each character in your text. Sorted by count. Free and private. For analysis.',
    keywords: ['character frequency', 'letter frequency counter', 'character count analyzer'],
    intent: 'informational', category: 'Text Tools', h1: 'Character Frequency Counter',
    shortIntro: 'Count how often each character appears in text.', published: true,
  },
  {
    slug: 'email-extractor', name: 'Email Extractor',
    title: 'Free Email Extractor - Find All Emails in Text Online',
    description: 'Extract all email addresses from any text. Removes duplicates. Free and private. For data cleaning.',
    keywords: ['email extractor', 'extract emails from text', 'find email addresses'],
    intent: 'informational', category: 'Text Tools', h1: 'Email Extractor',
    shortIntro: 'Pull all email addresses out of any text.', published: true,
  },
  {
    slug: 'url-extractor', name: 'URL Extractor',
    title: 'Free URL Extractor - Find All Links in Text Online',
    description: 'Extract all URLs (http/https) from any text. Removes duplicates. Free and private.',
    keywords: ['url extractor', 'extract links from text', 'find urls'],
    intent: 'informational', category: 'Text Tools', h1: 'URL Extractor',
    shortIntro: 'Pull all web links out of any text.', published: true,
  },
  {
    slug: 'text-diff', name: 'Text Diff Checker',
    title: 'Free Text Diff Checker - Compare Two Texts Online',
    description: 'Compare two texts word by word and highlight differences. Free and private. For editing and proofreading.',
    keywords: ['text diff', 'compare texts', 'text difference checker'],
    intent: 'informational', category: 'Text Tools', h1: 'Text Diff Checker',
    shortIntro: 'Compare two texts and see what changed.', published: true,
  },
  {
    slug: 'text-size-estimator', name: 'Text Size Estimator',
    title: 'Free Text Size Estimator - Bytes, KB, Word Count Online',
    description: 'Estimate storage size of text in bytes, KB, and Base64. Free and private. For API and database planning.',
    keywords: ['text size estimator', 'text byte counter', 'string size calculator'],
    intent: 'informational', category: 'Developer Tools', h1: 'Text Size Estimator',
    shortIntro: 'Estimate byte size of your text in various formats.', published: true,
  },

  // ══════════ 第六批:金融+健康+数据工具(14 个)══════════
  {
    slug: 'savings-goal-calculator', name: 'Savings Goal Calculator',
    title: 'Free Savings Goal Calculator - How Much to Save Monthly',
    description: 'Find the monthly contribution needed to hit any savings goal. Accounts for investment growth. Free and instant.',
    keywords: ['savings goal calculator', 'savings calculator', 'how much to save', 'goal savings'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Savings Goal Calculator',
    shortIntro: 'Find the monthly amount needed to reach any savings goal.', published: true,
  },
  {
    slug: 'net-worth-calculator', name: 'Net Worth Calculator',
    title: 'Free Net Worth Calculator - Assets Minus Liabilities',
    description: 'Calculate your net worth from total assets and liabilities. See your assets-to-debt ratio. Free and instant.',
    keywords: ['net worth calculator', 'assets minus liabilities', 'wealth calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Net Worth Calculator',
    shortIntro: 'Calculate your net worth — assets minus liabilities.', published: true,
  },
  {
    slug: 'annuity-calculator', name: 'Annuity Calculator',
    title: 'Free Annuity Calculator - Annual & Monthly Payout',
    description: 'Calculate how much you can withdraw annually from a principal over a set period. Free and instant.',
    keywords: ['annuity calculator', 'annuity payout', 'withdrawal rate calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Annuity Calculator',
    shortIntro: 'Find annual and monthly payouts from a principal over N years.', published: true,
  },
  {
    slug: 'capital-gains-tax-estimator', name: 'Capital Gains Tax Estimator',
    title: 'Free Capital Gains Tax Estimator - Short vs Long Term',
    description: 'Estimate US capital gains tax on stock or crypto sales. Distinguishes short vs long-term rates. Free.',
    keywords: ['capital gains tax', 'capital gains calculator', 'stock tax calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Capital Gains Tax Estimator',
    shortIntro: 'Estimate capital gains tax on investments (short vs long-term rates).', published: true,
  },
  {
    slug: 'rent-vs-buy-calculator', name: 'Rent vs Buy Calculator',
    title: 'Free Rent vs Buy Calculator - Should You Buy a Home?',
    description: 'Compare the total cost of buying vs renting over time. Free and instant. For home buying decisions.',
    keywords: ['rent vs buy calculator', 'buy or rent', 'home buying calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Rent vs Buy Calculator',
    shortIntro: 'Compare total cost of buying vs renting over a time period.', published: true,
  },
  {
    slug: 'body-fat-calculator', name: 'Body Fat Calculator',
    title: 'Free Body Fat Calculator - US Navy Method (Circumference)',
    description: 'Estimate body fat percentage using the US Navy method with circumference measurements. Free and instant.',
    keywords: ['body fat calculator', 'body fat percentage', 'navy body fat calculator'],
    intent: 'commercial', category: 'Health Calculators', h1: 'Body Fat Calculator',
    shortIntro: 'Estimate body fat % using circumference measurements.', published: true,
  },
  {
    slug: 'macro-calculator', name: 'Macro Calculator',
    title: 'Free Macro Calculator - Protein, Carbs, Fat Split',
    description: 'Calculate your ideal protein, carb, and fat split based on calorie target and goal. Free and instant.',
    keywords: ['macro calculator', 'macronutrient calculator', 'protein carb fat calculator'],
    intent: 'commercial', category: 'Health Calculators', h1: 'Macro Calculator',
    shortIntro: 'Split daily calories into protein, carbs, and fat.', published: true,
  },
  {
    slug: 'pregnancy-due-date-calculator', name: 'Pregnancy Due Date Calculator',
    title: 'Free Pregnancy Due Date Calculator - Naegele\'s Rule',
    description: 'Estimate your pregnancy due date from your last menstrual period. Uses Naegele\'s rule. Free and instant.',
    keywords: ['due date calculator', 'pregnancy calculator', 'pregnancy due date'],
    intent: 'informational', category: 'Health Calculators', h1: 'Pregnancy Due Date Calculator',
    shortIntro: 'Estimate due date from your last menstrual period.', published: true,
  },
  {
    slug: 'json-formatter', name: 'JSON Formatter',
    title: 'Free JSON Formatter - Beautify & Validate JSON Online',
    description: 'Format, beautify, and validate JSON instantly. 2-space indentation. Free and private. No signup.',
    keywords: ['json formatter', 'json beautifier', 'json validator', 'pretty print json'],
    intent: 'informational', category: 'Developer Tools', h1: 'JSON Formatter',
    shortIntro: 'Format and validate JSON with proper indentation.', published: true,
  },
  {
    slug: 'json-minifier', name: 'JSON Minifier',
    title: 'Free JSON Minifier - Compress JSON Online',
    description: 'Minify JSON by removing all whitespace. Reduce file size for APIs. Free and private.',
    keywords: ['json minifier', 'minify json', 'compress json', 'json compressor'],
    intent: 'informational', category: 'Developer Tools', h1: 'JSON Minifier',
    shortIntro: 'Remove all whitespace to minimize JSON size.', published: true,
  },
  {
    slug: 'csv-to-json', name: 'CSV to JSON Converter',
    title: 'Free CSV to JSON Converter - Online & Instant',
    description: 'Convert CSV data to JSON array instantly. Uses header row as object keys. Free and private.',
    keywords: ['csv to json', 'csv converter', 'convert csv to json'],
    intent: 'informational', category: 'Developer Tools', h1: 'CSV to JSON Converter',
    shortIntro: 'Convert CSV data to a JSON array using the header row.', published: true,
  },
  {
    slug: 'json-to-csv', name: 'JSON to CSV Converter',
    title: 'Free JSON to CSV Converter - Online & Instant',
    description: 'Convert a JSON array of objects to CSV format. Handles escaping. Free and private.',
    keywords: ['json to csv', 'json converter', 'convert json to csv'],
    intent: 'informational', category: 'Developer Tools', h1: 'JSON to CSV Converter',
    shortIntro: 'Convert a JSON array of objects to CSV format.', published: true,
  },
  {
    slug: 'add-line-numbers', name: 'Add Line Numbers',
    title: 'Free Add Line Numbers Tool - Number Text Lines Online',
    description: 'Add line numbers to any text instantly. For code review and transcripts. Free and private.',
    keywords: ['add line numbers', 'number lines', 'line numbering tool'],
    intent: 'informational', category: 'Text Tools', h1: 'Add Line Numbers',
    shortIntro: 'Add line numbers to each line of your text.', published: true,
  },
  {
    slug: 'text-to-list', name: 'Text to List Converter',
    title: 'Free Text to List Tool - Add Bullet Points Online',
    description: 'Convert lines of text into a bulleted list instantly. Free and private. For notes and outlines.',
    keywords: ['text to list', 'bullet point generator', 'list maker'],
    intent: 'informational', category: 'Text Tools', h1: 'Text to List Converter',
    shortIntro: 'Add bullet points to each line of text.', published: true,
  },

  // ══════════ 第五批:颜色/生成器/几何/统计/金融/生活(13 个)══════════
  {
    slug: 'color-converter', name: 'Color Converter',
    title: 'Free Color Converter - HEX, RGB, HSL Color Codes Online',
    description: 'Convert between HEX, RGB, and HSL color codes instantly. Pick colors with the visual picker. Free, accurate, for web design and CSS.',
    keywords: ['hex to rgb', 'rgb to hex', 'color converter', 'hsl to rgb', 'hex color converter'],
    intent: 'informational', category: 'Web Design Tools', h1: 'Color Converter',
    shortIntro: 'Convert between HEX, RGB, and HSL with a visual picker.', published: true,
  },
  {
    slug: 'uuid-generator', name: 'UUID Generator',
    title: 'Free UUID Generator - Create v4 UUIDs Online',
    description: 'Generate RFC 4122 v4 UUIDs instantly. Create one or many. Uses Web Crypto API for true randomness. Free and private.',
    keywords: ['uuid generator', 'guid generator', 'uuid v4', 'unique id generator'],
    intent: 'informational', category: 'Developer Tools', h1: 'UUID Generator',
    shortIntro: 'Generate random v4 UUIDs for databases, sessions, and APIs.', published: true,
  },
  {
    slug: 'lorem-ipsum-generator', name: 'Lorem Ipsum Generator',
    title: 'Free Lorem Ipsum Generator - Placeholder Text Online',
    description: 'Generate Lorem Ipsum placeholder text instantly. Choose number of paragraphs. Free and easy. For mockups and designs.',
    keywords: ['lorem ipsum', 'lorem ipsum generator', 'placeholder text', 'dummy text'],
    intent: 'informational', category: 'Developer Tools', h1: 'Lorem Ipsum Generator',
    shortIntro: 'Generate placeholder text for mockups and designs.', published: true,
  },
  {
    slug: 'circle-calculator', name: 'Circle Calculator',
    title: 'Free Circle Calculator - Area, Circumference & Diameter',
    description: 'Calculate circle area, circumference, and diameter from radius. Free and accurate. For math, engineering, and construction.',
    keywords: ['circle calculator', 'area of circle', 'circumference calculator', 'circle area'],
    intent: 'informational', category: 'Math Calculators', h1: 'Circle Calculator',
    shortIntro: 'Find circle area, circumference, and diameter from radius.', published: true,
  },
  {
    slug: 'triangle-calculator', name: 'Triangle Calculator',
    title: 'Free Triangle Calculator - Pythagorean Theorem & Area',
    description: 'Solve right triangles with the Pythagorean theorem. Find hypotenuse, area, and perimeter. Free and instant.',
    keywords: ['triangle calculator', 'pythagorean theorem', 'hypotenuse calculator', 'right triangle'],
    intent: 'informational', category: 'Math Calculators', h1: 'Triangle Calculator',
    shortIntro: 'Solve right triangles — hypotenuse, area, perimeter.', published: true,
  },
  {
    slug: 'rectangle-calculator', name: 'Rectangle Calculator',
    title: 'Free Rectangle Calculator - Area, Perimeter & Diagonal',
    description: 'Calculate rectangle area, perimeter, and diagonal. Free and accurate. For construction, flooring, and design.',
    keywords: ['rectangle calculator', 'area of rectangle', 'rectangle area', 'square footage'],
    intent: 'informational', category: 'Math Calculators', h1: 'Rectangle Calculator',
    shortIntro: 'Find rectangle area, perimeter, and diagonal.', published: true,
  },
  {
    slug: 'standard-deviation-calculator', name: 'Standard Deviation Calculator',
    title: 'Free Standard Deviation Calculator - Mean, Variance, Stats',
    description: 'Calculate standard deviation, mean, and variance from any list of numbers. Free and accurate. For statistics and data analysis.',
    keywords: ['standard deviation calculator', 'variance calculator', 'statistics calculator'],
    intent: 'informational', category: 'Math Calculators', h1: 'Standard Deviation Calculator',
    shortIntro: 'Calculate standard deviation, variance, and mean.', published: true,
  },
  {
    slug: 'percentile-calculator', name: 'Percentile Calculator',
    title: 'Free Percentile Calculator - Find Any Percentile Online',
    description: 'Find the value at any percentile of a dataset. Free and accurate. For test scores, salaries, and performance metrics.',
    keywords: ['percentile calculator', '90th percentile', 'percentile rank', 'data percentile'],
    intent: 'informational', category: 'Math Calculators', h1: 'Percentile Calculator',
    shortIntro: 'Find the value at any percentile of your data.', published: true,
  },
  {
    slug: 'inflation-calculator', name: 'Inflation Calculator',
    title: 'Free Inflation Calculator - See How Purchasing Power Changes',
    description: 'See how inflation erodes purchasing power over time. Calculate future equivalent costs. Free and instant.',
    keywords: ['inflation calculator', 'purchasing power', 'future value of money'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Inflation Calculator',
    shortIntro: 'See how inflation reduces the value of money over time.', published: true,
  },
  {
    slug: 'retirement-calculator', name: 'Retirement Calculator',
    title: 'Free Retirement Calculator - Project Your Nest Egg',
    description: 'Project your retirement savings with current balance, contributions, and growth. Free and instant. Plan your future.',
    keywords: ['retirement calculator', 'retirement savings', 'nest egg calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Retirement Calculator',
    shortIntro: 'Project your retirement savings with compound growth.', published: true,
  },
  {
    slug: 'simple-interest-calculator', name: 'Simple Interest Calculator',
    title: 'Free Simple Interest Calculator - Calculate Interest Earned',
    description: 'Calculate simple interest on loans or savings. Find interest earned and total amount. Free and instant.',
    keywords: ['simple interest calculator', 'interest calculator', 'interest earned'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Simple Interest Calculator',
    shortIntro: 'Calculate simple interest with the I = Prt formula.', published: true,
  },
  {
    slug: 'unit-price-calculator', name: 'Unit Price Calculator',
    title: 'Free Unit Price Calculator - Compare Value Per Ounce, Gram',
    description: 'Compare unit prices to find the best deal. Works for any product and unit. Free and instant. Save money shopping.',
    keywords: ['unit price calculator', 'price comparison', 'best value calculator'],
    intent: 'informational', category: 'Finance Calculators', h1: 'Unit Price Calculator',
    shortIntro: 'Compare unit prices to find the real best deal.', published: true,
  },

  // ══════════ 第四批:开发者/Web 工具(8 个,补到 60)══════════
  {
    slug: 'random-number-generator', name: 'Random Number Generator',
    title: 'Free Random Number Generator - Pick Numbers Online',
    description: 'Generate random numbers within any range. Pick unique numbers, generate multiple at once. Free and instant.',
    keywords: ['random number generator', 'random picker', 'number randomizer', 'pick a number'],
    intent: 'informational', category: 'Developer Tools', h1: 'Random Number Generator',
    shortIntro: 'Generate random numbers in any range, with optional uniqueness.', published: true,
  },
  {
    slug: 'password-strength-checker', name: 'Password Strength Checker',
    title: 'Free Password Strength Checker - Test Your Password',
    description: 'Test how strong your password is. Get instant entropy analysis and a security checklist. 100% private.',
    keywords: ['password strength checker', 'password tester', 'how strong is my password'],
    intent: 'commercial', category: 'Security Tools', h1: 'Password Strength Checker',
    shortIntro: 'Test your password strength with entropy analysis and a checklist.', published: true,
  },
  {
    slug: 'base64-encoder', name: 'Base64 Encoder',
    title: 'Free Base64 Encoder - Encode Text to Base64 Online',
    description: 'Encode text to Base64 instantly. Handles UTF-8 properly. Free, fast, and private. No signup.',
    keywords: ['base64 encoder', 'encode base64', 'text to base64'],
    intent: 'informational', category: 'Developer Tools', h1: 'Base64 Encoder',
    shortIntro: 'Encode text to Base64 instantly with proper UTF-8 support.', published: true,
  },
  {
    slug: 'base64-decoder', name: 'Base64 Decoder',
    title: 'Free Base64 Decoder - Decode Base64 to Text Online',
    description: 'Decode Base64 back to readable text instantly. Handles UTF-8. Free and private. No signup.',
    keywords: ['base64 decoder', 'decode base64', 'base64 to text'],
    intent: 'informational', category: 'Developer Tools', h1: 'Base64 Decoder',
    shortIntro: 'Decode Base64 back to text instantly.', published: true,
  },
  {
    slug: 'html-escape', name: 'HTML Escape',
    title: 'Free HTML Escape Tool - Escape Special Characters Online',
    description: 'Escape HTML special characters (& < > ") to prevent XSS and display code. Free and instant.',
    keywords: ['html escape', 'escape html characters', 'html entity encoder'],
    intent: 'informational', category: 'Developer Tools', h1: 'HTML Escape',
    shortIntro: 'Escape HTML special characters to prevent XSS attacks.', published: true,
  },
  {
    slug: 'html-unescape', name: 'HTML Unescape',
    title: 'Free HTML Unescape Tool - Decode HTML Entities Online',
    description: 'Unescape HTML entities (&amp; &lt; &gt;) back to characters. Free and instant. No signup.',
    keywords: ['html unescape', 'decode html entities', 'html entity decoder'],
    intent: 'informational', category: 'Developer Tools', h1: 'HTML Unescape',
    shortIntro: 'Convert HTML entities back to readable characters.', published: true,
  },
  {
    slug: 'url-encoder', name: 'URL Encoder',
    title: 'Free URL Encoder - Encode Text for URLs Online',
    description: 'Encode text for safe use in URLs. Spaces, special chars, and unicode all handled. Free and instant.',
    keywords: ['url encoder', 'encode url', 'percent encoding', 'uri encoder'],
    intent: 'informational', category: 'Developer Tools', h1: 'URL Encoder',
    shortIntro: 'Encode text for safe use in URLs.', published: true,
  },
  {
    slug: 'url-decoder', name: 'URL Decoder',
    title: 'Free URL Decoder - Decode URL-Encoded Text Online',
    description: 'Decode percent-encoded URLs back to readable text. Free, fast, and private. No signup.',
    keywords: ['url decoder', 'decode url', 'percent decoder', 'uri decoder'],
    intent: 'informational', category: 'Developer Tools', h1: 'URL Decoder',
    shortIntro: 'Decode percent-encoded URLs back to text.', published: true,
  },

  // ══════════ 第三批:文本工具(10 个)══════════
  {
    slug: 'uppercase-converter', name: 'Uppercase Converter',
    title: 'Free Uppercase Converter - Convert Text to ALL CAPS Online',
    description: 'Convert any text to uppercase instantly. Free, fast, and works in your browser. No signup required.',
    keywords: ['uppercase converter', 'text to uppercase', 'caps converter', 'all caps text'],
    intent: 'informational', category: 'Text Tools', h1: 'Uppercase Converter',
    shortIntro: 'Convert any text to ALL UPPERCASE instantly.', published: true,
  },
  {
    slug: 'lowercase-converter', name: 'Lowercase Converter',
    title: 'Free Lowercase Converter - Convert Text to lowercase Online',
    description: 'Convert any text to lowercase instantly. Free, fast, and private. No signup required.',
    keywords: ['lowercase converter', 'text to lowercase', 'small letters converter'],
    intent: 'informational', category: 'Text Tools', h1: 'Lowercase Converter',
    shortIntro: 'Convert any text to lowercase instantly.', published: true,
  },
  {
    slug: 'title-case-converter', name: 'Title Case Converter',
    title: 'Free Title Case Converter - Capitalize Each Word Online',
    description: 'Convert text to title case, capitalizing the first letter of each word. Free and instant.',
    keywords: ['title case converter', 'capitalize each word', 'title case generator'],
    intent: 'informational', category: 'Text Tools', h1: 'Title Case Converter',
    shortIntro: 'Capitalize the first letter of each word for titles and headings.', published: true,
  },
  {
    slug: 'sentence-case-converter', name: 'Sentence Case Converter',
    title: 'Free Sentence Case Converter - Capitalize Sentences Online',
    description: 'Convert text to sentence case, capitalizing the first letter of each sentence. Free and instant.',
    keywords: ['sentence case converter', 'sentence capitalizer', 'capitalize sentences'],
    intent: 'informational', category: 'Text Tools', h1: 'Sentence Case Converter',
    shortIntro: 'Capitalize the first letter of each sentence automatically.', published: true,
  },
  {
    slug: 'reverse-text', name: 'Reverse Text Generator',
    title: 'Free Reverse Text Generator - Reverse Letters & Words Online',
    description: 'Reverse any text instantly. Reverse letters, words, or entire sentences. Free and fun.',
    keywords: ['reverse text', 'text reverser', 'reverse letters', 'backwards text'],
    intent: 'informational', category: 'Text Tools', h1: 'Reverse Text Generator',
    shortIntro: 'Reverse any text — fun for puzzles and ciphers.', published: true,
  },
  {
    slug: 'remove-duplicate-lines', name: 'Remove Duplicate Lines',
    title: 'Free Remove Duplicate Lines Tool - Dedupe Your List Online',
    description: 'Remove duplicate lines from any list instantly. Preserves order. Free and private. No signup.',
    keywords: ['remove duplicate lines', 'dedupe lines', 'delete duplicate rows', 'unique lines'],
    intent: 'informational', category: 'Text Tools', h1: 'Remove Duplicate Lines',
    shortIntro: 'Clean up lists by removing duplicate lines while keeping order.', published: true,
  },
  {
    slug: 'sort-lines', name: 'Sort Text Lines',
    title: 'Free Sort Lines Alphabetically - Sort Your List Online',
    description: 'Sort lines alphabetically instantly. Ascending order, removes empty lines. Free and private.',
    keywords: ['sort lines', 'alphabetical sort', 'sort text lines', 'sort list online'],
    intent: 'informational', category: 'Text Tools', h1: 'Sort Text Lines',
    shortIntro: 'Sort any list alphabetically in one click.', published: true,
  },
  {
    slug: 'remove-line-breaks', name: 'Remove Line Breaks',
    title: 'Free Remove Line Breaks Tool - Join Text Into One Line',
    description: 'Remove all line breaks and join text into a single line. Free, fast, and private. No signup.',
    keywords: ['remove line breaks', 'join lines', 'single line text', 'remove newlines'],
    intent: 'informational', category: 'Text Tools', h1: 'Remove Line Breaks',
    shortIntro: 'Join multi-line text into a single line.', published: true,
  },
  {
    slug: 'find-and-replace', name: 'Find and Replace Text',
    title: 'Free Find and Replace Text Tool - Bulk Replace Online',
    description: 'Find and replace text instantly in your browser. Supports any search and replacement. Free and private.',
    keywords: ['find and replace', 'text replace tool', 'bulk replace text'],
    intent: 'informational', category: 'Text Tools', h1: 'Find and Replace Text',
    shortIntro: 'Find and replace any text instantly.', published: true,
  },
  {
    slug: 'whitespace-remover', name: 'Whitespace Remover',
    title: 'Free Whitespace Remover - Trim Extra Spaces Online',
    description: 'Remove extra whitespace, leading/trailing spaces, and collapse multiple spaces. Free and instant.',
    keywords: ['whitespace remover', 'remove extra spaces', 'trim spaces', 'collapse whitespace'],
    intent: 'informational', category: 'Text Tools', h1: 'Whitespace Remover',
    shortIntro: 'Clean up messy spacing in any text.', published: true,
  },

  // ══════════ 第三批:单位转换器(8 个)══════════
  {
    slug: 'data-storage-converter', name: 'Data Storage Converter',
    title: 'Free Data Storage Converter - Bytes, KB, MB, GB, TB Online',
    description: 'Convert between bytes, KB, MB, GB, TB, and bits instantly. Free and accurate. No signup.',
    keywords: ['data storage converter', 'bytes to mb', 'gb to mb', 'file size converter'],
    intent: 'informational', category: 'Unit Converters', h1: 'Data Storage Converter',
    shortIntro: 'Convert between bytes, KB, MB, GB, TB and more.', published: true,
  },
  {
    slug: 'time-converter', name: 'Time Converter',
    title: 'Free Time Converter - Seconds, Minutes, Hours, Days Online',
    description: 'Convert between milliseconds, seconds, minutes, hours, days, weeks, months, and years. Free.',
    keywords: ['time converter', 'hours to minutes', 'seconds to hours', 'days to weeks'],
    intent: 'informational', category: 'Unit Converters', h1: 'Time Converter',
    shortIntro: 'Convert between seconds, minutes, hours, days and more.', published: true,
  },
  {
    slug: 'numeral-system-converter', name: 'Number Base Converter',
    title: 'Free Number Base Converter - Binary, Octal, Decimal, Hex',
    description: 'Convert between binary, octal, decimal, and hexadecimal instantly. Free and accurate. For programmers.',
    keywords: ['binary converter', 'hex converter', 'decimal to binary', 'number base converter'],
    intent: 'informational', category: 'Unit Converters', h1: 'Number Base Converter',
    shortIntro: 'Convert between binary, octal, decimal, and hex.', published: true,
  },
  {
    slug: 'angle-converter', name: 'Angle Converter',
    title: 'Free Angle Converter - Degrees, Radians, Gradians Online',
    description: 'Convert between degrees, radians, gradians, arcminutes, and arcseconds instantly. Free.',
    keywords: ['angle converter', 'degrees to radians', 'radian to degree'],
    intent: 'informational', category: 'Unit Converters', h1: 'Angle Converter',
    shortIntro: 'Convert between degrees, radians, and gradians.', published: true,
  },
  {
    slug: 'fuel-economy-converter', name: 'Fuel Economy Converter',
    title: 'Free Fuel Economy Converter - MPG, L/100km, km/L Online',
    description: 'Convert between MPG (US/UK) and L/100km instantly. For comparing car fuel efficiency.',
    keywords: ['fuel economy converter', 'mpg to l 100km', 'fuel consumption converter'],
    intent: 'informational', category: 'Unit Converters', h1: 'Fuel Economy Converter',
    shortIntro: 'Convert between MPG and L/100km for car efficiency.', published: true,
  },
  {
    slug: 'pressure-converter', name: 'Pressure Converter',
    title: 'Free Pressure Converter - Bar, PSI, Pascal, atm Online',
    description: 'Convert between pascals, bar, PSI, atm, and torr instantly. For tires, weather, engineering.',
    keywords: ['pressure converter', 'bar to psi', 'pascal to bar', 'atm to psi'],
    intent: 'informational', category: 'Unit Converters', h1: 'Pressure Converter',
    shortIntro: 'Convert between bar, PSI, pascal, atm and more.', published: true,
  },
  {
    slug: 'energy-converter', name: 'Energy Converter',
    title: 'Free Energy Converter - Joules, Calories, kWh, BTU Online',
    description: 'Convert between joules, calories, kWh, BTU, and eV instantly. For food, electricity, physics.',
    keywords: ['energy converter', 'joules to calories', 'kwh to joules', 'calorie converter'],
    intent: 'informational', category: 'Unit Converters', h1: 'Energy Converter',
    shortIntro: 'Convert between joules, calories, kWh, and BTU.', published: true,
  },
  {
    slug: 'frequency-converter', name: 'Frequency Converter',
    title: 'Free Frequency Converter - Hz, kHz, MHz, GHz, RPM Online',
    description: 'Convert between Hz, kHz, MHz, GHz, and RPM instantly. For electronics, audio, and engineering.',
    keywords: ['frequency converter', 'hz to mhz', 'ghz to hz', 'rpm to hz'],
    intent: 'informational', category: 'Unit Converters', h1: 'Frequency Converter',
    shortIntro: 'Convert between Hz, kHz, MHz, GHz, and RPM.', published: true,
  },

  // ══════════ 第三批:健康计算器(4 个)══════════
  {
    slug: 'calorie-calculator', name: 'Calorie Calculator',
    title: 'Free Calorie Calculator - TDEE, BMR & Weight Loss Calories',
    description: 'Calculate your daily calorie needs (TDEE) and BMR. Find calories to lose, maintain, or gain weight.',
    keywords: ['calorie calculator', 'tdee calculator', 'daily calorie needs', 'bmr calculator'],
    intent: 'commercial', category: 'Health Calculators', h1: 'Calorie Calculator',
    shortIntro: 'Find your daily calorie needs for weight loss or gain.', published: true,
  },
  {
    slug: 'bmr-calculator', name: 'BMR Calculator',
    title: 'Free BMR Calculator - Basal Metabolic Rate (Mifflin-St Jeor)',
    description: 'Calculate your Basal Metabolic Rate (BMR) — calories burned at complete rest. Free and accurate.',
    keywords: ['bmr calculator', 'basal metabolic rate', 'resting calorie burn'],
    intent: 'commercial', category: 'Health Calculators', h1: 'BMR Calculator',
    shortIntro: 'Calculate calories your body burns at complete rest.', published: true,
  },
  {
    slug: 'water-intake-calculator', name: 'Water Intake Calculator',
    title: 'Free Water Intake Calculator - How Much Water Should You Drink',
    description: 'Calculate how much water you should drink daily based on weight, activity, and climate. Free.',
    keywords: ['water intake calculator', 'daily water needs', 'hydration calculator'],
    intent: 'informational', category: 'Health Calculators', h1: 'Water Intake Calculator',
    shortIntro: 'Find your ideal daily water intake.', published: true,
  },
  {
    slug: 'ideal-weight-calculator', name: 'Ideal Weight Calculator',
    title: 'Free Ideal Weight Calculator - Devine, Robinson & Hamwi Formulas',
    description: 'Calculate your ideal body weight using Devine, Robinson, and Hamwi formulas. Free and instant.',
    keywords: ['ideal weight calculator', 'healthy weight', 'devine formula'],
    intent: 'commercial', category: 'Health Calculators', h1: 'Ideal Weight Calculator',
    shortIntro: 'Find your ideal body weight based on height and gender.', published: true,
  },

  // ══════════ 第三批:数学计算器(3 个)══════════
  {
    slug: 'fraction-calculator', name: 'Fraction Calculator',
    title: 'Free Fraction Calculator - Add, Subtract, Multiply, Divide Fractions',
    description: 'Add, subtract, multiply, and divide fractions. Results simplified to lowest terms. Free.',
    keywords: ['fraction calculator', 'add fractions', 'simplify fractions', 'fraction math'],
    intent: 'informational', category: 'Math Calculators', h1: 'Fraction Calculator',
    shortIntro: 'Add, subtract, multiply, divide fractions with exact math.', published: true,
  },
  {
    slug: 'ratio-calculator', name: 'Ratio Calculator',
    title: 'Free Ratio Calculator - Solve Proportions & Ratios Online',
    description: 'Solve ratios and proportions instantly. Find the missing value in A:B = C:D. Free and accurate.',
    keywords: ['ratio calculator', 'proportion solver', 'solve ratio', 'cross multiply'],
    intent: 'informational', category: 'Math Calculators', h1: 'Ratio Calculator',
    shortIntro: 'Solve proportions and find missing ratio values.', published: true,
  },
  {
    slug: 'lcm-gcd-calculator', name: 'LCM & GCD Calculator',
    title: 'Free LCM & GCD Calculator - Least Common Multiple & Greatest Common Divisor',
    description: 'Find the LCM (least common multiple) and GCD (greatest common divisor) of any numbers. Free.',
    keywords: ['lcm calculator', 'gcd calculator', 'greatest common divisor', 'least common multiple'],
    intent: 'informational', category: 'Math Calculators', h1: 'LCM & GCD Calculator',
    shortIntro: 'Find LCM and GCD of any set of numbers.', published: true,
  },

  // ══════════ 第三批:金融计算器(7 个)══════════
  {
    slug: 'mortgage-calculator', name: 'Mortgage Calculator',
    title: 'Free Mortgage Calculator - Monthly Payment & Total Interest',
    description: 'Calculate monthly mortgage payments, total interest, and loan amount. Free and accurate.',
    keywords: ['mortgage calculator', 'home loan calculator', 'monthly mortgage payment'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Mortgage Calculator',
    shortIntro: 'Calculate monthly mortgage payments and total interest.', published: true,
  },
  {
    slug: 'markup-calculator', name: 'Markup Calculator',
    title: 'Free Markup Calculator - Cost, Selling Price, Margin & Profit',
    description: 'Calculate selling price, profit, and margin from cost and markup percentage. Free.',
    keywords: ['markup calculator', 'price markup', 'profit margin calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Markup Calculator',
    shortIntro: 'Find selling price and margin from cost and markup.', published: true,
  },
  {
    slug: 'hourly-to-salary-calculator', name: 'Hourly to Salary Calculator',
    title: 'Free Hourly to Salary Calculator - Convert Wage to Annual Pay',
    description: 'Convert hourly wage to annual, monthly, weekly salary instantly. Free and accurate.',
    keywords: ['hourly to salary', 'wage to salary', 'annual salary calculator'],
    intent: 'informational', category: 'Finance Calculators', h1: 'Hourly to Salary Calculator',
    shortIntro: 'Convert your hourly wage to annual salary.', published: true,
  },
  {
    slug: 'roi-calculator', name: 'ROI Calculator',
    title: 'Free ROI Calculator - Return on Investment & Annualized Return',
    description: 'Calculate return on investment (ROI) and annualized return (CAGR) instantly. Free.',
    keywords: ['roi calculator', 'return on investment', 'investment return calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'ROI Calculator',
    shortIntro: 'Calculate total and annualized return on investment.', published: true,
  },
  {
    slug: 'credit-card-payoff-calculator', name: 'Credit Card Payoff Calculator',
    title: 'Free Credit Card Payoff Calculator - Time & Interest to Pay Off',
    description: 'Calculate how long to pay off your credit card and total interest paid. Free and instant.',
    keywords: ['credit card payoff calculator', 'debt payoff', 'credit card interest'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Credit Card Payoff Calculator',
    shortIntro: 'See how long to pay off your credit card balance.', published: true,
  },
  {
    slug: 'income-tax-estimator', name: 'Income Tax Estimator',
    title: 'Free Income Tax Estimator - US Federal Tax Calculator',
    description: 'Estimate your US federal income tax and take-home pay using 2024 brackets. Free and instant.',
    keywords: ['income tax estimator', 'tax calculator', 'take home pay calculator'],
    intent: 'commercial', category: 'Finance Calculators', h1: 'Income Tax Estimator',
    shortIntro: 'Estimate US federal income tax and take-home pay.', published: true,
  },
  // 已补完:page.tsx + SalaryConverterClient + Content 均已就绪
  {
    slug: 'salary-converter', name: 'Salary Converter',
    title: 'Free Salary Converter - Annual, Monthly, Bi-Weekly, Hourly',
    description: 'Convert between annual, monthly, bi-weekly, and hourly salary instantly. Free.',
    keywords: ['salary converter', 'annual to hourly', 'salary breakdown'],
    intent: 'informational', category: 'Finance Calculators', h1: 'Salary Converter',
    shortIntro: 'Convert salary between annual, monthly, bi-weekly, and hourly.', published: true,
  },

  {
    slug: 'gpa-calculator',
    name: 'GPA Calculator',
    title: 'Free GPA Calculator - Calculate Your College Grade Point Average',
    description:
      'Free GPA calculator. Calculate your college or high school GPA on the 4.0 scale. Add courses, credits, and grades to instantly see your cumulative GPA. No signup.',
    keywords: [
      'gpa calculator',
      'grade point average calculator',
      'college gpa calculator',
      'cumulative gpa calculator',
      'high school gpa calculator',
    ],
    intent: 'commercial',
    category: 'Education Calculators',
    h1: 'GPA Calculator',
    shortIntro: 'Calculate your GPA instantly. Add courses, credits, and letter grades.',
    published: true,
  },
  {
    slug: 'average-calculator',
    name: 'Average Calculator',
    title: 'Free Average Calculator - Mean, Median, Min, Max & Range',
    description:
      'Free average calculator. Calculate the mean, median, count, sum, minimum, maximum, and range of any list of numbers. Paste your data and get instant statistics. No signup.',
    keywords: [
      'average calculator',
      'mean calculator',
      'median calculator',
      'number average',
      'statistics calculator',
    ],
    intent: 'informational',
    category: 'Math Calculators',
    h1: 'Average Calculator',
    shortIntro: 'Calculate mean, median, sum, min, max, and range of any number list.',
    published: true,
  },
  {
    slug: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    title: 'Free Date Difference Calculator - Days Between Two Dates',
    description:
      'Free date difference calculator. Find the exact duration between any two dates in years, months, days, weeks, and business days. Perfect for projects, contracts, and deadlines.',
    keywords: [
      'date difference calculator',
      'days between dates',
      'date duration calculator',
      'business days calculator',
      'time between dates',
    ],
    intent: 'informational',
    category: 'Time Calculators',
    h1: 'Date Difference Calculator',
    shortIntro: 'Find exact duration between any two dates — days, weeks, months, business days.',
    published: true,
  },
  {
    slug: 'weight-converter',
    name: 'Weight Converter',
    title: 'Free Weight Converter - kg, lb, oz, g, tons and More',
    description:
      'Free weight converter. Convert between kilograms, pounds, ounces, grams, metric tons, and stones instantly. Accurate and easy. No signup required.',
    keywords: [
      'weight converter',
      'kg to lbs',
      'pounds to kg',
      'mass converter',
      'weight conversion',
    ],
    intent: 'informational',
    category: 'Unit Converters',
    h1: 'Weight Converter',
    shortIntro: 'Convert between metric and imperial weight units instantly.',
    published: true,
  },
  {
    slug: 'temperature-converter',
    name: 'Temperature Converter',
    title: 'Free Temperature Converter - Celsius, Fahrenheit, Kelvin',
    description:
      'Free temperature converter. Convert between Celsius, Fahrenheit, and Kelvin instantly. Accurate formulas for cooking, science, and weather. No signup required.',
    keywords: [
      'temperature converter',
      'celsius to fahrenheit',
      'fahrenheit to celsius',
      'kelvin converter',
      'temp conversion',
    ],
    intent: 'informational',
    category: 'Unit Converters',
    h1: 'Temperature Converter',
    shortIntro: 'Convert between Celsius, Fahrenheit, and Kelvin instantly.',
    published: true,
  },
  {
    slug: 'speed-converter',
    name: 'Speed Converter',
    title: 'Free Speed Converter - km/h, mph, m/s, Knots & More',
    description:
      'Free speed converter. Convert between km/h, mph, m/s, knots, and ft/s instantly. Perfect for travel, running, and aviation. No signup required.',
    keywords: [
      'speed converter',
      'kmh to mph',
      'mph to kmh',
      'knots to mph',
      'velocity converter',
    ],
    intent: 'informational',
    category: 'Unit Converters',
    h1: 'Speed Converter',
    shortIntro: 'Convert between km/h, mph, m/s, knots, and ft/s instantly.',
    published: true,
  },
  {
    slug: 'area-converter',
    name: 'Area Converter',
    title: 'Free Area Converter - m², ft², Acres, Hectares & More',
    description:
      'Free area converter. Convert between square meters, square feet, acres, hectares, square yards, and more. For real estate, land, and construction. No signup.',
    keywords: [
      'area converter',
      'square meters to square feet',
      'acres to hectares',
      'land area converter',
      'surface converter',
    ],
    intent: 'informational',
    category: 'Unit Converters',
    h1: 'Area Converter',
    shortIntro: 'Convert between metric and imperial area units, including acres and hectares.',
    published: true,
  },
  {
    slug: 'volume-converter',
    name: 'Volume Converter',
    title: 'Free Volume Converter - Liters, Gallons, Cups, ml & More',
    description:
      'Free volume converter. Convert between liters, gallons, milliliters, cups, tablespoons, and more. For cooking, science, and industry. No signup required.',
    keywords: [
      'volume converter',
      'liters to gallons',
      'cups to ml',
      'ml to oz',
      'capacity converter',
    ],
    intent: 'informational',
    category: 'Unit Converters',
    h1: 'Volume Converter',
    shortIntro: 'Convert between metric and US cooking volume units instantly.',
    published: true,
  },
  {
    slug: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    title: 'Free Compound Interest Calculator - See How Investments Grow',
    description:
      'Free compound interest calculator. See how your savings or investments grow over time with regular contributions. Calculate future value, total interest earned, and growth breakdown.',
    keywords: [
      'compound interest calculator',
      'investment calculator',
      'savings calculator',
      'interest calculator',
      'future value calculator',
    ],
    intent: 'commercial',
    category: 'Finance Calculators',
    h1: 'Compound Interest Calculator',
    shortIntro: 'See how your savings grow with the power of compound interest.',
    published: true,
  },
  {
    slug: 'sales-tax-calculator',
    name: 'Sales Tax Calculator',
    title: 'Free Sales Tax Calculator - Add or Remove Tax Instantly',
    description:
      'Free sales tax calculator. Add sales tax to any price, or remove tax to find the pre-tax amount. Supports any tax rate. Works for VAT, GST, and local sales tax. No signup.',
    keywords: [
      'sales tax calculator',
      'tax calculator',
      'vat calculator',
      'gst calculator',
      'reverse tax calculator',
    ],
    intent: 'commercial',
    category: 'Finance Calculators',
    h1: 'Sales Tax Calculator',
    shortIntro: 'Add or remove sales tax from any price instantly.',
    published: true,
  },
  {
    slug: 'tip-calculator',
    name: 'Tip Calculator',
    title: 'Free Tip Calculator - Calculate Tips & Split Bills Easily',
    description:
      'Free tip calculator. Calculate the perfect tip for any bill and split it among any number of people. Supports custom tip percentages and rounding. No signup required.',
    keywords: [
      'tip calculator',
      'gratuity calculator',
      'tip splitter',
      'restaurant tip calculator',
      'bill splitter',
    ],
    intent: 'informational',
    category: 'Finance Calculators',
    h1: 'Tip Calculator',
    shortIntro: 'Calculate tips and split bills fairly among any number of people.',
    published: true,
  },
  {
    slug: 'discount-calculator',
    name: 'Discount Calculator',
    title: 'Free Discount Calculator - Find Sale Price & Savings Instantly',
    description:
      'Free discount calculator. Calculate the final price after a discount, or find the original price before a sale. Works for percentage off, coupons, and stacked discounts. No signup.',
    keywords: [
      'discount calculator',
      'percent off calculator',
      'sale price calculator',
      'coupon calculator',
      'markdown calculator',
    ],
    intent: 'commercial',
    category: 'Finance Calculators',
    h1: 'Discount Calculator',
    shortIntro: 'Find the final price after any discount and see how much you save.',
    published: true,
  },
  {
    slug: 'length-converter',
    name: 'Length Converter',
    title: 'Free Length Converter - Convert Meters, Feet, Inches, Miles & More',
    description:
      'Free length and distance converter. Convert between meters, kilometers, feet, inches, miles, yards, and centimeters instantly. Accurate, fast, and easy. No signup required.',
    keywords: [
      'length converter',
      'distance converter',
      'meter to feet',
      'unit converter',
      'measurement converter',
    ],
    intent: 'informational',
    category: 'Unit Converters',
    h1: 'Length Converter',
    shortIntro: 'Convert between metric and imperial length units instantly.',
    published: true,
  },
  {
    slug: 'loan-calculator',
    name: 'Loan Calculator',
    title: 'Free Loan Calculator - Calculate Monthly Payments & Interest',
    description:
      'Free loan calculator. Calculate monthly payments, total interest, and total cost for any loan. Supports mortgage, auto, and personal loans. See full amortization schedule. No signup.',
    keywords: [
      'loan calculator',
      'mortgage calculator',
      'monthly payment calculator',
      'interest calculator',
      'auto loan calculator',
    ],
    intent: 'commercial',
    category: 'Finance Calculators',
    h1: 'Loan Calculator',
    shortIntro: 'Calculate monthly payments, total interest, and full cost of any loan.',
    published: true,
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    title: 'Free Percentage Calculator - Calculate Percent, Increase & Decrease',
    description:
      'Free percentage calculator. Find what is X% of Y, percentage increase/decrease, and more. Quick, accurate, and easy. Works for discounts, grades, tips, and business calculations.',
    keywords: [
      'percentage calculator',
      'percent calculator',
      'percentage increase calculator',
      'percent change calculator',
      'discount calculator',
    ],
    intent: 'informational',
    category: 'Math Calculators',
    h1: 'Percentage Calculator',
    shortIntro: 'Calculate percentages, increases, decreases, and discounts instantly.',
    published: true,
  },
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    title: 'Free BMI Calculator - Calculate Body Mass Index (Metric & Imperial)',
    description:
      'Free BMI calculator. Calculate your Body Mass Index instantly with metric or imperial units. See your BMI category and healthy weight range. No signup, works in your browser.',
    keywords: [
      'bmi calculator',
      'body mass index calculator',
      'healthy weight calculator',
      'bmi chart',
      'weight calculator',
    ],
    intent: 'commercial',
    category: 'Health Calculators',
    h1: 'BMI Calculator',
    shortIntro: 'Calculate your Body Mass Index and see your healthy weight range.',
    published: true,
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    title: 'Free Age Calculator - Calculate Your Exact Age in Years, Months, Days',
    description:
      'Free age calculator. Calculate your exact age in years, months, days, hours. Also find the time between any two dates. Perfect for birthdays, deadlines, and age verification.',
    keywords: [
      'age calculator',
      'date of birth calculator',
      'date difference calculator',
      'how old am i',
      'birthday calculator',
    ],
    intent: 'informational',
    category: 'Time Calculators',
    h1: 'Age Calculator',
    shortIntro: 'Calculate exact age in years, months, days, or time between any two dates.',
    published: true,
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    title: 'Free Password Generator - Create Strong, Secure Passwords Online',
    description:
      'Create strong, random, and secure passwords instantly. Customize length, include symbols, numbers, and uppercase. 100% private — generated in your browser, never sent anywhere. No signup.',
    keywords: [
      'password generator',
      'strong password generator',
      'random password generator',
      'secure password',
      'password creator',
    ],
    intent: 'commercial',
    category: 'Security Tools',
    h1: 'Password Generator',
    shortIntro: 'Create strong, random, and secure passwords in one click.',
    published: true,
  },
  {
    slug: 'word-counter',
    name: 'Word Counter',
    title: 'Free Word Counter - Count Words, Characters & Reading Time Online',
    description:
      'Free online word counter. Instantly count words, characters, sentences, paragraphs, and estimated reading time. Perfect for essays, articles, and social media. No signup, works in your browser.',
    keywords: [
      'word counter',
      'character counter',
      'count words online',
      'reading time calculator',
      'text counter',
    ],
    intent: 'informational',
    category: 'Text Tools',
    h1: 'Word Counter',
    shortIntro: 'Count words, characters, sentences, and reading time instantly.',
    published: true,
  },
  {
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    title: 'Free QR Code Generator - Create Custom QR Codes Online',
    description:
      'Create free QR codes for URLs, text, WiFi, and more. Download as PNG or SVG instantly. 100% private — generated in your browser. No signup, no watermark, no limits.',
    keywords: [
      'qr code generator',
      'free qr code maker',
      'create qr code',
      'qr code creator',
      'url to qr code',
    ],
    intent: 'commercial',
    category: 'Business Tools',
    h1: 'QR Code Generator',
    shortIntro: 'Create custom QR codes for URLs, text, and WiFi. Free, no watermark.',
    published: true,
  },
  {
    slug: 'slug-generator',
    name: 'Slug Generator',
    title: 'Free URL Slug Generator - Create SEO-Friendly Slugs Online',
    description:
      'Free online slug generator. Convert any title or text into clean, SEO-friendly URL slugs. Supports custom separators, lowercase, transliteration, and special character removal. No signup required.',
    keywords: ['slug generator', 'url slug generator', 'seo slug', 'permalink generator', 'slugify'],
    intent: 'informational',
    category: 'Developer Tools',
    h1: 'URL Slug Generator',
    shortIntro: 'Convert titles into clean, SEO-friendly URL slugs instantly.',
    published: true,
  },
]

/** 根据 slug 获取单个工具 */
export function getTool(slug: string): ToolMeta | undefined {
  return tools.find((t) => t.slug === slug)
}

/** 获取所有已上线的工具(用于首页、sitemap) */
export function getPublishedTools(): ToolMeta[] {
  return tools.filter((t) => t.published)
}

/** 获取所有工具(含未上线,用于 sitemap 全量收录 - 改为 published 的话只收录已上线) */
export function getAllToolSlugs(): string[] {
  return tools.filter((t) => t.published).map((t) => t.slug)
}

/** 按分类分组 */
export function getToolsByCategory(): Record<string, ToolMeta[]> {
  const grouped: Record<string, ToolMeta[]> = {}
  for (const tool of getPublishedTools()) {
    if (!grouped[tool.category]) grouped[tool.category] = []
    grouped[tool.category].push(tool)
  }
  return grouped
}

/**
 * 获取某工具的相关工具(用于工具页内链)
 *
 * 策略:同分类优先,剩余名额从其他分类补齐,共 limit 个,排除当前工具自身。
 * 顺序做了轻微随机但稳定(基于 slug 字符串),避免每个页面相关工具完全一致,
 * 让内链网络看起来自然,同时 SSR 时输出确定(同一次 build 结果一致)。
 */
export function getRelatedTools(slug: string, limit = 6): ToolMeta[] {
  const current = getTool(slug)
  if (!current) return []

  const published = getPublishedTools()
  // 同分类的其他工具(排除自己)
  const sameCategory = published.filter(
    (t) => t.slug !== slug && t.category === current.category,
  )
  // 其他分类的工具(排除自己)
  const otherCategory = published.filter(
    (t) => t.slug !== slug && t.category !== current.category,
  )

  // 基于 slug 的简单稳定"洗牌":让不同工具看到的相关列表有差异
  const seedShuffle = (arr: ToolMeta[], seed: string): ToolMeta[] => {
    const hash = seed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
    return [...arr].sort((a, b) => {
      const sa = a.slug.split('').reduce((x, c) => x + c.charCodeAt(0), 0)
      const sb = b.slug.split('').reduce((x, c) => x + c.charCodeAt(0), 0)
      return ((sa + hash) % 97) - ((sb + hash) % 97)
    })
  }

  const shuffledSame = seedShuffle(sameCategory, slug)
  const shuffledOther = seedShuffle(otherCategory, slug + 'x')

  // 同分类至少占一半名额(如果有的话),不足则从其他分类补
  const sameCount = Math.min(shuffledSame.length, Math.ceil(limit / 2))
  const picked = [
    ...shuffledSame.slice(0, sameCount),
    ...shuffledOther.slice(0, limit - sameCount),
  ]

  return picked.slice(0, limit)
}
