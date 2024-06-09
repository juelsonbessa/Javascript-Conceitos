var div = document.createElement("div");

div.classList = "div_create";


var container = document.querySelector(".container");

//Inserindo elemento filho
container.appendChild(div);

//Inserindo o elemento antes
var div2 = document.createElement("div")

div2.classList = "div_before";

var div3 = document.querySelector(".container .div_create");

console.log(div3)

container.insertBefore(div2, div3)