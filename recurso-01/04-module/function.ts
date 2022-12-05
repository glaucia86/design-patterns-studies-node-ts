/**
 * file: 04-module/function.ts
 * date: 11/20/2022
 * description: file responsible for the understand of function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import mostrarMensagem from '../scripts/functions/mostrarMensagem';

console.log(mostrarMensagem('Olá, Glaucia Lemos!'));

const show = (codigo: number): number => {
  return codigo;
}

console.log(show(123));
