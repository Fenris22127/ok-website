var folder = "../content/img/";

document.addEventListener("DOMContentLoaded", function() {
    // $.getJSON("../php/get-images.php", {
    //     name: "2",
    //     dir: folder + "home"
    // }, function(data) {
    //     var container = document.getElementById("test-div");
    //     if (data.path) {
    //         var img = document.createElement("img");
    //         img.src = data.path;
    //         container.appendChild(img);
    //     } else {
    //         container.textContent = "Image not found.";
    //     }
    // });
    test("2", "home");
});

function test(imgName, dir) {
    $.getJSON("../php/get-images.php", {
        name: imgName,
        dir: folder + dir
    }, function(data) {
        var container = document.getElementById("test-div");
        if (data.path) {
            var img = document.createElement("img");
            img.src = data.path;
            container.appendChild(img);
        } else {
            container.textContent = "Image not found.";
        }
    });
}