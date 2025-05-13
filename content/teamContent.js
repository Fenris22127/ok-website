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
        "Petra Zaretzke", 
        "Geschäftsführung",
        "",
        "Vorstand"
    ),
    new TeamMember(
        "Sebastian Hösel", 
        "Technik/Ausbildung",
        "",
        "Vorstand"
    ),
    new TeamMember(
        "Guido Reuter", 
        "Projektmitarbeiter",
        "",
        "Vorstand"
    ),
    new TeamMember(
        "Brave", 
        "Geschäftshund/Chef",
        "",
        "Vorstand"
    ),

    new TeamMember(
        "Noah Helbig", 
        "Bundesfreiwilligendienst",
        "",
        "Team"
    ),
    new TeamMember(
        "Sophie Rumyantseva", 
        "Bundesfreiwilligendienst",
        "",
        "Team"
    ),
    new TeamMember(
        "Jenny Spannaus", 
        "Bundesfreiwilligendienst",
        "",
        "Team"
    ),
    new TeamMember(
        "Leon Hauch", 
        "Bundesfreiwilligendienst",
        "",
        "Team"
    ),
    new TeamMember(
        "Colin Weicht", 
        "Einstiegsqualifizierungsjahr",
        "",
        "Team"
    ),
    new TeamMember(
        "Greta Dehnbostel", 
        "Praktikant",
        "",
        "Team"
    ),
    new TeamMember(
        "Elisa Johanna Woelk", 
        "Praktikant",
        "",
        "Team"
    ),
]