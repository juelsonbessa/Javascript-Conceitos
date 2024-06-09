//Criando elemento
var novoParagrafo = document.createElement("p");
console.log(novoParagrafo)

//Inserindo texto no elemento
var textoParagrafo = document.createTextNode("Este é o texto do novo paragrafo criado pelo js");

//Adicionando o texto no elemento

novoParagrafo.appendChild(textoParagrafo);


var body = document.querySelector("body");

body.appendChild(novoParagrafo)


var container = document.querySelector("#container")

var span = document.createElement("span");
var textoSpan = document.createTextNode("Texto do span criando com js")
span.appendChild(textoSpan);
container.appendChild(span);
