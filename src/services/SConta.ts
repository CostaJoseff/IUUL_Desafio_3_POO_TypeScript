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

  public criarContaCorrente(limite: number) {
    let contaCorrente = new ContaCorrente(`${this.numeroDeContaDisponivel}`, limite);
    this.contas.setConta(contaCorrente);
    this.numeroDeContaDisponivel++;
  }

  public criarContaPoupanca() {
    let contaPoupanca = new ContaPoupanca(`${this.numeroDeContaDisponivel}`);
    this.contas.setConta(contaPoupanca);
    this.numeroDeContaDisponivel++;
  }

  public calcularSaldo(numero: string) {
    return this.contas.getConta(numero)?.calcularSaldo;
  }

  public depositar(numero: string, valor: number) {
    this.contas.getConta(numero)?.depositar(valor);
  }

  public sacar(numero: string, valor: number) {
    this.contas.getConta(numero)?.sacar(valor);
  }

  public transferir(contaOrigem: string, contaDestino: string, valor: number) {
    try {
      (<ContaCorrente> this.contas.getConta(contaOrigem))?.transferir(<AConta> this.contas.getConta(contaDestino), valor);
    } catch (erro) {return null;}
  }

}