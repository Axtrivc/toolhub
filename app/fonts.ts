import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google'

const serif = Source_Serif_4({ subsets: ['latin'], weight: 'variable', axes: ['opsz'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: '400', variable: '--font-mono', display: 'swap' })

export const fontVariables = `${serif.variable} ${sans.variable} ${mono.variable}`
