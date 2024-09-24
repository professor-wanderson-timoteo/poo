class Pessoa {
    // Atributo de classe
    static especie = "Humano";

    constructor(nome, idade, altura, peso, genero) {
        // Inicialização dos atributos
        this.nome = nome; // Atributo de instância
        this.idade = idade; // Atributo de instância
        this.altura = altura; // Atributo de instância
        this.peso = peso; // Atributo de instância
        this.genero = genero; // Atributo de instância
    }

    // Método de classe
    static mostrarEspecie() {
        console.log(`Espécie: ${Pessoa.especie}`);
    }

    // Métodos de instância
    falar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }

    comer() {
        console.log("Estou comendo!");
    }
}
