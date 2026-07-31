import type { ReactNode } from 'react'
import type { ToolMeta } from '@/lib/tools'

/**
 * 工具页「如何使用 & 关于」通用信息区
 *
 * 作用:为所有工具页提供一段实质性、与工具类型相关的内容,
 * 解决多数工具页内容偏薄的问题(利于 SEO 长尾词覆盖)。
 *
 * 内容按工具类型(计算器/转换器/文本/开发者)走不同模板,
 * 并结合工具自身的 name/keywords,保证每段都有针对性而非纯套话。
 */
export function ToolInfoSection({ tool }: { tool: ToolMeta }): ReactNode {
  const mainKeyword = tool.keywords[0]
  const isCalculator = /calculator|estimator/i.test(tool.name)
  const isConverter = /converter/i.test(tool.name)
  const isGenerator = /generator/i.test(tool.name)

  let intro: ReactNode
  let howTo: ReactNode

  if (isCalculator) {
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> lets you figure out {mainKeyword} instantly, without
          reaching for a spreadsheet or doing the math by hand. Whether you&apos;re planning a
          budget, checking a loan, or working through homework, the tool applies the correct formula
          behind the scenes and shows the result the moment you enter your numbers.
        </p>
        <p>
          Unlike a static chart or table, this calculator adapts to your exact inputs. You can
          adjust any value and see the outcome update in real time, which makes it easy to compare
          scenarios &mdash; for example, &quot;what if the rate were 1% lower?&quot; or &quot;what if
          I paid an extra $50 a month?&quot;
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Enter the main values the calculator asks for (for example, amount, rate, and time).</li>
        <li>Pick the right unit or option where the tool offers a choice.</li>
        <li>Read the result, which appears instantly below the inputs.</li>
        <li>
          Adjust any field to test a different scenario &mdash; the answer updates without a reload.
        </li>
        <li>Copy or note the result. Nothing is stored, so close the tab when you&apos;re done.</li>
      </ol>
    )
  } else if (isConverter) {
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> converts {mainKeyword} from one unit to another using the
          exact internationally defined conversion factors. Type a value, choose your source and
          target units, and the converted result is shown instantly &mdash; no waiting, no page
          reload.
        </p>
        <p>
          Manual conversion is error-prone because it means memorizing ratios (how many feet in a
          meter, how many pints in a liter). This tool removes that friction: the conversion factor
          is built in, and the math is done to full precision with no rounding until the final
          displayed number.
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Enter the value you want to convert in the input field.</li>
        <li>Select the unit you are converting from.</li>
        <li>Select the unit you want to convert to.</li>
        <li>
          The converted value appears instantly. Adjust either unit to compare across the board.
        </li>
        <li>Copy the result if you need it elsewhere. Your input is never sent anywhere.</li>
      </ol>
    )
  } else if (isGenerator) {
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> creates {mainKeyword} on demand, right in your browser.
          Set the options you need, click generate, and the result is ready to copy. Because
          everything runs locally, nothing you enter or produce leaves your device.
        </p>
        <p>
          Generators like this are useful when you need a specific output (a password, a UUID, a QR
          code, placeholder text) and don&apos;t want to install an app or trust an unknown website
          with your data. This tool is free, has no usage limits, and works the same on phone and
          desktop.
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Set the options the generator exposes (length, format, count, etc.).</li>
        <li>Click the generate button to produce the output.</li>
        <li>Review the result and adjust the options to regenerate if needed.</li>
        <li>Use the copy button to copy the output to your clipboard.</li>
      </ol>
    )
  } else {
    // 文本/开发者工具通用
    intro = (
      <>
        <p>
          The <strong>{tool.name}</strong> handles {mainKeyword} directly in your browser. Paste or
          type your input, and the tool processes it instantly &mdash; no upload, no signup, no
          waiting. It&apos;s built for the moments when you need a quick transformation and
          don&apos;t want to leave your workflow.
        </p>
        <p>
          Because the tool runs client-side, it&apos;s fast and private. Your text never touches a
          server, which makes it safe for sensitive content. The interface is keyboard-friendly and
          works on any device with a modern browser.
        </p>
      </>
    )
    howTo = (
      <ol>
        <li>Paste or type your input into the text area.</li>
        <li>Adjust any options the tool offers.</li>
        <li>The output updates automatically as you type or change options.</li>
        <li>Copy the result using the copy button.</li>
      </ol>
    )
  }

  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>About the {tool.name}</h2>
      {intro}

      <h2>How to Use This Tool</h2>
      {howTo}

      <h2>Why Use an Online {isCalculator ? 'Calculator' : isConverter ? 'Converter' : isGenerator ? 'Generator' : 'Tool'}?</h2>
      <p>
        Browser-based tools like this one have a few real advantages over installed software or
        manual methods:
      </p>
      <ul>
        <li>
          <strong>No installation.</strong> It opens instantly in any browser, on any operating
          system.
        </li>
        <li>
          <strong>Private by default.</strong> Everything runs locally, so your data stays on your
          device.
        </li>
        <li>
          <strong>Always up to date.</strong> There&apos;s nothing to update &mdash; you always get
          the latest version when you load the page.
        </li>
        <li>
          <strong>Free and unlimited.</strong> Use it as often as you like, with no account and no
          caps.
        </li>
      </ul>
    </section>
  )
}
