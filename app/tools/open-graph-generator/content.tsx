import { ToolContent } from '@/lib/content-templates'

export function OpenGraphGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          When someone pastes your link into Facebook, X, LinkedIn, Slack, or Discord, the platform reads
          special <code>&lt;meta&gt;</code> tags in your page to build the title, description, and image
          card. Getting those tags right is the difference between a link that gets clicked and one that
          looks broken. This tool lets you fill in the fields and <strong>see the preview live</strong> while
          it generates the full set of Open Graph and Twitter Card tags.
        </p>
      }
      sections={[
        {
          heading: 'Open Graph vs Twitter Cards',
          body: (
            <p>
              <strong>Open Graph</strong> (<code>og:</code> prefix) was created by Facebook and is now read
              by almost every platform — Facebook, LinkedIn, Slack, Discord, Telegram, iMessage.{' '}
              <strong>Twitter Cards</strong> (<code>twitter:</code> prefix) are X/Twitter-specific, but
              Twitter falls back to Open Graph when its own tags are missing. Generating both means your
              preview looks correct everywhere with no guesswork.
            </p>
          ),
        },
        {
          heading: 'Choosing the right image',
          body: (
            <p>
              For <code>og:image</code> and <code>twitter:image</code>, use a <strong>1.91:1</strong> ratio
              at <strong>1200×630px</strong>, kept under ~1 MB and in JPG or PNG. Square images
              (1080×1080) work for the <code>summary</code> card type but get cropped on platforms that
              expect the wide ratio. Always use an absolute URL (including <code>https://</code>) for the
              image — relative paths do not work.
            </p>
          ),
        },
        {
          heading: 'Why your deployed preview still looks wrong',
          body: (
            <p>
              Platforms cache previews aggressively, sometimes for days. After deploying your tags, force a
              re-scrape with the{' '}
              <strong>Facebook Sharing Debugger</strong>,{' '}
              <strong>Twitter Card Validator</strong>, or{' '}
              <strong>LinkedIn Post Inspector</strong>. Critically, the tags must live in the raw server
              HTML (SSR or static) — crawlers that do not run JavaScript cannot see tags injected by a
              client-side framework at runtime.
            </p>
          ),
        },
      ]}
    />
  )
}
