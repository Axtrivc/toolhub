/**
 * Herramientas — traducciones al español (es)
 *
 * Estructura: Record<slug, { name, shortIntro }>
 * - Los slug coinciden 1:1 con lib/tools.ts (138 herramientas).
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
    shortIntro: 'Hallar el precio final tras el descuento y cuánto ahorras.',
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
    name: 'Converter a MAYÚSCULAS',
    shortIntro: 'Convierte cualquier texto a MAYÚSCULAS al instante.',
  },
  'lowercase-converter': {
    name: 'Converter a minúsculas',
    shortIntro: 'Convierte cualquier texto a minúsculas al instante.',
  },
  'title-case-converter': {
    name: 'Converter a Tipo Título',
    shortIntro: 'Capitaliza la primera letra de cada palabra para títulos.',
  },
  'sentence-case-converter': {
    name: 'Converter a Tipo Oración',
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
    shortIntro: 'Calcula permutaciones (orden_importa).',
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
    shortIntro: 'Hallar el valor de cualquier percentil de tus datos.',
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
    shortIntro: 'Hallar el MCM y MCD de cualquier conjunto de números.',
  },
  'average-calculator': {
    name: 'Calculadora de promedio',
    shortIntro: 'Calcula media, mediana, suma, mín/máx y rango de cualquier lista.',
  },
  'percentage-calculator': {
    name: 'Calculadora de porcentajes',
    shortIntro: 'Calcula porcentajes, aumentos, disminuciones y descuentos al instante.',
  },

  // ─────────── 💪 Calculadoras de salud ───────────
  'bmi-calculator': {
    name: 'Calculadora de IMC',
    shortIntro: 'Calcula tu Índice de Masa Corporal y tu rango de peso saludable.',
  },
  'calorie-calculator': {
    name: 'Calculadora de calorías',
    shortIntro: 'Hallar tus necesidades calóricas diarias para perder o ganar peso.',
  },
  'tdee-calculator': {
    name: 'Calculadora de TDEE',
    shortIntro: 'Hallar tus calorías diarias (TDEE) para definir, mantener o volumen.',
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
    shortIntro: 'Hallar tu ingesta diaria ideal de agua.',
  },
  'ideal-weight-calculator': {
    name: 'Calculadora de peso ideal',
    shortIntro: 'Hallar tu peso corporal ideal según altura y género.',
  },

  // ─────────── 🎓 Calculadoras educativas ───────────
  'grade-calculator': {
    name: 'Calculadora de notas',
    shortIntro: 'Calcula tu porcentaje y letra de nota a partir de puntos.',
  },
  'final-grade-calculator': {
    name: 'Calculadora de nota final',
    shortIntro: 'Hallar la nota de examen necesaria para tu objetivo.',
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
    shortIntro: 'Hallar la diferencia de edad entre dos personas.',
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

  // ─────────── 🔒 Herramientas de seguridad ───────────
  'password-strength-checker': {
    name: 'Comprobador de fortaleza de contraseña',
    shortIntro: 'Prueba la fortaleza con análisis de entropía y lista de comprobación.',
  },
  'password-generator': {
    name: 'Generador de contraseñas',
    shortIntro: 'Crea contraseñas fuertes, aleatorias y seguras con un clic.',
  },

  // ─────────── 💼 Herramientas de negocios ───────────
  'qr-code-generator': {
    name: 'Generador de código QR',
    shortIntro: 'Crea QR para URLs, texto y WiFi. Gratis, sin marca de agua.',
  },

  // ─────────── 🛠️ Otras herramientas para desarrolladores ───────────
  'cron-parser': {
    name: 'Analizador de expresiones cron',
    shortIntro: 'Convierte cron a texto claro y ve las próximas 5 ejecuciones.',
  },
}
