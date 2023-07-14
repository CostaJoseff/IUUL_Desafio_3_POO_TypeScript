import { AConta } from "../conta/AConta";
import { ContaCorrente } from "../conta/ContaCorrente";
import { ContaPoupanca } from "../conta/ContaPoupanca";
import { RContas } from "../repositorios/RContas";

export class SConta {
  private contas: RContas;
  private numeroDeContaDisponivel: number;

  constructor() {
    this.numeroDeContaDisponivel = 0;
    this.contas = new RContas();
  }

  public criarContaCorrente(limite: number, proprietario: string) {
    let contaCorrente = new ContaCorrente(`${this.numeroDeContaDisponivel}`, limite, proprietario);
    this.contas.setConta(contaCorrente);
    this.numeroDeContaDisponivel++;

    return contaCorrente.getNumero();
  }

  public criarContaPoupanca(proprietario: string) {
    let contaPoupanca = new ContaPoupanca(`${this.numeroDeContaDisponivel}`, proprietario);
    this.contas.setConta(contaPoupanca);
    this.numeroDeContaDisponivel++;

    return contaPoupanca.getNumero();
  }

  public calcularSaldo(numero: string) {
    return this.contas.getConta(numero)?.calcularSaldo();
  }

  public depositar(valor: number, numero: string) {
    this.contas.getConta(numero)?.depositar(valor);
  }

  public sacar(valor: number, numero: string) {
    this.contas.getConta(numero)?.sacar(valor);
  }

  public transferir(contaOrigem: string, contaDestino: string, valor: number) {
  (<ContaCorrente> this.contas.getConta(contaOrigem))?.transferir(<AConta> this.contas.getConta(contaDestino), valor);
  }

  public exibirConta(numero: string) {
    return (<AConta> this.contas.getConta(numero))?.toString();
  }

}