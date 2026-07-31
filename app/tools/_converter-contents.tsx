import type { ReactNode } from 'react'
import { ToolContent } from '@/lib/content-templates'

/** 8 个单位转换器的原创内容 */

export function DataStorageConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          Digital storage is measured in <strong>bytes</strong> and multiples of bytes. This tool
          converts between binary units (where 1 KB = 1024 bytes), which is how operating systems
          and most software report file sizes and disk space.
        </p>
      }
      sections={[
        {
          heading: 'Binary vs. Decimal Units',
          body: (
            <p>
              There are two conventions. <strong>Binary</strong> (1 KB = 1024 bytes) is used by
              Windows and most software. <strong>Decimal</strong> (1 KB = 1000 bytes) is used by
              storage manufacturers — which is why a &quot;500 GB&quot; hard drive shows up as ~465
              GB on your computer. This tool uses binary units.
            </p>
          ),
        },
        {
          heading: 'Common Conversions',
          body: (
            <ul>
              <li>1 KB = 1,024 bytes</li>
              <li>1 MB = 1,024 KB = 1,048,576 bytes</li>
              <li>1 GB = 1,024 MB ≈ 1.07 billion bytes</li>
              <li>1 TB = 1,024 GB ≈ 1.1 trillion bytes</li>
              <li>1 byte = 8 bits (a bit is a single 0 or 1)</li>
            </ul>
          ),
        },
        {
          heading: 'Real-World Sizes',
          body: (
            <ul>
              <li>Text message: ~1 KB</li>
              <li>Photo (smartphone): 2-5 MB</li>
              <li>MP3 song: 3-5 MB</li>
              <li>HD movie: 1-4 GB</li>
              <li>Smartphone storage: 64-512 GB</li>
              <li>Laptop SSD: 256 GB - 2 TB</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Why does my 256GB phone show less free space?', a: 'Two reasons: the OS reports in binary units (256 decimal GB ≈ 238 binary GB), and the operating system itself takes up several GB. The actual usable space is even less.' },
        { q: 'Internet speed vs. file size?', a: 'Internet speeds are in bits per second (Mbps), but file sizes are in bytes. Divide Mbps by 8 to get MB/s. A 100 Mbps connection downloads at about 12.5 MB/s.' },
      ]}
    />
  )
}

export function TimeConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts between time units — from milliseconds to years. It uses precise
          factors for small units (seconds, minutes, hours, days) and averages for months and years,
          since those vary in length.
        </p>
      }
      sections={[
        {
          heading: 'Standard Conversions',
          body: (
            <ul>
              <li>1 minute = 60 seconds</li>
              <li>1 hour = 60 minutes = 3,600 seconds</li>
              <li>1 day = 24 hours = 1,440 minutes</li>
              <li>1 week = 7 days = 168 hours</li>
              <li>1 year ≈ 365.25 days (accounts for leap years)</li>
            </ul>
          ),
        },
        {
          heading: 'Months Are Tricky',
          body: (
            <p>
              Months vary from 28 to 31 days, so there&apos;s no exact conversion. This tool uses
              the average of <strong>30.44 days per month</strong> (365.25 ÷ 12). For precise date
              math, use the Date Difference Calculator instead.
            </p>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li>Converting running pace (min/km to min/mi)</li>
              <li>Calculating work hours and pay</li>
              <li>Video and audio length planning</li>
              <li>Cooking and baking timers</li>
              <li>Project timeline estimation</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'How many hours in a year?', a: '8,766 hours on average (365.25 × 24). A leap year has 8,784 hours; a common year has 8,760.' },
      ]}
    />
  )
}

export function NumeralSystemConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts numbers between four bases: <strong>binary</strong> (base 2),{' '}
          <strong>octal</strong> (base 8), <strong>decimal</strong> (base 10), and{' '}
          <strong>hexadecimal</strong> (base 16). These are the number systems used in computing.
        </p>
      }
      sections={[
        {
          heading: 'Why Different Bases Exist',
          body: (
            <ul>
              <li><strong>Decimal</strong> — what humans use daily (10 fingers)</li>
              <li><strong>Binary</strong> — how computers store data (on/off electrical signals)</li>
              <li><strong>Hexadecimal</strong> — compact way to represent binary (4 bits = 1 hex digit)</li>
              <li><strong>Octal</strong> — historical Unix file permissions, less common today</li>
            </ul>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li><strong>Hex colors</strong> in web design: #FFFFFF = 255,255,255 in decimal</li>
              <li><strong>Memory addresses</strong> shown in hex by debuggers</li>
              <li><strong>File permissions</strong> on Unix: chmod 755 (octal)</li>
              <li><strong>Network masks</strong> and MAC addresses</li>
              <li><strong>Binary logic</strong> in electronics and computer science class</li>
            </ul>
          ),
        },
        {
          heading: 'Quick Reference',
          body: (
            <ul>
              <li>Decimal 255 = FF hex = 11111111 binary</li>
              <li>Decimal 16 = 10 hex = 10000 binary</li>
              <li>Decimal 8 = 10 octal = 1000 binary</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Why do programmers use hexadecimal?', a: 'Because one hex digit represents exactly 4 binary digits (a "nibble"). This makes long binary numbers much shorter and easier to read. FF is more compact than 11111111.' },
      ]}
    />
  )
}

export function AngleConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts between angle units: <strong>degrees</strong>,{' '}
          <strong>radians</strong>, <strong>gradians</strong>, arc minutes, arc seconds, and full
          revolutions.
        </p>
      }
      sections={[
        {
          heading: 'Key Conversions',
          body: (
            <ul>
              <li>1 revolution = 360° = 2π radians ≈ 6.283 rad</li>
              <li>1 degree = π/180 radians ≈ 0.01745 rad</li>
              <li>1 radian ≈ 57.2958°</li>
              <li>1 degree = 60 arc minutes = 3,600 arc seconds</li>
              <li>1 gradian = 0.9° (a full circle = 400 gradians)</li>
            </ul>
          ),
        },
        {
          heading: 'When You\'ll Need This',
          body: (
            <ul>
              <li><strong>Math class</strong> — trigonometry uses radians, geometry uses degrees</li>
              <li><strong>Programming</strong> — most math functions (sin, cos) take radians</li>
              <li><strong>Astronomy</strong> — very small angles in arc seconds</li>
              <li><strong>Navigation</strong> — bearings in degrees</li>
              <li><strong>Surveying</strong> — some countries use gradians (gon)</li>
            </ul>
          ),
        },
        {
          heading: 'Why Radians?',
          body: (
            <p>
              Radians are the &quot;natural&quot; angle unit because they relate directly to circle
              geometry: an angle of 1 radian cuts an arc equal to the radius. Calculus formulas
              (derivatives of sine and cosine) only work cleanly in radians.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'How do I convert degrees to radians in code?', a: 'Multiply degrees by π/180, or use the built-in function (e.g., radians() in Python, Math.PI/180 in JavaScript). Most languages also have a degrees-to-radians helper.' },
      ]}
    />
  )
}

export function FuelEconomyConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts between fuel economy units: <strong>MPG</strong> (miles per gallon, US
          and UK) and <strong>L/100km</strong> (liters per 100 km). These are the two main systems
          for measuring vehicle fuel efficiency.
        </p>
      }
      sections={[
        {
          heading: 'The Inverse Relationship',
          body: (
            <p>
              MPG and L/100km work in opposite directions. Higher MPG is better (more miles per
              gallon); lower L/100km is better (less fuel for the same distance). This is why the
              conversion isn&apos;t a simple multiplier — it&apos;s a reciprocal.
            </p>
          ),
        },
        {
          heading: 'Approximate Conversions',
          body: (
            <ul>
              <li>30 MPG (US) ≈ 7.8 L/100km</li>
              <li>40 MPG (US) ≈ 5.9 L/100km</li>
              <li>50 MPG (US) ≈ 4.7 L/100km</li>
              <li>10 L/100km ≈ 23.5 MPG (US)</li>
              <li>6 L/100km ≈ 39 MPG (US)</li>
            </ul>
          ),
        },
        {
          heading: 'Why US and UK MPG Differ',
          body: (
            <p>
              The US gallon (3.785 liters) is smaller than the UK imperial gallon (4.546 liters), so
              a UK MPG number is about 20% higher for the same efficiency. Always check which gallon
              a source uses before comparing.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Which is more efficient, 40 MPG or 5 L/100km?', a: '5 L/100km is better — it equals about 47 MPG (US). 40 MPG equals about 5.9 L/100km.' },
      ]}
    />
  )
}

export function PressureConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts between pressure units: <strong>pascals</strong>,{' '}
          <strong>bar</strong>, <strong>PSI</strong>, <strong>atmospheres</strong>, and{' '}
          <strong>torr</strong>. Pressure matters in everything from tire inflation to weather
          forecasting.
        </p>
      }
      sections={[
        {
          heading: 'Common Conversions',
          body: (
            <ul>
              <li>1 atmosphere (atm) = 101,325 Pa = 1.01325 bar = 14.696 PSI = 760 torr</li>
              <li>1 bar = 100,000 Pa = 14.5038 PSI</li>
              <li>1 PSI = 6,894.76 Pa = 0.0689 bar</li>
              <li>1 torr ≈ 133.322 Pa (roughly 1 mmHg)</li>
            </ul>
          ),
        },
        {
          heading: 'Real-World Pressures',
          body: (
            <ul>
              <li>Car tire: 30-35 PSI (~2-2.4 bar)</li>
              <li>Bicycle tire: 40-120 PSI depending on type</li>
              <li>Atmospheric at sea level: 1 atm = 1013 mbar</li>
              <li>Scuba tank (full): ~200 bar</li>
              <li>Jet cabin at altitude: ~0.75 atm</li>
            </ul>
          ),
        },
        {
          heading: 'Why So Many Units',
          body: (
            <p>
              Different fields adopted different units historically. Meteorology uses millibars
              (hectopascals); tire pressure in the US uses PSI; medicine uses mmHg (torr) for blood
              pressure; engineering and science use pascals.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'What PSI should my car tires be?', a: 'Check the sticker inside the driver\'s door jamb — most cars are 30-35 PSI (2-2.4 bar). The number on the tire sidewall is the maximum, not the recommended pressure.' },
      ]}
    />
  )
}

export function EnergyConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts between energy units: <strong>joules</strong>,{' '}
          <strong>calories</strong>, <strong>kilowatt-hours</strong>, <strong>BTU</strong>, and
          electron-volts. Energy appears in nutrition, electricity, physics, and heating.
        </p>
      }
      sections={[
        {
          heading: 'The Calorie Confusion',
          body: (
            <p>
              Food labels use <strong>Calories</strong> with a capital C, which actually means{' '}
              <strong>kilocalories</strong> (kcal). One food Calorie = 1,000 small calories = 4,184
              joules. So a &quot;200 Calorie&quot; snack contains 200,000 small calories — but
              everyone means kcal when discussing food.
            </p>
          ),
        },
        {
          heading: 'Key Conversions',
          body: (
            <ul>
              <li>1 kilocalorie (kcal) = 4.184 kilojoules (kJ)</li>
              <li>1 kilowatt-hour (kWh) = 3,600,000 joules = 860.4 kcal</li>
              <li>1 BTU ≈ 1,055 joules (energy to heat 1 lb of water by 1°F)</li>
              <li>1 electron-volt (eV) = 1.602 × 10⁻¹⁹ joules (subatomic scale)</li>
            </ul>
          ),
        },
        {
          heading: 'Real-World Energy',
          body: (
            <ul>
              <li>Banana: ~105 kcal = 439 kJ</li>
              <li>1 kWh of electricity ≈ 860 kcal</li>
              <li>Running a 60W bulb for 1 hour: 216,000 joules</li>
              <li>Average daily human diet: 2,000 kcal = 8,368 kJ</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Why does my electric bill use kWh?', a: 'A watt is joules per second, so multiplying by hours gives total energy. 1 kWh = using 1,000 watts for 1 hour. It\'s a convenient unit for household electricity.' },
      ]}
    />
  )
}

export function FrequencyConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts between frequency units: <strong>hertz</strong>, kilohertz, megahertz,
          gigahertz, and rotations per minute (RPM). Frequency measures how often something repeats
          per second.
        </p>
      }
      sections={[
        {
          heading: 'Key Conversions',
          body: (
            <ul>
              <li>1 kilohertz (kHz) = 1,000 Hz</li>
              <li>1 megahertz (MHz) = 1,000,000 Hz</li>
              <li>1 gigahertz (GHz) = 1,000 MHz = 1 billion Hz</li>
              <li>1 RPM = 1/60 Hz ≈ 0.0167 Hz</li>
            </ul>
          ),
        },
        {
          heading: 'Frequencies You Encounter',
          body: (
            <ul>
              <li><strong>Heart rate:</strong> 60-100 beats/min = 1-1.7 Hz</li>
              <li><strong>Audio (human hearing):</strong> 20 Hz - 20 kHz</li>
              <li><strong>AM radio:</strong> 530-1710 kHz</li>
              <li><strong>FM radio:</strong> 88-108 MHz</li>
              <li><strong>WiFi:</strong> 2.4 GHz or 5 GHz</li>
              <li><strong>CPU clock speed:</strong> 2-5 GHz in modern computers</li>
            </ul>
          ),
        },
        {
          heading: 'Why Frequencies Matter',
          body: (
            <p>
              In electronics and communications, the frequency band determines what a signal can do.
              Lower frequencies (AM radio) travel farther but carry less data; higher frequencies
              (WiFi, 5G) carry more data but over shorter distances. This trade-off shapes the entire
              design of wireless systems.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'How do I convert RPM to Hz?', a: 'Divide RPM by 60. A motor spinning at 3,600 RPM runs at 60 Hz. This is why AC power in the US is 60 Hz — generators spin at 3,600 RPM.' },
      ]}
    />
  )
}
