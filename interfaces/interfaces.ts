interface Humano {
   nome: string
   idade?: number // propriedade da interface opcional
   [prop: string]: any // propriedade da interface do tipo dinâmico
   saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
   console.log(`Óla, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano){
   pessoa.nome = 'Maria'
   console.log(`Óla, ${pessoa.nome}`)
}

const pessoa: Humano = {
   nome: 'Paulo',
   idade: 27,
   saudar(sobrenome: string){
      console.log(
         `Olá, meu nome é ${this.nome} ${sobrenome}`
      )
   }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Thiago', idade:27, altura: 1.72})
pessoa.saudar('Fernandes')

// Usando Classes...
class Cliente implements Humano{
   nome: string = ''
   ultimaCompra: Date = new Date
   saudar(sobrenome: string){
      console.log(
         `Olá, meu nome é ${this.nome} ${sobrenome}`
      )
   }
}

const meuCliente = new Cliente
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface Função
interface FuncaoCalculo {
   (a:number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function(base: number, exp: number){
   // Math.pow(3,10)
   // 3 ** 10
   return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3,10))

// Herança
interface A {
   a(): void
}

interface B {
   b(): void
}

interface ABC extends A, B{
   c(): void
}

class RealA implements A{
   a(): void{

   }
}

class RealAB implements A,B{
   a():void{}
   b(): void{}
}

class RealABC implements ABC{
   a():void{}
   b(): void{}
   c(): void{}
}

abstract class AbstractABD implements A, B{
   a(): void{}
   b(): void{}
   abstract d(): void
}

// Utilização de interface pra implementar uma função a partir do prototype do javascript
interface Object{
   log(): void
}

Object.prototype.log = function() {
   console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = {
   nome: 'Pedro',
   toString(){
      return this.nome
   }
}

cli.log()