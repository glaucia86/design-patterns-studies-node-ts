/**
 * file: 06-module/staticMethods.ts
 * date: 11/28/2022
 * description: file responsible for understand how to use Static Methods in TypeScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { BancoDeDados } from "../scripts/classes/bancoDeDados";

const conexaoBanco = BancoDeDados.factory({
  tipoBanco: BancoDeDados.TIPO_MYSQL,
  senha: "root",
  usuario: "root",
  ip: BancoDeDados.LOCAL,
});

console.log(conexaoBanco);
