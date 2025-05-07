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
    //DELETE: For testing purposes only
    new Project(
        "", 
        "", 
        "", 
        ""
    ),
]