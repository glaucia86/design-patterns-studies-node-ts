/**
 * file: 06-module/class.ts
 * date: 11/25/2022
 * description: file responsible for learning about classes
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Pessoa {
  nome: string;
  idade: number;
  altura: number;

  constructor(nome: string, idade: number, altura: number) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  exibirDados() {
    console.log(`
      Nome: ${this.nome}
      Idade: ${this.idade}
      Altura: ${this.altura}
    `);
  }
}

const pessoa = new Pessoa('Glaucia Lemos', 36, 1.56);
console.log(pessoa.exibirDados());
