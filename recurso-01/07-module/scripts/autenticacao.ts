/**
 * file: 07-module/scripts/autenticacao.ts
 * date: 12/14/2022
 * description: file responsible for learning about namespaces
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */


export {};

/// <reference path="./authentication/index.ts"/>

const novoRegistro = new Autenticacao.LoginRegistro();

const resultado = novoRegistro.register({
  nome: 'Glaucia Lemos',
  email: 'email@gmail.com',
  senha: '123456',
  dataNascimento: new Date("1986-10-24")
})

console.log(resultado);
