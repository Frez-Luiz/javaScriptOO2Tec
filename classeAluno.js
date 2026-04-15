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
    exibirRelatorio() {
        console.log("===================================");
        console.log(`Relatório do aluno ${this.nome}`);
        console.log(`Mátricula: ${this.matricula}`);
        console.log(`Média Final ${this.calcularMedia().toFixed(2)}`);
        console.log(`Status ${this.obterStatus()}`);
        console.log("===================================")
    }
}

const turma = [
    new Aluno("Luiz Felipe", "CGM5050", [9, 2, 8, 5, 8, 2]),
    new Aluno("Bruno Wigers", "CGM5051", [8.3, 3.4, 9.2]),
    new Aluno("Guilherme Cruz", "CGM5052", [9.0, 5.6, 6.7]),
    new Aluno("Beatriz", "CGM5053", [7.4, 6.8, 8.3]),
    new Aluno("Érica Santos", "CGM5054", [5.9, 7.5, 5.3])
]

console.log(turma[1]);

for(let i = 0; i < turma.length; i++){
    turma[i].exibirRelatorio();
}



// let aluno1 = new Aluno("Luiz Felipe", 5500, [8.0, 7.3, 9.0]);


// console.log(aluno1.calcularMedia());
// console.log(aluno1.obterStatus());
// aluno1.exibirRelatorio();
