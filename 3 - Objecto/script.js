
let pessoa = {
    nome: 'Juelson Júnior',
    idade: '20',
    dizerNome: function(){
        console.log('Meu nome é: ' + this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome
    }
}

pessoa.dizerNome();
pessoa.aniversario();

var sdc = pessoa.saudacao();
console.log('Ola ' + sdc)