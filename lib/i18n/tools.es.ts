/**
 * Herramientas — traducciones al español (es)
 *
 * Estructura: Record<slug, { name, shortIntro }>
 * - Los slug coinciden 1:1 con lib/tools.ts (239 herramientas).
 * - Cualquier slug ausente revierte al valor inglés original
 *   (ver lib/i18n.ts getToolName/getToolShortIntro).
 * - Solo se traducen el name + shortIntro de las tarjetas;
 *   los campos SEO (title/description/h1/keywords) se mantienen en inglés.
 */

export const esTools: Record<string, { name: string; shortIntro: string }> = {
  // ─────────── 💳 Calculadoras financieras ───────────
  'loan-calculator': {
    name: 'Calculadora de préstamos',
    shortIntro: 'Calcula la cuota mensual, los intereses totales y el coste de cualquier préstamo.',
  },
  'mortgage-calculator': {
    name: 'Calculadora de hipoteca',
    shortIntro: 'Calcula la cuota mensual de la hipoteca y los intereses totales.',
  },
  'compound-interest-calculator': {
    name: 'Calculadora de interés compuesto',
    shortIntro: 'Mira cómo crecen tus ahorros gracias al interés compuesto.',
  },
  'apy-calculator': {
    name: 'Calculadora de APY',
    shortIntro: 'Convierte APR en APY según la frecuencia de capitalización.',
  },
  'roi-calculator': {
    name: 'Calculadora de ROI',
    shortIntro: 'Calcula la rentabilidad total y anualizada de una inversión.',
  },
  'credit-card-minimum-payment-calculator': {
    name: 'Calculadora de pago mínimo de tarjeta',
    shortIntro: 'Ve cómo tu pago mínimo se reparte entre intereses y principal.',
  },
  'cash-back-calculator': {
    name: 'Calculadora de reembolsos (cash back)',
    shortIntro: 'Calcula el valor real del cash back tras las cuotas anuales.',
  },
  'down-payment-calculator': {
    name: 'Calculadora de entrada (down payment)',
    shortIntro: 'Consulta cuánto dar de entrada y si necesitas PMI.',
  },
  'dti-calculator': {
    name: 'Calculadora de deuda/ingresos (DTI)',
    shortIntro: 'Calcula tu ratio DTI y si te aprobarán el préstamo.',
  },
  'commission-calculator': {
    name: 'Calculadora de comisiones',
    shortIntro: 'Calcula comisiones de venta más el salario base.',
  },
  'bill-split-calculator': {
    name: 'Calculadora para dividir la cuenta',
    shortIntro: 'Reparte la cuenta a partes iguales, propina incluida.',
  },
  'savings-goal-calculator': {
    name: 'Calculadora de meta de ahorro',
    shortIntro: 'Calcula cuánto ahorrar al mes para alcanzar cualquier meta.',
  },
  'net-worth-calculator': {
    name: 'Calculadora de patrimonio neto',
    shortIntro: 'Calcula tu patrimonio: activos menos pasivos.',
  },
  'annuity-calculator': {
    name: 'Calculadora de anualidad',
    shortIntro: 'Calcula retiros anuales y mensuales de un principal en N años.',
  },
  'capital-gains-tax-estimator': {
    name: 'Estimador de impuesto sobre plusvalías',
    shortIntro: 'Estima el impuesto (tipos a corto vs largo plazo).',
  },
  'rent-vs-buy-calculator': {
    name: 'Calculadora alquilar vs comprar',
    shortIntro: 'Compara el coste total de comprar vs alquilar en un periodo.',
  },
  'inflation-calculator': {
    name: 'Calculadora de inflación',
    shortIntro: 'Ve cómo la inflación reduce el valor del dinero en el tiempo.',
  },
  'retirement-calculator': {
    name: 'Calculadora de jubilación',
    shortIntro: 'Proyecta tus ahorros para la jubilación con interés compuesto.',
  },
  'simple-interest-calculator': {
    name: 'Calculadora de interés simple',
    shortIntro: 'Calcula interés simple con la fórmula I = Prt.',
  },
  'unit-price-calculator': {
    name: 'Calculadora de precio por unidad',
    shortIntro: 'Compara precios por unidad para hallar la mejor oferta real.',
  },
  'markup-calculator': {
    name: 'Calculadora de margen (markup)',
    shortIntro: 'Obtén precio de venta y margen a partir del coste y el markup.',
  },
  'hourly-to-salary-calculator': {
    name: 'De salario por hora a anual',
    shortIntro: 'Convierte tu salario por hora en salario anual.',
  },
  'credit-card-payoff-calculator': {
    name: 'Calculadora de pago de tarjeta',
    shortIntro: 'Consulta cuánto tardarás en pagar el saldo de tu tarjeta.',
  },
  'income-tax-estimator': {
    name: 'Estimador de impuesto sobre la renta',
    shortIntro: 'Estima el impuesto federal de EE. UU. y el salario neto.',
  },
  'salary-converter': {
    name: 'Conversor de salario',
    shortIntro: 'Convierte salario entre anual, mensual, quincenal y por hora.',
  },
  'sales-tax-calculator': {
    name: 'Calculadora de impuesto sobre ventas',
    shortIntro: 'Añade o quita el impuesto de cualquier precio al instante.',
  },
  'tip-calculator': {
    name: 'Calculadora de propinas',
    shortIntro: 'Calcula la propina y repártela entre cualquier número de personas.',
  },
  'discount-calculator': {
    name: 'Calculadora de descuentos',
    shortIntro: 'Calcula el precio final tras el descuento y cuánto ahorras.',
  },
  'auto-loan-calculator': {
    name: 'Calculadora de préstamo de auto',
    shortIntro: 'Calcula las cuotas del coche con entrada, entrega a cuenta e impuestos.',
  },
  'ebay-fee-calculator': {
    name: 'Calculadora de comisiones de eBay',
    shortIntro: 'Mira exactamente cuánto te queda tras las comisiones de eBay o Etsy.',
  },
  'reverse-stripe-fee-calculator': {
    name: 'Calculadora inversa de comisiones de Stripe',
    shortIntro: 'Calcula cuánto cobrar para recibir neto exactamente lo que quieres.',
  },
  'electricity-cost-calculator': {
    name: 'Calculadora de Costo de Electricidad',
    shortIntro: 'Lo que de verdad cuesta cada electrodoméstico por día, mes y año.',
  },
  'fuel-cost-calculator': {
    name: 'Calculadora de Costo de Combustible',
    shortIntro: 'Calcula lo que cuesta la gasolina de cualquier viaje: ida, vuelta y reparto por persona.',
  },
  'subscription-cost-calculator': {
    name: 'Calculadora de Suscripciones',
    shortIntro: 'Suma todas tus suscripciones y mira el daño anual.',
  },
  'overtime-calculator': {
    name: 'Calculadora de Horas Extra',
    shortIntro: 'Salario semanal con tiempo y medio, doble o multiplicadores propios.',
  },
  'take-home-pay-calculator': {
    name: 'Calculadora de Salario Neto',
    shortIntro: 'Estima el neto tras impuesto federal, FICA y deducciones antes de impuestos.',
  },
  'wedding-budget-calculator': {
    name: 'Calculadora de Presupuesto de Boda',
    shortIntro: 'Convierte tu total en montos por categoría con porcentajes típicos.',
  },
  'amortization-table-generator': {
    name: 'Generador de Tabla de Amortización',
    shortIntro: 'Calendario pago por pago con saldo acumulado y exportación a CSV.',
  },
  'car-cost-calculator': {
    name: 'Calculadora de Costo de Auto',
    shortIntro: 'Costo total de propiedad: combustible, seguro, mantenimiento y depreciación.',
  },

  // ─────────── ⚙️ Herramientas para desarrolladores ───────────
  'json-formatter': {
    name: 'Formateador JSON',
    shortIntro: 'Formatea y valida JSON con sangría correcta.',
  },
  'jwt-decoder': {
    name: 'Decodificador JWT',
    shortIntro: 'Decodifica JWT localmente: inspecciona header, payload y firma.',
  },
  'base64-encoder': {
    name: 'Codificador Base64',
    shortIntro: 'Codifica texto a Base64 al instante con soporte UTF-8.',
  },
  'base64-decoder': {
    name: 'Decodificador Base64',
    shortIntro: 'Decodifica Base64 a texto legible al instante.',
  },
  'regex-tester': {
    name: 'Probador de regex con explicación',
    shortIntro: 'Prueba regex con coincidencias resaltadas y chuleta de sintaxis.',
  },
  'uuid-generator': {
    name: 'Generador de UUID',
    shortIntro: 'Genera UUID v4 aleatorios para bases de datos, sesiones y APIs.',
  },
  'curl-converter': {
    name: 'Conversor de curl a código',
    shortIntro: 'Convierte curl en JavaScript (Fetch/Axios) y Python requests.',
  },
  'markdown-to-html': {
    name: 'Conversor de Markdown a HTML',
    shortIntro: 'Pasa Markdown a HTML limpio con vista previa en vivo.',
  },
  'hash-generator': {
    name: 'Generador de hash (SHA-256)',
    shortIntro: 'Genera hashes SHA-256 y SHA-1 a partir de texto.',
  },
  'binary-to-text': {
    name: 'Conversor de binario a texto',
    shortIntro: 'Decodifica binario de vuelta a texto legible.',
  },
  'text-to-binary': {
    name: 'Conversor de texto a binario',
    shortIntro: 'Convierte caracteres de texto a representación binaria.',
  },
  'url-query-parser': {
    name: 'Analizador de query de URL',
    shortIntro: 'Extrae los parámetros de consulta de la URL a un objeto JSON.',
  },
  'text-size-estimator': {
    name: 'Estimador de tamaño de texto',
    shortIntro: 'Estima el tamaño en bytes de tu texto en varios formatos.',
  },
  'json-minifier': {
    name: 'Minificador JSON',
    shortIntro: 'Elimina todos los espacios para minimizar el tamaño del JSON.',
  },
  'csv-to-json': {
    name: 'Conversor de CSV a JSON',
    shortIntro: 'Convierte CSV a un array JSON usando la fila de cabecera.',
  },
  'json-to-csv': {
    name: 'Conversor de JSON a CSV',
    shortIntro: 'Convierte un array JSON de objetos a formato CSV.',
  },
  'lorem-ipsum-generator': {
    name: 'Generador de Lorem Ipsum',
    shortIntro: 'Genera texto de marcador de posición para maquetas y diseños.',
  },
  'random-number-generator': {
    name: 'Generador de números aleatorios',
    shortIntro: 'Genera números aleatorios en cualquier rango, con opción única.',
  },
  'html-escape': {
    name: 'Escapar HTML',
    shortIntro: 'Escapa caracteres especiales HTML para prevenir XSS.',
  },
  'html-unescape': {
    name: 'Des-escapar HTML',
    shortIntro: 'Convierte entidades HTML de vuelta a caracteres legibles.',
  },
  'url-encoder': {
    name: 'Codificador de URL',
    shortIntro: 'Codifica texto para uso seguro en URLs.',
  },
  'url-decoder': {
    name: 'Decodificador de URL',
    shortIntro: 'Decodifica URLs con codificación porcentual de vuelta a texto.',
  },
  'slug-generator': {
    name: 'Generador de slug',
    shortIntro: 'Convierte títulos en slugs URL limpios y aptos para SEO al instante.',
  },
  'json-to-typescript': {
    name: 'JSON a TypeScript',
    shortIntro: 'Pega JSON y genera interfaces TypeScript limpias al instante.',
  },
  'yaml-to-json': {
    name: 'Conversor de YAML a JSON',
    shortIntro: 'Pega YAML y obtén JSON limpio y formateado al instante.',
  },
  'sql-formatter': {
    name: 'Formateador SQL',
    shortIntro: 'Embellece SQL con sangría limpia y palabras clave en mayúsculas.',
  },
  'image-to-base64': {
    name: 'Conversor de imagen a Base64',
    shortIntro: 'Convierte una imagen en un data URI Base64 para incrustar.',
  },
  'ip-checker': {
    name: 'Verificador de calidad y fraude de IP',
    shortIntro: 'Inspecciona la calidad de la IP, el tipo de ASN, la puntuación de fraude y la consistencia de zona horaria.',
  },
  'chmod-calculator': {
    name: 'Calculadora de chmod',
    shortIntro: 'Convierte entre permisos octales 755 y simbólicos rwxr-xr-x.',
  },
  'code-beautifier': {
    name: 'Embellecedor de código',
    shortIntro: 'Formatea e indenta HTML, CSS, JS y JSON minificados.',
  },
  'gpt-token-counter': {
    name: 'Contador de tokens GPT',
    shortIntro: 'Estima tokens y coste de API para prompts de GPT y Claude.',
  },
  'ip-subnet-calculator': {
    name: 'Calculadora de subredes IP',
    shortIntro: 'Calcula máscara, red, broadcast y rango de hosts desde CIDR.',
  },
  'json-schema-generator': {
    name: 'Generador de JSON Schema',
    shortIntro: 'Convierte cualquier JSON en un JSON Schema Draft-07.',
  },
  'naming-case-converter': {
    name: 'Conversor de estilos de nombre',
    shortIntro: 'Convierte nombres entre camelCase, snake_case, kebab-case y más.',
  },
  'nginx-config-generator': {
    name: 'Generador de configuración de Nginx',
    shortIntro: 'Crea un bloque server de nginx de proxy inverso con SSL y caché.',
  },
  'random-choice-picker': {
    name: 'Selector aleatorio',
    shortIntro: 'Pega opciones, gira y deja que el azar decida por ti.',
  },
  'user-agent-parser': {
    name: 'Analizador de User-Agent',
    shortIntro: 'Decodifica cadenas user-agent en navegador, SO, motor y dispositivo.',
  },
  'epoch-converter': {
    name: 'Convertidor de Epoch',
    shortIntro: 'Convierte timestamps de Unix a fechas y al revés, en UTC u hora local.',
  },
  'json-diff': {
    name: 'Comparador de JSON',
    shortIntro: 'Compara dos JSON campo por campo, sin importar el orden.',
  },
  'robots-txt-generator': {
    name: 'Generador de robots.txt',
    shortIntro: 'Crea un robots.txt correcto con presets y vista previa en vivo.',
  },
  'keycode-info': {
    name: 'Info de Eventos de Teclado (Keycode)',
    shortIntro: 'Pulsa cualquier tecla: mira key, code, keyCode y modificadores en vivo.',
  },
  'mime-type-lookup': {
    name: 'Buscador de Tipos MIME',
    shortIntro: 'Mapeo extensión ↔ tipo MIME para cabeceras HTTP y configs.',
  },
  'xml-formatter': {
    name: 'Formateador y Validador XML',
    shortIntro: 'Embellece, minifica o valida documentos XML con precisión.',
  },
  'log-filter-tool': {
    name: 'Filtro de Logs (Grep)',
    shortIntro: 'Filtrado estilo grep para logs: palabra clave, nivel o regex.',
  },
  'ascii-table': {
    name: 'Tabla ASCII',
    shortIntro: 'Todos los caracteres ASCII con códigos dec/hex/oct/bin, con búsqueda.',
  },
  'jwt-generator': {
    name: 'Generador de JWT',
    shortIntro: 'Crea JWT firmados localmente — combínalo con nuestro decodificador para pruebas.',
  },
  'base-converter': {
    name: 'Convertidor de Bases (2-36)',
    shortIntro: 'Cualquier base 2-36, con fracciones, y todas las bases comunes a la vez.',
  },
  'cron-expression-generator': {
    name: 'Generador de Expresiones Cron',
    shortIntro: 'Crea crons con clics y vista previa en lenguaje natural.',
  },
  'htaccess-redirect-generator': {
    name: 'Generador de Redirecciones .htaccess',
    shortIntro: '301, cambios de dominio, HTTPS y reglas canónicas sin dolores de cabeza.',
  },
  'unicode-character-lookup': {
    name: 'Buscador de Caracteres Unicode',
    shortIntro: 'Encuentra cualquier símbolo por nombre o al pegarlo: code point y bloque.',
  },
  'toml-to-json': {
    name: 'Convertidor TOML a JSON',
    shortIntro: 'TOML estilo Cargo/pyproject a JSON limpio, todo local.',
  },

  // ─────────── 🔤 Herramientas de texto ───────────
  'word-counter': {
    name: 'Contador de palabras',
    shortIntro: 'Cuenta palabras, caracteres, frases y tiempo de lectura al instante.',
  },
  'text-diff': {
    name: 'Comparador de diferencias de texto',
    shortIntro: 'Compara dos textos y ve qué cambió.',
  },
  'remove-line-breaks': {
    name: 'Quitar saltos de línea',
    shortIntro: 'Une texto multilínea en una sola línea.',
  },
  'find-and-replace': {
    name: 'Buscar y reemplazar texto',
    shortIntro: 'Busca y reemplaza cualquier texto al instante.',
  },
  'uppercase-converter': {
    name: 'Convertidor a MAYÚSCULAS',
    shortIntro: 'Convierte cualquier texto a MAYÚSCULAS al instante.',
  },
  'lowercase-converter': {
    name: 'Convertidor a minúsculas',
    shortIntro: 'Convierte cualquier texto a minúsculas al instante.',
  },
  'title-case-converter': {
    name: 'Convertidor a Tipo Título',
    shortIntro: 'Capitaliza la primera letra de cada palabra para títulos.',
  },
  'sentence-case-converter': {
    name: 'Convertidor a Tipo Oración',
    shortIntro: 'Capitaliza la primera letra de cada frase automáticamente.',
  },
  'slug-to-title': {
    name: 'Conversor de slug a título',
    shortIntro: 'Convierte slugs de URL de vuelta a títulos legibles.',
  },
  'html-tag-stripper': {
    name: 'Eliminador de etiquetas HTML',
    shortIntro: 'Quita todas las etiquetas HTML para obtener texto limpio.',
  },
  'character-frequency': {
    name: 'Contador de frecuencia de caracteres',
    shortIntro: 'Cuenta cuántas veces aparece cada carácter en el texto.',
  },
  'email-extractor': {
    name: 'Extractor de correos',
    shortIntro: 'Saca todas las direcciones de correo de cualquier texto.',
  },
  'url-extractor': {
    name: 'Extractor de URLs',
    shortIntro: 'Saca todos los enlaces web de cualquier texto.',
  },
  'add-line-numbers': {
    name: 'Añadir números de línea',
    shortIntro: 'Añade números de línea a cada línea de tu texto.',
  },
  'text-to-list': {
    name: 'Conversor de texto a lista',
    shortIntro: 'Añade viñetas a cada línea de texto.',
  },
  'reverse-text': {
    name: 'Generador de texto invertido',
    shortIntro: 'Invierte cualquier texto — útil para acertijos y cifrados.',
  },
  'remove-duplicate-lines': {
    name: 'Eliminar líneas duplicadas',
    shortIntro: 'Limpia listas eliminando duplicados y manteniendo el orden.',
  },
  'sort-lines': {
    name: 'Ordenar líneas de texto',
    shortIntro: 'Ordena cualquier lista alfabéticamente con un clic.',
  },
  'whitespace-remover': {
    name: 'Eliminador de espacios',
    shortIntro: 'Limpia el espaciado desordenado en cualquier texto.',
  },
  'list-diff': {
    name: 'Comparador de listas e intersección',
    shortIntro: 'Compara dos listas y halla elementos únicos y comunes al instante.',
  },
  'csv-to-markdown-table': {
    name: 'CSV a tabla Markdown',
    shortIntro: 'Convierte datos CSV/TSV en tablas Markdown listas para GitHub.',
  },
  'srt-subtitle-shift': {
    name: 'Desplazador de subtítulos SRT',
    shortIntro: 'Desplaza los tiempos de los subtítulos la cantidad que necesites y elimina el formato.',
  },
  'text-cleaner': {
    name: 'Limpiador de texto',
    shortIntro: 'Elimina emojis, acentos y caracteres especiales del texto.',
  },
  'wordle-solver': {
    name: 'Solucionador de Wordle',
    shortIntro: 'Acota las respuestas de Wordle por letras conocidas, incluidas y excluidas.',
  },
  'line-diff-checker': {
    name: 'Comparador de Líneas',
    shortIntro: 'Diff línea por línea con conteos de adiciones, borrados y cambios.',
  },
  'markdown-toc-generator': {
    name: 'Generador de TOC de Markdown',
    shortIntro: 'Índice enlazado desde tus encabezados, compatible con slugs de GitHub.',
  },
  'reading-level-checker': {
    name: 'Medidor de Nivel de Lectura',
    shortIntro: 'Puntuaciones Flesch y nivel de grado con desglose por oración.',
  },
  'morse-code-translator': {
    name: 'Traductor de Código Morse',
    shortIntro: 'Traducción morse bidireccional con vista punto-raya y audio.',
  },
  'typing-speed-test': {
    name: 'Test de Velocidad de Escritura',
    shortIntro: 'Test de WPM y precisión de un minuto, limpio y sin anuncios.',
  },

  // ─────────── 📐 Conversores de unidades ───────────
  'mass-converter': {
    name: 'Conversor de masa',
    shortIntro: 'Convierte entre sistema métrico, quilates y granos.',
  },
  'density-converter': {
    name: 'Conversor de densidad',
    shortIntro: 'Convierte entre unidades de densidad para física y química.',
  },
  'power-converter': {
    name: 'Conversor de potencia',
    shortIntro: 'Convierte entre vatios, kilovatios, caballos y BTU.',
  },
  'flow-rate-converter': {
    name: 'Conversor de caudal',
    shortIntro: 'Convierte entre L/min, GPM, CFM y más.',
  },
  'data-storage-converter': {
    name: 'Conversor de almacenamiento',
    shortIntro: 'Convierte entre bytes, KB, MB, GB, TB y más.',
  },
  'time-converter': {
    name: 'Conversor de tiempo',
    shortIntro: 'Convierte entre segundos, minutos, horas, días y más.',
  },
  'numeral-system-converter': {
    name: 'Conversor de base numérica',
    shortIntro: 'Convierte entre binario, octal, decimal y hexadecimal.',
  },
  'angle-converter': {
    name: 'Conversor de ángulos',
    shortIntro: 'Convierte entre grados, radianes y gradianes.',
  },
  'fuel-economy-converter': {
    name: 'Conversor de consumo de combustible',
    shortIntro: 'Convierte entre MPG y L/100km para la eficiencia del coche.',
  },
  'pressure-converter': {
    name: 'Conversor de presión',
    shortIntro: 'Convierte entre bar, PSI, pascal, atm y más.',
  },
  'energy-converter': {
    name: 'Conversor de energía',
    shortIntro: 'Convierte entre julios, calorías, kWh y BTU.',
  },
  'frequency-converter': {
    name: 'Conversor de frecuencia',
    shortIntro: 'Convierte entre Hz, kHz, MHz, GHz y RPM.',
  },
  'weight-converter': {
    name: 'Conversor de peso',
    shortIntro: 'Convierte entre unidades métricas e imperiales al instante.',
  },
  'temperature-converter': {
    name: 'Conversor de temperatura',
    shortIntro: 'Convierte entre Celsius, Fahrenheit y Kelvin al instante.',
  },
  'speed-converter': {
    name: 'Conversor de velocidad',
    shortIntro: 'Convierte entre km/h, mph, m/s, nudos y ft/s al instante.',
  },
  'area-converter': {
    name: 'Conversor de área',
    shortIntro: 'Convierte entre unidades métricas e imperiales, incluidos acres y hectáreas.',
  },
  'volume-converter': {
    name: 'Conversor de volumen',
    shortIntro: 'Convierte entre unidades métricas y de cocina de EE. UU. al instante.',
  },
  'length-converter': {
    name: 'Conversor de longitud',
    shortIntro: 'Convierte entre unidades métricas e imperiales al instante.',
  },
  'cooking-converter': {
    name: 'Convertidor de Medidas de Cocina',
    shortIntro: 'Tazas ↔ gramos ↔ onzas, ajustado por la densidad del ingrediente.',
  },

  // ─────────── 🧮 Calculadoras matemáticas ───────────
  'trapezoid-calculator': {
    name: 'Calculadora de trapecio',
    shortIntro: 'Calcula el área de un trapecio a partir de los lados paralelos y la altura.',
  },
  'cube-calculator': {
    name: 'Calculadora de cubo',
    shortIntro: 'Calcula volumen y área superficial de un cubo.',
  },
  'sphere-calculator': {
    name: 'Calculadora de esfera',
    shortIntro: 'Calcula volumen y área superficial de una esfera desde el radio.',
  },
  'scientific-notation-converter': {
    name: 'Conversor a notación científica',
    shortIntro: 'Convierte números a notación científica, E y de ingeniería.',
  },
  'prime-number-checker': {
    name: 'Comprobador de números primos',
    shortIntro: 'Comprueba si un número es primo y halla los primos adyacentes.',
  },
  'prime-factorization-calculator': {
    name: 'Calculadora de factorización prima',
    shortIntro: 'Descompón cualquier número en sus factores primos.',
  },
  'combination-calculator': {
    name: 'Calculadora de combinaciones',
    shortIntro: 'Calcula combinaciones C(n,r) para probabilidad.',
  },
  'permutation-calculator': {
    name: 'Calculadora de permutaciones',
    shortIntro: 'Calcula permutaciones (el orden importa).',
  },
  'circle-calculator': {
    name: 'Calculadora de círculo',
    shortIntro: 'Calcula área, circunferencia y diámetro desde el radio.',
  },
  'triangle-calculator': {
    name: 'Calculadora de triángulo',
    shortIntro: 'Resuelve triángulos rectángulos: hipotenusa, área, perímetro.',
  },
  'rectangle-calculator': {
    name: 'Calculadora de rectángulo',
    shortIntro: 'Calcula área, perímetro y diagonal de un rectángulo.',
  },
  'standard-deviation-calculator': {
    name: 'Calculadora de desviación típica',
    shortIntro: 'Calcula desviación típica, varianza y media.',
  },
  'percentile-calculator': {
    name: 'Calculadora de percentil',
    shortIntro: 'Calcula el valor de cualquier percentil de tus datos.',
  },
  'fraction-calculator': {
    name: 'Calculadora de fracciones',
    shortIntro: 'Suma, resta, multiplica y divide fracciones con matemática exacta.',
  },
  'ratio-calculator': {
    name: 'Calculadora de proporciones',
    shortIntro: 'Resuelve proporciones y halla valores faltantes.',
  },
  'lcm-gcd-calculator': {
    name: 'Calculadora de MCM y MCD',
    shortIntro: 'Calcula el MCM y MCD de cualquier conjunto de números.',
  },
  'average-calculator': {
    name: 'Calculadora de promedio',
    shortIntro: 'Calcula media, mediana, suma, mín/máx y rango de cualquier lista.',
  },
  'percentage-calculator': {
    name: 'Calculadora de porcentajes',
    shortIntro: 'Calcula porcentajes, aumentos, disminuciones y descuentos al instante.',
  },
  'roman-numeral-converter': {
    name: 'Convertidor de Números Romanos',
    shortIntro: 'Conversión bidireccional de romanos con tabla de referencia rápida.',
  },

  // ─────────── 💪 Calculadoras de salud ───────────
  'bmi-calculator': {
    name: 'Calculadora de IMC',
    shortIntro: 'Calcula tu Índice de Masa Corporal y tu rango de peso saludable.',
  },
  'calorie-calculator': {
    name: 'Calculadora de calorías',
    shortIntro: 'Calcula tus necesidades calóricas diarias para perder o ganar peso.',
  },
  'tdee-calculator': {
    name: 'Calculadora de TDEE',
    shortIntro: 'Calcula tus calorías diarias (TDEE) para definir, mantener o ganar volumen.',
  },
  'bmr-calculator': {
    name: 'Calculadora de TMB',
    shortIntro: 'Calcula las calorías que tu cuerpo quema en reposo total.',
  },
  'body-fat-calculator': {
    name: 'Calculadora de grasa corporal',
    shortIntro: 'Estima el % de grasa corporal usando medidas de contorno.',
  },
  'macro-calculator': {
    name: 'Calculadora de macronutrientes',
    shortIntro: 'Reparte las calorías diarias en proteínas, carbohidratos y grasas.',
  },
  'pregnancy-due-date-calculator': {
    name: 'Calculadora de fecha de parto',
    shortIntro: 'Estima la fecha de parto desde tu última menstruación.',
  },
  'water-intake-calculator': {
    name: 'Calculadora de ingesta de agua',
    shortIntro: 'Calcula tu ingesta diaria ideal de agua.',
  },
  'ideal-weight-calculator': {
    name: 'Calculadora de peso ideal',
    shortIntro: 'Calcula tu peso corporal ideal según altura y género.',
  },
  'pace-calculator': {
    name: 'Calculadora de Ritmo de Carrera',
    shortIntro: 'Ritmo, predicción de tiempo final y tabla de parciales por distancia.',
  },
  'protein-intake-calculator': {
    name: 'Calculadora de Proteína Diaria',
    shortIntro: 'Objetivo de proteína en gramos, ajustado a tu peso y meta.',
  },
  'sleep-calculator': {
    name: 'Calculadora de Ciclos de Sueño',
    shortIntro: 'Horas de dormir basadas en ciclos de 90 minutos para despertar descansado.',
  },
  'heart-rate-zone-calculator': {
    name: 'Calculadora de Zonas de Pulso',
    shortIntro: 'Tus cinco zonas de entrenamiento, personalizadas con tu pulso en reposo.',
  },
  'caffeine-calculator': {
    name: 'Calculadora de Cafeína',
    shortIntro: 'Estima la cafeína que aún queda en tu sistema ahora mismo.',
  },
  'steps-to-calories-calculator': {
    name: 'Calculadora de Pasos a Calorías',
    shortIntro: 'Pasos → calorías y distancia, ajustado a tu cuerpo.',
  },

  // ─────────── 🎓 Calculadoras educativas ───────────
  'grade-calculator': {
    name: 'Calculadora de notas',
    shortIntro: 'Calcula tu porcentaje y letra de nota a partir de puntos.',
  },
  'final-grade-calculator': {
    name: 'Calculadora de nota final',
    shortIntro: 'Calcula la nota de examen necesaria para tu objetivo.',
  },
  'gpa-calculator': {
    name: 'Calculadora de GPA',
    shortIntro: 'Calcula tu GPA al instante. Añade cursos, créditos y letras.',
  },

  // ─────────── ⏰ Calculadoras de tiempo ───────────
  'age-calculator': {
    name: 'Calculadora de edad',
    shortIntro: 'Calcula la edad exacta en años, meses y días, o entre dos fechas.',
  },
  'date-difference-calculator': {
    name: 'Calculadora de diferencia de fechas',
    shortIntro: 'Duración exacta entre dos fechas: días, semanas, meses, laborables.',
  },
  'age-difference-calculator': {
    name: 'Calculadora de diferencia de edad',
    shortIntro: 'Calcula la diferencia de edad entre dos personas.',
  },
  'days-countdown-calculator': {
    name: 'Calculadora de cuenta atrás',
    shortIntro: 'Cuenta atrás en vivo a cualquier fecha, o días entre dos fechas.',
  },
  'reading-speaking-time': {
    name: 'Calculadora de tiempo de lectura',
    shortIntro: 'Estima el tiempo de lectura y de locución de cualquier texto.',
  },
  'timezone-converter': {
    name: 'Conversor de zonas horarias',
    shortIntro: 'Convierte horas entre zonas y encuentra horarios cómodos para reuniones.',
  },
  'screen-time-calculator': {
    name: 'Calculadora de Tiempo de Pantalla',
    shortIntro: 'Tus horas diarias de scroll, traducidas a años de vida.',
  },

  // ─────────── 🎨 Herramientas de diseño web ───────────
  'svg-to-image': {
    name: 'Conversor de SVG a PNG',
    shortIntro: 'Convierte SVG a PNG o WebP en el navegador con escala personalizada.',
  },
  'px-to-rem': {
    name: 'Conversor de px a rem/em',
    shortIntro: 'Convierte píxeles a rem y em con tamaño raíz personalizado.',
  },
  'aspect-ratio-calculator': {
    name: 'Calculadora de relación de aspecto',
    shortIntro: 'Calcula el ancho o alto que falta para mantener la relación.',
  },
  'color-contrast-checker': {
    name: 'Comprobador de contraste (WCAG)',
    shortIntro: 'Prueba el contraste según los niveles WCAG AA y AAA.',
  },
  'color-converter': {
    name: 'Conversor de color',
    shortIntro: 'Convierte entre HEX, RGB y HSL con selector visual.',
  },
  'open-graph-generator': {
    name: 'Generador de Open Graph y meta',
    shortIntro: 'Crea etiquetas OG y Twitter Card con vista previa social en vivo.',
  },
  'css-shadow-generator': {
    name: 'Generador de sombra y glassmorfismo',
    shortIntro: 'Ajusta sombras y glassmorfismo visualmente y copia el CSS.',
  },
  'favicon-generator': {
    name: 'Generador de favicon',
    shortIntro: 'Convierte una imagen en favicons 16×16, 32×32 y Apple Touch.',
  },
  'css-clamp-calculator': {
    name: 'Calculadora de CSS clamp',
    shortIntro: 'Genera tamaños de fuente fluidos con CSS clamp().',
  },
  'css-gradient-generator': {
    name: 'Generador de gradientes CSS',
    shortIntro: 'Crea gradientes lineales, radiales y de malla con vista previa en vivo.',
  },
  'image-resizer': {
    name: 'Redimensionador de imágenes',
    shortIntro: 'Redimensiona y comprime imágenes con vista previa del tamaño en vivo.',
  },
  'png-to-webp-converter': {
    name: 'Convertidor de PNG a WebP',
    shortIntro: 'Convierte PNG/JPG a WebP y mira cuánto espacio ahorras.',
  },
  'svg-minifier': {
    name: 'Minificador de SVG',
    shortIntro: 'Elimina comentarios, metadatos y espacios de los archivos SVG.',
  },
  'webp-to-png-converter': {
    name: 'Convertidor de WebP a PNG',
    shortIntro: 'Convierte imágenes WebP a PNG o JPG en tu navegador.',
  },

  // ─────────── 🔒 Herramientas de seguridad ───────────
  'password-strength-checker': {
    name: 'Comprobador de fortaleza de contraseña',
    shortIntro: 'Prueba la fortaleza con análisis de entropía y lista de comprobación.',
  },
  'password-generator': {
    name: 'Generador de contraseñas',
    shortIntro: 'Crea contraseñas fuertes, aleatorias y seguras con un clic.',
  },
  'bcrypt-hash-generator': {
    name: 'Generador de hash Bcrypt',
    shortIntro: 'Calcula el hash y verifica contraseñas con bcrypt o SHA con sal en el navegador.',
  },
  'secret-key-generator': {
    name: 'Generador de claves secretas',
    shortIntro: 'Genera claves API y secretos de alta entropía en tu navegador.',
  },
  'ssh-key-generator': {
    name: 'Generador de claves SSH',
    shortIntro: 'Genera pares de claves SSH RSA o Ed25519 en tu navegador.',
  },
  'hmac-generator': {
    name: 'Generador de HMAC',
    shortIntro: 'Firmas HMAC-SHA256/384/512 vía WebCrypto nativo.',
  },
  'hash-comparator': {
    name: 'Comparador de Hashes',
    shortIntro: 'Comparación en tiempo constante de dos hashes, sin fugas de timing.',
  },
  'password-entropy-checker': {
    name: 'Medidor de Entropía de Contraseñas',
    shortIntro: 'Entropía en bits: la medida honesta de la fuerza de una contraseña.',
  },
  'aes-encrypt-decrypt': {
    name: 'Cifrado y Descifrado AES',
    shortIntro: 'AES-256-GCM en el navegador: autenticado, clave PBKDF2, cero subidas.',
  },

  // ─────────── 💼 Herramientas de negocios ───────────
  'qr-code-generator': {
    name: 'Generador de código QR',
    shortIntro: 'Crea QR para URLs, texto y WiFi. Gratis, sin marca de agua.',
  },
  'freelance-invoice-generator': {
    name: 'Generador de facturas',
    shortIntro: 'Crea, previsualiza e imprime facturas profesionales gratis.',
  },
  'saas-ltv-churn-calculator': {
    name: 'Calculadora de LTV para SaaS',
    shortIntro: 'Modela LTV, churn, recuperación de CAC y LTV:CAC para tu SaaS.',
  },

  // ─────────── 🛠️ Otras herramientas para desarrolladores ───────────
  'cron-parser': {
    name: 'Analizador de expresiones cron',
    shortIntro: 'Convierte cron a texto claro y ve las próximas 5 ejecuciones.',
  },

  // ─────────── 🤖 Herramientas de IA ───────────
  'llm-cost-calculator': {
    name: 'Calculadora de Costos de API LLM',
    shortIntro: 'Costos por petición y mensuales de 17 modelos, lado a lado.',
  },
  'context-window-checker': {
    name: 'Verificador de Ventana de Contexto',
    shortIntro: 'Tokens vs el límite de contexto de cada modelo, con holgura en porcentaje.',
  },
  'json-to-zod': {
    name: 'JSON a Schema Zod',
    shortIntro: 'Pega JSON y obtén un schema Zod tipado — listo para validar salidas de IA.',
  },
  'json-repair': {
    name: 'Reparador de JSON',
    shortIntro: 'Rescata JSON roto de LLMs: truncado, comas finales, fences.',
  },
  'markdown-fence-extractor': {
    name: 'Extractor de Bloques de Código',
    shortIntro: 'Saca todos los bloques ``` de Markdown o respuestas de IA.',
  },
  'prompt-template-filler': {
    name: 'Rellenador de Plantillas de Prompts',
    shortIntro: 'Rellena {{variables}} desde JSON con vista previa en vivo.',
  },
  'openai-tools-builder': {
    name: 'Constructor de Tools JSON de OpenAI',
    shortIntro: 'Definiciones de tools por formulario → JSON limpio para APIs de LLM.',
  },
  'csv-to-finetune-jsonl': {
    name: 'CSV a JSONL de Fine-tuning',
    shortIntro: 'Filas CSV → JSONL formato chat de OpenAI, mapeadas y validadas.',
  },
  'token-visualizer': {
    name: 'Visualizador de Tokens',
    shortIntro: 'Fronteras de token con colores y conteos — ve lo que ven los modelos.',
  },
  'embedding-price-calculator': {
    name: 'Calculadora de Precios de Embeddings',
    shortIntro: 'Costos de embeddings por modelo: dimensiones, $/1M tokens y totales.',
  },

  // ─────────── 🎲 Juegos ───────────
  'dice-roller': {
    name: 'Lanzador de Dados',
    shortIntro: 'Lanza cualquier dado — d4 a d100, varios a la vez, tiradas justas.',
  },
  'coin-flip': {
    name: 'Lanzar Moneda',
    shortIntro: 'Cara o cruz al instante, con conteo acumulado.',
  },
  'wheel-spinner': {
    name: 'Ruleta de Decisiones',
    shortIntro: 'Gira para decidir: nombres, tareas, restaurantes — elección justa.',
  },
  'random-team-generator': {
    name: 'Generador de Equipos Aleatorios',
    shortIntro: 'Divide cualquier lista en equipos justos — rebaraja hasta que te convenza.',
  },

  // ─────────── 🐶 Mascotas ───────────
  'dog-age-calculator': {
    name: 'Calculadora de Edad Canina',
    shortIntro: 'Conversión perro-a-humano según el tamaño de raza — sin el mito del ×7.',
  },

  // ─────────── 🏠 Calculadoras del hogar ───────────
  'paint-calculator': {
    name: 'Calculadora de Pintura',
    shortIntro: 'Galones o litros de pintura por habitación, contando manos y aberturas.',
  },

  // ─────────── 🚀 Nuevas herramientas (2026-09) ───────────
  'hysa-calculator': {
    name: 'Calculadora de Cuenta de Ahorro de Alto Rendimiento',
    shortIntro: 'Proyecta tu ahorro con capitalización diaria y aportaciones mensuales.',
  },
  'cd-calculator': {
    name: 'Calculadora de Depósito a Plazo',
    shortIntro: 'Valor al vencimiento y simulación de penalización por retirada anticipada.',
  },
  'break-even-calculator': {
    name: 'Calculadora de Punto de Equilibrio',
    shortIntro: 'Unidades e ingresos de equilibrio y ratio de margen de contribución.',
  },
  'profit-margin-calculator': {
    name: 'Calculadora de Margen de Beneficio',
    shortIntro: 'Coste más un dato: precio, beneficio, margen y markup al instante.',
  },
  'intermittent-fasting-calculator': {
    name: 'Calculadora de Ayuno Intermitente',
    shortIntro: 'Horarios 16:8 / 18:6 / 20:4 con cuenta atrás y cronología metabólica.',
  },
  'llm-api-cost-calculator': {
    name: 'Comparador de Costos de API LLM',
    shortIntro: 'Compara la factura mensual real de los grandes modelos de IA.',
  },

  // ─────────── 🚀 Nuevas herramientas (2026-09 v4) ───────────
  'roth-ira-calculator': {
    name: 'Calculadora Roth vs Tradicional (IRA)',
    shortIntro: 'Roth vs IRA Tradicional lado a lado: mismos dólares, distinto camino fiscal.',
  },
  'fire-calculator': {
    name: 'Calculadora FIRE',
    shortIntro: 'Tu número FIRE, año de jubilación objetivo y el efecto de la tasa de ahorro.',
  },
  'cac-ltv-calculator': {
    name: 'Calculadora CAC y LTV',
    shortIntro: 'CAC, LTV, meses de recuperación y el indicador LTV:CAC en una pantalla.',
  },
  'flooring-calculator': {
    name: 'Calculadora de Suelos y Azulejos',
    shortIntro: 'Medidas de la habitación + desperdicio → cajas necesarias y presupuesto (ft²/m²).',
  },
  'dog-food-calculator': {
    name: 'Calculadora de Comida para Perros',
    shortIntro: 'Peso + etapa de vida → kcal diarias, tazas y gramos según la etiqueta.',
  },
  'runway-calculator': {
    name: 'Calculadora de Runway para Startups',
    shortIntro: 'Meses de caja restante, fecha de agotamiento y tasa de quema neta mensual.',
  },
  'freelance-rate-calculator': {
    name: 'Calculadora de Tarifas Freelance',
    shortIntro: 'Calcula tu tarifa por hora y por día considerando impuestos, gastos y margen.',
  },
  'docker-run-to-compose': {
    name: 'Conversor de Docker Run a Compose',
    shortIntro: 'Convierte comandos docker run en archivos docker-compose.yml limpios.',
  },
  'mortgage-affordability-calculator': {
    name: 'Calculadora de Vivienda Asequible',
    shortIntro: 'Del sueldo y las deudas al precio máximo de casa, con impuestos y seguro (PITI).',
  },
  'refinance-break-even-calculator': {
    name: 'Calculadora de Equilibrio de Refinanciación',
    shortIntro: 'Cuota vieja vs nueva y gastos de cierre: en cuántos meses se paga sola.',
  },
  'biweekly-mortgage-payment-calculator': {
    name: 'Calculadora de Pago Quincenal',
    shortIntro: 'Pagos quincenales aceleran la hipoteca: interés ahorrado y meses que adelantas.',
  },
  'closing-cost-calculator': {
    name: 'Calculadora de Gastos de Cierre',
    shortIntro: 'Gastos de cierre de comprador y vendedor, y el efectivo necesario al cierre.',
  },
  'property-tax-calculator': {
    name: 'Calculadora de Impuesto Predial',
    shortIntro: 'Valor avaluado × mills: impuesto anual y cuota mensual.',
  },
  'prorated-rent-calculator': {
    name: 'Calculadora de Renta Prorrateada',
    shortIntro: 'Entrada o salida a mitad de mes: renta diaria y mes exacto a pagar.',
  },
  'rental-property-calculator': {
    name: 'Calculadora de Propiedad de Alquiler',
    shortIntro: 'NOI, cap rate, flujo de caja, cash-on-cash y regla del 1% en una pasada.',
  },
  'house-flip-calculator': {
    name: 'Calculadora de House Flip',
    shortIntro: 'Precio máximo por la regla del 70%, beneficio y ROI del flip.',
  },
  'college-savings-calculator': {
    name: 'Calculadora de ahorro universitario',
    shortIntro: 'Proyecta el coste total con inflación educativa y tu meta mensual.',
  },
  '401k-match-calculator': {
    name: 'Calculadora de matching 401(k)',
    shortIntro: 'Cuánto vale el matching anual y cuánto dinero gratis dejas.',
  },
  'social-security-break-even-calculator': {
    name: 'Calculadora de equilibrio del Seguro Social',
    shortIntro: 'Compara cobrar a los 62, la FRA o los 70, con edades de equilibrio.',
  },
  'student-loan-payment-calculator': {
    name: 'Calculadora de préstamos estudiantiles',
    shortIntro: 'Compara cuota e intereses totales en tres planes de reembolso.',
  },
  'car-lease-calculator': {
    name: 'Calculadora de leasing de coche',
    shortIntro: 'Cuota mensual, APR equivalente y coste total del arrendamiento.',
  },
  'ev-charging-cost-calculator': {
    name: 'Calculadora de coste de carga de eléctrico',
    shortIntro: 'Coste por milla y anual de la carga, frente a gasolina.',
  },
  'rent-budget-calculator': {
    name: 'Calculadora de presupuesto de alquiler',
    shortIntro: 'Alquiler asequible según la regla del 30% y el 50/30/20.',
  },
  'christmas-budget-calculator': {
    name: 'Calculadora de presupuesto navideño',
    shortIntro: 'Reparte el total por personas y categorías, con importe por cabeza.',
  },
  'one-rep-max-calculator': {
    name: 'Calculadora de repetición máxima',
    shortIntro: 'Convierte cualquier serie dura en un 1RM estimado con tabla al 50-95%.',
  },
  'race-time-predictor': {
    name: 'Predictor de tiempos de carrera',
    shortIntro: 'Una carrera reciente entra; salen tiempos de 5K a maratón y ritmos.',
  },
  'vo2-max-calculator': {
    name: 'Calculadora de VO2 máx',
    shortIntro: 'Dos métodos de campo: test de Cooper de 12 minutos y cociente cardiaco.',
  },
  'body-surface-area-calculator': {
    name: 'Calculadora de superficie corporal',
    shortIntro: 'BSA en m² por Mosteller y DuBois a partir de talla y peso.',
  },
  'waist-to-height-ratio-calculator': {
    name: 'Calculadora cintura-talla',
    shortIntro: 'Cintura ÷ talla con bandas de riesgo según la regla del 0,5.',
  },
  'steps-to-miles-calculator': {
    name: 'Calculadora de pasos a millas',
    shortIntro: 'Pasos a millas y km según tu talla o zancada medida, con tiempo a pie.',
  },
  'weight-loss-goal-calculator': {
    name: 'Calculadora de meta de pérdida de peso',
    shortIntro: 'Peso objetivo en déficit diario, semanas y fecha de llegada.',
  },
  'fiber-intake-calculator': {
    name: 'Calculadora de ingesta de fibra',
    shortIntro: 'Gramos diarios por edad y sexo, con equivalentes en alimentos.',
  },
  'paypal-fee-calculator': {
    name: 'Calculadora de comisiones de PayPal',
    shortIntro: 'Comisiones de PayPal en ambos sentidos: tu neto y el importe a cobrar.',
  },
  'etsy-fee-calculator': {
    name: 'Calculadora de comisiones de Etsy',
    shortIntro: 'Todas las comisiones de un pedido de Etsy, tu tasa efectiva y el pago neto.',
  },
  'amazon-seller-fee-calculator': {
    name: 'Calculadora de comisiones de vendedor de Amazon',
    shortIntro: 'Comisión + FBA + coste landed: beneficio, margen y ROI por unidad.',
  },
  'square-fee-calculator': {
    name: 'Calculadora de comisiones de Square',
    shortIntro: 'Comisiones de Square en ambos sentidos, con la tasa efectiva por ticket.',
  },
  'youtube-money-calculator': {
    name: 'Calculadora de ingresos de YouTube',
    shortIntro: 'Visualizaciones × rango de RPM: ingresos AdSense a tres bandas.',
  },
  'nps-calculator': {
    name: 'Calculadora de NPS',
    shortIntro: 'Promotores − detractores: tu puntuación NPS con niveles Bain.',
  },
  'conversion-rate-calculator': {
    name: 'Calculadora de tasa de conversión',
    shortIntro: 'Visitantes → conversiones: tasa, CPA y objetivo de mejora.',
  },
  'gym-cost-per-visit-calculator': {
    name: 'Calculadora de coste por visita',
    shortIntro: 'Cuota ÷ visitas reales: coste por sesión y si compensa.',
  },
  'concrete-calculator': {
    name: 'Calculadora de hormigón',
    shortIntro: 'Losa, columna o escalera a yardas cúbicas y sacos de 40/60/80 lb con merma.',
  },
  'mulch-calculator': {
    name: 'Calculadora de acolchado',
    shortIntro: 'Camas y espesor a yardas cúbicas, sacos y coste total.',
  },
  'gravel-calculator': {
    name: 'Calculadora de grava',
    shortIntro: 'Área y espesor a yardas cúbicas y toneladas según la densidad.',
  },
  'drywall-calculator': {
    name: 'Calculadora de pladur',
    shortIntro: 'Paredes y techo a placas, tornillos y masilla, merma incluida.',
  },
  'roofing-calculator': {
    name: 'Calculadora de tejado',
    shortIntro: 'Huella × pendiente a squares, manojos de teja y rollos de subcapa.',
  },
  'fence-calculator': {
    name: 'Calculadora de vallas',
    shortIntro: 'Perímetro y separación a postes, listones y sacos de hormigón.',
  },
  'paver-calculator': {
    name: 'Calculadora de adoquines',
    shortIntro: 'Área a piezas, base triturada y arena de asiento.',
  },
  'deck-board-calculator': {
    name: 'Calculadora de deck',
    shortIntro: 'Área, ancho y junta a tablones, pies lineales y viguetas.',
  },
  'dividend-calculator': {
    name: 'Calculadora de Dividendos',
    shortIntro: 'Estima la renta por dividendos, la rentabilidad y el efecto DRIP a décadas.',
  },
  'dca-calculator': {
    name: 'Calculadora de DCA',
    shortIntro: 'Coste medio por aportación y si la DCA gana al lump sum.',
  },
  'stock-average-calculator': {
    name: 'Calculadora de Promediar a la Baja',
    shortIntro: 'Coste medio ponderado de varios lotes y tu P/L no realizado.',
  },
  'options-profit-calculator': {
    name: 'Calculadora de Beneficio de Opciones',
    shortIntro: 'Equilibrio, máximos de beneficio/pérdida y la curva de pagos al vencimiento.',
  },
  'crypto-profit-calculator': {
    name: 'Calculadora de Beneficio Cripto',
    shortIntro: 'Beneficio neto tras comisiones, ROI y precio objetivo de venta.',
  },
  'treasury-bill-calculator': {
    name: 'Calculadora de Letras del Tesoro',
    shortIntro: 'Precio de compra y las dos convenciones de rendimiento (360/365 días).',
  },
  'bond-yield-calculator': {
    name: 'Calculadora de Rendimiento de Bonos',
    shortIntro: 'Rentabilidad corriente y TIR aproximada al instante.',
  },
  'lottery-odds-calculator': {
    name: 'Calculadora de Probabilidades de Lotería',
    shortIntro: 'Probabilidades exactas de los grandes juegos o de tus propios bombos.',
  },
  'self-employment-tax-calculator': {
    name: 'Calculadora de Autónomos (SECA)',
    shortIntro: 'SECA sobre tu beneficio freelance: 15,3% y la mitad deducible.',
  },
  'depreciation-calculator': {
    name: 'Calculadora de Depreciación',
    shortIntro: 'Lineal, doble decreciente y suma de dígitos, año a año.',
  },
  'mileage-reimbursement-calculator': {
    name: 'Calculadora de Kilometraje IRS',
    shortIntro: 'Millas × tarifa estándar del IRS: 70¢ negocios en 2025.',
  },
  'contractor-vs-employee-calculator': {
    name: 'Calculadora 1099 vs W-2',
    shortIntro: 'El mismo sueldo en cada figura: la diferencia real neta.',
  },
  'gross-up-calculator': {
    name: 'Calculadora de Gross-Up',
    shortIntro: 'Del neto deseado al bruto exacto que hay que pagar.',
  },
  'commute-cost-calculator': {
    name: 'Calculadora de Coste del Trayecto',
    shortIntro: 'Coste anual de ir al trabajo, en dinero y en horas.',
  },
  'smoking-cost-calculator': {
    name: 'Calculadora de Coste del Tabaco',
    shortIntro: 'Gasto semanal, anual y a 10 años, más su valor invertido.',
  },
  'emergency-fund-calculator': {
    name: 'Calculadora de Fondo de Emergencia',
    shortIntro: 'Fija el objetivo de 3-12 meses y cuánto tardarás en llenarlo.',
  },
  'btu-calculator': {
    name: 'Calculadora de BTU',
    shortIntro: 'Dimensiona el aire acondicionado por superficie, techo, sol y ocupantes, en BTU y toneladas.',
  },
  'board-foot-calculator': {
    name: 'Calculadora de pies tablares',
    shortIntro: 'Espesor × ancho × largo ÷ 12: volumen y coste del pedido de madera.',
  },
  'wallpaper-calculator': {
    name: 'Calculadora de papel pintado',
    shortIntro: 'Tiras, rapport y rollos: papel para tus paredes sin quedarte corto.',
  },
  'raised-bed-soil-calculator': {
    name: 'Calculadora de tierra para bancales',
    shortIntro: 'Cuánta tierra necesita tu bancal, con Mel Mix y mezcla económica.',
  },
  'generator-wattage-calculator': {
    name: 'Calculadora de generador',
    shortIntro: 'Marca tus aparatos y obtén vatios de marcha, pico de arranque y potencia recomendada.',
  },
  'pool-volume-calculator': {
    name: 'Calculadora de volumen de piscina',
    shortIntro: 'Galones y litros de piscinas rectangulares, redondas o riñón, con tiempo de recirculación.',
  },
  'coffee-ratio-calculator': {
    name: 'Calculadora de proporción de café',
    shortIntro: 'Agua y café en gramos por método: vertido, prensa, espresso y cold brew.',
  },
  'bread-hydration-calculator': {
    name: 'Calculadora de hidratación de pan',
    shortIntro: 'Agua ÷ harina en porcentaje panadero, con fermento y peso total de masa.',
  },
  'ovulation-calculator': {
    name: 'Calculadora de Ovulación',
    shortIntro: 'Predice tu día de ovulación y tu ventana fértil.',
  },
  'pregnancy-weight-gain-calculator': {
    name: 'Calculadora de Aumento de Peso en el Embarazo',
    shortIntro: 'Rangos IOM y ritmo semanal según tu IMC previo.',
  },
  'diaper-cost-calculator': {
    name: 'Calculadora de Costo de Pañales',
    shortIntro: 'Gasto mensual, anual y total en pañales de un vistazo.',
  },
  'cat-age-calculator': {
    name: 'Calculadora de Edad Felina',
    shortIntro: 'Años gatunos a humanos con la curva 15/24/+4.',
  },
  'cat-food-calculator': {
    name: 'Calculadora de Comida para Gatos',
    shortIntro: 'Kcal diarias, latas y gramos según la etapa vital.',
  },
  'zodiac-sign-calculator': {
    name: 'Calculadora de Signo Zodiacal',
    shortIntro: 'Tu signo por fecha de nacimiento, con elemento y modalidad.',
  },
  'chinese-zodiac-calculator': {
    name: 'Calculadora del Zodiaco Chino',
    shortIntro: 'Animal, elemento y yin-yang por año de nacimiento.',
  },
  'shoe-size-converter': {
    name: 'Conversor de Tallas de Calzado',
    shortIntro: 'US, UK, EU y cm para hombre, mujer y niños.',
  },
  'time-card-calculator': {
    name: 'Calculadora de fichaje',
    shortIntro: 'Horas de fichaje a decimales, total semanal y extras.',
  },
  'business-days-calculator': {
    name: 'Calculadora de días hábiles',
    shortIntro: 'Suma o resta días hábiles a una fecha, saltando festivos.',
  },
  'week-number-calculator': {
    name: 'Calculadora de número de semana',
    shortIntro: 'Semana ISO de cualquier fecha y semanas restantes.',
  },
  'pto-accrual-calculator': {
    name: 'Calculadora de devengo de vacaciones',
    shortIntro: 'Saldo de vacaciones devengadas y previsión de traspaso.',
  },
  'download-time-calculator': {
    name: 'Calculadora de tiempo de descarga',
    shortIntro: 'Tamaño ÷ velocidad (con sobrecarga) → horas, minutos, segundos.',
  },
  'gps-coordinate-converter': {
    name: 'Conversor de coordenadas GPS',
    shortIntro: 'Grados decimales ↔ DMS ↔ DDM con detección de hemisferios.',
  },
  'tire-size-calculator': {
    name: 'Calculadora de neumáticos',
    shortIntro: 'Decodifica la medida y compara el error del velocímetro.',
  },
  'wind-chill-calculator': {
    name: 'Calculadora de sensación térmica',
    shortIntro: 'Temperatura + viento → wind chill según la fórmula JAG/TI.',
  },
  'quadratic-equation-solver': {
    name: 'Solucionador de ecuaciones cuadráticas',
    shortIntro: 'Discriminante, raíces, vértice y forma factorizada de una vez.',
  },
  'slope-calculator': {
    name: 'Calculadora de pendiente',
    shortIntro: 'Dos puntos → pendiente, intersección, ángulo y ecuación.',
  },
  'confidence-interval-calculator': {
    name: 'Calculadora de intervalo de confianza',
    shortIntro: 'IC de media o proporción al 90/95/99% con margen de error.',
  },
  'sample-size-calculator': {
    name: 'Calculadora de tamaño muestral',
    shortIntro: 'Cuántos encuestar según confianza y margen de error.',
  },
  'z-score-calculator': {
    name: 'Calculadora de puntuación z',
    shortIntro: 'Estandariza x, da percentil y valor p, e invierte z→x.',
  },
  'bayes-theorem-calculator': {
    name: 'Calculadora del teorema de Bayes',
    shortIntro: 'Qué significa de verdad un resultado positivo de cribado.',
  },
  'heat-index-calculator': {
    name: 'Calculadora de índice de calor',
    shortIntro: 'Temperatura + humedad → sensación térmica del NWS y riesgo.',
  },
  'dew-point-calculator': {
    name: 'Calculadora de punto de rocío',
    shortIntro: 'Punto de rocío Magnus-Tetens, humedad absoluta y confort.',
  },
  'passphrase-generator': {
    name: 'Generador de frases-contraseña',
    shortIntro: 'Palabras al azar de una lista de 256 con entropía en vivo.',
  },
  'border-radius-generator': {
    name: 'Generador de border-radius',
    shortIntro: 'Cuatro esquinas, sintaxis elíptica y CSS con vista previa.',
  },
  'color-palette-generator': {
    name: 'Generador de paletas de colores',
    shortIntro: 'De un color base a cinco esquemas de armonía con hex/rgb/hsl.',
  },
  'image-compressor': {
    name: 'Compresor de imágenes',
    shortIntro: 'Recodifica JPG/WebP en local con comparación real de tamaños.',
  },
  'username-generator': {
    name: 'Generador de nombres de usuario',
    shortIntro: 'Palabra clave + cuatro estilos, filtrado por longitud.',
  },
  'secret-santa-generator': {
    name: 'Generador de amigo invisible',
    shortIntro: 'Circuito cerrado con exclusiones y revelación de uno en uno.',
  },
  'faq-schema-generator': {
    name: 'Generador de esquema FAQ',
    shortIntro: 'Pega pares de preguntas y respuestas y obtén el marcado FAQPage JSON-LD.',
  },
  'number-to-words-converter': {
    name: 'Conversor de números a palabras',
    shortIntro: 'Escribe cifras en palabras inglesas — billones, decimales y ordinales.',
  },
  'ohms-law-calculator': {
    name: 'Calculadora de la ley de Ohm',
    shortIntro: 'Introduce dos de V, I, R o P y resuelve el resto.',
  },
  'led-resistor-calculator': {
    name: 'Calculadora de resistencia para LED',
    shortIntro: 'Tensión, caída y corriente dentro; valor ideal y E12 fuera.',
  },
  'resistor-color-code-calculator': {
    name: 'Calculadora de código de colores',
    shortIntro: 'Descifra 4-6 bandas o convierte ohmios en colores.',
  },
  'voltage-divider-calculator': {
    name: 'Calculadora de divisor de tensión',
    shortIntro: 'Vin, R1 y R2 a Vout y potencia, o R2 a la inversa.',
  },
  'tone-generator': {
    name: 'Generador de tonos',
    shortIntro: 'Onda senoidal, cuadrada, triangular y diente de 20 Hz a 20 kHz.',
  },
  'bpm-tap-counter': {
    name: 'Contador de BPM por toques',
    shortIntro: 'Toca con la canción y lee el BPM con medidor de consistencia.',
  },
  'delay-time-calculator': {
    name: 'Calculadora de tiempo de delay',
    shortIntro: 'De BPM a milisegundos por figura y tasas LFO.',
  },
  'utm-link-builder': {
    name: 'Generador de enlaces UTM',
    shortIntro: 'URL base más parámetros UTM: enlace de seguimiento listo y avisos de naming.',
  },
  'credit-card-validator': {
    name: 'Validador de tarjetas de crédito',
    shortIntro: 'Suma Luhn más prefijo y longitud por marca, todo en local.',
  },
  'iban-validator': {
    name: 'Validador de IBAN',
    shortIntro: 'Longitud por país del registro oficial más mod-97, en tu navegador.',
  },
  'graphql-formatter': {
    name: 'Formateador de GraphQL',
    shortIntro: 'Embellecer y minificar GraphQL con lexer real: consultas y SDL.',
  },
  'http-status-code-lookup': {
    name: 'Buscador de códigos HTTP',
    shortIntro: 'Los 62 códigos IANA buscables por número o palabra, con soluciones.',
  },
  'css-minifier': {
    name: 'Minificador de CSS',
    shortIntro: 'Compresión segura a nivel de byte: calc(), cadenas y banners /*! intactos.',
  },
  'csv-to-sql-converter': {
    name: 'Conversor de CSV a SQL',
    shortIntro: 'CSV entra, INSERT multivalor por lotes sale — con escape y opciones NULL.',
  },
  'rot13-converter': {
    name: 'Conversor ROT13',
    shortIntro: 'Codifica y decodifica ROT13, con ROT5 y desplazamientos ROT-N.',
  },

}
