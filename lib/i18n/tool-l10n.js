"use strict";
/**
 * 工具级本地化数据层
 *
 * 每个"需要本地化"的工具在 lib/i18n/tools-l10n/<slug>.ts 导出一份 ToolL10n,
 * 覆盖 zh/es/de 三语。en 永远不在此注册 → 始终回退英文原值:
 *   - lib/tool-faqs.ts            (可见 FAQ)
 *   - lib/tool-formulas.ts        (公式区)
 *   - Client 组件内英文 fallback   (工具交互界面)
 *   - content.tsx 的 en 分支       (长文正文)
 *
 * 覆盖字段(全部可选,按需填;缺字段 → 该字段回退英文原值,绝不破图):
 *  - faqs:      可见 FAQ 的 Q&A
 *  - ui:        工具交互界面字符串(供 Client 组件经 tui() 读取)
 *  - useCases:  ToolInfoSection "Common uses" 列表(替代英文 formatUseCases)
 *  - formula:   FormulaSection 的 { formula, explain? }
 *
 * SEO 安全:en 永不在此注册,SSR/预渲染恒为英文,Google 索引不变。
 * name/shortIntro 不在此,继续用 lib/i18n/tools.{zh,es,de}.ts(已译完)。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMON_UC_UI = exports.COMMON_CALC_UI = void 0;
exports.getToolL10n = getToolL10n;
exports.getToolFaqsL10n = getToolFaqsL10n;
exports.tui = tui;
exports.tuiCalc = tuiCalc;
exports.tuiUc = tuiUc;
// ──────────── 注册表:slug → ToolL10n ────────────
const loan_calculator_1 = require("./tools-l10n/loan-calculator");
const mortgage_calculator_1 = require("./tools-l10n/mortgage-calculator");
const compound_interest_calculator_1 = require("./tools-l10n/compound-interest-calculator");
const apy_calculator_1 = require("./tools-l10n/apy-calculator");
const roi_calculator_1 = require("./tools-l10n/roi-calculator");
const credit_card_minimum_payment_calculator_1 = require("./tools-l10n/credit-card-minimum-payment-calculator");
const cash_back_calculator_1 = require("./tools-l10n/cash-back-calculator");
const down_payment_calculator_1 = require("./tools-l10n/down-payment-calculator");
const dti_calculator_1 = require("./tools-l10n/dti-calculator");
const commission_calculator_1 = require("./tools-l10n/commission-calculator");
const bill_split_calculator_1 = require("./tools-l10n/bill-split-calculator");
const savings_goal_calculator_1 = require("./tools-l10n/savings-goal-calculator");
const net_worth_calculator_1 = require("./tools-l10n/net-worth-calculator");
const annuity_calculator_1 = require("./tools-l10n/annuity-calculator");
const capital_gains_tax_estimator_1 = require("./tools-l10n/capital-gains-tax-estimator");
const rent_vs_buy_calculator_1 = require("./tools-l10n/rent-vs-buy-calculator");
const inflation_calculator_1 = require("./tools-l10n/inflation-calculator");
const retirement_calculator_1 = require("./tools-l10n/retirement-calculator");
const simple_interest_calculator_1 = require("./tools-l10n/simple-interest-calculator");
const unit_price_calculator_1 = require("./tools-l10n/unit-price-calculator");
const markup_calculator_1 = require("./tools-l10n/markup-calculator");
const hourly_to_salary_calculator_1 = require("./tools-l10n/hourly-to-salary-calculator");
const credit_card_payoff_calculator_1 = require("./tools-l10n/credit-card-payoff-calculator");
const income_tax_estimator_1 = require("./tools-l10n/income-tax-estimator");
const salary_converter_1 = require("./tools-l10n/salary-converter");
const sales_tax_calculator_1 = require("./tools-l10n/sales-tax-calculator");
const tip_calculator_1 = require("./tools-l10n/tip-calculator");
const discount_calculator_1 = require("./tools-l10n/discount-calculator");
const json_formatter_1 = require("./tools-l10n/json-formatter");
const jwt_decoder_1 = require("./tools-l10n/jwt-decoder");
const base64_encoder_1 = require("./tools-l10n/base64-encoder");
const base64_decoder_1 = require("./tools-l10n/base64-decoder");
const regex_tester_1 = require("./tools-l10n/regex-tester");
const uuid_generator_1 = require("./tools-l10n/uuid-generator");
const curl_converter_1 = require("./tools-l10n/curl-converter");
const markdown_to_html_1 = require("./tools-l10n/markdown-to-html");
const hash_generator_1 = require("./tools-l10n/hash-generator");
const binary_to_text_1 = require("./tools-l10n/binary-to-text");
const text_to_binary_1 = require("./tools-l10n/text-to-binary");
const url_query_parser_1 = require("./tools-l10n/url-query-parser");
const text_size_estimator_1 = require("./tools-l10n/text-size-estimator");
const json_minifier_1 = require("./tools-l10n/json-minifier");
const csv_to_json_1 = require("./tools-l10n/csv-to-json");
const json_to_csv_1 = require("./tools-l10n/json-to-csv");
const lorem_ipsum_generator_1 = require("./tools-l10n/lorem-ipsum-generator");
const random_number_generator_1 = require("./tools-l10n/random-number-generator");
const html_escape_1 = require("./tools-l10n/html-escape");
const html_unescape_1 = require("./tools-l10n/html-unescape");
const url_encoder_1 = require("./tools-l10n/url-encoder");
const url_decoder_1 = require("./tools-l10n/url-decoder");
const slug_generator_1 = require("./tools-l10n/slug-generator");
const json_to_typescript_1 = require("./tools-l10n/json-to-typescript");
const yaml_to_json_1 = require("./tools-l10n/yaml-to-json");
const sql_formatter_1 = require("./tools-l10n/sql-formatter");
const image_to_base64_1 = require("./tools-l10n/image-to-base64");
const word_counter_1 = require("./tools-l10n/word-counter");
const text_diff_1 = require("./tools-l10n/text-diff");
const remove_line_breaks_1 = require("./tools-l10n/remove-line-breaks");
const find_and_replace_1 = require("./tools-l10n/find-and-replace");
const uppercase_converter_1 = require("./tools-l10n/uppercase-converter");
const lowercase_converter_1 = require("./tools-l10n/lowercase-converter");
const title_case_converter_1 = require("./tools-l10n/title-case-converter");
const sentence_case_converter_1 = require("./tools-l10n/sentence-case-converter");
const reverse_text_1 = require("./tools-l10n/reverse-text");
const remove_duplicate_lines_1 = require("./tools-l10n/remove-duplicate-lines");
const slug_to_title_1 = require("./tools-l10n/slug-to-title");
const html_tag_stripper_1 = require("./tools-l10n/html-tag-stripper");
const character_frequency_1 = require("./tools-l10n/character-frequency");
const email_extractor_1 = require("./tools-l10n/email-extractor");
const url_extractor_1 = require("./tools-l10n/url-extractor");
const add_line_numbers_1 = require("./tools-l10n/add-line-numbers");
const text_to_list_1 = require("./tools-l10n/text-to-list");
const sort_lines_1 = require("./tools-l10n/sort-lines");
const whitespace_remover_1 = require("./tools-l10n/whitespace-remover");
const list_diff_1 = require("./tools-l10n/list-diff");
const mass_converter_1 = require("./tools-l10n/mass-converter");
const density_converter_1 = require("./tools-l10n/density-converter");
const power_converter_1 = require("./tools-l10n/power-converter");
const flow_rate_converter_1 = require("./tools-l10n/flow-rate-converter");
const data_storage_converter_1 = require("./tools-l10n/data-storage-converter");
const time_converter_1 = require("./tools-l10n/time-converter");
const numeral_system_converter_1 = require("./tools-l10n/numeral-system-converter");
const angle_converter_1 = require("./tools-l10n/angle-converter");
const fuel_economy_converter_1 = require("./tools-l10n/fuel-economy-converter");
const pressure_converter_1 = require("./tools-l10n/pressure-converter");
const energy_converter_1 = require("./tools-l10n/energy-converter");
const frequency_converter_1 = require("./tools-l10n/frequency-converter");
const weight_converter_1 = require("./tools-l10n/weight-converter");
const temperature_converter_1 = require("./tools-l10n/temperature-converter");
const speed_converter_1 = require("./tools-l10n/speed-converter");
const area_converter_1 = require("./tools-l10n/area-converter");
const volume_converter_1 = require("./tools-l10n/volume-converter");
const length_converter_1 = require("./tools-l10n/length-converter");
const trapezoid_calculator_1 = require("./tools-l10n/trapezoid-calculator");
const cube_calculator_1 = require("./tools-l10n/cube-calculator");
const sphere_calculator_1 = require("./tools-l10n/sphere-calculator");
const scientific_notation_converter_1 = require("./tools-l10n/scientific-notation-converter");
const prime_number_checker_1 = require("./tools-l10n/prime-number-checker");
const prime_factorization_calculator_1 = require("./tools-l10n/prime-factorization-calculator");
const combination_calculator_1 = require("./tools-l10n/combination-calculator");
const permutation_calculator_1 = require("./tools-l10n/permutation-calculator");
const circle_calculator_1 = require("./tools-l10n/circle-calculator");
const triangle_calculator_1 = require("./tools-l10n/triangle-calculator");
const rectangle_calculator_1 = require("./tools-l10n/rectangle-calculator");
const standard_deviation_calculator_1 = require("./tools-l10n/standard-deviation-calculator");
const percentile_calculator_1 = require("./tools-l10n/percentile-calculator");
const fraction_calculator_1 = require("./tools-l10n/fraction-calculator");
const ratio_calculator_1 = require("./tools-l10n/ratio-calculator");
const lcm_gcd_calculator_1 = require("./tools-l10n/lcm-gcd-calculator");
const average_calculator_1 = require("./tools-l10n/average-calculator");
const percentage_calculator_1 = require("./tools-l10n/percentage-calculator");
const bmi_calculator_1 = require("./tools-l10n/bmi-calculator");
const calorie_calculator_1 = require("./tools-l10n/calorie-calculator");
const tdee_calculator_1 = require("./tools-l10n/tdee-calculator");
const bmr_calculator_1 = require("./tools-l10n/bmr-calculator");
const body_fat_calculator_1 = require("./tools-l10n/body-fat-calculator");
const macro_calculator_1 = require("./tools-l10n/macro-calculator");
const pregnancy_due_date_calculator_1 = require("./tools-l10n/pregnancy-due-date-calculator");
const water_intake_calculator_1 = require("./tools-l10n/water-intake-calculator");
const ideal_weight_calculator_1 = require("./tools-l10n/ideal-weight-calculator");
const svg_to_image_1 = require("./tools-l10n/svg-to-image");
const px_to_rem_1 = require("./tools-l10n/px-to-rem");
const aspect_ratio_calculator_1 = require("./tools-l10n/aspect-ratio-calculator");
const color_contrast_checker_1 = require("./tools-l10n/color-contrast-checker");
const color_converter_1 = require("./tools-l10n/color-converter");
const open_graph_generator_1 = require("./tools-l10n/open-graph-generator");
const css_shadow_generator_1 = require("./tools-l10n/css-shadow-generator");
const favicon_generator_1 = require("./tools-l10n/favicon-generator");
const cron_parser_1 = require("./tools-l10n/cron-parser");
const age_calculator_1 = require("./tools-l10n/age-calculator");
const date_difference_calculator_1 = require("./tools-l10n/date-difference-calculator");
const age_difference_calculator_1 = require("./tools-l10n/age-difference-calculator");
const grade_calculator_1 = require("./tools-l10n/grade-calculator");
const final_grade_calculator_1 = require("./tools-l10n/final-grade-calculator");
const gpa_calculator_1 = require("./tools-l10n/gpa-calculator");
const password_strength_checker_1 = require("./tools-l10n/password-strength-checker");
const password_generator_1 = require("./tools-l10n/password-generator");
const qr_code_generator_1 = require("./tools-l10n/qr-code-generator");
const gpt_token_counter_1 = require("./tools-l10n/gpt-token-counter");
const ip_subnet_calculator_1 = require("./tools-l10n/ip-subnet-calculator");
const chmod_calculator_1 = require("./tools-l10n/chmod-calculator");
const ssh_key_generator_1 = require("./tools-l10n/ssh-key-generator");
const bcrypt_hash_generator_1 = require("./tools-l10n/bcrypt-hash-generator");
const user_agent_parser_1 = require("./tools-l10n/user-agent-parser");
const json_schema_generator_1 = require("./tools-l10n/json-schema-generator");
const naming_case_converter_1 = require("./tools-l10n/naming-case-converter");
const nginx_config_generator_1 = require("./tools-l10n/nginx-config-generator");
const webp_to_png_converter_1 = require("./tools-l10n/webp-to-png-converter");
const png_to_webp_converter_1 = require("./tools-l10n/png-to-webp-converter");
const image_resizer_1 = require("./tools-l10n/image-resizer");
const svg_minifier_1 = require("./tools-l10n/svg-minifier");
const css_gradient_generator_1 = require("./tools-l10n/css-gradient-generator");
const css_clamp_calculator_1 = require("./tools-l10n/css-clamp-calculator");
const csv_to_markdown_table_1 = require("./tools-l10n/csv-to-markdown-table");
const text_cleaner_1 = require("./tools-l10n/text-cleaner");
const srt_subtitle_shift_1 = require("./tools-l10n/srt-subtitle-shift");
const code_beautifier_1 = require("./tools-l10n/code-beautifier");
const secret_key_generator_1 = require("./tools-l10n/secret-key-generator");
const auto_loan_calculator_1 = require("./tools-l10n/auto-loan-calculator");
const ebay_fee_calculator_1 = require("./tools-l10n/ebay-fee-calculator");
const saas_ltv_churn_calculator_1 = require("./tools-l10n/saas-ltv-churn-calculator");
const freelance_invoice_generator_1 = require("./tools-l10n/freelance-invoice-generator");
const reverse_stripe_fee_calculator_1 = require("./tools-l10n/reverse-stripe-fee-calculator");
const timezone_converter_1 = require("./tools-l10n/timezone-converter");
const days_countdown_calculator_1 = require("./tools-l10n/days-countdown-calculator");
const reading_speaking_time_1 = require("./tools-l10n/reading-speaking-time");
const random_choice_picker_1 = require("./tools-l10n/random-choice-picker");
const wordle_solver_1 = require("./tools-l10n/wordle-solver");
const ip_checker_1 = require("./tools-l10n/ip-checker");
const amortization_table_generator_1 = require("./tools-l10n/amortization-table-generator");
const ascii_table_1 = require("./tools-l10n/ascii-table");
const base_converter_1 = require("./tools-l10n/base-converter");
const caffeine_calculator_1 = require("./tools-l10n/caffeine-calculator");
const coin_flip_1 = require("./tools-l10n/coin-flip");
const cooking_converter_1 = require("./tools-l10n/cooking-converter");
const cron_expression_generator_1 = require("./tools-l10n/cron-expression-generator");
const dice_roller_1 = require("./tools-l10n/dice-roller");
const dog_age_calculator_1 = require("./tools-l10n/dog-age-calculator");
const electricity_cost_calculator_1 = require("./tools-l10n/electricity-cost-calculator");
const epoch_converter_1 = require("./tools-l10n/epoch-converter");
const fuel_cost_calculator_1 = require("./tools-l10n/fuel-cost-calculator");
const hash_comparator_1 = require("./tools-l10n/hash-comparator");
const heart_rate_zone_calculator_1 = require("./tools-l10n/heart-rate-zone-calculator");
const hmac_generator_1 = require("./tools-l10n/hmac-generator");
const htaccess_redirect_generator_1 = require("./tools-l10n/htaccess-redirect-generator");
const json_diff_1 = require("./tools-l10n/json-diff");
const jwt_generator_1 = require("./tools-l10n/jwt-generator");
const keycode_info_1 = require("./tools-l10n/keycode-info");
const line_diff_checker_1 = require("./tools-l10n/line-diff-checker");
const log_filter_tool_1 = require("./tools-l10n/log-filter-tool");
const markdown_toc_generator_1 = require("./tools-l10n/markdown-toc-generator");
const mime_type_lookup_1 = require("./tools-l10n/mime-type-lookup");
const morse_code_translator_1 = require("./tools-l10n/morse-code-translator");
const overtime_calculator_1 = require("./tools-l10n/overtime-calculator");
const pace_calculator_1 = require("./tools-l10n/pace-calculator");
const paint_calculator_1 = require("./tools-l10n/paint-calculator");
const password_entropy_checker_1 = require("./tools-l10n/password-entropy-checker");
const protein_intake_calculator_1 = require("./tools-l10n/protein-intake-calculator");
const random_team_generator_1 = require("./tools-l10n/random-team-generator");
const reading_level_checker_1 = require("./tools-l10n/reading-level-checker");
const robots_txt_generator_1 = require("./tools-l10n/robots-txt-generator");
const roman_numeral_converter_1 = require("./tools-l10n/roman-numeral-converter");
const screen_time_calculator_1 = require("./tools-l10n/screen-time-calculator");
const sleep_calculator_1 = require("./tools-l10n/sleep-calculator");
const steps_to_calories_calculator_1 = require("./tools-l10n/steps-to-calories-calculator");
const subscription_cost_calculator_1 = require("./tools-l10n/subscription-cost-calculator");
const take_home_pay_calculator_1 = require("./tools-l10n/take-home-pay-calculator");
const toml_to_json_1 = require("./tools-l10n/toml-to-json");
const typing_speed_test_1 = require("./tools-l10n/typing-speed-test");
const unicode_character_lookup_1 = require("./tools-l10n/unicode-character-lookup");
const wedding_budget_calculator_1 = require("./tools-l10n/wedding-budget-calculator");
const wheel_spinner_1 = require("./tools-l10n/wheel-spinner");
const xml_formatter_1 = require("./tools-l10n/xml-formatter");
const aes_encrypt_decrypt_1 = require("./tools-l10n/aes-encrypt-decrypt");
const car_cost_calculator_1 = require("./tools-l10n/car-cost-calculator");
const context_window_checker_1 = require("./tools-l10n/context-window-checker");
const json_to_zod_1 = require("./tools-l10n/json-to-zod");
const llm_cost_calculator_1 = require("./tools-l10n/llm-cost-calculator");
const json_repair_1 = require("./tools-l10n/json-repair");
const markdown_fence_extractor_1 = require("./tools-l10n/markdown-fence-extractor");
const openai_tools_builder_1 = require("./tools-l10n/openai-tools-builder");
const prompt_template_filler_1 = require("./tools-l10n/prompt-template-filler");
const csv_to_finetune_jsonl_1 = require("./tools-l10n/csv-to-finetune-jsonl");
const embedding_price_calculator_1 = require("./tools-l10n/embedding-price-calculator");
const token_visualizer_1 = require("./tools-l10n/token-visualizer");
const hysa_calculator_1 = require("./tools-l10n/hysa-calculator");
const cd_calculator_1 = require("./tools-l10n/cd-calculator");
const roth_ira_calculator_1 = require("./tools-l10n/roth-ira-calculator");
const fire_calculator_1 = require("./tools-l10n/fire-calculator");
const break_even_calculator_1 = require("./tools-l10n/break-even-calculator");
const profit_margin_calculator_1 = require("./tools-l10n/profit-margin-calculator");
const cac_ltv_calculator_1 = require("./tools-l10n/cac-ltv-calculator");
const intermittent_fasting_calculator_1 = require("./tools-l10n/intermittent-fasting-calculator");
const flooring_calculator_1 = require("./tools-l10n/flooring-calculator");
const dog_food_calculator_1 = require("./tools-l10n/dog-food-calculator");
const llm_api_cost_calculator_1 = require("./tools-l10n/llm-api-cost-calculator");
const runway_calculator_1 = require("./tools-l10n/runway-calculator");
const freelance_rate_calculator_1 = require("./tools-l10n/freelance-rate-calculator");
const docker_run_to_compose_1 = require("./tools-l10n/docker-run-to-compose");
const registry = {
    'loan-calculator': loan_calculator_1.loanCalculatorL10n,
    'mortgage-calculator': mortgage_calculator_1.mortgageCalculatorL10n,
    'compound-interest-calculator': compound_interest_calculator_1.compoundInterestCalculatorL10n,
    'apy-calculator': apy_calculator_1.apyCalculatorL10n,
    'roi-calculator': roi_calculator_1.roiCalculatorL10n,
    'credit-card-minimum-payment-calculator': credit_card_minimum_payment_calculator_1.creditCardMinimumPaymentCalculatorL10n,
    'cash-back-calculator': cash_back_calculator_1.cashBackCalculatorL10n,
    'down-payment-calculator': down_payment_calculator_1.downPaymentCalculatorL10n,
    'dti-calculator': dti_calculator_1.dtiCalculatorL10n,
    'commission-calculator': commission_calculator_1.commissionCalculatorL10n,
    'bill-split-calculator': bill_split_calculator_1.billSplitCalculatorL10n,
    'savings-goal-calculator': savings_goal_calculator_1.savingsGoalCalculatorL10n,
    'net-worth-calculator': net_worth_calculator_1.netWorthCalculatorL10n,
    'annuity-calculator': annuity_calculator_1.annuityCalculatorL10n,
    'capital-gains-tax-estimator': capital_gains_tax_estimator_1.capitalGainsTaxEstimatorL10n,
    'rent-vs-buy-calculator': rent_vs_buy_calculator_1.rentVsBuyCalculatorL10n,
    'inflation-calculator': inflation_calculator_1.inflationCalculatorL10n,
    'retirement-calculator': retirement_calculator_1.retirementCalculatorL10n,
    'simple-interest-calculator': simple_interest_calculator_1.simpleInterestCalculatorL10n,
    'unit-price-calculator': unit_price_calculator_1.unitPriceCalculatorL10n,
    'markup-calculator': markup_calculator_1.markupCalculatorL10n,
    'hourly-to-salary-calculator': hourly_to_salary_calculator_1.hourlyToSalaryCalculatorL10n,
    'credit-card-payoff-calculator': credit_card_payoff_calculator_1.creditCardPayoffCalculatorL10n,
    'income-tax-estimator': income_tax_estimator_1.incomeTaxEstimatorL10n,
    'salary-converter': salary_converter_1.salaryConverterL10n,
    'sales-tax-calculator': sales_tax_calculator_1.salesTaxCalculatorL10n,
    'tip-calculator': tip_calculator_1.tipCalculatorL10n,
    'discount-calculator': discount_calculator_1.discountCalculatorL10n,
    'json-formatter': json_formatter_1.jsonFormatterL10n,
    'jwt-decoder': jwt_decoder_1.jwtDecoderL10n,
    'base64-encoder': base64_encoder_1.base64EncoderL10n,
    'base64-decoder': base64_decoder_1.base64DecoderL10n,
    'regex-tester': regex_tester_1.regexTesterL10n,
    'uuid-generator': uuid_generator_1.uuidGeneratorL10n,
    'curl-converter': curl_converter_1.curlConverterL10n,
    'markdown-to-html': markdown_to_html_1.markdownToHtmlL10n,
    'hash-generator': hash_generator_1.hashGeneratorL10n,
    'binary-to-text': binary_to_text_1.binaryToTextL10n,
    'text-to-binary': text_to_binary_1.textToBinaryL10n,
    'url-query-parser': url_query_parser_1.urlQueryParserL10n,
    'text-size-estimator': text_size_estimator_1.textSizeEstimatorL10n,
    'json-minifier': json_minifier_1.jsonMinifierL10n,
    'csv-to-json': csv_to_json_1.csvToJsonL10n,
    'json-to-csv': json_to_csv_1.jsonToCsvL10n,
    'lorem-ipsum-generator': lorem_ipsum_generator_1.loremIpsumGeneratorL10n,
    'random-number-generator': random_number_generator_1.randomNumberGeneratorL10n,
    'html-escape': html_escape_1.htmlEscapeL10n,
    'html-unescape': html_unescape_1.htmlUnescapeL10n,
    'url-encoder': url_encoder_1.urlEncoderL10n,
    'url-decoder': url_decoder_1.urlDecoderL10n,
    'slug-generator': slug_generator_1.slugGeneratorL10n,
    'json-to-typescript': json_to_typescript_1.jsonToTypeScriptL10n,
    'yaml-to-json': yaml_to_json_1.yamlToJsonL10n,
    'sql-formatter': sql_formatter_1.sqlFormatterL10n,
    'image-to-base64': image_to_base64_1.imageToBase64L10n,
    'word-counter': word_counter_1.wordCounterL10n,
    'text-diff': text_diff_1.textDiffL10n,
    'remove-line-breaks': remove_line_breaks_1.removeLineBreaksL10n,
    'find-and-replace': find_and_replace_1.findAndReplaceL10n,
    'uppercase-converter': uppercase_converter_1.uppercaseConverterL10n,
    'lowercase-converter': lowercase_converter_1.lowercaseConverterL10n,
    'title-case-converter': title_case_converter_1.titleCaseConverterL10n,
    'sentence-case-converter': sentence_case_converter_1.sentenceCaseConverterL10n,
    'reverse-text': reverse_text_1.reverseTextL10n,
    'remove-duplicate-lines': remove_duplicate_lines_1.removeDuplicateLinesL10n,
    'slug-to-title': slug_to_title_1.slugToTitleL10n,
    'html-tag-stripper': html_tag_stripper_1.htmlTagStripperL10n,
    'character-frequency': character_frequency_1.characterFrequencyL10n,
    'email-extractor': email_extractor_1.emailExtractorL10n,
    'url-extractor': url_extractor_1.urlExtractorL10n,
    'add-line-numbers': add_line_numbers_1.addLineNumbersL10n,
    'text-to-list': text_to_list_1.textToListL10n,
    'sort-lines': sort_lines_1.sortLinesL10n,
    'whitespace-remover': whitespace_remover_1.whitespaceRemoverL10n,
    'list-diff': list_diff_1.listDiffL10n,
    'mass-converter': mass_converter_1.massConverterL10n,
    'density-converter': density_converter_1.densityConverterL10n,
    'power-converter': power_converter_1.powerConverterL10n,
    'flow-rate-converter': flow_rate_converter_1.flowRateConverterL10n,
    'data-storage-converter': data_storage_converter_1.dataStorageConverterL10n,
    'time-converter': time_converter_1.timeConverterL10n,
    'numeral-system-converter': numeral_system_converter_1.numeralSystemConverterL10n,
    'angle-converter': angle_converter_1.angleConverterL10n,
    'fuel-economy-converter': fuel_economy_converter_1.fuelEconomyConverterL10n,
    'pressure-converter': pressure_converter_1.pressureConverterL10n,
    'energy-converter': energy_converter_1.energyConverterL10n,
    'frequency-converter': frequency_converter_1.frequencyConverterL10n,
    'weight-converter': weight_converter_1.weightConverterL10n,
    'temperature-converter': temperature_converter_1.temperatureConverterL10n,
    'speed-converter': speed_converter_1.speedConverterL10n,
    'area-converter': area_converter_1.areaConverterL10n,
    'volume-converter': volume_converter_1.volumeConverterL10n,
    'length-converter': length_converter_1.lengthConverterL10n,
    'trapezoid-calculator': trapezoid_calculator_1.trapezoidCalculatorL10n,
    'cube-calculator': cube_calculator_1.cubeCalculatorL10n,
    'sphere-calculator': sphere_calculator_1.sphereCalculatorL10n,
    'scientific-notation-converter': scientific_notation_converter_1.scientificNotationConverterL10n,
    'prime-number-checker': prime_number_checker_1.primeNumberCheckerL10n,
    'prime-factorization-calculator': prime_factorization_calculator_1.primeFactorizationCalculatorL10n,
    'combination-calculator': combination_calculator_1.combinationCalculatorL10n,
    'permutation-calculator': permutation_calculator_1.permutationCalculatorL10n,
    'circle-calculator': circle_calculator_1.circleCalculatorL10n,
    'triangle-calculator': triangle_calculator_1.triangleCalculatorL10n,
    'rectangle-calculator': rectangle_calculator_1.rectangleCalculatorL10n,
    'standard-deviation-calculator': standard_deviation_calculator_1.standardDeviationCalculatorL10n,
    'percentile-calculator': percentile_calculator_1.percentileCalculatorL10n,
    'fraction-calculator': fraction_calculator_1.fractionCalculatorL10n,
    'ratio-calculator': ratio_calculator_1.ratioCalculatorL10n,
    'lcm-gcd-calculator': lcm_gcd_calculator_1.lcmGcdCalculatorL10n,
    'average-calculator': average_calculator_1.averageCalculatorL10n,
    'percentage-calculator': percentage_calculator_1.percentageCalculatorL10n,
    'bmi-calculator': bmi_calculator_1.bmiCalculatorL10n,
    'calorie-calculator': calorie_calculator_1.calorieCalculatorL10n,
    'tdee-calculator': tdee_calculator_1.tdeeCalculatorL10n,
    'bmr-calculator': bmr_calculator_1.bmrCalculatorL10n,
    'body-fat-calculator': body_fat_calculator_1.bodyFatCalculatorL10n,
    'macro-calculator': macro_calculator_1.macroCalculatorL10n,
    'pregnancy-due-date-calculator': pregnancy_due_date_calculator_1.pregnancyDueDateCalculatorL10n,
    'water-intake-calculator': water_intake_calculator_1.waterIntakeCalculatorL10n,
    'ideal-weight-calculator': ideal_weight_calculator_1.idealWeightCalculatorL10n,
    'svg-to-image': svg_to_image_1.svgToImageL10n,
    'px-to-rem': px_to_rem_1.pxToRemL10n,
    'aspect-ratio-calculator': aspect_ratio_calculator_1.aspectRatioCalculatorL10n,
    'color-contrast-checker': color_contrast_checker_1.colorContrastCheckerL10n,
    'color-converter': color_converter_1.colorConverterL10n,
    'open-graph-generator': open_graph_generator_1.openGraphGeneratorL10n,
    'css-shadow-generator': css_shadow_generator_1.cssShadowGeneratorL10n,
    'favicon-generator': favicon_generator_1.faviconGeneratorL10n,
    'cron-parser': cron_parser_1.cronParserL10n,
    'age-calculator': age_calculator_1.ageCalculatorL10n,
    'date-difference-calculator': date_difference_calculator_1.dateDifferenceCalculatorL10n,
    'age-difference-calculator': age_difference_calculator_1.ageDifferenceCalculatorL10n,
    'grade-calculator': grade_calculator_1.gradeCalculatorL10n,
    'final-grade-calculator': final_grade_calculator_1.finalGradeCalculatorL10n,
    'gpa-calculator': gpa_calculator_1.gpaCalculatorL10n,
    'password-strength-checker': password_strength_checker_1.passwordStrengthCheckerL10n,
    'password-generator': password_generator_1.passwordGeneratorL10n,
    'qr-code-generator': qr_code_generator_1.qrCodeGeneratorL10n,
    'gpt-token-counter': gpt_token_counter_1.gptTokenCounterL10n,
    'ip-subnet-calculator': ip_subnet_calculator_1.ipSubnetCalculatorL10n,
    'chmod-calculator': chmod_calculator_1.chmodCalculatorL10n,
    'ssh-key-generator': ssh_key_generator_1.sshKeyGeneratorL10n,
    'bcrypt-hash-generator': bcrypt_hash_generator_1.bcryptHashGeneratorL10n,
    'user-agent-parser': user_agent_parser_1.userAgentParserL10n,
    'json-schema-generator': json_schema_generator_1.jsonSchemaGeneratorL10n,
    'naming-case-converter': naming_case_converter_1.namingCaseConverterL10n,
    'nginx-config-generator': nginx_config_generator_1.nginxConfigGeneratorL10n,
    'webp-to-png-converter': webp_to_png_converter_1.webpToPngConverterL10n,
    'png-to-webp-converter': png_to_webp_converter_1.pngToWebpConverterL10n,
    'image-resizer': image_resizer_1.imageResizerL10n,
    'svg-minifier': svg_minifier_1.svgMinifierL10n,
    'css-gradient-generator': css_gradient_generator_1.cssGradientGeneratorL10n,
    'css-clamp-calculator': css_clamp_calculator_1.cssClampCalculatorL10n,
    'csv-to-markdown-table': csv_to_markdown_table_1.csvToMarkdownTableL10n,
    'text-cleaner': text_cleaner_1.textCleanerL10n,
    'srt-subtitle-shift': srt_subtitle_shift_1.srtSubtitleShiftL10n,
    'code-beautifier': code_beautifier_1.codeBeautifierL10n,
    'secret-key-generator': secret_key_generator_1.secretKeyGeneratorL10n,
    'auto-loan-calculator': auto_loan_calculator_1.autoLoanCalculatorL10n,
    'ebay-fee-calculator': ebay_fee_calculator_1.ebayFeeCalculatorL10n,
    'saas-ltv-churn-calculator': saas_ltv_churn_calculator_1.saasLtvChurnCalculatorL10n,
    'freelance-invoice-generator': freelance_invoice_generator_1.freelanceInvoiceGeneratorL10n,
    'reverse-stripe-fee-calculator': reverse_stripe_fee_calculator_1.reverseStripeFeeCalculatorL10n,
    'timezone-converter': timezone_converter_1.timezoneConverterL10n,
    'days-countdown-calculator': days_countdown_calculator_1.daysCountdownCalculatorL10n,
    'reading-speaking-time': reading_speaking_time_1.readingSpeakingTimeL10n,
    'random-choice-picker': random_choice_picker_1.randomChoicePickerL10n,
    'wordle-solver': wordle_solver_1.wordleSolverL10n,
    'ip-checker': ip_checker_1.ipCheckerL10n,
    'amortization-table-generator': amortization_table_generator_1.AmortizationTableGeneratorL10n,
    'ascii-table': ascii_table_1.AsciiTableL10n,
    'base-converter': base_converter_1.BaseConverterL10n,
    'caffeine-calculator': caffeine_calculator_1.CaffeineCalculatorL10n,
    'coin-flip': coin_flip_1.CoinFlipL10n,
    'cooking-converter': cooking_converter_1.CookingConverterL10n,
    'cron-expression-generator': cron_expression_generator_1.CronExpressionGeneratorL10n,
    'dice-roller': dice_roller_1.DiceRollerL10n,
    'dog-age-calculator': dog_age_calculator_1.DogAgeCalculatorL10n,
    'electricity-cost-calculator': electricity_cost_calculator_1.ElectricityCostCalculatorL10n,
    'epoch-converter': epoch_converter_1.EpochConverterL10n,
    'fuel-cost-calculator': fuel_cost_calculator_1.FuelCostCalculatorL10n,
    'hash-comparator': hash_comparator_1.HashComparatorL10n,
    'heart-rate-zone-calculator': heart_rate_zone_calculator_1.HeartRateZoneCalculatorL10n,
    'hmac-generator': hmac_generator_1.HmacGeneratorL10n,
    'htaccess-redirect-generator': htaccess_redirect_generator_1.HtaccessRedirectGeneratorL10n,
    'json-diff': json_diff_1.JsonDiffL10n,
    'jwt-generator': jwt_generator_1.JwtGeneratorL10n,
    'keycode-info': keycode_info_1.KeycodeInfoL10n,
    'line-diff-checker': line_diff_checker_1.LineDiffCheckerL10n,
    'log-filter-tool': log_filter_tool_1.LogFilterToolL10n,
    'markdown-toc-generator': markdown_toc_generator_1.MarkdownTocGeneratorL10n,
    'mime-type-lookup': mime_type_lookup_1.MimeTypeLookupL10n,
    'morse-code-translator': morse_code_translator_1.MorseCodeTranslatorL10n,
    'overtime-calculator': overtime_calculator_1.OvertimeCalculatorL10n,
    'pace-calculator': pace_calculator_1.PaceCalculatorL10n,
    'paint-calculator': paint_calculator_1.PaintCalculatorL10n,
    'password-entropy-checker': password_entropy_checker_1.PasswordEntropyCheckerL10n,
    'protein-intake-calculator': protein_intake_calculator_1.ProteinIntakeCalculatorL10n,
    'random-team-generator': random_team_generator_1.RandomTeamGeneratorL10n,
    'reading-level-checker': reading_level_checker_1.ReadingLevelCheckerL10n,
    'robots-txt-generator': robots_txt_generator_1.RobotsTxtGeneratorL10n,
    'roman-numeral-converter': roman_numeral_converter_1.RomanNumeralConverterL10n,
    'screen-time-calculator': screen_time_calculator_1.ScreenTimeCalculatorL10n,
    'sleep-calculator': sleep_calculator_1.SleepCalculatorL10n,
    'steps-to-calories-calculator': steps_to_calories_calculator_1.StepsToCaloriesCalculatorL10n,
    'subscription-cost-calculator': subscription_cost_calculator_1.SubscriptionCostCalculatorL10n,
    'take-home-pay-calculator': take_home_pay_calculator_1.TakeHomePayCalculatorL10n,
    'toml-to-json': toml_to_json_1.TomlToJsonL10n,
    'typing-speed-test': typing_speed_test_1.TypingSpeedTestL10n,
    'unicode-character-lookup': unicode_character_lookup_1.UnicodeCharacterLookupL10n,
    'wedding-budget-calculator': wedding_budget_calculator_1.WeddingBudgetCalculatorL10n,
    'wheel-spinner': wheel_spinner_1.WheelSpinnerL10n,
    'xml-formatter': xml_formatter_1.XmlFormatterL10n,
    'aes-encrypt-decrypt': aes_encrypt_decrypt_1.AesEncryptDecryptL10n,
    'car-cost-calculator': car_cost_calculator_1.CarCostCalculatorL10n,
    'context-window-checker': context_window_checker_1.ContextWindowCheckerL10n,
    'json-to-zod': json_to_zod_1.JsonToZodL10n,
    'llm-cost-calculator': llm_cost_calculator_1.LlmCostCalculatorL10n,
    'json-repair': json_repair_1.JsonRepairL10n,
    'markdown-fence-extractor': markdown_fence_extractor_1.MarkdownFenceExtractorL10n,
    'openai-tools-builder': openai_tools_builder_1.OpenaiToolsBuilderL10n,
    'prompt-template-filler': prompt_template_filler_1.PromptTemplateFillerL10n,
    'csv-to-finetune-jsonl': csv_to_finetune_jsonl_1.CsvToFinetuneJsonlL10n,
    'embedding-price-calculator': embedding_price_calculator_1.EmbeddingPriceCalculatorL10n,
    'token-visualizer': token_visualizer_1.TokenVisualizerL10n,
    'hysa-calculator': hysa_calculator_1.hysaCalculatorL10n,
    'cd-calculator': cd_calculator_1.cdCalculatorL10n,
    'roth-ira-calculator': roth_ira_calculator_1.rothIraCalculatorL10n,
    'fire-calculator': fire_calculator_1.fireCalculatorL10n,
    'break-even-calculator': break_even_calculator_1.breakEvenCalculatorL10n,
    'profit-margin-calculator': profit_margin_calculator_1.profitMarginCalculatorL10n,
    'cac-ltv-calculator': cac_ltv_calculator_1.cacLtvCalculatorL10n,
    'intermittent-fasting-calculator': intermittent_fasting_calculator_1.intermittentFastingCalculatorL10n,
    'flooring-calculator': flooring_calculator_1.flooringCalculatorL10n,
    'dog-food-calculator': dog_food_calculator_1.dogFoodCalculatorL10n,
    'llm-api-cost-calculator': llm_api_cost_calculator_1.llmApiCostCalculatorL10n,
    'runway-calculator': runway_calculator_1.runwayCalculatorL10n,
    'freelance-rate-calculator': freelance_rate_calculator_1.freelanceRateCalculatorL10n,
    'docker-run-to-compose': docker_run_to_compose_1.dockerRunToComposeL10n,
};
/**
 * 取工具某语种的本地化条目。
 * - locale === 'en' → 返回 null(调用方走英文原值)
 * - slug 未注册 → 返回 null(回退英文)
 */
function getToolL10n(slug, locale) {
    if (locale === 'en')
        return null;
    return registry[slug]?.[locale] ?? null;
}
/**
 * 取工具某语种的 FAQ(可见)。
 * 有本地化 → 用之;否则回退 lib/tool-faqs.ts 英文原值。
 */
function getToolFaqsL10n(slug, locale, enFaqs) {
    const entry = getToolL10n(slug, locale);
    return entry?.faqs ?? enFaqs;
}
/**
 * 取工具交互界面字符串。
 * 缺失 → 回退 fallback(英文原值),保证 SSR 与缺译时不破图。
 */
function tui(slug, locale, key, fallback) {
    const entry = getToolL10n(slug, locale);
    return entry?.ui?.[key] ?? fallback;
}
// ──────────── makeCalculatorClient 通用 UI key(跨工具共享) ────────────
// 这些 key(summaryTitle / inputsLabel / csvField ...)在所有 makeCalculatorClient
// 生成的计算器里语义一致,译一次即可,不必逐 bundle 重复。en 不在此 → 回退英文。
exports.COMMON_CALC_UI = {
    zh: {
        summaryTitle: '计算摘要',
        chartEmpty: '输入数值后即可看到图表。',
        inputsLabel: '输入:',
        resultsLabel: '结果:',
        copySummary: '复制摘要',
        csvField: '字段',
        csvType: '类型',
        csvValue: '数值',
        csvInput: '输入',
        csvResult: '结果',
        inputs: '输入',
        reset: '重置',
        // Scenario A/B 对比模式(工厂 allowCompare)
        compareAdd: '+ 对比方案',
        compareExit: '× 退出对比',
        compareSync: '⟲ A → B 同步',
        scenarioA: '方案 A',
        scenarioB: '方案 B',
        deltaCol: 'B 相对 A',
    },
    es: {
        summaryTitle: 'Resumen del cálculo',
        chartEmpty: 'Introduce valores para ver el gráfico.',
        inputsLabel: 'Entradas:',
        resultsLabel: 'Resultados:',
        copySummary: 'Copiar resumen',
        csvField: 'Campo',
        csvType: 'Tipo',
        csvValue: 'Valor',
        csvInput: 'Entrada',
        csvResult: 'Resultado',
        inputs: 'Entradas',
        reset: 'Restablecer',
        // Modo comparación A/B (allowCompare)
        compareAdd: '+ Comparar escenario',
        compareExit: '× Salir de la comparación',
        compareSync: '⟲ Copiar A → B',
        scenarioA: 'Escenario A',
        scenarioB: 'Escenario B',
        deltaCol: 'B frente a A',
    },
    de: {
        summaryTitle: 'Zusammenfassung der Berechnung',
        chartEmpty: 'Werte eingeben, um das Diagramm zu sehen.',
        inputsLabel: 'Eingaben:',
        resultsLabel: 'Ergebnis:',
        copySummary: 'Zusammenfassung kopieren',
        csvField: 'Feld',
        csvType: 'Typ',
        csvValue: 'Wert',
        csvInput: 'Eingabe',
        csvResult: 'Ergebnis',
        inputs: 'Eingaben',
        reset: 'Zurücksetzen',
        // Szenario-A/B-Vergleich (allowCompare)
        compareAdd: '+ Szenario vergleichen',
        compareExit: '× Vergleich beenden',
        compareSync: '⟲ A → B kopieren',
        scenarioA: 'Szenario A',
        scenarioB: 'Szenario B',
        deltaCol: 'B gegenüber A',
    },
};
/**
 * 取 makeCalculatorClient 通用 UI key 的本地化值(跨工具共享)。
 * locale==='en' 或缺失 → 回退 fallback(英文原值),保证 SSR 恒英文。
 */
function tuiCalc(key, locale, fallback) {
    if (locale === 'en')
        return fallback;
    return exports.COMMON_CALC_UI[locale]?.[key] ?? fallback;
}
// ──────────── makeUnitConverter 通用 UI key(跨工具共享)────────────
// 单位转换器的 chrome(Convert / Value / From / To / Formula / 摘要)在所有
// makeUnitConverter 生成的转换器里语义一致,译一次即可。en 不在此 → 回退英文。
exports.COMMON_UC_UI = {
    zh: {
        convert: '转换',
        value: '数值',
        from: '从',
        to: '到',
        convertedValue: '换算结果',
        formula: '公式',
        conversionSummary: '换算摘要',
        summaryValue: '数值:',
        summaryResult: '结果:',
        summaryFormula: '公式:',
        conversionNone: '换算: —',
        conversionTitle: '{from} 转换为 {to}',
        quickValues: '快捷数值',
        scaleTitle: '量级对比',
        generatedBy: '由 ToolHub 生成',
        swapUnits: '交换单位',
        swap: '互换',
        // All-units 同显面板(makeUnitConverter)
        allUnits: '所有单位',
        allUnitsHint: '点击任一单位将其设为换算目标',
        sourceUnitTag: '输入',
    },
    es: {
        convert: 'Convertir',
        value: 'Valor',
        from: 'De',
        to: 'A',
        convertedValue: 'Valor convertido',
        formula: 'Fórmula',
        conversionSummary: 'Resumen de conversión',
        summaryValue: 'Valor:',
        summaryResult: 'Resultado:',
        summaryFormula: 'Fórmula:',
        conversionNone: 'Conversión: —',
        conversionTitle: 'Conversión de {from} a {to}',
        quickValues: 'Valores rápidos',
        scaleTitle: 'Escala de magnitud',
        generatedBy: 'Generado por ToolHub',
        swapUnits: 'Intercambiar unidades',
        swap: 'Intercambiar',
        // Panel «todas las unidades» (makeUnitConverter)
        allUnits: 'Todas las unidades',
        allUnitsHint: 'Haz clic en una unidad para fijarla como destino',
        sourceUnitTag: 'entrada',
    },
    de: {
        convert: 'Umrechnen',
        value: 'Wert',
        from: 'Von',
        to: 'Nach',
        convertedValue: 'Umgerechneter Wert',
        formula: 'Formel',
        conversionSummary: 'Umrechnungszusammenfassung',
        summaryValue: 'Wert:',
        summaryResult: 'Ergebnis:',
        summaryFormula: 'Formel:',
        conversionNone: 'Umrechnung: —',
        conversionTitle: '{from} nach {to} Umrechnung',
        quickValues: 'Schnellwerte',
        scaleTitle: 'Größenordnung',
        generatedBy: 'Erstellt von ToolHub',
        swapUnits: 'Einheiten tauschen',
        swap: 'Tauschen',
        // Alle-Einheiten-Panel (makeUnitConverter)
        allUnits: 'Alle Einheiten',
        allUnitsHint: 'Klicke auf eine Einheit, um sie als Ziel festzulegen',
        sourceUnitTag: 'Eingabe',
    },
};
/**
 * 取 makeUnitConverter 通用 UI key 的本地化值(跨工具共享)。
 * locale==='en' 或缺失 → 回退 fallback(英文原值),保证 SSR 恒英文。
 */
function tuiUc(key, locale, fallback) {
    if (locale === 'en')
        return fallback;
    return exports.COMMON_UC_UI[locale]?.[key] ?? fallback;
}
