"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banco_1 = require("./src/Banco");
var banco = new Banco_1.Banco();
try {
    var codGerente = banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    var codAtendente = banco.cadastrarFuncionario("222", "Atendenteaaaaaaaaaaaaaaaa", "3321", "Atendente", 1300, "123456");
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    banco.cadastrarFuncionario("111", "Gerenteaaaaaaaaaaaa", "4002", "Gerente", 50000, "coxinha123");
    console.error("Tudo errado");
}
catch (Error) {
    console.log("Tudo certo");
}
