/**
 * file: 07-module/scripts/authentication/index.ts
 * date: 12/14/2022
 * description: file responsible for learning about classes
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

namespace Autenticacao {

  interface IUsuario {
    email: string;
    senha: string;
  }

  interface ICadastro {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
  }


  export class LoginRegistro {
    login(usuario: IUsuario) {
      return usuario;
    }

    register(novoUsuario: ICadastro) {
      return novoUsuario;
    }
  }

  export class Recuperacao {
    recuperarSenha(email: string) {
      return "Enviando e-mail para recuperação de senha";
    }

    recuperarUsuario(email: string) {
      return "Enviando e-mail para recuperação de usuário";
    }
  }
}
