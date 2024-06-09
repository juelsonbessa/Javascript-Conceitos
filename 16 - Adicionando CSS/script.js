
var titulo = document.querySelector("#titulo");
//Adiconando um estilo por vez
titulo.style.color = "red";

//Adicionando varios estilos
var paragrafo = document.getElementById("paragrafo");

paragrafo.style.cssText = "color: pink; background-color: purple; font-size: 3rem;";

var button = document.querySelector("button");

button.setAttribute("disabled", "disabled")

