/**
 * file: 03-module/never/never.ts
 * date: 11/17/2022
 * description: file responsible for the understand of never type
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

function showError(message: string): never {
  throw new Error();
}

showError("An error occurred");
