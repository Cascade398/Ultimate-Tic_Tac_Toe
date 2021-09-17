var container = document.querySelector(".container");

var str = "";

for(var i=0;i<9;i++){
    str += "<div class=\"big\">";
    for(var j=0;j<9;j++){
        str += "<div class=\"small\" id=\"" + (i*9 + j) + "\"></div>"
    }
    str += "</div>";
}

container.innerHTML = str;