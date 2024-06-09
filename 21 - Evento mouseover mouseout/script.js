var titulo = document.querySelector("#titulo");

titulo.addEventListener("mouseover", function(){
    var legenda = document.getElementById("legenda");

    this.style.backgroundColor = "yellow";
    legenda.classList.remove("hide")
});

titulo.addEventListener("mouseout", function(){
    var legenda = document.getElementById("legenda");

    this.style.backgroundColor = "white";
    legenda.classList.add("hide")
})

