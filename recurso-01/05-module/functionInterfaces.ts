/**
 * file: 05-module/functionInterfaces.ts
 * date: 11/20/2022
 * description: file responsible for the understand of function interfaces
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

// ==> Exemplo: Funções com Interfaces
interface ISoma {
  (num1: number, num2: number): number;
};

let primeiraSoma: ISoma;

primeiraSoma = (numero1, numero2) => {
  return numero1 + numero2;
};

console.log(primeiraSoma(10, 20));

// ==> Exemplo: Métodos com Interfaces

interface ICalculos {
  somar(num1: number, num2: number): number;
  subtrair(num1: number, num2: number): number;
  multiplicar(num1: number, num2: number): number;
  dividir(num1: number, num2: number): number;
};

let calculadora: ICalculos;

function adicao(num1: number, num2: number): number {
  return num1 + num2;
}

const subtrair = (num1: number, num2: number): number => num1 - num2;

calculadora = {
  somar: (numero1, numero2) => {
    return numero1 + numero2;
  },

  subtrair: (numero1, numero2) => {
    return numero1 - numero2;
  },

  multiplicar: (numero1, numero2) => {
    return numero1 * numero2;
  },

  dividir: (numero1, numero2) => {
    return numero1 / numero2;
  }
}

console.log(calculadora.somar(10, 20));
console.log(calculadora.subtrair(40, 20));
console.log(calculadora.multiplicar(10, 20));
console.log(calculadora.dividir(40, 20));
