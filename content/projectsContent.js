class Project {
    constructor(title, description, link, image) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}

const projectsContent = [
    new Project(
        "Ein Projekt", 
        "Das ist die Beschreibung des Projekts.", 
        "www.example.com", 
        "film_placeholder.jpg"
    ),
    new Project(
        "Ein anderes Projekt", 
        "Das ist die etwas längere Beschreibung des anderen Projekts.", 
        "www.other-example.com", 
        ""
    ),
    new Project(
        "Anderes Projekt", 
        "Das ist die Beschreibung des anderen anderen Projekts.", 
        "www.other-example.com", 
        ""
    ),
    new Project(
        "Noch ein anderes Projekt", 
        "Das ist die Beschreibung des einen anderen Projekts.", 
        "www.other-example.com", 
        "film_placeholder.jpg"
    ),
]