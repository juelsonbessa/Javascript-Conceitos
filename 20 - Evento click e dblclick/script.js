var btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    console.log("Clicou aqui")
    //this.style.color = "red"
    this.style.cssText = "color: red;"

    var txtBtn = document.createElement("p");
    var textoBtn = document.createTextNode("Você clicou no botão");
    txtBtn.appendChild(textoBtn);
    
    var body = document.querySelector("body");

    body.appendChild(txtBtn)

    console.log(body)
})

var titulo = document.getElementById("titulo");

titulo.addEventListener("dblclick", function(){
    var paragrafo = document.querySelector("#paragrafo");

    paragrafo.remove();
})