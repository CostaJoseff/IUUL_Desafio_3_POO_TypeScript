import { AConta } from "./AConta";

export class ContaPoupanca extends AConta {
  constructor(numero: string) {
    super(numero);
  }

  public calcularSaldo() {
    return super.calcularSaldo();
  }

  public getClass() {
    return "ContaPoupanca";
  }
}