/**
 * 
 * This file contains the JavaScript code for the image slider on the  homepage.
 * 
 * It adds the images from the imagesContent.js file to the slider and creates the dots for navigation.
 * 
 * @file slider.js
 * @author Elisa Johanna Woelk
 * @version 1.0
 * @date 2025-05-07
 * @since 1.0
 */
document.body.onload = createSlider();

/**
 * Creates the image slider by iterating through the imagesContent array and creating slides and dots.
 * @returns {void}
 */
function createSlider() {
    var container = document.getElementById("slideshow-container");
    // var dotsContainer = document.getElementById("dots-container");
    
    //iterate through folder ../content/img/home/ and create a slide for each image
    for (var i = 0; i < imagesContent.length; i++) {
        createSlide(container, imagesContent[i].filename, i, imagesContent.length);
        // createDots(dotsContainer, i);
    }
}

/**
 * Creates a slide element with an image, its title and a number indicating its position in the slider.
 * 
 * @param {HTMLElement} container   The container element for the slides.
 * @param {string} image            The filename of the image.
 * @param {int} index               The index of the image in the imagesContent array.
 * @param {int} length              The total number of images in the imagesContent array.
 * @returns {void}
 */
function createSlide(container, image, index, length) {
    var slide = document.createElement("div");
    slide.className = "slides fade";
    // Add the number of the slide and the total number of slides
    var numberText = document.createElement("div");
    numberText.className = "slideNumber";
    numberText.innerHTML = (index + 1) + " / " + length;
    slide.appendChild(numberText);

    //Add the image
    var img = document.createElement("img");
    img.src = "../content/img/home/" + image;
    slide.appendChild(img);

    //Add the title of the image if it is not empty
    if (imagesContent[index].title != "") {
        var title = document.createElement("div");
        title.className = "text";
        title.innerHTML = checkText(imagesContent[index].title);
        slide.appendChild(title);
    }

    container.appendChild(slide);
}

/**
 * Adds a dot element for each slide to the dots container.
 * @param {HTMLElement} container   The container element for the dots.
 * @param {int} index               The index of the corresponding slide.
 * @returns {void}
 */
// function createDots(container, index) {
//     var dot = document.createElement("span");
//     dot.className = "dot";
//     dot.setAttribute("onclick", "currentSlide(" + (index + 1) + ")")
//     container.appendChild(dot);
// }

/**
 * Initializes the slider by showing the first slide and setting up the event listeners for the dots.
 */
let slideIndex = 1;

/**
 * Shows the current slide based on the slideIndex.
 */
showSlides(slideIndex);

/**
 * Moves to the next or previous slide based on the parameter n.
 * 
 * @param {int} n The number of slides to move (positive for next, negative for previous).
 * @returns {void}
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * Sets the current slide to the specified index.
 * 
 * @param {int} n The index of the slide to show.
 * @returns {void}
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * Displays the slide corresponding to the current slide index.
 * Hides all other slides and updates the active dot.
 * @param {int} n The index of the slide to show.
 * @returns {void}
 */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "flex";  
//   dots[slideIndex-1].className += " active";
}