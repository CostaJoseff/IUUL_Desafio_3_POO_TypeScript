import { APessoa } from "../pessoa/APessoa";
import { Funcionario } from "../pessoa/Funcionario";
import { Cliente } from "../pessoa/Cliente";

export class RPessoas {
  private pessoas: Map<string, APessoa>;

  constructor() {
    this.pessoas = new Map<string, APessoa>();
  }

  public setCliente(cliente: Cliente) {
    this.pessoas.set(cliente.getCpf(), cliente);
  }

  public setFuncionario(funcionario: Funcionario) {
    this.pessoas.set(funcionario.getCodFuncionario(), funcionario);
  }

  public getPessoa(id: string) {
    return this.pessoas.get(id);
  }

  public getPessoas() {
    return this.pessoas.values();
  }

}