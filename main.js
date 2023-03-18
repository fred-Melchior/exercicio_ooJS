//Abstração:

function Funcionario(nome, cargo, idade){
    this.nome = nome
    this.cargo = cargo
    this.idade = idade
}

//Heranças:

function Professor(nome, cargo, idade, salario){
    this.salario = salario

    Funcionario.call(this, nome, cargo, idade)
}

function Diretor(nome, cargo, idade, salario){
    this.salario = salario

    Funcionario.call(this, nome, cargo, idade)
}

//Instâncias:

const professor = new Professor("Roberto", "Professor", 34, 3000)
const professora = new Professor("Roberta", "Professora", 29, 3000)
const diretora = new Diretor("Rosa", "Diretora", 45, 5000)

//Informaçoes dos objetos no terminal:

console.log(professor)
console.log(professora)
console.log(diretora)