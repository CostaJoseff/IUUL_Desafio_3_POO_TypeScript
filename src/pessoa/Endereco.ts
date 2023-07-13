export class Endereco {
  private cep: string;
  private logadouro: string;
  private numero: string;
  private complemento: string;
  private cidade: string;
  private uf: string;

  constructor(cep: string, logadouro: string, numero: string, complemento: string, cidade: string, uf: string){
    this.cep = cep;
    this.logadouro = logadouro;
    this.numero = numero;
    this.complemento = complemento;
    this.cidade = cidade;
    this.uf = uf;
  }


  
}