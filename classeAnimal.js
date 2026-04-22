class Animal{
    fazerSom(){
        console.log("Som genérico de animal...");
    
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU 🐶 🐶 🐶 ")
    }
}

class Pato extends Animal{
    fazerSom(){
        console.log("QUACK QUACK QUACK 🦆 🦆 🦆")
    }
}

class Vaca extends Animal{
    fazerSom(){
        console.log("MUUUUUUUUUUUU 🐄 🐄 🐄")
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("MIAUUUUUU 🐱 🐱 🐱")
    }
}

const meusObjetos = [new Cachorro(), new Pato(), new Vaca(), new Gato()];

for(let i = 0; i < meusObjetos.length; i++){
    meusObjetos[i].fazerSom();
}