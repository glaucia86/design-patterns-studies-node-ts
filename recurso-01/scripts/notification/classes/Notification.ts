import IUsuario from "../interfaces/IUsuario";

export default abstract class Notificao {
  abstract enviar(usuario: IUsuario): boolean;
}
