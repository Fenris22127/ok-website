/**
 * 
 * This file contains the JavaScript code for the programs page of the website. It handles the loading of job items.
 * 
 * It creates the program items dynamically based on the data provided in the programContent.js file.
 * 
 * @file program.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-04-9
 * @since 1.0
 */

/**
 * Function to load job offers when the page has loaded.
*/
document.body.onload = function() {loadProgram()};

/**
 * Loads the program items into the program container.
 * @returns {void}
 */
function loadProgram() {
    var container = document.getElementById("programContainer");
    
    for (var i = 0; i < programItems.length; i++) {
        // Create a link element for each program item
        var link = document.createElement("a");
        link.className = "program_point"
        link.setAttribute("href", programItems[i].link);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer"); // Security measure for new tab

        // Create a div element for the program item and add the content
        var program = document.createElement("div");
        program.className = "program_point_grid";
        var start = document.createElement("p");
        start.className = "start"
        var end = document.createElement("p");
        end.className = "end"
        var title = document.createElement("h3");
        title.className = "title"
        var description = document.createElement("p");
        description.className = "description"

        // Add the content to the elements
        start.innerHTML = programItems[i].start;
        end.innerHTML = "- " + programItems[i].end;
        title.innerHTML = programItems[i].title;
        description.innerHTML = programItems[i].description;

        // Add the elements to the program item div
        program.appendChild(start);
        program.appendChild(end);
        program.appendChild(title);
        program.appendChild(description);
        link.appendChild(program);
        // Add the program item div to the container
        container.appendChild(link);
    }

    
}