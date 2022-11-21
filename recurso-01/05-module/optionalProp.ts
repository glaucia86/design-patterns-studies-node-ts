/**
 * file: 05-module/optinalProps.ts
 * date: 11/20/2022
 * description: file responsible for the understand of optional properties
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

interface IProduto {
  nome: string;
  preco: number;
  descricao?: string;
  dataValidade: Date;
}

const produtoDados: IProduto = {
  nome: 'Televisão',
  preco: 2000,
  // descricao: 'Televisão de 50 polegadas',
  dataValidade: new Date('2022-12-31')
};

console.log(produtoDados);
