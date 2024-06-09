for(var i = 10; i > 0; i--){
    
    console.log(i)
    if(i === 5){
        break
    }
}

console.log("Deu break no codigo")

console.log("---------------=======-----------------")
x = 10;

while(x < 100){

    x += 10;

    if(x === 50  || x === 90){
        console.log("CONTINUE")
        continue
    }

    console.log("Testando continue: " + x);
}