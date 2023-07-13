export interface IUsuario {
  autenticar: (dados: string[]) => Boolean;
}