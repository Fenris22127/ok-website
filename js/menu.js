/**
 * Function to toggle the display of the navigation menu for mobile view.
 * @returns {void}
 */
function menu() {
    var menu = document.getElementById("navItems");
    
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}

// Collection of color variables for light and dark themes
var background_light = "#ffffff";
var background_dark = "#111111";
var secondary_light = "#e1e1e1";
var secondary_dark = "#1b1b1b";
var text_light = "#1e1e1e";
var text_dark = "#ffffff";
var text_body_light = "#000000";
var text_body_dark = "#f1f1f1";
var text_secondary_light = "#595959";
var text_secondary_dark = "#a8a8a8";

// Check if the color mode is set in localStorage and apply it
const container = document.body;
if(localStorage.getItem("color-mode")){
    container.setAttribute("color-mode", localStorage.getItem("color-mode")); 
    toggleDark(1)
}

/**
 * Switches the color mode between light and dark.
 * @param {int} r - If r is set, the mode switches to the other mode
 * @returns {void}
 */
function toggleDark(r) {
    const dataTheme = container.getAttribute("color-mode");
    var icons = document.getElementsByClassName("color-mode-icon")
    var x_icons = document.getElementsByClassName("social_media_x")
    let theme_switch;
    if(dataTheme === "light") {
        theme_switch = 1
    } else {
        theme_switch = 0
    }
    if(r){theme_switch = !theme_switch}//so the opposite of the theme stored is used when calling this function 
    if (theme_switch) {
        container.setAttribute("color-mode", "dark");
        setDark(icons, x_icons)
        localStorage.setItem("color-mode", "dark");
    } else {
        container.setAttribute("color-mode", "light");
        setLight(icons, x_icons)
        localStorage.setItem("color-mode", "light");
    }
}

/**
 * Sets the dark theme colors and updates the icons.
 * @param {HTMLCollectionOf<Element>} icons The icons of the theme switch buttons
 * @param {HTMLCollectionOf<Element>} x_icons The icons of the x social media icons
 * @returns {void}
 */
function setDark(icons, x_icons) {
    document.documentElement.style.setProperty('--background', background_dark);
    document.documentElement.style.setProperty('--secondary', secondary_dark);
    document.documentElement.style.setProperty('--text', text_dark);
    document.documentElement.style.setProperty('--text-body', text_body_dark);
    document.documentElement.style.setProperty('--text-secondary', text_secondary_dark)
    //Update theme switch icons
    for (let i = 0; i < icons.length; i++) {
        icons[i].innerHTML = "light_mode"
    }
    //Update x social media icons
    for (let i = 0; i < x_icons.length; i++) {
        let src = x_icons[i].getAttribute("src")
        if(src.includes("x_logo_light")){
            x_icons[i].setAttribute("src", src.replace("x_logo_light", "x_logo_dark"))
        }
    }
}

/**
 * Sets the light theme colors and updates the icons.
 * @param {HTMLCollectionOf<Element>} icons The icons of the theme switch buttons
 * @param {HTMLCollectionOf<Element>} x_icons The icons of the x social media icons
 */
function setLight(icons, x_icons) {
    document.documentElement.style.setProperty('--background', background_light);
    document.documentElement.style.setProperty('--secondary', secondary_light);
    document.documentElement.style.setProperty('--text', text_light);
    document.documentElement.style.setProperty('--text-body', text_body_light);
    document.documentElement.style.setProperty('--text-secondary', text_secondary_light);
    //Update theme switch icons
    for (let i = 0; i < icons.length; i++) {
        icons[i].innerHTML = "dark_mode"
    }
    //Update x social media icons
    for (let i = 0; i < x_icons.length; i++) {
        let src = x_icons[i].getAttribute("src")
        if(src.includes("x_logo_dark")){
            x_icons[i].setAttribute("src", src.replace("x_logo_dark", "x_logo_light"))
        }
    }
}