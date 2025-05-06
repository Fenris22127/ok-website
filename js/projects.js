/**
 * 
 * This file contains the JavaScript code for the projects page of the website. It handles the loading of projects.
 * 
 * It creates the project items dynamically based on the data provided in the projectsContent.js file.
 * 
 * @file projects.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-04-9
 * @since 1.0
 */

/**
 * Function to load projects when the page has loaded.
*/
document.body.onload = function() {loadProjects()};

/**
 * Loads the project items into the projects container.
 */
function loadProjects() {
    var container = document.getElementById("projectsContainer");
    
    for (var i = 0; i < projectsContent.length; i++) {
        var project = document.createElement("div");
        project.className = "project";

        var img = document.createElement("img");
        // set img source
        if (projectsContent[i].image != "") {
            img.setAttribute("src", "../content/img/projects/" + projectsContent[i].image);
        } else {
            img.setAttribute("src", "../assets/img/ok_placeholder.png");
        }
        // Set title and description
        var title = document.createElement("h3");
        title.innerHTML = checkText(projectsContent[i].title);
        var description = document.createElement("p");
        description.innerHTML = checkText(projectsContent[i].description);

        // Set link to project
        var linkContainer = document.createElement("div");
        linkContainer.className = "link";
        var more = document.createElement("p");
        more.className = "small";
        more.innerHTML = "Alle Informationen zu diesem Projekt finden Sie unter:";
        var link = document.createElement("a");
        link.setAttribute("href", checkLink(projectsContent[i].link));
        link.setAttribute("target", "_blank"); // Open link in new tab
        link.setAttribute("rel", "noopener noreferrer"); // Security measure for new tab
        link.innerHTML = projectsContent[i].link;
        linkContainer.appendChild(more);
        linkContainer.appendChild(link);

        // Add all elements to the project div
        project.appendChild(img);
        project.appendChild(title);
        project.appendChild(description);
        project.appendChild(linkContainer);

        // Add the project div to the container
        container.appendChild(project);
    }
}