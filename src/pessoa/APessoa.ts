export abstract class APessoa {
  private cpf: string;
  private nome: string;
  private telefone: string;

  constructor(cpf: string, nome: string, telefone: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
  }

  public getCpf() {
    return this.cpf;
  }
}