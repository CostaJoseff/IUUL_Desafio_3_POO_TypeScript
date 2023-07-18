import { Credito } from "./Credito.js";
import { Debito } from "./Debito.js";

export abstract class AConta {
  private numero: string;
  private proprietario: string;
  private saldo: number;
  private depositos: Credito[];
  private saques: Debito[];

  constructor(numero: string, proprietario: string) {
    this.numero = numero;
    this.saldo = 0;
    this.depositos = [];
    this.saques = [];
    this.proprietario = proprietario;
  }

  public depositar(valor: number) {
    this.depositos.push(new Credito(valor, new Date()));
    
    this.saldo += valor;
  }

  public sacar(valor: number) {
    this.saques.push(new Debito(valor, new Date()));
    this.saldo -= valor;
  }

  public getNumero() {
    return this.numero;
  }

  public getSaldo() {
    return this.saldo;
  }

  public getProprietario() {
    return this.proprietario;
  }

  public calcularSaldo() {
    let saldo: number = 0;

    for (let i = 0; i < this.depositos.length; i++) {
      saldo += this.depositos[i].getValor();
    }
    for (let i = 0; i < this.saques.length; i++) {
      saldo -= this.saques[i].getValor();
    }

    if (saldo != this.saldo) {
      throw new Error("Soma de saldo diverge do saldo armazenado.");
    }

    return saldo;
  }

}