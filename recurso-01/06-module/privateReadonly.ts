/**
 * file: 06-module/privateReadonly.ts
 * date: 11/27/2022
 * description: file responsible for understand private vs Readonly in TypeScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

class Usuario {
  readonly id: string = '1234asd56'; // não pode ser alterado
  nome: string = 'Glaucia Lemos';
  private senha: string = '123456';
  readonly dataCadastro: Date = new Date('2022-11-27'); // pode ler. Mas, não pode ser alterado


}

const usuario = new Usuario();
console.log(usuario.id);
