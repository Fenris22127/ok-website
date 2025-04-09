document.body.onload = function() {loadProgram()};

function loadProgram() {
    var container = document.getElementById("programContainer");
    
    for (var i = 0; i < programItems.length; i++) {
        var link = document.createElement("a");
        link.className = "program_point"
        link.setAttribute("href", programItems[i].link);
        link.setAttribute("target", "_blank");

        var program = document.createElement("div");
        program.className = "program_point_grid";
        var start = document.createElement("p");
        start.className = "start"
        var end = document.createElement("p");
        end.className = "end"
        var title = document.createElement("h3");
        title.className = "title"
        var description = document.createElement("p");
        description.className = "description"

        start.innerHTML = programItems[i].start;
        end.innerHTML = programItems[i].end;
        title.innerHTML = programItems[i].title;
        description.innerHTML = programItems[i].description;

        program.appendChild(start);
        program.appendChild(end);
        program.appendChild(title);
        program.appendChild(description);
        link.appendChild(program);
        container.appendChild(link);
    }

    
}