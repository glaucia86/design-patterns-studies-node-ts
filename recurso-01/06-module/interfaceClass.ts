/**
 * file: 06-module/interfaceClass.ts
 * date: 11/29/2022
 * description: file responsible for how to implement an 'interface' in a 'class' in TypeScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

interface INotificacao {
  enviar(usuario: IUsuario): boolean;
}

interface ITelefone {
  telefone: string;
}

interface IEmail {
  nome: string;
  email: string;
}

interface IUsuario {
  nome: string;
  email: string;
  telefone: string;
}

abstract class Notificao {
  abstract enviar(): boolean;
}

class NotificaoEmail extends Notificao implements INotificacao, IEmail {

  nome: string;
  email: string;

  constructor(usuario: IUsuario) {
    super();
    this.nome = usuario.nome;
    this.email = usuario.email;
  }

  enviar(): boolean {
    console.log(`Enviando email para ${this.email}`);
    return true;
  }
}

class NotificaoSMS extends Notificao implements INotificacao, ITelefone {
  nome: string;
  telefone: string;

  constructor(usuario: IUsuario) {
    super();
    this.telefone = usuario.telefone;
  }

  enviar(): boolean {
    console.log(`Enviando SMS para ${this.telefone}`);
    return true;
  }
}

new NotificaoEmail({
  nome: 'Glaucia Lemos',
  email: 'email@email.com',
  telefone: '21 99999-9999'
}).enviar();

new NotificaoSMS({
  nome: 'Glaucia Lemos',
  email: 'email@email.com',
  telefone: '21 99999-9999'
}).enviar();


