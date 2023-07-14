import { APessoa } from "./APessoa";
import { Endereco } from "./Endereco";
import { IUsuario } from "../interfaces/IUsuario";

export class Cliente extends APessoa implements IUsuario {
  private vip: boolean;
  private enderecos: Endereco[];
  private senha: string;

  constructor(cpf: string, nome: string, telefone: string, endereco: Endereco, senha: string) {
    super(cpf, nome, telefone);
    this.vip = false;
    this.senha = senha;
    this.enderecos = [];
    this.enderecos.push(endereco);
  }

  public setVip() {
    this.vip = true;
  }

  public removerVir() {
    this.vip = false;
  }

  public listarEndereços() {
    let enderecosStr: string[] = [];

    for (let i = 0; i < this.enderecos.length; i++) {
      enderecosStr.push(this.enderecos[i].toString());
    }

    return enderecosStr;
  }

  public autenticar(dados: string[]) {
    return super.getCpf() == dados[0] && this.senha == dados[1];
  }

  public adicionarEndereco(novoEndereco: Endereco) {
    this.enderecos.push(novoEndereco);
  }

  public toString() {
    return `CPF: ${super.getCpf()}
    Nome: ${super.getNome()}
    VIP: ${this.vip}`;
  }

}