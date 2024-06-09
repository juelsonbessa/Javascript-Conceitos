var h3 = document.createElement("h3");
h3.classList = "txtH3";
var txtH3 = document.createTextNode("Texto do h3 criado com js");

h3.appendChild(txtH3);

var titulo = document.querySelector("#titulo");

var pai = titulo.parentNode;

pai.replaceChild(h3, titulo);