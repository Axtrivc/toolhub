'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * EmbeddingPriceCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Embeddings are the cheap part</h2>
    <p>At $0.02 per million tokens, embedding a 100k-document corpus (at ~500 tokens each) costs about a dollar once. Recompute frequency and document size — not API price — drive real bills, which the monthly column makes visible.</p>
    <h2>Dimensions matter for storage</h2>
    <p>3072-dim vectors cost 3x the vector-DB storage of 1024-dim ones. The dims column exists so you can weigh retrieval quality against infrastructure costs, not just API price.</p>
    <h2>Choosing small vs large</h2>
    <p>text-embedding-3-small wins most retrieval tasks at 6.5x lower price than large; upgrade only when benchmarked recall on your data actually improves. Cohere embed-v4 truncates to 1024/512/256 dims at the same token price — smaller vectors and cheaper storage, identical bill.</p>
    <h2>RAG cost structure</h2>
    <p>Typical RAG spends more on generation tokens than embedding tokens by orders of magnitude. Optimize chunk sizes and retrieval counts before agonizing over embedding model choice.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>嵌入是最便宜的一环</h2>
    <p>按 $0.02 / 百万 token 计,嵌入一个 10 万文档的语料(每条约 500 token)一次性只花约 1 美元。真正决定账单的是重算频率和文档规模,而不是 API 单价——月成本列把它直观呈现出来。</p>
    <h2>维度决定存储</h2>
    <p>3072 维向量的向量库存储开销是 1024 维的 3 倍。列出维度是为了让你在检索质量与基础设施成本之间权衡,而不只盯着 API 价格。</p>
    <h2>small 还是 large 怎么选</h2>
    <p>text-embedding-3-small 以约为 large 1/6.5 的价格拿下大多数检索任务;只有当你的数据上实测召回率确有提升时才升级。Cohere embed-v4 在同等 token 单价下可截断到 1024/512/256 维——向量更小、存储更省,账单不变。</p>
    <h2>RAG 成本结构</h2>
    <p>典型的 RAG 在生成 token 上的花费比嵌入 token 高出几个数量级。先优化分块大小与检索条数,再纠结嵌入模型选型。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El embedding es la parte barata</h2>
    <p>A $0,02 por millón de tokens, incrustar un corpus de 100 mil documentos (a ~500 tokens cada uno) cuesta cerca de un dólar una sola vez. La frecuencia de recálculo y el tamaño documental — no el precio de la API — marcan la factura real, y la columna mensual lo hace visible.</p>
    <h2>Las dimensiones importan para el almacenamiento</h2>
    <p>Los vectores de 3072 dims cuestan 3 veces el almacenamiento del vector store que los de 1024. La columna de dims existe para que puedas sopesar la calidad de recuperación frente a los costes de infraestructura, no solo el precio de la API.</p>
    <h2>Elegir small o large</h2>
    <p>text-embedding-3-small gana la mayoría de tareas de recuperación a un precio 6,5 veces menor que large; sube de gama solo si la recall medida sobre tus datos mejora de verdad. Cohere embed-v4 trunca a 1024/512/256 dims al mismo precio por token — vectores más pequeños y almacenamiento más barato, misma factura.</p>
    <h2>Estructura de costes del RAG</h2>
    <p>Un RAG típico gasta en tokens de generación órdenes de magnitud más que en tokens de embedding. Optimiza tamaños de chunk y número de recuperaciones antes de obsesionarte con la elección del modelo de embedding.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Embeddings sind der billige Teil</h2>
    <p>Bei $0,02 pro Million Tokens kostet das Embedding eines Korpus mit 100k Dokumenten (je ~500 Tokens) einmalig etwa einen Dollar. Neuberechnungshäufigkeit und Dokumentgröße — nicht der API-Preis — treiben die echten Rechnungen; die Monatsspalte macht das sichtbar.</p>
    <h2>Dimensionen entscheiden über den Speicher</h2>
    <p>3072-Dims-Vektoren kosten das Dreifache an Vektor-DB-Speicher gegenüber 1024. Die Dims-Spalte existiert, damit du Retrieval-Qualität gegen Infrastrukturkosten abwägen kannst — nicht nur gegen den API-Preis.</p>
    <h2>Small oder Large wählen</h2>
    <p>text-embedding-3-small gewinnt die meisten Retrieval-Aufgaben zum 6,5-fach niedrigeren Preis als large; steige nur auf, wenn der gemessene Recall auf deinen Daten tatsächlich besser wird. Cohere embed-v4 kürzt auf 1024/512/256 Dims zum gleichen Token-Preis — kleinere Vektoren und günstigerer Speicher, identische Rechnung.</p>
    <h2>RAG-Kostenstruktur</h2>
    <p>Typisches RAG gibt um Größenordnungen mehr für Generierungs-Tokens aus als für Embedding-Tokens. Optimiere Chunk-Größen und Retrieval-Anzahlen, bevor du dich mit der Wahl des Embedding-Modells quälst.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function EmbeddingPriceCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
