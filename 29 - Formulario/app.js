var inputs = document.querySelectorAll(".form input");
var btnSubmit = document.querySelector("#enviarForm");

btnSubmit.addEventListener('click', (e) =>{
    e.preventDefault();

    inputs.forEach((input) => {
        if(input.type.length == "text" > 3){
            console.log("nome certo")
        }else{
            console.log("nome errado")
        }
    })
})