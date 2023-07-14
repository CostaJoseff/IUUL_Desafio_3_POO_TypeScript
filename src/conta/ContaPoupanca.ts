import { AConta } from "./AConta";

export class ContaPoupanca extends AConta {
  constructor(numero: string, proprietario: string) {
    super(numero, proprietario);
  }

  public calcularSaldo() {
    return super.calcularSaldo();
  }

  public getClass() {
    return "ContaPoupanca";
  }

  public toString() {
    return "Numero da Conta: " + super.getNumero() + "\n"
          + "Proprietário da Conta: " + super.getProprietario() + "\n"
          + "Saldo: " + super.getSaldo();
  }
}