import { AConta } from "./AConta";

export class ContaCorrente extends AConta{
  private limite: number;

  constructor(numero: string, limite: number, proprietario: string) {
    super(numero, proprietario);
    this.limite = limite;
  }

  public calcularSaldo() {
    return super.calcularSaldo() + this.limite;
  }

  public transferir(contaDestino: AConta, valor: number) {
    if (this.calcularSaldo() < valor) {
      throw new Error("Saldo insuficiente");
    }

    super.sacar(valor);
    contaDestino.depositar(valor);

  }

  public getClass() {
    return "ContaCorrente";
  }

  public toString() {
    return "Numero da Conta: " + super.getNumero() + "\n"
          + "Proprietário da Conta: " + super.getProprietario() + "\n"
          + "Saldo: R$" + super.getSaldo() + " - Limite: R$" + this.limite + "\n"
          + "Total: R$" + (super.getSaldo() + this.limite);
  }

}