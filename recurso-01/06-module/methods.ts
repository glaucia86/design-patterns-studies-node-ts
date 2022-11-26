/**
 * file: 06-module/methods.ts
 * date: 11/25/2022
 * description: file responsible for apply methods in classes
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Professor {
  nome: string;
  idade: number;
  materia: string;

  constructor(nome: string, idade: number, materia: string) {
    this.nome = nome;
    this.idade = idade;
    this.materia = materia;
  }

  exibirDados() {
    console.log(`
      Nome: ${this.nome}
      Idade: ${this.idade}
      Matéria: ${this.materia}
    `);
  }

  exibirNotas(...notas: number[]): number {
    const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);
    return notasTotal / notas.length;
  }
}

const professor = new Professor('Glaucia Lemos', 36, 'Typescript');
console.log(professor.exibirDados());

console.log('========================');

const jurema = new Professor('Jurema', 70, 'Javascript');

console.log(jurema.exibirDados());
console.log(jurema.exibirNotas(8, 7, 10, 5.5));
