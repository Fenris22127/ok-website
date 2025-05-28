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
        "News 1", 
        "08.04.2025", 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.", 
        "QueerFilm.png"
    ),
    new News(
        "News 2", 
        "07.04.2025", 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.", 
        ""
    ),
    new News(
        "News 3", 
        "07.03.2025", 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.", 
        ""
    ),
    new News(
        "News 4", 
        "07.05.2024", 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.", 
        ""
    ),
]