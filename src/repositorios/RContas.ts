import { AConta } from "../conta/AConta";

export class RContas {
  private contas: Map<string, AConta>;

  public setConta(AConta) {
    this.contas.set(AConta.getNumero(), AConta);
  }

  public getConta(numero: string) {
    return this.contas.get(numero);
  }

  public getContas() {
    return this.contas.values();
  }

}