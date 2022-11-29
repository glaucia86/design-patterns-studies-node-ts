/**
 * file: 06-module/polimorfirms.ts
 * date: 11/25/2022
 * description: file responsible for how to use 'polimorfirms' in TypeScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Empresa {
  prestarServico() {
    return 'Empresa prestando serviço';
  }
}

class Padaria extends Empresa {
  prestarServico() {
    return 'Vendendo pão';
  }
}

console.log(new Padaria().prestarServico());
console.log(new Empresa().prestarServico());
