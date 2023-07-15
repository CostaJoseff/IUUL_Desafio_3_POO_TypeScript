import { Cargo } from "../pessoa/Cargo";
import { Cliente } from "../pessoa/Cliente";
import { Endereco } from "../pessoa/Endereco";
import { Funcionario } from "../pessoa/Funcionario";
import { RCargos } from "../repositorios/RCargos";
import { RPessoas } from "../repositorios/RPessoas";

export class SPessoa {
  private Rpessoas: RPessoas;
  private cargos: RCargos;
  private codFuncionarioDisponivel: number;

  constructor() {
    this.Rpessoas = new RPessoas();
    this.cargos = new RCargos();
    this.codFuncionarioDisponivel = 0;
  }

  public cadastrarCliente(cpf: string, nome: string, telefone: string, cep: string, logadouro: string, numero: string, complemento: string, cidade: string, uf: string, senha:string) {
    this.validarStrings([cpf, nome, telefone, cep, logadouro, numero, complemento, cidade, uf, senha]);

    if (this.Rpessoas.contem(cpf)) {
      throw new Error("CPF já cadastrado");
    }

    let clienteEndereço = new Endereco(cep, logadouro, numero, complemento, cidade, uf);
    let novoCliente = new Cliente(cpf, nome, telefone, clienteEndereço, senha);
    this.Rpessoas.setCliente(novoCliente);
  }

  public cadastrarFuncionario(cpf: string, nome: string, telefone: string, cargoNome: string, salario: number, senha: string) {
    this.validarStrings([cpf, nome, telefone, cargoNome, senha]);
    if (salario <=0) {
      throw new Error("Salário não pode ser <= 0");
    }

    if (this.Rpessoas.contemFuncionario(cpf)) {
      throw new Error("Funcionário já cadastrado");
    }

    if (!this.cargos.contem(cargoNome)) {
      this.cargos.setCargo(new Cargo(cargoNome));
    }

    let novoFuncionario = new Funcionario(cpf, nome, telefone, <Cargo> this.cargos.getCargo(cargoNome), salario, `${this.codFuncionarioDisponivel}`, senha);
    
    this.Rpessoas.setFuncionario(novoFuncionario);
    this.codFuncionarioDisponivel++;
    return novoFuncionario.getCodFuncionario();
  }

  public adicionarEndereco(cpf: string, cep: string, logadouro: string, numero: string, complemento: string, cidade: string, uf: string) {
    this.validarStrings([cpf, cep, logadouro, numero, complemento, cidade, uf]);

    let novoEndereco = new Endereco(cep, logadouro, numero, complemento, cidade, uf);
    (<Cliente> this.Rpessoas.getPessoa(cpf)).adicionarEndereco(novoEndereco);
  }

  public listarEnderecos(cpf: string) {
    return (<Cliente> this.Rpessoas.getPessoa(cpf)).listarEndereços();
  }

  public exibirFuncionario(codFuncionario: string) {
    return (<Funcionario> this.Rpessoas.getPessoa(codFuncionario)).toString();
  }

  private validarStrings(strings: string[]) {
    strings.forEach((elemento => this.validarString(elemento)));
  }

  private validarString(string: string) {
    if (string.trim() === "") {
      throw new Error("Nenhum dado de entrada pode estar vazio ou em branco");
      
    }
  }

}