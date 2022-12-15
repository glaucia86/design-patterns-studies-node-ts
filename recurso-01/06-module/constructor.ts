/**
 * file: 06-module/constructor.ts
 * date: 11/28/2022
 * description: file responsible for understand how to simplify the constructor method
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Pedido {
  constructor(
    private produto: string,
    protected valorTotal: number,
    public previsaoEntrega: Date,
  ) { }
}

const pedido = new Pedido('Notebook', 1000, new Date('2022-11-28'));
console.log(pedido);
