/**
 * 
 * This file contains the JavaScript code for the news page of the website. It handles the loading of news items.
 * 
 * It creates the news items dynamically based on the data provided in the newsContent.js file. It also handles the layout of the news items, alternating between left and right images and adds a dots divider between the news items.
 * 
 * @file news.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-04-09
 * @since 1.1
 */

/**
 * Function to load news articles when the page has loaded.
*/
document.body.onload = function() {loadNews()};

/**
 * Loads the news items into the news container.
 * @returns {void}
 */
function loadNews() {
    var newsContainer = document.getElementById("newsContainer");
    var newsSorted = news.slice().sort((a, b) => parseGermanDate(a.date) - parseGermanDate(b.date));
    var newsItems = [];

    // Schritt 1: Erzeuge alle News-Container synchron und füge sie dem DOM hinzu
    for (let i = 0; i < newsSorted.length; i++) {
        var newsItem = document.createElement("div");
        newsItem.className = "newsItem";
        if (i % 2 !== 0) newsItem.classList.add("odd");
        newsAddText(newsSorted, i, newsItem);
        newsContainer.appendChild(newsItem);
        newsItems.push(newsItem);

        if (i != newsSorted.length - 1) {
            var dots = document.createElement("p", { is: "dots-divider" });
            newsContainer.appendChild(dots);
        }
    }

    // Schritt 2: Lade die Bilder asynchron und füge sie in die richtigen Container ein
    for (let i = 0; i < newsSorted.length; i++) {
        var path = stripImageLink(newsSorted[i].image);
        getImageByName(path, "news", function(imgPath) {
            newsAddImg(imgPath, newsItems[i], newsSorted, i);
        });
    }
}

/**
 * Parses a German date string in the format "DD.MM.YYYY" or "DD.MM.YY" and returns a Date object.
 * @param {String} dateStr The date string in the format "DD.MM.YYYY" or "DD.MM.YY".
 * @returns {Date} A Date object representing the parsed date.
 */
function parseGermanDate(dateStr) {
    const [day, month, year] = dateStr.split(".");
    return new Date(`${year}-${month}-${day}`);
}

/**
 * Adds the text content to the news item.
 * @param {News[]} news             An Array containing news items from 
 * @param {int} i                   The index of the news item to be added
 * @param {HTMLDivElement} newsItem The news item to which the text will be added
 * @returns {void}
 */
function newsAddText(news, i, newsItem) {
    var newsItemText = document.createElement("div");
    newsItemText.className = "newsItemText";

    // Add the title
    var newsTitle = document.createElement("h2");
    newsTitle.innerHTML = checkText(news[i].title);
    newsItemText.appendChild(newsTitle);

    // Add the date
    var newsDate = document.createElement("p");
    newsDate.innerHTML = checkDate(news[i].date);
    newsItemText.appendChild(newsDate);

    // Add the text
    var newsText = document.createElement("p");
    newsText.innerHTML = checkText(news[i].text);
    newsItemText.appendChild(newsText);

    newsItem.appendChild(newsItemText);
}

/**
 * Adds the image to the news item. If no image is available, a placeholder is added.
 * @param {string} imgPath              The path to the image to be added
 * @param {HTMLDivElement} newsItem     The news item to which the image will be added
 * @param {News[]} news                 An Array containing news items
 * @param {int} i                       The index of the news item to be added
 * @returns {void}
 */
function newsAddImg(imgPath, newsItem, news, i) {
    if(imgPath != "" && imgPath != null) {
        var img = document.createElement("img");
        img.src = imgPath;
        img.alt = news[i].title;
        img.className = "newsImage";
        newsItem.appendChild(img);
    }
    else {
        addImgPlaceholder(newsItem, news[i].title);
    } 
}

/**
 * Creates a placeholder with the first two letters of the words of the title.
 * @param {HTMLDivElement} newsItem The news item to which the image will be added
 * @param {*} title                 The title of the news item, used to create a placeholder image
 * @returns {void}
 */
function addImgPlaceholder(newsItem, title) {
    // If no image is available, create a placeholder with the first two letters of the words of the title
    var str = checkText(title);
    var matches = str.match(/\b(\w)/g);
    if (matches === null) {
        matches = ["?"];
    }
    var acronym = matches.join('').toUpperCase();
    acronym = acronym.substring(0, 2);

    // Create a placeholder image with the acronym
    var imageAlt = document.createElement("div");
    imageAlt.className = "imageAlt";
    var span = document.createElement("span");
    span.innerHTML = acronym;
    imageAlt.appendChild(span);

    newsItem.appendChild(imageAlt);
}

/**
 * Checks if the date is a valid format.
 * If the date is invalid, it returns "??.??.????".
 * Valid formats are:
 * 1. DD.MM.YYYY
 * 2. DD.MM.YY (with or without leading zero)
 * @param {string} date The date to check.
 * @returns {string}    The date or "??.??.????" if the date is invalid.
 */
function checkDate(date) {
    // Check if the date is in the format DD.MM.YYYY and correct it if necessary and possible
    if (date.match(/^\d{1,2}\.\d{1,2}\.(\d{2}|\d{4})$/)) {
        return date;
    } else {
        return "??.??.????";
    }
}
