import { Cargo } from "../pessoa/Cargo";
import { Cliente } from "../pessoa/Cliente";
import { Endereco } from "../pessoa/Endereco";
import { Funcionario } from "../pessoa/Funcionario";
import { RCargos } from "../repositorios/RCargos";
import { RPessoas } from "../repositorios/RPessoas";

export class SPessoa {
  private pessoas: RPessoas;
  private cargos: RCargos;
  private codFuncionarioDisponivel: number;

  constructor() {
    this.pessoas = new RPessoas();
    this.cargos = new RCargos();
    this.codFuncionarioDisponivel = 0;
  }

  public cadastrarCliente(cpf: string, nome: string, telefone: string, cep: string, logadouro: string, numero: string, complemento: string, cidade: string, uf: string, senha:string) {
    let clienteEndereço = new Endereco(cep, logadouro, numero, complemento, cidade, uf);
    let novoCliente = new Cliente(cpf, nome, telefone, clienteEndereço, senha);
    this.pessoas.setCliente(novoCliente);
  }

  public cadastrarFuncionario(cpf: string, nome: string, telefone: string, cargoNome: string, salario: number, senha: string) {
    
    if (!this.cargos.existe(cargoNome)) {
      this.cargos.setCargo(new Cargo(cargoNome));
    }

    let novoFuncionario = new Funcionario(cpf, nome, telefone, <Cargo> this.cargos.getCargo(cargoNome), salario, `${this.codFuncionarioDisponivel}`, senha);
    
    this.pessoas.setFuncionario(novoFuncionario);
    this.codFuncionarioDisponivel++;
    return novoFuncionario.getCodFuncionario();
  }

  public adicionarEndereco(cpf: string, cep: string, logadouro: string, numero: string, complemento: string, cidade: string, uf: string) {
    let novoEndereco = new Endereco(cep, logadouro, numero, complemento, cidade, uf);
    (<Cliente> this.pessoas.getPessoa(cpf)).adicionarEndereco(novoEndereco);
  }

  public listarEnderecos(cpf: string) {
    return (<Cliente> this.pessoas.getPessoa(cpf)).listarEndereços();
  }

  public exibirFuncionario(codFuncionario: string) {
    return (<Funcionario> this.pessoas.getPessoa(codFuncionario)).toString();
  }

}