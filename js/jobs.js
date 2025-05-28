/**
 * 
 * This file contains the JavaScript code for the jobs page of the website. It handles the loading of job items.
 * 
 * It creates the job items dynamically based on the data provided in the jobsContent.js file.
 * 
 * @file jobs.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-04-14
 * @since 1.1
 */

/**
 * Function to load job offers when the page has loaded.
*/
document.body.onload = function() {loadJobs()};

/**
 * Loads the job items into the jobs container.
 * @returns {void}
 */
function loadJobs() {
    var container = document.getElementById("jobsContainer");
    // Link with target email and subject start
    var jobEmailLink = "mailto:bewerbung@ok-wernigerode.de?subject=Bewerbung:%20";
    
    for (var i = 0; i < jobsContent.length; i++) {
        var jobContainer = document.createElement("div");
        jobContainer.className = "job";

        // Adds the job title
        var jobTitle = document.createElement("h3");
        jobTitle.innerHTML = checkText(jobsContent[i].title);

        // Adds the hourglass icon and the job duration
        var jobDuration = document.createElement("p");
        jobDuration.classList.add("details", "duration");
        jobDuration.innerHTML = `
            <span class="material-symbols-outlined">hourglass_empty</span>
            ${checkText(jobsContent[i].duration)} 
            `;
        
        // Adds the location icon and the job location
        var jobLocation = document.createElement("p");
        jobLocation.classList.add("details", "location");
        jobLocation.innerHTML = `
            <span class="material-symbols-outlined">location_on</span>
            ${checkText(jobsContent[i].location)} 
        `;

        // Adds the description of the job
        var jobDescription = document.createElement("p");
        jobDescription.className = "description";
        jobDescription.innerHTML = checkText(jobsContent[i].description);

        var jobSkills = document.createElement("div");
        jobSkills.className = "skills";
        var jobSkillsTitle = document.createElement("h4");
        jobSkillsTitle.innerHTML = "Skills:";
        jobSkills.appendChild(jobSkillsTitle);
        // If the list of required skills is empty, add a text saying "Keine speziellen Anforderungen"
        if (jobsContent[i].skills == "") {
            var jobSkillsText = document.createElement("p");
            jobSkillsText.innerHTML = "Keine speziellen Anforderungen";
            jobSkills.appendChild(jobSkillsText);
        }
        // If the list of required skills is not empty, parse the listed skills into a list and add the skills
        else {
            var jobSkillsList = document.createElement("ul");
            const listString = splitToList(jobsContent[i].skills + '')
            for (var j = 0; j < listString.length; j++) {
                var jobSkill = document.createElement("li");
                jobSkill.innerHTML = listString[j];
                jobSkillsList.appendChild(jobSkill);
            }
            jobSkills.appendChild(jobSkillsList);
        }
        
        // Adds the link with a Mail-Link to the job offer with the subject "Bewerbung: [Job Title]" to the email address "bewerbung@ok-wernigerode.de"
        var jobLink = document.createElement("div");
        jobLink.className = "link";
        var jobLinkButton = document.createElement("a");
        jobLinkButton.className = "button";
        var link = jobEmailLink + encodeURIComponent(jobsContent[i].title.trim());
        jobLinkButton.setAttribute("href", link);
        jobLinkButton.innerHTML = "Bewerben";
        jobLink.appendChild(jobLinkButton);

        // Adds the job title, duration, pay, location, description, skills and link to the job container
        jobContainer.appendChild(jobTitle);
        jobContainer.appendChild(jobDuration);
        jobContainer.appendChild(jobLocation);
        jobContainer.appendChild(jobDescription);
        jobContainer.appendChild(jobSkills);
        jobContainer.appendChild(jobLink);
        
        // Adds the job container to the main container
        container.appendChild(jobContainer);
    }
}

/**
 * Splits a string into a list of items and capitalizes the first letter of each item.
 * @param {string} text The string with items separated by commas and spaces.
 * @example "item1, item2, item3"
 * @returns {string[]}  An array of items with the first letter capitalized.
 * @example ["Item1", "Item2", "Item3"]
 */
function splitToList(text) {
    var list = text.split(", ");
    for (var i = 0; i < list.length; i++) {
        list[i] = capitalizeFirstLetter(list[i].trim());
    }
    return list;
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} val  The string to be capitalized.
 * @example "example"
 * @returns {string}    The string with the first letter capitalized.
 * @example "Example"
 */
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}