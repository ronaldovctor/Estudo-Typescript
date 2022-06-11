// string 
let nome: string = 'João'
console.log(nome)
// nome = 28 (não é possível)

// numbers
let idade: number = 27
// idade = 'Ana' (não é possível)
idade = 27.5
console.log(idade)

//  boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1 (não é possível)
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 20
console.log(typeof minhaIdade)
// minhaIdade = '27' (error)
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof(hobbies))

hobbies = [100, 200, 300]
console.log(hobbies)

// tuplas
let endereco: [string, number, number] = ["Av Principal", 120, 234]
console.log(endereco)

endereco = ["Rua Importante", 102, 302]
console.log(endereco)

// enums
enum Cor{
   Cinza, // 0
   Verde = 100, // 1 (atribuir valor fixo ao enum)
   Azul // 2
}

let minhaCor: Cor = Cor.Cinza
console.log(minhaCor)
console.log(Cor.Azul)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)

// funções
function retornaMeuNome(): string{
   return nome
  // return minhaIdade (error)
}
console.log(retornaMeuNome())

function digaOi(): void{
   console.log("Oi")
   // return minhaIdade (error)
}

function multiplicar(numA: number, numB: number): number{
   return numA * numB
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

// tipo função
let calculo: (a: number, b: number) => number
//calculo = digaOi
//calculo()
calculo = multiplicar
console.log(calculo(3, 17))

// objetos
let usuario: {nome: string, idade: number} = {
   nome: 'João',
   idade: 27
}
console.log(usuario)

// usuario = {}
// usuario = {
//    name: 'Maria',
//    age: 31,
// }

usuario = {
   nome: 'Maria',
   idade: 30
}
console.log(usuario)

// desafio
let funcionario: {supervisores: string[], ponto: (h: number) => string} = {
   supervisores: ["Calors", "Fernanda", "Thiago"],
   ponto(hora: number): string{
      return hora <= 8 ? "Ponto normal" : "Fora do horário"
   }
}

console.log(funcionario.supervisores)
console.log("Supervisores: ")
funcionario.supervisores.forEach(element => {
   console.log(element)
});

console.log(funcionario.ponto(8))
console.log(funcionario.ponto(10))


// Correção
type Funcionario = {
   supervisores: string[],
   baterPonto: (horas: number) => string
}

let novoFuncionario: Funcionario = {
   supervisores: ["Maria", "Luíza", "Pedro"],
   baterPonto(horas: number) {
      return horas <= 8 ? "Ponto normal" : "Fora do horário"
   }
}

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// never
function falha(msg: string): never{
   throw new Error(msg)
}

const produto = {
   nome: "Sabão",
   preço: -1,
   validarProduto(){
      if(!this.nome || this.nome.trim().length == 0){
         falha('É necessário um nome!')
      }
      if(!this.preço || this.preço < 0){
         falha('É necessário inserir um preço válido!')
      }
   }
}

produto.validarProduto()

// null
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
   nome: string,
   tel1: string,
   tel2: string | null
}

const contato1: Contato = {
   nome: 'Pedro',
   tel1: '854357842',
   tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo: null = null // any sem a definição de tipo null
//podeSerNulo = 12
console.log(podeSerNulo)
//podeSerNulo = '12'
console.log(podeSerNulo)

// desafio
type ContaBanco = {
   saldo: number,
   depositar: (quantia: number) => void
}

let contaBancaria: ContaBanco = {
   saldo: 3456,
   depositar(valor: number){
      this.saldo += valor
   }
}

type ClienteBanco = {
   nome: string,
   contaBancaria: ContaBanco,
   contatos: string[]
}

let correntista: ClienteBanco = {
   nome: 'Ana Silva',
   contaBancaria: contaBancaria,
   contatos: ['458423658', '485421358']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)