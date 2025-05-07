/**
 * A class representing a team member.
 * @typedef {Object} TeamMember
 * @property {string} name - The name of the team member.
 * @property {string} role - The role of the team member.
 * @property {string} image - The image URL of the team member.
 * @property {string} group - The group of the team member.
 */
class TeamMember {
    constructor(name, role, image, group) {
        this.name = name;
        this.role = role;
        this.image = image;
        this.group = group;
    }
}

/**
 * An array of team members.
 * The group property is used to categorize members into "Vorstand" and "Team". Other groups will not be displayed.
 * @type {TeamMember[]}
 */
const teamContents = [
    new TeamMember(
        "Vorname Nachname", 
        "Vorsitzende",
        "",
        "Vorstand"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Stellvertreter",
        "",
        "Vorstand"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Schatzmeister",
        "",
        "Vorstand"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Schriftführer",
        "",
        "Vorstand"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Geschäftsführung",
        "",
        "Team"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Technik/Ausbildung",
        "",
        "Team"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Projekt 1",
        "",
        "Team"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Projekt 2",
        "",
        "Team"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Auszubildende",
        "",
        "Team"
    ),
    new TeamMember(
        "Vorname Nachname", 
        "Praktikant",
        "",
        "Team"
    ),
    //DELETE: For testing purposes only
    new TeamMember(
        "", 
        "",
        "",
        "Team"
    ),
]