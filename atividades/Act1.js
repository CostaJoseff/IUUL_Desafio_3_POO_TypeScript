"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banco_1 = require("../src/Banco");
/* 1 Criar 2 funcionários */
var banco = new Banco_1.Banco();
var codGerente = banco.cadastrarFuncionario("111", "Gerente BRABO", "4002", "Gerente", 50000, "coxinha123");
var codAtendente = banco.cadastrarFuncionario("222", "Atendente NHE", "3321", "Atendente", 1300, "123456");
console.log(banco.exibirFuncionario(codGerente));
console.log(banco.exibirFuncionario(codAtendente));
