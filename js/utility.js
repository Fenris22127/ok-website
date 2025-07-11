/**
 * 
 * This file contains several utility functions used across the website.
 * 
 * @file utility.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-05-06
 * @since 1.1
 */

/**
 * Checks if the text is empty and returns "??" if it is, otherwise returns the text.
 * @param {string} text The text to check.
 * @returns {string}    The text or "??" if the text is empty.
 */
function checkText(text) {
    //if the text is empty, return "??"
    if (text == "") {
        return "??";
    }
    //if the text is not empty, return the text but remove leading and trailing whitespace
    return text.trim();
}

/**
 * Checks if the link is a valid URL and returns it. If the link is empty or invalid, it returns "#".
 * @param {string} link The link to check.
 * @returns {string}    The link or "#" if the link is empty or invalid.
 */
function checkLink(link) {
    //if the link is a valid URL, return link
    if (link.match(/^(https?:\/\/)?(w{3}\.)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
        if (!link.match(/^(https|http):\/\//)) {
            return "https://" + link;
        }
        return link;
    }
    //if the link is empty or invalid, return "#"
    return "#";
}

/*
    Explanation of the regex:
    ^(https?:\/\/)?(w{3}\.)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$
    ^               - Start of the string
    (https?:\/\/)?  - Matches "http://" or "https://" at the beginning of the string (optional)
    (w{3}\.)?       - Matches "www." at the beginning of the string (optional)
    ([\da-z\.-]+)   - Matches the domain name (letters, numbers, dots, and hyphens) => links like "example.com" or "sub.example.com"
    \.              - Matches the dot before the domain extension
    ([a-z\.]{2,6})  - Matches the domain extension (2 to 6 letters) => links like ".com", ".org", ".co.uk"
    ([\/\w \.-]*)*  - Matches the path of the URL (optional)
*/

const folder = "../content/img/";

/**
 * This function retrieves an image by its name from a specified directory.
 * @param {string} imgName - The name of the image to retrieve.
 * @param {string} dir - The directory where the image is located.
 * @returns {string} The file path to the image or an empty string, if no image could be found.
 */
function getImageByName(imgName, dir, callback) {
    $.getJSON("../php/get-images.php", {
        name: imgName,
        dir: folder + dir
    }, function(data) {
        if (data.path != null && data.path != "") {
            callback(data.path);
        } else {
            callback("");
        }
    });
}

/**
 * Strips the image file extension from a link.
 * @param {string} link The link to be stripped of its image file extension.
 * @returns {string} The link without the image file extension.
 */
function stripImageLink(link) {
    return link.replace(/\.(png|PNG|svg|jpg|JPG|jpeg|JPEG|gif|bmp|webp)$/, "");
}