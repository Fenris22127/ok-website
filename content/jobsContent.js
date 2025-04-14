class Job {
    constructor(title, description, duration, pay, location, skills) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.pay = pay;
        this.location = location;
        this.skills = skills;
    }
}

const jobsContent = [
    new Job(
        "Mediengestalter für Bild und Ton", 
        "Während der Ausbildung lernen Sie den Umgang mit professionellen Fernsehkameras, das Schneiden von Filmbeiträgen sowie das Vertonen und Mischen ganzer Sendungen. Zusätzlich erhalten Sie einen umfassenden Einblick in die Arbeitsweise eines Fernsehsenders.", 
        "3 Jahre", 
        "Nicht angegeben",
        "Gutenbergschule Leipzig, OK Wernigerode",
        "Interesse an Technik, gestalterisches Talent im Umgang mit Bild und Ton, guten Realschulabschluss oder Abitur (Ausnahmen möglich), einwandfreies Hör- und Farberkennungsvermögen, körperliche und geistige Fitness, Teamfähigkeit, gute Allgemeinbildung"
    ),
    new Job(
        "Einstiegsqualifizierungsjahr (EQJ)", 
        "Das Einstiegsqualifikationsjahr ist für Dich eine Möglichkeit tiefer in das Medium Fernsehen einzutauchen. Du kannst dabei festzustellen, ob diese Berufsrichtung für Dich die richtige Wahl wäre. Im Verlauf des Aufenthalts im OK wird Dir, abhängig von deiner Entwicklung, die Möglichkeit gegeben, im Anschluss eine Ausbildung zu absolvieren.",
        "1 Jahr", 
        "Nicht angegeben",
        "OK Wernigerode",
        ""
    ),
    new Job(
        "Praktikum, Schülerpraktikum, Praxissemester", 
        "Praxiserfahrungen gewinnen in der Berufswelt immer mehr an Bedeutung. Bei uns kannst du bei einem kurzen Schülerpraktikum, einem Langzeitpraktikum oder einem Praxissemester viele Erfahrungen sammeln, welche für Deine spätere Berufswahl hilfreich sein können.",
        "Variiert", 
        "Unbezahlt",
        "OK Wernigerode",
        ""
    ),
]