import { APessoa } from "./APessoa";
import { Cargo } from "./Cargo";
import { IUsuario } from "../interfaces/IUsuario";

export class Funcionario extends APessoa implements IUsuario {
  private salario: number;
  private cargo: Cargo;
  private codFuncionario: string;
  private senha: string;

  constructor(cpf: string, nome: string, telefone: string, cargo: Cargo, salario: number, codFuncionario: string, senha: string) {
    super(cpf, nome, telefone);
    this.cargo = cargo;
    this.salario = salario;
    this.senha = senha;
    this.codFuncionario = codFuncionario;
  }

  public autenticar(dados: string[]) {
    return this.codFuncionario == dados[0] && this.senha == dados[1];
  }

  public getCodFuncionario() {
    return this.codFuncionario;
  }
}