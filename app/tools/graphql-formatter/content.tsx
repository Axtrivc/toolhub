'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GraphqlFormatter 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why GraphQL needs its own formatter</h2>
    <p>JSON formatters cannot help here: GraphQL is a language with arguments, directives, variables, fragment spreads and multi-line block strings, and a formatter that only matches braces will chew those up. This tool runs a real tokenizer over the document, so strings containing braces, hashes and commas round-trip untouched — and the pretty printer rebuilds indentation from the token stream rather than from whatever whitespace your source happened to have.</p>
    <h2>Commas are decoration; structure is not</h2>
    <p>A quirk that surprises newcomers: commas in GraphQL are insignificant tokens, pure readability sugar. The formatter normalizes them back in where humans expect them (between arguments, between variable definitions) while the minifier can drop every one safely. What it never drops is the whitespace that separates two adjacent name tokens — "query Q" needs the space; "a&#123;b&#125;" does not.</p>
    <h2>Fail loudly on half a document</h2>
    <p>Pasting an incomplete query mid-edit is the normal case, not the exception. Unclosed braces, unterminated strings and stray characters are reported with their position instead of producing confident-looking garbage — the formatter refuses to output when the input does not balance, so what you copy out is always either correct or explicitly rejected.</p>
    <h2>Queries and SDL, same grammar</h2>
    <p>Schema files (type, interface, union, enum, input, triple-quoted descriptions) tokenize with the same rules as operations, so .graphql schema files format here too. Minifying operations still pays off where queries travel: embedded strings in apps, persisted-query registration, and request logs — a 40% trim on a long query with comments is typical.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué GraphQL necesita su propio formateador</h2>
    <p>Los formateadores de JSON no sirven aquí: GraphQL es un lenguaje con argumentos, directivas, variables, spreads de fragment y cadenas de bloque multilínea, y una herramienta que solo empareja llaves los machaca. Esta herramienta ejecuta un lexer real sobre el documento, de modo que las llaves, almohadillas y comas dentro de cadenas hacen round-trip intactas — y la impresión bonita reconstruye la indentación desde el flujo de tokens, no del espacio en blanco que tu fuente trajera.</p>
    <h2>Las comas son decoración; la estructura no</h2>
    <p>Una rareza que sorprende al principiante: en GraphQL las comas son tokens insignificantes, azúcar de legibilidad. El formateador las devuelve donde un humano las espera (entre argumentos, entre definiciones de variables) y el minificador puede soltarlas todas con seguridad. Lo que jamás suelta es el espacio que separa dos tokens de nombre contiguos: «query Q» lo necesita; «a&#123;b&#125;», no.</p>
    <h2>Fallar ruidosamente ante medio documento</h2>
    <p>Pegar una consulta incompleta a mitad de edición es lo normal, no la excepción. Las llaves sin cerrar, las cadenas sin terminar y los caracteres sueltos se notifican con su posición en vez de producir basura con cara de segura — el formateador se niega a emitir cuando la entrada no equilibra, así que lo que copias siempre es correcto o rechazado explícitamente.</p>
    <h2>Consultas y SDL, la misma gramática</h2>
    <p>Los archivos de schema (type, interface, union, enum, input, descripciones con triple comilla) se tokenizan con las mismas reglas que las operaciones: aquí también formateas .graphql de schema. Minificar operaciones sigue compensando donde las consultas viajan: cadenas incrustadas en apps, registro de persisted queries y logs de peticiones — un recorte del 40 % en una consulta larga con comentarios es lo típico.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum GraphQL einen eigenen Formatter braucht</h2>
    <p>JSON-Formatter helfen hier nicht: GraphQL ist eine Sprache mit Argumenten, Direktiven, Variablen, Fragment-Spreads und mehrzeiligen Block-Strings, und ein Werkzeug, das nur Klammern paart, zermahlt sie. Dieses Tool führt ein echtes Lexing über das Dokument aus — geschweifte Klammern, Rauten und Kommas innerhalb von Strings überstehen das Round-trip unberührt, und der Pretty-Printer baut die Einrückung aus dem Token-Strom wieder auf, nicht aus dem Weißraum, den die Quelle zufällig hatte.</p>
    <h2>Kommas sind Deko; Struktur nicht</h2>
    <p>Eine Eigenheit, die Neulinge überrascht: Kommas sind in GraphQL bedeutungslose Tokens, reine Lesbarkeitszucker. Der Formatter setzt sie dorthin zurück, wo Menschen sie erwarten (zwischen Argumenten, zwischen Variablendefinitionen), während der Minifier sie gefahrlos alle fallen lässt. Was er nie fallen lässt, ist der Whitespace zwischen zwei angrenzenden Name-Tokens — „query Q“ braucht das Leerzeichen, „a&#123;b&#125;“ nicht.</p>
    <h2>Bei halben Dokumenten laut scheitern</h2>
    <p>Mitten im Editieren eine unvollständige Query einzufügen ist der Normalfall, nicht die Ausnahme. Nicht geschlossene Klammern, nicht terminierte Strings und Streuzeichen werden mit Position gemeldet, statt selbstbewusst Müll zu produzieren — der Formatter verweigert die Ausgabe, wenn die Eingabe nicht balanciert; was du kopierst, ist also immer korrekt oder ausdrücklich abgelehnt.</p>
    <h2>Queries und SDL, dieselbe Grammatik</h2>
    <p>Schema-Dateien (type, interface, union, enum, input, Beschreibungen in Dreifach-Anführungszeichen) lexen nach denselben Regeln wie Operationen — .graphql-Schemata formatierst du also hier ebenfalls. Minifizierte Operationen zahlen sich weiter aus, wo Queries reisen: eingebettete Strings in Apps, Persisted-Query-Registrierung und Request-Logs — 40 % Ersparnis bei einer langen kommentierten Query sind typisch.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function GraphqlFormatterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
