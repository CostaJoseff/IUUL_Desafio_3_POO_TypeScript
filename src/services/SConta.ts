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
    if (limite < 0) {
      throw new Error("O limite não pode ser negativo.");
    }

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
    if (valor < 0) {
      throw new Error("Valor de deposito não pode ser negativo.");
    }
    const contaDestino = this.contas.getConta(numero);
    if (contaDestino === undefined) {
      throw new Error("Conta não existe.");
      
    }

    contaDestino?.depositar(valor);
  }

  public sacar(valor: number, numero: string) {
    if (valor < 0) {
      throw new Error("Valor de deposito não pode ser negativo.");
    }
    const conta = this.contas.getConta(numero);
    if (conta === undefined) {
      throw new Error("Conta não existe.");
    }

    conta?.sacar(valor);
  }

  public transferir(contaOrigem: string, contaDestino: string, valor: number) {
    if (valor < 0) {
      throw new Error("O valor de transferência não pode ser negativo.");
    }

    const origem = (<ContaCorrente> this.contas.getConta(contaOrigem));
    if (origem === undefined) {
      throw new Error("Conta origem não existe.");
    }

    const destino = <AConta> this.contas.getConta(contaDestino);
    if (destino === undefined) {
      throw new Error("Conta destino não existe.");
    }

    origem?.transferir(destino, valor);
  }

  public exibirConta(numero: string) {
    return (<AConta> this.contas.getConta(numero))?.toString();
  }

}