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
    try {
      this.sPessoa.adicionarEndereco(cpf, cep, logadouro, numero, complemento, cidade, uf);
    } catch (error) {return null;}
  }

  public listarEnderecos(cpf: string) {
    try {
      return this.sPessoa.listarEnderecos(cpf);
    } catch (error) {return null;}
  }

  public exibirFuncionario(id: string) {
    try {
      return this.sPessoa.exibirFuncionario(id);
    } catch (error) {return null;}
  }

  public criarContaCorrente(limite: number, proprietario: string) {
    try {
      return this.sConta.criarContaCorrente(limite, proprietario); 
    } catch (error) {return null;}
  }

  public criarContaPoupanca(proprietario: string) {
    return this.sConta.criarContaPoupanca(proprietario);
  }

  public exibirConta(numero: string) {
    try {
      return this.sConta.exibirConta(numero);
    } catch (error) {return null;}
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
}