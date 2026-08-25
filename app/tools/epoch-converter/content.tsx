/**
 * Unix time 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function EpochConverterContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>What is a Unix timestamp?</h2>
      <p>A Unix timestamp (also called epoch time or POSIX time) is the number of seconds elapsed since <strong>1970-01-01 00:00:00 UTC</strong> — the "Unix epoch". It is the standard way computers store points in time because it needs no timezone and no calendar rules.</p>
      <h2>Seconds vs milliseconds</h2>
      <p>Classic Unix systems store seconds (10 digits in the current era). JavaScript, Java, and many APIs use milliseconds instead (13 digits). If a conversion lands in January 1970, you almost certainly pasted seconds where milliseconds were expected or vice versa.</p>
      <h2>Does Unix time handle leap seconds?</h2>
      <p>No. Every day counts as exactly 86,400 seconds. The handful of leap seconds added since 1970 are absorbed invisibly, so timestamps drift about 27 seconds ahead of astronomical time to date.</p>
      <h2>The 2038 problem</h2>
      <p>Systems storing the timestamp in a signed 32-bit integer overflow on <strong>2038-01-19</strong>. Modern 64-bit systems are unaffected, which is why embedded devices are the main concern.</p>
    </section>
  )
}
