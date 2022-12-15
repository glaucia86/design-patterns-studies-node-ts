/**
 * file: 06-module/ecmascript.ts
 * date: 11/27/2022
 * description: file responsible for understand private in TypeScript vs ECMAScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Documento {
  private valor: string = '123456789'; // TS
  #numero: number = 35; // EcmaScript

  mostrarDocumento() {
    return this.#numero;
  }
}

class CNPJ extends Documento {

  #numero: number = 50;

  mostrarCNPJ() {
    return this.#numero;
  }
}

const rg = new Documento();
const cnpj = new CNPJ();
console.log(rg.mostrarDocumento());
console.log(cnpj.mostrarCNPJ());
