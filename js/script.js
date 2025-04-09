function myFunction() {
    var menu = document.getElementById("navItems");
    // if (x.className === "nav") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "nav";
    // }
    
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "flex";
    }
}

function readContents() {
    
    
}