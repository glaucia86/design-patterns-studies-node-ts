/**
 * file: 03-module/array/array.ts
 * date: 11/17/2022
 * description: file responsible for the understand of array type
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const filmesCategorias = ["Ação", "Aventura", "Comédia", "Drama", "Romance"];

filmesCategorias.push("Suspense");

const filmesAnos: Array<number> = [];

for (let ano = 0; ano <= new Date().getFullYear(); ano++) {
  filmesAnos.push(ano);
}

console.log(filmesCategorias);
console.log(filmesAnos);
