/**
 * file: 03-module/unknown/unknown.ts
 * date: 11/17/2022
 * description: file responsible for the understand of unknown type
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

let resultado: unknown;

resultado = {
  sucesso: true,
}

resultado = "Deu tudo certo!";
resultado = 200;

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;

const primeiroNumero: number = informacao;
const segundoNumero: unknown = informacaoDesconhecida;
