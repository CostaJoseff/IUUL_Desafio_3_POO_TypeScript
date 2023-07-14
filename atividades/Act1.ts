import { Banco } from "../src/Banco";

/* 1 Criar 2 funcionários */
let banco = new Banco();
let codGerente = banco.cadastrarFuncionario("111", "Gerente BRABO", "4002", "Gerente", 50000, "coxinha123");
let codAtendente = banco.cadastrarFuncionario("222", "Atendente NHE", "3321", "Atendente", 1300, "123456");

console.log(banco.exibirFuncionario(codGerente));
console.log(banco.exibirFuncionario(codAtendente));