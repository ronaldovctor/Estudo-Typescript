class Data{
   // Public por padrão
   dia: number
   mes: number
   ano: number

   constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
      this.dia = dia
      this.mes = mes
      this.ano = ano
   }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4 // reatribuição
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data
console.log(casamento)


class DataEsperta{
   constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
   }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4 // reatribuição
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta
console.log(casamentoEsperto)

// Desafio

class Produto{
   constructor(public nome: string, public preco: number, public desconto: number = 0 ){}

   precoComDesconto(): string{
      return (this.preco * (1 - this.desconto)).toFixed(2)
   }

   resumo(): string{
      return `O produto ${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
   }
}

const produto1 = new Produto('Caixa de Leite', 7)
console.log(produto1.resumo())
const produto2 = new Produto('Óleo', 8, .10)
console.log(produto2.resumo())

class Carro {
   private velocidadeAtual: number = 0

   constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){

   }

   protected alterarVelocidade(delta: number): number{
      const novaVelocidade = this.velocidadeAtual + delta
      const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

      if(velocidadeValida){
         this.velocidadeAtual = novaVelocidade
      }else{
         this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
      }

      return this.velocidadeAtual
   }

   public acelerar(): number{
      return this.alterarVelocidade(5)
   }

   public frear(): number{
      return this.alterarVelocidade(-5)
   }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(10).fill(0).forEach(()=>{
   carro1.acelerar()
})
console.log(carro1.acelerar())

Array(5).fill(0).forEach(()=>{
   carro1.frear()
})
console.log(carro1.frear())

class Ferrari extends Carro{
   constructor(modelo: string, velocidadeMaxima: number){
      super('Ferrari', modelo, velocidadeMaxima)
   }

   public acelerar(): number {
      return this.alterarVelocidade(20)
   }

   public frear(): number {
      return this.alterarVelocidade(-15)
   }
}  

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters
class Pessoa{
   private _idade: number = 0

   get idade(): number{
      return this._idade
   }

   set idade(valor: number){
      if(valor > 0 && valor < 120){
         this._idade = valor
      }
   }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3 // não atende a validação 
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {
   static PI: number = 3.1416

   static areaCirc(raio: number): number {
      return Matematica.PI * Math.pow(raio, 2)
   }
}

console.log(Matematica.areaCirc(5))

// Classe abstrata
abstract class Calculo {
   protected resultado: number = 0

   abstract executar(...numbers: number[]): void

   getResultado(): number{
      return this.resultado
   }
}

class Soma extends Calculo{
   executar(...numbers: number[]): void{
      this.resultado = numbers.reduce((t, a) => t + a)
   }
}

class Multiplicar extends Calculo{
   executar(...numbers: number[]): void {
      this.resultado = numbers.reduce((t, a) => t * a)
   }
}

let c1 = new Soma()
c1.executar(4, 6, 2, 3)
console.log(c1)

c1 = new Multiplicar()
c1.executar(3, 5, 6, 1)
console.log(c1)


// Singleton
class Unico {
   private static instance: Unico = new Unico
   private constructor(){}

   static getInstance(): Unico {
      return Unico.instance
   }

   agora(){
      return Date.now()
   }
}

console.log(Unico.getInstance().agora())

// Somente Leitura
class Aviao {
   public readonly modelo: string // atributo readonly na classe

   constructor(modelo: string, public readonly prefixo: string){ // atributo readonly no constructor
      this.modelo = modelo
   }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8' inacessível 
// turboHelice.prefixo = 'PT-DEF' inacessível 
console.log(turboHelice)