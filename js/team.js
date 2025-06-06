/**
 * 
 * This file contains the JavaScript code for the team page of the website. It handles the loading of team members.
 * 
 * It creates the team member items dynamically based on the data provided in the teamContent.js file.
 * 
 * @file team.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-04-15
 * @since 1.2
 */

/**
 * Function to load board and team members when the page has loaded.
*/
document.body.onload = function() {
    loadBoard()
    loadTeam()
};

/**
 * Loads the team members into the team container.
 * @returns {void}
 */
function loadBoard() {
    var container = document.getElementById("boardContainer");
    var boardMembers = teamContents.filter(member => member.group === "Vorstand");
    boardMembers.forEach(member => {
        var personDiv = document.createElement("div");
        personDiv.className = "person";
        if (member.image != "") {
            var img = document.createElement("img");
            img.src = member.image;
            img.alt = member.name;
            personDiv.appendChild(img);
        } else {
            var img = document.createElement("img");
            img.src = "../content/img/team/person_placeholder.svg";
            img.alt = member.name;
            personDiv.appendChild(img);
        }
        var name = document.createElement("h3");
        name.innerHTML = checkText(member.name);

        var role = document.createElement("p");
        role.className = "role";
        role.innerHTML = checkText(member.role);

        personDiv.appendChild(name);
        personDiv.appendChild(role);
        container.appendChild(personDiv);
    });
}

/**
 * Loads the team members into the team container.
 * @returns {void}
 */
function loadTeam() {
    var container = document.getElementById("teamContainer");
    var teamMembers = teamContents.filter(member => member.group === "Team");
    teamMembers = sortTeamMembers(teamMembers)    
    teamMembers.forEach(member => {
        var personDiv = document.createElement("div");
        personDiv.className = "person";
        if (member.image != "") {
            var img = document.createElement("img");
            img.src = "../content/img/team/" + member.image;
            img.alt = member.name;
            personDiv.appendChild(img);
        } else {
            var img = document.createElement("img");
            img.src = "../content/img/team/person_placeholder.svg";
            img.alt = checkText(member.name);
            personDiv.appendChild(img);
        }
        var name = document.createElement("h3");
        name.innerHTML = checkText(member.name);

        var role = document.createElement("p");
        role.className = "role";
        role.innerHTML = checkText(member.role);

        personDiv.appendChild(name);
        personDiv.appendChild(role);
        container.appendChild(personDiv);
    });
}

/**
 * Sorts the given array of team members first according to their role and then according to their names.
 * @param {TeamMember[]} teamMembers The array with team members to sort
 * @returns The sorted array of team members
 */
function sortTeamMembers(teamMembers) {
    teamMembers.sort((a, b) => {
        if (a.role < b.role) return -1;
        if (a.role > b.role) return 1;

        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;

        return 0
    })
    return teamMembers
}