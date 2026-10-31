#!/usr/bin/env node
/**
 * Capture the five screenshots embedded in README.md from the real ToolHub UI.
 *
 * Usage:
 *   node scripts/capture-readme-screenshots.mjs
 *   node scripts/capture-readme-screenshots.mjs --base http://127.0.0.1:3000
 *
 * Uses the system Chrome/Edge (or CHROME_PATH) at 1440×900, DPR 2. The hero
 * images use a document clip through the category explorer so every requested
 * section is present; both themes use the exact same clip.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'docs', 'assets')
const args = process.argv.slice(2)
const baseArg = args.indexOf('--base')
const BASE = (baseArg >= 0 ? args[baseArg + 1] : 'https://toolhub.axtrivc.com').replace(/\/$/, '')
const VIEWPORT = { width: 1440, height: 900 }

const browserCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)
const executablePath = browserCandidates.find((candidate) => fs.existsSync(candidate))

fs.mkdirSync(OUT, { recursive: true })
const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : {}),
  headless: true,
})

async function openPage(theme = 'dark') {
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    colorScheme: theme,
    reducedMotion: 'reduce',
    locale: 'en-US',
  })
  await context.addInitScript((selectedTheme) => {
    localStorage.setItem('app-theme', selectedTheme)
    localStorage.setItem('app-locale', 'en')
    localStorage.setItem('toolhub-cookie-consent', 'necessary')
  }, theme)
  const page = await context.newPage()
  page.setDefaultTimeout(30_000)
  return { context, page }
}

async function gotoWithRetry(page, url) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await page.goto(url, { waitUntil: 'domcontentloaded' })
    } catch (error) {
      if (attempt === 3) throw error
      await page.waitForTimeout(1_000 * attempt)
    }
  }
}

async function goHome(page) {
  await gotoWithRetry(page, `${BASE}/`)
  await page.getByRole('heading', { name: /350\+ Free Online Tools That Just Work/i }).waitFor()
  await page.getByPlaceholder('Search 350 tools...').waitFor()
  await page.locator('section[aria-label="Try a tool right now"]').waitFor()
  await page.locator('#all-tools').waitFor()
  await page.waitForTimeout(1_200)
  // Trigger while-in-view card animations before taking a document-height clip.
  await page.locator('#all-tools').scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)
  await scrollToTop(page)
}

async function scrollToTop(page) {
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
}

try {
  const { context: darkContext, page: dark } = await openPage('dark')
  await goHome(dark)
  await dark.locator('html.dark').waitFor()
  const explorerBottom = await dark.locator('#all-tools').evaluate((element) => {
    const rect = element.getBoundingClientRect()
    return Math.ceil(rect.top + window.scrollY + rect.height + 20)
  })
  const heroClip = { x: 0, y: 0, width: VIEWPORT.width, height: explorerBottom }
  await scrollToTop(dark)
  await dark.screenshot({
    path: path.join(OUT, 'hero-dark.png'),
    clip: heroClip,
    fullPage: true,
    animations: 'disabled',
  })
  console.log(`✓ hero-dark.png (${VIEWPORT.width}×${explorerBottom} CSS px @2x)`)

  await dark.keyboard.press('Control+k')
  const palette = dark.getByRole('dialog', { name: 'Search tools' })
  await palette.waitFor()
  const paletteInput = palette.getByRole('combobox')
  await paletteInput.fill('loan')
  await palette.getByText(/loan calculator/i).first().waitFor()
  await palette.getByText(/\d+ matches?|350 tools/i).last().waitFor()
  await dark.screenshot({ path: path.join(OUT, 'search-palette.png'), animations: 'disabled' })
  console.log('✓ search-palette.png (Ctrl+K, query=loan)')

  await dark.keyboard.press('Escape')
  await palette.waitFor({ state: 'hidden' })
  const quickAccess = dark.getByRole('button', { name: /Quick Access/i })
  await quickAccess.click()
  await dark.getByText('Scratchpad & Quick Utility', { exact: true }).waitFor()
  for (const label of [/format json/i, /base64 enc/i, /base64 dec/i]) {
    await dark.getByRole('button', { name: label }).waitFor()
  }
  await quickAccess.evaluate((element) => {
    const section = element.closest('section')
    if (section) window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 80, behavior: 'instant' })
  })
  await dark.locator('section[aria-label="Try a tool right now"]').waitFor()
  await dark.screenshot({ path: path.join(OUT, 'workspace-bento.png'), animations: 'disabled' })
  console.log('✓ workspace-bento.png (Quick Access expanded)')
  await darkContext.close()

  // Isolate the tool capture from homepage modal/workspace state.
  const { context: toolContext, page: tool } = await openPage('dark')
  await gotoWithRetry(tool, `${BASE}/tools/loan-calculator/`)
  const compare = tool.getByRole('button', { name: '+ Compare Scenario' })
  await compare.waitFor()
  // Wait for hydration before clicking; a prerendered button can be visible first.
  await tool.waitForTimeout(1_500)
  await compare.click()
  await tool.locator('.compare-panel').getByText(/Scenario B/).waitFor()
  // Make B meaningfully different so the KPI delta and comparison table demonstrate real behavior.
  await tool.locator('#cmp-rate').fill('6.5')
  await tool.locator('.delta-badge').waitFor()
  await tool.getByRole('columnheader', { name: 'A', exact: true }).waitFor()
  await tool.getByRole('columnheader', { name: 'B', exact: true }).waitFor()
  await tool.getByText('Loan Balance Over Time', { exact: true }).waitFor()
  await tool.locator('.compare-panel').evaluate((element) => {
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 90, behavior: 'instant' })
  })
  await tool.screenshot({ path: path.join(OUT, 'tool-page.png'), animations: 'disabled' })
  console.log('✓ tool-page.png (Scenario A/B + KPI + balance chart)')
  await toolContext.close()

  const { context: lightContext, page: light } = await openPage('light')
  await goHome(light)
  await light.locator('html:not(.dark)').waitFor()
  await scrollToTop(light)
  await light.screenshot({
    path: path.join(OUT, 'hero-light.png'),
    clip: heroClip,
    fullPage: true,
    animations: 'disabled',
  })
  console.log(`✓ hero-light.png (${VIEWPORT.width}×${explorerBottom} CSS px @2x)`)
  await lightContext.close()
} finally {
  await browser.close()
}
