/**
 * Herramientas — traducciones al español (es)
 *
 * Estructura: Record<slug, { name, shortIntro }>
 * - Los slug coinciden 1:1 con lib/tools.ts (225 herramientas).
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
    shortIntro: 'Estima el impuesto (tipos corto vs largo plazo).',
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
    shortIntro: 'Dinero de gasolina para cualquier viaje: ida, vuelta y prorrateo por persona.',
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
    shortIntro: 'Estima el neto tras impuesto federal, FICA y deducciones pre-impuesto.',
  },
  'wedding-budget-calculator': {
    name: 'Calculadora de Presupuesto de Boda',
    shortIntro: 'Convierte tu total en montos por categoría con porcentajes típicos.',
  },
  'amortization-table-generator': {
    name: 'Generador de Tabla de Amortización',
    shortIntro: 'Calendario pago por pago con saldo corrido y exportación a CSV.',
  },
  'car-cost-calculator': {
    name: 'Calculadora de Costo de Auto',
    shortIntro: 'Costo total de propiedad: combustible, seguro, mantenimiento, depreciación y financiamiento.',
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
    shortIntro: 'Crea JWT firmados localmente — combina con nuestro decoder para pruebas.',
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
    shortIntro: '301, cambios de dominio, HTTPS y reglas canónicas sin lágrimas.',
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
    shortIntro: 'Desplaza los tiempos de los subtítulos en cualquier cantidad y elimina el formato.',
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
    shortIntro: 'Calcula tus calorías diarias (TDEE) para definir, mantener o volumen.',
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
    shortIntro: 'Horas de dormir basadas en ciclos de 90 minutos para despertar fresco.',
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
    name: 'Calculadora de cuenta regresiva',
    shortIntro: 'Cuenta regresiva en vivo a cualquier fecha, o días entre dos fechas.',
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
    shortIntro: 'Genera y verifica contraseñas con bcrypt o SHA con sal en el navegador.',
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
    shortIntro: 'Lanza cualquier dado — d4 a d100, varios a la vez, tiros justos.',
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
    shortIntro: 'Divide cualquier lista en equipos justos — rebaraja hasta que convenza.',
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

}
