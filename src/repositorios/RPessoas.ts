import { APessoa } from "../pessoa/APessoa";

export class RPessoas {
  private pessoas: Map<string, APessoa>;

  public setPessoa(APessoa) {
    this.pessoas.set(APessoa.getCPF(), APessoa);
  }

  public getPessoa(cpf: string) {
    return this.pessoas.get(cpf);
  }

  public getPessoas() {
    return this.pessoas.values();
  }

}