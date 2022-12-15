/**
 * file: 08-module/mixins.ts
 * date: 12/14/2022
 * description: file responsible for learning about mixins
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export {};

import applyMixins from './applyMixins';

class Produto {
  vender(quantidade: number) {
    return `Foram vendidos ${quantidade} itens.`
  }

  comprar(quantidade: number) {
    return `Foram comprados ${quantidade} itens.`
  }
}

class Movel {
  sentar() {
    return 'Você sentou em um móvel.';
  }

  empurrar(metros: number) {
    return `Você empurrou um móvel em ${metros} metros.`;
  }
}

class Sofa {
  constructor(nome: string) {
  }
}

interface Sofa extends Produto, Movel {}
applyMixins(Sofa, [Produto, Movel]);

const produto = new Sofa('Sofá Rosa');

console.log(produto.vender(25));
console.log(produto.empurrar(5));
