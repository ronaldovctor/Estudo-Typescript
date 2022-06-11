function echo(objeto: any){
   return objeto
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27}));

// Usando Generics
function echoMelhorado<T>(objeto: T): T{
   return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'João', idade: 27}).nome)

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5') não é number
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]){
   args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{nome: string, idade: number}>([
   {nome: 'Fulano', idade: 23},
   {nome: 'Cicrano', idade: 24},
   {nome: 'Beltrano', idade: 25},
])

type Aluno = {nome: string, idade: number}

imprimir<Aluno>([
   {nome: 'Fulano', idade: 23},
   {nome: 'Cicrano', idade: 24},
   {nome: 'Beltrano', idade: 25},
])

// Tipo Genérico
type Echo = <T>(data: T) => T 
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Class com Generics
abstract class OperacaoBinaria<T, R> {
   constructor(public operando1: T, public operando2: R){

   }

   abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number>{
   executar(): number {
      return this.operando1 + this.operando2
   }
}

console.log(new SomaBinaria(2, 5).executar())

// Está com erro no por conta do retorno apesar de se comportar corretamente no vídeo
// class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
//    getTime(data: Data): number{
//       let {dia, mes, ano} = data
//       return new Date(`${mes}/${dia}/${ano}`).getTime()
//    }
//    executar(): string {
//       const t1 = this.getTime(this.operando1)
//       const t2 = this.getTime(this.operando2)
//       const diferenca = Math.abs(t1 - t2)
//       const dia = 1000 * 60 * 60 * 24
//       return `${Math.ceil(diferenca/dia)} dia(s)`
//    }
// }

// const d1 = new Data(1, 2, 2020)
// const d2 = new Data(5, 2, 2020)
// console.log(new DiferencaEntreDatas(d1, d2).executar())

class Fila<T>{
   private fila: Array<T> = []

   constructor(...args: T[]){
      this.fila = args
   }
   
   entrar(elemento: T): void{
      this.fila.push(elemento)
   }

   proximo(): void {
      if(this.fila.length > 0){
         const primeiro = this.fila[0]
         this.fila.splice(0,1)
         console.log(primeiro)
      }else{
         console.log('Fila vazia!')
      }
         
   }

   imprimir(): void {
      console.log(this.fila)
   }
}

const myFila = new Fila<string>('Ana', 'Carlos', 'Pedro', 'Caio')
myFila.entrar('Thiago')
myFila.imprimir()
myFila.proximo()
myFila.proximo()
myFila.imprimir()
myFila.proximo()
myFila.proximo()
myFila.proximo()
myFila.proximo()
myFila.proximo()

// Desafio
type Par<T, R> = {chave: T, valor: R}

class Mapa<T, R>{
   private itens: Array<Par<T, R>> = new Array<Par<T, R>>()


   obter(chave: T): Par<T, R> | null{
      const resultado = this.itens.filter(i => i.chave === chave)
      return resultado ? resultado[0] : null
   }

   colocar(par: Par<T, R>): void{
      const resultado = this.obter(par.chave)
      resultado ? resultado.valor = par.valor : this.itens.push(par)
   }

   imprimir(): void{
      console.log(this.itens)
   }

   limpar(): void{
      this.itens = new Array<Par<T, R>>()
   }

}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()