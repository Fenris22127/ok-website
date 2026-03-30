/**
 * A class representing a news item.
 * @typedef {Object} News
 * @property {string} title - The title of the news item.
 * @property {string} date - The date of the news item.
 * @property {string} text - The text description of the news item.
 * @property {string} image - The image URL of the news item.
 */
class News {
    constructor(title, date, text, image) {
        this.title = title;
        this.date = date;
        this.text = text;
        this.image = image;
    }
}

/**
 * An array of news items.
 * @type {News[]}
 */
const news = [

    new News(
        "Bürgermedienpreis Sachsen-Anhalt 2026", 
        "07.03.2026", 
        "Die Medienanstalt Sachsen-Anhalt und Staatskanzlei und Ministerium für Kultur zeichnen mit dem Bürgermedienpreis Sachsen-Anhalt auch im Jahr 2026 wieder herausragende Fernseh- und Hörfunkproduktionen aus, die in den Offenen Kanälen und Nichtkommerziellen Lokalradios entstanden sind. Nichtkommerzielle Produzenten, die in Bürgermedien in Sachsen-Anhalt aktiv sind, haben bis zum 3. Juni 2026, 12.00 Uhr die Möglichkeit, eigene Medienbeiträge für den Bürgermedienpreis Sachsen-Anhalt 2026 einzureichen. Die Wettbewerbsbeiträge müssen im Zeitraum zwischen Juni 2024 und Juni 2026 erstmals in den Offenen Kanälen und Nichtkommerziellen Lokalradios Sachsen-Anhalt ausgestrahlt worden sein, in deutscher oder englischer Sprache verfasst sein und dürfen eine Gesamtlänge von 20 Minuten nicht überschreiten.",
        "Medienpreis"
    ),
    new News(
        "Lokal.Offen.Gemeinsam.", 
        "26.02.2026", 
        "Lokal Medial ist eine nicht-kommerzielle Videoplattform, betrieben von den 7 Offenen Kanälen aus Sachsen-Anhalt. Frei von Werbung, Tracking und Algorithmen – 100% gemeinwohlorientiert.", 
        "Lokalmedia"
    ),
    new News(
        "Tag der Vereine", 
        "14.06.2026", 
        "Der Tag der Vereine in Wernigerode findet am Sonntag, den 14. Juni 2026, im Bürger- und Miniaturenpark statt. Von 11 bis 17 Uhr präsentieren sich zahlreiche lokale Vereine aus den Bereichen Sport, Kultur und Soziales. Die Veranstaltung bietet ein abwechslungsreiches Bühnenprogramm und Möglichkeiten zur Mitgliederwerbung", 
        "TdV"
    ),
    new News(
        "3. Arschbombemmeisterschaft", 
        "10.07.2026", 
       "Am Freitag dem 10. Juli heißt es „Bauchklatscher ade, Arschbombe olé!“. Das Waldhofbad Wernigerode lädt erneut zu einem besonders spaßigen Wasservergnügen ein – der 3. Arschbombenmeisterschaft in Wernigerode!", 
        "Arschbombenmeisterschaft"
    ),

     
]