//SetTimeout e clearTimeeout
var x = 0;

var myTimer = setTimeout(function(){
    console.log("O x é 0");
}, 1000)

var x = 5;

if(x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}
//setInterval e clearInterval
var myInterval = setInterval(function(){
    console.log("Imprimindo documento...")
}, 500)

setTimeout(function(){
    clearInterval(myInterval);
    console.log("Parou de imprimir")
}, 1500)



