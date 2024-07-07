// ------BUscando dados de uma API
// function buscarUsuarioId(id){
//     //const urlExterna = `https://api.github.com/users/${id}`
//     return new Promise((resolve, reject) => {

//         fetch(`https://api.github.com/users/${id}`)
//         .then(resposta => resposta.json())
//         .then(data => resolve(data))
//         .catch(erro => reject("Erro: falha na requisição a API", erro.message))
//     })
// }

// buscarUsuarioId(20)
// .then(data => {
//     console.log(data.type);
// })
// .catch(error =>{
//     console.error("falha no retorno das informacoes")
// })


// -----Verificar idade

// function verificarIdade(idade){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(idade >= 18){
//                 resolve(true)
//             }else{
//                 reject(false)
//             }
//         }, 1000)
//     })
// }

// verificarIdade(30)
// .then(resposta => { console.log("usuarios maior de idade") })
// .catch(erro => {console.error("Usuario menor de idade")})

// -----Gerar usuarios aleatorios
function gerarUsuariosAleatorios(quantidade){

    if(quantidade <= 0){
        return Promise.reject('Quantidade invalida')
    }

    const promises = []
    for(let i = 0; i < quantidade; i++){
        promises.push(gerarUsuarioAleatorio())
    }

    return Promise.all(promises)
}

function gerarUsuarioAleatorio(){
    return new Promise((resolve, reject) =>{
        nome = geraNomeAleatorio()

        resolve(nome)
    })
}

function geraNomeAleatorio(){
    const nome = ['juelson', 'marta', 'mario', 'junior', 'bessa', 'silva', 'edmar', 'miguel']

    const indiceAleatorio = Math.floor(Math.random() * nome.length)
    return nome[indiceAleatorio]

}

gerarUsuariosAleatorios(0)
.then(usuarios => console.log(usuarios))
.catch(erro => console.log(erro))
