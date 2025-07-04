/**
 * This file contains the JavaScript code for the sponsors section of the website. 
 * 
 * It handles the loading of sponsors from a JSON file and displays them on the page.
 * 
 * @file sponsors.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-05-07
 * @since 1.1
 */

/**
 * Loads the sponsors from the JSON file and displays them on the page.
 * Why this is not loaded via document.body.onload: For some reason, the sponsors will not be loaded this way.
 * @returns {void}
 */
loadSponsors();

/**
 * Loads the sponsors into the page.
 * @returns {void}
 */
function loadSponsors() {
    var container = document.getElementById("sponsors");
    var sponsors = sponsorsContent.sort((a, b) => a.name.localeCompare(b.name));
    for (var i = 0; i < sponsors.length; i++) {
        createSponsor(container, sponsors[i]);
    }
}

/**
 * Adds a sponsor to the given container.
 * @param {HTMLElement} container The container to which the sponsor will be added
 * @param {Sponsor} sponsor The sponsor to be added
 * @returns {void}
 */
function createSponsor(container, sponsor) {
    var logo = stripImageLink(sponsor.logo);
    getImageByName(logo, "sponsors", function(imgPath) {
        var sponsorLink = document.createElement("a");
        sponsorLink.className = "sponsor";
        var link = checkLink(sponsor.url);
        sponsorLink.href = link;
        sponsorLink.target = "_blank";
        if(imgPath != "" && imgPath != null) {
            var img = document.createElement("img");
            img.src = imgPath;
            img.alt = sponsor.name;
            img.title = sponsor.name;
            img.onclick = function() {window.open(link, "_blank")};
            sponsorLink.appendChild(img);
        }
        var name = document.createElement("p");
        name.innerHTML = checkText(sponsor.name);
        sponsorLink.appendChild(name);
        container.appendChild(sponsorLink);
    });
}