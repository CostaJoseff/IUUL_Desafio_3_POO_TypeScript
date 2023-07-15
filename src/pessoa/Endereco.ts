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

  public toString() {
    return `CEP: ${this.cep}\nLogadouro: ${this.logadouro} - N° ${this.numero}\nComplemento: ${this.complemento}\nCidade: ${this.cidade} - ${this.uf};`
  }

  public equals(outroEndereco: Endereco) {
    let cepIgual = this.cep === outroEndereco.cep;
    let logadouroIgual = this.logadouro === outroEndereco.logadouro;
    let numeroIgual = this.numero === outroEndereco.numero;
    let complementoIgual = this.complemento === outroEndereco.complemento;
    let cidadeIgual = this.cidade === outroEndereco.cidade;
    let ufIgual = this.uf === outroEndereco.uf;

    return cepIgual && logadouroIgual && numeroIgual && complementoIgual && cidadeIgual && ufIgual;
  }
  
}