export class Cargo {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getCargo() {
    return this.nome;
  }
}