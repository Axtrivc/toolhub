import { ToolContent } from '@/lib/content-templates'

export function AspectRatioContent() {
  return (
    <ToolContent
      intro={
        <p>
          An <strong>aspect ratio</strong> is the proportional relationship between width and height
          (expressed as <code>W:H</code>, like 16:9). When you resize an image, video, or container, keeping
          the ratio constant prevents stretching and distortion. This calculator takes any ratio plus one
          dimension and computes the other — or fits a ratio into a bounding box.
        </p>
      }
      sections={[
        {
          heading: 'The math behind it',
          body: (
            <p>
              Given a ratio <code>W:H</code>, the dimensions are always proportional: <code>width ÷ height
              = W ÷ H</code>. So if you know the width, <code>height = width × (H ÷ W)</code>; if you know
              the height, <code>width = height × (W ÷ H)</code>. For a 16:9 video at 1920px wide, the height
              is <code>1920 × (9 ÷ 16) = 1080</code>. The calculator handles the division for any ratio,
              including odd ones like 5:4 or 21:9.
            </p>
          ),
        },
        {
          heading: 'Common ratios and where you meet them',
          body: (
            <ul>
              <li>
                <strong>16:9</strong> — YouTube, Netflix, modern monitors, most phone video.
              </li>
              <li>
                <strong>9:16</strong> — vertical video (TikTok, Instagram Reels, Stories).
              </li>
              <li>
                <strong>4:3</strong> — older TVs, some cameras, Instagram landscape.
              </li>
              <li>
                <strong>1:1</strong> — Instagram feed squares, avatars.
              </li>
              <li>
                <strong>21:9</strong> — ultrawide monitors, cinematic film.
              </li>
              <li>
                <strong>3:2</strong> — most DSLR and mirrorless cameras.
              </li>
            </ul>
          ),
        },
        {
          heading: 'Fit (contain) vs fill (cover)',
          body: (
            <p>
              When fitting a ratio into a fixed box, <strong>contain</strong> scales the image so the whole
              thing is visible, possibly leaving letterbox bars. <strong>Cover</strong> scales so the box is
              completely filled, cropping the overflow. CSS <code>object-fit</code> and{' '}
              <code>background-size</code> use these same terms. Pick contain when you must show the entire
              image; pick cover when the box must stay full (e.g. hero backgrounds).
            </p>
          ),
        },
      ]}
    />
  )
}
