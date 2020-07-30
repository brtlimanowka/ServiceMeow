let colors = ["#99dfff", "#9999ff", "#e699ff", "#99ffe6", "#b3ff99", "#ffe699"]
let boxes = document.getElementsByClassName("box")
let new_incident = document.getElementById("new-inc")
let body = document.getElementsByTagName("body")[0]
var default_color = "#99dfff"
var selected_color = default_color

var palette_selection = {
    "lightblue": { "primary": "#99dfff", "secondary": "#ccefff" },
    "violet": { "primary": "#9999ff", "secondary": "#ccccff" },
    "purple": { "primary": "#e699ff", "secondary": "#f2ccff" },
    "seafoam": { "primary": "#99ffe6", "secondary": "#ccfff2" },
    "lime": { "primary": "#b3ff99", "secondary": "#d9ffcc" },
    "peach": { "primary": "#ffe699", "secondary": "#fff2cc" }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i]
    boxes[i].addEventListener("click", function() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add("inactive")
        }
        this.classList.remove("inactive")
        selected_color = this.getAttribute("id")
        body.style.backgroundImage = "linear-gradient(" + palette_selection[selected_color]["primary"] + ", #fff)"
    })
}

new_incident.addEventListener("click", function() { 
    setTimeout(function() { 
        self.close()
    }, 100)
})