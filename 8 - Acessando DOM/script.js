//Acessando elementos via tag
var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo)

var lis = document.getElementsByTagName('li');

console.log(lis)

//Acessando elementos via id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo)

//Acessando elementos via classe
var lista = document.getElementsByClassName('item');

console.log(lista[3]);
for (let index = 0; index < lista.length; index++) {

    console.log(lista[index].innerHTML.toUpperCase())
}