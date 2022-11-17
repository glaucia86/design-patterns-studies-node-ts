/**
 * file: 03-module/type-inference/number.ts
 * date: 11/17/2022
 * description: file responsible for the understand of type number
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

let ano: number;
let ano2: number;

// ano2 = "2022";
ano2 = parseFloat("4004.54");

console.log(ano2);

const numeroGigante: bigint = 50n;

console.log(numeroGigante);
