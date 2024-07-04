// -----Requisição HTTP Simples
// function requisicaoHTTP(url, callbackSucesso, callbackErro){
//     fetch(url)
//     .then(resposta => {
//         if(resposta.ok){
//             return resposta.json()
//         }else{
//             throw new Error("Erro no retorno dos dados")
//         }
//     })
//     .then(dados => callbackSucesso(dados))
//     .catch(erro => callbackErro(erro))
// }

// function callbackSucesso(dados){
//     console.log("Requisicao executada com sucesso retornando os dados")
//     console.log(dados)
// }

// function callbackErro(erro){
//     console.log("Erro: falha na requisicao HTTP ou na url - ", erro.message)
// }

// requisicaoHTTP(`https://randomuser.me/api/?results=2`, callbackSucesso, callbackErro)



// -----Contador Assíncrono
// function conatrAteDez(mostrarNumero){
//     for(let i = 0 ; i <= 10 ; i++){

//         setTimeout(() => {
//             mostrarNumero(i)
//         }, i * 1000)
//     }
// }

// function mostrarNumero(numero){
//     console.log(numero)
// }

// conatrAteDez(mostrarNumero)


// -----Gerador de Nomes Aleatórios:
const nomes = ['juelson', 'Anastacia', 'Maria', 'Otavio', 'Veronica', 'Marta', 'Adriana', 'Edmar']
function gerarNomes(callbackExibir){

    for(let i = 0 ;i < 3; i++){
        
        const indiceAleatorio = Math.floor(Math.random() * (nomes.length - 1))
        const nomeAleatorio = nomes[indiceAleatorio]
        
        setTimeout(() => {
            callbackExibir(indiceAleatorio, nomeAleatorio)
        }, i * 2000)
    }
}

function callbackExibir(indice, nome){
    console.log(`Nome aleatorio[${indice}]: ${nome}`)
}

gerarNomes(callbackExibir)