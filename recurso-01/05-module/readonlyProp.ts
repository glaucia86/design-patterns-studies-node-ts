/**
 * file: 05-module/readonlyProp.ts
 * date: 11/20/2022
 * description: file responsible for the understand of readonly property
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

interface ICurso {
  readonly titulo: string; // readonly - então não pode ser alterado
  descricao?: string;
  preco: number;
  readonly cargaHoraria: number;
  classificacao: number;
}

const curso: ICurso = {
  titulo: 'TypeScript',
  descricao: 'Curso de TypeScript',
  preco: 10,
  cargaHoraria: 10,
  classificacao: 5,
};

console.log(curso);
