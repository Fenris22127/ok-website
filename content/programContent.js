class ProgramItem {
    constructor(start, end, title, description, link) {
        this.start = start;
        this.end = end;
        this.title = title;
        this.description = description;
        this.link = link;
    }
}

const programItems = [
    new ProgramItem(
        "07:00", 
        "07:30", 
        "Schulfilmfrühstück", 
        "Ein tägliches Morgenprogramm, das Kurzfilme von Schulfilmprojekten zeigt.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "07:30", 
        "08:00", 
        "Lokales im Fokus", 
        "Porträts über regionale Filmemacher und ihre Arbeiten.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "08:00", 
        "09:00", 
        "Kreative Köpfe", 
        "Interviews mit jungen Filmkünstler:innen und Einblicke in ihre Projekte.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "09:00", 
        "09:30", 
        "Kinderkino kurz & bunt", 
        "Animations- und Kurzfilme für Kinder, produziert von lokalen Schulen.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "09:30", 
        "10:00", 
        "Filmgymnasium live", 
        "Ein interaktives Format, bei dem Filmideen diskutiert werden.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "10:00", 
        "12:00", 
        "Dokumentarlinsen", 
        "Dokumentarfilme über soziale oder kulturelle Themen, produziert von Nachwuchsfilmer:innen.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "12:00", 
        "12:30", 
        "Snack-Kino zur Mittagszeit", 
        "Eine Auswahl preisgekrönter Kurzfilme, passend zur Mittagspause.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "12:30", 
        "13:30", 
        "Filmwerkstatt hinter den Kulissen", 
        "Wie entstehen Schüler- und Kurzfilme? Ein Blick hinter die Kulissen.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "13:30", 
        "14:00", 
        "Kinoquiz: Alles über Filme", 
        "Ein Quizformat, bei dem Teams Filmwissen testen.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "14:00", 
        "15:00", 
        "Jung & Visionär", 
        "Spielfilme junger Talente, produziert in Kooperation mit Schulen und Filmgruppen.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "15:00", 
        "15:30", 
        "Publikum entscheidet", 
        "Zuschauer können über den besten Kurzfilm des Tages abstimmen.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "15:30", 
        "16:30", 
        "Regionale Filmperlen", 
        "Vorstellung regionaler Filmfestivals und Gewinnerbeiträge.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "16:30", 
        "17:00", 
        "Neue Horizonte: Experimente im Film", 
        "Innovative und experimentelle Kurzfilme.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "17:00", 
        "19:00", 
        "Abendkino für die Familie", 
        "Lokale Familienfilme und Gemeinschaftsprojekte.",
        "https://www.example.com"
    ),
    new ProgramItem(
        "19:00", 
        "20:00", 
        "Lichter der Zukunft", 
        "Abschluss des Tages mit Filmprojekten, die besondere Unterstützung erhalten haben.",
        "https://www.example.com"
    ),
]