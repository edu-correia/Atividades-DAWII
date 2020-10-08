//Atividade de DAW II
//Nome: Eduardo Correia
//RA: 19120
//Turma: 2INFD

var pessoas = ["João", "Maria", "Sebastião", "Antônio", "José"];

var filteredPeople = pessoas.filter((pessoa) => {
    return pessoa.length === 4;
})

console.log(filteredPeople);