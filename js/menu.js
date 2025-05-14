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

function clear() {

}

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

const container = document.body;
if(localStorage.getItem("color-mode")){
    container.setAttribute("color-mode",localStorage.getItem("color-mode")); 
    toggleDark(1)
} 
//actually use the saved value

function toggleDark(r) {//this function is executed when switching from the current theme to the other
    const dataTheme = container.getAttribute("color-mode");
    var icon = document.getElementById("color-mode-icon")
    let theme_switch;
    if(dataTheme === "light") {
        theme_switch = 1
    } else {
        theme_switch = 0
    }
    if(r){theme_switch = !theme_switch}//so the opposite of the theme stored is used when calling this function 
    if (theme_switch) {
        container.setAttribute("color-mode", "dark");
        setDark(icon)
        localStorage.setItem("color-mode", "dark");
    } else {
        container.setAttribute("color-mode", "light");
        setLight(icon)
        localStorage.setItem("color-mode", "light");
    }
}


function setDark(icon) {
    document.documentElement.style.setProperty('--background', background_dark);
    document.documentElement.style.setProperty('--secondary', secondary_dark);
    document.documentElement.style.setProperty('--text', text_dark);
    document.documentElement.style.setProperty('--text-body', text_body_dark);
    document.documentElement.style.setProperty('--text-secondary', text_secondary_dark)
    icon.innerHTML = "light_mode"
}

function setLight(icon) {
    document.documentElement.style.setProperty('--background', background_light);
    document.documentElement.style.setProperty('--secondary', secondary_light);
    document.documentElement.style.setProperty('--text', text_light);
    document.documentElement.style.setProperty('--text-body', text_body_light);
    document.documentElement.style.setProperty('--text-secondary', text_secondary_light);
    icon.innerHTML = "dark_mode"
}