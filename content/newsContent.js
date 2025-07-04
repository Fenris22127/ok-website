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
        "13. Internationales Johannes-Brahms-Chorfestival", 
        "02.07.2025", 
        "Vom 2. bis 6. Juli 2025 werden festliche Konzerte, spannende Wettbewerbe und internationale Chor-Vielfalt präsentiert.", 
        "Chorfestival"
    ),
    new News(
        "Wernigeröder Schlossfestspiele 2025", 
        "26.07.2025", 
        "Junge, hochtalentierte Sänger am Anfang ihrer Karriere und das Philharmonische Kammerorchester Wernigerode unter der musikalischen Leitung von MD Christian Fitzner gestalten ein vielfältiges Sommervergnügen in der unverwechselbaren Atmosphäre von Schloß Wernigerode.", 
        "Schlossfestspiele"
    ),
    new News(
        "2. Arschbombenmeisterschaft", 
        "08.08.2025", 
        "Am Freitag, 8. August, heißt es von 13 bis 17 Uhr „Bauchklatscher ade, Arschbombe olé!“. Das Waldhofbad Wernigerode lädt erneut zu einem besonders spaßigen Wasservergnügen ein – der 2. Arschbombenmeisterschaft in Wernigerode!", 
        "Arschbombenmeisterschaft"
    ),
    new News(
        "CSD Magdeburg", 
        "23.08.2025", 
        "Neben den Eröffnungsreden unserer Schirmpersonen, sowie der Vorstellung unterstützender Parteien und der LSBTIQ*- Organisationen werden wir euch verschiedenste Künstler*innen Präsentiert.",
        "CSD-Magdeburg"
    ),
]