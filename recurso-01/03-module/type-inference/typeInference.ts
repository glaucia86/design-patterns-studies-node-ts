/**
 * file: 03-module/type-inference/typeInference.ts
 * date: 11/17/2022
 * description: file responsible for the understand of type inference
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

let linguagem = "TypeScript";

console.log(linguagem);

console.log(linguagem.toUpperCase());

const usuarioInfo = [1, "Glaucia", new Date()];

usuarioInfo.push(2);
usuarioInfo.push("Lemos");
usuarioInfo.push(new Date(2022, 11, 17));

console.log(usuarioInfo);

