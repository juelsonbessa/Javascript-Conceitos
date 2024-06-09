const objs = [
    {
        nome: 'juelson',
        idade: 20,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            'empresa': 'empresa X'
        },
        hobbies: ['Programar', 'Jogar', 'Ouvir musica'] 
    },
    {
        nome: 'Mateus',
        idade: 25,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Professor',
            'empresa': 'empresa Y',
        },
        hobbies: ['Ler', 'Jogar', 'Ver TV'] 
    },
]

//JSON
//Convertendo objecto em string
const jsonData = JSON.stringify(objs);
console.log(jsonData)
console.log(typeof jsonData)

//Convertendo JSON para objecto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})
