# Dokumentation
Um die Webseite aktuell zu halten, müssen die Inhalte im Ordner content aktualisiert werden. Andere Dateien dürfen zur regulären Wartung nicht verändert
werden.

Für die Bearbeitung der Seiteninhalte wird das Programm Visual Studio Code (VSCode) empfohlen, welches [hier](https://code.visualstudio.com/download) heruntergeladen werden kann. In diesem
Programm gibt es Syntax-Highlighting, welches das korrekte Bearbeiten der Dateien vereinfacht. Die Dateien können aber auch in anderen, bereits vorinstallierten Programmen wie beispielsweise dem Editor geöffnet werden. Hierfür
muss die JavaScript-Datei (erkennbar an der Endung ```.js```) rechtsgeklickt werden und dann über ```Öffnen mit > Editor``` im Editor geöffnet werden.

In den folgenden Kapiteln wird die Wartung der einzelnen Seiten erläutert.

## JOBS
Dateipfad: ```ok-webseite > content > jobsContent.js```

Anzeigeort: Ausbildung

> [!WARNING]
> Die ersten Zeilen bis zur Initialisierung der Liste ```jobsContent``` dürfen nicht verändert werden!
> Die Zeile, in welcher ```jobsContent``` initialisiert wird, sieht folgendermaßen aus: <br>
> ```javascript
> const jobsContent = [
> ```
> Die letzte Zeile darf ebenfalls nicht verändert werden. In der letzten Zeile sollte immer eine schließende, eckige Klammer stehen (```]```).

In diese Liste können aktuelle Job-, Ausbildungs- oder Praktikumsangebote aufgelistet werden. Das Format eines Angebots ist das Folgende:

```javascript
new Job (
  "Titel",
  "Beschreibung des Angebots",
  "Dauer des Angebots (z.B. wie lange die Ausbildung dauert)",
  "Ort (z.B. wo die Ausbildung stattfindet)",
  "Benötigte Skills"
)
```

Hier ist es wichtig, dass alle Attribute mit Anführungszeichen umgeben sind und mit einem Komma voneinander getrennt werden.

Das Attribut “Benötigte Skills” muss nicht angegeben werden. In diesem Fall sollte an der entsprechenden Stelle nur ```""``` geschrieben werden. Es ist wichtig, dass alle Attribute gelistet sind.

#### ❌ So nicht!
```javascript
new Job (
  "Mediengestalter",
  "Diese Ausbildung ist ...",
  "3 Jahre",
  "Wernigerode"
)
```
Der Inhalt für die Skills fehlt. Das Angebot wird **nicht korrekt** angezeigt werden.

#### ✅ Das ist richtig!
```javascript
new Job (
  "Mediengestalter",
  "Diese Ausbildung ist ...",
  "3 Jahre",
  "Wernigerode",
  ""
)
```
Der Inhalt für die Skills ist zwar leer, jedoch trotzdem vorhanden. Das Angebot wird **korrekt** angezeigt.

Die “Bewerben”-Knöpfe auf den Angeboten öffnen das Standard-Email-Programm mit einer neuen Email an bewerbung@ok-wernigerode.de und dem Betreff “Bewerbung: *[Angebot-Titel]*”.

> [!NOTE]
> Wenn die Stelle für “Benötigte Skills” leer gelassen wird, wird an dieser Stelle “Keine speziellen Anforderungen” angezeigt.

#### ANMERKUNGEN ZUM FORMAT DER ATTRIBUTE
Sollten nicht-optionale Attribute leer gelassen (```""```) werden, wird an der entsprechenden Stelle ```??``` angezeigt.

Nicht optionale Attribute sind: Titel, Beschreibung, Dauer und Ort.


## AKTUELLES
Dateipfad: ```ok-webseite > content > newsContent.js```

Anzeigeort: Home

> [!WARNING]
> Die ersten Zeilen bis zur Initialisierung der Liste ```newsContent``` dürfen nicht verändert werden!
> Die Zeile, in welcher ```newsContent``` initialisiert wird, sieht folgendermaßen aus: <br>
> ```javascript
> const newsContent = [
> ```
> Die letzte Zeile darf ebenfalls nicht verändert werden. In der letzten Zeile sollte immer eine schließende, eckige Klammer stehen (```]```).

In diese Liste können aktuelle Events oder Projekte aufgelistet werden. Das Format eines Events oder Projekts ist das Folgende:

```javascript
new News (
  "Titel",
  "Datum des Events/Projekts",
  "Beschreibung",
  "Link zu einem Bild"
)
```

Hier ist es wichtig, dass alle Attribute mit Anführungszeichen umgeben sind und mit einem Komma voneinander getrennt werden.

Falls kein Bild zu dem Event/Projekt vorliegt, muss an der entsprechenden Stelle nur ```""``` geschrieben werden. Es ist wichtig, dass das Attribut trotzdem gelistet wird.

#### ❌ So nicht!
```javascript
new News (
  "Filmfest",
  "15.04.2025",
  "Bei diesem Fest werden ..."
)
```
Der Link für das Foto fehlt. Das Event wird **nicht korrekt** angezeigt werden.

#### ✅ Das ist richtig!
```javascript
new News (
  "Filmfest",
  "15.04.2025",
  "Bei diesem Fest werden ...",
  ""
)
```
Für das Event liegt zwar kein Bild vor, jedoch ist das Link-Attribut trotzdem vorhanden. Das Event wird **korrekt** angezeigt.

Wenn für das Event/Projekt ein Bild vorliegt, wird das Bild an den verfügbaren Platz angepasst und zentriert. Sollte das Bild kein 1:1-Seitenverhältnis haben, wird es zugeschnitten. Die Ränder um die Bildmitte werden abgeschnitten, um ein 1:1-Seitenverhältnis zu erreichen.

> [!NOTE]
> Wenn für das Event kein Bild vorliegt, wird ein Platzhalter erstellt, der die ersten Zeichen der ersten zwei Wörter des Titels anzeigt.
>
> Für das fiktionale Beispiel-Event „Filmfest Schierke“ würde dementsprechend „FS“ angezeigt werden.

Der Dateipfad für Bilder von aktuellen Projekten/Events ist der folgende:

```content > img > news```

#### ANMERKUNGEN ZUM FORMAT DER ATTRIBUTE
Das Datum kann sowohl mit als auch ohne führende Nullen angegeben werden, ebenso ist die Kürzung des Jahres auf zwei Stellen möglich.

**Beispiele für akzeptierte Formate:**
* 01.01.2025
* 1.1.25
* 1.1.2025

**Beispiele für nicht akzeptierte Formate**
* 01/01/2025
* 01.01.025
* 2025.01.01
* 2025-01-01

Falls das Datum nicht dem akzeptierten Format entspricht, wird an der Stelle des Datums ```??.??.????``` angezeigt.

Sollten nicht-optionale Attribute leer gelassen (```""```) werden, wird an der entsprechenden Stelle ```??``` angezeigt. Sollte auch kein Bild vorliegen, wird in dem Platzhalter lediglich ein ```?``` angezeigt.

Nicht optionale Attribute sind: Titel, Datum und Beschreibung.

## PROJEKTE
Dateipfad: ```ok-webseite > content > projectsContent.js```

Anzeigeort: Projekte

> [!WARNING]
> Die ersten Zeilen bis zur Initialisierung der Liste ```projectsContent``` dürfen nicht verändert werden!
> Die Zeile, in welcher ```projectsContent``` initialisiert wird, sieht folgendermaßen aus: <br>
> ```javascript
> const projectsContent = [
> ```
> Die letzte Zeile darf ebenfalls nicht verändert werden. In der letzten Zeile sollte immer eine schließende, eckige Klammer stehen (```]```).

In diese Liste können aktuelle Projekte vorgestellt werden. Das Format eines Projekts ist das Folgende:

```javascript
new Project (
  "Titel",
  "Beschreibung des Projekts",
  "Link zu einer (externen) Webseite des Projekts",
  "Bild"
)
```

Hier ist es wichtig, dass alle Attribute mit Anführungszeichen umgeben sind und mit einem Komma voneinander getrennt werden.

Das Attribut “Bild” muss nicht angegeben werden. In diesem Fall sollte an der entsprechenden Stelle nur ```""``` geschrieben werden. Es ist wichtig, dass alle Attribute trotzdem gelistet sind.

#### ❌ So nicht!
```javascript
new Project (
  "Kurzfilm: Harz",
  "Dieser Kurzfilm zeigt ...",
  "www.harz-view.de"
)
```
Der Inhalt für das Bild fehlt. Das Projekt wird **nicht korrekt** angezeigt werden.

#### ✅ Das ist richtig!
```javascript
new Project (
  "Kurzfilm: Harz",
  "Dieser Kurzfilm zeigt ...",
  "www.harz-view.de",
  ""
)
```
Der Inhalt für das Bild ist zwar leer, jedoch trotzdem vorhanden. Das Projekt wird **korrekt** angezeigt.

Der Dateipfad für Bilder von Projekten ist der folgende:

```content > img > news```

#### ANMERKUNGEN ZUM FORMAT DER ATTRIBUTE
Sollten nicht-optionale Attribute leer gelassen (```""```) werden, wird an der entsprechenden Stelle ```??``` angezeigt.

Wenn der Link nicht angegeben wird, ist die Zieladresse ein ```#```, was auf die aktuelle Seite leitet.

Nicht optionale Attribute sind: Titel, Beschreibung und Link.


## PROGRAMM
Dateipfad: ```ok-webseite > content > programContent.js```

Anzeigeort: Programm

> [!WARNING]
> Die ersten Zeilen bis zur Initialisierung der Liste ```programContent``` dürfen nicht verändert werden!
> Die Zeile, in welcher ```programContent``` initialisiert wird, sieht folgendermaßen aus: <br>
> ```javascript
> const programContent = [
> ```
> Die letzte Zeile darf ebenfalls nicht verändert werden. In der letzten Zeile sollte immer eine schließende, eckige Klammer stehen (```]```).

In dieser Liste kann das aktuelle Programm aufgelistet werden. Das Format eines Programmpunkts ist das Folgende:

```javascript
new ProgramItem (
  "Titel des Programmpunkts",
  "Dauer in Minuten",
  [
    "Liste mit Datum und Uhrzeit der Ausstrahlung",
    "Liste mit Datum und Uhrzeit der Ausstrahlung"
  ]
)
```

Hier ist es wichtig, dass alle Attribute mit Anführungszeichen umgeben sind und mit einem Komma voneinander getrennt werden.

Hier darf keines der Attribute weg- oder leergelassen (```""```) werden. Es ist wichtig, dass alle Attribute gelistet sind.

#### ❌ So nicht!
```javascript
new ProgramItem (
  "Lokales im Fokus",
  [
    "2025-06-23 - 10:00",
    "2025-06-24 - 14:00" 
  ]
)
```
Der Inhalt für die Dauer fehlt. Der Programmpunkt wird **nicht korrekt** angezeigt werden.

#### ✅ Das ist richtig!
```javascript
new ProgramItem (
  "Lokales im Fokus",
  "60",
  [
    "2025-06-23 - 10:00",
    "2025-06-24 - 14:00" 
  ]
)
```
Alle Inhalte sind vorhanden und nicht leer. Der Programmpunkt wird **korrekt** angezeigt.

#### ANMERKUNGEN ZUM FORMAT DER ATTRIBUTE
Sollten nicht-optionale Attribute leer gelassen (```""```) werden, wird an der entsprechenden Stelle ```??``` angezeigt.

> [!WARNING]
> Es ist sehr wichtig, dass in der Liste der Ausstrahlungszeitpunkte das Format eingehalten wird.
>
> Das Format sieht **IMMER** so aus:
>
> ```YYYY-MM-DD - HH:mm```
>
> Beispiel: ```2025-06-23 - 10:00```

Alle Attribute sind nicht optional.


## SPONSOREN
Dateipfad: ```ok-webseite > content > sponsorsContent.js```

Anzeigeort: Home

> [!WARNING]
> Die ersten Zeilen bis zur Initialisierung der Liste ```sponsorsContent``` dürfen nicht verändert werden!
> Die Zeile, in welcher ```sponsorsContent``` initialisiert wird, sieht folgendermaßen aus: <br>
> ```javascript
> const sponsorsContent = [
> ```
> Die letzte Zeile darf ebenfalls nicht verändert werden. In der letzten Zeile sollte immer eine schließende, eckige Klammer stehen (```]```).

In dieser Liste werden alle Sponsoren des Offenen Kanals angegeben. Das Format eines Sponsors ist das Folgende:

```javascript
new Sponsor (
  "Name",
  "Dateiname des Logos",
  "Link zur Webseite des Sponsors"
)
```

Hier ist es wichtig, dass alle Attribute mit Anführungszeichen umgeben sind und mit einem Komma voneinander getrennt werden.

Die Attribute „Link“ und „Dateiname des Logos“ müssen nicht angegeben werden. In diesem Fall sollte an der entsprechenden Stelle nur ```""``` geschrieben werden. Es ist wichtig, dass alle Attribute trotzdem gelistet sind.

#### ❌ So nicht!
```javascript
new Sponsor (
  "Sponsor Firma",
  "Firma_Logo"
)
```
Der Link zu der Webseite des Sponsors fehlt. Der Sponsor wird **nicht korrekt** angezeigt werden.

#### ✅ Das ist richtig!
```javascript
new Sponsor (
  "Sponsor Firma",
  "Firma_Logo",
  "www.firma.de"
)
```
Alle Inhalte sind vorhanden. Der Sponsor wird **korrekt** angezeigt.

Der Dateipfad für die Logos der Sponsoren ist der folgende:

```content > img > sponsors```

#### ANMERKUNGEN ZUM FORMAT DER ATTRIBUTE
Falls kein Logo des Sponsors vorliegt, wird nur der Name angezeigt.

Sollten nicht-optionale Attribute leer gelassen (```""```) werden, wird an der entsprechenden Stelle ```??``` angezeigt.

Wenn der Link nicht angegeben wird, ist die Zieladresse ein ```#```, was auf die aktuelle Seite leitet.

Nicht optionale Attribute sind: Name.


## GALERIE
Dateipfad: ```ok-webseite > content > imagesContent.js```

Anzeigeort: Home

> [!WARNING]
> Die ersten Zeilen bis zur Initialisierung der Liste ```imagesContent``` dürfen nicht verändert werden!
> Die Zeile, in welcher ```imagesContent``` initialisiert wird, sieht folgendermaßen aus: <br>
> ```javascript
> const imagesContent = [
> ```
> Die letzte Zeile darf ebenfalls nicht verändert werden. In der letzten Zeile sollte immer eine schließende, eckige Klammer stehen (```]```).

In diese Liste werden die Bilder für die Galerie angegeben. Das Format eines Bildes ist das Folgende:

```javascript
new Image (
  "Titel",
  "Dateiname"
)
```

Hier ist es wichtig, dass alle Attribute mit Anführungszeichen umgeben sind und mit einem Komma voneinander getrennt werden.

Das Attribut „Titel“ muss nicht angegeben werden. In diesem Fall sollte an der entsprechenden Stelle nur ```""``` geschrieben werden. Es ist wichtig, dass alle Attribute trotzdem gelistet sind.

#### ❌ So nicht!
```javascript
new Image (
  "Studio.png"
)
```
Der Titel des Bildes fehlt. Das Bild wird **nicht korrekt** angezeigt werden.

#### ✅ Das ist richtig!
```javascript
new Image (
  "Im Studio können alle...",
  "Studio.png"
)
```
Alle Inhalte sind vorhanden. Das Bild wird **korrekt** angezeigt.

Der Dateipfad für die Bilder ist der folgende:

```content > img > home```

#### ANMERKUNGEN ZUM FORMAT DER ATTRIBUTE
Falls kein Titel vorliegt, wird das Bild ohne Titel in die Galerie eingefügt.

Sollten nicht-optionale Attribute leer gelassen (```""```) werden, wird an der entsprechenden Stelle ```??``` angezeigt.

Wenn der Link nicht angegeben wird, ist die Zieladresse ein ```#```, was auf die aktuelle Seite leitet.

Nicht optionale Attribute sind: Dateiname.


## TEAM
Dateipfad: ```ok-webseite > content > teamContent.js```

Anzeigeort: Home

> [!WARNING]
> Die ersten Zeilen bis zur Initialisierung der Liste ```teamContent``` dürfen nicht verändert werden!
> Die Zeile, in welcher ```teamContent``` initialisiert wird, sieht folgendermaßen aus: <br>
> ```javascript
> const teamContent = [
> ```
> Die letzte Zeile darf ebenfalls nicht verändert werden. In der letzten Zeile sollte immer eine schließende, eckige Klammer stehen (```]```).

In diese Liste werden die Teammitglieder des Offenen Kanals angegeben. Das Format eines Teammitglieds ist das Folgende:

```javascript
new TeamMember (
  "Name",
  "Rolle",
  "Dateiname eines Fotos",
  "Gruppe"
)
```

Hier ist es wichtig, dass alle Attribute mit Anführungszeichen umgeben sind und mit einem Komma voneinander getrennt werden.

Das Attribut „Dateiname“ muss nicht angegeben werden. In diesem Fall sollte an der entsprechenden Stelle nur ```""``` geschrieben werden. Es ist wichtig, dass alle Attribute trotzdem gelistet sind.

#### ❌ So nicht!
```javascript
new TeamMember (
  "Vorname Nachname",
  "Rolle",
  ""
)
```
Der Gruppe fehlt. Das Teammitglied wird **nicht korrekt** angezeigt werden.

#### ✅ Das ist richtig!
```javascript
new TeamMember (
  "Vorname Nachname",
  "Rolle",
  "",
  "Vorstand"
)
```
Alle Inhalte sind vorhanden. Das Teammitglied wird **korrekt** angezeigt.

Der Dateipfad für Bilder von Teammitgliedern ist der folgende:

```content > img > home```

Wenn kein Bild vorliegt, wird ein Platzhalter anstelle des Bildes eingefügt.

Wenn ein Bild vorliegt, welches kein 1:1-Format hat, wird die Mitte des Bildes angezeigt und auf ein 1:1-Seitenverhältnis zugeschnitten.

#### ANMERKUNGEN ZUM FORMAT DER ATTRIBUTE
Sollten nicht-optionale Attribute leer gelassen (```""```) werden, wird an der entsprechenden Stelle ```??``` angezeigt.

Nicht optionale Attribute sind: Name, Rolle und Gruppe.

<hr>

## FEHLERBEHEBUNG
### BILD WIRD NICHT ANGEZEIGT

1. Ist das Bild am richtigen Ort? 
<br> Bilder des Aktuelles-Abschnitts der Home-Seite: ```content > img > news```
<br>Bilder der Bilder-Gallerie der Home Seite: ```content > img > home```
<br>Bilder der Sponsoren der Home-Seite: ```content > img > sponsors```
<br>Bilder der Projekte der Projekte-Seite: ```content > img > projects```
<br>Bilder der Team-Seite: ```content > img > team```
<br>→ Sollten die Bilder im falschen Ordner sein, können sie nicht gefunden werden.

2. Ist der Dateiname richtig?
<br>→ Sollte der Dateiname falsch sein, kann die Datei nicht gefunden werden.

3. Ist die Dateiendung richtig?
<br>Dateiendungen können im Windows Explorer unter ```Ansicht > Dateinamenerweiterungen``` oder ```Rechtsklick > Eigenschaften > Dateityp``` angezeigt werden. Auf dem Mac kann unter ```Finder > Einstellungen > Erweitert``` das
Feld „Alle Dateinamensuffixe einblenden“ aktiviert werden.
