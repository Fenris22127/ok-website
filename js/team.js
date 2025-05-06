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
 * @since 1.1
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
    teamMembers.forEach(member => {
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
        name.innerHTML = member.name;

        var role = document.createElement("p");
        role.className = "role";
        role.innerHTML = member.role;

        personDiv.appendChild(name);
        personDiv.appendChild(role);
        container.appendChild(personDiv);
    });
}