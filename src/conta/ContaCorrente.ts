import { AConta } from "./AConta";

export class ContaCorrente extends AConta{
  private limite: number;

  constructor(numero: string, limite: number) {
    super(numero);
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

}