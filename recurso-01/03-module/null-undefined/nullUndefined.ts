/**
 * file: 03-module/null-undefined/nullUndefined.ts
 * date: 11/17/2022
 * description: file responsible for the understand of null and undefined type
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

let db: string | null = 'mysql, 127.0.0.1, password';

db = null;

let minhaVariavel: string | undefined;

if (new Date().getDate() === 15) {
  minhaVariavel = 'Hoje é dia 15';
}

console.log(minhaVariavel);
