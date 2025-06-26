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
document.addEventListener("DOMContentLoaded", function() {
    $.getJSON("../php/list-images.php", function(data) {
        var container = document.getElementById("slideshow-container");
        var imageAmount = data.length;

        for (var i = 0; i < imageAmount; i++) {
            createSlide(container, data[i], i, imageAmount);
        }
        // Nach dem Laden der Slides, zeige den ersten Slide an:
        showSlides(slideIndex);
    });
});

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

    container.appendChild(slide);
}

/**
 * Initializes the slider by showing the first slide and setting up the event listeners for the dots.
 */
let slideIndex = 1;

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
  //let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "flex";
}

