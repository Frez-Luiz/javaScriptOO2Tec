class Carro{
    constructor(nome, ano, marca, motor){
        this.nome = nome;
        this.ano = ano;
        this.marca = marca;
        this.motor = motor;
    }
    apresentacao(){
        console.log(`Olá, meu carro é um ${this.nome}, do ano ${this.ano}, da marca: ${this.marca}. Com o motor potente ${this.motor}!`);
    }
}
let carro1 = new Carro ("Ferrari F80", 2024, "Ferrari", "V6 Biturbo com 3 motores elétricos, gerando 1200 cv");
carro1.apresentacao();