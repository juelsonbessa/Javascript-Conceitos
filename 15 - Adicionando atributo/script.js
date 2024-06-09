//Adicionar atributo no elemento
var titulo = document.querySelector("#titulo");
titulo.setAttribute("class", "titulo_principal");

console.log(titulo)

var btn = document.getElementById("btn");

btn.setAttribute("disabled", "disabled");

//Removendo atributo do elemento
var lista = document.querySelector("#lista");
lista.removeAttribute("id");
