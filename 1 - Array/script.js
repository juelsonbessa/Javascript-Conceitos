var arr = [5, 'Juelson', true, {teste: 1, vivo:true}];

console.log(arr);


arr[4] = 20;
console.log(arr);

console.log(arr[1]);

console.log("-----------------------------------")
var arrayName = ['Juelson', 'Miguel', 'Edmar', 'Jumar', {idade: 12, 
    estadoVida: function viver(){
        console.log('Vivo')
    }}];

console.log(arrayName);
console.log(arrayName[2])
console.log(arrayName[4].estadoVida)