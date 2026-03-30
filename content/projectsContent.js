/**
 * Class representing a project.
 * @typedef {Object} Project
 * @property {string} title - The title of the project.
 * @property {string} description - The description of the project.
 * @property {string} link - The link to the project.
 * @property {string} image - The image URL of the project.
 */
class Project {
    constructor(title, description, link, image) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}

/**
 * An array of projects.
 * @type {Project[]}
 */
const projectsContent = [
    new Project(
        "Break", 
        "Das Infomagazin für Wernigerode und den Landkreis Harz.",
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw",
        "Break"
    ),
    new Project(
        "Grovesmühle-TV", 
        "Die Filmgilde im Landschulheim Grovesmühle.", 
        "www.grovesmuehle.de", 
        "Grovesmühle"
    ),
    new Project(
        "Campus-TV", 
        "Das Campus-Fernsehen in Kooperation mit der Hochschule Harz.",  
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw",
        "Campus-TV"
    ),
    new Project(
        "Splash - Das Jugendmagazin", 
        "Splash - Das Jugendmagazin ist eine Produktion von Jugendlichen für Jugendliche.",
        "www.splash-magazin.de", 
        "Splash"
    ),
    new Project(
        "LUGS Unlimited", 
        "LUGS – Nachhaltigkeitsmagazin für Grundschulen. Ungeschnitten. Ungescriptet. Ohne Zeitlimit.",
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw", 
        "LUGS"
    ),
    new Project(
        "Brave-Magazin", 
        "Das Brave-Magazin ist unser kreatives und queeres TV-Projekt, welches schon seit 2010 besteht dadurch schon viele Jahre für mehr Sichtbarkeit von Menschen unterwegs ist.",  
        "https://www.youtube.com/channel/UCVZYZkYlc4Ysr0eweb7dkhA",
        "Brave"
    ),
    new Project(
        "Nachgefragt", 
        "Livestream-Polittalk im Harzkreis.",
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw",
        "nachgefragt"
    ),
    new Project(
        "OK Live vor Ort", 
        "Für aktuelles rund um das Thema Harz.",
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw",
        "OKlive"
    ),
    new Project(
        "Stadtratsitzungen", 
        "Für Sie im Rathaus immer auf dem Laufenden.",
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw",
        "stadtrat"
    ),
    new Project(
        "Gero's Filmritter", 
        "Die Filmritter sind ein Verein rund um Patrick Pertoll, welcher Spaß an alten Sachen, Mittelalter und Filme machen hat - lebendige Denkmalkultur aus Gernrode.",
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw",
        "filmritter"
    ),
    new Project(
        "Kultur", 
        "Wir bringen Kunst und Kultur in die Bürgermedien. Entdeckt hier Ausstellungen, Lesungen, Kleinkunst-, Theater-, Musik- und andere Veranstaltungen.",
        "https://www.youtube.com/channel/UCk5e7uah2Hi_xE_Wa58SlLw",
        "kultur"
    ),
    new Project(
        "Harzer Queer Film Festival", 
        "Der offene Kanal Wernigerode möchte neben seiner Medienarbeit auch ein queeres Zentrum im ländlichen Raum aufbauen. Neben Filmabenden sind auch Diskussionsrunden geplant, in denen Besucher über die Filme und ihre Erfahrungen sprechen können.",
        "https://www.youtube.com/channel/UCVZYZkYlc4Ysr0eweb7dkhA",
        "queerfilm"
    ),
    new Project(
        "Red Devils TV - Unihockey", 
        "Wir übertragen die Spiele der Red Devils Live.",
        "reddevils.org",
        "RedDevils"
    ),
    new Project(
        "Spinnstube Benneckenstein", 
        "Ein Ort für Geschichte, Gemeinschaft und neue Ideen.",
        "spinnstube.online",
        "Spinnstube"
    ),
    new Project(
        "Poetry Slam - Offener Kanal", 
        "Zweimal im Jahr findet beim Offenen Kanal ein Poetry Slam statt. ",
        "https://www.youtube.com/watch?v=j27Kr7XqHJs",
        "PoetrySlam"
    ),
    new Project(
        "Aktion Mensch Protesttage am 5. Mai", 
        "Jährlich am 5. Mai findet der Europäische Protesttag zur Gleichstellung von Menschen mit Behinderung statt.",
        "www.aktion-mensch.de/was-du-tun-kannst/protesttag-5-mai",
        "Protest"
    ),
     new Project(
        "JuPart Wernigerode", 
        "Unter dem Titel „Projekt Jugendpartizipation“ initiieren wir ein Projekt, das jungen Menschen den nötigen Raum zum Entfalten geben soll, um ihre Meinungen, Ideen und Anliegen zu formulieren.",
        "https://www.instagram.com/ib_jupart_wr/",
        "jupart"
    ),
]