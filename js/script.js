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