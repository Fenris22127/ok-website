/**
 * A class representing a team member.
 * @typedef {Object} TeamMember
 * @property {string} name - The name of the team member.
 * @property {string} role - The role of the team member.
 * @property {string} group - The group of the team member.
 */
class TeamMember {
    constructor(name, role, group) {
        this.name = name;
        this.role = role;
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
        "Sabine Bauer", 
        "Vorsitzende",
        "Vorstand"
    ),
    new TeamMember(
        "Andreas Heinrich", 
        "Stellvertreter",
        "Vorstand"
    ),
    new TeamMember(
        "Wolfgang Stürzebecher", 
        "Schatzmeister",
        "Vorstand"
    ),
    new TeamMember(
        "Sebastian Hösel", 
        "Schriftführer",
        "Vorstand"
    ),
    
    new TeamMember(
        "Petra Zaretzke", 
        "Geschäftsführung",
        "Team"
    ),
    new TeamMember(
        "Sebastian Hösel", 
        "Technik/Ausbildung",
        "Team"
    ),
    new TeamMember(
        "Guido Reuter", 
        "Projektmitarbeiter",
        "Team"
    ),
    new TeamMember(
        "Brave", 
        "Geschäftshund/Chef",
        "Team"
    ),
    new TeamMember(
        "Noah Helbig", 
        "Bundesfreiwilligendienst",
        "Team"
    ),
    new TeamMember(
        "Jenny Spannaus", 
        "Bundesfreiwilligendienst",
        "Team"
    ),
    new TeamMember(
        "Leon Hauch", 
        "Bundesfreiwilligendienst",
        "Team"
    ),
    new TeamMember(
        "Colin Weicht", 
        "Einstiegsqualifizierungsjahr",
        "Team"
    ),
]