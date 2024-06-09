// function primeiraFuncao(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Esperou isso aqui!");
//             resolve();
//         }, 1000)
//     })
// }

// async function segundaFuncao(){
//     console.log("Iniciou");
//     await primeiraFuncao();
//     console.log("Fim");
// }

// segundaFuncao();

function getUser(id){
    return fetch(`https:/reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function showUserName(id){

    try {
        const user = await getUser(id)

        console.log(`O nome do usuario é ${user.data.first_name}`)
    } catch (error) {
        console.log(`ERRO: ${error}`)
    }
}

showUserName(2)