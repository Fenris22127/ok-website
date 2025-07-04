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
        "Das Infomagazin für Wernigerode und den Landkreis Harz", 
        "", 
        "Break"
    ),
    new Project(
        "Grovesmühle-TV", 
        "Die Filmgilde im Landschulheim Grovesmühle", 
        "www.grovesmuehle.de", 
        "Grovesmühle"
    ),
    new Project(
        "Campus-TV", 
        "Das Campus-Fernsehen in Kooperation mit der Hochschule Harz", 
        "", 
        "Campus-TV"
    ),
    new Project(
        "Klappe auf - Jugend-TV im Harzkreis", 
        "Jugendliche erforschen ihre Lebensumwelt", 
        "www.klappe-auf-harz.de", 
        ""
    ),
]