var arrFrase = ['A', 'banana', 'esta', 'podre'];

console.log('----------Testando de frases')
console.log(arrFrase);

console.log('Adicionando um elemento no final do array com push')
arrFrase.push('mano');
console.log(arrFrase);

console.log('Adicionando um elemento no inicio do array com unshift')
arrFrase.unshift('Velho');
console.log(arrFrase)

console.log('Mudando um elemento de uma determinada posição no array com splice')
arrFrase.splice(1, 1, 'a');
console.log(arrFrase)

console.log("------------------------")

console.log('Transformando array em string com o join');
console.log(arrFrase.join(" "))

console.log("------------------------")

console.log('Removendo um elemento no final do array com pop')
arrFrase.pop()
console.log(arrFrase)

console.log('Removendo um elemento no inicio do array com shift')
arrFrase.shift();
console.log(arrFrase)

console.log('------------=================----------------')
console.log('------------Brincando com array de muitos tipos----------------')
var arrAny = ['Miguel', 
             {nome: 'Juelson', 
                estadoEstudo: function(){console.log("Estudando...")}
             }, 
             [1, 2, 4, 5, 'teste']];

console.log(arrAny[1].estadoEstudo)
console.log('------------=================----------------')
console.log('------------Objecto----------------')

const pessoa = {
    nome: 'Juelson',
    sobrenome: 'junior',
    estadoCivil: 'Solteiro'
}

console.log("Nome: " + pessoa.nome + " " + pessoa.sobreNome)
console.log("Estado civil: " + pessoa.estadoCivil)