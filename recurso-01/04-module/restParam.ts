/**
 * file: 04-module/restParam.ts
 * date: 11/20/2022
 * description: file responsible for the understand of rest parameter function
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

function somarRenda(...meses: number[]): number {
  return meses.reduce((total, valor) => total + valor, 0);
}

console.log(somarRenda(1000, 2000, 3000));
