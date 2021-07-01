/**
 * Arquivo: src/creational/singleton/db/my-database-classic.ts
 * Descrição: arquivo responsável por simular uma conexão com base de dados, usando o conceito de 'Singleton'
 * Data: 30/06/2021
 * Author Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { User } from "../interfaces/user";

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() { }

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  // ==> Métodos relacionados ao array: 'Users':
  add(user: User) {
    this.users.push(user);
  }

  remove(index: number) {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}