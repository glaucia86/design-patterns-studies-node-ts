/**
 * file: 05-module/interface.ts
 * date: 11/20/2022
 * description: file responsible for the understand of interface
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

interface IEndereco {
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
};

let endereco: IEndereco = {
  logradouro: 'Rua dos Bobos',
  numero: 100,
  bairro: 'Centro',
  cidade: 'Rio de Janeiro'
}

console.log(endereco);
