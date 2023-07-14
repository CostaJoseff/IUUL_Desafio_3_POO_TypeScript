import { Banco } from "./src/Banco";

let banco = new Banco();
try {
  let codGerente = banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
  let codAtendente = banco.cadastrarFuncionario("222", "Atendenteaaaaaaaaaaaaaaaa", "3321", "Atendente", 1300, "123456");
  banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
  banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
  banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
  console.error("Tudo errado");
} catch (Error) {console.log("Tudo certo");
}
