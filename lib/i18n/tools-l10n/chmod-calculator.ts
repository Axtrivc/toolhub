/**
 * chmod-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs(client = ChmodCalculatorClient = 自定义 devtool client)
 */
import type { ToolL10n } from '../tool-l10n'

export const chmodCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'command': 'Comando',
      'copyCommand': 'Copiar comando',
      'copyOctal': 'Copiar octal',
      'errInvalidMid': ') o 9 caracteres simbólicos (p. ej. ',
      'errInvalidPrefix': 'Formato inválido — usa 3–4 dígitos octales (0–7, p. ej. ',
      'errInvalidSuffix': ').',
      'execute': 'Ejecución',
      'executeAria': 'ejecución',
      'group': 'Grupo',
      'hintSetgid': 'ejecutar como grupo del archivo',
      'hintSetuid': 'ejecutar como propietario del archivo',
      'hintSticky': 'eliminación restringida',
      'inputPlaceholder': '644 o rw-r--r--',
      'noteAnd': ' y ',
      'noteF1': '🔒 Los dígitos octales son Propietario / Grupo / Otros, cada uno la suma de lectura (4), escritura (2), ejecución (1). Un cuarto dígito inicial codifica los bits especiales: setuid (4), setgid (2), sticky (1) — así que ',
      'noteF2': ' significa setuid + ',
      'noteF3': '. En forma simbólica aparecen sobre el bit de ejecución como ',
      'noteF4': '.',
      'octal': 'Octal',
      'others': 'Otros',
      'owner': 'Propietario',
      'permission': 'Permiso',
      'read': 'Lectura',
      'readAria': 'lectura',
      'symbolic': 'Simbólico',
      'typeHint': 'O escribe octal / simbólico — las casillas se actualizan solas',
      'write': 'Escritura',
      'writeAria': 'escritura',
    },
    formula: {
      formula: 'octal digit = read(4) + write(2) + execute(1)',
      explain: 'Cada uno de los tres grupos (propietario, grupo, otros) forma un dígito octal sumando los permisos activados. rwx = 7, rw- = 6, r-x = 5.',
    },
    useCases: [
      'qué significa chmod 755',
      'conversión entre permisos octales y simbólicos',
      'generador de permisos de archivos Linux',
      'constructor de comandos chmod online',
    ],
    faqs: [
      {
        q: '¿Qué significa chmod 777 y es seguro?',
        a: '777 da permisos de lectura, escritura y ejecución a todos (propietario, grupo y otros). Es práctico para pruebas, pero inseguro en un servidor, porque cualquier usuario puede modificar o ejecutar el archivo. Usa 755 para directorios y scripts, y 644 para archivos normales.',
      },
      {
        q: '¿Cómo se corresponden las letras rwx con los dígitos octales?',
        a: 'Cada posición tiene un valor: lectura = 4, escritura = 2, ejecución = 1. Súmalos por grupo. Así rwx = 7 (4+2+1), r-x = 5 (4+0+1), rw- = 6 (4+2+0). Por tanto 755 significa rwxr-xr-x.',
      },
      {
        q: '¿Cuál es la diferencia entre 755 y 644?',
        a: '755 (rwxr-xr-x) permite al propietario leer, escribir y ejecutar mientras otros solo leen y ejecutan — correcto para directorios y scripts. 644 (rw-r--r--) permite al propietario leer y escribir, y a los demás solo leer — el valor por defecto seguro para archivos estáticos como HTML e imágenes.',
      },
    ],
  },
  de: {
    ui: {
      'command': 'Befehl',
      'copyCommand': 'Befehl kopieren',
      'copyOctal': 'Oktal kopieren',
      'errInvalidMid': ') oder 9 symbolische Zeichen (z. B. ',
      'errInvalidPrefix': 'Ungültiges Format — 3–4 Oktalziffern (0–7, z. B. ',
      'errInvalidSuffix': ').',
      'execute': 'Ausführen',
      'executeAria': 'ausführen',
      'group': 'Gruppe',
      'hintSetgid': 'als Dateigruppe ausführen',
      'hintSetuid': 'als Dateieigentümer ausführen',
      'hintSticky': 'eingeschränktes Löschen',
      'inputPlaceholder': '644 oder rw-r--r--',
      'noteAnd': ' und ',
      'noteF1': '🔒 Die Oktalziffern sind Eigentümer / Gruppe / Sonstige, jeweils die Summe aus Lesen (4), Schreiben (2), Ausführen (1). Eine führende vierte Ziffer codiert die Spezialbits: setuid (4), setgid (2), sticky (1) — also bedeutet ',
      'noteF2': ' setuid + ',
      'noteF3': '. In symbolischer Form erscheinen sie über dem Ausführungs-Bit als ',
      'noteF4': '.',
      'octal': 'Oktal',
      'others': 'Sonstige',
      'owner': 'Eigentümer',
      'permission': 'Berechtigung',
      'read': 'Lesen',
      'readAria': 'lesen',
      'symbolic': 'Symbolisch',
      'typeHint': 'Oder Oktal / Symbolisch eingeben — Kontrollkästchen aktualisieren sich automatisch',
      'write': 'Schreiben',
      'writeAria': 'schreiben',
    },
    formula: {
      formula: 'octal digit = read(4) + write(2) + execute(1)',
      explain: 'Jede der drei Gruppen (Eigentümer, Gruppe, Sonstige) wird zu einer Oktalziffer, indem die aktivierten Berechtigungswerte addiert werden. rwx = 7, rw- = 6, r-x = 5.',
    },
    useCases: [
      'Bedeutung von chmod 755',
      'Umrechnung zwischen oktalen und symbolischen Berechtigungen',
      'Generator für Linux-Dateiberechtigungen',
      'Online-Baukasten für chmod-Befehle',
    ],
    faqs: [
      {
        q: 'Was bedeutet chmod 777 und ist es sicher?',
        a: '777 gibt allen (Eigentümer, Gruppe und Sonstige) Lese-, Schreib- und Ausführungsrechte. Praktisch für Tests, aber auf einem Server unsicher, da jeder Nutzer die Datei ändern oder ausführen kann. Nutze 755 für Verzeichnisse und Skripte und 644 für reguläre Dateien.',
      },
      {
        q: 'Wie entsprechen die rwx-Buchstaben den Oktalziffern?',
        a: 'Jede Position hat einen Wert: Lesen = 4, Schreiben = 2, Ausführen = 1. Addiere sie pro Gruppe. Also rwx = 7 (4+2+1), r-x = 5 (4+0+1), rw- = 6 (4+2+0). 755 bedeutet daher rwxr-xr-x.',
      },
      {
        q: 'Was ist der Unterschied zwischen 755 und 644?',
        a: '755 (rwxr-xr-x) erlaubt dem Eigentümer Lesen, Schreiben und Ausführen, während andere nur lesen und ausführen dürfen — richtig für Verzeichnisse und Skripte. 644 (rw-r--r--) erlaubt dem Eigentümer Lesen und Schreiben, anderen nur Lesen — der sichere Standardwert für statische Dateien wie HTML und Bilder.',
      },
    ],
  },
}
