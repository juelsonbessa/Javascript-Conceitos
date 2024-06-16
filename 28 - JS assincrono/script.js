// //Exemplo 1 de js assincrono
// function mostrarNome(id){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             if(id == 1){
//                 resolve("Juelson junior");
//             }else{
//                 reject(new Error("Id não informado"));
//             }
//         }, 1000);
//     })
// }

// async function lerDados(){
//     console.log("Nome1")
//     try{
//         const dados = await mostrarNome(10);
//         console.log("Nome: ",dados);
//     }catch(error){
//         console.log("Deu o error:", error.message)
//     }
//     console.log("Nome2")
// }

// lerDados();

async function obterNomeAPI(usuario){
    const urlAPI = `https://api.github.com/users/${usuario}`;

    const tempoEspera = 1000;
    try{
        await new Promise((resolve) => setTimeout(resolve, tempoEspera))

        const resposta = await fetch(urlAPI);
        const dadosUsuario = await resposta.json();

        if(resposta.ok){
            return dadosUsuario.name;
        }else{
            throw new Error("Usuario não encontrado");
        }
    }catch(error){
        console.error("Error:", error.message);
        return null;
    }
}

console.log("Aguarde até o retorno do nome...")

async function buscarUsuario(){
    const nomeUsuario = "juelsonbessa";
    const nome = await obterNomeAPI(nomeUsuario);

    if(nome){
        console.log("Nome usuario: ", nome);
    }else{
        console.error("Falha ao retornar o nome do usuario(-_-)");
    }
}

buscarUsuario();