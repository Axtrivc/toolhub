/**
 * gpa-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = GPACalculatorClient,自定义组件,
 * 经 tui('gpa-calculator', ...) 取本 bundle 的 ui 串)
 */
import type { ToolL10n } from '../tool-l10n'

export const gpaCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'chartTitle': 'Tu GPA en la escala',
      'zoneFailing': 'Reprobado',
      'zoneBelowAvg': 'Bajo el promedio',
      'zoneAvg': 'Promedio',
      'zoneGood': 'Bien',
      'zoneExcellent': 'Excelente',
      'addCourse': '+ Añadir curso',
      'courseName': 'Nombre del curso',
      'credits': 'Créditos',
      'grade': 'Nota',
      'gradePoints': 'Puntos de calificación',
      'note': '📚 Usa la escala estándar de GPA 4.0. Las clases honors/AP pueden ponderar distinto en tu escuela — ajusta la nota al sistema de tu institución.',
      'on4Scale': 'En escala 4.0',
      'remove': 'Quitar',
      'thCourseName': 'Nombre del curso',
      'thCredits': 'Créditos',
      'thGrade': 'Nota',
      'totalCredits': 'Créditos totales',
      'yourGpa': 'Tu GPA',
    },
    formula: {
      formula: 'GPA = Σ ( gradePoint × credits ) / Σ credits',
      explain: 'Promedio de calificaciones. Convierte cada letra a puntos (A = 4,0), multiplica por créditos, suma y divide entre los créditos totales. El GPA ponderado suma puntos por honors/AP.',
    },
    useCases: [
      'calculadora de GPA ponderada por créditos',
      'GPA universitario en escala 4.0',
      'calculadora de GPA de secundaria',
      'GPA acumulado por créditos de cada curso',
    ],
    faqs: [
      { q: '¿Cómo se calcula el GPA en una escala de 4.0?', a: 'Cada letra de calificación se mapea a puntos (A=4, B=3, C=2, D=1). Multiplica los puntos de cada curso por sus horas-crédito, súmalos y divide entre el total de horas-crédito. Una A en un curso de 4 créditos aporta 16 puntos; una C en uno de 3 créditos aporta 6. El promedio ponderado es tu GPA.' },
      { q: '¿Cuál es la diferencia entre GPA ponderado y no ponderado?', a: 'El GPA no ponderado tiene un tope de 4.0 y trata todas las clases por igual. El ponderado da puntos extra por cursos de honores, AP o IB (a menudo hasta 5.0), premiando las clases más difíciles. Las universidades recalculan el GPA a su manera, así que reporta el tipo que usa tu escuela.' },
      { q: '¿Qué GPA necesito para la universidad?', a: 'Varía mucho. El estudiante admitido promedio en escuelas menos selectivas tiene alrededor de 3.0, mientras que las universidades selectivas suelen promediar 3,7–3,9 sin ponderar. El GPA se revisa en el contexto de la rigurosidad de los cursos y los estándares de tu escuela, no como un número aislado.' },
    ],
  },
  de: {
    ui: {
      'chartTitle': 'Dein GPA auf der Skala',
      'zoneFailing': 'Nicht bestanden',
      'zoneBelowAvg': 'Unter dem Durchschnitt',
      'zoneAvg': 'Durchschnitt',
      'zoneGood': 'Gut',
      'zoneExcellent': 'Ausgezeichnet',
      'addCourse': '+ Kurs hinzufügen',
      'courseName': 'Kursname',
      'credits': 'Credits',
      'grade': 'Note',
      'gradePoints': 'Notenpunkte',
      'note': '📚 Nutzt die Standard-GPA-4,0-Skala. Honors/AP-Kurse können an deiner Schule anders gewichtet sein — passe die Note an das System deiner Einrichtung an.',
      'on4Scale': 'Auf 4,0-Skala',
      'remove': 'Entfernen',
      'thCourseName': 'Kursname',
      'thCredits': 'Credits',
      'thGrade': 'Note',
      'totalCredits': 'Credits gesamt',
      'yourGpa': 'Dein GPA',
    },
    formula: {
      formula: 'GPA = Σ ( gradePoint × credits ) / Σ credits',
      explain: 'Notendurchschnitt. Jede Buchstabennote wird in Punkte umgerechnet (A = 4,0), mit Credits multipliziert, summiert und durch die Gesamtcredits geteilt. Gewichtetes GPA gibt Bonus für Honors/AP.',
    },
    useCases: [
      'nach Credit-Punkten gewichteter GPA-Rechner',
      'Universitäts-GPA auf der 4,0-Skala',
      'GPA-Rechner für die Oberstufe',
      'kumulierte GPA nach Credit-Punkten der einzelnen Kurse',
    ],
    faqs: [
      { q: 'Wie wird der GPA auf einer 4,0-Skala berechnet?', a: 'Jede Buchstabennote entspricht Punkten (A=4, B=3, C=2, D=1). Multipliziere die Punkte jedes Kurses mit seinen Credit-Stunden, summiere sie und teile durch die gesamten Credit-Stunden. Ein A in einem 4-Credit-Kurs bringt 16 Punkte; ein C in einem 3-Credit-Kurs bringt 6. Der gewichtete Durchschnitt ist dein GPA.' },
      { q: 'Was ist der Unterschied zwischen gewichtetem und ungewichtetem GPA?', a: 'Der ungewichtete GPA ist auf 4,0 begrenzt und behandelt alle Kurse gleich. Der gewichtete GPA gibt zusätzliche Punkte für Honors-, AP- oder IB-Kurse (oft bis zu 5,0) und belohnt so schwerere Kurse. Universitäten berechnen den GPA auf ihre eigene Weise, also gib die Art an, die deine Schule verwendet.' },
      { q: 'Welchen GPA brauche ich für die Universität?', a: 'Das variiert stark. Der durchschnittliche zugelassene Studierende an weniger selektiven Schulen hat etwa einen 3,0, während selektive Universitäten oft 3,7–3,9 (ungewichtet) im Schnitt aufweisen. Der GPA wird im Kontext der Kursanspruchsniveaus und der Notenstandards deiner Schule betrachtet, nicht als bloße Zahl.' },
    ],
  },
}
