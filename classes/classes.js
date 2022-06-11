"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4; // reatribuição
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4; // reatribuição
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta;
console.log(casamentoEsperto);
// Desafio
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return (this.preco * (1 - this.desconto)).toFixed(2);
    }
    resumo() {
        return `O produto ${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const produto1 = new Produto('Caixa de Leite', 7);
console.log(produto1.resumo());
const produto2 = new Produto('Óleo', 8, .10);
console.log(produto2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(10).fill(0).forEach(() => {
    carro1.acelerar();
});
console.log(carro1.acelerar());
Array(5).fill(0).forEach(() => {
    carro1.frear();
});
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor > 0 && valor < 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3; // não atende a validação 
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * Math.pow(raio, 2);
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(5));
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numbers) {
        this.resultado = numbers.reduce((t, a) => t + a);
    }
}
class Multiplicar extends Calculo {
    executar(...numbers) {
        this.resultado = numbers.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(4, 6, 2, 3);
console.log(c1);
c1 = new Multiplicar();
c1.executar(3, 5, 6, 1);
console.log(c1);
// Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return Date.now();
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8' inacessível 
// turboHelice.prefixo = 'PT-DEF' inacessível 
console.log(turboHelice);
//# sourceMappingURL=classes.js.map