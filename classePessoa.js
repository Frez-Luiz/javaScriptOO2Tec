class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudar(){
        console.log(`Olá! Meu nome é ${this.nome}!, tenho ${this.idade} anos, e minha profissão é ${this.profissao}.`)
    }
    fazerAniversario(){
        this.idade += 1;
        console.log(`Feliz aniversário ${this.nome}! Agora você tem ${this.idade} anos.`)
    }
}

let pessoa1 = new Pessoa ("Xandão", 29, "Mecânico");
pessoa1.saudar();
pessoa1.fazerAniversario();