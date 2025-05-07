/**
 * A class representing an image.
 * @typedef {Object} Image
 * @property {string} title - The title of the image.
 * @property {string} filename - The filename of the image.
 */
class Image {
    constructor(title, filename) {
        this.title = title;
        this.filename = filename;
    }
}

var imagesContent = [
    new Image(
        "Ein Filmdreh im Offenen Kanal Wernigerode",
        "BlueFilm.jpg"
    ),
    new Image(
        "Technik kann jederzeit ausgeliehen werden",
        "Filmcrew.jpg"
    ),
    new Image(
        "Das Studio ist für alle da",
        "Studio.jpg"
    ),
    new Image(
        "Das Studio ist technisch auf dem neuesten Stand",
        "WhiteStudio.jpg"
    ),
    new Image(
        "",
        "WhiteStudio.jpg"
    ),
]