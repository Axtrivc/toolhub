import fs from 'fs';
import path from 'path';

// 1. 提取 tool-samples.ts 的 calculatorSamples
const samplesSrc = fs.readFileSync('lib/tool-samples.ts', 'utf8');
const startIdx = samplesSrc.indexOf('export const calculatorSamples');
const endIdx = samplesSrc.indexOf('export const converterSamples');
const block = samplesSrc.slice(startIdx, endIdx);
const samples = {};
const sampleRe = /'([a-z0-9-]+)':\s*\{([^}]*)\}/g;
let m;
while ((m = sampleRe.exec(block))) {
  const slug = m[1];
  const keys = [...m[2].matchAll(/(\w+):\s*'/g)].map((x) => x[1]);
  samples[slug] = keys;
}

// 2. 提取所有组件里的 makeCalculatorClient config 的 slug + inputs key
function walk(dir) {
  let out = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) out = out.concat(walk(p));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) out.push(p);
  }
  return out;
}
const files = walk('components').concat(walk('lib'));
const configs = {};
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const cfgRe = /slug:\s*'([a-z0-9-]+)'[\s\S]*?inputs:\s*\[([\s\S]*?)\]\s*,?\s*\n\s*outputs:/g;
  let cm;
  while ((cm = cfgRe.exec(src))) {
    const slug = cm[1];
    const keys = [...cm[2].matchAll(/key:\s*'([^']+)'/g)].map((x) => x[1]);
    configs[slug] = keys;
  }
}

// 3. 对比
let bad = 0;
let noConfig = 0;
for (const [slug, sKeys] of Object.entries(samples)) {
  const cKeys = configs[slug];
  if (!cKeys) {
    console.log(`[standalone] ${slug}: sample=${JSON.stringify(sKeys)}  (独立组件，未用 makeCalculatorClient，需手动核对字段)`);
    noConfig++;
    continue;
  }
  const missing = cKeys.filter((k) => !sKeys.includes(k));
  const extra = sKeys.filter((k) => !cKeys.includes(k));
  if (missing.length || extra.length) {
    console.log(`[mismatch] ${slug}`);
    console.log(`   sample: ${JSON.stringify(sKeys)}`);
    console.log(`   config: ${JSON.stringify(cKeys)}`);
    if (missing.length) console.log(`   -> sample missing (field not filled): ${JSON.stringify(missing)}`);
    if (extra.length) console.log(`   -> sample extra: ${JSON.stringify(extra)}`);
    bad++;
  }
}
console.log(`\ntotal calculatorSamples=${Object.keys(samples).length}, mismatched=${bad}, standalone=${noConfig}`);
