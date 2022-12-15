/**
 * file: 08-module/applyMixins.ts
 * date: 12/14/2022
 * description: file responsible for learning about mixins
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export default function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}
