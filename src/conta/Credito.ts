export class Credito {
  private valor: number;
  private data: Date;

  constructor(valor: number, data: Date){
    this.valor = valor;
    this.data = data;
  }

  public getValor() {
    return this.valor;
  }

  public getData() {
    return this.data;
  }

}