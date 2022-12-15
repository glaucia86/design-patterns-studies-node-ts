import Notificao from "./Notification";
import IUsuario from "../interfaces/IUsuario";

export class NotificaoEmail extends Notificao {
  enviar(usuario: IUsuario): boolean {
    console.log(`Enviando email para ${usuario.email}`);
    return true;
  }
}

export class NotificaoSMS extends Notificao {
  enviar(usuario: IUsuario): boolean {
    console.log(`Enviando SMS para ${usuario.telefone}`);
    return true;
  }
}


