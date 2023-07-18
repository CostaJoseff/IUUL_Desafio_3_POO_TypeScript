import { SConta } from "./services/SConta";
import { SPessoa } from "./services/SPessoa";

export class Banco {
  private sConta: SConta;
  private sPessoa: SPessoa;

  constructor() {
    this.sConta = new SConta();
    this.sPessoa = new SPessoa();
  }

  public cadastrarCliente(cpf: string, nome: string, telefone: string, cep: string, logadouro: string, numero: string, complemento: string, cidade: string, uf: string, senha:string) {
    this.sPessoa.cadastrarCliente(cpf, nome, telefone, cep, logadouro, numero, complemento, cidade, uf, senha);
  }

  public cadastrarFuncionario(cpf: string, nome: string, telefone: string, cargoNome: string, salario: number, senha: string) {    
    return this.sPessoa.cadastrarFuncionario(cpf, nome, telefone, cargoNome, salario, senha);
  }

  public adicionarEndereco(cpf: string, cep: string, logadouro: string, numero: string, complemento: string, cidade: string, uf: string) {
      this.sPessoa.adicionarEndereco(cpf, cep, logadouro, numero, complemento, cidade, uf);
  }

  public listarEnderecos(cpf: string) {
      return this.sPessoa.listarEnderecos(cpf);
  }

  public exibirFuncionario(id: string) {
      return this.sPessoa.exibirFuncionario(id);
  }

  public criarContaCorrente(limite: number, proprietario: string) {
      return this.sConta.criarContaCorrente(limite, proprietario); 
  }

  public criarContaPoupanca(proprietario: string) {
    return this.sConta.criarContaPoupanca(proprietario);
  }

  public exibirConta(numero: string) {
      return this.sConta.exibirConta(numero);
  }

  public depositar(valor: number, numero: string) {
    this.sConta.depositar(valor, numero);
  }

  public sacar(valor: number, numero: string) {
    this.sConta.sacar(valor, numero);
  }

  public transferir(contaOrigem: string, contaDestino: string, valor: number) {
    this.sConta.transferir(contaOrigem, contaDestino, valor);
  }

  public obterSaldo(numero: string) {
    return this.sConta.calcularSaldo(numero);
  }
}