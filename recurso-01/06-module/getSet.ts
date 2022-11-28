/**
 * file: 06-module/getSet.ts
 * date: 11/28/2022
 * description: file responsible for understand how to use Getters and Setters in TypeScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Permissao {
  constructor(
    private _nome: string,
    private _nivel: number,
  ) { }

  get getNome() {
    return this._nome.toLocaleUpperCase();
  }

  set setNome(novoNome: string) {
    if (novoNome.length < 5) {
      throw new Error('Nome inválido!');
    }

    this._nome = novoNome;
  }
}

const permissao = new Permissao('Administrador', 1);
console.log(permissao.setNome);

