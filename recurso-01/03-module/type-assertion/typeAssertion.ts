/**
 * file: 03-module/type-assertion/type-assertion.ts
 * date: 11/17/2022
 * description: file responsible for the understand of type assertion
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const site: unknown = 'https://www.glaucialemos.dev/';
let siteFavoritos: string[] = [];

siteFavoritos.push(site as string);
siteFavoritos.push(<string>site);
console.log(siteFavoritos);
