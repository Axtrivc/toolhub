'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool converts between time units — from nanoseconds to years. It uses precise
      factors for small units (seconds, minutes, hours, days) and averages for months and years,
      since those vary in length.
    </p>
    <div>
      <h2>Standard Conversions</h2>
      <ul>
        <li>1 minute = 60 seconds</li>
        <li>1 hour = 60 minutes = 3,600 seconds</li>
        <li>1 day = 24 hours = 1,440 minutes</li>
        <li>1 week = 7 days = 168 hours</li>
        <li>1 year ≈ 365.25 days (accounts for leap years)</li>
      </ul>
    </div>
    <div>
      <h2>Months Are Tricky</h2>
      <p>
        Months vary from 28 to 31 days, so there&apos;s no exact conversion. This tool uses
        the average of <strong>30.44 days per month</strong> (365.25 ÷ 12). For precise date
        math, use the Date Difference Calculator instead.
      </p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Converting running pace (min/km to min/mi)</li>
        <li>Calculating work hours and pay</li>
        <li>Video and audio length planning</li>
        <li>Cooking and baking timers</li>
        <li>Project timeline estimation</li>
      </ul>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta convierte entre unidades de tiempo — desde nanosegundos hasta años. Usa
      factores precisos para las unidades pequeñas (segundos, minutos, horas, días) y promedios
      para meses y años, ya que su duración varía.
    </p>
    <div>
      <h2>Conversiones estándar</h2>
      <ul>
        <li>1 minuto = 60 segundos</li>
        <li>1 hora = 60 minutos = 3.600 segundos</li>
        <li>1 día = 24 horas = 1.440 minutos</li>
        <li>1 semana = 7 días = 168 horas</li>
        <li>1 año ≈ 365,25 días (tiene en cuenta los años bisiestos)</li>
      </ul>
    </div>
    <div>
      <h2>Los meses son complicados</h2>
      <p>
        Los meses varían de 28 a 31 días, así que no hay una conversión exacta. Esta herramienta
        usa el promedio de <strong>30,44 días por mes</strong> (365,25 ÷ 12). Para cálculos de
        fechas precisos, usa la Calculadora de diferencia de fechas.
      </p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Convertir el ritmo de carrera (min/km a min/mi)</li>
        <li>Calcular horas de trabajo y salario</li>
        <li>Planificar la duración de vídeo y audio</li>
        <li>Temporizadores de cocina y repostería</li>
        <li>Estimación de plazos de proyecto</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug rechnet zwischen Zeiteinheiten um — von Nanosekunden bis Jahren. Für
      kleine Einheiten (Sekunden, Minuten, Stunden, Tage) verwendet es genaue Faktoren und für
      Monate sowie Jahre Durchschnittswerte, da deren Länge schwankt.
    </p>
    <div>
      <h2>Standard-Umrechnungen</h2>
      <ul>
        <li>1 Minute = 60 Sekunden</li>
        <li>1 Stunde = 60 Minuten = 3.600 Sekunden</li>
        <li>1 Tag = 24 Stunden = 1.440 Minuten</li>
        <li>1 Woche = 7 Tage = 168 Stunden</li>
        <li>1 Jahr ≈ 365,25 Tage (berücksichtigt Schaltjahre)</li>
      </ul>
    </div>
    <div>
      <h2>Monate sind schwierig</h2>
      <p>
        Monate dauern zwischen 28 und 31 Tagen, daher gibt es keine exakte Umrechnung. Dieses
        Werkzeug verwendet den Durchschnitt von <strong>30,44 Tagen pro Monat</strong> (365,25 ÷
        12). Für genaue Datumsberechnungen verwende stattdessen den Datumsdifferenz-Rechner.
      </p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Lauftempo umrechnen (min/km in min/mi)</li>
        <li>Arbeitsstunden und Lohn berechnen</li>
        <li>Länge von Video und Audio planen</li>
        <li>Timer für Kochen und Backen</li>
        <li>Projektzeitplan schätzen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TimeConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
