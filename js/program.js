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
 * @since 1.1
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
        link.setAttribute("href", checkLink(programItems[i].link));
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
        start.innerHTML = checkTime(programItems[i].start);
        end.innerHTML = "- " + checkTime(programItems[i].end);
        title.innerHTML = checkText(programItems[i].title);
        description.innerHTML = checkText(programItems[i].description);

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

/**
 * Checks if the time is in the format HH:MM and corrects it if necessary and possible.
 * If the time is invalid, it returns "??:??".
 * @param {string} time The time to check.
 * @returns {string}    The time in the format HH:MM or "??:??" if the time is invalid.
 */
function checkTime(time) {
    //if the time is in the format HH:MM, return time
    if (time.match(/^\d{2}:\d{2}$/)) {
        return time;
    }

    //if time doesn't contain a colon but consists of 4 digits, add a colon in the middle
    if (time.match(/^\d{4}$/)) {
        return time.slice(0, 2) + ":" + time.slice(2, 4);
    }

    //if time contains letters, consists of more than 4 digits, less than 4 digits, is empty or contains special characters, return "??:??"
    return "??:??";
}