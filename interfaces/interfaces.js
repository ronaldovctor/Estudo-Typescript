"use strict";
function saudarComOla(pessoa) {
    console.log(`Óla, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Maria';
    console.log(`Óla, ${pessoa.nome}`);
}
const pessoa = {
    nome: 'Paulo',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Thiago', idade:27, altura: 1.72})
pessoa.saudar('Fernandes');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // Math.pow(3,10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
class RealA {
    a() {
    }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map