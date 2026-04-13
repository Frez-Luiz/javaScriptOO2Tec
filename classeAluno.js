class Aluno{
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;

    }
    calcularMedia(){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
}
let aluno1 = new Aluno ("Ana", 5500, [8.0, 7.3, 9.0]);
console.log (aluno1.calcularMedia())