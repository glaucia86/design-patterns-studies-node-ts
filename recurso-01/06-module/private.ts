/**
 * file: 06-module/private.ts
 * date: 11/27/2022
 * description: file responsible for apply modifiers in classes [private]
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

export { };

class Banco {
  private cofreQuantia: number = 10000;

  private debitarCofre(quantidade: number): number | string {
    if (this.cofreQuantia >= quantidade) {
      this.cofreQuantia -= quantidade;

      return this.cofreQuantia;
    } else {
      return 'Saldo insuficiente';
    }
  }

  protected sacarDoCaixa(quantidade: number) {
    return this.debitarCofre(quantidade);
  }

  sacarDoCaixaEletronico(quantidade: number) {
    return this.debitarCofre(quantidade);
  }
}

class Banco24Horas extends Banco {
  sacar(quantidade: number) {
    return this.sacarDoCaixa(quantidade);
  }
}

const nubank = new Banco();
const banco24Horas = new Banco24Horas();
console.log(nubank.sacarDoCaixaEletronico(100));
console.log(banco24Horas.sacar(200));


