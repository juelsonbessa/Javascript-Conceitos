
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        console.log("Apertou o Enter")
    }
})

document.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        console.log("Soltou o Enter")
    }
})