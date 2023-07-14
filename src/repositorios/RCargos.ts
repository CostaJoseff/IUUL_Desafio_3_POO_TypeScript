import { Cargo } from "../pessoa/Cargo";

export class RCargos {
  private cargos: Map<string, Cargo>;

  constructor() {
    this.cargos = new Map<string, Cargo>();
  }

  public setCargo(Cargo) {
    this.cargos.set(Cargo.getCargo(), Cargo);
  }

  public getCargo(nome: string) {
    return this.cargos.get(nome);
  }

  public contem(nome: string) {
    return this.cargos.get(nome) != undefined;
  }

}