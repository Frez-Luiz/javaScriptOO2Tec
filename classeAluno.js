class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;

    }
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
    obterStatus() {
        const media = this.calcularMedia()

        if (media >= 7) {
            return "Aprovado"
        } else if (media >= 5) {
            return "Recuperação"
        } else {
            return "Reprovado"
        }
    }
    exibirRelatorio(){
        console.log(`Relatório do aluno ${this.nome}`);
        console.log(`Mátricula: ${this.matricula}`);
        console.log(`Média Final ${this.calcularMedia().toFixed(2)}`);
        console.log(`Status ${this.obterStatus()}`);
    }
}
let aluno1 = new Aluno("Luiz Felipe", 5500, [8.0, 7.3, 9.0]);
console.log(aluno1.calcularMedia());
console.log(aluno1.obterStatus());
aluno1.exibirRelatorio()
