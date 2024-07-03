const nome = ['juelson', 'João', 'Maria', 'Pedro', 'Carlos', 'Sofia', 'Rafael', 'Roberta', 'Bruno', 'Amanda']
function gerarNomes(callbackExibir){

    for(let i = 0; i < 5; i++){
        const indiceAleatorio = Math.floor(Math.random() * nome.length)
        const nomeAleatorio = nome[indiceAleatorio]

        setTimeout(() => {
            callbackExibir(i, nomeAleatorio)
        }, 1000);
    }
}
function callbackExibir(pos, nome){
    console.log(`Nome aleatorio[${pos}]: ${nome}`)
}

gerarNomes(callbackExibir)