/**
 * file: scripts/classes/bancoDeDados.ts
 * date: 12/05/2022
 * description: file responsible for understand how to use modules in TypeScript
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { IBancoDeDados } from "../interfaces/IBancoDeDados";

export class BancoDeDados {

  static LOCAL = "127.0.0.1";
  static TIPO_MYSQL = "MySQL";
  static TIPO_SQLSERVER = "SQL Server";

  constructor(
    private ip: string,
    private usuario: string,
    private senha: string,
    private tipoBanco: string,
  ) { }

  static factory(parametros: IBancoDeDados) {

    if (![
      BancoDeDados.TIPO_MYSQL,
      BancoDeDados.TIPO_SQLSERVER
    ].includes(parametros.tipoBanco)) {
      throw new Error('Tipo de banco de dados não suportado!');
    }

    return new BancoDeDados(
      parametros.ip,
      parametros.usuario,
      parametros.senha,
      parametros.tipoBanco,
    );
  }
}
