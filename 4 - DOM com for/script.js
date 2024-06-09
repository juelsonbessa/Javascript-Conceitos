var listaFrutas = ['Maçã', 'Banana', 'Uva', 'Pera', 'Jindungo'];

//Criando elementos com js
var listaUl = document.createElement('ul');

// Pegando a tag body do html
var body = document.getElementsByTagName('body');

//pegando a posição exata da tag body e adicionando a ul criada
body[0].appendChild(listaUl);

//Pegando a tag ul que criei apartir do html
var listaNoBody = document.getElementsByTagName('ul');

// console.log(listaNoBody);

for(var i = 0; i < listaFrutas.length ;i++){

    //Criando a tag li apartir do js
    var LiFor = document.createElement('li');

    //Criando o texto da li com contextNode e adicionando o conteudo do array
    var textoLi = document.createTextNode(listaFrutas[i]);

    //Adicionando o texto na li 
    LiFor.appendChild(textoLi);
    //adiconando a li com o texto na ul do html
    listaNoBody[0].appendChild(LiFor);

}

