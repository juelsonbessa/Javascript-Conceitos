// //Metodos para arrays
// const palavras = ["Escola", "Casa", "Computador", "Programador", "Ar condicionando"]

// palavras.forEach((palavra, indice) => {
//     console.log(indice+" -> "+palavra)
// })

// const modifyPalavra = palavras.map((palavra) =>{
//     if(palavra == "Programador"){
//         return (palavra = "FullStack")
//     }else{
//         return palavra
//     }
// })
// console.log(modifyPalavra)

// console.log("======================================")


const numbers = [1, 2, 500, 600, 700].filter((number) =>{
    return number >= 2
})

console.log(numbers)

const somaTotal = numbers.reduce((total, number) => {
    return total + number
})
console.log(somaTotal)


console.log("======================================")
//Classes

// class Pessoa{

//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }

//     falar(){
//         console.log(`O ${this.nome} falou Braaaaa`)
//     }
    
// }

// const pessoa1 = new Pessoa("Luis", 20);

// const {nome, idade} = pessoa1;

// console.log(nome)
// console.log(idade)
// pessoa1.falar()

// class SuperPessoa extends Pessoa{

//     constructor(nome, idade, genero){
//         super(nome, idade)
//         this.genero = genero
//     }

//     static ola(){
//         console.log("Ola mundo")
//     }
// }


// const pessoa2 = new SuperPessoa("Juelson", 20, "masculino")

// console.log(pessoa2.nome)
// console.log(pessoa2.idade)
// console.log(pessoa2.genero)

// SuperPessoa.ola()