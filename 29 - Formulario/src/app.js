var form = document.getElementById("form")
var inputs = document.querySelectorAll(".input-form")
var spanErro = document.querySelectorAll(".span-required-error")

function showError(index){
    inputs[0].classList.add("border-red-600")
    spanErro.classList.add("block");
}

function hiddenError(index){
    inputs[0].classList.remove("border-red-600")
    spanErro.classList.remove("block")
}

function cadastroUser(nome){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nome == "juelson"){
                resolve("certo")
            }else{
                reject(new Error("Nome invalido"))
            }
        }, 2000)
    })
}

async function finalizarCadastro(){
    try {
        inputs['juelson']
        const dados = await cadastroUser(nome)
        console.log("Tudo certo")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

finalizarCadastro()