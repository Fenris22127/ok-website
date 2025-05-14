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
    for (var i = 0; i < sponsorsContent.length; i++) {
        createSponsor(container, sponsorsContent[i]);
    }
}

/**
 * Adds a sponsor to the given container.
 * @param {HTMLElement} container The container to which the sponsor will be added
 * @param {Sponsor} sponsor The sponsor to be added
 * @returns {void}
 */
function createSponsor(container, sponsor) {
    var sponsorLink = document.createElement("a");
    sponsorLink.className = "sponsor";
    sponsorLink.href = checkLink(sponsor.url);
    sponsorLink.target = "_blank";
    if(sponsor.logo != "") {
        var img = document.createElement("img");
        img.src = "../content/img/sponsors/" + sponsor.logo;
        img.alt = sponsor.name;
        img.title = sponsor.name;
        img.onclick = function() {window.open(sponsor.url, "_blank")};
        sponsorLink.appendChild(img);
    }
    var name = document.createElement("p");
    name.innerHTML = checkText(sponsor.name);
    sponsorLink.appendChild(name);
    container.appendChild(sponsorLink);
}