/**
 * Arquivo: src/creational/singleton/modules/module_a.ts
 * Descrição:
 * Data: 30/06/2021
 * Author Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { MyDatabaseModule } from "../db/my-database-module";

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Glaucia Lemos', age: 34 });
myDatabaseClassic.add({ name: 'Jurema Lemos', age: 69 });
myDatabaseClassic.add({ name: 'Prince Lemos', age: 1 });

export { myDatabaseClassic };