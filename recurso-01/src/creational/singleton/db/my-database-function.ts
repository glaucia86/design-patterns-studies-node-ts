/**
 * Arquivo: src/creational/singleton/db/my-database-function.ts
 * Descrição: arquivo responsável por simular uma conexão com base de dados, usando o conceito de 'Singleton'
 * Data: 01/07/2021
 * Author Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { User } from "../interfaces/user";

export const MyDatabaseFunction = (function () {

  const users: User[] = [];

  return {
    // ==> Métodos relacionados ao array: 'Users':
    add(user: User) {
      users.push(user);
    },

    remove(index: number) {
      users.splice(index, 1);
    },

    show(): void {
      for (const user of users) {
        console.log(user);
      }
    }
  }
})();


