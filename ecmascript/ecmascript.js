"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
// console.log(acao) (error)
const cpf = '234.454.234-89';
// cpf = '324.532.678-33' (error)
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i) (error)
// Arrow function
const somar = (n1, n2) => n1 + n2;
console.log(somar(20, 5));
const subtrair = (n1, n2) => {
    return n1 - n2;
};
console.log(subtrair(20, 5));
const saudacao = () => console.log('Olá!');
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
falarCom('Carla');
// this
// function normalComThis(){
//    console.log(this)
// }
// const normalComThisEspecial = normalComThis.bind({nome: 'Ana'})
// normalComThisEspecial() (o this será 'Ana')
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis.bind({nome: 'Ana'})
// arrowComThisEspecial()
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva();
contagemRegressiva(10);
// Rest & Spread
const numbers = [10, 1, 99, -5];
console.log(Math.max(...numbers)); // Spread
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', ...turmaA, 'Thiago', ...turmaA];
console.log(turmaB);
function retornaArray(a, ...args) {
    console.log(a);
    return args;
}
const numeros = retornaArray(1, 2, 40, 23, 11, 78);
console.log(numeros);
console.log(retornaArray(1, ...numbers));
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480gb',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const preco = item.preco;
console.log(nomeItem);
console.log(preco);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// Template String
const usuarioID = 'SuporteCod3r';
const notificacoes = '19';
const boasVindas = `
   Boas vindas ${usuarioID},
   Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;
console.log(boasVindas);
// Desafio
// Exercício 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercício 2
const dizerOla = (nome = 'Pessoa') => {
    console.log(`Olá ${nome}!`);
};
dizerOla('Ana');
// Exercício 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercício 4
const nums2 = [-3, 33, 38, 5];
const array = [55, 20, ...nums2];
console.log(array);
// Exercício 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome: pN, experiencia: xp } = cientista;
console.log(pN, xp);
// Callback
// function esperar3s(Callback: (dado: string) => void){
//    setTimeout(() => {
//       Callback('3s depois...')
//    }, 3000)
// }
// esperar3s(function(resultado: string){
//    console.log(resultado)
// })
// function esperar3sPromise(){
//    return new Promise((resolve: any) => {
//       setTimeout(() => {
//          resolve('3s depois... (Promise)')
//       }, 3000)
//    })
// }
// esperar3sPromise().then(dado => console.log(dado))
// fetch('https://swapi.dev/api/people/1')
//    .then(res => res.json())
//    .then(personagem => personagem.films)
//    .then(films => fetch(films[0]))
//    .then(resFilm => resFilm.json())
//    .then(film => console.log(film.title))
//# sourceMappingURL=ecmascript.js.map