/**
 * file: 05-module/arrayInterfaces.ts
 * date: 11/20/2022
 * description: file responsible for the understand of array interfaces
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

interface ICategoria {
  nome: string;
  id: number;
  categoriaPai?: ICategoria; // ==> é interface recursiva
}

const frontEnd: ICategoria = {
  nome: 'Front-End',
  id: 1,
}

const backEnd: ICategoria = {
  nome: 'Back-End',
  id: 2,
}

interface IMenu {
  categorias: ICategoria[];
}

let menu: IMenu = {
  categorias: [frontEnd, backEnd]
}

interface ITodo {
  [indice: number]: string;
}

let minhasTarefas: ITodo;

minhasTarefas = ['Estudar', 'Ler', 'Assistir'];

console.log(minhasTarefas[0]);
