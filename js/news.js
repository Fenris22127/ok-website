/**
 * 
 * This file contains the JavaScript code for the news page of the website. It handles the loading of news items.
 * 
 * It creates the news items dynamically based on the data provided in the newsContent.js file. It also handles the layout of the news items, alternating between left and right images and adds a dots divider between the news items.
 * 
 * @file news.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-04-08
 * @since 1.0
 */

/**
 * Function to load news articles from an external JSON file and display them on the page.
 */

document.body.onload = function() {loadNews()};

/**
 * Loads the news items into the news container.
 * @returns {void}
 */
function loadNews() {
    var newsContainer = document.getElementById("newsContainer");

    for (var i = 0; i < news.length; i++) {
        var newsItem = document.createElement("div");
        newsItem.className = "newsItem";

        // Check if the index is even or odd to determine the layout
        if(i % 2 == 0) { // Even index => left image, right text
            newsAddImage(news, i, newsItem);
            newsAddText(news, i, newsItem);
        }
        else { // Odd index => right image, left text
            newsItem.className += " rightImage";
            newsAddImage(news, i, newsItem);
            newsAddText(news, i, newsItem);
        }
        
        newsContainer.appendChild(newsItem);

        // Add a dots divider between news items if it's not the last item
        if (i != news.length - 1) {
            var dots = document.createElement("p", { is: "dots-divider" });
            newsContainer.appendChild(dots);
        }
    }
    
}

/**
 * Adds the text content to the news item.
 * @param {*} news      An Array containing news items from 
 * @param {*} i         The index of the news item to be added
 * @param {*} newsItem  The news item to which the text will be added
 * @returns {void}
 */
function newsAddText(news, i, newsItem) {
    var newsItemText = document.createElement("div");
    newsItemText.className = "newsItemText";

    // Add the title
    var newsTitle = document.createElement("h2");
    newsTitle.innerHTML = news[i].title;
    newsItemText.appendChild(newsTitle);

    // Add the date
    var newsDate = document.createElement("p");
    newsDate.innerHTML = news[i].date;
    newsItemText.appendChild(newsDate);

    // Add the text
    var newsText = document.createElement("p");
    newsText.innerHTML = news[i].text;
    newsItemText.appendChild(newsText);

    newsItem.appendChild(newsItemText);
}

/**
 * Adds the image to the news item. If no image is available, it creates a placeholder with the first two letters of the words of the title.
 * @param {*} news      An Array containing news items from
 * @param {*} i         The index of the news item to be added
 * @param {*} newsItem  The news item to which the image will be added
 * @returns {void}
 */
function newsAddImage(news, i, newsItem) {
    if (news[i].image) {
        var img = document.createElement("img");
        img.src = "../content/img/" + news[i].image;
        img.alt = news[i].title;
        img.className = "newsImage";
        newsItem.appendChild(img);
    } else {
        var str = news[i].title;
        var matches = str.match(/\b(\w)/g);
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
}