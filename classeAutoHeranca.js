class Automovel {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirDetalhes() {
        return `${this.marca}, ${this.modelo}, ${this.ano}`
    }
}

class Carro extends Automovel {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }
    exibirDetalhes() {
        return `${super.exibirDetalhes()}, Portas: ${this.portas}`
    }
}

class Moto extends Automovel{
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }
    exibirDetalhes() {
        return `${super.exibirDetalhes()}, cilindrada: ${this.cilindrada}`
    }
}

let moto1 = new Moto("Honda", "Hornet 600", 2014, 600);
console.log(moto1.exibirDetalhes());

let carro1 = new Carro("BMW", "BMW M2 CS", 2026, 2);
console.log(carro1.exibirDetalhes());