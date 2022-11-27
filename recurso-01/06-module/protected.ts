/**
 * file: 06-module/protected.ts
 * date: 11/27/2022
 * description: file responsible for apply modifiers in classes [protected]
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Domicilio {
  cor: string;
  endereco: string;

  constructor(cor: string, endereco: string) {
    this.cor = cor;
    this.endereco = endereco;
  }

  public tocarInterfone(): string {
    return "Tocando o interfone...";
  }
}

class Casa extends Domicilio {

  public entrarNaCasa() {
    return this.atenderInterfone("Oi, quem é?");
  }

  protected atenderInterfone(message: string): string {
    return message;
  }
}

const casaGlaucia = new Casa("Branco", "Rua dos Bobos, 0");
console.log(casaGlaucia.tocarInterfone());
console.log(casaGlaucia.entrarNaCasa()); // agora é possível acessar o método protected
