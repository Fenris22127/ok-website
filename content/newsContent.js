class News {
    constructor(title, date, text, image) {
        this.title = title;
        this.date = date;
        this.text = text;
        this.image = image;
    }
}

const news = [
    new News(
        "News 1", 
        "08.04.2025", 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.", 
        "QueerFilm.png"
    ),
    new News(
        "News 2", 
        "08.04.2025", 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.", 
        ""
    ),
]