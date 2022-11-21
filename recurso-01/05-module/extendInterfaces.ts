/**
 * file: 05-module/extendInterface.ts
 * date: 11/20/2022
 * description: file responsible for the understand of extend interfaces
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

interface Modelo {
  id: number;
  createdAt: number;
  updatedAt: number;
}

interface IPessoa extends Modelo {
  nome: string;
  sobrenome: string;
  idade?: number;
}

interface IUsuario extends IPessoa {
  email: string;
  senha: string;
}

const glaucia: IUsuario = {
  id: 1,
  nome: "Glaucia",
  sobrenome: "Lemos",
  email: "email@email.com",
  senha: "123456",
  idade: 36,
  createdAt: new Date().getTime(),
  updatedAt: new Date().getTime(),
}

console.log(glaucia);
