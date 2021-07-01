/**
 * Arquivo: src/creational/singleton/modules/module_b.ts
 * Descrição:
 * Data: 30/06/2021
 * Author Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { MyDatabaseModule } from "../db/my-database-module";
// import { MyDatabaseFunction } from "../db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseModule;
// const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Richard Wilson', age: 45 });
myDatabaseClassic.add({ name: 'Wilson Cotton', age: 58 });
myDatabaseClassic.add({ name: 'Johanne Trips', age: 19 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
