/**
 * file: 06-module/inheritance.ts
 * date: 11/25/2022
 * description: file responsible for apply inheritance in classes
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export {};

class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;

    constructor(nome: string, nascimento: Date, empresa: string, email: string) {
        super(nome, nascimento);
        this.empresa = empresa;
        this.email = email;
    }
}

const glaucia = new Cliente('Glaucia Lemos', new Date(), 'Microsoft', 'email@email.com');
console.log(glaucia);
