/**
 * Arquivo: src/creational/singleton/db/my-database-module.ts
 * Descrição: arquivo responsável por simular uma conexão com base de dados, usando o conceito de 'Singleton'
 * Data: 30/06/2021
 * Author Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { User } from "../interfaces/user";

const users: User[] = [];

export const MyDatabaseModule = {
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
