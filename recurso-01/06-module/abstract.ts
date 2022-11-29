/**
 * file: 06-module/abstract.ts
 * date: 11/25/2022
 * description: file responsible for how to use 'abstract' in TypeScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

interface IUsuario {
  nome: string;
  email: string;
  telefone: string;
}

abstract class Notificao {
  abstract enviar(usuario: IUsuario): boolean;
}

class NotificaoEmail extends Notificao {
  enviar(usuario: IUsuario): boolean {
    console.log(`Enviando email para ${usuario.email}`);
    return true;
  }
}

class NotificaoSMS extends Notificao {
  enviar(usuario: IUsuario): boolean {
    console.log(`Enviando SMS para ${usuario.telefone}`);
    return true;
  }
}

new NotificaoEmail().enviar({
  nome: 'Glaucia Lemos',
  email: 'email@email.com',
  telefone: '21 99999-9999'
});

new NotificaoSMS().enviar({
  nome: 'Glaucia Lemos',
  email: 'email@email.com',
  telefone: '21 99999-9999'
});


