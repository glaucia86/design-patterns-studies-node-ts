/**
 * file: 06-module/public.ts
 * date: 11/25/2022
 * description: file responsible for apply modifiers in classes [public]
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export {};

class Veiculo {
  public cor: string;

  constructor(cor: string) {
    this.cor = cor;
  }

  public acelerar(): void {
    console.log('Acelerando...');
  }
}

const veiculo = new Veiculo('Azul');
console.log(veiculo);
console.log(veiculo.acelerar());

