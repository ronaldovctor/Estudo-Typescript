
function logarClasse(construtor: Function){
   console.log(construtor)
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean){
   return valor? logarClasse : decoratorVazio
}

// Factory
function decorator(obj: { a: string, b?: number}){
   return function(_: Function): void{
      console.log(obj.a + ' ' + obj.b)
   }
}


interface Eletrodomestico{
   imprimir?(): void
}


//@logarClasse
//@logarClasseSe(true)
//@decorator({a: 'Teste'})
//@logarObjeto
//@imprimivel
class Eletrodomestico{
   constructor(){
      console.log('...novo')
   }
}

type Construtor = { new(...args: any[]): {}}

function logarObjeto(construtor: Construtor){
   return class extends construtor{
      constructor(...args: any[]){
         console.log('Antes...')
         super(...args)
         console.log('Depois...')
      }
   }
}

//new Eletrodomestico()
//new Eletrodomestico()
//new Eletrodomestico()

function imprimivel(construtor: Function){
   construtor.prototype.imprimir = function(){
      console.log(this)
   }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

// Desafio decorator PerfilAdmin
const usuarioLogado = {
   nome: 'Pedro',
   admin: false
}

@perfilAdmin
class MudancaAdministrativa{
   critico(): void {
      console.log('Algo crítico foi alterado!')
   }
}

function perfilAdmin<T extends Construtor>(construtor: T) {
   return class extends construtor {
      constructor(...args: any[]) {
         super(...args)
         if(!usuarioLogado.admin)
            throw new Error('Sem permissão')
      }     
   }     
}

class ContaCorrente{
   @naoNegativo
   private saldo: number

   constructor(saldo: number){
      this.saldo = saldo
   }

   @congelar
   sacar(@paramInfo valor: number){
      if(valor <= this.saldo){
         this.saldo -= valor
         return true
      }else{
         return false
      }
   }

   @congelar
   getSaldo(){
      return this.saldo
   }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function(){
//    return this['saldo'] + 7000
// }

console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomeMetodo: string, descriptor: PropertyDescriptor){
   console.log(alvo)
   console.log(nomeMetodo)
   descriptor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string){
   delete alvo[nomePropriedade]
   Object.defineProperty(alvo, nomePropriedade, {
      get: function(): any{
         return alvo['_' + nomePropriedade]
      },
      set: function(valor: any): void{
         if(valor < 0){
            throw new Error('Saldo Inválido!')
         }else{
            alvo['_' + nomePropriedade] = valor
         }
      }
   })
}

function paramInfo(alvo: any, nomeMetodo: string, 
   indiceParam: number){
      console.log(`Alvo: ${alvo}`)
      console.log(`Método: ${nomeMetodo}`)
      console.log(`ìndice Param: ${indiceParam}`)
   }