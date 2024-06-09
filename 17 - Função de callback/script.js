function exibir(num){
    console.log("Resultado:", num);
}

function somar(a, b, cb){
    const op = a + b;
    cb(op);
}

function multiplicar(a, b, callback){
    const op = a * b;
    callback(op);
}

somar(110, 3, exibir);
multiplicar(2, 5, exibir);